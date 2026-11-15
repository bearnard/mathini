-- ADR 0005: learner progress tracking, parts 1 and 2. Additive only: two new tables, one new nullable column on attempts.
-- Old code ignores all of it. The new code tolerates it being absent (an answer is never lost; see /api/attempts).
-- Apply by hand before the code that reads it is deployed (docs/notes/merge-checklist.md):
--   npx wrangler d1 execute preppals --remote --file migrations/0014_progress.sql
-- NOT idempotent: ALTER TABLE ... ADD COLUMN fails if run twice (like 0005). Run it once.
-- Timestamps are epoch milliseconds, like the rest of the schema. No foreign keys (D1 checks them per statement), like the question tables.

-- One practice session, quiz, term mock test, exam practice or spaced-review session.
-- The counts are computed by the server from `attempts` when the run finishes: the client's totals are never stored.
CREATE TABLE IF NOT EXISTS runs (
  id             TEXT    PRIMARY KEY,                                    -- uuid made by the client (so attempts can carry it at once); the server checks the format
  student_id     TEXT    NOT NULL,
  kind           TEXT    NOT NULL CHECK (kind IN ('practice', 'review', 'quiz', 'mock_test', 'exam_practice')),
  grade          INTEGER NOT NULL,
  subject        TEXT    NOT NULL,
  scope_key      TEXT    NOT NULL,                                       -- what was tested: a task slug, a term test id or an exam-practice id
  scope_label    TEXT    NOT NULL DEFAULT '',                            -- human name
  status         TEXT    NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'finished', 'abandoned')),
  started_at     INTEGER NOT NULL,
  finished_at    INTEGER,                                                -- NULL while open and when abandoned
  n_items        INTEGER NOT NULL DEFAULT 0,                             -- how many questions the run holds (declared at the start, capped)
  n_answered     INTEGER NOT NULL DEFAULT 0,
  n_correct      INTEGER NOT NULL DEFAULT 0,
  score_pct      INTEGER,                                                -- 0..100, set on finish only; NULL for open and abandoned runs
  duration_ms    INTEGER,
  client_version TEXT
);
CREATE INDEX IF NOT EXISTS idx_runs_student        ON runs (student_id, started_at);
CREATE INDEX IF NOT EXISTS idx_runs_student_scope  ON runs (student_id, scope_key, started_at);
CREATE INDEX IF NOT EXISTS idx_runs_status         ON runs (status, started_at);

-- Which run an answer belongs to. Nullable: old rows and answers given outside a run stay NULL.
ALTER TABLE attempts ADD COLUMN run_id TEXT;
CREATE INDEX IF NOT EXISTS idx_attempts_run ON attempts (run_id);
-- Last attempts of one learner in one task, newest first (topic mastery and the nightly refresh).
CREATE INDEX IF NOT EXISTS idx_attempts_student_task_id ON attempts (student_id, task, id);

-- A cache of the topic measures (ADR 0005 section 2), one row per learner and task. Rebuildable from attempts at any time.
CREATE TABLE IF NOT EXISTS topic_progress (
  student_id       TEXT    NOT NULL,
  task             TEXT    NOT NULL,
  grade            INTEGER NOT NULL,
  subject          TEXT    NOT NULL,
  topic            TEXT    NOT NULL,
  attempts         INTEGER NOT NULL,                                     -- all attempts in the task
  correct          INTEGER NOT NULL,
  last20_n         INTEGER NOT NULL,                                     -- attempts in the window (at most 20)
  last20_pct       INTEGER,                                              -- recency-weighted accuracy over the window, 0..100; NULL when there are no attempts
  first10_pct      INTEGER,                                              -- accuracy over the first 10 attempts (the baseline for "improvement")
  last10_pct       INTEGER,                                              -- accuracy over the latest 10
  days_practised   INTEGER NOT NULL,                                     -- distinct days (SAST) among the window's attempts
  mastery          TEXT    NOT NULL CHECK (mastery IN ('not_started', 'learning', 'getting_there', 'mastered')),
  first_attempt_at INTEGER NOT NULL,
  last_attempt_at  INTEGER NOT NULL,
  updated_at       INTEGER NOT NULL,
  PRIMARY KEY (student_id, task)
);
CREATE INDEX IF NOT EXISTS idx_topic_progress_student ON topic_progress (student_id, subject);
