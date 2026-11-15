import test from 'node:test';
import assert from 'node:assert/strict';
import {
  absolute, addFractions, addMixed, ascending, biggerFraction, divideExact, expand, fractionOf, jump, lcm, perfectCubes,
  power, powerOfPower, productSign, sameBaseProduct, sameBaseQuotient, signed, subtractFractions, sup,
} from './grade7Helpers';

test('lcm and the common denominator for the lesson pairs', () => {
  assert.equal(lcm(3, 6), 6);
  assert.equal(lcm(10, 5), 10);
  assert.equal(lcm(4, 8), 8);
  assert.equal(lcm(4, 6), 12);
});

test('adding 2/3 + 1/6 and 1/4 + 1/6 (unlike denominators)', () => {
  assert.deepEqual(addFractions(2, 3, 1, 6), { d: 6, a: 4, b: 1, n: 5, simplest: { n: 5, d: 6, by: 1 } });
  assert.deepEqual(addFractions(1, 4, 1, 6), { d: 12, a: 3, b: 2, n: 5, simplest: { n: 5, d: 12, by: 1 } });
  assert.deepEqual(addFractions(1, 6, 1, 3), { d: 6, a: 1, b: 2, n: 3, simplest: { n: 1, d: 2, by: 3 } });
});

test('subtracting 7/10 - 2/5 and refusing a negative result', () => {
  assert.deepEqual(subtractFractions(7, 10, 2, 5), { d: 10, a: 7, b: 4, n: 3, simplest: { n: 3, d: 10, by: 1 } });
  assert.deepEqual(subtractFractions(5, 6, 1, 3), { d: 6, a: 5, b: 2, n: 3, simplest: { n: 1, d: 2, by: 3 } });
  assert.throws(() => subtractFractions(1, 4, 1, 2));
});

test('comparing 3/4 and 5/8, and 2/3 and 3/5', () => {
  assert.deepEqual(biggerFraction(3, 4, 5, 8), { d: 8, a: 6, b: 5, sign: 1 });
  assert.deepEqual(biggerFraction(2, 3, 3, 5), { d: 15, a: 10, b: 9, sign: 1 });
  assert.equal(biggerFraction(1, 2, 2, 4).sign, 0);
});

test('mixed numbers: 1 1/2 + 2 1/4 = 3 3/4 and a carrying example 2 2/3 + 1 1/2 = 4 1/6', () => {
  assert.deepEqual(addMixed({ whole: 1, n: 1, d: 2 }, { whole: 2, n: 1, d: 4 }).result, { whole: 3, n: 3, d: 4 });
  assert.equal(addMixed({ whole: 1, n: 1, d: 2 }, { whole: 2, n: 1, d: 4 }).wholes, 3);
  assert.deepEqual(addMixed({ whole: 2, n: 2, d: 3 }, { whole: 1, n: 1, d: 2 }).result, { whole: 4, n: 1, d: 6 });
  assert.deepEqual(addMixed({ whole: 1, n: 1, d: 2 }, { whole: 1, n: 1, d: 2 }).result, { whole: 3, n: 0, d: 1 });
});

test('fraction of an amount: 3/4 of 8, 3/5 of 35, 2/3 of 12', () => {
  assert.deepEqual(fractionOf(3, 4, 8), { one: 2, result: 6 });
  assert.deepEqual(fractionOf(3, 5, 35), { one: 7, result: 21 });
  assert.deepEqual(fractionOf(2, 3, 12), { one: 4, result: 8 });
  assert.throws(() => fractionOf(1, 3, 10));
});

test('integers: jumps, ordering, signs, division, absolute value', () => {
  assert.equal(jump(-5, 3), 8);
  assert.equal(jump(7, -5), -12);
  assert.equal(jump(-3, 4), 7);
  assert.deepEqual(ascending([-2, 0, -5, 3]), [-5, -2, 0, 3]);
  assert.equal(-5 + 8, 3);
  assert.equal(7 - 12, -5);
  assert.equal(4 - -3, 7);
  assert.equal(productSign(-4, -3), '+');
  assert.equal(productSign(18, -6), '-');
  assert.equal(productSign(5, 2), '+');
  assert.equal(-4 * -3, 12);
  assert.equal(divideExact(18, -6), -3);
  assert.equal(divideExact(-20, 5), -4);
  assert.throws(() => divideExact(7, 2));
  assert.equal(absolute(-9), 9);
  assert.equal(signed(-5), '−5');
  assert.equal(signed(3), '3');
});

test('exponents: values, expansion, the three laws and the cubes', () => {
  assert.equal(power(2, 5), 32);
  assert.equal(power(7, 2), 49);
  assert.equal(power(3, 3), 27);
  assert.equal(power(10, 0), 1);
  assert.equal(expand(2, 5), '2 × 2 × 2 × 2 × 2');
  assert.deepEqual(sameBaseProduct(5, 2, 3), { exp: 5, value: 3125 });
  assert.deepEqual(sameBaseProduct(2, 3, 1), { exp: 4, value: 16 });
  assert.deepEqual(sameBaseQuotient(3, 4, 2), { exp: 2, value: 9 });
  assert.deepEqual(powerOfPower(4, 2, 3), { exp: 6, value: 4096 });
  assert.deepEqual(perfectCubes(130), [1, 8, 27, 64, 125]);
  assert.equal(sup(25), '²⁵');
  assert.equal(sup(0), '⁰');
});

