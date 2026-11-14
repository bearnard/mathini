import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  AuthAbort, AuthError, HttpError, RunStats, backoffMs, createAuthGuard, isAuthStatus, isTransientError, parseOauthToken, processTaskItems, retryTransient, taskOutcome,
  type ItemRow, type ProcessDeps, type TaskStats,
} from './seedRuntime';

// ---------- (a) AUTH ----------
function guard(opts: { refreshOk?: boolean[]; now?: () => number; maxAgeMs?: number } = {}) {
  const log: string[] = [];
  let token = 'tok-1', n = 1;
  const refreshResults = [...(opts.refreshOk ?? [true, true, true])];
  const g = createAuthGuard({
    readToken: () => token,
    refresh: async () => { const ok = refreshResults.shift() ?? false; log.push(`refresh:${ok}`); if (ok) token = `tok-${++n}`; return ok; },
    now: opts.now, maxAgeMs: opts.maxAgeMs, log: (m) => log.push(m),
  });
  return { g, log, token: () => token };
}

test('auth: a good call passes the current token and never refreshes', async () => {
  const { g, log } = guard();
  assert.equal(await g.call(async (t) => t), 'tok-1');
  assert.equal(g.refreshes, 0);
  assert.deepEqual(log, []);
});

test('auth: refreshes before the run (ensureFresh) and uses the NEW token afterwards', async () => {
  const { g } = guard();
  await g.ensureFresh();
  assert.equal(g.refreshes, 1);
  assert.equal(await g.call(async (t) => t), 'tok-2');
});

test('auth: on the first 401/403 it refreshes ONCE and retries once with the new token', async () => {
  const { g, log } = guard();
  const seen: string[] = [];
  const r = await g.call(async (t) => { seen.push(t); if (t === 'tok-1') throw new AuthError(403, '{"code":7403}'); return 'ok'; });
  assert.equal(r, 'ok');
  assert.deepEqual(seen, ['tok-1', 'tok-2']);
  assert.equal(g.refreshes, 1);
  assert.ok(log.some((l) => l.includes('refreshing the token and retrying once')));
});

test('auth: still unauthorised after the refresh -> AuthAbort with a clear message, and the guard is dead (nothing more can run)', async () => {
  const { g } = guard();
  await assert.rejects(g.call(async () => { throw new AuthError(401, 'Authentication error'); }), (e: unknown) => {
    assert.ok(e instanceof AuthAbort);
    assert.match((e as Error).message, /still rejects the refreshed token/);
    assert.match((e as Error).message, /npx wrangler login/);
    assert.match((e as Error).message, /Stopped before inserting anything further/);
    return true;
  });
  assert.equal(g.dead, true);
  let ran = false;
  await assert.rejects(g.call(async () => { ran = true; return 1; }), AuthAbort);
  assert.equal(ran, false, 'a dead guard must not run the call at all (no inserts after an auth failure)');
});

test('auth: a token that CANNOT be refreshed (static API token) aborts at the first 401/403', async () => {
  const { g } = guard({ refreshOk: [false] });
  await assert.rejects(g.call(async () => { throw new AuthError(403, 'no'); }), /cannot be refreshed/);
  assert.equal(g.dead, true);
});

test('auth: ensureFresh that cannot refresh aborts before anything is generated', async () => {
  const { g } = guard({ refreshOk: [false] });
  await assert.rejects(g.ensureFresh(), AuthAbort);
  assert.equal(g.dead, true);
});

test('auth: non-auth errors pass straight through without a refresh', async () => {
  const { g } = guard();
  await assert.rejects(g.call(async () => { throw new HttpError(500, 'boom'); }), HttpError);
  assert.equal(g.refreshes, 0);
  assert.equal(g.dead, false);
});

test('auth: a proactive refresh happens when the token is older than maxAgeMs (before it can expire mid-run)', async () => {
  let clock = 0;
  const { g } = guard({ now: () => clock, maxAgeMs: 30 * 60_000 });
  clock = 10 * 60_000; await g.call(async () => 1);
  assert.equal(g.refreshes, 0);
  clock = 40 * 60_000; assert.equal(await g.call(async (t) => t), 'tok-2');
  assert.equal(g.refreshes, 1);
});

