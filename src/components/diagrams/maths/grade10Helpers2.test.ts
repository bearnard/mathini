import test from 'node:test';
import assert from 'node:assert/strict';
import * as g from './grade10Helpers2';

test('straight lines', () => {
  assert.deepEqual(g.lineGradient(1, 3, 3, 9), [3, 1]);
  assert.deepEqual(g.lineGradient(0, 5, 2, 1), [-2, 1]);
  assert.deepEqual(g.lineGradient(1, 2, 4, 3), [1, 3]);
  assert.deepEqual(g.lineThrough(0, -2, 4, 6), { a: [2, 1], q: [-2, 1] });
  assert.deepEqual(g.lineThrough(2, 3, 6, 5), { a: [1, 2], q: [2, 1] }); // y = x/2 + 2
  assert.deepEqual(g.lineXIntercept(2, -6), [3, 1]);
  assert.deepEqual(g.lineXIntercept(-4, 10), [5, 2]);
  assert.equal(g.lineXIntercept(0, 3), null);
  assert.equal(g.lineStr(-2, 5), 'y = −2x + 5');
  assert.equal(g.lineStr(1, -3), 'y = x − 3');
  assert.equal(g.lineStr(3, 0), 'y = 3x');
  assert.equal(g.lineStr(0, 4), 'y = 4');
  assert.equal(g.pt(0, -6), '(0; −6)');
});

test('parabolas y = ax² + q', () => {
  assert.deepEqual(g.parabolaTurning({ a: -1, q: 3 }), [0, 3]);
  assert.deepEqual(g.parabolaXIntercepts({ a: 1, q: -4 }), [-2, 2]);
  assert.deepEqual(g.parabolaXIntercepts({ a: 2, q: -8 }), [-2, 2]);
  assert.equal(g.parabolaXIntercepts({ a: 1, q: 4 }), null);
  assert.equal(g.parabolaXIntercepts({ a: 1, q: -5 }), null); // √5 is not an integer
  assert.equal(g.parabolaRange({ a: 1, q: -5 }), 'y ≥ −5');
  assert.equal(g.parabolaRange({ a: -2, q: 0 }), 'y ≤ 0');
  assert.deepEqual(g.parabolaFromPoints(-3, 2, 5), { a: 2, q: -3 });
  assert.equal(g.parabolaFromPoints(-3, 2, 4), null); // a = 7/4
  assert.equal(g.parabolaEval({ a: 2, q: -1 }, 3), 17);
  assert.equal(g.parabolaStr({ a: 2, q: -3 }), 'y = 2x² − 3');
  assert.equal(g.parabolaStr({ a: -1, q: 3 }), 'y = −x² + 3');
});

test('hyperbola, exponential and trigonometric graphs', () => {
  assert.deepEqual(g.hyperbolaXIntercept({ a: 4, q: -2 }), [2, 1]);
  assert.deepEqual(g.hyperbolaXIntercept({ a: 2, q: 3 }), [-2, 3]);
  assert.equal(g.hyperbolaXIntercept({ a: 3, q: 0 }), null);
  assert.equal(g.hyperbolaQuadrants({ a: 3, q: 0 }), '1 and 3');
  assert.equal(g.hyperbolaQuadrants({ a: -2, q: 0 }), '2 and 4');
  assert.equal(g.hyperbolaStr({ a: 2, q: 3 }), 'y = 2/x + 3');
  assert.equal(g.expoYIntercept({ a: 1, b: 2, q: 0 }), 1);
  assert.equal(g.expoYIntercept({ a: 3, b: 2, q: 1 }), 4);
  assert.equal(g.expoEval({ a: 1, b: 2, q: -3 }, 4), 13);
  assert.equal(g.expoRange({ a: 1, b: 2, q: 1 }), 'y > 1');
  assert.equal(g.expoRange({ a: -1, b: 2, q: 1 }), 'y < 1');
  assert.equal(g.expoGrows({ a: 1, b: 3, q: 0 }), true);
  assert.equal(g.expoGrows({ a: 1, b: 0.5, q: 0 }), false);
  assert.equal(g.trigAmplitude({ fn: 'sin', a: -3, q: 0 }), 3);
  assert.equal(g.trigPeriod({ fn: 'cos', a: 1, q: 0 }), 360);
  assert.equal(g.trigPeriod({ fn: 'tan', a: 1, q: 0 }), 180);
  assert.equal(g.trigRange({ fn: 'sin', a: 2, q: 1 }), '−1 ≤ y ≤ 3');
  assert.equal(g.trigRange({ fn: 'tan', a: 1, q: 0 }), 'y ∈ ℝ');
  assert.ok(Math.abs(g.trigEval({ fn: 'sin', a: 2, q: 1 }, 90) - 3) < 1e-12);
  assert.ok(Math.abs(g.trigEval({ fn: 'cos', a: 1, q: 0 }, 180) + 1) < 1e-12);
});

test('geometry numbers', () => {
  assert.equal(g.interiorAngleSum(4), 360);
  assert.equal(g.interiorAngleSum(5), 540);
  assert.equal(g.coInterior(70), 110);
  assert.equal(g.midSegment(18), 9);
  assert.deepEqual(g.scaleFactor(4, 10), [5, 2]);
  assert.deepEqual(g.scaled(6, [5, 2]), [15, 1]);
  assert.equal(g.otherSide(13, 5), 12);
  assert.equal(g.otherSide(10, 5), null);
  assert.equal(g.rhombusOtherDiagonal(10, 12), 16);
  assert.equal(g.rhombusOtherDiagonal(13, 10), 24);
  assert.equal(g.rhombusOtherDiagonal(10, 8), null);
});
