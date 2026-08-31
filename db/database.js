const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = path.join(__dirname, 'asvtours.db');

function getDb() {
  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  return db;
}

function initDb() {
  const db = getDb();

  // Users / Admins table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Destinations table
  db.exec(`
    CREATE TABLE IF NOT EXISTS destinations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      category TEXT NOT NULL CHECK(category IN ('india', 'international')),
      country TEXT,
      image_url TEXT,
      short_desc TEXT,
      price INTEGER NOT NULL,
      offer_price INTEGER,
      duration TEXT,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Packages table (full journey details)
  db.exec(`
    CREATE TABLE IF NOT EXISTS packages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      destination_id INTEGER,
      name TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      category TEXT NOT NULL CHECK(category IN ('india', 'international')),
      title TEXT,
      country TEXT,
      "where" TEXT,
      image_url TEXT,
      duration TEXT,
      duration_nights INTEGER,
      group_size TEXT,
      difficulty TEXT,
      best_season TEXT,
      starting_location TEXT,
      price INTEGER NOT NULL,
      offer_price INTEGER,
      short_desc TEXT,
      intro TEXT,
      about TEXT,
      highlights TEXT,
      itinerary TEXT,
      accommodation TEXT,
      included TEXT,
      not_included TEXT,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (destination_id) REFERENCES destinations(id)
    )
  `);

  // Offers table
  db.exec(`
    CREATE TABLE IF NOT EXISTS offers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      package_id INTEGER,
      original_price INTEGER,
      offer_price INTEGER NOT NULL,
      offer_text TEXT,
      start_date DATE,
      end_date DATE,
      is_active INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (package_id) REFERENCES packages(id)
    )
  `);

  // Enquiries table
  db.exec(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      phone TEXT,
      email TEXT,
      destination TEXT,
      category TEXT,
      travel_date TEXT,
      travellers INTEGER DEFAULT 1,
      trip_type TEXT,
      budget TEXT,
      message TEXT,
      status TEXT DEFAULT 'new',
      notes TEXT DEFAULT '',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME
    )
  `);

  // Settings table (key-value for global settings like minimum price display)
  db.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Migration: add notes and updated_at to enquiries if missing
  try { db.exec(`ALTER TABLE enquiries ADD COLUMN notes TEXT DEFAULT ''`); } catch(e) {}
  try { db.exec(`ALTER TABLE enquiries ADD COLUMN updated_at DATETIME`); } catch(e) {}

  db.close();
  console.log('Database tables created successfully.');
}

module.exports = { getDb, initDb, DB_PATH };
