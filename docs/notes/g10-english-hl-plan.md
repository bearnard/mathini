# Grade 10 English Home Language: plan (content wave 1, #832)

Status: PLAN, sent to the orchestrator before any lesson is written. One branch per term: `feat/g10-english-hl-t1` .. `-t4`.

## Sources (what every topic below is checked against)

1. **DBE CAPS FET English Home Language Grades 10-12** (the official PDF, `education.gov.za`, "CAPS FET _ HOME _ ENGLISH GR 10-12", 102 pages). Read as text; page numbers below are the document's own.
   - Grade 10 teaching plan, terms 1-4: pp. 43-52 (section 3.5.1).
   - Programme of assessment, Grades 10-11 (Tables 1 and 2): pp. 77-78. Test 1 = 35 marks (language in context); literature task 35 marks (contextual 10 + literary essay 25); mid-year 250 marks; end-of-year 300 marks (Paper 1 = 70, Paper 2 = 80, Paper 3 = 100, Paper 4 oral = 50).
   - Examination papers (Paper 1: A comprehension 30, B summary 10, C language structures and conventions 30; Paper 2: A poetry 30 (seen 20 + unseen 10), B novel, C drama, one essay + one contextual question from B or C; Paper 3: A one essay 50, B two transactional texts 2 x 25): pp. 80-82.
   - Lengths for Grade 10: comprehension text 500-600 words; summary text about 280 words; essay 300-350 words; literary essay 150-200 words (poetry) and 300-350 words (novel/drama); transactional texts 180-200 words; listening text 200 words (pp. 28-29, 39, 80-82).
   - Text types (essays: narrative, descriptive, reflective, argumentative, discursive; transactional: friendly/formal letters, letters to the press, CV and covering letter, obituary, agenda and minutes, report, review, newspaper and magazine article, speech, dialogue, interview): section 3.3, pp. 30-36.
   - Glossary of literary and language terms: end of the document.
2. `syllabus/grade10/english-hl/term1-4.md` in this repo (the topic list the app already uses for Grade 10).
3. The Grade 11 English HL lessons already in the app (`src/curriculum/grade11/english`), for level, tone and registration of topics.

**Texts.** Prescribed (set) works change by DBE cycle and school, so nothing here reproduces a set work. Every passage, poem extract, advert, letter and speech used in a lesson is either **written for the app (original)** or a **public-domain** text (author died before 1955, or published before 1930), and says which. Quotations from living or recent authors are not used.

## Shape: 15 topics, 5 slides each, 13-14 questions each

| Term | # | Topic id (= task slug) | Title | CAPS source |
|---|---|---|---|---|
| 1 | 1 | `gr10-literary-genres-text-features-t1` | Literary genres and text features | T1 wk 1-4: key features of texts and parts of a book, literary genres, literature study (pp. 43-44) |
| 1 | 2 | `gr10-language-structures-conventions-t1` | Register, word choice and sentence structure | T1 all weeks: register, style and voice; word choice; sentence construction; paragraph writing; punctuation and spelling |
| 1 | 3 | `gr10-essay-writing-process-t1` | Writing an essay: narrative, descriptive and argumentative | T1 wk 3-4, 7-8: 1 essay, process writing; Task 2 (50 marks, 300-350 words) |
| 1 | 4 | `gr10-letters-cv-agenda-minutes-t1` | Transactional texts: letters, CV, obituary, agenda and minutes | T1 wk 1-2: transactional texts; Task 3 (25 marks, 180-200 words) |
| 1 | 5 | `gr10-comprehension-summary-t1` | Comprehension and summary | T1 wk 3-4, 7-10: reading for comprehension, summary writing; Test 1 (35 marks) |
| 2 | 6 | `gr10-novel-drama-study-t2` | Studying a novel or drama | T2: literature study; Task 6: contextual questions (10) + literary essay (25) |
| 2 | 7 | `gr10-argument-formal-speech-t2` | Argument and formal speech | T2: argumentative/discursive essay; speech, dialogue, interview; prepared and unprepared speech |
| 2 | 8 | `gr10-visual-media-texts-t2` | Visual and media texts, reports and reviews | T2 wk 15-18: interpretation of visual texts (adverts, cartoons, pictures); report, review, newspaper and magazine article |
| 2 | 9 | `gr10-midyear-exam-preparation-t2` | Mid-year examination preparation | T2: mid-year Papers 1, 2, 3 (Task 7, 250 marks) |
| 3 | 10 | `gr10-poetry-seen-unseen-t3` | Reading poetry: seen and unseen | T3: literature study; Task 9 / Paper 2 section A (seen 20 + unseen 10; literary essay 150-200 words) |
| 3 | 11 | `gr10-oral-communication-t3` | Oral communication: speeches, meetings and discussion | T3 listening and speaking: meetings and procedures, storytelling, prepared/unprepared speech, listening comprehension; Task 8 |
| 3 | 12 | `gr10-imaginative-transactional-t3` | Imaginative and transactional writing | T3: essay narrative/descriptive/argumentative, report, review, article, interview, letters, CV |
| 4 | 13 | `gr10-paper1-revision-t4` | Revision: Paper 1, language in context | T4 wk 37-40: comprehension, summary, language structures; Paper 1 (70 marks) |
| 4 | 14 | `gr10-paper2-literature-revision-t4` | Revision: Paper 2, literature | T4 wk 39-40: novel, drama, poems; Paper 2 (80 marks) |
| 4 | 15 | `gr10-paper3-paper4-revision-t4` | Revision: Paper 3 writing and Paper 4 oral | T4: essays, transactional texts, vote of thanks / introducing a speaker, panel discussion; Papers 3 (100) and 4 (50) |

