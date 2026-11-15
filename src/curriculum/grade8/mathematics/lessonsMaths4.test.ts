import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { ascending, divideExact, power, powerOfPower, sameBaseProduct, sameBaseQuotient } from '../../../components/diagrams/maths/grade7Helpers';
import {
  additiveInverse, checkSolution, collect, commonDifference, commonRatio, cubeRoot, expandBracket, linearRule, linearText, linearValue,
  solveBothSides, solveLinear, squareRoot, subtractAsAdd,
} from '../../../components/diagrams/maths/grade8Helpers';

// Grade 8 Maths lessons, batch 4: Whole Numbers and Integers, Exponents, Patterns, Algebraic Expressions and
// Equations (term 1) and Algebraic Equations (term 2). Shape and worked numbers, checked here rather than with
// runtime throws (docs/notes/lesson-standard.md).

stubCss();
const integers = renderSlides((await import('./term1/whole-numbers-and-integers/WholeNumbersAndIntegers')).learnSteps);
const exponents = renderSlides((await import('./term1/exponents/Exponents')).learnSteps);
const patterns = renderSlides(
  (await import('./term1/numeric-and-geometric-patterns-functions-and-relationships/NumericAndGeometricPatternsFunctionsAndRelationships')).learnSteps,
);
const algebra = renderSlides((await import('./term1/algebraic-expressions-and-equations/AlgebraicExpressionsAndEquations')).learnSteps);
const equations = renderSlides((await import('./term2/algebraic-equations/AlgebraicEquations')).learnSteps);

test('batch 4 lessons have the standard shape', () => {
  for (const slides of [integers, exponents, patterns, algebra, equations]) {
    assertLessonShape(slides);
    assert.equal(slides.length, 6);
  }
});

test('Whole Numbers and Integers: worked numbers', () => {
  assert.deepEqual(ascending([7, -2, -12, 0]), [-12, -2, 0, 7]);
  assert.equal(-8 + 13, 5);
  assert.deepEqual(subtractAsAdd(2, 8), { inverse: -8, result: -6 });
  assert.equal(additiveInverse(15), -15);
  assert.deepEqual(subtractAsAdd(5, -3), { inverse: 3, result: 8 });
  assert.equal(-4 * 7, -28);
  assert.equal(divideExact(-24, -6), 4);
  assert.equal(18 - (6 - 2), 14);
  assert.equal(-9 + 4, -5);
  assert.match(integers[0].text, /−12, −2, 0, 7/);
  assert.match(integers[1].text, /you land on 5/);
  assert.match(integers[1].text, /2 − 8 = −6/);
  assert.match(integers[2].text, /The additive inverse of 15 is −15/);
  assert.match(integers[2].text, /\|−17\| = 17/);
  assert.match(integers[2].text, /5 \+ 3 = 8/);
  assert.match(integers[3].text, /the answer is −28/);
  assert.match(integers[3].text, /−3 \+ \(−5\) = −8/);
  assert.match(integers[4].text, /18 − 4 = 14/);
  assert.match(integers[4].text, /−9 \+ 4 = −5 m/);
  // check answers
  assert.deepEqual(ascending([-3, 5, -10, 0]), [-10, -3, 0, 5]);
  assert.equal(20 + 4 * (-2 - 3), 0);
  assert.match(integers[5].text, /−10, −3, 0, 5/);
  assert.match(integers[5].text, /24 \(same signs\) and −9/);
});

test('Exponents: worked numbers', () => {
  assert.equal(power(2, 3), 8);
  assert.equal(power(4, 3), 64);
  assert.equal(power(5, 2), 25);
  assert.equal(squareRoot(49), 7);
  assert.equal(squareRoot(45), null);
  assert.equal(cubeRoot(64), 4);
  assert.deepEqual(sameBaseProduct(3, 2, 4), { exp: 6, value: 729 });
  assert.deepEqual(sameBaseQuotient(2, 5, 2), { exp: 3, value: 8 });
  assert.deepEqual(sameBaseQuotient(10, 3, 3), { exp: 0, value: 1 });
  assert.deepEqual(powerOfPower(2, 3, 2), { exp: 6, value: 64 });
  assert.match(exponents[0].text, /= 16 × 4 = 64/);
  assert.match(exponents[1].text, /√49 = 7/);
  assert.match(exponents[1].text, /between 36 = 6 2 and 49 = 7 2/);
  assert.match(exponents[1].text, /∛64 = 4/);
  assert.match(exponents[2].text, /= 729/);
  assert.match(exponents[3].text, /= 8/);
  assert.match(exponents[4].text, /= 64/);
  assert.match(exponents[5].text, /= 81 and √81 = 9/);
  assert.match(exponents[5].text, /= 625/);
  assert.match(exponents[5].text, /= 49/);
  assert.match(exponents[5].text, /= 729/);
});

