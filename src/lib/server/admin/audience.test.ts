import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openTestDb, insertEvent, type TestDb } from './testdb';
import { parseFilters } from './filters';
import { funnel, devices, toShares } from './audience';

const NOW = Date.UTC(2026, 10, 14, 10, 0, 0); // Sat 2026-11-14 12:00 SAST
const DAY = 86_400_000;
const at = (daysAgo: number, mins = 0) => NOW - daysAgo * DAY + mins * 60_000;
const F = (q = 'range=30d') => parseFilters(new URLSearchParams(q), NOW);
const SKIP = 'node:sqlite is not available on this Node version';
async function withDb(ctx: { skip: (m: string) => void }, fn: (t: TestDb) => Promise<void>) {
  const t = await openTestDb();
  if (!t) return ctx.skip(SKIP);
  await fn(t);
}
const e = (t: TestDb, device: string, type: string, ts: number) => insertEvent(t, { ts, type, device, session: `s-${device}` });
const counts = (f: { steps: { count: number }[] }) => f.steps.map((s) => s.count);

test('funnel: each step is a subset of the one above, counted in devices', async (ctx) => {
  await withDb(ctx, async (t) => {
    e(t, 'A', 'page_view', at(5)); // visitor only
    e(t, 'B', 'onboarding_start', at(5)); // started, did not sign up
    e(t, 'C', 'onboarding_start', at(5, 0)); e(t, 'C', 'signup', at(5, 2)); // signed up, never practised
    e(t, 'D', 'onboarding_start', at(5, 0)); e(t, 'D', 'signup', at(5, 2)); e(t, 'D', 'practice_finish', at(5, 30)); // practised same day
    e(t, 'E', 'onboarding_start', at(5, 0)); e(t, 'E', 'signup', at(5, 2)); e(t, 'E', 'practice_finish', at(5, 30)); e(t, 'E', 'page_view', at(3)); // returned
    const f = await funnel(t.db, F());
    assert.equal(f.unit, 'devices');
    assert.deepEqual(counts(f), [5, 4, 3, 2, 1]);
    assert.deepEqual(f.steps.map((s) => s.key), ['visitors', 'onboarding', 'signed_up', 'practised', 'returned']);
    const c = counts(f);
    for (let i = 1; i < c.length; i++) assert.ok(c[i] <= c[i - 1]);
  });
});

test('funnel: a signup without a prior onboarding_start, or practice BEFORE signing up, does not advance a device', async (ctx) => {
  await withDb(ctx, async (t) => {
    e(t, 'F', 'signup', at(5)); // signup with no onboarding_start
    e(t, 'G', 'onboarding_start', at(5, 0)); e(t, 'G', 'practice_finish', at(5, 10)); e(t, 'G', 'signup', at(5, 20)); // practised before signup
    const f = await funnel(t.db, F());
    assert.deepEqual(counts(f), [2, 1, 1, 0, 0]);
  });
});

test('funnel: "came back on a later day" uses the South Africa day, with the midnight edge at 22:00 UTC', async (ctx) => {
  await withDb(ctx, async (t) => {
    // signup at 23:50 SAST on 2026-11-10 = 21:50 UTC
    const su = Date.UTC(2026, 10, 10, 21, 50);
    const steps = (d: string) => { e(t, d, 'onboarding_start', su - 60_000); e(t, d, 'signup', su); e(t, d, 'practice_finish', su + 1000); };
    steps('same-day'); e(t, 'same-day', 'page_view', Date.UTC(2026, 10, 10, 21, 59)); // 23:59 SAST same day
    steps('next-day'); e(t, 'next-day', 'page_view', Date.UTC(2026, 10, 10, 22, 10)); // 00:10 SAST next day
    const f = await funnel(t.db, F());
    assert.deepEqual(counts(f), [2, 2, 2, 2, 1]);
  });
});

test('funnel: Do Not Track and admin rows are excluded; the range bounds every step', async (ctx) => {
  await withDb(ctx, async (t) => {
    e(t, 'dnt', 'onboarding_start', at(2)); e(t, 'dnt', 'signup', at(2));
    insertEvent(t, { ts: at(2), type: 'admin_delete', device: 'admin', session: 'admin' });
    e(t, 'old', 'page_view', at(60));
    e(t, 'H', 'onboarding_start', at(2, 0)); e(t, 'H', 'signup', at(2, 2));
    e(t, 'H', 'practice_finish', NOW + 2 * DAY); // after the period ends: not counted
    const f = await funnel(t.db, F());
    assert.deepEqual(counts(f), [1, 1, 1, 0, 0]);
  });
});

