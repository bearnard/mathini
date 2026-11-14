import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openTestDb, insertEvent, type TestDb } from './testdb';
import { parseFilters } from './filters';
import { geo, heatmap } from './geo';

const NOW = Date.UTC(2026, 10, 14, 10, 0, 0); // Sat 2026-11-14 12:00 SAST
const DAY = 86_400_000;
const at = (daysAgo: number, hourSast = 12) => NOW - daysAgo * DAY + (hourSast - 12) * 3_600_000;
const F = (q = 'range=30d') => parseFilters(new URLSearchParams(q), NOW);
const SKIP = 'node:sqlite is not available on this Node version';
async function withDb(ctx: { skip: (m: string) => void }, fn: (t: TestDb) => Promise<void>) {
  const t = await openTestDb();
  if (!t) return ctx.skip(SKIP);
  await fn(t);
}
const za = (region: string | null, city: string | null = null, lat: number | null = null, lon: number | null = null) => ({ country: 'ZA', region, city, lat, lon });

test('provinces: distinct devices per province, name variants merged, all nine always present', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'd1', ...za('Gauteng') });
    insertEvent(t, { ts: at(1), device: 'd2', ...za('Gauteng') });
    insertEvent(t, { ts: at(1), device: 'd3', ...za('KwaZulu-Natal') });
    insertEvent(t, { ts: at(2), device: 'd4', ...za('KwaZulu Natal') }); // variant spelling
    const g = await geo(t.db, F());
    assert.equal(g.provinces.length, 9);
    const by = Object.fromEntries(g.provinces.map((p) => [p.id, p]));
    assert.equal(by['gauteng'].visitors, 2);
    assert.equal(by['kwazulu-natal'].visitors, 2);
    assert.equal(by['limpopo'].visitors, 0);
    assert.equal(by['gauteng'].events, 2);
  });
});

test('one device seen in two cities of the same province counts once for the province, once per city row', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'd1', student: 's1', ...za('Gauteng', 'Johannesburg', -26.2, 28.0) });
    insertEvent(t, { ts: at(1), device: 'd1', student: 's1', ...za('Gauteng', 'Pretoria', -25.7, 28.2) });
    const g = await geo(t.db, F());
    assert.equal(g.provinces.find((p) => p.id === 'gauteng')!.visitors, 1);
    assert.equal(g.provinces.find((p) => p.id === 'gauteng')!.learners, 1);
    assert.deepEqual(g.cities.map((c) => [c.city, c.visitors]).sort(), [['Johannesburg', 1], ['Pretoria', 1]]);
  });
});

test('the same city with and without a region code is ONE row (no duplicate map bubbles or table rows)', async (ctx) => {
  await withDb(ctx, async (t) => {
    t.exec(`INSERT INTO events (ts, type, device_id, session_id, student_id, country, region, region_code, city, lat, lon, device, browser, os) VALUES (?, 'page_view', 'd1', 's1', 'st1', 'ZA', 'Gauteng', 'GT', 'Pretoria', -25.7, 28.2, 'mobile', 'Chrome', 'Android')`, [at(1)]);
    t.exec(`INSERT INTO events (ts, type, device_id, session_id, student_id, country, region, region_code, city, lat, lon, device, browser, os) VALUES (?, 'page_view', 'd1', 's2', 'st1', 'ZA', 'Gauteng', NULL, 'Pretoria', -25.7, 28.2, 'mobile', 'Chrome', 'Android')`, [at(1)]);
    t.exec(`INSERT INTO events (ts, type, device_id, session_id, student_id, country, region, region_code, city, lat, lon, device, browser, os) VALUES (?, 'page_view', 'd2', 's3', 'st2', 'ZA', 'Gauteng', NULL, 'Pretoria', -25.7, 28.2, 'mobile', 'Chrome', 'Android')`, [at(1)]);
    const g = await geo(t.db, F());
    assert.equal(g.cities.length, 1);
    assert.deepEqual([g.cities[0].city, g.cities[0].province, g.cities[0].events, g.cities[0].visitors, g.cities[0].learners], ['Pretoria', 'gauteng', 3, 2, 2]);
    assert.equal(g.table.filter((r) => r.city === 'Pretoria').length, 1);
    assert.equal(new Set(g.cities.map((c) => `${c.city}-${c.lat}-${c.lon}`)).size, g.cities.length);
  });
});

