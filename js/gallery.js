/* ── ALWAYS LAND AT THE TOP ON (RE)LOAD ── */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
addEventListener('load', () => scrollTo(0, 0));

/* auto-extend the copyright year: shows 2026, then 2026–YYYY in later years */
document.querySelectorAll('[data-yr]').forEach(e=>{const y=new Date().getFullYear();if(y>2026)e.textContent='2026–'+y;});

/* ── DATE FORMATTER → "01 Jan 2026" (accepts "2026-01-01" or any parseable date) ── */
function fmtDate(d){
  d = String(d).trim();
  const MON = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const iso = d.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if(iso) return `${iso[3]} ${MON[+iso[2]-1]} ${iso[1]}`;
  const t = new Date(d);
  if(!isNaN(t)) return `${String(t.getDate()).padStart(2,'0')} ${MON[t.getMonth()]} ${t.getFullYear()}`;
  return d;   // unrecognised → show as typed
}

/* ── BUILD GALLERY FROM DATA ── */
(function(){
  const RATIO = {
    tall:'ar-tall', portrait:'ar-portrait',
    square:'ar-square', wide:'ar-wide', landscape:'ar-landscape'
  };
  /* representative px dims per ratio tag → emitted as width/height so the browser
     reserves the right box BEFORE the image loads (kills layout shift + masonry
     re-layout thrash). CSS keeps aspect-ratio:auto, so the loaded image still shows
     at its TRUE ratio — nothing is ever distorted. */
  const RATIO_DIM = {
    tall:[1414,2000], portrait:[1465,2000], square:[1140,1140],
    wide:[2000,1414], landscape:[1920,1080]
  };
  /* A piece is a "study" if tagged (mode:'study') OR it reads like practice
     (study/sketch/etc. in the title, or a traditional "on paper" medium).
     Set mode:'art' or mode:'study' in gallery-data.js to control it explicitly. */
  const STUDY_RX = /stud(y|ies)|sketch|gesture|\bform\b|anatomy|\bline\b|speed|theory|exercise|practice/i;
  const MODE = it => it.mode || ((STUDY_RX.test(it.title||'') || /on paper/i.test(it.medium||'')) ? 'study' : 'art');
  const root  = document.getElementById('galleryRoot');
  const years = [...new Set(GALLERY.map(g=>g.year))].sort((a,b)=>b-a);  // newest first

  years.forEach(year=>{
    const items = GALLERY.filter(g=>g.year===year).sort((a,b)=>{
      const da=a.date?Date.parse(a.date):-Infinity, db=b.date?Date.parse(b.date):-Infinity;
      if(db!==da) return db-da;                                          // newest date on top
      return (b.file||b.title||'').localeCompare(a.file||a.title||'');   // then name, descending
    });
    const sec   = document.createElement('section');
    sec.className='year-section'; sec.id=`y${year}`;

    sec.innerHTML=`
      <div class="year-label">
        <span class="year-number">${year}</span>
        <span class="year-desc">${YEAR_DESC[year]||''}</span>
      </div>
      <div class="masonry">
        ${items.map(item=>{
          const rc = RATIO[item.ratio]||'ar-portrait';
          const title = item.title || 'Untitled';
          const med   = (item.medium || '').trim();
          const [iw,ih] = RATIO_DIM[item.ratio] || RATIO_DIM.portrait;
          const frame = item.file
            ? `<img class="art-frame ${rc}" src="../img/gallery/${item.file}" alt="${title}" width="${iw}" height="${ih}" loading="lazy" decoding="async">`
            : `<div class="art-frame ${rc} ${item.css||''}"></div>`;
          return `<article class="art-item" data-mode="${MODE(item)}"
            data-title="${title}"
            data-medium="${med}"
            data-year="${item.year}"
            ${item.date?`data-date="${item.date}"`:''}
            ${item.file?`data-file="${item.file}"`:''}
            ${item.css?`data-art="${item.css}"`:''}>${frame}
            <div class="art-caption">
              <span class="cap-title">${title}</span>
              <span class="cap-meta">${med?med.split('·')[0].trim()+' · ':''}${item.year}</span>
              ${item.date?`<span class="art-date">${fmtDate(item.date)}</span>`:''}
              ${item.note?`<p class="art-note">${item.note}</p>`:''}
            </div></article>`;
        }).join('')}
      </div>`;
    root.appendChild(sec);
  });

  /* build the year-nav pills from the same years — add a year in gallery-data.js
     and its tab appears here automatically (no HTML to edit) */
  const yearNav = document.getElementById('yearNav');
  if (yearNav) {
    yearNav.innerHTML = years.map((y,i)=>
      `<button class="yn-pill${i===0?' active':''}" data-year="y${y}">${y}</button>`
    ).join('');
  }
})();

