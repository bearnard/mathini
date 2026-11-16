-- Leaderboard redesign (docs/notes/leaderboard.md). Additive only; idempotent (CREATE ... IF NOT EXISTS). No foreign keys, like the other tables.
-- Apply before the code that writes them is deployed (the code tolerates their absence: an answer is never lost, boards are just empty):
--   npx wrangler d1 execute preppals --remote --file migrations/0025_weekly_points.sql

-- A cache of each learner's points for one week (Monday 00:00 SAST, epoch ms). Rebuildable from attempts/runs/topic_mastered at any time
-- (src/lib/server/leaderboard/points.ts). Written after an attempt is stored and when a run finishes; past weeks stay, which gives "best week".
CREATE TABLE IF NOT EXISTS weekly_points (
  student_id  TEXT    NOT NULL,
  week_start  INTEGER NOT NULL,
  points      INTEGER NOT NULL DEFAULT 0,
  answered    INTEGER NOT NULL DEFAULT 0,   -- server-marked answers this week: > 0 means "active" (counts towards a school's active learners)
  updated_at  INTEGER NOT NULL,
  PRIMARY KEY (student_id, week_start)
);
CREATE INDEX IF NOT EXISTS idx_weekly_points_week ON weekly_points (week_start, student_id);

-- When a learner's topic FIRST reached Mastered (topic_progress only holds the current level). Written by the topic_progress refresh, only on
-- a change from "not Mastered" (or no row) to Mastered, so topics already Mastered when this table appeared never count as new.
CREATE TABLE IF NOT EXISTS topic_mastered (
  student_id        TEXT    NOT NULL,
  task              TEXT    NOT NULL,
  first_mastered_at INTEGER NOT NULL,
  PRIMARY KEY (student_id, task)
);

-- Lets one learner's last two weeks of answers be read by seek (the weekly points rebuild).
CREATE INDEX IF NOT EXISTS idx_attempts_student_created ON attempts (student_id, created_at);
