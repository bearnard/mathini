import test from 'node:test';
import assert from 'node:assert/strict';
import {
  areaFactor, binomialProduct, breadthFromPerimeter, circleMeasures, collect, commonFactor, differences, expandBracket, factorTrinomial,
  formatTerms, linearRule, longDivision, negativePower, nthTerm, num, numberSets, powerLadder, productToPower, ratios, roundTo,
  solveBracket, solveLinear, tenToMinus, termsOf, triangleArea,
} from './grade9Helpers';

test('num and roundTo: SA formatting with a real minus sign', () => {
  assert.equal(num(-8), '−8');
  assert.equal(num(28.26), '28,26');
  assert.match(num(10000), /^10\s000$/);
  assert.match(num(42000.00000000001), /^42\s000$/);
  assert.equal(roundTo(3.14 * 9, 2), 28.26);
});

test('collecting like terms and writing them out', () => {
  assert.deepEqual(collect([[2, 'x'], [3, 'y'], [-1, 'x'], [2, 'y']]), [[1, 'x'], [5, 'y']]);
  assert.equal(formatTerms(collect([[2, 'x'], [3, 'y'], [-1, 'x'], [2, 'y']])), 'x + 5y');
  assert.equal(formatTerms(collect([[3, 'x'], [5, 'x'], [-2, '']])), '8x − 2');
  assert.equal(formatTerms(collect([[4, 'a'], [3, 'b'], [-1, 'a'], [1, 'b']])), '3a + 4b');
  assert.equal(formatTerms([[2, 'x'], [3, 'y'], [-1, 'x'], [2, 'y']]), '2x + 3y − x + 2y');
  assert.equal(formatTerms(collect([[1, 'x'], [-1, 'x']])), '0');
});

test('expanding, common factors, binomials and trinomials', () => {
  assert.deepEqual(expandBracket(2, 1, 3), { a: 2, b: 6 });
  assert.deepEqual(expandBracket(5, 1, -2), { a: 5, b: -10 });
  assert.deepEqual(commonFactor(3, 6), { f: 3, p: 1, q: 2 });
  assert.deepEqual(commonFactor(4, 12), { f: 4, p: 1, q: 3 });
  assert.deepEqual(binomialProduct(2, 3), { b: 5, c: 6 });
  assert.deepEqual(binomialProduct(3, 3), { b: 6, c: 9 });
  assert.deepEqual(factorTrinomial(7, 12), { p: 3, q: 4 });
  assert.deepEqual(factorTrinomial(8, 15), { p: 3, q: 5 });
  assert.deepEqual(factorTrinomial(-1, -6), { p: -3, q: 2 });
  assert.equal(factorTrinomial(1, 1), null);
});

test('solving linear equations', () => {
  assert.deepEqual(solveLinear(2, -5, 9), { rhs: 14, x: 7 });
  assert.deepEqual(solveLinear(1, 8, 15), { rhs: 7, x: 7 });
  assert.deepEqual(solveLinear(3, 12, 57), { rhs: 45, x: 15 });
  assert.deepEqual(solveLinear(3, 4, 19), { rhs: 15, x: 5 });
  assert.deepEqual(solveLinear(1, 4, 10), { rhs: 6, x: 6 });
  assert.deepEqual(solveLinear(3, -2, 13), { rhs: 15, x: 5 });
  assert.deepEqual(solveBracket(3, -2, 9), { inner: 3, x: 5 });
  // substitution checks
  assert.equal(2 * 7 - 5, 9);
  assert.equal(3 * (5 - 2), 9);
  assert.equal(3 * 15 + 12, 57);
});

test('exponents: negative powers, products to a power, the ladder', () => {
  assert.deepEqual(negativePower(3, 2), { den: 9 });
  assert.deepEqual(negativePower(10, 3), { den: 1000 });
  assert.deepEqual(negativePower(2, 3), { den: 8 });
  assert.equal(3 ** -2, 1 / 9);
  assert.deepEqual(productToPower([2, 3], 2), [4, 6]);
  assert.deepEqual(productToPower([2, 1], 3), [6, 3]);
  assert.equal(tenToMinus(3), '0,001');
  assert.equal(tenToMinus(1), '0,1');
  assert.equal(10 ** -3, 0.001);
  assert.deepEqual(powerLadder(3, 2, -2), [
    { exp: 2, n: 9, d: 1 },
    { exp: 1, n: 3, d: 1 },
    { exp: 0, n: 1, d: 1 },
    { exp: -1, n: 1, d: 3 },
    { exp: -2, n: 1, d: 9 },
  ]);
});

test('number sets and long division', () => {
  assert.deepEqual(numberSets(-7), ['integer', 'rational']);
  assert.deepEqual(numberSets(0), ['whole', 'integer', 'rational']);
  assert.deepEqual(numberSets(3), ['natural', 'whole', 'integer', 'rational']);
  assert.deepEqual(numberSets(-3, 4), ['rational']);
  assert.deepEqual(numberSets(-12, 4), ['integer', 'rational']);
  assert.deepEqual(longDivision(3, 8), { steps: [{ into: 30, q: 3, r: 6 }, { into: 60, q: 7, r: 4 }, { into: 40, q: 5, r: 0 }], decimal: '0,375' });
  assert.equal(longDivision(5, 8).decimal, '0,625');
  assert.equal(longDivision(1, 4).decimal, '0,25');
  assert.equal(3 / 8, 0.375);
});

test('patterns: differences, ratios and the nth term', () => {
  assert.deepEqual(differences([3, 7, 11, 15]), [4, 4, 4]);
  assert.deepEqual(linearRule(3, 4), { m: 4, c: -1 });
  assert.equal(nthTerm(linearRule(3, 4), 8), 31);
  assert.equal(nthTerm(linearRule(3, 4), 1), 3);
  assert.equal(nthTerm(linearRule(5, 4), 10), 41);
  assert.deepEqual(ratios([1, 2, 4, 8]), [2, 2, 2]);
  assert.deepEqual(ratios([3, 6, 12, 24]), [2, 2, 2]);
  assert.deepEqual(termsOf((n) => n * n, 5), [1, 4, 9, 16, 25]);
  assert.deepEqual(differences([0, 1, 4, 9]), [1, 3, 5]);
});

test('area and perimeter', () => {
  assert.deepEqual(breadthFromPerimeter(20, 8), { half: 10, breadth: 2 });
  assert.deepEqual(breadthFromPerimeter(30, 9), { half: 15, breadth: 6 });
  assert.equal(triangleArea(10, 8), 40);
  assert.equal(triangleArea(6, 3), 9);
  assert.equal(triangleArea(14, 5), 35);
  assert.deepEqual(circleMeasures(5), { circumference: 31.4, area: 78.5, rSquared: 25 });
  assert.deepEqual(circleMeasures(3), { circumference: 18.84, area: 28.26, rSquared: 9 });
  assert.deepEqual(circleMeasures(10), { circumference: 62.8, area: 314, rSquared: 100 });
  assert.equal(areaFactor(10), 100);
  assert.equal(areaFactor(100), 10000);
});
