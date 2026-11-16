import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';

// Grade 10 Mathematics, Term 1: every lesson has the standard shape (docs/notes/lesson-standard.md) and the numbers it shows are the true ones.
// The numbers come from grade10Helpers.ts (tested in grade10Helpers.test.ts); the checks here pin the worked examples a learner reads.

stubCss();
const lessons = {
  algebra: renderSlides((await import('./term1/algebraic-expressions/AlgebraicExpressions')).learnSteps),
  exponents: renderSlides((await import('./term1/exponents/Exponents')).learnSteps),
  patterns: renderSlides((await import('./term1/number-patterns/NumberPatterns')).learnSteps),
  equations: renderSlides((await import('./term1/equations-inequalities/EquationsInequalities')).learnSteps),
  trig: renderSlides((await import('./term1/trigonometry/Trigonometry')).learnSteps),
  funcLQ: renderSlides((await import('./term2/functions-linear-quadratic/FunctionsLinearQuadratic')).learnSteps),
  funcOther: renderSlides((await import('./term2/functions-other/FunctionsOther')).learnSteps),
  geometry: renderSlides((await import('./term2/euclidean-geometry/EuclideanGeometry')).learnSteps),
  examPrep: renderSlides((await import('./term2/midyear-exam-prep/MidYearExamPrep')).learnSteps),
};

test('every lesson has the standard shape and sensible slide titles', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) {
      const words = s.text.split(' ').length;
      assert.ok(words < 330, `${name} / ${s.title}: ${words} words is too long for a slide`);
    }
  }
});

test('Algebraic Expressions: the worked numbers are true', () => {
  const t = lessons.algebra.map((s) => s.text);
  assert.match(t[0], /x² \+ 9x \+ 14/); // (x + 2)(x + 7)
  assert.match(t[0], /3x² \+ 11x − 4/); // (3x − 1)(x + 4) = 3x² + 12x − x − 4
  assert.match(t[0], /x² \+ 10x \+ 25/); // (x + 5)²
  assert.match(t[1], /4x\(2x \+ 3\)/);
  assert.match(t[2], /\(x \+ 4\)\(x \+ 5\)/);
  assert.match(t[2], /\(x − 8\)\(x \+ 8\)/);
  assert.match(t[2], /x² − 2x \+ 4/); // x³ + 8
  assert.match(t[2], /x³ \+ 4x² \+ 8x \+ 8/); // the wrong cube expansion
  assert.match(t[3], /17\/\(6x\)/); // 5/(2x) + 1/(3x)
  assert.match(t[4], /5,39/); // √29
  // independent arithmetic
  assert.equal((2 + 7) + ' ' + 2 * 7, '9 14');
  assert.ok(Math.abs(Math.sqrt(29) - 5.385) < 0.001);
  assert.equal(5 / 2 + 1 / 3, 17 / 6);
});

test('Exponents: the worked numbers are true', () => {
  const t = lessons.exponents.map((s) => s.text);
  assert.match(t[0], /27/);
  assert.match(t[1], /1\/16/);
  assert.match(t[1], /9\/4/);
  assert.match(t[2], /8/); // 16^(3/4)
  assert.match(t[2], /1\/5/);
  assert.match(t[3], /x = 3\/2|x = 3 ⁄ 2|3\/2/);
  assert.equal(16 ** (3 / 4), 8);
  assert.equal(27 ** (1 / 3), 3);
  assert.equal(25 ** -0.5, 0.2);
  assert.equal(9 ** 1.5, 27);
  assert.equal(4 ** -2, 1 / 16);
  assert.ok(Math.abs((2 / 3) ** -2 - 2.25) < 1e-12);
});

test('Number Patterns: the worked numbers are true', () => {
  const t = lessons.patterns.map((s) => s.text);
  assert.match(t[0], /6; 11; 16; 21; 26/);
  assert.match(t[1], /Tₙ = 5n \+ 1/);
  assert.match(t[1], /Tₙ = −3n \+ 23/);
  assert.match(t[2], /151/); // T30
  assert.match(t[2], /n = 20/);
  assert.match(t[2], /16,4/);
  assert.equal(5 * 30 + 1, 151);
  assert.equal(6 + 29 * 5, 151);
  assert.equal((101 - 1) / 5, 20);
});

test('Equations and Inequalities: the worked numbers are true', () => {
  const t = lessons.equations.map((s) => s.text);
  assert.match(t[0], /x = 5/);
  assert.match(t[1], /x = 3 or x = 4|x = 3.*x = 4/);
  assert.match(t[1], /x² \+ 6x − 16/);
  assert.match(t[1], /x = −8.*x = 2/);
  assert.match(t[2], /x = 7/);
  assert.match(t[2], /10 − 7 = 3/);
  assert.match(t[3], /\(−∞; 5\]/);
  assert.match(t[3], /\(−2; ∞\)/);
  assert.equal(5 * 5 + 1, 2 * 5 + 16);
  assert.equal(7 + 3, 10);
  assert.equal(7 - 3, 4);
  assert.equal(2 * (2 * 2 - 3) + 3 * 2, 8); // substitution example: y = 2, x = 1
  assert.equal(1 - 2 * 2, -3);
});

