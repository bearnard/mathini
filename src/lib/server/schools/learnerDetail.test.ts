import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addStudent as addStudentRaw, addTeacher, addUser, NOW } from './testDb';

let n = 0;
/** Learner ids are long in production (uuid-like), so the tests use long ones too. */
const addStudent = (t: Parameters<typeof addStudentRaw>[0], o: Parameters<typeof addStudentRaw>[1]) => addStudentRaw(t, { id: `student-${String(++n).padStart(4, '0')}`, ...o });
import { createSession, ADULT_COOKIE } from '../adultAuth/sessions';
import { handleCreateClass, handleLearnerProgress, LEARNER_VIEWS_PER_WINDOW, type SchoolsDeps } from './http';
import { loadLearnerDetail } from './learnerDetail';

const HOST = 'https://example.invalid';
const D = 86_400_000;
const get = (cookie?: string) => new Request(`${HOST}/x`, { headers: cookie ? { cookie } : {} });

async function setup() {
  const t = await openSchoolsDb();
  if (!t) return null;
  const teacher = addTeacher(t, 't1@example.invalid').userId;
  const other = addTeacher(t, 't2@example.invalid').userId;
  const parent = addUser(t, 'p@example.invalid');
  const tok = async (id: string) => `${ADULT_COOKIE}=${(await createSession(t.db, id, NOW)).token}`;
  const cookies = { teacher: await tok(teacher), other: await tok(other), parent: await tok(parent) };
  const deps: SchoolsDeps = { db: t.db, now: NOW + 1000 };
  const mkClass = async (cookie: string, name = '6B Natural Sciences') => {
    const res = await handleCreateClass(new Request(`${HOST}/c`, { method: 'POST', headers: { 'content-type': 'application/json', 'x-auth-action': 'class-create', origin: HOST, cookie }, body: JSON.stringify({ name, grade: 6, subjects: ['nst'] }) }), deps);
    return ((await res.json()) as { class: { id: string } }).class.id;
  };
  const join = (classId: string, studentId: string) => t.raw.prepare("INSERT INTO class_members (class_id, student_id, joined_at, notice_version) VALUES (?, ?, ?, 'v1')").run(classId, studentId, NOW - 5 * D);
  // The real case: 20 old answers on one topic, no runs, nothing cached.
  const practise = (studentId: string, n = 20) => { for (let i = 0; i < n; i++) t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at) VALUES (?, 'electric-circuits', 'general', 6, 'nst', 'electric-circuits', ?, 0, 0, ?)").run(studentId, i % 4 === 0 ? 0 : 1, NOW - 40 * D + i * 60_000); };
  return { t, teacher, other, cookies, deps, mkClass, join, practise };
}
type S = NonNullable<Awaited<ReturnType<typeof setup>>>;
const view = (s: S, cookie: string | undefined, classId: string, sid: string, deps = s.deps) => handleLearnerProgress(get(cookie), deps, classId, sid);

test('a teacher opens a current member of their active class: the learner\'s real progress (20 old answers, no runs), by nickname only', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const cls = await s.mkClass(s.cookies.teacher);
  const sid = addStudent(s.t, { nickname: 'Anfervio', real: 'Real Name Secret' });
  s.t.raw.prepare("UPDATE students SET school = 'Secret School', age = 11 WHERE id = ?").run(sid);
  s.join(cls, sid); s.practise(sid);
  const res = await view(s, s.cookies.teacher, cls, sid);
  assert.equal(res.status, 200);
  const text = await res.text();
  const d = JSON.parse(text) as { class: { name: string }; nickname: string; progress: { subjects: { topics: { task: string; attempts: number }[] }[]; recentSessions: unknown[]; teacherNextStep: { title: string } } };
  assert.equal(d.nickname, 'Anfervio');
  assert.equal(d.class.name, '6B Natural Sciences');
  assert.ok(d.progress.subjects.flatMap((x) => x.topics).some((x) => x.task === 'electric-circuits' && x.attempts === 20), 'built from the answers although there are no runs and no cached rows');
  assert.equal(d.progress.recentSessions.length, 1);
  assert.match(d.progress.teacherNextStep.title, /Anfervio/);
  assert.doesNotMatch(d.progress.teacherNextStep.title, /your learner|your child|this learner/, 'the nickname is used when there is one');
  assert.ok(!/Real Name Secret|Secret School|real_name|pin_hash|pin_salt|login_code|CODE-|"age"/i.test(text), 'no real name, school, age, PIN or login code');
  assert.ok(!/\b(he|she|his|her|him)\b/i.test(JSON.stringify(d.progress.teacherNextStep)));
});

