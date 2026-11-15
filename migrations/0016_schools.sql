-- ADR 0003 phase 3: schools, classes, class membership, teacher applications and teacher-set exam scopes.
-- Additive only: six new tables, nothing existing is altered, so the old code ignores all of it. No foreign keys (D1 checks them per statement),
-- like the other tables. Timestamps are epoch milliseconds. Idempotent (CREATE ... IF NOT EXISTS), unlike the ALTER-based migrations.
-- Privacy: a teacher can see only the learners in their own classes, by nickname (students.display_name), never the real name.
-- SACE numbers are shown only in the admin screen /admin/teachers and are never exported.

CREATE TABLE IF NOT EXISTS schools (
  id          TEXT    PRIMARY KEY,                  -- uuid
  name        TEXT    NOT NULL,
  province    TEXT,
  emis_number TEXT,                                 -- optional (the national school number)
  created_at  INTEGER NOT NULL,
  created_by  TEXT    NOT NULL                      -- 'admin'
);
CREATE INDEX IF NOT EXISTS idx_schools_name ON schools (name);

-- A teacher's request for the teacher role. The role (user_roles) is granted ONLY when the admin approves.
CREATE TABLE IF NOT EXISTS teacher_applications (
  user_id       TEXT    PRIMARY KEY,
  sace_number   TEXT    NOT NULL,                   -- SACE registration number, as typed; shown to the admin only
  school_name   TEXT    NOT NULL,                   -- as typed by the applicant
  province      TEXT,
  subjects_note TEXT,                               -- optional: what they teach
  school_id     TEXT,                               -- set on approval
  status        TEXT    NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')),
  submitted_at  INTEGER NOT NULL,
  decided_at    INTEGER,
  decided_by    TEXT,                               -- the admin's email
  decision_note TEXT                                -- shown to the applicant on a rejection
);
CREATE INDEX IF NOT EXISTS idx_teacher_applications_status ON teacher_applications (status, submitted_at);

CREATE TABLE IF NOT EXISTS classes (
  id              TEXT    PRIMARY KEY,              -- uuid
  school_id       TEXT    NOT NULL,
  teacher_user_id TEXT    NOT NULL,
  name            TEXT    NOT NULL,                 -- "6B Natural Sciences"
  grade           INTEGER NOT NULL,
  subjects        TEXT    NOT NULL DEFAULT '[]',    -- JSON array of attempts.subject codes (empty = any)
  join_code       TEXT    NOT NULL UNIQUE,          -- what a learner types; upper case, no look-alike characters
  status          TEXT    NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'archived')),
  created_at      INTEGER NOT NULL,
  archived_at     INTEGER
);
CREATE INDEX IF NOT EXISTS idx_classes_teacher ON classes (teacher_user_id, status);

-- A learner in a class. Joining records which notice the learner was shown ("your teacher will see your progress in this class").
CREATE TABLE IF NOT EXISTS class_members (
  class_id       TEXT    NOT NULL,
  student_id     TEXT    NOT NULL,
  joined_at      INTEGER NOT NULL,
  notice_version TEXT    NOT NULL,
  left_at        INTEGER,                           -- the learner left, or the teacher removed them: the teacher sees nothing after this
  PRIMARY KEY (class_id, student_id)
);
CREATE INDEX IF NOT EXISTS idx_class_members_student ON class_members (student_id);

-- "Grade 6 NST test, Terms 3-4, on 28 Nov": what a class's exam covers. tasks is a JSON array of task slugs.
CREATE TABLE IF NOT EXISTS exam_scopes (
  id          TEXT    PRIMARY KEY,                  -- uuid
  class_id    TEXT    NOT NULL,
  subject     TEXT    NOT NULL,                     -- attempts.subject code
  grade       INTEGER NOT NULL,
  title       TEXT    NOT NULL,
  tasks       TEXT    NOT NULL,                     -- JSON array of task slugs
  exam_date   TEXT    NOT NULL,                     -- YYYY-MM-DD (South Africa time)
  created_by  TEXT    NOT NULL,                     -- the teacher's user id
  created_at  INTEGER NOT NULL,
  archived_at INTEGER
);
CREATE INDEX IF NOT EXISTS idx_exam_scopes_class ON exam_scopes (class_id, archived_at);