test('Trigonometry: the worked numbers are true', () => {
  const t = lessons.trig.map((s) => s.text);
  assert.match(t[0], /169/);
  assert.match(t[1], /√3\/2/);
  assert.match(t[2], /r = √100 = 10|r = √ 100 = 10|= 10/);
  assert.match(t[2], /3\/5/);
  assert.match(t[2], /−4\/5/);
  assert.match(t[3], /4,59|4,6/);
  const rad = (d: number) => (d * Math.PI) / 180;
  assert.ok(Math.abs(8 * Math.sin(rad(35)) - 4.588) < 0.001); // 4,59 cm
  assert.ok(Math.abs(12 * Math.tan(rad(40)) - 10.069) < 0.001);
  assert.ok(Math.abs((Math.acos(7 / 9) * 180) / Math.PI - 38.94) < 0.01);
  assert.equal(Math.hypot(-8, 6), 10);
  assert.equal(2 * 0.5 + 1, 2);
});

test('Functions (straight lines and parabolas): the worked numbers are true', () => {
  const t = lessons.funcLQ.map((x) => x.text);
  assert.match(t[0], /= 14/); // f(4) = 3(4) + 2
  assert.match(t[0], /x = 3/);
  assert.match(t[1], /\(0; 4\)/);
  assert.match(t[1], /\(2; 0\)/);
  assert.match(t[1], /−2/);
  assert.match(t[2], /\(0; −9\)/);
  assert.match(t[2], /x = −3 or x = 3/);
  assert.match(t[2], /y ≥ −9/);
  assert.match(t[3], /4 and 8/); // x² and 2x² at x = 2
  assert.equal(3 * 4 + 2, 14);
  assert.equal(-2 * 2 + 4, 0);
  assert.equal(3 * 3 - 9, 0);
  assert.equal(2 * 2 * 2, 8);
});

test('Functions (hyperbola, exponential, trigonometric graphs): the worked numbers are true', () => {
  const t = lessons.funcOther.map((x) => x.text);
  assert.match(t[0], /y ≠ 1/);
  assert.match(t[0], /x = −3/);
  assert.match(t[1], /y = 2/);
  assert.match(t[1], /y > 2/);
  assert.match(t[1], /\(0; 3\)/);
  assert.match(t[1], /2,25/); // 2⁻² + 2
  assert.match(t[2], /0, 1, 0, −1, 0/);
  assert.match(t[2], /1, 0, −1, 0, 1/);
  assert.match(t[2], /−2 ≤ y ≤ 2/);
  assert.match(t[2], /0 ≤ y ≤ 2/);
  assert.match(t[3], /180°/);
  assert.equal(3 / -3 + 1, 0); // x-intercept of 3/x + 1
  assert.equal(2 ** 0 + 2, 3);
  assert.equal(2 ** -2 + 2, 2.25);
  assert.equal(2 ** 3 + 2, 10);
});

test('Euclidean geometry: the worked numbers are true', () => {
  const t = lessons.geometry.map((x) => x.text);
  assert.match(t[1], /115°/);
  assert.match(t[1], /360°/);
  assert.match(t[1], /100°/);
  assert.match(t[1], /95°/);
  assert.match(t[2], /7 cm/);
  assert.match(t[2], /x = 4/);
  assert.match(t[3], /10 cm/);
  assert.match(t[3], /= 4/);
  assert.equal(180 - 65, 115);
  assert.equal(180 - 80, 100);
  assert.equal(3 * 35 - 10, 95);
  assert.equal(2 * 35 + 25, 95);
  assert.equal(2 * (3 * 4 - 1), 4 * 4 + 6);
  assert.equal(14 / 2, 7);
});

test('Mid-year exam preparation: the worked numbers are true', () => {
  const t = lessons.examPrep.map((x) => x.text);
  assert.match(t[0], /\(x − 7\)\(x \+ 2\)/);
  assert.match(t[0], /x = −2 or x = 7/);
  assert.match(t[1], /= 0 ✓|= 0/);
  assert.match(t[1], /10 cm/);
  assert.match(t[2], /7,0 cm/);
  assert.equal(7 * 7 - 5 * 7 - 14, 0);
  assert.equal((-2) * (-2) - 5 * -2 - 14, 0);
  assert.ok(Math.abs(10 * Math.tan((35 * Math.PI) / 180) - 7.002) < 0.001);
  assert.ok(Math.abs(20 * Math.sin((30 * Math.PI) / 180) - 10) < 1e-12);
});
