# Learning Aides — Technology (Gr 8–9)

> South African CAPS · Grades 8–9 · PrepPals Browser-Based SPA

## Subject Overview

Technology in the CAPS Gr 8–9 curriculum develops design-and-make competency
across five recurring knowledge areas: **Structures**, **Mechanical Systems
& Control**, **Electrical Systems & Control**, **Processing**, and the
overarching **Technological Process** — the IDMEC cycle (Investigate, Design,
Make, Evaluate, Communicate). Learners work through full design briefs and
produce portfolios of evidence assessed against CAPS rubrics.

Unlike other technology subjects, Technology is explicitly hands-on and
process-driven. Digital aides serve two purposes: first, to build conceptual
understanding of *why* structures carry loads, how gears multiply force, and
how circuits function; second, to scaffold the portfolio and design process
for learners who struggle to organise their thinking on paper. Both purposes
are equally important in under-resourced contexts where physical materials
may not always be available.

---

## Recommended Aide Types

### 1. IDMEC Design Process Portfolio Builder
**Priority: 🔴 High**

**Description:** A guided, step-by-step digital workspace that walks learners
through all five stages of the Technological Process for a given design brief.
Each stage has structured prompts, text input areas, a simple annotation
canvas for sketches, image upload, and a CAPS-aligned checklist. Completed
portfolios export as a printable PDF.

**Rationale:** The design portfolio is the primary assessment instrument in
Technology. Learners frequently omit stages or provide superficial responses
because they don't understand what depth is expected at each stage. A
scaffolded digital tool models the expected depth through targeted prompts,
keeps learners progressing through all five stages, and familiarises them
with the vocabulary used in assessment rubrics.

**Component Ideas:**
- `<TechPortfolio>` — a wizard-style interface with five clearly labelled
  tabs: **Investigate · Design · Make · Evaluate · Communicate**.
- **Investigate stage**: research prompts ("Who will use this product?",
  "What problem are you solving?", "What similar products exist?"), a
  structured needs analysis template, and a simple comparison table for
  existing solutions.
- **Design stage**: annotatable canvas (upload a hand-drawn sketch + draw
  labels/arrows on top), a materials-and-tools selection table, labelled
  diagram checklist, and a constraints-and-criteria input field.
- **Make stage**: step-by-step instruction recorder where the learner documents
  each build step with written notes and optional photo uploads. Auto-generates
  a numbered process list.
- **Evaluate stage**: a structured rubric matching CAPS assessment criteria;
  learner self-evaluates first, then compares to suggested model responses.
  Prompts for improvements and modifications.