test('funnel ignores grade and subject filters (they would hide the untagged early steps)', async (ctx) => {
  await withDb(ctx, async (t) => {
    e(t, 'A', 'page_view', at(2));
    assert.deepEqual(counts(await funnel(t.db, F('range=30d&grade=7&subject=math'))), [1, 0, 0, 0, 0]);
  });
});

test('funnel with no data is all zeros', async (ctx) => {
  await withDb(ctx, async (t) => assert.deepEqual(counts(await funnel(t.db, F())), [0, 0, 0, 0, 0]));
});

// ---- devices ----
test('toShares: ranked, tail folded into Other, nulls read Unknown, shares add to 1', () => {
  const rows = [
    { name: 'Chrome', n: 50 }, { name: 'Safari', n: 30 }, { name: null, n: 5 }, { name: 'Edge', n: 4 }, { name: 'Firefox', n: 3 }, { name: 'Opera', n: 2 }, { name: 'Brave', n: 1 }, { name: 'Vivaldi', n: 1 }, { name: 'Zero', n: 0 },
  ];
  const s = toShares(rows, 5);
  assert.deepEqual(s.map((r) => r.name), ['Chrome', 'Safari', 'Unknown', 'Edge', 'Firefox', 'Other']);
  assert.equal(s[s.length - 1].count, 4); // Opera 2 + Brave 1 + Vivaldi 1
  assert.ok(Math.abs(s.reduce((n, r) => n + r.share, 0) - 1) < 1e-9);
  assert.equal(s[0].share, 50 / 96);
});
test('toShares: empty gives an empty list; equal counts sort by name', () => {
  assert.deepEqual(toShares([]), []);
  assert.deepEqual(toShares([{ name: 'B', n: 2 }, { name: 'A', n: 2 }]).map((r) => r.name), ['A', 'B']);
});

test('devices: unique devices per class, browser and OS; DNT counted separately per visit', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'd1', deviceClass: 'mobile', browser: 'Chrome', os: 'Android' });
    insertEvent(t, { ts: at(1), device: 'd1', deviceClass: 'mobile', browser: 'Chrome', os: 'Android' }); // same device again
    insertEvent(t, { ts: at(1), device: 'd2', deviceClass: 'mobile', browser: 'Safari', os: 'iOS' });
    insertEvent(t, { ts: at(1), device: 'd3', deviceClass: 'desktop', browser: 'Chrome', os: 'Windows' });
    insertEvent(t, { ts: at(1), device: 'dnt', session: 'v1', deviceClass: 'desktop', browser: 'Firefox', os: 'Linux' });
    insertEvent(t, { ts: at(1), device: 'dnt', session: 'v2', deviceClass: 'desktop', browser: 'Firefox', os: 'Linux' });
    insertEvent(t, { ts: at(1), type: 'admin_delete', device: 'admin', session: 'admin' });
    const d = await devices(t.db, F());
    assert.deepEqual(d.devices.map((r) => [r.name, r.count]), [['mobile', 2], ['desktop', 1]]);
    assert.deepEqual(d.browsers.map((r) => [r.name, r.count]), [['Chrome', 2], ['Safari', 1]]);
    assert.deepEqual(d.os.map((r) => r.name).sort(), ['Android', 'Windows', 'iOS']);
    assert.equal(d.dntSessions, 2);
  });
});
test('devices respect the range and grade filter', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'd1', grade: 6, deviceClass: 'mobile' });
    insertEvent(t, { ts: at(1), device: 'd2', grade: 7, deviceClass: 'desktop' });
    insertEvent(t, { ts: at(60), device: 'd3', grade: 6, deviceClass: 'tablet' });
    assert.deepEqual((await devices(t.db, F('range=30d&grade=6'))).devices.map((r) => r.name), ['mobile']);
    assert.equal((await devices(t.db, F('range=90d'))).devices.length, 3);
  });
});