/* ── PINTEREST MASONRY — row-first fill, shortest-column packing, no gaps ── */
(function(){
  const colSpec = () => {
    const w = innerWidth;
    return { gap: w < 600 ? 12 : 18, min: w < 600 ? 150 : (w < 1000 ? 196 : 224) };
  };
  function layout(grid){
    const w = grid.clientWidth;
    if(!w) return;
    const items = [...grid.children].filter(el => el.classList.contains('art-item') && el.offsetParent);
    const { gap, min } = colSpec();
    const cols = Math.max(1, Math.floor((w + gap) / (min + gap)));
    const colW = (w - (cols - 1) * gap) / cols;
    /* batch writes → batch reads → batch writes, so we never force a reflow per card */
    items.forEach(it => { it.style.width = colW + 'px'; });
    const heights = items.map(it => it.offsetHeight);   // one reflow to apply widths, then cached reads
    const colH = new Array(cols).fill(0);
    items.forEach((it, i) => {                           // each card → currently-shortest column, in order
      let c = 0; for(let k = 1; k < cols; k++) if(colH[k] < colH[c] - 0.5) c = k;
      it.style.left = (c * (colW + gap)) + 'px';
      it.style.top  = colH[c] + 'px';
      colH[c] += heights[i] + gap;
    });
    grid.style.height = Math.max(0, ...colH) + 'px';
  }
  const layoutAll = () => document.querySelectorAll('.masonry').forEach(layout);
  /* coalesce bursts of triggers (many lazy images finishing at once) into ONE layout per frame */
  let pending = false;
  const scheduleLayout = () => {
    if(pending) return;
    pending = true;
    requestAnimationFrame(() => { pending = false; layoutAll(); });
  };
  window.__galleryLayout = layoutAll;
  layoutAll();
  requestAnimationFrame(layoutAll);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(layoutAll);
  addEventListener('load', layoutAll);
  let t; addEventListener('resize', () => { clearTimeout(t); t = setTimeout(layoutAll, 120); }, { passive:true });
  document.querySelectorAll('img.art-frame').forEach(img =>
    img.addEventListener('load', scheduleLayout));   // was a full sync layout per image → O(n²) while scrolling
})();

/* ── MODE SWITCH — Artwork / Studies, so the wall stays manageable ── */
(function(){
  const tabs=document.querySelectorAll('.mode-tab');
  const countEl=document.getElementById('modeCount');
  const chrome=mode=>{
    document.querySelectorAll('.yn-pill').forEach(p=>{
      const sec=document.getElementById(p.dataset.year);
      p.style.display=(sec && sec.querySelector(`.art-item[data-mode="${mode}"]`))?'':'none';
    });
    const n=document.querySelectorAll(`.art-item[data-mode="${mode}"]`).length;
    if(countEl) countEl.textContent=`· ${n} ${mode==='study'?'studies & sketches':'finished pieces'}`;
  };
  const setMode=mode=>{
    document.body.dataset.gmode=mode;
    tabs.forEach(t=>{const on=t.dataset.mode===mode; t.classList.toggle('active',on); t.setAttribute('aria-selected',on);});
    document.querySelectorAll(`.art-item[data-mode="${mode}"]`).forEach(el=>el.classList.add('visible'));
    chrome(mode);
    if(window.__galleryLayout){ window.__galleryLayout(); requestAnimationFrame(window.__galleryLayout); }
    scrollTo({top:0,behavior:'smooth'});
  };
  tabs.forEach(t=>t.addEventListener('click',()=>setMode(t.dataset.mode)));
  chrome('art');
})();

/* ── CURSOR — "viewfinder" framing brackets (touch devices keep the native cursor) ── */
/* #spotlight is a small box with 4 corner brackets that trail the mouse; on hovering a photo it
   morphs to that photo's rect ("focusing the shot"). #spotDot is a tiny tick at the exact mouse. */
