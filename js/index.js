/* ── CURSOR: the shared brush cursor lives in js/cursor.js (loaded below) ── */

/* ── ALWAYS LAND AT THE TOP ON (RE)LOAD ── */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
addEventListener('load', () => scrollTo(0, 0));

/* auto-extend the copyright year: shows 2026, then 2026–YYYY in later years */
document.querySelectorAll('[data-yr]').forEach(e=>{const y=new Date().getFullYear();if(y>2026)e.textContent='2026–'+y;});

/* ── NAV ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('solid',window.scrollY>50),{passive:true});

/* ── BUILD FEATURED ── */
function buildFeatured() {
  const root = document.getElementById('featuredRoot');
  const f = FEATURED;
  root.dataset.num = f.number;

  const artHtml = f.file
    ? `<img src="../img/gallery/${f.file}" alt="${f.title}" class="art-canvas" decoding="async" fetchpriority="high">`
    : `<div class="art-canvas ${f.css || ''}"></div>`;

  root.innerHTML = `
    <div class="featured-inner">
      <div class="featured__frame">
        <div class="artwork artwork--featured"
          ${f.css  ? `data-css="${f.css}"`   : ''}
          ${f.file ? `data-file="${f.file}"` : ''}>
          ${artHtml}
        </div>
        <div class="featured__plate"><b>No. ${f.number}</b><span class="plate-dot"></span>${f.title}</div>
      </div>
      <div class="featured__info">
        <div class="featured__num">No. ${f.number}</div>
        <h2 class="featured__title">${f.title}</h2>
        <p class="featured__year">${f.medium} · ${f.year}</p>
        <p class="featured__desc">${f.description}</p>
        <div class="tag-list">
          ${f.tags.map(t=>`<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>`;
}

/* representative px dims per ratio tag → width/height attrs reserve the box before
   load (no layout shift); CSS aspect-ratio:auto keeps the real image undistorted. */
const RATIO_DIM = {
  tall:[1414,2000], portrait:[1465,2000], square:[1140,1140],
  wide:[2000,1414], landscape:[1920,1080]
};

/* ── BUILD GALLERY ── */
function buildGallery() {
  const root    = document.getElementById('galleryRoot');
  const countEl = document.getElementById('galleryCount');
  countEl.textContent = String(GALLERY_PIECES.length).padStart(2,'0') + ' pieces';

  GALLERY_PIECES.forEach((p, i) => {
    const [pw,ph] = RATIO_DIM[p.ratio] || RATIO_DIM.portrait;
    const artHtml = p.file
      ? `<img src="../img/gallery/${p.file}" alt="${p.title || 'Untitled'}" width="${pw}" height="${ph}" class="art-canvas" loading="lazy" decoding="async">`
      : `<div class="art-canvas ${p.css || ''}"></div>`;

    const card = document.createElement('article');
    card.className = 'portfolio-card';
    card.style.setProperty('--i', Math.min(i, 5));
    if (p.css)  card.dataset.css  = p.css;
    if (p.file) card.dataset.file = p.file;

    const num = String(i + 1).padStart(2, '0');
    card.innerHTML = `
      <div class="pc-frame${p.file ? ' pc-frame--photo' : ''}">
        ${artHtml}
        <div class="pc-overlay">
          <span class="pc-num">#${num}</span>
          <h3 class="pc-title">${p.title}</h3>
          <p class="pc-meta">${p.medium} · ${p.year}</p>
          <div class="pc-tags">${p.tags.map(t=>`<span class="pc-tag">${t}</span>`).join('')}</div>
          <button class="pc-view">View ⤢</button>
        </div>
      </div>
      <div class="pc-caption">
        <span class="pc-caption-title">${p.title}</span>
        <span class="pc-caption-num">#${num}</span>
      </div>`;

    root.appendChild(card);
  });
}

/* ── BUILD SPOTLIGHTS ── */
function buildSpotlights() {
  const root = document.getElementById('spotlightsRoot');

  SPOTLIGHTS.forEach((s, i) => {
    const artHtml = s.file
      ? `<img src="../img/gallery/${s.file}" alt="${s.title}" class="art-canvas" loading="lazy" decoding="async">`
      : `<div class="art-canvas ${s.css || ''}"></div>`;

    const artBlock = `
      <div class="artwork artwork--spotlight"
        ${s.css  ? `data-css="${s.css}"`   : ''}
        ${s.file ? `data-file="${s.file}"` : ''}>
        ${artHtml}
      </div>`;

    const textBlock = `
      <div class="spotlight__text">
        <span class="spotlight__num">No. ${s.number}</span>
        <h2 class="spotlight__title">${s.title}</h2>
        <p class="spotlight__body">${s.description}</p>
        <div class="tag-list" style="margin-bottom:1.4rem;">
          ${s.tags.map(t=>`<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="spotlight__meta">${s.medium} · ${s.year}</div>
      </div>`;

    const section = document.createElement('section');
    section.className = `spotlight reveal ${i % 2 === 0 ? 'sp-even' : 'sp-odd'}`;
    section.dataset.num = s.number;
    section.style.background =
      `linear-gradient(135deg,${s.accentColor}22 0%,transparent 60%),var(--cream)`;

    // colored blob accent
    const blob = document.createElement('div');
    blob.className = 'spot-blob';
    blob.style.cssText = `--c:${s.accentColor};--op:.1;--w:240px;--h:220px;--y:${i%2===0?'10%':'60%'};--x:${i%2===0?'60%':'5%'}`;

    // sparkle cluster (5 stars scattered around)
    const sparkData = [
      {ch:'✦',sz:1.6,op:.55,dur:5,del:0,  x:i%2===0?'58%':'8%', y:'12%', clr:s.accentColor},
      {ch:'✧',sz:1.0,op:.45,dur:7,del:.7, x:i%2===0?'75%':'25%',y:'22%', clr:'var(--amber)'},
      {ch:'✶',sz:1.3,op:.5, dur:6,del:.4, x:i%2===0?'62%':'12%',y:'72%', clr:s.accentColor},
      {ch:'✦',sz:0.8,op:.4, dur:8,del:1.1,x:i%2===0?'85%':'35%',y:'55%', clr:'var(--coral)'},
      {ch:'✧',sz:1.8,op:.3, dur:9,del:1.8,x:i%2===0?'68%':'18%',y:'40%', clr:'var(--plum)'},
    ];
    const sparkHtml = sparkData.map(d =>
      `<span class="sp-sparkle" style="--sz:${d.sz}rem;--clr:${d.clr};--op:${d.op};--dur:${d.dur}s;--del:${d.del}s;--x:${d.x};--y:${d.y}">${d.ch}</span>`
    ).join('');

    section.innerHTML = (i % 2 === 0 ? artBlock + textBlock : textBlock + artBlock) + sparkHtml;
    section.appendChild(blob);

    root.appendChild(section);
  });
}

