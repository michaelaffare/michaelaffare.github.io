/* =========================================================================
   michaelaffare.github.io — spatial experience layer
   -------------------------------------------------------------------------
   Two things live here:

   1. A library. Card collections are rebuilt as real 3D volumes standing on
      a shelf — you read the spines, and drawing one out turns it to face you.
   2. The motion around it: inertial scrolling, sections travelling through
      depth, a section rail, and a custom cursor.

   All of it is progressive enhancement, gated behind the .x3d class this
   script sets. No JS, narrow screen or reduced-motion — the page falls back
   to the flat, fully readable original. No network dependency.
   ========================================================================= */

(function () {
  'use strict';

  /* -------------------------------------------------------------- config */

  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const wide = window.innerWidth > 900;

  const SMOOTH = finePointer && wide && !reduced;
  const SHELVES_ON = wide && !reduced;

  /* A 560px push through Z reads as cinematic on a desktop canvas and as a
     disappearing act on a phone, so the choreography scales with the page. */
  const DEPTH_K = wide ? 1 : 0.3;

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const damp = (a, b, l, dt) => lerp(a, b, 1 - Math.exp(-l * dt));

  /* =======================================================================
     THE LIBRARY
     ===================================================================== */

  /* Binding cloths, drawn from the site's own palette: carbon, graphite,
     pewter and the two blues, plus one pale linen for rhythm. */
  const TONES = ['carbon', 'blue', 'graphite', 'linen', 'cobalt', 'pewter', 'midnight'];

  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
    'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];

  /* One entry per collection we shelve. thin/thick bound the spine width,
     which is otherwise driven by how much the volume carries. */
  const COLLECTIONS = [
    {
      grid: '.cases', item: '.case', perRow: 8,
      thin: 98, thick: 144, minH: 366, maxH: 416, cover: 280,
      title: el => shortTitle(text(el, 'h3')),
      full: el => text(el, 'h3'),
      sub: el => text(el, '.case-label')
    },
    {
      grid: '.skills', item: '.skill', perRow: 5,
      thin: 112, thick: 148, minH: 338, maxH: 376, cover: 272,
      title: el => text(el, 'h4'),
      full: el => text(el, 'h4'),
      sub: () => 'Capability'
    },
    {
      grid: '.cert-grid', item: '.cert', perRow: 4, fill: true,
      thin: 62, thick: 88, minH: 288, maxH: 322, cover: 252,
      title: el => shortTitle(text(el, '.cert-name')),
      full: el => text(el, '.cert-name'),
      sub: el => text(el, '.cert-issuer')
    },
    {
      grid: '.beyond-grid', item: '.beyond', perRow: 7,
      thin: 86, thick: 126, minH: 330, maxH: 368, cover: 268,
      title: el => shortTitle(text(el, 'h4')),
      full: el => text(el, 'h4'),
      sub: () => 'Off the Clock'
    }
  ];

  function text(node, sel) {
    const n = node.querySelector(sel);
    return n ? n.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  /* Spines carry the short form: everything before the colon, and never
     more than fits at a comfortable reading size. */
  function shortTitle(t) {
    let s = t.split(':')[0].trim();
    if (s.length > 34) s = s.slice(0, 32).replace(/[\s,;-]+\S*$/, '') + '…';
    return s;
  }

  /* The category line runs the height of the spine, so it gets the leading
     segment only — 'AI / ML · Governance' becomes 'AI / ML'. */
  function shortSub(t) {
    let s = t.split(/[·|]/)[0].trim();
    if (s.length > 15) s = s.slice(0, 14).replace(/[\s,.-]+$/, '') + '…';
    return s;
  }

  function el(tag, cls, txt) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }

  /* Rebuild one card as a bound volume. The original children move, intact,
     onto the front cover — nothing is retyped or lost. */
  function bind(card, spec, index) {
    const title = spec.title(card);
    const full = spec.full(card);
    const sub = shortSub(spec.sub(card));

    /* thicker spines for volumes that carry more */
    const weight = clamp((full.length + card.textContent.length / 18) / 72, 0, 1);
    const thickness = Math.round(lerp(spec.thin, spec.thick, weight));
    const height = Math.round(lerp(spec.minH, spec.maxH, ((index * 37) % 11) / 10));

    const coverIn = el('div', 'bk-cover-in');
    while (card.firstChild) coverIn.appendChild(card.firstChild);

    const cover = el('div', 'bk-face bk-cover');
    cover.appendChild(el('span', 'bk-band'));
    cover.appendChild(coverIn);
    cover.appendChild(el('span', 'bk-hinge'));

    const spine = el('div', 'bk-face bk-spine');
    spine.appendChild(el('span', 'bk-rule'));
    spine.appendChild(el('span', 'bk-spine-title', title));
    spine.appendChild(el('span', 'bk-spine-sub', sub));
    spine.appendChild(el('span', 'bk-rule'));
    spine.appendChild(el('span', 'bk-vol', 'VOL. ' + (ROMAN[index] || index + 1)));

    const body = el('div', 'bk-body');
    body.appendChild(spine);
    body.appendChild(cover);
    body.appendChild(el('div', 'bk-face bk-edge'));
    body.appendChild(el('div', 'bk-face bk-back'));
    body.appendChild(el('div', 'bk-face bk-top'));

    card.appendChild(body);
    card.appendChild(el('span', 'bk-contact'));

    card.classList.add('book');
    card.classList.remove('reveal', 'visible', 'tilt', 'padded');
    card.dataset.tone = TONES[index % TONES.length];
    card.style.setProperty('--t', thickness + 'px');
    card.style.setProperty('--h', height + 'px');
    card.style.setProperty('--d', spec.cover + 'px');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', full + (sub ? ' — ' + sub : ''));
    return card;
  }

  /* Turn a grid of cards into one or more shelves. */
  function buildShelves(spec) {
    document.querySelectorAll(spec.grid).forEach(grid => {
      const cards = Array.from(grid.querySelectorAll(spec.item));
      if (!cards.length) return;

      cards.forEach((c, i) => bind(c, spec, i));

      /* One case per collection: uprights, a top rail and stacked shelves,
         so the rows read as a single piece of furniture. */
      const unit = el('div', 'case-wrap');
      const bookcase = el('div', 'bookcase reveal');
      if (spec.fill) bookcase.classList.add('bookcase--fill');

      for (let i = 0; i < cards.length; i += spec.perRow) {
        const row = cards.slice(i, i + spec.perRow);
        const shelf = el('div', 'shelf');
        const books = el('div', 'shelf-books');
        let tallest = 0;
        row.forEach((c, j) => {
          c.style.setProperty('--rd', Math.min(j * 80, 640) + 'ms');
          tallest = Math.max(tallest, parseInt(c.style.getPropertyValue('--h'), 10) || 0);
          books.appendChild(c);
        });
        shelf.style.setProperty('--shelf-h', (tallest + 26) + 'px');
        shelf.appendChild(el('div', 'shelf-back'));
        shelf.appendChild(books);
        shelf.appendChild(el('div', 'shelf-board'));
        bookcase.appendChild(shelf);
      }
      unit.appendChild(bookcase);
      grid.replaceWith(unit);
    });
  }

  /* Drawing a volume out: it slides forward and turns to face the reader,
     while its neighbours lean aside to make room. */
  function wireBooks() {
    const books = Array.from(document.querySelectorAll('.book'));
    if (!books.length) return;

    let active = null;
    let pinned = null;

    /* Keep the turned cover inside the shelf, nudging it in at the ends. */
    function place(book) {
      const shelf = book.closest('.shelf-books');
      if (!shelf) return;
      const b = book.getBoundingClientRect();
      const s = shelf.getBoundingClientRect();
      const coverW = parseFloat(getComputedStyle(book).getPropertyValue('--d')) || 300;
      const overRight = (b.left + coverW * 0.98) - s.right;
      const overLeft = s.left - (b.left - coverW * 0.12);
      let px = 0;
      if (overRight > 0) px = -overRight - 14;
      else if (overLeft > 0) px = overLeft + 14;
      book.style.setProperty('--px', px.toFixed(0) + 'px');
    }

    function lean(book, on) {
      const row = Array.from(book.parentElement.children);
      const idx = row.indexOf(book);
      row.forEach((other, i) => {
        if (other === book) return;
        const d = i - idx;
        const amount = on ? clamp(4 - Math.abs(d), 0, 4) * (d > 0 ? 5 : -5) : 0;
        other.style.setProperty('--lean', amount + 'px');
      });
    }

    function setActive(book) {
      if (active === book) return;
      if (active) {
        active.classList.remove('is-active');
        const prev = active.closest('.shelf');
        if (prev) prev.classList.remove('has-active');
        lean(active, false);
      }
      active = book;
      if (book) {
        place(book);
        book.classList.add('is-active');
        const shelf = book.closest('.shelf');
        if (shelf) shelf.classList.add('has-active');
        lean(book, true);
      }
    }

    function unpin() {
      if (!pinned) return;
      pinned.classList.remove('is-pinned');
      pinned = null;
      setActive(null);
    }

    books.forEach(book => {
      book.addEventListener('pointerenter', () => { if (!pinned) setActive(book); });
      book.addEventListener('pointerleave', () => { if (!pinned) setActive(null); });
      book.addEventListener('focusin', () => { if (!pinned) setActive(book); });
      book.addEventListener('focusout', e => {
        if (!pinned && !book.contains(e.relatedTarget)) setActive(null);
      });

      /* Click holds the volume open so you can read and click through it. */
      book.addEventListener('click', e => {
        if (e.target.closest('a, button')) return;
        if (pinned === book) { unpin(); return; }
        if (pinned) pinned.classList.remove('is-pinned');
        pinned = book;
        setActive(book);
        book.classList.add('is-pinned');
      });

      book.addEventListener('keydown', e => {
        if ((e.key === 'Enter' || e.key === ' ') && e.target === book) {
          e.preventDefault();
          book.click();
        } else if (e.key === 'Escape' && pinned === book) {
          unpin();
          book.focus();
        }
      });
    });

    document.addEventListener('click', e => {
      if (pinned && !e.target.closest('.book')) unpin();
    });
    window.addEventListener('resize', () => { if (active) place(active); });
  }

  /* =======================================================================
     PAGE MOTION
     ===================================================================== */

  function buildChrome() {
    const frag = document.createDocumentFragment();

    const progress = el('div');
    progress.id = 'progress';
    progress.setAttribute('aria-hidden', 'true');
    progress.appendChild(document.createElement('i'));
    frag.appendChild(progress);

    const rail = document.createElement('nav');
    rail.id = 'rail';
    rail.setAttribute('aria-label', 'Section navigator');
    frag.appendChild(rail);

    let cursor = null, ring = null;
    if (finePointer && wide) {
      cursor = el('div');
      cursor.id = 'cursor';
      cursor.setAttribute('aria-hidden', 'true');
      ring = el('div');
      ring.id = 'cursor-ring';
      ring.setAttribute('aria-hidden', 'true');
      frag.appendChild(cursor);
      frag.appendChild(ring);
    }

    document.body.appendChild(frag);
    return { progress: progress.firstElementChild, rail, cursor, ring };
  }

  /* Move page content into a transformable shell for inertial scrolling. */
  function buildScrollShell(chromeNodes) {
    const wrap = el('div');
    wrap.id = 'smooth-wrap';
    const skip = new Set([
      document.getElementById('nav'),
      document.getElementById('drawer'),
      ...chromeNodes
    ]);
    const moving = Array.from(document.body.children)
      .filter(n => !skip.has(n) && n.tagName !== 'SCRIPT');
    document.body.insertBefore(wrap, document.body.firstChild);
    moving.forEach(n => wrap.appendChild(n));
    return wrap;
  }

  /* Document-space offset of a node (valid inside the fixed scroll shell). */
  function docTop(node) {
    let y = 0;
    while (node) { y += node.offsetTop; node = node.offsetParent; }
    return y;
  }

  function labelFor(section) {
    const link = document.querySelector(
      '.nav-links a[href="#' + section.id + '"], .drawer a[href="#' + section.id + '"]');
    return link ? link.textContent.trim()
      : section.id.charAt(0).toUpperCase() + section.id.slice(1);
  }

  /* The certification categories become a row of matching cases rather than
     five islands drifting down the page. */
  function buildCertWall() {
    const groups = Array.from(document.querySelectorAll('#certifications .cert-group'));
    if (groups.length < 2) return;
    const wall = el('div', 'cert-wall reveal');
    groups[0].parentNode.insertBefore(wall, groups[0]);
    groups.forEach(g => {
      g.classList.remove('reveal', 'visible');
      wall.appendChild(g);
    });
  }

  function boot() {
    root.classList.add('x3d');

    if (SHELVES_ON) {
      COLLECTIONS.forEach(buildShelves);
      buildCertWall();
      wireBooks();
    }

    const chrome = buildChrome();
    const chromeNodes = [chrome.rail, chrome.progress.parentElement, chrome.cursor, chrome.ring]
      .filter(Boolean);
    const wrap = SMOOTH ? buildScrollShell(chromeNodes) : null;
    if (wrap) root.classList.add('smooth');

    /* ---- sections travelling through depth ------------------------------ */
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const depthEls = [];
    document.querySelectorAll('section').forEach(sec => {
      const inner = sec.querySelector(':scope > .container');
      if (!inner) return;
      inner.classList.add('depth');
      depthEls.push({ el: inner, top: 0, h: 0, amp: sec.id === 'home' ? 1.7 : 1 });
    });

    let docHeight = 0;
    function measure() {
      if (wrap) {
        docHeight = wrap.scrollHeight;
        document.body.style.height = docHeight + 'px';
      } else {
        docHeight = document.documentElement.scrollHeight;
      }
      depthEls.forEach(d => {
        d.top = docTop(d.el);
        d.h = d.el.offsetHeight;
      });
    }

    /* ---- anchors: the fixed shell breaks native #fragments --------------- */
    const NAV_OFFSET = 64;
    function goTo(node, instant) {
      if (!node) return;
      window.scrollTo({
        top: Math.max(0, docTop(node) - NAV_OFFSET),
        behavior: instant || wrap ? 'auto' : 'smooth'
      });
    }
    if (wrap) {
      document.addEventListener('click', e => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute('href').slice(1);
        const target = id && document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        history.replaceState(null, '', '#' + id);
        goTo(target);
      });
      if (location.hash.length > 1) {
        const initial = document.getElementById(location.hash.slice(1));
        if (initial) requestAnimationFrame(() => requestAnimationFrame(() => goTo(initial, true)));
      }
    }

    /* ---- staggered reveals ------------------------------------------------ */
    document.querySelectorAll('section').forEach(sec => {
      sec.querySelectorAll('.reveal').forEach((n, i) => {
        if (!n.style.getPropertyValue('--rd')) {
          n.style.setProperty('--rd', Math.min(i * 70, 420) + 'ms');
        }
      });
    });
    /* shelves are created after the page's own observer ran, so watch them */
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.bookcase.reveal, .cert-wall.reveal').forEach(n => revealObserver.observe(n));

    /* ---- tilt for the surfaces that stayed flat ---------------------------- */
    if (finePointer && wide && !reduced) {
      document.querySelectorAll('.media-frame, .highlight-media, .panel').forEach(node => {
        if (node.closest('.book')) return;
        node.classList.add('tilt');
        const sheen = el('span', 'sheen');
        sheen.setAttribute('aria-hidden', 'true');
        node.appendChild(sheen);

        let raf = 0, rect = null;
        const apply = e => {
          rect = rect || node.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          if (raf) return;
          raf = requestAnimationFrame(() => {
            raf = 0;
            node.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
            node.style.setProperty('--my', (py * 100).toFixed(1) + '%');
            node.style.transform =
              'perspective(1100px) rotateX(' + (-(py - 0.5) * 7).toFixed(2) +
              'deg) rotateY(' + ((px - 0.5) * 8).toFixed(2) + 'deg) translate3d(0,-3px,20px)';
          });
        };
        node.addEventListener('pointerenter', e => {
          rect = node.getBoundingClientRect();
          node.classList.add('tracking');
          apply(e);
        });
        node.addEventListener('pointermove', apply);
        node.addEventListener('pointerleave', () => {
          rect = null;
          node.classList.remove('tracking');
          node.style.transform = '';
        });
      });
    }

    /* ---- hero parallax layers ---------------------------------------------- */
    const heroLayers = [];
    if (!reduced) {
      [['.hero-eyebrow', 10], ['.hero-title', 22], ['.hero-tagline', 16], ['.hero-sub', 12],
      ['.hero-photo', 34], ['.hero-ctas', 18], ['.hero-scroll', 8]].forEach(pair => {
        const node = document.querySelector('#home ' + pair[0]);
        if (!node) return;
        node.classList.add('layer');
        node.style.setProperty('--id', (heroLayers.length * 110 + 120) + 'ms');
        heroLayers.push({ el: node, depth: pair[1] });
      });
    }

    /* ---- section rail -------------------------------------------------------- */
    const railButtons = sections.map(sec => {
      const b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = '<span class="dot"></span><span class="tip"></span>';
      b.querySelector('.tip').textContent = labelFor(sec);
      b.setAttribute('aria-label', 'Go to ' + labelFor(sec));
      b.addEventListener('click', () => goTo(sec));
      chrome.rail.appendChild(b);
      return b;
    });

    /* ---- custom cursor -------------------------------------------------------- */
    let cx = window.innerWidth / 2, cy = window.innerHeight / 2, rx = cx, ry = cy;
    if (chrome.cursor) {
      window.addEventListener('pointermove', () => root.classList.add('cursor-on'), { once: true });
      document.addEventListener('pointerover', e => {
        const hot = e.target.closest('a, button, input, textarea, .book, .tilt');
        chrome.ring.classList.toggle('hot', !!hot);
      });
      document.addEventListener('pointerleave', () => root.classList.remove('cursor-on'));
      document.addEventListener('pointerenter', () => root.classList.add('cursor-on'));
    }

    /* ---- pointer --------------------------------------------------------------- */
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    window.addEventListener('pointermove', e => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = -((e.clientY / window.innerHeight) * 2 - 1);
      cx = e.clientX;
      cy = e.clientY;
    }, { passive: true });

    /* ---- loop -------------------------------------------------------------------- */
    let smoothY = window.scrollY;
    let last = performance.now() / 1000;
    let progress = 0;
    let activeIndex = -1;
    let hidden = false;

    document.addEventListener('visibilitychange', () => { hidden = document.hidden; });

    function frame(now) {
      requestAnimationFrame(frame);
      if (hidden) return;

      const t = now / 1000;
      const dt = Math.min(0.05, t - last);
      last = t;

      const target = window.scrollY;
      if (wrap) {
        smoothY = damp(smoothY, target, 8.5, dt);
        if (Math.abs(smoothY - target) < 0.06) smoothY = target;
        wrap.style.transform = 'translate3d(0,' + (-smoothY).toFixed(2) + 'px,0)';
      } else {
        smoothY = target;
      }

      const vh = window.innerHeight;
      const max = Math.max(1, docHeight - vh);
      progress = damp(progress, clamp(smoothY / max, 0, 1), 9, dt);
      chrome.progress.style.transform = 'scaleX(' + progress.toFixed(4) + ')';

      pointer.x = damp(pointer.x, pointer.tx, 4.5, dt);
      pointer.y = damp(pointer.y, pointer.ty, 4.5, dt);

      if (!reduced) {
        for (let i = 0; i < depthEls.length; i++) {
          const d = depthEls[i];
          const center = d.top + d.h / 2 - smoothY;
          const r = (center - vh / 2) / vh;
          if (r > 1.9 || r < -1.9) continue;
          const k = clamp(r, -1.4, 1.4);
          const a = d.amp * DEPTH_K;
          const s = d.el.style;
          s.setProperty('--dz', (-Math.abs(k) * 560 * a).toFixed(1) + 'px');
          s.setProperty('--dy', (k * 44 * a).toFixed(1) + 'px');
          s.setProperty('--drx', (k * -12 * a).toFixed(2) + 'deg');
          s.setProperty('--dry', (k * 2.5).toFixed(2) + 'deg');
          s.setProperty('--ds', (1 - Math.min(Math.abs(k), 1) * 0.04).toFixed(3));
          s.setProperty('--dop', (1 - Math.min(Math.abs(k), 1.3) * 0.5 * DEPTH_K).toFixed(3));
        }

        for (let i = 0; i < heroLayers.length; i++) {
          const l = heroLayers[i];
          l.el.style.setProperty('--lx', (pointer.x * l.depth).toFixed(2) + 'px');
          l.el.style.setProperty('--ly', (-pointer.y * l.depth * 0.6).toFixed(2) + 'px');
        }
      }

      let idx = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= vh * 0.45) idx = i;
      }
      if (idx !== activeIndex) {
        activeIndex = idx;
        railButtons.forEach((b, i) => b.classList.toggle('active', i === idx));
      }

      if (chrome.cursor) {
        rx = damp(rx, cx, 22, dt);
        ry = damp(ry, cy, 22, dt);
        chrome.cursor.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
        chrome.ring.style.transform = 'translate3d(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px,0)';
      }
    }

    /* ---- lifecycle ----------------------------------------------------------------- */
    let resizeTimer = 0;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measure, 120);
    });
    if (wrap && 'ResizeObserver' in window) {
      let roTimer = 0;
      new ResizeObserver(() => {
        clearTimeout(roTimer);
        roTimer = setTimeout(measure, 60);
      }).observe(wrap);
    }
    document.addEventListener('click', e => {
      if (e.target.closest('.toggle')) setTimeout(measure, 80);
    });
    window.addEventListener('load', measure);

    measure();
    requestAnimationFrame(frame);
    requestAnimationFrame(() => root.classList.add('x3d-ready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
