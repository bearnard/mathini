import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addUser, NOW, newTestId, type SchoolsTestDb } from './testDb';
import { applyAsTeacher, decideApplication, getOwnApplication, listApplications, maskSace, REAPPLY_COOLDOWN_MS } from './teachers';

const good = { saceNumber: '12345678', schoolName: 'Bay Primary', province: 'Western Cape', subjectsNote: 'NST' };
const roles = (t: SchoolsTestDb, id: string) => (t.raw.prepare('SELECT role FROM user_roles WHERE user_id = ? ORDER BY role').all(id) as { role: string }[]).map((r) => r.role);

test('applying stores a pending application and does NOT grant the teacher role', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const u = addUser(t, 'a@example.invalid');
  assert.deepEqual(await applyAsTeacher(t.db, u, good, NOW), { ok: true, status: 'pending' });
  assert.deepEqual(roles(t, u), ['parent']);
  const own = await getOwnApplication(t.db, u);
  assert.deepEqual([own?.status, own?.schoolName, own?.saceMasked, own?.note], ['pending', 'Bay Primary', '*****678', null]);
});

test('apply validates the SACE number, the school and the province', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const u = addUser(t, 'a@example.invalid');
  for (const bad of [{ saceNumber: '' }, { saceNumber: '12' }, { saceNumber: "1'; DROP TABLE users;--" }, { saceNumber: 'x'.repeat(40) }, { schoolName: '' }, { schoolName: 'A' }, { province: 'Narnia' }, { saceNumber: 5 }]) {
    const r = await applyAsTeacher(t.db, u, { ...good, ...bad } as never, NOW);
    assert.equal(r.ok, false, JSON.stringify(bad));
  }
  assert.equal((await t.db.all('SELECT 1 FROM teacher_applications')).length, 0);
});

test('one pending application per adult; a rejected one can be sent again after 30 days; a teacher cannot apply', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const u = addUser(t, 'a@example.invalid');
  assert.ok((await applyAsTeacher(t.db, u, good, NOW)).ok);
  const again = await applyAsTeacher(t.db, u, good, NOW + 1);
  assert.deepEqual([again.ok, !again.ok && again.status], [false, 409]);
  await decideApplication(t.db, u, { decision: 'reject', note: 'Check the number' }, 'admin@example.invalid', NOW + 2);
  assert.equal((await getOwnApplication(t.db, u))?.note, 'Check the number');
  const tooSoon = await applyAsTeacher(t.db, u, { ...good, saceNumber: '87654321' }, NOW + 3);
  assert.deepEqual([tooSoon.ok, !tooSoon.ok && tooSoon.status], [false, 429], 'a rejected application waits 30 days');
  assert.ok((await applyAsTeacher(t.db, u, { ...good, saceNumber: '87654321' }, NOW + 2 + REAPPLY_COOLDOWN_MS)).ok);
  const own = await getOwnApplication(t.db, u);
  assert.deepEqual([own?.status, own?.note, own?.decidedAt], ['pending', null, null]);
  const teacher = addUser(t, 't@example.invalid', ['parent', 'teacher']);
  const r = await applyAsTeacher(t.db, teacher, good, NOW);
  assert.deepEqual([r.ok, !r.ok && r.status], [false, 409]);
});

test('approve grants the teacher role (granted_by admin), links a new school, and is one atomic step', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const u = addUser(t, 'a@example.invalid');
  await applyAsTeacher(t.db, u, good, NOW);
  const r = await decideApplication(t.db, u, { decision: 'approve', note: 'Confirmed by phone' }, 'admin@example.invalid', NOW + 5, newTestId);
  assert.ok(r.ok && r.status === 'approved' && r.schoolId);
  assert.deepEqual(roles(t, u), ['parent', 'teacher']);
  const g = t.raw.prepare("SELECT granted_by, granted_at FROM user_roles WHERE user_id = ? AND role = 'teacher'").get(u) as { granted_by: string; granted_at: number };
  assert.deepEqual({ ...g }, { granted_by: 'admin', granted_at: NOW + 5 });
  const s = t.raw.prepare('SELECT name, province, created_by FROM schools').all();
  assert.deepEqual(s.map((x) => ({ ...x })), [{ name: 'Bay Primary', province: 'Western Cape', created_by: 'admin' }]);
  const a = (await listApplications(t.db))[0];
  assert.deepEqual([a.status, a.decidedBy, a.schoolId === (r.ok ? r.schoolId : null)], ['approved', 'admin@example.invalid', true]);
});

