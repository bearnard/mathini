import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { openTestDb, insertStudent, type TestDb } from '../admin/testdb';
import { buildProgress, staleTasks } from './progressApi';
import { refreshForRun } from './topicProgress';
import { MOCK_PROGRESS } from '../../shared/progressMock';
import { EXAM_SCOPES } from '../../shared/examScopes';
import { MASTERY_LEVELS } from '../../shared/progressTypes';

const D = 86_400_000;
const NOW = Date.UTC(2026, 10, 15, 8, 0, 0);
const id = (n: number) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;

async function setup(): Promise<TestDb | null> {
  const t = await openTestDb();
  if (!t) return null;
  insertStudent(t, { id: 's1', created: NOW - 30 * D, grade: 6, name: 'Lerato' });
  insertStudent(t, { id: 's2', created: NOW - 30 * D, grade: 6, name: 'Other' });
  return t;
}
const attempt = (t: TestDb, o: { s?: string; task: string; ok: boolean; at: number; run?: string | null; subject?: string }) =>
  t.exec(`INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at, run_id) VALUES (?, ?, 'general', 6, ?, ?, ?, 0, 0, ?, ?)`, [o.s ?? 's1', o.task, o.subject ?? 'nst', o.task, o.ok ? 1 : 0, o.at, o.run ?? null]);
/** n attempts for a task at a given accuracy pattern, spread over days. */
function practise(t: TestDb, task: string, bits: string, o: { s?: string; start?: number; stepMs?: number; run?: string } = {}) {
  [...bits].forEach((b, i) => attempt(t, { s: o.s, task, ok: b === '1', at: (o.start ?? NOW - 5 * D) + i * (o.stepMs ?? 6 * 3600_000), run: o.run }));
}
const finishedRun = (t: TestDb, o: { s?: string; n: number; kind: string; scope: string; label: string; score: number; at: number; items?: number; correct?: number }) =>
  t.exec(`INSERT INTO runs (id, student_id, kind, grade, subject, scope_key, scope_label, status, started_at, finished_at, n_items, n_answered, n_correct, score_pct, duration_ms) VALUES (?, ?, ?, 6, 'nst', ?, ?, 'finished', ?, ?, ?, ?, ?, ?, 1000)`,
    [id(o.n), o.s ?? 's1', o.kind, o.scope, o.label, o.at - 1000, o.at, o.items ?? 20, o.items ?? 20, o.correct ?? Math.round((o.score * (o.items ?? 20)) / 100), o.score]);

test('a learner who has not started gets an encouraging empty response, not an error', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const p = await buildProgress(t.db, 's1', NOW);
  assert.ok(p);
  assert.deepEqual([p.grade, p.displayName, p.exam, p.subjects, p.tests, p.testSeries], [6, 'Lerato', null, [], [], []]);
  assert.deepEqual(p.retention, { weekCorrect: 0, weekAnswered: 0, weekPct: null, retiredCount: 0, dueCount: 0 });
  assert.deepEqual(p.consistency, { daysPractisedLast14: 0, streakDays: 0 });
  assert.equal(p.nextStep.kind, 'new_topic');
  assert.equal(p.generatedAt, new Date(NOW).toISOString());
});

test('an unknown learner has no progress', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  assert.equal(await buildProgress(t.db, 'nobody', NOW), null);
});

