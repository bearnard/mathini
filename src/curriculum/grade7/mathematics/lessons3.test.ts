import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import {
  collectLike, evalLinear, geometricTerms, linearRule, linearTerms, percentOf, plusStage, POLYHEDRA, reflectInVertical, rotate90cw,
  sectorAngle, solveLinear, termsText, translate, turnFraction,
} from '../../../components/diagrams/maths/grade7Helpers2';
import { stats } from '../../../components/diagrams/maths/mathsHelpers';

// Branch 3 of the Grade 7 Maths lesson rewrite: the numbers shown in each lesson (docs/notes/lesson-standard.md).

stubCss();
const patterns = renderSlides((await import('./term3/numeric-and-geometric-patterns/NumericAndGeometricPatterns')).learnSteps);
const transform = renderSlides((await import('./term3/transformation-geometry-and-3d-objects/TransformationGeometryAnd3DObjects')).learnSteps);
const data = renderSlides((await import('./term4/data-handling/DataHandling')).learnSteps);
const consolidation = renderSlides((await import('./term4/patterns-functions-and-algebra-consolidation/PatternsFunctionsAndAlgebraConsolidation')).learnSteps);

test('every lesson in the branch has the standard shape', () => {
  for (const s of [patterns, transform, data, consolidation]) assertLessonShape(s);
  for (const s of [patterns, transform, data, consolidation].flat()) assert.ok(!/(^|[\s(=])-\d/.test(s.text), `${s.title}: negative numbers use the real minus sign`);
});

test('Numeric and geometric patterns: terms, rules and the tile count are true', () => {
  assert.deepEqual(linearTerms(7, 0, 5), [7, 14, 21, 28, 35]);
  assert.deepEqual(linearRule([1, 2, 3, 4], [5, 8, 11, 14]), { m: 3, c: 2 });
  assert.equal(linearTerms(2, 1, 10)[9], 21);
  assert.equal(plusStage(6).length, 25);
  assert.equal(5 + 6 * 4, 29); // the wrong answer named in the mistake
  assert.deepEqual(geometricTerms(2, 2, 5), [2, 4, 8, 16, 32]);
  assert.equal(5 * 5, 25);
  assert.match(patterns[0].text, /24 \+ 8 = 32/);
  assert.match(patterns[0].text, /27 − 30 = −3/);
  assert.match(patterns[0].text, /subtract 3 each time/);
  assert.match(patterns[0].text, /21 − 3 = 18/);
  assert.match(patterns[1].text, /Tn = 3n \+ 2/);
  assert.match(patterns[1].text, /3 × 4 \+ 2 = 14/);
  assert.match(patterns[2].text, /2 × 10 \+ 1 = 21/);
  assert.match(patterns[2].text, /4 × 6 \+ 1 = 25 tiles/);
  assert.match(patterns[3].text, /16 × 2 = 32/);
  assert.match(patterns[4].text, /5 × 5 = 25/);
  assert.match(patterns[5].text, /19 \+ 4 = 23/);
  assert.match(patterns[5].text, /Tn = 4n \+ 1/);
  assert.match(patterns[5].text, /5 × 20 − 2 = 98/);
  assert.match(patterns[5].text, /18 × 3 = 54/);
});

test('Transformation geometry: images and the 3D counts are true', () => {
  assert.deepEqual(translate([[1, 1]], 4, 2), [[5, 3]]);
  assert.deepEqual(reflectInVertical([[1, 1]], 5), [[9, 1]]);
  assert.deepEqual(rotate90cw([[4, 5]], 4, 2), [[7, 2]]);
  assert.deepEqual(POLYHEDRA['triangular prism'], { faces: 5, edges: 9, vertices: 6 });
  assert.match(transform[0].text, /A′ \(5, 3\)/);
  assert.match(transform[1].text, /A′ is \(9, 1\)/);
  assert.match(transform[2].text, /A′ is \(7, 2\)/);
  assert.match(transform[3].text, /The image is 4 by 2/);
  assert.match(transform[4].text, /5 faces , 9 edges, 6 vertices|5 faces, 9 edges, 6 vertices/);
  assert.match(transform[4].text, /8 vertices/);
  assert.match(transform[4].text, /5 \+ 6 − 9 = 2/);
  assert.match(transform[5].text, /\(7, 2\)/);
  assert.match(transform[5].text, /\(7, 4\)/);
  assert.match(transform[5].text, /9 by 6/);
});

test('Data handling: mean, median, mode, range, bar values and pie angles are true', () => {
  assert.equal(stats([6, 8, 10]).mean, 8);
  assert.equal(stats([4, 1, 9, 2, 7]).median, 4);
  assert.deepEqual(stats([2, 3, 3, 4, 5]).modes, [3]);
  assert.equal(stats([12, 8, 15, 10]).range, 7);
  assert.equal(percentOf(10, 40), 25);
  assert.equal(sectorAngle(10, 40), 90);
  assert.deepEqual(turnFraction(135), { n: 3, d: 8 });
  const c = stats([5, 9, 7, 9, 10]);
  assert.deepEqual([c.mean, c.median, c.modes[0], c.range], [8, 9, 9, 5]);
  assert.match(data[0].text, /24 ÷ 3 = 8/);
  assert.match(data[0].text, /12 ÷ 3 = 4/);
  assert.match(data[1].text, /1, 2, 4, 7, 9/);
  assert.match(data[1].text, /the mode is 3/);
  assert.match(data[2].text, /15 − 8 = 7/);
  assert.match(data[3].text, /4 × 5 = 20 learners/);
  assert.match(data[4].text, /10 out of 40 = 1\/4/);
  assert.match(data[4].text, /= 25%/);
  assert.match(data[4].text, /= 90°/);
  assert.match(data[5].text, /Mean 40 ÷ 5 = 8/);
  assert.match(data[5].text, /median 9, mode 9, range 10 − 5 = 5/);
  assert.match(data[5].text, /= 25%/);
  assert.match(data[5].text, /3 × 10 = 30/);
  assert.match(data[5].text, /135\/360 = 3\/8/);
});

test('Patterns, functions and algebra consolidation: rules, values and solutions are true', () => {
  assert.deepEqual(linearRule([1, 2, 3, 4], [4, 7, 10, 13]), { m: 3, c: 1 });
  assert.equal(geometricTerms(5, 2, 4)[3], 40);
  assert.equal(evalLinear(3, -2, 6), 16);
  assert.equal(termsText(collectLike([{ coef: 2, letter: 'x' }, { coef: 5, letter: '' }, { coef: -1, letter: 'x' }, { coef: 3, letter: '' }])), 'x + 8');
  assert.equal(solveLinear(2, 3, 11).x, 4);
  assert.equal(solveLinear(3, -4, 17).x, 7);
  assert.match(consolidation[0].text, /Tn = 3n \+ 1/);
  assert.match(consolidation[0].text, /20 × 2 = 40/);
  assert.match(consolidation[1].text, /18 − 2 = 16/);
  assert.match(consolidation[1].text, /2 \+ 25 = 27/);
  assert.match(consolidation[2].text, /Together: x \+ 8/);
  assert.match(consolidation[3].text, /8 ÷ 2 = 4/);
  assert.match(consolidation[3].text, /3 × 4 = 12/);
  assert.match(consolidation[3].text, /5,5/);
  assert.match(consolidation[3].text, /x \+ 3 = 5,5 \(the 3 was not divided\)/);
  assert.equal(11 / 2, 5.5); // the wrong right-hand side named in the mistake
  assert.notEqual(5.5 - 3, solveLinear(2, 3, 11).x); // x + 3 = 5,5 would give 2,5, not 4
  assert.equal(solveLinear(2, 3, 11).afterB, 8);
  assert.match(consolidation[4].text, /The rule is y = 2x/);
  assert.match(consolidation[5].text, /Tn = 5n − 1/);
  assert.match(consolidation[5].text, /6a \+ 4/);
  assert.match(consolidation[5].text, /x = 7/);
  assert.match(consolidation[5].text, /= 19/);
  for (const s of consolidation) assert.ok(!/\d\.\d/.test(s.text.replace(/\d\.\s/g, '')), `${s.title}: no decimal points in the text`);
});
