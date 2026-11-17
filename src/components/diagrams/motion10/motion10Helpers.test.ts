import test from 'node:test';
import assert from 'node:assert/strict';
import { displacement, distanceAlong, displacementAlong, averageSpeed, averageVelocity, acceleration, kmhToMs, msToKmh, motionKind, positionAt, velocityAt, chordVelocity, instantaneousSpeed } from './motion10Helpers';

test('distance and displacement', () => {
  assert.equal(displacement(2, -3), -5);
  assert.equal(distanceAlong([0, 4, 1]), 7);
  assert.equal(displacementAlong([0, 4, 1]), 1);
  assert.equal(distanceAlong([2, -3]), 5);
  assert.equal(displacementAlong([5, 5]), 0);
  // distance is never less than the size of the displacement
  for (const p of [[0, 4, 1], [3, -2, 6], [1, 1]]) assert.ok(distanceAlong(p) >= Math.abs(displacementAlong(p)));
});

test('speed, velocity, acceleration and units (plain arithmetic)', () => {
  assert.equal(averageSpeed(120, 1.5), 80);
  assert.equal(averageVelocity(-6, 3), -2);
  assert.equal(acceleration(5, 20, 3), 5);
  assert.equal(acceleration(20, 8, 4), -3);
  assert.equal(kmhToMs(72), 20);
  assert.equal(msToKmh(15), 54);
  assert.equal(kmhToMs(msToKmh(12)), 12);
});

test('signs of velocity and acceleration', () => {
  assert.equal(motionKind(20, -3), 'slowing down');
  assert.equal(motionKind(-6, -2), 'speeding up');
  assert.equal(motionKind(4, 2), 'speeding up');
  assert.equal(motionKind(-4, 2), 'slowing down');
  assert.equal(motionKind(7, 0), 'constant velocity');
  assert.equal(motionKind(0, 0), 'at rest');
});

test('instantaneous velocity is the limit of average velocities over shrinking intervals', () => {
  // x = 2 t^2 (x0 = 0, v0 = 0, a = 4): v = 4 t
  assert.equal(positionAt(0, 0, 4, 3), 18);
  assert.equal(velocityAt(0, 4, 3), 12);
  assert.equal(chordVelocity(0, 0, 4, 3, 4), 14);
  assert.equal(chordVelocity(0, 0, 4, 3, 3.5), 13);
  assert.equal(chordVelocity(0, 0, 4, 3, 3.1), 12.2);
  assert.ok(Math.abs(chordVelocity(0, 0, 4, 3, 3.001) - 12) < 0.01);
  // the average over an interval centred on t equals the instantaneous velocity for constant acceleration
  assert.equal(chordVelocity(0, 0, 4, 2, 4), velocityAt(0, 4, 3));
  assert.equal(instantaneousSpeed(-12), 12);
});
