import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { creditDecision, feedsReview, runAccepts, runContext } from './attemptTrust';
import { finishRun, startRun } from './progress/runs';
import { buildProgress } from './progress/progressApi';
import { refreshForRun } from './progress/topicProgress';
import { openTestDb, insertStudent, type TestDb } from './admin/testdb';

const NOW = 1_800_000_000_000;
const rid = (n: number) => `00000000-0000-4000-8000-${String(n).padStart(12, '0')}`;
const TASKS = ['electric-circuits', 'conductors-insulators', 'circuit-diagrams', 'mains-electricity', 'systems-solve-problems']; // all in the Term 3 mock's scope

async function world() {
  const t = await openTestDb(); if (!t) return null;
  insertStudent(t, { id: 's1', created: NOW - 1000, grade: 6 });
  insertStudent(t, { id: 's2', created: NOW - 1000, grade: 6 });
  // 30 real multiple-choice questions over the five exam topics, version id = question number, the right answer is always "right"
  for (let i = 1; i <= 30; i++) {
    t.exec("INSERT INTO questions (id, task, kind, source, current_version_id, created_at) VALUES (?, ?, 'mcq', 'curated', ?, 1)", [`q${i}`, TASKS[i % 5], i]);
    t.exec("INSERT INTO question_versions (id, question_id, version_no, qkey, prompt, options, answer, explanation, author, status, created_at) VALUES (?, ?, 1, ?, ?, ?, 'right', '', 'seed', 'approved', 1)", [i, `q${i}`, `k${String(i).padStart(11, '0')}`, `Question ${i}?`, JSON.stringify(['right', 'wrong', 'also wrong'])]);
  }
  t.exec("INSERT INTO questions (id, task, kind, source, current_version_id, created_at) VALUES ('qe', 'electric-circuits', 'explain', 'curated', 31, 1)");
  t.exec("INSERT INTO question_versions (id, question_id, version_no, qkey, prompt, options, answer, explanation, author, status, created_at) VALUES (31, 'qe', 1, 'kexplain00001', 'Explain', '[\"p1\",\"p2\"]', 'p1|p2', '', 'seed', 'approved', 1)");
  return t;
}
const qk = (i: number) => `k${String(i).padStart(11, '0')}`;
/** What /api/attempts does with the decision: store a credited answer with its run. */
async function submit(t: TestDb, student: string, a: { v: number | null; chosen: string | null; claim: boolean; runId?: string; task: string; qkey: string | null }, now = NOW + 1000) {
  const d = await creditDecision(t.db, student, { versionId: a.v, chosen: a.chosen, clientCorrect: a.claim, runId: a.runId, task: a.task, qkey: a.qkey }, now);
  if (d.credited) t.exec("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at, qkey, question_version_id, chosen, run_id, marked_by, client_correct) VALUES (?, ?, 'general', 6, 'nst', ?, ?, 2, 0, ?, ?, ?, ?, ?, 'server', ?)", [student, a.task, a.task, d.marking.isCorrect ? 1 : 0, now, a.qkey, a.v, a.chosen, d.run?.id ?? null, a.claim ? 1 : 0]);
  return d;
}
const count = async (t: TestDb, sql: string, p: (string | number)[] = []) => Number((await t.db.all<{ n: number }>(sql, p))[0].n);
const startMock = (t: TestDb, student: string, n: number, over: Record<string, unknown> = {}) => startRun(t.db, student, { id: rid(n), kind: 'mock_test', grade: 6, subject: 'nst', scopeKey: 'nst-term3-mock', scopeLabel: 'Term 3 Mock Test', nItems: 20, ...over }, NOW);

test('FORGERY 1 (QA finding 18): an answer with no question, claiming correct, earns nothing and is not stored, however many are sent', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  for (let i = 0; i < 12; i++) {
    const d = await submit(t, 's1', { v: null, chosen: null, claim: true, task: 'gr12-differential-calculus-t2', qkey: null });
    assert.equal(d.credited, false);
    assert.equal(d.marking.isCorrect, false, 'the browser\'s "true" is not believed');
  }
  assert.equal(await count(t, 'SELECT COUNT(*) AS n FROM attempts'), 0);
});

