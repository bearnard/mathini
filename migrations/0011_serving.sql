-- docs/notes/d1-serving-plan.md section 5.5: serving questions from D1, the edit audit and the migration ledger.
-- Additive only: three new tables and one seed row. Nothing existing is altered, so the old code ignores all of it.

-- Feature flags that can be flipped without a deploy. Read per request and cached ~30 s in the Worker.
-- 'serve_from_d1' = {"grades":[...],"tasks":[...],"exclude":[...]}. The default row is EMPTY, which means OFF: serving behaves exactly as before.
CREATE TABLE IF NOT EXISTS serving_flags (
  key        TEXT    PRIMARY KEY,
  value      TEXT    NOT NULL,
  updated_at INTEGER NOT NULL
);
INSERT OR IGNORE INTO serving_flags (key, value, updated_at) VALUES ('serve_from_d1', '{"grades":[],"tasks":[],"exclude":[]}', CAST(strftime('%s', 'now') AS INTEGER) * 1000);

-- Every edit of a question's wording by an admin (and every sync or restore). question_moderation cannot hold these: its action
-- column is CHECK-limited to dismiss/retire/reinstate. No foreign keys, like the other question tables.
CREATE TABLE IF NOT EXISTS question_edits (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id     TEXT    NOT NULL,
  from_version_id INTEGER,                                      -- NULL for the first version of a new question
  to_version_id   INTEGER NOT NULL,
  change_kind     TEXT    NOT NULL CHECK (change_kind IN ('wording', 'meaning', 'restore', 'sync')),
  reason          TEXT    NOT NULL,
  admin_email     TEXT    NOT NULL,                             -- the admin's own address, or 'sync' for a scripted sync
  findings        TEXT,                                         -- JSON: validator findings at save time
  reviews_reset   INTEGER NOT NULL DEFAULT 0,                   -- review_items rows moved back to box 1 by a 'meaning' edit
  created_at      INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_question_edits_question ON question_edits (question_id, created_at);

-- What each migration chunk wrote, so the daily write budget never depends on anyone's memory.
CREATE TABLE IF NOT EXISTS migration_ledger (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  step         TEXT    NOT NULL,
  rows_written INTEGER NOT NULL,
  ran_at       INTEGER NOT NULL,
  note         TEXT
);
