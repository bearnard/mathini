import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openTestDb, insertStudent, insertAttempt, insertEvent, type TestDb } from './testdb';
import { parseFilters } from './filters';
import { overview, periodTotals, dailySeries } from './queries';

const NOW = Date.UTC(2026, 10, 14, 10, 0, 0); // 2026-11-14 12:00 SAST
const DAY = 86_400_000;
const at = (daysAgo: number, hourSast = 12) => NOW - daysAgo * DAY + (hourSast - 12) * 3_600_000;
const F = (q = 'range=7d') => parseFilters(new URLSearchParams(q), NOW);
const SKIP = 'node:sqlite is not available on this Node version';

async function withDb(ctx: { skip: (m: string) => void }, fn: (t: TestDb) => Promise<void>) {
  const t = await openTestDb();
  if (!t) return ctx.skip(SKIP);
  await fn(t);
}

test('visitors: distinct devices, Do Not Track excluded and counted per session, admin rows ignored', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'dev-a', session: 's1' });
    insertEvent(t, { ts: at(1), device: 'dev-a', session: 's2' });
    insertEvent(t, { ts: at(2), device: 'dev-b', session: 's3' });
    insertEvent(t, { ts: at(2), device: 'dnt', session: 's4' });
    insertEvent(t, { ts: at(2), device: 'dnt', session: 's4' });
    insertEvent(t, { ts: at(3), device: 'dnt', session: 's5' });
    insertEvent(t, { ts: at(1), device: 'admin', session: 'admin', type: 'admin_delete' });
    insertEvent(t, { ts: at(30), device: 'dev-old', session: 's9' }); // outside the range
    const r = await periodTotals(t.db, F());
    assert.equal(r.visitors, 2);
    assert.equal(r.dntSessions, 2);
  });
});

test('SAST day buckets: 00:30 SAST belongs to the new day, 23:59 SAST to the old one', async (ctx) => {
  await withDb(ctx, async (t) => {
    // 2026-11-11 00:30 SAST = 2026-11-10 22:30 UTC ; 2026-11-10 23:59 SAST = 21:59 UTC
    insertEvent(t, { ts: Date.UTC(2026, 10, 10, 22, 30), device: 'dev-a' });
    insertEvent(t, { ts: Date.UTC(2026, 10, 10, 21, 59), device: 'dev-b' });
    const s = await dailySeries(t.db, F('range=custom&from=2026-11-09&to=2026-11-12'));
    const by = Object.fromEntries(s.map((d) => [d.date, d.visitors]));
    assert.equal(by['2026-11-10'], 1);
    assert.equal(by['2026-11-11'], 1);
    assert.equal(by['2026-11-09'], 0);
    assert.equal(by['2026-11-12'], 0);
    assert.equal(s.length, 4);
  });
});

test('questions and accuracy come from attempts; accuracy is null with no attempts', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'a', created: at(40) });
    assert.equal((await overview(t.db, F(), NOW)).tiles.accuracy.value, null);
    for (let i = 0; i < 8; i++) insertAttempt(t, { student: 'a', ts: at(1), correct: i < 6 });
    const o = await overview(t.db, F(), NOW);
    assert.equal(o.tiles.questions.value, 8);
    assert.equal(o.tiles.accuracy.value, 0.75);
  });
});

test('active learners = distinct students across events and attempts', async (ctx) => {
  await withDb(ctx, async (t) => {
    for (const id of ['a', 'b', 'c']) insertStudent(t, { id, created: at(40), consent: 1 });
    insertEvent(t, { ts: at(1), student: 'a' });
    insertEvent(t, { ts: at(1), student: 'a', type: 'topic_open' });
    insertAttempt(t, { student: 'a', ts: at(2), correct: true });
    insertAttempt(t, { student: 'b', ts: at(2), correct: false });
    insertAttempt(t, { student: 'c', ts: at(30), correct: false }); // out of range
    assert.equal((await periodTotals(t.db, F())).learners, 2);
  });
});

test('new sign-ups come from students.created_at in the range', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'a', created: at(1) });
    insertStudent(t, { id: 'b', created: at(3), grade: 7 });
    insertStudent(t, { id: 'c', created: at(20) });
    assert.equal((await periodTotals(t.db, F())).signups, 2);
    assert.equal((await periodTotals(t.db, F('range=7d&grade=7'))).signups, 1);
  });
});