test('FORGERY 2 (QA finding 18b): a finished 100% mock test made of forged answers has no answers and no score', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  assert.equal((await startMock(t, 's1', 1)).ok, true);
  for (let i = 0; i < 20; i++) {
    const d = await submit(t, 's1', { v: null, chosen: null, claim: true, task: 'electric-circuits', qkey: null, runId: rid(1) });
    assert.equal(d.credited, false);
  }
  // also forged with a question that is real but a choice that is not one of its options, and a claimed-correct explain item
  for (let i = 0; i < 5; i++) assert.equal((await submit(t, 's1', { v: 1, chosen: 'made up', claim: true, task: 'electric-circuits', qkey: qk(1), runId: rid(1) })).credited, false);
  assert.equal((await submit(t, 's1', { v: 31, chosen: 'p1|p2', claim: true, task: 'electric-circuits', qkey: 'kexplain00001', runId: rid(1) })).credited, false, 'a self-marked written answer never counts');
  const fin = await finishRun(t.db, 's1', rid(1), NOW + 5000);
  assert.ok(fin.ok);
  if (fin.ok) assert.deepEqual([fin.run.nAnswered, fin.run.nCorrect, fin.run.scorePct], [0, 0, 0]);
  const p = await buildProgress(t.db, 's1', NOW + 6000);
  assert.ok(!p?.tests.some((x) => x.scorePct > 0), 'no test with a score appears in /progress');
});

test('a legitimate mock test still counts: distinct real questions of its own scope, marked by the server', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  await startMock(t, 's1', 2);
  for (let i = 1; i <= 20; i++) {
    const d = await submit(t, 's1', { v: i, chosen: i <= 15 ? 'right' : 'wrong', claim: true, task: TASKS[i % 5], qkey: qk(i), runId: rid(2) });
    assert.equal(d.credited, true, `question ${i}`);
  }
  const fin = await finishRun(t.db, 's1', rid(2), NOW + 5000);
  assert.ok(fin.ok);
  if (fin.ok) assert.deepEqual([fin.run.nAnswered, fin.run.nCorrect, fin.run.scorePct], [20, 15, 75], 'the score is the server\'s, whatever the browser claimed');
});

test('a run only takes answers that belong in it: the exam\'s own topics, each question once, no more than the run holds, only the learner\'s own open run', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  await startMock(t, 's1', 3, { nItems: 6 });
  t.exec("INSERT INTO questions (id, task, kind, source, current_version_id, created_at) VALUES ('qx', 'gr12-differential-calculus-t2', 'mcq', 'curated', 40, 1)");
  t.exec("INSERT INTO question_versions (id, question_id, version_no, qkey, prompt, options, answer, explanation, author, status, created_at) VALUES (40, 'qx', 1, 'kfarfaraway01', 'Far?', '[\"right\",\"x\"]', 'right', '', 's', 'approved', 1)");
  const go = (v: number, task: string, qkey: string, runId = rid(3), student = 's1') => submit(t, student, { v, chosen: 'right', claim: true, task, qkey, runId });
  assert.equal((await go(40, 'gr12-differential-calculus-t2', 'kfarfaraway01')).credited, false, 'a Grade 12 topic cannot be in a Grade 6 mock test');
  assert.equal((await go(1, TASKS[1], qk(1))).credited, true);
  const dup = await go(1, TASKS[1], qk(1));
  assert.deepEqual([dup.credited, !dup.credited && dup.why], [false, 'not_in_run'], 'the same question twice');
  for (let i = 2; i <= 6; i++) assert.equal((await go(i, TASKS[i % 5], qk(i))).credited, true);
  assert.equal((await go(7, TASKS[2], qk(7))).credited, false, 'a 7th answer in a 6-question run');
  assert.equal((await go(8, TASKS[3], qk(8), rid(3), 's2')).credited, true, 'another learner\'s answer with this run id is not in this run: it is an ordinary answer');
  assert.equal(await count(t, "SELECT COUNT(*) AS n FROM attempts WHERE run_id = ?", [rid(3)]), 6);
  assert.equal(await count(t, "SELECT COUNT(*) AS n FROM attempts WHERE student_id = 's2' AND run_id IS NOT NULL"), 0);
  assert.equal(await runContext(t.db, 's2', rid(3), NOW + 1), null);
  const fin = await finishRun(t.db, 's1', rid(3), NOW + 5000);
  assert.ok(fin.ok);
  assert.equal(await runContext(t.db, 's1', rid(3), NOW + 6000), null, 'a finished run takes no more answers');
});

