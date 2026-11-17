import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeQkey } from '../../shared/qkey';
import { registerQuestionSql } from './sql';
import { openQuestionsDb } from './testQuestionsDb';
import type { TestD1 } from '../testD1';
import { CHUNK_MAX, COST, planPoolRegistration, type ItemRow } from '../../../../scripts/question-register-pool';

const TASK = 'early-indigenous-medicine';
const row = (t: TestD1, prompt: string, over: Partial<ItemRow> = {}): ItemRow => {
  const r = t.raw.prepare('INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at, section, quality_score) VALUES (?,?,?,?,?,?,?,?)').run(TASK, prompt, over.options ?? '["a","b","c"]', 'a', 'because', 1, 'general', over.quality_score ?? null);
  return { id: Number(r.lastInsertRowid), task: TASK, prompt, options: over.options ?? '["a","b","c"]', answer: 'a', explanation: 'because', section: 'general', quality_score: over.quality_score ?? null };
};
const n = (t: TestD1, table: string, where = '1=1') => (t.raw.prepare(`SELECT COUNT(*) AS n FROM ${table} WHERE ${where}`).get() as { n: number }).n;

test('unregistered pool rows are registered (source ai, v1, pointer, legacy link, id = qkey), and applying twice changes nothing', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const items = [row(t, 'First pool question?'), row(t, 'Second pool question?')];
  const plan = planPoolRegistration(items);
  assert.equal(plan.chunks.length, 1);
  t.raw.exec(plan.chunks[0].sql);
  const q = t.raw.prepare('SELECT q.id, q.source, q.legacy_item_id AS l, v.version_no, v.author FROM questions q JOIN question_versions v ON v.id = q.current_version_id ORDER BY q.legacy_item_id').all() as Record<string, unknown>[];
  assert.deepEqual(q.map((x) => ({ ...x })), items.map((it) => ({ id: makeQkey(TASK, it.prompt), source: 'ai', l: it.id, version_no: 1, author: 'ai' })));
  const before = [n(t, 'questions'), n(t, 'question_versions'), n(t, 'migration_ledger')];
  t.raw.exec(plan.chunks[0].sql);
  assert.deepEqual([n(t, 'questions'), n(t, 'question_versions'), n(t, 'migration_ledger')], before);
  assert.equal(n(t, 'migration_ledger', `step = '${plan.chunks[0].name}' AND rows_written = ${plan.chunks[0].estimatedRows}`), 1);
});

test('rejected rows (score 0), rows already linked, and rows with bad options JSON are skipped and listed', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const ok = row(t, 'Fine question?'), rejected = row(t, 'Rejected question?', { quality_score: 0 }), bad = row(t, 'Broken options question?', { options: 'not json' }), linked = row(t, 'Already linked?');
  const plan = planPoolRegistration([ok, rejected, bad, linked], [{ id: makeQkey(TASK, linked.prompt), legacy_item_id: linked.id }]);
  assert.deepEqual(plan.skipped.map((s) => [s.itemId, s.why.split(':')[0].split(',')[0]]).sort((a, b) => Number(a[0]) - Number(b[0])), [[rejected.id, 'quality_score 0 (rejected)'], [bad.id, 'options are not valid JSON'], [linked.id, 'already registered (linked in questions)']].sort((a, b) => Number(a[0]) - Number(b[0])));
  t.raw.exec(plan.chunks[0].sql);
  assert.equal(n(t, 'questions'), 1);
  assert.equal((t.raw.prepare('SELECT legacy_item_id AS l FROM questions').get() as { l: number }).l, ok.id);
});

test('a pool row identical to an existing curated question is linked to it (no second question), and costs the link rate in the estimate', async (t0) => {
  const t = await openQuestionsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  const it = row(t, 'Same as a curated one?');
  t.raw.exec(registerQuestionSql({ task: TASK, section: 'general', kind: 'mcq', source: 'curated', prompt: it.prompt, options: ['a', 'b', 'c'], answer: 'a', explanation: 'because', extra: {}, author: 'seed' }).join('\n'));
  const plan = planPoolRegistration([it], [{ id: makeQkey(TASK, it.prompt), legacy_item_id: null }]);
  assert.equal(plan.chunks[0].linked, 1);
  assert.equal(plan.chunks[0].estimatedRows, COST.link + COST.ledger);
  t.raw.exec(plan.chunks[0].sql);
  assert.equal(n(t, 'questions'), 1);
  assert.equal((t.raw.prepare('SELECT source, legacy_item_id AS l FROM questions').get() as { source: string; l: number }).l, it.id);
});

test('chunks hold at most 1,000 rows, each with its own ledger row and tag; the estimate is 8 rows per new question', () => {
  const items: ItemRow[] = Array.from({ length: CHUNK_MAX + 5 }, (_, i) => ({ id: i + 1, task: TASK, prompt: `Generated pool question ${i}?`, options: '["a","b"]', answer: 'a', explanation: 'x', section: 'general', quality_score: null }));
  const plan = planPoolRegistration(items, [], 'r3');
  assert.deepEqual(plan.chunks.map((c) => [c.name, c.rows]), [['register-pool-r3-001', CHUNK_MAX], ['register-pool-r3-002', 5]]);
  assert.equal(plan.chunks[0].estimatedRows, CHUNK_MAX * COST.newQuestion + COST.ledger);
  for (const c of plan.chunks) assert.match(c.sql, new RegExp(`migration_ledger[^\\n]*'${c.name}'`));
});