test('approve reuses a school with the same name and province, or the one the admin picks; refuses an unknown school', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const u1 = addUser(t, 'a@example.invalid');
  const u2 = addUser(t, 'b@example.invalid');
  const u3 = addUser(t, 'c@example.invalid');
  await applyAsTeacher(t.db, u1, good, NOW);
  await applyAsTeacher(t.db, u2, { ...good, schoolName: '  bay   PRIMARY ' }, NOW);
  await applyAsTeacher(t.db, u3, { ...good, schoolName: 'Other School' }, NOW);
  const a = await decideApplication(t.db, u1, { decision: 'approve' }, 'x@example.invalid', NOW, newTestId);
  const b = await decideApplication(t.db, u2, { decision: 'approve' }, 'x@example.invalid', NOW, newTestId);
  assert.ok(a.ok && b.ok && a.schoolId === b.schoolId, 'same school');
  assert.equal((await t.db.all('SELECT 1 FROM schools')).length, 1);
  const bad = await decideApplication(t.db, u3, { decision: 'approve', schoolId: newTestId() }, 'x@example.invalid', NOW);
  assert.deepEqual([bad.ok, !bad.ok && bad.error], [false, 'Unknown school']);
  assert.deepEqual(roles(t, u3), ['parent'], 'nothing was granted');
  const picked = await decideApplication(t.db, u3, { decision: 'approve', schoolId: a.ok ? a.schoolId : '' }, 'x@example.invalid', NOW);
  assert.ok(picked.ok && picked.schoolId === (a.ok ? a.schoolId : null));
});

test('reject keeps the role away and shows the note to the applicant only; a decided application cannot be decided again', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const u = addUser(t, 'a@example.invalid');
  await applyAsTeacher(t.db, u, good, NOW);
  assert.ok((await decideApplication(t.db, u, { decision: 'reject', note: 'Not found on the SACE list' }, 'x@example.invalid', NOW)).ok);
  assert.deepEqual(roles(t, u), ['parent']);
  for (const d of ['approve', 'reject']) {
    const r = await decideApplication(t.db, u, { decision: d }, 'x@example.invalid', NOW);
    assert.deepEqual([r.ok, !r.ok && r.status], [false, 409]);
  }
});

test('revoke removes the role and archives the teacher\'s classes', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const u = addUser(t, 'a@example.invalid');
  await applyAsTeacher(t.db, u, good, NOW);
  const ok = await decideApplication(t.db, u, { decision: 'approve' }, 'x@example.invalid', NOW, newTestId);
  t.raw.prepare("INSERT INTO classes (id, school_id, teacher_user_id, name, grade, join_code, created_at) VALUES ('c1', ?, ?, '6B', 6, 'ABCD2345', ?)").run(ok.ok ? ok.schoolId : '', u, NOW);
  const r = await decideApplication(t.db, u, { decision: 'revoke', note: 'Left the school' }, 'x@example.invalid', NOW + 9);
  assert.ok(r.ok);
  assert.deepEqual(roles(t, u), ['parent']);
  assert.deepEqual({ ...(t.raw.prepare("SELECT status, archived_at FROM classes WHERE id = 'c1'").get() as object) }, { status: 'archived', archived_at: NOW + 9 });
  assert.equal((await getOwnApplication(t.db, u))?.status, 'rejected');
  const again = await decideApplication(t.db, u, { decision: 'revoke' }, 'x@example.invalid', NOW);
  assert.equal(again.ok, false);
});

test('decide refuses an unknown decision, an unknown applicant and an applicant whose account is gone', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const u = addUser(t, 'a@example.invalid');
  await applyAsTeacher(t.db, u, good, NOW);
  assert.equal((await decideApplication(t.db, u, { decision: 'delete' }, 'x@example.invalid', NOW)).ok, false);
  assert.equal((await decideApplication(t.db, newTestId(), { decision: 'approve' }, 'x@example.invalid', NOW)).ok, false);
  t.raw.prepare('DELETE FROM users WHERE id = ?').run(u);
  const r = await decideApplication(t.db, u, { decision: 'approve' }, 'x@example.invalid', NOW);
  assert.deepEqual([r.ok, !r.ok && r.status], [false, 404]);
});

