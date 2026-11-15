# ADR 0005: Learner progress tracking: sessions, tests and improvement over time

- **Status:** Accepted (owner request, 2026-11-15)
- **Goal:** prepare learners for tests and exams. Learners, and later parents and teachers (ADR 0003
  Phases 2–3), can see **whether a learner is improving**: per topic, per subject and before an
  exam. Every quiz, test and exam-practice result is recorded, not just individual answers.

## Context

- `attempts` stores one row per answered question (task, topic, section, correct, created_at,
  qkey, question_version_id, chosen). There is no notion of a **run** (a practice session, a term
  mock test or a Terms 3 & 4 exam practice), so we can't say "you scored 14/20 on the Term 4 mock,
  up from 9/20".
- `student_xp` and the leaderboards reward volume, not mastery.
- Spaced review (`review_items`) knows what is due and what has been retired (remembered three
  times), which is a direct **retention** signal. Nothing shows it to the learner yet.
- Mock and exam practice exist (G6 NST term tests and exam practice; G7–12 revision lessons), but
  their scores aren't stored as results.

## Decision

### 1. Record runs

New table **`runs`**:

| column | meaning |
|---|---|
| `id` | uuid |
| `student_id` | the learner |
| `kind` | `practice`, `review`, `quiz`, `mock_test` or `exam_practice` |
| `grade`, `subject` | scope |
| `scope_key` | stable id of what was tested: a task slug, a term test id or an exam-practice id |
| `scope_label` | human name |
| `started_at`, `finished_at` | timestamps; `finished_at` is NULL if abandoned |
| `n_items`, `n_answered`, `n_correct` | counts |
| `score_pct` | computed on finish |
| `duration_ms` | time taken |
| `client_version` | build id |

- `attempts` gains a **`run_id`** column (nullable, additive) so each answer belongs to its run.
- The client starts a run when a practice, quiz, mock or exam screen opens. It finishes the run
  on the results screen. The server computes the counts from the attempts and **never trusts
  client totals**.
- Abandoned runs (no finish after 2 hours) count as answered-so-far and are flagged; they're
  excluded from score trends.
- Anonymous learners: runs are kept on the device only (localStorage) and are not sent. When the
  learner signs up, their local history is offered for upload (consent screen).

### 2. Measures (computed server-side, nightly plus on demand)

| Measure | Definition | Why |
|---|---|---|
| **Topic mastery** | Accuracy on the learner's **last 20 attempts** in the topic, weighted toward recent ones. Shown as Not started, Learning (<50%), Getting there (50–79%) or Mastered (≥80% across ≥10 attempts on ≥2 days) | Recent performance, not lifetime totals |
| **Improvement** | Change in topic accuracy, first 10 attempts vs latest 10; for repeated tests, first vs best vs latest score on the same `scope_key` | "Are they improving?" |
| **Retention** | Share of spaced-review items answered correctly when due; count of items retired (remembered three times) | Learning that lasts |
| **Exam readiness** (per exam scope) | Mastery averaged over the topics in the scope, plus the latest mock score and how much of the scope has been practised | Answers "am I ready for the Terms 3–4 NST exam?" |
| **Consistency** | Days practised in the last 14, and the streak | Habit |

Measures come from `attempts`, `runs` and `review_items`. A small **`topic_progress`** cache
table (student, task, attempts, correct, last-20 accuracy, mastery level, first/last attempt
time, updated_at) is refreshed incrementally when a run finishes. It's cheap to read, so
dashboards don't scan `attempts`.

### 3. What learners see: a "My progress" page

- **Exam readiness** card for their grade's next exam scope. The Grade 6 NST Terms 3–4 scope
  exists today, and Phase 3 teachers will set others.
- **Subjects:** a mastery bar per subject. Inside each, topics are sorted *weakest first*, each
  with a small trend line and a "Practise this" button.
- **Test history:** every quiz, mock test and exam practice, with its score, date and change
  since last time ("↑ 5 since last time"). Repeated attempts at the same test are shown as a line.
- **Retention:** "You remembered 34 of 40 review cards this week", and items mastered.
- **Next best step:** one recommended action. Due reviews come first, then the weakest topic in
  the exam scope, then an untried topic.

The design is visual first, with no more than 6 labels per chart, and charts use the existing
DataChart with the decimal comma. The page is encouraging, never shaming. It shows no rankings
against other learners; leaderboards stay separate and optional.

### 4. Parents, teachers, admin (built on the same API)

- **Parents (ADR 0003 Phase 2):** the same "My progress" view for each linked child, read-only,
  plus a weekly summary email: practice days, tests taken, improving topics, and topics that need
  attention.
- **Teachers (Phase 3):** a class view. It shows mastery per topic across the class, who is behind
  on reviews, mock score distribution, and improvement since a date.
- **Admin:** aggregate improvement for the item-quality loop. A question whose solvers don't
  improve on retries is flagged for review.

### 5. Privacy (POPIA)

- Progress belongs to the learner's account. Only the learner, linked parents (after Phase 2) and
  their class teachers (Phase 3) can see it, and the server checks the role on every request.
- There is no new personal data, only derived learning data. Runs follow the same deletion as
  attempts: deleting a learner deletes their runs and topic_progress.
- Retention: runs are kept while the account is active. Anonymous on-device history never leaves
  the device without consent.

### 6. Cost (free D1)

- One run row per session plus its finish update, and one topic_progress upsert per topic per
  run. That's tiny next to attempts. The nightly refresh only touches learners active that day.

## Build plan (each part ships separately)

1. **Migration 0013:** `runs`, `attempts.run_id`, `topic_progress` (all additive). Run start and
   finish APIs, client wiring in PracticeRunner, CapsSubjectTopic, the NST shells, the term tests
   and exam practice, and spaced review. Includes tests.
2. **Measures library** (pure functions with tests) and the topic_progress refresh, on run finish
   plus nightly via the existing cron.
3. **"My progress" page:** mobile-first, with the shoot.ts browser gate.
4. **Exam readiness:** for the existing G6 NST scope first, then generalised to teacher-set
   scopes in Phase 3.
5. **Parent and teacher views:** added when ADR 0003 Phases 2–3 land.
