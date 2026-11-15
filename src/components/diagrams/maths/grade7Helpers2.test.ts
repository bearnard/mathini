import test from 'node:test';
import assert from 'node:assert/strict';
import {
  axisPlace, collectLike, cubeMeasures, differences, evalLinear, evaluate, inverseRule, linearRule, prismSurface, ruleFormula,
  runBackwards, solveLinear, termsText, trends, volumeScale,
  barValue, commonDifference, commonRatio, enlarge, geometricTerms, linearTerms, percentOf, plusStage, POLYHEDRA, reflectInVertical,
  rotate90cw, sectorAngle, sideLengths, translate, turnFraction,
} from './grade7Helpers2';

test('linearRule finds y = 3x + 1 and y = 2x, and refuses a table no straight rule fits', () => {
  assert.deepEqual(linearRule([1, 2, 3], [4, 7, 10]), { m: 3, c: 1 });
  assert.deepEqual(linearRule([1, 2, 3], [2, 4, 6]), { m: 2, c: 0 });
  assert.equal(linearRule([1, 2, 3], [1, 4, 9]), null);
  assert.equal(ruleFormula(3, 1), 'y = 3x + 1');
  assert.equal(ruleFormula(2, 0), 'y = 2x');
  assert.equal(ruleFormula(1, -2), 'y = x − 2');
  assert.deepEqual(differences([4, 7, 10]), [3, 3]);
});

test('evaluating rules and running a flow diagram backwards', () => {
  assert.equal(evalLinear(2, 1, 4), 9);
  assert.equal(evalLinear(1, -2, 9), 7);
  assert.equal(evalLinear(2, 0, 5), 10);
  assert.deepEqual(inverseRule({ op: '+', n: 5 }), { op: '−', n: 5 });
  assert.deepEqual(inverseRule({ op: '×', n: 4 }), { op: '÷', n: 4 });
  assert.deepEqual(runBackwards([{ op: '×', n: 2 }, { op: '+', n: 3 }], 15), [
    { rule: { op: '−', n: 3 }, value: 12 },
    { rule: { op: '÷', n: 2 }, value: 6 },
  ]);
});

test('collecting like terms and substitution', () => {
  assert.equal(termsText(collectLike([{ coef: 3, letter: 'x' }, { coef: 2, letter: 'x' }])), '5x');
  assert.equal(termsText(collectLike([{ coef: 4, letter: 'y' }, { coef: 3, letter: '' }, { coef: -2, letter: 'y' }])), '2y + 3');
  assert.equal(termsText(collectLike([{ coef: 5, letter: 'a' }, { coef: 2, letter: 'b' }, { coef: -1, letter: 'a' }])), '4a + 2b');
  assert.equal(termsText([{ coef: 1, letter: 'n' }, { coef: -5, letter: '' }]), 'n − 5');
  assert.equal(evaluate([{ coef: 2, letter: 'a' }, { coef: 3, letter: '' }], 4), 11);
});

test('solving equations by doing the same to both sides', () => {
  assert.deepEqual(solveLinear(1, 7, 15), { afterB: 8, x: 8 });
  assert.deepEqual(solveLinear(3, 0, 21), { afterB: 21, x: 7 });
  assert.deepEqual(solveLinear(4, 0, 20), { afterB: 20, x: 5 });
  assert.deepEqual(solveLinear(2, 5, 17), { afterB: 12, x: 6 });
  assert.throws(() => solveLinear(2, 0, 7));
});

test('points on the axes and the trend of each piece of a graph', () => {
  assert.equal(axisPlace(5, 0), 'x-axis');
  assert.equal(axisPlace(0, 4), 'y-axis');
  assert.equal(axisPlace(0, 0), 'origin');
  assert.equal(axisPlace(3, 2), 'neither');
  assert.deepEqual(trends([[0, 0], [10, 800], [15, 800], [25, 0]]), ['increasing', 'constant', 'decreasing']);
});

test('cube and prism surface area and volume', () => {
  assert.deepEqual(cubeMeasures(2), { face: 4, surface: 24, volume: 8 });
  assert.deepEqual(cubeMeasures(4), { face: 16, surface: 96, volume: 64 });
  assert.deepEqual(prismSurface(5, 3, 2), { lb: 15, lh: 10, bh: 6, surface: 62, volume: 30 });
  assert.equal(volumeScale(2), 8);
  assert.equal(cubeMeasures(4).volume / cubeMeasures(2).volume, volumeScale(2));
});

// ---------- batch 3 ----------

test('patterns: terms from a rule, constant difference and constant ratio', () => {
  assert.deepEqual(linearTerms(3, 2, 4), [5, 8, 11, 14]);
  assert.deepEqual(linearTerms(3, 1, 4), [4, 7, 10, 13]);
  assert.equal(linearTerms(2, 1, 10)[9], 21);
  assert.equal(linearTerms(4, 1, 6)[5], 25);
  assert.deepEqual(geometricTerms(2, 2, 5), [2, 4, 8, 16, 32]);
  assert.deepEqual(geometricTerms(5, 2, 4), [5, 10, 20, 40]);
  assert.equal(commonRatio([2, 4, 8, 16]), 2);
  assert.equal(commonRatio([2, 4, 6, 8]), null);
  assert.equal(commonDifference([30, 27, 24, 21]), -3);
  assert.equal(commonDifference([1, 4, 9, 16]), null);
  assert.equal(plusStage(1).length, 5);
  assert.equal(plusStage(3).length, 13);
  assert.equal(plusStage(6).length, 25);
});

test('transformations keep the shape and size; an enlargement keeps the shape only', () => {
  const tri: [number, number][] = [[1, 1], [3, 1], [1, 4]];
  assert.deepEqual(translate(tri, 4, 2), [[5, 3], [7, 3], [5, 6]]);
  assert.deepEqual(reflectInVertical(tri, 5), [[9, 1], [7, 1], [9, 4]]);
  assert.deepEqual(rotate90cw([[1, 0], [0, 1]], 0, 0), [[0, -1], [1, 0]]);
  assert.deepEqual(rotate90cw([[5, 4]], 4, 2), [[6, 1]]);
  for (const img of [translate(tri, 4, 2), reflectInVertical(tri, 5), rotate90cw(tri, 4, 2)]) {
    assert.deepEqual([...sideLengths(img)].sort(), [...sideLengths(tri)].sort());
  }
  const rect: [number, number][] = [[1, 1], [3, 1], [3, 2], [1, 2]];
  assert.deepEqual(sideLengths(enlarge(rect, 2, 1, 1)), sideLengths(rect).map((s) => 2 * s));
});

test('polyhedra satisfy Euler: F + V − E = 2', () => {
  for (const p of Object.values(POLYHEDRA)) assert.equal(p.faces + p.vertices - p.edges, 2);
  assert.equal(POLYHEDRA['triangular prism'].faces, 5);
  assert.equal(POLYHEDRA.cube.vertices, 8);
});

test('data: percentages, sector angles and bar values', () => {
  assert.equal(percentOf(10, 40), 25);
  assert.equal(sectorAngle(10, 40), 90);
  assert.deepEqual(turnFraction(90), { n: 1, d: 4 });
  assert.deepEqual(turnFraction(120), { n: 1, d: 3 });
  assert.equal(barValue(4, 5), 20);
});