test('cities carry rounded coordinates and their province, busiest first, South Africa only', async (ctx) => {
  await withDb(ctx, async (t) => {
    for (let i = 0; i < 3; i++) insertEvent(t, { ts: at(1), device: 'd1', student: 's1', ...za('Western Cape', 'Cape Town', -33.9, 18.4) });
    insertEvent(t, { ts: at(1), device: 'd2', student: 's2', ...za('Gauteng', 'Pretoria', -25.7, 28.2) });
    insertEvent(t, { ts: at(1), device: 'd3', country: 'GB', region: 'England', city: 'London', lat: 51.5, lon: -0.1 });
    const g = await geo(t.db, F());
    assert.deepEqual(g.cities.map((c) => [c.city, c.province, c.lat, c.lon, c.events]), [['Cape Town', 'western-cape', -33.9, 18.4, 3], ['Pretoria', 'gauteng', -25.7, 28.2, 1]]);
  });
});

test('province-level rows (no city) are in the table and the province, but never create map bubbles', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'd1', ...za('Limpopo') });
    const g = await geo(t.db, F());
    assert.equal(g.cities.length, 0);
    assert.equal(g.provinces.find((p) => p.id === 'limpopo')!.visitors, 1);
    assert.deepEqual(g.table.map((r) => [r.country, r.region, r.city, r.province]), [['ZA', 'Limpopo', null, 'limpopo']]);
  });
});

test('Do Not Track: country only. Counted per visit, kept out of provinces, listed as unlocated', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'dnt', session: 'a', country: 'ZA' });
    insertEvent(t, { ts: at(1), device: 'dnt', session: 'a', country: 'ZA' });
    insertEvent(t, { ts: at(1), device: 'dnt', session: 'b', country: 'ZA' });
    const g = await geo(t.db, F());
    assert.equal(g.southAfricaUnlocated.dntSessions, 2);
    assert.equal(g.southAfricaUnlocated.visitors, 0);
    assert.ok(g.provinces.every((p) => p.visitors === 0 && p.dntSessions === 0));
    assert.equal(g.total.dntSessions, 2);
  });
});

test('rest of world: by country, busiest first, unknown country kept as null, South Africa excluded', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'g1', country: 'GB', region: 'England' });
    insertEvent(t, { ts: at(1), device: 'g2', country: 'GB', region: 'Wales' });
    insertEvent(t, { ts: at(1), device: 'u1', country: 'US', region: 'California' });
    insertEvent(t, { ts: at(1), device: 'x1', country: null });
    insertEvent(t, { ts: at(1), device: 'z1', ...za('Gauteng') });
    const g = await geo(t.db, F());
    assert.deepEqual(g.world.map((w) => [w.country, w.visitors]), [['GB', 2], ['US', 1], [null, 1]]);
  });
});

test('questions practised come from finished practice runs at that location', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'd1', type: 'practice_finish', meta: '{"score":6,"total":10,"ms":1}', ...za('Gauteng') });
    insertEvent(t, { ts: at(1), device: 'd1', type: 'practice_finish', meta: '{"score":3,"total":8,"ms":1}', ...za('Gauteng') });
    insertEvent(t, { ts: at(1), device: 'd1', type: 'practice_start', ...za('Gauteng') });
    insertEvent(t, { ts: at(1), device: 'd2', type: 'practice_finish', meta: null, ...za('Gauteng') });
    const g = await geo(t.db, F());
    const gp = g.provinces.find((p) => p.id === 'gauteng')!;
    assert.equal(gp.questions, 18);
    assert.equal(gp.events, 4);
  });
});

test('learners are distinct signed-in students; date range, grade filter and admin rows apply', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'd1', student: 's1', grade: 6, subject: 'nst', ...za('Gauteng', 'Pretoria', -25.7, 28.2) });
    insertEvent(t, { ts: at(1), device: 'd1', student: 's1', grade: 6, subject: 'nst', ...za('Gauteng', 'Pretoria', -25.7, 28.2) });
    insertEvent(t, { ts: at(1), device: 'd2', student: 's2', grade: 7, subject: 'nst', ...za('Gauteng', 'Pretoria', -25.7, 28.2) });
    insertEvent(t, { ts: at(60), device: 'd3', student: 's3', grade: 6, ...za('Gauteng', 'Pretoria', -25.7, 28.2) }); // outside 30 days
    insertEvent(t, { ts: at(1), device: 'admin', type: 'admin_delete', country: 'ZA', region: 'Gauteng' });
    const all = await geo(t.db, F());
    assert.equal(all.provinces.find((p) => p.id === 'gauteng')!.learners, 2);
    assert.equal(all.provinces.find((p) => p.id === 'gauteng')!.events, 3);
    const g6 = await geo(t.db, F('range=30d&grade=6'));
    assert.equal(g6.provinces.find((p) => p.id === 'gauteng')!.learners, 1);
  });
});

