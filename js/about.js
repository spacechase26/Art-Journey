/* cursor: shared brush cursor — see js/cursor.js (loaded below) */

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
