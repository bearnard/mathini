import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { CONSENT_VERSION } from '../../privacyNotice';
import { generateToken, sha256Hex } from '../adultAuth/crypto';
import { verifyPin } from '../identity';
import { signSession } from '../session';
import { CHILD_FAILURES_PER_HOUR, HOUR_MS, INVITE_TTL_MS, MAX_ACTIVE_INVITES, NOT_RIGHT, PARENT_ATTEMPTS_PER_HOUR, createInvite, isLinked, linkByInvite, linkByPin, listChildren, previewInvite } from './links';
import { parentWithdrew, setParentConsent } from './consent';
import { RESETS_PER_CHILD_PER_DAY, RESETS_PER_PARENT_PER_DAY, resetChildPin } from './pinReset';
import { loadChildProgress } from './progressSeam';
import { refreshForRun } from '../progress/topicProgress';
import { handleChildConsent, handleChildProgress, handleChildResetPin, handleChildUnlink, handleCreateInvite, handleLinkInvite, handleInvitePreview, handleLinkPin, handleListChildren, type ParentDeps } from './http';
import { NOW, SECRET, addAdult, addStudent, openParentsDb, type ParentsTestDb } from './testDb';

const SQL = fs.readFileSync('migrations/0015_parents.sql', 'utf8');
const ORIGIN = 'https://scholar.hibbins.org';
const silent = (x: ParentsTestDb, over: Partial<ParentDeps> = {}): ParentDeps => ({ db: x.db, now: NOW, sessionSecret: SECRET, log: () => undefined, ...over });
const post = (path: string, action: string | null, cookie: string | undefined, body: unknown = {}) =>
  new Request(`${ORIGIN}${path}`, { method: 'POST', headers: { origin: ORIGIN, ...(action ? { 'x-auth-action': action } : {}), ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
const get = (path: string, cookie?: string) => new Request(`${ORIGIN}${path}`, { headers: cookie ? { cookie } : {} });
const count = (x: ParentsTestDb, sql: string) => (x.raw.prepare(sql).get() as { n: number }).n;
const setup = async () => {
  const x = await openParentsDb(); if (!x) return null;
  await addStudent(x, 'student-0001', 'TIGER-4821', '4821', { name: 'Tiger Kid' });
  await addStudent(x, 'student-0002', 'EAGLE-1111', '1111', { name: 'Eagle Kid' });
  const mum = await addAdult(x, 'mum@example.com');
  const dad = await addAdult(x, 'dad@example.com');
  return { ...x, mum, dad };
};

// ---------- the migration ----------

test('0015 is additive and idempotent, and stores only invite-token HASHES', async (t0) => {
  const code = SQL.replace(/--.*$/gm, '');
  assert.ok(!/\b(DROP|ALTER|DELETE|UPDATE|INSERT|REPLACE)\b/i.test(code), 'only CREATE statements');
  for (const m of code.matchAll(/CREATE\s+(TABLE|INDEX)\s+(?!IF NOT EXISTS)/gi)) assert.fail(`not idempotent: ${m[0]}`);
  assert.ok(!/REFERENCES|FOREIGN KEY/i.test(code));
  assert.ok(/token_hash\s+TEXT\s+NOT NULL\s+UNIQUE/.test(code) && !/\btoken\s+TEXT\b/i.test(code));
  const x = await openParentsDb(); if (!x) return t0.skip('node:sqlite unavailable');
  x.raw.exec(SQL);
});

// ---------- linking by code + PIN ----------

test('linking with the right code and PIN links the child and records the parent\'s consent (account, time, notice version), replacing the learner\'s tick', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  x.raw.prepare('UPDATE students SET parent_consent_at = 5, consent_version = ? WHERE id = ?').run('old-notice', 'student-0001'); // the learner's own tick
  assert.deepEqual((await listChildren(x.db, x.mum.userId)), []);
  const r = await linkByPin(x.db, x.mum.userId, { loginCode: ' tiger-4821 ', pin: '4821', consent: true }, NOW);
  assert.deepEqual(r, { ok: true, studentId: 'student-0001', displayName: 'Tiger Kid' });
  assert.ok(await isLinked(x.db, x.mum.userId, 'student-0001'));
  const s = x.raw.prepare('SELECT parent_consent_at, consent_version FROM students WHERE id = ?').get('student-0001') as { parent_consent_at: number; consent_version: string };
  assert.deepEqual([s.parent_consent_at, s.consent_version], [NOW, CONSENT_VERSION]);
  const ev = x.raw.prepare('SELECT student_id, user_id, action, notice_version, created_at FROM consent_events').all() as Record<string, unknown>[];
  assert.deepEqual(ev.map((e) => [e.student_id, e.user_id, e.action, e.notice_version, e.created_at]), [['student-0001', x.mum.userId, 'given', CONSENT_VERSION, NOW]]);
  assert.equal((await listChildren(x.db, x.mum.userId))[0].consent, 'parent');
});

test('linking without ticking consent links only: the learner\'s tick stays and no consent event is written', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  x.raw.prepare('UPDATE students SET parent_consent_at = 5, consent_version = ? WHERE id = ?').run('old-notice', 'student-0001');
  await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '4821', consent: false }, NOW);
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM consent_events'), 0);
  assert.equal((x.raw.prepare('SELECT parent_consent_at AS n FROM students WHERE id = ?').get('student-0001') as { n: number }).n, 5);
  assert.equal((await listChildren(x.db, x.mum.userId))[0].consent, 'learner');
  for (const bad of ['yes', 1, 'true', null, undefined]) {
    await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '4821', consent: bad }, NOW);
    assert.equal(count(x, 'SELECT COUNT(*) AS n FROM consent_events'), 0, `consent must be exactly true, not ${String(bad)}`);
  }
});

