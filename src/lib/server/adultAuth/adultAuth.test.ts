import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { constantTimeEqual, generateToken, isWellFormedToken, sha256Hex } from './crypto';
import { MAX_EMAIL_LENGTH, normaliseEmail } from './email';
import { DevMailer, MailNotConfiguredError, RefusingMailer, ResendMailer, mailerFromEnv } from './mailer';
import { EMAIL_LIMIT_PER_HOUR, HOUR_MS, IP_LIMIT_PER_HOUR, LINK_TTL_MS, consumeMagicLink, requestMagicLink, signIn, verifyUrl } from './magicLink';
import { allowDurable, createLimiter } from './rateLimit';
import { ADULT_COOKIE, SESSION_TTL_MS, clearedCookie, cookieToken, createSession, lookupSession, revokeAllSessions, revokeSession, sessionCookie } from './sessions';
import { ROLES, checkWriteRequest, requireRole } from './roles';
import { handleLogout, handleMe, handleRequestLink, handleVerify, readCapped, type AuthDeps } from './http';
import { purgeAuthData } from './purge';
import { NOW, openAuthDb, recordingMailer, tokenIn, type AuthTestDb } from './testDb';

const SITE = 'https://scholar.hibbins.org';
const SQL = fs.readFileSync('migrations/0013_adult_auth.sql', 'utf8');
const count = (x: AuthTestDb, sql: string) => (x.raw.prepare(sql).get() as { n: number }).n;

// ---------- the pieces ----------

