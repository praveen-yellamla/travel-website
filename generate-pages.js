#!/usr/bin/env node
/**
 * generate-pages.js
 * Generates separate HTML pages for each navigation route.
 * Shared header, footer, and styles across all pages.
 */
const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'pages');
if (!fs.existsSync(PAGES_DIR)) fs.mkdirSync(PAGES_DIR, { recursive: true });

// ── Shared head (fonts, CSS, favicon) ──
const head = `
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="ASV TOURS — Curated domestic & international tours with stays, travel and sightseeing included. Starting from ₹6,000.">
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  <link rel="stylesheet" href="/pages.css">`;

// ── Shared top bar + header ──
function headerHTML(activePage) {
  const nav = (label, href, page) =>
    `<a href="${href}" class="nav-link${activePage === page ? ' active' : ''}">${label}</a>`;

  return `
  <div class="top-bar" id="topBar">
    <div class="offer-strip">
      <div class="container offer-strip-inner">
        <span class="offer-strip-text">✈ India Getaways Starting From <strong>₹6,000</strong></span>
        <span class="offer-sep">•</span>
        <span class="offer-strip-text">Hotel + Travel + Sightseeing Included</span>
        <span class="offer-sep">•</span>
        <a href="/packages" class="offer-strip-link">Explore Packages →</a>
      </div>
    </div>
    <header class="header" id="header">
      <div class="container header-inner">
        <a href="/" class="header-brand">
          <img src="/assets/asv-tours-logo.png" alt="ASV TOURS" class="header-logo">
        </a>
        <nav class="header-nav" id="mainNav">
          ${nav('Destinations', '/destinations', 'destinations')}
          ${nav('Packages', '/packages', 'packages')}
          ${nav('Why Us', '/why-us', 'why-us')}
          ${nav('Services', '/services', 'services')}
          ${nav('Contact', '/contact', 'contact')}
        </nav>
        <a href="/plan-your-trip" class="header-cta">Plan a Trip</a>
        <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  </div>`;
}

