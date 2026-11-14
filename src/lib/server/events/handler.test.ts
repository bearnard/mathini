import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handleEvents, type EventsDeps, type EventsRequest } from './handler';
import { createRateLimiter } from './ratelimit';
import { INSERT_EVENT_SQL } from './rows';

const CHROME = 'Mozilla/5.0 (Linux; Android 13; SM-A135F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36';
const ev = (over: Record<string, unknown> = {}) => ({ type: 'page_view', device_id: 'dev-12345678', session_id: 'ses-12345678', ...over });

function setup(over: Partial<EventsDeps> = {}) {
  const inserted: unknown[][] = [];
  const sqls: string[] = [];
  let batches = 0;
  let waited = 0;
  const db = {
    prepare: (sql: string) => ({ bind: (...v: unknown[]) => { sqls.push(sql); return { sql, v }; } }),
    batch: async (stmts: { sql: string; v: unknown[] }[]) => { batches++; for (const s of stmts) if (s.sql === INSERT_EVENT_SQL) inserted.push(s.v); },
  };
  const deps: EventsDeps = {
    db: db as never,
    cf: { country: 'ZA', region: 'Gauteng', regionCode: 'GT', city: 'Cape Town', timezone: 'Africa/Johannesburg', latitude: '-33.9249', longitude: '18.4241' },
    now: 1_700_000_000_000,
    verifySession: async (t) => (t === 'good-cookie' ? 'stu-1' : null),
    rateLimiter: createRateLimiter(300, 3600_000),
    waitUntil: () => { waited++; },
    random: () => 0.99,
    ...over,
  };
  return { deps, inserted, get batches() { return batches; }, get waited() { return waited; } };
}
const req = (body: unknown, over: Partial<EventsRequest> = {}): EventsRequest => ({
  contentLength: null, body: typeof body === 'string' ? body : JSON.stringify(body), userAgent: CHROME, sessionCookie: undefined, ...over,
});

