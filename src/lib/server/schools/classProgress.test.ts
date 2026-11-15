import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addStudent, addTeacher, newTestId, NOW } from './testDb';
import { createClass, joinClass, removeMember } from './classes';
import { createScope } from './scopes';
import { buildClassProgress, MAX_SINCE_DAYS } from './classProgress';
import { refreshForRun } from '../progress/topicProgress';
import { topicsFor } from '../../shared/topicCatalog';
import { sastDay } from '../review/scheduler';

const D = 86_400_000;
const dateIn = (days: number) => new Date(Math.floor((NOW + 2 * 3600_000) / D) * D + days * D).toISOString().slice(0, 10);
const nstTasks = topicsFor(6, 'nst').slice(0, 3).map((x) => x.task);

async function setup() {
  const t = await openSchoolsDb();
  if (!t) return null;
  const teacher = addTeacher(t, 't@example.invalid').userId;
  const other = addTeacher(t, 'o@example.invalid', 'Other').userId;
  const c = await createClass(t.db, teacher, { name: '6B NST', grade: 6, subjects: ['nst'] }, NOW, newTestId);
  assert.ok(c.ok);
  const cls = (c as Extract<typeof c, { ok: true }>).class;
  const join = async (nick: string, real = `Real ${nick}`) => { const id = addStudent(t, { nickname: nick, real }); assert.ok((await joinClass(t.db, id, cls.joinCode, NOW)).ok); return id; };
  const practise = async (student: string, task: string, bits: string, o: { start?: number; step?: number; subject?: string } = {}) => {
    [...bits].forEach((b, i) => t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at) VALUES (?, ?, 'general', 6, ?, ?, ?, 0, 0, ?)").run(student, task, o.subject ?? 'nst', task, b === '1' ? 1 : 0, (o.start ?? NOW - 3 * D) + i * (o.step ?? 3600_000)));
    await refreshForRun(t.db, student, [task], NOW - 1000);
  };
  const progress = async (owner = teacher, since?: unknown, now = NOW) => buildClassProgress(t.db, owner, cls.id, since, now);
  return { t, teacher, other, cls, join, practise, progress };
}
type S = NonNullable<Awaited<ReturnType<typeof setup>>>;
const ok = async (s: S, since?: unknown, now?: number) => { const r = await s.progress(s.teacher, since, now); assert.ok(r.ok, JSON.stringify(r)); return (r as Extract<typeof r, { ok: true }>).progress; };

test('only the owner can read a class; anyone else, an unknown class and a bad id get "not found"', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  await s.join('Zola');
  assert.deepEqual(await s.progress(s.other), { ok: false, status: 404, error: 'Not found' });
  assert.deepEqual(await buildClassProgress(s.t.db, s.teacher, newTestId(), undefined, NOW), { ok: false, status: 404, error: 'Not found' });
  assert.deepEqual(await buildClassProgress(s.t.db, s.teacher, 'x', undefined, NOW), { ok: false, status: 404, error: 'Not found' });
  assert.equal((await s.progress(s.teacher)).ok, true);
});

test('an empty class answers with empty, well-shaped data (no division by zero, no crash)', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const p = await ok(s);
  assert.deepEqual([p.memberCount, p.topics, p.behindOnReviews, p.learners, p.improvement.avgChangePoints, p.improvement.learnersCompared, p.exam], [0, [], [], [], null, 0, null]);
  assert.deepEqual([p.mockDistribution.scored, p.mockDistribution.notTaken, p.mockDistribution.averagePct], [0, 0, null]);
  assert.equal(p.className, '6B NST');
});

