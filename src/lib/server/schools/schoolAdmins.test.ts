import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addStudent, addTeacher, addUser, newTestId, NOW, type SchoolsTestDb } from './testDb';
import { createClass, joinClass } from './classes';
import { createScope } from './scopes';
import { applyAsTeacher, decideApplication } from './teachers';
import { MAX_SCHOOL_ADMINS, appointSchoolAdmin, buildSchoolProgress, canAdminSchool, decideAsSchoolAdmin, listSchoolsForAdmin, pendingForSchool, revokeSchoolAdmin, schoolsOfAdmin } from './schoolAdmins';
import { refreshForRun } from '../progress/topicProgress';
import { topicsFor } from '../../shared/topicCatalog';

const D = 86_400_000;
const roles = (t: SchoolsTestDb, id: string) => (t.raw.prepare('SELECT role FROM user_roles WHERE user_id = ? ORDER BY role').all(id) as { role: string }[]).map((r) => r.role);
const school = (t: SchoolsTestDb, name: string, province: string | null = 'Western Cape') => {
  const id = newTestId();
  t.raw.prepare("INSERT INTO schools (id, name, province, created_at, created_by) VALUES (?, ?, ?, 1, 'admin')").run(id, name, province);
  return id;
};

async function setup() {
  const t = await openSchoolsDb();
  if (!t) return null;
  const bay = school(t, 'Bay Primary');
  const hill = school(t, 'Hill High', 'Gauteng');
  const bayAdminUser = addUser(t, 'head@bay.example.invalid');
  const hillAdminUser = addUser(t, 'head@hill.example.invalid');
  assert.ok((await appointSchoolAdmin(t.db, bay, 'head@bay.example.invalid', 'owner@example.invalid', NOW)).ok);
  assert.ok((await appointSchoolAdmin(t.db, hill, 'HEAD@hill.example.invalid ', 'owner@example.invalid', NOW)).ok);
  return { t, bay, hill, bayAdmin: { userId: bayAdminUser, email: 'head@bay.example.invalid' }, hillAdmin: { userId: hillAdminUser, email: 'head@hill.example.invalid' } };
}
type S = NonNullable<Awaited<ReturnType<typeof setup>>>;
const apply = async (s: S, email: string, schoolName: string, province = 'Western Cape') => {
  const u = addUser(s.t, email);
  assert.ok((await applyAsTeacher(s.t.db, u, { saceNumber: '12345678', schoolName, province }, NOW)).ok);
  return u;
};

test('appointing: needs a known school and an adult who has signed in; grants the role and the school; the email is normalised', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  assert.deepEqual(roles(s.t, s.bayAdmin.userId), ['parent', 'school_admin']);
  assert.deepEqual((await schoolsOfAdmin(s.t.db, s.bayAdmin.userId)).map((x) => x.name), ['Bay Primary']);
  assert.deepEqual((await schoolsOfAdmin(s.t.db, s.hillAdmin.userId)).map((x) => x.name), ['Hill High']);
  const bad: [unknown, unknown][] = [['nope', 'x@example.invalid'], [newTestId(), 'x@example.invalid'], [s.bay, ''], [s.bay, 'not-an-email'], [s.bay, 'nobody@example.invalid'], [s.bay, 5], [s.bay, "a@b.co'; DROP TABLE users;--"]];
  for (const [sc, em] of bad) assert.equal((await appointSchoolAdmin(s.t.db, sc, em, 'o@x.co', NOW)).ok, false, `${String(sc)} ${String(em)}`);
  const unknown = await appointSchoolAdmin(s.t.db, s.bay, 'nobody@example.invalid', 'o@x.co', NOW);
  assert.match(!unknown.ok ? unknown.error : '', /sign in/);
});

