import { test } from 'node:test';
import assert from 'node:assert/strict';
import { allBatch, d1Adapter, runLater, type AdminDb } from './db';

test('d1Adapter sends independent reads as ONE batch and returns each result list in order', async () => {
  let batches = 0, prepares = 0;
  const fake = {
    prepare: (sql: string) => { prepares++; return { bind: () => ({ sql, all: async () => ({ results: [] }), run: async () => ({}) }) }; },
    batch: async (stmts: { sql: string }[]) => { batches++; return stmts.map((s) => ({ results: [{ q: s.sql }] })); },
  };
  const db = d1Adapter(fake as never);
  const out = await allBatch(db, [{ sql: 'A' }, { sql: 'B', params: [1] }, { sql: 'C' }]);
  assert.equal(batches, 1);
  assert.equal(prepares, 3);
  assert.deepEqual(out, [[{ q: 'A' }], [{ q: 'B' }], [{ q: 'C' }]]);
  assert.deepEqual(await allBatch(db, []), []);
});

test('without batchAll the reads run one after another, in order', async () => {
  const seen: string[] = [];
  const db: AdminDb = { all: async (sql) => { seen.push(sql); return [{ sql }] as never; }, batch: async () => undefined };
  assert.deepEqual(await allBatch(db, [{ sql: 'A' }, { sql: 'B' }]), [[{ sql: 'A' }], [{ sql: 'B' }]]);
  assert.deepEqual(seen, ['A', 'B']);
});

test('runLater hands the work to waitUntil when there is one (the caller does not wait) and awaits it otherwise; a failure never reaches the caller', async () => {
  const kept: Promise<unknown>[] = [];
  const withCtx = d1Adapter({ prepare: () => ({ bind: () => ({}) }), batch: async () => undefined } as never, { waitUntil: (p) => { kept.push(p); } });
  let done = false;
  await runLater(withCtx, async () => { await new Promise((r) => setTimeout(r, 20)); done = true; });
  assert.equal(done, false, 'returned before the work finished');
  assert.equal(kept.length, 1);
  await kept[0];
  assert.equal(done, true);
  const plain: AdminDb = { all: async () => [], batch: async () => undefined };
  let ran = false;
  await runLater(plain, async () => { ran = true; });
  assert.equal(ran, true);
  await runLater(plain, async () => { throw new Error('boom'); });
  await runLater(withCtx, async () => { throw new Error('boom'); });
  await Promise.all(kept);
});