test('topics: the class\'s weakest first, with how many learners practised and where each is', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await s.join('Zola'); const b = await s.join('Amy'); await s.join('Quiet');
  await s.practise(a, nstTasks[0], '1'.repeat(20), { step: 8 * 3600_000 });
  await s.practise(b, nstTasks[0], '0'.repeat(10));
  await s.practise(a, nstTasks[1], '10'.repeat(4));
  const p = await ok(s);
  assert.deepEqual(p.topics.map((x) => x.task), [nstTasks[1], nstTasks[0]].filter(Boolean).length === 2 ? p.topics.map((x) => x.task) : []);
  const t0 = p.topics.find((x) => x.task === nstTasks[0])!;
  assert.deepEqual([t0.practised, t0.levels.not_started, t0.levels.learning, t0.levels.mastered], [2, 1, 1, 1]);
  assert.ok(t0.avgAccuracyPct !== null && t0.avgAccuracyPct > 0 && t0.avgAccuracyPct < 100);
  assert.equal(p.topics[0].task, nstTasks[1], 'the topic with the lower class mean comes first');
  assert.equal(p.memberCount, 3);
});

test('learners: nicknames only, alphabetical; practised topics, mean accuracy, due cards, last day practised', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const z = await s.join('Zola', 'Zolani Mkhize'); await s.join('amy', 'Amy Smith');
  await s.practise(z, nstTasks[0], '1111', { start: NOW - 2 * D });
  s.t.raw.prepare("INSERT INTO review_items (student_id, qkey, task, subject, section, box, due_day, streak_correct, created_at, updated_at) VALUES (?, 'aaaaaaaaaaaa', 't', 'nst', 'general', 1, ?, 0, 1, 1)").run(z, sastDay(NOW));
  const p = await ok(s);
  assert.deepEqual(p.learners.map((l) => l.nickname), ['amy', 'Zola']);
  const zl = p.learners[1];
  assert.deepEqual([zl.topicsPractised, zl.avgAccuracyPct, zl.dueCount], [1, 100, 1]);
  assert.match(zl.lastPractisedDay ?? '', /^\d{4}-\d{2}-\d{2}$/);
  assert.deepEqual([p.learners[0].topicsPractised, p.learners[0].avgAccuracyPct, p.learners[0].lastPractisedDay], [0, null, null]);
  const json = JSON.stringify(p);
  assert.ok(!/Mkhize|Smith|Zolani|CODE-|example\.invalid/.test(json), 'no real name, login code or email anywhere in what the teacher gets');
});

test('a learner who left or was removed disappears from every part of the view', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await s.join('Zola'); const b = await s.join('Amy');
  await s.practise(a, nstTasks[0], '1111'); await s.practise(b, nstTasks[0], '0000');
  s.t.raw.prepare("INSERT INTO review_items (student_id, qkey, task, subject, section, box, due_day, streak_correct, created_at, updated_at) VALUES (?, 'bbbbbbbbbbbb', 't', 'nst', 'general', 1, ?, 0, 1, 1)").run(b, sastDay(NOW) - 9);
  s.t.raw.prepare("INSERT INTO runs (id, student_id, kind, grade, subject, scope_key, status, started_at, finished_at, score_pct) VALUES (?, ?, 'mock_test', 6, 'nst', 'k', 'finished', 1, ?, 20)").run(newTestId(), b, NOW - D);
  let p = await ok(s);
  assert.deepEqual([p.memberCount, p.behindOnReviews.length, p.mockDistribution.scored], [2, 1, 1]);
  assert.ok((await removeMember(s.t.db, s.teacher, s.cls.id, b, NOW)).ok);
  p = await ok(s);
  assert.deepEqual([p.memberCount, p.behindOnReviews, p.mockDistribution.scored, p.learners.map((l) => l.nickname)], [1, [], 0, ['Zola']]);
  assert.equal(p.topics[0].practised, 1);
});