test('grade and subject filters apply to attempts and to TAGGED events only', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'a', created: at(40) });
    insertAttempt(t, { student: 'a', ts: at(1), correct: true, grade: 6, subject: 'nst' });
    insertAttempt(t, { student: 'a', ts: at(1), correct: false, grade: 7, subject: 'nst' });
    insertAttempt(t, { student: 'a', ts: at(1), correct: false, grade: 6, subject: 'geo' });
    insertEvent(t, { ts: at(1), device: 'dev-a', grade: null }); // untagged page view
    insertEvent(t, { ts: at(1), device: 'dev-b', grade: 6, subject: 'nst', type: 'topic_open' });
    insertEvent(t, { ts: at(1), device: 'dev-c', grade: 7, subject: 'nst', type: 'topic_open' });
    const all = await periodTotals(t.db, F());
    assert.equal(all.questions, 3);
    assert.equal(all.visitors, 3);
    const g6 = await periodTotals(t.db, F('range=7d&grade=6'));
    assert.equal(g6.questions, 2);
    assert.equal(g6.visitors, 1);
    const g6nst = await periodTotals(t.db, F('range=7d&grade=6&subject=nst'));
    assert.equal(g6nst.questions, 1);
    assert.equal(g6nst.correct, 1);
    assert.equal(g6nst.visitors, 1);
  });
});

test('average session length: sessions with 2+ events, capped at 2 hours', async (ctx) => {
  await withDb(ctx, async (t) => {
    const base = at(1);
    insertEvent(t, { ts: base, session: 'short' });
    insertEvent(t, { ts: base + 60_000, session: 'short' }); // 60 s
    insertEvent(t, { ts: base, session: 'mid' });
    insertEvent(t, { ts: base + 180_000, session: 'mid' }); // 180 s
    insertEvent(t, { ts: base, session: 'long' });
    insertEvent(t, { ts: base + 5 * 3_600_000, session: 'long' }); // capped to 7200 s
    insertEvent(t, { ts: base, session: 'single' }); // ignored
    const r = await periodTotals(t.db, F());
    assert.equal(r.sessionSeconds, Math.round((60 + 180 + 7200) / 3));
  });
});

test('average session length is null when there are no multi-event sessions', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), session: 'single' });
    assert.equal((await periodTotals(t.db, F())).sessionSeconds, null);
  });
});

test('overview: previous period of the same length, relative delta, null delta when previous is 0', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'a', created: at(60) });
    for (let i = 0; i < 6; i++) insertAttempt(t, { student: 'a', ts: at(2), correct: true }); // current 7d
    for (let i = 0; i < 3; i++) insertAttempt(t, { student: 'a', ts: at(10), correct: i === 0 }); // previous 7d (days 7-13 ago)
    insertEvent(t, { ts: at(1), device: 'dev-a' });
    const o = await overview(t.db, F(), NOW);
    assert.equal(o.tiles.questions.value, 6);
    assert.equal(o.tiles.questions.prev, 3);
    assert.equal(o.tiles.questions.delta, 1); // +100%
    assert.equal(o.tiles.accuracy.value, 1);
    assert.equal(o.tiles.accuracy.prev, 1 / 3);
    assert.ok(Math.abs((o.tiles.accuracy.deltaPoints ?? 0) - 2 / 3) < 1e-9);
    assert.equal(o.tiles.visitors.value, 1);
    assert.equal(o.tiles.visitors.prev, 0);
    assert.equal(o.tiles.visitors.delta, null);
    assert.deepEqual([o.range.from, o.range.to, o.range.previousFrom, o.range.previousTo], ['2026-11-08', '2026-11-14', '2026-11-01', '2026-11-07']);
  });
});

test('sparklines have one value per day in the range', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(0), device: 'dev-a' });
    const o = await overview(t.db, F('range=7d'), NOW);
    assert.equal(o.tiles.visitors.spark.length, 7);
    assert.equal(o.tiles.visitors.spark[6], 1);
    assert.equal(o.tiles.visitors.spark[0], 0);
    assert.equal(o.tiles.accuracy.spark.length, 7);
    assert.equal(o.tiles.accuracy.spark[6], null);
  });
});

test('consent coverage counts learners with a parent agreement', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'a', created: at(5), consent: at(5) });
    insertStudent(t, { id: 'b', created: at(5), consent: at(4) });
    insertStudent(t, { id: 'c', created: at(5), consent: null });
    const o = await overview(t.db, F(), NOW);
    assert.deepEqual(o.consent, { learners: 3, consented: 2 });
  });
});

test('events since: SAST date of the first non-admin event, null when empty', async (ctx) => {
  await withDb(ctx, async (t) => {
    assert.equal((await overview(t.db, F(), NOW)).eventsSince, null);
    insertEvent(t, { ts: Date.UTC(2026, 10, 10, 22, 30), type: 'admin_delete', device: 'admin' });
    assert.equal((await overview(t.db, F(), NOW)).eventsSince, null);
    insertEvent(t, { ts: Date.UTC(2026, 10, 10, 22, 30) }); // 00:30 SAST on the 11th
    assert.equal((await overview(t.db, F(), NOW)).eventsSince, '2026-11-11');
  });
});

