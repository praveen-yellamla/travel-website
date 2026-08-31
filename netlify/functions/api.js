/**
 * ASV TOURS — Netlify Function (single catch-all API)
 *
 * Handles all /api/* routes using Turso HTTP API for persistent storage.
 * Uses native fetch() — no native binary dependencies required.
 *
 * Environment variables required:
 *   TURSO_DATABASE_URL  — Turso database URL (e.g. libsql://xxx.turso.io)
 *   TURSO_AUTH_TOKEN    — Turso authentication token
 *   JWT_SECRET          — Secret for JWT signing (optional, has fallback)
 */
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { USERS, SETTINGS, DESTINATIONS, PACKAGES, OFFERS } = require("./seed-data");

const JWT_SECRET = process.env.JWT_SECRET || "asvtours-fallback-secret-change-me";

// ═══════════════════════════════════════════════════════════════
// TURSO HTTP API CLIENT
// ═══════════════════════════════════════════════════════════════
function tursoUrl() {
  let url = process.env.TURSO_DATABASE_URL;
  if (url && url.startsWith("libsql://")) url = url.replace("libsql://", "https://");
  return url;
}

function tursoAuth() {
  return process.env.TURSO_AUTH_TOKEN || "";
}

/**
 * Execute a single SQL statement via Turso HTTP API
 * @param {string} sql
 * @param {Array} args
 * @returns {{ rows: Array, rowsAffected: number, lastInsertRowid: number }}
 */
async function tursoExec(sql, args = []) {
  const url = `${tursoUrl()}/v2/pipeline`;
  const body = {
    requests: [
      {
        type: "execute",
        stmt: {
          sql,
          args: args.map((a) => {
            if (a === null || a === undefined) return { type: "null" };
            if (typeof a === "number") return { type: "integer", value: String(a) };
            if (typeof a === "boolean") return { type: "integer", value: a ? "1" : "0" };
            return { type: "text", value: String(a) };
          }),
        },
      },
    ],
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tursoAuth()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Turso HTTP ${res.status}: ${text}`);
  }

  const data = await res.json();
  const result = data.results?.[0];
  if (!result) throw new Error("No result from Turso");

  if (result.type === "error") throw new Error(result.response?.message || "Unknown Turso error");

  // Turso v2 response: results[0].response.result has cols, rows, affected_row_count, last_insert_rowid
  const resData = result.response?.result;
  if (!resData) throw new Error("No result data from Turso");

  const cols = resData.cols || [];
  const colNames = cols.map((c) => c.name || c);
  const rows = (resData.rows || []).map((row) => {
    const obj = {};
    colNames.forEach((col, i) => { obj[col] = row[i]?.value ?? row[i]; });
    return obj;
  });

  return {
    rows,
    rowsAffected: resData.affected_row_count || 0,
    lastInsertRowid: resData.last_insert_rowid || 0,
  };
}

/**
 * Execute multiple SQL statements (for schema creation / seeding)
 */
async function tursoExecMulti(sql) {
  const statements = sql
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const url = `${tursoUrl()}/v2/pipeline`;
  const body = {
    requests: [
      ...statements.map((sql) => ({
        type: "execute",
        stmt: { sql, args: [] },
      })),
      { type: "close" },
    ],
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${tursoAuth()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Turso HTTP ${res.status}: ${text}`);
  }

  const data = await res.json();
  // Check for errors in any result
  for (const r of data.results || []) {
    if (r.type === "error") throw new Error(r.response?.message || "Turso multi-exec error");
  }
  return data;
}

// ═══════════════════════════════════════════════════════════════
// SCHEMA + SEED
// ═══════════════════════════════════════════════════════════════
let _initialized = false;

