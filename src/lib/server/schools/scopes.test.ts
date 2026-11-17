import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addStudent, addTeacher, newTestId, NOW } from './testDb';
import { createClass, joinClass, leaveClass, archiveClass } from './classes';
import { MAX_ACTIVE_SCOPES, archiveScope, createScope, listScopes, scopesForStudent } from './scopes';
import { topicsFor, subjectsForGrade, subjectTitleOf } from '../../shared/topicCatalog';
import { buildProgress } from '../progress/progressApi';
import { refreshForRun } from '../progress/topicProgress';
import { sastDayNumber } from '../../shared/progressMeasures';

const D = 86_400_000;
const dateIn = (days: number) => new Date(Math.floor((NOW + 2 * 3600_000) / D) * D + days * D).toISOString().slice(0, 10);

async function setup() {
  const t = await openSchoolsDb();
  if (!t) return null;
  const teacher = addTeacher(t, 't@example.invalid').userId;
  const other = addTeacher(t, 'o@example.invalid', 'Other').userId;
  const c = await createClass(t.db, teacher, { name: '6B NST', grade: 6, subjects: ['nst'] }, NOW, newTestId);
  assert.ok(c.ok);
  const cls = (c as Extract<typeof c, { ok: true }>).class;
  const tasks = topicsFor(6, 'nst').slice(0, 4).map((x) => x.task);
  return { t, teacher, other, cls, tasks, input: { subject: 'nst', title: 'Term 3 test', tasks, examDate: dateIn(10) } };
}
type S = NonNullable<Awaited<ReturnType<typeof setup>>>;
const mk = async (s: S, over: Record<string, unknown> = {}) => createScope(s.t.db, s.teacher, s.cls.id, { ...s.input, ...over }, NOW, newTestId);

test('the topic catalog lists real topics per grade and subject', () => {
  assert.equal(subjectTitleOf(6, 'nst'), 'Natural Sciences & Technology');
  assert.equal(subjectTitleOf(6, 'nope'), null);
  const nst = topicsFor(6, 'nst');
  assert.ok(nst.length >= 5 && nst.every((x) => x.task && x.label));
  assert.ok(nst.some((x) => x.task === 'electric-circuits'));
  assert.deepEqual(topicsFor(6, 'nope'), []);
  const subjects = subjectsForGrade(6);
  assert.ok(subjects.some((x) => x.code === 'nst') && new Set(subjects.map((x) => x.title)).size === subjects.length, 'one entry per subject title');
});

test('a teacher sets an exam scope for their class; the list is soonest first', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const later = await mk(s, { title: 'Later exam', examDate: dateIn(30) });
  const soon = await mk(s);
  assert.ok(later.ok && soon.ok);
  const list = (await listScopes(s.t.db, s.teacher, s.cls.id))!;
  assert.deepEqual(list.map((x) => x.title), ['Term 3 test', 'Later exam']);
  assert.deepEqual([list[0].grade, list[0].subject, list[0].tasks], [6, 'nst', s.tasks]);
  assert.equal(await listScopes(s.t.db, s.other, s.cls.id), null, 'another teacher cannot see them');
});

test('createScope validates the subject, the topics, the name and the date', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const bad: Record<string, unknown>[] = [
    { subject: 'nope' }, { subject: 'eng' /* tasks belong to nst */ }, { title: '' }, { title: 'ab' }, { tasks: [] }, { tasks: 'x' }, { tasks: ['not-a-topic'] }, { tasks: [...s.tasks, 'gr9-whole-numbers-t1'] },
    { tasks: Array.from({ length: 41 }, (_, i) => `t${i}`) }, { examDate: '' }, { examDate: '2026-02-30' }, { examDate: 'soon' }, { examDate: dateIn(-1) }, { examDate: dateIn(401) }, { examDate: 20261128 },
  ];
  for (const b of bad) assert.equal((await mk(s, b)).ok, false, JSON.stringify(b).slice(0, 60));
  assert.equal((await s.t.db.all('SELECT 1 FROM exam_scopes')).length, 0);
  assert.ok((await mk(s, { examDate: dateIn(0) })).ok, 'today is allowed');
  assert.ok((await mk(s, { examDate: dateIn(400) })).ok, '400 days ahead is allowed');
});

