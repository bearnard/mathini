import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { EDGE_LIMITED_MESSAGE, EDGE_RETRY_AFTER_SECONDS, EDGE_ROUTES, edgeAllow, edgeKey, edgeLimited, hashClient, ipOf, limitedResponse, type EdgeLimitEnv, type RateLimitBinding } from './edgeLimit';
import { handleReview } from './teacherReview/http';

/** A fake Workers Rate Limiting binding: `limit` calls per key, then success: false (the real one also stops counting once it says no). */
const fakeBinding = (limit: number): RateLimitBinding & { keys: string[]; counts: Map<string, number> } => {
  const counts = new Map<string, number>();
  const keys: string[] = [];
  return {
    keys,
    counts,
    async limit({ key }) {
      keys.push(key);
      const n = counts.get(key) ?? 0;
      if (n >= limit) return { success: false };
      counts.set(key, n + 1);
      return { success: true };
    },
  };
};
const SECRET = 'test-secret';
const env = (perIp = 120, perLearner = 60) => {
  const ip = fakeBinding(perIp);
  const learner = fakeBinding(perLearner);
  return { ip, learner, env: { EDGE_PER_IP: ip, EDGE_PER_LEARNER: learner, SESSION_SECRET: SECRET } as EdgeLimitEnv };
};
const req = (ip?: string, headers: Record<string, string> = {}) => new Request('https://example.test/api/x', { method: 'POST', headers: { ...(ip ? { 'cf-connecting-ip': ip } : {}), ...headers } });

test('keys: a learner id when there is a session, else a keyed hash of the IP; the raw address is never in a key', async () => {
  assert.equal(await edgeKey('attempts', { learnerId: 'abc-123', ip: '41.1.2.3' }, SECRET), 'l:attempts:abc-123');
  const k = await edgeKey('session', { ip: '41.1.2.3' }, SECRET);
  assert.match(k, /^ip:session:[0-9a-f]{32}$/);
  assert.ok(!k.includes('41.1.2.3'));
  // deterministic, different per route, per address and per secret
  assert.equal(k, await edgeKey('session', { ip: '41.1.2.3' }, SECRET));
  assert.notEqual(k, await edgeKey('students', { ip: '41.1.2.3' }, SECRET));
  assert.notEqual(k, await edgeKey('session', { ip: '41.1.2.4' }, SECRET));
  assert.notEqual(await hashClient('41.1.2.3', 'a'), await hashClient('41.1.2.3', 'b'));
  // keyed: it is not the plain SHA-256 of the address (which could be reversed by trying every IPv4 address)
  assert.notEqual(await hashClient('41.1.2.3', SECRET), await hashClient('41.1.2.3'));
  // IPv6 works too
  assert.match(await edgeKey('session', { ip: '2001:db8::1' }, SECRET), /^ip:session:[0-9a-f]{32}$/);
});

test('ipOf: Cloudflare\'s header first, then the first X-Forwarded-For, else unknown', () => {
  assert.equal(ipOf(req('41.1.2.3', { 'x-forwarded-for': '9.9.9.9' })), '41.1.2.3');
  assert.equal(ipOf(req(undefined, { 'x-forwarded-for': '9.9.9.9, 8.8.8.8' })), '9.9.9.9');
  assert.equal(ipOf(req()), 'unknown');
});

test('fails OPEN: no env, no binding, a throwing binding or an unknown client all allow the call', async () => {
  assert.equal(await edgeAllow(null, 'attempts', { learnerId: 'l1', ip: '1.1.1.1' }), true);
  assert.equal(await edgeAllow(undefined, 'session', { ip: '1.1.1.1' }), true);
  assert.equal(await edgeAllow({}, 'session', { ip: '1.1.1.1' }), true);
  assert.equal(await edgeAllow({ EDGE_PER_IP: {} as never }, 'session', { ip: '1.1.1.1' }), true);
  const boom: RateLimitBinding = { limit: async () => { throw new Error('binding down'); } };
  assert.equal(await edgeAllow({ EDGE_PER_IP: boom, EDGE_PER_LEARNER: boom }, 'session', { ip: '1.1.1.1' }), true);
  assert.equal(await edgeAllow({ EDGE_PER_IP: boom, EDGE_PER_LEARNER: boom }, 'attempts', { learnerId: 'l1', ip: '1.1.1.1' }), true);
  // a learner route with only the IP binding present (or the reverse) does not limit
  assert.equal(await edgeAllow({ EDGE_PER_IP: fakeBinding(0) }, 'attempts', { learnerId: 'l1', ip: '1.1.1.1' }), true);
  assert.equal(await edgeAllow({ EDGE_PER_LEARNER: fakeBinding(0) }, 'session', { ip: '1.1.1.1' }), true);
  // an unknown client address would share ONE bucket and throttle everybody: not limited, and the binding is not even called
  const e = env(0, 0);
  assert.equal(await edgeAllow(e.env, 'session', { ip: 'unknown' }), true);
  assert.equal(await edgeAllow(e.env, 'session', { ip: '' }), true);
  assert.deepEqual(e.ip.keys, []);
});

