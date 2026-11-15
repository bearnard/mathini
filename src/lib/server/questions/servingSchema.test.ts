import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { openQuestionsDb } from './testQuestionsDb';

const SQL = fs.readFileSync('migrations/0011_serving.sql', 'utf8');

const schemaOf = (raw: { prepare: (s: string) => { all: () => unknown[] } }) =>
  JSON.stringify((raw.prepare("SELECT name, sql FROM sqlite_master WHERE name NOT LIKE 'sqlite_%' ORDER BY name").all() as { name: string; sql: string | null }[]));

test('0011 is additive: only CREATE ... IF NOT EXISTS and one INSERT OR IGNORE, never DROP, ALTER, DELETE or UPDATE', () => {
  const code = SQL.replace(/--.*$/gm, '');
  assert.ok(!/\b(DROP|ALTER|DELETE|UPDATE|REPLACE)\b/i.test(code.replace(/INSERT OR IGNORE/gi, 'INSERT')), 'a destructive statement');
  for (const m of code.matchAll(/CREATE\s+(TABLE|INDEX)\s+(?!IF NOT EXISTS)/gi)) assert.fail(`not idempotent: ${m[0]}`);
  assert.equal((code.match(/INSERT OR IGNORE/gi) ?? []).length, 1);
});

test('applying 0011 leaves every existing table and index exactly as it was, and adds the new ones', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  for (const tbl of ['question_edits', 'migration_ledger', 'serving_flags']) t.raw.exec(`DROP TABLE ${tbl}`); // back to the pre-0011 schema
  const before = JSON.parse(schemaOf(t.raw)) as { name: string; sql: string }[];
  t.raw.exec(SQL);
  const after = JSON.parse(schemaOf(t.raw)) as { name: string; sql: string }[];
  const afterByName = new Map(after.map((r) => [r.name, r.sql]));
  for (const r of before) assert.equal(afterByName.get(r.name), r.sql, `${r.name} changed`);
  const added = after.filter((r) => !before.some((b) => b.name === r.name)).map((r) => r.name).sort();
  assert.deepEqual(added, ['idx_question_edits_question', 'migration_ledger', 'question_edits', 'serving_flags']);
});

test('applying 0011 twice is harmless and the flag row is not reset', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  t.raw.exec(SQL);
  t.raw.prepare("UPDATE serving_flags SET value = ? WHERE key = 'serve_from_d1'").run('{"grades":[6],"tasks":[],"exclude":[]}');
  t.raw.exec(SQL);
  const row = t.raw.prepare("SELECT value FROM serving_flags WHERE key = 'serve_from_d1'").get() as { value: string };
  assert.equal(row.value, '{"grades":[6],"tasks":[],"exclude":[]}');
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM serving_flags').get() as { n: number }).n, 1);
});

test('the default flag is EMPTY, which means serving is OFF', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  t.raw.exec(SQL);
  const row = t.raw.prepare("SELECT value FROM serving_flags WHERE key = 'serve_from_d1'").get() as { value: string };
  const v = JSON.parse(row.value) as { grades: number[]; tasks: string[]; exclude: string[] };
  assert.deepEqual(v, { grades: [], tasks: [], exclude: [] });
});

test('question_edits accepts the four change kinds and refuses anything else; reviews_reset defaults to 0', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  t.raw.exec(SQL);
  const ins = t.raw.prepare("INSERT INTO question_edits (question_id, from_version_id, to_version_id, change_kind, reason, admin_email, created_at) VALUES ('q1', 1, 2, ?, 'typo', 'owner@example.org', 1)");
  for (const k of ['wording', 'meaning', 'restore', 'sync']) ins.run(k);
  assert.throws(() => ins.run('delete'));
  assert.equal((t.raw.prepare('SELECT SUM(reviews_reset) AS n FROM question_edits').get() as { n: number }).n, 0);
  assert.equal((t.raw.prepare('SELECT COUNT(*) AS n FROM question_edits').get() as { n: number }).n, 4);
});

test('the ledger stores what a chunk wrote', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  t.raw.exec(SQL);
  t.raw.prepare("INSERT INTO migration_ledger (step, rows_written, ran_at, note) VALUES ('grades-7-9', 7774, 1, 'bookmark abc')").run();
  const r = t.raw.prepare('SELECT step, rows_written, note FROM migration_ledger').get() as { step: string; rows_written: number; note: string };
  assert.deepEqual({ ...r }, { step: 'grades-7-9', rows_written: 7774, note: 'bookmark abc' });
});

test('the new migration does not disturb the existing question flow (createVersion path still works over the migrated schema)', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  t.raw.exec(SQL);
  t.raw.exec("INSERT INTO questions (id, task, source, status, current_version_id, created_at) VALUES ('q1', 't', 'curated', 'active', NULL, 1)");
  t.raw.exec("INSERT INTO question_versions (question_id, version_no, qkey, prompt, options, answer, author, status, created_at) VALUES ('q1', 1, 'q1', 'p', '[\"a\",\"b\"]', 'a', 'seed', 'approved', 1)");
  t.raw.exec("UPDATE questions SET current_version_id = (SELECT id FROM question_versions WHERE question_id = 'q1') WHERE id = 'q1'");
  const { createVersion } = await import('./store');
  const r = await createVersion(t.db, { questionId: 'q1', expectedVersionId: 1, fields: { prompt: 'p2', options: ['a', 'b'], answer: 'a', explanation: '' }, author: 'owner', now: 2 });
  assert.equal(r.ok, true);
});
