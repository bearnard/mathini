# Grade 9 English HL: Wave A plan (#874): the transactional texts we do not teach

Status: PLAN, sent to the orchestrator before any lesson is written. ADDITIVE ONLY: no existing lesson is deleted, moved, renamed or rewritten.

## Sources

- **DBE CAPS English Home Language, Senior Phase Grades 7-9** (`sp_eng_b`, Grade 9 teaching plans, terms 1 to 4) and the CAPS text-type descriptions of the same document (Diary entry, Constitution and policy, Will and testament, CV, covering letter, letter of application, e-mail: pp. of the "Transactional texts" table). Grade 9 assessment: 4 oral tasks, 3 writing tasks, 2 tests, 1 June exam; Paper 3 = one essay + one transactional text.
- `audit/caps-alignment.md`, Grade 9 English section (what we teach and the gaps).

## Shape: 6 lessons, 14 questions each (84), 3 branches (one per term, two lessons each)

| Branch | Term (CAPS) | Topic id | Title | CAPS elements taught |
|---|---|---|---|---|
| feat/g9-eng-t2 | 2 | `gr9-diary-entry-t2` | Diary entry | purpose, first person, date and time, own evaluation of the day, simple language, tone set by the entry |
| | 2 | `gr9-constitution-and-policy-t2` | Constitution and policy | a set of rules for an organisation (stokvel, burial society, youth club, soccer club), name, membership, terms of reference, date of adoption, signature; rules agreed, binding, can be amended |
| feat/g9-eng-t3 | 3 | `gr9-will-and-testament-t3` | Will and testament | reading an abridged will, date, estate (money, property, possessions), beneficiaries, executor, execution (signing and witnesses), formal language, writing a simple will |
| | 3 | `gr9-cv-and-covering-letter-t3` | CV and covering letter | CV: personal details, qualifications, experience, referees, concise and objective, addressed to the post; covering letter: format, purpose and audience, link to the CV; process writing (plan, draft, revise, edit, proof-read) |
| feat/g9-eng-t4 | 4 | `gr9-letter-of-application-t4` | Letter of application | formal long transactional text: sender and recipient address, date, salutation, subject line, body (post, reasons, qualities), closing, "Yours faithfully/sincerely" |
| | 4 | `gr9-email-t4` | E-mail | to/cc/subject, greeting, short clear body, register for formal and informal, sign-off, netiquette, differences from a letter |

Each lesson: 6 slides built from `LessonBlocks` (rule, a **worked model text**, common mistake, a labelled layout picture drawn from fixed data, "Check yourself"), then 14 server-markable multiple-choice questions (format and layout, which part belongs where, register, spot the error, which sentence suits the purpose). All model texts are **original**, with invented South African names, places and organisations (no real person or company). Placement follows the CAPS term of the **writing** task; the audit also lists the will as a reading text in term 2, which is covered by the term 3 lesson (one lesson, noted in the doubts file).

## Registration and gates (same as Grade 10 English and Grade 12 History)

`src/curriculum/grade9/english/index.ts` gains topics in terms 2, 3 and 4 (after existing lessons, ids unchanged); task instructions in new JSON files imported in the english task module; lessons split into `<Name>Content.tsx` and the `CapsSubjectTopic` component so the sync discovery works (dry run `question-sync.ts --grades 9` shown for each branch); generated files regenerated after rebase; tests like `coldWar.test.ts` (registration, 12-14 clean questions, answer positions, answers findable in the lesson, layout data asserted). Phone check 320/390 with screenshots.

## Accuracy and legal care

- The will lesson teaches **what a will is and what its parts are** for a school task, with a note that a real will should be drawn up with a lawyer or the Master's Office. Execution rules (signed by the testator and two witnesses, who must not be beneficiaries) go in the lesson as CAPS "execution of the will" content; the exact legal details (Wills Act 7 of 1953: minimum age of a testator, age of witnesses) are **left out of questions and listed in the doubts file** for a teacher or lawyer to confirm.
- CV / application: no fabricated employer; SA conventions (ID not required on a CV for a first job; referees; "Yours faithfully" with "Dear Sir/Madam") are checked against the CAPS text; style differences between textbooks are noted in the doubts file.
- Decimal comma and SA spelling (organisation, colour, programme) throughout.

## Afrikaans FAL and isiXhosa FAL (second part of the instruction)

Grade 9 Afrikaans FAL has the same gaps (transactional texts: giving directions, e-mail, diary, flyer, poster, forms; CAPS T2/T3/T4). Decision I propose:

- **Afrikaans FAL:** I can write accurate lessons and questions at this level. I would start only after English HL is merged, using the same shape and a doubts file for a mother-tongue teacher.
- **isiXhosa FAL:** I will **not** ship lessons or questions. I will prepare a teacher-review pack only: the CAPS topic list, model text skeletons with English glosses and a table of what a first-language reviewer must write or check. A learner would see only text a reviewer has approved.

## Open points

1. Confirm the placement of the will (term 3 writing, with the term 2 reading covered in the same lesson).
2. Whether the owner wants a printable template (CV, letter) as a downloadable file. Not in this plan.
