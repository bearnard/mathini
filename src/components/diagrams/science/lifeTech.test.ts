import test from 'node:test';
import assert from 'node:assert/strict';
import { CELL_MM, LEVELS, NAKED_EYE_MM, camLift, conserved, crankSlider, logPosition, mmToMicrometres, wastedEnergy, wheelAxleAdvantage } from './lifeTechHelpers';

test('energy is conserved: 10 J from a battery becomes 2 J of light and 8 J of heat', () => {
  assert.equal(wastedEnergy(10, 2), 8);
  assert.ok(conserved(10, [2, 8]));
  assert.ok(!conserved(10, [2, 7]));
  assert.throws(() => wastedEnergy(10, 11));
});

test('cells are 10 to 100 micrometres and the naked eye can only see about 100 micrometres', () => {
  assert.deepEqual(CELL_MM.map(mmToMicrometres), [10, 100]);
  assert.equal(mmToMicrometres(NAKED_EYE_MM), 100);
  assert.ok(NAKED_EYE_MM >= CELL_MM[1]);
});

test('on a log scale each factor of 10 is the same distance', () => {
  assert.equal(logPosition(0.001, 0.001, 1), 0);
  assert.equal(logPosition(1, 0.001, 1), 1);
  assert.ok(Math.abs(logPosition(0.01, 0.001, 1) - 1 / 3) < 1e-9);
  assert.ok(Math.abs(logPosition(0.1, 0.001, 1) - 2 / 3) < 1e-9);
  assert.throws(() => logPosition(0, 0.001, 1));
});

test('wheel and axle: a 20 cm wheel on a 5 cm axle gives a mechanical advantage of 4', () => {
  assert.equal(wheelAxleAdvantage(20, 5), 4);
  assert.throws(() => wheelAxleAdvantage(20, 0));
});

test('levels of organisation run cell, tissue, organ, organ system, organism', () => {
  assert.deepEqual([...LEVELS], ['cell', 'tissue', 'organ', 'organ system', 'organism']);
});

test('a cam follower rises and falls once per turn, and is back where it started', () => {
  assert.equal(camLift(0, 10), 0);
  assert.ok(Math.abs(camLift(180, 10) - 10) < 1e-9);
  assert.ok(Math.abs(camLift(360, 10)) < 1e-9);
  assert.ok(camLift(90, 10) > 0 && camLift(90, 10) < 10);
});

test('a crank slider moves back and forth between rod - r and rod + r, so the stroke is twice the crank radius', () => {
  const r = 10;
  const rod = 40;
  assert.ok(Math.abs(crankSlider(0, r, rod) - (rod + r)) < 1e-9);
  assert.ok(Math.abs(crankSlider(180, r, rod) - (rod - r)) < 1e-9);
  assert.ok(Math.abs(crankSlider(360, r, rod) - crankSlider(0, r, rod)) < 1e-9);
  const xs = Array.from({ length: 361 }, (_, a) => crankSlider(a, r, rod));
  assert.ok(Math.abs(Math.max(...xs) - Math.min(...xs) - 2 * r) < 1e-9);
  assert.throws(() => crankSlider(0, 10, 5));
});
