import test from 'node:test';
import assert from 'node:assert/strict';
import { barHeights, courtZones, gradualPlan } from './lo5Helpers';

test('gradualPlan: start at 10 minutes and add 2 a week for 4 weeks', () => {
  assert.deepEqual(gradualPlan(10, 2, 4), { minutes: [10, 12, 14, 16], increase: 6 });
  assert.deepEqual(gradualPlan(10, 2, 0), { minutes: [], increase: 0 });
});

test('barHeights: the tallest bar fills the height and the others are in proportion', () => {
  assert.deepEqual(barHeights([10, 20], 40), [20, 40]);
  assert.deepEqual(barHeights([0, 0]), [0, 0]);
  const hs = barHeights([10, 12, 14, 16]);
  assert.equal(hs[3], 40);
  assert.equal(hs[0], 25);
});

test('courtZones: equal zones that tile the court side with the player in the middle', () => {
  const z = courtZones(2);
  assert.deepEqual(z, [{ x: 10, w: 50, cx: 35 }, { x: 60, w: 50, cx: 85 }]);
  const three = courtZones(3);
  assert.ok(Math.abs(three.reduce((a, s) => a + s.w, 0) - 100) < 0.01);
  assert.deepEqual(courtZones(0), []);
});
