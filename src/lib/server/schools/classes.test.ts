import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addStudent, addTeacher, addUser, NOW, newTestId, type SchoolsTestDb } from './testDb';
import {
  CODE_ALPHABET, CODE_LENGTH, MAX_CLASSES_PER_LEARNER, MAX_CLASSES_PER_TEACHER, MAX_MEMBERS, archiveClass, createClass, getClass, joinClass, leaveClass, listClasses, makeJoinCode,
  myClasses, normaliseCode, regenerateCode, removeMember, type RandomBytes,
} from './classes';

async function setup(): Promise<(SchoolsTestDb & { teacher: string; other: string }) | null> {
  const t = await openSchoolsDb();
  if (!t) return null;
  const teacher = addTeacher(t, 't1@example.invalid').userId;
  const other = addTeacher(t, 't2@example.invalid', 'Other School').userId;
  return Object.assign(t, { teacher, other });
}
const make = async (t: NonNullable<Awaited<ReturnType<typeof setup>>>, owner = t.teacher, over: Record<string, unknown> = {}) => {
  const r = await createClass(t.db, owner, { name: '6B Natural Sciences', grade: 6, subjects: ['nst'], ...over }, NOW, newTestId);
  assert.ok(r.ok, JSON.stringify(r));
  return (r as Extract<typeof r, { ok: true }>).class;
};

test('join codes: 8 characters from the unambiguous alphabet, every character reachable, none of the look-alikes', () => {
  assert.equal(CODE_LENGTH, 8);
  for (const bad of ['0', 'O', '1', 'I', 'L', '2', 'Z', '5', 'S']) assert.ok(!CODE_ALPHABET.includes(bad), bad);
  const seen = new Set<string>();
  for (let i = 0; i < 400; i++) { const c = makeJoinCode(); assert.equal(c.length, 8); assert.match(c, new RegExp(`^[${CODE_ALPHABET}]{8}$`)); for (const ch of c) seen.add(ch); }
  assert.equal(seen.size, CODE_ALPHABET.length);
});

test('makeJoinCode rejects biased bytes (rejection sampling) and keeps asking for more', () => {
  let calls = 0;
  const rand: RandomBytes = (n) => { calls++; return new Uint8Array(n).fill(calls === 1 ? 255 : 0); };
  assert.equal(makeJoinCode(rand), CODE_ALPHABET[0].repeat(8));
  assert.ok(calls >= 2);
});

test('normaliseCode: case, spaces and dashes are forgiven; anything else is not a code', () => {
  assert.equal(normaliseCode('abcd-efgh'), 'ABCDEFGH');
  assert.equal(normaliseCode(' abcd efgh '), 'ABCDEFGH');
  for (const bad of ['', 'ABC', 'ABCDEFGHJ', 'ABCD0FGH', 5, null, undefined, 'A'.repeat(100), "ABCDEFG'; DROP"]) assert.equal(normaliseCode(bad as never), null, String(bad));
});

test('a teacher creates a class in the school the admin linked them to, with a join code', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const c = await make(t);
  assert.deepEqual([c.name, c.grade, c.subjects, c.status, c.members, c.schoolName], ['6B Natural Sciences', 6, ['nst'], 'active', 0, 'Bay Primary']);
  assert.match(c.joinCode, /^[A-Z0-9]{8}$/);
  assert.equal((await listClasses(t.db, t.teacher)).length, 1);
  assert.equal((await listClasses(t.db, t.other)).length, 0, 'another teacher sees nothing');
});

test('createClass validates input, needs an approved school link, and caps the number of active classes', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  for (const bad of [{ name: '' }, { name: 'A' }, { grade: 3 }, { grade: 13 }, { grade: 'x' }, { subjects: ['Bad Subject'] }, { subjects: 'nst' }, { subjects: Array.from({ length: 13 }, (_, i) => `s${i}`) }]) {
    assert.equal((await createClass(t.db, t.teacher, { name: '6B', grade: 6, ...bad } as never, NOW, newTestId)).ok, false, JSON.stringify(bad));
  }
  const noSchool = addUser(t, 'n@example.invalid', ['parent', 'teacher']);
  const r = await createClass(t.db, noSchool, { name: '6B', grade: 6 }, NOW, newTestId);
  assert.deepEqual([r.ok, !r.ok && r.status], [false, 403]);
  for (let i = 0; i < MAX_CLASSES_PER_TEACHER; i++) assert.ok((await createClass(t.db, t.teacher, { name: `C${i}x`, grade: 6 }, NOW, newTestId)).ok);
  const over = await createClass(t.db, t.teacher, { name: 'One more', grade: 6 }, NOW, newTestId);
  assert.deepEqual([over.ok, !over.ok && over.status], [false, 409]);
});

