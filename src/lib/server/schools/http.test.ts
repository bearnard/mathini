import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openSchoolsDb, addUser, NOW } from './testDb';
import { createSession, ADULT_COOKIE } from '../adultAuth/sessions';
import { handleApply, handleOwnApplication } from './http';

const URL_ = 'https://example.invalid/api/teacher/apply';
const post = (cookie: string | null, body: unknown, over: Record<string, string> = {}) =>
  new Request(URL_, { method: 'POST', headers: { 'content-type': 'application/json', 'x-auth-action': 'teacher-apply', origin: 'https://example.invalid', ...(cookie ? { cookie: `${ADULT_COOKIE}=${cookie}` } : {}), ...over }, body: JSON.stringify(body) });
const good = { saceNumber: '12345678', schoolName: 'Bay Primary', province: 'Western Cape' };

async function signedIn() {
  const t = await openSchoolsDb();
  if (!t) return null;
  const id = addUser(t, 'a@example.invalid');
  const { token } = await createSession(t.db, id, NOW);
  return { t, id, token, deps: { db: t.db, now: NOW + 1000 } };
}

test('a signed-in adult can apply; the response never grants the role', async (ctx) => {
  const s = await signedIn(); if (!s) return ctx.skip('node:sqlite unavailable');
  const res = await handleApply(post(s.token, good), s.deps);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true, status: 'pending' });
  assert.deepEqual((s.t.raw.prepare('SELECT role FROM user_roles WHERE user_id = ?').all(s.id) as { role: string }[]).map((r) => r.role), ['parent']);
  const own = await (await handleOwnApplication(new Request('https://example.invalid/api/teacher/application', { headers: { cookie: `${ADULT_COOKIE}=${s.token}` } }), s.deps)).json() as { application: Record<string, unknown> };
  assert.equal(own.application.status, 'pending');
  assert.equal(own.application.saceMasked, '*****678');
  assert.ok(!JSON.stringify(own).includes('12345678'), 'the full SACE number is never sent back');
});

test('nobody signed in: 401; the CSRF headers are required: 403; bad JSON or a huge body: 400/413', async (ctx) => {
  const s = await signedIn(); if (!s) return ctx.skip('node:sqlite unavailable');
  assert.equal((await handleApply(post(null, good), s.deps)).status, 401);
  assert.equal((await handleApply(post(s.token, good, { 'x-auth-action': 'other' }), s.deps)).status, 403);
  assert.equal((await handleApply(post(s.token, good, { origin: 'https://evil.invalid' }), s.deps)).status, 403);
  const badJson = new Request(URL_, { method: 'POST', headers: { 'x-auth-action': 'teacher-apply', origin: 'https://example.invalid', cookie: `${ADULT_COOKIE}=${s.token}` }, body: '{nope' });
  assert.equal((await handleApply(badJson, s.deps)).status, 400);
  const big = await handleApply(post(s.token, { ...good, subjectsNote: 'x'.repeat(5000) }), s.deps);
  assert.equal(big.status, 400);
  assert.equal((await s.t.db.all('SELECT 1 FROM teacher_applications')).length, 0);
});

test('validation errors and a second application answer with a message, not a crash', async (ctx) => {
  const s = await signedIn(); if (!s) return ctx.skip('node:sqlite unavailable');
  assert.equal((await handleApply(post(s.token, { ...good, saceNumber: '' }), s.deps)).status, 400);
  assert.equal((await handleApply(post(s.token, good), s.deps)).status, 200);
  const second = await handleApply(post(s.token, good), s.deps);
  assert.equal(second.status, 409);
});

test('own application: 401 when signed out, null when there is none', async (ctx) => {
  const s = await signedIn(); if (!s) return ctx.skip('node:sqlite unavailable');
  const get = (cookie: string | null) => handleOwnApplication(new Request('https://example.invalid/api/teacher/application', { headers: cookie ? { cookie: `${ADULT_COOKIE}=${cookie}` } : {} }), s.deps);
  assert.equal((await get(null)).status, 401);
  assert.deepEqual(await (await get(s.token)).json(), { application: null });
});
