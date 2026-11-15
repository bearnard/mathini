import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { currentSessionVersion, parseSession, signSession, signSessionV, verifyLiveSession, verifySession } from './session';
import { resetChildPin } from './parents/pinReset';
import { handleCreateInvite } from './parents/http';
import { addStudent, openParentsDb, type ParentsTestDb } from './parents/testDb';

const SECRET = 'session-version-secret';
const NOW = 1_800_000_000_000;
const ORIGIN = 'https://scholar.hibbins.org';
const read = (f: string) => fs.readFileSync(f, 'utf8');

test('a versioned token carries the id and the version, and nothing else passes as one', async () => {
  const t = await signSessionV('student-0001', 3, SECRET);
  assert.match(t, /^student-0001\.3\.[0-9a-f]{64}$/);
  assert.deepEqual(await parseSession(t, SECRET), { studentId: 'student-0001', version: 3 });
  assert.equal(await parseSession(t, 'other-secret'), null);
  const [id, , sig] = t.split('.');
  assert.equal(await parseSession(`${id}.4.${sig}`, SECRET), null, 'the version is signed: changing it breaks the signature');
  assert.equal(await parseSession(`other-student.3.${sig}`, SECRET), null);
  // a legacy signature (over the id alone) cannot be dressed up as a version-0 token, and a new signature is not a legacy one
  const legacy = await signSession('student-0001', SECRET);
  assert.equal(await parseSession(`student-0001.0.${legacy.split('.')[1]}`, SECRET), null);
  assert.equal(await parseSession(`student-0001.${sig}`, SECRET), null);
  for (const bad of ['', undefined, 'a', 'a.b.c.d', 'student-0001.-1.' + sig, 'student-0001.x.' + sig, `student-0001.1.${'z'.repeat(64)}`, 'student-0001.1.abcd', 'x'.repeat(300)]) assert.equal(await parseSession(bad, SECRET), null, String(bad));
});

test('a cookie from before the migration still works as version 0, and nobody is signed out by the rollout', async () => {
  const legacy = await signSession('student-0001', SECRET);
  assert.deepEqual(await parseSession(legacy, SECRET), { studentId: 'student-0001', version: 0 });
  assert.equal(await verifySession(legacy, SECRET), 'student-0001');
  assert.equal(await verifySession(await signSessionV('student-0001', 0, SECRET), SECRET), null, 'the plain check only knows the old format; routes use verifyLiveSession');
});

async function world() {
  const x = await openParentsDb(); if (!x) return null;
  await addStudent(x, 'student-0001', 'TIGER-4821', '4821');
  await addStudent(x, 'student-0002', 'EAGLE-1111', '1111');
  return x;
}
const bump = (x: ParentsTestDb, id: string) => x.raw.prepare('UPDATE students SET session_version = session_version + 1 WHERE id = ?').run(id);

test('verifyLiveSession: the version in the cookie must be the learner\'s current one; a bump signs out every older cookie at once', async (t0) => {
  const x = await world(); if (!x) return t0.skip('node:sqlite unavailable');
  const legacy = await signSession('student-0001', SECRET);
  const v0 = await signSessionV('student-0001', 0, SECRET);
  const other = await signSessionV('student-0002', 0, SECRET);
  for (const t of [legacy, v0]) assert.equal(await verifyLiveSession(x.db, t, SECRET), 'student-0001');
  bump(x, 'student-0001');
  assert.equal(await verifyLiveSession(x.db, legacy, SECRET), null, 'the old cookie from before');
  assert.equal(await verifyLiveSession(x.db, v0, SECRET), null, 'and the version-0 cookie');
  const v1 = await signSessionV('student-0001', 1, SECRET);
  assert.equal(await verifyLiveSession(x.db, v1, SECRET), 'student-0001', 'a new login (version 1) works');
  assert.equal(await verifyLiveSession(x.db, other, SECRET), 'student-0002', 'another learner is not affected');
  bump(x, 'student-0001');
  assert.equal(await verifyLiveSession(x.db, v1, SECRET), null, 'a second reset signs out the first new login too');
  assert.equal(await verifyLiveSession(x.db, await signSessionV('student-0001', 5, SECRET), SECRET), null, 'a version from the future is not accepted either');
  assert.equal(await verifyLiveSession(x.db, undefined, SECRET), null);
});

test('a deleted learner\'s cookie stops working, and an unknown learner never verifies', async (t0) => {
  const x = await world(); if (!x) return t0.skip('node:sqlite unavailable');
  const t = await signSessionV('student-0002', 0, SECRET);
  assert.equal(await verifyLiveSession(x.db, t, SECRET), 'student-0002');
  x.raw.prepare('DELETE FROM students WHERE id = ?').run('student-0002');
  assert.equal(await verifyLiveSession(x.db, t, SECRET), null, 'no more answers recorded for someone who was erased');
  assert.equal(await verifyLiveSession(x.db, await signSessionV('ghost', 0, SECRET), SECRET), null);
  assert.equal(await currentSessionVersion(x.db, 'ghost'), null);
});

