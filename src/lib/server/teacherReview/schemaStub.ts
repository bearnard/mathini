// TEST-ONLY stand-in for migration 0012 (ADR 0004 "Data"), so the admin store can be written and tested before feat/review-schema lands.
// When bearn's migration exists, openReviewTestDb() applies the real file and this constant is deleted.
export const REVIEW_SCHEMA_STUB = `
CREATE TABLE IF NOT EXISTS review_packs (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, created_by TEXT NOT NULL, created_at INTEGER NOT NULL, status TEXT NOT NULL DEFAULT 'open');
CREATE TABLE IF NOT EXISTS review_pack_items (id INTEGER PRIMARY KEY AUTOINCREMENT, pack_id INTEGER NOT NULL, kind TEXT NOT NULL, question_id TEXT, version_id INTEGER, file TEXT, anchor_text TEXT, context TEXT, doubt TEXT, sort INTEGER NOT NULL DEFAULT 0);
CREATE TABLE IF NOT EXISTS reviewers (id INTEGER PRIMARY KEY AUTOINCREMENT, pack_id INTEGER NOT NULL, display_name TEXT, contact_note TEXT, token_hash TEXT NOT NULL UNIQUE, expires_at INTEGER NOT NULL, revoked_at INTEGER, last_seen_at INTEGER, done_at INTEGER);
CREATE TABLE IF NOT EXISTS review_responses (reviewer_id INTEGER NOT NULL, item_id INTEGER NOT NULL, verdict TEXT NOT NULL, proposal TEXT, confidence TEXT, reason TEXT, updated_at INTEGER NOT NULL, UNIQUE (reviewer_id, item_id));
CREATE TABLE IF NOT EXISTS review_decisions (item_id INTEGER PRIMARY KEY, decision TEXT NOT NULL, merged TEXT, ai_rationale TEXT, ai_disagreements TEXT, decided_by TEXT NOT NULL, applied_version_id INTEGER, change_queue_id INTEGER, decided_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS lesson_change_queue (id INTEGER PRIMARY KEY AUTOINCREMENT, file TEXT NOT NULL, old_text TEXT NOT NULL, new_text TEXT NOT NULL, item_id INTEGER, status TEXT NOT NULL DEFAULT 'pending', applied_commit TEXT);
`;
