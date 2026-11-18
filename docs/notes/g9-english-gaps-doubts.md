# Grade 9 English HL gaps: doubts

Branch `feat/g9-eng-gaps`: 5 lessons x 14 questions, original passages only (single-sourced in `g9eng.ts`), no marks, ids `gr9-<slug>-t<term>`, tasks in `eng-g9-gaps.json`, numbers recomputed independently in `src/g9EngGaps.test.ts`.

| Term | Lesson |
|---|---|
| 1 | Reading Cartoons and Visual Texts |
| 2 | Summary Writing |
| 3 | Prose: Plot, Setting and Conflict |
| 3 | Prose: Character, Narrator and Theme |
| 4 | Answering Contextual Questions on Prose |

To confirm with a teacher:
- Term placement is mine (T1, T2, T3, T3, T4, as approved in the plan); a move later keeps ids and URLs.
- Cartoons are described in words; no artwork is copied. Symbols named (dove, scales) are general.
- The summary limit (one third of the passage) is a teaching example, not a CAPS rule; no real mark allocations are given. "More marks, more points" is stated only as a habit.
- The terms plot stages (five), kinds of conflict (four) and round and flat characters are the common classroom set; a teacher may prefer other labels.

Also fixed in this branch: four earlier lessons (G7 Reading Aloud, G8 Prepared Speech, G8 Listening for Detail and Viewpoint, G9 Prepared Speech and Presentation Techniques) printed a worked-example title with an unevaluated expression (for example "A passage of {o.READ.words} words"). The generator now emits a template literal, and both oral and G9 gap tests fail on any "{o." in lesson text.

Audit: `audit/caps-status-2026-11-18.md` (outside the repository) was updated: G7 NS tides, G9 NS electricity cost and G9 LO sport ethics are marked DONE with evidence; G7 Life Skills career simulation/movement sequences and Creative Arts items stay UNVERIFIED.
