import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { openQuestionsDb } from '../questions/testQuestionsDb';
import {
  LESSON_CHANGE_STATUSES, REVIEW_CONFIDENCES, REVIEW_DECISIONS, REVIEW_ITEM_KINDS, REVIEW_OUTCOMES, REVIEW_PACK_STATUSES, REVIEW_VERDICTS,
} from './types';

const SQL = fs.readFileSync('migrations/0012_review.sql', 'utf8');
const CODE = SQL.replace(/--.*$/gm, '');
const NEW_TABLES = ['lesson_change_queue', 'review_decisions', 'review_pack_items', 'review_packs', 'review_responses', 'reviewers'];

type Raw = { prepare: (s: string) => { all: (...p: unknown[]) => unknown[]; get: (...p: unknown[]) => unknown; run: (...p: unknown[]) => unknown }; exec: (s: string) => void };
const schemaOf = (raw: Raw) => raw.prepare("SELECT name, sql FROM sqlite_master WHERE name NOT LIKE 'sqlite_%' ORDER BY name").all() as { name: string; sql: string | null }[];
const rejects = (raw: Raw, sql: string, ...p: unknown[]) => assert.throws(() => raw.prepare(sql).run(...p), /CHECK|UNIQUE|constraint/i, sql);

test('0012 is additive: only CREATE ... IF NOT EXISTS, never DROP, ALTER, DELETE, UPDATE, INSERT or REPLACE', () => {
  assert.ok(!/\b(DROP|ALTER|DELETE|UPDATE|INSERT|REPLACE)\b/i.test(CODE), 'a destructive or data statement');
  for (const m of CODE.matchAll(/CREATE\s+(TABLE|INDEX)\s+(?!IF NOT EXISTS)/gi)) assert.fail(`not idempotent: ${m[0]}`);
  assert.ok(!/\bREFERENCES\b|\bFOREIGN KEY\b/i.test(CODE), 'no foreign keys, like the other question tables');
});

test('applying 0012 leaves every existing table and index exactly as it was, and adds only the review tables and their indexes', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const raw = t.raw as unknown as Raw;
  const before = schemaOf(raw);
  assert.ok(!before.some((r) => NEW_TABLES.includes(r.name)), 'the helper must not already apply 0012');
  raw.exec(SQL);
  const after = schemaOf(raw);
  const byName = new Map(after.map((r) => [r.name, r.sql]));
  for (const r of before) assert.equal(byName.get(r.name), r.sql, `${r.name} changed`);
  const added = after.filter((r) => !before.some((b) => b.name === r.name)).map((r) => r.name).sort();
  assert.deepEqual(added, [
    'idx_lesson_change_queue_status', 'idx_review_pack_items_pack', 'idx_review_responses_item', 'idx_reviewers_pack',
    ...NEW_TABLES,
  ].sort());
});

test('applying 0012 twice is harmless and keeps the rows', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const raw = t.raw as unknown as Raw;
  raw.exec(SQL);
  raw.prepare("INSERT INTO review_packs (title, created_by, created_at) VALUES ('p', 'a@b.c', 1)").run();
  const schema = JSON.stringify(schemaOf(raw));
  raw.exec(SQL);
  assert.equal(JSON.stringify(schemaOf(raw)), schema);
  assert.equal((raw.prepare('SELECT COUNT(*) AS n FROM review_packs').get() as { n: number }).n, 1);
});

test('a pack starts as a draft; status only takes the three values', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const raw = t.raw as unknown as Raw; raw.exec(SQL);
  raw.prepare("INSERT INTO review_packs (title, created_by, created_at) VALUES ('p', 'a@b.c', 1)").run();
  assert.equal((raw.prepare('SELECT status, closed_at FROM review_packs').get() as { status: string; closed_at: number | null }).status, 'draft');
  rejects(raw, "INSERT INTO review_packs (title, created_by, created_at, status) VALUES ('p', 'a', 1, 'archived')");
});

test('an item is either a question (id and version) or a lesson line (file and anchor text), never a mix or an empty shell', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const raw = t.raw as unknown as Raw; raw.exec(SQL);
  const ins = (cols: string, vals: string) => raw.prepare(`INSERT INTO review_pack_items (pack_id, ${cols}) VALUES (1, ${vals})`).run();
  ins('kind, question_id, version_id', "'question', 'q1', 7");
  ins('kind, file, anchor_text', "'lesson_line', 'grade6/afrikaans/x.tsx', 'iets te doen of te koop'");
  rejects(raw, "INSERT INTO review_pack_items (pack_id, kind) VALUES (1, 'question')");
  rejects(raw, "INSERT INTO review_pack_items (pack_id, kind, question_id) VALUES (1, 'question', 'q1')"); // no version
  rejects(raw, "INSERT INTO review_pack_items (pack_id, kind, file) VALUES (1, 'lesson_line', 'f.tsx')"); // no anchor text
  rejects(raw, "INSERT INTO review_pack_items (pack_id, kind, question_id, version_id) VALUES (1, 'lesson_line', 'q', 1)");
  rejects(raw, "INSERT INTO review_pack_items (pack_id, kind, question_id, version_id) VALUES (1, 'essay', 'q', 1)");
  assert.equal((raw.prepare('SELECT sort FROM review_pack_items LIMIT 1').get() as { sort: number }).sort, 0);
});

