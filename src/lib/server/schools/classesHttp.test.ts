import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addStudent, addTeacher, addUser, NOW } from './testDb';
import { createSession, ADULT_COOKIE } from '../adultAuth/sessions';
import { signSession } from '../session';
import { createLimiter } from '../adultAuth/rateLimit';
import { handleArchive, handleCreateClass, handleGetClass, handleJoin, handleLeave, handleListClasses, handleMyClasses, handleRegenerate, handleRemoveMember, type ClassDeps } from './http';

const SECRET = 'test-secret-test-secret';
const HOST = 'https://example.invalid';
const req = (path: string, o: { method?: string; action?: string; cookie?: string; body?: unknown; origin?: string } = {}) =>
  new Request(`${HOST}${path}`, { method: o.method ?? (o.action ? 'POST' : 'GET'), headers: { 'content-type': 'application/json', ...(o.action ? { 'x-auth-action': o.action, origin: o.origin ?? HOST } : {}), ...(o.cookie ? { cookie: o.cookie } : {}) }, body: o.action ? JSON.stringify(o.body ?? {}) : undefined });

async function setup() {
  const t = await openSchoolsDb();
  if (!t) return null;
  const teacher = addTeacher(t, 't@example.invalid').userId;
  const parent = addUser(t, 'p@example.invalid');
  const tTok = (await createSession(t.db, teacher, NOW)).token;
  const pTok = (await createSession(t.db, parent, NOW)).token;
  const deps = (over: Partial<ClassDeps> = {}): ClassDeps => ({ db: t.db, now: NOW + 1000, sessionSecret: SECRET, ...over });
  const tc = `${ADULT_COOKIE}=${tTok}`;
  const stu = async (nick: string) => { const id = addStudent(t, { nickname: nick }); return { id, cookie: `pp_session=${await signSession(id, SECRET)}` }; };
  return { t, deps, tc, pc: `${ADULT_COOKIE}=${pTok}`, stu };
}
type S = NonNullable<Awaited<ReturnType<typeof setup>>>;
const created = async (s: S) => ((await (await handleCreateClass(req('/api/teacher/classes', { action: 'class-create', cookie: s.tc, body: { name: '6B NST', grade: 6, subjects: ['nst'] } }), s.deps())).json()) as { class: { id: string; joinCode: string } }).class;

test('teacher routes: 401 signed out, 403 for an adult without the teacher role, and the CSRF header is required on writes', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  assert.equal((await handleListClasses(req('/api/teacher/classes'), s.deps())).status, 401);
  assert.equal((await handleListClasses(req('/api/teacher/classes', { cookie: s.pc }), s.deps())).status, 403);
  assert.equal((await handleCreateClass(req('/api/teacher/classes', { action: 'class-create', cookie: s.pc, body: { name: '6B', grade: 6 } }), s.deps())).status, 403);
  assert.equal((await handleCreateClass(req('/api/teacher/classes', { action: 'wrong', cookie: s.tc, body: { name: '6B', grade: 6 } }), s.deps())).status, 403);
  assert.equal((await handleCreateClass(req('/api/teacher/classes', { action: 'class-create', cookie: s.tc, origin: 'https://evil.invalid', body: { name: '6B', grade: 6 } }), s.deps())).status, 403);
  assert.equal((await s.t.db.all('SELECT 1 FROM classes')).length, 0);
});

