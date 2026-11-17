# Grade 9 Afrikaans FAL: Wave A plan (#874, #894): the transactional texts we do not teach

Status: PLAN, sent to the orchestrator before any lesson is written. ADDITIVE ONLY: no existing lesson is deleted, moved, renamed or rewritten.

## Sources

- **DBE CAPS Afrikaans Eerste Addisionele Taal (First Additional Language), Senior Phase Grades 7-9** (`sp_afr_b`), the Grade 9 term teaching plans ("Skryf en aanbied" and "Lees en kyk" columns) and the Grade 9 transactional text list: term 2 diary entry / constitution / policy (dagboekinskrywing, grondwet, beleid); term 3 reading and writing a will (testament); term 4 letter of application for a post, covering letter and CV (aansoek vir 'n betrekking, dekbrief, CV) and e-mail (e-pos).
- `audit/caps-alignment.md` (Grade 9 Afrikaans FAL) for what we teach and the gaps. Not in this plan: term 1 letter of appreciation and contract / dispute report (see below).
- The existing Grade 9 Afrikaans lessons for the house style, and `docs/notes/lesson-standard.md`.

## Shape: 6 lessons, 12 questions each (72), 3 branches (one per CAPS term)

| Branch | Term | Topic id | Title | What the learner learns IN Afrikaans |
|---|---|---|---|---|
| feat/g9-afr-t2 | 2 | `afr-diary-entry` | Dagboekinskrywing (diary entry) | opening and date lines (Liewe Dagboek), time words (gister, vandag, môre), past-tense sentences with het (Ek het ... gespeel), feelings words, a closing thought |
| | 2 | `afr-constitution-policy` | Grondwet en beleid (constitution and policy) | the parts and headings (Naam, Doel, Lidmaatskap, Vergaderings, Wysigings), must/may (moet, mag), numbered clauses, how a policy differs |
| feat/g9-afr-t3 | 3 | `afr-will-testament` | Testament (will) | key words (testateur, erfgenaam, eksekuteur, boedel, bate), the parts of a short will, formal sentences (Ek bemaak ...), signing and witnesses |
| | 3 | `afr-cv-covering-letter` | CV en dekbrief | CV headings (Persoonlike besonderhede, Kwalifikasies, Werkondervinding, Verwysings), the covering letter, Geagte Mnr / Dear Sir or Madam equivalents, Die uwe / Hoogagtend closings |
| feat/g9-afr-t4 | 4 | `afr-letter-of-application` | Aansoekbrief (letter of application) | the layout of a formal letter in Afrikaans, subject line (Aansoek om die pos van ...), formal sentences (Ek wil graag aansoek doen ...), the closing |
| | 4 | `afr-email` | E-pos (e-mail) | Aan / Kopie (CC) / Onderwerp, greetings and closings for formal and informal e-mail, short clear sentences |

Each lesson is built in the existing Afrikaans house style: 5 to 6 slides, each with **a rule, a worked example, a common mistake and one picture** (at most 6 labels), prose of at most 130 words per slide, Afrikaans words and sentences in the `Af` style with an English gloss in the `En` style, tap-to-hear `SpeakButton`, the last slide "Check yourself" with 3 or 4 questions. The language is the point: a learner finishes able to write the key sentences of the text type in Afrikaans, not only to name the parts in English. Questions are server-markable multiple choice, in English or Afrikaans as the existing banks do.

## Registration and gates

Same as the Grade 9 English HL lessons: `src/curriculum/grade9/afrikaans/index.ts` gains topics in terms 2, 3 and 4 (existing ids unchanged; ids are prefixed `afr-` as the existing ones), a task-instruction JSON in the Afrikaans task module, task ids `gr9-<id>-t<term>`, generated files regenerated after rebase, a test file in the style of `lessons.test.ts` (slide count, rule/worked/mistake on every teaching slide, picture aria, prose length, every answer found in the lesson) plus checks that every Afrikaans sentence in the lessons is listed in the teacher-check file. Question-sync dry run for `--grades 9`, phone check at 320 and 390 with screenshots.

## Accuracy: what I will and will not do

- **I write only short, regular, standard Afrikaans** (simple present and perfect tense with het, plain vocabulary from the CAPS lists, no idioms or slang) so that a mistake is unlikely, and I look up any word I am not sure of.
- **Every new Afrikaans sentence is recorded** in `audit/teacher-check.md` (a new section for this branch, as the lesson standard says) and in `docs/notes/g9-afrikaans-doubts.md`, with its English gloss, so that a first-language teacher can check each one. Nothing is claimed as native-checked.
- Where Afrikaans forms are formal and contested (for example the closing "Die uwe" against "Hoogagtend", or "Geagte Mnr" against "Geagte Meneer"), the lesson gives the form that the CAPS gives, or the widely taught one, and the doubts file names the alternatives.
- Legal wording in the will lesson is kept to the school-task level with a note to consult an attorney; no question depends on legal detail (the same rule as the English lesson).
- Decimal comma and SA currency (R 50 000) in examples.

## Not in this plan (kept for a later wave, after a teacher's review)

- Term 1 letter of appreciation (brief van waardering) and the contract / dispute report (kontrak, verslag oor bevindinge): they need more legal and formal vocabulary, so I would write them only after a first-language teacher has checked the first six lessons.
- **isiXhosa FAL (Grade 9):** no lessons or questions will be shipped. I will prepare a **teacher-review pack only** (the CAPS text-type list for Grade 9, model-text skeletons with English glosses marked "to be written by a first-language teacher", and a table of what the reviewer must write or check), as agreed in #889.
