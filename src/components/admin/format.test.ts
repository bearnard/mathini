import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatInt, formatPercent, formatDuration, formatDelta, formatPoints, shortDate, longDate } from './format';

test('integers use South African grouping and a dash for missing values', () => {
  assert.equal(formatInt(1234567).replace(/\s/g, ' '), '1 234 567');
  assert.equal(formatInt(0), '0');
  assert.equal(formatInt(null), '–');
  assert.equal(formatInt(undefined), '–');
});
test('percent', () => {
  assert.equal(formatPercent(0.742), '74%');
  assert.equal(formatPercent(0.7456, 1), '74.6%');
  assert.equal(formatPercent(null), '–');
});
test('duration', () => {
  assert.equal(formatDuration(45), '45s');
  assert.equal(formatDuration(83), '1m 23s');
  assert.equal(formatDuration(600), '10m 00s');
  assert.equal(formatDuration(3700), '1h 1m');
  assert.equal(formatDuration(null), '–');
});
test('delta: up, down, flat, new, none', () => {
  assert.deepEqual(formatDelta(12, 10, 0.2), { text: '+20%', direction: 'up' });
  assert.deepEqual(formatDelta(8, 10, -0.2), { text: '−20%', direction: 'down' });
  assert.deepEqual(formatDelta(10, 10, 0.001), { text: 'no change', direction: 'flat' });
  assert.deepEqual(formatDelta(5, 0, null), { text: 'new', direction: 'up' });
  assert.deepEqual(formatDelta(0, 0, null), { text: 'no change', direction: 'none' });
  assert.deepEqual(formatDelta(null, 3, null), { text: 'no data', direction: 'none' });
});
test('points', () => {
  assert.deepEqual(formatPoints(0.031), { text: '+3.1 pts', direction: 'up' });
  assert.deepEqual(formatPoints(-0.05), { text: '−5 pts', direction: 'down' });
  assert.deepEqual(formatPoints(0), { text: 'no change', direction: 'flat' });
  assert.deepEqual(formatPoints(null), { text: 'no change', direction: 'none' });
});
test('dates', () => {
  assert.equal(shortDate('2026-11-04'), '4 Nov');
  assert.equal(longDate('2026-01-31'), '31 Jan 2026');
});
