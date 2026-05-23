/* =====================================================================
   Spacechase — brush cursor (shared)
   ---------------------------------------------------------------------
   A wet paint brush that follows the pointer and trails a smooth, fading,
   colour-drifting stroke. Self-installing: it injects its own styles and
   elements, so any page just needs:

       <script src="js/cursor.js"></script>   (near the end of <body>)

   Touch / coarse-pointer devices are skipped automatically (native cursor
   stays). Used on index + about; Gallery and Roadmap get their own cursor.
   ===================================================================== */
(function () {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  /* ---- styles ------------------------------------------------------- */
  const css = `
    .paint-trail{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9997}
    .brush{position:fixed;left:0;top:0;width:26px;height:26px;
      border-radius:58% 42% 55% 45% / 52% 48% 52% 48%;
      pointer-events:none;z-index:9999;will-change:transform;
      background:radial-gradient(circle at 40% 36%, rgb(232,88,48) 0%, rgba(232,88,48,.55) 48%, rgba(232,88,48,0) 74%);
      transition:width .35s cubic-bezier(.16,1,.3,1),height .35s cubic-bezier(.16,1,.3,1)}
    .brush::after{content:'';position:absolute;inset:36%;border-radius:50%;background:rgba(255,248,235,.92)}
    body.cursor-hover .brush{width:50px;height:50px}
    .brush-nib{position:fixed;left:0;top:0;width:5px;height:5px;border-radius:50%;
      pointer-events:none;z-index:9999;will-change:transform;
      background:#241a12;box-shadow:0 0 0 1.5px rgba(255,248,235,.6)}`;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ---- elements ----------------------------------------------------- */
  const cv = document.createElement('canvas'); cv.className = 'paint-trail';
  const brush = document.createElement('div'); brush.className = 'brush';
  const nib = document.createElement('div'); nib.className = 'brush-nib';
  document.body.append(cv, brush, nib);

  const ctx  = cv.getContext('2d');
  const buf  = document.createElement('canvas');
  const bctx = buf.getContext('2d');
  const PAL = [[232,88,48],[212,128,48],[58,122,82],[136,68,192],[34,104,216]];
  let w, h;
  const resize = () => { w = cv.width = buf.width = innerWidth; h = cv.height = buf.height = innerHeight; };
  resize(); addEventListener('resize', resize, { passive: true });

  const PTS = []; const MAX = 20, SUB = 5;
  let mx = innerWidth / 2, my = innerHeight / 2, bx = mx, by = my, spd = 0, phase = 0;
  addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });

  /* bloom over anything interactive (delegated, so it covers every page) */
  const HOT = 'a,button,.frame,.artwork,.portfolio-card,.insp-card,.portrait-art,.why__visual,.c-btn,.social-link';
  document.addEventListener('mouseover', (e) => { if (e.target.closest(HOT)) document.body.classList.add('cursor-hover'); });
  document.addEventListener('mouseout',  (e) => { if (e.target.closest(HOT)) document.body.classList.remove('cursor-hover'); });

  const colorAt = (t) => {
    const n = PAL.length, i = Math.floor(t) % n, j = (i + 1) % n, f = t - Math.floor(t);
    const a = PAL[i], b = PAL[j];
    return [Math.round(a[0]+(b[0]-a[0])*f), Math.round(a[1]+(b[1]-a[1])*f), Math.round(a[2]+(b[2]-a[2])*f)];
  };
  const cr = (p0, p1, p2, p3, t) => { const t2 = t*t, t3 = t2*t;
    return 0.5 * (2*p1 + (-p0+p2)*t + (2*p0-5*p1+4*p2-p3)*t2 + (-p0+3*p1-3*p2+p3)*t3); };

  (function loop() {
    const ox = bx, oy = by;
    bx += (mx - bx) * 0.7; by += (my - by) * 0.7;   // follows the cursor closely (1 = no smoothing)
    const v = Math.hypot(bx - ox, by - oy);
    spd += (v - spd) * 0.25;
    brush.style.transform = `translate(calc(${bx}px - 50%), calc(${by}px - 50%))`;
    nib.style.transform   = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;

    PTS.push({ x: bx, y: by, w: Math.min(2 + spd * 0.55, 9) });
    if (PTS.length > MAX) PTS.shift();

    if (v > 0.4) phase += 0.02;
    const c = colorAt(phase);
    brush.style.background = `radial-gradient(circle at 40% 36%, rgb(${c[0]},${c[1]},${c[2]}) 0%, rgba(${c[0]},${c[1]},${c[2]},.55) 48%, rgba(${c[0]},${c[1]},${c[2]},0) 74%)`;

    ctx.clearRect(0, 0, w, h);
    const n = PTS.length;
    if (n >= 3) {
      // smooth the trail's SHAPE only (render path); ends kept exact
      const S = PTS.map((p, i) => {
        if (i === 0 || i === n - 1) return p;
        const a = PTS[i-1], b = PTS[i+1];
        return { x: (a.x + 4*p.x + b.x) / 6, y: (a.y + 4*p.y + b.y) / 6, w: (a.w + 4*p.w + b.w) / 6 };
      });
      // Catmull-Rom densify for flowing curves
      const D = [];
      for (let i = 0; i < n - 1; i++) {
        const p0 = S[i-1] || S[i], p1 = S[i], p2 = S[i+1], p3 = S[i+2] || S[i+1];
        for (let s = 0; s < SUB; s++) { const t = s / SUB;
          D.push({ x: cr(p0.x,p1.x,p2.x,p3.x,t), y: cr(p0.y,p1.y,p2.y,p3.y,t),
                   w: Math.max(0, cr(p0.w,p1.w,p2.w,p3.w,t)) }); }
      }
      D.push(S[n-1]);
      const m = D.length;

      // normals; reuse last when a tangent is ~0 (no sudden flips)
      const nx = new Array(m), ny = new Array(m);
      let pnx = 0, pny = -1;
      for (let i = 0; i < m; i++) {
        const a = D[Math.max(0, i-1)], b = D[Math.min(m-1, i+1)];
        const tx = b.x - a.x, ty = b.y - a.y, len = Math.hypot(tx, ty);
        if (len < 0.001) { nx[i] = pnx; ny[i] = pny; }
        else { nx[i] = -ty/len; ny[i] = tx/len; pnx = nx[i]; pny = ny[i]; }
      }

      // oldest-first so new paint lays over old; opacity fades by AGE along the stroke
      bctx.clearRect(0, 0, w, h);
      bctx.globalCompositeOperation = 'source-over';
      let minx = 1e9, miny = 1e9, maxx = -1e9, maxy = -1e9;
      for (let i = 0; i < m - 1; i++) {
        const t0 = i / (m - 1), t1 = (i + 1) / (m - 1);
        const wi = D[i].w * t0, wj = D[i+1].w * t1;
        bctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${0.6 * t0})`;
        bctx.beginPath();
        bctx.moveTo(D[i].x   + nx[i]*wi,     D[i].y   + ny[i]*wi);
        bctx.lineTo(D[i+1].x + nx[i+1]*wj,   D[i+1].y + ny[i+1]*wj);
        bctx.lineTo(D[i+1].x - nx[i+1]*wj,   D[i+1].y - ny[i+1]*wj);
        bctx.lineTo(D[i].x   - nx[i]*wi,     D[i].y   - ny[i]*wi);
        bctx.closePath(); bctx.fill();
        if (D[i].x < minx) minx = D[i].x; if (D[i].x > maxx) maxx = D[i].x;
        if (D[i].y < miny) miny = D[i].y; if (D[i].y > maxy) maxy = D[i].y;
      }
      const head = D[m-1];
      minx = Math.min(minx, head.x); maxx = Math.max(maxx, head.x);
      miny = Math.min(miny, head.y); maxy = Math.max(maxy, head.y);

      const pad = 16;
      const rx = Math.max(0, minx - pad), ry = Math.max(0, miny - pad);
      const rw = Math.min(w, maxx + pad) - rx, rh = Math.min(h, maxy + pad) - ry;
      if (rw > 0 && rh > 0) {
        ctx.filter = 'blur(1.4px)';
        ctx.drawImage(buf, rx, ry, rw, rh, rx, ry, rw, rh);
        ctx.filter = 'none';
      }
    }
    requestAnimationFrame(loop);
  })();
})();
