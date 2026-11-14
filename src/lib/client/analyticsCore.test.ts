import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createTracker, MAX_BATCH, MAX_QUEUE, SESSION_IDLE_MS, FLUSH_INTERVAL_MS, DEVICE_KEY, type TrackerDeps, type WireEvent, type KeyValueStore } from './analyticsCore';

function memStore(): KeyValueStore & { data: Map<string, string> } {
  const data = new Map<string, string>();
  return { data, getItem: (k) => data.get(k) ?? null, setItem: (k, v) => void data.set(k, v) };
}
function brokenStore(): KeyValueStore {
  return { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } };
}

function setup(over: Partial<TrackerDeps> = {}) {
  let t = 1_000_000;
  let n = 0;
  const sent: { dnt: boolean; events: WireEvent[]; unload: boolean }[] = [];
  const timers: { fn: () => void; ms: number; id: number }[] = [];
  const local = memStore();
  const session = memStore();
  const deps: TrackerDeps = {
    now: () => t,
    randomId: () => `id-${++n}-xxxxxxxx`,
    local,
    session,
    dnt: false,
    referrerHost: () => 'google.com',
    send: (b, unload) => void sent.push({ ...b, unload }),
    setTimer: (fn, ms) => { const id = timers.length + 1; timers.push({ fn, ms, id }); return id; },
    clearTimer: (h) => { const i = timers.findIndex((x) => x.id === h); if (i >= 0) timers.splice(i, 1); },
    ...over,
  };
  return { tracker: createTracker(deps), sent, timers, local, session, advance: (ms: number) => { t += ms; } };
}