test('a teacher creates, lists, reads, regenerates and archives their class over HTTP', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const c = await created(s);
  assert.match(c.joinCode, /^[A-Z0-9]{8}$/);
  const list = (await (await handleListClasses(req('/api/teacher/classes', { cookie: s.tc }), s.deps())).json()) as { classes: unknown[] };
  assert.equal(list.classes.length, 1);
  assert.equal((await handleGetClass(req(`/api/teacher/classes/${c.id}`, { cookie: s.tc }), s.deps(), c.id)).status, 200);
  assert.equal((await handleGetClass(req('/api/teacher/classes/nope', { cookie: s.tc }), s.deps(), 'nope')).status, 404);
  const re = (await (await handleRegenerate(req(`/api/teacher/classes/${c.id}/regenerate`, { action: 'class-regenerate', cookie: s.tc }), s.deps(), c.id)).json()) as { joinCode: string };
  assert.notEqual(re.joinCode, c.joinCode);
  assert.equal((await handleArchive(req(`/api/teacher/classes/${c.id}/archive`, { action: 'class-archive', cookie: s.tc }), s.deps(), c.id)).status, 200);
});

test('a learner joins by code over HTTP; the teacher sees the nickname; the learner can leave; the teacher can remove', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const c = await created(s);
  const a = await s.stu('Zola'); const b = await s.stu('Amy');
  const j = await handleJoin(req('/api/classes/join', { action: 'class-join', cookie: a.cookie, body: { code: c.joinCode.toLowerCase() } }), s.deps());
  assert.equal(j.status, 200);
  assert.equal(((await j.json()) as { joined: { name: string } }).joined.name, '6B NST');
  await handleJoin(req('/api/classes/join', { action: 'class-join', cookie: b.cookie, body: { code: c.joinCode } }), s.deps());
  const detail = (await (await handleGetClass(req(`/api/teacher/classes/${c.id}`, { cookie: s.tc }), s.deps(), c.id)).json()) as { class: { roster: { nickname: string }[] } };
  assert.deepEqual(detail.class.roster.map((r) => r.nickname), ['Amy', 'Zola']);
  const mine = (await (await handleMyClasses(req('/api/classes/mine', { cookie: a.cookie }), s.deps())).json()) as { classes: { name: string }[] };
  assert.deepEqual(mine.classes.map((m) => m.name), ['6B NST']);
  assert.equal((await handleLeave(req(`/api/classes/${c.id}/leave`, { action: 'class-leave', cookie: a.cookie }), s.deps(), c.id)).status, 200);
  assert.equal((await handleRemoveMember(req(`/api/teacher/classes/${c.id}/members/${b.id}/remove`, { action: 'class-remove', cookie: s.tc }), s.deps(), c.id, b.id)).status, 200);
  const after = (await (await handleGetClass(req(`/api/teacher/classes/${c.id}`, { cookie: s.tc }), s.deps(), c.id)).json()) as { class: { roster: unknown[] } };
  assert.equal(after.class.roster.length, 0);
});

test('learner routes: no session 401, a forged session 401, a teacher\'s adult cookie is not a learner session, CSRF header required', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const c = await created(s);
  const a = await s.stu('Zola');
  const body = { code: c.joinCode };
  assert.equal((await handleJoin(req('/api/classes/join', { action: 'class-join', body }), s.deps())).status, 401);
  assert.equal((await handleJoin(req('/api/classes/join', { action: 'class-join', cookie: `pp_session=${a.id}.${'0'.repeat(64)}`, body }), s.deps())).status, 401);
  assert.equal((await handleJoin(req('/api/classes/join', { action: 'class-join', cookie: s.tc, body }), s.deps())).status, 401);
  assert.equal((await handleJoin(req('/api/classes/join', { action: 'nope', cookie: a.cookie, body }), s.deps())).status, 403);
  assert.equal((await handleMyClasses(req('/api/classes/mine'), s.deps())).status, 401);
  assert.equal((await s.t.db.all('SELECT 1 FROM class_members')).length, 0);
});

