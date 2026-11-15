import test from 'node:test';
import assert from 'node:assert/strict';
import {
  circleIntersections, cornerAngle, fmt, gradient, hypotenuse, intercepts, isRightTriangle, isosceles, linear, missingAngle, point,
  polygonAngleSum, quadFromAngles, roundTo, ruleFromTable, ruleText, shorterSide, supplement, thirdAngle, triangleInequality,
} from './grade9GeometryHelpers';

test('formatting', () => {
  assert.equal(fmt(-1), '−1');
  assert.equal(fmt(5.39), '5,39');
  assert.equal(point(3, -1), '(3, −1)');
  assert.equal(ruleText(2, 1), 'y = 2x + 1');
  assert.equal(ruleText(-3, 9), 'y = −3x + 9');
  assert.equal(ruleText(5, 0), 'y = 5x');
  assert.equal(ruleText(1, -3), 'y = x − 3');
  assert.equal(ruleText(-2, 5), 'y = −2x + 5');
  assert.equal(ruleText(0, 3), 'y = 3');
});

test('angle facts', () => {
  assert.equal(supplement(50), 130);
  assert.equal(supplement(65), 115);
  assert.equal(supplement(112), 68);
  assert.equal(supplement(74), 106);
  assert.equal(thirdAngle(45, 65), 70);
  assert.equal(thirdAngle(38, 90), 52);
  assert.deepEqual(isosceles(50), { other: 50, apex: 80 });
  assert.equal(polygonAngleSum(3), 180);
  assert.equal(polygonAngleSum(4), 360);
  assert.equal(polygonAngleSum(5), 540);
  assert.equal(polygonAngleSum(6), 720);
  assert.deepEqual(missingAngle(4, [70, 90, 80]), { sum: 360, known: 240, missing: 120 });
});

test('a quadrilateral drawn from its angles really has those angles', () => {
  const q = quadFromAngles([70, 90, 80, 120], 60, 40);
  assert.ok(q);
  [70, 90, 80, 120].forEach((a, i) => assert.ok(Math.abs(cornerAngle(q!, i) - a) < 1e-6, `corner ${i}`));
  assert.equal(quadFromAngles([70, 90, 80, 100], 60, 40), null);
});

test('construction arcs meet where the circles cross', () => {
  const [c] = circleIntersections({ x: 0, y: 0 }, 5, { x: 5, y: 0 }, 5);
  assert.ok(Math.abs(Math.hypot(c.x, c.y) - 5) < 1e-9);
  assert.ok(Math.abs(Math.hypot(c.x - 5, c.y) - 5) < 1e-9);
  assert.equal(circleIntersections({ x: 0, y: 0 }, 2, { x: 6, y: 0 }, 3).length, 0); // 2 + 3 < 6: no triangle
  assert.deepEqual(triangleInequality(4, 5, 7), { shortSum: 9, longest: 7, ok: true });
  assert.deepEqual(triangleInequality(2, 3, 6), { shortSum: 5, longest: 6, ok: false });
  assert.deepEqual(triangleInequality(3, 4, 8), { shortSum: 7, longest: 8, ok: false });
});

test('Pythagoras', () => {
  assert.deepEqual(hypotenuse(3, 4), { a2: 9, b2: 16, c2: 25, c: 5 });
  assert.deepEqual(hypotenuse(7, 24), { a2: 49, b2: 576, c2: 625, c: 25 });
  assert.deepEqual(hypotenuse(9, 12), { a2: 81, b2: 144, c2: 225, c: 15 });
  assert.equal(hypotenuse(2, 5).c2, 29);
  assert.equal(roundTo(hypotenuse(2, 5).c, 2), 5.39);
  assert.equal(hypotenuse(4, 6).c2, 52);
  assert.equal(roundTo(hypotenuse(4, 6).c, 2), 7.21);
  assert.deepEqual(shorterSide(10, 6), { c2: 100, a2: 36, b2: 64, b: 8 });
  assert.deepEqual(shorterSide(13, 5), { c2: 169, a2: 25, b2: 144, b: 12 });
  assert.deepEqual(shorterSide(17, 8), { c2: 289, a2: 64, b2: 225, b: 15 });
  assert.equal(isRightTriangle(5, 12, 13).right, true);
  assert.equal(isRightTriangle(6, 8, 10).right, true);
  assert.equal(isRightTriangle(3, 4, 6).right, false);
  assert.deepEqual(isRightTriangle(7, 8, 11), { a2: 49, b2: 64, c2: 121, sum: 113, right: false });
  assert.equal(isRightTriangle(13, 5, 12).right, true); // order does not matter
});

test('functions and graphs', () => {
  assert.equal(linear(2, 1)(4), 9);
  assert.equal(linear(-2, 5)(3), -1);
  assert.equal(linear(-2, 5)(2), 1);
  assert.deepEqual([0, 1, 2, 3].map(linear(-2, 5)), [5, 3, 1, -1]);
  assert.deepEqual(ruleFromTable([1, 2, 3], [3, 5, 7]), { m: 2, c: 1 });
  assert.deepEqual(ruleFromTable([0, 1, 2], [4, 7, 10]), { m: 3, c: 4 });
  assert.deepEqual([1, 2, 3].map(linear(-3, 9)), [6, 3, 0]);
  assert.deepEqual([1, 2, 3].map(linear(60, 0)), [60, 120, 180]);
  assert.equal(linear(200, 150)(3), 750);
  assert.equal(linear(12, 25)(10), 145);
  assert.equal(linear(3, -4)(5), 11);
  assert.equal(linear(-4, 10)(2), 2);
  assert.deepEqual(intercepts(-2, 4), { x: 2, y: 4 });
  assert.deepEqual(intercepts(1, -3), { x: 3, y: -3 });
  assert.deepEqual(intercepts(-3, 6), { x: 2, y: 6 });
  assert.deepEqual(gradient({ x: 1, y: 2 }, { x: 3, y: 6 }), { rise: 4, run: 2, m: 2 });
  assert.deepEqual(gradient({ x: 2, y: 1 }, { x: 4, y: 5 }), { rise: 4, run: 2, m: 2 });
  assert.deepEqual(gradient({ x: 0, y: 1 }, { x: 2, y: 7 }), { rise: 6, run: 2, m: 3 });
  assert.equal(gradient({ x: -1, y: 3 }, { x: 4, y: 3 }).m, 0);
  assert.equal(linear(3, -2)(4), 10);
});
