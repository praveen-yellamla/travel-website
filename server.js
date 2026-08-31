require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const { getDb, initDb } = require('./db/database');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-me';

// ═══════════════════════════════════════════════════════════════
// MIDDLEWARE
// ═══════════════════════════════════════════════════════════════
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Serve static files (public website)
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/admin', express.static(path.join(__dirname, 'admin')));

// Serve public website CSS and JS
app.use('/styles.css', express.static(path.join(__dirname, 'styles.css')));
app.use('/script.js', express.static(path.join(__dirname, 'script.js')));

// ═══════════════════════════════════════════════════════════════
// AUTH MIDDLEWARE
// ═══════════════════════════════════════════════════════════════
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token.' });
  }
}

// ═══════════════════════════════════════════════════════════════
// AUTH API
// ═══════════════════════════════════════════════════════════════
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required.' });

  const db = getDb();
  try {
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user) return res.status(401).json({ error: 'Invalid credentials.' });

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials.' });

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
  } finally {
    db.close();
  }
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const user = db.prepare('SELECT id, name, email, role FROM users WHERE id = ?').get(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found.' });
    res.json(user);
  } finally {
    db.close();
  }
});

// ═══════════════════════════════════════════════════════════════
// PACKAGES API
// ═══════════════════════════════════════════════════════════════

// Public: Get all active packages
app.get('/api/packages', (req, res) => {
  const db = getDb();
  try {
    const packages = db.prepare('SELECT id, name, slug, category, title, country, "where", image_url, duration, duration_nights, group_size, difficulty, best_season, starting_location, price, offer_price, short_desc, intro, about, highlights, itinerary, accommodation, included, not_included FROM packages WHERE is_active = 1 ORDER BY price ASC').all();
    // Parse JSON fields
    packages.forEach(p => {
      try { p.about = JSON.parse(p.about); } catch(e) { p.about = []; }
      try { p.highlights = JSON.parse(p.highlights); } catch(e) { p.highlights = []; }
      try { p.itinerary = JSON.parse(p.itinerary); } catch(e) { p.itinerary = []; }
      try { p.accommodation = JSON.parse(p.accommodation); } catch(e) { p.accommodation = []; }
      try { p.included = JSON.parse(p.included); } catch(e) { p.included = []; }
      try { p.not_included = JSON.parse(p.not_included); } catch(e) { p.not_included = []; }
    });
    res.json(packages);
  } finally {
    db.close();
  }
});

// Public: Get single package
app.get('/api/packages/:slug', (req, res) => {
  const db = getDb();
  try {
    const pkg = db.prepare('SELECT * FROM packages WHERE slug = ? AND is_active = 1').get(req.params.slug);
    if (!pkg) return res.status(404).json({ error: 'Package not found.' });
    try { pkg.about = JSON.parse(pkg.about); } catch(e) { pkg.about = []; }
    try { pkg.highlights = JSON.parse(pkg.highlights); } catch(e) { pkg.highlights = []; }
    try { pkg.itinerary = JSON.parse(pkg.itinerary); } catch(e) { pkg.itinerary = []; }
    try { pkg.accommodation = JSON.parse(pkg.accommodation); } catch(e) { pkg.accommodation = []; }
    try { pkg.included = JSON.parse(pkg.included); } catch(e) { pkg.included = []; }
    try { pkg.not_included = JSON.parse(pkg.not_included); } catch(e) { pkg.not_included = []; }
    res.json(pkg);
  } finally {
    db.close();
  }
});

