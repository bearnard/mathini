import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addStudent, addTeacher, newTestId, NOW } from './testDb';
import { createClass, joinClass, leaveClass, removeMember } from './classes';
import { joinNotices, markJoinsSeen, seenAt } from './notices';

async function setup() {
  const t = await openSchoolsDb();
  if (!t) return null;
  const teacher = addTeacher(t, 't@x.invalid').userId;
  const other = addTeacher(t, 'o@x.invalid', 'Other').userId;
  const mk = async (owner = teacher, name = '6B', now = NOW) => { const r = await createClass(t.db, owner, { name, grade: 6 }, now, newTestId); assert.ok(r.ok); return (r as Extract<typeof r, { ok: true }>).class; };
  const join = async (code: string, nick: string, at: number) => { const id = addStudent(t, { nickname: nick }); assert.ok((await joinClass(t.db, id, code, at)).ok); return id; };
  return { t, teacher, other, mk, join };
}

test('a new class counts every learner who joins after it was made; marking seen clears them; later joiners are new again', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const c = await s.mk();
  assert.deepEqual(await joinNotices(s.t.db, s.teacher, NOW + 10), { total: 0, classes: [] });
  await s.join(c.joinCode, 'Zola', NOW + 100); await s.join(c.joinCode, 'Amy', NOW + 200);
  assert.deepEqual(await joinNotices(s.t.db, s.teacher, NOW + 300), { total: 2, classes: [{ classId: c.id, name: '6B', count: 2 }] });
  assert.ok((await markJoinsSeen(s.t.db, s.teacher, c.id, NOW + 400)).ok);
  assert.deepEqual(await joinNotices(s.t.db, s.teacher, NOW + 500), { total: 0, classes: [] });
  await s.join(c.joinCode, 'Late', NOW + 600);
  assert.equal((await joinNotices(s.t.db, s.teacher, NOW + 700)).total, 1);
  assert.equal(await seenAt(s.t.db, s.teacher, c.id), NOW + 400);
});

test('a class that existed before the feature starts at the first look: nobody is announced retroactively', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const c = await s.mk();
  s.t.raw.prepare('DELETE FROM class_join_seen').run(); // as if the class pre-dates migration 0021
  await s.join(c.joinCode, 'Old1', NOW + 50); await s.join(c.joinCode, 'Old2', NOW + 60);
  assert.deepEqual(await joinNotices(s.t.db, s.teacher, NOW + 1000), { total: 0, classes: [] });
  assert.equal(await seenAt(s.t.db, s.teacher, c.id), NOW + 1000, 'the baseline is the first look');
  await s.join(c.joinCode, 'New', NOW + 2000);
  assert.equal((await joinNotices(s.t.db, s.teacher, NOW + 3000)).total, 1);
});

test('learners who left or were removed are not announced; archived classes and other teachers\' classes do not count', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const c = await s.mk(); const theirs = await s.mk(s.other, 'Theirs');
  const a = await s.join(c.joinCode, 'Gone', NOW + 10); const b = await s.join(c.joinCode, 'Removed', NOW + 20); await s.join(c.joinCode, 'Stays', NOW + 30);
  await s.join(theirs.joinCode, 'NotMine', NOW + 40);
  await leaveClass(s.t.db, a, c.id, NOW + 50);
  await removeMember(s.t.db, s.teacher, c.id, b, NOW + 60);
  const n = await joinNotices(s.t.db, s.teacher, NOW + 100);
  assert.deepEqual(n, { total: 1, classes: [{ classId: c.id, name: '6B', count: 1 }] });
  s.t.raw.prepare("UPDATE classes SET status = 'archived' WHERE id = ?").run(c.id);
  assert.deepEqual(await joinNotices(s.t.db, s.teacher, NOW + 200), { total: 0, classes: [] });
  assert.equal((await joinNotices(s.t.db, s.other, NOW + 200)).total, 1);
});

test('marking seen works only for the teacher\'s own class and a real id', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const c = await s.mk();
  assert.deepEqual(await markJoinsSeen(s.t.db, s.other, c.id, NOW), { ok: false, status: 404, error: 'Not found' });
  assert.equal((await markJoinsSeen(s.t.db, s.teacher, 'nope', NOW)).ok, false);
  assert.equal((await markJoinsSeen(s.t.db, s.teacher, newTestId(), NOW)).ok, false);
  assert.equal(await seenAt(s.t.db, s.other, c.id), null);
});

test('notices hold no personal data: the table has only a user id, a class id and a time', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const cols = (s.t.raw.prepare("PRAGMA table_info('class_join_seen')").all() as { name: string }[]).map((c) => c.name);
  assert.deepEqual(cols, ['user_id', 'class_id', 'seen_at']);
});