test('a wrong PIN, an unknown code and a malformed PIN all get the SAME answer', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const answers = [
    await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '0000', consent: true }, NOW),
    await linkByPin(x.db, x.mum.userId, { loginCode: 'NOBODY-9999', pin: '4821', consent: true }, NOW),
    await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: 'abcd', consent: true }, NOW),
    await linkByPin(x.db, x.mum.userId, { loginCode: '', pin: '', consent: true }, NOW),
    await linkByPin(x.db, x.mum.userId, { loginCode: { $ne: '' }, pin: ['4821'], consent: true }, NOW),
  ];
  for (const a of answers) assert.deepEqual(a, { ok: false, status: 400, error: NOT_RIGHT });
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM parent_links'), 0);
});

test('PIN guessing is capped per CHILD: after 5 wrong PINs even the right PIN is refused, with the SAME answer, so the limit reveals nothing', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  // different parents, so the per-parent limit is not what stops the guessing
  const parents = [x.mum, x.dad, await addAdult(x, 'a@example.com'), await addAdult(x, 'b@example.com'), await addAdult(x, 'c@example.com'), await addAdult(x, 'd@example.com')];
  for (let i = 0; i < CHILD_FAILURES_PER_HOUR; i++) assert.equal((await linkByPin(x.db, parents[i].userId, { loginCode: 'TIGER-4821', pin: String(1000 + i), consent: true }, NOW + i)).ok, false);
  const blocked = await linkByPin(x.db, parents[5].userId, { loginCode: 'TIGER-4821', pin: '4821', consent: true }, NOW + 10);
  assert.deepEqual(blocked, { ok: false, status: 400, error: NOT_RIGHT }, 'the right PIN is refused while the child is blocked');
  const unknown = await linkByPin(x.db, parents[5].userId, { loginCode: 'NOBODY-9999', pin: '4821', consent: true }, NOW + 11);
  assert.deepEqual(blocked, unknown, 'a blocked child looks like a code that does not exist');
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM parent_links'), 0);
  assert.equal((await linkByPin(x.db, parents[5].userId, { loginCode: 'EAGLE-1111', pin: '1111', consent: false }, NOW + 12)).ok, true, 'another child is not affected');
  assert.equal((await linkByPin(x.db, parents[5].userId, { loginCode: 'TIGER-4821', pin: '4821', consent: false }, NOW + HOUR_MS + 20)).ok, true, 'the block ends with the hour');
});

test('a parent can only try 10 times an hour, whoever the child is, and a blocked parent is told so (429)', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  for (let i = 0; i < PARENT_ATTEMPTS_PER_HOUR; i++) await linkByPin(x.db, x.mum.userId, { loginCode: `CODE-${i}`, pin: '1234', consent: false }, NOW + i);
  const eleventh = await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '4821', consent: false }, NOW + 50);
  assert.equal(eleventh.ok, false);
  assert.equal(!eleventh.ok && eleventh.status, 429);
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM parent_links'), 0);
  assert.equal((await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '4821', consent: false }, NOW + HOUR_MS + 1)).ok, true);
});

test('an unknown code and a blocked child take about as long as a wrong PIN (no timing signal for which codes exist)', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const time = async (code: string, pin: string, at: number) => { const t = performance.now(); await linkByPin(x.db, x.mum.userId, { loginCode: code, pin, consent: false }, at); return performance.now() - t; };
  const medianOf = async (fn: (i: number) => Promise<number>) => { const v: number[] = []; for (let i = 0; i < 5; i++) v.push(await fn(i)); return v.sort((a, b) => a - b)[2]; };
  // spread over hours so the per-parent limit never interferes
  const wrong = await medianOf((i) => time('EAGLE-1111', '0000', NOW + i * 2 * HOUR_MS));
  const unknown = await medianOf((i) => time('NOBODY-0000', '4821', NOW + 20 * HOUR_MS + i * 2 * HOUR_MS));
  assert.ok(unknown > wrong * 0.4, `unknown ${unknown.toFixed(1)} ms vs wrong PIN ${wrong.toFixed(1)} ms`);
  for (let i = 0; i < CHILD_FAILURES_PER_HOUR; i++) await linkByPin(x.db, (await addAdult(x, `w${i}@example.com`)).userId, { loginCode: 'TIGER-4821', pin: '9999', consent: false }, NOW + 60 * HOUR_MS);
  const blocked = await medianOf((i) => time('TIGER-4821', '4821', NOW + 60 * HOUR_MS + 1000 + i * 1000));
  assert.ok(blocked > wrong * 0.4 || blocked > 15, `blocked ${blocked.toFixed(1)} ms vs wrong PIN ${wrong.toFixed(1)} ms`);
});

