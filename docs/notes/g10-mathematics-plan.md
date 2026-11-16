# Grade 10 Mathematics: plan (new subject, `subject id 'math'`, apiPath `/api/caps/math`)

Source: the repo's `syllabus/grade10/mathematics/term1-4.md` (CAPS FET Mathematics Gr 10 and the Annual Teaching Plan, 40 weeks), cross-read with the Grade 9 and Grade 11 maths
topics for level. Structure copies `src/curriculum/grade11/mathematics` (registry entry in `grade10/index.ts`, `_shared/types.ts`, one folder per topic,
`CapsSubjectTopic` with `task="gr10-<slug>"`, `bank`, `apiPath="/api/caps/math"`), lessons to `docs/notes/lesson-standard.md` (Rule / Worked / Mistake / Check, tested
helpers in `grade10Helpers.ts`, hand-built SVG in `Grade10Maths.tsx`, decimal comma).

Each topic: 4-6 slides (last slide = "Check yourself"), 12-14 curated server-markable MCQs (distractors from real misconceptions, explanation on each), every numeric
answer key verified by a computation test (`grade10Helpers.test.ts` / `g10MathsBank.test.ts` recompute the keys). Plus `src/lib/server/caps/tasks/math-gr10-term{1..4}.json`
(generator prompts, as for the other grades) and regenerated task index / topic names / SEO json.

| Term | Topic (task slug) | Weeks | Slides | Questions |
|---|---|---|---|---|
| 1 | Algebraic Expressions (`gr10-algebraic-expressions`): products, factorising (common factor, grouping, trinomials, difference of squares, sum/difference of cubes), algebraic fractions, rational / irrational numbers, estimating surds | 3 | 6 | 14 |
| 1 | Exponents (`gr10-exponents`): laws with integer and rational exponents, simplifying, exponential equations | 2 | 5 | 14 |
| 1 | Number Patterns (`gr10-number-patterns`): linear patterns, general term, using T_n | 1 | 4 | 12 |
| 1 | Equations and Inequalities (`gr10-equations-inequalities`): linear, quadratic by factorisation, simultaneous, literal equations, linear inequalities, interval notation | 2 | 6 | 14 |
| 1 | Trigonometry (`gr10-trigonometry`): sin, cos, tan and reciprocals, special angles, ratios on the Cartesian plane 0-360, right-triangle problems, simple equations | 3 | 6 | 14 |
| 2 | Functions: Linear and Quadratic (`gr10-functions-linear-quadratic`): function concept, table / graph / formula, y = ax + q, y = ax^2 + q, intercepts, turning point, domain and range | 3 | 5 | 14 |
| 2 | Functions: Hyperbola, Exponential and Trig Graphs (`gr10-functions-hyperbola-exponential-trig`): y = a/x + q, y = ab^x + q, sin / cos / tan, parameter changes, asymptotes | 2 | 5 | 14 |
| 2 | Euclidean Geometry: Lines, Triangles and Quadrilaterals (`gr10-euclidean-geometry`): congruence and similarity revision, midpoint theorem, special quadrilaterals and their properties, riders | 3 | 5 | 14 |
| 2 | Mid-year Exam Preparation (`gr10-midyear-exam-prep`): mixed Term 1-2 items | 3 | 3 | 16 |
| 3 | Analytical Geometry (`gr10-analytical-geometry`): distance, gradient, midpoint, parallel / perpendicular, collinear points | 2 | 5 | 14 |
| 3 | Finance and Growth (`gr10-finance-growth`): simple and compound interest, hire purchase, inflation, population growth, exchange rates | 2 | 5 | 14 |
| 3 | Statistics (`gr10-statistics`): grouped data, estimated mean, modal and median class, quartiles, percentiles, five-number summary, box-and-whisker | 2 | 5 | 14 |
| 3 | Measurement (`gr10-measurement`): surface area and volume of spheres, cones, pyramids, prisms, composite solids | 2 | 5 | 14 |
| 3 | Trigonometry in Two Dimensions and Geometry Riders (`gr10-trig-geometry-integration`): angles of elevation / depression, area-type problems, multi-step riders | 2 | 5 | 12 |
| 4 | Probability (`gr10-probability`): sample space, Venn diagrams, union, intersection, mutually exclusive and complementary events, relative frequency | 2 | 5 | 14 |
| 4 | Revision and Examination Technique (`gr10-revision-exam-technique`): Paper 1 and Paper 2 structure, common traps, mixed items | 3 | 3 | 16 |

Totals: 16 topics, about 78 slides, about 220 questions. Branches: `feat/g10-maths-t1` (5 topics), `-t2` (4), `-t3` (5), `-t4` (2), each with
tests, `tsc`, build and phone shots at 320 / 390.

Accuracy rules for this subject:
- Every numeric key is recomputed in a test (exact arithmetic with integers / rationals; trig values with a tolerance and the special angles from exact forms).
- No past-paper text is copied; all items are original.
- Anything I am not certain is CAPS Grade 10 scope (for example how far Grade 10 goes with surds, or whether a topic sits in Gr 10 or Gr 11) goes to
  `docs/notes/g10-mathematics-doubts.md` for the teacher review pack and is left out of the bank.