test('a review run takes only the learner\'s own review cards, and a mock test or exam never feeds the review schedule', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  await startRun(t.db, 's1', { id: rid(4), kind: 'review', grade: 6, subject: 'review', scopeKey: 'spaced-review', nItems: 10 }, NOW);
  t.exec("INSERT INTO review_items (student_id, qkey, task, subject, section, box, due_day, streak_correct, created_at, updated_at) VALUES ('s1', ?, 'electric-circuits', 'nst', 'general', 1, 1, 0, 1, 1)", [qk(5)]);
  assert.equal((await submit(t, 's1', { v: 5, chosen: 'right', claim: true, task: TASKS[0], qkey: qk(5), runId: rid(4) })).credited, true, 'a card the learner has');
  assert.equal((await submit(t, 's1', { v: 6, chosen: 'right', claim: true, task: TASKS[1], qkey: qk(6), runId: rid(4) })).credited, false, 'a question that is not one of their cards cannot be farmed through a review');
  await startMock(t, 's1', 5);
  const run = await runContext(t.db, 's1', rid(5), NOW + 1);
  assert.equal(feedsReview(run), false);
  assert.equal(feedsReview(await runContext(t.db, 's1', rid(4), NOW + 1)), true);
  assert.equal(feedsReview(null), true);
  assert.equal(await runAccepts(t.db, 's1', run!, { task: TASKS[0], qkey: null }), false, 'no question key, no place in a run');
});

test('answers marked by the browser in the past (marked_by = client) no longer count anywhere: runs, topic progress, the progress page', async (t0) => {
  const t = await world(); if (!t) return t0.skip('node:sqlite unavailable');
  const put = (marked: string | null, ok: number, run: string | null = null) => t.exec("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at, qkey, marked_by, run_id) VALUES ('s1', 'electric-circuits', 'general', 6, 'nst', 'electric-circuits', ?, 0, 0, ?, 'kx', ?, ?)", [ok, NOW - 5000, marked, run]);
  await startMock(t, 's1', 6);
  for (let i = 0; i < 12; i++) put('client', 1, rid(6)); // forged, old rows
  for (let i = 0; i < 4; i++) put('server', i % 2, rid(6));
  put(null, 1); // an old row from before server marking: kept
  const fin = await finishRun(t.db, 's1', rid(6), NOW);
  assert.ok(fin.ok);
  if (fin.ok) assert.deepEqual([fin.run.nAnswered, fin.run.nCorrect], [4, 2], 'only the server-marked answers are counted');
  assert.equal(await refreshForRun(t.db, 's1', ['electric-circuits'], NOW + 1), 1);
  const row = (await t.db.all<{ attempts: number; correct: number }>("SELECT attempts, correct FROM topic_progress WHERE student_id = 's1'"))[0];
  assert.deepEqual([Number(row.attempts), Number(row.correct)], [5, 3], 'topic progress: 4 server-marked + the old unmarked row, never the client-marked ones');
});

test('the browser can no longer retire review cards it wants gone (they count as remembered for good): only cards whose question no longer exists', () => {
  const src = fs.readFileSync('src/app/api/review/retire/route.ts', 'utf8');
  assert.ok(src.includes("q.status = 'active'") && src.includes('const stale = qkeys.filter((k) => !live.has(k));'));
  assert.ok(src.indexOf('const stale') < src.indexOf('UPDATE review_items SET retired_at'), 'the filter comes before the update');
});

