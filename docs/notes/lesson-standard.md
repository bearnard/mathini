# Lesson standard (Grades 5–12)

Set 2026-11-15 from the Grade 7 Maths pilot (`grade7/mathematics/term2/common-fractions`,
`term4/integers`, `term1/exponents`). Every rewritten lesson must meet this standard. The goal is
exam preparation and long-term retention, so a lesson has to teach rather than describe.

## Shape

- **4–6 slides**, one idea per slide, in the order a teacher would teach them.
- Each teaching slide uses the blocks in `src/components/subjects/lesson/LessonBlocks.tsx`:
  - `Rule`: the idea in one or two sentences.
  - `Worked`: a worked example with **every step** shown (in maths, calculations; in other subjects,
    a short applied example such as reading a source, labelling a diagram or using a word in a sentence).
  - `Mistake`: the most common misconception and why it is wrong.
  - One **picture** where a picture helps (see Visuals).
- The **last slide is "Check yourself"**: 3–4 `Check` questions, with answers hidden until the learner asks.
- Prose is **about 40–80 words per slide**. Grade 5–7 vocabulary for Grades 5–7.

## Content

- **CAPS scope only.** Use `syllabus/gradeN/<subject>/termN.md` in the repo, the topic's existing
  question bank, and neighbouring grades' lessons for level. Do not teach beyond the grade.
- **Every fact must be checkable.** No invented statistics, dates, names or quotes. If you are not
  sure of a fact, leave it out.
- **The lesson must cover what the topic's bank asks.** Read the bank first, and make sure every item
  in it can be answered from the slides.
- South African conventions: decimal comma in maths (3,5), SA names, places, currency (R), and
  current facts (for example the inflation target is 3% ±1 point since Nov 2025, and IDMEC is
  Investigate, Design, Make, Evaluate, Communicate).
- **Languages:** Afrikaans and isiXhosa lessons must teach the language: a grammar point with
  examples in the language and English glosses. Every new Afrikaans or isiXhosa sentence goes on
  `~/Source/private/mathini/audit/teacher-check.md` for a native-speaker check.

## Numbers and tests

- Every number in a worked example or check answer comes from a **small tested helper**
  (see `src/components/diagrams/maths/grade7Helpers.ts` and its test), or is asserted in a test.
- Put consistency checks **in tests, not runtime `throw`s**. A throw at module load blanks the
  lesson for learners.
- Add a test tying the lesson to its helpers. For example, the numbers shown appear in the lesson
  file, or the lesson renders all of its slides.

## Visuals

- Visual first, **at most 6 labels per picture**, hand-built SVG in the style of
  `src/components/diagrams/` (`Grade7Pictures.tsx`, accounting, physics, maths), or the existing
  `FunctionGraph`, `DataChart` and `NumberedSteps`. **No AI-generated images.**
- Pictures must be accurate: draw from computed values, never by eye.
- Accessible: an `aria` description on every picture.

## Don't change

- The question **bank stays byte-identical** (prove it: diff or cmp everything from `const bank` on).
  Bank fixes are separate work.
- No changes to shared shells such as `CapsSubjectTopic` without asking the orchestrator.

## Gates (every branch)

1. `npx tsc --noEmit` is clean. Copy the git-ignored `cloudflare-env.d.ts` into a fresh worktree first.
2. Read the result of the full `npm test` run: `ℹ fail 0`.
3. Browser check of **every slide at 390 px and 1280 px**: no horizontal overflow, no console errors,
   and **look at the screenshots**. Most layout problems only show up there. Turbopack can't follow a
   symlinked `node_modules`, so run `next dev --webpack` on a spare port with `/api` stubbed.
4. Stage by explicit path, add an accurate attribution line, and don't push, merge or deploy.
5. Batches of up to 5 lessons per branch, reported with slide titles and the time taken.