test('0013 is additive and idempotent, stores only token HASHES, and its role list matches the code', async (t0) => {
  const code = SQL.replace(/--.*$/gm, '');
  assert.ok(!/\b(DROP|ALTER|DELETE|UPDATE|INSERT|REPLACE)\b/i.test(code), 'only CREATE statements');
  for (const m of code.matchAll(/CREATE\s+(TABLE|INDEX)\s+(?!IF NOT EXISTS)/gi)) assert.fail(`not idempotent: ${m[0]}`);
  assert.ok(!/REFERENCES|FOREIGN KEY/i.test(code));
  assert.ok(!/\btoken\s+TEXT\b/i.test(code) && (code.match(/token_hash\s+TEXT/g) ?? []).length === 2, 'sessions and magic_links keep only a hash');
  const list = /role\s+IN \(([^)]*)\)/.exec(code)?.[1].split(',').map((s) => s.trim().replace(/'/g, ''));
  assert.deepEqual(list, [...ROLES]);
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  x.raw.exec(SQL);
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM users'), 0);
});

test('tokens: 43 random characters, unique, and the hash is a stable SHA-256', async () => {
  const a = generateToken(); const b = generateToken();
  assert.ok(isWellFormedToken(a) && a !== b);
  assert.equal(await sha256Hex('abc'), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  assert.ok(!isWellFormedToken('short') && !isWellFormedToken(`${a}x`) && !isWellFormedToken(null) && !isWellFormedToken('é'.repeat(43)));
  assert.ok(constantTimeEqual('abc', 'abc') && !constantTimeEqual('abc', 'abd') && !constantTimeEqual('abc', 'abcd'));
});

test('email: one normal form, plain validation, header-injection characters refused', () => {
  assert.equal(normaliseEmail('  Parent@Example.CO.ZA '), 'parent@example.co.za');
  for (const bad of ['', 'no-at.example.com', 'a@b', 'a b@c.com', 'a@b.c', 'x@y.com\nBcc: z@z.com', 'a@b.com\0', `${'a'.repeat(250)}@b.com`, 42, null, undefined]) assert.equal(normaliseEmail(bad), null, String(bad));
  assert.ok(MAX_EMAIL_LENGTH === 254);
});

test('mailer: Resend with the key in the Authorization header only; production without a key refuses; the dev mailer logs only in development', async () => {
  const calls: { url: string; init: RequestInit }[] = [];
  const ok = (async (url: string, init: RequestInit) => { calls.push({ url, init }); return new Response('{}', { status: 200 }); }) as unknown as typeof fetch;
  const m = mailerFromEnv({ RESEND_API_KEY: 're_secret_key', MAIL_FROM: 'PrepPals <login@scholar.hibbins.org>' }, false, ok);
  assert.ok(m instanceof ResendMailer);
  await m.send({ to: 'a@b.co', subject: 'S', text: 'T' });
  assert.equal(calls[0].url, 'https://api.resend.com/emails');
  const h = calls[0].init.headers as Record<string, string>;
  assert.equal(h.Authorization, 'Bearer re_secret_key');
  const body = JSON.parse(String(calls[0].init.body));
  assert.deepEqual([body.from, body.to, body.subject, body.text], ['PrepPals <login@scholar.hibbins.org>', ['a@b.co'], 'S', 'T']);
  assert.ok(!String(calls[0].init.body).includes('re_secret_key'), 'the key is not in the body');

  const failing = (async () => new Response('{"error":"re_secret_key rejected for a@b.co"}', { status: 422 })) as unknown as typeof fetch;
  const f = mailerFromEnv({ RESEND_API_KEY: 're_secret_key', MAIL_FROM: 'x@y.co' }, false, failing);
  await assert.rejects(f.send({ to: 'a@b.co', subject: 'S', text: 'T' }), (e: Error) => /422/.test(e.message) && !/re_secret_key|a@b\.co/.test(e.message));

  assert.ok(mailerFromEnv({}, false) instanceof RefusingMailer, 'production without a key');
  assert.ok(mailerFromEnv(null, false) instanceof RefusingMailer);
  assert.ok(mailerFromEnv({ RESEND_API_KEY: 're_x' }, false) instanceof RefusingMailer, 'a key without a sender is not enough');
  assert.ok(mailerFromEnv({ RESEND_API_KEY: ' ', MAIL_FROM: 'x@y.co' }, false) instanceof RefusingMailer, 'a blank key counts as no key');
  assert.ok(mailerFromEnv({}, true) instanceof DevMailer, 'development without a key');
  assert.ok(mailerFromEnv({ RESEND_API_KEY: 're_x', MAIL_FROM: 'x@y.co' }, true) instanceof ResendMailer, 'development with a key still sends for real');
  await assert.rejects(new RefusingMailer().send(), MailNotConfiguredError);
  const lines: string[] = [];
  await new DevMailer((l) => lines.push(l)).send({ to: 'a@b.co', subject: 'S', text: 'link' });
  assert.equal(lines.length, 1);
});

// ---------- magic links ----------

const deps = async (x: AuthTestDb, over: Partial<AuthDeps> = {}) => {
  const rec = recordingMailer();
  return { rec, d: { db: x.db, mailer: rec.mailer, now: NOW, siteUrl: SITE, log: () => undefined, ...over } as AuthDeps };
};

test('a request stores only the token HASH, emails a link built from the site address, and the link works once for 15 minutes', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const { rec, d } = await deps(x);
  const out = await requestMagicLink(d, { email: 'Parent@Example.com', ip: '1.2.3.4' });
  assert.deepEqual(out, { kind: 'accepted' });
  assert.equal(rec.sent.length, 1);
  assert.equal(rec.sent[0].to, 'parent@example.com');
  const token = tokenIn(rec.sent[0].text);
  assert.ok(isWellFormedToken(token));
  assert.ok(rec.sent[0].text.includes(verifyUrl(SITE, token)) && rec.sent[0].text.includes(`${SITE}/sign-in/verify#`), 'a fragment link on the site address');
  const row = x.raw.prepare('SELECT * FROM magic_links').get() as { token_hash: string; email: string; expires_at: number; created_at: number; used_at: number | null };
  assert.equal(row.token_hash, await sha256Hex(token));
  assert.ok(!JSON.stringify(x.raw.prepare('SELECT * FROM magic_links').all()).includes(token), 'the token itself is nowhere in the database');
  assert.equal(row.expires_at - row.created_at, LINK_TTL_MS);
  assert.equal(LINK_TTL_MS, 15 * 60 * 1000);
  assert.deepEqual(await consumeMagicLink(x.db, token, NOW + 1000), { ok: true, email: 'parent@example.com' });
  assert.deepEqual(await consumeMagicLink(x.db, token, NOW + 2000), { ok: false }, 'single use');
});

test('expiry: usable strictly before 15 minutes, never at or after; unknown and malformed tokens fail the same way', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const { rec, d } = await deps(x);
  for (const _ of [1, 2]) await requestMagicLink(d, { email: `p${_}@example.com`, ip: `9.9.9.${_}` });
  const [t1, t2] = rec.sent.map((m) => tokenIn(m.text));
  assert.deepEqual(await consumeMagicLink(x.db, t1, NOW + LINK_TTL_MS - 1), { ok: true, email: 'p1@example.com' });
  assert.deepEqual(await consumeMagicLink(x.db, t2, NOW + LINK_TTL_MS), { ok: false }, 'at the expiry time: expired');
  assert.deepEqual(await consumeMagicLink(x.db, generateToken(), NOW), { ok: false });
  for (const bad of ['', 'abc', null, undefined, 42, {}, 'x'.repeat(43) + '!']) assert.deepEqual(await consumeMagicLink(x.db, bad, NOW), { ok: false });
});

