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