// ---------- linking by an invite from the child's screen ----------

test('an invite is stored hashed, single use, valid 60 minutes, at most 3 at a time; a parent who uses it is linked', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const inv = await createInvite(x.db, 'student-0001', NOW);
  assert.ok(inv.ok);
  if (!inv.ok) return;
  assert.equal(inv.expiresAt - NOW, INVITE_TTL_MS);
  assert.equal(INVITE_TTL_MS, 60 * 60 * 1000);
  assert.equal((x.raw.prepare('SELECT token_hash AS h FROM child_invites').get() as { h: string }).h, await sha256Hex(inv.token));
  assert.ok(!JSON.stringify(x.raw.prepare('SELECT * FROM child_invites').all()).includes(inv.token));
  const r = await linkByInvite(x.db, x.mum.userId, { token: inv.token, consent: true }, NOW + 1000);
  assert.deepEqual(r, { ok: true, studentId: 'student-0001', displayName: 'Tiger Kid' });
  const again = await linkByInvite(x.db, x.dad.userId, { token: inv.token, consent: true }, NOW + 2000);
  assert.equal(again.ok, false, 'single use: a second parent cannot use it');
  assert.ok(!(await isLinked(x.db, x.dad.userId, 'student-0001')));
  assert.equal((x.raw.prepare('SELECT used_by AS u FROM child_invites').get() as { u: string }).u, x.mum.userId);
  // the cap
  for (let i = 0; i < MAX_ACTIVE_INVITES; i++) assert.ok((await createInvite(x.db, 'student-0002', NOW + i)).ok);
  assert.equal((await createInvite(x.db, 'student-0002', NOW + 10)).ok, false);
  assert.ok((await createInvite(x.db, 'student-0002', NOW + INVITE_TTL_MS + 100)).ok, 'expired ones stop counting');
});

test('unknown, malformed, used and expired invites all read the same', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const inv = await createInvite(x.db, 'student-0001', NOW); assert.ok(inv.ok); if (!inv.ok) return;
  const old = await createInvite(x.db, 'student-0002', NOW); assert.ok(old.ok); if (!old.ok) return;
  const expired = await linkByInvite(x.db, x.mum.userId, { token: old.token, consent: false }, NOW + INVITE_TTL_MS);
  assert.equal(expired.ok, false);
  const results = [expired, await linkByInvite(x.db, x.mum.userId, { token: generateToken(), consent: false }, NOW), await linkByInvite(x.db, x.mum.userId, { token: 'nope', consent: false }, NOW), await linkByInvite(x.db, x.mum.userId, { token: null, consent: false }, NOW)];
  for (const r of results) assert.deepEqual(r, results[0]);
  await linkByInvite(x.db, x.dad.userId, { token: inv.token, consent: false }, NOW + 1);
  assert.deepEqual(await linkByInvite(x.db, x.mum.userId, { token: inv.token, consent: false }, NOW + 2), results[0], 'used reads the same too');
});

test('the invite maker needs the LEARNER\'s own signed session (pp_session), the action header, and a matching Origin', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const learner = `pp_session=${await signSession('student-0001', SECRET)}`;
  const forged = `pp_session=${await signSession('student-0001', 'wrong-secret')}`;
  const call = (cookie: string | undefined, action: string | null = 'parent-invite', origin = ORIGIN) =>
    handleCreateInvite(new Request(`${ORIGIN}/api/students/me/parent-invite`, { method: 'POST', headers: { origin, ...(action ? { 'x-auth-action': action } : {}), ...(cookie ? { cookie } : {}) }, body: '{}' }), silent(x));
  assert.equal((await call(undefined)).status, 401);
  assert.equal((await call(forged)).status, 401, 'a cookie signed with another secret');
  assert.equal((await call(x.mum.cookie)).status, 401, 'an adult cookie is not a learner session');
  assert.equal((await call(learner, null)).status, 403);
  assert.equal((await call(learner, 'parent-invite', 'https://evil.example')).status, 403);
  const ok = await call(learner);
  assert.equal(ok.status, 200);
  const j = await ok.json() as { token: string };
  assert.equal(ok.headers.get('cache-control'), 'no-store');
  assert.equal(count(x, "SELECT COUNT(*) AS n FROM child_invites WHERE student_id = 'student-0001'"), 1);
  assert.ok(j.token.length === 43);
  const noSecret = await handleCreateInvite(new Request(`${ORIGIN}/api/students/me/parent-invite`, { method: 'POST', headers: { origin: ORIGIN, 'x-auth-action': 'parent-invite', cookie: learner }, body: '{}' }), { db: x.db, now: NOW, log: () => undefined });
  assert.equal(noSecret.status, 401, 'no session secret configured: nobody is signed in');
});

