import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openTestDb, insertStudent, insertAttempt, insertEvent, type TestDb } from './testdb';
import { parseFilters } from './filters';
import { content, lowestAccuracy, lowestRunScore, type AnswerTopic, type RunTopic } from './content';

const NOW = Date.UTC(2026, 10, 14, 10, 0, 0); // Sat 2026-11-14 12:00 SAST
const DAY = 86_400_000;
const at = (daysAgo: number, mins = 0) => NOW - daysAgo * DAY + mins * 60_000;
const F = (q = 'range=30d') => parseFilters(new URLSearchParams(q), NOW);
const SKIP = 'node:sqlite is not available on this Node version';
async function withDb(ctx: { skip: (m: string) => void }, fn: (t: TestDb) => Promise<void>) {
  const t = await openTestDb();
  if (!t) return ctx.skip(SKIP);
  await fn(t);
}
const run = (t: TestDb, o: { ts: number; device?: string; session?: string; topic?: string; subject?: string | null; grade?: number | null; score?: number; total?: number }) =>
  insertEvent(t, { ts: o.ts, type: 'practice_finish', device: o.device ?? 'dev-a', session: o.session ?? 's1', topic: o.topic ?? 'solar-system', subject: o.subject === undefined ? 'nst' : o.subject, grade: o.grade === undefined ? 6 : o.grade, meta: JSON.stringify({ score: o.score ?? 5, total: o.total ?? 10, ms: 1 }) });
const ev = (t: TestDb, type: string, ts: number, session: string, topic = 'solar-system', over: Record<string, unknown> = {}) =>
  insertEvent(t, { ts, type, session, topic, subject: 'nst', grade: 6, device: `d-${session}`, ...over });

test('answers: per topic, with distinct learners, questions and correct counts (from attempts only)', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'a', created: at(50) });
    insertStudent(t, { id: 'b', created: at(50) });
    for (let i = 0; i < 6; i++) insertAttempt(t, { student: 'a', ts: at(1), correct: i < 4, topic: 'fractions-t2', subject: 'grade6' });
    for (let i = 0; i < 4; i++) insertAttempt(t, { student: 'b', ts: at(1), correct: i < 1, topic: 'fractions-t2', subject: 'grade6' });
    insertAttempt(t, { student: 'a', ts: at(2), correct: true, topic: 'cells', subject: 'nst', grade: 7 });
    insertAttempt(t, { student: 'a', ts: at(90), correct: true, topic: 'old', subject: 'nst' }); // outside the range
    const c = await content(t.db, F());
    assert.deepEqual(c.answers.map((r) => [r.topic, r.subject, r.grade, r.learners, r.questions, r.correct]), [['fractions-t2', 'grade6', 6, 2, 10, 5], ['cells', 'nst', 7, 1, 1, 1]]);
  });
});

test('answers respect the grade and subject filters', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'a', created: at(50) });
    insertAttempt(t, { student: 'a', ts: at(1), correct: true, topic: 'x', subject: 'math', grade: 7 });
    insertAttempt(t, { student: 'a', ts: at(1), correct: true, topic: 'y', subject: 'nst', grade: 6 });
    assert.deepEqual((await content(t.db, F('range=30d&grade=7'))).answers.map((r) => r.topic), ['x']);
    assert.deepEqual((await content(t.db, F('range=30d&subject=nst'))).answers.map((r) => r.topic), ['y']);
  });
});

test('runs: from practice_finish events, SEPARATE from answers; DNT runs counted but not as unique practisers', async (ctx) => {
  await withDb(ctx, async (t) => {
    run(t, { ts: at(1), device: 'd1', score: 7, total: 10 });
    run(t, { ts: at(1), device: 'd1', session: 's2', score: 3, total: 10 });
    run(t, { ts: at(2), device: 'd2', score: 10, total: 10 });
    run(t, { ts: at(2), device: 'dnt', session: 'x', score: 0, total: 5 });
    insertStudent(t, { id: 'a', created: at(50) });
    insertAttempt(t, { student: 'a', ts: at(1), correct: true, topic: 'solar-system', subject: 'nst' });
    const c = await content(t.db, F());
    assert.deepEqual(c.runs.map((r) => [r.topic, r.runs, r.practisers, r.questions, r.score]), [['solar-system', 4, 2, 35, 20]]);
    // the attempt is counted once, under answers, and not folded into runs
    assert.deepEqual(c.answers.map((r) => [r.topic, r.questions]), [['solar-system', 1]]);
  });
});

