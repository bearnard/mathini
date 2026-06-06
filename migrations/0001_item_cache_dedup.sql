-- Remove duplicate (task, prompt) rows, keeping the most recently inserted one
DELETE FROM item_cache
WHERE rowid NOT IN (
  SELECT MAX(rowid) FROM item_cache GROUP BY task, prompt
);

-- Unique guard: prevents exact duplicate (task, prompt) pairs on future re-runs
CREATE UNIQUE INDEX IF NOT EXISTS item_cache_task_prompt ON item_cache(task, prompt);

-- Links each D1 row to its Vectorize vector for semantic dedup queries
ALTER TABLE item_cache ADD COLUMN vector_id TEXT;