test('a join code clash is retried with another code', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  t.raw.prepare("INSERT INTO classes (id, school_id, teacher_user_id, name, grade, join_code, created_at) VALUES (?, 's', 'x', 'x', 6, ?, 1)").run(newTestId(), CODE_ALPHABET[3].repeat(8));
  // the first code the generator makes is the one already taken, the second is free
  let call = 0;
  const clash: RandomBytes = (len) => new Uint8Array(len).fill(call++ < 1 ? 3 : 9);
  const r = await createClass(t.db, t.teacher, { name: '6C', grade: 6 }, NOW, newTestId, clash);
  assert.ok(r.ok);
  assert.equal(r.ok && r.class.joinCode, CODE_ALPHABET[9].repeat(8));
});

test('a learner joins with the code (typed any way); the teacher then sees the NICKNAME only', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const c = await make(t);
  const a = addStudent(t, { nickname: 'Zola', real: 'Zolani Mkhize' });
  const b = addStudent(t, { nickname: 'amy', real: 'Amy Smith' });
  const typed = `${c.joinCode.slice(0, 4).toLowerCase()} - ${c.joinCode.slice(4)}`;
  const r = await joinClass(t.db, a, typed, NOW + 5);
  assert.ok(r.ok && !r.alreadyMember && r.joined.name === '6B Natural Sciences' && r.joined.schoolName === 'Bay Primary');
  await joinClass(t.db, b, c.joinCode, NOW + 6);
  const d = (await getClass(t.db, t.teacher, c.id))!;
  assert.deepEqual(d.roster.map((x) => x.nickname), ['amy', 'Zola'], 'alphabetical, case-insensitive');
  assert.equal(d.members, 2);
  const json = JSON.stringify(d);
  assert.ok(!/Mkhize|Smith|Zolani|CODE-/.test(json), 'no real name or login code in anything the teacher gets');
  const row = t.raw.prepare('SELECT notice_version FROM class_members WHERE student_id = ?').get(a) as { notice_version: string };
  assert.match(row.notice_version, /class/);
});

test('a code that does not exist, is malformed or belongs to an archived class all answer the same way', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const c = await make(t);
  const s = addStudent(t, { nickname: 'Z' });
  await archiveClass(t.db, t.teacher, c.id, NOW);
  const answers = await Promise.all(['ZZZZZZZZ', 'nope', '', c.joinCode, 12345].map((code) => joinClass(t.db, s, code, NOW)));
  for (const a of answers) assert.deepEqual([a.ok, !a.ok && a.status, !a.ok && a.error], [false, 404, 'We could not find a class with that code. Check it and try again.']);
});

test('joining twice is harmless; leaving and rejoining works; the teacher stops seeing a learner who left', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const c = await make(t);
  const s = addStudent(t, { nickname: 'Z' });
  await joinClass(t.db, s, c.joinCode, NOW);
  const again = await joinClass(t.db, s, c.joinCode, NOW + 10);
  assert.ok(again.ok && again.alreadyMember && again.joined.joinedAt === NOW);
  assert.equal((await myClasses(t.db, s)).length, 1);
  assert.ok((await leaveClass(t.db, s, c.id, NOW + 20)).ok);
  assert.equal((await getClass(t.db, t.teacher, c.id))!.roster.length, 0);
  assert.equal((await myClasses(t.db, s)).length, 0);
  assert.equal((await leaveClass(t.db, s, c.id, NOW + 21)).ok, false, 'already left');
  const back = await joinClass(t.db, s, c.joinCode, NOW + 30);
  assert.ok(back.ok && !back.alreadyMember);
  assert.equal((await getClass(t.db, t.teacher, c.id))!.roster.length, 1);
});