test('a learner is limited per learner (60 per 10 s), anyone else per IP (120 per 10 s); the two budgets are separate', async () => {
  const e = env(120, 60);
  for (let i = 0; i < 60; i++) assert.equal(await edgeAllow(e.env, 'attempts', { learnerId: 'l1', ip: '41.1.1.1' }), true, `attempt ${i + 1}`);
  assert.equal(await edgeAllow(e.env, 'attempts', { learnerId: 'l1', ip: '41.1.1.1' }), false, 'the 61st attempt in a window');
  assert.equal(await edgeAllow(e.env, 'attempts', { learnerId: 'l2', ip: '41.1.1.1' }), true, 'another learner on the same IP is not affected');
  for (let i = 0; i < 120; i++) assert.equal(await edgeAllow(e.env, 'session', { ip: '41.9.9.9' }), true);
  assert.equal(await edgeAllow(e.env, 'session', { ip: '41.9.9.9' }), false, 'the 121st call from one address');
  assert.equal(await edgeAllow(e.env, 'session', { ip: '41.9.9.8' }), true, 'another address is not affected');
});

test('a whole class behind one school IP: 30 learners each saving 50 answers, then 30 sign-ins, all go through', async () => {
  const e = env(120, 60);
  for (let learner = 0; learner < 30; learner++) for (let i = 0; i < 50; i++) assert.equal(await edgeAllow(e.env, 'attempts', { learnerId: `learner-${learner}`, ip: '196.1.1.1' }), true);
  for (let i = 0; i < 30; i++) assert.equal(await edgeAllow(e.env, 'session', { ip: '196.1.1.1' }), true);
  // the binding only ever saw learner ids and a hash, never the school's address
  for (const k of [...e.learner.keys, ...e.ip.keys]) assert.ok(!k.includes('196.1.1.1'));
});

test('one route cannot use up another route\'s budget', async () => {
  const e = env(5, 5);
  for (let i = 0; i < 5; i++) await edgeAllow(e.env, 'students', { ip: '41.1.1.1' });
  assert.equal(await edgeAllow(e.env, 'students', { ip: '41.1.1.1' }), false);
  assert.equal(await edgeAllow(e.env, 'session', { ip: '41.1.1.1' }), true);
  for (let i = 0; i < 5; i++) await edgeAllow(e.env, 'attempts', { learnerId: 'l1', ip: '41.1.1.1' });
  assert.equal(await edgeAllow(e.env, 'attempts', { learnerId: 'l1', ip: '41.1.1.1' }), false);
  assert.equal(await edgeAllow(e.env, 'runs', { learnerId: 'l1', ip: '41.1.1.1' }), true, 'runs have their own key');
});

test('the 429: a friendly message, Retry-After, never cached; null when allowed', async () => {
  const r = limitedResponse();
  assert.equal(r.status, 429);
  assert.equal(r.headers.get('retry-after'), String(EDGE_RETRY_AFTER_SECONDS));
  assert.equal(r.headers.get('cache-control'), 'no-store');
  const body = (await r.json()) as { error: string };
  assert.equal(body.error, EDGE_LIMITED_MESSAGE);
  assert.match(EDGE_LIMITED_MESSAGE, /wait a few seconds/i);
  assert.ok(!/error|blocked|banned|abuse|spam|you (did|have) (wrong|violated)/i.test(EDGE_LIMITED_MESSAGE));
  const e = env(1, 1);
  assert.equal(await edgeLimited(e.env, req('41.2.2.2'), 'session'), null);
  const blocked = await edgeLimited(e.env, req('41.2.2.2'), 'session');
  assert.equal(blocked?.status, 429);
  assert.equal(await edgeLimited(e.env, req('41.2.2.2'), 'attempts', 'l9'), null);
  assert.equal((await edgeLimited(e.env, req('41.2.2.2'), 'attempts', 'l9'))?.status, 429);
});