test('runs ignore events without a topic and bad meta contributes a run but no questions', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), type: 'practice_finish', topic: null, meta: '{"score":1,"total":2}' });
    insertEvent(t, { ts: at(1), type: 'practice_finish', topic: 'cells', subject: 'nst', grade: 7, meta: null });
    const c = await content(t.db, F());
    assert.deepEqual(c.runs.map((r) => [r.topic, r.runs, r.questions, r.score]), [['cells', 1, 0, 0]]);
  });
});

test('lowestAccuracy: lowest first, ignores thin data, ties broken by more data', () => {
  const rows: AnswerTopic[] = [
    { subject: 'a', grade: 6, topic: 'hard', learners: 3, questions: 40, correct: 10 },
    { subject: 'a', grade: 6, topic: 'easy', learners: 3, questions: 40, correct: 38 },
    { subject: 'a', grade: 6, topic: 'tiny', learners: 1, questions: 3, correct: 0 }, // too few answers
    { subject: 'a', grade: 6, topic: 'tie-small', learners: 1, questions: 10, correct: 5 },
    { subject: 'a', grade: 6, topic: 'tie-big', learners: 2, questions: 20, correct: 10 },
  ];
  assert.deepEqual(lowestAccuracy(rows).map((r) => r.label.topic), ['hard', 'tie-big', 'tie-small', 'easy']);
  assert.equal(lowestAccuracy(rows)[0].value, 0.25);
  assert.equal(lowestAccuracy(rows, 10, 2).length, 2);
});
test('lowestRunScore: needs a few runs and some questions', () => {
  const rows: RunTopic[] = [
    { subject: 'nst', grade: 6, topic: 'moon', runs: 5, practisers: 4, questions: 50, score: 15 },
    { subject: 'nst', grade: 6, topic: 'one-run', runs: 1, practisers: 1, questions: 10, score: 0 },
    { subject: 'nst', grade: 6, topic: 'no-questions', runs: 9, practisers: 3, questions: 0, score: 0 },
    { subject: 'nst', grade: 6, topic: 'solar', runs: 4, practisers: 4, questions: 40, score: 30 },
  ];
  assert.deepEqual(lowestRunScore(rows).map((r) => [r.label.topic, r.value]), [['moon', 0.3], ['solar', 0.75]]);
});

test('conversion: learn -> practice counted per visit and topic, only when practice starts AFTER learning', async (ctx) => {
  await withDb(ctx, async (t) => {
    // s1: learned then practised and finished
    ev(t, 'learn_complete', at(1, 0), 's1'); ev(t, 'practice_start', at(1, 1), 's1'); ev(t, 'practice_finish', at(1, 5), 's1');
    // s2: learned then practised but did not finish
    ev(t, 'learn_complete', at(1, 0), 's2'); ev(t, 'practice_start', at(1, 1), 's2');
    // s3: learned and left
    ev(t, 'learn_complete', at(1, 0), 's3');
    // s4: practised FIRST (skipped the slides), learned later, did not practise again
    ev(t, 'practice_start', at(1, 0), 's4'); ev(t, 'learn_complete', at(1, 2), 's4');
    // s5: practised directly and finished (no learn)
    ev(t, 'practice_start', at(1, 0), 's5'); ev(t, 'practice_finish', at(1, 4), 's5');
    // s6: a different topic in the same visit does not count for this topic
    ev(t, 'learn_complete', at(1, 0), 's6'); ev(t, 'practice_start', at(1, 1), 's6', 'cells');
    const c = await content(t.db, F());
    const solar = c.conversion.find((r) => r.topic === 'solar-system')!;
    assert.deepEqual([solar.learnSessions, solar.thenPractised, solar.practiceSessions, solar.finished], [5, 2, 4, 2]);
    const cells = c.conversion.find((r) => r.topic === 'cells')!;
    assert.deepEqual([cells.learnSessions, cells.thenPractised, cells.practiceSessions, cells.finished], [0, 0, 1, 0]);
  });
});