test('the response has exactly the shape of the contract (same keys as the page\'s mock, recursively)', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  practise(t, 'electric-circuits', '1'.repeat(24), { run: id(1) });
  practise(t, 'electric-circuits', '1'.repeat(5), { run: id(2), start: NOW - 2 * D });
  finishedRun(t, { n: 1, kind: 'mock_test', scope: 'nst-term3-mock', label: 'Term 3 Mock Test', score: 60, at: NOW - 3 * D });
  finishedRun(t, { n: 2, kind: 'mock_test', scope: 'nst-term3-mock', label: 'Term 3 Mock Test', score: 70, at: NOW - 1 * D });
  await refreshForRun(t.db, 's1', ['electric-circuits'], NOW - 1000);
  const p = (await buildProgress(t.db, 's1', NOW))!;
  const keys = (o: unknown): unknown => (Array.isArray(o) ? (o.length ? keys(o[0]) : []) : o && typeof o === 'object' ? Object.fromEntries(Object.keys(o).sort().map((k) => [k, keys((o as Record<string, unknown>)[k])])) : typeof o);
  const strip = (o: unknown): unknown => JSON.parse(JSON.stringify(o));
  const mock = strip(MOCK_PROGRESS) as Record<string, unknown>;
  const real = strip(p) as Record<string, unknown>;
  assert.deepEqual(Object.keys(real).sort(), Object.keys(mock).sort());
  for (const k of ['exam', 'retention', 'consistency', 'nextStep']) assert.deepEqual(Object.keys(real[k] as object).sort(), Object.keys(mock[k] as object).sort(), k);
  for (const k of ['subjects', 'tests', 'testSeries']) assert.deepEqual(keys((real[k] as unknown[])[0]), keys((mock[k] as unknown[])[0]), k);
  assert.deepEqual(keys((p.subjects[0].topics[0])), keys(MOCK_PROGRESS.subjects[0].topics[0]));
  for (const topic of p.subjects.flatMap((s) => s.topics)) assert.ok((MASTERY_LEVELS as readonly string[]).includes(topic.level));
});

test('subjects: weakest topic first, topics not started LAST, a trend per topic, improvement only from 20 attempts', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  // strong topic: 25 attempts, weak start then good (improving)
  practise(t, 'solar-system', '0000000000' + '1'.repeat(15), { run: id(1), start: NOW - 9 * D });
  // weak topic: 8 attempts, half right
  practise(t, 'electric-circuits', '10101010', { run: id(2), start: NOW - 3 * D });
  await refreshForRun(t.db, 's1', ['solar-system', 'electric-circuits'], NOW - 1000);
  const p = (await buildProgress(t.db, 's1', NOW))!;
  assert.equal(p.subjects.length, 1);
  const s = p.subjects[0];
  assert.equal(s.subject, 'nst');
  const labels = s.topics.map((x) => `${x.label}:${x.level}`);
  assert.equal(s.topics[0].task, 'electric-circuits', 'the weakest practised topic is first');
  assert.equal(s.topics[1].task, 'solar-system');
  const firstUntried = s.topics.findIndex((x) => x.level === 'not_started');
  assert.ok(firstUntried === 2 && s.topics.slice(2).every((x) => x.level === 'not_started' && x.accuracyPct === null && x.attempts === 0 && x.trend.length === 0), labels.join(', '));
  assert.ok(s.topics.slice(2).length <= 6, 'a few untried topics, not the whole curriculum');
  assert.equal(s.topics[0].changePoints, null, '8 attempts: not enough');
  assert.equal(typeof s.topics[1].changePoints, 'number', '25 attempts');
  assert.ok((s.topics[1].changePoints as number) > 0, 'improving');
  assert.equal(s.topics[0].practiseHref, '/app');
  assert.ok(s.masteryPct !== null && s.masteryPct > 0);
});

