# Learning Aides — Physical Sciences (Grades 10–12)

> CAPS subject · FET Phase · Gr10–12  
> Physics: Mechanics · Waves & Sound · Electricity & Magnetism · Electrodynamics · Optics  
> Chemistry: Matter & Materials · Chemical Change · Chemical Systems · Electrochemistry

---

## Subject Overview & Digital Opportunities

Physical Sciences is the most quantitative and mathematically demanding school science subject in the CAPS curriculum. Its dual-stream structure (Physics and Chemistry in parallel across three years) means learners must constantly switch between macroscopic observation, symbolic equations, and sub-microscopic particle models. This "three-level thinking" is where digital aides have the greatest impact: simulations and animations are the only medium that can show atoms rearranging in a chemical reaction *while* displaying the balanced equation *while* plotting a graph of energy change simultaneously.

Key digital affordances:
- **Sub-microscopic visualisation** — atoms, ions, electrons made visible
- **Dangerous/expensive experiment replacement** — explosions, radioactive decay, high-voltage demonstrations
- **Equation ↔ graph ↔ motion linkage** — simultaneous display of formula, motion diagram, and graph
- **Quantitative sliders** — change mass, velocity, concentration; watch equations and diagrams update live

---

## Recommended Aide Types

### Physics: Mechanics

| Aide Type | Description | Rationale | Priority |
|-----------|-------------|-----------|----------|
| **Kinematics Motion Simulator** | 1D & 2D projectile motion; live position/velocity/acceleration graphs; vector arrows on body | Newton's Laws and kinematics dominate Gr10–11 physics; graph↔motion linkage is the key conceptual bridge | **High** |
| **Free Body Diagram Builder** | Place objects on surfaces/inclines; add force vectors; resolve components; check equilibrium | Drawing and interpreting FBDs is a core exam skill; interactive construction enforces correct notation | **High** |
| **Energy Skate Park** (PhET-style) | Draggable skater on customisable track; live KE/PE/thermal energy bar charts | Conservation of energy (Gr11) is deeply counter-intuitive; energy-bar visualisation is uniquely effective | **High** |
| **Projectile Motion Lab** | Launch angle/speed sliders; trajectory traced; range/max-height calculated live | Projectile motion (Gr11) is a classic lab; digital version allows rapid multi-trial investigation | **High** |
| **Momentum & Collision Simulator** | 1D elastic/inelastic collisions with mass/velocity sliders; momentum conservation verified live | Momentum (Gr11) is abstract; seeing conservation play out numerically + visually is critical | **Medium** |
| **Doppler Effect Animator** | Moving source; wavefront animation; pitch shift; police-siren demo | Doppler (Gr11) is purely wave-based and almost impossible to show in a classroom | **Medium** |

### Physics: Electricity & Magnetism

| Aide Type | Description | Rationale | Priority |
|-----------|-------------|-----------|----------|
| **Advanced Circuit Simulator** | Series/parallel resistor networks; Ohm's Law live readouts; internal resistance; power calculations | Circuits dominate Gr10–11 electricity; quantitative simulation replaces expensive multimeters | **High** |
| **Electric & Magnetic Field Visualiser** | Field-line renderer for point charges, bar magnets, solenoids; vector field overlay | Field concepts (Gr11–12) are invisible; visual field lines are the standard pedagogical representation | **High** |
| **Electromagnetic Induction Demo** | Animate a moving coil in a magnetic field; show induced EMF vs. velocity graph; Lenz's law indicator | Electrodynamics (Gr12) is complex and counterintuitive; animated demonstration is near-essential | **High** |
| **AC/DC Generator & Motor** | Animated generator cross-section; rotation speed slider; output waveform display | Gr12 generators/motors are difficult to draw and harder to animate statically | **Medium** |

### Chemistry: Matter & Reactions

