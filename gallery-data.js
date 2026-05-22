/*
  ╔══════════════════════════════════════════════════════╗
  ║  GALLERY DATA — edit this file to manage your art      ║
  ╚══════════════════════════════════════════════════════╝

  This is YEAR ONE (2026 — where it begins). The gallery is data-driven:
  each piece is one object in the GALLERY array below, and the page builds
  the year sections + year-nav tabs automatically from the years it finds.

  ─────────────────────────────────────────────────────
  ADD A NEW YEAR (do this each year — it stays this easy):
    1. Add a caption line to YEAR_DESC, e.g.:   2027: "Finding my footing",
    2. Add pieces with  year: 2027  at the TOP of the GALLERY array
       (newest year first). The new year section AND its nav tab appear
       on their own — nothing else to wire up.

  ADD A REAL PIECE:
    1. Put the image in  img/gallery/  named:  YYYY-MM-DD-kebab-title.webp
         e.g.  2026-05-31-storm-season.webp   (lowercase, hyphens, date first)
       Images can sit in subfolders (we use  2026-art/  and  practice/ ) —
       just include the subfolder in  file:  below.
    2. Add an entry with  file:  pointing at it (path is relative to img/gallery/):
         { year:2026, title:"Storm Season", medium:"Digital · Krita",
           ratio:"square", file:"2026-art/2026-05-31-storm-season.webp", date:"2026-05-31" },
       The  file:  value must match the filename EXACTLY (case + extension).

  OPTIONAL FIELDS PER PIECE:
    date: "2026-01-01"  → handwritten date on the card + popup ("01 Jan 2026")
    mode: "art" | "study"  → which tab it shows under (auto-sorted if omitted)
    note: "…"           → 2–3 handwritten lines on the card (great for credits,
                           e.g. fan art or "study after …")

  RATIOS:  "tall" (2:3) · "portrait" (3:4) · "square" (1:1) · "wide" (4:3) · "landscape" (16:9)
*/

const YEAR_DESC = {
  2026: "Year one — where it begins",
};

/* ─── YOUR ART — newest first ─────────────────────────────────────────── */

const GALLERY = [

  /* ── 2026 · Artwork ──────────────────────────────────────────────── */
  { year:2026, title:"Charcoal Portrait", medium:"Digital · Krita", ratio:"tall",     mode:"art", file:"2026-art/2026-05-06-sad-greekguy-charcoal.webp", date:"2026-05-06", note:"Chasing soft edges and hard shadows — a portrait study in charcoal." },
  { year:2026, title:"Downstream",        medium:"Digital · Krita", ratio:"tall",     mode:"art", file:"2026-art/2026-05-03-boat-on-river-value.webp",   date:"2026-05-03", note:"A little boat on a long, winding river. Mostly an excuse to play with value and empty space." },
  { year:2026, title:"Hollow Knight",     medium:"Digital · Krita", ratio:"tall",     mode:"art", file:"2026-art/2026-05-01-hollow-knight.webp",         date:"2026-05-01", note:"Fan art, drawn out of love — Hollow Knight © Team Cherry." },
  { year:2026, title:"Spidey & Cat",      medium:"Digital · Krita", ratio:"portrait", mode:"art", file:"2026-art/2026-05-01-spiderman-cat.webp",         date:"2026-05-01", note:"Fan art — Spider-Man © Marvel." },
  { year:2026, title:"Happy Sun",         medium:"Digital · Krita", ratio:"wide",     mode:"art", file:"2026-art/2026-04-30-cartoony-sun.webp",          date:"2026-04-30", note:"Colour and shading practice — kept it loud and happy." },
  { year:2026, title:"Little Bear",       medium:"Digital · Krita", ratio:"square",   mode:"art", file:"2026-art/2026-04-29-bear-avatar.webp",           date:"2026-04-29", note:"One of my very first proper digital pieces." },

  /* ── 2026 · Studies & sketches ───────────────────────────────────── */
  { year:2026, title:"Value Study", medium:"Digital · Krita", ratio:"tall", mode:"study", file:"2026-art/2026-05-02-tom-holland-value.webp", date:"2026-05-02", note:"Black-and-white value study from a reference photo." },
  { year:2026, title:"Practice 01", medium:"Digital · Krita", ratio:"wide", mode:"study", file:"practice/001-practice.webp", note:"Warm-up, Apr–Jun 2026." },
  { year:2026, title:"Practice 02", medium:"Digital · Krita", ratio:"wide", mode:"study", file:"practice/002-practice.webp", note:"Warm-up, Apr–Jun 2026." },
  { year:2026, title:"Practice 03", medium:"Digital · Krita", ratio:"wide", mode:"study", file:"practice/003-practice.webp", note:"Warm-up, Apr–Jun 2026." },
  { year:2026, title:"Practice 04", medium:"Digital · Krita", ratio:"wide", mode:"study", file:"practice/004-practice.webp", note:"Warm-up, Apr–Jun 2026." },

];