test('tests: newest first, change since the last attempt of the same test, series for tests taken more than once; practice runs are not tests', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  finishedRun(t, { n: 1, kind: 'mock_test', scope: 'nst-term3-mock', label: 'Term 3 Mock Test', score: 52, at: NOW - 10 * D, items: 25 });
  finishedRun(t, { n: 2, kind: 'mock_test', scope: 'nst-term3-mock', label: 'Term 3 Mock Test', score: 64, at: NOW - 5 * D, items: 25 });
  finishedRun(t, { n: 3, kind: 'exam_practice', scope: 'nst-terms34-exam', label: 'Exam', score: 60, at: NOW - 4 * D });
  finishedRun(t, { n: 4, kind: 'mock_test', scope: 'nst-term3-mock', label: 'Term 3 Mock Test', score: 72, at: NOW - 1 * D, items: 25 });
  finishedRun(t, { n: 5, kind: 'practice', scope: 'electric-circuits', label: 'x', score: 90, at: NOW - 1 * D });
  finishedRun(t, { n: 6, kind: 'mock_test', scope: 'nst-term3-mock', label: 'Term 3 Mock Test', score: 99, at: NOW - 2 * D, s: 's2' });
  const p = (await buildProgress(t.db, 's1', NOW))!;
  assert.deepEqual(p.tests.map((x) => [x.runId, x.scorePct, x.changeSinceLast]), [[id(4), 72, 8], [id(3), 60, null], [id(2), 64, 12], [id(1), 52, null]]);
  assert.equal(p.tests[0].nItems, 25);
  assert.equal(p.tests[0].finishedAt, new Date(NOW - D).toISOString());
  assert.equal(p.testSeries.length, 1);
  assert.deepEqual(p.testSeries[0].points.map((x) => x.scorePct), [52, 64, 72], 'date order, newest last');
});

test('exam readiness: from the topics in the scope and the latest mock; null for a learner with nothing', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const scope = EXAM_SCOPES[0];
  practise(t, scope.tasks[0], '1'.repeat(20), { run: id(1) });
  practise(t, scope.tasks[1], '10'.repeat(10), { run: id(2), start: NOW - 4 * D });
  finishedRun(t, { n: 9, kind: 'exam_practice', scope: 'nst-terms34-exam', label: 'Exam', score: 70, at: NOW - D });
  await refreshForRun(t.db, 's1', [scope.tasks[0], scope.tasks[1]], NOW - 1000);
  const e = (await buildProgress(t.db, 's1', NOW))!.exam!;
  assert.deepEqual([e.scopeKey, e.topicsTotal, e.topicsPractised, e.practisedPct], ['nst-terms34-exam', 9, 2, 22.2]);
  assert.equal(e.latestMock?.scorePct, 70);
  assert.ok(e.readinessPct !== null && e.readinessPct > 0 && e.readinessPct < 100);
  assert.ok(e.masteryPct !== null);
});

test('next step: due reviews first, then the weakest practised topic in the exam scope, then an untried one', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const scope = EXAM_SCOPES[0];
  practise(t, scope.tasks[0], '1'.repeat(15), { run: id(1) });
  practise(t, scope.tasks[1], '1010101010', { run: id(2), start: NOW - 4 * D });
  await refreshForRun(t.db, 's1', [scope.tasks[0], scope.tasks[1]], NOW - 1000);
  let p = (await buildProgress(t.db, 's1', NOW))!;
  assert.equal(p.nextStep.kind, 'weak_topic');
  assert.match(p.nextStep.title, /Conductors|Insulators/i);
  t.exec("INSERT INTO review_items (student_id, qkey, task, subject, section, box, due_day, streak_correct, created_at, updated_at) VALUES ('s1','aaaaaaaaaaaa','electric-circuits','nst','general',1,1,0,1,1)");
  p = (await buildProgress(t.db, 's1', NOW))!;
  assert.deepEqual([p.nextStep.kind, p.nextStep.title, p.retention.dueCount], ['review', 'Do your review card', 1]);
});

test('retention: review cards due and retired, and the week\'s review answers from finished review runs only', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  t.exec("INSERT INTO review_items (student_id, qkey, task, subject, section, box, due_day, streak_correct, retired_at, created_at, updated_at) VALUES ('s1','bbbbbbbbbbbb','t','nst','general',3,1,3,5,1,1)");
  t.exec("INSERT INTO review_items (student_id, qkey, task, subject, section, box, due_day, streak_correct, created_at, updated_at) VALUES ('s2','cccccccccccc','t','nst','general',1,1,0,1,1)");
  finishedRun(t, { n: 1, kind: 'review', scope: 'spaced-review', label: 'r', score: 85, at: NOW - 2 * D, items: 40, correct: 34 });
  finishedRun(t, { n: 2, kind: 'review', scope: 'spaced-review', label: 'r', score: 50, at: NOW - 20 * D, items: 10, correct: 5 });
  practise(t, 'electric-circuits', '1', { run: id(7) });
  const p = (await buildProgress(t.db, 's1', NOW))!;
  assert.deepEqual(p.retention, { weekCorrect: 34, weekAnswered: 40, weekPct: 85, retiredCount: 1, dueCount: 0 });
});

