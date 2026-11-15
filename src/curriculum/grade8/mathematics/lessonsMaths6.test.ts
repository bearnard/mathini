import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { fractionOf } from '../../../components/diagrams/maths/grade7Helpers';
import { mean, median, modes, range, relativeFrequency } from '../../../components/diagrams/maths/grade8DataHelpers';
import { addCommon, addDecimals, fractionToDecimal, hypotenuse, isRightAngled, ruleFromTable, shorterSide, solve, timesPow10 } from '../../../components/diagrams/maths/grade8NumberHelpers';

// Grade 8 Maths lessons, batch 6: Common and Decimal Fractions, Data Handling, Theorem of Pythagoras (term 3),
// Algebraic Equations and Functions and Relationships (term 4). Shape and worked numbers.

stubCss();
const fractions = renderSlides((await import('./term3/common-and-decimal-fractions/CommonAndDecimalFractions')).learnSteps);
const data = renderSlides((await import('./term3/data-handling/DataHandling')).learnSteps);
const pyth = renderSlides((await import('./term3/theorem-of-pythagoras/TheoremOfPythagoras')).learnSteps);
const equations = renderSlides((await import('./term4/algebraic-equations/AlgebraicEquations')).learnSteps);
const functions = renderSlides((await import('./term4/functions-and-relationships/FunctionsAndRelationships')).learnSteps);

test('batch 6 lessons have the standard shape', () => {
  for (const slides of [fractions, data, pyth, equations, functions]) assertLessonShape(slides);
  assert.equal(fractions.length, 6);
  assert.equal(data.length, 6);
  assert.equal(pyth.length, 6);
  assert.equal(equations.length, 6);
  assert.equal(functions.length, 5);
});

test('Common and Decimal Fractions: worked numbers', () => {
  assert.equal(timesPow10(1.2, 1), 12);
  assert.equal(addDecimals(2.5, 0.37), 2.87);
  assert.equal(fractionToDecimal(3, 4).value, 0.75);
  assert.equal(addCommon(3, 5, 1, 10, -1).simplest.n, 1);
  assert.deepEqual(fractionOf(5, 8, 40), { one: 5, result: 25 });
  assert.match(fractions[0].text, /4 hundredths/);
  assert.match(fractions[0].text, /1,2 × 10 = 12/);
  assert.match(fractions[0].text, /0,35 × 100 = 35/);
  assert.match(fractions[1].text, /2,50 \+ 0,37 = 2,87/);
  assert.match(fractions[1].text, /0,25 \+ 0,37 = 0,62/);
  assert.match(fractions[2].text, /= 0,75/);
  assert.match(fractions[4].text, /40 ÷ 8 = 5/);
  assert.match(fractions[4].text, /5 × 5 = 25/);
  assert.match(fractions[5].text, /47 and 5,05/);
  assert.match(fractions[5].text, /= 0,4/);
  assert.match(fractions[5].text, /R36 ÷ 4 = R9, × 3 = R27/);
});

test('Data Handling: worked numbers', () => {
  assert.equal(mean([2, 4, 6, 8]), 5);
  assert.equal(median([3, 11, 5, 9]).value, 7);
  assert.deepEqual(modes([1, 2, 2, 3]), [2]);
  assert.equal(range([9, 12, 14, 20]), 11);
  assert.equal(relativeFrequency(6, 30).percent, 20);
  assert.match(data[0].text, /20 ÷ 4 = 5/);
  assert.match(data[1].text, /median = 7/);
  assert.match(data[1].text, /giving 8/);
  assert.match(data[1].text, /mode = 2/);
  assert.match(data[1].text, /20 − 9 = 11/);
  assert.match(data[2].text, /hold 2, 6, 8, 4 learners \(20 in all\)/);
  assert.match(data[3].text, /median is the 5th: 34/);
  assert.match(data[4].text, /6 ÷ 30 = 0,2/);
  assert.match(data[4].text, /= 20%/);
  assert.match(data[5].text, /Mean 30 ÷ 5 = 6; sorted 3, 3, 7, 8, 9, so median 7; mode 3; range 6/);
  assert.match(data[5].text, /9 ÷ 36 = 0,25 = 25%/);
});

