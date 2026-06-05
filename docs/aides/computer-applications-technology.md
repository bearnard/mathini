# Learning Aides — Computer Applications Technology (Gr 10–12)

> South African CAPS · Grades 10–12 · PrepPals Browser-Based SPA

## Subject Overview

Computer Applications Technology (CAT) teaches practical ICT skills within a
business and society context. The CAPS syllabus covers word processing,
spreadsheets, presentations, databases (Microsoft Access concepts),
internet and e-communication, hardware, software, networks, and information
management. Unlike IT, CAT is application-focused rather than programming-
focused — the exam tests *how* to use software effectively, combined with
theoretical knowledge of systems and responsible use of technology.

The core digital learning opportunity is to simulate the *behaviour* of
productivity software in the browser without requiring learners to own
Microsoft Office licences, and to provide guided, scaffolded practice that
mirrors the demands of NSC Paper 1 (practical) and Paper 2 (theory).

---

## Recommended Aide Types

### 1. Spreadsheet Formula Explainer & Sandbox
**Priority: 🔴 High**

**Description:** An interactive, browser-based spreadsheet component (built on
HyperFormula + a lightweight grid such as Handsontable Community or a custom
React grid) that allows learners to type Excel-compatible formulae and see
them evaluated live. A formula-trace overlay highlights which cells feed into
the result, colour-coded by precedent cell.

**Rationale:** Spreadsheet formulae (`IF`, `VLOOKUP`, `SUMIF`, `COUNTIF`,
`INDEX/MATCH`, nested functions) are the highest-value, most consistently
examined component of CAT Paper 1. Learners need to *build* formulae
interactively and see the outcome immediately, not just memorise syntax
from study notes.

**Component Ideas:**
- `<FormulaPlayground>` — a modest grid (12 × 20 cells) with a formula bar.
  Pre-loaded scenario data matching typical exam contexts (sales figures,
  school report card, stock inventory).
