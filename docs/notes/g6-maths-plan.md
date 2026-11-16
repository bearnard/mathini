# Grade 6 Mathematics: filling the HIGH missing CAPS topics (plan, bron, 2026-11-16)

Source: CAPS Mathematics Grades 4-6, section 3.3.3 "Clarification of content for Grade 6", Terms 1-4 (text at /tmp/claude-1000/caps/ip_math.txt, the same text graeme used), and graeme's audit (audit/caps-alignment.md). Additive only: no existing lesson is moved or deleted. Existing G6 maths lessons are old-style (CapsSubjectTopic + hand-written slides + `export const bank`, task `gr6-<slug>-t<term>`, apiPath `/api/caps/grade6`); the new lessons follow docs/notes/lesson-standard.md (Rule / Worked / Mistake / Check) like FlowDiagrams.tsx, the one rewritten G6 maths lesson, with numbers from small tested helpers, hand-built SVG, decimal comma, rand and km.

## What CAPS says (the parts these lessons teach)

1. **Whole numbers: addition and subtraction** (T1, 5-digit, 7 h; T3, 6-digit, 8 h). Estimate by rounding to the nearest 1 000 (4-digit) or 10 000 (5-digit); expanded vertical method then the traditional column method for three 5-digit numbers (example 56 423 + 7 581 + 21 479 = 85 483) and subtraction (98 743 - 45 684 = 53 059); check by the inverse operation; commutative, associative and distributive properties and 0 as the additive identity; build-up / break-down and compensating; problems in financial and measurement contexts, summation, missing part, increase and decrease, comparison by difference; the calculator only after estimating.
2. **Whole numbers: multiplication and division** (T2: 4-digit by 2-digit, 5 h and 8 h; T4: 4-digit by 3-digit, 5 h and 7 h). Estimate, build up / break down, long multiplication and long division, multiply and divide by 10, 100 and 1 000, remainders, inverse operations, problems (sharing, grouping, rate, ratio).
3. **Percentages** (T3, 5 h, new in Grade 6): tenths and hundredths as percentages; fractions whose denominators are factors of 100 (2, 4, 5, 10, 20, 25, 50); decimals in tenths and hundredths as percentages; percentages of whole numbers, for example 25% of R300 = 1/4 of R300 = R75. Learners are NOT expected to convert any fraction to a percentage.
4. **Probability** (T4, 2 h): simple repeated events (coin, die, spinner), list the possible outcomes first, record results with tally marks, up to 50 trials on a spinner (20 trials by hand), count and compare frequencies as the trials increase.
5. **Transformations** (T3, 3 h; T4, 3 h): describe patterns from nature, everyday life and cultural heritage using translation, reflection, rotation and lines of symmetry (no drawing of tessellations required); T4: enlargements and reductions of triangles and quadrilaterals to compare size and shape.
6. **Position and movement** (T4, 2 h): alpha-numeric grids and maps, giving directions for moving between positions.
7. **Temperature** (T3, 1 h): read analogue and digital thermometers in degrees Celsius (numbered and un-numbered lines, tenths of a degree on a body thermometer), the referents 0 °C, 37 °C, 100 °C, problems with positive whole numbers and decimals.
8. **Viewing objects** (T3, 3 h): match views (front, side, top) of everyday and geometric objects, collections and composite geometric objects with the position of the viewer.

## Lessons (13) and questions (about 182)

| # | Branch | Lesson (task id) | Term | Slides | Questions |
|---|---|---|---|---|---|
| 1 | feat/g6-maths-addsub | Adding and subtracting 5-digit numbers (`gr6-add-subtract-5digit-t1`) | 1 | 5 | 14 |
| 2 | feat/g6-maths-addsub | Adding and subtracting 6-digit numbers, and problems (`gr6-add-subtract-6digit-t3`) | 3 | 5 | 14 |
| 3 | feat/g6-maths-muldiv | Multiplying by 2-digit numbers (`gr6-multiply-2digit-t2`) | 2 | 5 | 14 |
| 4 | feat/g6-maths-muldiv | Dividing by 2-digit numbers (`gr6-divide-2digit-t2`) | 2 | 5 | 14 |
| 5 | feat/g6-maths-muldiv | Multiplying by 3-digit numbers (`gr6-multiply-3digit-t4`) | 4 | 4 | 14 |
| 6 | feat/g6-maths-muldiv | Dividing by 3-digit numbers (`gr6-divide-3digit-t4`) | 4 | 4 | 14 |
| 7 | feat/g6-maths-percent-temp | Percentages (`gr6-percentages-t3`) | 3 | 5 | 14 |
| 8 | feat/g6-maths-percent-temp | Temperature (`gr6-temperature-t3`) | 3 | 4 | 12 |
| 9 | feat/g6-maths-prob-pos | Probability (`gr6-probability-t4`) | 4 | 4 | 12 |
| 10 | feat/g6-maths-prob-pos | Position and movement (`gr6-position-movement-t4`) | 4 | 4 | 12 |
| 11 | feat/g6-maths-transform | Transformations: describing patterns (`gr6-transformations-t3`) | 3 | 4 | 12 |
| 12 | feat/g6-maths-transform | Enlargements and reductions (`gr6-enlargements-t4`) | 4 | 4 | 12 |
| 13 | feat/g6-maths-views | Viewing objects (`gr6-viewing-objects-t3`) | 3 | 4 | 12 |

Per branch: lessons + banks + `math-gr6-term<N>.json` task prompts + registry entries in grade6/index.ts + the generated files (reviewBanks via scripts/gen-review-registry.mjs, topicNames, taskIndex, SEO, site stats) + tests.

## Accuracy rules
- Every numeric key is computed by a tested helper and recomputed independently in a test (integers and exact arithmetic; temperatures as tenths). No wrong option equals the true value.
- Banks pass the repo's question-quality validator with no reason at all, and the Grade 6 format rules (decimal comma, rand with a space for thousands, no decimal point).
- Every key answer is covered by its lesson (scripts/g10-12-coverage.ts style check for Grade 6 via lessonCoverage).
- Anything not stated in the CAPS text goes into docs/notes/g6-maths-doubts.md for the teacher review pack, not into a bank. Real Grade 6 learners use these, so no invented facts.

## Gates per branch
tsc 0 errors; full npm test fail 0; next build --webpack; phone check at 320 and 390 (and 1280) of every slide; `scripts/question-sync.ts --grades 6` dry run to prove the banks are discovered.
