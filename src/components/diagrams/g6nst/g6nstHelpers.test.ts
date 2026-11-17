import test from 'node:test';
import assert from 'node:assert/strict';
import * as h from './g6nstHelpers';

test('wetland: water is never lost, the peak is lower and the outflow lasts longer', () => {
  const { outflow, stored } = h.reservoir(h.RAIN_RUSH, h.WETLAND_K);
  assert.equal(outflow.length, h.RAIN_RUSH.length);
  // the first steps by hand: nothing, then half of 10, then half of (5 + 40)
  assert.equal(outflow[0], 0);
  assert.equal(outflow[1], 5);
  assert.equal(outflow[2], 22.5);
  assert.equal(outflow[3], 16.25);
  assert.equal(stored[2], 22.5);
  // conservation: in = out + still stored (to rounding of the three-decimal coordinates)
  const inTotal = h.sumOf(h.RAIN_RUSH);
  assert.equal(inTotal, 60);
  assert.ok(Math.abs(inTotal - (h.sumOf(outflow) + stored[stored.length - 1])) < 0.02);
  // the rush is 40, the wetland lets at most 22,5 go
  assert.equal(h.peak(h.RAIN_RUSH), 40);
  assert.equal(h.peak(outflow), 22.5);
  assert.ok(h.peak(outflow) < h.peak(h.RAIN_RUSH));
  // water is still leaving after the rain has stopped
  assert.ok(outflow[h.RAIN_RUSH.length - 1] > 0 && h.RAIN_RUSH[h.RAIN_RUSH.length - 1] === 0);
});

test('sand filter: finer on top, layer shares add up to 100 and the heights add up to the column', () => {
  assert.deepEqual(h.FILTER_LAYERS.map((l) => l.name), ['fine sand', 'coarse sand', 'gravel']);
  assert.equal(h.FILTER_LAYERS.reduce((a, l) => a + l.share, 0), 100);
  const heights = h.FILTER_LAYERS.map((l) => h.layerHeight(20, l.share));
  assert.deepEqual(heights, [8, 6, 6]);
  assert.equal(heights.reduce((a, b) => a + b, 0), 20);
  assert.equal(h.layerHeight(20, 30), 6);
  assert.equal(h.layerHeight(50, 40), 20);
});
