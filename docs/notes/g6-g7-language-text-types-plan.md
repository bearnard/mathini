# Grades 6 and 7 language text types: Wave A plan (additive)

Source: `audit/caps-alignment.md` (Grade 6 and Grade 7 English HL and Afrikaans FAL sections) and the CAPS text-type tables (`ip_eng*`, `sp_eng*`, `ip_afr`, `sp_afr*`). Approved as #986/#1032: four branches reported separately, 14 curated questions each, asked to "you", nothing edited, moved or hidden. isiXhosa is left for a teacher-review pack. The oral/listening strand and the grammar gaps are a later wave.

| Branch | Lessons | Status |
|---|---|---|
| feat/g6-eng-text-types | Newspaper article (T1); folklore: myths and legends (T1); instructional text: recipes and directions (T2); information text: weather reports and charts (T2); story writing with a plot (T2); character sketch (T3); diary entry (T3); comic strip script (T3); descriptive paragraph (T4). 9 x 14 = 126 | done |
| feat/g6-afr-text-types | Simple story, factual report, describe a process (T1); diary entry, opinion paragraph (T2); short play (T3); news report and poster (T4). 7 x 14 = 98 | todo |
| feat/g7-eng-text-types | Poem writing, drama dialogue (T1); instructions, drama review (T2); forms and questionnaires, notice/agenda/minutes, newspaper article (T3); diary/e-mail/flyer, speech (T4). 9 x 14 = 126 | todo |
| feat/g7-afr-text-types | Informal letter, poem and dialogue (T1); instructions and directions, advert and poster (T2); forms, notice/agenda/minutes, newspaper article and interview (T3); diary/e-mail/flyer (T4). 8 x 14 = 112 | todo |

## Task ids (a deliberate departure from the order's `gr6-` prefix for Grade 6)

Grade 6 English, Afrikaans, isiXhosa and Life Skills live under the legacy `grade6` code with unprefixed ids. `src/lib/server/caps/batches.ts` treats every `grade6` task that starts with `gr6-` as **Mathematics** (calculation and misconception question batches). A `gr6-` English id would be generated as a Maths topic by the weekly top-up. So Grade 6 text-type ids start with `eng6-` (English) and `afr6-` (Afrikaans); they are globally unique and the Grade 7 ids keep `gr7-` / `gr7-afr-`.

## Rules followed
- Same lesson pattern as Grade 8: `Slides.tsx` + a component with `export const bank`; Rule / KeyTable picture / Worked / Mistake blocks and a model text where it helps; 4 to 6 slides; zero validator reasons; key in all four positions.
- Grade 6 additions also regenerate `src/curriculum/grade6/reviewBanks.ts` and `migrations/seeds/0008_questions_curated.sql` (additive only, no line removed).
- Gates: tsc, full npm test, phone check at 320/390/1280, question-sync dry run, two screenshots, generated files regenerated.