test('auth: helpers', () => {
  assert.equal(isAuthStatus(401), true); assert.equal(isAuthStatus(403), true); assert.equal(isAuthStatus(500), false); assert.equal(isAuthStatus(429), false);
  assert.equal(parseOauthToken('a = 1\noauth_token = "abc.def"\nexpiration_time = "x"'), 'abc.def');
  assert.equal(parseOauthToken('nothing here'), null);
});

// ---------- (b) GEMINI retry with backoff and jitter ----------
test('retry: 503 then 503 then success: three attempts, exponential waits with jitter, and the waits are reported', async () => {
  const waits: number[] = [];
  let calls = 0;
  const r = await retryTransient(async () => { calls++; if (calls < 3) throw new HttpError(503, 'high demand'); return 'done'; }, { tries: 4, baseMs: 1000, maxMs: 60_000, jitter: 0.3, rng: () => 0.5, sleep: async (ms) => { waits.push(ms); } });
  assert.equal(r, 'done');
  assert.equal(calls, 3);
  assert.deepEqual(waits, [1000, 2000], 'rng 0.5 = no jitter: base, base*2');
});

test('retry: gives up after `tries` attempts and throws the last error (the caller then marks the task failed)', async () => {
  let calls = 0;
  await assert.rejects(retryTransient(async () => { calls++; throw new HttpError(503, 'still busy'); }, { tries: 4, sleep: async () => {}, rng: () => 0.5 }), /503/);
  assert.equal(calls, 4);
});

test('retry: 429 waits at least the limiter window even if the backoff is shorter (respects the free-tier RPM)', async () => {
  const waits: number[] = [];
  let calls = 0;
  await retryTransient(async () => { calls++; if (calls === 1) throw new HttpError(429, 'quota', 60_500); return 1; }, { baseMs: 1000, rng: () => 0.5, sleep: async (ms) => { waits.push(ms); } });
  assert.deepEqual(waits, [60_500]);
});

test('retry: auth errors and 4xx (other than 408/425/429) are never retried', async () => {
  for (const e of [new AuthError(403, 'x'), new AuthAbort('x'), new HttpError(400, 'bad'), new HttpError(404, 'nf')]) {
    let calls = 0;
    await assert.rejects(retryTransient(async () => { calls++; throw e; }, { sleep: async () => {} }));
    assert.equal(calls, 1, e.name);
  }
  assert.equal(isTransientError(new HttpError(503, '')), true);
  assert.equal(isTransientError(new HttpError(429, '')), true);
  assert.equal(isTransientError(new TypeError('fetch failed')), true);
  assert.equal(isTransientError(Object.assign(new Error('x'), { code: 'ECONNRESET' })), true);
  assert.equal(isTransientError(new Error('plain')), false);
});

test('backoff: doubles, is capped, and the jitter stays within +/-30%', () => {
  const o = { baseMs: 15_000, maxMs: 120_000, jitter: 0.3, rng: () => 0.5 };
  assert.deepEqual([1, 2, 3, 4, 5].map((a) => backoffMs(a, o)), [15_000, 30_000, 60_000, 120_000, 120_000]);
  for (let i = 0; i < 200; i++) { const w = backoffMs(2, { baseMs: 15_000, jitter: 0.3 }); assert.ok(w >= 21_000 && w <= 39_000, String(w)); }
  assert.equal(backoffMs(1, { baseMs: 1000, jitter: 0.3, rng: () => 0 }), 700);
  assert.equal(backoffMs(1, { baseMs: 1000, jitter: 0.3, rng: () => 1 }), 1300);
});