test('Patterns: worked numbers', () => {
  assert.equal(commonDifference([4, 7, 10, 13]), 3);
  assert.deepEqual(linearRule([5, 9, 13, 17]), { d: 4, c: 1 });
  assert.equal(linearText(4, 1), '4n + 1');
  assert.equal(commonRatio([3, 6, 12, 24]), 2);
  assert.equal(commonRatio([2, 6, 18, 54]), 3);
  assert.equal(commonRatio([2, 5, 8, 11]), null);
  assert.equal(linearValue(2, -1, 6), 11);
  assert.equal(linearValue(1, 5, -2), 3);
  assert.deepEqual([1, 2, 3].map((x) => linearValue(3, 1, x)), [4, 7, 10]);
  assert.match(patterns[0].text, /13 \+ 3 = 16/);
  assert.match(patterns[1].text, /4n \+ 1/);
  assert.match(patterns[1].text, /4 × 4 \+ 1 = 17/);
  assert.match(patterns[2].text, /24 × 2 = 48/);
  assert.match(patterns[3].text, /16 \+ 9 = 25/);
  assert.match(patterns[4].text, /3 × 3 \+ 1 = 10 ✓/);
  assert.match(patterns[4].text, /y = 2 × 6 − 1 = 11/);
  assert.match(patterns[4].text, /y = −2 \+ 5 = 3/);
  // check answers
  assert.deepEqual(linearRule([7, 12, 17, 22]), { d: 5, c: 2 });
  assert.match(patterns[5].text, /next term 27; T n = 5n \+ 2/);
  assert.match(patterns[5].text, /the next term is 40/);
  assert.match(patterns[5].text, /y = 4 × 5 − 3 = 17/);
  assert.match(patterns[5].text, /6² = 36/);
});

test('Algebraic Expressions and Equations: worked numbers', () => {
  assert.equal(collect([3, 2]), 5);
  assert.equal(linearText(collect([6, 1]), -2, 'y'), '7y − 2');
  assert.equal(linearValue(2, 5, 3), 11);
  assert.deepEqual(expandBracket(4, 1, 2), { a: 4, b: 8 });
  assert.equal(solveLinear(1, 7, 15).x, 8);
  assert.equal(solveLinear(3, 0, 21).x, 7);
  assert.deepEqual(solveLinear(2, -4, 10), { rhs: 14, x: 7 });
  assert.ok(checkSolution(2, -4, 10, 7).ok);
  assert.match(algebra[1].text, /3x \+ 2x = 5x/);
  assert.match(algebra[1].text, /7y − 2/);
  assert.match(algebra[2].text, /6 \+ 5 = 11/);
  assert.match(algebra[3].text, /4a \+ 8/);
  assert.match(algebra[4].text, /x = 8/);
  assert.match(algebra[4].text, /x = 7 \. Check: 2 × 7 − 4 = 10/);
  // check answers
  assert.equal(solveLinear(5, 3, 23).x, 4);
  assert.match(algebra[5].text, /3x \+ 7/);
  assert.match(algebra[5].text, /3m − 12/);
  assert.match(algebra[5].text, /3 × 4 − 2 = 10/);
  assert.match(algebra[5].text, /x = 4\. Check: 5 × 4 \+ 3 = 23/);
});

test('Algebraic Equations: worked numbers', () => {
  assert.equal(solveLinear(1, -9, 4).x, 13);
  assert.equal(solveLinear(2, 0, 18).x, 9);
  assert.deepEqual(solveLinear(4, 2, 18), { rhs: 16, x: 4 });
  assert.ok(checkSolution(3, 1, 13, 4).ok);
  assert.deepEqual(solveLinear(-2, 5, -7), { rhs: -12, x: 6 });
  assert.ok(checkSolution(-2, 5, -7, 6).ok);
  assert.deepEqual(solveLinear(3, -3, 12), { rhs: 15, x: 5 });
  assert.deepEqual(solveBothSides(2, 7, 1, 15), { coef: 1, rhs: 8, x: 8 });
  assert.match(equations[0].text, /x = 4 \+ 9 = 13/);
  assert.match(equations[0].text, /x = 5 × 3 = 15/);
  assert.match(equations[1].text, /4 × 4 \+ 2 = 18/);
  assert.match(equations[1].text, /3 × 4 \+ 1 = 13/);
  assert.match(equations[2].text, /= −12/);
  assert.match(equations[2].text, /5 − 2 × 6 = −7/);
  assert.match(equations[3].text, /x − 1 = 4, so x = 5/);
  assert.match(equations[4].text, /2 × 8 \+ 7 = 23, right 8 \+ 15 = 23/);
  // check answers
  assert.equal(solveLinear(3, -5, 16).x, 7);
  assert.equal(solveLinear(-3, 10, 1).x, 3);
  assert.deepEqual(solveBothSides(5, -3, 2, 9), { coef: 3, rhs: 12, x: 4 });
  assert.match(equations[5].text, /so x = 7/);
  assert.match(equations[5].text, /so x = 3/);
  assert.match(equations[5].text, /x = 4\. Check: 5 × 4 − 3 = 17 and 2 × 4 \+ 9 = 17/);
});