test('duplicate topics are merged; at most MAX_ACTIVE_SCOPES exams at once; only the owner can set or remove one; archived classes take none', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const r = await mk(s, { tasks: [s.tasks[0], s.tasks[0], s.tasks[1]] });
  assert.ok(r.ok && r.scope.tasks.length === 2);
  for (let i = 1; i < MAX_ACTIVE_SCOPES; i++) assert.ok((await mk(s, { title: `Exam ${i}x` })).ok);
  const over = await mk(s, { title: 'One more' });
  assert.deepEqual([over.ok, !over.ok && over.status], [false, 409]);
  assert.equal((await createScope(s.t.db, s.other, s.cls.id, s.input, NOW, newTestId)).ok, false, 'not their class');
  assert.equal((await archiveScope(s.t.db, s.other, s.cls.id, r.ok ? r.scope.id : '', NOW)).ok, false);
  assert.ok((await archiveScope(s.t.db, s.teacher, s.cls.id, r.ok ? r.scope.id : '', NOW)).ok);
  assert.ok((await mk(s, { title: 'Room again' })).ok);
  await archiveClass(s.t.db, s.teacher, s.cls.id, NOW);
  assert.deepEqual([(await mk(s)).ok], [false]);
});

test('scopesForStudent: only for a learner still in an active class, not archived, not past, nearest first', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const stu = addStudent(s.t, { nickname: 'Z' });
  const outsider = addStudent(s.t, { nickname: 'Out' });
  await mk(s, { title: 'Far', examDate: dateIn(40) });
  const near = await mk(s, { title: 'Near', examDate: dateIn(5) });
  await joinClass(s.t.db, stu, s.cls.joinCode, NOW);
  assert.deepEqual((await scopesForStudent(s.t.db, stu, NOW)).map((x) => x.title), ['Near', 'Far']);
  assert.deepEqual(await scopesForStudent(s.t.db, outsider, NOW), []);
  assert.deepEqual((await scopesForStudent(s.t.db, stu, NOW + 10 * D)).map((x) => x.title), ['Far'], 'the past exam drops off');
  await archiveScope(s.t.db, s.teacher, s.cls.id, near.ok ? near.scope.id : '', NOW);
  assert.deepEqual((await scopesForStudent(s.t.db, stu, NOW)).map((x) => x.title), ['Far']);
  await leaveClass(s.t.db, stu, s.cls.id, NOW);
  assert.deepEqual(await scopesForStudent(s.t.db, stu, NOW), [], 'left the class');
});

// ---- the learner's progress uses the class exam
const seedPractice = async (s: S, student: string, task: string, bits: string, run: string) => {
  [...bits].forEach((b, i) => s.t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at, run_id) VALUES (?, ?, 'general', 6, 'nst', ?, ?, 0, 0, ?, ?)").run(student, task, task, b === '1' ? 1 : 0, NOW - 4 * D + i * 6 * 3600_000, run));
  await refreshForRun(s.t.db, student, [task], NOW - 1000);
};

test('progress: a learner in a class with an exam sees it with the date, days left, readiness and a daily plan', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const stu = addStudent(s.t, { nickname: 'Z' });
  await mk(s, { examDate: dateIn(9) });
  await joinClass(s.t.db, stu, s.cls.joinCode, NOW);
  await seedPractice(s, stu, s.tasks[0], '1'.repeat(20), newTestId());
  await seedPractice(s, stu, s.tasks[1], '10'.repeat(5), newTestId());
  const p = (await buildProgress(s.t.db, stu, NOW))!;
  const e = p.exam!;
  assert.deepEqual([e.setByTeacher, e.examDate, e.daysLeft, e.label, e.topicsTotal, e.topicsPractised], [true, dateIn(9), 9, 'Term 3 test', 4, 2]);
  assert.match(e.scopeKey, /^class-scope:/);
  assert.equal(e.plan?.headline, '9 days to your exam');
  const titles = e.plan!.steps.map((x) => x.title).join(' | ');
  assert.match(titles, /Practise/);
  assert.ok(e.plan!.steps.length <= 4);
});

