# Learning Aides — Information Technology (Gr 10–12)

> South African CAPS · Grades 10–12 · PrepPals Browser-Based SPA

## Subject Overview

Information Technology (IT) in the CAPS curriculum covers Object-Oriented
Programming in Delphi/Pascal, relational databases and SQL, networking
concepts, computer hardware, internet technologies, and the social and ethical
implications of computing. The subject is unique in that learners are expected
to both *understand* systems conceptually and *write working code* — a
combination that benefits enormously from immediate, interactive feedback.

Because the NSC exam tests written pseudocode, OOP class design, SQL queries,
and network diagrams, every digital aide should reinforce the exact notation
and terminology learners will encounter in paper-based assessments, not just
generic CS concepts.

---

## Recommended Aide Types

### 1. In-Browser Pascal / Free Pascal Code Runner
**Priority: 🔴 High**

**Description:** A sandboxed editor that accepts Free Pascal (Object Pascal)
syntax, compiles server-side via a lightweight API (e.g. wrapping the Free
Pascal Compiler or Judge0), and returns stdout/stderr inline. The editor
should use syntax highlighting tuned to Delphi reserved words
(`begin`, `end`, `procedure`, `class`, `inherited`, `override`).

**Rationale:** The CAPS IT exam requires learners to write and trace OOP code
mentally. Immediate compilation feedback creates a tight practice loop.
[OnlineGDB](https://onlinegdb.com/online_pascal_compiler) already demonstrates
that Pascal can run in the browser — PrepPals can embed a similar experience
contextualised to CAPS topics (e.g. pre-loaded class stubs for typical exam
scenarios).

**Component Ideas:**
- `<PascalSandbox>` — Monaco or CodeMirror editor wired to a Judge0 CE API
  endpoint with Free Pascal selected as the language.
- Exam-style starter templates: a half-complete `TAnimal`/`TDog` class
  hierarchy where learners must add `override` methods and implement
  `inherited` calls.
- A *trace mode* that steps through execution line-by-line and highlights
  which object method is active — reinforces polymorphism visually.
- Error messages translated from compiler jargon to plain English
  (e.g. "Undeclared identifier 'x' → Did you declare 'x' in your `var` block?").
- Side-by-side "expected output vs. actual output" diff panel.

**Inspirational examples:** OnlineGDB Pascal Compiler, Replit multi-language
IDE, learn-c.org (inline editor + explanation panels side-by-side), code.org
App Lab JavaScript environment.

---

### 2. Pseudocode & Flowchart Builder
**Priority: 🔴 High**

**Description:** A structured text editor that enforces CAPS pseudocode
conventions (`INPUT`, `OUTPUT`, `IF…THEN…ELSE`, `WHILE…DO`, `FOR…TO`) and
renders them as a live flowchart in the adjacent panel.

**Rationale:** NSC Paper 2 consistently includes pseudocode questions.
Learners frequently mix CAPS pseudocode syntax with Pascal syntax. A tool
that highlights deviations from the CAPS standard immediately corrects this
habit. Bidirectional conversion (flowchart → pseudocode and back) deepens
algorithmic thinking.

**Component Ideas:**
- `<PseudocodeEditor>` — a constrained text area with keyword autocomplete
  for CAPS reserved words, with a live right-hand panel rendering a Mermaid.js
  or custom SVG flowchart from the parsed pseudocode.
- Toggle between "pseudocode view" and "flowchart view" for the same
  algorithm.
- Pre-built exercises: "Convert this flowchart to pseudocode" and vice versa,
  scored against a reference solution.
- Common algorithm library: sequential search, bubble sort, factorial — learners
  can load, study, and modify each.

**Inspirational examples:** code.org block-to-text toggle, draw.io flowchart
approach, Mermaid.js live editor (`mermaid.live`).

---

### 3. Interactive SQL Query Tool
**Priority: 🔴 High**

**Description:** An in-browser SQL runner backed by SQLite (via `sql.js` — a
WebAssembly port of SQLite) with CAPS-relevant sample schemas loaded by
default (e.g. a school database with `Learners`, `Subjects`, `Marks` tables).
Query results render as a formatted table with column headers highlighted.

**Rationale:** SQL is a core examinable topic across all three IT grades.
Learners need to practise `SELECT`, `JOIN`, `GROUP BY`, `INSERT`, `UPDATE`,
and `DELETE` with instant feedback. `sql.js` runs entirely client-side — no
server round-trip, works on low-bandwidth connections.

**Component Ideas:**
- `<SqlPlayground>` — split pane: SQL editor top, results table bottom, schema
  browser in a collapsible sidebar showing table structure.
- Colour-coded query origin: highlight which table each column in the results
  originates from (reinforces JOIN comprehension).
- Guided challenges: "Write a query to find all learners who scored above 60%
  in Mathematics" — pass/fail checked against an expected result set.
- Schema visualiser: an auto-generated ER diagram (SVG overlay) showing
  the currently loaded tables and their relationships — helps learners
  understand JOINs before writing them.
- CAPS-aligned scenario databases: school records, library inventory,
  online shop orders, hospital patient records.

**Inspirational examples:** W3Schools TrySQL (`w3schools.com/sql/trysql.asp`),
SQLZoo interactive tutorials (`sqlzoo.net`), SQLiteOnline.com, dbdiagram.io
for ER diagram design.

---

### 4. Network Topology Diagram Tool
**Priority: 🟡 Medium**

**Description:** A drag-and-drop canvas where learners assemble network
diagrams using standard icons (router, switch, hub, server, workstation,
firewall, wireless access point) and label connections with protocol and speed
information. The tool validates topology choices and flags common errors.

**Rationale:** Networking questions in the IT exam require learners to draw,
label, and critique network topologies. An interactive builder with instant
feedback is far more effective than static diagrams in a textbook — and far
more accessible than Cisco Packet Tracer (which is desktop-only).

**Component Ideas:**
- `<NetworkBuilder>` — React + SVG drag-and-drop canvas with a device palette
  and connection drawing tool.
- Pre-set challenge scenarios: "Connect these four offices into a star topology
  using a managed switch and add internet access via a router."
- Labelling prompts: IP addresses, subnet masks, and MAC address placeholders
  on device nodes to reinforce addressing concepts.
- "Identify the fault" mode: a broken or poorly designed network diagram is
  shown and the learner must click the problematic component or link.
- Protocol badge stickers: drag-and-drop badges (TCP/IP, HTTP, FTP, SMTP)
  onto appropriate connection lines.

**Inspirational examples:** Cisco Packet Tracer (gold standard but desktop-only),
diagrams.net (draw.io) network shape libraries, Creately network diagram tool.

---

### 5. Hardware Component Identifier
**Priority: 🟡 Medium**

**Description:** An annotated, interactive image of a motherboard or PC
interior. Learners hover over or click labelled hotspots to reveal component
names, functions, and technical specifications. A quiz mode hides all labels
and challenges learners to identify components by clicking them.

**Rationale:** Hardware questions are predictable in the IT exam and heavily
visual. An interactive diagram is more engaging and memorable than a static
labelled photograph in a textbook. Connecting a visual component to its
function and to related exam vocabulary is best done interactively.

**Component Ideas:**
- `<HardwareExplorer>` — high-resolution SVG overlay on a motherboard
  photograph. Hotspots for CPU socket, RAM slots, PCIe slots, SATA ports,
  ATX power connector, BIOS/UEFI chip, chipset, expansion slots.
- Comparison mode: DDR4 vs. DDR5, HDD vs. SSD vs. NVMe — side-by-side spec
  cards with use-case recommendations.
- "Build a PC" budget challenge: select components within a cost constraint
  for a given use-case (gaming rig, home office, web server) and receive
  a compatibility and value-for-money score.
- Peripheral classification quiz: drag device images to their category
  (input, output, input/output, storage).

**Inspirational examples:** iFixit annotated teardown guides, PCPartPicker
compatibility approach, HowStuffWorks interactive anatomy diagrams.

---

### 6. Social Implications Case Study Explorer
**Priority: 🟢 Low**

**Description:** Structured scenario cards presenting real-world ethical
dilemmas (cyberbullying, data privacy, intellectual property, e-waste,
digital divide) with guided questions and a short-answer response area.
Model answers appear after submission.

**Rationale:** The social implications section is consistently
underperformed in the NSC because learners have not practised constructing
structured arguments. Scenario-based practice with model answers closes
this gap, especially when scenarios are SA-specific.

**Component Ideas:**
- `<EthicsScenario>` — card-based layout, one scenario per card, with a
  structured four-part response template:
  **Define** the issue · **Impact** on stakeholders · **Solution(s)** ·
  **Relevant legislation** (POPIA, ECT Act, Copyright Act).
- SA-specific scenarios: POPIA compliance in a school database, social media
  identity theft, e-waste disposal of old school computers, load-shedding
  dependency on cloud services.

---

## Priority Summary

| Aide | Priority |
|---|---|
| In-Browser Pascal / Free Pascal Code Runner | 🔴 High |
| Pseudocode & Flowchart Builder | 🔴 High |
| Interactive SQL Query Tool | 🔴 High |
| Network Topology Diagram Tool | 🟡 Medium |
| Hardware Component Identifier | 🟡 Medium |
| Social Implications Case Study Explorer | 🟢 Low |

---

## Implementation Notes

- **sql.js** (`sql.js` WASM build) runs SQLite fully in the browser with no
  backend required — ideal for zero-latency SQL practice on low-bandwidth
  connections.
- **Judge0 CE** is an open-source code execution API that natively supports
  Free Pascal; a self-hosted Cloudflare Worker wrapper avoids third-party data
  concerns and keeps response times low.
- **Monaco Editor** (the VS Code engine) has Pascal grammar support via
  `monaco-languages` and integrates cleanly into a React/Next.js SPA.
- **Mermaid.js** renders flowcharts from a simple text DSL and integrates
  via `react-mermaid2` or the official `@mermaid-js/mermaid` ESM build.
- **React Flow** (`reactflow`) is an excellent library for the network topology
  drag-and-drop canvas — supports custom node types, edge labels, and export.
- All tools should degrade gracefully to tablet landscape as a minimum, given
  that many South African learners access the web on mobile devices.