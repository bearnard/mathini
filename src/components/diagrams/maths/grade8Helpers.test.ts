import test from 'node:test';
import assert from 'node:assert/strict';
import {
  additiveInverse, checkSolution, collect, commonDifference, commonRatio, cubeRoot, differences, expandBracket, linearRule, linearText,
  linearValue, repeatedJumps, solveBothSides, solveLinear, squareRoot, squaresAround, subtractAsAdd, termText,
} from './grade8Helpers';

test('integers: inverses, subtraction as adding the inverse, repeated jumps', () => {
  assert.equal(additiveInverse(15), -15);
  assert.equal(additiveInverse(-4), 4);
  assert.equal(additiveInverse(0), 0);
  assert.deepEqual(subtractAsAdd(2, 8), { inverse: -8, result: -6 });
  assert.deepEqual(subtractAsAdd(5, -3), { inverse: 3, result: 8 });
  assert.deepEqual(repeatedJumps(-4, 7), [-4, -8, -12, -16, -20, -24, -28]);
});

test('roots: perfect squares and cubes only', () => {
  assert.equal(squareRoot(49), 7);
  assert.equal(squareRoot(81), 9);
  assert.equal(squareRoot(45), null);
  assert.equal(squareRoot(-4), null);
  assert.equal(cubeRoot(64), 4);
  assert.equal(cubeRoot(-27), -3);
  assert.equal(cubeRoot(50), null);
  assert.deepEqual(squaresAround(45), { below: 36, above: 49, lowRoot: 6 });
});

test('patterns: differences, ratios and the general term', () => {
  assert.deepEqual(differences([1, 4, 9, 16, 25]), [3, 5, 7, 9]);
  assert.equal(commonDifference([4, 7, 10, 13]), 3);
  assert.equal(commonDifference([1, 4, 9]), null);
  assert.equal(commonRatio([3, 6, 12, 24]), 2);
  assert.equal(commonRatio([1, 4, 7]), null);
  assert.equal(commonRatio([0, 0, 0]), null);
  assert.deepEqual(linearRule([5, 9, 13, 17]), { d: 4, c: 1 });
  assert.deepEqual(linearRule([7, 12, 17, 22]), { d: 5, c: 2 });
  assert.equal(linearRule([1, 2, 4]), null);
  assert.equal(linearValue(4, 1, 4), 17);
  assert.equal(linearValue(4, -3, 5), 17);
});

test('linearText and termText write expressions with a real minus sign', () => {
  assert.equal(linearText(4, 1), '4n + 1');
  assert.equal(linearText(2, -1, 'x'), '2x − 1');
  assert.equal(linearText(1, 5, 'x'), 'x + 5');
  assert.equal(linearText(-1, 0, 'x'), '−x');
  assert.equal(linearText(3, 0, 'm'), '3m');
  assert.equal(termText({ n: 6, letter: 'y' }, true), '6y');
  assert.equal(termText({ n: -2 }, false), '− 2');
  assert.equal(termText({ n: 1, letter: 'y' }, false), '+ y');
  assert.equal(termText({ n: -3, letter: 'x' }, true), '−3x');
});

test('equations: solve, check, both sides, expand and collect', () => {
  assert.deepEqual(solveLinear(2, -4, 10), { rhs: 14, x: 7 });
  assert.deepEqual(solveLinear(-2, 5, -7), { rhs: -12, x: 6 });
  assert.throws(() => solveLinear(4, 0, 18));
  assert.throws(() => solveLinear(0, 1, 2));
  assert.deepEqual(solveBothSides(2, 7, 1, 15), { coef: 1, rhs: 8, x: 8 });
  assert.deepEqual(checkSolution(3, 1, 13, 4), { left: 13, ok: true });
  assert.deepEqual(checkSolution(2, -4, 10, 3), { left: 2, ok: false });
  assert.deepEqual(expandBracket(4, 1, 2), { a: 4, b: 8 });
  assert.deepEqual(expandBracket(3, 1, -4), { a: 3, b: -12 });
  assert.equal(collect([6, 1]), 7);
  assert.equal(collect([5, -2]), 3);
});