test('progress: the plan starts with due review cards and adds a practice test close to the exam', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const stu = addStudent(s.t, { nickname: 'Z' });
  await mk(s, { examDate: dateIn(5) });
  await joinClass(s.t.db, stu, s.cls.joinCode, NOW);
  s.t.raw.exec('CREATE TABLE IF NOT EXISTS questions (id TEXT PRIMARY KEY, status TEXT)'); // the due-card count joins questions, as in production
  s.t.raw.prepare("INSERT INTO review_items (student_id, qkey, task, subject, section, box, due_day, streak_correct, created_at, updated_at) VALUES (?, 'aaaaaaaaaaaa', 't', 'nst', 'general', 1, 1, 0, 1, 1)").run(stu);
  const p = (await buildProgress(s.t.db, stu, NOW))!;
  const kinds = p.exam!.plan!.steps.map((x) => x.kind);
  assert.equal(kinds[0], 'review');
  assert.ok(kinds.includes('mock'), 'a practice test is due 5 days out when none was taken');
  assert.equal(p.exam!.readinessPct, null, 'nothing practised yet, so no readiness number');
  // a finished practice test in the subject counts as the latest mock and removes the suggestion
  s.t.raw.prepare("INSERT INTO runs (id, student_id, kind, grade, subject, scope_key, scope_label, status, started_at, finished_at, n_items, n_answered, n_correct, score_pct) VALUES (?, ?, 'mock_test', 6, 'nst', 'nst-term3-mock', 'm', 'finished', ?, ?, 20, 20, 14, 70)").run(newTestId(), stu, NOW - 2 * D - 1000, NOW - 2 * D);
  const q = (await buildProgress(s.t.db, stu, NOW))!;
  assert.equal(q.exam!.latestMock?.scorePct, 70);
  assert.ok(!q.exam!.plan!.steps.some((x) => x.kind === 'mock'));
});

test('progress: no class exam means the built-in scope with no date and no plan; a passed or archived exam does not show; leaving the class removes it', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const stu = addStudent(s.t, { nickname: 'Z' });
  const sc = await mk(s);
  await joinClass(s.t.db, stu, s.cls.joinCode, NOW);
  assert.equal((await buildProgress(s.t.db, stu, NOW))!.exam?.setByTeacher, true);
  assert.equal((await buildProgress(s.t.db, stu, NOW + 11 * D))!.exam, null, 'past, and nothing practised: no card');
  await archiveScope(s.t.db, s.teacher, s.cls.id, sc.ok ? sc.scope.id : '', NOW);
  assert.equal((await buildProgress(s.t.db, stu, NOW))!.exam, null);
  const sc2 = await mk(s, { title: 'Again' });
  assert.ok(sc2.ok);
  await leaveClass(s.t.db, stu, s.cls.id, NOW);
  assert.equal((await buildProgress(s.t.db, stu, NOW))!.exam, null);
  assert.ok(sastDayNumber(NOW) > 0);
});

test('progress: a learner who is not in the class never sees its exam', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const member = addStudent(s.t, { nickname: 'In' });
  const outsider = addStudent(s.t, { nickname: 'Out' });
  await mk(s);
  await joinClass(s.t.db, member, s.cls.joinCode, NOW);
  assert.ok((await buildProgress(s.t.db, member, NOW))!.exam);
  assert.equal((await buildProgress(s.t.db, outsider, NOW))!.exam, null);
});