test('listApplications: pending first (oldest first), SACE number present (admin only), filter by status', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const a = addUser(t, 'a@example.invalid'); const b = addUser(t, 'b@example.invalid'); const c = addUser(t, 'c@example.invalid');
  await applyAsTeacher(t.db, a, good, NOW + 30);
  await applyAsTeacher(t.db, b, { ...good, saceNumber: '22222222' }, NOW + 10);
  await applyAsTeacher(t.db, c, { ...good, saceNumber: '33333333' }, NOW + 20);
  await decideApplication(t.db, c, { decision: 'reject' }, 'x@example.invalid', NOW + 40);
  assert.deepEqual((await listApplications(t.db)).map((x) => x.email), ['b@example.invalid', 'a@example.invalid', 'c@example.invalid']);
  assert.equal((await listApplications(t.db))[0].saceNumber, '22222222');
  assert.deepEqual((await listApplications(t.db, 'rejected')).map((x) => x.email), ['c@example.invalid']);
});

test('maskSace hides all but the last three characters', () => {
  assert.equal(maskSace('12345678'), '*****678');
  assert.equal(maskSace('12'), '***');
  assert.equal(maskSace('1234'), '***234');
});

test('the 30-day cooldown after a rejection: the exact boundary, the date in the message, the applicant\'s own view, and a revoked teacher waits too', async (ctx) => {
  const t = await openSchoolsDb(); if (!t) return ctx.skip('node:sqlite unavailable');
  const u = addUser(t, 'cool@example.invalid');
  assert.ok((await applyAsTeacher(t.db, u, good, NOW)).ok);
  assert.equal((await getOwnApplication(t.db, u))?.canApplyAgainAt, null, 'pending: no cooldown');
  await decideApplication(t.db, u, { decision: 'reject', note: 'Check the number' }, 'admin@example.invalid', NOW + 1000);
  const decided = NOW + 1000;
  assert.equal((await getOwnApplication(t.db, u))?.canApplyAgainAt, decided + REAPPLY_COOLDOWN_MS);
  const early = await applyAsTeacher(t.db, u, good, decided + REAPPLY_COOLDOWN_MS - 1);
  assert.equal(early.ok, false);
  assert.match(!early.ok ? early.error : '', /^Your last application was not approved\. You can send a new one on \d{4}-\d{2}-\d{2}\.$/);
  const day = new Date(decided + REAPPLY_COOLDOWN_MS + 2 * 3_600_000).toISOString().slice(0, 10);
  assert.ok(!early.ok && early.error.includes(day), 'the date it names is the cooldown end, in South African time');
  assert.equal((await applyAsTeacher(t.db, u, good, decided + 1)).ok, false, 'a day later');
  assert.equal((await t.db.all<{ n: number }>('SELECT COUNT(*) AS n FROM teacher_applications WHERE user_id = ?', [u]))[0].n, 1, 'and nothing was written');
  assert.ok((await applyAsTeacher(t.db, u, good, decided + REAPPLY_COOLDOWN_MS)).ok, 'exactly at the end it works');
  // a teacher whose role is revoked becomes a rejected application, so the same wait applies
  const v = addUser(t, 'revoked@example.invalid');
  assert.ok((await applyAsTeacher(t.db, v, good, NOW)).ok);
  await decideApplication(t.db, v, { decision: 'approve' }, 'admin@example.invalid', NOW + 10);
  await decideApplication(t.db, v, { decision: 'revoke', note: 'Left the school' }, 'admin@example.invalid', NOW + 20);
  assert.equal((await applyAsTeacher(t.db, v, good, NOW + 30)).ok, false);
  assert.ok((await applyAsTeacher(t.db, v, good, NOW + 20 + REAPPLY_COOLDOWN_MS)).ok);
  // someone who has never applied is not delayed
  assert.ok((await applyAsTeacher(t.db, addUser(t, 'new@example.invalid'), good, NOW)).ok);
});
