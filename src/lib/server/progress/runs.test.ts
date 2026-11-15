import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openTestDb, insertStudent, type TestDb } from '../admin/testdb';
import { ABANDON_AFTER_MS, MAX_OPEN_RUNS, abandonRuns, finishRun, isRunId, runIdForAttempt, scorePct, startRun, type StartRunInput } from './runs';

const id = (n: number) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
const T0 = Date.UTC(2026, 10, 15, 8, 0, 0);
const input = (over: Partial<StartRunInput> = {}): StartRunInput => ({ id: id(1), kind: 'practice', grade: 6, subject: 'nst', scopeKey: 'electric-circuits', scopeLabel: 'Electric Circuits', nItems: 5, ...over });

async function setup(): Promise<TestDb | null> {
  const t = await openTestDb();
  if (!t) return null;
  insertStudent(t, { id: 's1', created: T0 - 1000 });
  insertStudent(t, { id: 's2', created: T0 - 1000 });
  return t;
}
const attempt = (t: TestDb, o: { runId?: string | null; student?: string; correct: boolean; task?: string; at?: number }) =>
  t.exec(
    `INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at, run_id) VALUES (?, ?, 'general', 6, 'nst', 'x', ?, 0, 0, ?, ?)`,
    [o.student ?? 's1', o.task ?? 'electric-circuits', o.correct ? 1 : 0, o.at ?? T0, o.runId ?? null],
  );

test('isRunId accepts uuids and nothing else', () => {
  assert.equal(isRunId(id(1)), true);
  for (const bad of ['', 'abc', id(1) + 'x', 123, null, undefined, "00000000-0000-4000-8000-00000000000'; DROP"]) assert.equal(isRunId(bad), false);
});

test('scorePct: correct over the questions the run holds; a skipped question counts as wrong; never above 100', () => {
  assert.equal(scorePct(14, 20, 20), 70);
  assert.equal(scorePct(5, 5, 10), 50);
  assert.equal(scorePct(3, 4, 0), 75);
  assert.equal(scorePct(0, 0, 0), 0);
  assert.equal(scorePct(6, 6, 5), 100);
});

test('startRun stores an open run; starting again with the same id changes nothing', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const a = await startRun(t.db, 's1', input(), T0);
  assert.ok(a.ok && a.created && a.run.status === 'open' && a.run.nItems === 5 && a.run.startedAt === T0);
  const b = await startRun(t.db, 's1', input({ nItems: 99 }), T0 + 5000);
  assert.ok(b.ok && !b.created && b.run.nItems === 5 && b.run.startedAt === T0);
  assert.equal((await t.db.all('SELECT * FROM runs')).length, 1);
});

test('startRun refuses bad input and another learner\'s run id', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  for (const bad of [{ id: 'nope' }, { kind: 'exam' }, { grade: 13 }, { grade: 0 }, { subject: 'a b' }, { scopeKey: '' }, { scopeKey: "x'; DROP TABLE runs;--" }]) {
    const r = await startRun(t.db, 's1', input(bad as Partial<StartRunInput>), T0);
    assert.equal(r.ok, false, JSON.stringify(bad));
  }
  assert.ok((await startRun(t.db, 's1', input(), T0)).ok);
  const steal = await startRun(t.db, 's2', input(), T0);
  assert.deepEqual([steal.ok, !steal.ok && steal.status], [false, 409]);
});

test('startRun caps nItems, clamps a claimed start time to the last 2 hours and never to the future', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const a = await startRun(t.db, 's1', input({ id: id(1), nItems: 99999, startedAt: T0 - 60_000 }), T0);
  assert.ok(a.ok && a.run.nItems === 200 && a.run.startedAt === T0 - 60_000);
  const b = await startRun(t.db, 's1', input({ id: id(2), startedAt: T0 - 5 * 3600_000 }), T0);
  assert.ok(b.ok && b.run.startedAt === T0);
  const c = await startRun(t.db, 's1', input({ id: id(3), startedAt: T0 + 60_000 }), T0);
  assert.ok(c.ok && c.run.startedAt === T0);
  const d = await startRun(t.db, 's1', input({ id: id(4), nItems: 'x' }), T0);
  assert.ok(d.ok && d.run.nItems === 0);
});

test('a learner cannot hold more than MAX_OPEN_RUNS open runs', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  for (let i = 0; i < MAX_OPEN_RUNS; i++) assert.ok((await startRun(t.db, 's1', input({ id: id(100 + i) }), T0)).ok);
  const over = await startRun(t.db, 's1', input({ id: id(999) }), T0);
  assert.deepEqual([over.ok, !over.ok && over.status], [false, 429]);
  assert.ok((await startRun(t.db, 's2', input({ id: id(998) }), T0)).ok, 'another learner is not affected');
});

test('finishRun counts the run\'s attempts itself and ignores everything else', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  await startRun(t.db, 's1', input({ nItems: 5 }), T0);
  await startRun(t.db, 's2', input({ id: id(2), nItems: 5 }), T0);
  for (const c of [true, true, false, true]) attempt(t, { runId: id(1), correct: c });
  attempt(t, { runId: null, correct: true }); // an answer outside any run
  attempt(t, { runId: id(2), student: 's2', correct: true }); // another learner's run
  attempt(t, { runId: id(1), student: 's2', correct: true }); // an attempt of another learner that names this run: not counted
  const r = await finishRun(t.db, 's1', id(1), T0 + 90_000);
  assert.ok(r.ok && !r.alreadyFinished);
  if (!r.ok) return;
  assert.deepEqual([r.run.status, r.run.nAnswered, r.run.nCorrect, r.run.scorePct, r.run.durationMs, r.run.finishedAt], ['finished', 4, 3, 60, 90_000, T0 + 90_000]);
  assert.deepEqual(r.tasks, ['electric-circuits']);
});