- *Formula breakdown panel*: parse the entered formula and display each
  function with a plain-language explanation alongside
  (e.g. `=IF(B2>50,"Pass","Fail")` → "If the value in B2 is greater than 50,
  display 'Pass', otherwise display 'Fail'").
- *Guided exercises*: "Calculate the total sales for Region 'North' only" —
  learner writes the formula, result is checked against an expected value
  with hints if incorrect.
- Conditional formatting simulation: apply fill colours based on cell value
  rules and observe the visual outcome — reinforces understanding of this
  Paper 1 task type.
- Named ranges explainer: show how a named range (e.g. `TaxRate`) makes a
  formula more readable than a raw cell reference.

**Inspirational examples:** Google Sheets formula tooltip explainer,
ExcelJet.net formula reference, Spreadsheet.com interactive tutorials,
Excel's "Trace Precedents" and "Evaluate Formula" tools.

---

### 2. Word Processing Feature Walkthrough
**Priority: 🔴 High**

**Description:** An interactive tutorial that demonstrates specific word-
processing features — paragraph styles, mail merge, automatic table of
contents, track changes, headers and footers, section breaks, and
referencing — through annotated simulated documents. Learners complete guided
tasks on a rendered HTML document replica, with each action checked for
correctness.

**Rationale:** Paper 1 practical tasks for word processing are highly
procedural. Learners who understand *why* and *when* to use a feature (e.g.
that Styles are the prerequisite for an automated TOC) perform better than
those who only follow menu-click memory.

**Component Ideas:**
- `<DocWalkthrough>` — a rendered HTML replica of a formatted document with
  interactive hotspots. Clicking a heading triggers a tooltip explaining that
  it uses "Heading 1" style and why that matters for a TOC.
- Step-by-step mail merge simulator: learner selects a data source (a small
  in-browser CSV), inserts merge fields, and previews merged output across
  multiple records — all in the browser.
- "Spot the formatting error" quiz: a document with deliberate inconsistencies
  (wrong style applied, orphaned heading, missing section break, inconsistent
  line spacing) — learner clicks to identify each issue and explains the fix.
- Styles cascade visualiser: show how changing a "Heading 2" style definition
  updates all instances in the document simultaneously.

**Inspirational examples:** Microsoft's Word training modules on Microsoft
Learn, GCFGlobal (`gcfglobal.org`) step-by-step Office tutorials, LinkedIn
Learning Word courses.

---

### 3. Database Query Builder (Access Concepts)
**Priority: 🔴 High**

**Description:** A visual query designer that simulates Microsoft Access's
QBE (Query by Example) grid alongside a live SQL view. Learners drag fields
into the grid, set sort order and criteria, and see the equivalent SQL
generated — reinforcing the relationship between visual and textual query
construction. `sql.js` executes the query against a sample database.

**Rationale:** CAT covers database concepts using Access as the reference
application. Learners consistently struggle with the relationship between the
QBE grid and the underlying logic. A browser tool showing both simultaneously
makes this concrete without needing Access installed.

**Component Ideas:**
- `<QueryBuilder>` — a visual QBE-style grid (columns: Field, Table, Sort,
  Show, Criteria, Or) backed by `sql.js` executing the equivalent SQL.
- Pre-loaded databases matching exam scenarios: a video rental store, a
  school tuck shop, a sports club membership list — all with familiar
  South African contexts.
- *Relationship view*: a simple ERD showing one-to-many relationships between
  sample tables; clicking a relationship line adds the appropriate JOIN to
  the QBE grid.
- Form and report concept viewer: static interactive mockups of Access forms
  and reports with labelled control elements (text box, combo box, label,
  command button, subform) — learners hover to read the control's purpose.
- Validation rule explainer: enter a validation rule string (`>0 And <100`)
  and see plain-language explanation and sample accepted/rejected values.

**Inspirational examples:** W3Schools TrySQL, LibreOffice Base documentation,
Microsoft's Access "Northwind" sample database tutorials, dbdiagram.io for
relationship visualisation.

---

### 4. Internet Skills & Digital Literacy Trainer
**Priority: 🟡 Medium**

**Description:** Scenario-based exercises covering search strategies (Boolean
operators, site-specific search, filetype filters), evaluating web source
credibility, understanding URL anatomy, and safe e-communication practices
including e-mail etiquette and phishing awareness.

**Rationale:** The internet section of CAT Paper 2 tests declarative knowledge
(protocols, URL structure, email headers, browser settings) combined with
applied evaluation skills. Interactive scenarios are more memorable than
flashcard-style revision and better mirror real-world application.

**Component Ideas:**
- `<SearchSimulator>` — a mock search engine interface where learners type
  queries (including Boolean operators) and see how results filter from a
  small predefined article index. Shows why `site:` and `filetype:` operators
  narrow results.
- URL anatomy labeller: an interactive URL
  (`https://www.school.co.za/results/grade11?subject=maths#term2`) displayed
  with drag-and-drop labels for protocol, domain name, subdomain, TLD, path,
  query string, and fragment identifier.
- Email safety inbox: a simulated inbox with phishing emails mixed among
  legitimate ones — learner flags suspicious messages and identifies specific
  red flags (spoofed sender, urgent language, suspicious link).
- File type and software matching: drag file extensions (`.docx`, `.xlsx`,
  `.pdf`, `.mp3`, `.exe`, `.csv`) to their associated application category.

**Inspirational examples:** Google's "Be Internet Awesome" Interland,
OpenDNS Phishing Quiz, Common Sense Media digital literacy modules,
code.org's "How the Internet Works" lesson series.

---

### 5. Hardware & Network Theory Quiz Bank
**Priority: 🟡 Medium**

**Description:** Adaptive multiple-choice and labelling quizzes covering
input/output/storage/processing device classification, network topologies,
network hardware (NIC, router, switch, modem, wireless access point), and
TCP/IP concepts at the CAT level of depth.

**Rationale:** Hardware and networking theory is memorisation-heavy.
Spaced repetition and active recall — rather than re-reading notes — is the
most effective study method for this content type, and PrepPals can implement
a basic spaced-repetition schedule to surface weak areas automatically.

**Component Ideas:**
- `<HardwareQuiz>` — image-based classification: drag a device photograph
  to the correct category (input / output / storage / processing / hybrid).
- Network topology matcher: match a description ("all devices connect directly
  to every other device") to a topology name and its diagram.
- Bandwidth and storage calculation practice: structured multi-step
  calculation questions (e.g. download time, storage space required) with
  step-by-step worked solutions revealed after submission.
- Comparison table builder: learner fills in a partially completed comparison
  table (RAM vs. ROM, LAN vs. WAN, client vs. server) — cells checked on
  submit.

**Inspirational examples:** Quizlet flashcard sets for CAT hardware topics,
Kahoot! device identification games, GCFGlobal hardware identification
activities.

---

### 6. Presentation Design Analyser
**Priority: 🟢 Low**

**Description:** A slide-viewing component where learners evaluate sample
presentations against design principles (contrast, alignment, proximity,
repetition; appropriate slide count; font legibility; colour scheme) and
slideshow settings (transitions, animation, timings). Learners annotate slides
with structured feedback and compare to a model critique.

**Rationale:** Presentation tasks in CAT test knowledge of good design
alongside procedural skills (setting timings, hiding slides, using slide
masters). A structured critique tool develops evaluative thinking and teaches
learners to articulate design decisions in the register expected by the exam.

**Component Ideas:**
- `<SlideReviewer>` — a thumbnail strip and enlarged slide view; learner adds
  critique notes from a pre-set vocabulary list (e.g. "Insufficient contrast
  between text and background").
- Design principle checklist that auto-scores the critique against known
  criteria once submitted.
- Slide master explainer: a two-slide comparison showing a deck with/without
  a consistent slide master applied.

---

## Priority Summary

| Aide | Priority |
|---|---|
| Spreadsheet Formula Explainer & Sandbox | 🔴 High |
| Word Processing Feature Walkthrough | 🔴 High |
| Database Query Builder (Access Concepts) | 🔴 High |
| Internet Skills & Digital Literacy Trainer | 🟡 Medium |
| Hardware & Network Theory Quiz Bank | 🟡 Medium |
| Presentation Design Analyser | 🟢 Low |

---

## Implementation Notes

- **HyperFormula** (`hyperformula` npm package, MIT licence) is a dedicated
  spreadsheet formula engine that supports 386 Excel-compatible functions —
  ideal for formula evaluation without bundling a full spreadsheet UI.
- **Handsontable Community Edition** is MIT-licensed and integrates directly
  with HyperFormula to produce a spreadsheet grid component.
- **sql.js** (SQLite as WebAssembly) powers the database query builder
  client-side with no backend required and no install friction.
- All CAT aides should explicitly label which CAPS section they target
  (e.g. "Spreadsheets — Gr 11 Term 2") to help learners navigate revision
  efficiently.
- Given that many CAT learners are on low-bandwidth connections, all
  interactive components should be lightweight and cache-friendly
  (target < 200 kB initial JS per aide after code splitting).
- The spreadsheet and document walkthrough aides are strongest when
  pre-loaded with South African contexts (rand amounts, SA provinces,
  Afrikaans/English bilingual content) to feel immediately relevant.