| Aide Type | Description | Rationale | Priority |
|-----------|-------------|-----------|----------|
| **Periodic Table Explorer** | Interactive periodic table; click element for properties, electron configuration, trends graph | The periodic table is a Gr10–11 anchor; interactive trend visualisation (ionisation energy, atomic radius) is far superior to tables | **High** |
| **Molecular Model Builder** | 3D ball-and-stick molecule builder; VSEPR geometry display; polarity indicator | Bonding and molecular shape (Gr10–11) are 3D spatial concepts; flat diagrams inadequate | **High** |
| **Balancing Equations Trainer** | Animated particle-level view of reaction; coefficient sliders; atom counter validates balance | Balancing equations (Gr10) is procedural but conceptually important; particle view bridges symbolic and sub-microscopic | **High** |
| **Stoichiometry Calculator** | Mole ↔ mass ↔ volume ↔ particles conversion chain; limiting reagent highlighter | Stoichiometry (Gr11–12) is consistently the highest-difficulty topic in Physical Sciences; step-visible calculation scaffolds | **High** |
| **Reaction Rate Simulator** | Concentration/temperature/surface-area sliders; collision frequency animation; rate-vs-time graph | Chemical kinetics (Gr12) — Collision Theory made visual; activation energy diagram with catalyst toggle | **Medium** |
| **Equilibrium & Le Chatelier Simulator** | Stress the equilibrium (add reactant, change temperature/pressure); watch forward/reverse rate bars shift | Chemical equilibrium (Gr12) is notoriously abstract; real-time bar-chart response to stress is transformative | **High** |
| **Electrochemistry Cell Builder** | Galvanic and electrolytic cell diagrams; ion/electron flow animation; EMF calculator | Electrochemistry (Gr12) is complex; animated ion/electron flow makes the circuit analogy concrete | **Medium** |
| **Acids & Bases pH Calculator** | Strong/weak acid-base pH calculation; pH ↔ [H₃O⁺] converter; dilution visualiser | Acids/bases appear in Gr11–12; bridging pH concept to particle-level concentration is critical | **Medium** |

---

## Specific SPA Component Ideas

1. **`<MotionSimulator />`** — requestAnimationFrame physics engine with live kinematic graphs (v-t, x-t, a-t)
2. **`<FBDBuilder />`** — vector force-arrow canvas with component resolution and net-force display
3. **`<CircuitSimulator />`** — node-voltage method engine; supports internal resistance and capacitors
4. **`<PeriodicTableExplorer />`** — SVG periodic table with trend visualisation overlay (heatmap mode)
5. **`<MoleculeBuilder3D />`** — Three.js ball-and-stick model with VSEPR auto-geometry
6. **`<EquationBalancer />`** — particle counting UI linked to coefficient input sliders
7. **`<StoichStepper />`** — molar calculation chain visualiser with unit-tracking at each step
8. **`<EquilibriumLab />`** — dynamic rate-bar chart that responds to Le Chatelier stress inputs
9. **`<EMInductionDemo />`** — animated SVG coil + magnet with EMF output graph
10. **`<ElectrochemCell />`** — interactive Daniell cell with animated ion/electron flows and EMF display

---

## Inspirational Platforms & Research

| Platform | Relevant Feature | Application |
|----------|-----------------|-------------|
| **PhET "Energy Skate Park"** | Energy conservation visualiser | Direct model for energy skate park component |
| **PhET "Circuit Construction Kit: DC"** | Full circuit simulator | Model for `CircuitSimulator` |
| **PhET "Reactants, Products & Leftovers"** | Stoichiometry simulation | Model for `EquationBalancer` |
| **PhET "Balancing Chemical Equations"** | Particle-level balancing | Model for balancing trainer |
| **PhET "Acid-Base Solutions"** | pH and particle-level simulator | Model for pH calculator |
| **PhET "Wave on a String"** | Wave properties exploration | Wave and Doppler visualisations |
| **Royal Society of Chemistry** | Interactive periodic table with trend data | Data source and UX model for periodic table |
| **Chemtube3D (Univ. of Liverpool)** | 3D orbital and molecule animations | Model for molecular geometry viewer |
| **Falstad Circuit Simulator** | Browser-based AC/DC circuit simulation | Competition/benchmark for circuit builder |
| **NIST WebBook** | Thermodynamic data, spectra | Reference data for advanced Gr12 topics |

---

## Implementation Notes

- Physics simulations need a **real-time physics engine** — use Matter.js (2D) or a custom Verlet integrator for mechanics
- Chemistry 3D models need **Three.js or Babylon.js** with instanced meshes for performance
- All quantitative tools must display **SI units with correct notation** and support unit-checking as a learning scaffold
- Provide **CAPS-aligned worked examples** (past exam questions) embedded in each tool's guided mode
- Consider **offline capability** (PWA caching) — Physical Sciences exams are high-stakes and learners may revise in low-connectivity contexts