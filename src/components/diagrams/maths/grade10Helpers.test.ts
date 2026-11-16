import test from 'node:test';
import assert from 'node:assert/strict';
import * as h from './grade10Helpers';

test('formatting: superscripts, decimal comma, real minus', () => {
  assert.equal(h.sup(2), '²');
  assert.equal(h.sup(-3), '⁻³');
  assert.equal(h.dec(3.14159, 2), '3,14');
  assert.equal(h.dec(-0.5, 1), '−0,5');
  assert.equal(h.fmtPoly([3, -5, 2]), '2x² − 5x + 3');
  assert.equal(h.fmtPoly([0, 1]), 'x');
  assert.equal(h.fmtPoly([-1, 0, 1]), 'x² − 1');
  assert.equal(h.fmtPoly([0]), '0');
  assert.equal(h.bracket(2, -3), '(2x − 3)');
});

test('polynomials: products, squares, evaluation', () => {
  assert.deepEqual(h.expandBinomials(1, 2, 1, 3), [6, 5, 1]); // (x+2)(x+3)
  assert.deepEqual(h.expandBinomials(2, -1, 3, 4), [-4, 5, 6]); // (2x−1)(3x+4) = 6x² + 5x − 4
  assert.deepEqual(h.expandSquare(1, -4), [16, -8, 1]); // (x−4)²
  assert.deepEqual(h.expandBinomials(1, 5, 1, -5), [-25, 0, 1]); // difference of squares
  assert.equal(h.polyEval([6, 5, 1], 2), 20);
});

test('factorQuadratic recovers the factors and they multiply back', () => {
  for (const [a, b, c] of [[1, 5, 6], [1, -1, -12], [2, 7, 3], [6, -7, -3], [3, -10, 8], [1, 0, -49], [4, -12, 9], [1, 6, 9]] as const) {
    const f = h.factorQuadratic(a, b, c)!;
    assert.ok(f, `${a} ${b} ${c}`);
    assert.deepEqual(h.expandBinomials(f.p, f.q, f.r, f.s), [c, b, a]);
  }
  assert.equal(h.factorQuadratic(1, 1, 1), null);
  assert.equal(h.factorQuadratic(1, 1, 5), null);
});

test('sum and difference of cubes', () => {
  assert.deepEqual(h.cubeFactors(1, 2, 1).product, [8, 0, 0, 1]); // x³ + 8
  assert.deepEqual(h.cubeFactors(1, 3, -1).product, [-27, 0, 0, 1]); // x³ − 27
  assert.deepEqual(h.cubeFactors(2, 1, 1).product, [1, 0, 0, 8]); // 8x³ + 1
  assert.deepEqual(h.cubeFactors(3, 2, -1).product, [-8, 0, 0, 27]); // 27x³ − 8
  assert.equal(h.fmtPoly(h.cubeFactors(1, 2, 1).second), 'x² − 2x + 4');
  assert.equal(h.fmtPoly(h.cubeFactors(1, 3, -1).second), 'x² + 3x + 9');
});

test('real numbers', () => {
  assert.equal(h.isPerfectSquare(49), true);
  assert.equal(h.isPerfectSquare(50), false);
  assert.deepEqual(h.sqrtBetween(10), [3, 4]);
  assert.deepEqual(h.sqrtBetween(50), [7, 8]);
  assert.equal(h.sqrtRounded(2, 2), 1.41);
  assert.equal(h.sqrtRounded(10, 1), 3.2);
  assert.equal(h.decimalKind(3, 8), 'terminating');
  assert.equal(h.decimalKind(1, 3), 'recurring');
  assert.equal(h.decimalKind(7, 20), 'terminating');
  assert.equal(h.decimalKind(5, 6), 'recurring');
  assert.deepEqual(h.simplifySurd(50), { a: 5, b: 2 });
  assert.deepEqual(h.simplifySurd(72), { a: 6, b: 2 });
  assert.deepEqual(h.simplifySurd(7), { a: 1, b: 7 });
  assert.deepEqual(h.simplifySurd(48), { a: 4, b: 3 });
});

test('fractions: addition and reduction', () => {
  assert.deepEqual(h.addFractions(1, 2, 1, 3).reduced, [5, 6]);
  assert.deepEqual(h.addFractions(1, 4, 1, 4).reduced, [1, 2]);
  assert.equal(h.addFractions(3, 4, 5, 6).lcm, 12);
  assert.deepEqual(h.reduceRatio(6, 9), [2, 3]);
});

test('exponents: exact values', () => {
  assert.deepEqual(h.intPower(2, -3), [1, 8]);
  assert.deepEqual(h.intPower(3, 4), [81, 1]);
  assert.deepEqual(h.rationalPower(8, 2, 3), [4, 1]); // 8^(2/3)
  assert.deepEqual(h.rationalPower(16, -1, 4), [1, 2]); // 16^(−1/4)
  assert.deepEqual(h.rationalPower(27, 4, 3), [81, 1]);
  assert.equal(h.rationalPower(10, 1, 2), null);
  assert.equal(h.exactRoot(-8, 3), -2);
  assert.equal(h.exactRoot(-4, 2), null);
  assert.equal(h.solveExpEquation(2, [32, 1]), 5);
  assert.equal(h.solveExpEquation(3, [1, 9]), -2);
  assert.equal(h.solveExpEquation(2, [3, 1]), null);
  assert.equal(h.expProduct(3, 4), 7);
  assert.equal(h.expQuotient(3, 5), -2);
  assert.equal(h.expPower(3, 4), 12);
});