test('consistency: days practised in the last 14 and the streak, in SAST days', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  for (const back of [0, 1, 2, 5, 20]) attempt(t, { task: 'electric-circuits', ok: true, at: NOW - back * D });
  const p = (await buildProgress(t.db, 's1', NOW))!;
  assert.deepEqual(p.consistency, { daysPractisedLast14: 4, streakDays: 3 });
});

test('a learner never sees another learner\'s data', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  practise(t, 'solar-system', '1'.repeat(25), { s: 's2', run: id(3) });
  finishedRun(t, { n: 3, s: 's2', kind: 'mock_test', scope: 'nst-term3-mock', label: 'x', score: 99, at: NOW - D });
  await refreshForRun(t.db, 's2', ['solar-system'], NOW - 1000);
  const mine = (await buildProgress(t.db, 's1', NOW))!;
  assert.deepEqual([mine.subjects, mine.tests, mine.exam, mine.consistency.daysPractisedLast14], [[], [], null, 0]);
  const theirs = (await buildProgress(t.db, 's2', NOW))!;
  assert.equal(theirs.displayName, 'Other');
  assert.equal(theirs.tests.length, 1);
});

test('without the review or runs tables the page still loads (those sections read as no data)', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  practise(t, 'electric-circuits', '1'.repeat(10), { run: id(1) });
  await refreshForRun(t.db, 's1', ['electric-circuits'], NOW - 1000);
  const real = t.db;
  const flaky = { all: (sql: string, params?: never) => (/FROM (runs|review_items)/.test(sql) ? Promise.reject(new Error('no such table')) : real.all(sql, params)), batch: real.batch } as typeof real;
  const p = (await buildProgress(flaky, 's1', NOW))!;
  assert.deepEqual([p.tests, p.retention.dueCount, p.retention.weekPct], [[], 0, null]);
  assert.equal(p.subjects.length, 1);
});

test('the exam scope lists exactly the topics of the Grade 6 NST exam practice page', () => {
  const src = fs.readFileSync('src/curriculum/grade6/natural-sciences/exam/Terms34ExamPractice.tsx', 'utf8');
  const tasks = [...src.matchAll(/task: '([a-z-]+)'/g)].map((m) => m[1]);
  assert.deepEqual([...EXAM_SCOPES[0].tasks], tasks);
});

// ---------- the owner's bug: answers but no topic_progress rows and no runs (Anfervio: 20 answers, "No topics practised yet") ----------
test('a learner with answers but NO cached rows and NO runs is built on the first view, not shown as "nothing practised"', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  practise(t, 'electric-circuits', '1101110110011101110', { start: NOW - 2 * D, stepMs: 600_000 }); // 19 answers on one topic, no run
  practise(t, 'electric-circuits', '1', { start: NOW - 2 * D + 20 * 600_000 });
  assert.equal(Number((await t.db.all<{ n: number }>('SELECT COUNT(*) AS n FROM topic_progress'))[0].n), 0, 'precondition: the cache is empty');
  assert.equal(Number((await t.db.all<{ n: number }>('SELECT COUNT(*) AS n FROM runs'))[0].n), 0, 'precondition: no runs');
  const p = await buildProgress(t.db, 's1', NOW);
  assert.ok(p);
  assert.ok(p.subjects.length > 0, 'subjects are shown');
  assert.ok(p.subjects.flatMap((s) => s.topics).some((x) => x.task === 'electric-circuits' && x.attempts === 20));
  assert.ok(p.exam && p.exam.topicsPractised >= 1, 'exam readiness has something to go on');
  assert.equal(Number((await t.db.all<{ n: number }>('SELECT COUNT(*) AS n FROM topic_progress'))[0].n), 1, 'the cache now has the row');
  assert.ok((p.recentSessions ?? []).length === 1 && p.recentSessions![0].answered === 20, 'one session of 20 answers');
  // other learners are untouched
  assert.equal(Number((await t.db.all<{ n: number }>("SELECT COUNT(*) AS n FROM topic_progress WHERE student_id = 's2'"))[0].n), 0);
});