test('the teacher can remove a learner from their own class only', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const c = await make(t);
  const s = addStudent(t, { nickname: 'Z' });
  await joinClass(t.db, s, c.joinCode, NOW);
  assert.equal((await removeMember(t.db, t.other, c.id, s, NOW)).ok, false, 'another teacher cannot');
  assert.equal((await getClass(t.db, t.teacher, c.id))!.roster.length, 1);
  assert.ok((await removeMember(t.db, t.teacher, c.id, s, NOW + 1)).ok);
  assert.equal((await getClass(t.db, t.teacher, c.id))!.roster.length, 0);
  assert.equal((await removeMember(t.db, t.teacher, c.id, s, NOW + 2)).ok, false);
  assert.equal((await removeMember(t.db, t.teacher, c.id, "x'; DROP TABLE students;--", NOW)).ok, false);
});

test('a teacher cannot read, change or archive another teacher\'s class', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const c = await make(t);
  assert.equal(await getClass(t.db, t.other, c.id), null);
  assert.equal((await regenerateCode(t.db, t.other, c.id)).ok, false);
  assert.equal((await archiveClass(t.db, t.other, c.id, NOW)).ok, false);
  assert.equal((await getClass(t.db, t.teacher, c.id))?.status, 'active');
  assert.equal(await getClass(t.db, t.teacher, 'not-a-uuid'), null);
});

test('regenerating the code stops the old one at once and keeps the members', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const c = await make(t);
  const s = addStudent(t, { nickname: 'Z' });
  const late = addStudent(t, { nickname: 'Late' });
  await joinClass(t.db, s, c.joinCode, NOW);
  const r = await regenerateCode(t.db, t.teacher, c.id);
  assert.ok(r.ok && r.joinCode !== c.joinCode);
  assert.equal((await joinClass(t.db, late, c.joinCode, NOW)).ok, false);
  assert.ok((await joinClass(t.db, late, r.ok ? r.joinCode : '', NOW)).ok);
  assert.equal((await getClass(t.db, t.teacher, c.id))!.roster.length, 2);
});

test('archiving stops the code, hides the class from learners and archives its exam scopes', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const c = await make(t);
  const s = addStudent(t, { nickname: 'Z' });
  await joinClass(t.db, s, c.joinCode, NOW);
  t.raw.prepare("INSERT INTO exam_scopes (id, class_id, subject, grade, title, tasks, exam_date, created_by, created_at) VALUES (?, ?, 'nst', 6, 't', '[]', '2026-11-28', 'u', 1)").run(newTestId(), c.id);
  assert.ok((await archiveClass(t.db, t.teacher, c.id, NOW + 5)).ok);
  assert.equal((await myClasses(t.db, s)).length, 0);
  assert.equal((t.raw.prepare('SELECT archived_at FROM exam_scopes').get() as { archived_at: number }).archived_at, NOW + 5);
  assert.equal((await regenerateCode(t.db, t.teacher, c.id)).ok, false, 'archived');
});

test('limits: a class holds MAX_MEMBERS learners and a learner joins at most MAX_CLASSES_PER_LEARNER classes', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const c = await make(t);
  for (let i = 0; i < MAX_MEMBERS; i++) assert.ok((await joinClass(t.db, addStudent(t, { nickname: `n${i}` }), c.joinCode, NOW)).ok);
  const full = await joinClass(t.db, addStudent(t, { nickname: 'late' }), c.joinCode, NOW);
  assert.deepEqual([full.ok, !full.ok && full.status], [false, 409]);
  const s = addStudent(t, { nickname: 'busy' });
  for (let i = 0; i < MAX_CLASSES_PER_LEARNER; i++) { const k = await make(t, t.teacher, { name: `K${i}x` }).catch(() => null); if (!k) break; assert.ok((await joinClass(t.db, s, k.joinCode, NOW)).ok); }
  const extra = await joinClass(t.db, s, c.joinCode, NOW);
  assert.deepEqual([extra.ok, !extra.ok && extra.status], [false, 409]);
});

test('myClasses shows the learner the class, grade and school, never the teacher', async (ctx) => {
  const t = await setup(); if (!t) return ctx.skip('node:sqlite unavailable');
  const c = await make(t);
  const s = addStudent(t, { nickname: 'Z' });
  await joinClass(t.db, s, c.joinCode, NOW);
  const mine = await myClasses(t.db, s);
  assert.deepEqual(mine.map((m) => [m.name, m.grade, m.schoolName]), [['6B Natural Sciences', 6, 'Bay Primary']]);
  assert.ok(!JSON.stringify(mine).includes('example.invalid'));
});
