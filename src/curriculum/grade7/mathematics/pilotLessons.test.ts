import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { addFractions, addMixed, biggerFraction, divideExact, jump, power, productSign, sameBaseProduct } from '../../../components/diagrams/maths/grade7Helpers';
import { equivalent, simplify } from '../../../components/diagrams/maths/mathsHelpers';

// The numbers the three pilot lessons (Common Fractions, Integers, Exponents) show, checked here rather than
// with runtime throws (docs/notes/lesson-standard.md).

stubCss();
const fractions = renderSlides((await import('./term2/common-fractions/CommonFractions')).learnSteps);
const integers = renderSlides((await import('./term4/integers/Integers')).learnSteps);
const exponents = renderSlides((await import('./term1/exponents/Exponents')).learnSteps);

test('the three pilot lessons have the standard shape', () => {
  for (const slides of [fractions, integers, exponents]) assertLessonShape(slides);
  assert.equal(fractions.length, 6);
  assert.equal(integers.length, 6);
  assert.equal(exponents.length, 6);
});

test('Common Fractions: the worked numbers are true and appear in the slides', () => {
  assert.ok(equivalent(3, 4, 9, 12));
  assert.ok(!equivalent(3, 4, 5, 6)); // the mistake slide: adding 2 to the top and the bottom
  assert.deepEqual(simplify(18, 24), { n: 3, d: 4, by: 6 });
  assert.equal(biggerFraction(3, 4, 5, 8).sign, 1);
  assert.deepEqual(addFractions(2, 3, 1, 6).simplest, { n: 5, d: 6, by: 1 });
  assert.deepEqual(addMixed({ whole: 1, n: 1, d: 2 }, { whole: 2, n: 1, d: 4 }).result, { whole: 3, n: 3, d: 4 });
  assert.match(fractions[0].text, /HCF of 18 and 24 is 6/);
  assert.match(fractions[3].text, /Wholes: 1 \+ 2 = 3/);
  assert.match(fractions[4].text, /8 ÷ 4 = 2/);
  assert.match(fractions[4].text, /3 × 2 = 6/);
});

test('Integers: the worked numbers are true and appear in the slides', () => {
  assert.equal(-5 + 8, 3);
  assert.equal(jump(-5, 3), 8);
  assert.equal(jump(7, -5), -12);
  assert.equal(jump(-3, 4), 7);
  assert.equal(productSign(-4, -3), '+');
  assert.equal(productSign(18, -6), '-');
  assert.equal(divideExact(18, -6), -3);
  assert.match(integers[1].text, /You land on 3/);
  assert.match(integers[2].text, /you land on −5/);
  assert.match(integers[2].text, /= 7°C/);
  assert.match(integers[3].text, /4 × 3 = 12/);
  assert.match(integers[4].text, /\|−9\| = 9/);
});

test('Exponents: the worked numbers are true and appear in the slides', () => {
  assert.equal(power(2, 5), 32);
  assert.equal(power(7, 2), 49);
  assert.equal(power(4, 2), 16);
  assert.equal(power(3, 3), 27);
  assert.equal(power(10, 0), 1);
  assert.deepEqual(sameBaseProduct(5, 2, 3), { exp: 5, value: 3125 });
  assert.match(exponents[0].text, /= 49/);
  assert.match(exponents[1].text, /= 27/);
  assert.match(exponents[1].text, /1, 8, 27, 64, 125/);
  assert.match(exponents[2].text, /1 000/);
});
