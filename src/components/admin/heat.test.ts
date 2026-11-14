import { test } from 'node:test';
import assert from 'node:assert/strict';
import { heatStep, heatColor, heatLegend, bubbleRadius, HEAT_STEPS } from './heat';

test('zero (and missing max) is "empty", never the palest colour', () => {
  assert.equal(heatStep(0, 10), -1);
  assert.equal(heatStep(-3, 10), -1);
  assert.equal(heatStep(5, 0), -1);
  assert.equal(heatColor(-1), 'var(--heat-empty)');
});
test('steps run from 0 (smallest non-zero) to the top step (the maximum)', () => {
  assert.equal(heatStep(1, 70), 0);
  assert.equal(heatStep(70, 70), HEAT_STEPS - 1);
  assert.equal(heatStep(35, 70), 3);
  for (let v = 1; v <= 70; v++) {
    const s = heatStep(v, 70);
    assert.ok(s >= 0 && s <= HEAT_STEPS - 1);
    assert.ok(s >= heatStep(Math.max(1, v - 1), 70), 'monotonic');
  }
});
test('values above the max are clamped to the top step', () => {
  assert.equal(heatStep(500, 70), HEAT_STEPS - 1);
});
test('colour tokens map one-to-one onto steps', () => {
  assert.equal(heatColor(0), 'var(--heat-1)');
  assert.equal(heatColor(6), 'var(--heat-7)');
});
test('legend ranges cover 1..max without gaps or overlaps', () => {
  const l = heatLegend(70);
  assert.equal(l.length, HEAT_STEPS);
  assert.equal(l[0].from, 1);
  assert.equal(l[l.length - 1].to, 70);
  for (let i = 1; i < l.length; i++) assert.equal(l[i].from, l[i - 1].to + 1);
  assert.deepEqual(heatLegend(0), []);
});
test('a legend range really contains the values that get its colour', () => {
  const max = 53;
  const l = heatLegend(max);
  for (let v = 1; v <= max; v++) {
    const r = l[heatStep(v, max)];
    assert.ok(v >= r.from && v <= r.to, `${v} not in ${r.from}-${r.to}`);
  }
});
test('bubble radius: area scales with activity, never below 4 (8 px across)', () => {
  assert.equal(bubbleRadius(100, 100), 16);
  assert.equal(bubbleRadius(25, 100), 8);
  assert.equal(bubbleRadius(0, 100), 4);
  assert.equal(bubbleRadius(1, 10000), 4);
  assert.equal(bubbleRadius(5, 0), 4);
});
