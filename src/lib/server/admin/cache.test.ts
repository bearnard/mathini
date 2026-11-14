import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createTtlCache } from './cache';

test('identical key within 60 s is loaded once', async () => {
  const c = createTtlCache<number>(60_000);
  let n = 0;
  const load = async () => ++n;
  assert.equal(await c.get('k', load, 0), 1);
  assert.equal(await c.get('k', load, 59_999), 1);
  assert.equal(n, 1);
});
test('reloads after the TTL, and different keys are separate', async () => {
  const c = createTtlCache<number>(60_000);
  let n = 0;
  const load = async () => ++n;
  await c.get('a', load, 0);
  assert.equal(await c.get('a', load, 60_000), 2);
  assert.equal(await c.get('b', load, 60_001), 3);
});
test('size is bounded', async () => {
  const c = createTtlCache<number>(60_000, 5);
  for (let i = 0; i < 20; i++) await c.get(`k${i}`, async () => i, 0);
  assert.ok(c.size() <= 5);
});
test('a failed load is not cached', async () => {
  const c = createTtlCache<number>(60_000);
  await assert.rejects(c.get('k', async () => { throw new Error('boom'); }, 0));
  assert.equal(await c.get('k', async () => 7, 1), 7);
});
