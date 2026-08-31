/**
 * ASV TOURS — Netlify Function (single catch-all API)
 *
 * Handles all /api/* routes using /tmp file storage.
 * Replaces the Express+SQLite backend for Netlify serverless deployment.
 *
 * Storage: /tmp/asvtours-data.json (persists within warm function instances)
 * On cold start: re-seeds from bundled seed-data.js if file doesn't exist.
 *
 * Routes are matched by parsing event.path after the redirect from /api/* → /.netlify/functions/api/*
 */
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { USERS, SETTINGS, DESTINATIONS, PACKAGES, OFFERS } = require("./seed-data");

const JWT_SECRET = process.env.JWT_SECRET || "asvtours-fallback-secret-change-me";
const DB_PATH = path.join("/tmp", "asvtours-data.json");

// ═══════════════════════════════════════════════════════════════
// FILE-BASED STORAGE
// ═══════════════════════════════════════════════════════════════
let _cache = null;

function loadDB() {
  if (_cache) return _cache;
  try {
    if (fs.existsSync(DB_PATH)) {
      const raw = fs.readFileSync(DB_PATH, "utf8");
      _cache = JSON.parse(raw);
      return _cache;
    }
  } catch (e) {
    console.error("Failed to load DB from disk:", e.message);
  }
  return null;
}

function saveDB(data) {
  _cache = data;
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data), "utf8");
  } catch (e) {
    console.error("Failed to save DB to disk:", e.message);
  }
}

function getAll(key) {
  const db = loadDB();
  return db ? (db[key] || []) : [];
}

function getObj(key) {
  const db = loadDB();
  return db ? (db[key] || {}) : {};
}

function setAll(key, items) {
  const db = loadDB() || {};
  db[key] = items;
  saveDB(db);
}

function setObj(key, obj) {
  const db = loadDB() || {};
  db[key] = obj;
  saveDB(db);
}