test('a valid batch is stored with server-side fields', async () => {
  const s = setup();
  const r = await handleEvents(req({ events: [ev(), ev({ type: 'topic_open', topic: 'nst-solar-system', grade: 6 })] }, { sessionCookie: 'good-cookie' }), s.deps);
  assert.equal(r.status, 204);
  assert.equal(r.stored, 2);
  assert.equal(s.inserted.length, 2);
  const row = s.inserted[1];
  assert.equal(row[0], 1_700_000_000_000);
  assert.equal(row[4], 'stu-1');
  assert.equal(row[12], 'Cape Town');
  assert.equal(row[14], -33.9);
  assert.equal(row[16], 'mobile');
});
test('student_id comes from the cookie, never from the body', async () => {
  const s = setup();
  await handleEvents(req({ events: [ev({ student_id: 'victim', studentId: 'victim' })] }, { sessionCookie: undefined }), s.deps);
  assert.equal(s.inserted[0][4], null);
  const s2 = setup();
  await handleEvents(req({ events: [ev({ student_id: 'victim' })] }, { sessionCookie: 'good-cookie' }), s2.deps);
  assert.equal(s2.inserted[0][4], 'stu-1');
});
test('an invalid cookie leaves the event anonymous but still stored', async () => {
  const s = setup();
  const r = await handleEvents(req({ events: [ev()] }, { sessionCookie: 'forged.value' }), s.deps);
  assert.equal(r.stored, 1);
  assert.equal(s.inserted[0][4], null);
});
test('a throwing session check does not lose the event', async () => {
  const s = setup({ verifySession: async () => { throw new Error('no secret'); } });
  const r = await handleEvents(req({ events: [ev()] }), s.deps);
  assert.equal(r.stored, 1);
  assert.equal(s.inserted[0][4], null);
});
test('client-supplied location and timestamp are ignored', async () => {
  const s = setup();
  await handleEvents(req({ events: [ev({ ts: 1, city: 'Mars', country: 'XX', lat: 99, lon: 99 })] }), s.deps);
  assert.equal(s.inserted[0][0], 1_700_000_000_000);
  assert.equal(s.inserted[0][9], 'ZA');
  assert.equal(s.inserted[0][12], 'Cape Town');
});
test('bots are dropped but still answered 204', async () => {
  const s = setup();
  for (const userAgent of ['Googlebot/2.1', 'curl/8.5.0', '', null]) {
    const r = await handleEvents(req({ events: [ev()] }, { userAgent }), s.deps);
    assert.equal(r.status, 204);
    assert.equal(r.reason, 'bot');
  }
  assert.equal(s.inserted.length, 0);
});
test('a Cloudflare verified bot is dropped', async () => {
  const s = setup({ cf: { verifiedBotCategory: 'Search Engine Crawler' } });
  const r = await handleEvents(req({ events: [ev()] }), s.deps);
  assert.equal(r.reason, 'bot');
});
test('garbage and unusable bodies give 204 and store nothing', async () => {
  const s = setup();
  for (const body of ['not json', '{"events":"x"}', '[]', 'null', '{"events":[]}', '{"events":[{"type":"nope"}]}']) {
    const r = await handleEvents(req(body), s.deps);
    assert.equal(r.status, 204);
    assert.equal(r.stored, 0);
  }
  assert.equal(s.inserted.length, 0);
});
test('a body over 16 KB is dropped (by header and by actual size)', async () => {
  const s = setup();
  assert.equal((await handleEvents(req({ events: [ev()] }, { contentLength: '20000' }), s.deps)).reason, 'too-large');
  const big = { events: [ev({ meta: { a: 'x'.repeat(50) } })], pad: 'p'.repeat(17000) };
  assert.equal((await handleEvents(req(big), s.deps)).reason, 'too-large');
  assert.equal(s.inserted.length, 0);
});
test('a batch over 20 stores only the first 20', async () => {
  const s = setup();
  const r = await handleEvents(req({ events: Array.from({ length: 21 }, () => ev()) }), s.deps);
  assert.equal(r.stored, 20);
});
test('the rate limit stops a runaway device but not others', async () => {
  const s = setup({ rateLimiter: createRateLimiter(5, 3600_000) });
  assert.equal((await handleEvents(req({ events: Array.from({ length: 5 }, () => ev()) }), s.deps)).stored, 5);
  assert.equal((await handleEvents(req({ events: [ev()] }), s.deps)).reason, 'rate-limited');
  assert.equal((await handleEvents(req({ events: [ev({ device_id: 'other-device-1' })] }), s.deps)).stored, 1);
});
test('Do Not Track: no student, no city or coordinates, constant device id', async () => {
  const s = setup();
  const r = await handleEvents(req({ dnt: true, events: [ev({ device_id: 'dev-12345678' })] }, { sessionCookie: 'good-cookie' }), s.deps);
  assert.equal(r.stored, 1);
  const row = s.inserted[0];
  assert.equal(row[2], 'dnt');
  assert.equal(row[4], null);
  assert.equal(row[9], 'ZA');
  assert.deepEqual(row.slice(10, 16), [null, null, null, null, null, null]);
});
test('Do Not Track devices do not share one rate-limit bucket', async () => {
  const s = setup({ rateLimiter: createRateLimiter(2, 3600_000) });
  const a = await handleEvents(req({ dnt: true, events: [ev({ session_id: 'session-aaaaaa' }), ev({ session_id: 'session-aaaaaa' })] }), s.deps);
  const b = await handleEvents(req({ dnt: true, events: [ev({ session_id: 'session-bbbbbb' })] }), s.deps);
  assert.equal(a.stored, 2);
  assert.equal(b.stored, 1);
});
test('a database failure is swallowed', async () => {
  const s = setup();
  (s.deps.db as unknown as { batch: () => Promise<never> }).batch = async () => { throw new Error('D1 down'); };
  const r = await handleEvents(req({ events: [ev()] }), s.deps);
  assert.equal(r.status, 204);
  assert.equal(r.reason, 'error');
});
test('the purge runs in the background about 1 in 200 times and never inline', async () => {
  const lucky = setup({ random: () => 0.0001 });
  await handleEvents(req({ events: [ev()] }), lucky.deps);
  assert.equal(lucky.waited, 1);
  const unlucky = setup({ random: () => 0.9 });
  await handleEvents(req({ events: [ev()] }), unlucky.deps);
  assert.equal(unlucky.waited, 0);
});
test('no purge when waitUntil is unavailable', async () => {
  const s = setup({ waitUntil: undefined, random: () => 0 });
  const r = await handleEvents(req({ events: [ev()] }), s.deps);
  assert.equal(r.stored, 1);
});
test('no IP-like or UA data is bound anywhere in the row', async () => {
  const s = setup();
  await handleEvents(req({ events: [ev()] }), s.deps);
  const flat = JSON.stringify(s.inserted[0]);
  assert.ok(!flat.includes('Mozilla'));
  assert.ok(!/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/.test(flat));
});