test('recent sessions: one per run, or per topic per day outside a run; newest first, at most 5, scores rounded', async () => {
  const { recentSessionsOf } = await import('./progressApi');
  const r = (task: string, ok: number, at: number, run: string | null = null) => ({ task, is_correct: ok, created_at: at, run_id: run });
  const rows = [r('electric-circuits', 1, NOW), r('electric-circuits', 0, NOW - 1000), r('electric-circuits', 1, NOW - 2000), r('mains-electricity', 1, NOW - 3 * D), r('x', 1, NOW - 4 * D, 'run-1'), r('mains-electricity', 0, NOW - 4 * D - 1000, 'run-1')];
  const s = recentSessionsOf(rows, 6);
  assert.equal(s.length, 3);
  assert.deepEqual([s[0].answered, s[0].correct, s[0].scorePct], [3, 2, 67]);
  assert.match(s[2].label, / and 1 more$/);
  assert.equal(recentSessionsOf(Array.from({ length: 12 }, (_, i) => r('a', 1, NOW - i * 2 * D)), 6).length, 5);
});

test('FRESHNESS: answers newer than the cached row (a run left unfinished, a topic practised since the last refresh) show up in the next read; an up-to-date cache is not rewritten', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  practise(t, 'solar-system', '1010101010', { run: id(1), start: NOW - 5 * D });
  await refreshForRun(t.db, 's1', ['solar-system'], NOW - 4 * D);
  const before = (await buildProgress(t.db, 's1', NOW))!;
  assert.equal(before.subjects[0].topics.find((x) => x.task === 'solar-system')!.attempts, 10);
  const stamp = (await t.db.all<{ updated_at: number }>("SELECT updated_at FROM topic_progress WHERE task = 'solar-system'", []))[0].updated_at;
  // an unfinished run: 5 more answers and a second topic, never refreshed
  practise(t, 'solar-system', '11111', { start: NOW - 2 * 3600_000, stepMs: 60_000 });
  practise(t, 'electric-circuits', '101', { start: NOW - 3600_000, stepMs: 60_000 });
  const after = (await buildProgress(t.db, 's1', NOW))!;
  const topics = after.subjects[0].topics;
  assert.equal(topics.find((x) => x.task === 'solar-system')!.attempts, 15, 'the practised-since answers are counted');
  assert.equal(topics.find((x) => x.task === 'electric-circuits')!.attempts, 3, 'a topic with no cached row appears');
  // nothing new: the next read leaves the cache alone
  const again = await buildProgress(t.db, 's1', NOW + 60_000);
  assert.ok(again);
  const rows = await t.db.all<{ task: string; updated_at: number }>('SELECT task, updated_at FROM topic_progress ORDER BY task', []);
  assert.equal(rows.find((r) => r.task === 'solar-system')!.updated_at, NOW, 'refreshed once (at the first read that saw it), not on every read');
  assert.ok(stamp < NOW);
});

test('staleTasks: only tasks with an answer newer than the cached last answer, or with no cached row', () => {
  assert.deepEqual(staleTasks([{ task: 'a', last_attempt_at: 100 }, { task: 'b', last_attempt_at: 100 }], [{ task: 'a', created_at: 100 }, { task: 'b', created_at: 101 }, { task: 'c', created_at: 5 }]), ['b', 'c']);
  assert.deepEqual(staleTasks([], []), []);
});