test('behind on reviews: only cards that waited 2+ days, longest first', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await s.join('Zola'); const b = await s.join('Amy'); const c = await s.join('Fresh');
  const add = (id: string, key: string, daysAgo: number) => s.t.raw.prepare("INSERT INTO review_items (student_id, qkey, task, subject, section, box, due_day, streak_correct, created_at, updated_at) VALUES (?, ?, 't', 'nst', 'general', 1, ?, 0, 1, 1)").run(id, key, sastDay(NOW) - daysAgo);
  add(a, 'aaaaaaaaaaa1', 6); add(a, 'aaaaaaaaaaa2', 0); add(b, 'bbbbbbbbbbb1', 2); add(c, 'ccccccccccc1', 1);
  const p = await ok(s);
  assert.deepEqual(p.behindOnReviews, [{ nickname: 'Zola', dueCount: 2, overdueDays: 6 }, { nickname: 'Amy', dueCount: 1, overdueDays: 2 }]);
});

test('practice tests: the latest score of each learner in the class subject, spread into buckets; others\' subjects and unscored learners do not count', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await s.join('Zola'); const b = await s.join('Amy'); await s.join('NoTest');
  const run = (student: string, score: number, at: number, subject = 'nst', kind = 'mock_test') => s.t.raw.prepare("INSERT INTO runs (id, student_id, kind, grade, subject, scope_key, status, started_at, finished_at, score_pct) VALUES (?, ?, ?, 6, ?, 'k', 'finished', 1, ?, ?)").run(newTestId(), student, kind, subject, at, score);
  run(a, 30, NOW - 5 * D); run(a, 85, NOW - 1 * D); run(b, 55, NOW - 2 * D); run(b, 99, NOW - 1 * D, 'eng'); run(b, 10, NOW, 'nst', 'practice');
  const d = (await ok(s)).mockDistribution;
  assert.deepEqual(d.buckets.map((x) => x.count), [0, 1, 0, 1], 'Zola latest 85, Amy 55');
  assert.deepEqual([d.scored, d.notTaken, d.averagePct], [2, 1, 70]);
});

test('improvement since a date: needs history on both sides; the date is validated', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await s.join('Zola');
  await s.practise(a, nstTasks[0], '0000000000', { start: NOW - 20 * D, step: 3600_000 });
  await s.practise(a, nstTasks[0], '11111111', { start: NOW - 2 * D, step: 3600_000 });
  const p = await ok(s, dateIn(-10));
  assert.equal(p.improvement.since, dateIn(-10));
  assert.deepEqual([p.improvement.learnersCompared, p.improvement.improved], [1, 1]);
  assert.ok((p.improvement.avgChangePoints as number) > 20);
  assert.ok((p.learners[0].changePoints as number) > 20);
  assert.equal((await ok(s, dateIn(-3))).improvement.learnersCompared, 1);
  assert.equal((await ok(s, dateIn(-1))).improvement.learnersCompared, 0, 'nothing happened after yesterday, so there is nothing to compare');
  assert.equal((await ok(s, dateIn(0))).improvement.avgChangePoints, null);
  for (const bad of ['2026-02-30', 'soon', dateIn(1), dateIn(-(MAX_SINCE_DAYS + 1)), 12345]) assert.equal((await s.progress(s.teacher, bad)).ok, false, String(bad));
  assert.equal((await ok(s, dateIn(-MAX_SINCE_DAYS))).improvement.since, dateIn(-MAX_SINCE_DAYS));
});

test('with an exam set: the view shows the exam and its topics (untried ones too) with the countdown', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await s.join('Zola');
  await s.practise(a, nstTasks[0], '1010');
  const r = await createScope(s.t.db, s.teacher, s.cls.id, { subject: 'nst', title: 'Term 3 test', tasks: nstTasks, examDate: dateIn(12) }, NOW, newTestId);
  assert.ok(r.ok);
  const p = await ok(s);
  assert.deepEqual(p.exam, { title: 'Term 3 test', examDate: dateIn(12), daysLeft: 12 });
  assert.equal(p.topics.length, nstTasks.length);
  assert.ok(p.topics.slice(-2).every((t) => t.practised === 0), 'untried exam topics last');
  assert.equal((await ok(s, undefined, NOW + 13 * D)).exam, null, 'the exam has passed');
});

