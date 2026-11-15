import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addUser, addTeacher, addStudent, newTestId, NOW } from './testDb';
import { createSession, ADULT_COOKIE } from '../adultAuth/sessions';
import { appointSchoolAdmin } from './schoolAdmins';
import { applyAsTeacher } from './teachers';
import { createClass, joinClass } from './classes';
import { handleSchoolClass, handleSchoolDecide, handleSchoolOverview } from './schoolHttp';

const HOST = 'https://example.invalid';
const req = (path: string, o: { cookie?: string; action?: string; body?: unknown; origin?: string } = {}) =>
  new Request(`${HOST}${path}`, { method: o.action ? 'POST' : 'GET', headers: { 'content-type': 'application/json', ...(o.action ? { 'x-auth-action': o.action, origin: o.origin ?? HOST } : {}), ...(o.cookie ? { cookie: o.cookie } : {}) }, body: o.action ? JSON.stringify(o.body ?? {}) : undefined });

async function setup() {
  const t = await openSchoolsDb();
  if (!t) return null;
  const mk = (name: string) => { const id = newTestId(); t.raw.prepare("INSERT INTO schools (id, name, province, created_at, created_by) VALUES (?, ?, 'Western Cape', 1, 'admin')").run(id, name); return id; };
  const bay = mk('Bay Primary'); const hill = mk('Hill High');
  const cookie = async (email: string) => { const id = addUser(t, email); return { id, cookie: `${ADULT_COOKIE}=${(await createSession(t.db, id, NOW)).token}` }; };
  const bayAdmin = await cookie('bay@x.invalid'); const hillAdmin = await cookie('hill@x.invalid'); const parent = await cookie('p@x.invalid');
  await appointSchoolAdmin(t.db, bay, 'bay@x.invalid', 'o@x.co', NOW);
  await appointSchoolAdmin(t.db, hill, 'hill@x.invalid', 'o@x.co', NOW);
  const deps = { db: t.db, now: NOW + 1000 };
  return { t, bay, hill, bayAdmin, hillAdmin, parent, deps };
}

test('overview: 401 signed out, 403 without the role, 404 for a school they do not run; their own school works and lists only its applications', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const applicant = addUser(s.t, 'a@x.invalid'); await applyAsTeacher(s.t.db, applicant, { saceNumber: '12345678', schoolName: 'Bay Primary', province: 'Western Cape' }, NOW);
  const other = addUser(s.t, 'b@x.invalid'); await applyAsTeacher(s.t.db, other, { saceNumber: '87654321', schoolName: 'Hill High', province: 'Western Cape' }, NOW);
  assert.equal((await handleSchoolOverview(req('/api/school/overview'), s.deps)).status, 401);
  assert.equal((await handleSchoolOverview(req('/api/school/overview', { cookie: s.parent.cookie }), s.deps)).status, 403);
  assert.equal((await handleSchoolOverview(req(`/api/school/overview?school=${s.hill}`, { cookie: s.bayAdmin.cookie }), s.deps)).status, 404);
  const res = await handleSchoolOverview(req('/api/school/overview', { cookie: s.bayAdmin.cookie }), s.deps);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('cache-control'), 'no-store');
  const j = (await res.json()) as { schoolId: string; schools: { name: string }[]; applications: { email: string; saceMasked: string }[]; progress: { schoolName: string } };
  assert.deepEqual([j.schoolId, j.schools.map((x) => x.name), j.applications.map((a) => a.email), j.progress.schoolName], [s.bay, ['Bay Primary'], ['a@x.invalid'], 'Bay Primary']);
  assert.ok(!JSON.stringify(j).includes('12345678') && !JSON.stringify(j).includes('87654321'));
});

test('deciding over HTTP: needs the action header and Origin; confirms their own school\'s teacher; cannot touch another school\'s', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = addUser(s.t, 'a@x.invalid'); await applyAsTeacher(s.t.db, a, { saceNumber: '12345678', schoolName: 'Bay Primary', province: 'Western Cape' }, NOW);
  const path = `/api/school/applications/${a}/decide`;
  assert.equal((await handleSchoolDecide(req(path, { action: 'wrong', cookie: s.bayAdmin.cookie, body: { decision: 'confirm' } }), s.deps, a)).status, 403);
  assert.equal((await handleSchoolDecide(req(path, { action: 'school-decide', origin: 'https://evil.invalid', cookie: s.bayAdmin.cookie, body: { decision: 'confirm' } }), s.deps, a)).status, 403);
  assert.equal((await handleSchoolDecide(req(path, { action: 'school-decide', cookie: s.parent.cookie, body: { decision: 'confirm' } }), s.deps, a)).status, 403);
  assert.equal((await handleSchoolDecide(req(path, { action: 'school-decide', cookie: s.hillAdmin.cookie, body: { decision: 'confirm' } }), s.deps, a)).status, 404, 'Hill High\'s admin cannot decide a Bay Primary teacher');
  assert.equal((s.t.raw.prepare("SELECT status FROM teacher_applications WHERE user_id = ?").get(a) as { status: string }).status, 'pending');
  assert.equal((await handleSchoolDecide(req(`${path}?school=${s.bay}`, { action: 'school-decide', cookie: s.hillAdmin.cookie, body: { decision: 'confirm' } }), s.deps, a)).status, 404, 'naming the other school in the URL does not help');
  const ok = await handleSchoolDecide(req(path, { action: 'school-decide', cookie: s.bayAdmin.cookie, body: { decision: 'confirm', note: 'Ours' } }), s.deps, a);
  assert.equal(ok.status, 200);
  assert.deepEqual((s.t.raw.prepare("SELECT role FROM user_roles WHERE user_id = ? AND role = 'teacher'").all(a) as unknown[]).length, 1);
});

test('class drill-down: a school admin reads a class of their school (nicknames only) and gets 404 for another school\'s class', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const t1 = addTeacher(s.t, 't1@x.invalid', 'Bay Primary');
  s.t.raw.prepare('UPDATE teacher_applications SET school_id = ? WHERE user_id = ?').run(s.bay, t1.userId);
  s.t.raw.prepare('UPDATE schools SET name = ? WHERE id = ?').run('Bay Primary', s.bay);
  const c1 = await createClass(s.t.db, t1.userId, { name: '6B', grade: 6 }, NOW, newTestId);
  assert.ok(c1.ok);
  const cls = (c1 as Extract<typeof c1, { ok: true }>).class;
  await joinClass(s.t.db, addStudent(s.t, { nickname: 'Zola', real: 'Zolani Real' }), cls.joinCode, NOW);
  const bayClassId = (s.t.raw.prepare('SELECT id FROM classes').get() as { id: string }).id;
  s.t.raw.prepare('UPDATE classes SET school_id = ? WHERE id = ?').run(s.bay, bayClassId);
  const ok = await handleSchoolClass(req(`/api/school/classes/${bayClassId}/progress`, { cookie: s.bayAdmin.cookie }), s.deps, bayClassId);
  assert.equal(ok.status, 200);
  const j = (await ok.json()) as { learners: { nickname: string }[] };
  assert.deepEqual(j.learners.map((l) => l.nickname), ['Zola']);
  assert.ok(!JSON.stringify(j).includes('Zolani'));
  assert.equal((await handleSchoolClass(req(`/api/school/classes/${bayClassId}/progress`, { cookie: s.hillAdmin.cookie }), s.deps, bayClassId)).status, 404);
  assert.equal((await handleSchoolClass(req('/api/school/classes/nope/progress', { cookie: s.bayAdmin.cookie }), s.deps, 'nope')).status, 404);
});