// ═══════════════════════════════════════════════════════════════
// SEED ON FIRST COLD START
// ═══════════════════════════════════════════════════════════════
function seedIfNeeded() {
  const existing = loadDB();
  if (existing && existing.packages && existing.packages.length > 0) return;

  const data = {
    packages: PACKAGES,
    destinations: DESTINATIONS,
    users: USERS,
    settings: SETTINGS,
    offers: OFFERS,
    enquiries: [],
  };
  saveDB(data);
  console.log("Database seeded with initial data.");
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

// ═══════════════════════════════════════════════════════════════
// MAIN HANDLER — wrapped in try/catch to ALWAYS return JSON
// ═══════════════════════════════════════════════════════════════
exports.handler = async (event, context) => {
  try {
    // CORS preflight
    if (event.httpMethod === "OPTIONS") {
      return { statusCode: 200, headers: corsHeaders(), body: "" };
    }

    // Seed on first invocation
    seedIfNeeded();

    // Parse the API route from the redirected path
    const apiBase = "/.netlify/functions/api";
    let route = "/";
    if (event.path.startsWith(apiBase)) {
      route = event.path.slice(apiBase.length) || "/";
    }
    if (route.startsWith("/api/")) route = route.slice(4);
    else if (route === "/api") route = "/";

    const method = event.httpMethod;
    const body = parseBody(event);
    const user = verifyToken(event);

    // ─── AUTH ───
    if (route === "/auth/login" && method === "POST") {
      const { email, password } = body;
      if (!email || !password) return err(400, "Email and password required.");
      const users = getAll("users");
      const found = users.find((u) => u.email === email);
      if (!found) return err(401, "Invalid credentials.");
      const valid = bcrypt.compareSync(password, found.password);
      if (!valid) return err(401, "Invalid credentials.");
      const token = jwt.sign({ id: found.id, email: found.email, role: found.role }, JWT_SECRET, { expiresIn: "24h" });
      return ok({ token, user: { id: found.id, name: found.name, email: found.email, role: found.role } });
    }

    if (route === "/auth/me" && method === "GET") {
      if (!user) return err(401, "Unauthorized.");
      const users = getAll("users");
      const found = users.find((u) => u.id === user.id);
      if (!found) return err(404, "User not found.");
      return ok({ id: found.id, name: found.name, email: found.email, role: found.role });
    }

    // ─── PUBLIC PACKAGES ───
    if (route === "/packages" && method === "GET") {
      const all = getAll("packages");
      return ok(all.filter((p) => p.is_active === 1).sort((a, b) => a.price - b.price));
    }

    const pkgSlug = route.match(/^\/packages\/([^/]+)$/);
    if (pkgSlug && method === "GET") {
      const all = getAll("packages");
      const found = all.find((p) => p.slug === pkgSlug[1] && p.is_active === 1);
      if (!found) return err(404, "Package not found.");
      return ok(found);
    }

    // ─── PUBLIC DESTINATIONS ───
    if (route === "/destinations" && method === "GET") {
      return ok(getAll("destinations").filter((d) => d.is_active === 1).sort((a, b) => a.price - b.price));
    }

    // ─── PUBLIC OFFERS ───
    if (route === "/offers" && method === "GET") {
      const all = getAll("offers");
      const packages = getAll("packages");
      return ok(all.filter((o) => o.is_active === 1).map((o) => {
        const pkg = packages.find((p) => p.id === o.package_id);
        return { ...o, package_name: pkg ? pkg.name : null, package_slug: pkg ? pkg.slug : null };
      }).sort((a, b) => a.offer_price - b.offer_price));
    }

    // ─── PUBLIC SETTINGS ───
    if (route === "/settings" && method === "GET") {
      return ok(getObj("settings"));
    }

    // ─── PUBLIC ENQUIRY ───
    if (route === "/enquiries" && method === "POST") {
      const { full_name, phone, email, destination, category, travel_date, travellers, trip_type, budget, message } = body;
      if (!full_name) return err(400, "Name is required.");
      const enquiries = getAll("enquiries");
      const maxId = enquiries.reduce((max, e) => Math.max(max, e.id || 0), 0);
      const enquiry = {
        id: maxId + 1, full_name, phone: phone || "", email: email || "",
        destination: destination || "", category: category || "",
        travel_date: travel_date || "", travellers: travellers || 1,
        trip_type: trip_type || "", budget: budget || "", message: message || "",
        status: "new", created_at: new Date().toISOString(),
      };
      enquiries.push(enquiry);
      setAll("enquiries", enquiries);
      return ok({ id: enquiry.id, message: "Enquiry submitted successfully. We will contact you within 24 hours." });
    }

    // ─── ADMIN: require auth for everything below ───
    if (!user) return err(401, "Access denied. No token provided.");

    // ─── ADMIN PACKAGES ───
    if (route === "/admin/packages" && method === "GET") {
      return ok(getAll("packages").sort((a, b) => a.price - b.price));
    }

    if (route === "/admin/packages" && method === "POST") {
      const { name, slug, category, title, country, where: w, image_url, duration, duration_nights, group_size, difficulty, best_season, starting_location, price, offer_price, short_desc, intro, about, highlights, itinerary, accommodation, included, not_included } = body;
      if (!name || !slug || !category || !price) return err(400, "Name, slug, category, and price are required.");
      const all = getAll("packages");
      if (all.find((p) => p.slug === slug)) return err(400, "A package with this slug already exists.");
      const maxId = all.reduce((m, p) => Math.max(m, p.id || 0), 0);
      const pkg = {
        id: maxId + 1, name, slug, category, title: title || name, country: country || "",
        where: w || "", image_url: image_url || "", duration: duration || "",
        duration_nights: duration_nights || 0, group_size: group_size || "Max 8",
        difficulty: difficulty || "Easy", best_season: best_season || "",
        starting_location: starting_location || "", price, offer_price: offer_price || null,
        short_desc: short_desc || "", intro: intro || "",
        about: about || [], highlights: highlights || [], itinerary: itinerary || [],
        accommodation: accommodation || [], included: included || [], not_included: not_included || [],
        is_active: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
      };
      all.push(pkg);
      setAll("packages", all);
      return ok({ id: pkg.id, message: "Package created successfully." });
    }

    const pkgUpdate = route.match(/^\/admin\/packages\/(\d+)$/);
    if (pkgUpdate && method === "PUT") {
      const id = parseInt(pkgUpdate[1]);
      const all = getAll("packages");
      const idx = all.findIndex((p) => p.id === id);
      if (idx === -1) return err(404, "Package not found.");
      const allowed = ['name', 'slug', 'category', 'title', 'country', 'where', 'image_url', 'duration', 'duration_nights', 'group_size', 'difficulty', 'best_season', 'starting_location', 'price', 'offer_price', 'short_desc', 'intro', 'about', 'highlights', 'itinerary', 'accommodation', 'included', 'not_included', 'is_active'];
      for (const f of allowed) { if (body[f] !== undefined) all[idx][f] = body[f]; }
      all[idx].updated_at = new Date().toISOString();
      setAll("packages", all);
      return ok({ message: "Package updated successfully." });
    }

    if (pkgUpdate && method === "DELETE") {
      const id = parseInt(pkgUpdate[1]);
      const all = getAll("packages");
      const filtered = all.filter((p) => p.id !== id);
      if (filtered.length === all.length) return err(404, "Package not found.");
      setAll("packages", filtered);
      return ok({ message: "Package deleted successfully." });
    }

    // ─── ADMIN DESTINATIONS ───
    if (route === "/admin/destinations" && method === "GET") {
      return ok(getAll("destinations").sort((a, b) => (a.category > b.category ? 1 : -1)));
    }

    if (route === "/admin/destinations" && method === "POST") {
      const { name, slug, category, country, image_url, short_desc, price, offer_price, duration, is_active } = body;
      if (!name || !slug || !category || !price) return err(400, "Name, slug, category, and price are required.");
      const all = getAll("destinations");
      if (all.find((d) => d.slug === slug)) return err(400, "Slug already exists.");
      const maxId = all.reduce((m, d) => Math.max(m, d.id || 0), 0);
      const dest = { id: maxId + 1, name, slug, category, country: country || "", image_url: image_url || "", short_desc: short_desc || "", price, offer_price: offer_price || null, duration: duration || "", is_active: is_active !== undefined ? is_active : 1 };
      all.push(dest);
      setAll("destinations", all);
      return ok({ id: dest.id, message: "Destination created." });
    }

    const destMatch = route.match(/^\/admin\/destinations\/(\d+)$/);
    if (destMatch && method === "PUT") {
      const id = parseInt(destMatch[1]);
      const all = getAll("destinations");
      const idx = all.findIndex((d) => d.id === id);
      if (idx === -1) return err(404, "Destination not found.");
      const allowed = ['name', 'slug', 'category', 'country', 'image_url', 'short_desc', 'price', 'offer_price', 'duration', 'is_active'];
      for (const f of allowed) { if (body[f] !== undefined) all[idx][f] = body[f]; }
      all[idx].updated_at = new Date().toISOString();
      setAll("destinations", all);
      return ok({ message: "Destination updated." });
    }

    if (destMatch && method === "DELETE") {
      const id = parseInt(destMatch[1]);
      const all = getAll("destinations");
      const filtered = all.filter((d) => d.id !== id);
      if (filtered.length === all.length) return err(404, "Not found.");
      setAll("destinations", filtered);
      return ok({ message: "Destination deleted." });
    }

    // ─── ADMIN OFFERS ───
    if (route === "/admin/offers" && method === "GET") {
      const all = getAll("offers");
      const packages = getAll("packages");
      return ok(all.map((o) => {
        const pkg = packages.find((p) => p.id === o.package_id);
        return { ...o, package_name: pkg ? pkg.name : null, package_slug: pkg ? pkg.slug : null };
      }).sort((a, b) => (b.id || 0) - (a.id || 0)));
    }

    if (route === "/admin/offers" && method === "POST") {
      const { title, package_id, original_price, offer_price, offer_text, start_date, end_date, is_active } = body;
      if (!title || !offer_price) return err(400, "Title and offer price are required.");
      const all = getAll("offers");
      const maxId = all.reduce((m, o) => Math.max(m, o.id || 0), 0);
      const offer = { id: maxId + 1, title, package_id: package_id || null, original_price: original_price || null, offer_price, offer_text: offer_text || "", start_date: start_date || null, end_date: end_date || null, is_active: is_active !== undefined ? is_active : 1 };
      all.push(offer);
      setAll("offers", all);
      return ok({ id: offer.id, message: "Offer created." });
    }

    const offerMatch = route.match(/^\/admin\/offers\/(\d+)$/);
    if (offerMatch && method === "PUT") {
      const id = parseInt(offerMatch[1]);
      const all = getAll("offers");
      const idx = all.findIndex((o) => o.id === id);
      if (idx === -1) return err(404, "Offer not found.");
      const allowed = ['title', 'package_id', 'original_price', 'offer_price', 'offer_text', 'start_date', 'end_date', 'is_active'];
      for (const f of allowed) { if (body[f] !== undefined) all[idx][f] = body[f]; }
      all[idx].updated_at = new Date().toISOString();
      setAll("offers", all);
      return ok({ message: "Offer updated." });
    }

    if (offerMatch && method === "DELETE") {
      const id = parseInt(offerMatch[1]);
      const all = getAll("offers");
      const filtered = all.filter((o) => o.id !== id);
      if (filtered.length === all.length) return err(404, "Not found.");
      setAll("offers", filtered);
      return ok({ message: "Offer deleted." });
    }

    // ─── ADMIN ENQUIRIES ───
    if (route === "/admin/enquiries" && method === "GET") {
      return ok(getAll("enquiries").sort((a, b) => (b.id || 0) - (a.id || 0)));
    }

    const enquiryMatch = route.match(/^\/admin\/enquiries\/(\d+)$/);
    if (enquiryMatch && method === "PUT") {
      const id = parseInt(enquiryMatch[1]);
      const all = getAll("enquiries");
      const idx = all.findIndex((e) => e.id === id);
      if (idx === -1) return err(404, "Enquiry not found.");
      if (body.status) all[idx].status = body.status;
      all[idx].updated_at = new Date().toISOString();
      setAll("enquiries", all);
      return ok({ message: "Enquiry updated." });
    }

    // ─── ADMIN STATS ───
    if (route === "/admin/stats" && method === "GET") {
      const packages = getAll("packages");
      const destinations = getAll("destinations");
      const offers = getAll("offers");
      const enquiries = getAll("enquiries");
      return ok({
        totalPackages: packages.length,
        activePackages: packages.filter((p) => p.is_active === 1).length,
        activeOffers: offers.filter((o) => o.is_active === 1).length,
        totalEnquiries: enquiries.length,
        newEnquiries: enquiries.filter((e) => e.status === "new").length,
        totalDestinations: destinations.length,
      });
    }

    // ─── ADMIN SETTINGS ───
    if (route === "/admin/settings" && method === "PUT") {
      const settings = getObj("settings");
      Object.assign(settings, body);
      setObj("settings", settings);
      return ok({ message: "Settings updated." });
    }

    // ─── 404 ───
    return err(404, "API endpoint not found.");
  } catch (e) {
    // ALWAYS return JSON — never crash with an unhandled error
    console.error("Function error:", e.message, e.stack);
    return err(500, "Internal server error: " + e.message);
  }
};
