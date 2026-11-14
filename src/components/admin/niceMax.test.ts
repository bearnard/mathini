import { test } from 'node:test';
import assert from 'node:assert/strict';
import { niceMax } from './ActivityCharts';

test('niceMax rounds up to 1, 2, 5 or 10 times a power of ten', () => {
  const cases: [number, number][] = [[1, 2], [3, 5], [7, 10], [13, 20], [23, 50], [48, 50], [51, 100], [280, 500], [1200, 2000], [0, 4], [-3, 4]];
  for (const [m, want] of cases) assert.equal(niceMax(m), want, String(m));
});
test('the maximum is never below the data', () => {
  for (let m = 1; m < 5000; m += 7) assert.ok(niceMax(m) >= m, String(m));
});
