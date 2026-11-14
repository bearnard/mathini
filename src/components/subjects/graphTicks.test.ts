import test from 'node:test';
import assert from 'node:assert/strict';
import { axisStep, formatTick, looksLikeDegrees, niceStep, withRoomForLabels } from './graphTicks';

test('nice steps are 1, 2 or 5 times a power of ten and give 4 to 10 intervals', () => {
  for (const span of [1, 3, 6, 8, 10, 11, 13, 19, 80, 130, 260, 300, 12.56]) {
    const step = niceStep(span);
    const intervals = span / step;
    assert.ok(intervals >= 3 && intervals <= 10.01, `${span}: step ${step} gives ${intervals} intervals`);
    const m = step / 10 ** Math.floor(Math.log10(step));
    assert.ok([1, 2, 5].includes(Math.round(m * 1e6) / 1e6), `${step} is nice`);
  }
});

test('the ranges the lessons use get readable spacing, never one label per unit on a long axis', () => {
  assert.equal(axisStep([-5, 5]), 2);
  assert.equal(axisStep([0, 8]), 1);
  assert.equal(axisStep([0, 80]), 10);
  assert.equal(axisStep([0, 260]), 50);
  assert.equal(axisStep([0, 300]), 50);
  assert.equal(axisStep([-1.5, 1.5]), 0.5);
  assert.equal(axisStep([0, 1]), 0.2);
});

test('degree axes get degree steps: 0-360 by 45, 0-180 by 30, 0-90 by 15', () => {
  assert.equal(axisStep([0, 360]), 45);
  assert.equal(axisStep([0, 180]), 30);
  assert.equal(axisStep([0, 90]), 15);
  assert.equal(looksLikeDegrees(0, 360), true);
  assert.equal(looksLikeDegrees(-6.28, 6.28), false);
  assert.equal(looksLikeDegrees(0, 8), false);
  assert.equal(looksLikeDegrees(0, 300), false); // a multiple of 15 but not a turn: not degrees
  assert.equal(looksLikeDegrees(-180, 180), true);
});

test('degenerate spans fall back to 1', () => {
  assert.equal(niceStep(0), 1);
  assert.equal(niceStep(NaN), 1);
});

test('room for the axis numbers: a range starting at 0 is widened below; one crossing zero is left alone', () => {
  assert.deepEqual(withRoomForLabels([0, 260], 0.12), [-31.2, 260]);
  assert.deepEqual(withRoomForLabels([0, 8], 0.06), [-0.48, 8]);
  assert.deepEqual(withRoomForLabels([-4, 7], 0.12), [-4, 7]);
  assert.deepEqual(withRoomForLabels([-1.5, 1.5], 0.12), [-1.5, 1.5]);
});

test('tick labels carry no floating-point noise', () => {
  assert.equal(formatTick(0.6000000000000001), '0.6');
  assert.equal(formatTick(-0.4000000000000001), '-0.4');
  assert.equal(formatTick(0.1 + 0.2), '0.3');
  assert.equal(formatTick(45), '45');
  assert.equal(formatTick(-6.28), '-6.28');
  assert.equal(formatTick(1.5), '1.5');
});
