import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { ATTEMPTS_PER_MINUTE, HOUR_MS, LOGIN_FAILED, LOGIN_FAILURES_PER_HOUR, SIGNUPS_PER_HOUR_PER_IP, burnPinCheck, loginBlocked, noteLoginFailure, signupAllowed } from './learnerGuards';
import { createLimiter } from './adultAuth/rateLimit';
import { hashPin, verifyPin } from './identity';
import { openParentsDb } from './parents/testDb';

const NOW = 1_800_000_000_000;
const read = (f: string) => fs.readFileSync(f, 'utf8');

test('login: 10 wrong tries on one code block it for an hour; other codes are not affected; the counter holds a hash, never the code', async (t0) => {
  const x = await openParentsDb(); if (!x) return t0.skip('node:sqlite unavailable');
  assert.equal(await loginBlocked(x.db, 'TIGER-4821', NOW), false);
  for (let i = 0; i < LOGIN_FAILURES_PER_HOUR; i++) {
    assert.equal(await loginBlocked(x.db, 'TIGER-4821', NOW + i), false, `try ${i + 1} is still allowed`);
    await noteLoginFailure(x.db, 'TIGER-4821', NOW + i);
  }
  assert.equal(await loginBlocked(x.db, 'TIGER-4821', NOW + 100), true, 'blocked after 10 failures');
  assert.equal(await loginBlocked(x.db, 'EAGLE-1111', NOW + 100), false, 'another code is fine');
  assert.equal(await loginBlocked(x.db, 'TIGER-4821', NOW + HOUR_MS + 1), false, 'the block ends with the hour');
  assert.ok(!JSON.stringify(x.raw.prepare('SELECT * FROM auth_rate').all()).includes('TIGER'), 'a hash, not the code');
});

test('sign-up: 60 an hour per connection (a class fits), then 429 until the hour ends; another connection is unaffected', async (t0) => {
  const x = await openParentsDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const results: boolean[] = [];
  for (let i = 0; i < SIGNUPS_PER_HOUR_PER_IP + 3; i++) results.push(await signupAllowed(x.db, '41.1.2.3', NOW + i));
  assert.equal(results.filter(Boolean).length, SIGNUPS_PER_HOUR_PER_IP);
  assert.deepEqual(results.slice(-3), [false, false, false]);
  assert.equal(await signupAllowed(x.db, '41.9.9.9', NOW), true);
  assert.equal(await signupAllowed(x.db, '41.1.2.3', NOW + HOUR_MS), true);
  assert.ok(!JSON.stringify(x.raw.prepare('SELECT * FROM auth_rate').all()).includes('41.1.2.3'));
  assert.ok(SIGNUPS_PER_HOUR_PER_IP >= 35, 'room for a full class behind one school connection');
});

test('the durable guards fail OPEN: if the counter table or D1 is unavailable, learners can still log in and sign up', async () => {
  const broken = { all: async () => { throw new Error('no such table: auth_rate'); }, batch: async () => { throw new Error('D1 down'); } };
  assert.equal(await loginBlocked(broken, 'TIGER-4821', NOW), false);
  await assert.doesNotReject(noteLoginFailure(broken, 'TIGER-4821', NOW));
  assert.equal(await signupAllowed(broken, '1.2.3.4', NOW), true);
});

test('a login code that does not exist costs a PIN hash, like a wrong PIN, so it is not faster', async () => {
  const { hash, salt } = await hashPin('4821');
  const time = async (f: () => Promise<unknown>) => { const t = performance.now(); await f(); return performance.now() - t; };
  const med = async (f: () => Promise<unknown>) => { const v: number[] = []; for (let i = 0; i < 5; i++) v.push(await time(f)); return v.sort((a, b) => a - b)[2]; };
  const wrong = await med(() => verifyPin('0000', salt, hash));
  const burn = await med(() => burnPinCheck('0000'));
  assert.ok(burn > wrong * 0.4, `burn ${burn.toFixed(1)} ms vs wrong PIN ${wrong.toFixed(1)} ms`);
  assert.equal(await verifyPin('4821', '00000000000000000000000000000000', '0'.repeat(64)), false);
});

test('the login route gives ONE message for a wrong code and a wrong PIN, a distinct "too many tries, wait N minutes" for a locked code, and checks the durable limit first', () => {
  const route = read('src/app/api/session/route.ts');
  assert.ok(!/Invalid login code|Invalid PIN/.test(route), 'no message that says which half was wrong');
  assert.equal((route.match(/error: LOGIN_FAILED/g) ?? []).length, 2, 'an unknown code and a wrong PIN both answer LOGIN_FAILED');
  assert.equal((route.match(/loginLockedMessage\(/g) ?? []).length, 2, 'the durable lock and the per-isolate limit both say how long to wait');
  assert.ok(route.indexOf('loginLockedMinutes(') < route.indexOf('FROM students WHERE login_code'), 'the durable limit is checked before the lookup');
  assert.equal((route.match(/burnPinCheck\(pin\)/g) ?? []).length, 1, 'an unknown code still pays for a PIN hash (a locked code is answered before any hashing)');
  assert.equal((route.match(/noteLoginFailure\(/g) ?? []).length, 2, 'both kinds of failure are counted, so an unknown code locks exactly like a real one');
  assert.ok(LOGIN_FAILED.includes('ask a parent to reset your PIN'));
});

test('sign-up is limited per connection and its 500 never carries the error text', () => {
  const route = read('src/app/api/students/route.ts');
  assert.ok(route.includes('signupAllowed(') && route.indexOf('signupAllowed(') < route.indexOf('crypto.randomUUID()'), 'checked before any work');
  assert.ok(route.includes('status: 429'));
  assert.ok(!/Internal server error: /.test(route) && !/err instanceof Error \? err\.message/.test(route), 'no error text in the response');
});

test('the write-heavy learner routes have a burst limit that stops a runaway client but not a whole session sent at once', () => {
  assert.ok(ATTEMPTS_PER_MINUTE >= 100, 'a practice screen can send 50 answers together');
  const l = createLimiter(ATTEMPTS_PER_MINUTE, 60_000);
  let ok = 0;
  for (let i = 0; i < ATTEMPTS_PER_MINUTE + 20; i++) if (l.allow('s1', NOW)) ok++;
  assert.equal(ok, ATTEMPTS_PER_MINUTE);
  assert.ok(l.allow('s2', NOW), 'per learner');
  assert.ok(read('src/app/api/attempts/route.ts').includes('attemptsLimiter.allow(studentId'));
  assert.ok(read('src/app/api/runs/route.ts').includes('runStartLimiter.allow(studentId'));
  assert.ok(read('src/app/api/runs/[id]/finish/route.ts').includes('runFinishLimiter.allow(studentId'));
  const attempts = read('src/app/api/attempts/route.ts');
  assert.ok(attempts.indexOf('verifySession') < attempts.indexOf('attemptsLimiter.allow'), 'only signed-in learners reach the limiter');
});
