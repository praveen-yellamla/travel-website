/**
 * ASV TOURS — Netlify Function (single catch-all API)
 *
 * Handles all /api/* routes using @netlify/blobs for persistent storage.
 * Replaces the Express+SQLite backend for Netlify serverless deployment.
 *
 * Routes are matched by parsing event.path after the redirect from /api/* → /.netlify/functions/api/*
 */
const { getStore } = require("@netlify/blobs");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { USERS, SETTINGS, DESTINATIONS, PACKAGES, OFFERS } = require("./seed-data");

const JWT_SECRET = process.env.JWT_SECRET || "asvtours-fallback-secret-change-me";
const STORE_NAME = "asvtours";

// ═══════════════════════════════════════════════════════════════
// CORS HEADERS
// ═══════════════════════════════════════════════════════════════
function cors() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Content-Type": "application/json",
  };
}

function json(statusCode, data) {
  return { statusCode, headers: cors(), body: JSON.stringify(data) };
}

// ═══════════════════════════════════════════════════════════════
// BLOB STORAGE HELPERS
// ═══════════════════════════════════════════════════════════════
async function getAll(store, key) {
  return (await store.getJSON(key)) || [];
}

async function getObj(store, key) {
  return (await store.getJSON(key)) || {};
}

async function setAll(store, key, items) {
  await store.setJSON(key, items);
}