test('a school can have at most MAX_SCHOOL_ADMINS; re-appointing the same person is harmless', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  for (let i = 1; i < MAX_SCHOOL_ADMINS; i++) { addUser(s.t, `a${i}@x.invalid`); assert.ok((await appointSchoolAdmin(s.t.db, s.bay, `a${i}@x.invalid`, 'o@x.co', NOW)).ok); }
  addUser(s.t, 'extra@x.invalid');
  const over = await appointSchoolAdmin(s.t.db, s.bay, 'extra@x.invalid', 'o@x.co', NOW);
  assert.deepEqual([over.ok, !over.ok && over.status], [false, 409]);
  assert.ok((await appointSchoolAdmin(s.t.db, s.bay, s.bayAdmin.email, 'o@x.co', NOW + 1)).ok, 'already one of them: fine');
});

test('revoking removes the school, and the role only when they run no other school', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  assert.ok((await appointSchoolAdmin(s.t.db, s.hill, s.bayAdmin.email, 'o@x.co', NOW)).ok, 'one adult can run two schools');
  assert.ok((await revokeSchoolAdmin(s.t.db, s.bay, s.bayAdmin.userId, NOW + 5)).ok);
  assert.ok(roles(s.t, s.bayAdmin.userId).includes('school_admin'), 'still runs Hill High');
  assert.equal(await canAdminSchool(s.t.db, s.bayAdmin.userId, s.bay), false);
  assert.equal(await canAdminSchool(s.t.db, s.bayAdmin.userId, s.hill), true);
  assert.ok((await revokeSchoolAdmin(s.t.db, s.hill, s.bayAdmin.userId, NOW + 6)).ok);
  assert.ok(!roles(s.t, s.bayAdmin.userId).includes('school_admin'));
  assert.equal((await revokeSchoolAdmin(s.t.db, s.hill, s.bayAdmin.userId, NOW)).ok, false, 'already revoked');
  assert.ok((await appointSchoolAdmin(s.t.db, s.bay, s.bayAdmin.email, 'o@x.co', NOW + 9)).ok, 'can be appointed again');
  assert.equal(await canAdminSchool(s.t.db, s.bayAdmin.userId, s.bay), true);
});

test('the owner sees every school with its teachers, classes and school admins', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const tch = addTeacher(s.t, 't@x.invalid');
  void tch;
  const list = await listSchoolsForAdmin(s.t.db);
  const bay = list.find((x) => x.id === s.bay)!;
  assert.deepEqual(bay.admins.map((a) => a.email), ['head@bay.example.invalid']);
  assert.ok(list.length >= 2);
});

test('a school admin sees only the pending applications that name THEIR school, with a masked SACE number', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await apply(s, 'a@x.invalid', '  bay   PRIMARY ');
  await apply(s, 'b@x.invalid', 'Hill High', 'Gauteng');
  await apply(s, 'c@x.invalid', 'Bay Primary', 'Gauteng'); // same name, other province: not this school
  const bay = await pendingForSchool(s.t.db, s.bay);
  assert.deepEqual(bay.map((x) => x.email), ['a@x.invalid']);
  assert.equal(bay[0].saceMasked, '*****678');
  assert.ok(!JSON.stringify(bay).includes('12345678'), 'the full SACE number never reaches a school admin');
  assert.deepEqual((await pendingForSchool(s.t.db, s.hill)).map((x) => x.email), ['b@x.invalid']);
  await decideApplication(s.t.db, a, { decision: 'reject' }, 'o@x.co', NOW);
  assert.deepEqual(await pendingForSchool(s.t.db, s.bay), [], 'decided applications drop off');
});