test('Theorem of Pythagoras: worked numbers', () => {
  assert.equal(hypotenuse(3, 4).c, 5);
  assert.equal(hypotenuse(9, 12).c, 15);
  assert.equal(shorterSide(13, 5).b, 12);
  assert.equal(shorterSide(10, 6).b, 8);
  assert.ok(isRightAngled(8, 15, 17).right);
  assert.ok(!isRightAngled(7, 8, 9).right);
  assert.equal(shorterSide(2.5, 0.7).b, 2.4);
  assert.match(pyth[0].text, /9 \+ 16 = 25/);
  assert.match(pyth[1].text, /81 \+ 144 = 225/);
  assert.match(pyth[1].text, /√225 = 15/);
  assert.match(pyth[2].text, /169 − 25 = 144/);
  assert.match(pyth[2].text, /b = √144 = 12/);
  assert.match(pyth[2].text, /100 − 36 = 64, so b = 8/);
  assert.match(pyth[3].text, /64 \+ 225 = 289/);
  assert.match(pyth[3].text, /49 \+ 64 = 113/);
  assert.match(pyth[4].text, /6,25 − 0,49 = 5,76/);
  assert.match(pyth[4].text, /2,4 m/);
  assert.match(pyth[5].text, /c = 10 cm/);
  assert.match(pyth[5].text, /b = 24 cm/);
  assert.match(pyth[5].text, /it is 13 cm/);
});

test('Algebraic Equations (term 4): worked numbers', () => {
  assert.equal(solve(1, -6, 11).x, 17);
  assert.equal(solve(4, 0, 28).x, 7);
  assert.deepEqual(solve(3, 5, 26), { rhs: 21, x: 7 });
  assert.deepEqual(solve(-3, 10, -8), { rhs: -18, x: 6 });
  assert.deepEqual(solve(2, 4, 12), { rhs: 8, x: 4 });
  assert.deepEqual(solve(2, 3, 27), { rhs: 24, x: 12 });
  assert.match(equations[0].text, /x = 11 \+ 6 = 17/);
  assert.match(equations[0].text, /x = 3 × 5 = 15/);
  assert.match(equations[1].text, /3 × 7 \+ 5 = 26/);
  assert.match(equations[1].text, /3 × 4 \+ 1 = 13/);
  assert.match(equations[2].text, /x \+ 3 = 8/);
  assert.match(equations[2].text, /10 − 3 × 6 = −8/);
  assert.match(equations[3].text, /3 × 4 \+ 4 = 16 and 4 \+ 12 = 16/);
  assert.match(equations[4].text, /Lerato is 12 and Thabo is 15/);
  assert.match(equations[5].text, /x = 24/);
  assert.match(equations[5].text, /x = 6\./);
  assert.match(equations[5].text, /x = 7\./);
  assert.match(equations[5].text, /= 11 and 2 × 3 \+ 5 = 11/);
});

test('Functions and Relationships: worked numbers', () => {
  assert.deepEqual(ruleFromTable([1, 2, 3], [2, 4, 6]), { m: 2, c: 0 });
  assert.deepEqual(ruleFromTable([1, 2, 3], [7, 11, 15]), { m: 4, c: 3 });
  assert.match(functions[0].text, /y = 3 \+ 4 = 7/);
  assert.match(functions[0].text, /15 − 2 = 13/);
  assert.match(functions[0].text, /4 × 0 \+ 1 = 1/);
  assert.match(functions[1].text, /x = 11 − 6 = 5/);
  assert.match(functions[1].text, /2x = 8 and x = 4/);
  assert.match(functions[2].text, /y = 2x/);
  assert.match(functions[2].text, /y = 3x \+ 2/);
  assert.match(functions[2].text, /3 × 4 \+ 2 = 14/);
  assert.match(functions[3].text, /linear with gradient 5/);
  assert.match(functions[3].text, /y = 5\b/);
  assert.match(functions[3].text, /not linear/);
  assert.match(functions[4].text, /= 11/);
  assert.match(functions[4].text, /x = 5/);
  assert.match(functions[4].text, /y = 4x \+ 3/);
});

test('Algebraic Equations (term 4): the negative x-term advice is not contradictory', () => {
  assert.equal(solve(-3, 10, -8).x, 6);
  assert.match(equations[2].text, /divide both sides by that negative number/);
  assert.doesNotMatch(equations[2].text, /keep its sign/);
  assert.match(equations[2].text, /−18 ÷ −3 is positive, and substituting x = 6 checks it/);
});