test('two simultaneous uses of one link: exactly one wins', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const { rec, d } = await deps(x);
  await requestMagicLink(d, { email: 'p@example.com', ip: '1.1.1.1' });
  const token = tokenIn(rec.sent[0].text);
  const results = await Promise.all([consumeMagicLink(x.db, token, NOW + 1), consumeMagicLink(x.db, token, NOW + 1), consumeMagicLink(x.db, token, NOW + 1)]);
  assert.equal(results.filter((r) => r.ok).length, 1);
});

test('the answer never reveals whether an email exists: known, unknown, malformed and rate-limited addresses all get the same reply', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const { rec, d } = await deps(x);
  const post = (email: unknown, ip = '5.5.5.5') => handleRequestLink(new Request('https://scholar.hibbins.org/api/auth/request', { method: 'POST', headers: { 'x-auth-action': 'request', origin: 'https://scholar.hibbins.org', 'cf-connecting-ip': ip }, body: JSON.stringify({ email }) }), d);
  const first = await post('known@example.com', '6.6.6.1');
  const tokenKnown = tokenIn(rec.sent[0].text);
  const used = await consumeMagicLink(x.db, tokenKnown, NOW + 1);
  assert.ok(used.ok);
  await signIn(x.db, 'known@example.com', NOW + 1); // now a real account
  const replies = [first, await post('known@example.com', '6.6.6.2'), await post('unknown@example.com', '6.6.6.3'), await post('not an email', '6.6.6.4'), await post(undefined, '6.6.6.5'), await post(12345, '6.6.6.6')];
  const bodies = await Promise.all(replies.map(async (r) => `${r.status} ${await r.clone().text()}`));
  assert.ok(bodies.every((b) => b === bodies[0]), bodies.join('\n'));
  assert.ok(bodies[0].startsWith('200 '));
  // a known and an unknown valid address are treated identically: each got one email and one stored link
  const to = rec.sent.map((m) => m.to);
  assert.equal(to.filter((a) => a === 'known@example.com').length, 2);
  assert.equal(to.filter((a) => a === 'unknown@example.com').length, 1);
  // an address over ITS limit gets the same 200, and no email
  for (let i = 0; i < EMAIL_LIMIT_PER_HOUR + 3; i++) await post('bomb@example.com', `7.7.7.${i}`);
  assert.equal(rec.sent.filter((m) => m.to === 'bomb@example.com').length, EMAIL_LIMIT_PER_HOUR);
  const over = await post('bomb@example.com', '7.7.8.1');
  assert.equal(`${over.status} ${await over.text()}`, bodies[0]);
});

