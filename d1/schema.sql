-- PrepPals D1 schema: TTS audio cache + generated practice item cache.

-- Cached pronunciation audio metadata, keyed by the exact Afrikaans text.
-- The MP3 bytes live in R2 (object key = r2_key); D1 only holds the reference
-- so lookups stay small and fast. Audio is MP3 (mono, encoded from Gemini's
-- 24kHz PCM) so it plays in every browser including iOS/Safari.
CREATE TABLE IF NOT EXISTS tts_cache (
  text       TEXT PRIMARY KEY,
  r2_key     TEXT NOT NULL,
  mime       TEXT NOT NULL DEFAULT 'audio/mpeg',
  created_at INTEGER NOT NULL
);

-- Cached Gemini-generated practice items, used as an extra server-side
-- fallback pool when live generation fails.
CREATE TABLE IF NOT EXISTS item_cache (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  task        TEXT NOT NULL,
  prompt      TEXT NOT NULL,
  options     TEXT NOT NULL,
  answer      TEXT NOT NULL,
  explanation TEXT NOT NULL DEFAULT '',
  created_at  INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_item_cache_task ON item_cache (task);
