import test from 'node:test';
import assert from 'node:assert/strict';
import {
  addCommon, addDecimals, dc, decimalDigits, decimalToFraction, fractionToDecimal, hypotenuse, isRightAngled, lowest, outputs, ruleFromTable,
  ruleText, shorterSide, solve, timesPow10,
} from './grade8NumberHelpers';

test('decimals: commas, exact sums, powers of ten, place value', () => {
  assert.equal(dc(2.87), '2,87');
  assert.equal(dc(0.2, 2), '0,20');
  assert.equal(addDecimals(2.5, 0.37), 2.87);
  assert.equal(addDecimals(0.1, 0.2), 0.3);
  assert.equal(addDecimals(3.8, 1.25), 5.05);
  assert.equal(timesPow10(1.2, 1), 12);
  assert.equal(timesPow10(0.35, 2), 35);
  assert.equal(timesPow10(0.47, 2), 47);
  assert.deepEqual(decimalDigits(0.04), { ones: 0, tenths: 0, hundredths: 4, thousandths: 0 });
  assert.deepEqual(decimalDigits(2.87), { ones: 2, tenths: 8, hundredths: 7, thousandths: 0 });
});

test('fractions: to and from decimals, adding and subtracting', () => {
  assert.deepEqual(lowest(6, 10), { n: 3, d: 5, by: 2 });
  assert.deepEqual(fractionToDecimal(3, 4), { scale: 25, over: 75, pow: 100, value: 0.75 });
  assert.deepEqual(fractionToDecimal(2, 5), { scale: 2, over: 4, pow: 10, value: 0.4 });
  assert.throws(() => fractionToDecimal(1, 3));
  assert.deepEqual(decimalToFraction(0.6), { n: 6, d: 10, simplest: { n: 3, d: 5, by: 2 } });
  assert.deepEqual(decimalToFraction(0.75), { n: 75, d: 100, simplest: { n: 3, d: 4, by: 25 } });
  assert.deepEqual(addCommon(1, 2, 1, 4), { d: 4, a: 2, b: 1, n: 3, simplest: { n: 3, d: 4, by: 1 } });
  assert.deepEqual(addCommon(3, 5, 1, 10, -1), { d: 10, a: 6, b: 1, n: 5, simplest: { n: 1, d: 2, by: 5 } });
  assert.deepEqual(addCommon(3, 4, 1, 8, -1).n, 5);
  assert.throws(() => addCommon(1, 4, 1, 6));
});

test('Pythagoras', () => {
  assert.deepEqual(hypotenuse(3, 4), { a2: 9, b2: 16, c2: 25, c: 5 });
  assert.equal(hypotenuse(9, 12).c, 15);
  assert.equal(hypotenuse(6, 8).c, 10);
  assert.equal(hypotenuse(5, 12).c, 13);
  assert.deepEqual(shorterSide(13, 5), { c2: 169, a2: 25, b2: 144, b: 12 });
  assert.equal(shorterSide(10, 6).b, 8);
  assert.equal(shorterSide(25, 7).b, 24);
  assert.deepEqual(shorterSide(2.5, 0.7), { c2: 6.25, a2: 0.49, b2: 5.76, b: 2.4 });
  assert.deepEqual(isRightAngled(8, 15, 17), { longest2: 289, others2: 289, right: true });
  assert.deepEqual(isRightAngled(9, 7, 8), { longest2: 81, others2: 113, right: false });
  assert.equal(isRightAngled(13, 5, 12).right, true);
});

test('equations and rules', () => {
  assert.deepEqual(solve(3, 5, 26), { rhs: 21, x: 7 });
  assert.deepEqual(solve(-3, 10, -8), { rhs: -18, x: 6 });
  assert.deepEqual(outputs(3, -2, [1, 5]), [1, 13]);
  assert.deepEqual(ruleFromTable([1, 2, 3], [2, 4, 6]), { m: 2, c: 0 });
  assert.deepEqual(ruleFromTable([1, 2, 3, 4], [5, 8, 11, 14]), { m: 3, c: 2 });
  assert.deepEqual(ruleFromTable([1, 2, 3], [5, 5, 5]), { m: 0, c: 5 });
  assert.equal(ruleFromTable([1, 2, 3], [1, 4, 9]), null);
  assert.equal(ruleText(3, 2), 'y = 3x + 2');
  assert.equal(ruleText(2, 0), 'y = 2x');
  assert.equal(ruleText(0, 5), 'y = 5');
  assert.equal(ruleText(1, -4), 'y = x − 4');
});
