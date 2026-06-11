import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeXp } from './scoring';

test('correct answer gives base 10 XP', () => {
  assert.equal(computeXp(true, 0), 10);
});

test('correct answer with streak 1 gives 12 XP', () => {
  assert.equal(computeXp(true, 1), 12);
});

test('correct answer with streak 5 gives 20 XP', () => {
  assert.equal(computeXp(true, 5), 20);
});

test('correct answer with streak 10 gives 30 XP (max streak bonus)', () => {
  assert.equal(computeXp(true, 10), 30);
});

test('correct answer with streak 15 still gives 30 XP (streak capped at 10)', () => {
  assert.equal(computeXp(true, 15), 30);
});

test('incorrect answer gives base 2 XP', () => {
  assert.equal(computeXp(false, 5), 2);
});

test('incorrect answer streak bonus is 0', () => {
  assert.equal(computeXp(false, 10), 2);
});

test('streak 0 with correct answer gives 10 XP (no bonus)', () => {
  assert.equal(computeXp(true, 0), 10);
});