test('a PIN reset by a parent bumps the version and signs the child out everywhere; other children are untouched; the new PIN\'s login gets the new version', async (t0) => {
  const x = await world(); if (!x) return t0.skip('node:sqlite unavailable');
  const phone = await signSessionV('student-0001', 0, SECRET);
  const oldTablet = await signSession('student-0001', SECRET);
  const sibling = await signSessionV('student-0002', 0, SECRET);
  assert.equal(await currentSessionVersion(x.db, 'student-0001'), 0);
  const r = await resetChildPin(x.db, 'parent-1', 'student-0001', NOW);
  assert.ok(r.ok);
  assert.equal(await currentSessionVersion(x.db, 'student-0001'), 1);
  assert.equal(await currentSessionVersion(x.db, 'student-0002'), 0);
  assert.equal(await verifyLiveSession(x.db, phone, SECRET), null);
  assert.equal(await verifyLiveSession(x.db, oldTablet, SECRET), null);
  assert.equal(await verifyLiveSession(x.db, sibling, SECRET), 'student-0002');
  // what the login route does after the child types the new PIN
  const fresh = await signSessionV('student-0001', (await currentSessionVersion(x.db, 'student-0001')) ?? 0, SECRET);
  assert.equal(await verifyLiveSession(x.db, fresh, SECRET), 'student-0001');
  await resetChildPin(x.db, 'parent-1', 'student-0001', NOW + 1000);
  assert.equal(await verifyLiveSession(x.db, fresh, SECRET), null, 'every reset signs out the previous login');
});

test('without migration 0019 nothing breaks: old cookies keep working, the PIN reset still changes the PIN, and nobody is signed out by mistake', async (t0) => {
  const x = await world(); if (!x) return t0.skip('node:sqlite unavailable');
  x.raw.exec('ALTER TABLE students DROP COLUMN session_version');
  assert.equal(await currentSessionVersion(x.db, 'student-0001'), 0, 'every learner is version 0');
  assert.equal(await currentSessionVersion(x.db, 'ghost'), null);
  assert.equal(await verifyLiveSession(x.db, await signSession('student-0001', SECRET), SECRET), 'student-0001');
  assert.equal(await verifyLiveSession(x.db, await signSessionV('student-0001', 0, SECRET), SECRET), 'student-0001');
  const before = (x.raw.prepare('SELECT pin_hash FROM students WHERE id = ?').get('student-0001') as { pin_hash: string }).pin_hash;
  const r = await resetChildPin(x.db, 'parent-1', 'student-0001', NOW);
  assert.ok(r.ok);
  assert.notEqual((x.raw.prepare('SELECT pin_hash FROM students WHERE id = ?').get('student-0001') as { pin_hash: string }).pin_hash, before, 'the PIN changed');
  assert.equal(x.raw.prepare('SELECT COUNT(*) AS n FROM pin_resets').get()?.n, 1, 'and the reset was logged');
});

test('the invite maker (parents) and every learner route use the live check, so a signed-out device gets 401', async (t0) => {
  const x = await world(); if (!x) return t0.skip('node:sqlite unavailable');
  const call = (cookie: string) => handleCreateInvite(new Request(`${ORIGIN}/api/students/me/parent-invite`, { method: 'POST', headers: { origin: ORIGIN, 'x-auth-action': 'parent-invite', cookie: `pp_session=${cookie}` }, body: '{}' }), { db: x.db, now: NOW, sessionSecret: SECRET, log: () => undefined });
  const old = await signSessionV('student-0001', 0, SECRET);
  assert.equal((await call(old)).status, 200);
  bump(x, 'student-0001');
  assert.equal((await call(old)).status, 401, 'the old device');
  assert.equal((await call(await signSessionV('student-0001', 1, SECRET))).status, 200, 'the new login');
});

test('wiring: every route that reads pp_session checks the live version; login and sign-up issue versioned cookies; the old plain check is gone from routes', () => {
  const routes = ['runs/route.ts', 'runs/[id]/finish/route.ts', 'progress/route.ts', 'students/me/weak-sections/route.ts', 'review/today/route.ts', 'review/retire/route.ts', 'questions/report/route.ts', 'leaderboard/route.ts', 'consent/route.ts', 'attempts/route.ts', 'session/route.ts', 'events/route.ts'];
  for (const r of routes) {
    const src = read(`src/app/api/${r}`);
    assert.ok(src.includes('verifyLiveSession('), r);
    assert.ok(!/[^e]verifySession\(/.test(src.replace(/verifySession: \(token\)/g, '')), `${r} still uses the signature-only check`);
  }
  assert.ok(read('src/lib/server/schools/http.ts').includes('verifyLiveSession(deps.db'));
  assert.ok(read('src/lib/server/parents/http.ts').includes('verifyLiveSession(deps.db'));
  const login = read('src/app/api/session/route.ts');
  assert.ok(login.includes('signSessionV(student.id, (await currentSessionVersion(guard, student.id)) ?? 0') && !login.includes('signSession('), 'login issues the CURRENT version');
  assert.ok(read('src/app/api/students/route.ts').includes('signSessionV(studentId, 0,'));
  assert.ok(read('src/lib/server/parents/pinReset.ts').includes('session_version = session_version + 1'));
});

test('migration 0019 is one column with a constant default, so every learner and every old cookie is version 0', () => {
  const sql = read('migrations/0019_session_version.sql').replace(/--.*$/gm, '').trim();
  assert.equal(sql, 'ALTER TABLE students ADD COLUMN session_version INTEGER NOT NULL DEFAULT 0;');
});
