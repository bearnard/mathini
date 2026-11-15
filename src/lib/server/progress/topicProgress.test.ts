import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openTestDb, insertStudent, type TestDb } from '../admin/testdb';
import { NIGHTLY_PAIR_LIMIT, refreshForRun, refreshNightly, rowsFromRead } from './topicProgress';
import { startRun } from './runs';

const D = 86_400_000;
const T0 = Date.UTC(2026, 10, 10, 6, 0, 0);
const id = (n: number) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;

async function setup(): Promise<TestDb | null> {
  const t = await openTestDb();
  if (!t) return null;
  insertStudent(t, { id: 's1', created: T0 - D });
  insertStudent(t, { id: 's2', created: T0 - D });
  return t;
}
/** attempts for one learner and task: bits oldest first, spaced `stepMs` apart from `start`. */
function seed(t: TestDb, o: { student?: string; task?: string; bits: string; start?: number; stepMs?: number; runId?: string | null; subject?: string }) {
  [...o.bits].forEach((b, i) =>
    t.exec(
      `INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at, run_id) VALUES (?, ?, 'general', 6, ?, 'electric-circuits', ?, 0, 0, ?, ?)`,
      [o.student ?? 's1', o.task ?? 'electric-circuits', o.subject ?? 'nst', b === '1' ? 1 : 0, (o.start ?? T0) + i * (o.stepMs ?? 1000), o.runId ?? null],
    ),
  );
}
const progress = (t: TestDb, student = 's1', task = 'electric-circuits') =>
  t.db.all<Record<string, number | string | null>>('SELECT * FROM topic_progress WHERE student_id = ? AND task = ?', [student, task]).then((r) => (r[0] ? { ...r[0] } : null));

test('refreshForRun computes attempts, correct, window, baseline, days and level from the attempts', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  // 30 attempts over 3 days: the first 10 mostly wrong, then 20 correct
  seed(t, { bits: '0000010000', start: T0, stepMs: 1000 });
  seed(t, { bits: '1'.repeat(20), start: T0 + D, stepMs: 12 * 3600_000 });
  assert.equal(await refreshForRun(t.db, 's1', ['electric-circuits'], T0 + 20 * D), 1);
  const p = await progress(t);
  assert.ok(p);
  assert.deepEqual(
    [p.attempts, p.correct, p.last20_n, p.last20_pct, p.first10_pct, p.last10_pct, p.mastery, p.grade, p.subject, p.first_attempt_at, p.updated_at],
    [30, 21, 20, 100, 10, 100, 'mastered', 6, 'nst', T0, T0 + 20 * D],
  );
  assert.ok(Number(p.days_practised) >= 2);
  assert.equal(p.last_attempt_at, T0 + D + 19 * 12 * 3600_000);
});

test('a new topic with 5 correct answers on one day is Getting there, not Mastered', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  seed(t, { bits: '11111' });
  await refreshForRun(t.db, 's1', ['electric-circuits'], T0 + 60_000);
  const p = await progress(t);
  assert.deepEqual([p?.mastery, p?.last20_pct, p?.attempts], ['getting_there', 100, 5]);
});

test('only the learner\'s own attempts and only the asked tasks are counted', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  seed(t, { bits: '1010' });
  seed(t, { student: 's2', bits: '1111111' });
  seed(t, { task: 'mains-electricity', bits: '000' });
  await refreshForRun(t.db, 's1', ['electric-circuits'], T0 + 1000);
  const all = await t.db.all<{ student_id: string; task: string; attempts: number }>('SELECT student_id, task, attempts FROM topic_progress');
  assert.deepEqual(all.map((r) => ({ ...r })), [{ student_id: 's1', task: 'electric-circuits', attempts: 4 }]);
});

test('refreshForRun twice leaves one row with the same values (upsert)', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  seed(t, { bits: '110110' });
  await refreshForRun(t.db, 's1', ['electric-circuits'], T0 + 1000);
  const a = await progress(t);
  await refreshForRun(t.db, 's1', ['electric-circuits'], T0 + 1000);
  assert.deepEqual(await progress(t), a);
  assert.equal((await t.db.all('SELECT 1 FROM topic_progress')).length, 1);
});

test('refreshForRun with no tasks, or tasks with no attempts, writes nothing', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  assert.equal(await refreshForRun(t.db, 's1', [], T0), 0);
  assert.equal(await refreshForRun(t.db, 's1', ['nothing-here'], T0), 0);
  assert.equal((await t.db.all('SELECT 1 FROM topic_progress')).length, 0);
});

test('a task name is data, not SQL', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  seed(t, { bits: '1' });
  await assert.doesNotReject(refreshForRun(t.db, 's1', ["x'); DROP TABLE attempts;--"], T0));
  assert.equal((await t.db.all('SELECT 1 FROM attempts')).length, 1);
});

test('the window is the LATEST 20: old misses fall out', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  seed(t, { bits: '0'.repeat(15) + '1'.repeat(20), start: T0, stepMs: 6 * 3600_000 });
  await refreshForRun(t.db, 's1', ['electric-circuits'], T0 + 30 * D);
  const p = await progress(t);
  assert.deepEqual([p?.attempts, p?.correct, p?.last20_n, p?.last20_pct, p?.first10_pct, p?.last10_pct], [35, 20, 20, 100, 0, 100]);
});

