import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { HOUR_MS, LOGIN_FAILED, LOGIN_FAILURES_PER_HOUR, loginLockedMessage, loginLockedMinutes, noteLoginFailure } from './learnerGuards';
import { ownLoginCode } from './loginCode';
import { signSessionV } from './session';
import { clearPending, readPending, savePending } from '../client/pendingCredentials';
import { addStudent, openParentsDb } from './parents/testDb';

const NOW = 1_800_000_000_000;
const SECRET = 'login-paths-secret';
const read = (f: string) => fs.readFileSync(f, 'utf8');

test('a locked login code says so, with the minutes left, and the same goes for a code that does not exist: nothing about the PIN or the code is revealed', async (t0) => {
  const x = await openParentsDb(); if (!x) return t0.skip('node:sqlite unavailable');
  await addStudent(x, 'student-0001', 'TIGER-4821', '4821');
  assert.equal(await loginLockedMinutes(x.db, 'TIGER-4821', NOW), 0, 'not locked');
  for (let i = 0; i < LOGIN_FAILURES_PER_HOUR - 1; i++) await noteLoginFailure(x.db, 'TIGER-4821', NOW);
  assert.equal(await loginLockedMinutes(x.db, 'TIGER-4821', NOW), 0, 'nine failures: still allowed');
  await noteLoginFailure(x.db, 'TIGER-4821', NOW);
  assert.equal(await loginLockedMinutes(x.db, 'TIGER-4821', NOW + 1000), 60, 'locked for the rest of the hour');
  assert.equal(await loginLockedMinutes(x.db, 'TIGER-4821', NOW + 41 * 60_000), 19, 'the minutes count down (rounded up)');
  assert.equal(await loginLockedMinutes(x.db, 'TIGER-4821', NOW + HOUR_MS - 1000), 1, 'never "0 minutes" while locked');
  assert.equal(await loginLockedMinutes(x.db, 'TIGER-4821', NOW + HOUR_MS + 1), 0, 'unlocked when the hour ends');
  // a code nobody has is locked in exactly the same way after the same failures (the unknown-code path counts them too)
  for (let i = 0; i < LOGIN_FAILURES_PER_HOUR; i++) await noteLoginFailure(x.db, 'NOPE-0000', NOW);
  assert.equal(await loginLockedMinutes(x.db, 'NOPE-0000', NOW + 1000), 60);
  assert.equal(await loginLockedMinutes(x.db, 'EAGLE-1111', NOW), 0, 'another code is not affected');
  assert.match(loginLockedMessage(19), /^Too many tries\. Wait 19 minutes and try again, or ask a parent to reset your PIN\.$/);
  assert.match(loginLockedMessage(1), /Wait 1 minute and/);
  assert.notEqual(loginLockedMessage(5), LOGIN_FAILED, 'a lock is not worded like a wrong PIN');
  assert.ok(!/pin (is|was) (right|wrong|correct)/i.test(loginLockedMessage(5)));
  // the route answers a lock before it looks at the PIN, with 429 and Retry-After, and the wrong-PIN answer is unchanged
  const route = read('src/app/api/session/route.ts');
  assert.ok(route.indexOf('loginLockedMinutes(') < route.indexOf('SELECT id, pin_hash') && /status: 429, headers: \{ 'Retry-After'/.test(route));
  assert.ok(route.includes('error: LOGIN_FAILED }, { status: 401 }'));
});

test('a learner can read their OWN login code and never the PIN; nobody else\'s, and not when signed out', async (t0) => {
  const x = await openParentsDb(); if (!x) return t0.skip('node:sqlite unavailable');
  await addStudent(x, 'student-0001', 'TIGER-4821', '4821');
  await addStudent(x, 'student-0002', 'EAGLE-1111', '1111');
  const c1 = await signSessionV('student-0001', 0, SECRET);
  const c2 = await signSessionV('student-0002', 0, SECRET);
  assert.deepEqual(await ownLoginCode(x.db, c1, SECRET), { ok: true, loginCode: 'TIGER-4821' });
  assert.deepEqual(await ownLoginCode(x.db, c2, SECRET), { ok: true, loginCode: 'EAGLE-1111' });
  assert.deepEqual(await ownLoginCode(x.db, undefined, SECRET), { ok: false, status: 401 });
  assert.deepEqual(await ownLoginCode(x.db, 'student-0001.0.' + '0'.repeat(64), SECRET), { ok: false, status: 401 }, 'a forged cookie');
  assert.deepEqual(await ownLoginCode(x.db, c1, 'another-secret'), { ok: false, status: 401 });
  const body = JSON.stringify(await ownLoginCode(x.db, c1, SECRET));
  assert.ok(!/pin|4821|hash|salt/i.test(body.replace('TIGER-4821', '')), 'the answer carries the code and nothing else');
  // a PIN reset signs the old cookie out, so it cannot read the code any more
  x.raw.prepare('UPDATE students SET session_version = session_version + 1 WHERE id = ?').run('student-0001');
  assert.deepEqual(await ownLoginCode(x.db, c1, SECRET), { ok: false, status: 401 });
  const route = read('src/app/api/students/me/login-code/route.ts');
  assert.ok(route.includes("'Cache-Control': 'no-store'") && !/pin/i.test(route.replace(/pin_|PIN/g, '')));
});

test('a new learner who reloads before "I\'ve saved it" still sees the code and PIN; nothing survives once confirmed or for a bad record', () => {
  const mem = new Map<string, string>();
  const store = { getItem: (k: string) => mem.get(k) ?? null, setItem: (k: string, v: string) => void mem.set(k, v), removeItem: (k: string) => void mem.delete(k) };
  assert.equal(readPending(store), null);
  savePending({ loginCode: 'DOLPHIN-8408', pin: '3219' }, store);
  assert.deepEqual(readPending(store), { loginCode: 'DOLPHIN-8408', pin: '3219' }, 'after a reload');
  clearPending(store);
  assert.equal(readPending(store), null, 'gone once confirmed');
  mem.set('pp_new_login', '{"loginCode":"<script>","pin":"3219"}');
  assert.equal(readPending(store), null, 'a malformed record is ignored');
  mem.set('pp_new_login', 'not json');
  assert.equal(readPending(store), null);
  assert.equal(readPending(null), null, 'no storage at all (private mode)');
  assert.doesNotThrow(() => savePending({ loginCode: 'A-1234', pin: '1234' }, { getItem: () => null, setItem: () => { throw new Error('full'); }, removeItem: () => undefined }));
  // sessionStorage (this tab only), never localStorage
  assert.ok(/sessionStorage/.test(read('src/lib/client/pendingCredentials.ts')) && !/localStorage/.test(read('src/lib/client/pendingCredentials.ts')));
});

test('the screens: the save-code screen warns that only the PIN is shown once; the login screen has the help for a forgotten PIN or code; the home screen has "My login code"', async () => {
  const SaveLoginCode = (await import('../../components/onboarding/SaveLoginCode')).default;
  const saved = renderToStaticMarkup(createElement(SaveLoginCode, { loginCode: 'DOLPHIN-8408', pin: '3219', onSaved: () => undefined }));
  assert.ok(saved.includes('DOLPHIN-8408') && saved.includes('3219') && saved.includes('saved it'));
  assert.ok(!/won(&#x27;|')t see this code again/.test(saved), 'the code can be seen again, so it no longer says it cannot');
  const ResumeFlow = (await import('../../components/onboarding/ResumeFlow')).default;
  const { StudentProvider } = await import('../client/StudentContext');
  const login = renderToStaticMarkup(createElement(StudentProvider, null, createElement(ResumeFlow, { onDone: () => undefined })));
  const text = login.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  assert.ok(text.includes('Forgot your login code or PIN?') && /parent or guardian who has linked to you/.test(text) && /My login code/.test(text) && /teacher/.test(text));
  assert.ok(login.includes('data-testid="login-help"'));
  const MyLoginCode = (await import('../../components/onboarding/MyLoginCode')).default;
  const card = renderToStaticMarkup(createElement(MyLoginCode));
  assert.ok(card.includes('Show my login code') && !card.includes('data-testid="my-login-code"'), 'hidden until asked for');
  const app = read('src/App.tsx');
  assert.ok(app.includes('readPending()') && app.includes('<SaveLoginCode') && app.includes('<MyLoginCode />'), 'the app shows the pending code after a reload and has the home card');
  assert.ok(app.indexOf('if (pending)') < app.indexOf('<ConsentGate />'), 'before the rest of the app');
});