// ── Shared footer ──
const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <img src="/assets/asv-tours-logo.png" alt="ASV TOURS" class="footer-logo">
          <p class="footer-brand-desc">Handpicked domestic & international journeys with stays, travel and sightseeing included. Planning trips across India and around the world since 2026.</p>
          <div class="footer-social">
            <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" stroke-width="1.5"/></svg></a>
            <a href="#" aria-label="WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" stroke-width="1.5"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.34z" stroke="currentColor" stroke-width="1.5"/><path d="M9.75 15.02V8.48l5.75 3.27z" fill="currentColor"/></svg></a>
          </div>
        </div>
        <div class="footer-col">
          <h6>Explore</h6>
          <ul>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/packages">Honeymoons</a></li>
            <li><a href="/packages">Family Trips</a></li>
            <li><a href="/packages">Group Travel</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h6>Services</h6>
          <ul>
            <li><a href="/services">Domestic Tours</a></li>
            <li><a href="/services">Holiday Packages</a></li>
            <li><a href="/services">Hotel Booking</a></li>
            <li><a href="/services">Transportation</a></li>
            <li><a href="/services">Custom Planning</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h6>Company</h6>
          <ul>
            <li><a href="/why-us">Why Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Privacy Policy</a></li>
            <li><a href="/contact">Cancellation</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2026 ASV TOURS — All rights reserved.</div>
        <div class="mono">CIN · U00000XX2026PTC000000 · PAN · AAAAA0000A</div>
      </div>
    </div>
  </footer>`;

// ── Mobile menu + scroll script (shared) ──
const sharedScript = `
<script>
// Header scroll effect
const topBar = document.getElementById('topBar');
if (topBar) {
  window.addEventListener('scroll', () => {
    topBar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}
// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const nav = document.getElementById('mainNav') || document.querySelector('.header-nav');
    nav?.classList.toggle('open');
    menuToggle.classList.toggle('active');
  });
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('mainNav') || document.querySelector('.header-nav');
    if (nav?.classList.contains('open') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove('open');
      menuToggle.classList.remove('active');
    }
  });
}
</script>`;

// ══════════════════════════════════════════════════════════════════════
// PAGE DEFINITIONS
// ══════════════════════════════════════════════════════════════════════

const pages = [
  // ── DESTINATIONS ──
  {
    file: 'destinations.html',
    title: 'Destinations — ASV TOURS',
    activePage: 'destinations',
    content: `
  <section class="page-hero page-hero-destinations">
    <div class="container">
      <div class="page-hero-eyebrow"><span class="dot"></span> Explore Your Next Journey</div>
      <h1 class="page-hero-title">Where will <em>you</em><br>go next?</h1>
      <p class="page-hero-sub">From the beaches of Goa to the temples of Japan — handpicked destinations across India and around the world.</p>
    </div>
  </section>

  <section class="destinations page-body-section">
    <div class="container">
      <div class="dest-type-tabs" id="destTypeTabs">
        <button class="dest-type-tab active" data-type="india">🇮🇳 India</button>
        <button class="dest-type-tab" data-type="international">🌍 International</button>
      </div>
      <div class="dest-grid" id="destGrid"></div>
      <div class="dest-disclaimer">Prices are approximate and may vary by travel date, hotel category and number of travellers. Contact us for a personalised quote.</div>
    </div>
  </section>

  <section class="final-cta">
    <div class="container final-cta-inner">
      <h2 class="final-cta-title">Can't find what you're looking for?</h2>
      <p class="final-cta-sub">Tell us your dream destination and we'll craft a personalised itinerary just for you.</p>
      <div class="final-cta-actions">
        <a href="/plan-your-trip" class="btn-primary">Plan Your Trip</a>
      </div>
    </div>
  </section>
  <script src="/script-pages.js" data-page="destinations"></script>`
  },

  // ── PACKAGES ──
  {
    file: 'packages.html',
    title: 'Packages — ASV TOURS',
    activePage: 'packages',
    content: `
  <section class="page-hero page-hero-packages">
    <div class="container">
      <div class="page-hero-eyebrow"><span class="dot"></span> Signature Packages</div>
      <h1 class="page-hero-title">Curated trips,<br><em>crafted</em> for you.</h1>
      <p class="page-hero-sub">Hotel + travel + sightseeing — everything included. Choose a destination and we handle the rest.</p>
    </div>
  </section>

  <section class="packages page-body-section">
    <div class="container">
      <div class="pkg-grid" id="pkgGrid"></div>
    </div>
  </section>

  <section class="final-cta">
    <div class="container final-cta-inner">
      <h2 class="final-cta-title">Ready to explore?</h2>
      <p class="final-cta-sub">Get a free quote from our travel experts. No commitment, no pressure — just honest options tailored to you.</p>
      <div class="final-cta-actions">
        <a href="/plan-your-trip" class="btn-primary">Plan Your Trip</a>
      </div>
    </div>
  </section>
  <script src="/script-pages.js" data-page="packages"></script>`
  },

  // ── WHY US ──
  {
    file: 'why-us.html',
    title: 'Why Us — ASV TOURS',
    activePage: 'why-us',
    content: `
  <section class="page-hero page-hero-whyus">
    <div class="container">
      <div class="page-hero-eyebrow"><span class="dot"></span> Why ASV TOURS</div>
      <h1 class="page-hero-title">Travel with <em>confidence.</em></h1>
      <p class="page-hero-sub">We design slow, considered journeys for people who'd rather remember a meal than a checklist.</p>
    </div>
  </section>

  <section class="why-us page-body-section">
    <div class="container">
      <div class="why-grid">
        <div class="why-card reveal">
          <div class="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6zM3 21v-1a4 4 0 014-4h4a4 4 0 014 4v1m6 0v-1a4 4 0 00-3-3.87"/></svg>
          </div>
          <h3>Carefully Planned Itineraries</h3>
          <p>Every trip is designed by a regional planner who has walked the route, eaten the meals, and stayed at the hotels. We don't sell templates — we design journeys.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7h18l-2 13H5L3 7zM8 7V4a4 4 0 018 0v3"/></svg>
          </div>
          <h3>Hotel + Travel + Sightseeing</h3>
          <p>All-inclusive packages with handpicked stays, transfers, and guided experiences — no hidden costs, no surprise charges, noFine print.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          </div>
          <h3>Domestic & International</h3>
          <p>From Goa to Switzerland — 20+ destinations across India and around the world. One team, one invoice, one point of contact.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20l-7-7 7-7M19 12H5"/></svg>
          </div>
          <h3>Personalised Planning</h3>
          <p>Tell us your dates, interests, and budget. We build the rest — from the first sunrise to the last train home.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
          </div>
          <h3>Dedicated Travel Assistance</h3>
          <p>A real person handles your trip from start to finish — 24/7 support on the road, no chatbots, no call centres.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>
          </div>
          <h3>Premium Experiences</h3>
          <p>Heritage stays, local cuisine, cultural encounters — every journey is designed to feel special, not touristy.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="final-cta">
    <div class="container final-cta-inner">
      <h2 class="final-cta-title">Ready to explore?</h2>
      <p class="final-cta-sub">Get a free quote from our travel experts. No commitment, no pressure — just honest options tailored to you.</p>
      <div class="final-cta-actions">
        <a href="/packages" class="btn-primary">Explore Packages</a>
        <a href="/plan-your-trip" class="btn-secondary" style="border-color:rgba(255,255,255,.35);">
          <span class="play-icon"><svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><path d="M0 0v8l8-4z"/></svg></span>
          Talk to a Travel Expert
        </a>
      </div>
    </div>
  </section>
  <script>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });
      obs.observe(el);
    });
  });
  </script>`
  },

  // ── SERVICES ──
  {
    file: 'services.html',
    title: 'Services — ASV TOURS',
    activePage: 'services',
    content: `
  <section class="page-hero page-hero-services">
    <div class="container">
      <div class="page-hero-eyebrow"><span class="dot"></span> Our Services</div>
      <h1 class="page-hero-title">A different kind<br>of <em>travel company.</em></h1>
      <p class="page-hero-sub">We don't sell tours. We design slow, considered journeys for people who'd rather remember a meal than a checklist.</p>
    </div>
  </section>

  <section class="services page-body-section">
    <div class="container">
      <div class="services-grid">
        <div class="services-featured">
          <div class="services-img">
            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80" alt="Scenic landscape">
            <div class="services-badge">
              <span class="services-badge-num">100%</span>
              <span class="services-badge-text">Custom<br>Designed</span>
            </div>
          </div>
        </div>
        <div class="services-list" id="servicesList"></div>
      </div>
    </div>
  </section>

  <section class="why-us page-body-section">
    <div class="container">
      <div class="sect-header">
        <div class="sect-num">— Our Promise</div>
        <h2 class="sect-title">What we <em>guarantee.</em></h2>
      </div>
      <div class="why-grid">
        <div class="why-card reveal">
          <div class="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Transparent Pricing</h3>
          <p>What we quote is what you pay. No hidden charges, no last-minute add-ons, no Fine print deductions.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
          </div>
          <h3>24/7 On-Trip Support</h3>
          <p>If something goes wrong on the road, a real person picks up the phone — not a bot, not a ticket system.</p>
        </div>
        <div class="why-card reveal">
          <div class="why-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a4 4 0 100 8 4 4 0 000-8zM4 22v-3a4 4 0 014-4h8a4 4 0 014 4v3"/></svg>
          </div>
          <h3>Expert Local Planners</h3>
          <p>Every destination has a specialist who knows the best hotels, restaurants, and hidden spots — not the tourist traps.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="final-cta">
    <div class="container final-cta-inner">
      <h2 class="final-cta-title">Ready to explore?</h2>
      <p class="final-cta-sub">Get a free quote from our travel experts. No commitment, no pressure — just honest options tailored to you.</p>
      <div class="final-cta-actions">
        <a href="/plan-your-trip" class="btn-primary">Plan Your Trip</a>
      </div>
    </div>
  </section>
  <script>
  // Render services list
  const servicesData = [
    { icon: '<path d="m12 2 3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Domestic Tours', desc: 'Curated journeys across India\\'s most iconic regions, planned end-to-end.' },
    { icon: '<path d="M3 7h18l-2 13H5L3 7zM8 7V4a4 4 0 018 0v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Holiday Packages', desc: 'Pre-designed itineraries for honeymoons, family breaks, and short escapes.' },
    { icon: '<path d="M3 21V8l9-5 9 5v13M9 21V12h6v9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Hotel Booking', desc: 'Hand-picked stays at our negotiated partner rates across India and abroad.' },
    { icon: '<path d="M3 17h2l1-5h12l1 5h2M5 12V8a3 3 0 013-3h8a3 3 0 013 3v4M7 17v2M17 17v2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Transportation', desc: 'Airport transfers, intercity cabs, and chauffeured cars. Trains and flights coordinated.' },
    { icon: '<path d="M9 11a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6zM3 21v-1a4 4 0 014-4h4a4 4 0 014 4v1m6 0v-1a4 4 0 00-3-3.87" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Group Tours', desc: 'Departures for friends, colleagues, and clubs — one coordinator, one invoice.' },
    { icon: '<path d="M12 20l-7-7 7-7M19 12H5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Family Tours', desc: 'Pace and comfort tuned for kids and grandparents. Nothing rushed, nothing missed.' },
    { icon: '<path d="M12 2a4 4 0 100 8 4 4 0 000-8zM4 22v-3a4 4 0 014-4h8a4 4 0 014 4v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Custom Planning', desc: 'Tell us your dates, interests, and budget. We build the rest.' }
  ];
  const sl = document.getElementById('servicesList');
  if (sl) sl.innerHTML = servicesData.map((s,i) => '<div class="service-item"><div class="service-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none">' + s.icon + '</svg></div><div><div class="service-title">' + s.title + '</div><p class="service-desc">' + s.desc + '</p></div><div class="service-num">/ 0' + (i+1) + '</div></div>').join('');
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
      }, { threshold: 0.1 });
      obs.observe(el);
    });
  });
  </script>`
  },

  // ── CONTACT ──
  {
    file: 'contact.html',
    title: 'Contact — ASV TOURS',
    activePage: 'contact',
    content: `
  <section class="page-hero page-hero-contact">
    <div class="container">
      <div class="page-hero-eyebrow"><span class="dot"></span> Get in Touch</div>
      <h1 class="page-hero-title">Tell us where<br>you'd <em>like to go.</em></h1>
      <p class="page-hero-sub">A planner will write back within 24 hours with a few honest options — no commitment, no pressure, no auto-emails.</p>
    </div>
  </section>

  <section class="contact page-body-section">
    <div class="container contact-grid">
      <div class="contact-left">
        <div class="contact-info">
          <div class="ci-item">
            <div class="ci-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <div>
              <div class="ci-label">Mail</div>
              <div class="ci-value">hello@asvtours.com</div>
            </div>
          </div>
          <div class="ci-item">
            <div class="ci-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <div>
              <div class="ci-label">Phone</div>
              <div class="ci-value">+91 90000 00000</div>
            </div>
          </div>
          <div class="ci-item">
            <div class="ci-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/></svg>
            </div>
            <div>
              <div class="ci-label">WhatsApp</div>
              <div class="ci-value">+91 90000 00000</div>
            </div>
          </div>
          <div class="ci-item">
            <div class="ci-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <div>
              <div class="ci-label">Office</div>
              <div class="ci-value">123 Example Street, Banjara Hills<br>Hyderabad – 500034, Telangana</div>
            </div>
          </div>
        </div>
      </div>
      <form class="form-card" id="contactForm">
        <div class="form-header">
          <h3>Send us a message</h3>
          <span class="form-num">/ Form 01</span>
        </div>
        <div class="form-grid">
          <div class="field">
            <label>First name</label>
            <input type="text" name="first_name" placeholder="Aanya" required>
          </div>
          <div class="field">
            <label>Last name</label>
            <input type="text" name="last_name" placeholder="Sharma" required>
          </div>
          <div class="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="aanya@example.com" required>
          </div>
          <div class="field">
            <label>Phone</label>
            <input type="tel" name="phone" placeholder="+91 98XXX 12345">
          </div>
          <div class="field full">
            <label>Message</label>
            <textarea name="message" rows="4" placeholder="Tell us about your dream trip..." required></textarea>
          </div>
        </div>
        <div class="form-footer">
          <button type="submit" class="submit-btn" id="submitBtn">
            <span>Send Message</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
          </button>
        </div>
      </form>
    </div>
  </section>
  <script>
  // Contact form submission to API
  const cf = document.getElementById('contactForm');
  if (cf) {
    cf.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      if (!btn) return;
      const span = btn.querySelector('span');
      const origText = span ? span.textContent : 'Send Message';
      btn.disabled = true;
      if (span) span.textContent = 'Sending...';
      try {
        const fd = new FormData(cf);
        const data = Object.fromEntries(fd.entries());
        const res = await fetch('/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (res.ok) {
          btn.classList.add('success');
          if (span) span.textContent = "Message sent — we'll respond within 24h";
          cf.reset();
        } else {
          const err = await res.json().catch(() => ({}));
          alert(err.error || 'Failed to send. Please try again.');
          if (span) span.textContent = origText;
        }
      } catch (err) {
        alert('Network error. Please check your connection.');
        if (span) span.textContent = origText;
      } finally {
        btn.disabled = false;
        setTimeout(() => {
          btn.classList.remove('success');
          const s = btn.querySelector('span');
          if (s) s.textContent = origText;
        }, 3500);
      }
    });
  }
  </script>`
  },

  // ── PLAN YOUR TRIP ──
  {
    file: 'plan-your-trip.html',
    title: 'Plan Your Trip — ASV TOURS',
    activePage: 'plan-your-trip',
    content: `
  <section class="enquiry-hero page-hero-planyourtrip">
    <div class="container">
      <div class="page-hero-eyebrow"><span class="dot"></span> Start Your Journey</div>
      <h1 class="page-hero-title">Plan your <em>journey.</em></h1>
      <p class="page-hero-sub">Tell us where you'd like to go and we'll craft a personalised itinerary. No commitment, no pressure — just honest options.</p>
    </div>
  </section>

  <section class="enquiry-body page-body-section">
    <div class="container">
      <div class="enquiry-grid">
        <div class="enquiry-info">
          <h2 class="enquiry-info-title">Your trip,<br><em>your way.</em></h2>
          <p class="enquiry-info-text">A dedicated travel planner will review your enquiry and respond within 24 hours with a curated set of options tailored to your interests, dates, and budget.</p>
          <div class="enquiry-info-features">
            <div class="enquiry-feature">
              <div class="enquiry-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a4 4 0 100 8 4 4 0 000-8zM4 22v-3a4 4 0 014-4h8a4 4 0 014 4v3"/></svg>
              </div>
              <div class="enquiry-feature-text">
                <h4>Personalised Itinerary</h4>
                <p>Every trip is designed around your preferences, not a template.</p>
              </div>
            </div>
            <div class="enquiry-feature">
              <div class="enquiry-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div class="enquiry-feature-text">
                <h4>24-Hour Response</h4>
                <p>A real human reads your note and writes back with honest options.</p>
              </div>
            </div>
            <div class="enquiry-feature">
              <div class="enquiry-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 7h18l-2 13H5L3 7zM8 7V4a4 4 0 018 0v3"/></svg>
              </div>
              <div class="enquiry-feature-text">
                <h4>All-Inclusive Packages</h4>
                <p>Hotel + travel + sightseeing — no hidden costs, no surprises.</p>
              </div>
            </div>
            <div class="enquiry-feature">
              <div class="enquiry-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20l-7-7 7-7M19 12H5"/></svg>
              </div>
              <div class="enquiry-feature-text">
                <h4>No Commitment</h4>
                <p>Get a free quote with no obligation to book.</p>
              </div>
            </div>
          </div>
          <div class="enquiry-img">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="Travel destination">
          </div>
        </div>

        <form class="enquiry-form-card" id="enquiryForm">
          <div class="enquiry-form-header">
            <h3>Enquiry form</h3>
            <span class="form-num">/ 01</span>
          </div>
          <div class="enquiry-form-grid">
            <div class="enquiry-field">
              <label>Full Name</label>
              <input type="text" name="full_name" placeholder="Aanya Sharma" required>
            </div>
            <div class="enquiry-field">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+91 98XXX 12345" required>
            </div>
            <div class="enquiry-field">
              <label>Email</label>
              <input type="email" name="email" placeholder="aanya@example.com" required>
            </div>
            <div class="enquiry-field">
              <label>Destination</label>
              <select name="destination">
                <option value="">I'd like recommendations</option>
                <optgroup label="India">
                  <option value="goa">Goa</option>
                  <option value="kerala">Kerala</option>
                  <option value="himachal">Himachal Pradesh</option>
                  <option value="kashmir">Kashmir</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="uttarakhand">Uttarakhand</option>
                  <option value="gujarat">Gujarat</option>
                  <option value="sikkim-darjeeling">Sikkim / Darjeeling</option>
                  <option value="andaman">Andaman</option>
                  <option value="ladakh">Ladakh</option>
                </optgroup>
                <optgroup label="International">
                  <option value="thailand">Thailand</option>
                  <option value="sri-lanka">Sri Lanka</option>
                  <option value="bali">Bali, Indonesia</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="singapore">Singapore</option>
                  <option value="dubai">Dubai, UAE</option>
                  <option value="vietnam">Vietnam</option>
                  <option value="maldives">Maldives</option>
                  <option value="japan">Japan</option>
                  <option value="switzerland">Switzerland</option>
                </optgroup>
              </select>
            </div>
            <div class="enquiry-field">
              <label>Domestic / International</label>
              <select name="trip_type">
                <option value="">Select</option>
                <option value="domestic">Domestic (India)</option>
                <option value="international">International</option>
              </select>
            </div>
            <div class="enquiry-field">
              <label>Preferred Travel Date</label>
              <input type="date" name="travel_date">
            </div>
            <div class="enquiry-field">
              <label>Number of Travellers</label>
              <input type="text" name="travellers" placeholder="e.g. 2 adults, 1 child">
            </div>
            <div class="enquiry-field">
              <label>Trip Type</label>
              <select name="trip_category">
                <option value="">Select</option>
                <option value="honeymoon">Honeymoon</option>
                <option value="family">Family Vacation</option>
                <option value="couple">Couple Getaway</option>
                <option value="group">Group Trip</option>
                <option value="solo">Solo Travel</option>
                <option value="adventure">Adventure</option>
                <option value="pilgrimage">Pilgrimage</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="enquiry-field">
              <label>Approximate Budget (per person)</label>
              <select name="budget">
                <option value="">Select</option>
                <option value="6k-15k">₹6,000 — ₹15,000</option>
                <option value="15k-30k">₹15,000 — ₹30,000</option>
                <option value="30k-60k">₹30,000 — ₹60,000</option>
                <option value="60k-1l">₹60,000 — ₹1,00,000</option>
                <option value="1l+">₹1,00,000+</option>
              </select>
            </div>
            <div class="enquiry-field full">
              <label>Additional Requirements</label>
              <textarea name="requirements" rows="4" placeholder="Any special requests, dietary needs, accessibility requirements, or places you'd like to visit..."></textarea>
            </div>
          </div>
          <button type="submit" class="enquiry-submit-btn" id="enquirySubmitBtn">
            <span>Request My Trip</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
          </button>
        </form>
      </div>
    </div>
  </section>
  <script>
  // Pre-select destination from URL params
  (function() {
    const params = new URLSearchParams(window.location.search);
    const dest = params.get('dest');
    if (dest) {
      const sel = document.querySelector('#enquiryForm select[name="destination"]');
      if (sel) sel.value = dest;
    }
  })();
  // Form submission
  const ef = document.getElementById('enquiryForm');
  if (ef) {
    ef.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('enquirySubmitBtn');
      if (!btn) return;
      const span = btn.querySelector('span');
      const origText = span ? span.textContent : 'Request My Trip';
      btn.disabled = true;
      if (span) span.textContent = 'Sending...';
      try {
        const fd = new FormData(ef);
        const data = Object.fromEntries(fd.entries());
        const res = await fetch('/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (res.ok) {
          btn.classList.add('success');
          if (span) span.textContent = "Enquiry sent — we'll respond within 24h";
          ef.reset();
        } else {
          const err = await res.json().catch(() => ({}));
          alert(err.error || 'Failed to send enquiry. Please try again.');
          if (span) span.textContent = origText;
        }
      } catch (err) {
        alert('Network error. Please check your connection.');
        if (span) span.textContent = origText;
      } finally {
        btn.disabled = false;
        setTimeout(() => {
          btn.classList.remove('success');
          const s = btn.querySelector('span');
          if (s) s.textContent = origText;
        }, 3500);
      }
    });
  }
  </script>`
  }
];

// ══════════════════════════════════════════════════════════════════════
// GENERATE ALL PAGES
// ══════════════════════════════════════════════════════════════════════

for (const page of pages) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <title>${page.title}</title>${head}
</head>
<body>
  ${headerHTML(page.activePage)}
  ${page.content}
  ${footer}
  ${sharedScript}
</body>
</html>`;

  const outPath = path.join(PAGES_DIR, page.file);
  fs.writeFileSync(outPath, html, 'utf8');
  console.log(`✅ Generated: pages/${page.file}`);
}

console.log(`\n✅ ${pages.length} pages generated in pages/`);
