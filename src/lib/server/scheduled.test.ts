import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { openPoolDb, openTestD1 } from './testD1';
import { limitsFromEnv, runScheduled } from './scheduled';
import { DEFAULT_LIMITS } from './topUp';
import type { GeneratedItem } from './gemini';

let n = 1000;
const items = (k = 10): GeneratedItem[] => Array.from({ length: k }, () => {
  n++;
  return { prompt: `Which idea number ${n} about the water cycle is described by the lesson text?`, options: [`Idea ${n} one`, `Idea ${n} two`, `Idea ${n} three`, `Idea ${n} four`], answer: `Idea ${n} one`, explanation: `Idea ${n} one is the correct description here.` };
});

async function env(poolRows: number) {
  const t = await openPoolDb();
  if (!t) return null;
  t.raw.exec('CREATE TABLE events (id INTEGER PRIMARY KEY AUTOINCREMENT, ts INTEGER NOT NULL)');
  t.raw.exec('DELETE FROM pool_tasks');
  t.raw.prepare("INSERT INTO pool_tasks (task, target, enabled, created_at) VALUES ('what-is-democracy', 5, 1, 1)").run();
  for (let i = 0; i < poolRows; i++) t.raw.prepare("INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at, quality_score) VALUES ('what-is-democracy', ?, '[]', 'a', 'e', 1, 90)").run(`p${i}`);
  const DAY = 86_400_000;
  const now = 1_000 * DAY;
  for (let i = 0; i < 1200; i++) t.raw.prepare('INSERT INTO events (ts) VALUES (?)').run(now - 500 * DAY); // older than 400 days
  for (let i = 0; i < 10; i++) t.raw.prepare('INSERT INTO events (ts) VALUES (?)').run(now - 5 * DAY);
  return { t, now };
}

test('no GEMINI_API_KEY: the top-up is a no-op, retention still runs, and it never throws', async () => {
  const e = await env(0);
  if (!e) return;
  const lines: string[] = [];
  const r = await runScheduled({ DB: e.t.db }, { now: () => e.now, log: (l) => lines.push(l) });
  assert.equal(r.topUp, null);
  assert.equal(r.topUpSkipped, 'no-api-key');
  assert.equal(r.eventsPurged, 1200);
  assert.equal((e.t.raw.prepare('SELECT COUNT(*) AS n FROM events').get() as { n: number }).n, 10, 'only events inside the 400-day window remain');
  assert.equal((e.t.raw.prepare('SELECT COUNT(*) AS n FROM item_cache').get() as { n: number }).n, 0, 'nothing generated');
  assert.equal(lines.length, 1, 'exactly one summary line');
  assert.match(lines[0], /top-up skipped \(no-api-key\).*events purged 1200/);
});

test('with a generator it refills the pool within the budget and logs one summary line', async () => {
  const e = await env(1);
  if (!e) return;
  const lines: string[] = [];
  const r = await runScheduled({ DB: e.t.db, GEMINI_API_KEY: 'k' }, { generate: async () => items(), embed: undefined, now: () => e.now, log: (l) => lines.push(l), limits: { maxApiCalls: 50 } });
  assert.ok(r.topUp);
  assert.equal(r.topUp.accepted, 4, 'pool had 1, target 5');
  assert.equal(lines.length, 1);
  assert.match(lines[0], /top-up stored 4/);
});

test('a generator that throws, or a broken DB statement, does not throw out of the scheduled handler', async () => {
  const e = await env(0);
  if (!e) return;
  const r = await runScheduled({ DB: e.t.db, GEMINI_API_KEY: 'k' }, { generate: async () => { throw new Error('Gemini error: 429'); }, now: () => e.now, log: () => {} });
  assert.ok(r.topUp, 'a failing generator is survived inside runTopUp');
  assert.equal(r.topUp.accepted, 0);
  const broken = { prepare: () => { throw new Error('D1 down'); } } as unknown as D1Database;
  const r2 = await runScheduled({ DB: broken, GEMINI_API_KEY: 'k' }, { generate: async () => items(), log: () => {} });
  assert.equal(r2.topUp, null);
  assert.equal(r2.topUpSkipped, 'error');
  assert.equal(r2.eventsPurged, null);
});