Term 1 has five topics because it carries the most new content (genres, language, essay, transactional, comprehension and summary); term 2 has the mid-year examination topic; terms 3-4 are lighter on new content and heavier on revision, as in the CAPS plan.

Totals: **15 lessons, about 200 questions** (13-14 per topic, minimum 12). Per branch: T1 5 lessons / about 67 questions; T2 4 / about 54; T3 3 / about 40; T4 3 / about 40. There is no separate "end-of-term test" topic: the CAPS tests are covered by topic 5 (Test 1), topic 9 (mid-year) and topics 13-15 (end-of-year), as the Grade 11 subject does. The Grade 11 English subject has no exam-practice scope, so none is added.

## Lesson design

- 5 slides per lesson: rule, worked example, common mistake, one picture where it teaches (a labelled diagram of a letter, an essay plan, a summary grid), then "Check yourself" with 3-4 answers hidden. Built from `LessonBlocks` (`Rule`, `Worked`, `Mistake`), the existing `AnnotatedText` for annotated extracts, and the existing diagram components. About 40-80 words per slide.
- Examples are South African (names, places, rand, local newspapers and schools), spelling is South African English.
- The question bank sits at the end of each lesson file as `const bank` (server-markable multiple choice with an exact-match answer and an explanation), registered through `CapsSubjectTopic` with `apiPath="/api/caps/eng"`. Distractors are real misconceptions (for example "a simile is any comparison", "a summary should keep the examples").
- Registration, copied from Grade 11: `src/curriculum/grade10/english/index.ts` (+ import in `src/curriculum/grade10/index.ts`), task instructions in `src/lib/server/caps/tasks/eng-gr10-term{1..4}.json` (+ `eng.ts`), then the generated files (`scripts/build-task-index.ts`, `scripts/build-topic-names.mjs`) and the tests that list subjects per grade (updated, not loosened).

## Accuracy checks

- **Facts from CAPS** (marks, word counts, paper structure, text types) are quoted from the document above, with the page in the plan, and asserted in a test file (`g10-english-facts`) so a later edit cannot drift.
- **Word counts** in worked examples (a 280-word summary passage, a model summary, essay lengths) are computed by a helper in a test, not counted by eye.
- **Every bank item** is checked by tests: exactly 4 distinct options, the answer equals one option exactly, no answer given away by the stem, no duplicate prompts within the subject, and the lesson text covers each correct answer (`scripts/g10-12-coverage.ts`).
- **Language points** (parts of speech, clause types, tense, punctuation) are checked against a second source: the CAPS glossary. Anything I am not certain of goes to `docs/notes/g10-english-hl-doubts.md` for a teacher review pack, not into the bank.

## Open points (also in the doubts file once created)

1. The CAPS table prints "80-90 words" for the summary length on the Grade 11 row and a text length of "approximately 280 words" for Grade 10; the Grade 10 summary length is therefore not stated cleanly. The lessons teach the rule as "a summary is about a third of the text, in your own words, in the number of words the question sets" and use 80-90 only where the question states it. To be confirmed by a teacher.
2. Prescribed texts are not named. Novel and drama lessons teach the technique with original extracts, so they work for whichever set work the school chose.
3. Oral tasks (Paper 4) cannot be marked by the app; the lessons teach the features and conventions and test knowledge of them (structure, register, purpose), not delivery.