test('every refusal is the same 404: another teacher\'s class, a learner who left, a removed learner, an archived class, a learner of a different class, bad ids', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const cls = await s.mkClass(s.cookies.teacher);
  const cls2 = await s.mkClass(s.cookies.teacher, '6C');
  const a = addStudent(s.t, { nickname: 'Amy' }); const b = addStudent(s.t, { nickname: 'Ben' }); const c = addStudent(s.t, { nickname: 'Cleo' }); const outsider = addStudent(s.t, { nickname: 'Out' });
  s.join(cls, a); s.join(cls, b); s.join(cls2, c);
  s.practise(a, 5);
  assert.equal((await view(s, s.cookies.teacher, cls, a)).status, 200);
  const bodies = new Set<string>();
  const refused = async (label: string, r: Promise<Response>) => { const res = await r; assert.equal(res.status, 404, label); bodies.add(await res.text()); };
  await refused('another teacher\'s class', view(s, s.cookies.other, cls, a));
  await refused('a learner of the teacher\'s OTHER class, asked through this class', view(s, s.cookies.teacher, cls, c));
  await refused('a learner in no class', view(s, s.cookies.teacher, cls, outsider));
  await refused('unknown class', view(s, s.cookies.teacher, '00000000-0000-4000-8000-00000000ffff', a));
  await refused('bad class id', view(s, s.cookies.teacher, 'nope', a));
  await refused('bad learner id', view(s, s.cookies.teacher, cls, "x'; DROP TABLE students;--"));
  s.t.raw.prepare('UPDATE class_members SET left_at = ? WHERE class_id = ? AND student_id = ?').run(NOW - D, cls, b); // left or removed
  await refused('a learner who left or was removed', view(s, s.cookies.teacher, cls, b));
  s.t.raw.prepare("UPDATE classes SET status = 'archived' WHERE id = ?").run(cls);
  await refused('an archived class', view(s, s.cookies.teacher, cls, a));
  assert.equal(bodies.size, 1, 'the answer never says which check failed');
  // nothing was read for the refused ones: the learner who left has no cache rows built
  assert.equal(Number((s.t.raw.prepare("SELECT COUNT(*) AS n FROM topic_progress WHERE student_id = ?").get(b) as { n: number }).n), 0);
});

test('not a teacher: 401 signed out, 403 for a parent; the right role is checked before any learner data is read', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const cls = await s.mkClass(s.cookies.teacher);
  const a = addStudent(s.t, { nickname: 'Amy' }); s.join(cls, a); s.practise(a, 3);
  assert.equal((await view(s, undefined, cls, a)).status, 401);
  assert.equal((await view(s, s.cookies.parent, cls, a)).status, 403);
  assert.equal(Number((s.t.raw.prepare('SELECT COUNT(*) AS n FROM topic_progress').get() as { n: number }).n), 0, 'nothing built for a refused request');
});

test('teachers are rate limited per teacher (durable): the next view after the limit is 429, another teacher is unaffected', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const cls = await s.mkClass(s.cookies.teacher);
  const a = addStudent(s.t, { nickname: 'Amy' }); s.join(cls, a);
  for (let i = 0; i < LEARNER_VIEWS_PER_WINDOW; i++) assert.equal((await view(s, s.cookies.teacher, cls, a)).status, 200, `view ${i + 1}`);
  assert.equal((await view(s, s.cookies.teacher, cls, a)).status, 429);
  const cls2 = await s.mkClass(s.cookies.other);
  const b = addStudent(s.t, { nickname: 'Bo' }); s.join(cls2, b);
  assert.equal((await view(s, s.cookies.other, cls2, b)).status, 200);
});

test('loadLearnerDetail answers the same for a school admin\'s or any other id: only the owning teacher id passes', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const cls = await s.mkClass(s.cookies.teacher);
  const a = addStudent(s.t, { nickname: 'Amy' }); s.join(cls, a);
  assert.equal((await loadLearnerDetail(s.t.db, s.teacher, cls, a, NOW)).ok, true);
  assert.equal((await loadLearnerDetail(s.t.db, s.other, cls, a, NOW)).ok, false);
  assert.equal((await loadLearnerDetail(s.t.db, '', cls, a, NOW)).ok, false);
  assert.equal((await loadLearnerDetail(s.t.db, s.teacher, cls, undefined, NOW)).ok, false);
});