(function(){
  if(!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;   // reduced-motion → native cursor (see CSS)
  const frame=document.getElementById('spotlight');
  const tick =document.getElementById('spotDot');
  const body=document.body;
  ['tl','tr','bl','br'].forEach(p=>{                 // build the 4 corner brackets
    const c=document.createElement('i');
    c.className='cf-corner cf-'+p;
    frame.appendChild(c);
  });
  const IDLE=36;                                     // idle reticle size (px)
  let mx=innerWidth/2,my=innerHeight/2,framed=null,active=false;
  addEventListener('mousemove',e=>{
    mx=e.clientX; my=e.clientY;
    if(!active){ active=true; body.classList.add('spot-active'); }   // fade in on first move
  },{passive:true});
  // fade out when the pointer leaves the window (no element it moved into)
  document.addEventListener('mouseout',e=>{
    if(!e.relatedTarget){ active=false; body.classList.remove('spot-active'); }
  },{passive:true});
  document.addEventListener('mouseover',e=>{
    framed = e.target.closest('.art-frame');                        // brackets frame the photo
    body.classList.toggle('cf-framing', !!framed);                  // black outline ONLY on photos
    body.classList.toggle('cf-hot', !!e.target.closest('a,button,.art-frame,.yn-pill'));  // green on ANY clickable
  },{passive:true});
  (function loop(){
    if(framed){                                      // morph to the hovered photo's rect
      const r=framed.getBoundingClientRect();
      frame.style.width = r.width +'px';
      frame.style.height= r.height+'px';
      frame.style.transform=`translate(${r.left}px,${r.top}px)`;
    } else {                                          // small reticle centred on the cursor
      frame.style.width = IDLE+'px';
      frame.style.height= IDLE+'px';
      frame.style.transform=`translate(${mx-IDLE/2}px,${my-IDLE/2}px)`;
    }
    tick.style.transform=`translate(calc(${mx}px - 50%),calc(${my}px - 50%))`;
    requestAnimationFrame(loop);
  })();
})();

/* ── NAV HIDE ON SCROLL DOWN ── */
let lastY=0, navTick=false;
const navEl=document.getElementById('nav');
window.addEventListener('scroll',()=>{          // throttle to one transform write per frame
  if(navTick) return; navTick=true;
  requestAnimationFrame(()=>{
    const y=window.scrollY;
    navEl.style.transform=(y>lastY&&y>80)?'translateY(-100%)':'translateY(0)';
    lastY=y; navTick=false;
  });
},{passive:true});

/* ── YEAR NAV SCROLLSPY ── */
const pills = document.querySelectorAll('.yn-pill');
const spyObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)
      pills.forEach(p=>p.classList.toggle('active',p.dataset.year===e.target.id));
  });
},{rootMargin:'-30% 0px -60% 0px'});
document.querySelectorAll('.year-section').forEach(s=>spyObs.observe(s));
pills.forEach(p=>p.addEventListener('click',()=>{
  document.getElementById(p.dataset.year)?.scrollIntoView({behavior:'smooth'});
}));

/* ── STAGGER REVEAL ── */
const revObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const item=e.target;
    const idx=[...item.closest('.masonry').querySelectorAll('.art-item')].indexOf(item);
    item.style.setProperty('--i',idx%6);
    item.classList.add('visible');
    revObs.unobserve(item);
  });
},{rootMargin:'0px 0px -40px 0px',threshold:0.05});
document.querySelectorAll('.art-item').forEach(el=>revObs.observe(el));

/* ── LIGHTBOX ── */
const lightbox=document.getElementById('lightbox');
const lbArt   =document.getElementById('lbArt');
const lbTitle =document.getElementById('lbTitle');
const lbMeta  =document.getElementById('lbMeta');
let lbReturn  =null;   // element focus returns to when the lightbox closes

document.getElementById('galleryRoot').addEventListener('click',e=>{
  const frame=e.target.closest('.art-frame');
  if(!frame) return;
  const item=frame.closest('.art-item');
  const file=item.dataset.file, art=item.dataset.art;
  lbArt.className='lb-art';
  lbArt.style.width=''; lbArt.style.height=''; lbArt.style.aspectRatio='';
  if(file){                                                   // real photo → show it whole at natural aspect (CSS sizes it)
    lbArt.classList.add('lb-art--photo');
    lbArt.innerHTML=`<img src="../img/gallery/${file}" alt="${item.dataset.title}">`;
  } else {                                                    // placeholder → box in the card's ratio, fitted to the viewport (any aspect)
    lbArt.innerHTML='';
    if(art) lbArt.classList.add(art);
    const m=(getComputedStyle(frame).aspectRatio||'').match(/([\d.]+)\s*\/\s*([\d.]+)/);
    const rw=m?+m[1]:3, rh=m?+m[2]:4;
    const maxW=Math.min(innerWidth*0.86,560), maxH=Math.min(innerHeight*0.82, innerHeight-190);
    let w=maxW, h=w*rh/rw;
    if(h>maxH){ h=maxH; w=h*rw/rh; }                          // tall/portrait → bound by height instead
    lbArt.style.width=w+'px'; lbArt.style.height=h+'px';
  }
  lbTitle.textContent=item.dataset.title;
  lbMeta.textContent=item.dataset.date
    ? `${item.dataset.medium} · ${fmtDate(item.dataset.date)}`
    : `${item.dataset.medium} · ${item.dataset.year}`;
  lbReturn = document.activeElement;
  lightbox.classList.add('open');
  document.body.style.overflow='hidden';
  document.getElementById('lbClose').focus();   // move focus into the dialog
});

function closeLb(){lightbox.classList.remove('open');document.body.style.overflow='';if(lbReturn&&lbReturn.focus)lbReturn.focus();}
document.getElementById('lbClose').addEventListener('click',closeLb);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLb();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb();});