test('finishing twice returns the first result and does not recount', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  await startRun(t.db, 's1', input({ nItems: 2 }), T0);
  attempt(t, { runId: id(1), correct: true });
  const a = await finishRun(t.db, 's1', id(1), T0 + 1000);
  attempt(t, { runId: id(1), correct: true }); // arrives late
  const b = await finishRun(t.db, 's1', id(1), T0 + 9000);
  assert.ok(a.ok && b.ok && b.alreadyFinished);
  if (a.ok && b.ok) assert.deepEqual([b.run.nAnswered, b.run.scorePct, b.run.finishedAt], [a.run.nAnswered, a.run.scorePct, a.run.finishedAt]);
});

test('finishRun: unknown run, another learner\'s run and a bad id are refused', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  await startRun(t.db, 's1', input(), T0);
  assert.deepEqual(await finishRun(t.db, 's2', id(1), T0), { ok: false, status: 404, error: 'Run not found' });
  assert.deepEqual(await finishRun(t.db, 's1', id(7), T0), { ok: false, status: 404, error: 'Run not found' });
  assert.deepEqual(await finishRun(t.db, 's1', 'x', T0), { ok: false, status: 400, error: 'Invalid run id' });
});

test('a run finished after 2 hours is abandoned, not scored', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  await startRun(t.db, 's1', input({ nItems: 4 }), T0);
  attempt(t, { runId: id(1), correct: true });
  attempt(t, { runId: id(1), correct: false });
  const r = await finishRun(t.db, 's1', id(1), T0 + ABANDON_AFTER_MS + 1);
  assert.deepEqual([r.ok, !r.ok && r.status], [false, 409]);
  const row = (await t.db.all<Record<string, unknown>>('SELECT status, n_answered, n_correct, score_pct, finished_at FROM runs'))[0];
  assert.deepEqual({ ...row }, { status: 'abandoned', n_answered: 2, n_correct: 1, score_pct: null, finished_at: null });
});

test('abandonRuns closes old open runs with their answers so far, leaves fresh and finished ones, and respects the limit', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  await startRun(t.db, 's1', input({ id: id(1) }), T0);
  await startRun(t.db, 's1', input({ id: id(2) }), T0 + 3 * 3600_000);
  await startRun(t.db, 's1', input({ id: id(3) }), T0);
  await startRun(t.db, 's1', input({ id: id(4) }), T0);
  attempt(t, { runId: id(1), correct: true });
  attempt(t, { runId: id(1), correct: true });
  attempt(t, { runId: id(1), correct: false });
  await finishRun(t.db, 's1', id(3), T0 + 1000);
  const now = T0 + 3 * 3600_000 + 60_000;
  await abandonRuns(t.db, now, 200);
  const rows = await t.db.all<Record<string, unknown>>('SELECT id, status, n_answered, n_correct, score_pct FROM runs ORDER BY id');
  const by = Object.fromEntries(rows.map((r) => [r.id as string, { ...r }]));
  assert.deepEqual([by[id(1)].status, by[id(1)].n_answered, by[id(1)].n_correct, by[id(1)].score_pct], ['abandoned', 3, 2, null]);
  assert.equal(by[id(2)].status, 'open');
  assert.equal(by[id(3)].status, 'finished');
  assert.equal(by[id(4)].status, 'abandoned');
  // the limit
  await startRun(t.db, 's2', input({ id: id(10) }), T0 - 3 * 3600_000);
  await startRun(t.db, 's2', input({ id: id(11) }), T0 - 3 * 3600_000);
  await abandonRuns(t.db, now, 1);
  const left = await t.db.all<{ n: number }>("SELECT COUNT(*) AS n FROM runs WHERE status = 'open' AND started_at < ?", [now - ABANDON_AFTER_MS]);
  assert.equal(Number(left[0].n), 1);
});

test('runIdForAttempt returns the id only for the learner\'s own open run', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  await startRun(t.db, 's1', input(), T0);
  assert.equal(await runIdForAttempt(t.db, 's1', id(1), T0 + 1000), id(1));
  assert.equal(await runIdForAttempt(t.db, 's2', id(1), T0 + 1000), null, 'someone else\'s run');
  assert.equal(await runIdForAttempt(t.db, 's1', id(5), T0 + 1000), null, 'unknown run');
  assert.equal(await runIdForAttempt(t.db, 's1', 'zzz', T0 + 1000), null, 'not a uuid');
  assert.equal(await runIdForAttempt(t.db, 's1', id(1), T0 + ABANDON_AFTER_MS + 1), null, 'too old');
  await finishRun(t.db, 's1', id(1), T0 + 2000);
  assert.equal(await runIdForAttempt(t.db, 's1', id(1), T0 + 3000), null, 'finished');
});

test('runIdForAttempt never throws when the runs table does not exist yet', async () => {
  const db = { all: async () => { throw new Error('no such table: runs'); }, batch: async () => {} };
  assert.equal(await runIdForAttempt(db, 's1', id(1), T0), null);
});
