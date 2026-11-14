import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PHASE_SLUGS,
  PROMPTS,
  elongationOf,
  elongationOfPoint,
  judge,
  litSide,
  moonPosition,
  nearestPhaseIndex,
  shouldUse3D,
  targetIndex,
} from './helpers';

const R = 5;
const close = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-9, `${a} vs ${b}`);

test('new Moon is toward the Sun (left), full Moon opposite (right)', () => {
  const nm = moonPosition(elongationOf(0), R);
  close(nm.x, -R);
  close(nm.z, 0);
  const fm = moonPosition(elongationOf(4), R);
  close(fm.x, R);
  close(Math.abs(fm.z), 0);
});

test('first quarter is at the bottom of the top-down view, last quarter at the top (anticlockwise)', () => {
  const fq = moonPosition(elongationOf(2), R);
  close(fq.x, 0);
  close(fq.z, R); // toward the viewer = bottom of the screen
  const lq = moonPosition(elongationOf(6), R);
  close(lq.z, -R);
});

test('position -> elongation -> nearest phase round-trips for all 8 phases', () => {
  for (let i = 0; i < 8; i++) {
    const p = moonPosition(elongationOf(i), R);
    assert.equal(nearestPhaseIndex(elongationOfPoint(p.x, p.z)), i, PHASE_SLUGS[i]);
  }
});

test('snapping picks the nearest position and wraps around', () => {
  assert.equal(nearestPhaseIndex(0.1), 0);
  assert.equal(nearestPhaseIndex(Math.PI / 4 + 0.3), 1);
  assert.equal(nearestPhaseIndex(Math.PI / 4 + 0.5), 2);
  assert.equal(nearestPhaseIndex(Math.PI * 2 - 0.1), 0);
  assert.equal(nearestPhaseIndex(-0.1), 0);
  assert.equal(nearestPhaseIndex(Math.PI * 2 - Math.PI / 4), 7);
});

test('litSide follows the southern hemisphere rule: waxing left, waning right', () => {
  assert.equal(litSide(0), 'none');
  assert.deepEqual([1, 2, 3].map(litSide), ['left', 'left', 'left']);
  assert.equal(litSide(4), 'full');
  assert.deepEqual([5, 6, 7].map(litSide), ['right', 'right', 'right']);
});

test('shouldUse3D: all good -> 3D', () => {
  assert.equal(shouldUse3D({ webgl: true, reducedMotion: false, hardwareConcurrency: 8, deviceMemory: 8 }), true);
  assert.equal(shouldUse3D({ webgl: true, reducedMotion: false }), true); // nothing reported
});

test('shouldUse3D: each fallback condition on its own', () => {
  assert.equal(shouldUse3D({ webgl: false, reducedMotion: false, hardwareConcurrency: 8 }), false);
  assert.equal(shouldUse3D({ webgl: true, reducedMotion: true, hardwareConcurrency: 8 }), false);
  assert.equal(shouldUse3D({ webgl: true, reducedMotion: false, hardwareConcurrency: 2 }), false);
  assert.equal(shouldUse3D({ webgl: true, reducedMotion: false, hardwareConcurrency: 1 }), false);
  assert.equal(shouldUse3D({ webgl: true, reducedMotion: false, hardwareConcurrency: 4, deviceMemory: 2 }), false);
  assert.equal(shouldUse3D({ webgl: true, reducedMotion: false, hardwareConcurrency: 4, deviceMemory: 4 }), true);
  assert.equal(shouldUse3D({ webgl: true, reducedMotion: false, hardwareConcurrency: 3 }), true);
});

test('prompts: full Moon first, first quarter second, targets are real phases', () => {
  assert.deepEqual(PROMPTS.map((p) => p.target), ['full-moon', 'first-quarter']);
  assert.equal(targetIndex(PROMPTS[0]), 4);
  assert.equal(targetIndex(PROMPTS[1]), 2);
  assert.match(PROMPTS[0].right, /eclipse/);
  assert.match(PROMPTS[1].right, /left half/);
});

test('judge: right, then wrong, then reveal on the second miss', () => {
  const p = PROMPTS[0];
  assert.equal(judge(p, 4, 0), 'right');
  assert.equal(judge(p, 4, 1), 'right');
  assert.equal(judge(p, 0, 0), 'wrong');
  assert.equal(judge(p, 3, 1), 'reveal');
});