// ---------- (c) THIS RUN's numbers ----------
test('summary: per task numbers, a grand total for THIS run only, and the progress-file total labelled separately', () => {
  const s = new RunStats();
  Object.assign(s.for('a'), { generated: 40, rejected: 3, deduped: 2, notChecked: 0, inserted: 30, errors: 5 });
  Object.assign(s.for('b'), { generated: 38, rejected: 1, deduped: 4, notChecked: 6, inserted: 25, errors: 2 });
  assert.deepEqual(s.total(), { generated: 78, rejected: 4, deduped: 6, notChecked: 6, inserted: 55, errors: 7 });
  const text = s.render({ totalInserted: 4175, done: 128, failed: 3 });
  assert.match(text, /TOTAL, THIS RUN ONLY\s+78\s+4\s+6\s+6\s+55\s+7/);
  assert.match(text, /Progress file, all runs so far \(NOT this run\): 4175 questions inserted, 128 tasks done, 3 marked for retry/);
  assert.ok(text.indexOf('TOTAL, THIS RUN ONLY') < text.indexOf('Progress file'));
  assert.doesNotMatch(text, /Seed complete.*4175/);
  assert.equal(new RunStats().total().inserted, 0);
});

// ---------- (d) DEDUP: never insert unchecked ----------
const mk = (i: number): ItemRow => ({ prompt: `Question number ${i}?`, options: ['a', 'b', 'c', 'd'], answer: 'a', explanation: 'because' });
const items = (n: number) => Array.from({ length: n }, (_, i) => mk(i));
const embs = (n: number) => Array.from({ length: n }, (_, i) => [i + 1, 0.5]); // distinct, cosine below
const cosineDistinct = (a: number[], b: number[]) => (a[0] === b[0] ? 1 : 0);

function deps(over: Partial<ProcessDeps> = {}) {
  const inserted: string[] = [], upserts: string[] = [], logs: string[] = [];
  const d: ProcessDeps = {
    vectorQuery: async () => [],
    vectorUpsert: async (id) => { upserts.push(id); },
    d1Insert: async (row) => { inserted.push(row.prompt); },
    vectorId: (t, p) => `${t}|${p}`,
    cosine: cosineDistinct,
    log: (m) => logs.push(m),
    sleep: async () => {},
    ...over,
  };
  return { d, inserted, upserts, logs };
}
const opts = { similarity: 0.88, sectionFor: () => 'general', rng: () => 0.5, baseMs: 1 };
const fresh = (): TaskStats => ({ generated: 0, rejected: 0, deduped: 0, notChecked: 0, inserted: 0, errors: 0 });

test('dedup: healthy path inserts every distinct row, with a vector each', async () => {
  const { d, inserted, upserts } = deps(); const s = fresh();
  const stop = await processTaskItems('t', items(5), embs(5), d, s, opts);
  assert.equal(stop, null);
  assert.equal(s.inserted, 5); assert.equal(inserted.length, 5); assert.equal(upserts.length, 5);
  assert.equal(taskOutcome(s, stop), 'done');
});

test('dedup: in-batch duplicates and Vectorize matches are skipped as deduped, not inserted', async () => {
  const e = embs(4); e[1] = e[0]; // item 1 is a duplicate of item 0
  const { d, inserted } = deps({ vectorQuery: async (emb) => (emb[0] === 4 ? [{ score: 0.95 }] : []) }); const s = fresh();
  await processTaskItems('t', items(4), e, d, s, opts);
  assert.equal(s.deduped, 2); assert.equal(s.inserted, 2);
  assert.deepEqual(inserted, ['Question number 0?', 'Question number 2?']);
});

test('dedup: a Vectorize query that FAILS (non-auth) does NOT insert: the row is skipped and counted as not checked', async () => {
  let call = 0;
  const { d, inserted, logs } = deps({ vectorQuery: async () => { call++; if (call <= 3 /* all retries of row 1 */) throw new HttpError(500, 'vectorize broke'); return []; } });
  const s = fresh();
  const stop = await processTaskItems('t', items(3), embs(3), d, s, opts);
  assert.equal(stop, null, 'one unchecked row is not an outage');
  assert.equal(s.notChecked, 1);
  assert.equal(s.inserted, 2);
  assert.ok(!inserted.includes('Question number 0?'), 'the unchecked row must NOT be inserted');
  assert.ok(logs.some((l) => /NOT inserted/.test(l)));
});