test('conversion: a second practice start after learning still counts; the same visit on another subject does not mix', async (ctx) => {
  await withDb(ctx, async (t) => {
    ev(t, 'learn_complete', at(1, 0), 's1');
    ev(t, 'practice_start', at(1, 1), 's1');
    ev(t, 'practice_start', at(1, 9), 's1'); // "Practice again"
    ev(t, 'learn_complete', at(1, 0), 's2', 'solar-system', { subject: 'geo' }); // same slug, other subject
    const c = await content(t.db, F());
    const nst = c.conversion.find((r) => r.subject === 'nst')!;
    const geo = c.conversion.find((r) => r.subject === 'geo')!;
    assert.deepEqual([nst.learnSessions, nst.thenPractised], [1, 1]);
    assert.deepEqual([geo.learnSessions, geo.thenPractised], [1, 0]);
  });
});

test('conversion: filters apply and admin rows are ignored', async (ctx) => {
  await withDb(ctx, async (t) => {
    ev(t, 'learn_complete', at(1, 0), 's1');
    ev(t, 'learn_complete', at(1, 0), 's2', 'cells', { grade: 7 });
    insertEvent(t, { ts: at(1), type: 'admin_delete', device: 'admin', session: 'admin', topic: 'solar-system' });
    assert.deepEqual((await content(t.db, F('range=30d&grade=7'))).conversion.map((r) => r.topic), ['cells']);
    assert.equal((await content(t.db, F())).conversion.length, 2);
  });
});

test('mock tests: a histogram of first-attempt scores per test, with the average', async (ctx) => {
  await withDb(ctx, async (t) => {
    const fin = (topic: string, score: number, total = 20) => insertEvent(t, { ts: at(1), type: 'mock_test_finish', topic, subject: 'nst', grade: 6, meta: JSON.stringify({ score, total, reask_fixed: 0, reask_total: total - score }) });
    fin('term-3-mock-test', 12); fin('term-3-mock-test', 12); fin('term-3-mock-test', 18); fin('term-4-mock-test', 5);
    const c = await content(t.db, F());
    const t3 = c.mock.find((m) => m.test === 'term-3-mock-test')!;
    assert.equal(t3.tests, 3);
    assert.equal(t3.total, 20);
    assert.equal(t3.histogram.length, 21);
    assert.equal(t3.histogram[12], 2);
    assert.equal(t3.histogram[18], 1);
    assert.equal(t3.histogram.reduce((a, b) => a + b, 0), 3);
    assert.equal(t3.average, (12 + 12 + 18) / 3);
    assert.equal(c.mock.find((m) => m.test === 'term-4-mock-test')!.average, 5);
    assert.deepEqual(c.mock.map((m) => m.test), ['term-3-mock-test', 'term-4-mock-test']);
  });
});

test('mock tests: out-of-range scores are clamped; rows without a valid score or total are skipped', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), type: 'mock_test_finish', topic: 'term-3-mock-test', meta: '{"score":99,"total":20}' });
    insertEvent(t, { ts: at(1), type: 'mock_test_finish', topic: 'term-3-mock-test', meta: '{"score":-4,"total":20}' });
    insertEvent(t, { ts: at(1), type: 'mock_test_finish', topic: 'term-3-mock-test', meta: null });
    insertEvent(t, { ts: at(1), type: 'mock_test_finish', topic: 'term-3-mock-test', meta: '{"score":5}' });
    insertEvent(t, { ts: at(1), type: 'mock_test_finish', topic: null, meta: '{"score":5,"total":20}' });
    const t3 = (await content(t.db, F())).mock[0];
    assert.equal(t3.tests, 2);
    assert.equal(t3.histogram[20], 1);
    assert.equal(t3.histogram[0], 1);
  });
});

test('no data gives empty lists', async (ctx) => {
  await withDb(ctx, async (t) => {
    assert.deepEqual(await content(t.db, F()), { answers: [], runs: [], conversion: [], mock: [] });
  });
});
