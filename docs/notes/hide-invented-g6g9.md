# Hide of invented lessons: Grade 6 Geography and Natural Sciences and Technology, Grade 9 EMS, English and Afrikaans

Orchestrator #993/#1036. Pattern as before: removed from the registry (menus, sitemap, task index), component code and task ids kept, D1 rows kept, 308 in `src/lib/seo/legacyRedirects.ts`, pinned in `src/curriculum/termMoves.test.ts`. No trims, so no retire SQL.

## Hidden (8)
| Lesson | Why | Redirect goes to | Term left with |
|---|---|---|---|
| G6 Geography: Mediterranean, Temperate and Polar | Grade 6 CAPS names rainforest, hot desert and coniferous forest; climate regions are Grade 8 | Coniferous Forests | T3: 3 lessons |
| G6 Geography: Vegetation and Adaptations | vegetation and wildlife are taught inside each region lesson | Tropical Rainforest and Hot Desert | T3: 3 lessons |
| G6 Geography: Impact of Migration | CAPS has only why people move from rural areas to towns | Migration: Push and Pull | T4: 3 lessons |
| G6 NST: Day, Night and Seasons | seasons are not in the Grade 6 CAPS text; day and night are in Earth and Moon Movement | Earth and Moon Movement | T4: 4 lessons |
| G9 EMS: Entrepreneurship and Financial Planning | traits, opportunities, budgeting: not Grade 9 CAPS | Sectors of the Economy | T2: 4 lessons |
| G9 EMS: Business Responsibility and Integration | labour and CSR: not CAPS | the EMS subject page | T4: 2 lessons |
| G9 English: Reports and Instructional Texts | no report or instructional text in the Grade 9 plans; will and CV have their own lessons | the English subject page | T3: 4 lessons |
| G9 Afrikaans: Formal Correspondence | formal letters are now in the CV/covering letter (T3) and application letter (T4) lessons | the Afrikaans subject page | T2: 4 lessons |

## Listed, not hidden (only cover of a CAPS item, or CAPS content)
- G6 Geography Climate Regions (only cover of weather vs climate and the temperature and rainfall maps; "regions" framing is Grade 8), Trade in SA and the World (imports and exports are CAPS; near-duplicate of What is Trade).
- G9 EMS Budgeting and Business Decisions (ONLY lesson with fixed and variable costs and break-even, the CAPS T4 financial plan), Production and Marketing (ONLY lesson with mark-up; names production and marketing functions), Business Plans and Functions (the business plan is CAPS T4, ours is T3).
- G9 English Letters and Reviews (only cover of review writing), Essay and Transactional Writing (nearest cover of the letter of appreciation), Oral Literature and Narrative Traditions (nearest cover of dialogue, negotiation and interview).
- G9 Afrikaans Creative and Personal Writing (ONLY lesson with the review, resensie), Journalism and Media Texts, Transactional Writing (agendas, minutes and reports, nearest cover of the report text).

## Gaps for a later Wave A (no lesson names them)
- G9 EMS business plan: SWOT, administration and public relations functions.
- Letter of appreciation: Grade 9 English Term 1 and Afrikaans Quarter 1.

## G6 seasons: questions left in the exam practice and mock tests
The Terms 3 and 4 exam practice (`nst-terms34-exam`) and the Term 4 mock test import the whole Day, Night and Seasons bank, and the exam scope still lists the task `day-night-seasons` so that attempts on those questions are accepted (attemptTrust). They were not edited. Seasons questions (not Grade 6 CAPS), with their D1 question ids, for the orchestrator to decide on retiring:
- 522eb962c44b: What causes the seasons?
- 09f2e712803c: A learner says "It is summer because Earth is closest to the Sun." Is this correct?
- d4b504da9f83: When it is summer in South Africa, what season is it in the United Kingdom?
- 96d5bd669dad: Why are summer days longer than winter days?
- 63a09a27b5e2: Which months are winter in South Africa?
The other 11 questions of that bank are about day, night, shadows and the year and are Grade 6 content.