/* ── INIT ── */
buildFeatured();
buildGallery();
buildSpotlights();

/* ── SCROLL REVEAL ── */
const ro = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if (e.isIntersecting) { e.target.classList.add('in-view'); ro.unobserve(e.target); }
  });
},{threshold:.1, rootMargin:'0px 0px -48px 0px'});
document.querySelectorAll('.reveal, .portfolio-card').forEach(el=>ro.observe(el));

/* ── CURSOR HOVER ── */
function addHover(sel) {
  document.querySelectorAll(sel).forEach(el=>{
    el.addEventListener('mouseenter',()=>document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave',()=>document.body.classList.remove('cursor-hover'));
  });
}
addHover('a, button, .artwork, .portfolio-card');

/* ── LIGHTBOX ── */
const lb       = document.getElementById('lightbox');
const lbCanvas = document.getElementById('lbCanvas');

let lbReturn = null;   // element focus returns to when the lightbox closes
function openLb(src) {
  if (!src.file && !src.css) return;              // nothing to show → don't open a blank box
  lbReturn = document.activeElement;
  lbCanvas.innerHTML = '';
  lbCanvas.className = 'lightbox__canvas';
  lb.classList.toggle('lb-photo', !!src.file);   // real image → fit whole image to screen
  if (src.file) {
    const img = document.createElement('img');
    img.src = `../img/gallery/${src.file}`;
    img.alt = src.title || 'Artwork, enlarged view'; img.decoding = 'async';
    lbCanvas.appendChild(img);
  } else if (src.css) {
    lbCanvas.classList.add(src.css);
  }
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('lbClose').focus();    // move focus into the dialog
}
function closeLb() { lb.classList.remove('open'); document.body.style.overflow = ''; if (lbReturn && lbReturn.focus) lbReturn.focus(); }

document.addEventListener('click', e => {
  if (e.target.id === 'lbClose' || e.target.id === 'lbBack') { closeLb(); return; }

  const card = e.target.closest('.portfolio-card');
  if (card) { openLb({ css: card.dataset.css, file: card.dataset.file, title: card.querySelector('.pc-title')?.textContent }); return; }

  const artwork = e.target.closest('.artwork[data-css], .artwork[data-file]');
  if (artwork && !artwork.closest('#lightbox')) {
    openLb({ css: artwork.dataset.css, file: artwork.dataset.file });
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