test('number patterns', () => {
  assert.deepEqual(h.sequence(5, 3, 5), [5, 8, 11, 14, 17]);
  assert.deepEqual(h.linearRule(5, 3), { m: 3, c: 2 });
  assert.equal(h.ruleStr(h.linearRule(5, 3)), 'Tₙ = 3n + 2');
  assert.equal(h.ruleStr(h.linearRule(20, -4)), 'Tₙ = −4n + 24');
  assert.equal(h.termNumberOf(5, 3, 50), 16);
  assert.equal(h.termNumberOf(5, 3, 51), null);
  assert.equal(h.linearTerm(5, 3, 20), 62);
});

test('equations', () => {
  assert.deepEqual(h.solveLinearBoth(3, 2, 1, 10), [4, 1]); // 3x + 2 = x + 10
  assert.deepEqual(h.solveLinearBoth(5, 1, 2, 5), [4, 3]);
  assert.equal(h.solveLinearBoth(2, 1, 2, 3), null);
  assert.deepEqual(h.integerRoots(1, -5, 6), [2, 3]);
  assert.deepEqual(h.integerRoots(1, 2, -15), [-5, 3]);
  assert.deepEqual(h.integerRoots(2, -5, -3), null); // x = 3 or −1/2
  assert.equal(h.integerRoots(1, 0, 4), null);
  const s = h.solveSimultaneous(1, 1, 7, 1, -1, 1)!; // x + y = 7, x − y = 1
  assert.deepEqual([s.x, s.y], [[4, 1], [3, 1]]);
  const t = h.solveSimultaneous(2, 1, 11, 1, -3, -5)!; // 2x + y = 11, x − 3y = −5
  assert.deepEqual([t.x, t.y], [[4, 1], [3, 1]]);
  assert.equal(h.solveSimultaneous(1, 1, 2, 2, 2, 4), null);
  // inequalities: dividing by a negative flips the sign
  assert.deepEqual(h.solveInequality(2, 3, '>', 11), { bound: [4, 1], op: '>' });
  assert.deepEqual(h.solveInequality(-3, 1, '≥', 10), { bound: [-3, 1], op: '≤' });
  assert.equal(h.interval([4, 1], '>'), '(4; ∞)');
  assert.equal(h.interval([-3, 1], '≤'), '(−∞; −3]');
  assert.equal(h.interval([5, 2], '≥'), '[5/2; ∞)');
});

test('trigonometry: special angles, quadrants, ratios, right triangles', () => {
  assert.ok(Math.abs(h.sinD(30) - 0.5) < 1e-12);
  assert.ok(Math.abs(h.cosD(60) - 0.5) < 1e-12);
  assert.ok(Math.abs(h.tanD(45) - 1) < 1e-12);
  assert.ok(Math.abs(h.sinD(60) - Math.sqrt(3) / 2) < 1e-12);
  assert.ok(Math.abs(h.cosD(30) - Math.sqrt(3) / 2) < 1e-12);
  assert.ok(Math.abs(h.tanD(30) - 1 / Math.sqrt(3)) < 1e-12);
  assert.ok(Math.abs(h.sinD(45) - 1 / Math.SQRT2) < 1e-12);
  assert.deepEqual([h.quadrant(30), h.quadrant(120), h.quadrant(200), h.quadrant(300), h.quadrant(90)], [1, 2, 3, 4, 0]);
  assert.deepEqual([h.referenceAngle(150), h.referenceAngle(210), h.referenceAngle(330)], [30, 30, 30]);
  assert.deepEqual(h.SIGNS[2], ['+', '−', '−']);
  // sign table agrees with the numbers
  for (const q of [1, 2, 3, 4] as const) {
    const d = (q - 1) * 90 + 40;
    const signs = [h.sinD(d), h.cosD(d), h.tanD(d)].map((v) => (v > 0 ? '+' : '−'));
    assert.deepEqual(signs, h.SIGNS[q]);
  }
  const p = h.ratiosFromPoint(-3, 4); // r = 5
  assert.equal(p.r, 5);
  assert.deepEqual([p.sin, p.cos, p.tan], [[4, 5], [-3, 5], [-4, 3]]);
  const p2 = h.ratiosFromPoint(5, -12); // r = 13
  assert.deepEqual([p2.sin, p2.cos, p2.tan], [[-12, 13], [5, 13], [-12, 5]]);
  assert.equal(h.oppositeFromHyp(10, 30), 5);
  assert.equal(h.adjacentFromHyp(10, 60), 5);
  assert.equal(h.oppositeFromAdj(8, 45), 8);
  assert.equal(h.hypFromOpp(6, 30), 12);
  assert.equal(h.angleFromTan(1, 1), 45);
  assert.equal(h.angleFromSin(3, 6), 30);
  assert.equal(h.angleFromCos(4, 5), 36.9);
  assert.equal(h.pythagoras(3, 4), 5);
});