test('confirming grants the teacher role through the same path as the owner and links the school; declining does not', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await apply(s, 'a@x.invalid', 'Bay Primary');
  const b = await apply(s, 'b@x.invalid', 'Bay Primary');
  const ok = await decideAsSchoolAdmin(s.t.db, s.bayAdmin, s.bay, a, 'confirm', 'Known to us', NOW + 5);
  assert.deepEqual(ok, { ok: true, status: 'approved' });
  assert.ok(roles(s.t, a).includes('teacher'));
  const row = s.t.raw.prepare('SELECT status, school_id, decided_by, decision_note FROM teacher_applications WHERE user_id = ?').get(a) as Record<string, unknown>;
  assert.deepEqual({ ...row }, { status: 'approved', school_id: s.bay, decided_by: 'head@bay.example.invalid (school admin)', decision_note: 'Known to us' });
  const no = await decideAsSchoolAdmin(s.t.db, s.bayAdmin, s.bay, b, 'decline', 'Not on our staff', NOW + 6);
  assert.deepEqual(no, { ok: true, status: 'rejected' });
  assert.ok(!roles(s.t, b).includes('teacher'));
  assert.equal((await decideAsSchoolAdmin(s.t.db, s.bayAdmin, s.bay, a, 'confirm', '', NOW)).ok, false, 'already decided');
});

test('a school admin cannot decide for another school, with a role but no appointment, after being revoked, or with a made-up decision', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await apply(s, 'a@x.invalid', 'Bay Primary');
  const asHill = await decideAsSchoolAdmin(s.t.db, s.hillAdmin, s.hill, a, 'confirm', '', NOW);
  assert.deepEqual(asHill, { ok: false, status: 404, error: 'Not found' }, 'not their school\'s application');
  const claimsBay = await decideAsSchoolAdmin(s.t.db, s.hillAdmin, s.bay, a, 'confirm', '', NOW);
  assert.equal(claimsBay.ok, false, 'naming another school does not help');
  const rogue = addUser(s.t, 'rogue@x.invalid', ['parent', 'school_admin']); // the role alone
  assert.equal((await decideAsSchoolAdmin(s.t.db, { userId: rogue, email: 'rogue@x.invalid' }, s.bay, a, 'confirm', '', NOW)).ok, false);
  assert.equal((await decideAsSchoolAdmin(s.t.db, s.bayAdmin, s.bay, a, 'approve', '', NOW)).ok, false, 'only confirm or decline');
  await revokeSchoolAdmin(s.t.db, s.bay, s.bayAdmin.userId, NOW);
  assert.equal((await decideAsSchoolAdmin(s.t.db, s.bayAdmin, s.bay, a, 'confirm', '', NOW)).ok, false, 'revoked');
  assert.ok(!roles(s.t, a).includes('teacher'), 'nothing was granted');
  assert.ok((await decideApplication(s.t.db, a, { decision: 'approve' }, 'owner@example.invalid', NOW, newTestId)).ok, 'the owner can always decide');
  assert.ok(roles(s.t, a).includes('teacher'));
});

const seed = async (s: S, schoolName: string, owner: string, nick: string, bits: string) => {
  const t = addTeacher(s.t, owner, schoolName);
  const c = await createClass(s.t.db, t.userId, { name: `${nick} class`, grade: 6, subjects: ['nst'] }, NOW, newTestId);
  assert.ok(c.ok);
  const cls = (c as Extract<typeof c, { ok: true }>).class;
  const stu = addStudent(s.t, { nickname: nick, real: `Real ${nick}` });
  await joinClass(s.t.db, stu, cls.joinCode, NOW);
  const task = topicsFor(6, 'nst')[0].task;
  [...bits].forEach((b, i) => s.t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at) VALUES (?, ?, 'general', 6, 'nst', ?, ?, 0, 0, ?)").run(stu, task, task, b === '1' ? 1 : 0, NOW - 2 * D + i * 3600_000));
  await refreshForRun(s.t.db, stu, [task], NOW - 1000);
  return { teacher: t.userId, cls, stu, schoolId: t.schoolId };
};

