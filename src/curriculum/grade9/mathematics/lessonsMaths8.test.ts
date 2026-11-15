import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { power, powerOfPower, sameBaseProduct } from '../../../components/diagrams/maths/grade7Helpers';
import {
  breadthFromPerimeter, circleMeasures, collect, factorTrinomial, formatTerms, linearRule, longDivision, nthTerm, solveBracket, solveLinear, triangleArea,
} from '../../../components/diagrams/maths/grade9Helpers';

// Grade 9 Maths, branch feat/lessons-maths-8: Term 1 (algebra, exponents, number systems, patterns) and Term 2 area and perimeter.
// The numbers each lesson shows are checked here, not with runtime throws (docs/notes/lesson-standard.md).

stubCss();
const algebra = renderSlides((await import('./term1/algebraic-expressions/AlgebraicExpressions')).learnSteps);
const exponents = renderSlides((await import('./term1/exponents/Exponents')).learnSteps);
const numbers = renderSlides((await import('./term1/number-systems-operations/NumberSystemsAndOperations')).learnSteps);
const patterns = renderSlides((await import('./term1/patterns-functions/PatternsAndFunctions')).learnSteps);
const area = renderSlides((await import('./term2/area-perimeter/AreaAndPerimeter')).learnSteps);

test('the five lessons have the standard shape', () => {
  for (const slides of [algebra, exponents, numbers, patterns, area]) assertLessonShape(slides);
});

test('Algebraic Expressions: the worked numbers are true and appear in the slides', () => {
  assert.equal(formatTerms(collect([[2, 'x'], [3, 'y'], [-1, 'x'], [2, 'y']])), 'x + 5y');
  assert.match(algebra[0].text, /answer is x \+ 5y/);
  assert.match(algebra[0].text, /8x − 2/);
  assert.match(algebra[1].text, /2 × x \+ 2 × 3 = 2x \+ 6/);
  assert.match(algebra[1].text, /3x \+ 6 = 3\(x \+ 2\)/);
  assert.deepEqual(factorTrinomial(7, 12), { p: 3, q: 4 });
  assert.match(algebra[2].text, /\(x \+ 3\)\(x \+ 4\)/);
  assert.match(algebra[2].text, /\+ 5x \+ 6/);
  assert.match(algebra[2].text, /\+ 6x \+ 9/);
  assert.deepEqual(solveLinear(2, -5, 9), { rhs: 14, x: 7 });
  assert.deepEqual(solveBracket(3, -2, 9), { inner: 3, x: 5 });
  assert.match(algebra[3].text, /2x = 14/);
  assert.match(algebra[3].text, /x = 7/);
  assert.match(algebra[3].text, /x − 2 = 3/);
  assert.match(algebra[3].text, /x = 5/);
  assert.match(algebra[4].text, /15 − 8 = 7/);
  assert.match(algebra[4].text, /57 − 12 = 45/);
  assert.match(algebra[4].text, /R15/);
  assert.match(algebra[5].text, /3a \+ 4b/);
  assert.match(algebra[5].text, /5x − 10; 4\(x \+ 3\)/);
  assert.match(algebra[5].text, /x = 5/);
  assert.match(algebra[5].text, /\(x \+ 3\)\(x \+ 5\)/);
});

test('Exponents: the worked numbers are true and appear in the slides', () => {
  assert.deepEqual(sameBaseProduct(2, 3, 2), { exp: 5, value: 32 });
  assert.deepEqual(powerOfPower(2, 3, 2), { exp: 6, value: 64 });
  assert.equal(power(5, 0), 1);
  assert.equal(power(2, 4), 16);
  assert.equal(power(4, 2), 16);
  assert.equal(power(2, 5) * 4 / 8, power(2, 4));
  assert.match(exponents[0].text, /= 32/);
  assert.match(exponents[0].text, /x 3/);
  assert.match(exponents[1].text, /= 64/);
  assert.match(exponents[1].text, /a 4 b 6/);
  assert.match(exponents[2].text, /1\/9/);
  assert.match(exponents[2].text, /1\/1\s000 = 0,001/);
  assert.match(exponents[3].text, /both equal 16/);
  assert.match(exponents[4].text, /y 4/);
  assert.match(exponents[4].text, /x 6 y 3/);
  assert.match(exponents[4].text, /1\/8/);
  assert.match(exponents[4].text, /= 81/);
});