test('rate limits: per IP (429), per email (silent), durable counters stop at the limit and a blocked key is read, never written', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const { rec, d } = await deps(x);
  const results: string[] = [];
  for (let i = 0; i < IP_LIMIT_PER_HOUR + 3; i++) results.push((await requestMagicLink(d, { email: `u${i}@example.com`, ip: '8.8.8.8' })).kind);
  assert.equal(results.filter((k) => k === 'accepted').length, IP_LIMIT_PER_HOUR);
  assert.deepEqual(results.slice(IP_LIMIT_PER_HOUR), ['ip_limited', 'ip_limited', 'ip_limited']);
  assert.equal(rec.sent.length, IP_LIMIT_PER_HOUR);
  const ipKey = `ip:${await sha256Hex('8.8.8.8')}`;
  assert.equal(count(x, `SELECT count AS n FROM auth_rate WHERE key = '${ipKey}'`), IP_LIMIT_PER_HOUR, 'not incremented once blocked');
  const changes = () => (x.raw.prepare('SELECT total_changes() AS n').get() as { n: number }).n;
  const before = changes();
  assert.equal(await allowDurable(x.db, ipKey, IP_LIMIT_PER_HOUR, HOUR_MS, NOW), false);
  assert.equal(changes(), before, 'a blocked key writes nothing');
  assert.equal(await allowDurable(x.db, ipKey, IP_LIMIT_PER_HOUR, HOUR_MS, NOW + HOUR_MS), true, 'a new window starts');
  assert.ok(!JSON.stringify(x.raw.prepare('SELECT * FROM auth_rate').all()).match(/8\.8\.8\.8|@example\.com/), 'keys are hashes, never a raw IP or email');
});

test('the in-memory limiter forgets only the oldest key at its cap', () => {
  const l = createLimiter(1, 1000, 2);
  assert.ok(l.allow('a', 0)); assert.ok(!l.allow('a', 0));
  assert.ok(l.allow('b', 0)); assert.ok(l.allow('c', 0)); // cap: 'a' is the oldest and goes
  assert.ok(!l.allow('b', 0), 'b keeps its bucket');
});

test('a send failure is logged without the address or the link, and the caller still gets the neutral answer; no configuration gives 503', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const lines: string[] = [];
  const failing = { async send() { throw new Error('resend responded 500'); } };
  const out = await requestMagicLink({ db: x.db, mailer: failing, now: NOW, siteUrl: SITE, log: (l) => lines.push(l) }, { email: 'secret.person@example.com', ip: '3.3.3.3' });
  assert.deepEqual(out, { kind: 'accepted' });
  assert.equal(lines.length, 1);
  assert.ok(!/secret\.person|example\.com|sign-in\/verify|[A-Za-z0-9_-]{43}/.test(lines[0]), lines[0]);
  const refused = await requestMagicLink({ db: x.db, mailer: new RefusingMailer(), now: NOW, siteUrl: SITE }, { email: 'a@example.com', ip: '3.3.3.4' });
  assert.deepEqual(refused, { kind: 'not_configured' });
  const res = await handleRequestLink(new Request('https://scholar.hibbins.org/api/auth/request', { method: 'POST', headers: { 'x-auth-action': 'request', origin: 'https://scholar.hibbins.org' }, body: JSON.stringify({ email: 'a@example.com' }) }), { db: x.db, mailer: new RefusingMailer(), now: NOW, siteUrl: SITE, log: () => undefined });
  assert.equal(res.status, 503);
});

// ---------- sessions ----------

test('sign-in makes a parent on first use only, and starts a session whose token is stored hashed', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const s = await signIn(x.db, 'p@example.com', NOW);
  assert.ok(s.created);
  assert.deepEqual(x.raw.prepare('SELECT role, granted_by FROM user_roles').all().map((r) => Object.values(r)), [['parent', 'self']]);
  assert.ok(!JSON.stringify(x.raw.prepare('SELECT * FROM sessions').all()).includes(s.token), 'the cookie token is not in the database');
  assert.equal((x.raw.prepare('SELECT token_hash FROM sessions').get() as { token_hash: string }).token_hash, await sha256Hex(s.token));
  const again = await signIn(x.db, 'p@example.com', NOW + 5000);
  assert.ok(!again.created && again.userId === s.userId);
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM users'), 1);
  x.raw.exec('DELETE FROM user_roles');
  await signIn(x.db, 'p@example.com', NOW + 9000);
  assert.equal(count(x, 'SELECT COUNT(*) AS n FROM user_roles'), 0, 'a role taken away does not come back by signing in');
});