async function initialize() {
  if (_initialized) return;

  await tursoExecMulti(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT
    );

    CREATE TABLE IF NOT EXISTS destinations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      category TEXT NOT NULL,
      country TEXT DEFAULT '',
      image_url TEXT DEFAULT '',
      short_desc TEXT DEFAULT '',
      price INTEGER DEFAULT 0,
      offer_price INTEGER,
      duration TEXT DEFAULT '',
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS packages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      category TEXT NOT NULL,
      title TEXT DEFAULT '',
      country TEXT DEFAULT '',
      "where" TEXT DEFAULT '',
      image_url TEXT DEFAULT '',
      duration TEXT DEFAULT '',
      duration_nights INTEGER DEFAULT 0,
      group_size TEXT DEFAULT 'Max 8',
      difficulty TEXT DEFAULT 'Easy',
      best_season TEXT DEFAULT '',
      starting_location TEXT DEFAULT '',
      price INTEGER DEFAULT 0,
      offer_price INTEGER,
      short_desc TEXT DEFAULT '',
      intro TEXT DEFAULT '',
      about TEXT DEFAULT '[]',
      highlights TEXT DEFAULT '[]',
      itinerary TEXT DEFAULT '[]',
      accommodation TEXT DEFAULT '[]',
      included TEXT DEFAULT '[]',
      not_included TEXT DEFAULT '[]',
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS offers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      package_id INTEGER,
      original_price INTEGER,
      offer_price INTEGER NOT NULL,
      offer_text TEXT DEFAULT '',
      start_date TEXT,
      end_date TEXT,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      phone TEXT DEFAULT '',
      email TEXT DEFAULT '',
      destination TEXT DEFAULT '',
      category TEXT DEFAULT '',
      travel_date TEXT DEFAULT '',
      travellers TEXT DEFAULT '1',
      trip_type TEXT DEFAULT '',
      budget TEXT DEFAULT '',
      message TEXT DEFAULT '',
      status TEXT DEFAULT 'new',
      notes TEXT DEFAULT '',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Seed data if tables are empty
  const pkgCount = await tursoExec("SELECT COUNT(*) as cnt FROM packages");
  if (pkgCount.rows[0]?.cnt === 0 || pkgCount.rows[0]?.cnt === "0") {
    console.log("[API] Seeding Turso database...");
    await seedDatabase();
    console.log("[API] Seeding complete.");
  }

  _initialized = true;
}