test('the table is sorted busiest first and capped', async (ctx) => {
  await withDb(ctx, async (t) => {
    for (let i = 0; i < 3; i++) insertEvent(t, { ts: at(1), device: `a${i}`, ...za('Gauteng') });
    insertEvent(t, { ts: at(1), device: 'b1', ...za('Limpopo') });
    const g = await geo(t.db, F());
    assert.deepEqual(g.table.map((r) => r.region), ['Gauteng', 'Limpopo']);
    for (let i = 0; i < 250; i++) insertEvent(t, { ts: at(1), device: `c${i}`, country: 'ZA', region: `Region ${i}` });
    assert.ok((await geo(t.db, F())).table.length <= 200);
  });
});

test('no data: nine zero provinces, empty lists', async (ctx) => {
  await withDb(ctx, async (t) => {
    const g = await geo(t.db, F());
    assert.equal(g.provinces.length, 9);
    assert.ok(g.provinces.every((p) => p.events === 0));
    assert.deepEqual([g.cities, g.table, g.world], [[], [], []]);
  });
});

// ---- heatmap ----
test('heatmap: Monday-first weekdays and SAST hours, with the midnight boundary at 22:00 UTC', async (ctx) => {
  await withDb(ctx, async (t) => {
    // Fri 2026-11-13 23:59 SAST = 21:59 UTC ; Sat 2026-11-14 00:00 SAST = 22:00 UTC (the 13th)
    insertEvent(t, { ts: Date.UTC(2026, 10, 13, 21, 59), type: 'session_start' });
    insertEvent(t, { ts: Date.UTC(2026, 10, 13, 22, 0), type: 'session_start' });
    insertEvent(t, { ts: Date.UTC(2026, 10, 9, 6, 30), type: 'session_start' }); // Mon 2026-11-09 08:30 SAST
    const h = await heatmap(t.db, F());
    assert.equal(h.visits.length, 7);
    assert.ok(h.visits.every((r) => r.length === 24));
    assert.equal(h.visits[4][23], 1); // Friday 23:xx
    assert.equal(h.visits[5][0], 1); // Saturday 00:xx
    assert.equal(h.visits[0][8], 1); // Monday 08:xx
    assert.equal(h.visits.flat().reduce((a, b) => a + b, 0), 3);
  });
});

test('heatmap: visits and finished runs are separate grids; other event types are ignored; peak is reported', async (ctx) => {
  await withDb(ctx, async (t) => {
    const mon16 = Date.UTC(2026, 10, 9, 14, 10); // Mon 16:10 SAST
    for (let i = 0; i < 4; i++) insertEvent(t, { ts: mon16 + i * 60_000, type: 'session_start', session: `s${i}` });
    insertEvent(t, { ts: mon16, type: 'page_view' });
    insertEvent(t, { ts: mon16, type: 'practice_finish', meta: '{"total":5}' });
    insertEvent(t, { ts: mon16, type: 'practice_finish', meta: '{"total":5}' });
    const h = await heatmap(t.db, F());
    assert.equal(h.visits[0][16], 4);
    assert.equal(h.runs[0][16], 2);
    assert.deepEqual(h.peak.visits, { weekday: 0, hour: 16, count: 4 });
    assert.deepEqual(h.peak.runs, { weekday: 0, hour: 16, count: 2 });
  });
});

test('heatmap: range, grade and subject filters apply; empty gives zero grids and no peak; admin rows ignored', async (ctx) => {
  await withDb(ctx, async (t) => {
    const empty = await heatmap(t.db, F());
    assert.equal(empty.peak.visits, null);
    assert.ok(empty.visits.every((r) => r.every((n) => n === 0)));
    insertEvent(t, { ts: at(1), type: 'session_start', grade: 6, subject: 'nst' });
    insertEvent(t, { ts: at(1), type: 'session_start', grade: 7, subject: 'nst' });
    insertEvent(t, { ts: at(60), type: 'session_start', grade: 6 });
    insertEvent(t, { ts: at(1), type: 'admin_delete' });
    const sum = (h: { visits: number[][] }) => h.visits.flat().reduce((a, b) => a + b, 0);
    assert.equal(sum(await heatmap(t.db, F())), 2);
    assert.equal(sum(await heatmap(t.db, F('range=30d&grade=6'))), 1);
    assert.equal(sum(await heatmap(t.db, F('range=90d&grade=6'))), 2);
  });
});
