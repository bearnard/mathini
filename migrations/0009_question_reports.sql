-- ADR 0003 section 4 (phase 1a-C): learner reports and the moderation audit log. Additive only.
--
-- question_reports: one row per learner per reported problem. question_id is the canonical questions.id (migration 0008),
-- or the client's qkey when the question is not registered in D1 (e.g. an unseeded bank), in which case prompt_snapshot
-- keeps what the learner was looking at. note is a CHILD'S free text: admin-only, never in a public view, removed with
-- the learner (deleteLearner). Only student_id is stored: no name, no nickname.
CREATE TABLE IF NOT EXISTS question_reports (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id     TEXT    NOT NULL,
  version_id      INTEGER,                                   -- question_versions.id shown; NULL when unknown
  task            TEXT    NOT NULL,
  student_id      TEXT    NOT NULL,
  reason          TEXT    NOT NULL CHECK (reason IN ('wrong_answer', 'confusing', 'typo', 'not_in_syllabus', 'other')),
  note            TEXT,                                      -- <= 200 chars, enforced by the route
  prompt_snapshot TEXT,                                      -- <= 300 chars, ONLY for unregistered questions; unverified
  status          TEXT    NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'dismissed', 'actioned')),
  created_at      INTEGER NOT NULL,
  resolved_at     INTEGER
);
CREATE INDEX IF NOT EXISTS idx_question_reports_question ON question_reports (question_id, status);
CREATE INDEX IF NOT EXISTS idx_question_reports_student  ON question_reports (student_id, created_at);
-- A repeat tap by the same learner on the same question + reason while it is still open is idempotent.
CREATE UNIQUE INDEX IF NOT EXISTS idx_question_reports_open_once ON question_reports (student_id, question_id, reason) WHERE status = 'open';

-- Every admin decision on a question. admin_email is the admin's own address (same as the learner-delete audit); no learner data.
CREATE TABLE IF NOT EXISTS question_moderation (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id TEXT    NOT NULL,
  action      TEXT    NOT NULL CHECK (action IN ('dismiss', 'retire', 'reinstate')),
  reason      TEXT    NOT NULL,
  admin_email TEXT    NOT NULL,
  version_id  INTEGER,
  detail      TEXT,                                          -- JSON: e.g. the item_cache score before a retire, so reinstate restores it
  created_at  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_question_moderation_question ON question_moderation (question_id, created_at);
