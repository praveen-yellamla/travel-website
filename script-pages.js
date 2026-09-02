// ═══════════════════════════════════════════════════════════════════════════
// script-pages.js — Shared script for generated pages
// Handles: destinations grid, packages grid, reveals, mobile menu, scroll
// ═══════════════════════════════════════════════════════════════════════════

(function() {
  const page = document.currentScript?.getAttribute('data-page') || '';

  // ── Journey data (will be populated from API) ──
  const _destFallback = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
  let allJourneys = [];

  // ═══════ DESTINATIONS PAGE ═══════
  if (page === 'destinations') {
    loadDestinations();
  }

  // ═══════ PACKAGES PAGE ═══════
  if (page === 'packages') {
    loadPackages();
  }

  // ═══════════════════════════════════════════════════════════════
  // DESTINATIONS
  // ═══════════════════════════════════════════════════════════════
  async function loadDestinations() {
    const destGrid = document.getElementById('destGrid');
    if (!destGrid) return;

    // Try API first, fallback to empty
    let destinations = [];
    try {
      const res = await fetch('/api/packages');
      if (res.ok) {
        const packages = await res.json();
        destinations = packages.filter(p => p.is_active !== 0).map(p => ({
          type: p.category,
          country: p.country || 'India',
          name: p.title || p.name,
          img: (p.image_url && p.image_url.length > 10) ? p.image_url : _destFallback,
          dur: p.duration,
          price: p.offer_price ? '₹' + Number(p.offer_price).toLocaleString('en-IN') : '₹' + Number(p.price).toLocaleString('en-IN'),
          priceNum: p.offer_price || p.price,
          desc: p.short_desc,
          slug: p.slug
        }));
      }
    } catch(e) {
      console.log('Could not load destinations from API');
    }

    // Also fetch destinations from dedicated endpoint
    try {
      const res = await fetch('/api/destinations');
      if (res.ok) {
        const dests = await res.json();
        if (dests.length > 0) {
          destinations = dests.filter(d => d.is_active !== 0).map(d => ({
            type: d.category,
            country: d.country || 'India',
            name: d.name,
            img: (d.image_url && d.image_url.length > 10) ? d.image_url : _destFallback,
            dur: d.duration || '',
            price: '₹' + Number(d.price).toLocaleString('en-IN'),
            priceNum: d.price,
            desc: d.short_description || '',
            slug: d.slug || d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
          }));
        }
      }
    } catch(e) {}

    function renderDestinations(type) {
      const filtered = destinations.filter(d => d.type === type);
      filtered.sort((a, b) => a.priceNum - b.priceNum);
      destGrid.innerHTML = filtered.map((d, i) =>
        '<a class="dest-card ' + (i === 0 ? 'featured' : '') + '" href="/journeys/' + d.slug + '">' +
          '<div class="dest-card-img" style="background-image: url(\'' + (d.img && d.img.length > 10 ? d.img : 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80') + '\')" onerror="if(!this.dataset.fb){this.style.backgroundImage=\"url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80)\";this.dataset.fb=1}"></div>' +
          '<div class="dest-card-overlay"></div>' +
          '<span class="dest-card-price">from ' + d.price + '</span>' +
          '<div class="dest-card-content">' +
            '<div class="dest-card-region">' + d.country + '</div>' +
            '<h3 class="dest-card-name">' + d.name + '</h3>' +
            '<p class="dest-card-desc">' + d.desc + '</p>' +
            '<div class="dest-card-tags">' +
              '<span class="dest-tag">' + d.dur + '</span>' +
            '</div>' +
          '</div>' +
          '<span class="dest-card-explore"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg></span>' +
        '</a>'
      ).join('');
    }

    renderDestinations('india');

    // Tab switching
    document.querySelectorAll('.dest-type-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.dest-type-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderDestinations(tab.dataset.type);
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════
  // PACKAGES
  // ═══════════════════════════════════════════════════════════════
  async function loadPackages() {
    const pkgGrid = document.getElementById('pkgGrid');
    if (!pkgGrid) return;

    let packages = [];
    try {
      const res = await fetch('/api/packages');
      if (res.ok) {
        const data = await res.json();
        packages = data.filter(p => p.is_active !== 0);
      }
    } catch(e) {}

    pkgGrid.innerHTML = packages.map((p, i) => {
      const price = p.offer_price ? '₹' + Number(p.offer_price).toLocaleString('en-IN') : '₹' + Number(p.price).toLocaleString('en-IN');
      const fallbackImg = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
      const imgSrc = (p.image_url && p.image_url.length > 10) ? p.image_url : fallbackImg;
      return '<article class="pkg-card">' +
        '<div class="pkg-card-img" style="background-image: url(\'' + imgSrc + '\')" onerror="if(!this.dataset.fb){this.style.backgroundImage=\"url(' + fallbackImg + ')\";this.dataset.fb=1}"></div>' +
        '<div class="pkg-card-body">' +
          '<h3 class="pkg-card-title"><a href="/journeys/' + p.slug + '" style="color:inherit;text-decoration:none;">' + (p.title || p.name) + '</a></h3>' +
          '<div class="pkg-card-where">' + (p.where || p.destination || '') + '</div>' +
          '<div class="pkg-card-details">' +
            '<span class="pkg-detail">' + p.duration + '</span>' +
            '<span class="pkg-detail">' + (p.group_size || '') + '</span>' +
            '<span class="pkg-detail">' + (p.difficulty || '') + '</span>' +
            '<span class="pkg-detail">' + (p.best_season || '') + '</span>' +
          '</div>' +
          '<div class="pkg-card-foot">' +
            '<div>' +
              '<div class="pkg-price-label">From / per person</div>' +
              '<div class="pkg-price">' + price + '<small> INR</small></div>' +
            '</div>' +
            '<a href="/journeys/' + p.slug + '" class="pkg-btn">View Journey <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L7 1m6 6l-6 6" stroke="currentColor" stroke-width="1.5"/></svg></a>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  // ═══════════════════════════════════════════════════════════════
  // REVEAL ON SCROLL
  // ═══════════════════════════════════════════════════════════════
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      obs.observe(el);
    });
  });

})();