test('the first event starts a visit: session_start (with referrer) then the event', () => {
  const s = setup();
  s.tracker.track('page_view', { path: '/app' });
  s.tracker.flush();
  const ev = s.sent[0].events;
  assert.deepEqual(ev.map((e) => e.type), ['session_start', 'page_view']);
  assert.equal(ev[0].referrer, 'google.com');
  assert.equal(ev[1].path, '/app');
  assert.equal(ev[0].session_id, ev[1].session_id);
});
test('later events in the same visit reuse the session and device id', () => {
  const s = setup();
  s.tracker.track('page_view');
  s.advance(60_000);
  s.tracker.track('topic_open', { topic: 'nst-solar-system', grade: 6 });
  s.tracker.flush();
  const ev = s.sent[0].events;
  assert.deepEqual(ev.map((e) => e.type), ['session_start', 'page_view', 'topic_open']);
  assert.equal(new Set(ev.map((e) => e.session_id)).size, 1);
  assert.equal(new Set(ev.map((e) => e.device_id)).size, 1);
});
test('a new session starts after 30 minutes idle', () => {
  const s = setup();
  s.tracker.track('page_view');
  s.advance(SESSION_IDLE_MS + 1);
  s.tracker.track('page_view');
  s.tracker.flush();
  const ev = s.sent[0].events;
  assert.deepEqual(ev.map((e) => e.type), ['session_start', 'page_view', 'session_start', 'page_view']);
  assert.notEqual(ev[0].session_id, ev[2].session_id);
  assert.equal(ev[0].device_id, ev[2].device_id);
});
test('activity just under 30 minutes keeps the session alive', () => {
  const s = setup();
  s.tracker.track('page_view');
  s.advance(SESSION_IDLE_MS - 1000);
  s.tracker.track('page_view');
  s.advance(SESSION_IDLE_MS - 1000);
  s.tracker.track('page_view');
  s.tracker.flush();
  assert.equal(s.sent[0].events.filter((e) => e.type === 'session_start').length, 1);
});
test('the device id is stored and reused across trackers (a later visit)', () => {
  const s = setup();
  s.tracker.track('page_view');
  const stored = s.local.data.get(DEVICE_KEY);
  assert.ok(stored);
  const s2 = setup({ local: s.local });
  s2.tracker.track('page_view');
  s2.tracker.flush();
  assert.equal(s2.sent[0].events[0].device_id, stored);
});
test('events are batched in 20s', () => {
  const s = setup();
  for (let i = 0; i < 45; i++) s.tracker.track('topic_open', { topic: `t${i}` });
  s.tracker.flush();
  assert.ok(s.sent.every((b) => b.events.length <= MAX_BATCH));
  assert.equal(s.sent.reduce((n, b) => n + b.events.length, 0), 46);
  assert.equal(s.tracker.pending(), 0);
});
test('a timer is scheduled for 10 s on the first event, once', () => {
  const s = setup();
  s.tracker.track('page_view');
  s.tracker.track('page_view');
  assert.equal(s.timers.length, 1);
  assert.equal(s.timers[0].ms, FLUSH_INTERVAL_MS);
  s.timers[0].fn();
  assert.equal(s.sent.length, 1);
  assert.equal(s.tracker.pending(), 0);
});
test('flush(true) marks the send as an unload send', () => {
  const s = setup();
  s.tracker.track('page_view');
  s.tracker.flush(true);
  assert.equal(s.sent[0].unload, true);
});
test('the queue is bounded', () => {
  const s = setup();
  for (let i = 0; i < MAX_QUEUE + 50; i++) s.tracker.track('topic_open');
  assert.ok(s.tracker.pending() <= MAX_QUEUE);
});
test('blocked storage still works with per-tab ids', () => {
  const s = setup({ local: brokenStore(), session: brokenStore() });
  s.tracker.track('page_view');
  s.advance(1000);
  s.tracker.track('topic_open');
  s.tracker.flush();
  const ev = s.sent[0].events;
  assert.deepEqual(ev.map((e) => e.type), ['session_start', 'page_view', 'topic_open']);
  assert.equal(new Set(ev.map((e) => e.device_id)).size, 1);
  assert.equal(new Set(ev.map((e) => e.session_id)).size, 1);
});
test('missing storage (null) also works', () => {
  const s = setup({ local: null, session: null });
  s.tracker.track('page_view');
  s.tracker.flush();
  assert.equal(s.sent[0].events.length, 2);
});
test('Do Not Track: only page views, constant device id, flag set, no referrer', () => {
  const s = setup({ dnt: true });
  s.tracker.track('topic_open', { topic: 'x' });
  s.tracker.track('practice_finish', { meta: { score: 3 } });
  s.tracker.track('page_view', { path: '/app' });
  s.tracker.flush();
  assert.equal(s.sent[0].dnt, true);
  const ev = s.sent[0].events;
  assert.ok(ev.every((e) => e.type === 'page_view' || e.type === 'session_start'));
  assert.ok(ev.every((e) => e.device_id === 'dnt'));
  assert.equal(s.local.data.size, 0);
});
test('track never throws, even when every dependency throws', () => {
  const boom = () => { throw new Error('boom'); };
  const tr = createTracker({
    now: boom, randomId: boom, local: brokenStore(), session: brokenStore(), dnt: false,
    referrerHost: boom, send: boom, setTimer: boom, clearTimer: boom,
  });
  assert.doesNotThrow(() => tr.track('page_view'));
  assert.doesNotThrow(() => tr.flush(true));
});
test('a failing send does not throw and drops the batch', () => {
  const s = setup({ send: () => { throw new Error('offline'); } });
  assert.doesNotThrow(() => { s.tracker.track('page_view'); s.tracker.flush(); });
  assert.equal(s.tracker.pending(), 0);
});
test('props pass through but identity fields are the tracker\'s own', () => {
  const s = setup();
  s.tracker.track('practice_finish', { grade: 6, subject: 'nst', topic: 'nst-solar-system', meta: { score: 7, total: 10, ms: 5000 } });
  s.tracker.flush();
  const e = s.sent[0].events[1];
  assert.equal(e.type, 'practice_finish');
  assert.deepEqual(e.meta, { score: 7, total: 10, ms: 5000 });
  assert.match(e.device_id, /^id-/);
});
