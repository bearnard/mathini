import test from 'node:test';
import assert from 'node:assert/strict';
import * as p from './grade10Helpers4';

test('probability, complement and the union rule', () => {
  assert.deepEqual(p.probability(3, 6), [1, 2]);
  assert.deepEqual(p.probability(7, 10), [7, 10]);
  assert.deepEqual(p.complement([3, 10]), [7, 10]);
  assert.equal(p.unionCount(25, 18, 8), 35);
  assert.equal(p.neitherCount(40, 25, 18, 8), 5);
  assert.deepEqual(p.probability(p.unionCount(12, 15, 5), 30), [11, 15]);
  assert.equal(p.unionProbability(0.6, 0.5, 0.3), 0.8);
  assert.equal(p.unionProbability(0.5, 0.3, 0), 0.8);
});

test('relative frequency, expected counts and sample-space sizes', () => {
  assert.equal(p.relativeFrequency(124, 200), 0.62);
  assert.equal(p.expectedCount(0.2, 30), 6);
  assert.equal(p.coinOutcomes(2), 4);
  assert.equal(p.coinOutcomes(3), 8);
  assert.equal(p.diceSumWays(7), 6);
  assert.equal(p.diceSumWays(2), 1);
  assert.equal(p.diceSumWays(12), 1);
  // all 36 outcomes are counted exactly once
  let total = 0;
  for (let s = 2; s <= 12; s++) total += p.diceSumWays(s);
  assert.equal(total, 36);
});