// ---------- Branch 1: whole numbers, decimals, geometry ----------
import {
  addDec, arcMeet, compareDec, dec, digitAt, digitSum, divDec, factorTree, largestFrom, lShape, missingAngle, mulDec, polygonAngleSum,
  polygonMeasures, polygonName, primeFactors, primeVenn, rateOf, regularExterior, regularInterior, roundDec, simplifyRatio, smallestFrom,
  spaced, subDec, triangleFromSides, triangleType,
} from './grade7Helpers';
import { hcf as hcfOf } from './mathsHelpers';

test('whole numbers: prime factors, factor tree, HCF and LCM through the Venn, divisibility, ratio and rate', () => {
  assert.deepEqual(primeFactors(84), [2, 2, 3, 7]);
  assert.deepEqual(primeFactors(97), [97]);
  assert.deepEqual(factorTree(84), [{ n: 84, p: 2, rest: 42 }, { n: 42, p: 2, rest: 21 }, { n: 21, p: 3, rest: 7 }]);
  assert.deepEqual(primeVenn(18, 24), { onlyA: [3], common: [2, 3], onlyB: [2, 2], hcf: 6, lcm: 72 });
  assert.deepEqual(primeVenn(6, 8), { onlyA: [3], common: [2], onlyB: [2, 2], hcf: 2, lcm: 24 });
  assert.deepEqual(primeVenn(30, 45), { onlyA: [2], common: [3, 5], onlyB: [3], hcf: 15, lcm: 90 });
  for (const [a, b] of [[18, 24], [6, 8], [30, 45], [12, 18]]) {
    const v = primeVenn(a, b);
    assert.equal(v.hcf, hcfOf(a, b));
    assert.equal(v.lcm, (a * b) / hcfOf(a, b));
  }
  assert.equal(digitSum(4572), 18);
  assert.equal(4572 % 9, 0);
  assert.notEqual(4571 % 9, 0);
  assert.equal(largestFrom([7, 4, 2, 9]), 9742);
  assert.equal(smallestFrom([7, 4, 2, 9]), 2479);
  assert.deepEqual(simplifyRatio(15, 25), { a: 3, b: 5, by: 5 });
  assert.equal(rateOf(180, 3), 60);
  assert.equal(spaced(9742), '9 742');
});

test('decimals: arithmetic without floating-point noise, comma format, rounding, place value', () => {
  assert.equal(addDec(3.6, 2.45), 6.05);
  assert.equal(subDec(9.2, 3.78), 5.42);
  assert.equal(mulDec(0.4, 0.5), 0.2);
  assert.equal(divDec(6.3, 0.9), 7);
  assert.equal(addDec(12.5, 7.75), 20.25);
  assert.equal(roundDec(4.678, 1), 4.7);
  assert.equal(roundDec(4.65, 1), 4.7);
  assert.equal(roundDec(4.64, 1), 4.6);
  assert.equal(dec(3.6), '3,6');
  assert.equal(dec(3.6, 2), '3,60');
  assert.equal(dec(6.05), '6,05');
  assert.equal(digitAt(7.43, 1), 4);
  assert.equal(digitAt(7.43, 2), 3);
  assert.equal(compareDec(0.8, 0.75), 1);
  assert.equal(compareDec(0.5, 0.50), 0);
  assert.throws(() => divDec(1, 3));
});

test('geometry: triangles, angle sums and polygons', () => {
  const t = triangleFromSides(5, 5, 8);
  assert.equal(Math.round(Math.hypot(t.C.x - t.A.x, t.C.y - t.A.y) * 1e6) / 1e6, 5);
  assert.equal(Math.round(Math.hypot(t.C.x - t.B.x, t.C.y - t.B.y) * 1e6) / 1e6, 5);
  assert.throws(() => triangleFromSides(2, 3, 9));
  assert.equal(triangleType(5, 5, 8), 'isosceles');
  assert.equal(triangleType(5, 5, 5), 'equilateral');
  assert.equal(triangleType(4, 5, 7), 'scalene');
  assert.equal(missingAngle([60, 70], 180), 50);
  assert.equal(missingAngle([90, 80, 100], 360), 90);
  assert.equal(polygonAngleSum(3), 180);
  assert.equal(polygonAngleSum(4), 360);
  assert.equal(polygonAngleSum(5), 540);
  assert.equal(regularInterior(5), 108);
  assert.equal(regularExterior(5), 72);
  assert.equal(regularInterior(5) + regularExterior(5), 180);
  assert.equal(regularInterior(8), 135);
  assert.equal(polygonName(8), 'octagon');
  const [p, q] = arcMeet(0, 6, 6);
  assert.equal(p.x, 3);
  assert.equal(Math.round(p.y * 1e6) / 1e6, Math.round(3 * Math.sqrt(3) * 1e6) / 1e6);
  assert.equal(q.y, -p.y);
  assert.throws(() => arcMeet(0, 6, 2));
});

test('composite shape: 24 + 12 = 36 cm2 and its perimeter', () => {
  const s = lShape(6, 4, 4, 3);
  assert.equal(s.area1, 24);
  assert.equal(s.area2, 12);
  assert.equal(s.area, 36);
  assert.equal(polygonMeasures(s.corners).area, 36);
  assert.equal(s.perimeter, 26);
  assert.equal(polygonMeasures([{ x: 0, y: 0 }, { x: 8, y: 0 }, { x: 8, y: 5 }, { x: 0, y: 5 }]).perimeter, 26);
});
