-- PrepPals D1 migration: students, results, leaderboard, badges, and question section tagging.
--
-- This migration extends the existing item_cache with a 'section' column and adds:
--   students, attempts, student_xp, badges, student_badges tables.

-- ============================================================
-- 1. Sub-section tagging for the question pool
-- ============================================================

-- Add section column to item_cache for per-sub-section result tracking.
-- All existing rows default to 'general' — zero behaviour change.
ALTER TABLE item_cache ADD COLUMN section TEXT NOT NULL DEFAULT 'general';

CREATE INDEX IF NOT EXISTS idx_item_cache_task_section ON item_cache (task, section);

-- ============================================================
-- 2. Students table
-- ============================================================

CREATE TABLE IF NOT EXISTS students (
  id           TEXT PRIMARY KEY,              -- uuid (crypto.randomUUID)
  login_code   TEXT NOT NULL UNIQUE,          -- human-friendly resume code, e.g. "TIGER-4821" (stored uppercased)
  pin_hash     TEXT NOT NULL,                 -- PBKDF2/SHA-256 hash of the 4-digit PIN
  pin_salt     TEXT NOT NULL,                 -- per-student random salt (hex)
  display_name TEXT NOT NULL,                 -- public nickname shown on leaderboards
  avatar       TEXT,                          -- chosen avatar asset path, e.g. '/avatars/avatar-3.webp'
  real_name    TEXT NOT NULL,                 -- private
  school       TEXT,                          -- private
  age          INTEGER,                       -- private
  grade        INTEGER NOT NULL,              -- 5..12; used for per-grade leaderboards
  created_at   INTEGER NOT NULL,
  last_seen_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_students_grade ON students (grade);

-- ============================================================
-- 3. Per-question attempts (immutable event log)
-- ============================================================

CREATE TABLE IF NOT EXISTS attempts (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id TEXT NOT NULL,
  task      TEXT NOT NULL,                   -- the task slug
  item_id   INTEGER,                         -- item_cache.id when known (nullable for static-bank fallback)
  section   TEXT NOT NULL DEFAULT 'general', -- canonical section slug
  grade     INTEGER NOT NULL,
  subject   TEXT NOT NULL,                   -- subject code from apiPath
  topic     TEXT NOT NULL,                   -- topic slug derived from task
  is_correct INTEGER NOT NULL,               -- 0 or 1
  xp_awarded INTEGER NOT NULL DEFAULT 0,     -- XP this attempt earned (server-computed)
  streak_at  INTEGER NOT NULL DEFAULT 0,     -- streak length when answered
  created_at INTEGER NOT NULL,
  FOREIGN KEY (student_id) REFERENCES students(id)
);
CREATE INDEX IF NOT EXISTS idx_attempts_student        ON attempts (student_id);
CREATE INDEX IF NOT EXISTS idx_attempts_student_section ON attempts (student_id, task, section);
CREATE INDEX IF NOT EXISTS idx_attempts_grade_subject  ON attempts (grade, subject);
CREATE INDEX IF NOT EXISTS idx_attempts_topic          ON attempts (topic);

-- ============================================================
-- 4. XP aggregate (denormalised running totals)
--    Source of truth is attempts, but this avoids SUM-over-all
--    attempts on every leaderboard read.  Rebuildable from
--    attempts if it ever drifts.
-- ============================================================

CREATE TABLE IF NOT EXISTS student_xp (
  student_id    TEXT NOT NULL,
  scope         TEXT NOT NULL,
  -- 'overall' | 'grade:<n>' | 'subject:<code>' | 'topic:<slug>'
  xp            INTEGER NOT NULL DEFAULT 0,
  correct_count INTEGER NOT NULL DEFAULT 0,
  total_count   INTEGER NOT NULL DEFAULT 0,
  updated_at    INTEGER NOT NULL,
  PRIMARY KEY (student_id, scope)
);
-- Leaderboard read: WHERE scope = ? ORDER BY xp DESC.
-- This covering index serves the filter+sort directly.
CREATE INDEX IF NOT EXISTS idx_student_xp_scope_xp ON student_xp (scope, xp DESC);

-- ============================================================
-- 5. Badge definitions (seeded via INSERT OR IGNORE)
-- ============================================================

CREATE TABLE IF NOT EXISTS badges (
  id          TEXT PRIMARY KEY,
  title       TEXT NOT NULL,
  description TEXT NOT NULL,
  icon        TEXT,                         -- generated image path (e.g. '/badges/streak-10.webp')
  tier        TEXT NOT NULL DEFAULT 'bronze' -- bronze | silver | gold
);

-- Seed initial badge definitions
INSERT OR IGNORE INTO badges (id, title, description, icon, tier) VALUES
  ('first-correct',     'First Correct',          'Answer your first question correctly!',          NULL, 'bronze'),
  ('streak-3',          'On Fire!',                'Get a streak of 3 correct answers in a row.',         NULL, 'bronze'),
  ('streak-5',          'Unstoppable',             'Get a streak of 5 correct answers in a row.',         NULL, 'silver'),
  ('streak-10',         'Legendary',               'Get a streak of 10 correct answers in a row.',        NULL, 'gold'),
  ('xp-500',            'Rising Star',             'Earn 500 XP across all topics.',                     NULL, 'bronze'),
  ('xp-2000',           'Scholar',                 'Earn 2000 XP across all topics.',                    NULL, 'silver'),
  ('xp-5000',           'Master',                  'Earn 5000 XP across all topics.',                    NULL, 'gold'),
  ('topic-complete-5',  'Topic Explorer',          'Attempt at least 5 questions in a single topic.',    NULL, 'bronze'),
  ('topic-complete-20', 'Topic Master',            'Get ≥90% accuracy over 20+ questions in a topic.',   NULL, 'silver'),
  ('perfect-set-5',     'Perfect Start',           'Answer 5 questions in a row correctly (first time).',NULL, 'silver'),
  ('perfect-set-10',    'Flawless',                'Answer 10 questions in a row correctly (first time).',NULL, 'gold');

-- ============================================================
-- 6. Earned badges
-- ============================================================

CREATE TABLE IF NOT EXISTS student_badges (
  student_id TEXT NOT NULL,
  badge_id   TEXT NOT NULL,
  earned_at  INTEGER NOT NULL,
  PRIMARY KEY (student_id, badge_id),
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (badge_id)   REFERENCES badges(id)
);
CREATE INDEX IF NOT EXISTS idx_student_badges_student ON student_badges (student_id);