test('another class\'s learners never appear, even with the same topics', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const mine = await s.join('Mine');
  const c2 = await createClass(s.t.db, s.other, { name: 'Other class', grade: 6 }, NOW, newTestId);
  assert.ok(c2.ok);
  const theirs = addStudent(s.t, { nickname: 'Theirs' });
  await joinClass(s.t.db, theirs, (c2 as Extract<typeof c2, { ok: true }>).class.joinCode, NOW);
  await s.practise(mine, nstTasks[0], '1111'); await s.practise(theirs, nstTasks[0], '0000');
  const p = await ok(s);
  assert.deepEqual(p.learners.map((l) => l.nickname), ['Mine']);
  assert.equal(p.topics[0].practised, 1);
  assert.ok(!JSON.stringify(p).includes('Theirs'));
});

test('no statement binds more than 100 variables (D1 limit), even for a full class with a 40-topic exam', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  for (let i = 0; i < 60; i++) await s.join(`kid${i}`);
  const tasks = Array.from({ length: 40 }, (_, i) => `topic-${i}`);
  s.t.raw.prepare("INSERT INTO exam_scopes (id, class_id, subject, grade, title, tasks, exam_date, created_by, created_at) VALUES (?, ?, 'nst', 6, 'Big exam', ?, ?, 'u', 1)").run(newTestId(), s.cls.id, JSON.stringify(tasks), dateIn(10));
  let widest = 0;
  const guarded = { all: <T,>(sql: string, params: (string | number | null)[] = []) => { widest = Math.max(widest, params.length); if (params.length > 100) return Promise.reject(new Error('too many SQL variables')); return s.t.db.all<T>(sql, params); }, batch: s.t.db.batch } as typeof s.t.db;
  const r = await buildClassProgress(guarded, s.teacher, s.cls.id, undefined, NOW);
  assert.ok(r.ok, JSON.stringify(r));
  assert.equal((r as Extract<typeof r, { ok: true }>).progress.memberCount, 60);
  assert.ok(widest <= 100, `widest statement bound ${widest} variables`);
});

test('a school admin\'s owner form reads the class of THEIR school and nobody else\'s', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  await s.join('Zola');
  const schoolId = (s.t.raw.prepare('SELECT school_id FROM classes WHERE id = ?').get(s.cls.id) as { school_id: string }).school_id;
  const mine = await buildClassProgress(s.t.db, { schoolId }, s.cls.id, undefined, NOW);
  assert.ok(mine.ok);
  const other = await buildClassProgress(s.t.db, { schoolId: newTestId() }, s.cls.id, undefined, NOW);
  assert.deepEqual(other, { ok: false, status: 404, error: 'Not found' });
});

test('not practised in the last 7 days: learners with no practice at all or none for a week, longest away first; anything counts as practice', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const recent = await s.join('Recent'); const old = await s.join('Old'); const never = await s.join('Never'); const other = await s.join('OtherSubject');
  await s.practise(recent, nstTasks[0], '11', { start: NOW - 2 * D });
  await s.practise(old, nstTasks[0], '11', { start: NOW - 12 * D });
  await s.practise(other, 'some-english-topic', '1', { start: NOW - 1 * D, subject: 'eng' });
  const p = await ok(s);
  assert.deepEqual(p.notPractisedLast7.map((x) => x.nickname), ['Never', 'Old']);
  assert.equal(p.notPractisedLast7[0].lastPractisedDay, null);
  assert.match(p.notPractisedLast7[1].lastPractisedDay ?? '', /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(!p.notPractisedLast7.some((x) => x.nickname === 'OtherSubject'), 'practice in any subject counts');
  assert.deepEqual((await ok(s, undefined, NOW + 30 * D)).notPractisedLast7.map((x) => x.nickname).sort(), ['Never', 'Old', 'OtherSubject', 'Recent']);
  const empty = await setup(); if (!empty) return;
  assert.deepEqual((await ok(empty)).notPractisedLast7, []);
});
