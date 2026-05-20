
"use strict";

// ─── Data ───
// Each phase: {n, id, color, title, dur:[startWk,endWk], srcWks, srcHrs, goal, weeklyStruct, ratio, milestone:{name,quant,criteria}, weeks:[...]}
// Each week: {wn, label, tag, watch, practice, days:[7 day arrays]}
// Each day:  {dow, type:S|A|L|R, items:[[time,label],...]} or {dow, type:'R', rest:true}

const PHASES = [];

// ── PHASE 1 — Mark-Making (wks 1–5)
PHASES.push({
  n:1, id:'p1', color:'amber', title:'Mark-Making, Line Control & Construction',
  dur:[1,5], srcWks:'1–4', srcHrs:'~25–30',
  goal:'Rewire mark-making before subject matter. Replace symbol-drawing with spatial thinking. Drawabox Lessons 0–3 + 250 Box Challenge. Start gesture and imagination habits in parallel from Day 1 (Phase 2 enters in light).',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application · Sat Light · Sun Rest',
  ratio:'Study 70 · Application 20 · Imagination 10',
  milestone:{
    name:'Drawabox L0–3 complete + 5 fan-art sketches + 250 boxes',
    quant:'~250 boxes; ~15–20 organic forms (L2); ~10 plant/overlapping studies (L3); 5 fan-art loose sketches; 30+ daily imagination sketches; ~12 blind contours',
    criteria:'Pass: confident ghosted strokes without pressing; can rough-construct primitives in 3D from imagination; daily 5-min imagination habit is automatic. Repeat last 1 wk if ghosting still tentative or boxes still wobble noticeably.'
  },
  weeks:[
    // Week 1 — Drawabox L0 + L1 (lines, planes)
    { wn:1, label:'Drawabox L0 + L1 — lines & planes', watch:'~50 min Drawabox L0–L1 videos', practice:'Superimposed lines, ghosted lines, ghosted planes',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch — favorite character, low stakes (Track D begins today)'],
          ['7 min warmup','Drawabox L0: tools page + first marks'],
          ['18 min watch','Drawabox Lesson 0 — Introduction & tools'],
          ['40 min practice','L0 starter pages: warmup marks, lines exercise (1 page)'],
          ['5 min','Physical sketchbook doodle, anything']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Superimposed lines drill — 2 rows'],
          ['18 min','Gesture session on line-of-action.com — 30s × 8 then 2-min × 5 (always-on habit begins)'],
          ['40 min','Fan-art sketch #1 — favorite character, loose, no stakes (Track D)'],
          ['10 min','Daily imagination sketch']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill — 5 primitives from imagination'],
          ['20 min watch','Drawabox L1 — Superimposed Lines + Ghosted Lines videos'],
          ['40 min practice','L1 Superimposed Lines exercise (1 full page)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Ghosted lines — 2 rows'],
          ['10 min','Blind Contour Drawing — 1 object (Phase 1 wks 1–4 only)'],
          ['20 min','Gesture session line-of-action.com — 30s + 2-min mix'],
          ['30 min','Fan-art sketch continued — loosen up, add gesture'],
          ['5 min','Imagination sketch']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['8 min warmup','Ghosted lines drill — accuracy focus'],
          ['18 min watch','Drawabox L1 — Ghosted Planes video'],
          ['40 min practice','L1 Ghosted Planes exercise (1 full page)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['25 min','Gesture session — extended 30s + 2-min'],
          ['25 min','Brent Eviston — Art & Science of Drawing, Section 1 watch + first contour exercises']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    // Week 2 — L1 wrap + 250 Box start
    { wn:2, label:'L1 wrap + 250 Box Challenge start', watch:'~35 min L1 ellipses + L2 intro', practice:'Ellipses, table of ellipses, ~120 boxes',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ghosted lines'],
          ['18 min watch','Drawabox L1 — Ellipses / Tables of Ellipses video'],
          ['40 min practice','Tables of Ellipses (1 page) + Ellipses in Planes (1 page)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Daily Form Fill'],
          ['10 min','Blind Contour'],
          ['20 min','Gesture session line-of-action.com'],
          ['35 min','Fan-art sketch #2 — different character or pose'],
          ['5 min','Imagination sketch']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ellipses drill'],
          ['15 min watch','Drawabox L1 — Boxes / 250 Box Challenge intro video'],
          ['45 min practice','250 Box Challenge — boxes 1–20 (carefully, with line extensions)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Ghosted lines + ellipses'],
          ['18 min','Gesture session line-of-action.com'],
          ['35 min','Fan-art sketch #2 continued + a small environment doodle'],
          ['10 min','Daily imagination sketch']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ellipses'],
          ['10 min watch','Ctrl+Paint — Section 1 first videos (mark-making intro, free)'],
          ['55 min practice','250 Box Challenge — boxes 21–55 (push for confident strokes)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['20 min','Gesture session — 30s + 2-min'],
          ['30 min','Brent Eviston Section 1–2 watch + a contour observation exercise']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    // Week 3 — 250 Box finish + L2 start
    { wn:3, label:'250 Box finish + L2 organic forms', watch:'~30 min L2 organic forms videos', practice:'~130 more boxes + arrows + organic forms intro',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ghosted lines'],
          ['10 min','Blind Contour Drawing'],
          ['55 min practice','250 Box Challenge — boxes 56–95']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Daily Form Fill'],
          ['20 min','Gesture session line-of-action.com'],
          ['35 min','Fan-art sketch #3 — try a new pose or angle'],
          ['10 min','Daily imagination sketch']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ellipses + ghosted lines'],
          ['10 min','Blind Contour'],
          ['55 min practice','250 Box Challenge — boxes 96–140 (push speed without losing accuracy)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Daily Form Fill'],
          ['20 min','Gesture session line-of-action.com'],
          ['40 min','Loose imagination scene — a character in a tiny room (no rulers, no detail)'],
          ['8 min','Daily imagination sketch']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ghosted lines'],
          ['15 min watch','Drawabox L2 — Arrows + Organic Forms videos'],
          ['50 min practice','250 Box Challenge — boxes 141–185']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['25 min','Gesture session — extended'],
          ['25 min','Brent Eviston Section 2–3 watch + observation exercise']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    // Week 4 — L2 organic forms + 250 Box wrap
    { wn:4, label:'L2 organic forms + finish 250 boxes', watch:'~25 min L2 organic forms + texture intro', practice:'Last 65 boxes + organic forms + arrows',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ghosted lines'],
          ['10 min','Blind Contour Drawing (final week)'],
          ['18 min watch','Drawabox L2 — Organic Forms with Contour Lines'],
          ['35 min practice','L2 Organic Forms exercise (1 page) + finish 250 boxes 186–220']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Daily Form Fill'],
          ['20 min','Gesture session line-of-action.com'],
          ['40 min','Fan-art sketch #4 — push a tricky angle or interaction'],
          ['8 min','Daily imagination sketch']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ellipses'],
          ['10 min','Blind Contour Drawing (final reps)'],
          ['58 min practice','250 Box Challenge — boxes 221–250 (finish) + extra organic forms']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Daily Form Fill'],
          ['20 min','Gesture session line-of-action.com'],
          ['40 min','Fan-art sketch #5 — try a small full scene'],
          ['8 min','Daily imagination sketch']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ghosted lines'],
          ['18 min watch','Drawabox L2 — Texture & Form Intersections (skim — apply later as needed)'],
          ['40 min practice','L2 Organic Forms with Contour Lines + Arrows exercises'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['25 min','Gesture session'],
          ['25 min','Ctrl+Paint Section 2 watch + small value-line warmup']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    // Week 5 — Phase 1 Revision + L3 + Eviston wrap
    { wn:5, label:'Revision — L3 plants + light prep for Phase 2', tag:'rev', watch:'~25 min Drawabox L3 + Ctrl+Paint S3', practice:'Re-do weakest L1–L2 page; do 2 L3 plant studies; wrap fan-art',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ghosted lines (focus weakest)'],
          ['18 min watch','Drawabox L3 — Plants intro video'],
          ['45 min practice','L3 — first plant study (loose, ghosted)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Daily Form Fill'],
          ['25 min','Gesture session — push 30s × 12 then 2-min × 5'],
          ['35 min','Re-do one Phase 1 page that turned out worst (boxes or planes)'],
          ['8 min','Imagination sketch']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ellipses'],
          ['15 min watch','Ctrl+Paint Section 3 — Value & Mark-Making'],
          ['40 min practice','L3 plant study #2 + overlapping organic forms']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Daily Form Fill'],
          ['20 min','Gesture session'],
          ['35 min','Compile fan-art batch (5 pieces) — annotate one thing learned per piece'],
          ['10 min','Imagination sketch']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min watch','Proko Figure Drawing Fundamentals: Gesture — first video (prep for Phase 2)'],
          ['8 min warmup','Force-line drill: draw 10 single-line "swooshes"'],
          ['40 min','Light L3 application — one final plant study + 2 boxes for fun'],
          ['8 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['25 min','Extended gesture session'],
          ['25 min','Review the phase: write 3 lines on what got easier and 3 on what still feels hard']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});

// PHASES 2–11 are appended in subsequent script blocks (kept in same scope by declaration above)



// ── PHASE 2 — Gesture & Early Figure (wks 6–12)
PHASES.push({
  n:2, id:'p2', color:'purple', title:'Gesture & Early Figure Drawing',
  dur:[6,12], srcWks:'1–6 (runs with P1)', srcHrs:'~30–38',
  goal:'Gesture started Week 1 — now it becomes primary. Force concept (Mattesi) reframes the figure as pushes and pulls. Figuary 28-day challenge is the milestone.',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application (Figuary days from wk 7) · Sat Light · Sun Rest',
  ratio:'Study 60 · Application (incl. Figuary) 30 · Imagination 10',
  milestone:{
    name:'Figuary 28-day complete + Force Ch 1–6 read + figures feel alive',
    quant:'28 Figuary day-pages compiled to grid; Force Ch 1–6 read; ~10 force-application sketches; 4 fan-art action sketches; 4 emotion-through-posture sketches; ~80+ gesture poses/week sustained',
    criteria:'Pass: every figure now starts from line-of-action; can identify push/pull on any reference figure; fan-art bodies no longer feel stiff or traced. Repeat last week if gestures still rendered, not gestural.'
  },
  weeks:[
    { wn:6, label:'Proko Gesture intro + Force Ch 1', watch:'~40 min Proko gesture + Mattesi reading', practice:'Daily gesture, first force sketches',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Force-line swooshes (line of action drill)'],
          ['20 min watch','Proko Figure Drawing Fundamentals: Gesture — Line of Action + Rhythm'],
          ['35 min','line-of-action.com — 30s × 12 then 2-min × 8 with Proko cues applied'],
          ['8 min','Imagination — 2 figures from memory']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Daily Form Fill'],
          ['25 min','Gesture session'],
          ['35 min','Force Application Sketches — 6 imagination figures pushing/pulling (exercise from source)'],
          ['8 min','Imagination sketch']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Line of action drill'],
          ['25 min reading','Force: Dynamic Life Drawing — Ch 1 (Mattesi)'],
          ['35 min','Apply Ch 1 — 10 force sketches from line-of-action 2-min poses'],
          ['5 min','Doodle']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Daily Form Fill'],
          ['20 min','Gesture session — 30s + 2-min'],
          ['40 min','Fan-art action sketch — a favorite character mid-motion (force first)'],
          ['8 min','Imagination — 2 figures']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Force swooshes'],
          ['18 min watch','Proko Gesture — Force & Energy video'],
          ['40 min','line-of-action.com 2-min poses applying Proko + Mattesi'],
          ['8 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['25 min','Gesture session'],
          ['30 min','Open creative — make something fun, no curriculum']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:7, label:'Figuary Days 1–6 + Force Ch 2', watch:'Figuary intro + Day 1–6 daily videos', practice:'Figuary daily class + Mattesi reading',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Force swooshes'],
          ['10 min watch','Love Life Drawing — Figuary Day 1 video'],
          ['45 min','Figuary Day 1 class — follow along, full poses'],
          ['8 min','Imagination — 2 figures']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Line of action drill'],
          ['10 min watch','Figuary Day 2'],
          ['50 min','Figuary Day 2 class'],
          ['8 min','Imagination sketch']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min reading','Force Ch 2'],
          ['35 min','Apply — 10 figures emphasizing Ch 2 concept'],
          ['8 min','Doodle']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Force swooshes'],
          ['10 min watch','Figuary Day 3'],
          ['50 min','Figuary Day 3 class'],
          ['8 min','Imagination — 2 figures']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Line of action drill'],
          ['10 min watch','Figuary Day 4'],
          ['50 min','Figuary Day 4 class'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min watch','Figuary Day 5 + Day 6 (back-to-back)'],
          ['40 min','Figuary Day 5 class + start Day 6']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:8, label:'Figuary Days 7–13 + Force Ch 3 + bean/mannequin', watch:'Figuary daily + Mattesi reading + Proko Bean', practice:'Bean & mannequin from imagination',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Force swooshes'],
          ['10 min watch','Figuary Day 6 wrap + Day 7'],
          ['50 min','Figuary Day 7 class'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Line of action'],
          ['10 min watch','Figuary Day 8'],
          ['50 min','Figuary Day 8 class'],
          ['8 min','Imagination sketch']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['15 min watch','Proko — Bean / Mannequin video'],
          ['20 min reading','Force Ch 3'],
          ['25 min','Mannequin from Imagination — 10 mannequins (source exercise begins)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Force swooshes'],
          ['10 min watch','Figuary Day 9'],
          ['50 min','Figuary Day 9 class'],
          ['8 min','Imagination']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min watch','Figuary Day 10'],
          ['10 min warmup','Mannequins x 10'],
          ['45 min','Figuary Day 10 class']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['20 min','Figuary Day 11 + Day 12 (lighter — pick essentials)'],
          ['35 min','Figuary Day 13 class']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:9, label:'Figuary Days 14–20 + Force Ch 4 + Proko proportions', watch:'Figuary + Proko proportions + Mattesi', practice:'Figuary daily + proportional landmarks',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 10'],
          ['10 min watch','Figuary Day 14'],
          ['50 min','Figuary Day 14 class'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Force swooshes'],
          ['10 min watch','Figuary Day 15'],
          ['50 min','Figuary Day 15 class'],
          ['8 min','Imagination']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Proko Gesture — Proportions & Head Counts video'],
          ['20 min reading','Force Ch 4'],
          ['25 min','Proportional landmarks practice — measure 5 figures from reference']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 10'],
          ['10 min watch','Figuary Day 17 (Day 16 if catching up)'],
          ['50 min','Figuary Day 17 class'],
          ['5 min','Imagination']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min watch','Figuary Day 18'],
          ['10 min warmup','Force-line drill'],
          ['45 min','Figuary Day 18 class']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['20 min','Figuary Days 19–20 (combined)'],
          ['35 min','Figuary Day 20 class — emotion through posture: 4 figures, no faces (source exercise)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:10, label:'Figuary Days 21–28 wrap + Force Ch 5 + fan-art action', watch:'Figuary + Mattesi', practice:'Figuary finish + force application',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 10'],
          ['10 min watch','Figuary Day 21'],
          ['50 min','Figuary Day 21 class']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Force swooshes'],
          ['10 min watch','Figuary Day 22'],
          ['50 min','Figuary Day 22 class'],
          ['8 min','Imagination']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min reading','Force Ch 5'],
          ['10 min watch','Figuary Day 23'],
          ['35 min','Figuary Day 23 class']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 10'],
          ['10 min watch','Figuary Day 24'],
          ['50 min','Figuary Day 24 class'],
          ['5 min','Imagination']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min watch','Figuary Day 25'],
          ['10 min warmup','Force swooshes'],
          ['45 min','Figuary Day 25 class']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Figuary Day 26'],
          ['40 min','Figuary Days 26–27 class (catch up if behind)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:11, label:'Figuary Day 28 + Force Ch 6 + clothed figure intro', watch:'Figuary final + Mattesi + Proko clothed basics', practice:'Finish Figuary + first clothed figure observation',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 10'],
          ['10 min watch','Figuary Day 28 + recap'],
          ['50 min','Figuary Day 28 class — emphasis on final pose']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Force swooshes'],
          ['25 min','Compile Figuary progression grid — Day 1 next to Day 28, picks (source milestone)'],
          ['40 min','Fan-art action sketch — second one, applying everything']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Force Ch 6 (final chapter)'],
          ['30 min','Apply Ch 6 — 8 figures from line-of-action with chapter concept'],
          ['5 min','Doodle']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 10'],
          ['20 min','Gesture session — back to basic line-of-action habit (no Figuary)'],
          ['40 min','Fan-art action sketch #3 + simple clothed contour observation (1 photo)'],
          ['5 min','Imagination']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Force swooshes'],
          ['18 min watch','Proko — Clothed Figure basics video (prep light)'],
          ['40 min','Force Application Sketches — 10 imagination figures'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['25 min','Gesture session'],
          ['30 min','Emotion-through-posture series — 4 figures, no faces (source exercise)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:12, label:'Phase 2 Revision', tag:'rev', watch:'~30 min rewatch weakest Proko/Mattesi clips', practice:'Force application + clean redo of one Figuary day',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Line of action drill'],
          ['25 min','Re-do one Figuary day that felt worst — slower, more force aware'],
          ['25 min','Gesture session'],
          ['10 min','Self-review: write 5 lines on which Mattesi chapter helped most']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Force swooshes'],
          ['20 min','Gesture session'],
          ['45 min','Fan-art action sketch #4 — push a tricky angle from imagination']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min','Mannequins x 10'],
          ['15 min','Re-skim Force Ch 1–2 (the most important)'],
          ['40 min','Apply — 8 force figures from line-of-action']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Daily Form Fill'],
          ['20 min','Gesture session — push 30s × 14'],
          ['40 min','Emotion-posture series — refine to a clean set of 4'],
          ['5 min','Imagination']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Line of action drill'],
          ['18 min watch','Proko — Loomis Method intro (prep for Phase 3)'],
          ['40 min','Loose figure sketches — head + body, just feeling for Loomis attachment']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['25 min','Extended gesture session'],
          ['25 min','Open creative — Figuary grid finalize for sharing if desired']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});


// ── PHASE 3 — Head Drawing & Portraits (wks 13–18)
PHASES.push({
  n:3, id:'p3', color:'rose', title:'Head Drawing & Portraits',
  dur:[13,18], srcWks:'3–8 (runs with P1–2)', srcHrs:'~28–35',
  goal:'Loomis head construction + 100 Head Challenge as the spine. Features studied separately then integrated. 5 faces from imagination daily begins now and never stops.',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application · Sat Light · Sun Rest',
  ratio:'Study 55 · Application 35 · Imagination 10',
  milestone:{
    name:'100 Head Challenge contact sheet + emotion portrait series + 1 fan-art portrait',
    quant:'100 heads compiled (10/day × 10); 5 faces from imagination daily (~30+ this phase); ~20 expression studies from reference; 3-face emotion portrait series; 1 fan-art portrait; 1 master copy head',
    criteria:'Pass: can construct a Loomis head in 3/4 from imagination without erasing; features placed in correct relations; 5-faces-from-imagination habit is daily. Repeat last week if 3/4 view still wobbles.'
  },
  weeks:[
    { wn:13, label:'Loomis intro + first reference heads', watch:'~45 min Proko Loomis series', practice:'15 reference heads, mostly front',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 10 (figure habit continues)'],
          ['20 min watch','Proko — Loomis Method (Head Construction part 1)'],
          ['40 min','3 Loomis heads from reference — front view, careful construction'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Line of action drill'],
          ['18 min','Gesture session line-of-action.com'],
          ['40 min','3 Loomis heads from reference — different references'],
          ['10 min','5 Faces from Imagination Daily (begins today — source exercise)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','Proko — Loomis Method (3/4 view part)'],
          ['40 min','3 Loomis 3/4 heads from reference'],
          ['5 min','Doodle']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 10'],
          ['15 min','Gesture session'],
          ['40 min','3 Loomis heads from reference — push profile + 3/4'],
          ['10 min','5 Faces from Imagination']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Loomis ball + plane drill — 5 reps'],
          ['18 min watch','Proko — Loomis profile / up / down angles'],
          ['40 min','3 Loomis reference heads — vary angles'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['18 min watch','Ahmed Aldoori — 100 Head Challenge intro video'],
          ['35 min','Last reference head + plan tomorrow\'s 100HC start']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:14, label:'100 Head Challenge Days 1–6 (60 heads)', watch:'~25 min mid-challenge Aldoori clips', practice:'10 heads/day reference + imagination mix',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Loomis ball drill'],
          ['65 min','100 Head Challenge — Day 1: 10 heads (Loomis, varied reference)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 10'],
          ['15 min','Gesture session'],
          ['55 min','100HC — Day 2: 10 heads (mix 3 imagination + 7 reference)']
        ]},
        {dow:'Wed', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Loomis ball drill'],
          ['10 min watch','Aldoori — mid-challenge tip videos'],
          ['55 min','100HC — Day 3: 10 heads (3/4 emphasis)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Loomis ball drill'],
          ['15 min','Gesture session'],
          ['55 min','100HC — Day 4: 10 heads (vary expressions)']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['65 min','100HC — Day 5: 10 heads']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['55 min','100HC — Day 6: 10 heads — relax, this is mileage']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:15, label:'100 Head Challenge Days 7–10 + contact sheet', watch:'Final Aldoori clips + features prep', practice:'Final 40 heads + start features',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Loomis ball drill'],
          ['65 min','100HC — Day 7: 10 heads']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['15 min','Gesture session'],
          ['55 min','100HC — Day 8: 10 heads']
        ]},
        {dow:'Wed', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Loomis ball drill'],
          ['65 min','100HC — Day 9: 10 heads (try more imagination heads)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Loomis ball drill'],
          ['10 min','5 Faces from Imagination'],
          ['60 min','100HC — Day 10 (final): 10 heads (push best work)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Proko — Eye anatomy / construction video'],
          ['45 min','3 eye studies + 3 eye-pair studies from reference'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['45 min','Compile 100 Head contact sheet — first real milestone (source exercise)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:16, label:'Features — eyes, nose, mouth, ears', watch:'~60 min Proko feature anatomy', practice:'Features studied separately',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Loomis ball drill'],
          ['18 min watch','Proko — Nose anatomy'],
          ['45 min','3 nose studies + apply nose to 2 Loomis heads'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['15 min','Gesture session'],
          ['55 min','2 Loomis heads from reference — emphasize correct eye + nose placement']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Loomis ball drill'],
          ['18 min watch','Proko — Mouth & lips'],
          ['45 min','3 mouth studies + apply to 2 Loomis heads'],
          ['5 min','Doodle']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Loomis ball drill'],
          ['12 min','Gesture session'],
          ['55 min','2 Loomis heads — emphasize integrated features']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Proko — Ear anatomy'],
          ['45 min','3 ear studies + apply to 2 Loomis 3/4 heads'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['45 min','Master copy: pick a head from an artist you admire, copy carefully (30 min) + 5 imagination heads']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:17, label:'Expression studies + emotion portraits', watch:'~30 min Proko expressions + Aldoori', practice:'20 expression studies from reference',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Loomis ball drill'],
          ['15 min watch','Proko — Expressions overview'],
          ['50 min','5 expression studies from photo reference (different emotions)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['15 min','Gesture session'],
          ['55 min','Emotion portrait series — 3 faces in different emotions (source milestone)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Loomis ball drill'],
          ['10 min watch','Aldoori — face proportions reminder'],
          ['55 min','5 more expression studies — push extremes']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Loomis ball drill'],
          ['12 min','Gesture session'],
          ['55 min','Continue emotion portrait series — push to clean']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['50 min','5 more expression studies — micro-expressions (subtle ones)'],
          ['10 min','5 Faces from Imagination']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['45 min','5 final expression studies — total 20 done; Master copy second head']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:18, label:'Phase 3 Revision + fan-art portrait', tag:'rev', watch:'~20 min weakest Proko/Aldoori clip', practice:'5 fully-from-imagination heads/day; finish fan-art portrait',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Loomis ball drill'],
          ['25 min','5 from imagination + 5 from memory (Memory Drawing exercise — source) — heads only'],
          ['25 min','Fan-art portrait — favorite character: layout + Loomis structure']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Fan-art portrait — refine, features, value blocking']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Loomis ball drill'],
          ['15 min watch','Re-watch weakest Proko Loomis video'],
          ['40 min','5 Faces from Imagination + 3 angles weakest']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Loomis ball drill'],
          ['12 min','Gesture session'],
          ['55 min','Fan-art portrait — finish (loose finish, not over-rendered)']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['20 min watch','moderndayjames — Perspective Playlist intro (prep for Phase 4)'],
          ['35 min','5 boxes in perspective — light prep, no rulers']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Compile portrait set — emotion series + fan-art together; pick favourite head from challenge for share']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});




// ── PHASE 4 — Perspective (wks 19–26)
PHASES.push({
  n:4, id:'p4', color:'teal', title:'Perspective & Spatial Thinking',
  dur:[19,26], srcWks:'8–13', srcHrs:'~35–42',
  goal:'Perspective taught as a designer\'s tool, not draftsmanship. moderndayjames as primary. 1pt, 2pt, 3pt + ellipses + figures in perspective. No rulers as a crutch.',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application · Sat Light · Sun Rest',
  ratio:'Study 55 · Application 35 · Imagination 10',
  milestone:{
    name:'Interior scene + character-in-setting + object design sheet + environment mood sketch',
    quant:'1 interior from imagination (loose, no rulers); 1 character placed in real space; 1 object design sheet (3 angles); 1 environment mood sketch; ~30 perspective construction pages',
    criteria:'Pass: can rough-sketch convincing spaces with no rulers; foreshortening reads on figures; objects sit in space (not floating). Repeat last week if interiors still feel flat.'
  },
  weeks:[
    { wn:19, label:'1-point perspective basics — interiors', watch:'~50 min moderndayjames 1pt', practice:'1pt rooms + cubes',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill — 5 cubes'],
          ['20 min watch','moderndayjames — Perspective Playlist: 1-point intro'],
          ['40 min','1pt practice — 4 simple rooms (no rulers, horizon + VP only)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['15 min','Gesture session'],
          ['55 min','1pt room from imagination — your bedroom, loose']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes drill'],
          ['18 min watch','mdj — Horizon line & viewer height'],
          ['45 min','5 thumbnail rooms — varying horizon heights'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','1pt scene — a café interior, place 2 figures with ground-plane awareness']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','mdj — Foreshortening on a 1pt setup'],
          ['45 min','Practice — 6 simple objects in 1pt']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — a fantasy space rough sketch (1pt)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:20, label:'1pt wrap + 2pt intro', watch:'~50 min mdj 2pt', practice:'2pt exteriors + objects',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes drill'],
          ['20 min watch','mdj — 2-point perspective intro'],
          ['40 min','2pt practice — 4 simple buildings (no rulers)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','2pt exterior — a small building from imagination']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','mdj — Stations / VP placement'],
          ['45 min','5 objects in 2pt — chair, table, lamp, box, computer'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','2pt — small street corner with 2–3 buildings']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes'],
          ['18 min watch','mdj — Foreshortening on 2pt'],
          ['45 min','Forty 2pt thumbnails — small, fast, lots of horizons']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Read David Chelsea Perspective! (optional book) — Ch 1 if owned, else extra 2pt drills']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:21, label:'2pt objects + ellipses intro', watch:'~45 min mdj ellipses + 2pt deep', practice:'Ellipses in perspective; cylinders',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes drill'],
          ['18 min watch','mdj — Ellipses & cylinders in perspective'],
          ['45 min','Ellipses-in-planes page (Drawabox callback) + 3 cylinders in 2pt'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Design a fictional object (e.g., a teapot) — 3 angles using ellipse-aware construction']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes'],
          ['18 min watch','mdj — Wheels & arches'],
          ['45 min','4 arches/wheels in perspective'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Object design — 3 cylindrical objects in 2pt at varied angles']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ellipses drill'],
          ['18 min watch','mdj — Object deconstruction (primitives first)'],
          ['45 min','Decompose 5 photo objects into primitives, then re-draw in perspective']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Continue object design sheet — refine to 3 final angles']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:22, label:'Phase 4 mid-revision + 3pt intro', tag:'rev', watch:'~30 min mdj 3pt + weakest 1pt/2pt rewatch', practice:'3pt + clean redo of weakest perspective page',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Cubes drill'],
          ['20 min watch','mdj — 3-point perspective intro'],
          ['40 min','3pt practice — 3 tall buildings, worm\'s-eye view']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Redo weakest 1pt or 2pt scene from prior weeks — slower, more deliberate']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Cubes'],
          ['18 min watch','mdj — Bird\'s-eye / dramatic angle'],
          ['40 min','3pt bird\'s-eye — 2 scenes']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Refine object design sheet — clean version, light value blocking']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Ellipses drill'],
          ['50 min','Review weeks 19–21 — pick one page that needs redo, redo it']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — environment mood thumbnail batch (5 thumbnails)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:23, label:'3pt deeper + figures in perspective', watch:'~45 min mdj 3pt + figures', practice:'3pt scenes + figures in perspective',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes drill'],
          ['20 min watch','mdj — 3pt deep dive'],
          ['45 min','3pt — dramatic city alley + figure placement']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Character-in-setting — place a Phase 2–3 character in a real 2pt space']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes'],
          ['18 min watch','mdj — Figures in perspective / ground plane'],
          ['45 min','5 figures on ground plane in 2pt — varying heights & distances']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Character-in-setting — continue, refine figure scale relations']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','mdj — Foreshortening on figures'],
          ['45 min','4 figure foreshortening studies from reference'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — fantasy interior with 1 figure (loose)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:24, label:'Ellipses on figures + form rotation', watch:'~40 min mdj form rotation', practice:'Form rotation + ellipses on organic forms',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes drill'],
          ['18 min watch','mdj — Form rotation from imagination'],
          ['45 min','Rotation exercise: draw same simple object at 45°, 90°, 135° from imagination'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Interior scene project start — pick a fantasy or real space, thumbnail 5 options']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes'],
          ['18 min watch','mdj — Ellipses on organic forms'],
          ['45 min','Apply ellipses to 4 organic forms (limbs, vases) at angles'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Interior scene — pick best thumbnail; construct in 1pt or 2pt']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Ellipses drill'],
          ['18 min watch','mdj — Cheating perspective for designers'],
          ['45 min','5 small thumbnails using "felt" perspective (no construction lines)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Interior scene — continue refining + add 1 figure on ground plane']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:25, label:'Interior scene finish + environment mood sketch', watch:'~20 min mdj design-thinking clip', practice:'Finish interior + mood sketch',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes'],
          ['10 min watch','mdj — Mood through horizon placement'],
          ['55 min','Interior scene — value blocking, light direction chosen']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Interior scene — push to "loose finish" state']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Cubes'],
          ['18 min watch','mdj — Composition + perspective interplay'],
          ['45 min','Environment mood sketch — foggy alley OR sunlit courtyard OR cave (source list)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Mood sketch — refine atmosphere, no detail rendering']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','mdj — Imagined depth from cheat constructions'],
          ['45 min','4 environment thumbnails from imagination'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — fan-art scene with environment (loose)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:26, label:'Phase 4 Revision + character-in-setting wrap', tag:'rev', watch:'Rewatch weakest mdj video', practice:'Final clean character-in-setting + object sheet finalize',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Cubes drill'],
          ['20 min','Rewatch weakest mdj video + take 5 bullet notes'],
          ['40 min','Redo weakest perspective page from weeks 19–25']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Character-in-setting milestone piece — start clean version']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Cubes'],
          ['55 min','Character-in-setting — refine']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Object design sheet — clean version, 3 angles + notes']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Ellipses drill'],
          ['15 min watch','Ctrl+Paint Section 4 first vid (prep for Phase 5)'],
          ['40 min','Light value blocking on character-in-setting OR mood sketch']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Compile Phase 4 outputs (4 pieces) + write self-review']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});


// ── PHASE 5 — Value & Light (wks 27–35)
PHASES.push({
  n:5, id:'p5', color:'sky', title:'Value, Light & Grayscale Digital Painting',
  dur:[27,35], srcWks:'12–19', srcHrs:'~42–52',
  goal:'Value before color. Ctrl+Paint Sections 4–9 + Gurney Color and Light Ch 1–10 (light section) + Marco Bucci. Sphere lighting for exactly 5 weeks then stop. Capstone: first finished character portrait.',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application · Sat Light · Sun Rest',
  ratio:'Study 55 · Application 35 · Imagination 10',
  milestone:{
    name:'First finished character portrait (grayscale or simple color) + value-first workflow',
    quant:'1 finished portrait; 10 grayscale portraits from reference; 10 grayscale figures from reference; 10 movie-still value studies; ~50 Asaro head studies; 10 sphere lighting studies (5 directions × 2 weeks); Gurney Ch 1–10 read; 3-value thumbnail before every piece',
    criteria:'Pass: thumbnail in 3 values before any piece, automatically; can plan lighting before starting; portrait holds up at small scale (value structure reads). Repeat last week if portrait\'s value read is muddy.'
  },
  weeks:[
    { wn:27, label:'Value scale + Ctrl+Paint S4 + Gurney Ch 1', watch:'~60 min Ctrl+Paint + Bucci + Gurney', practice:'Value scale + form shadow basics',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint Section 4 first videos (digital painting intro)'],
          ['40 min','5-step value scale + value matching exercise (paint patches matching grayscale tones)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','3-Value Thumbnail Studies — 4 movie stills reduced to 3 values (source exercise)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Color and Light — Ch 1 (Light)'],
          ['35 min','Apply Gurney Ch 1 — observe a real light source on a sphere/cup, note form/cast/core'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes drill'],
          ['12 min','Gesture session'],
          ['55 min','3-Value Thumbnails — 4 more from photos (source exercise, week 1 of 4)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['15 min watch','Marco Bucci — 10 Minutes to Better Painting: Value intro video'],
          ['45 min','Value scale practice + 3 small value sketches']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — paint a small grayscale silhouette piece']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:28, label:'Value on primitives + Sphere Lighting wk 1 + Gurney Ch 2', watch:'~60 min Ctrl+Paint + Gurney reading', practice:'Form shadow / cast / core on primitives',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S4 — Form shadow & light terminology'],
          ['45 min','Sphere Lighting Study #1 (top light) — full 5-element model (source exercise wk 1 of 5)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','3-Value Thumbnails — 4 more (source wk 2 of 4)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 2 (Light)'],
          ['35 min','Apply — value on a cylinder + a box from reference object'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Sphere Lighting Study #2 (side light)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['15 min watch','Marco Bucci — edge quality video'],
          ['45 min','Edge study: hard, soft, lost, found — 4 small swatches'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Free paint — grayscale, anything you find']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:29, label:'3-value thumbnails wk 3 + Sphere wk 2 + Gurney Ch 3–4', watch:'~50 min Ctrl+Paint S5 + Gurney', practice:'More thumbnails + sphere #3–4',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S5 — Painting principles'],
          ['45 min','Sphere #3 (back-rim light)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','3-Value Thumbnails — 4 more (source wk 3 of 4) + 1 from imagination']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 3'],
          ['35 min','Apply Ch 3 — outdoor lighting observation, value sketch'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Sphere #4 (front light, low key)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 4'],
          ['35 min','Apply — a grayscale still life sketch (1 object, lit)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Grayscale Master Study — pick a B&W painting, copy small (source exercise)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:30, label:'Grayscale portraits 1–3 + Sphere wk 3 + Gurney Ch 5–6 + Bucci head', watch:'Bucci head course intro + Gurney', practice:'First 3 grayscale portraits + planes',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Marco Bucci — Understanding & Painting the Head: intro lesson'],
          ['45 min','Grayscale Portrait #1 from reference — value blocking only'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','3-Value Thumbnails — last 4 (source wk 4 of 4); habit established']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 5'],
          ['35 min','Grayscale Portrait #2 — value structure focus'],
          ['5 min','Doodle']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Sphere #5 (under-light, dramatic)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 6'],
          ['35 min','Grayscale Portrait #3 — push to loose finish'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Grayscale Master Study #2']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:31, label:'Sphere wk 4 + Phase 5 mid-rev + Asaro planes intro', tag:'rev', watch:'Bucci planes of head + Gurney Ch 7', practice:'Asaro head studies start + grayscale portraits 4–6',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['18 min watch','Marco Bucci — Planes of the Head lesson'],
          ['45 min','Asaro Head Study #1–5 (source exercise) — different angles']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Grayscale Portrait #4 — apply planes']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 7'],
          ['35 min','Grayscale Portrait #5']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Sphere #6 + #7 (repeats — top and side, polished)']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min watch','Re-watch weakest Ctrl+Paint video'],
          ['45 min','Asaro Head #6–10']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Grayscale Portrait #6']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:32, label:'Sphere wk 5 final + Asaro wk 2 + grayscale figures + Gurney Ch 8', watch:'Ctrl+Paint S6 + Gurney', practice:'Grayscale figures #1–5 + Asaro #11–25',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S6 — Painting workflow'],
          ['45 min','Grayscale Figure #1 from reference'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Sphere #8 + #9 (final 5-week week) + 5 Asaro heads']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 8'],
          ['35 min','Grayscale Figure #2'],
          ['5 min','Doodle']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Sphere #10 (final ever) — STOP sphere studies after this per source. 5 Asaro heads']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S6 continued'],
          ['45 min','Grayscale Figure #3'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Grayscale Figure #4 + 5 Asaro heads']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:33, label:'Grayscale figures 5–10 + Ctrl+Paint S7 + Gurney Ch 9', watch:'~50 min Ctrl+Paint + Gurney', practice:'Figures #5–10 + 15 Asaro heads',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S7'],
          ['45 min','Grayscale Figure #5'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Grayscale Figure #6 + 5 Asaro heads']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 9'],
          ['35 min','Grayscale Figure #7'],
          ['5 min','Doodle']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Grayscale Figure #8 + 5 Asaro heads']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S7 continued'],
          ['45 min','Grayscale Figure #9'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Grayscale Figure #10 + 5 Asaro heads (total ~45 Asaro)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:34, label:'Movie still value studies + Ctrl+Paint S8–9 + Gurney Ch 10', watch:'~60 min Ctrl+Paint + Gurney', practice:'10 movie-still value studies + final 5 Asaro',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S8'],
          ['45 min','Movie still value study #1–2 (from a film you love)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Movie still #3–4 + 3 Asaro heads (final batch)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 10 (final light chapter)'],
          ['35 min','Movie still #5'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['12 min','Gesture session'],
          ['55 min','Movie still #6–7']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S9 (mostly edge quality, soft/hard practice)'],
          ['45 min','Movie still #8'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Movie still #9–10 (finish 10 total)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:35, label:'Phase 5 Revision — First finished character portrait', tag:'rev', watch:'Re-watch Bucci head course key lesson', practice:'Portrait milestone: thumbnail → value → loose finish',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['10 min','3-Value Thumbnail — 5 thumbnails for portrait composition (source habit)'],
          ['50 min','Portrait — pick thumbnail, lay in big value masses (light + dark + midtone)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['60 min','Portrait — value refining + planes via Bucci']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min watch','Re-watch Bucci planes of the head'],
          ['45 min','Portrait — refine head construction + features']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Cubes'],
          ['10 min','Gesture session'],
          ['60 min','Portrait — edge passes (hard/soft/lost/found)']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['60 min','Portrait — finish (loose finish, not over-rendered)'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['45 min','Mood scene — same character lit 3 ways: dramatic, soft, eerie (source idea)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});



// ── PHASE 6 — Anatomy (wks 36–46)
PHASES.push({
  n:6, id:'p6', color:'green', title:'Figure Anatomy — Surface to Deep',
  dur:[36,46], srcWks:'18–26', srcHrs:'~52–65',
  goal:'Layer real anatomy onto existing gesture practice. Rule from source: every muscle group studied → 10 figure studies applying it. Hands (50), feet (20), clothed figures (30+).',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application · Sat Light · Sun Rest',
  ratio:'Study 55 · Application 35 · Imagination 10',
  milestone:{
    name:'Full clothed figure illustration + character in environment + 50 hands + 20 feet',
    quant:'1 finished full clothed figure illustration; 1 character-in-environment piece; 50 hand studies (5/day × 10); 20 foot studies; 30+ clothed figure studies; ~70 anatomy application figures (10/muscle group); 10+ figures from imagination per session 3x/wk',
    criteria:'Pass: can draw clothed figure from imagination with anatomy reading correctly; hands no longer avoided. Repeat last 1–2 wks if hands still feel like mittens.'
  },
  weeks:[
    { wn:36, label:'Proko torso front muscles + 10 figure studies', watch:'~60 min Proko Anatomy torso front', practice:'Torso front muscle pages + apply to figures',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['20 min watch','Proko — Anatomy of the Human Body: Torso Front (pec, abs)'],
          ['40 min','2 muscle diagram studies + 2 figures applying (source rule)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','3 figures from line-of-action applying torso-front anatomy']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','Proko — Torso Front continued (serratus, obliques)'],
          ['40 min','3 more anatomy-applied figures'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','3 figures applying — vary pose (twisted torso, foreshortened)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','Proko Figure Fundamentals: Anatomy (YouTube free — torso highlights)'],
          ['40 min','2 figures from imagination (no reference) applying anatomy'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — apply new torso knowledge to fan-art sketch']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:37, label:'Proko torso back muscles + 10 figure studies', watch:'~60 min Proko torso back', practice:'Lats, traps, glutes + apply',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['20 min watch','Proko — Torso Back (traps, lats, erectors)'],
          ['40 min','2 back muscle studies + 2 figures applying'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','3 back-view figures applying anatomy (line-of-action)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','Proko — Glutes & lower back'],
          ['40 min','3 anatomy-applied figures from reference'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','3 figures applying — twisted poses, back contour']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Proko — Skeleton landmarks: shoulder/spine'],
          ['45 min','2 figures from imagination — back view'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — fan-art back-view pose']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:38, label:'Proko arms (bicep/tricep) + 10 figure studies', watch:'~60 min Proko arms', practice:'Arm muscles + apply',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['20 min watch','Proko Anatomy — Bicep & Tricep'],
          ['40 min','2 arm muscle studies + 2 figures applying'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','3 figures from reference — focus on upper arm forms']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','Proko Anatomy — Deltoid'],
          ['40 min','3 figures applying deltoid + bicep/tricep'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','3 figures — arms-in-action poses']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Proko Anatomy — Shoulder mechanics'],
          ['45 min','2 imagination figures with raised arms'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — fan-art with prominent arm pose']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:39, label:'Proko forearms + hands wk 1 (25)', tag:'rev', watch:'~50 min Proko forearm + hands', practice:'Forearms + 25 hands at 5/day',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['18 min watch','Proko Anatomy — Forearm muscles'],
          ['45 min','5 hand studies (Loomis construction method, source) + 1 forearm figure'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','5 hand studies + 2 figures applying forearm']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Proko — Hands construction (Loomis box-glove)'],
          ['45 min','5 hand studies — different gestures'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','5 hand studies + 2 figures with hands visible']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['10 min watch','Proko — Hands continued'],
          ['50 min','5 hand studies (25 hands total, halfway)'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Phase 6 mid-revision — redo weakest torso/arm page']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:40, label:'Proko legs (thigh, knee) + hands wk 2 (final 25)', watch:'~50 min Proko legs', practice:'Thigh + knee + 25 more hands',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['18 min watch','Proko Anatomy — Thigh (quad, hamstring)'],
          ['45 min','5 hand studies + 2 leg muscle studies'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','5 hand studies + 2 figures applying thigh anatomy']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Proko — Knee construction'],
          ['45 min','5 hand studies + 2 figures with knee in view'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','5 hand studies + 2 figures — seated / crouched poses']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['10 min watch','Proko — Lower leg overview'],
          ['50 min','5 hand studies — total 50 hands DONE'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Compile hands sheet — 50 hands grid']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:41, label:'Proko legs (calf) + 20 feet + 10 leg-anatomy figures', watch:'~45 min Proko calf + feet', practice:'Calf + 20 feet + apply',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['18 min watch','Proko Anatomy — Calf'],
          ['45 min','4 feet studies + 2 figures applying calf'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','4 feet studies + 2 leg-focus figures from reference']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Proko — Foot construction (simplified)'],
          ['45 min','4 feet studies + 2 figures applying'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','4 feet + 2 figures from imagination — apply legs']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['10 min watch','Proko Anatomy — Skeleton landmarks (hip, knee, ankle)'],
          ['50 min','4 feet studies (total 20) + skeleton landmark notes']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — fan-art with full-body shot, apply leg anatomy']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:42, label:'Skeleton landmarks in context + clothed figure intro', watch:'~40 min moderndayjames Cloth & Drapery start', practice:'10 clothed figure studies + landmarks',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['20 min watch','moderndayjames — Cloth & Drapery: intro'],
          ['40 min','2 clothed-figure studies (focus: fold types — hanging, tension)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','2 clothed-figure studies + skeleton landmark labels on top']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','mdj Cloth & Drapery: fold types'],
          ['40 min','2 fold-type studies (drape, zigzag, pipe)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','2 clothed figures — tension points (knee, elbow, shoulder)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','mdj Cloth & Drapery: gravity'],
          ['45 min','2 clothed figures — gravity-driven folds (long coat, dress)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — clothed character pose study']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:43, label:'Clothed figures 11–20 + drapery deeper', tag:'rev', watch:'~30 min mdj drapery deep dive', practice:'10 more clothed figures',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['18 min watch','mdj Cloth & Drapery: tension & compression'],
          ['45 min','2 clothed figure studies — focus on shoulder/sleeve compression']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','2 clothed figures from reference — different outfits']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Phase 6 mid-rev: rewatch weakest Proko anatomy clip'],
          ['45 min','Redo one weakest anatomy-applied figure page from weeks 36–41']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','2 clothed figures — flowing fabric (cape, robe)']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min watch','mdj Cloth & Drapery wrap clip'],
          ['45 min','2 clothed figures — tight clothes (athletic wear) for contrast']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','2 final clothed figure studies (20 total this phase)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:44, label:'Clothed figures 21–30 + full clothed figure illustration start', watch:'~20 min mdj clothed figure case study', practice:'10 more clothed figures + start full illustration',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['18 min watch','mdj Cloth & Drapery: complete pieces case study'],
          ['45 min','2 clothed figure studies — full-body, multi-garment'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['15 min','3-Value Thumbnail — 5 thumbnails for clothed figure milestone piece'],
          ['40 min','Clothed figure illustration — pick thumbnail, lay in construction']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['55 min','3 clothed figure studies — push variety'],
          ['10 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Clothed figure illustration — anatomy + drapery layer-in']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['60 min','3 clothed figure studies — total ~30 done']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Clothed figure illustration — value pass']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:45, label:'Imagination figures intensive + clothed illustration finish', watch:'Re-skim weak Proko clip', practice:'10 figures from imagination 3x/wk + finish illustration',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['18 min','10 figures from imagination (no reference) — source mandate'],
          ['45 min','Clothed figure illustration — edge & detail pass'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Clothed figure illustration — finish (loose finish, not over-rendered)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min','10 figures from imagination'],
          ['45 min','Character-in-environment piece start — combine P4 perspective + clothed figure'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Character-in-env — construct space, place figure']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min','10 figures from imagination'],
          ['45 min','Character-in-env — value pass'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Character-in-env — refine']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:46, label:'Phase 6 Revision + character-in-env finish', tag:'rev', watch:'Re-watch weakest Proko anatomy + mdj drapery', practice:'Finish character-in-env + apply anatomy to fan-art',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['15 min','10 figures from imagination'],
          ['50 min','Character-in-env — refine']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Character-in-env — finish (loose finish)']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['18 min watch','Re-watch weakest Proko anatomy module'],
          ['45 min','Fan-art application — apply anatomy to a character you love']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['12 min','Gesture session'],
          ['55 min','Fan-art application piece — push to value pass']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min watch','Gurney Color and Light skim Ch 11 (prep Phase 7)'],
          ['45 min','Fan-art application — loose finish']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Compile Phase 6 outputs (clothed figure, char-in-env, fan-art) + self-review']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});

// ── PHASE 7 — Color (wks 47–55)
PHASES.push({
  n:7, id:'p7', color:'teal', title:'Color Theory & Full Digital Painting',
  dur:[47,55], srcWks:'24–31', srcHrs:'~45–55',
  goal:'Gurney Color and Light Ch 11–20 (color section). Limited Palette Color Studies + Color Mood Swap. 10 color paintings from reference + 10 master studies. Capstone: first full-color illustration.',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application · Sat Light · Sun Rest',
  ratio:'Study 50 · Application 40 · Imagination 10',
  milestone:{
    name:'First full-color illustration (full pipeline) + 10 color paintings + 10 color master studies',
    quant:'1 finished full-color illustration via thumbnail → value → color → render; 10 color paintings from reference; 10 master studies in color; ≥5 Limited Palette studies; 1 Color Mood Swap exercise; 1 color-mood illustration series (3 emotional states); Gurney Ch 11–20 read',
    criteria:'Pass: can articulate the temperature decision in each piece; values still read at small scale (thumbnail-first habit held). Repeat last 1–2 wks if all colors saturated equally or temperature feels random.'
  },
  weeks:[
    { wn:47, label:'Gurney Ch 11–12 + Bucci color intro + first color portrait', watch:'~50 min Gurney + Bucci color YT', practice:'Color portrait #1 + Limited Palette study #1',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Color and Light Ch 11'],
          ['35 min','Apply — Color Portrait #1: thumbnail value, then color overlay (limited 4 hues)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['10 min','3-Value Thumbnail — 5 thumbnails for next study'],
          ['45 min','Color Portrait #1 — color pass continued']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Marco Bucci — Art Bites Color Theory: intro'],
          ['45 min','Limited Palette Color Study #1 — 3 colors + B/W (source exercise)'],
          ['5 min','Doodle']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Color Portrait #2 — start from value sketch']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 12'],
          ['35 min','Apply Ch 12 — small temperature study (warm light/cool shadow)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Color Portrait #2 — finish loose']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:48, label:'Gurney Ch 13 + temperature + Limited Palette #2', watch:'~40 min Gurney + Bucci', practice:'Limited Palette + 2 color portraits',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 13'],
          ['35 min','Apply Ch 13 — temperature observation: same object indoor & outdoor'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Limited Palette Color Study #2 (different 3 colors)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Marco Bucci — Art Bites: Color Temperature'],
          ['45 min','Color Portrait #3 — emphasize warm light vs cool shadow'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Color Portrait #4 from reference']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 14'],
          ['35 min','Apply Ch 14 — chromatic grey patches (5 mixed greys, source concept)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Color master study #1 — small reproduction of a piece you love (palette logic, not pixels)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:49, label:'Gurney Ch 15 (simultaneous contrast) + Limited Palette #3 + color portraits 5–6', watch:'~40 min Gurney + Bucci simultaneous contrast', practice:'Limited palette + 2 portraits + master study',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 15'],
          ['35 min','Apply Ch 15 — simultaneous contrast swatches (4 grey squares on different backgrounds)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Limited Palette Color Study #3']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Marco Bucci — Art Bites: Color in Context'],
          ['45 min','Color Portrait #5'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Color master study #2']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint Section 10 first videos (color)'],
          ['45 min','Color Portrait #6']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Color master study #3']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:50, label:'Gurney Ch 16 + Limited Palette #4 + Color Mood Swap', watch:'~30 min Gurney + James Gurney YT', practice:'Limited palette + color mood swap exercise',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 16'],
          ['35 min','Color Portrait #7'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Color Mood Swap — pick a previous sketch, paint warm-dominant version (source exercise)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','James Gurney YouTube — supplemental palette video'],
          ['45 min','Color Mood Swap continued — cool-dominant version (same sketch)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Limited Palette Color Study #4']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S10 continued'],
          ['45 min','Color Portrait #8']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Color master study #4']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:51, label:'Phase 7 mid-rev + Gurney Ch 17–18 + atmospheric perspective', tag:'rev', watch:'Rewatch weakest color clip + Gurney', practice:'Atmospheric perspective in color + redo weakest portrait',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 17'],
          ['35 min','Apply — atmospheric perspective small study (3 depth bands, cooler with distance)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Redo weakest portrait from weeks 47–50 — slower, more deliberate']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 18'],
          ['35 min','Color master study #5 — match palette logic']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Limited Palette Color Study #5 (5th of source minimum)']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min watch','Rewatch weakest Ctrl+Paint S10 video'],
          ['45 min','Color Portrait #9']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Color master study #6']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:52, label:'Gurney Ch 19 + Ctrl+Paint S11 + master studies 7–8 + portrait 10', watch:'~40 min Gurney + Ctrl+Paint', practice:'Portrait 10 + master studies 7–8',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 19'],
          ['35 min','Color master study #7']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Color Portrait #10 (final of 10 from reference)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S11 first videos'],
          ['45 min','Color master study #8'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Color-mood illustration series — start: pick scene, plan 3 emotional states (source idea)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min','James Gurney YouTube — color in landscape video'],
          ['35 min','Color-mood series — paint state #1 (e.g., warm/hopeful)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Color-mood series — paint state #2 (e.g., cool/melancholy)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:53, label:'Gurney Ch 20 + Ctrl+Paint S12 + master studies 9–10 + color mood series wrap', watch:'~40 min Gurney + Ctrl+Paint', practice:'Master studies 9–10 + finish color-mood series',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Gurney Ch 20 (final)'],
          ['35 min','Color master study #9']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Color-mood series — paint state #3 (e.g., dark/menacing)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Ctrl+Paint S12 — final videos'],
          ['45 min','Color master study #10 (10 master studies DONE)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Color-mood series — finalize 3 panels side-by-side']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['10 min','3-Value Thumbnail — 5 thumbnails for full-color illustration milestone'],
          ['55 min','Full-color illustration — pick thumbnail, start value sketch']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Full-color illustration — value pass complete']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:54, label:'Full-color illustration build', watch:'Rewatch weakest Gurney chapter clip', practice:'Pipeline execution: thumb → value → color → render',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['60 min','Full-color illustration — color blocking pass (low-saturation underpainting)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Full-color — temperature pass: warm lights, cool shadows tuned']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['55 min','Full-color — focal area saturation pass + edge work']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Full-color — detail pass (eye-catching areas only)']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['55 min','Full-color — last refining; check value structure at thumbnail size']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Full-color — loose finish, declare done']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:55, label:'Phase 7 Revision + personal journal illustration', tag:'rev', watch:'Rewatch weakest Gurney/Bucci color clip', practice:'Personal journal piece + story moment',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Self-review: write 5 lines on color decisions in milestone piece'],
          ['50 min','Personal journal illustration (source) — something that happened to you, no composition reference']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Personal journal piece — refine value & temperature']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Re-skim Gurney Ch 13 + Ch 15 (most useful)'],
          ['45 min','Personal journal piece — color pass']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Story moment illustration start — plan with 5 thumbnails (source)']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min watch','Sycra Iterative Drawing (prep Phase 8)'],
          ['45 min','Story moment — value sketch']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Compile Phase 7 outputs (10 portraits + 10 masters + milestone + journal)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});


// ── PHASE 8 — Composition (wks 56–62)
PHASES.push({
  n:8, id:'p8', color:'sky', title:'Composition & Visual Storytelling',
  dur:[56,62], srcWks:'29–34', srcHrs:'~35–42',
  goal:'Sycra Iterative Drawing + moderndayjames Composition Through Contrast + Framed Ink (read cover to cover). Thumbnail-before-piece becomes permanent. Capstone: cinematic scene illustration.',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application · Sat Light · Sun Rest',
  ratio:'Study 45 · Application 45 · Imagination 10',
  milestone:{
    name:'Cinematic scene illustration + 10 film grab analyses + 2-4 panel visual story',
    quant:'1 cinematic scene illustration; 10 film grab compositional analyses; 1 redrawn piece (new composition); 5 imagination thumbnail studies; 1 two-to-four panel visual story; Framed Ink complete cover-to-cover',
    criteria:'Pass: thumbnail series (5+) is automatic before any piece; can describe why each composition choice was made. Repeat last week if compositions still center subject by default.'
  },
  weeks:[
    { wn:56, label:'Sycra Iterative Drawing + Framed Ink Ch 1–2', watch:'~40 min Sycra + reading', practice:'10-variation drill + thumbnails',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','Sycra — Iterative Drawing (full video)'],
          ['40 min','Iterative Drawing — 10 variations of one subject (source mandate)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['25 min reading','Framed Ink Ch 1'],
          ['30 min','Apply Ch 1 — 5 thumbnails for a small scene']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Framed Ink Ch 2'],
          ['35 min','Apply Ch 2 — 5 more thumbnail variations on a different subject'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Story moment illustration (carried from P7) — push composition refinement']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','moderndayjames — Composition Through Contrast'],
          ['35 min','5 contrast-driven thumbnails (value, edge, size, shape contrast)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Film grab analysis #1–2 (source exercise) — 10 movie stills total goal']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:57, label:'Framed Ink Ch 3–4 + value grouping + film grabs 3–4', watch:'~30 min mdj rewatch + reading', practice:'Value grouping thumbs + film grabs',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Framed Ink Ch 3'],
          ['35 min','Value grouping thumbnails — 5 thumbs reducing to 2 masses (light/dark)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Film grab analysis #3 — annotate light mass, dark mass, focal contrast']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Framed Ink Ch 4'],
          ['35 min','5 value-grouped thumbnails on a new subject'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Film grab analysis #4']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','mdj — Composition Through Contrast: re-watch + take 5 notes'],
          ['45 min','Iterative Drawing — 10 variations of a new subject (push different camera angles)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — apply best thumbnail to a tiny finished sketch']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:58, label:'Framed Ink Ch 5–6 + silhouette read + film grabs 5–6', watch:'Reading + analysis', practice:'Silhouette tests + 2 more film grabs',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Framed Ink Ch 5'],
          ['35 min','Silhouette test — fill 4 thumbnails as pure black shapes; check focal read']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Film grab analysis #5']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Framed Ink Ch 6'],
          ['35 min','Silhouette + contrast hybrid — 4 thumbnails combining both'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Film grab analysis #6']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min','Framed Ink — skim chapters on figure staging'],
          ['45 min','Redraw an existing piece with a different composition (source exercise) — start']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Redraw piece — value sketch new composition']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:59, label:'Framed Ink Ch 7–8 + narrative framing + film grabs 7–8', watch:'Reading + analyses', practice:'Camera angle thumbs + film grabs',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Framed Ink Ch 7'],
          ['35 min','Camera angle thumbs — same scene, 5 different camera positions (source theme)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Film grab analysis #7 — focus on camera and emotional read']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Framed Ink Ch 8'],
          ['35 min','Apply Ch 8 — 5 thumbs varying narrative framing for one moment'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Film grab analysis #8']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min','Sycra rewatch with new eyes (10-variation video)'],
          ['45 min','Iterative Drawing — 10 variations on a future cinematic scene candidate']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Redraw piece (carry) — finish loose']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:60, label:'Framed Ink Ch 9–10 + negative space + cinematic scene start', watch:'Reading + Framed Ink env chapter', practice:'Negative space thumbs + start cinematic scene',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Framed Ink Ch 9'],
          ['35 min','Negative space thumbnails — 5 thumbs where empty area carries weight']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Cinematic scene — 5+ thumbnails (source mandate), pick one']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Framed Ink Ch 10'],
          ['35 min','Cinematic scene — value sketch'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Cinematic scene — refine construction (perspective + figure)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min','Framed Ink — skim later chapters for reference']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Cinematic scene — color block-in']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:61, label:'Cinematic scene build + film grabs 9–10 + 2-4 panel visual story', watch:'Framed Ink wrap', practice:'Cinematic scene render + visual story',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['60 min','Cinematic scene — color refinement, focal contrast pass'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Film grab analysis #9']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min reading','Framed Ink — finish (any remaining chapters / skim)'],
          ['35 min','Film grab analysis #10 (10 done)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Cinematic scene — atmosphere + edges']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['15 min','5 imagination thumbnail studies (source)'],
          ['50 min','2–4 panel visual story (source idea) — thumb out a tiny no-words narrative']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','2–4 panel story — execute (very loose)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:62, label:'Phase 8 Revision + cinematic scene finish', tag:'rev', watch:'Re-skim Framed Ink standout chapter', practice:'Finish cinematic scene; verify thumb habit',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Self-review: 5 lines on what changed about your composition thinking'],
          ['50 min','Cinematic scene — final pass; check at thumbnail size for value structure']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Cinematic scene — declare done; loose finish']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Re-skim favourite Framed Ink chapter'],
          ['45 min','Annotate cinematic scene — write 5 lines describing each compositional choice']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Pick one Phase 5–7 piece and recompose into a stronger version (loose redraw)']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min watch','Sinix Design Fundamentals (prep Phase 9)'],
          ['45 min','5 imagination thumbnails — new subjects']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Compile Phase 8 outputs (cinematic scene, redraws, 10 film grabs, panel story)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});


// ── PHASE 9 — Design & Stylization (wks 63–71)
PHASES.push({
  n:9, id:'p9', color:'purple', title:'Design, Shape Language & Stylization',
  dur:[63,71], srcWks:'32–38', srcHrs:'~45–55',
  goal:'Sinix Design + Steven Zapata + Proko/Court Jones caricature + Brooke Eggleston (optional paid). Artist analysis (5–10) + 20 stylized heads × 2 + 50 expressions + Jake Parker "Design 100 Somethings". Capstone: Original Character Design Sheet.',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application · Sat Light · Sun Rest',
  ratio:'Study 40 · Application 50 · Imagination 10',
  milestone:{
    name:'Original Character Design Sheet (front/3⁄4, palette, 3 expressions, callouts) + 50 expression studies + 50 design-100 entries',
    quant:'1 Character Design Sheet; 50 expression studies from photo reference; 20 stylized heads inspired by artists + 20 from imagination; 50 entries toward "Design 100 Somethings"; 1 style fusion piece; 1 design sprint (10 variations in 1 hr); artist analyses for 5–10 artists',
    criteria:'Pass: design sheet reads as a coherent character (shape language consistent); can name what you exaggerate/simplify and why. Repeat last week if all variants look the same.'
  },
  weeks:[
    { wn:63, label:'Sinix Design Fundamentals + shape language + Zapata intro', watch:'~50 min Sinix + Zapata', practice:'Shape language vocabulary drills',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','Sinix Design — Design Fundamentals (key video)'],
          ['35 min','Shape language exercise: 6 character silhouettes — 2 circle-based, 2 triangle, 2 rectangle'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Silhouette design — 6 prop silhouettes (different emotional reads via shape)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','Steven Zapata Art — Style & Creative Identity intro video'],
          ['40 min','Pick 5–10 artists you love — write 2-line analysis per artist (shapes? simplifies? exaggerates?)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Artist analysis #1 — pick 1st artist, study 3 of their pieces; annotate shape choices']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Sinix — style analysis video'],
          ['45 min','5 stylized heads inspired by artist #1']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Artist analysis #2 — repeat with artist #2 + 5 stylized heads']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:64, label:'Artist analyses 3–5 + 15 stylized heads + caricature intro', watch:'~40 min Proko/Court Jones caricature', practice:'Stylized heads + caricature drills',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','Proko + Court Jones — Caricature Series: intro'],
          ['40 min','5 caricature exercises (Court Jones method) from photo reference']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Artist analysis #3 + 5 stylized heads in their style']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Caricature Series — exaggeration mechanics'],
          ['45 min','5 caricature passes — push proportions further on same subjects'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Artist analysis #4 + 5 stylized heads']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Sinix — appeal & exaggeration video'],
          ['45 min','Artist analysis #5 + 5 stylized heads (20 stylized-from-artists total)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — fan-art in one of the studied styles']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:65, label:'Stylized heads from imagination + expression studies start', watch:'Zapata + Sinix style', practice:'20 stylized heads from imagination + 15 expressions',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Zapata — Developing artistic taste'],
          ['45 min','5 stylized heads from imagination — push your emerging style choices']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','5 expression studies from photo reference (loud, micro, contradicting)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Sinix — style analysis pt 2'],
          ['45 min','5 more stylized heads from imagination'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','5 expression studies — push extremes']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Zapata — Personal voice video'],
          ['45 min','5 stylized heads from imagination (15 total)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','5 expression studies (15 expressions total)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:66, label:'Stylized heads wrap + expression studies push + 5-variant character', watch:'~30 min SVSLearn Jake Parker style podcast', practice:'Last 5 stylized heads + 5-variant exercise',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min','SVSLearn — Jake Parker Style Development podcast (free episode)'],
          ['35 min','5 stylized heads from imagination (20 done)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','5 expression studies (20 total)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['15 min watch','Sinix — character design fundamentals'],
          ['50 min','Character design challenge — 5 variants of one character archetype (source idea)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','5 expression studies (25 total)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min','Brooke Eggleston — Character Design Forge free YouTube (optional preview)'],
          ['45 min','5 expression studies (30 total)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','5 expression studies (35 total)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:67, label:'Phase 9 mid-rev + expressions push to 50 + Design 100 start', tag:'rev', watch:'Re-watch weakest Sinix or Zapata clip', practice:'15 more expressions + Design 100 start',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Self-review: which 3 artists\' analyses changed your work most?'],
          ['50 min','5 expression studies (40 total)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Jake Parker "Design 100 Somethings" — pick subject (e.g., hats, robots, mushrooms); design 10']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['10 min watch','Re-watch weakest design clip'],
          ['50 min','5 expression studies (45 total)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Design 100 — 10 more (20 total)']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Compare 20 stylized heads from artists vs 20 from imagination — write 5 notes'],
          ['45 min','5 expression studies (50 total — milestone hit)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Design 100 — 10 more (30 total)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:68, label:'Design 100 push + style fusion piece', watch:'Brooke Eggleston (optional) + Sinix', practice:'Design 100 + style fusion start',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Brooke Eggleston Character Design Forge — free silhouette video'],
          ['45 min','Design 100 — 10 more (40 total)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Style fusion piece (source idea) — pick 2 artists, combine specific elements; sketch start']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Sinix Design — appeal & weight'],
          ['45 min','Design 100 — 10 more (50 total — milestone hit)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Style fusion piece — value + color']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['10 min','Plan Design Sprint subject'],
          ['55 min','Weekly Design Sprint — 10 variations of one subject in 1 hr (source exercise)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Style fusion piece — refine']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:69, label:'Character Design Sheet — concept + sketches', watch:'Brooke Eggleston (optional) + Sinix', practice:'Design sheet front, 3⁄4, palette',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['10 min','5 thumbnails of character concept'],
          ['55 min','Character Design Sheet — front view construction'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Design Sheet — 3⁄4 view']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['15 min watch','Sinix — color palette for character'],
          ['50 min','Design Sheet — palette swatches + low-saturation under-paint'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Design Sheet — 3 expression panels']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['15 min','Brooke Eggleston (optional) — costume design free video'],
          ['50 min','Design Sheet — 3 detail callouts (props, accessory, costume detail)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Design Sheet — color pass on front view']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:70, label:'Character Design Sheet build + finish', watch:'Re-skim Sinix or Brooke', practice:'Finish design sheet',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['60 min','Design Sheet — color pass on 3⁄4 view'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Design Sheet — color/render expressions panel']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['55 min','Design Sheet — render callouts + personality note text']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Design Sheet — typographic layout pass; clean up sheet']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['55 min','Design Sheet — final clean pass; declare done'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Design sprint — 10 variations of a different archetype in 1 hr']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:71, label:'Phase 9 Revision', tag:'rev', watch:'Re-watch Zapata personal voice', practice:'Constraint illustration + reflect',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Self-review: what shapes/colors do you keep returning to? Write 5 lines'],
          ['50 min','Constraint illustration (source) — only 3 colors OR no outlines OR must fit a circle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Constraint illustration — refine']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min watch','Re-watch Zapata "personal voice" video'],
          ['45 min','Update Goal Folder — 20–30 reference artworks representing your target style (source)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Constraint illustration — loose finish']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min watch','FZD School Design Cinema Ep 1 first 15 min (prep Phase 10)'],
          ['45 min','Open creative — apply style fusion learnings to a fan-art']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Compile Phase 9 outputs (design sheet, 50 expressions, design 100, style fusion, constraint piece)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});


// ── PHASE 10 — Environment (wks 72–80)
PHASES.push({
  n:10, id:'p10', color:'red', title:'Environment Drawing & World-Building',
  dur:[72,80], srcWks:'36–42', srcHrs:'~48–58',
  goal:'FZD School Design Cinema as backbone + Tyler Edlin + Jordan Grimmer timelapses + Framed Ink env chapters revisit. 30 concept-art/movie-still breakdowns. Capstone: fully rendered environment with figure.',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application · Sat Light · Sun Rest',
  ratio:'Study 50 · Application 40 · Imagination 10',
  milestone:{
    name:'Fully rendered environment + figure + 30 concept-art/movie-still breakdowns + 4-state atmosphere series',
    quant:'1 fully rendered environment with figure (5–8 hr budget); 30 concept-art or movie still breakdowns (perspective + composition + recreate); 4-state atmosphere series (dawn/midday/night/storm); 2 character-in-environment pieces; monthly env sketch habit started',
    criteria:'Pass: figure lives in the environment, not pasted; atmospheric perspective is intentional (cooler/lighter with depth); horizon and scale are believable. Repeat last week if env still feels backdrop-flat.'
  },
  weeks:[
    { wn:72, label:'FZD Design Cinema Ep 1–2 + 5 env breakdowns', watch:'~60 min FZD eps', practice:'5 concept-art breakdowns + thumbnails',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','FZD School — Design Cinema Episode 1 (with sketchbook open)'],
          ['35 min','Env breakdown #1 — pick a movie still, analyze perspective + composition, recreate small']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Env breakdown #2']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','FZD School — Design Cinema Episode 2'],
          ['35 min','Env breakdown #3'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Env breakdown #4']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','FZD — Episode 2 continuation / Q&A'],
          ['45 min','Env breakdown #5 (5 done)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Monthly env sketch — start: 1 complete env in 2 hrs across this+next session']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:73, label:'FZD Ep 3–4 + first interior from imagination', watch:'~60 min FZD', practice:'Interior imagination piece + 5 breakdowns',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','FZD School — Design Cinema Episode 3'],
          ['35 min','Interior from imagination — rough thumbnail + construction']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Env breakdown #6']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','FZD School — Design Cinema Episode 4'],
          ['35 min','Env breakdown #7'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Interior from imagination — value pass']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','FZD — bonus / sketching demo'],
          ['45 min','Env breakdown #8']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Interior from imagination — color block-in (loose finish)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:74, label:'FZD Ep 5–6 + Tyler Edlin intro + breakdowns 9–12', watch:'~60 min FZD + Tyler Edlin', practice:'4 more breakdowns + exterior',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','FZD School — Design Cinema Episode 5'],
          ['35 min','Env breakdown #9']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Tyler Edlin YouTube — env painting intro + apply notes in a 25-min thumbnail']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','FZD School — Design Cinema Episode 6'],
          ['35 min','Env breakdown #10'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Exterior from imagination — street or landscape, rough construction']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Tyler Edlin — value & atmosphere video'],
          ['45 min','Env breakdown #11']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Env breakdown #12']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:75, label:'FZD Ep 7–8 + breakdowns 13–16 + exterior finish', watch:'~60 min FZD', practice:'4 breakdowns + exterior render',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','FZD School — Design Cinema Episode 7'],
          ['35 min','Env breakdown #13']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Exterior from imagination — value + color block']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','FZD School — Design Cinema Episode 8'],
          ['35 min','Env breakdown #14'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Env breakdown #15']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Tyler Edlin — env composition video'],
          ['45 min','Env breakdown #16']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Exterior from imagination — loose finish']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:76, label:'Phase 10 mid-rev + Jordan Grimmer timelapse + breakdowns 17–20', tag:'rev', watch:'Jordan Grimmer timelapse + FZD rewatch', practice:'4 breakdowns + redo weakest env piece',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['25 min watch','Jordan Grimmer — Timelapse #1 (with notes)'],
          ['35 min','Env breakdown #17']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Env breakdown #18']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['25 min watch','Jordan Grimmer — Timelapse #2'],
          ['35 min','Env breakdown #19']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Env breakdown #20']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min watch','Re-watch FZD episode that resonated most'],
          ['45 min','Redo weakest env piece from weeks 72–75']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Jordan Grimmer — Timelapse #3 + apply observation in small env study']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:77, label:'FZD Ep 9–10 + atmosphere series start + breakdowns 21–24', watch:'~60 min FZD + Framed Ink env', practice:'4 breakdowns + atmosphere series 1–2',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','FZD School — Design Cinema Episode 9'],
          ['35 min','Atmosphere series — 1 location pick + dawn state thumbnail (source idea)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Env breakdown #21']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['25 min watch','FZD School — Design Cinema Episode 10'],
          ['35 min','Env breakdown #22'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Atmosphere series — paint dawn state']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min reading','Framed Ink — env composition chapters (revisit)'],
          ['45 min','Env breakdown #23']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Env breakdown #24']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:78, label:'Atmosphere series wrap + character integration + breakdowns 25–28', watch:'Tyler Edlin Patreon (free clip) + Framed Ink', practice:'3 atmosphere states + 4 breakdowns',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['15 min watch','Tyler Edlin — character integration in env'],
          ['50 min','Atmosphere series — paint midday state']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Env breakdown #25']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min reading','Framed Ink — character staging in env (revisit)'],
          ['45 min','Atmosphere series — paint night state'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Env breakdown #26']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['15 min watch','Tyler Edlin — light & mood'],
          ['50 min','Atmosphere series — paint storm state (4 states done)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Env breakdown #27']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:79, label:'Character-in-env practice + breakdowns 29–30 + milestone start', watch:'Re-watch most useful FZD episode', practice:'2 char-in-env pieces + start milestone',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Re-watch best FZD episode'],
          ['45 min','Character-in-env piece #1 — thumb + construction']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Char-in-env #1 — value + color']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['10 min','Env breakdown #28'],
          ['50 min','Char-in-env #2 — start with environment first, then place figure'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['10 min','Env breakdown #29'],
          ['45 min','Char-in-env #2 — value pass']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['10 min','Env breakdown #30 (30 done)'],
          ['55 min','Milestone env piece — 5 thumbnails for fully rendered env + figure']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Milestone env — pick thumbnail, lay construction']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:80, label:'Phase 10 Revision — fully rendered env + figure milestone build', tag:'rev', watch:'Light skim of Tyler Edlin process video', practice:'Build milestone piece across the week',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['65 min','Milestone — value pass: light masses, dark masses, atmospheric depth bands']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Milestone — color block-in']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Tyler Edlin process — pick a refining tip; apply'],
          ['45 min','Milestone — atmospheric perspective pass (depth bands)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Milestone — figure integration; ground contact, value match with env']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['60 min','Milestone — focal area detail pass; loose finish'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Milestone — declare done; write 5 lines on choices made']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});


// ── PHASE 11 — Creature, Imagination & Style (wks 81–94)
PHASES.push({
  n:11, id:'p11', color:'cream', title:'Creature Design, Imagination Mastery & Personal Style',
  dur:[81,94], srcWks:'40–50+', srcHrs:'~60–80',
  goal:'Animals (moderndayjames Animal Construction + Mattesi FORCE: Animal Drawing) + creature design (Whitlach optional, Aaron Blaise, Jonathan Kuo optional) + imagination intensive + Jake Parker SVSLearn Developing Your Illustration Style. Three milestones: Original Creature, Personal Statement Piece, Three-Piece Cohesive Series.',
  weeklyStruct:'Mon/Wed/Fri Study · Tue/Thu Application · Sat Light · Sun Rest',
  ratio:'Study 35 · Application 55 · Imagination 10',
  milestone:{
    name:'Original Creature Design + Personal Statement Piece + Three-Piece Cohesive Series',
    quant:'15 animal studies (constructive); 1 Original Creature Design; 1 Personal Statement Piece (no constraints); 3-piece cohesive series (character + environment + creature or similar); imagination intensive — 10 figures/day × 3x/wk over 4+ weeks; weekly design sprint',
    criteria:'Pass: creature has biological logic + shape language; statement piece feels personal (not skill demo); 3-piece series shows visible stylistic consistency. Repeat last 2 wks if series feels disconnected.'
  },
  weeks:[
    { wn:81, label:'moderndayjames Animal Construction Ep 1–3 + Mattesi Animal Ch 1 + 5 quadrupeds', watch:'~50 min mdj animals + reading', practice:'5 quadruped studies',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','moderndayjames — Animal Construction Playlist Ep 1'],
          ['40 min','Quadruped study #1 (constructive — gesture + simplified 3D forms)'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['25 min reading','Mattesi — FORCE: Animal Drawing Ch 1'],
          ['30 min','Quadruped study #2']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','mdj — Animal Construction Ep 2'],
          ['40 min','Quadruped study #3'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Quadruped study #4 + animal gesture warmups on line-of-action animal mode']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','mdj — Animal Construction Ep 3'],
          ['40 min','Quadruped study #5 (5 done)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Aaron Blaise — creatureartteacher.com free intro video + small applied study']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:82, label:'mdj animals Ep 4–5 + Mattesi Ch 2 + 5 avian + 5 aquatic', watch:'~50 min mdj + reading', practice:'10 animal studies (5+5)',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','mdj — Animal Construction Ep 4'],
          ['40 min','Avian study #1 (bird in flight or perched)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['25 min reading','Mattesi — Animal Drawing Ch 2'],
          ['30 min','Avian study #2']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','mdj — Animal Construction Ep 5'],
          ['40 min','Avian study #3'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Aquatic study #1 (fish, marine mammal) + Avian #4']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['15 min watch','Aaron Blaise — bird structure video'],
          ['45 min','Avian study #5 + Aquatic #2']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Aquatic study #3 + #4 (paired, fast)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:83, label:'mdj animals wrap + Mattesi Ch 3 + 5 reptilian + design begin', watch:'~40 min mdj + Aaron Blaise', practice:'5 reptilian + start creature concept',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','mdj — Animal Construction final episode'],
          ['40 min','Reptilian study #1 + Aquatic #5 (5 aquatic done)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['25 min reading','Mattesi — Animal Drawing Ch 3'],
          ['30 min','Reptilian study #2']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Aaron Blaise — creature design free clip'],
          ['45 min','Reptilian study #3'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Reptilian study #4 + creature design — first sketches (hybridize 2 animals)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min','Jonathan Kuo Foundation Group — free animal/creature post (optional preview)'],
          ['45 min','Reptilian study #5 (15 animal studies total + 5 of each type)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Creature design — 5 more thumbnails of original creature concept']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:84, label:'Whitlach (optional) intro + Aaron Blaise creature design + creature concept refine', watch:'~40 min Whitlach (if owned) or Aaron Blaise', practice:'Refine creature design',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['20 min watch','Terryl Whitlach — Schoolism Creature Design Lesson 1 (if subscribed) OR Aaron Blaise structure'],
          ['40 min','Creature concept — pick best, develop shape language exaggeration']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Creature design — anatomy logic pass (skeleton stance, joint placement)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Aaron Blaise — surface anatomy creature'],
          ['45 min','Creature design — surface anatomy / texture indication'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Creature design — value pass; personality through silhouette']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Daily Form Fill'],
          ['18 min watch','Whitlach (if owned) Lesson 2 OR Aaron Blaise color tutorial'],
          ['45 min','Creature design — color block-in']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Creature design — refinement pass + biome/ecology note (write 3 lines)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:85, label:'Phase 11 mid-rev + Creature Design finalize (milestone)', tag:'rev', watch:'Re-watch favourite Aaron Blaise / Whitlach clip', practice:'Finalize creature design',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Self-review on Phase 11 so far — write 5 lines'],
          ['50 min','Creature design — light & rendering pass']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Creature design — final detail; loose finish']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','Annotate creature design — what shape language? what biology rule?'],
          ['45 min','Creature design — declare done (milestone hit)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['15 min','Weekly Design Sprint — 10 variations of a different subject in 1 hr (carryover habit)'],
          ['40 min','Imagination intensive — 10 figures from imagination, no reference (begins now)']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Daily Form Fill'],
          ['15 min','SVSLearn — Jake Parker, Developing Your Illustration Style intro'],
          ['45 min','Original scene from imagination #1 (loose, source mandate 1x/week)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Open creative — apply emerging style to fan-art']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:86, label:'Imagination intensive wk 1 + Jake Parker style start', watch:'~30 min Jake Parker style', practice:'10 imagination figures × 3 days + 1 original scene',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['20 min watch','SVSLearn Jake Parker — Developing Your Illustration Style lesson 1'],
          ['40 min','Imagination intensive — 10 figures from imagination (Day 1 of 3)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Original scene from imagination #2 — push composition decisions']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['15 min watch','Jake Parker — style lesson 2'],
          ['45 min','Imagination intensive — 10 figures (Day 2)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Memory Drawing — 4 reference→memory pairs (source exercise) of recent subjects']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['15 min watch','Jake Parker — style lesson 3'],
          ['50 min','Imagination intensive — 10 figures (Day 3)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Weekly Design Sprint — 10 variations']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:87, label:'Imagination intensive wk 2 + Jake Parker continues + Style brief', watch:'~30 min Jake Parker', practice:'30 more imagination figures + write style brief',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['18 min watch','Jake Parker — style lesson 4'],
          ['45 min','Imagination intensive — 10 figures (Day 1 of 3)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['25 min','Style brief — write down your aesthetic in words (source mandate)'],
          ['30 min','Original scene from imagination #3']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['15 min watch','Jake Parker — style lesson 5'],
          ['50 min','Imagination intensive — 10 figures (Day 2)']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Memory Drawing — 4 pairs (visual library deepening)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['15 min watch','Jake Parker — style lesson 6'],
          ['50 min','Imagination intensive — 10 figures (Day 3)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Weekly Design Sprint — 10 variations']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:88, label:'Personal Statement Piece — concept + thumbnails', watch:'~30 min Jake Parker wrap or Zapata revisit', practice:'Plan personal statement piece',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['15 min watch','Jake Parker style wrap-up lesson'],
          ['50 min','Personal statement piece — brainstorm 10 ideas; pick 1']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Personal statement — 5+ thumbnails (Phase 8 habit applies)']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['15 min watch','Re-watch Zapata "what kind of artist am I" video'],
          ['45 min','Personal statement — refine chosen thumbnail; lay rough construction']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Personal statement — value sketch']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['15 min','Imagination intensive — 10 figures (1 of 3 this week)'],
          ['50 min','Personal statement — value refine']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Personal statement — color block-in']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:89, label:'Personal Statement Piece — build + finish', tag:'rev', watch:'Light skim weakest Phase 6/7 video', practice:'Render and finish statement piece',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['60 min','Personal statement — color refinement + temperature pass'],
          ['5 min','Doodle']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Personal statement — render focal area; edge pass']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['15 min','Imagination intensive — 10 figures (2 of 3)'],
          ['45 min','Personal statement — detail pass']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Personal statement — final pass; check at thumbnail size']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['10 min','Imagination intensive — 10 figures (3 of 3)'],
          ['50 min','Personal statement — declare done; loose finish (milestone hit)']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Self-review — write 5 lines on what this piece said about you']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:90, label:'Three-piece series — concept + all 3 thumbnails', watch:'Light: Zapata or Sinix revisit', practice:'Plan 3-piece series',
      days:[
        {dow:'Mon', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['18 min watch','Zapata — cohesion / portfolio identity video'],
          ['45 min','3-piece series — pick theme (one world, one style, or one mood); brainstorm']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','3-piece series — 5 thumbnails for Piece 1 (e.g., character)']
        ]},
        {dow:'Wed', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['18 min watch','Sinix — cohesion video'],
          ['45 min','3-piece series — 5 thumbnails for Piece 2 (e.g., environment)'],
          ['5 min','5 Faces from Imagination']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','3-piece series — 5 thumbnails for Piece 3 (e.g., creature)']
        ]},
        {dow:'Fri', type:'S', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['15 min','Define unifying palette + line/shape rules for the series'],
          ['50 min','Piece 1 — start construction']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Piece 1 — value sketch']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:91, label:'Three-piece series — Piece 1 build', watch:'Light video as needed', practice:'Piece 1 to loose finish',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['65 min','Piece 1 — color block-in (lock palette)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Piece 1 — temperature + value refinement']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['55 min','Piece 1 — focal area + render']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Piece 1 — edge pass + detail']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['10 min','Imagination intensive — 10 figures'],
          ['50 min','Piece 1 — declare done; check at small scale']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Piece 2 — start construction']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:92, label:'Three-piece series — Piece 2 build', watch:'Light video as needed', practice:'Piece 2 to loose finish',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['65 min','Piece 2 — value sketch + block-in']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Piece 2 — color block (matched to series palette)']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['10 min','Imagination intensive — 10 figures'],
          ['45 min','Piece 2 — temperature + atmospheric pass']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Piece 2 — focal area + detail']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['60 min','Piece 2 — declare done'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Piece 3 — start construction']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:93, label:'Three-piece series — Piece 3 build', tag:'rev', watch:'Light video as needed', practice:'Piece 3 to loose finish',
      days:[
        {dow:'Mon', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['7 min warmup','Mannequins x 5'],
          ['65 min','Piece 3 — value sketch + block-in']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Piece 3 — color block-in (palette-matched)']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['10 min','Imagination intensive — 10 figures'],
          ['45 min','Piece 3 — temperature pass']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Piece 3 — focal area + detail']
        ]},
        {dow:'Fri', type:'A', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['60 min','Piece 3 — final edge pass; declare done'],
          ['5 min','Doodle']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Lay all 3 pieces side by side — check cohesion (palette, shapes, line)']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]},
    { wn:94, label:'Phase 11 final revision — series cohesion + portfolio assembly', tag:'rev', watch:'Re-watch Zapata identity', practice:'Tighten series, write final reflection, plan next direction',
      days:[
        {dow:'Mon', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['15 min','Compare all 3 pieces — note 5 inconsistencies'],
          ['50 min','Series — adjust whichever piece breaks cohesion most (color or value)']
        ]},
        {dow:'Tue', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Series — second cohesion pass on whichever piece still feels off']
        ]},
        {dow:'Wed', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['15 min watch','Zapata — what comes after fundamentals video'],
          ['45 min','Portfolio assembly — pick best 12–20 pieces from all phases']
        ]},
        {dow:'Thu', type:'A', items:[
          ['7 min warmup','Mannequins x 5'],
          ['10 min','Gesture session'],
          ['55 min','Portfolio assembly — order pieces; write 1-line caption per piece']
        ]},
        {dow:'Fri', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['10 min warmup','Mannequins x 5'],
          ['15 min','Read Phase 11 source description on "Specialization gateway"'],
          ['45 min','Pick a specialization direction (A–F from source) — write 5 lines on why']
        ]},
        {dow:'Sat', type:'L', items:[
          ['5 min','Imagination sketch'],
          ['15 min','Gesture session'],
          ['40 min','Final self-review — 10 lines on the 22-month journey; first specialization session next week']
        ]},
        {dow:'Sun', type:'R', rest:true}
      ]}
  ]
});


// ─── Renderer + localStorage persistence ───
(function(){
  "use strict";

  const STORAGE_PREFIX = "art-sched-v1:";
  const TYPE_LABEL = {S:"Study", A:"Application", L:"Light", R:"Rest"};

  // Safe storage wrappers
  function safeGet(k){
    try { return localStorage.getItem(STORAGE_PREFIX + k); }
    catch(e) { return null; }
  }
  function safeSet(k, v){
    try { localStorage.setItem(STORAGE_PREFIX + k, v); }
    catch(e) { /* private mode or quota — fail silent */ }
  }
  function safeKeys(){
    try {
      const out = [];
      for (let i=0; i<localStorage.length; i++){
        const key = localStorage.key(i);
        if (key && key.startsWith(STORAGE_PREFIX)) out.push(key);
      }
      return out;
    } catch(e) { return []; }
  }

  function escapeHTML(s){
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function dayTotal(day){
    if (day.type === 'R') return 0;
    let total = 0;
    (day.items || []).forEach(item => {
      // First token before " min" / "m"
      const m = String(item[0]).match(/(\d+)\s*m/);
      if (m) total += parseInt(m[1], 10);
    });
    return total;
  }

  // Build phase DOM
  function renderPhase(p){
    const phaseEl = document.createElement('div');
    phaseEl.className = 'phase section';
    phaseEl.id = p.id;
    phaseEl.setAttribute('data-color', p.color);

    const top = `
      <div class="phase-top">
        <span class="phase-badge">Phase ${p.n}</span>
        <span class="phase-dur">Schedule wks ${p.dur[0]}–${p.dur[1]} · Source wks ${escapeHTML(p.srcWks)} · ${escapeHTML(p.srcHrs)} hrs</span>
      </div>
      <div class="phase-title">${escapeHTML(p.title)}</div>
      <div class="phase-goal">${escapeHTML(p.goal)}</div>
      <div class="phase-progress"><div class="phase-progress-fill" id="prog-${p.id}"></div></div>
      <div class="phase-meta">
        <div class="m"><div class="k">Weeks</div><div class="v">${p.weeks.length} (incl. revision)</div></div>
        <div class="m"><div class="k">Weekly</div><div class="v">${escapeHTML(p.weeklyStruct)}</div></div>
        <div class="m"><div class="k">Ratio</div><div class="v">${escapeHTML(p.ratio)}</div></div>
        <div class="m"><div class="k">Concurrent w/</div><div class="v">${escapeHTML(p.srcWks)}</div></div>
      </div>`;
    phaseEl.innerHTML = top;

    // Weeks
    p.weeks.forEach(w => {
      phaseEl.appendChild(renderWeek(p, w));
    });

    // Milestone
    const ms = document.createElement('div');
    ms.className = 'milestone';
    const msId = `ms-${p.id}`;
    ms.innerHTML = `
      <div class="lbl">Phase ${p.n} milestone</div>
      <div class="name">${escapeHTML(p.milestone.name)}</div>
      <div class="row">
        <input type="checkbox" id="${msId}-cap" data-key="${msId}-cap">
        <div class="k">Capstone</div>
        <label class="vv" for="${msId}-cap">${escapeHTML(p.milestone.name)}</label>
      </div>
      <div class="row">
        <input type="checkbox" id="${msId}-quant" data-key="${msId}-quant">
        <div class="k">Quantity</div>
        <label class="vv" for="${msId}-quant">${escapeHTML(p.milestone.quant)}</label>
      </div>
      <div class="row">
        <input type="checkbox" id="${msId}-pass" data-key="${msId}-pass">
        <div class="k">Pass / repeat</div>
        <label class="vv" for="${msId}-pass">${escapeHTML(p.milestone.criteria)}</label>
      </div>`;
    phaseEl.appendChild(ms);

    return phaseEl;
  }

  function renderWeek(p, w){
    const wk = document.createElement('details');
    wk.className = 'week';
    wk.setAttribute('data-week', w.wn);
    const isRev = w.tag === 'rev';
    const tagHTML = isRev ? '<span class="w-tag rev">Revision</span>' : '';
    const summary = `
      <summary>
        <span class="w-num">Wk ${w.wn}</span>
        <span class="w-label">${escapeHTML(w.label)}</span>
        ${tagHTML}
        <span class="w-prog" id="wp-${p.id}-w${w.wn}">0 / 0</span>
      </summary>`;
    const body = document.createElement('div');
    body.className = 'w-body';
    const meta = `
      <div class="w-meta">
        <div><b>Watch:</b> ${escapeHTML(w.watch || '—')}</div>
        <div><b>Practice:</b> ${escapeHTML(w.practice || '—')}</div>
      </div>`;
    body.innerHTML = meta;
    w.days.forEach((d, di) => body.appendChild(renderDay(p, w, d, di+1)));
    wk.innerHTML = summary;
    wk.appendChild(body);
    return wk;
  }

  function renderDay(p, w, d, dnum){
    const el = document.createElement('div');
    el.className = 'day type-' + d.type;
    const total = dayTotal(d);
    const totalHTML = total > 0 ? `<span class="day-total">${total} min</span>` : '<span class="day-total">rest</span>';
    let html = `
      <div class="day-h">
        <span class="day-dow">${escapeHTML(d.dow)}</span>
        <span class="day-type">${TYPE_LABEL[d.type] || d.type}</span>
        ${totalHTML}
      </div>`;
    if (d.rest){
      html += `<div class="rest-note">Rest — no new material. Optional 5–10 min imagination sketch only.</div>`;
    } else {
      html += '<ul>';
      (d.items || []).forEach((it, ii) => {
        const key = `${p.id}-w${w.wn}-d${dnum}-i${ii}`;
        const id = `cb-${key}`;
        html += `
          <li>
            <input type="checkbox" id="${id}" data-key="${key}">
            <span class="t">${escapeHTML(it[0])}</span>
            <label for="${id}">${escapeHTML(it[1])}</label>
          </li>`;
      });
      html += '</ul>';
    }
    el.innerHTML = html;
    return el;
  }

  // Mount all phases
  const root = document.getElementById('phase-root');
  if (!root) return;

  // Phase section wrapper
  const phasesSection = document.createElement('div');
  phasesSection.className = 'section';
  phasesSection.id = 'phases';
  phasesSection.innerHTML = `
    <div class="section-h"><span class="num">03</span><h2>11-Phase Schedule</h2></div>
    <p style="font-size:12.5px;color:var(--text-dim);margin-bottom:12px">Click a week to expand its day-by-day breakdown. Every checkbox state persists in localStorage.</p>
  `;
  root.appendChild(phasesSection);

  PHASES.forEach(p => phasesSection.appendChild(renderPhase(p)));

  // ─── Persistence ───
  const allBoxes = document.querySelectorAll('input[type=checkbox][data-key]');
  // Restore
  allBoxes.forEach(cb => {
    const v = safeGet(cb.dataset.key);
    if (v === '1') cb.checked = true;
  });

  function updateProgress(){
    // Per-phase
    let totalAll = 0, doneAll = 0;
    PHASES.forEach(p => {
      const sel = document.querySelectorAll(`#${p.id} input[type=checkbox][data-key]`);
      let tot = 0, done = 0;
      sel.forEach(cb => { tot++; if (cb.checked) done++; });
      const pct = tot ? Math.round(done * 100 / tot) : 0;
      const fill = document.getElementById(`prog-${p.id}`);
      if (fill) fill.style.width = pct + '%';
      totalAll += tot; doneAll += done;

      // Per-week
      p.weeks.forEach(w => {
        const wsel = document.querySelectorAll(`#${p.id} details[data-week="${w.wn}"] input[type=checkbox][data-key]`);
        let wt = 0, wd = 0;
        wsel.forEach(cb => { wt++; if (cb.checked) wd++; });
        const wp = document.getElementById(`wp-${p.id}-w${w.wn}`);
        if (wp) wp.textContent = `${wd} / ${wt}`;
      });
    });
    const overall = totalAll ? Math.round(doneAll * 100 / totalAll) : 0;
    const ov = document.getElementById('ovProgress');
    if (ov) ov.textContent = overall + '%';
  }

  // Save on change
  document.addEventListener('change', (e) => {
    const t = e.target;
    if (t.matches && t.matches('input[type=checkbox][data-key]')){
      safeSet(t.dataset.key, t.checked ? '1' : '0');
      updateProgress();
    }
  });

  updateProgress();

  // Clear all
  const clearBtn = document.getElementById('clearBtn');
  if (clearBtn){
    clearBtn.addEventListener('click', () => {
      if (!confirm('Clear all checked items? This cannot be undone.')) return;
      try {
        safeKeys().forEach(k => localStorage.removeItem(k));
      } catch(e){}
      document.querySelectorAll('input[type=checkbox][data-key]').forEach(cb => cb.checked = false);
      updateProgress();
    });
  }

  // Sticky nav scroll highlight
  const navLinks = document.querySelectorAll('.sidebar a');
  const targets = [];
  navLinks.forEach(a => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      targets.push({a, el});
      a.addEventListener('click', e => {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting){
        const id = en.target.id;
        navLinks.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.sidebar a[href="#${id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  targets.forEach(t => io.observe(t.el));
})();
