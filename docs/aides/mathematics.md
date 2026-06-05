# Learning Aides — Mathematics (Grades 6–12)

> CAPS subject · GET Phase: Gr6–9 · FET Phase: Gr10–12  
> Covers: Number & Algebra · Geometry · Measurement · Data Handling · Trigonometry · Calculus · Probability

---

## Subject Overview & Digital Opportunities

Mathematics is uniquely suited to computer-based learning because its objects — equations, graphs, geometric figures, statistical distributions — are inherently visual and manipulable. Digital tools collapse the gap between symbolic notation and geometric intuition, allow instant feedback on procedural work, and let learners explore "what if" without the cost of erasing or re-drawing. In the South African context, where class sizes are large and manipulative resources are scarce, browser-based tools are a high-leverage equaliser across both GET and FET phases.

Key affordances:
- **Dynamic linking** between symbolic, numeric, and graphical representations
- **Immediate correctness feedback** to break the "bad habit reinforcement" cycle
- **Parametric exploration** — sliders let learners own the discovery of patterns
- **Scaffolded progression** from concrete manipulatives → pictorial representations → abstract notation

---

## Recommended Aide Types

### 🟩 Grade Band: Gr6–9 (GET)

| Aide Type | Description | Rationale | Priority |
|-----------|-------------|-----------|----------|
| **Digital Number Manipulatives** | Interactive fraction walls, area models, number lines with draggable elements | Builds multiplicative reasoning and fraction sense that underpins all later algebra | **High** |
| **Algebra Tile Canvas** | Virtual tiles for modelling expressions, equations, and factorisation | Concretises the distributive law before symbolic manipulation; replaces physical cut-out tiles | **High** |
| **Dynamic Geometry Sandbox** (GeoGebra-style) | Drag-to-construct triangles, polygons, angle bisectors, circles; display live measurements | Euclidean geometry (Lines, angles, triangles, Theorem of Pythagoras) is a Gr7–9 mainstay; seeing relationships mutate live is superior to static diagrams | **High** |
| **Graphing Canvas (basic)** | Plot Cartesian points, linear and quadratic functions by entering equations | Introduces the co-ordinate plane and function concept before formal Gr10 work | **Medium** |
| **Statistical Chart Builder** | Enter data sets, generate bar/pie/histogram/box-plot, compute mean/median/mode | Data handling is assessed in every GET grade; instant chart generation supports hypothesis testing | **Medium** |
| **Formula / Expression Renderer** | LaTeX/MathML renderer for displaying worked examples step-by-step with colour-coded terms | Reduces cognitive load from hand-written notation; builds mathematical reading fluency | **Medium** |
| **Adaptive Drill Engine** | Randomised practice questions with spaced repetition (integers, fractions, ratio, percentage) | Procedural fluency needs high-volume low-stakes practice; automation makes this scalable | **High** |

---

### 🟦 Grade Band: Gr10–12 (FET)

| Aide Type | Description | Rationale | Priority |
|-----------|-------------|-----------|----------|
| **Advanced Function Grapher** | Multi-function plotter with zoom/trace, asymptote detection, domain/range shading, roots and turning points marked | FET Functions topic (hyperbola, exponential, trig functions) demands rich graphical exploration | **High** |
| **Trigonometry Unit Circle** | Animated unit circle with live sin/cos/tan readouts, wave construction, reference angles, special values | Trig ratios, identities, and graphs are consistently high-stakes exam topics; animated linkage between circle and wave is uniquely powerful | **High** |
| **Equation Stepper** | Step-by-step CAS-lite: shows each algebraic manipulation rule applied, colour-coded | Breaks the "answer-only" mindset; teaches manipulation as a sequence of justified steps | **High** |
| **Calculus Visualiser** | Secant → tangent animation for derivatives; Riemann sum builder for integration; area-under-curve shading | Gr12 Calculus — limits, derivatives, and integration — are deeply visual; PhET-style sliders for Δx make the concept of a limit concrete | **High** |
| **Probability Simulator** | Coin/dice/spinner/card simulators with live relative-frequency charts; Venn diagram builder; tree-diagram generator | Probability (Gr10–12) requires both formal calculation and statistical intuition; large-trial simulation bridges both | **High** |
| **Statistics Sandbox** | Scatter plot with draggable points, live regression line update, correlation coefficient display | Bivariate data / regression is a Gr11–12 FET topic; seeing the regression line "pull" as outliers are dragged is memorable | **Medium** |
| **3D Geometry Viewer** | Rotate, section, and unfold platonic solids, prisms, pyramids; surface-area and volume labels live | Mensuration of 3D shapes is tested in Paper 2; 3D reasoning is hard to develop from flat diagrams | **Medium** |
| **Financial Mathematics Tool** | Compound-interest growth visualiser; loan amortisation timeline; effective vs nominal rate comparison | Gr10–12 Financial Maths is applied and calculator-heavy; visual timelines build conceptual understanding alongside formula use | **Medium** |

---

## Specific SPA Component Ideas

1. **`<AlgebraTileCanvas />`** — drag-and-drop tile interface for factorisation and expansion (Gr8–10)
2. **`<GeoBoard />`** — virtual pegboard for area, perimeter, and transformations (Gr6–8)
3. **`<FunctionPlotter />`** — Desmos-inspired multi-function canvas with parameter sliders (Gr9–12)
4. **`<UnitCircleExplorer />`** — animated SVG circle + wave construction, synced (Gr10–12)
5. **`<RiemannSumBuilder />`** — adjustable Δx partition visualiser under a curve (Gr12)
6. **`<ProbabilityLab />`** — Monte Carlo coin/dice simulator with convergence graph (Gr10–12)
7. **`<StepSolver />`** — renders algebraic steps with justifications; highlight the active rule (Gr8–12)
8. **`<StatsSandbox />`** — scatter plot with draggable points, live OLS regression overlay (Gr11–12)
9. **`<FinanceTimeline />`** — SVG-based compound growth / loan repayment animated timeline (Gr10–12)
10. **`<FormulaRenderer />`** — KaTeX-powered inline and block formula display throughout all content

---

## Inspirational Platforms & Research

| Platform | Relevant Feature | Application |
|----------|-----------------|-------------|
| **Desmos Graphing Calculator** | Free, browser-native, sliders, animations, table↔graph linking | Model for `FunctionPlotter`; world standard for accessible graphing |
| **GeoGebra Suite** | Geometry + CAS + 3D in one engine; 1M+ community resources | Model for geometry sandbox and 3D viewer; embed GeoGebra applets directly |
| **Khan Academy** | Mastery-based exercise engine; hints system; SAT/CAPS-adjacent content | Model for adaptive drill engine and hint architecture |
| **Wolfram Alpha** | Step-by-step computation; natural-language input | Inspiration for `StepSolver`; computational backbone reference |
| **NRICH (Cambridge)** | Rich investigative tasks with interactive elements | Problem design philosophy for open-ended exploration tasks |
| **PhET "Graphing Lines"** | Interactive slope/intercept manipulation | Model for linear function explorer in Gr9 |
| **Mathigon** | Visual storytelling + interactives for every topic | Gold standard for visual narrative + embedded interactives |

---

## Implementation Notes

- Render all mathematics with **KaTeX** (fast, browser-native LaTeX) — never use images for formulae
- **Desmos API** can be embedded for advanced graphing without rebuilding from scratch
- **GeoGebra applets** are embeddable via `<iframe>` or the GeoGebra JavaScript API
- All simulations should be **keyboard- and screen-reader accessible** (WCAG 2.1 AA)
- Provide Afrikaans-language labels/instructions for CAPS alignment in dual-medium schools