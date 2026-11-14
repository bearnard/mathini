-- Spaced review, slice (b): one row per learner per missed question.
-- Only ids and schedule numbers are stored: no question text, no names.
-- due_day / *_day are SAST calendar-day numbers: floor((epoch_ms + 2h) / 86400000).
CREATE TABLE IF NOT EXISTS review_items (
  student_id     TEXT    NOT NULL,
  qkey           TEXT    NOT NULL,            -- src/lib/shared/qkey.ts
  task           TEXT    NOT NULL,
  subject        TEXT    NOT NULL,
  section        TEXT    NOT NULL DEFAULT 'general',
  box            INTEGER NOT NULL,            -- 1, 2 or 3 (gap after a correct review: 3 then 7 days)
  due_day        INTEGER NOT NULL,            -- SAST day number it comes back on
  streak_correct INTEGER NOT NULL DEFAULT 0,  -- correct reviews in a row; 3 retires it
  retired_at     INTEGER,                     -- epoch ms, NULL while active
  created_at     INTEGER NOT NULL,
  updated_at     INTEGER NOT NULL,
  PRIMARY KEY (student_id, qkey),
  FOREIGN KEY (student_id) REFERENCES students(id)
);
CREATE INDEX IF NOT EXISTS idx_review_items_due ON review_items (student_id, retired_at, due_day);