test('a session lasts 30 days, can be revoked one at a time or all at once, and is looked up by hash', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const s = await signIn(x.db, 'p@example.com', NOW);
  const found = await lookupSession(x.db, s.token, NOW + 1);
  assert.deepEqual([found?.user.email, found?.roles], ['p@example.com', ['parent']]);
  assert.equal(SESSION_TTL_MS, 30 * 24 * 60 * 60 * 1000);
  assert.ok(await lookupSession(x.db, s.token, NOW + SESSION_TTL_MS - 1));
  assert.equal(await lookupSession(x.db, s.token, NOW + SESSION_TTL_MS), null, 'expired');
  assert.equal(await lookupSession(x.db, generateToken(), NOW), null);
  assert.equal(await lookupSession(x.db, '', NOW), null);
  await revokeSession(x.db, s.token, NOW + 10);
  assert.equal(await lookupSession(x.db, s.token, NOW + 11), null, 'revoked at once');
  const a = await createSession(x.db, s.userId, NOW); const b = await createSession(x.db, s.userId, NOW);
  await revokeAllSessions(x.db, s.userId, NOW + 20);
  assert.equal(await lookupSession(x.db, a.token, NOW + 21), null);
  assert.equal(await lookupSession(x.db, b.token, NOW + 21), null);
});

test('last_seen_at is refreshed at most once a day (reading a page is not a database write every time)', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const s = await signIn(x.db, 'p@example.com', NOW);
  const seen = () => (x.raw.prepare('SELECT last_seen_at AS n FROM sessions').get() as { n: number }).n;
  await lookupSession(x.db, s.token, NOW + 3600_000);
  assert.equal(seen(), NOW);
  await lookupSession(x.db, s.token, NOW + 86_400_000);
  assert.equal(seen(), NOW + 86_400_000);
});

test('the cookie is pp_adult (never pp_session), HttpOnly, Secure, SameSite=Lax, 30 days; reading picks it out of other cookies', () => {
  const c = sessionCookie('TOKEN');
  assert.ok(c.startsWith(`${ADULT_COOKIE}=TOKEN;`) && ADULT_COOKIE === 'pp_adult');
  for (const part of ['Path=/', 'Max-Age=2592000', 'HttpOnly', 'Secure', 'SameSite=Lax']) assert.ok(c.split('; ').includes(part), part);
  assert.ok(!/Domain=/i.test(c));
  assert.ok(clearedCookie().includes('Max-Age=0') && clearedCookie().includes('HttpOnly'));
  assert.equal(cookieToken('pp_session=abc.def; pp_adult=XYZ; other=1'), 'XYZ');
  assert.equal(cookieToken('pp_session=abc.def'), '', 'a learner session is not an adult session');
  assert.equal(cookieToken(null), '');
});

// ---------- roles and CSRF ----------

test('roles are checked on the server: 401 without a session, 403 without the role, ok with it; a learner cookie opens nothing', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const s = await signIn(x.db, 'p@example.com', NOW);
  const req = (cookie?: string) => new Request('https://scholar.hibbins.org/x', { headers: cookie ? { cookie } : {} });
  const no = await requireRole(req(), x.db, ['parent'], NOW);
  assert.ok(!no.ok && no.response.status === 401);
  const learner = await requireRole(req('pp_session=student1.abcdef'), x.db, ['parent'], NOW);
  assert.ok(!learner.ok && learner.response.status === 401, 'pp_session is not an adult cookie');
  const forged = await requireRole(req(`pp_adult=${generateToken()}`), x.db, [], NOW);
  assert.ok(!forged.ok && forged.response.status === 401);
  const wrong = await requireRole(req(`pp_adult=${s.token}`), x.db, ['teacher', 'moderator'], NOW);
  assert.ok(!wrong.ok && wrong.response.status === 403);
  assert.ok(!/teacher|moderator/.test(await wrong.response.clone().text()), 'the answer does not say which roles would work');
  const yes = await requireRole(req(`pp_adult=${s.token}`), x.db, ['parent'], NOW);
  assert.ok(yes.ok && yes.session.user.email === 'p@example.com');
  const any = await requireRole(req(`pp_adult=${s.token}`), x.db, [], NOW);
  assert.ok(any.ok, 'an empty list means any signed-in adult');
  x.raw.exec("INSERT INTO user_roles (user_id, role, granted_by, granted_at) VALUES ('" + s.userId + "', 'teacher', 'admin', 1)");
  assert.ok((await requireRole(req(`pp_adult=${s.token}`), x.db, ['teacher'], NOW)).ok, 'a granted role applies on the very next request');
});