test('joining is rate limited per learner and per address, so a code cannot be guessed; wrong codes all look the same', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const a = await s.stu('Guesser');
  const join = (code: string, d: ClassDeps) => handleJoin(req('/api/classes/join', { action: 'class-join', cookie: a.cookie, body: { code } }), d);
  const statuses: number[] = [];
  for (let i = 0; i < 12; i++) statuses.push((await join('ZZZZZZZZ', s.deps())).status);
  assert.deepEqual(statuses.slice(0, 10), Array(10).fill(404));
  assert.deepEqual(statuses.slice(10), [429, 429]);
  const b = await s.stu('Other');
  const ip = createLimiter(2, 600_000);
  const d = s.deps({ ipBurst: ip });
  const r = [];
  for (let i = 0; i < 3; i++) r.push((await handleJoin(req('/api/classes/join', { action: 'class-join', cookie: b.cookie, body: { code: 'ZZZZZZZZ' } }), d)).status);
  assert.deepEqual(r, [404, 404, 429]);
});

test('a learner cannot leave a class they are not in, and cannot use another learner\'s class id', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const c = await created(s);
  const a = await s.stu('A'); const b = await s.stu('B');
  await handleJoin(req('/api/classes/join', { action: 'class-join', cookie: a.cookie, body: { code: c.joinCode } }), s.deps());
  assert.equal((await handleLeave(req(`/api/classes/${c.id}/leave`, { action: 'class-leave', cookie: b.cookie }), s.deps(), c.id)).status, 404);
  assert.equal((await s.t.db.all('SELECT 1 FROM class_members WHERE left_at IS NULL')).length, 1, 'A is still in');
});


import { handleArchiveScope, handleCatalog, handleCreateScope, handleListScopes } from './http';

test('exam scope routes: teacher only, CSRF header on writes, the catalog lists real subjects and topics', async (ctx) => {
  const s = await setup(); if (!s) return ctx.skip('node:sqlite unavailable');
  const c = await created(s);
  const cat = (q: string, cookie: string | undefined) => handleCatalog(req(`/api/teacher/catalog?${q}`, { cookie }), s.deps());
  assert.equal((await cat('grade=6', undefined)).status, 401);
  assert.equal((await cat('grade=6', s.pc)).status, 403);
  assert.equal((await cat('grade=3', s.tc)).status, 400);
  assert.equal((await cat('grade=6&subject=Bad Subject', s.tc)).status, 400);
  const subjects = ((await (await cat('grade=6', s.tc)).json()) as { subjects: { code: string }[] }).subjects;
  assert.ok(subjects.some((x) => x.code === 'nst'));
  const topics = ((await (await cat('grade=6&subject=nst', s.tc)).json()) as { topics: { task: string }[] }).topics;
  assert.ok(topics.length >= 5);

  const day = new Date(Date.UTC(2027, 0, 15)).toISOString().slice(0, 10);
  const body = { subject: 'nst', title: 'Term 3 test', tasks: topics.slice(0, 3).map((x) => x.task), examDate: day };
  const create = (action: string, cookie: string) => handleCreateScope(req(`/api/teacher/classes/${c.id}/scopes`, { action, cookie, body }), s.deps({ now: Date.UTC(2026, 10, 15) }), c.id);
  assert.equal((await create('scope-create', s.pc)).status, 403);
  assert.equal((await create('wrong', s.tc)).status, 403);
  const ok = await create('scope-create', s.tc);
  assert.equal(ok.status, 201);
  const scope = ((await ok.json()) as { scope: { id: string } }).scope;
  const list = ((await (await handleListScopes(req(`/api/teacher/classes/${c.id}/scopes`, { cookie: s.tc }), s.deps(), c.id)).json()) as { scopes: unknown[] }).scopes;
  assert.equal(list.length, 1);
  assert.equal((await handleArchiveScope(req(`/api/teacher/classes/${c.id}/scopes/${scope.id}/archive`, { action: 'scope-archive', cookie: s.pc }), s.deps(), c.id, scope.id)).status, 403);
  assert.equal((await handleArchiveScope(req(`/api/teacher/classes/${c.id}/scopes/${scope.id}/archive`, { action: 'scope-archive', cookie: s.tc }), s.deps(), c.id, scope.id)).status, 200);
});