test('every external operation counts against maxOps, and a Worker variable can raise or lower the caps', async () => {
  const e = await env(0);
  if (!e) return;
  const r = await runScheduled({ DB: e.t.db, GEMINI_API_KEY: 'k' }, { generate: async () => items(), embed: undefined, now: () => e.now, log: () => {}, limits: { maxOps: 6 } });
  assert.ok(r.topUp);
  assert.equal(r.topUp.stoppedBy, 'maxOps');
  assert.ok(r.topUp.ops <= 6 + 1, `ops ${r.topUp.ops}`);
  assert.equal(limitsFromEnv({ DB: e.t.db }).maxOps, DEFAULT_LIMITS.maxOps);
  assert.equal(limitsFromEnv({ DB: e.t.db, TOPUP_MAX_OPS: '700', TOPUP_MAX_ACCEPTED: '120' }).maxOps, 700);
  assert.equal(limitsFromEnv({ DB: e.t.db, TOPUP_MAX_OPS: '700', TOPUP_MAX_ACCEPTED: '120' }).maxAccepted, 120);
  assert.equal(limitsFromEnv({ DB: e.t.db, TOPUP_MAX_OPS: 'banana' }).maxOps, DEFAULT_LIMITS.maxOps, 'a bad value is ignored');
  assert.equal(limitsFromEnv({ DB: e.t.db, TOPUP_MAX_OPS: '700' }, { maxOps: 5 }).maxOps, 5, 'explicit overrides win');
});

test('the per-invocation caps are real numbers (cost and CPU limits); the default fits the free plan (50 subrequests / D1 queries)', () => {
  assert.ok(DEFAULT_LIMITS.maxOps <= 50);
  assert.ok(DEFAULT_LIMITS.maxApiCalls <= 300 && DEFAULT_LIMITS.maxApiCalls >= 50);
  assert.ok(DEFAULT_LIMITS.maxAccepted <= 100);
  assert.ok(DEFAULT_LIMITS.maxTasks <= 20);
  assert.ok(DEFAULT_LIMITS.maxRegenerate <= 3);
});

test('src/worker.ts exposes fetch and scheduled and wrangler main points at it', async () => {
  const fs = await import('node:fs');
  const src = fs.readFileSync('src/worker.ts', 'utf8');
  assert.match(src, /async scheduled\(/);
  assert.match(src, /fetch\(request/);
  assert.match(src, /runScheduled\(env\)/);
  assert.match(src, /export \{ DOQueueHandler, DOShardedTagCache, BucketCachePurge \}/);
  assert.match(fs.readFileSync('wrangler.jsonc', 'utf8'), /"main": "src\/worker\.ts"/);
  assert.match(fs.readFileSync('wrangler.jsonc', 'utf8'), /"crons":\s*\[/);
});

test('the nightly job refreshes topic_progress and abandons stale runs (ADR 0005), in one read and one batch', async () => {
  const t = await openTestD1();
  if (!t) return;
  const mig = (f: string) => fs.readFileSync(`migrations/${f}`, 'utf8');
  t.raw.exec(mig('0002_students_results_gamification.sql').replace(/ALTER TABLE item_cache[^;]*;/g, '').replace(/CREATE INDEX IF NOT EXISTS idx_item_cache_task_section[^;]*;/g, ''));
  t.raw.exec(mig('0014_progress.sql'));
  t.raw.exec(mig('0018_attempt_marking.sql'));
  const now = Date.UTC(2026, 10, 15, 3, 0, 0);
  t.raw.prepare("INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at) VALUES ('s1','C','h','s','n','r',6,1,1)").run();
  for (let i = 0; i < 4; i++) t.raw.prepare("INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, created_at) VALUES ('s1','electric-circuits','general',6,'nst','electric-circuits',?,?)").run(i % 2, now - 3600_000 + i);
  t.raw.prepare("INSERT INTO runs (id, student_id, kind, grade, subject, scope_key, started_at, n_items) VALUES ('00000000-0000-4000-8000-000000000001','s1','practice',6,'nst','electric-circuits',?,5)").run(now - 5 * 3600_000);
  const lines: string[] = [];
  const r = await runScheduled({ DB: t.db }, { now: () => now, log: (l) => lines.push(l) });
  assert.equal(r.topicsRefreshed, 1);
  assert.equal((t.raw.prepare('SELECT attempts FROM topic_progress').get() as { attempts: number }).attempts, 4);
  assert.equal((t.raw.prepare('SELECT status FROM runs').get() as { status: string }).status, 'abandoned');
  assert.match(lines[0], /topics refreshed 1/);
});

test('without migration 0014 the progress step is skipped (null) and the rest of the job still runs', async () => {
  const e = await env(0);
  if (!e) return;
  const r = await runScheduled({ DB: e.t.db }, { now: () => e.now, log: () => {} });
  assert.equal(r.topicsRefreshed, null);
  assert.equal(r.eventsPurged, 1200);
});
