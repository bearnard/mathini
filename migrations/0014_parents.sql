-- ADR 0003 section 1, 7 and phase 2: families. A signed-in parent (adult account, migration 0013) links a child, gives or withdraws consent, and resets the
-- child's PIN. Additive only: four new tables (no ALTER; students keeps parent_consent_at and consent_version as the operative consent columns).
-- No foreign keys, like the other tables. Timestamps are epoch milliseconds. Invite tokens are stored as SHA-256 hashes only.

-- Which adult may act for which child. unlinked_at set = no longer linked (the row is kept as history).
CREATE TABLE IF NOT EXISTS parent_links (
  user_id     TEXT    NOT NULL,                      -- users.id
  student_id  TEXT    NOT NULL,                      -- students.id
  method      TEXT    NOT NULL CHECK (method IN ('pin', 'invite')),
  linked_at   INTEGER NOT NULL,
  unlinked_at INTEGER,
  PRIMARY KEY (user_id, student_id)
);
CREATE INDEX IF NOT EXISTS idx_parent_links_student ON parent_links (student_id);

-- A link made on the child's own screen, for a parent to open. Single use, short-lived.
CREATE TABLE IF NOT EXISTS child_invites (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id TEXT    NOT NULL,
  token_hash TEXT    NOT NULL UNIQUE,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  used_at    INTEGER,
  used_by    TEXT                                    -- users.id of the parent who used it
);
CREATE INDEX IF NOT EXISTS idx_child_invites_student ON child_invites (student_id, created_at);

-- Every consent given or withdrawn by a parent: who, when, which privacy notice version. The newest row per student is the parent's current decision.
CREATE TABLE IF NOT EXISTS consent_events (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id     TEXT    NOT NULL,
  user_id        TEXT    NOT NULL,
  action         TEXT    NOT NULL CHECK (action IN ('given', 'withdrawn')),
  notice_version TEXT    NOT NULL,
  created_at     INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_consent_events_student ON consent_events (student_id, id);

-- A log of PIN resets by a parent (never the PIN itself).
CREATE TABLE IF NOT EXISTS pin_resets (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id TEXT    NOT NULL,
  user_id    TEXT    NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_pin_resets_student ON pin_resets (student_id, created_at);
