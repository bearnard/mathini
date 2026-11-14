# ADR 0001 — Grade 6 NST Terms 3 & 4: exam-readiness overhaul

- **Status:** Accepted (layer 1 shipped 2026-11-14)
- **Date:** 2026-11-14
- **Scope:** `src/curriculum/grade6/natural-sciences/term3/*`, `term4/*`, `_shared/*`, `src/lib/server/caps/nst.ts`, D1 `item_cache` rows for the affected tasks, `public/curriculum/grade6/nst/term3|term4/*`

## Context

Grade 6 end-of-year exams are close. A review of the eight existing NST Term 3/4 topics
(Electric Circuits, Conductors & Insulators, Circuit Diagrams, Mains Electricity, Solar System,
Earth & Moon Movement, Day/Night & Seasons, Space Exploration) found that they are routed and
working but not exam-ready:

1. **Content gaps against CAPS.** Missing or near-missing:
   - *Term 3:* power-station chain (coal → heat → steam → turbine → generator → grid);
     renewable vs non-renewable sources; cost of electricity and illegal connections;
     **Systems to solve problems** (design-and-make circuit, the Technology half of the term);
     energy transfer in a circuit; troubleshooting and the cells/bulbs brightness effect.
   - *Term 4:* named **Moon phases** and that the Moon reflects light; **telescopes**
     (optical vs radio, SALT, MeerKAT/SKA); **exploring the Moon and Mars** (rockets, rovers,
     spacesuits); **planet comparison** (inner rocky vs outer gas giants, standout features,
     gravity, distance → colder and longer year); sunrise in the east; 365¼-day year.
   - *Seasons* has its own topic but is mainly Grade 7 content.
2. **Distractors are implausible** ("Growing hair instantly", "Only by bicycle"). Learners can
   score highly without the knowledge, which gives false confidence before an exam.
3. **Thin learn mode.** Three slides of 1–2 sentences, one image per topic (Term 4 thinnest).
4. **Single item type.** Everything is 4-option MCQ. Exams ask to *label* diagrams,
   *sequence* processes, *predict* (will the bulb light?) and *explain*.
5. **No cross-topic revision.** Each topic stands alone. No term mock test and no re-asking
   of missed items. `RevisionView`/`PracticeRunner` exist but NST doesn't use them.
6. **AI prompts share the gaps.** The per-task prompts in `nst.ts` have the same narrow scope,
   so D1-cached items repeat the weaknesses of the curated banks.
7. Minor diagram defects: overlapping labels in the day/night and Earth–Moon SVGs, overflowing
   text in the mains SVG, and an unclear closed-switch drawing.

These are the national CAPS curriculum rules as I know them. The repo's school syllabus
(`research/Grade 6 Bay Primary 2026 Syllabus.md`) is only detailed for Term 2, so the scope
should be checked against the teacher's test scope if one is available.

## Decision

Keep the existing `NstTopic` shell and the topic-per-file structure, and improve it in
place in four layers, in priority order. Each layer can ship on its own.

### 1. Content and question quality (must-have before exams)

- Expand `learnSteps` in all eight topics to 4–6 slides, with a diagram or worked example
  on the key slides.
- Fill the gaps *inside existing topics* where they fit:
  - Mains Electricity: power-station chain, renewables, cost and illegal connections.
  - Electric Circuits: energy transfer, troubleshooting, brightness rules.
  - Solar System: planet comparison.
  - Earth & Moon Movement: 8 named phases, reflected light, east-to-west Sun.
  - Space Exploration: telescopes (SALT, MeerKAT/SKA), Moon/Mars exploration.
- Add **one new topic**: `term3/systems-solve-problems` (design process + design-a-circuit
  brief). It's a distinct CAPS strand with no natural home.
- Keep **Day, Night & Seasons**, but put day/night first and present seasons as extension
  material. Rewriting a working topic for one sub-point isn't worth the churn.
- Rewrite banks to **≥12 items per topic** with misconception-based distractors. Rule: every
  wrong option must be something a Grade 6 learner could plausibly believe. No joke options.
- Update the `nst.ts` task prompts to the new scope, and add a distractor rule to the NST
  preamble. **Purge and reseed** `item_cache` rows for the eight tasks, so stale items aren't
  served. Tag rows with the existing `section` column (e.g. `moon-phases`,
  `power-station`, `telescopes`) so revision can filter later.

### 2. Term mock tests (high value, low cost)

- Add `nst-term3-test` and `nst-term4-test` entries: 20 mixed questions from all of that
  term's topic banks. Show a score at the end, and re-ask missed items at the end of the run.
- Reuse `PracticeRunner`/`RevisionView` where they fit, rather than building a new runner.

### 3. Exam-style item types

- Extend `NstItem` with an **optional** `kind` field: `'mcq' | 'order' | 'label'`.
  The default is `'mcq'`, so existing banks and D1 rows stay valid with no migration.
  - `order`: `options` holds the steps and `answer` is the correct sequence joined with `|`.
    Rendered as tap-to-order.
  - `label`: adds `image` and `hotspots`. Rendered as tap a hotspot, then pick a label.
- Before building, check whether the shared `CapsItem` or another subject already supports
  non-MCQ items. If so, use that shape instead of inventing a new one.
- Use `order` for the power-station chain, design process and Moon-phase sequence. Use
  `label` for circuit symbols, Moon phases and the solar system.
- Free-text "explain" answers are **out of scope**: they need marking, and an AI rubric is
  not reliable or cheap enough here.

### 4. Polish (only if time allows)

- Fix the SVG defects listed in Context.
- Add a one-page **quick-recall sheet** per term (key words, planet mnemonic, 8 phases,
  symbols).
- Interactive models (a drag-to-build circuit; drag the Moon around Earth to see the phases)
  are **deferred**. Most engaging, but the most build effort and the least certain to land
  before exams.

## Alternatives considered

| Option | Why not |
|---|---|
| New topic per missing concept (Moon Phases, Telescopes, Planets…) | Splits revision across more screens. Most gaps fit in existing topics, so only Systems to solve problems gets its own. |
| Rely on AI generation to fill gaps without touching banks/prompts | Prompts define the scope, so the gaps would persist. The fallback banks would still be the poor-quality ones. |
| Build interactive simulations first | Highest effort and slowest to land. Content and test coverage give more exam value per hour. |
| Free-text answers with AI marking | Unreliable marking at this age, extra cost and latency. Revisit after exams. |
| Drop the Seasons topic | Content is correct and harmless. Removing it means route changes for little gain. |

## Consequences

**Positive**
- Covers the full CAPS Term 3/4 scope, including the Technology strand.
- Scores become a meaningful signal of readiness.
- Mock tests give one place to revise each term.
- `kind` is additive, so other subjects and grades can use `order`/`label` later.

**Negative / risks**
- Content authoring is the bulk of the work (~8 topics × slides + 12+ items, plus a new topic).
  Facts need review. Seed prompts must keep the SA specifics (SALT in Sutherland,
  MeerKAT/SKA in the Karoo).
- The purge and reseed of `item_cache` for eight tasks needs care (task-scoped delete only).
- New item kinds need `NstTopic` rendering changes. Any D1 row with an unknown `kind` must
  fall back to MCQ rendering or be skipped.
- Scope comes from CAPS and may differ from the school's actual test scope until confirmed.

## Follow-ups

- Confirm the Term 3/4 test scope with the teacher or class workbook.
- Consider applying layers 1–2 to the Grade 6 NST Term 1/2 topics and other subjects after
  exams.