test('Number Systems: the worked numbers are true and appear in the slides', () => {
  assert.equal(-5 + -3, -8);
  assert.equal(-2 - -6, 4);
  assert.equal(-6 * -4, 24);
  assert.equal(12 / -3, -4);
  assert.equal((-2) ** 3, -8);
  assert.equal(2 + 3 * 4, 14);
  assert.equal(20 - 2 * (1 - 4) ** 2, 2);
  assert.equal(longDivision(3, 8).decimal, '0,375');
  assert.match(numbers[0].text, /25\/100 = 1\/4/);
  assert.match(numbers[1].text, /You land on −8/);
  assert.match(numbers[1].text, /= 4/);
  assert.match(numbers[2].text, /6 × 4 = 24/);
  assert.match(numbers[2].text, /so −4/);
  assert.match(numbers[2].text, /= −8/);
  assert.match(numbers[2].text, /is not −24. Two negatives multiply to a positive. Do not mix this up with adding: \(−6\) \+ \(−4\) = −10\./);
  assert.doesNotMatch(numbers[2].text, /Only addition/);
  assert.match(numbers[3].text, /2 \+ 12 = 14/);
  assert.match(numbers[3].text, /20 − 18 = 2/);
  assert.match(numbers[4].text, /3\/8 = 0,375/);
  assert.match(numbers[4].text, /2\/3 = 16\/24 and 5\/8 = 15\/24/);
  assert.match(numbers[5].text, /0: whole, integer, rational/);
  assert.match(numbers[5].text, /−3\/4: rational only/);
  assert.equal(-9 - -4 + 2 * -3, -11);
  assert.match(numbers[5].text, /= −11/);
  assert.match(numbers[5].text, /÷ \(−6\) = 4/);
  assert.match(numbers[5].text, /0,625/);
});

test('Patterns: the worked numbers are true and appear in the slides', () => {
  assert.equal(nthTerm(linearRule(3, 4), 8), 31);
  assert.deepEqual(linearRule(3, 4), { m: 4, c: -1 });
  assert.match(patterns[0].text, /4n − 1/);
  assert.match(patterns[0].text, /4 × 8 − 1 = 31/);
  assert.match(patterns[0].text, /add 3, so 14/);
  assert.match(patterns[1].text, /constant ratio is 2/);
  assert.match(patterns[1].text, /= 25/);
  assert.match(patterns[2].text, /6 \+ 1 = 7/);
  assert.match(patterns[2].text, /y = 3x/);
  assert.match(patterns[3].text, /10 − 4 = 6/);
  assert.match(patterns[3].text, /2, 5, 8, 11/);
  assert.match(patterns[4].text, /21; T n = 4n \+ 1; T 10 = 41/);
  assert.match(patterns[4].text, /Ratio 2; next term 48/);
  assert.match(patterns[4].text, /y = 2x \+ 3/);
  assert.match(patterns[4].text, /x = 5/);
});

test('Area and Perimeter: the worked numbers are true and appear in the slides', () => {
  assert.deepEqual(breadthFromPerimeter(20, 8), { half: 10, breadth: 2 });
  assert.equal(triangleArea(10, 8), 40);
  assert.equal(circleMeasures(3).circumference, 18.84);
  assert.equal(circleMeasures(3).area, 28.26);
  assert.match(area[0].text, /= 24 m/);
  assert.match(area[0].text, /= 2 m/);
  assert.match(area[1].text, /8 × 5 = 40/);
  assert.match(area[1].text, /12 × 5 = 60/);
  assert.match(area[1].text, /½ × 10 × 8 = 40/);
  assert.match(area[2].text, /18,84 cm/);
  assert.match(area[2].text, /28,26 cm/);
  assert.match(area[3].text, /24 \+ 9 = 33 cm/);
  assert.match(area[4].text, /350 mm/);
  assert.match(area[4].text, /2,5 m/);
  assert.match(area[5].text, /= 6 cm/);
  assert.match(area[5].text, /= 35 cm/);
  assert.match(area[5].text, /62,8 cm/);
  assert.match(area[5].text, /= 314 cm/);
  assert.match(area[5].text, /42\s000 cm/);
});
