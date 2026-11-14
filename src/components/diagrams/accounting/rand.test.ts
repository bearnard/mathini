import test from 'node:test';
import assert from 'node:assert/strict';
import { rand } from './rand';

test('rand: a space between thousands, no cents when whole, comma cents when needed', () => {
  assert.equal(rand(0), 'R0');
  assert.equal(rand(230), 'R230');
  assert.equal(rand(5000), 'R5 000');
  assert.equal(rand(12000), 'R12 000');
  assert.equal(rand(1234567), 'R1 234 567');
  assert.equal(rand(34.5), 'R34,50');
  assert.equal(rand(6400.5), 'R6 400,50');
  assert.equal(rand(0.05), 'R0,05');
});

test('rand: a negative amount keeps its minus sign (the old depreciation copy dropped it)', () => {
  assert.equal(rand(-6000), '-R6 000');
  assert.equal(rand(-34.5), '-R34,50');
});

test('rand: the lesson figures print exactly as the lessons write them', () => {
  for (const [n, text] of [[45000, 'R45 000'], [20480, 'R20 480'], [25600, 'R25 600'], [18000, 'R18 000'], [15, 'R15']] as const) assert.equal(rand(n), text);
});
