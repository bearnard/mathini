-- Spaced review, slice (a): stable question identity on attempts.
-- qkey = 12 hex chars from src/lib/shared/qkey.ts (hash of task + normalised prompt).
-- Additive: nullable column + index. Old rows stay NULL (pool answers are resolved
-- through item_id -> item_cache when needed; curated-bank history cannot be recovered).
ALTER TABLE attempts ADD COLUMN qkey TEXT;
CREATE INDEX IF NOT EXISTS idx_attempts_student_qkey ON attempts (student_id, qkey);