test('state-changing calls need the action header AND a matching Origin; reading who is signed in does not', () => {
  const r = (headers: Record<string, string>) => new Request('https://scholar.hibbins.org/api/auth/logout', { method: 'POST', headers });
  assert.equal(checkWriteRequest(r({ 'x-auth-action': 'logout', origin: 'https://scholar.hibbins.org' }), 'logout'), null);
  assert.equal(checkWriteRequest(r({ origin: 'https://scholar.hibbins.org' }), 'logout'), 'missing action header');
  assert.equal(checkWriteRequest(r({ 'x-auth-action': 'verify', origin: 'https://scholar.hibbins.org' }), 'logout'), 'missing action header', 'the header names THIS action');
  assert.equal(checkWriteRequest(r({ 'x-auth-action': 'logout' }), 'logout'), 'missing origin');
  assert.equal(checkWriteRequest(r({ 'x-auth-action': 'logout', origin: 'https://evil.example' }), 'logout'), 'origin mismatch');
  assert.equal(checkWriteRequest(r({ 'x-auth-action': 'logout', origin: 'not a url' }), 'logout'), 'bad origin');
});

// ---------- the handlers, end to end ----------

test('end to end: request, open the link once, get the cookie, see who I am, sign out; the link then fails and the cookie is dead', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const { rec, d } = await deps(x);
  const H = { origin: 'https://scholar.hibbins.org' };
  const call = (path: string, action: string, body?: unknown, extra: Record<string, string> = {}) => new Request(`https://scholar.hibbins.org/api/auth/${path}`, { method: 'POST', headers: { ...H, 'x-auth-action': action, ...extra }, body: body === undefined ? undefined : JSON.stringify(body) });
  assert.equal((await handleRequestLink(call('request', 'request', { email: 'p@example.com' }), d)).status, 200);
  const token = tokenIn(rec.sent[0].text);
  const bad = await handleVerify(call('verify', 'verify', { token: generateToken() }), d);
  assert.equal(bad.status, 400);
  const ok = await handleVerify(call('verify', 'verify', { token }), d);
  assert.equal(ok.status, 200);
  const setCookie = ok.headers.get('set-cookie') ?? '';
  assert.match(setCookie, /^pp_adult=[A-Za-z0-9_-]{43}; Path=\/; Max-Age=2592000; HttpOnly; Secure; SameSite=Lax$/);
  assert.equal(ok.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await ok.json(), { ok: true, user: { email: 'p@example.com' }, roles: ['parent'] });
  const cookie = setCookie.split(';')[0];
  const again = await handleVerify(call('verify', 'verify', { token }), d);
  assert.equal(again.status, 400, 'the same link twice');
  assert.deepEqual(await again.json(), await bad.json(), 'an unknown token and a used one read the same');
  const me = await handleMe(new Request('https://scholar.hibbins.org/api/auth/me', { headers: { cookie } }), d);
  assert.deepEqual(await me.json(), { user: { email: 'p@example.com' }, roles: ['parent'] });
  assert.deepEqual(await (await handleMe(new Request('https://scholar.hibbins.org/api/auth/me'), d)).json(), { user: null, roles: [] });
  const out = await handleLogout(call('logout', 'logout', undefined, { cookie }), d);
  assert.equal(out.status, 200);
  assert.match(out.headers.get('set-cookie') ?? '', /Max-Age=0/);
  assert.deepEqual(await (await handleMe(new Request('https://scholar.hibbins.org/api/auth/me', { headers: { cookie } }), d)).json(), { user: null, roles: [] }, 'the cookie no longer works');
});

test('handlers refuse a missing header or foreign Origin (403), bad or oversized bodies (400, 413), and rate-limit verify', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const { d } = await deps(x, { verifyBurst: createLimiter(2, 1000) });
  const mk = (headers: Record<string, string>, body?: string) => new Request('https://scholar.hibbins.org/api/auth/verify', { method: 'POST', headers, body });
  const good = { origin: 'https://scholar.hibbins.org', 'x-auth-action': 'verify' };
  assert.equal((await handleVerify(mk({ origin: good.origin }, '{}'), d)).status, 403);
  assert.equal((await handleVerify(mk({ ...good, origin: 'https://evil.example' }, '{}'), d)).status, 403);
  assert.equal((await handleVerify(mk(good, '{nope'), d)).status, 400);
  assert.equal((await handleVerify(mk(good, 'x'.repeat(5000)), d)).status, 413);
  const r = await handleVerify(mk(good, '{}'), d);
  assert.equal(r.status, 429, 'the third call from one client inside the window');
  assert.equal(await readCapped(new Request('https://e.com', { method: 'POST', body: 'x'.repeat(10) }), 5), null);
});