// Admin: Get all packages (including inactive)
app.get('/api/admin/packages', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const packages = db.prepare('SELECT * FROM packages ORDER BY price ASC').all();
    packages.forEach(p => {
      try { p.about = JSON.parse(p.about); } catch(e) { p.about = []; }
      try { p.highlights = JSON.parse(p.highlights); } catch(e) { p.highlights = []; }
      try { p.itinerary = JSON.parse(p.itinerary); } catch(e) { p.itinerary = []; }
      try { p.accommodation = JSON.parse(p.accommodation); } catch(e) { p.accommodation = []; }
      try { p.included = JSON.parse(p.included); } catch(e) { p.included = []; }
      try { p.not_included = JSON.parse(p.not_included); } catch(e) { pkg.not_included = []; }
    });
    res.json(packages);
  } finally {
    db.close();
  }
});

// Admin: Create package
app.post('/api/admin/packages', authenticateToken, (req, res) => {
  const { name, slug, category, title, country, where, image_url, duration, duration_nights, group_size, difficulty, best_season, starting_location, price, offer_price, short_desc, intro, about, highlights, itinerary, accommodation, included, not_included } = req.body;
  if (!name || !slug || !category || !price) {
    return res.status(400).json({ error: 'Name, slug, category, and price are required.' });
  }

  const db = getDb();
  try {
    const result = db.prepare(`
      INSERT INTO packages (name, slug, category, title, country, "where", image_url, duration, duration_nights, group_size, difficulty, best_season, starting_location, price, offer_price, short_desc, intro, about, highlights, itinerary, accommodation, included, not_included)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(name, slug, category, title || name, country || '', where || '', image_url || '', duration || '', duration_nights || 0, group_size || 'Max 8', difficulty || 'Easy', best_season || '', starting_location || '', price, offer_price || null, short_desc || '', intro || '', JSON.stringify(about || []), JSON.stringify(highlights || []), JSON.stringify(itinerary || []), JSON.stringify(accommodation || []), JSON.stringify(included || []), JSON.stringify(not_included || []));
    res.json({ id: result.lastInsertRowid, message: 'Package created successfully.' });
  } catch (err) {
    if (err.message.includes('UNIQUE')) return res.status(400).json({ error: 'A package with this slug already exists.' });
    res.status(500).json({ error: 'Failed to create package.' });
  } finally {
    db.close();
  }
});

// Admin: Update package
app.put('/api/admin/packages/:id', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const existing = db.prepare('SELECT * FROM packages WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Package not found.' });

    const fields = ['name', 'slug', 'category', 'title', 'country', 'where', 'image_url', 'duration', 'duration_nights', 'group_size', 'difficulty', 'best_season', 'starting_location', 'price', 'offer_price', 'short_desc', 'intro', 'about', 'highlights', 'itinerary', 'accommodation', 'included', 'not_included', 'is_active'];

    const updates = [];
    const values = [];

    for (const field of fields) {
      if (req.body[field] !== undefined) {
        let val = req.body[field];
        // Parse JSON fields
        if (['about', 'highlights', 'itinerary', 'accommodation', 'included', 'not_included'].includes(field)) {
          val = typeof val === 'string' ? val : JSON.stringify(val);
        }
        updates.push(`${field === 'where' ? '"where"' : field} = ?`);
        values.push(val);
      }
    }

    if (updates.length === 0) return res.status(400).json({ error: 'No fields to update.' });

    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(req.params.id);

    db.prepare(`UPDATE packages SET ${updates.join(', ')} WHERE id = ?`).run(...values);
    res.json({ message: 'Package updated successfully.' });
  } catch (err) {
    if (err.message.includes('UNIQUE')) return res.status(400).json({ error: 'A package with this slug already exists.' });
    res.status(500).json({ error: 'Failed to update package.' });
  } finally {
    db.close();
  }
});

// Admin: Delete package
app.delete('/api/admin/packages/:id', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const result = db.prepare('DELETE FROM packages WHERE id = ?').run(req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: 'Package not found.' });
    res.json({ message: 'Package deleted successfully.' });
  } finally {
    db.close();
  }
});

// ═══════════════════════════════════════════════════════════════
// DESTINATIONS API
// ═══════════════════════════════════════════════════════════════
app.get('/api/destinations', (req, res) => {
  const db = getDb();
  try {
    const dests = db.prepare('SELECT * FROM destinations WHERE is_active = 1 ORDER BY price ASC').all();
    res.json(dests);
  } finally {
    db.close();
  }
});

app.get('/api/admin/destinations', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const dests = db.prepare('SELECT * FROM destinations ORDER BY category, price ASC').all();
    res.json(dests);
  } finally {
    db.close();
  }
});

app.post('/api/admin/destinations', authenticateToken, (req, res) => {
  const { name, slug, category, country, image_url, short_desc, price, offer_price, duration, is_active } = req.body;
  if (!name || !slug || !category || !price) return res.status(400).json({ error: 'Name, slug, category, and price are required.' });

  const db = getDb();
  try {
    const result = db.prepare('INSERT INTO destinations (name, slug, category, country, image_url, short_desc, price, offer_price, duration, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').run(name, slug, category, country || '', image_url || '', short_desc || '', price, offer_price || null, duration || '', is_active !== undefined ? is_active : 1);
    res.json({ id: result.lastInsertRowid, message: 'Destination created.' });
  } catch (err) {
    if (err.message.includes('UNIQUE')) return res.status(400).json({ error: 'Slug already exists.' });
    res.status(500).json({ error: 'Failed to create destination.' });
  } finally {
    db.close();
  }
});

app.put('/api/admin/destinations/:id', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const existing = db.prepare('SELECT * FROM destinations WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Destination not found.' });

    const fields = ['name', 'slug', 'category', 'country', 'image_url', 'short_desc', 'price', 'offer_price', 'duration', 'is_active'];
    const updates = [];
    const values = [];
    for (const field of fields) {
      if (req.body[field] !== undefined) {
        updates.push(`${field} = ?`);
        values.push(req.body[field]);
      }
    }
    if (updates.length === 0) return res.status(400).json({ error: 'No fields to update.' });
    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(req.params.id);
    db.prepare(`UPDATE destinations SET ${updates.join(', ')} WHERE id = ?`).run(...values);
    res.json({ message: 'Destination updated.' });
  } finally {
    db.close();
  }
});

app.delete('/api/admin/destinations/:id', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const result = db.prepare('DELETE FROM destinations WHERE id = ?').run(req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: 'Not found.' });
    res.json({ message: 'Destination deleted.' });
  } finally {
    db.close();
  }
});

// ═══════════════════════════════════════════════════════════════
// OFFERS API
// ═══════════════════════════════════════════════════════════════
app.get('/api/offers', (req, res) => {
  const db = getDb();
  try {
    const offers = db.prepare(`
      SELECT o.*, p.name as package_name, p.slug as package_slug 
      FROM offers o 
      LEFT JOIN packages p ON o.package_id = p.id 
      WHERE o.is_active = 1 
      ORDER BY o.offer_price ASC
    `).all();
    res.json(offers);
  } finally {
    db.close();
  }
});

app.get('/api/admin/offers', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const offers = db.prepare(`
      SELECT o.*, p.name as package_name, p.slug as package_slug 
      FROM offers o 
      LEFT JOIN packages p ON o.package_id = p.id 
      ORDER BY o.created_at DESC
    `).all();
    res.json(offers);
  } finally {
    db.close();
  }
});

app.post('/api/admin/offers', authenticateToken, (req, res) => {
  const { title, package_id, original_price, offer_price, offer_text, start_date, end_date, is_active } = req.body;
  if (!title || !offer_price) return res.status(400).json({ error: 'Title and offer price are required.' });

  const db = getDb();
  try {
    const result = db.prepare('INSERT INTO offers (title, package_id, original_price, offer_price, offer_text, start_date, end_date, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').run(title, package_id || null, original_price || null, offer_price, offer_text || '', start_date || null, end_date || null, is_active !== undefined ? is_active : 1);
    res.json({ id: result.lastInsertRowid, message: 'Offer created.' });
  } finally {
    db.close();
  }
});

app.put('/api/admin/offers/:id', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const existing = db.prepare('SELECT * FROM offers WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Offer not found.' });

    const fields = ['title', 'package_id', 'original_price', 'offer_price', 'offer_text', 'start_date', 'end_date', 'is_active'];
    const updates = [];
    const values = [];
    for (const field of fields) {
      if (req.body[field] !== undefined) {
        updates.push(`${field} = ?`);
        values.push(req.body[field]);
      }
    }
    if (updates.length === 0) return res.status(400).json({ error: 'No fields to update.' });
    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(req.params.id);
    db.prepare(`UPDATE offers SET ${updates.join(', ')} WHERE id = ?`).run(...values);
    res.json({ message: 'Offer updated.' });
  } finally {
    db.close();
  }
});

app.delete('/api/admin/offers/:id', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const result = db.prepare('DELETE FROM offers WHERE id = ?').run(req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: 'Not found.' });
    res.json({ message: 'Offer deleted.' });
  } finally {
    db.close();
  }
});

// ═══════════════════════════════════════════════════════════════
// ENQUIRIES API
// ═══════════════════════════════════════════════════════════════
app.post('/api/enquiries', (req, res) => {
  const { full_name, phone, email, destination, category, travel_date, travellers, trip_type, budget, message } = req.body;
  if (!full_name) return res.status(400).json({ error: 'Name is required.' });

  const db = getDb();
  try {
    const result = db.prepare('INSERT INTO enquiries (full_name, phone, email, destination, category, travel_date, travellers, trip_type, budget, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)').run(full_name, phone || '', email || '', destination || '', category || '', travel_date || '', travellers || 1, trip_type || '', budget || '', message || '');
    res.json({ id: result.lastInsertRowid, message: 'Enquiry submitted successfully. We will contact you within 24 hours.' });
  } finally {
    db.close();
  }
});

app.get('/api/admin/enquiries/stats', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const all = db.prepare('SELECT * FROM enquiries').all();
    const statuses = {};
    all.forEach(e => { statuses[e.status] = (statuses[e.status] || 0) + 1; });
    const destinations = {};
    all.forEach(e => { if (e.destination) destinations[e.destination] = (destinations[e.destination] || 0) + 1; });
    res.json({ total: all.length, byStatus: statuses, byDestination: destinations });
  } finally {
    db.close();
  }
});

app.get('/api/admin/enquiries', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    let sql = 'SELECT * FROM enquiries WHERE 1=1';
    const params = [];
    if (req.query.search) {
      const q = '%' + req.query.search + '%';
      sql += ' AND (full_name LIKE ? OR email LIKE ? OR phone LIKE ? OR destination LIKE ? OR message LIKE ?)';
      params.push(q, q, q, q, q);
    }
    if (req.query.status && req.query.status !== 'all') {
      sql += ' AND status = ?';
      params.push(req.query.status);
    }
    if (req.query.destination && req.query.destination !== 'all') {
      sql += ' AND LOWER(destination) = LOWER(?)';
      params.push(req.query.destination);
    }
    sql += req.query.sort === 'oldest' ? ' ORDER BY created_at ASC' : ' ORDER BY created_at DESC';
    const all = db.prepare(sql).all(...params);
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
    const total = all.length;
    const totalPages = Math.ceil(total / limit);
    const start = (page - 1) * limit;
    res.json({ data: all.slice(start, start + limit), total, page, totalPages, limit });
  } finally {
    db.close();
  }
});

app.get('/api/admin/enquiries/:id', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const e = db.prepare('SELECT * FROM enquiries WHERE id = ?').get(req.params.id);
    if (!e) return res.status(404).json({ error: 'Enquiry not found.' });
    res.json(e);
  } finally {
    db.close();
  }
});

app.put('/api/admin/enquiries/:id', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const existing = db.prepare('SELECT * FROM enquiries WHERE id = ?').get(req.params.id);
    if (!existing) return res.status(404).json({ error: 'Enquiry not found.' });
    const updates = [];
    const values = [];
    if (req.body.status !== undefined) { updates.push('status = ?'); values.push(req.body.status); }
    if (req.body.notes !== undefined) { updates.push('notes = ?'); values.push(req.body.notes); }
    if (updates.length === 0) return res.status(400).json({ error: 'No fields to update.' });
    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(req.params.id);
    db.prepare(`UPDATE enquiries SET ${updates.join(', ')} WHERE id = ?`).run(...values);
    res.json({ message: 'Enquiry updated.', enquiry: db.prepare('SELECT * FROM enquiries WHERE id = ?').get(req.params.id) });
  } finally {
    db.close();
  }
});

app.delete('/api/admin/enquiries/:id', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const result = db.prepare('DELETE FROM enquiries WHERE id = ?').run(req.params.id);
    if (result.changes === 0) return res.status(404).json({ error: 'Enquiry not found.' });
    res.json({ message: 'Enquiry deleted.' });
  } finally {
    db.close();
  }
});

// ═══════════════════════════════════════════════════════════════
// SETTINGS API
// ═══════════════════════════════════════════════════════════════
app.get('/api/settings', (req, res) => {
  const db = getDb();
  try {
    const settings = db.prepare('SELECT * FROM settings').all();
    const obj = {};
    settings.forEach(s => { obj[s.key] = s.value; });
    res.json(obj);
  } finally {
    db.close();
  }
});

app.put('/api/admin/settings', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const upsert = db.prepare('INSERT OR REPLACE INTO settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)');
    const entries = Object.entries(req.body);
    const updateMany = db.transaction((items) => {
      for (const [key, value] of items) upsert.run(key, String(value));
    });
    updateMany(entries);
    res.json({ message: 'Settings updated.' });
  } finally {
    db.close();
  }
});

// ═══════════════════════════════════════════════════════════════
// DASHBOARD STATS API
// ═══════════════════════════════════════════════════════════════
app.get('/api/admin/stats', authenticateToken, (req, res) => {
  const db = getDb();
  try {
    const totalPackages = db.prepare('SELECT COUNT(*) as count FROM packages').get().count;
    const activePackages = db.prepare('SELECT COUNT(*) as count FROM packages WHERE is_active = 1').get().count;
    const activeOffers = db.prepare('SELECT COUNT(*) as count FROM offers WHERE is_active = 1').get().count;
    const totalEnquiries = db.prepare('SELECT COUNT(*) as count FROM enquiries').get().count;
    const newEnquiries = db.prepare("SELECT COUNT(*) as count FROM enquiries WHERE status = 'new'").get().count;
    const totalDestinations = db.prepare('SELECT COUNT(*) as count FROM destinations').get().count;

    res.json({ totalPackages, activePackages, activeOffers, totalEnquiries, newEnquiries, totalDestinations });
  } finally {
    db.close();
  }
});

// ═══════════════════════════════════════════════════════════════
// SERVE ADMIN PANEL
// ═══════════════════════════════════════════════════════════════
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

// ═══════════════════════════════════════════════════════════════
// SERVE PUBLIC WEBSITE (SPA fallback)
// ═══════════════════════════════════════════════════════════════
app.get('*', (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'API endpoint not found.' });
  // Serve static files if they exist
  const filePath = path.join(__dirname, req.path);
  const fs = require('fs');
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return res.sendFile(filePath);
  }
  // SPA fallback
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ═══════════════════════════════════════════════════════════════
// START SERVER
// ═══════════════════════════════════════════════════════════════
// Initialize database on startup
initDb();

app.listen(PORT, () => {
  console.log(`\n✈ ASV TOURS server running at http://localhost:${PORT}`);
  console.log(`  Admin Panel: http://localhost:${PORT}/admin`);
  console.log(`  Public Site: http://localhost:${PORT}\n`);
});
