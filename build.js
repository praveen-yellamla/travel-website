#!/usr/bin/env node
/**
 * Netlify build script — ensures DB is seeded and pages are generated.
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
  db.close();
  require('./db/seed.js');
  // Re-open after seed
  const { getDb: getDb2 } = require('./db/database');
  const db2 = getDb2();
  const c2 = db2.prepare('SELECT COUNT(*) as c FROM packages').get().c;
  console.log(`  Seeded ${c2} packages.`);
  db2.close();
}

// Verify DB is healthy
const settingsCount = db.prepare('SELECT COUNT(*) as c FROM settings').get().c;
const destCount = db.prepare('SELECT COUNT(*) as c FROM destinations').get().c;
console.log(`  Settings: ${settingsCount} entries`);
  console.log(`  Destinations: ${destCount} entries`);

db.close();
console.log('\n✅ Build complete — database is healthy.');

// Generate static pages
console.log('\n📄 Generating pages...');
require('./generate-pages.js');
