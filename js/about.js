/* cursor: shared brush cursor — see js/cursor.js (loaded below) */

/* ── ALWAYS LAND AT THE TOP ON (RE)LOAD ── */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
addEventListener('load', () => scrollTo(0, 0));

/* auto-extend the copyright year: shows 2026, then 2026–YYYY in later years */
document.querySelectorAll('[data-yr]').forEach(e=>{const y=new Date().getFullYear();if(y>2026)e.textContent='2026–'+y;});

/* ── NAV ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('solid',scrollY>55),{passive:true});

/* ── SCROLL REVEAL ── */
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in-view');io.unobserve(e.target);}
  });
},{threshold:.1,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.reveal,.reveal-child').forEach(el=>io.observe(el));