test('dedup: three unchecked rows in a row stop the task (Vectorize is down), the rest are counted unchecked, nothing is inserted, task is failed', async () => {
  const { d, inserted } = deps({ vectorQuery: async () => { throw new HttpError(503, 'down'); } }); const s = fresh();
  const stop = await processTaskItems('t', items(10), embs(10), d, s, opts);
  assert.equal(stop, 'vectorize-unavailable');
  assert.equal(inserted.length, 0);
  assert.equal(s.notChecked, 10);
  assert.equal(taskOutcome(s, stop), 'failed');
});

test('dedup: a transient Vectorize failure is retried and then checked normally', async () => {
  let calls = 0;
  const { d, inserted } = deps({ vectorQuery: async () => { calls++; if (calls === 1) throw new HttpError(503, 'blip'); return []; } }); const s = fresh();
  await processTaskItems('t', items(1), embs(1), d, s, opts);
  assert.equal(s.inserted, 1); assert.equal(s.notChecked, 0); assert.equal(inserted.length, 1);
});

test('AUTH ABORT is never swallowed: the first AuthAbort ends the run and NOTHING is inserted after it', async () => {
  let queries = 0;
  const { d, inserted } = deps({ vectorQuery: async () => { queries++; if (queries === 3) throw new AuthAbort('token dead'); return []; } }); const s = fresh();
  await assert.rejects(processTaskItems('t', items(10), embs(10), d, s, opts), AuthAbort);
  assert.equal(inserted.length, 2, 'only the two rows checked before the abort');
  assert.equal(queries, 3, 'no further rows were even looked at');
  // and an abort from the insert itself
  const t = deps({ d1Insert: async () => { throw new AuthAbort('dead'); } });
  await assert.rejects(processTaskItems('t', items(3), embs(3), t.d, fresh(), opts), AuthAbort);
  const u = deps({ vectorUpsert: async () => { throw new AuthAbort('dead'); } });
  await assert.rejects(processTaskItems('t', items(3), embs(3), u.d, fresh(), opts), AuthAbort);
});

test('inserts: five errors in a row stop the task; an error after a success resets the count; a vector failure after the insert is counted', async () => {
  const bad = deps({ d1Insert: async () => { throw new HttpError(400, 'bad sql'); } }); const s1 = fresh();
  assert.equal(await processTaskItems('t', items(9), embs(9), bad.d, s1, opts), 'too-many-errors');
  assert.equal(s1.errors, 5); assert.equal(s1.inserted, 0);
  assert.equal(taskOutcome(s1, 'too-many-errors'), 'failed');
  let n = 0;
  const flaky = deps({ d1Insert: async () => { n++; if (n % 2 === 1) throw new HttpError(400, 'x'); } }); const s2 = fresh();
  assert.equal(await processTaskItems('t', items(8), embs(8), flaky.d, s2, opts), null, 'alternating errors never reach 5 in a row');
  assert.equal(s2.inserted, 4); assert.equal(s2.errors, 4);
  const novec = deps({ vectorUpsert: async () => { throw new HttpError(400, 'bad vector'); } }); const s3 = fresh();
  await processTaskItems('t', items(2), embs(2), novec.d, s3, opts);
  assert.equal(s3.inserted, 2); assert.equal(s3.errors, 2);
});

test('taskOutcome keeps the old rules and treats "unchecked" as a problem', () => {
  const o = (p: Partial<TaskStats>, stop: 'vectorize-unavailable' | 'too-many-errors' | null = null) => taskOutcome({ ...fresh(), ...p }, stop);
  assert.equal(o({ inserted: 5 }), 'done');
  assert.equal(o({ deduped: 5 }), 'done');
  assert.equal(o({ inserted: 3, errors: 2 }), 'done', 'partial success');
  assert.equal(o({ errors: 4 }), 'failed');
  assert.equal(o({ notChecked: 4 }), 'failed');
  assert.equal(o({ inserted: 3, notChecked: 2 }), 'done');
  assert.equal(o({ inserted: 5 }, 'too-many-errors'), 'failed', 'a stopped task is always retried');
  assert.equal(o({}), 'failed');
});