// ---------- who may act on which child ----------

test('a parent sees and acts ONLY on their own linked children: another parent\'s child, an unlinked child and a made-up id all answer 404', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '4821', consent: false }, NOW);
  await linkByPin(x.db, x.dad.userId, { loginCode: 'EAGLE-1111', pin: '1111', consent: false }, NOW);
  const dps = silent(x);
  const dadList = await (await handleListChildren(get('/api/parent/children', x.dad.cookie), dps)).json() as { children: { id: string }[] };
  assert.deepEqual(dadList.children.map((c) => c.id), ['student-0002']);
  const probes = async (cookie: string, id: string) => [
    (await handleChildProgress(get(`/x/${id}/progress`, cookie), dps, id)).status,
    (await handleChildConsent(post(`/x/${id}/consent`, 'parent-consent', cookie, { give: true }), dps, id)).status,
    (await handleChildResetPin(post(`/x/${id}/reset-pin`, 'parent-reset-pin', cookie), dps, id)).status,
    (await handleChildUnlink(post(`/x/${id}/unlink`, 'parent-unlink', cookie), dps, id)).status,
  ];
  assert.deepEqual(await probes(x.dad.cookie, 'student-0001'), [404, 404, 404, 404], "mum's child, asked by dad");
  assert.deepEqual(await probes(x.dad.cookie, 'student-9999'), [404, 404, 404, 404], 'a child that does not exist');
  assert.deepEqual(await probes(x.dad.cookie, "x' OR '1'='1"), [404, 404, 404, 404], 'a malformed id');
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM pin_resets'), 0);
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM consent_events'), 0, 'dad could not touch mum\'s child');
  assert.deepEqual(await probes(x.mum.cookie, 'student-0001'), [200, 200, 200, 200]);
  assert.deepEqual(await probes(x.mum.cookie, 'student-0001'), [404, 404, 404, 404], 'after mum unlinked');
});

test('a parent sees only safe fields of a child: never the login code, PIN hash, real name, school or age', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '4821', consent: true }, NOW);
  const dps = silent(x);
  const list = await (await handleListChildren(get('/api/parent/children', x.mum.cookie), dps)).text();
  const prog = await (await handleChildProgress(get('/p', x.mum.cookie), dps, 'student-0001')).text();
  for (const body of [list, prog]) assert.ok(!/TIGER-4821|pin_hash|pin_salt|Real Name Secret|Secret School|real_name|login_code/.test(body), body);
  assert.deepEqual(Object.keys((JSON.parse(list) as { children: Record<string, unknown>[] }).children[0]).sort(), ['activity', 'avatar', 'consent', 'consentVersion', 'displayName', 'grade', 'id', 'lastSeenAt', 'linkedAt']);
  assert.ok(!/real_name|school|pin_|login_code|Real Name/.test(prog), 'the progress response carries nothing private either');
});

test('only the parent role may use these routes: signed-out is 401, a teacher who is not a parent is 403, and writes need the action header and Origin', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const teacher = await addAdult(x, 't@example.com', ['teacher']);
  const dps = silent(x);
  const body = { loginCode: 'TIGER-4821', pin: '4821', consent: true };
  assert.equal((await handleLinkPin(post('/api/parent/link', 'parent-link', undefined, body), dps)).status, 401);
  assert.equal((await handleLinkPin(post('/api/parent/link', 'parent-link', teacher.cookie, body), dps)).status, 403);
  assert.equal((await handleListChildren(get('/api/parent/children', teacher.cookie), dps)).status, 403);
  assert.equal((await handleLinkPin(post('/api/parent/link', null, x.mum.cookie, body), dps)).status, 403, 'no action header');
  assert.equal((await handleLinkPin(post('/api/parent/link', 'parent-consent', x.mum.cookie, body), dps)).status, 403, 'the header names THIS action');
  const foreign = new Request(`${ORIGIN}/api/parent/link`, { method: 'POST', headers: { origin: 'https://evil.example', 'x-auth-action': 'parent-link', cookie: x.mum.cookie }, body: JSON.stringify(body) });
  assert.equal((await handleLinkPin(foreign, dps)).status, 403, 'a foreign Origin');
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM parent_links'), 0);
  const ok = await handleLinkPin(post('/api/parent/link', 'parent-link', x.mum.cookie, body), dps);
  assert.equal(ok.status, 200);
  assert.deepEqual(await ok.json(), { ok: true, child: { id: 'student-0001', displayName: 'Tiger Kid' } });
  const inv = await handleLinkInvite(post('/api/parent/link-invite', 'parent-link-invite', x.mum.cookie, { token: generateToken(), consent: true }), dps);
  assert.equal(inv.status, 400);
});

