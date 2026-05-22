/*
  ╔═══════════════════════════════════════════════════════╗
  ║  PORTFOLIO DATA — edit this to manage your home page  ║
  ╚═══════════════════════════════════════════════════════╝

  This is the curated "best of" shown on the home page (a Featured piece,
  a small grid, and big Spotlights). The full set lives in the Gallery
  (gallery-data.js).

  Each piece points at an image with  file:  (path relative to img/gallery/).
  Naming: img/gallery/[subfolder/]YYYY-MM-DD-kebab-title.webp
  To use a coloured placeholder instead of an image, use  css:  instead of file:.
*/

/* ── THE BIG FEATURED PIECE (top showcase) ─────────── */
const FEATURED = {
  number:      "01",
  title:       "Downstream",
  medium:      "Digital · Krita",
  year:        "2026",
  description: "A small boat on a long, winding river — my favourite from this first stretch. Mostly an excuse to play with value and a lot of empty space.",
  tags:        ["original", "landscape", "value"],
  file:        "2026-art/2026-05-03-boat-on-river-value.webp",
};

/* ── GALLERY GRID ───────────────────────────────────── */
// Add / remove entries freely — count and layout update automatically.
const GALLERY_PIECES = [
  { title:"Spidey & Cat", medium:"Digital · Krita", year:"2026", tags:["fan art","character"],  file:"2026-art/2026-05-01-spiderman-cat.webp" },
  { title:"Value Study",  medium:"Digital · Krita", year:"2026", tags:["study","portrait"],     file:"2026-art/2026-05-02-tom-holland-value.webp" },
  { title:"Happy Sun",    medium:"Digital · Krita", year:"2026", tags:["cartoon","colour"],      file:"2026-art/2026-04-30-cartoony-sun.webp" },
  { title:"Little Bear",  medium:"Digital · Krita", year:"2026", tags:["cartoon","first piece"], file:"2026-art/2026-04-29-bear-avatar.webp" },
];

/* ── SPOTLIGHT SECTIONS (big full-width showcases) ─── */
// accentColor tints the section background subtly
const SPOTLIGHTS = [
  {
    number:      "02",
    title:       "Hollow Knight",
    medium:      "Digital · Krita",
    year:        "2026",
    description: "Fan art of the Knight under a quiet, starry sky — drawn out of love, not for sale. Hollow Knight © Team Cherry.",
    tags:        ["fan art", "atmosphere", "painting"],
    file:        "2026-art/2026-05-01-hollow-knight.webp",
    accentColor: "#3a5c8c",
  },
  {
    number:      "03",
    title:       "Charcoal Portrait",
    medium:      "Digital · Krita",
    year:        "2026",
    description: "A charcoal-style portrait study — chasing soft edges, hard shadows, and a little bit of feeling.",
    tags:        ["portrait", "charcoal", "study"],
    file:        "2026-art/2026-05-06-sad-greekguy-charcoal.webp",
    accentColor: "#6a6356",
  },
];
