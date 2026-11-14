import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openTestDb, insertStudent, insertEvent, type TestDb } from './testdb';
import { live, LIVE_WINDOW_MS } from './live';

const NOW = Date.UTC(2026, 10, 14, 10, 0, 0);
const SKIP = 'node:sqlite is not available on this Node version';
async function withDb(ctx: { skip: (m: string) => void }, fn: (t: TestDb) => Promise<void>) {
  const t = await openTestDb();
  if (!t) return ctx.skip(SKIP);
  await fn(t);
}
const ago = (s: number) => NOW - s * 1000;

test('only visits with an event in the last 5 minutes are live; one row per visit, newest first', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: ago(30), session: 'a', device: 'da' });
    insertEvent(t, { ts: ago(10), session: 'a', device: 'da' });
    insertEvent(t, { ts: ago(120), session: 'b', device: 'db' });
    insertEvent(t, { ts: ago(299), session: 'c', device: 'dc' });
    insertEvent(t, { ts: ago(301), session: 'old', device: 'dold' });
    const l = await live(t.db, NOW);
    assert.equal(l.windowMinutes, 5);
    assert.equal(l.active, 3);
    assert.deepEqual(l.sessions.map((s) => s.ageSeconds), [10, 120, 299]);
    assert.equal(LIVE_WINDOW_MS, 300000);
  });
});
test('learners show their NICKNAME (never the real name); anonymous visitors have none; counts split', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 's1', created: ago(99999), name: 'lion_thandi', consent: 1 });
    insertEvent(t, { ts: ago(20), session: 'a', device: 'da', student: 's1', city: 'Pretoria', country: 'ZA', region: 'Gauteng', lat: -25.7, lon: 28.2 });
    insertEvent(t, { ts: ago(40), session: 'b', device: 'db', country: 'ZA', region: 'Limpopo' });
    const l = await live(t.db, NOW);
    assert.deepEqual([l.active, l.learners, l.anonymous], [2, 1, 1]);
    assert.equal(l.sessions[0].nickname, 'lion_thandi');
    assert.equal(l.sessions[0].city, 'Pretoria');
    assert.equal(l.sessions[1].nickname, null);
    assert.equal(l.sessions[1].city, null);
    assert.equal(l.sessions[1].region, 'Limpopo');
    assert.ok(!JSON.stringify(l).includes('Real s1'), 'the real name never appears');
  });
});
test('the current topic is the most recent event WITH a topic, even if a later event has none', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: ago(100), session: 'a', device: 'da', type: 'topic_open', topic: 'old-topic', subject: 'nst', grade: 6 });
    insertEvent(t, { ts: ago(60), session: 'a', device: 'da', type: 'practice_start', topic: 'solar-system', subject: 'nst', grade: 6 });
    insertEvent(t, { ts: ago(5), session: 'a', device: 'da', type: 'page_view' });
    const s = (await live(t.db, NOW)).sessions[0];
    assert.deepEqual([s.topic, s.subject, s.grade, s.lastType], ['solar-system', 'nst', 6, 'page_view']);
  });
});
test('admin rows are ignored, future events are not counted, nothing live gives an empty list', async (ctx) => {
  await withDb(ctx, async (t) => {
    assert.deepEqual(await live(t.db, NOW), { windowMinutes: 5, active: 0, learners: 0, anonymous: 0, sessions: [], generatedAt: NOW });
    insertEvent(t, { ts: ago(5), type: 'admin_delete', device: 'admin', session: 'admin' });
    insertEvent(t, { ts: NOW + 60_000, session: 'future', device: 'df' });
    assert.equal((await live(t.db, NOW)).active, 0);
  });
});
test('the list is capped at 50 rows but the active count is the true total', async (ctx) => {
  await withDb(ctx, async (t) => {
    for (let i = 0; i < 70; i++) insertEvent(t, { ts: ago(10 + i), session: `s${i}`, device: `d${i}` });
    const l = await live(t.db, NOW);
    assert.equal(l.active, 70);
    assert.equal(l.sessions.length, 50);
  });
});