// ---------- consent ----------

test('a parent can withdraw and give consent; the withdrawal puts the learner back at the reduced level and the learner\'s own tick cannot undo it', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '4821', consent: true }, NOW);
  const dps = silent(x, { now: NOW + 1000 });
  assert.ok(!(await parentWithdrew(x.db, 'student-0001')));
  const out = await handleChildConsent(post('/c', 'parent-consent', x.mum.cookie, { give: false }), dps, 'student-0001');
  assert.deepEqual(await out.json(), { ok: true, consent: 'none' });
  assert.equal((x.raw.prepare('SELECT parent_consent_at AS n FROM students WHERE id = ?').get('student-0001') as { n: number | null }).n, null, 'the app reads NULL as no consent');
  assert.ok(await parentWithdrew(x.db, 'student-0001'), 'the learner tick route checks this');
  assert.equal((await listChildren(x.db, x.mum.userId))[0].consent, 'none');
  const back = await handleChildConsent(post('/c', 'parent-consent', x.mum.cookie, { give: true }), silent(x, { now: NOW + 2000 }), 'student-0001');
  assert.equal(back.status, 200);
  assert.ok(!(await parentWithdrew(x.db, 'student-0001')));
  assert.deepEqual((x.raw.prepare('SELECT action FROM consent_events ORDER BY id').all() as { action: string }[]).map((e) => e.action), ['given', 'withdrawn', 'given']);
  assert.equal((await handleChildConsent(post('/c', 'parent-consent', x.mum.cookie, { give: 'yes' }), dps, 'student-0001')).status, 400, 'give must be a boolean');
  const route = fs.readFileSync('src/app/api/consent/route.ts', 'utf8');
  assert.ok(route.includes('parentWithdrew') && route.indexOf('parentWithdrew') < route.indexOf('recordConsent(env.DB'), 'the learner route refuses before recording');
  await setParentConsent(x.db, x.mum.userId, 'student-0001', false, NOW + 5000);
  assert.ok(await parentWithdrew(x.db, 'student-0001'));
});

// ---------- PIN reset ----------

test('a linked parent resets the PIN: the new one works, the old one does not, it is shown once and never stored in the clear or logged', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '4821', consent: false }, NOW);
  const lines: string[] = [];
  const res = await handleChildResetPin(post('/r', 'parent-reset-pin', x.mum.cookie), silent(x, { log: (l) => lines.push(l) }), 'student-0001');
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('cache-control'), 'no-store');
  const { pin } = await res.json() as { pin: string };
  assert.match(pin, /^\d{4}$/);
  const row = x.raw.prepare('SELECT pin_hash, pin_salt FROM students WHERE id = ?').get('student-0001') as { pin_hash: string; pin_salt: string };
  assert.ok(await verifyPin(pin, row.pin_salt, row.pin_hash));
  if (pin !== '4821') assert.ok(!(await verifyPin('4821', row.pin_salt, row.pin_hash)), 'the old PIN stops working');
  assert.ok(!JSON.stringify(x.raw.prepare('SELECT * FROM students').all()).includes(`"${pin}"`) && !JSON.stringify(x.raw.prepare('SELECT * FROM pin_resets').all()).includes(pin), 'no plain PIN in the database');
  assert.deepEqual(x.raw.prepare('SELECT student_id, user_id, created_at FROM pin_resets').all().map((r) => Object.values(r)), [['student-0001', x.mum.userId, NOW]]);
  assert.equal(lines.length, 0);
});

test('PIN resets are limited: 3 a day per child and 5 a day per parent', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  for (let i = 0; i < RESETS_PER_CHILD_PER_DAY; i++) assert.ok((await resetChildPin(x.db, x.mum.userId, 'student-0001', NOW + i)).ok);
  const fourth = await resetChildPin(x.db, x.mum.userId, 'student-0001', NOW + 10);
  assert.equal(fourth.ok, false);
  for (let i = 0; i < RESETS_PER_PARENT_PER_DAY - RESETS_PER_CHILD_PER_DAY; i++) assert.ok((await resetChildPin(x.db, x.mum.userId, `student-100${i}`, NOW + 20 + i)).ok);
  assert.equal((await resetChildPin(x.db, x.mum.userId, 'student-2000', NOW + 50)).ok, false, 'the parent cap');
  assert.ok((await resetChildPin(x.db, x.mum.userId, 'student-0001', NOW + 86_400_000 + 100)).ok, 'a new day');
  const viaHttp = await addAdult(x, 'z@example.com');
  await linkByPin(x.db, viaHttp.userId, { loginCode: 'EAGLE-1111', pin: '1111', consent: false }, NOW);
  for (let i = 0; i < 3; i++) assert.equal((await handleChildResetPin(post('/r', 'parent-reset-pin', viaHttp.cookie), silent(x, { now: NOW + 1000 + i }), 'student-0002')).status, 200);
  assert.equal((await handleChildResetPin(post('/r', 'parent-reset-pin', viaHttp.cookie), silent(x, { now: NOW + 2000 }), 'student-0002')).status, 429);
});

