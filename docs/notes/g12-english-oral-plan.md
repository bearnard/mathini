# Grade 12 English Home Language: listening and speaking (Paper 4 Orals) plan, Wave A, additive

CAPS source: fet_eng_hl.txt: 3.1 Listening and speaking (lines ~803-1135), duration table (~1222), Grade 12 teaching plan Terms 1-4 (~3524-4060), oral assessment tasks Paper 4 (~4525). Our Grade 12 English has one text-only oral lesson (`gr12-oral-trial-preparation-t3`, "Oral Completion and Trial Preparation"). It stays untouched.

## What Paper 4 is (the facts the lessons teach)
- The oral tasks done during the year are the end-of-year external assessment: **50 of the 300 marks** (Papers 1 to 4). Internally set, internally assessed, externally moderated.
- Marks: prepared speech 2 × 10 = 20; unprepared speech 15; listening for comprehension 15. Total 50.
- Grade 12 oral tasks by term: T1 Task 1 listening for comprehension and Task 4 prepared/unprepared speech; T2 Task 7 prepared/unprepared speech; T3 Task 9 prepared speech, introducing the speaker/vote of thanks; T4 moderation.
- Suggested durations: prepared speech, report, review 4-5 minutes; unprepared speech 2-3; interview 10-15; dialogue 6-8; introducing a speaker/vote of thanks 4-5; conversations, debates, panel and group discussions 20-30.

## New lessons (6 × 14 questions = 84), ids prefixed `gr12-`

| Id | CAPS term | Content |
|---|---|---|
| `gr12-oral-paper4-tasks-t1` | T1 | Paper 4: the tasks across the year, the 50 marks and how they split (20 + 15 + 15), what each task assesses, moderation, suggested durations; numbers from a tested helper |
| `gr12-listening-comprehension-t1` | T1 | The three-phase listening process (pre, during, post), kinds of listening (for information, critical analysis and evaluation, appreciation and interaction), note-making, fact vs opinion, emotive/persuasive language, bias, tone and pace |
| `gr12-prepared-unprepared-speeches-t1` | T1 (also T2) | Planning, researching and organising; register and audience; structure (introduction, body, conclusion; organisational patterns chronological, cause-effect, compare-contrast, problem-solution); evidence (statistics, testimony, specific instances; credibility, validity, relevance); verbal and non-verbal delivery; unprepared speech differences; aids |
| `gr12-interview-dialogue-t2` | T2 | Interview phases (introduction, rapport, questions, summary, closure), question types general to specific, active listening, note-taking; dialogue features |
| `gr12-discussion-debate-panel-t2` | T2 | Conversation and informal discussion conventions (turn-taking), report and review, debate, forum, group and panel discussion, the chairperson's duties, conventional phrases, listening for appreciation and interaction |
| `gr12-introducing-speaker-vote-of-thanks-t3` | T3 | Introducing a speaker (research, CV, relevance, name last, brief, formal, not funny) and offering a vote of thanks (listen for highlights, short, specific); Task 9 |

## Rules followed
- Additive: no existing lesson or question edited; the T3 oral lesson stays.
- Same lesson pattern as Accounting and LO: Slides + component with `export const bank`, Rule / Worked / Mistake / Check blocks, pictures with descriptions (KeyTable), 4-6 slides, 14 validator-clean questions each, key in all four positions, no edits to existing prompts.
- Numbers from `src/components/diagrams/english/oralHelpers.ts` (tested, recomputed in `src/g12EngOral.test.ts`): 20 + 15 + 15 = 50; 50 of 300 = one sixth (16,7%); the marks of a worked example (e.g. a listening score out of 15).
- Language: CAPS wording; South African examples; nothing funny in the vote-of-thanks examples.
- Gates: tsc, full npm test, 320/390/1280 phone check, question-sync dry run, 2 screenshots, generated files regenerated.

## Doubts for the teacher-check list
- Paper 4 mark split and the term each task falls in (CAPS tables are 2011-era; schools may schedule differently).
- Whether the Paper 4 mark is still 50 of 300 in the current NSC.
- Exact duration ranges (the CAPS gives ranges; the examination guidelines may fix them).