async function seedDatabase() {
  for (const u of USERS) {
    await tursoExec("INSERT OR IGNORE INTO users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)",
      [u.id, u.name, u.email, u.password, u.role]);
  }

  for (const [k, v] of Object.entries(SETTINGS)) {
    await tursoExec("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)", [k, v]);
  }

  for (const d of DESTINATIONS) {
    await tursoExec(
      "INSERT OR IGNORE INTO destinations (id, name, slug, category, country, image_url, short_desc, price, duration, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [d.id, d.name, d.slug, d.category, d.country, d.image_url, d.short_desc, d.price, d.duration, d.is_active]
    );
  }

  for (const p of PACKAGES) {
    await tursoExec(
      `INSERT OR IGNORE INTO packages (id, name, slug, category, title, country, "where", image_url, duration, duration_nights, group_size, difficulty, best_season, starting_location, price, offer_price, short_desc, intro, about, highlights, itinerary, accommodation, included, not_included, is_active)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        p.id, p.name, p.slug, p.category, p.title, p.country, p.where,
        p.image_url, p.duration, p.duration_nights, p.group_size, p.difficulty,
        p.best_season, p.starting_location, p.price, p.offer_price, p.short_desc,
        p.intro, JSON.stringify(p.about), JSON.stringify(p.highlights),
        JSON.stringify(p.itinerary), JSON.stringify(p.accommodation),
        JSON.stringify(p.included), JSON.stringify(p.not_included), p.is_active,
      ]
    );
  }

  for (const o of OFFERS) {
    await tursoExec(
      "INSERT OR IGNORE INTO offers (id, title, package_id, original_price, offer_price, offer_text, start_date, end_date, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [o.id, o.title, o.package_id, o.original_price, o.offer_price, o.offer_text, o.start_date, o.end_date, o.is_active]
    );
  }
}

// ═══════════════════════════════════════════════════════════════
// CORS + RESPONSE HELPERS
// ═══════════════════════════════════════════════════════════════
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Content-Type": "application/json",
  };
}

function ok(data) {
  return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify(data) };
}

function err(status, message) {
  return { statusCode: status, headers: corsHeaders(), body: JSON.stringify({ error: message }) };
}

// ═══════════════════════════════════════════════════════════════
// AUTH HELPERS
// ═══════════════════════════════════════════════════════════════
function verifyToken(event) {
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader) return null;
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;
  try { return jwt.verify(token, JWT_SECRET); } catch { return null; }
}

function parseBody(event) {
  if (!event.body) return {};
  try { return JSON.parse(event.body); } catch { return {}; }
}

function parseJson(val) {
  if (!val) return [];
  if (typeof val === "object") return val;
  try { return JSON.parse(val); } catch { return []; }
}

function settingsFromRows(rows) {
  const obj = {};
  rows.forEach((r) => { obj[r.key] = r.value; });
  return obj;
}

function deserializePackage(row) {
  return {
    ...row,
    about: parseJson(row.about),
    highlights: parseJson(row.highlights),
    itinerary: parseJson(row.itinerary),
    accommodation: parseJson(row.accommodation),
    included: parseJson(row.included),
    not_included: parseJson(row.not_included),
  };
}

// ═══════════════════════════════════════════════════════════════
// MAIN HANDLER
// ═══════════════════════════════════════════════════════════════
exports.handler = async (event, context) => {
  try {
    if (event.httpMethod === "OPTIONS") {
      return { statusCode: 200, headers: corsHeaders(), body: "" };
    }

    await initialize();

    let rawPath = event.path || "/";
    let route = "/";
    if (rawPath.startsWith("/.netlify/functions/api")) {
      route = rawPath.slice("/.netlify/functions/api".length) || "/";
    } else if (rawPath.startsWith("/api")) {
      route = rawPath.slice("/api".length) || "/";
    } else {
      route = rawPath;
    }
    if (route.length > 1) route = route.replace(/\/+$/, "");

    console.log(`[API] ${event.httpMethod} ${rawPath} -> route: ${route}`);

    const method = event.httpMethod;
    const body = parseBody(event);
    const user = verifyToken(event);

    // ─── AUTH ───
    if (route === "/auth/login" && method === "POST") {
      const { email, password } = body;
      if (!email || !password) return err(400, "Email and password required.");
      const r = await tursoExec("SELECT * FROM users WHERE email = ?", [email]);
      const found = r.rows[0];
      if (!found) return err(401, "Invalid credentials.");
      const valid = bcrypt.compareSync(password, found.password);
      if (!valid) return err(401, "Invalid credentials.");
      const token = jwt.sign({ id: found.id, email: found.email, role: found.role }, JWT_SECRET, { expiresIn: "24h" });
      return ok({ token, user: { id: found.id, name: found.name, email: found.email, role: found.role } });
    }

    if (route === "/auth/me" && method === "GET") {
      if (!user) return err(401, "Unauthorized.");
      const r = await tursoExec("SELECT id, name, email, role FROM users WHERE id = ?", [user.id]);
      if (r.rows.length === 0) return err(404, "User not found.");
      return ok(r.rows[0]);
    }

    // ─── PUBLIC PACKAGES ───
    if (route === "/packages" && method === "GET") {
      const r = await tursoExec("SELECT * FROM packages WHERE is_active = 1 ORDER BY price ASC");
      return ok(r.rows.map(deserializePackage));
    }

    const pkgSlug = route.match(/^\/packages\/([^/]+)$/);
    if (pkgSlug && method === "GET") {
      const r = await tursoExec("SELECT * FROM packages WHERE slug = ? AND is_active = 1", [pkgSlug[1]]);
      if (r.rows.length === 0) return err(404, "Package not found.");
      return ok(deserializePackage(r.rows[0]));
    }

    // ─── PUBLIC DESTINATIONS ───
    if (route === "/destinations" && method === "GET") {
      const r = await tursoExec("SELECT * FROM destinations WHERE is_active = 1 ORDER BY price ASC");
      return ok(r.rows);
    }

    // ─── PUBLIC OFFERS ───
    if (route === "/offers" && method === "GET") {
      const r = await tursoExec(`
        SELECT o.*, p.name as package_name, p.slug as package_slug
        FROM offers o LEFT JOIN packages p ON o.package_id = p.id
        WHERE o.is_active = 1 ORDER BY o.offer_price ASC
      `);
      return ok(r.rows);
    }

    // ─── PUBLIC SETTINGS ───
    if (route === "/settings" && method === "GET") {
      const r = await tursoExec("SELECT * FROM settings");
      return ok(settingsFromRows(r.rows));
    }

    // ─── PUBLIC ENQUIRY ───
    if (route === "/enquiries" && method === "POST") {
      const { full_name, phone, email, destination, category, travel_date, travellers, trip_type, budget, message } = body;
      if (!full_name) return err(400, "Name is required.");
      const r = await tursoExec(
        "INSERT INTO enquiries (full_name, phone, email, destination, category, travel_date, travellers, trip_type, budget, message, status, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', '')",
        [full_name, phone || "", email || "", destination || "", category || "", travel_date || "", travellers || "1", trip_type || "", budget || "", message || ""]
      );
      return ok({ id: r.lastInsertRowid, message: "Enquiry submitted successfully. We will contact you within 24 hours." });
    }

    // ─── ADMIN: require auth ───
    if (!user) return err(401, "Access denied. No token provided.");

    // ─── ADMIN PACKAGES ───
    if (route === "/admin/packages" && method === "GET") {
      const r = await tursoExec("SELECT * FROM packages ORDER BY price ASC");
      return ok(r.rows.map(deserializePackage));
    }

    if (route === "/admin/packages" && method === "POST") {
      const { name, slug, category, title, country, where: w, image_url, duration, duration_nights, group_size, difficulty, best_season, starting_location, price, offer_price, short_desc, intro, about, highlights, itinerary, accommodation, included, not_included } = body;
      if (!name || !slug || !category || !price) return err(400, "Name, slug, category, and price are required.");
      try {
        const r = await tursoExec(
          `INSERT INTO packages (name, slug, category, title, country, "where", image_url, duration, duration_nights, group_size, difficulty, best_season, starting_location, price, offer_price, short_desc, intro, about, highlights, itinerary, accommodation, included, not_included, is_active)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`,
          [name, slug, category, title || name, country || "", w || "", image_url || "", duration || "", duration_nights || 0, group_size || "Max 8", difficulty || "Easy", best_season || "", starting_location || "", price, offer_price || null, short_desc || "", intro || "", JSON.stringify(about || []), JSON.stringify(highlights || []), JSON.stringify(itinerary || []), JSON.stringify(accommodation || []), JSON.stringify(included || []), JSON.stringify(not_included || [])]
        );
        return ok({ id: r.lastInsertRowid, message: "Package created successfully." });
      } catch (e) {
        if (e.message?.includes("UNIQUE")) return err(400, "A package with this slug already exists.");
        throw e;
      }
    }

    const pkgUpdate = route.match(/^\/admin\/packages\/(\d+)$/);
    if (pkgUpdate && method === "PUT") {
      const id = parseInt(pkgUpdate[1]);
      const allowed = ['name', 'slug', 'category', 'title', 'country', 'where', 'image_url', 'duration', 'duration_nights', 'group_size', 'difficulty', 'best_season', 'starting_location', 'price', 'offer_price', 'short_desc', 'intro', 'about', 'highlights', 'itinerary', 'accommodation', 'included', 'not_included', 'is_active'];
      const sets = [];
      const args = [];
      for (const f of allowed) {
        if (body[f] !== undefined) {
          let val = body[f];
          if (["about", "highlights", "itinerary", "accommodation", "included", "not_included"].includes(f)) val = JSON.stringify(val);
          sets.push(`"${f}" = ?`);
          args.push(val);
        }
      }
      if (sets.length === 0) return err(400, "No fields to update.");
      sets.push("updated_at = CURRENT_TIMESTAMP");
      args.push(id);
      await tursoExec(`UPDATE packages SET ${sets.join(", ")} WHERE id = ?`, args);
      return ok({ message: "Package updated successfully." });
    }

    if (pkgUpdate && method === "DELETE") {
      const id = parseInt(pkgUpdate[1]);
      const r = await tursoExec("DELETE FROM packages WHERE id = ?", [id]);
      if (r.rowsAffected === 0) return err(404, "Package not found.");
      return ok({ message: "Package deleted successfully." });
    }

    // ─── ADMIN DESTINATIONS ───
    if (route === "/admin/destinations" && method === "GET") {
      const r = await tursoExec("SELECT * FROM destinations ORDER BY category ASC, name ASC");
      return ok(r.rows);
    }

    if (route === "/admin/destinations" && method === "POST") {
      const { name, slug, category, country, image_url, short_desc, price, offer_price, duration, is_active } = body;
      if (!name || !slug || !category || !price) return err(400, "Name, slug, category, and price are required.");
      try {
        const r = await tursoExec(
          "INSERT INTO destinations (name, slug, category, country, image_url, short_desc, price, offer_price, duration, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [name, slug, category, country || "", image_url || "", short_desc || "", price, offer_price || null, duration || "", is_active !== undefined ? is_active : 1]
        );
        return ok({ id: r.lastInsertRowid, message: "Destination created." });
      } catch (e) {
        if (e.message?.includes("UNIQUE")) return err(400, "Slug already exists.");
        throw e;
      }
    }

    const destMatch = route.match(/^\/admin\/destinations\/(\d+)$/);
    if (destMatch && method === "PUT") {
      const id = parseInt(destMatch[1]);
      const allowed = ['name', 'slug', 'category', 'country', 'image_url', 'short_desc', 'price', 'offer_price', 'duration', 'is_active'];
      const sets = [];
      const args = [];
      for (const f of allowed) {
        if (body[f] !== undefined) { sets.push(`"${f}" = ?`); args.push(body[f]); }
      }
      if (sets.length === 0) return err(400, "No fields to update.");
      sets.push("updated_at = CURRENT_TIMESTAMP");
      args.push(id);
      const r = await tursoExec(`UPDATE destinations SET ${sets.join(", ")} WHERE id = ?`, args);
      if (r.rowsAffected === 0) return err(404, "Destination not found.");
      return ok({ message: "Destination updated." });
    }

    if (destMatch && method === "DELETE") {
      const id = parseInt(destMatch[1]);
      const r = await tursoExec("DELETE FROM destinations WHERE id = ?", [id]);
      if (r.rowsAffected === 0) return err(404, "Not found.");
      return ok({ message: "Destination deleted." });
    }

    // ─── ADMIN OFFERS ───
    if (route === "/admin/offers" && method === "GET") {
      const r = await tursoExec("SELECT o.*, p.name as package_name, p.slug as package_slug FROM offers o LEFT JOIN packages p ON o.package_id = p.id ORDER BY o.id DESC");
      return ok(r.rows);
    }

    if (route === "/admin/offers" && method === "POST") {
      const { title, package_id, original_price, offer_price, offer_text, start_date, end_date, is_active } = body;
      if (!title || !offer_price) return err(400, "Title and offer price are required.");
      const r = await tursoExec(
        "INSERT INTO offers (title, package_id, original_price, offer_price, offer_text, start_date, end_date, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [title, package_id || null, original_price || null, offer_price, offer_text || "", start_date || null, end_date || null, is_active !== undefined ? is_active : 1]
      );
      return ok({ id: r.lastInsertRowid, message: "Offer created." });
    }

    const offerMatch = route.match(/^\/admin\/offers\/(\d+)$/);
    if (offerMatch && method === "PUT") {
      const id = parseInt(offerMatch[1]);
      const allowed = ['title', 'package_id', 'original_price', 'offer_price', 'offer_text', 'start_date', 'end_date', 'is_active'];
      const sets = [];
      const args = [];
      for (const f of allowed) {
        if (body[f] !== undefined) { sets.push(`"${f}" = ?`); args.push(body[f]); }
      }
      if (sets.length === 0) return err(400, "No fields to update.");
      sets.push("updated_at = CURRENT_TIMESTAMP");
      args.push(id);
      const r = await tursoExec(`UPDATE offers SET ${sets.join(", ")} WHERE id = ?`, args);
      if (r.rowsAffected === 0) return err(404, "Offer not found.");
      return ok({ message: "Offer updated." });
    }

    if (offerMatch && method === "DELETE") {
      const id = parseInt(offerMatch[1]);
      const r = await tursoExec("DELETE FROM offers WHERE id = ?", [id]);
      if (r.rowsAffected === 0) return err(404, "Not found.");
      return ok({ message: "Offer deleted." });
    }

    // ─── ADMIN ENQUIRIES ───
    if (route === "/admin/enquiries" && method === "GET") {
      const qs = event.queryStringParameters || {};
      let where = [];
      let args = [];

      if (qs.search) {
        const q = `%${qs.search}%`;
        where.push("(full_name LIKE ? OR email LIKE ? OR phone LIKE ? OR destination LIKE ? OR message LIKE ?)");
        args.push(q, q, q, q, q);
      }
      if (qs.status && qs.status !== "all") { where.push("status = ?"); args.push(qs.status); }
      if (qs.destination && qs.destination !== "all") { where.push("LOWER(destination) = LOWER(?)"); args.push(qs.destination); }

      const whereClause = where.length > 0 ? `WHERE ${where.join(" AND ")}` : "";
      const sortBy = qs.sort === "oldest" ? "ASC" : "DESC";
      const page = Math.max(1, parseInt(qs.page) || 1);
      const limit = Math.min(100, Math.max(1, parseInt(qs.limit) || 20));
      const offset = (page - 1) * limit;

      const countR = await tursoExec(`SELECT COUNT(*) as cnt FROM enquiries ${whereClause}`, args);
      const total = parseInt(countR.rows[0]?.cnt || 0);

      const r = await tursoExec(`SELECT * FROM enquiries ${whereClause} ORDER BY created_at ${sortBy} LIMIT ? OFFSET ?`, [...args, limit, offset]);

      return ok({ data: r.rows, total, page, totalPages: Math.ceil(total / limit), limit });
    }

    if (route === "/admin/enquiries/stats" && method === "GET") {
      const r = await tursoExec("SELECT status, destination FROM enquiries");
      const statuses = {};
      const destinations = {};
      r.rows.forEach((e) => {
        statuses[e.status] = (statuses[e.status] || 0) + 1;
        if (e.destination) destinations[e.destination] = (destinations[e.destination] || 0) + 1;
      });
      return ok({ total: r.rows.length, byStatus: statuses, byDestination: destinations });
    }

    const enquiryMatch = route.match(/^\/admin\/enquiries\/(\d+)$/);
    if (enquiryMatch && method === "GET") {
      const id = parseInt(enquiryMatch[1]);
      const r = await tursoExec("SELECT * FROM enquiries WHERE id = ?", [id]);
      if (r.rows.length === 0) return err(404, "Enquiry not found.");
      return ok(r.rows[0]);
    }
    if (enquiryMatch && method === "PUT") {
      const id = parseInt(enquiryMatch[1]);
      const sets = [];
      const args = [];
      if (body.status !== undefined) { sets.push("status = ?"); args.push(body.status); }
      if (body.notes !== undefined) { sets.push("notes = ?"); args.push(body.notes); }
      if (sets.length === 0) return err(400, "No fields to update.");
      sets.push("updated_at = CURRENT_TIMESTAMP");
      args.push(id);
      await tursoExec(`UPDATE enquiries SET ${sets.join(", ")} WHERE id = ?`, args);
      const r = await tursoExec("SELECT * FROM enquiries WHERE id = ?", [id]);
      return ok({ message: "Enquiry updated.", enquiry: r.rows[0] });
    }
    if (enquiryMatch && method === "DELETE") {
      const id = parseInt(enquiryMatch[1]);
      const r = await tursoExec("DELETE FROM enquiries WHERE id = ?", [id]);
      if (r.rowsAffected === 0) return err(404, "Enquiry not found.");
      return ok({ message: "Enquiry deleted." });
    }

    // ─── ADMIN STATS ───
    if (route === "/admin/stats" && method === "GET") {
      const [pkgs, dests, offs, enqs] = await Promise.all([
        tursoExec("SELECT COUNT(*) as total, SUM(CASE WHEN is_active=1 THEN 1 ELSE 0 END) as active FROM packages"),
        tursoExec("SELECT COUNT(*) as total FROM destinations"),
        tursoExec("SELECT COUNT(*) as total, SUM(CASE WHEN is_active=1 THEN 1 ELSE 0 END) as active FROM offers"),
        tursoExec("SELECT COUNT(*) as total, SUM(CASE WHEN status='new' THEN 1 ELSE 0 END) as new_count FROM enquiries"),
      ]);
      return ok({
        totalPackages: parseInt(pkgs.rows[0]?.total || 0),
        activePackages: parseInt(pkgs.rows[0]?.active || 0),
        activeOffers: parseInt(offs.rows[0]?.active || 0),
        totalEnquiries: parseInt(enqs.rows[0]?.total || 0),
        newEnquiries: parseInt(enqs.rows[0]?.new_count || 0),
        totalDestinations: parseInt(dests.rows[0]?.total || 0),
      });
    }

    // ─── ADMIN SETTINGS ───
    if (route === "/admin/settings" && method === "PUT") {
      for (const [k, v] of Object.entries(body)) {
        await tursoExec("INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)", [k, String(v)]);
      }
      return ok({ message: "Settings updated." });
    }

    return err(404, "API endpoint not found.");
  } catch (e) {
    console.error("Function error:", e.message, e.stack);
    return err(500, "Internal server error: " + e.message);
  }
};