// ---------- progress ----------

test('a parent sees the SAME ProgressResponse the learner would get, for the linked child only', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const put = x.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at) VALUES (?, 'electric-circuits', 'general', 6, 'nst', 'electric-circuits', ?, ?)");
  for (let i = 0; i < 24; i++) put.run('student-0001', i < 20 ? 1 : 0, NOW - (i + 1) * 3600_000 * 6);
  for (let i = 0; i < 6; i++) put.run('student-0002', 0, NOW - i * 1000);
  await refreshForRun(x.db, 'student-0001', ['electric-circuits'], NOW);
  await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '4821', consent: false }, NOW);
  await linkByPin(x.db, x.dad.userId, { loginCode: 'EAGLE-1111', pin: '1111', consent: false }, NOW);
  const dps = silent(x);
  const res = await handleChildProgress(get('/p', x.mum.cookie), dps, 'student-0001');
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('cache-control'), 'no-store');
  const body = await res.json() as { child: { id: string }; progress: Record<string, unknown> & { displayName: string; grade: number; subjects: { topics: { attempts: number }[] }[] } };
  assert.deepEqual(Object.keys(body).sort(), ['child', 'progress']);
  assert.equal(body.child.id, 'student-0001');
  assert.deepEqual(body.progress, JSON.parse(JSON.stringify(await loadChildProgress(x.db, 'student-0001', NOW))), 'the very function behind GET /api/progress');
  assert.equal(body.progress.displayName, 'Tiger Kid');
  assert.equal(body.progress.subjects.flatMap((s) => s.topics).find((t) => t.attempts > 0)?.attempts, 24, "only student-0001's 24 answers");
  const dad = await (await handleChildProgress(get('/p', x.dad.cookie), dps, 'student-0002')).json() as { progress: { displayName: string; subjects: unknown[] } };
  assert.equal(dad.progress.displayName, 'Eagle Kid');
  assert.ok(!JSON.stringify(dad).includes('Tiger Kid'));
  assert.equal((await handleChildProgress(get('/p', x.dad.cookie), dps, 'student-0001')).status, 404, "dad cannot read mum's child");
  assert.equal(await loadChildProgress(x.db, 'student-9999', NOW), null);
});

// ---------- logging, headers, pages ----------

test('a failure logs only the error message: never a PIN, token, code or name', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  await linkByPin(x.db, x.mum.userId, { loginCode: 'TIGER-4821', pin: '4821', consent: false }, NOW);
  const lines: string[] = [];
  const broken = { all: async () => { throw new Error('D1 down'); }, batch: async () => { throw new Error('D1 down'); } };
  const res = await handleChildResetPin(post('/r', 'parent-reset-pin', x.mum.cookie), { db: { ...x.db, all: (async (sql: string, p?: never[]) => (/FROM sessions/.test(sql) || /FROM user_roles/.test(sql) ? x.db.all(sql, p) : /parent_links/.test(sql) ? x.db.all(sql, p) : broken.all())) as typeof x.db.all, batch: broken.batch }, now: NOW, log: (l) => lines.push(l) }, 'student-0001');
  assert.equal(res.status, 500);
  assert.deepEqual(await res.json(), { error: 'Something went wrong. Try again.' });
  assert.equal(lines.length, 1);
  assert.ok(!/TIGER|4821|Tiger Kid|pp_adult/.test(lines[0]), lines[0]);
});

test('the parent pages and API are never cached, indexed or tracked, and the pages keep no token in storage', () => {
  const cfg = fs.readFileSync('next.config.ts', 'utf8');
  for (const src of ["'/parent'", "'/parent/:path*'", "'/invite-parent'", "'/api/parent/:path*'", "'/api/students/me/parent-invite'"]) assert.ok(cfg.includes(`source: ${src}`), src);
  const robots = fs.readFileSync('src/lib/seo/publicPaths.ts', 'utf8');
  assert.ok(robots.includes("'/parent'") && robots.includes("'/invite-parent'"), 'robots.txt takes PRIVATE_PREFIXES');
  for (const f of ['InviteLanding', 'InviteMaker', 'ParentDashboard']) assert.ok(!/localStorage|sessionStorage|document\.cookie/.test(fs.readFileSync(`src/components/parents/${f}.tsx`, 'utf8')), f);
  assert.ok(fs.readFileSync('src/components/parents/InviteLanding.tsx', 'utf8').includes('replaceState'), 'the invite token leaves the address bar');
  for (const f of ['parent/page.tsx', 'parent/link/page.tsx', 'invite-parent/page.tsx']) assert.match(fs.readFileSync(`src/app/${f}`, 'utf8'), /index: false/);
});