// ═══════════════════════════════════════════════════════════════
// SEED ON FIRST COLD START
// ═══════════════════════════════════════════════════════════════
async function seedIfNeeded(store) {
  const existing = await store.getJSON("packages");
  if (existing && existing.length > 0) return;

  await store.setJSON("packages", PACKAGES);
  await store.setJSON("destinations", DESTINATIONS);
  await store.setJSON("users", USERS);
  await store.setJSON("settings", SETTINGS);
  await store.setJSON("offers", OFFERS);
  await store.setJSON("enquiries", []);
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

// ═══════════════════════════════════════════════════════════════
// REQUEST BODY PARSER
// ═══════════════════════════════════════════════════════════════
function parseBody(event) {
  if (!event.body) return {};
  try { return JSON.parse(event.body); } catch { return {}; }
}

// ═══════════════════════════════════════════════════════════════
// MAIN HANDLER
// ═══════════════════════════════════════════════════════════════
exports.handler = async (event, context) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: cors(), body: "" };
  }

  const store = getStore({ name: STORE_NAME });
  await seedIfNeeded(store);

  // Parse the API route from the redirected path
  // Netlify rewrites /api/packages → /.netlify/functions/api/packages
  const apiBase = "/.netlify/functions/api";
  let route = "/";
  if (event.path.startsWith(apiBase)) {
    route = event.path.slice(apiBase.length) || "/";
  }
  // Also handle if redirect passes the original /api/ path
  if (route.startsWith("/api/")) {
    route = route.slice(4); // remove /api
  } else if (route === "/api") {
    route = "/";
  }

  const method = event.httpMethod;
  const body = parseBody(event);
  const user = verifyToken(event);

  // ───────────────────────────────────────────────────────────
  // AUTH ROUTES
  // ───────────────────────────────────────────────────────────

  // POST /auth/login
  if (route === "/auth/login" && method === "POST") {
    const { email, password } = body;
    if (!email || !password) return json(400, { error: "Email and password required." });

    const users = await getAll(store, "users");
    const found = users.find((u) => u.email === email);
    if (!found) return json(401, { error: "Invalid credentials." });

    const valid = bcrypt.compareSync(password, found.password);
    if (!valid) return json(401, { error: "Invalid credentials." });

    const token = jwt.sign({ id: found.id, email: found.email, role: found.role }, JWT_SECRET, { expiresIn: "24h" });
    return json(200, { token, user: { id: found.id, name: found.name, email: found.email, role: found.role } });
  }

  // GET /auth/me
  if (route === "/auth/me" && method === "GET") {
    if (!user) return json(401, { error: "Unauthorized." });
    const users = await getAll(store, "users");
    const found = users.find((u) => u.id === user.id);
    if (!found) return json(404, { error: "User not found." });
    return json(200, { id: found.id, name: found.name, email: found.email, role: found.role });
  }

  // ───────────────────────────────────────────────────────────
  // PUBLIC PACKAGE ROUTES
  // ───────────────────────────────────────────────────────────

  // GET /packages — list active
  if (route === "/packages" && method === "GET") {
    const all = await getAll(store, "packages");
    const active = all.filter((p) => p.is_active === 1).sort((a, b) => a.price - b.price);
    return json(200, active);
  }

  // GET /packages/:slug — single package
  const pkgSlugMatch = route.match(/^\/packages\/([^/]+)$/);
  if (pkgSlugMatch && method === "GET") {
    const all = await getAll(store, "packages");
    const found = all.find((p) => p.slug === pkgSlugMatch[1] && p.is_active === 1);
    if (!found) return json(404, { error: "Package not found." });
    return json(200, found);
  }

  // ───────────────────────────────────────────────────────────
  // PUBLIC DESTINATION ROUTES
  // ───────────────────────────────────────────────────────────

  // GET /destinations — list active
  if (route === "/destinations" && method === "GET") {
    const all = await getAll(store, "destinations");
    const active = all.filter((d) => d.is_active === 1).sort((a, b) => a.price - b.price);
    return json(200, active);
  }

  // ───────────────────────────────────────────────────────────
  // PUBLIC OFFERS ROUTES
  // ───────────────────────────────────────────────────────────

  // GET /offers — list active
  if (route === "/offers" && method === "GET") {
    const all = await getAll(store, "offers");
    const packages = await getAll(store, "packages");
    const active = all
      .filter((o) => o.is_active === 1)
      .map((o) => {
        const pkg = packages.find((p) => p.id === o.package_id);
        return { ...o, package_name: pkg ? pkg.name : null, package_slug: pkg ? pkg.slug : null };
      })
      .sort((a, b) => a.offer_price - b.offer_price);
    return json(200, active);
  }

  // ───────────────────────────────────────────────────────────
  // PUBLIC SETTINGS
  // ───────────────────────────────────────────────────────────

  // GET /settings
  if (route === "/settings" && method === "GET") {
    const settings = await getObj(store, "settings");
    return json(200, settings);
  }

  // ───────────────────────────────────────────────────────────
  // PUBLIC ENQUIRY SUBMISSION
  // ───────────────────────────────────────────────────────────

  // POST /enquiries
  if (route === "/enquiries" && method === "POST") {
    const { full_name, phone, email, destination, category, travel_date, travellers, trip_type, budget, message } = body;
    if (!full_name) return json(400, { error: "Name is required." });

    const enquiries = await getAll(store, "enquiries");
    const maxId = enquiries.reduce((max, e) => Math.max(max, e.id || 0), 0);
    const enquiry = {
      id: maxId + 1,
      full_name, phone: phone || "", email: email || "", destination: destination || "",
      category: category || "", travel_date: travel_date || "", travellers: travellers || 1,
      trip_type: trip_type || "", budget: budget || "", message: message || "",
      status: "new", created_at: new Date().toISOString()
    };
    enquiries.push(enquiry);
    await setAll(store, "enquiries", enquiries);
    return json(200, { id: enquiry.id, message: "Enquiry submitted successfully. We will contact you within 24 hours." });
  }

  // ───────────────────────────────────────────────────────────
  // ADMIN-ONLY ROUTES (require valid JWT)
  // ───────────────────────────────────────────────────────────
  if (!user) return json(401, { error: "Access denied. No token provided." });

  // ─── ADMIN PACKAGES ───

  // GET /admin/packages — all packages including inactive
  if (route === "/admin/packages" && method === "GET") {
    const all = await getAll(store, "packages");
    return json(200, all.sort((a, b) => a.price - b.price));
  }

  // POST /admin/packages — create
  if (route === "/admin/packages" && method === "POST") {
    const { name, slug, category, title, country, where: w, image_url, duration, duration_nights, group_size, difficulty, best_season, starting_location, price, offer_price, short_desc, intro, about, highlights, itinerary, accommodation, included, not_included } = body;
    if (!name || !slug || !category || !price) return json(400, { error: "Name, slug, category, and price are required." });

    const all = await getAll(store, "packages");
    if (all.find((p) => p.slug === slug)) return json(400, { error: "A package with this slug already exists." });

    const maxId = all.reduce((max, p) => Math.max(max, p.id || 0), 0);
    const pkg = {
      id: maxId + 1, name, slug, category, title: title || name, country: country || "",
      where: w || "", image_url: image_url || "", duration: duration || "",
      duration_nights: duration_nights || 0, group_size: group_size || "Max 8",
      difficulty: difficulty || "Easy", best_season: best_season || "",
      starting_location: starting_location || "", price, offer_price: offer_price || null,
      short_desc: short_desc || "", intro: intro || "",
      about: about || [], highlights: highlights || [], itinerary: itinerary || [],
      accommodation: accommodation || [], included: included || [], not_included: not_included || [],
      is_active: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString()
    };
    all.push(pkg);
    await setAll(store, "packages", all);
    return json(200, { id: pkg.id, message: "Package created successfully." });
  }

  // PUT /admin/packages/:id — update
  const pkgUpdateMatch = route.match(/^\/admin\/packages\/(\d+)$/);
  if (pkgUpdateMatch && method === "PUT") {
    const id = parseInt(pkgUpdateMatch[1]);
    const all = await getAll(store, "packages");
    const index = all.findIndex((p) => p.id === id);
    if (index === -1) return json(404, { error: "Package not found." });

    const allowed = ['name', 'slug', 'category', 'title', 'country', 'where', 'image_url', 'duration', 'duration_nights', 'group_size', 'difficulty', 'best_season', 'starting_location', 'price', 'offer_price', 'short_desc', 'intro', 'about', 'highlights', 'itinerary', 'accommodation', 'included', 'not_included', 'is_active'];
    for (const field of allowed) {
      if (body[field] !== undefined) all[index][field] = body[field];
    }
    all[index].updated_at = new Date().toISOString();
    await setAll(store, "packages", all);
    return json(200, { message: "Package updated successfully." });
  }

  // DELETE /admin/packages/:id
  if (pkgUpdateMatch && method === "DELETE") {
    const id = parseInt(pkgUpdateMatch[1]);
    const all = await getAll(store, "packages");
    const filtered = all.filter((p) => p.id !== id);
    if (filtered.length === all.length) return json(404, { error: "Package not found." });
    await setAll(store, "packages", filtered);
    return json(200, { message: "Package deleted successfully." });
  }

  // ─── ADMIN DESTINATIONS ───

  // GET /admin/destinations
  if (route === "/admin/destinations" && method === "GET") {
    const all = await getAll(store, "destinations");
    return json(200, all.sort((a, b) => (a.category > b.category ? 1 : -1)));
  }

  // POST /admin/destinations
  if (route === "/admin/destinations" && method === "POST") {
    const { name, slug, category, country, image_url, short_desc, price, offer_price, duration, is_active } = body;
    if (!name || !slug || !category || !price) return json(400, { error: "Name, slug, category, and price are required." });

    const all = await getAll(store, "destinations");
    if (all.find((d) => d.slug === slug)) return json(400, { error: "Slug already exists." });

    const maxId = all.reduce((max, d) => Math.max(max, d.id || 0), 0);
    const dest = { id: maxId + 1, name, slug, category, country: country || "", image_url: image_url || "", short_desc: short_desc || "", price, offer_price: offer_price || null, duration: duration || "", is_active: is_active !== undefined ? is_active : 1 };
    all.push(dest);
    await setAll(store, "destinations", all);
    return json(200, { id: dest.id, message: "Destination created." });
  }

  // PUT /admin/destinations/:id
  const destMatch = route.match(/^\/admin\/destinations\/(\d+)$/);
  if (destMatch && method === "PUT") {
    const id = parseInt(destMatch[1]);
    const all = await getAll(store, "destinations");
    const index = all.findIndex((d) => d.id === id);
    if (index === -1) return json(404, { error: "Destination not found." });

    const allowed = ['name', 'slug', 'category', 'country', 'image_url', 'short_desc', 'price', 'offer_price', 'duration', 'is_active'];
    for (const field of allowed) {
      if (body[field] !== undefined) all[index][field] = body[field];
    }
    all[index].updated_at = new Date().toISOString();
    await setAll(store, "destinations", all);
    return json(200, { message: "Destination updated." });
  }

  // DELETE /admin/destinations/:id
  if (destMatch && method === "DELETE") {
    const id = parseInt(destMatch[1]);
    const all = await getAll(store, "destinations");
    const filtered = all.filter((d) => d.id !== id);
    if (filtered.length === all.length) return json(404, { error: "Not found." });
    await setAll(store, "destinations", filtered);
    return json(200, { message: "Destination deleted." });
  }

  // ─── ADMIN OFFERS ───

  // GET /admin/offers
  if (route === "/admin/offers" && method === "GET") {
    const all = await getAll(store, "offers");
    const packages = await getAll(store, "packages");
    const enriched = all.map((o) => {
      const pkg = packages.find((p) => p.id === o.package_id);
      return { ...o, package_name: pkg ? pkg.name : null, package_slug: pkg ? pkg.slug : null };
    });
    return json(200, enriched.sort((a, b) => (b.id || 0) - (a.id || 0)));
  }

  // POST /admin/offers
  if (route === "/admin/offers" && method === "POST") {
    const { title, package_id, original_price, offer_price, offer_text, start_date, end_date, is_active } = body;
    if (!title || !offer_price) return json(400, { error: "Title and offer price are required." });

    const all = await getAll(store, "offers");
    const maxId = all.reduce((max, o) => Math.max(max, o.id || 0), 0);
    const offer = { id: maxId + 1, title, package_id: package_id || null, original_price: original_price || null, offer_price, offer_text: offer_text || "", start_date: start_date || null, end_date: end_date || null, is_active: is_active !== undefined ? is_active : 1 };
    all.push(offer);
    await setAll(store, "offers", all);
    return json(200, { id: offer.id, message: "Offer created." });
  }

  // PUT /admin/offers/:id
  const offerMatch = route.match(/^\/admin\/offers\/(\d+)$/);
  if (offerMatch && method === "PUT") {
    const id = parseInt(offerMatch[1]);
    const all = await getAll(store, "offers");
    const index = all.findIndex((o) => o.id === id);
    if (index === -1) return json(404, { error: "Offer not found." });

    const allowed = ['title', 'package_id', 'original_price', 'offer_price', 'offer_text', 'start_date', 'end_date', 'is_active'];
    for (const field of allowed) {
      if (body[field] !== undefined) all[index][field] = body[field];
    }
    all[index].updated_at = new Date().toISOString();
    await setAll(store, "offers", all);
    return json(200, { message: "Offer updated." });
  }

  // DELETE /admin/offers/:id
  if (offerMatch && method === "DELETE") {
    const id = parseInt(offerMatch[1]);
    const all = await getAll(store, "offers");
    const filtered = all.filter((o) => o.id !== id);
    if (filtered.length === all.length) return json(404, { error: "Not found." });
    await setAll(store, "offers", filtered);
    return json(200, { message: "Offer deleted." });
  }

  // ─── ADMIN ENQUIRIES ───

  // GET /admin/enquiries
  if (route === "/admin/enquiries" && method === "GET") {
    const all = await getAll(store, "enquiries");
    return json(200, all.sort((a, b) => (b.id || 0) - (a.id || 0)));
  }

  // PUT /admin/enquiries/:id
  const enquiryMatch = route.match(/^\/admin\/enquiries\/(\d+)$/);
  if (enquiryMatch && method === "PUT") {
    const id = parseInt(enquiryMatch[1]);
    const all = await getAll(store, "enquiries");
    const index = all.findIndex((e) => e.id === id);
    if (index === -1) return json(404, { error: "Enquiry not found." });

    if (body.status) all[index].status = body.status;
    all[index].updated_at = new Date().toISOString();
    await setAll(store, "enquiries", all);
    return json(200, { message: "Enquiry updated." });
  }

  // ─── ADMIN STATS ───

  // GET /admin/stats
  if (route === "/admin/stats" && method === "GET") {
    const packages = await getAll(store, "packages");
    const destinations = await getAll(store, "destinations");
    const offers = await getAll(store, "offers");
    const enquiries = await getAll(store, "enquiries");

    return json(200, {
      totalPackages: packages.length,
      activePackages: packages.filter((p) => p.is_active === 1).length,
      activeOffers: offers.filter((o) => o.is_active === 1).length,
      totalEnquiries: enquiries.length,
      newEnquiries: enquiries.filter((e) => e.status === "new").length,
      totalDestinations: destinations.length,
    });
  }

  // ─── ADMIN SETTINGS ───

  // GET /settings (already handled above for public)
  // PUT /admin/settings
  if (route === "/admin/settings" && method === "PUT") {
    const settings = await getObj(store, "settings");
    Object.assign(settings, body);
    await store.setJSON("settings", settings);
    return json(200, { message: "Settings updated." });
  }

  // ───────────────────────────────────────────────────────────
  // 404 — No route matched
  // ───────────────────────────────────────────────────────────
  return json(404, { error: "API endpoint not found.", route, method });
};
