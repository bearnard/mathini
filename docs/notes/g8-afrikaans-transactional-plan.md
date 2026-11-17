# Grade 8 Afrikaans FAL: the transactional texts we do not teach (plan)

Status: PLAN, sent to the orchestrator before any lesson is written. ADDITIVE ONLY. Same approach, house style and safeguards as `g9-afrikaans-transactional-plan.md`.

## Sources
DBE CAPS Afrikaans Eerste Addisionele Taal, Senior Phase Grades 7-9 (`sp_afr_b`), Grade 8 term plans; `audit/caps-alignment.md`, "Grade 8 Afrikaans FAL" (the transactional gaps).

## Shape: 8 lessons x 12 questions = 96, two branches, ids `afr-...` in the registry and task ids prefixed `gr8-afr-` (English and Afrikaans never share ids)
| Branch | Term | Topic id | Title | What the learner learns IN Afrikaans |
|---|---|---|---|---|
| feat/g8-afr-transactional-a | 1 | `afr-friendly-letter` | Vriendskaplike brief | address and date, Liewe ..., short sentences about news, Jou vriend/vriendin, Skryf gou terug |
| | 1 | `afr-investigative-report` | Ondersoekende verslag en vraelys | vraelys, bevindinge, gevolgtrekking, aanbeveling, simple findings sentences with numbers |
| | 2 | `afr-instructions-directions` | Aanwysings en instruksies | Eerste, dan, daarna, laastens; links, regs, reguit; langs, teenoor, verby; the command form |
| | 2 | `afr-dialogue-interview` | Dialoog en onderhoud | speaker name and colon, directions in brackets, vraag and antwoord, formal u |
| feat/g8-afr-transactional-b | 3 | `afr-letter-to-the-press` | Brief aan die pers | Geagte Redakteur, Verwysing, reasons, polite request, Die uwe/Vriendelike groete as in the existing formal lessons |
| | 4 | `afr-newspaper-article` | Koerantberig en tydskrifartikel | opskrif, skrywer, eerste paragraaf (wie, wat, waar, wanneer, hoekom), aanhaling |
| | 4 | `afr-diary-entry` | Dagboekinskrywing | Liewe Dagboek, time words, het + ge-, feelings (as in Grade 9, simpler) |
| | 4 | `afr-news-report` | Joernalistieke verslag | objective tone, facts first, bronne, the past tense |

Lessons use the Afrikaans house style (rule, worked example, common mistake, one picture, Afrikaans in `Af`, English gloss in `En`, tap-to-hear `SpeakButton`, "Check yourself"). Only short, regular, standard Afrikaans (present tense, het + ge- perfect, plain vocabulary). Questions are multiple choice in the existing style.

## Accuracy and safeguards (no native check yet)
Every new Afrikaans phrase is listed with its English gloss in `docs/notes/g8-afrikaans-doubts.md`, and a test fails if a lesson shows a phrase that is not listed. Nothing is claimed as native-checked. Contested forms (closings, Geagte Mnr/Meneer) follow the existing Grade 8/9 lessons and are named in the doubts file.

## isiXhosa FAL (third part): NO lessons or questions. A teacher-review pack only (`docs/notes/g8-isixhosa-review-pack.md`), as for Grade 9.

## Gates
Validator zero reasons, key in all four positions, a test in the style of the Grade 9 `transactional.test.ts`, tsc, full tests, phone check at 320/390/1280 with screenshots, question-sync dry run, generated files regenerated.
