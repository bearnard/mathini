-- ADR 0003 section 3 (phase 1a-B): questions become versioned data with STABLE ids. Additive only; no existing row is rewritten.
--
-- questions.id is the qkey (src/lib/shared/qkey.ts) of the question's ORIGINAL prompt, so review_items.qkey and
-- attempts.qkey stay valid with no data rewrite. An edit creates a new row in question_versions and keeps the id.
-- question_versions.qkey is the qkey of THAT version's prompt: it is an alias, so a client that hashes an edited
-- prompt still resolves to the same question (the server then stores the canonical id).
-- No foreign keys on purpose (D1 deletes of learners/attempts must stay unaffected); the store code keeps them consistent.
CREATE TABLE IF NOT EXISTS questions (
  id                 TEXT    PRIMARY KEY,                       -- qkey of the original prompt
  task               TEXT    NOT NULL,
  section            TEXT    NOT NULL DEFAULT 'general',
  kind               TEXT    NOT NULL DEFAULT 'mcq',            -- mcq | order | label | explain
  source             TEXT    NOT NULL CHECK (source IN ('curated', 'ai')),
  status             TEXT    NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'retired')),
  current_version_id INTEGER,                                   -- question_versions.id, always an approved version
  legacy_item_id     INTEGER,                                   -- item_cache.id for pool questions (a join, item_cache is untouched)
  created_at         INTEGER NOT NULL,
  retired_at         INTEGER
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_questions_legacy_item ON questions (legacy_item_id) WHERE legacy_item_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_questions_task_status ON questions (task, status);

CREATE TABLE IF NOT EXISTS question_versions (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  question_id TEXT    NOT NULL,
  version_no  INTEGER NOT NULL,                                 -- 1, 2, 3 ... per question
  qkey        TEXT    NOT NULL,                                 -- makeQkey(task, this version's prompt): the alias
  prompt      TEXT    NOT NULL,
  options     TEXT    NOT NULL,                                 -- JSON array
  answer      TEXT    NOT NULL,
  explanation TEXT    NOT NULL DEFAULT '',
  extra       TEXT    NOT NULL DEFAULT '{}',                    -- JSON, kind-specific: hotspots, image, marks, paper, diagram:true
  source_note TEXT,                                             -- citation / reason for the edit
  author      TEXT    NOT NULL,                                 -- seed | ai | owner | <adult id later>
  status      TEXT    NOT NULL DEFAULT 'approved' CHECK (status IN ('draft', 'proposed', 'approved', 'retired')),
  created_at  INTEGER NOT NULL,
  UNIQUE (question_id, version_no)
);
CREATE INDEX IF NOT EXISTS idx_question_versions_qkey ON question_versions (qkey);

-- What the learner actually saw. NULL on every old row and whenever the version is unknown.
ALTER TABLE attempts ADD COLUMN question_version_id INTEGER;
CREATE INDEX IF NOT EXISTS idx_attempts_question_version ON attempts (question_version_id);