test('school progress: per class counts and averages, no learner names, nothing from another school', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await seed(s, 'Bay Primary', 't1@x.invalid', 'Zola', '1111');
  const b = await seed(s, 'Other School', 't2@x.invalid', 'Intruder', '0000');
  s.t.raw.prepare("INSERT INTO runs (id, student_id, kind, grade, subject, scope_key, status, started_at, finished_at, score_pct) VALUES (?, ?, 'mock_test', 6, 'nst', 'k', 'finished', 1, ?, 80)").run(newTestId(), a.stu, NOW - D);
  const p = (await buildSchoolProgress(s.t.db, a.schoolId, NOW))!;
  assert.equal(p.schoolName, 'Bay Primary');
  assert.equal(p.classes.length, 1);
  const c = p.classes[0];
  assert.deepEqual([c.name, c.grade, c.teacherEmail, c.members, c.practisedLast7, c.avgAccuracyPct, c.mockAveragePct, c.mockScored], ['Zola class', 6, 't1@x.invalid', 1, 1, 100, 80, 1]);
  assert.deepEqual(p.totals, { classes: 1, learners: 1, practisedLast7: 1, avgAccuracyPct: 100, mockAveragePct: 80 });
  const json = JSON.stringify(p);
  assert.ok(!/Zola(?! class)|Real |Intruder|t2@x/.test(json), 'no learner name and nothing from the other school');
  const other = (await buildSchoolProgress(s.t.db, b.schoolId, NOW))!;
  assert.deepEqual([other.classes.length, other.classes[0].avgAccuracyPct], [1, 0]);
});

test('school progress: practice in the last 7 days only; an exam shows its countdown; an empty school and a bad id are handled', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await seed(s, 'Bay Primary', 't1@x.invalid', 'Zola', '1111');
  const dateIn = (days: number) => new Date(Math.floor((NOW + 2 * 3600_000) / D) * D + days * D).toISOString().slice(0, 10);
  const sc = await createScope(s.t.db, a.teacher, a.cls.id, { subject: 'nst', title: 'Test', tasks: [topicsFor(6, 'nst')[0].task], examDate: dateIn(9) }, NOW, newTestId);
  assert.ok(sc.ok);
  assert.deepEqual((await buildSchoolProgress(s.t.db, a.schoolId, NOW))!.classes[0].exam, { title: 'Test', examDate: dateIn(9), daysLeft: 9 });
  assert.equal((await buildSchoolProgress(s.t.db, a.schoolId, NOW + 10 * D))!.classes[0].practisedLast7, 0, 'a week later nobody practised recently');
  assert.equal((await buildSchoolProgress(s.t.db, a.schoolId, NOW + 10 * D))!.classes[0].exam, null, 'passed');
  const empty = (await buildSchoolProgress(s.t.db, s.hill, NOW))!;
  assert.deepEqual([empty.classes, empty.totals.learners, empty.totals.avgAccuracyPct], [[], 0, null]);
  assert.equal(await buildSchoolProgress(s.t.db, 'nope', NOW), null);
  assert.equal(await buildSchoolProgress(s.t.db, newTestId(), NOW), null);
});

test('school progress never binds more than 100 variables, even for a big school', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const t = addTeacher(s.t, 'big@x.invalid', 'Big School');
  for (let k = 0; k < 3; k++) {
    const c = await createClass(s.t.db, t.userId, { name: `Class ${k}x`, grade: 6 }, NOW, newTestId);
    assert.ok(c.ok);
    for (let i = 0; i < 60; i++) await joinClass(s.t.db, addStudent(s.t, { nickname: `k${k}-${i}` }), (c as Extract<typeof c, { ok: true }>).class.joinCode, NOW);
  }
  let widest = 0;
  const guarded = { all: <T,>(sql: string, params: (string | number | null)[] = []) => { widest = Math.max(widest, params.length); if (params.length > 100) return Promise.reject(new Error('too many SQL variables')); return s.t.db.all<T>(sql, params); }, batch: s.t.db.batch } as typeof s.t.db;
  const p = await buildSchoolProgress(guarded, t.schoolId, NOW);
  assert.equal(p?.totals.learners, 180);
  assert.ok(widest <= 100);
});
