/*
  ╔═══════════════════════════════════════════════════════╗
  ║  PORTFOLIO DATA — edit this to manage your portfolio  ║
  ╚═══════════════════════════════════════════════════════╝

  HOW TO SWAP IN A REAL IMAGE:
  → Add  file: "my-piece.jpg"  and remove  css:
  → Put the image in  img/gallery/

  CSS PLACEHOLDERS:
    a-coral-storm   a-aqua-garden   a-golden-hour
    a-purple-haze   a-forest-dream  a-ocean-pulse
*/

/* ── THE BIG FEATURED PIECE (top showcase) ─────────── */
const FEATURED = {
  number:      "01",
  title:       "Golden Hour",
  medium:      "Digital · Procreate",
  year:        "2024",
  description: "The last light before dark. A study in warm tones and the feeling of a moment slipping away.",
  tags:        ["painting", "landscape", "light"],
  css:         "a-golden-hour",
  // file:     "golden-hour.jpg",   ← swap in when real image is ready
};

/* ── GALLERY GRID ───────────────────────────────────── */
// Add / remove entries freely — count and layout update automatically.
const GALLERY_PIECES = [
  { title:"Coral Storm",  medium:"Digital · Procreate", year:"2024", tags:["abstract","colour"],     css:"a-coral-storm"  },
  { title:"Aqua Garden",  medium:"Digital · Procreate", year:"2023", tags:["landscape","water"],     css:"a-aqua-garden"  },
  { title:"Purple Haze",  medium:"Digital · Procreate", year:"2024", tags:["atmosphere","abstract"], css:"a-purple-haze"  },
  { title:"Forest Dream", medium:"Digital · Procreate", year:"2023", tags:["environment","green"],   css:"a-forest-dream" },
  { title:"Ocean Pulse",  medium:"Digital · Procreate", year:"2023", tags:["landscape","blue"],      css:"a-ocean-pulse"  },
];

/* ── SPOTLIGHT SECTIONS (big full-width showcases) ─── */
// accentColor tints the section background subtly
const SPOTLIGHTS = [
  {
    number:      "02",
    title:       "Aqua Garden",
    medium:      "Digital · Procreate",
    year:        "2023",
    description: "Still water, moving light. A meditation on cool colours and the quiet of nature.",
    tags:        ["landscape", "water", "calm"],
    css:         "a-aqua-garden",
    accentColor: "#3a7a52",
  },
  {
    number:      "03",
    title:       "Purple Haze",
    medium:      "Digital · Procreate",
    year:        "2024",
    description: "Purple bleeds into dark. An atmospheric study in mystery and depth.",
    tags:        ["atmosphere", "abstract", "mood"],
    css:         "a-purple-haze",
    accentColor: "#6a28a8",
  },
];
