# Learning Aides — Mathematical Literacy (Grades 10–12)

> CAPS subject · FET Phase only · Gr10–12  
> Covers: Finance · Measurement · Maps & Scale · Data Handling · Probability (all in real-world contexts)

---

## Subject Overview & Digital Opportunities

Mathematical Literacy (ML) is deliberately contextualised — every concept is anchored in an authentic life situation: managing a household budget, reading a payslip, interpreting a medication dosage chart, or navigating a city map. This real-world grounding is a massive digital advantage: learners can interact with *actual* or simulated data, tools, and documents rather than purely abstract problems. The subject attracts learners who are often anxious about mathematics, so engagement, relevance, and confidence-building are paramount design goals.

Key digital affordances:
- **Authentic data sources** — real South African statistics (Stats SA, Reserve Bank data) make tasks immediately meaningful
- **Simulation of everyday tools** — virtual scales, thermometers, currency converters, tax calculators
- **Visual data literacy** — interpreting infographics, charts, and maps is core to the subject
- **Low abstraction ceiling** — computations are arithmetic-level, so the focus shifts to reasoning, interpretation, and communication

---

## Recommended Aide Types

| Aide Type | Description | Rationale | Priority |
|-----------|-------------|-----------|----------|
| **Personal Finance Simulator** | Interactive income/expenditure budgeter; VAT calculator; hire-purchase vs. cash comparison; compound interest growth chart | Finance topics dominate ML — income, banking, inflation, loans, insurance; simulation builds genuine financial literacy | **High** |
| **Tax & Payslip Decoder** | Annotated, interactive payslip with PAYE, UIF, and deduction explanations; taxable income calculator linked to SARS brackets | SA-specific and directly vocational; demystifies adult financial documents encountered outside school | **High** |
| **Data Chart Interpreter** | Pre-loaded real-world datasets (population, health, sport); learner toggles chart type, identifies trends, answers structured questions | ML Paper 1 & 2 consistently test chart reading and interpretation; active manipulation deepens critical reading | **High** |
| **Maps & Scale Tool** | Zoomable map with ruler overlay; scale converter; direction/bearing widget; floor-plan area calculator | Maps and scale are a unique ML topic; interactive distance-measurement on a digital map is authentic | **High** |
| **Measurement Converter** | Unit conversion (mm↔cm↔m↔km, ml↔L, g↔kg); temperature (°C/°F); dosage calculator | Measurement in context — recipes, building plans, medicine — is a regular exam context; conversion errors are very common | **Medium** |
| **Probability Scenario Simulator** | Spinners and event simulators tied to real scenarios (weather forecasts, medical tests, lotteries); relative frequency charts | Probability in ML is applied (risk, chance, expectation) not theoretical; simulation makes likelihood tangible | **Medium** |
| **Time & Timetable Planner** | Scheduling tool; elapsed time calculator; 24h vs 12h clock converter; calendar date arithmetic | Time calculations (travel, schedules, deadlines) appear in every ML exam | **Medium** |
| **Ratio, Rate & Proportion Calculator** | Visual ratio bars; unit-rate comparison cards; scale factor slider | Best-buy calculations, mixing ratios, speed-distance-time — routine ML contexts | **Medium** |
| **Break-even / Profit Analyser** | Interactive cost/revenue slider graphs; profit zone shaded; break-even point marked | Gr12 ML includes basic business maths; visual break-even graph is highly memorable | **Low** |

---

## Specific SPA Component Ideas

1. **`<BudgetPlanner />`** — drag-and-drop monthly income/expense tracker with automatic surplus/deficit indicator
2. **`<PayslipDecoder />`** — annotated payslip with hover-to-explain fields; linked SARS bracket calculator
3. **`<HirePurchaseComparison />`** — side-by-side timeline: cash price vs. HP total cost over term
4. **`<InteractiveMap />`** — OpenStreetMap or SVG floor-plan layer; on-screen ruler; scale selector
5. **`<RealWorldChartReader />`** — loads a stats chart, learner answers scaffolded interpretation questions
6. **`<UnitConverter />`** — multi-category converter with animated visual (e.g., beaker fills as ml value changes)
7. **`<BreakEvenGraph />`** — cost/revenue sliders; graph auto-updates; break-even intersection marked
8. **`<ProbabilityNewsReader />`** — embeds a real-world probability statement (e.g., weather app %) and asks critical-reading questions

---

## Inspirational Platforms & Research

| Platform | Relevant Feature | Application |
|----------|-----------------|-------------|
| **SARS eFiling simulator** | Real tax calculations | Basis for payslip/tax tool; use actual SARS brackets |
| **MoneySmart (ASIC, Australia)** | Budget calculator, compound interest visualiser | UX model for finance simulators |
| **Stats SA / STATSSA open data** | Real SA demographic and economic datasets | Authentic data source for chart-reading activities |
| **Google Maps / OpenStreetMap** | Digital maps with scale | Model/API for map tool |
| **Khan Academy Financial Literacy** | Contextual video + exercise pairs | Content model for finance topic sequencing |
| **Gapminder Tools** | Animated statistical bubble charts | Inspiration for rich data visualisation tasks |
| **Mathigon Probability** | Interactive probability playground | Model for ML probability scenarios |

---

## Implementation Notes

- Use **real South African data** wherever possible (Stats SA, Reserve Bank, SARS) — this directly addresses the CAPS principle of relevance
- Finance tools must use **current ZAR values and SARS tables** — build in an annual data-refresh mechanism
- All ML tools should emphasise **reading and interpretation questions**, not just computation — include typed short-answer fields
- Pair every tool with a **worked example** showing how to document/justify answers (critical for exam technique)
- Accessibility: large tap targets, plain language labels, high-contrast currency symbols