#!/usr/bin/env node
/**
 * Netlify build script — ensures DB is seeded and usable.
 * If the DB already has packages, skip re-seeding.
 * If empty or missing, run the full seed.
 */
require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const { getDb, initDb } = require('./db/database');

// Ensure tables exist
initDb();

const db = getDb();

// Check if packages already exist
const count = db.prepare('SELECT COUNT(*) as c FROM packages').get().c;

if (count > 0) {
  console.log(`✅ Database already seeded with ${count} packages. Skipping seed.`);
} else {
  console.log('Database empty — running full seed...');
  // Run the original seed script
  db.close();
  require('./db/seed.js');
  process.exit(0);
}

// Verify DB is healthy
const settings = db.prepare('SELECT COUNT(*) as c FROM settings').get();
const destinations = db.prepare('SELECT COUNT(*) as c FROM destinations').get();
console.log(`  Settings: ${settings.c} entries`);
console.log(`  Destinations: ${destinations.c} entries`);

db.close();
console.log('\n✅ Build complete — database is healthy.');
