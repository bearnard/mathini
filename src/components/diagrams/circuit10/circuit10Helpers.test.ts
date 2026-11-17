import test from 'node:test';
import assert from 'node:assert/strict';
import { potentialDifference, workDone, current, chargeFlowed, seriesR, parallelR, twoParallel, totalPd, totalCurrent, missingPart, effect } from './circuit10Helpers';

test('V = W/Q and I = Q/t (plain arithmetic)', () => {
  assert.equal(potentialDifference(12, 4), 3);
  assert.equal(workDone(6, 2.5), 15);
  assert.equal(current(90, 30), 3);
  assert.equal(chargeFlowed(2, 30), 60);
});

test('series and parallel resistance', () => {
  assert.equal(seriesR([2, 3, 5]), 10);
  assert.equal(parallelR([6, 3]), 2);
  assert.equal(twoParallel(12, 4), 3);
  assert.equal(parallelR([6, 6, 6]), 2);
  assert.equal(parallelR([12, 4]), twoParallel(12, 4));
  assert.ok(parallelR([6, 3]) < 3); // always less than the smallest branch
});

test('voltage and current dividers, and the effect of adding a resistor', () => {
  assert.equal(totalPd([2, 3, 1]), 6);
  assert.equal(totalCurrent([1.5, 0.5]), 2);
  assert.equal(missingPart(12, [4, 5]), 3);
  assert.equal(effect(seriesR([4]), seriesR([4, 2])), 'increases');
  assert.equal(effect(parallelR([4]), parallelR([4, 2])), 'decreases');
});
