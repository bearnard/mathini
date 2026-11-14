import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { buildDemoSql, DEMO_CLEAN_SQL } from '../../../../scripts/demo-data';
import { openTestDb, insertStudent, insertEvent, insertAttempt } from './testdb';
import { overview } from './queries';
import { parseFilters } from './filters';

const NOW = Date.UTC(2026, 10, 14, 10, 0, 0);
const SKIP = 'node:sqlite is not available on this Node version';

test('the demo data is deterministic for a seed, and differs between seeds', () => {
  assert.equal(buildDemoSql({ now: NOW }).sql, buildDemoSql({ now: NOW }).sql);
  assert.notEqual(buildDemoSql({ now: NOW, seed: 1 }).sql, buildDemoSql({ now: NOW, seed: 2 }).sql);
});

test('the demo set has the promised shape: ~40 learners, 60 days, a mix of consent', () => {
  const { stats } = buildDemoSql({ now: NOW });
  assert.equal(stats.learners, 40);
  assert.ok(stats.consented >= 20 && stats.consented <= 34, `consented=${stats.consented}`);
  assert.equal(stats.firstDay, '2026-09-16');
  assert.equal(stats.lastDay, '2026-11-14');
  assert.ok(stats.events > 5000, `events=${stats.events}`);
  assert.ok(stats.attempts > 800, `attempts=${stats.attempts}`);
  assert.ok(stats.badges > 10);
});

