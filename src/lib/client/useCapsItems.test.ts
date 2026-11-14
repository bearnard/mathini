import { test } from 'node:test';
import assert from 'node:assert/strict';
import { selectQueue, type CapsItem } from './useCapsItems';

const bank: CapsItem[] = [
  { prompt: 'bank Q1', options: ['a', 'b'], answer: 'a', explanation: 'Because a is the right choice here.' },
  { prompt: 'bank Q2', options: ['c', 'd'], answer: 'c', explanation: 'Because c is the right choice here.' },
];
const pool: CapsItem[] = [{ prompt: 'pool Q1', options: ['x', 'y'], answer: 'x' }];

test('uses a full pool as is (the bank is not mixed in)', () => {
  const full: CapsItem[] = Array.from({ length: 12 }, (_, i) => ({ prompt: `pool Q${i}`, options: ['x', 'y'], answer: 'x' }));
  assert.deepEqual(selectQueue(full, bank), full);
});

test('a pool that runs short is topped up from the bank, pool items first', () => {
  const q = selectQueue(pool, bank);
  assert.equal(q[0].prompt, 'pool Q1');
  assert.ok(q.length > pool.length, 'bank items were added');
  assert.ok(q.slice(1).every((i) => bank.some((b) => b.prompt === i.prompt)), 'only bank items were added');
  assert.equal(new Set(q.map((i) => i.prompt)).size, q.length, 'no duplicates');
});

test('falls back to the bank when the pool is empty (not yet seeded)', () => {
  assert.equal(selectQueue([], bank), bank);
});

test('falls back to the bank when the fetch failed (null)', () => {
  assert.equal(selectQueue(null, bank), bank);
});

test('falls back to the bank when the response has no items field (undefined)', () => {
  assert.equal(selectQueue(undefined, bank), bank);
});

test('returns the bank even when the bank itself is empty (no crash)', () => {
  assert.deepEqual(selectQueue([], []), []);
});
