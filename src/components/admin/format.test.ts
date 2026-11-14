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

import { countryName, hourRange, todaySast, WEEKDAYS } from './format';
test('country names, with a dash-free fallback for unknown', () => {
  assert.equal(countryName('GB'), 'United Kingdom');
  assert.equal(countryName('ZA'), 'South Africa');
  assert.equal(countryName(null), 'Unknown');
  assert.equal(countryName(''), 'Unknown');
  assert.equal(countryName('ZZZ-not-a-code'), 'ZZZ-not-a-code');
});
test('hour ranges and weekday labels', () => {
  assert.equal(hourRange(16), '16:00–17:00');
  assert.equal(hourRange(23), '23:00–00:00');
  assert.equal(hourRange(0), '00:00–01:00');
  assert.deepEqual([...WEEKDAYS], ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
});
test("today's date is the SAST date, even when UTC is still yesterday", () => {
  assert.equal(todaySast(Date.UTC(2026, 10, 14, 10, 0)), '2026-11-14');
  assert.equal(todaySast(Date.UTC(2026, 10, 14, 22, 30)), '2026-11-15');
});
