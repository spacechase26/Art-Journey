/*
  ╔══════════════════════════════════════════════════════╗
  ║  GALLERY DATA — edit this file to manage your art   ║
  ╚══════════════════════════════════════════════════════╝

  HOW TO ADD A REAL PIECE:
  ─────────────────────────────────────────────────────
  1. Put your image file in the  img/gallery/  folder
  2. Add one entry to the GALLERY array below:

     { year: 2026, title: "My Drawing", medium: "Digital · Procreate",
       ratio: "portrait", file: "my-drawing.jpg" },

  HOW TO USE A PLACEHOLDER (no image yet):
  ─────────────────────────────────────────────────────
  Leave out `file` and use `css` instead:

     { year: 2026, title: "WIP Sketch", medium: "Pencil on Paper",
       ratio: "tall", css: "a-sketch-ink" },

  RATIO OPTIONS:
    "tall"      → vertical, very tall   (2:3)
    "portrait"  → vertical, portrait    (3:4)
    "square"    → square                (1:1)
    "wide"      → horizontal, wide      (4:3)
    "landscape" → horizontal, cinematic (16:9)

  CSS PLACEHOLDER OPTIONS (use when no real image):
    a-coral-storm   a-aqua-garden   a-golden-hour   a-purple-haze
    a-forest-dream  a-ocean-pulse   a-figure-one    a-figure-two
    a-figure-three  a-figure-four   a-land-dawn     a-land-sunset
    a-land-forest   a-land-mist     a-abs-split     a-abs-burst
    a-abs-layers    a-abs-neon      a-sketch-ink    a-sketch-charcoal
    a-exp-acid      a-exp-duotone

  YEAR DESCRIPTIONS (edit these too if you want):
*/

const YEAR_DESC = {
  2023: "Where it all began",
  2024: "Finding a direction",
  2025: "Growing confidence",
  2026: "Work in progress",
};

/* ─── YOUR ART — newest year first ───────────────────
   Two optional fields per piece:
     mode: "art"   → shows under the Artwork tab
     mode: "study" → shows under the Studies & Sketches tab
        (omit it and it's auto-sorted: titles with study/sketch/gesture/…,
         or an "on Paper" medium, go to Studies; everything else to Artwork)
     note: "…"     → 2–3 handwritten lines on the card (optional)
─────────────────────────────────────────────────── */

