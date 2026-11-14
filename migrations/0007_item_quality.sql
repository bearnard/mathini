-- ADR 0003 section 1a: question quality (additive; nothing is deleted or rewritten).
-- quality_score: NULL = not scored yet (served exactly as before, so rollout is safe),
--                0 = rejected by src/lib/shared/questionQuality.ts (never served),
--                1-79 = warn-level (served after clean rows), 80-100 = clean.
-- quality_flags: JSON array of reason codes, rejects first.
ALTER TABLE item_cache ADD COLUMN quality_score INTEGER;
ALTER TABLE item_cache ADD COLUMN quality_flags TEXT;
CREATE INDEX IF NOT EXISTS idx_item_cache_task_quality ON item_cache (task, quality_score);

-- The pools the weekly top-up keeps full. Explicit, so a pool that is deliberately empty (e.g. the Grade 6 NST Term 3/4
-- tasks served from curated banks) is never refilled, while a pool purged to zero rows IS refilled.
CREATE TABLE IF NOT EXISTS pool_tasks (
  task       TEXT    PRIMARY KEY,
  target     INTEGER NOT NULL DEFAULT 50,
  enabled    INTEGER NOT NULL DEFAULT 1,
  created_at INTEGER NOT NULL
);
INSERT OR IGNORE INTO pool_tasks (task, target, enabled, created_at)
  SELECT DISTINCT task, 50, 1, CAST(strftime('%s', 'now') AS INTEGER) * 1000 FROM item_cache;