test('every generated row is marked as demo data', () => {
  const { sql } = buildDemoSql({ now: NOW });
  assert.ok(!/admin_delete/.test(sql));
  const studentIds = [...sql.matchAll(/\('(demo-stu-\d+)','DEMO-\d+'/g)];
  assert.equal(studentIds.length, 40);
});

test('loaded into a real schema: consent rules hold (no student or city without agreement; anonymous rows never have a city)', async (ctx) => {
  const t = await openTestDb();
  if (!t) return ctx.skip(SKIP);
  t.raw.exec(buildDemoSql({ now: NOW }).sql);
  const one = async (sql: string) => (await t.db.all<{ n: number }>(sql))[0].n;
  assert.equal(await one('SELECT COUNT(*) AS n FROM students'), 40);
  // events linked to a student only for consenting learners, and always with a city
  assert.equal(await one(`SELECT COUNT(*) AS n FROM events e JOIN students s ON s.id = e.student_id WHERE s.parent_consent_at IS NULL`), 0);
  assert.equal(await one(`SELECT COUNT(*) AS n FROM events WHERE student_id IS NOT NULL AND city IS NULL`), 0);
  // a city appears only with a student (anonymous and non-consenting rows have province only)
  assert.equal(await one(`SELECT COUNT(*) AS n FROM events WHERE city IS NOT NULL AND student_id IS NULL`), 0);
  assert.equal(await one(`SELECT COUNT(*) AS n FROM events WHERE city IS NULL AND lat IS NOT NULL`), 0);
  // Do Not Track rows keep the country only
  assert.equal(await one(`SELECT COUNT(*) AS n FROM events WHERE device_id = 'dnt' AND (region IS NOT NULL OR city IS NOT NULL OR student_id IS NOT NULL)`), 0);
  assert.ok((await one(`SELECT COUNT(*) AS n FROM events WHERE device_id = 'dnt'`)) > 0);
  // foreign traffic exists, and nothing is in the future
  assert.ok((await one(`SELECT COUNT(DISTINCT country) AS n FROM events WHERE country != 'ZA'`)) >= 2);
  assert.equal(await one(`SELECT COUNT(*) AS n FROM events WHERE ts > ${NOW}`), 0);
  assert.equal(await one(`SELECT COUNT(*) AS n FROM attempts WHERE created_at > ${NOW}`), 0);
  // no attempt or event precedes the learner's sign-up
  assert.equal(await one(`SELECT COUNT(*) AS n FROM attempts a JOIN students s ON s.id = a.student_id WHERE a.created_at < s.created_at`), 0);
  // no attempts exist for the Grade 6 shells that do not record them
  assert.equal(await one(`SELECT COUNT(*) AS n FROM attempts WHERE grade = 6 AND subject IN ('nst','geo','his','afr')`), 0);
  assert.ok((await one(`SELECT COUNT(*) AS n FROM events WHERE type = 'practice_finish' AND grade = 6 AND subject = 'nst'`)) > 50);
  // lat/lon are rounded to one decimal place
  assert.equal(await one(`SELECT COUNT(*) AS n FROM events WHERE lat IS NOT NULL AND ABS(lat * 10 - ROUND(lat * 10)) > 1e-9`), 0);
});

test('the dashboard overview works on the demo data and shows an exam-rush shape', async (ctx) => {
  const t = await openTestDb();
  if (!t) return ctx.skip(SKIP);
  t.raw.exec(buildDemoSql({ now: NOW }).sql);
  const f = parseFilters(new URLSearchParams('range=90d'), NOW);
  const o = await overview(t.db, f, NOW);
  assert.ok((o.tiles.visitors.value ?? 0) > 50);
  assert.ok((o.tiles.questions.value ?? 0) > 800);
  // the Grade 6 NST/Geo/His/Afr shells write no attempts, as in the real app, but do emit practice runs
  assert.ok((o.tiles.runs.value ?? 0) > (o.tiles.questions.value ?? 0) / 20);
  assert.ok((o.tiles.runs.value ?? 0) > 300);
  const acc = o.tiles.accuracy.value ?? 0;
  assert.ok(acc > 0.45 && acc < 0.85, `accuracy=${acc}`);
  const spark = o.tiles.questions.spark as number[];
  const half = Math.floor(spark.length / 2);
  const first = spark.slice(0, half).reduce((a, b) => a + b, 0);
  const second = spark.slice(half).reduce((a, b) => a + b, 0);
  assert.ok(second > first * 1.3, `second half ${second} vs first half ${first}`);
  assert.deepEqual(o.consent.learners, 40);
});

test('--clean removes exactly the demo rows and nothing else', async (ctx) => {
  const t = await openTestDb();
  if (!t) return ctx.skip(SKIP);
  insertStudent(t, { id: 'real-1', created: NOW - 1000 });
  insertAttempt(t, { student: 'real-1', ts: NOW - 500, correct: true });
  insertEvent(t, { ts: NOW - 400, device: 'dev-real', student: 'real-1' });
  insertEvent(t, { ts: NOW - 300, device: 'dnt', session: 'real-dnt-session' });
  insertEvent(t, { ts: NOW - 200, type: 'admin_delete', device: 'admin', session: 'admin' });
  t.raw.exec(buildDemoSql({ now: NOW }).sql);
  t.raw.exec(DEMO_CLEAN_SQL);
  const one = async (sql: string) => (await t.db.all<{ n: number }>(sql))[0].n;
  assert.equal(await one(`SELECT COUNT(*) AS n FROM students`), 1);
  assert.equal(await one(`SELECT COUNT(*) AS n FROM attempts`), 1);
  assert.equal(await one(`SELECT COUNT(*) AS n FROM events`), 3);
  assert.equal(await one(`SELECT COUNT(*) AS n FROM student_xp`), 0);
  assert.equal(await one(`SELECT COUNT(*) AS n FROM student_badges`), 0);
});

test('re-seeding replaces the previous demo rows instead of duplicating them', async (ctx) => {
  const t = await openTestDb();
  if (!t) return ctx.skip(SKIP);
  t.raw.exec(buildDemoSql({ now: NOW }).sql);
  t.raw.exec(buildDemoSql({ now: NOW }).sql);
  assert.equal((await t.db.all<{ n: number }>('SELECT COUNT(*) AS n FROM students'))[0].n, 40);
});

test('seed CLI safety: local only. One wrangler call site, always --local, and --remote only appears in the refusal', () => {
  const src = fs.readFileSync(path.join(process.cwd(), 'scripts', 'seed-admin-demo.ts'), 'utf8');
  const code = src.split('\n').filter((l) => !l.trim().startsWith('//')).join('\n');
  assert.equal((code.match(/spawnSync\(/g) ?? []).length, 1);
  assert.match(code, /spawnSync\(wrangler, \['d1', 'execute', 'preppals', '--local', \.\.\.extra\]/);
  const remoteLines = code.split('\n').filter((l) => l.includes('--remote'));
  assert.equal(remoteLines.length, 1);
  assert.match(remoteLines[0], /args\.includes\('--remote'\)/);
  assert.match(code, /process\.exit\(1\)/);
  assert.ok(!/wrangler['"]?,?\s*\[?['"]deploy/.test(code));
});
