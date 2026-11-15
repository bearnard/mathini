-- ADR 0003 section 1 and 4 (phase 1b): teacher proposals and subject moderator groups. Additive only: six new tables, nothing existing is altered,
-- no foreign keys, epoch-millisecond timestamps. All of it is for ADULTS (teachers, moderators, the owner): no learner data is in any of these tables.

-- A group is one subject in one phase (for example Natural Sciences and Technology, Intermediate). group_key is "<subject>|<phase>".
CREATE TABLE IF NOT EXISTS moderator_groups (
  group_key  TEXT    PRIMARY KEY,
  subject    TEXT    NOT NULL,                       -- the subject title, as in the curriculum registry
  phase      TEXT    NOT NULL CHECK (phase IN ('foundation', 'intermediate', 'senior', 'fet')),
  created_at INTEGER NOT NULL
);

-- Moderators are appointed by the admin. Until a group has 5, the owner approves every proposal in it.
CREATE TABLE IF NOT EXISTS group_moderators (
  group_key    TEXT    NOT NULL,
  user_id      TEXT    NOT NULL,
  appointed_by TEXT    NOT NULL,                     -- the admin's email
  appointed_at INTEGER NOT NULL,
  PRIMARY KEY (group_key, user_id)
);
CREATE INDEX IF NOT EXISTS idx_group_moderators_user ON group_moderators (user_id);

-- A teacher's proposal: edit a question, retire it, or add a new one, with a reason and a source.
-- returned = the automated checks failed (the reasons are in findings) and it is back with its author; submitted = waiting for a decision;
-- applying = a decision is being applied (a guard against two decisions at once); stale = the question changed after the proposal was written.
CREATE TABLE IF NOT EXISTS proposals (
  id               TEXT    PRIMARY KEY,              -- uuid
  kind             TEXT    NOT NULL CHECK (kind IN ('edit', 'retire', 'new')),
  question_id      TEXT,                             -- edit and retire: questions.id
  base_version_id  INTEGER,                          -- edit: the version the teacher was looking at
  task             TEXT    NOT NULL,                 -- the topic
  group_key        TEXT    NOT NULL,
  proposer_user_id TEXT    NOT NULL,                 -- 'deleted' after the teacher erases their account
  proposed         TEXT,                             -- JSON { prompt, options, answer, explanation } for edit and new
  reason           TEXT    NOT NULL,
  source_kind      TEXT    NOT NULL CHECK (source_kind IN ('caps', 'textbook', 'lesson_slide')),
  source_ref       TEXT    NOT NULL,                 -- CAPS document and page, textbook and page, or the lesson and slide
  status           TEXT    NOT NULL CHECK (status IN ('returned', 'submitted', 'applying', 'approved', 'rejected', 'stale', 'withdrawn')),
  findings         TEXT,                             -- JSON: the automated checker's reasons at the last check
  created_at       INTEGER NOT NULL,
  updated_at       INTEGER NOT NULL,
  decided_at       INTEGER,
  decided_by       TEXT,                             -- 'owner' or 'moderator'
  decided_by_user  TEXT,                             -- the moderator's user id (NULL for the owner)
  decision_reason  TEXT,
  applied_version_id INTEGER,
  applied_question_id TEXT
);
CREATE INDEX IF NOT EXISTS idx_proposals_status ON proposals (status, group_key, created_at);
CREATE INDEX IF NOT EXISTS idx_proposals_proposer ON proposals (proposer_user_id, status);
CREATE INDEX IF NOT EXISTS idx_proposals_question ON proposals (question_id, status);

-- Points for accepted proposals, with no votes. One award per proposal.
CREATE TABLE IF NOT EXISTS reputation_events (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     TEXT    NOT NULL,
  proposal_id TEXT    NOT NULL UNIQUE,
  points      INTEGER NOT NULL,
  reason      TEXT    NOT NULL,
  created_at  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_reputation_user ON reputation_events (user_id);

-- Discussion, attached to a question or a proposal. Teachers and moderators only: no learner ever sees this table.
CREATE TABLE IF NOT EXISTS discussion_comments (
  id          TEXT    PRIMARY KEY,                   -- uuid
  question_id TEXT,
  proposal_id TEXT,
  user_id     TEXT    NOT NULL,                      -- 'deleted' after the author erases their account
  body        TEXT    NOT NULL,
  created_at  INTEGER NOT NULL,
  removed_at  INTEGER,
  removed_by  TEXT,
  CHECK (question_id IS NOT NULL OR proposal_id IS NOT NULL)
);
CREATE INDEX IF NOT EXISTS idx_comments_question ON discussion_comments (question_id, created_at);
CREATE INDEX IF NOT EXISTS idx_comments_proposal ON discussion_comments (proposal_id, created_at);

-- A question is teacher-verified at one version: an approved teacher edit or new question, or an explicit review. A later edit makes it unverified.
CREATE TABLE IF NOT EXISTS question_verified (
  question_id TEXT    PRIMARY KEY,
  version_id  INTEGER NOT NULL,
  verified_at INTEGER NOT NULL,
  via         TEXT    NOT NULL CHECK (via IN ('proposal', 'review')),
  proposal_id TEXT,
  verified_by TEXT    NOT NULL                       -- 'owner', 'moderator' or 'teacher'
);