test('nightly: refreshes learner-and-task pairs with attempts newer than their cache, skips fresh ones, and limits the batch', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const now = T0 + D;
  seed(t, { bits: '1100', start: now - 3600_000 });
  seed(t, { task: 'mains-electricity', bits: '10', start: now - 7200_000 });
  seed(t, { student: 's2', bits: '111', start: now - 1800_000 });
  assert.equal((await refreshNightly(t.db, now)).refreshed, 3);
  assert.equal((await t.db.all('SELECT 1 FROM topic_progress')).length, 3);
  assert.equal((await refreshNightly(t.db, now + 1000)).refreshed, 0, 'nothing is newer than the cache');
  seed(t, { bits: '1', start: now + 5000 });
  assert.equal((await refreshNightly(t.db, now + 10_000)).refreshed, 1, 'only the pair with a new attempt');
  assert.equal((await progress(t))?.attempts, 5);
  // limit
  assert.equal((await refreshNightly(t.db, now + 3 * D, 0)).refreshed, 0);
});

test('nightly ignores activity older than the look-back (it was refreshed when it happened)', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  seed(t, { bits: '11', start: T0 });
  assert.equal((await refreshNightly(t.db, T0 + 10 * D)).refreshed, 0);
});

test('nightly picks the most recently active pairs first when there are more than the limit', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const now = T0 + D;
  seed(t, { task: 'a-old', bits: '1', start: now - 7200_000 });
  seed(t, { task: 'b-new', bits: '1', start: now - 60_000 });
  assert.equal((await refreshNightly(t.db, now, 1)).refreshed, 1);
  assert.equal(await progress(t, 's1', 'b-new') !== null, true);
  assert.equal(await progress(t, 's1', 'a-old'), null);
  assert.ok(NIGHTLY_PAIR_LIMIT > 0 && NIGHTLY_PAIR_LIMIT <= 300);
});

test('the nightly batch also abandons stale open runs', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  await startRun(t.db, 's1', { id: id(1), kind: 'practice', grade: 6, subject: 'nst', scopeKey: 'electric-circuits', nItems: 3 }, T0);
  seed(t, { bits: '10', runId: id(1) });
  await refreshNightly(t.db, T0 + 3 * 3600_000);
  const r = (await t.db.all<Record<string, unknown>>('SELECT status, n_answered, n_correct, score_pct FROM runs'))[0];
  assert.deepEqual({ ...r }, { status: 'abandoned', n_answered: 2, n_correct: 1, score_pct: null });
});

test('rowsFromRead ignores a group that has no totals row', () => {
  assert.deepEqual(rowsFromRead([{ k: 'w', student_id: 's', task: 't', grade: 6, subject: 'x', topic: 'y', v: 1, at: 1, n: 1 }]), []);
});

import { rowsFromAttempts, statementToSql, upsertStatement } from './topicProgress';

test('rowsFromAttempts gives exactly what refreshForRun writes for the same attempts (the backfill cannot disagree with the live refresh)', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  seed(t, { bits: '0010110111'.repeat(3), start: T0, stepMs: 5 * 3600_000 });
  seed(t, { task: 'mains-electricity', bits: '111', start: T0 + D });
  seed(t, { student: 's2', bits: '01', start: T0 });
  const attempts = await t.db.all<Parameters<typeof rowsFromAttempts>[0][number]>('SELECT id, student_id, task, grade, subject, topic, is_correct, created_at FROM attempts');
  const back = rowsFromAttempts(attempts);
  assert.equal(back.length, 3);
  for (const b of back) await t.db.batch([upsertStatement(b, 123)]);
  const viaBackfill = await t.db.all<Record<string, unknown>>('SELECT * FROM topic_progress ORDER BY student_id, task');
  t.exec('DELETE FROM topic_progress');
  await refreshForRun(t.db, 's1', ['electric-circuits', 'mains-electricity'], 123);
  await refreshForRun(t.db, 's2', ['electric-circuits'], 123);
  const viaRefresh = await t.db.all<Record<string, unknown>>('SELECT * FROM topic_progress ORDER BY student_id, task');
  assert.deepEqual(viaBackfill.map((r) => ({ ...r })), viaRefresh.map((r) => ({ ...r })));
});

test('statementToSql quotes strings, escapes quotes, writes NULL and numbers, and the result runs', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  seed(t, { bits: '1', task: "it's-a-task" });
  const attempts = await t.db.all<Parameters<typeof rowsFromAttempts>[0][number]>('SELECT id, student_id, task, grade, subject, topic, is_correct, created_at FROM attempts');
  const [row] = rowsFromAttempts(attempts);
  const sql = statementToSql(upsertStatement(row, 5));
  assert.match(sql, /'it''s-a-task'/);
  assert.doesNotMatch(sql, /\?/);
  t.raw.exec(sql);
  t.raw.exec(sql); // idempotent
  assert.equal((await t.db.all('SELECT 1 FROM topic_progress')).length, 1);
  assert.equal(statementToSql({ sql: 'SELECT ?, ?, ?', params: [null, 3, "a'b"] }), "SELECT NULL, 3, 'a''b';");
});
