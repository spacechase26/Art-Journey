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

  ADD A REAL PIECE (replacing a placeholder):
    1. Put the image in  img/gallery/  named:  YYYY-MM-DD-kebab-title.webp
         e.g.  2026-05-31-storm-season.webp
       • all lowercase, hyphens between words (NO spaces / underscores / symbols)
       • date first so the folder stays sorted; prefer .webp (.jpg ok; .png only
         if you need transparency)
    2. Give the entry a  file:  and remove its  css:  line — the  file:  value
       must match the filename EXACTLY (case + extension):
         { year: 2026, title: "Storm Season", medium: "Digital · Procreate",
           ratio: "portrait", file: "2026-05-31-storm-season.webp", date: "2026-05-31" },

  USE A PLACEHOLDER (no image yet) — use  css:  instead of  file: :
         { year: 2026, title: "WIP Sketch", medium: "Pencil on Paper",
           ratio: "tall", css: "a-sketch-ink" },

  OPTIONAL FIELDS PER PIECE:
    date: "2026-01-01"  → handwritten date on the card + popup ("01 Jan 2026")
    mode: "art" | "study"  → which tab it shows under (auto-sorted if omitted)
    note: "…"           → 2–3 handwritten lines on the card

  RATIOS:  "tall" (2:3) · "portrait" (3:4) · "square" (1:1) · "wide" (4:3) · "landscape" (16:9)
  PLACEHOLDER NAMES:
    a-coral-storm  a-aqua-garden  a-golden-hour  a-purple-haze  a-forest-dream
    a-ocean-pulse  a-figure-one   a-figure-two   a-figure-three a-figure-four
    a-land-dawn    a-land-sunset  a-land-forest  a-land-mist    a-abs-split
    a-abs-burst    a-abs-layers   a-abs-neon     a-sketch-ink   a-sketch-charcoal
    a-exp-acid     a-exp-duotone
*/

const YEAR_DESC = {
  2026: "Year one — where it begins",
};

/* ─── YOUR ART — newest year first ───────────────────────────────────
   These are placeholders for now (css:). Swap each for a real image with
   file: as you finish pieces. Delete any you don't want — the wall and the
   "X pieces" count update on their own.
─────────────────────────────────────────────────────────────────────── */

const GALLERY = [

  /* ── 2026 — year one ─────────────────────────────────────────────── */
  { year:2026, title:"First Marks",      medium:"Pencil on Paper",      ratio:"portrait",  css:"a-sketch-ink",     mode:"study", date:"2026-01-09", note:"The very first page. Shaky lines, but a start." },
  { year:2026, title:"Warm-up Studies",  medium:"Digital · Procreate",  ratio:"square",    css:"a-figure-one",     mode:"study", date:"2026-01-22" },
  { year:2026, title:"Colour, Day One",  medium:"Digital · Procreate",  ratio:"landscape", css:"a-exp-acid",       mode:"art",   date:"2026-02-06", note:"First time really pushing colour. Loud — on purpose." },
  { year:2026, title:"Quiet Morning",    medium:"Digital · Procreate",  ratio:"portrait",  css:"a-land-dawn",      date:"2026-02-20" },
  { year:2026, title:"Ink Study",        medium:"Ink on Paper",         ratio:"tall",      css:"a-sketch-charcoal",mode:"study", date:"2026-03-05" },
  { year:2026, title:"Storm Feelings",   medium:"Digital · Procreate",  ratio:"square",    css:"a-coral-storm",    date:"2026-03-21" },
  { year:2026, title:"Still Water",      medium:"Digital · Procreate",  ratio:"portrait",  css:"a-aqua-garden",    date:"2026-04-08" },
  { year:2026, title:"Last Light",       medium:"Digital · Procreate",  ratio:"landscape", css:"a-land-sunset",    date:"2026-05-02", note:"Learning how light falls at the end of the day." },

];
