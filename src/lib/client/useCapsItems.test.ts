import { test } from 'node:test';
import assert from 'node:assert/strict';
import { selectQueue, type CapsItem } from './useCapsItems';

const bank: CapsItem[] = [
  { prompt: 'bank Q1', options: ['a', 'b'], answer: 'a' },
  { prompt: 'bank Q2', options: ['c', 'd'], answer: 'c' },
];
const pool: CapsItem[] = [{ prompt: 'pool Q1', options: ['x', 'y'], answer: 'x' }];

test('uses the pool when it has items', () => {
  assert.equal(selectQueue(pool, bank), pool);
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