test('the parent progress view renders every part of a ProgressResponse in the third person, read-only (no Practise links)', async () => {
  const { renderToStaticMarkup } = await import('react-dom/server');
  const { createElement } = await import('react');
  const { ChildProgressCards } = await import('../../../components/parents/ChildProgress');
  const { MOCK_PROGRESS } = await import('../../shared/progressMock');
  const html = renderToStaticMarkup(createElement(ChildProgressCards, { p: MOCK_PROGRESS, who: 'Lerato' }));
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  assert.ok(text.includes('Exam readiness') && text.includes('Recent activity') && text.includes('Test history') && text.includes('What Lerato remembers'));
  for (const s of MOCK_PROGRESS.subjects) assert.ok(text.includes(s.label), s.label);
  for (const r of MOCK_PROGRESS.recentSessions ?? []) assert.ok(text.includes(r.label), r.label);
  assert.ok(text.includes(MOCK_PROGRESS.parentNextStep!.title) && !text.includes(MOCK_PROGRESS.nextStep.title), 'the parent reads the parent-worded next step');
  assert.ok(!/Practise this/.test(text) && !/href="\/app/.test(html), 'a parent has nothing to practise: no learner buttons or links into the app');
  assert.ok(!/\b(you|your)\b/i.test(text.replace('Ask your child', '')), 'no learner-voice wording of its own');
  // the learner's own page keeps its voice and its buttons
  const { SubjectCard } = await import('../../../components/progress/ProgressCards');
  const mine = renderToStaticMarkup(createElement(SubjectCard, { s: MOCK_PROGRESS.subjects[0] }));
  assert.ok(/Practise this/.test(mine));
});

test('the children list carries each child\'s activity (answers this week, days practised, last practised) from the answers themselves', async (ctx) => {
  const x = await openParentsDb(); if (!x) return ctx.skip('node:sqlite unavailable');
  const { withActivity, listChildren } = await import('./links');
  await addStudent(x, 'child-0001', 'TIGER-4821', '4821', { name: 'Tiger Kid' });
  await addStudent(x, 'child-0002', 'EAGLE-1111', '1111', { name: 'Eagle Kid' });
  const mum = await addAdult(x, 'mum@example.com', ['parent']);
  for (const s of ['child-0001', 'child-0002']) x.raw.prepare("INSERT INTO parent_links (user_id, student_id, method, linked_at) VALUES (?, ?, 'pin', 1)").run(mum.userId, s);
  const D = 86_400_000;
  const ins = x.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at) VALUES ('child-0001', 'electric-circuits', 'general', 6, 'nst', 't', 1, 0, 0, ?)");
  ins.run(NOW - 1 * D); ins.run(NOW - 1 * D + 1000); ins.run(NOW - 3 * D); ins.run(NOW - 10 * D); ins.run(NOW - 40 * D);
  const kids = await withActivity(x.db, await listChildren(x.db, mum.userId), NOW);
  const by = Object.fromEntries(kids.map((k) => [k.id, k.activity]));
  assert.deepEqual(by['child-0001'], { answersThisWeek: 3, daysPractisedLast14: 3, lastPractisedAt: NOW - 1 * D + 1000, weekAccuracyPct: 100, changeSinceLastWeek: null });
  assert.deepEqual(by['child-0002'], { answersThisWeek: 0, daysPractisedLast14: 0, lastPractisedAt: null, weekAccuracyPct: null, changeSinceLastWeek: null }, 'no answers: zeros and not yet, not missing');
  // a read failure leaves the list as it was (no activity), never an error
  const broken = { all: async () => { throw new Error('boom'); }, batch: async () => undefined };
  const plain = await withActivity(broken, await listChildren(x.db, mum.userId), NOW);
  assert.equal(plain.length, 2);
  assert.ok(plain.every((k) => k.activity === undefined));
});

test('change since last week: this week\'s accuracy minus the week before, only when both weeks have at least 5 answers', async (ctx) => {
  const x = await openParentsDb(); if (!x) return ctx.skip('node:sqlite unavailable');
  const { withActivity, listChildren } = await import('./links');
  await addStudent(x, 'child-0001', 'TIGER-4821', '4821', { name: 'Tiger Kid' });
  const mum = await addAdult(x, 'mum2@example.com', ['parent']);
  x.raw.prepare("INSERT INTO parent_links (user_id, student_id, method, linked_at) VALUES (?, 'child-0001', 'pin', 1)").run(mum.userId);
  const D = 86_400_000;
  const ins = x.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at) VALUES ('child-0001', 'electric-circuits', 'general', 6, 'nst', 't', ?, 0, 0, ?)");
  const kid = async () => (await withActivity(x.db, await listChildren(x.db, mum.userId), NOW))[0].activity!;
  for (let i = 0; i < 4; i++) ins.run(1, NOW - 1 * D - i); // this week 4 right
  for (let i = 0; i < 5; i++) ins.run(i < 2 ? 1 : 0, NOW - 9 * D - i); // last week 2 of 5
  assert.equal((await kid()).changeSinceLastWeek, null, 'only 4 answers this week: no change shown');
  ins.run(0, NOW - 2 * D); // this week 4 of 5
  const a = await kid();
  assert.deepEqual([a.weekAccuracyPct, a.changeSinceLastWeek], [80, 40]);
});