test('REAL HISTORY IS SAFE: old answers with marked_by NULL (every real child\'s history, from before migration 0018) still count in runs, topic progress, the progress page, the parent numbers and the teacher view; only marked_by = client is excluded', async (t0) => {
  const { openSchoolsDb, addStudent: addLearner, addTeacher, newTestId } = await import('./schools/testDb');
  const { createClass, joinClass } = await import('./schools/classes');
  const { buildClassProgress } = await import('./schools/classProgress');
  const { withActivity, listChildren } = await import('./parents/links');
  const t = await openSchoolsDb(); if (!t) return t0.skip('node:sqlite unavailable');
  for (const m of ['0004_parent_consent.sql', '0015_parents.sql', '0017_parent_summary.sql']) t.raw.exec(fs.readFileSync(`migrations/${m}`, 'utf8'));
  const teacher = addTeacher(t, 't@example.invalid').userId;
  const c = await createClass(t.db, teacher, { name: '6B NST', grade: 6, subjects: ['nst'] }, NOW, newTestId);
  assert.ok(c.ok);
  const cls = (c as Extract<typeof c, { ok: true }>).class;
  const kid = addLearner(t, { nickname: 'Anfervio' });
  assert.ok((await joinClass(t.db, kid, cls.joinCode, NOW - 40 * 86_400_000)).ok);
  const put = (marked: string | null, ok: number, at: number, run: string | null = null) => t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at, marked_by, run_id) VALUES (?, 'electric-circuits', 'general', 6, 'nst', 'electric-circuits', ?, 2, 0, ?, ?, ?)").run(kid, ok, at, marked, run);
  const old = NOW - 3 * 86_400_000;
  for (let i = 0; i < 20; i++) put(null, i < 14 ? 1 : 0, old + i * 60_000); // 20 old answers, 14 right, NULL: how every real child's history looks
  for (let i = 0; i < 10; i++) put('client', 1, old + 3_600_000 + i * 60_000); // forged rows must not add to it
  // topic progress and the progress page
  assert.equal(await refreshForRun(t.db, kid, ['electric-circuits'], NOW), 1);
  const tp = (await t.db.all<{ attempts: number; correct: number }>('SELECT attempts, correct FROM topic_progress WHERE student_id = ?', [kid]))[0];
  assert.deepEqual([Number(tp.attempts), Number(tp.correct)], [20, 14], 'the NULL rows count, the client rows do not');
  const p = await buildProgress(t.db, kid, NOW);
  assert.ok(p);
  const topic = p.subjects.flatMap((s) => s.topics).find((x) => x.task === 'electric-circuits');
  assert.equal(topic?.attempts, 20);
  assert.equal(p.consistency.daysPractisedLast14, 1, 'the day counts (a day with only forged rows would not)');
  assert.equal((p.recentSessions ?? []).reduce((n, s) => n + s.answered, 0), 20, 'recent activity lists the 20 real answers');
  // a run made of NULL rows (an old finished run is already stored; a still-open one finishes from them)
  t.raw.prepare("INSERT INTO runs (id, student_id, kind, grade, subject, scope_key, scope_label, status, started_at, n_items, n_answered, n_correct) VALUES (?, ?, 'practice', 6, 'nst', 'electric-circuits', 'x', 'open', ?, 10, 0, 0)").run(rid(90), kid, NOW - 1000);
  for (let i = 0; i < 4; i++) put(null, 1, NOW - 900, rid(90));
  const fin = await finishRun(t.db, kid, rid(90), NOW);
  assert.ok(fin.ok);
  if (fin.ok) assert.deepEqual([fin.run.nAnswered, fin.run.nCorrect], [4, 4]);
  // the parent's numbers and the teacher's view
  t.raw.prepare("INSERT INTO parent_links (user_id, student_id, method, linked_at) VALUES (?, ?, 'pin', 1)").run(teacher, kid);
  const act = (await withActivity(t.db, await listChildren(t.db, teacher), NOW))[0].activity!;
  assert.equal(act.answersThisWeek, 24, '20 NULL rows + the 4 run rows in the week; the 10 client rows are not counted');
  const cp = await buildClassProgress(t.db, teacher, cls.id, undefined, NOW);
  assert.ok(cp.ok);
  if (cp.ok) {
    const l = cp.progress.learners.find((x) => x.nickname === 'Anfervio')!;
    assert.equal(l.topicsPractised, 1, 'the teacher sees the learner\'s practised topic');
    assert.ok(l.avgAccuracyPct !== null && l.avgAccuracyPct > 0);
    assert.notEqual(l.lastPractisedDay, null);
  }
});
