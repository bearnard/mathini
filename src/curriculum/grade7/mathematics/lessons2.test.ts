import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { collectLike, cubeMeasures, evalLinear, evaluate, linearRule, prismSurface, runBackwards, solveLinear, termsText, trends, volumeScale } from '../../../components/diagrams/maths/grade7Helpers2';
import { applyRules } from '../../../components/diagrams/maths/mathsHelpers';

// Branch 2 of the Grade 7 Maths lesson rewrite: the numbers shown in each lesson (docs/notes/lesson-standard.md).

stubCss();
const functions = renderSlides((await import('./term2/functions-and-relationships/FunctionsAndRelationships')).learnSteps);
const solids = renderSlides((await import('./term2/surface-area-and-volume-of-3d-objects/SurfaceAreaAndVolumeOf3DObjects')).learnSteps);
const algebra = renderSlides((await import('./term3/functions-algebraic-expressions-and-equations/FunctionsAlgebraicExpressionsAndEquations')).learnSteps);
const graphs = renderSlides((await import('./term3/graphs/Graphs')).learnSteps);

test('every lesson in the branch has the standard shape', () => {
  for (const s of [functions, solids, algebra, graphs]) assertLessonShape(s);
});

test('Functions and relationships: flow diagrams, formulas, rules and inverses are true', () => {
  assert.equal(applyRules([{ op: '×', n: 2 }, { op: '+', n: 3 }], 6), 15);
  assert.equal(evalLinear(2, 1, 4), 9);
  assert.equal(evalLinear(1, -2, 9), 7);
  assert.deepEqual(linearRule([1, 2, 3], [4, 7, 10]), { m: 3, c: 1 });
  assert.deepEqual(linearRule([1, 2, 3], [7, 9, 11]), { m: 2, c: 5 });
  assert.equal(runBackwards([{ op: '×', n: 4 }, { op: '+', n: 1 }], 29)[1].value, 7);
  assert.match(functions[0].text, /12 \+ 3 = 15/);
  assert.match(functions[0].text, /9 × 2 = 18/);
  assert.match(functions[1].text, /8 \+ 1 = 9/);
  assert.match(functions[1].text, /9 − 2 = 7/);
  assert.match(functions[2].text, /The rule is y = 3x \+ 1/);
  assert.match(functions[3].text, /15 − 3 = 12/);
  assert.match(functions[3].text, /12 ÷ 2 = 6/);
  assert.match(functions[3].text, /20 ÷ 4 = 5/);
  assert.match(functions[4].text, /15 − 4 = 11/);
  assert.match(functions[4].text, /y = 2x \+ 5/);
  assert.match(functions[4].text, /28 ÷ 4 = 7/);
});

test('Surface area and volume: nets, surface areas and volumes are true', () => {
  assert.deepEqual(cubeMeasures(2), { face: 4, surface: 24, volume: 8 });
  assert.equal(cubeMeasures(4).volume, 64);
  assert.deepEqual(prismSurface(5, 3, 2), { lb: 15, lh: 10, bh: 6, surface: 62, volume: 30 });
  assert.deepEqual(prismSurface(4, 2, 3), { lb: 8, lh: 12, bh: 6, surface: 52, volume: 24 });
  assert.deepEqual(cubeMeasures(3), { face: 9, surface: 54, volume: 27 });
  assert.equal(volumeScale(3), 27);
  assert.match(solids[0].text, /6 squares/);
  assert.match(solids[1].text, /6 × 4 = 24 cm²/);
  assert.match(solids[2].text, /2 × \(15 \+ 10 \+ 6\) = 2 × 31 = 62 cm²/);
  assert.match(solids[3].text, /15 × 2 = 30 cm³/);
  assert.match(solids[4].text, /4 × 4 × 4 = 64 cm³/);
  assert.match(solids[4].text, /64 ÷ 8 = 8/);
  assert.match(solids[5].text, /= 54 cm²/);
  assert.match(solids[5].text, /= 52 cm²/);
  assert.match(solids[5].text, /= 24 cm³/);
  assert.match(solids[5].text, /27 times/);
});

test('Algebraic expressions and equations: substitution, like terms and solutions are true', () => {
  assert.equal(evaluate([{ coef: 2, letter: 'a' }, { coef: 3, letter: '' }], 4), 11);
  assert.equal(termsText(collectLike([{ coef: 3, letter: 'x' }, { coef: 2, letter: 'x' }])), '5x');
  assert.equal(termsText(collectLike([{ coef: 4, letter: 'y' }, { coef: 3, letter: '' }, { coef: -2, letter: 'y' }])), '2y + 3');
  assert.equal(solveLinear(1, 7, 15).x, 8);
  assert.equal(solveLinear(3, 0, 21).x, 7);
  assert.equal(solveLinear(2, 5, 17).x, 6);
  assert.match(algebra[0].text, /n − 5/);
  assert.match(algebra[1].text, /8 \+ 3 = 11/);
  assert.match(algebra[1].text, /2 × 5 = 10/);
  assert.match(algebra[1].text, /= 14/);
  assert.match(algebra[2].text, /so 5x/);
  assert.match(algebra[2].text, /stays: 2y \+ 3/);
  assert.match(algebra[3].text, /15 − 7 = 8/);
  assert.match(algebra[3].text, /21 ÷ 3 = 7/);
  assert.match(algebra[4].text, /15 − 2 = 13/);
  assert.match(algebra[4].text, /so 4a \+ 2b/);
  assert.match(algebra[4].text, /12 ÷ 2 = 6/);
});

test('Graphs: coordinates, axes, the table rule and the trends are true', () => {
  assert.deepEqual(linearRule([1, 2, 3], [2, 4, 6]), { m: 2, c: 0 });
  assert.deepEqual(trends([[0, 0], [10, 800], [15, 800], [25, 0]]), ['increasing', 'constant', 'decreasing']);
  assert.match(graphs[0].text, /x-coordinate: 3/);
  assert.match(graphs[1].text, /lies on the x-axis/);
  assert.match(graphs[1].text, /lies on the y-axis/);
  assert.match(graphs[2].text, /the rule is y = 2x/);
  assert.match(graphs[3].text, /15 − 10 = 5 minutes/);
  assert.match(graphs[4].text, /\( 4, 12 \)|\(4, 12\)/);
});
