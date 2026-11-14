-- ADR 0003 section 5 (phase 1a-C2): item analysis. Additive only.
--
-- attempts.chosen: the option the learner tapped, multiple-choice only (<= 200 chars). It is what makes distractor analysis
-- possible ("one wrong option is picked more often than the right one"). NULL on every old row and for order/label/explain items.
ALTER TABLE attempts ADD COLUMN chosen TEXT;

-- question_flags: what the nightly job found for the CURRENT version of a question (statistics are per version: an edit starts
-- afresh). One row per version + kind, refreshed in place; a dismissed flag stays dismissed for that version.
--   kind: too_easy (p-value above 0.95) | too_hard (below 0.20) | negative_discrimination (point-biserial below 0)
--         | distractor (a wrong option picked more often than the key)
--   value: the p-value, the correlation, or the share of answers that picked the wrong option
--   n: answers the figure is based on. detail: JSON, e.g. {"option": "...", "picks": 41, "keyPicks": 22}
CREATE TABLE IF NOT EXISTS question_flags (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id TEXT    NOT NULL,
  version_id  INTEGER NOT NULL,
  kind        TEXT    NOT NULL CHECK (kind IN ('too_easy', 'too_hard', 'negative_discrimination', 'distractor')),
  value       REAL    NOT NULL,
  n           INTEGER NOT NULL,
  detail      TEXT,
  status      TEXT    NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'dismissed', 'resolved')),
  computed_at INTEGER NOT NULL,
  UNIQUE (version_id, kind)
);
CREATE INDEX IF NOT EXISTS idx_question_flags_question ON question_flags (question_id, status);
