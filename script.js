// ═══════════════════════════════════════════════════════════════════════════
// VOYARA — Script
// ═══════════════════════════════════════════════════════════════════════════

// ── Header scroll effect ──
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── Mobile menu toggle ──
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const nav = document.querySelector('.header-nav');
    nav?.classList.toggle('open');
  });
}

// ── Hero loaded animation ──
window.addEventListener('load', () => {
  document.getElementById('hero')?.classList.add('loaded');
});

// ── Search bar ──
const searchBar = document.getElementById('searchBar');
if (searchBar) {
  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });
}

// ── Destinations ──
const destinations = [
  { region: 'europe', country: 'Iceland', name: 'Northern Lights & Ice', featured: true, img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80', dur: '7 nights', price: '₹185,000', desc: 'Glaciers, geysers, and the dance of the aurora borealis.' },
  { region: 'asia', country: 'Bali', name: 'Sacred Temples & Rice Terraces', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80', dur: '8 nights', price: '₹128,000', desc: 'Ancient temples, emerald terraces, and the art of slow travel.' },
  { region: 'europe', country: 'Morocco', name: 'Desert & Medina', img: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80', dur: '9 nights', price: '₹142,000', desc: 'Saharan dunes, vibrant souks, and timeless riads.' },
  { region: 'europe', country: 'Norway', name: 'Fjord Expedition', img: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=1200&q=80', dur: '5 nights', price: '₹168,000', desc: 'Dramatic fjords, midnight sun, and untouched wilderness.' },
  { region: 'oceania', country: 'New Zealand', name: 'Southern Alps Adventure', img: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=1200&q=80', dur: '10 nights', price: '₹232,000', desc: 'Untamed landscapes and breathtaking mountain vistas.' },
  { region: 'asia', country: 'Rajasthan', name: 'Royal Heritage Trail', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80', dur: '7 nights', price: '₹98,000', desc: 'Magnificent palaces, golden deserts, and royal hospitality.' },
];

const destGrid = document.getElementById('destGrid');

function renderDestinations(region = 'all') {
  if (!destGrid) return;
  const filtered = region === 'all' ? destinations : destinations.filter(d => d.region === region);
  destGrid.innerHTML = filtered.map((d, i) => `
    <a class="dest-card ${i === 0 && region === 'all' ? 'featured' : ''}" href="#contact">
      <div class="dest-card-img" style="background-image: url('${d.img}')"></div>
      <div class="dest-card-overlay"></div>
      <span class="dest-card-price">from ${d.price}</span>
      <div class="dest-card-content">
        <div class="dest-card-region">${d.country}</div>
        <h3 class="dest-card-name">${d.name}</h3>
        <p class="dest-card-desc">${d.desc}</p>
        <div class="dest-card-tags">
          <span class="dest-tag">${d.dur}</span>
          <span class="dest-tag">Private guide</span>
        </div>
      </div>
      <span class="dest-card-explore">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
      </span>
    </a>
  `).join('');
}

renderDestinations();

document.querySelectorAll('.dest-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.dest-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderDestinations(tab.dataset.tab);
  });
});

// ── Packages ──
const packages = [
  {
    num: '01',
    title: 'Nordic Wilderness',
    where: 'Reykjavik · Vik · Akureyri',
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    details: ['7 nights', 'Max 8', 'Easy', 'Jun — Sep'],
    price: '₹185,000'
  },
  {
    num: '02',
    title: 'Bali Zen Retreat',
    where: 'Ubud · Seminyak · Uluwatu',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    details: ['8 nights', 'Max 10', 'Easy', 'Apr — Oct'],
    price: '₹128,000'
  },
  {
    num: '03',
    title: 'Moroccan Odyssey',
    where: 'Marrakech · Sahara · Fes',
    img: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    details: ['9 nights', 'Max 8', 'Moderate', 'Oct — Apr'],
    price: '₹142,000'
  }
];

const pkgGrid = document.getElementById('pkgGrid');
if (pkgGrid) {
  pkgGrid.innerHTML = packages.map(p => `
    <article class="pkg-card">
      <div class="pkg-card-img" style="background-image: url('${p.img}')"></div>
      <div class="pkg-card-body">
        <div class="pkg-card-num">/ ${p.num}</div>
        <h3 class="pkg-card-title">${p.title}</h3>
        <div class="pkg-card-where">${p.where}</div>
        <div class="pkg-card-details">
          ${p.details.map(d => `<span class="pkg-detail">${d}</span>`).join('')}
        </div>
        <div class="pkg-card-foot">
          <div>
            <div class="pkg-price-label">From / per person</div>
            <div class="pkg-price">${p.price}<small> INR</small></div>
          </div>
          <a href="#contact" class="pkg-btn">
            View Journey
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// ── Services ──
const services = [
  { icon: '<path d="m12 2 3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Domestic Tours', desc: 'Curated journeys across India\'s most iconic regions, planned end-to-end so you only have to pack a bag.' },
  { icon: '<path d="M3 7h18l-2 13H5L3 7zM8 7V4a4 4 0 018 0v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Holiday Packages', desc: 'Pre-designed itineraries for honeymoons, family breaks, and short escapes — book in minutes, not weeks.' },
  { icon: '<path d="M3 21V8l9-5 9 5v13M9 21V12h6v9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Hotel Booking', desc: 'Hand-picked stays — heritage havelis, hill resorts, beach villas — at our negotiated partner rates.' },
  { icon: '<path d="M3 17h2l1-5h12l1 5h2M5 12V8a3 3 0 013-3h8a3 3 0 013 3v4M7 17v2M17 17v2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Transportation', desc: 'Airport transfers, intercity cabs, and chauffeured cars across India. Trains and flights coordinated end-to-end.' },
  { icon: '<path d="M9 11a3 3 0 110-6 3 3 0 010 6zm6 0a3 3 0 110-6 3 3 0 010 6zM3 21v-1a4 4 0 014-4h4a4 4 0 014 4v1m6 0v-1a4 4 0 00-3-3.87" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Group Tours', desc: 'Departures for friends, colleagues, and clubs — one coordinator, one invoice, every detail handled.' },
  { icon: '<path d="M12 2a4 4 0 100 8 4 4 0 000-8zM4 22v-3a4 4 0 014-4h8a4 4 0 014 4v3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Family Tours', desc: 'Pace and comfort tuned for kids and grandparents. Nothing rushed, nothing missed, nothing left to chance.' },
  { icon: '<path d="M12 20l-7-7 7-7M19 12H5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>', title: 'Custom Planning', desc: 'Tell us your dates, your interests, your budget. We\'ll build the rest — from the first sunrise to the last train home.' }
];

const servicesList = document.getElementById('servicesList');
if (servicesList) {
  servicesList.innerHTML = services.map((s, i) => `
    <div class="service-item">
      <div class="service-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">${s.icon}</svg>
      </div>
      <div>
        <div class="service-title">${s.title}</div>
        <p class="service-desc">${s.desc}</p>
      </div>
      <div class="service-num">/ 0${i + 1}</div>
    </div>
  `).join('');
}

// ── Testimonials ──
const testimonials = [
  {
    letter: 'A',
    name: 'Arjun & Sneha Kapoor',
    where: 'Kashmir · 7 nights · 2026',
    title: 'Felt like our anniversary, not a tour.',
    teaser: 'Every detail — down to the shikara breakfast — felt thought through.',
    quote: "We've travelled with a few agents over the years. None of them came close to what VOYARA put together for our anniversary in Kashmir. Every detail — down to the shikara breakfast — felt thought through."
  },
  {
    letter: 'R',
    name: 'Riya Sharma',
    where: 'Kerala · 6 nights · 2026',
    title: 'They rearranged our day before we noticed.',
    teaser: 'When the houseboat was delayed, our planner had already moved everything.',
    quote: "Our houseboat was delayed by a day in Alleppey. Before we even noticed, our planner had reshuffled the Munnar leg, kept us at a tea estate that night, and refunded the difference. Genuinely zero stress."
  },
  {
    letter: 'K',
    name: 'Kabir Nair',
    where: 'Rajasthan · 9 nights · 2026',
    title: "Hotels we'd never have found ourselves.",
    teaser: 'They knew which haveli, which fort lookout, which evening for the dunes.',
    quote: "I went into Rajasthan thinking I'd see the same forts everyone sees. VOYARA knew exactly which haveli to book in Jodhpur, which fort lookout to reach at sunset, which evening to do the dunes. Hard country, soft landing."
  }
];

const testiSide = document.getElementById('testiSide');

function renderTestimonials(activeIndex = 0) {
  if (!testiSide) return;
  testiSide.innerHTML = testimonials.map((t, i) => `
    <div class="testi-card ${i === activeIndex ? 'active' : ''}" data-i="${i}">
      <div class="testi-card-top">
        <span class="testi-card-num">/ 0${i + 1}</span>
        <span style="color: var(--c-accent); font-size: 12px;">★★★★★</span>
      </div>
      <div class="testi-card-title">${t.title}</div>
      <p class="testi-card-text">${t.teaser}</p>
    </div>
  `).join('');

  const quoteEl = document.getElementById('testiQuote');
  if (quoteEl) quoteEl.textContent = testimonials[activeIndex].quote;
  const nameEl = document.getElementById('testiName');
  if (nameEl) nameEl.textContent = testimonials[activeIndex].name;
  const whereEl = document.getElementById('testiWhere');
  if (whereEl) whereEl.textContent = testimonials[activeIndex].where;
  const avatarEl = document.getElementById('testiAvatar');
  if (avatarEl) avatarEl.textContent = testimonials[activeIndex].letter;

  testiSide.querySelectorAll('.testi-card').forEach(card => {
    card.addEventListener('click', () => renderTestimonials(Number(card.dataset.i)));
  });
}

renderTestimonials(0);

// ── Contact Form ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    if (!btn) return;
    btn.classList.add('success');
    const span = btn.querySelector('span');
    if (span) span.textContent = "Sent — we'll write back within 24h";
    setTimeout(() => {
      btn.classList.remove('success');
      const s = btn.querySelector('span');
      if (s) s.textContent = 'Send Inquiry';
      contactForm.reset();
    }, 3500);
  });
}

// ── Reveal on scroll ──
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', setupReveal);