// ---------- housekeeping, headers, pages ----------

test('purge removes old links, long-expired sessions and old counters, and keeps fresh ones', async (t0) => {
  const x = await openAuthDb(); if (!x) return t0.skip('node:sqlite unavailable');
  const DAY = 86_400_000;
  x.raw.exec(`INSERT INTO users (id, email, created_at) VALUES ('u1','a@b.co',1)`);
  x.raw.prepare('INSERT INTO magic_links (email, token_hash, created_at, expires_at) VALUES (?,?,?,?)').run('a@b.co', 'old', NOW - 2 * DAY, NOW - 2 * DAY + 900_000);
  x.raw.prepare('INSERT INTO magic_links (email, token_hash, created_at, expires_at) VALUES (?,?,?,?)').run('a@b.co', 'new', NOW - 1000, NOW + 900_000);
  const sess = x.raw.prepare('INSERT INTO sessions (id, user_id, token_hash, created_at, expires_at, revoked_at) VALUES (?,?,?,?,?,?)');
  sess.run('s1', 'u1', 'h1', 1, NOW - 8 * DAY, null);
  sess.run('s2', 'u1', 'h2', 1, NOW + DAY, NOW - 8 * DAY);
  sess.run('s3', 'u1', 'h3', 1, NOW + DAY, null);
  x.raw.prepare('INSERT INTO auth_rate (key, window_start, count) VALUES (?,?,?)').run('old', NOW - 2 * DAY, 5);
  x.raw.prepare('INSERT INTO auth_rate (key, window_start, count) VALUES (?,?,?)').run('new', NOW - 1000, 5);
  await purgeAuthData(x.db, NOW);
  assert.deepEqual(x.raw.prepare('SELECT token_hash FROM magic_links').all().map((r) => Object.values(r)[0]), ['new']);
  assert.deepEqual(x.raw.prepare('SELECT id FROM sessions').all().map((r) => Object.values(r)[0]), ['s3']);
  assert.deepEqual(x.raw.prepare('SELECT key FROM auth_rate').all().map((r) => Object.values(r)[0]), ['new']);
});

test('sign-in pages and API are never cached, indexed or tracked, and the pages never store the token', () => {
  const cfg = fs.readFileSync('next.config.ts', 'utf8');
  for (const src of ["'/sign-in'", "'/sign-in/:path*'", "'/account'", "'/api/auth/:path*'"]) assert.ok(cfg.includes(`source: ${src}`), src);
  // robots.ts disallows PRIVATE_PREFIXES from src/lib/seo/publicPaths.ts
  const robots = fs.readFileSync('src/app/robots.ts', 'utf8');
  const prefixes = fs.readFileSync('src/lib/seo/publicPaths.ts', 'utf8');
  assert.ok(robots.includes('PRIVATE_PREFIXES'));
  assert.ok(prefixes.includes("'/sign-in'") && prefixes.includes("'/account'"));
  const verify = fs.readFileSync('src/components/adultAuth/VerifyLink.tsx', 'utf8');
  assert.ok(!/localStorage|sessionStorage|document\.cookie/.test(verify), 'the token lives in memory only');
  assert.ok(verify.includes('replaceState'), 'and leaves the address bar');
  for (const f of ['sign-in/page.tsx', 'sign-in/verify/page.tsx', 'account/page.tsx']) assert.match(fs.readFileSync(`src/app/${f}`, 'utf8'), /index: false/);
});

test('the sign-in link is built from the site address, never from a request header', () => {
  const src = fs.readFileSync('src/lib/server/adultAuth/http.ts', 'utf8') + fs.readFileSync('src/lib/server/adultAuth/magicLink.ts', 'utf8');
  assert.ok(!/headers\.get\(['"]host['"]\)|x-forwarded-host|req\.url/i.test(src.replace(/new URL\(req\.url\)/g, '')), 'no Host-header injection into the email link');
  assert.ok(src.includes('siteUrl: SITE_URL'));
});
