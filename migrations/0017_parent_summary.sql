-- ADR 0005 section 4: the weekly progress email to parents. Additive only: two new tables, nothing existing is altered, no foreign keys.
-- Timestamps are epoch milliseconds.

-- A parent's choice. No row = subscribed (the email goes to every parent with a consenting linked child). unsubscribed_at set = never email.
CREATE TABLE IF NOT EXISTS summary_prefs (
  user_id         TEXT    PRIMARY KEY,                -- users.id
  unsubscribed_at INTEGER,                            -- NULL = subscribed again
  updated_at      INTEGER NOT NULL
);

-- What was sent, and the guard that makes the job safe to run again: one row per parent per week. week is the date (YYYY-MM-DD, South African time) of the
-- Sunday the summary belongs to. A parent is claimed BEFORE the mail is sent, so a second run, or a retry on Monday, can never send a second copy.
-- status: pending (claimed, mail not confirmed), sent, skipped (nothing to say this week), failed (the send failed; retried up to 3 times in that week).
CREATE TABLE IF NOT EXISTS summary_sent (
  user_id    TEXT    NOT NULL,
  week       TEXT    NOT NULL,
  status     TEXT    NOT NULL CHECK (status IN ('pending', 'sent', 'skipped', 'failed')),
  attempts   INTEGER NOT NULL DEFAULT 1,
  children   INTEGER NOT NULL DEFAULT 0,              -- how many children the email covered
  claimed_at INTEGER NOT NULL,
  sent_at    INTEGER,
  PRIMARY KEY (user_id, week)
);
CREATE INDEX IF NOT EXISTS idx_summary_sent_week ON summary_sent (week);
