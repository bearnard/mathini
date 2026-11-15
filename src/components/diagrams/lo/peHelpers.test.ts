import test from 'node:test';
import assert from 'node:assert/strict';
import { arrowEnd, chartPoints, comma, countGain, hoursMinutes, lapSegments, round1, sum, targetTime, timeProgress } from './peHelpers';

test('decimal comma and rounding', () => {
  assert.equal(comma(14.2), '14,2');
  assert.equal(comma(13.7), '13,7');
  assert.equal(comma(15), '15');
  assert.equal(round1(14.2 - 0.5), 13.7);
});

test('baseline 14,2 s with a 0,5 s improvement gives a 13,7 s target', () => {
  assert.equal(targetTime(14.2, 0.5), 13.7);
});

test('four weekly times 15,2 / 14,9 / 14,6 / 14,4 are 0,8 s faster', () => {
  const p = timeProgress([15.2, 14.9, 14.6, 14.4]);
  assert.deepEqual(p, { first: 15.2, last: 14.4, best: 14.4, faster: 0.8 });
});

test('passes 5, 6, 7, 8 out of 10 gain 3', () => {
  assert.equal(countGain([5, 6, 7, 8]), 3);
});

test('weekly plan 30 + 30 + 40 = 100 minutes = 1 h 40 min', () => {
  assert.equal(sum([30, 0, 30, 0, 40]), 100);
  assert.equal(hoursMinutes(100), '1 h 40 min');
  assert.equal(hoursMinutes(60), '1 h 0 min');
});

test('chartPoints: highest value at the top, lowest at the bottom, x evenly spaced', () => {
  const pts = chartPoints([10, 20, 15]);
  assert.equal(pts[1].y, 16);
  assert.equal(pts[0].y, 50);
  assert.equal(pts[2].y, 33);
  assert.deepEqual(pts.map((p) => p.x), [16, 60, 104]);
  assert.equal(chartPoints([5])[0].x, 60);
  assert.equal(chartPoints([5, 5])[0].y, 50);
});

test('lap totals: steady 70 x 4 = 280 s beats a fast start 55 + 70 + 85 + 100 = 310 s', () => {
  const steady = [70, 70, 70, 70];
  const fast = [55, 70, 85, 100];
  assert.equal(sum(steady), 280);
  assert.equal(sum(fast), 310);
  const a = lapSegments(steady, 310);
  const b = lapSegments(fast, 310);
  assert.ok(Math.abs(b[3].x + b[3].w - (30 + 84)) < 0.01);
  assert.ok(a[3].x + a[3].w < b[3].x + b[3].w);
  // the picture uses x0 = 20 and width = 70, so the longest bar ends at 90 and its label still fits inside 120
  const c = lapSegments(fast, 310, 70, 20);
  assert.ok(Math.abs(c[3].x + c[3].w - 90) < 0.01);
});

test('arrowEnd stops short of the target on the same line', () => {
  assert.deepEqual(arrowEnd({ x: 0, y: 0 }, { x: 10, y: 0 }, 3), { x: 7, y: 0 });
  assert.deepEqual(arrowEnd({ x: 0, y: 0 }, { x: 0, y: 10 }, 4), { x: 0, y: 6 });
});