test('a reviewer token hash is unique, and one reviewer answers one item once (autosave overwrites)', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const raw = t.raw as unknown as Raw; raw.exec(SQL);
  const rv = (hash: string) => raw.prepare("INSERT INTO reviewers (pack_id, display_name, token_hash, expires_at, created_at) VALUES (1, 'Ms N.', ?, 2, 1)").run(hash);
  rv('aa'); rv('bb');
  assert.throws(() => rv('aa'), /UNIQUE|constraint/i);
  raw.prepare("INSERT INTO review_responses (reviewer_id, item_id, verdict, updated_at) VALUES (1, 1, 'correct', 1)").run();
  assert.throws(() => raw.prepare("INSERT INTO review_responses (reviewer_id, item_id, verdict, updated_at) VALUES (1, 1, 'unsure', 2)").run(), /UNIQUE|constraint/i);
  raw.prepare("INSERT OR REPLACE INTO review_responses (reviewer_id, item_id, verdict, updated_at) VALUES (1, 1, 'unsure', 2)").run();
  assert.equal((raw.prepare('SELECT COUNT(*) AS n FROM review_responses').get() as { n: number }).n, 1);
});

test('responses: verdict and confidence are limited, and a suggested change must carry its proposal', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const raw = t.raw as unknown as Raw; raw.exec(SQL);
  raw.prepare("INSERT INTO review_responses (reviewer_id, item_id, verdict, proposal, confidence, updated_at) VALUES (1, 1, 'change', '{\"text\":\"x\"}', 'fairly_sure', 1)").run();
  rejects(raw, "INSERT INTO review_responses (reviewer_id, item_id, verdict, updated_at) VALUES (1, 2, 'change', 1)");
  rejects(raw, "INSERT INTO review_responses (reviewer_id, item_id, verdict, updated_at) VALUES (1, 3, 'maybe', 1)");
  rejects(raw, "INSERT INTO review_responses (reviewer_id, item_id, verdict, confidence, updated_at) VALUES (1, 4, 'correct', 'certain', 1)");
});

test('decisions and the lesson change queue take only their listed values', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const raw = t.raw as unknown as Raw; raw.exec(SQL);
  for (const d of REVIEW_DECISIONS) raw.prepare("INSERT INTO review_decisions (item_id, decision, decided_by, decided_at) VALUES (?, ?, 'a@b.c', 1)").run(REVIEW_DECISIONS.indexOf(d) + 1, d);
  rejects(raw, "INSERT INTO review_decisions (item_id, decision, decided_by, decided_at) VALUES (99, 'auto_apply', 'a', 1)");
  rejects(raw, "INSERT INTO review_decisions (item_id, decision, outcome, decided_by, decided_at) VALUES (98, 'keep_original', 'great', 'a', 1)");
  raw.prepare("INSERT INTO lesson_change_queue (file, old_text, new_text, created_at) VALUES ('f.tsx', 'a', 'b', 1)").run();
  assert.equal((raw.prepare('SELECT status FROM lesson_change_queue').get() as { status: string }).status, 'pending');
  rejects(raw, "INSERT INTO lesson_change_queue (file, old_text, new_text, status, created_at) VALUES ('f', 'a', 'b', 'done', 1)");
});

test('the TypeScript unions in types.ts list exactly the values in the SQL CHECK constraints', () => {
  const inList = (table: string, col: string): string[] => {
    const block = CODE.slice(CODE.indexOf(`CREATE TABLE IF NOT EXISTS ${table}`));
    const m = block.match(new RegExp(`${col}\\s+TEXT[^,]*?CHECK \\((?:${col} IS NULL OR )?${col} IN \\(([^)]*)\\)`)) ?? block.match(new RegExp(`${col}\\s+TEXT CHECK \\((?:${col} IS NULL OR )?${col} IN \\(([^)]*)\\)`));
    assert.ok(m, `${table}.${col} CHECK not found`);
    return m![1].split(',').map((s) => s.trim().replace(/'/g, ''));
  };
  assert.deepEqual(inList('review_packs', 'status'), [...REVIEW_PACK_STATUSES]);
  assert.deepEqual(inList('review_pack_items', 'kind'), [...REVIEW_ITEM_KINDS]);
  assert.deepEqual(inList('review_responses', 'verdict'), [...REVIEW_VERDICTS]);
  assert.deepEqual(inList('review_responses', 'confidence'), [...REVIEW_CONFIDENCES]);
  assert.deepEqual(inList('review_decisions', 'decision'), [...REVIEW_DECISIONS]);
  assert.deepEqual(inList('review_decisions', 'outcome'), [...REVIEW_OUTCOMES]);
  assert.deepEqual(inList('lesson_change_queue', 'status'), [...LESSON_CHANGE_STATUSES]);
});