test('the child progress response carries a parent-worded next step with the child\'s name; the learner\'s own wording stays', async (ctx) => {
  const x = await openParentsDb(); if (!x) return ctx.skip('node:sqlite unavailable');
  await addStudent(x, 'child-0001', 'TIGER-4821', '4821', { name: 'Anfervio' });
  const mum = await addAdult(x, 'mum3@example.com', ['parent']);
  x.raw.prepare("INSERT INTO parent_links (user_id, student_id, method, linked_at) VALUES (?, 'child-0001', 'pin', 1)").run(mum.userId);
  const p = await loadChildProgress(x.db, 'child-0001', NOW);
  assert.ok(p);
  assert.equal(p.parentNextStep?.title, 'Ask Anfervio to try their first topic');
  assert.equal(p.nextStep.title, 'Try your first topic');
  assert.ok(!/\b(he|she|his|her|him)\b/i.test(JSON.stringify(p.parentNextStep)));
});

test('the test history line chart is not animated, so every point is always joined (a half-drawn line looked like a missing last point)', () => {
  const src = fs.readFileSync('src/components/subjects/DataChart.tsx', 'utf8');
  const lines = src.match(/<Line\b[^>]*>/g) ?? [];
  assert.ok(lines.length >= 2);
  for (const l of lines) assert.match(l, /isAnimationActive=\{false\}/);
});

test('an invite preview shows the nickname and grade only, uses nothing up, and unknown, used and expired links read the same', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const inv = await createInvite(x.db, 'student-0001', NOW); assert.ok(inv.ok); if (!inv.ok) return;
  const p = await previewInvite(x.db, x.mum.userId, inv.token, NOW + 1000);
  assert.deepEqual(p, { ok: true, displayName: 'Tiger Kid', grade: 6 });
  assert.ok(!JSON.stringify(p).match(/TIGER-4821|4821|Real Name|Secret/), 'no code, PIN, name or school');
  assert.deepEqual(await previewInvite(x.db, x.mum.userId, inv.token, NOW + 2000), p, 'looking does not use the link up');
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM child_invites WHERE used_at IS NOT NULL'), 0);
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM parent_links'), 0, 'and links nothing');
  const gone = (await previewInvite(x.db, x.mum.userId, generateToken(), NOW)) as { ok: false; error: string };
  assert.equal(gone.ok, false);
  const expired = await previewInvite(x.db, x.mum.userId, inv.token, NOW + INVITE_TTL_MS + 1);
  assert.deepEqual(expired, gone, 'expired reads like unknown');
  const bad = await previewInvite(x.db, x.mum.userId, 'not a token', NOW);
  assert.deepEqual(bad, gone);
  assert.ok((await linkByInvite(x.db, x.mum.userId, { token: inv.token, consent: false }, NOW + 3000)).ok);
  assert.deepEqual(await previewInvite(x.db, x.dad.userId, inv.token, NOW + 4000), gone, 'a used link reads like unknown');
});

test('POST /api/parent/link-invite/preview: needs a parent session and the action header; never returns the token', async (t0) => {
  const x = await setup(); if (!x) return t0.skip('node:sqlite unavailable');
  const inv = await createInvite(x.db, 'student-0001', NOW); assert.ok(inv.ok); if (!inv.ok) return;
  const d = silent(x);
  assert.equal((await handleInvitePreview(post('/api/parent/link-invite/preview', 'parent-link-invite-preview', undefined, { token: inv.token }), d)).status, 401, 'signed out');
  assert.equal((await handleInvitePreview(post('/api/parent/link-invite/preview', null, x.mum.cookie, { token: inv.token }), d)).status, 403, 'no action header');
  const ok = await handleInvitePreview(post('/api/parent/link-invite/preview', 'parent-link-invite-preview', x.mum.cookie, { token: inv.token }), d);
  assert.equal(ok.status, 200);
  const text = await ok.text();
  assert.deepEqual(JSON.parse(text), { ok: true, child: { displayName: 'Tiger Kid', grade: 6 } });
  assert.ok(!text.includes(inv.token));
  assert.equal((await handleInvitePreview(post('/api/parent/link-invite/preview', 'parent-link-invite-preview', x.mum.cookie, { token: generateToken() }), d)).status, 400);
});
