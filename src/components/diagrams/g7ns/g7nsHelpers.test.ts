import test from 'node:test';
import assert from 'node:assert/strict';
import * as h from './g7nsHelpers';

test('class survey: 30 heights, groups that do not overlap and add up to the class', () => {
  assert.equal(h.CLASS_HEIGHTS.length, 30);
  const b = h.bins(h.CLASS_HEIGHTS, 140, 5, 4);
  assert.deepEqual(b.map((x) => x.label), ['140–144', '145–149', '150–154', '155–159']);
  assert.deepEqual(b.map((x) => x.count), [2, 12, 13, 3]);
  assert.equal(b.reduce((a, x) => a + x.count, 0), 30);
  assert.equal(h.tallest(h.CLASS_HEIGHTS), 157);
  assert.equal(h.shortest(h.CLASS_HEIGHTS), 142);
  assert.equal(h.range(h.CLASS_HEIGHTS), 15);
});

test('percentages', () => {
  assert.equal(h.countTrue(h.TONGUE), 21);
  assert.equal(h.TONGUE.length, 30);
  assert.equal(h.percent(21, 30), 70);
  assert.equal(h.percent(9, 30), 30);
  assert.equal(h.percent(14, 20), 70);
  assert.equal(h.percent(3, 5), 60);
  assert.equal(h.percent(1, 8), 12.5);
});

test('early calendars: 12 moon months fall 11 days short of the seasons', () => {
  assert.equal(h.lunarYearDays(), 354);
  assert.equal(h.calendarGap(), 11);
  assert.equal(h.lunarYearDays(1), 29.5);
});

test('astronomers are in date order and the gaps are right', () => {
  assert.deepEqual(h.DISCOVERIES.map((d) => d.who), ['Copernicus', 'Kepler', 'Galilei', 'Newton']);
  assert.deepEqual(h.DISCOVERIES.map((d) => d.year), [1514, 1609, 1610, 1687]);
  assert.equal(h.yearsBetween(1514, 1609), 95);
  assert.equal(h.yearsBetween(1514, 1687), 173);
  assert.equal(h.yearsBetween(1609, 1687), 78);
  assert.equal(h.axisPos(1600, 1500, 1700), 0.5);
});