- **Communicate stage**: guided paragraph writer with sentence starters
  in Technology register ("The product successfully addresses the design brief
  because…", "If I were to redesign this, I would…").

**Inspirational examples:** code.org project portfolio approach, Tinkercad's
step-by-step project builder, Google CS First activity journals.

---

### 2. Virtual Circuit Builder (Electrical Systems & Control)
**Priority: 🔴 High**

**Description:** A drag-and-drop circuit simulator where learners assemble
circuits using standard schematic symbols for batteries, bulbs, switches,
resistors, motors, and LEDs on a virtual canvas. The simulation shows current
flow via animated moving-dot visualisation and clearly indicates whether the
circuit is complete and functional.

**Rationale:** Electrical circuits are a core Gr 8–9 topic and a consistent
source of confusion (series vs. parallel, open vs. closed circuit, the effect
of adding components on brightness/speed). Physical circuit kits are not
reliably available in under-resourced schools. A browser circuit builder
provides unlimited, safe, zero-cost experimentation with immediate visual
feedback — the exact conditions needed for building intuition.

**Component Ideas:**
- `<CircuitBuilder>` — a simplified, CAPS-scoped version of the open-source
  [Falstad Circuit Simulator](https://www.falstad.com/circuit/)
  (circuitjs1, MIT-licensed, embeddable), restricted to components in the
  CAPS Gr 8–9 scope: cell/battery, bulb, switch, motor, resistor, buzzer, LED,
  and connecting wire.
- Series vs. parallel comparison mode: build the same circuit in both
  configurations side-by-side and observe brightness/speed differences with
  animated indicators.
- Fault-finding mode: a pre-built "broken" circuit (open switch in wrong
  position, blown bulb symbol, short circuit) — learner identifies and
  corrects the fault by clicking the problematic element.
- Component photo link: clicking a circuit symbol shows a photograph of the
  real component — bridges the gap between schematic notation and physical
  reality.
- Kirchhoff's current law visualiser (Gr 9): animated branching current paths
  in a parallel circuit showing how current splits and recombines.

**Inspirational examples:** [Falstad Circuit Simulator](https://www.falstad.com/circuit/)
(circuitjs1 — open source, browser-native, MIT licence), PhET "Circuit
Construction Kit: DC" HTML5 simulation (University of Colorado Boulder,
CC-BY licence), Tinkercad Circuits (browser-based circuit + Arduino simulation).

---

### 3. Structures Stress & Load Simulator
**Priority: 🔴 High**

**Description:** A visual, physics-informed simulation where learners apply
point and distributed loads to simple structures (beams, trusses, frames,
columns) and observe deflection, colour-mapped stress distribution, and
failure points. Learners adjust variables (cross-section shape, support type,
material stiffness) and observe the effect on structural performance.

**Rationale:** The Structures topic requires learners to understand
compression, tension, torsion, and shear — forces that are completely abstract
without visualisation. Seeing a beam bow under load, or a triangulated truss
distribute force far more efficiently than a square frame, builds physical
intuition that translates directly to better-justified design decisions in
portfolios and exams.

**Component Ideas:**
- `<StructureSim>` — a 2D SVG/Canvas-based beam and truss simulator using a
  lightweight physics engine (Matter.js or a custom stiffness-matrix
  solver). Pre-built scenarios: single-span beam, simply-supported truss,
  cantilever bracket.
- Pre-set challenges: "Add a diagonal brace to this square frame and observe
  the difference in load-bearing performance" — triangulation principle made
  visceral.
- Shape cross-section explorer: compare identical material volume in I-beam,
  circular, square hollow, and solid cross-sections under the same bending
  load. Shows why I-beams are used in construction.
- Bridge design challenge: a gamified mode where learners design a bridge
  using a limited material budget that must carry a specified load — scored
  on structural efficiency.
- Force type labeller: click any member in the structure and see whether it
  is in compression or tension, with colour coding (red = compression,
  blue = tension) matching the CAPS convention.

**Inspirational examples:** West Point Bridge Designer (classic educational
bridge simulator), PhET "Balancing Act" HTML5 simulation, Algodoo 2D physics
sandbox, SkyCiv free online structural analysis tools.

---

### 4. Mechanical Systems — Gear, Pulley & Lever Calculator
**Priority: 🟡 Medium**

**Description:** An interactive mechanical advantage explorer for gears,
levers, pulleys, and cams. Learners input driver/driven gear tooth counts (or
pulley/wheel diameters) and the tool animates the mechanism while calculating
gear ratio, velocity ratio, and mechanical advantage in real time.

**Rationale:** Mechanical advantage calculations are a consistent examination
topic. Learners understand the formula procedurally but struggle to connect it
to the *visual* behaviour of real mechanisms — particularly gear direction of
rotation, speed changes, and effort reduction. Animation of meshing gears
turning at different speeds makes the ratio intuitive, not just mathematical.

**Component Ideas:**
- `<GearCalculator>` — animated SVG gear pair with adjustable tooth counts
  (draggable slider). Displays driven-gear RPM, gear ratio, direction of
  rotation, and mechanical advantage.
- Compound gear train explorer (Gr 9): add intermediate gears and see the
  cumulative ratio calculated step by step.
- Pulley system builder: add pulleys to a rope-and-load diagram and see how
  each additional pulley reduces the effort required — mechanical advantage
  updates as pulleys are added.
- Lever class identifier: input effort position, load position, and fulcrum
  position; tool classifies the lever as Class 1, 2, or 3 and shows a
  real-world example (scissors, wheelbarrow, tweezers).
- Cam profile explorer: show how circular, eccentric, and pear-shaped cam
  profiles translate rotary motion into different follower stroke patterns —
  relevant to Gr 9 mechanisms content.

**Inspirational examples:** GearGenerator.com animated gear visualisation,
PhET interactive simulations (slider → animation paradigm), PBS LearningMedia
STEM mechanical simulations, Lego Education mechanism kits as conceptual
reference.

---

### 5. Materials & Processing Property Comparator
**Priority: 🟡 Medium**

**Description:** A searchable visual database of materials (wood, mild steel,
aluminium, acrylic/perspex, polyethylene, cardboard, textiles) with properties
displayed on a radar chart (strength, flexibility, density, cost, workability,
durability, sustainability). Learners select two materials and compare their
suitability for a specific design brief.

**Rationale:** Material selection in the Design stage of a portfolio requires
learners to justify choices using specific properties. A visual radar chart
makes multi-property comparisons immediate and helps learners articulate
trade-offs in the formal language expected by the CAPS marking rubric.

**Component Ideas:**
- `<MaterialComparator>` — searchable material picker with a Chart.js or
  Recharts radar chart overlaying two selections simultaneously.
- Processing method matcher: given a selected material, show which tools and
  processes apply (cutting, drilling, bending, welding, sewing, moulding)
  with safety icons and PPE requirements.
- Sustainability score layer: display each material's environmental impact
  (recyclability rating, approximate carbon footprint, biodegradability) —
  links to the CAPS social and environmental responsibility outcomes.
- SA-sourced materials context: indicate locally available equivalents and
  typical cost ranges in South African rands.

**Inspirational examples:** CES EduPack student material selection software
(used in engineering education globally), Matweb material property database,
Ashby material selection charts (Cambridge Engineering Selector).

---

### 6. Design Brief Generator & Challenge Bank
**Priority: 🟢 Low**

**Description:** A randomised design brief generator that produces
CAPS-aligned briefs with realistic constraints (budget in rands, material
restrictions, user needs, size limits, time available). Each brief links to
the relevant knowledge area and includes CAPS assessment criteria. Primarily
useful for timed exam preparation and extension activities.

**Component Ideas:**
- `<BriefGenerator>` — randomise from a curated pool of CAPS-aligned brief
  templates, each with adjustable difficulty (Gr 8 vs. Gr 9 complexity).
- "Analyse this brief" mode: a given brief with guided decomposition
  questions ("Who is the user?", "What is the core problem?", "What
  constraints apply?", "How will you measure success?").
- Timer mode: generates a brief and starts a countdown for timed portfolio
  planning practice under exam-like conditions.

---

## Priority Summary

| Aide | Priority |
|---|---|
| IDMEC Design Process Portfolio Builder | 🔴 High |
| Virtual Circuit Builder | 🔴 High |
| Structures Stress & Load Simulator | 🔴 High |
| Mechanical Systems — Gear, Pulley & Lever Calculator | 🟡 Medium |
| Materials & Processing Property Comparator | 🟡 Medium |
| Design Brief Generator & Challenge Bank | 🟢 Low |

---

## Implementation Notes

- **circuitjs1** (Falstad Circuit Simulator, MIT licence) is pure JavaScript
  and can be loaded in a sandboxed `<iframe>` or adapted as a React component
  — it is the most capable and most readily embeddable free circuit simulator
  available for the browser.
- **PhET HTML5 simulations** ("Circuit Construction Kit: DC", "Balancing Act")
  are CC-BY licensed and can be embedded via `<iframe>` at zero cost. They
  complement rather than replace a custom-built component.
- **Matter.js** (2D rigid body physics, MIT licence) is a well-maintained
  library that can power both the circuit layout simulation and lightweight
  structural load demonstrations without a full game engine overhead.
- **Chart.js** with the radar chart type is a lean, well-documented solution
  for the materials comparator (< 60 kB gzipped).
- **Rough.js** (hand-drawn SVG rendering style) is worth considering for the
  circuit builder and structure simulator — producing outputs that look
  "sketched in a workbook" aligns with the Technology subject's design-and-
  draw culture and feels age-appropriate for Gr 8–9 learners.
- All aides must use CAPS-specific terminology throughout
  (e.g. "IDMEC", "design brief", "design constraints", "user needs",
  "design criteria", "technological process") so that the language of the
  tool directly matches the language of the exam and the portfolio rubric.
- **Grade differentiation**: Gr 8 aides should use simpler scenarios and
  heavily scaffolded prompts; Gr 9 versions can introduce compound mechanisms,
  multi-table circuits, and more open-ended briefs with less hand-holding.