test('teacher review: handleReview answers 429 from the edge limit before any token or database work, and fails open without it', async () => {
  const e = env(2, 60);
  const call = (edge: EdgeLimitEnv | null) =>
    handleReview(new Request('https://x.test/api/teacher-review', { headers: { 'x-review-action': 'load', 'cf-connecting-ip': '41.5.5.5' } }), 'load', async () => new Response('ran'), { db: {} as never, now: 1, edge });
  assert.equal((await call(e.env)).status, 404); // a missing token is "not found": the call got past the edge limit
  assert.equal((await call(e.env)).status, 404);
  const blocked = await call(e.env);
  assert.equal(blocked.status, 429);
  assert.equal(((await blocked.json()) as { error: string }).error, EDGE_LIMITED_MESSAGE);
  assert.equal(blocked.headers.get('cache-control'), 'no-store'); // the privacy headers still apply
  assert.equal((await call(null)).status, 404, 'no binding: not limited');
});

test('every limited route calls the limiter BEFORE it reads the body or touches the database', () => {
  const read = (p: string) => fs.readFileSync(path.join(process.cwd(), 'src', p), 'utf8');
  const before = (file: string, limiter: RegExp, later: RegExp[]) => {
    const src = read(file);
    const at = src.search(limiter);
    assert.ok(at >= 0, `${file} must call the edge limiter`);
    for (const l of later) {
      const i = src.search(l);
      assert.ok(i >= 0 && at < i, `${file}: the limiter must come before ${l}`);
    }
  };
  before('app/api/attempts/route.ts', /routeLimited\(req, 'attempts', studentId\)/, [/parseTaskSlug\(task\)/, /INSERT INTO attempts/]);
  before('app/api/runs/route.ts', /routeLimited\(req, 'runs', studentId\)/, [/req\.json\(\)/, /startRun\(/]);
  before('app/api/runs/[id]/finish/route.ts', /routeLimited\(req, 'runs', studentId\)/, [/finishRun\(/]);
  before('app/api/students/route.ts', /routeLimited\(req, 'students'\)/, [/req\.json\(\)/, /hashPin\(/]);
  before('app/api/session/route.ts', /routeLimited\(req, 'session'\)/, [/req\.json\(\)/, /verifyPin\(/]);
  before('app/api/auth/request/route.ts', /routeLimited\(req, 'auth-request'\)/, [/handleRequestLink\(/]);
  before('lib/server/teacherReview/http.ts', /edgeAllow\(edgeEnv, 'teacher-review'/, [/hashToken\(token\)/, /findReviewerByToken\(/]);
  // attempts and runs need a session first: the limiter is keyed by the learner, so it sits right after the 401
  assert.ok(read('app/api/attempts/route.ts').indexOf('Not authenticated') < read('app/api/attempts/route.ts').indexOf("routeLimited(req, 'attempts'"));
  assert.deepEqual([...EDGE_ROUTES].sort(), ['attempts', 'auth-request', 'demo', 'runs', 'session', 'students', 'teacher-review']);
});

test('wrangler.jsonc: the ratelimits entries have the shape Cloudflare documents, match the env names, and use the limits we chose', () => {
  const text = fs.readFileSync(path.join(process.cwd(), 'wrangler.jsonc'), 'utf8');
  const cfg = JSON.parse(text.replace(/^\s*\/\/.*$/gm, '').replace(/,(\s*[}\]])/g, '$1')) as { ratelimits?: { name: string; namespace_id: string; simple: { limit: number; period: number } }[] };
  const rl = cfg.ratelimits ?? [];
  assert.deepEqual(rl.map((r) => r.name).sort(), ['EDGE_PER_IP', 'EDGE_PER_LEARNER']);
  for (const r of rl) {
    assert.match(r.namespace_id, /^[1-9][0-9]*$/, 'namespace_id is a string holding a positive integer');
    assert.ok(Number.isInteger(r.simple.limit) && r.simple.limit > 0);
    assert.ok([10, 60].includes(r.simple.period), 'period is 10 or 60 seconds');
  }
  assert.equal(new Set(rl.map((r) => r.namespace_id)).size, rl.length, 'namespace ids are unique');
  const by = Object.fromEntries(rl.map((r) => [r.name, r.simple]));
  assert.deepEqual(by.EDGE_PER_IP, { limit: 120, period: 10 });
  assert.deepEqual(by.EDGE_PER_LEARNER, { limit: 200, period: 10 });
});

test('policy: the limiter never logs and never hands the binding a raw address', () => {
  for (const f of ['edgeLimit.ts', 'edgeLimitRoute.ts']) {
    const src = fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'server', f), 'utf8');
    assert.ok(!/console\./.test(src), `${f} must not log`);
  }
  const core = fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'server', 'edgeLimit.ts'), 'utf8');
  assert.ok(!/key:\s*(who\.)?ip\b|key:\s*ip\b/.test(core), 'the binding key must be built by edgeKey (a hash), not from the address');
});
