import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateBatch, cleanPath, cleanReferrerHost, cleanMeta, cleanGrade, EVENT_TYPES, MAX_EVENTS_PER_BATCH } from './validate';

const ev = (over: Record<string, unknown> = {}) => ({ type: 'page_view', device_id: 'dev-12345678', session_id: 'ses-12345678', ...over });

test('all 11 allowlisted types are accepted', () => {
  assert.equal(EVENT_TYPES.length, 11);
  const b = validateBatch({ events: EVENT_TYPES.map((type) => ev({ type })) });
  assert.equal(b?.events.length, 11);
});
test('unknown types are dropped, valid ones kept', () => {
  const b = validateBatch({ events: [ev({ type: 'hack' }), ev(), ev({ type: 'attempt' })] });
  assert.equal(b?.events.length, 1);
});
test('non-object bodies and missing events array are unusable', () => {
  for (const bad of [null, undefined, 'x', 5, [], {}, { events: 'nope' }]) assert.equal(validateBatch(bad), null);
});
test('a batch is capped at 20 events', () => {
  const b = validateBatch({ events: Array.from({ length: 50 }, () => ev()) });
  assert.equal(b?.events.length, MAX_EVENTS_PER_BATCH);
});
test('bad or missing device/session ids drop the event', () => {
  const b = validateBatch({ events: [ev({ device_id: 'x' }), ev({ session_id: 'has space!!' }), ev({ device_id: undefined }), ev()] });
  assert.equal(b?.events.length, 1);
});
test('Do Not Track forces the constant device id', () => {
  const b = validateBatch({ dnt: true, events: [ev({ device_id: 'dev-12345678' })] });
  assert.equal(b?.dnt, true);
  assert.equal(b?.events[0].deviceId, 'dnt');
});
test('the client cannot set ts, student, location or device fields', () => {
  const b = validateBatch({ events: [ev({ ts: 1, student_id: 'victim', country: 'XX', city: 'Nowhere', lat: 1, device: 'tablet', browser: 'Chrome', os: 'Linux' })] });
  const e = b?.events[0] as unknown as Record<string, unknown>;
  for (const k of ['ts', 'studentId', 'student_id', 'country', 'city', 'lat', 'device', 'browser', 'os']) assert.equal(k in e, false, k);
});
test('over-long text fields are truncated', () => {
  const b = validateBatch({ events: [ev({ subject: 's'.repeat(500), topic: 't'.repeat(500), path: '/' + 'p'.repeat(1000) })] });
  assert.equal(b?.events[0].subject?.length, 64);
  assert.equal(b?.events[0].topic?.length, 64);
  assert.equal(b?.events[0].path?.length, 200);
});
test('grade must be an integer 5 to 12', () => {
  assert.equal(cleanGrade(6), 6);
  for (const bad of [4, 13, 6.5, '6', null, NaN]) assert.equal(cleanGrade(bad), null);
});
test('path drops the query string and fragment', () => {
  assert.equal(cleanPath('/app?start=resume&code=TIGER-4821#x'), '/app');
  assert.equal(cleanPath('?only=query'), null);
});
test('referrer is reduced to a bare host', () => {
  assert.equal(cleanReferrerHost('https://www.google.com/search?q=secret'), 'www.google.com');
  assert.equal(cleanReferrerHost('Example.COM'), 'example.com');
  assert.equal(cleanReferrerHost('https://a.b:8080/x'), 'a.b');
  assert.equal(cleanReferrerHost('not a host!!'), null);
  assert.equal(cleanReferrerHost(''), null);
});
test('meta keeps small primitive values only', () => {
  assert.equal(cleanMeta({ score: 17, total: 20, ok: true, name: 'x' }), '{"score":17,"total":20,"ok":true,"name":"x"}');
  assert.equal(cleanMeta({ nested: { a: 1 }, arr: [1] }), null);
  assert.equal(cleanMeta('string'), null);
  assert.equal(cleanMeta([1, 2]), null);
  assert.equal(cleanMeta({}), null);
});
test('meta is capped: at most 10 keys, strings at most 100 chars, 1 KB overall', () => {
  const many = Object.fromEntries(Array.from({ length: 30 }, (_, i) => [`k${i}`, i]));
  assert.equal(Object.keys(JSON.parse(cleanMeta(many) as string)).length, 10);
  assert.equal(JSON.parse(cleanMeta({ s: 'a'.repeat(500) }) as string).s.length, 100);
  const big = Object.fromEntries(Array.from({ length: 10 }, (_, i) => [`k${'x'.repeat(30)}${i}`, 'v'.repeat(100)]));
  const out = cleanMeta(big);
  assert.ok(out === null || out.length <= 1024);
});
test('control characters are stripped', () => {
  const b = validateBatch({ events: [ev({ topic: 'a\u0000b\nc' })] });
  assert.equal(b?.events[0].topic, 'abc');
});

test('events for the admin area are dropped by the server too', () => {
  const b = validateBatch({ events: [ev({ path: '/admin' }), ev({ path: '/admin/learners/1?x=2' }), ev({ path: '/administration' }), ev({ path: '/app' })] });
  assert.deepEqual(b?.events.map((e) => e.path), ['/administration', '/app']);
});
test('admin_delete is a server-only type: the client allowlist rejects it', () => {
  const b = validateBatch({ events: [ev({ type: 'admin_delete' }), ev({ type: 'page_view' })] });
  assert.equal(b?.events.length, 1);
  assert.equal(b?.events[0].type, 'page_view');
  assert.ok(!(EVENT_TYPES as readonly string[]).includes('admin_delete'));
});
