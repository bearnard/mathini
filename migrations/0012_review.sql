-- ADR 0004: teacher review by secure link. Six new tables, nothing else.
-- Additive only: every statement is CREATE ... IF NOT EXISTS. Nothing existing is altered, so the old code ignores all of it.
-- No foreign keys, like the other question tables (D1 enforces them per statement and the batches here insert children and parents together).
-- Timestamps are epoch milliseconds, like the rest of the schema. JSON columns hold JSON text.
-- Cost: a 40-item pack with 3 reviewers is about 400 rows.
--
-- Beyond the column lists in the ADR this adds only what the flow needs to be stored somewhere:
--   review_packs.closed_at            the "90 days after the pack closes" personal-data deletion needs a close date
--   review_decisions.chosen_reviewer_id  "Accept reviewer X's version" must record which reviewer
--   review_decisions.outcome          "each item gets a status (verified / changed / still unsure)" when a pack is finished
--   created_at on reviewers and lesson_change_queue

-- A pack: a set of review items sent to one or more reviewers.
CREATE TABLE IF NOT EXISTS review_packs (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  title      TEXT    NOT NULL,
  created_by TEXT    NOT NULL,                                  -- the admin's email
  created_at INTEGER NOT NULL,
  status     TEXT    NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'open', 'closed')),
  closed_at  INTEGER
);

-- One thing to check: a question (an exact version from question_versions) or a line of a lesson (file + the text to find).
CREATE TABLE IF NOT EXISTS review_pack_items (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  pack_id     INTEGER NOT NULL,
  kind        TEXT    NOT NULL CHECK (kind IN ('question', 'lesson_line')),
  question_id TEXT,                                             -- kind = 'question': questions.id
  version_id  INTEGER,                                          -- kind = 'question': the version the reviewers see (versions never change)
  file        TEXT,                                             -- kind = 'lesson_line': path under src/curriculum
  anchor_text TEXT,                                             -- kind = 'lesson_line': the exact text, found exactly once in file
  context     TEXT,                                             -- JSON: slide title and the slides around it, or the question's topic
  doubt       TEXT,                                             -- why it is here, for example "is 'Kusasa' morning or tomorrow?"
  sort        INTEGER NOT NULL DEFAULT 0,
  CHECK ((kind = 'question' AND question_id IS NOT NULL AND version_id IS NOT NULL)
      OR (kind = 'lesson_line' AND file IS NOT NULL AND anchor_text IS NOT NULL))
);
CREATE INDEX IF NOT EXISTS idx_review_pack_items_pack ON review_pack_items (pack_id, sort);

-- One reviewer of one pack, with their own link. Only the SHA-256 of the token is stored.
-- Personal fields (display_name, contact_note) are overwritten with "Reviewer N" and NULL 90 days after the pack closes.
CREATE TABLE IF NOT EXISTS reviewers (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  pack_id      INTEGER NOT NULL,
  display_name TEXT    NOT NULL,
  contact_note TEXT,
  token_hash   TEXT    NOT NULL UNIQUE,                         -- hex SHA-256 of the 32-byte token
  expires_at   INTEGER NOT NULL,                                -- 14 days after creation by default
  revoked_at   INTEGER,
  last_seen_at INTEGER,
  done_at      INTEGER,
  created_at   INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_reviewers_pack ON reviewers (pack_id);

-- A reviewer's answer on one item. One row per reviewer and item, overwritten by autosave.
CREATE TABLE IF NOT EXISTS review_responses (
  reviewer_id INTEGER NOT NULL,
  item_id     INTEGER NOT NULL,
  verdict     TEXT    NOT NULL CHECK (verdict IN ('correct', 'change', 'unsure')),
  proposal    TEXT,                                             -- JSON: the suggested prompt/options/answer/explanation, or the suggested line text
  confidence  TEXT CHECK (confidence IS NULL OR confidence IN ('sure', 'fairly_sure')),
  reason      TEXT,
  updated_at  INTEGER NOT NULL,
  PRIMARY KEY (reviewer_id, item_id),
  CHECK (verdict <> 'change' OR proposal IS NOT NULL)
);
CREATE INDEX IF NOT EXISTS idx_review_responses_item ON review_responses (item_id);

-- What the owner decided for an item, with the AI merge it was based on.
CREATE TABLE IF NOT EXISTS review_decisions (
  item_id             INTEGER PRIMARY KEY,
  decision            TEXT    NOT NULL CHECK (decision IN ('accept_merged', 'accept_reviewer', 'edit_accept', 'keep_original', 'ask_again')),
  merged              TEXT,                                     -- JSON: the content that was accepted
  ai_rationale        TEXT,
  ai_disagreements    TEXT,                                     -- JSON array of the points where reviewers disagree
  chosen_reviewer_id  INTEGER,                                  -- decision = 'accept_reviewer'
  outcome             TEXT CHECK (outcome IS NULL OR outcome IN ('verified', 'changed', 'unsure')),
  decided_by          TEXT    NOT NULL,                         -- the admin's email
  applied_version_id  INTEGER,                                  -- the question_versions row the edit pipeline wrote
  change_queue_id     INTEGER,                                  -- the lesson_change_queue row for a lesson line
  decided_at          INTEGER NOT NULL
);

-- Accepted changes to lesson text, which lives in code. scripts/apply-review-changes.ts exports the pending ones as exact replacements.
CREATE TABLE IF NOT EXISTS lesson_change_queue (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  file           TEXT    NOT NULL,
  old_text       TEXT    NOT NULL,
  new_text       TEXT    NOT NULL,
  item_id        INTEGER,
  status         TEXT    NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'applied', 'failed')),
  applied_commit TEXT,
  created_at     INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_lesson_change_queue_status ON lesson_change_queue (status);
