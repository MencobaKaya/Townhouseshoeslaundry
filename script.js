/* ============================================
   Townhouse Shoes Laundry — JS v4 · Dark
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ========== LOADER ========== */
  (function () {
    var loader = document.getElementById('loader');
    var fill = document.querySelector('.loader-fill');
    if (!loader || !fill) return;

    function hideLoader() {
      setTimeout(function () {
        loader.classList.add('hidden');
        var heroLines = document.querySelectorAll('.hero-line span');
        heroLines.forEach(function (span, i) {
          setTimeout(function () { span.classList.add('revealed'); }, i * 200 + 300);
        });
      }, 1600);
    }

    window.addEventListener('load', hideLoader);
    if (document.readyState === 'complete') hideLoader();
  })();

  /* ========== PROGRESS BAR ========== */
  (function () {
    var bar = document.getElementById('progressBar');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      var p = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = p + '%';
    }, { passive: true });
  })();

  /* ========== NAVBAR ========== */
  (function () {
    var navbar = document.getElementById('navbar');
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('navMenu');
    var links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });

    toggle.addEventListener('click', function () {
      this.classList.toggle('active');
      menu.classList.toggle('active');
    });

    links.forEach(function (l) {
      l.addEventListener('click', function () {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      });
    });

    // active nav link
    window.addEventListener('scroll', function () {
      var pos = window.scrollY + 130;
      links.forEach(function (link) {
        var sec = document.querySelector(link.getAttribute('href'));
        if (sec) {
          var top = sec.offsetTop, bottom = top + sec.offsetHeight;
          link.classList.toggle('active', pos >= top && pos < bottom);
        }
      });
    }, { passive: true });
  })();

  /* ========== IMAGE REVEAL ========== */
  (function () {
    var els = document.querySelectorAll('.image-reveal');
    if (!els.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.2 });
    els.forEach(function (el) { obs.observe(el); });
  })();

  /* ========== FADE UP ========== */
  (function () {
    var els = document.querySelectorAll(
      '.section-header, .about-text p, .about-feature, .about-image, .stat-item, .contact-item, .contact-map, .footer-brand, .footer-links, .footer-social'
    );
    if (!els.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      obs.observe(el);
    });
  })();

  /* ========== STAGGER CARDS ========== */
  (function () {
    var grids = document.querySelectorAll('.price-grid, .gallery-grid');
    if (!grids.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var items = entry.target.querySelectorAll('.price-card, .gallery-item');
          items.forEach(function (item, i) {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            setTimeout(function () {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, i * 60);
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    grids.forEach(function (g) { obs.observe(g); });
  })();

  /* ========== COUNTER ========== */
  (function () {
    var counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var el = e.target, target = parseInt(el.getAttribute('data-target'), 10);
          var start = null, duration = 1800;
          function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / duration, 1);
            var ep = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            el.textContent = Math.round(ep * target);
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = target;
          }
          requestAnimationFrame(step);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { obs.observe(c); });
  })();

  /* ========== LIGHTBOX ========== */
  (function () {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    var img = lightbox.querySelector('.lightbox-image');
    var caption = lightbox.querySelector('.lightbox-caption');
    var close = lightbox.querySelector('.lightbox-close');
    var prev = lightbox.querySelector('.lightbox-prev');
    var next = lightbox.querySelector('.lightbox-next');
    var items = document.querySelectorAll('.gallery-item');
    var current = 0, images = [];

    items.forEach(function (item, i) {
      images.push({ src: item.getAttribute('data-src'), alt: item.querySelector('img').getAttribute('alt') });
      item.addEventListener('click', function () { open(i); });
    });

    function open(i) { current = i; update(); lightbox.classList.add('active'); document.body.style.overflow = 'hidden'; }
    function update() { var d = images[current]; img.src = d.src; caption.textContent = d.alt + ' (' + (current + 1) + '/' + images.length + ')'; }
    function closeLb() { lightbox.classList.remove('active'); document.body.style.overflow = ''; }
    function prevImg() { current = (current - 1 + images.length) % images.length; update(); }
    function nextImg() { current = (current + 1) % images.length; update(); }

    close.addEventListener('click', closeLb);
    prev.addEventListener('click', function (e) { e.stopPropagation(); prevImg(); });
    next.addEventListener('click', function (e) { e.stopPropagation(); nextImg(); });
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
    });
  })();

  /* ========== SCROLL TOP ========== */
  (function () {
    var btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', function () { btn.classList.toggle('show', window.scrollY > 400); }, { passive: true });
    btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  })();

  /* ========== 3D TILT CARDS ========== */
  (function () {
    var cards = document.querySelectorAll('.price-card');
    if (!cards.length) return;
    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var x = e.clientX - r.left, y = e.clientY - r.top;
        var rx = (y - r.height / 2) / (r.height / 2) * -6;
        var ry = (x - r.width / 2) / (r.width / 2) * 6;
        card.style.transform = 'perspective(800px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-6px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        setTimeout(function () { card.style.transition = ''; }, 500);
      });
    });
  })();

});