(function () {
  'use strict';

  // ── Scroll spy ──
  const navLinks = document.querySelectorAll('.sidebar a[href^="#"]');
  const targets = Array.from(navLinks)
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);

  const setActive = id => {
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  };

  navLinks.forEach(link => {
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-20% 0px -70% 0px' });
    targets.forEach(t => io.observe(t));
  }

  // ── Back to top visibility ──
  const btt = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btt.addEventListener('click', e => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); });  // jump to the very top

  // ── Week open/close persistence ──
  const OPEN_KEY = 'art-roadmap-open-weeks';
  let opened;
  try { opened = new Set(JSON.parse(localStorage.getItem(OPEN_KEY) || '[]')); }
  catch { opened = new Set(); }

  // ── Week checkbox persistence + progress bar ──
  const CHECKED_KEY = 'art-roadmap-checked-weeks';
  let checked;
  try { checked = new Set(JSON.parse(localStorage.getItem(CHECKED_KEY) || '[]')); }
  catch { checked = new Set(); }

  const weeks = document.querySelectorAll('details.week');
  const total = weeks.length;

  const updateProgress = () => {
    const count = checked.size;
    const pct = Math.round((count / total) * 100);
    document.getElementById('progFill').style.width = pct + '%';
    document.getElementById('progText').textContent = count + ' of ' + total;
    document.getElementById('progPct').textContent = pct + '%';
  };

  weeks.forEach((d, i) => {
    const key = 'w' + i;

    // Restore open/close state
    if (opened.has(key)) d.open = true;
    d.addEventListener('toggle', () => {
      if (d.open) opened.add(key); else opened.delete(key);
      try { localStorage.setItem(OPEN_KEY, JSON.stringify([...opened])); } catch {}
    });

    // Inject circular checkbox
    const summary = d.querySelector('summary');
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.className = 'week-checkbox';
    cb.checked = checked.has(key);
    summary.insertBefore(cb, summary.firstChild);

    // Prevent checkbox click from toggling the details element
    cb.addEventListener('click', e => e.stopPropagation());

    // Persist checkbox state + update progress
    cb.addEventListener('change', () => {
      if (cb.checked) checked.add(key); else checked.delete(key);
      try { localStorage.setItem(CHECKED_KEY, JSON.stringify([...checked])); } catch {}
      updateProgress();
    });
  });

  updateProgress();
})();


/* ── Mobile nav drawer ── */
(function(){
  const body=document.body, toggle=document.getElementById('navToggle'), backdrop=document.getElementById('navBackdrop');
  if(!toggle) return;
  const close=()=>{ body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded','false'); };
  toggle.addEventListener('click',()=>{ const o=body.classList.toggle('nav-open'); toggle.setAttribute('aria-expanded',o?'true':'false'); });
  backdrop && backdrop.addEventListener('click',close);
  addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });
  document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',close));
})();