test('timeseries: sign-ups, learners and questions land on the right SAST day', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'a', created: at(1, 23) });
    insertAttempt(t, { student: 'a', ts: at(1, 23), correct: true });
    insertAttempt(t, { student: 'a', ts: at(1, 23), correct: false });
    insertEvent(t, { ts: at(1, 23), student: 'a', device: 'dev-a' });
    const s = await dailySeries(t.db, F('range=7d'));
    const d = s.find((x) => x.date === '2026-11-13')!;
    assert.deepEqual([d.signups, d.learners, d.questions, d.correct, d.visitors], [1, 1, 2, 1, 1]);
    assert.equal(s.reduce((n, x) => n + x.questions, 0), 2);
  });
});

test('practice runs and average run score come from practice_finish events (covers topics that write no attempts)', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), type: 'practice_finish', device: 'dev-a', grade: 6, subject: 'nst', topic: 'solar-system', meta: '{"score":7,"total":10,"ms":60000}' });
    insertEvent(t, { ts: at(2), type: 'practice_finish', device: 'dev-b', grade: 6, subject: 'nst', topic: 'solar-system', meta: '{"score":3,"total":10,"ms":50000}' });
    insertEvent(t, { ts: at(2), type: 'practice_start', device: 'dev-b', grade: 6, subject: 'nst', topic: 'solar-system' });
    insertEvent(t, { ts: at(10), type: 'practice_finish', device: 'dev-c', grade: 6, subject: 'nst', meta: '{"score":10,"total":10,"ms":1}' }); // previous period
    insertEvent(t, { ts: at(1), type: 'practice_finish', device: 'dev-d', grade: 7, subject: 'math', meta: '{"score":1,"total":10,"ms":1}' });
    const o = await overview(t.db, F(), NOW);
    assert.equal(o.tiles.runs.value, 3);
    assert.equal(o.tiles.runs.prev, 1);
    assert.equal(o.tiles.runScore.value, 11 / 30);
    assert.equal(o.tiles.runScore.prev, 1);
    const g6 = await overview(t.db, F('range=7d&grade=6'), NOW);
    assert.equal(g6.tiles.runs.value, 2);
    assert.equal(g6.tiles.runScore.value, 0.5);
    // attempts-based tiles are untouched by runs
    assert.equal(o.tiles.questions.value, 0);
    assert.equal(o.tiles.accuracy.value, null);
  });
});

test('runs with no valid meta contribute a run but no score', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), type: 'practice_finish', device: 'dev-a', meta: null });
    const o = await overview(t.db, F(), NOW);
    assert.equal(o.tiles.runs.value, 1);
    assert.equal(o.tiles.runScore.value, null);
  });
});

test('subject options are the distinct subject codes in attempts and events, sorted', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'a', created: at(40) });
    insertAttempt(t, { student: 'a', ts: at(1), correct: true, subject: 'grade6' });
    insertEvent(t, { ts: at(1), subject: 'nst', type: 'topic_open' });
    insertEvent(t, { ts: at(1), subject: 'grade6', type: 'topic_open' });
    insertEvent(t, { ts: at(1), subject: 'secret', type: 'admin_delete', device: 'admin' });
    assert.deepEqual((await overview(t.db, F(), NOW)).options.subjects, ['grade6', 'nst']);
  });
});

test('SQL injection shapes in filters cannot reach the query (parameters only)', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertEvent(t, { ts: at(1), device: 'dev-a' });
    const f = parseFilters(new URLSearchParams({ range: '7d', grade: "6; DROP TABLE events;--", subject: "nst' OR '1'='1" }), NOW);
    assert.equal(f.grade, null);
    assert.equal(f.subject, null);
    await overview(t.db, f, NOW);
    assert.equal((await t.db.all<{ n: number }>('SELECT COUNT(*) AS n FROM events'))[0].n, 1);
  });
});

test('recordedSince: the date of the first recorded answer for the four Grade 6 shell subjects, else null', async (ctx) => {
  await withDb(ctx, async (t) => {
    insertStudent(t, { id: 'a', created: at(60) });
    assert.equal((await overview(t.db, F(), NOW)).recordedSince, null);
    insertAttempt(t, { student: 'a', ts: at(2), correct: true, subject: 'grade6', grade: 6 }); // maths: not a shell subject
    insertAttempt(t, { student: 'a', ts: at(2), correct: true, subject: 'nst', grade: 7 }); // Grade 7 NST: not a shell
    assert.equal((await overview(t.db, F(), NOW)).recordedSince, null);
    insertAttempt(t, { student: 'a', ts: at(5), correct: true, subject: 'geo', grade: 6 });
    insertAttempt(t, { student: 'a', ts: at(3), correct: false, subject: 'nst', grade: 6 });
    assert.equal((await overview(t.db, F(), NOW)).recordedSince, '2026-11-09'); // earliest, SAST, not limited by the date range
    assert.equal((await overview(t.db, F('range=today'), NOW)).recordedSince, '2026-11-09');
  });
});
