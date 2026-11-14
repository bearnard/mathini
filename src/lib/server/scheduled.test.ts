import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openPoolDb } from './testD1';
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
  t.raw.prepare("INSERT INTO pool_tasks (task, target, enabled, created_at) VALUES ('what-is-history', 5, 1, 1)").run();
  for (let i = 0; i < poolRows; i++) t.raw.prepare("INSERT INTO item_cache (task, prompt, options, answer, explanation, created_at, quality_score) VALUES ('what-is-history', ?, '[]', 'a', 'e', 1, 90)").run(`p${i}`);
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