const GALLERY = [

  /* ── 2026 ──────────────────────────────────────────
     Replace css: with file: once you have real images
     Example: file: "storm-season.jpg"
  ─────────────────────────────────────────────────── */
  { year:2026, title:"Chromatic Shift",   medium:"Digital · Procreate",  ratio:"portrait",  css:"a-exp-acid",     mode:"art",   note:"Pushed the colours way past comfortable. Learned a lot about hue balance here." },
  { year:2026, title:"Self Portrait 2026",medium:"Digital · Procreate",  ratio:"tall",      css:"a-figure-four",  mode:"art",   note:"Third try this year. Still fighting the nose — but the eyes finally feel like mine." },
  { year:2026, title:"Night Grid",        medium:"Digital · Procreate",  ratio:"landscape", css:"a-abs-neon"       },
  { year:2026, title:"Horizon",           medium:"Digital · Procreate",  ratio:"portrait",  css:"a-land-sunset"    },
  { year:2026, title:"Storm Season",      medium:"Digital · Procreate",  ratio:"square",    css:"a-coral-storm"    },
  { year:2026, title:"Ink Study IV",      medium:"Ink on Paper",         ratio:"tall",      css:"a-sketch-ink"     },
  { year:2026, title:"Split Tone",        medium:"Digital · Procreate",  ratio:"landscape", css:"a-exp-duotone"    },
  { year:2026, title:"New Energy",        medium:"Digital · Procreate",  ratio:"portrait",  css:"a-abs-burst"      },
  { year:2026, title:"Study 2026",        medium:"Digital · Procreate",  ratio:"square",    css:"a-figure-one"     },
  { year:2026, title:"First Light 2026",  medium:"Digital · Procreate",  ratio:"tall",      css:"a-land-dawn"      },
  { year:2026, title:"Clean Break",       medium:"Digital · Procreate",  ratio:"landscape", css:"a-abs-split"      },
  { year:2026, title:"Still Waters",      medium:"Digital · Procreate",  ratio:"portrait",  css:"a-aqua-garden"    },

  /* ── 2025 ─────────────────────────────────────────── */
  { year:2025, title:"Hue Shift",         medium:"Digital · Procreate",  ratio:"landscape", css:"a-exp-acid"       },
  { year:2025, title:"Still Water II",    medium:"Digital · Procreate",  ratio:"portrait",  css:"a-aqua-garden"    },
  { year:2025, title:"Neon Grid",         medium:"Digital · Procreate",  ratio:"square",    css:"a-abs-neon"       },
  { year:2025, title:"Sunset Palette",    medium:"Digital · Procreate",  ratio:"landscape", css:"a-land-sunset"    },
  { year:2025, title:"Form Study",        medium:"Digital · Procreate",  ratio:"tall",      css:"a-figure-one"     },
  { year:2025, title:"Two Tones",         medium:"Digital · Procreate",  ratio:"portrait",  css:"a-exp-duotone"    },
  { year:2025, title:"Last Light",        medium:"Digital · Procreate",  ratio:"landscape", css:"a-golden-hour"    },
  { year:2025, title:"Duality II",        medium:"Digital · Procreate",  ratio:"square",    css:"a-abs-split"      },
  { year:2025, title:"Dawn Breaks",       medium:"Digital · Procreate",  ratio:"portrait",  css:"a-land-dawn"      },
  { year:2025, title:"Figure in Blue",    medium:"Digital · Procreate",  ratio:"tall",      css:"a-figure-two"     },
  { year:2025, title:"Radial Energy",     medium:"Digital · Procreate",  ratio:"landscape", css:"a-abs-burst"      },
  { year:2025, title:"Violet Study",      medium:"Digital · Procreate",  ratio:"portrait",  css:"a-purple-haze"    },
  { year:2025, title:"Green Canopy",      medium:"Digital · Procreate",  ratio:"square",    css:"a-land-forest"    },
  { year:2025, title:"Charcoal Portrait", medium:"Charcoal on Paper",    ratio:"tall",      css:"a-sketch-charcoal"},
  { year:2025, title:"Speed Study",       medium:"Digital · Procreate",  ratio:"landscape", css:"a-figure-three"   },
  { year:2025, title:"Glass Layers",      medium:"Digital · Procreate",  ratio:"portrait",  css:"a-abs-layers"     },
  { year:2025, title:"Deep Blue",         medium:"Digital · Procreate",  ratio:"tall",      css:"a-ocean-pulse"    },
  { year:2025, title:"Morning Haze",      medium:"Digital · Procreate",  ratio:"landscape", css:"a-land-mist"      },

  /* ── 2024 ─────────────────────────────────────────── */
  { year:2024, title:"Dusk Palette",      medium:"Digital · Procreate",  ratio:"landscape", css:"a-land-sunset"    },
  { year:2024, title:"Neon Dreams",       medium:"Digital · Procreate",  ratio:"tall",      css:"a-abs-neon"       },
  { year:2024, title:"Purple Haze",       medium:"Digital · Procreate",  ratio:"portrait",  css:"a-purple-haze"    },
  { year:2024, title:"Colour Theory",     medium:"Digital · Procreate",  ratio:"square",    css:"a-exp-acid"       },
  { year:2024, title:"Anatomy Study",     medium:"Digital · Procreate",  ratio:"portrait",  css:"a-figure-one"     },
  { year:2024, title:"Before Sunrise",    medium:"Digital · Procreate",  ratio:"landscape", css:"a-land-dawn"      },
  { year:2024, title:"Split Horizon",     medium:"Digital · Procreate",  ratio:"tall",      css:"a-abs-split"      },
  { year:2024, title:"Forest Dream",      medium:"Digital · Procreate",  ratio:"portrait",  css:"a-forest-dream"   },
  { year:2024, title:"Cool Light Study",  medium:"Digital · Procreate",  ratio:"square",    css:"a-figure-two"     },
  { year:2024, title:"Duotone Study",     medium:"Digital · Procreate",  ratio:"landscape", css:"a-exp-duotone"    },
  { year:2024, title:"Low Fog",           medium:"Digital · Procreate",  ratio:"portrait",  css:"a-land-mist"      },
  { year:2024, title:"Explosion Study",   medium:"Digital · Procreate",  ratio:"tall",      css:"a-abs-burst"      },
  { year:2024, title:"Charcoal Mood",     medium:"Charcoal on Paper",    ratio:"landscape", css:"a-sketch-charcoal"},
  { year:2024, title:"Motion Study",      medium:"Digital · Procreate",  ratio:"portrait",  css:"a-figure-three"   },
  { year:2024, title:"Transparency",      medium:"Digital · Procreate",  ratio:"square",    css:"a-abs-layers"     },
  { year:2024, title:"Into the Canopy",   medium:"Digital · Procreate",  ratio:"tall",      css:"a-land-forest"    },
  { year:2024, title:"Coral Study",       medium:"Digital · Procreate",  ratio:"portrait",  css:"a-coral-storm"    },
  { year:2024, title:"Ink Study III",     medium:"Ink on Paper",         ratio:"landscape", css:"a-sketch-ink"     },
  { year:2024, title:"Close Portrait",    medium:"Digital · Procreate",  ratio:"square",    css:"a-figure-four"    },
  { year:2024, title:"Night Signal",      medium:"Digital · Procreate",  ratio:"tall",      css:"a-abs-neon"       },

  /* ── 2023 ─────────────────────────────────────────── */
  { year:2023, title:"First Face Study",  medium:"Pencil on Paper",      ratio:"tall",      css:"a-figure-one"     },
  { year:2023, title:"Line Study No. 1",  medium:"Ink on Paper",         ratio:"portrait",  css:"a-sketch-ink"     },
  { year:2023, title:"Morning Light",     medium:"Digital · Procreate",  ratio:"landscape", css:"a-land-dawn"      },
  { year:2023, title:"Duality",           medium:"Digital · Procreate",  ratio:"portrait",  css:"a-abs-split"      },
  { year:2023, title:"Storm Feelings",    medium:"Digital · Procreate",  ratio:"tall",      css:"a-coral-storm"    },
  { year:2023, title:"Backlit Figure",    medium:"Digital · Procreate",  ratio:"portrait",  css:"a-figure-two"     },
  { year:2023, title:"Charcoal Study I",  medium:"Charcoal on Paper",    ratio:"square",    css:"a-sketch-charcoal"},
  { year:2023, title:"Foggy Morning",     medium:"Digital · Procreate",  ratio:"landscape", css:"a-land-mist"      },
  { year:2023, title:"Strata",            medium:"Digital · Procreate",  ratio:"tall",      css:"a-abs-layers"     },
  { year:2023, title:"Gesture Study",     medium:"Pencil on Paper",      ratio:"portrait",  css:"a-figure-three"   },
  { year:2023, title:"Water Garden",      medium:"Digital · Procreate",  ratio:"tall",      css:"a-aqua-garden"    },
  { year:2023, title:"Forest Path",       medium:"Digital · Procreate",  ratio:"landscape", css:"a-land-forest"    },
  { year:2023, title:"Energy Burst",      medium:"Digital · Procreate",  ratio:"square",    css:"a-abs-burst"      },
  { year:2023, title:"Golden Hour",       medium:"Digital · Procreate",  ratio:"portrait",  css:"a-golden-hour"    },
  { year:2023, title:"Portrait Study I",  medium:"Digital · Procreate",  ratio:"tall",      css:"a-figure-four"    },
  { year:2023, title:"Ocean Pulse",       medium:"Digital · Procreate",  ratio:"landscape", css:"a-ocean-pulse"    },

];
