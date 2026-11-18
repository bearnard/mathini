import test from 'node:test';
import assert from 'node:assert/strict';
import * as h from './grade9AlgebraT3';

// Identities are checked by evaluating both sides at many integer values (not by calling the helper on itself).
const XS = [-7, -4, -3, -2, -1, 0, 1, 2, 3, 5, 8];

test('polyText: real minus signs, x² style powers, coefficient 1 omitted', () => {
  assert.equal(h.polyText([-3, 0, 2]), '2x² − 3');
  assert.equal(h.polyText([6, 5, 1]), 'x² + 5x + 6');
  assert.equal(h.polyText([-6, -1, 1]), 'x² − x − 6');
  assert.equal(h.polyText([0, -5, 1]), 'x² − 5x');
  assert.equal(h.polyText([-1, 0, 0, 3]), '3x³ − 1');
  assert.equal(h.polyText([0]), '0');
  assert.equal(h.factorText(3), '(x + 3)');
  assert.equal(h.factorText(-5), '(x − 5)');
});

test('factorQuadratic: product of the factors expands back to the trinomial', () => {
  for (const [a, b, c] of [[1, 5, 6], [1, -5, 6], [1, -1, -6], [1, -6, 9], [2, 10, 12], [3, -3, -18], [1, 7, 12], [1, 2, -35]]) {
    const f = h.factorQuadratic(a, b, c)!;
    assert.ok(f, `${a},${b},${c}`);
    for (const x of XS) assert.equal(f.k * (x + f.p) * (x + f.q) + 0, a * x * x + b * x + c);
  }
  assert.deepEqual(h.factorQuadratic(1, 5, 6), { k: 1, p: 2, q: 3 });
  assert.deepEqual(h.factorQuadratic(1, -1, -6), { k: 1, p: -3, q: 2 });
  assert.deepEqual(h.factorQuadratic(2, 10, 12), { k: 2, p: 2, q: 3 });
  assert.deepEqual(h.factorQuadratic(1, -6, 9), { k: 1, p: -3, q: -3 });
  assert.equal(h.factorQuadratic(1, 1, 1), null);
  assert.equal(h.factorQuadratic(2, 3, 1), null);
});

test('common numerical factor and difference of two squares', () => {
  assert.equal(h.commonNumber([6, -4]), 2);
  assert.equal(h.commonNumber([-4, 6]), -2);
  assert.equal(h.commonNumber([12, 18, 30]), 6);
  const d = h.differenceOfSquares(5, 1);
  assert.deepEqual(d.expanded, [-1, 0, 25]);
  for (const x of XS) assert.equal(h.evalPoly(d.minus, x) * h.evalPoly(d.plus, x), 25 * x * x - 1);
  const e = h.differenceOfSquares(1, 5);
  for (const x of XS) assert.equal((x - 5) * (x + 5), h.evalPoly(e.expanded, x));
  // the number picture: 7² − 3² = 49 − 9 = 40 = (7 + 3)(7 − 3) = 10 × 4
  assert.equal(7 ** 2 - 3 ** 2, 40);
  assert.equal((7 + 3) * (7 - 3), 40);
});

test('polynomial arithmetic, evaluation and ordered pairs', () => {
  assert.deepEqual(h.mulPoly([2, 1], [3, 1]), [6, 5, 1]);
  assert.deepEqual(h.expandProduct(2, 2, 3), [12, 10, 2]);
  assert.equal(h.evalPoly([3, 4, 2], -2), 2 * 4 + 4 * -2 + 3);
  assert.equal(h.evalPoly([3, 4, 2], -2), 3);
  assert.deepEqual(h.orderedPairs([-3, 0, 2], [-2, -1, 0, 1, 2]), [[-2, 5], [-1, -1], [0, -3], [1, -1], [2, 5]]);
  // volume of the prism 2x by (2x + 1) by (2x + 3) at x = 1 is 2 × 3 × 5 = 30
  const v = h.volumeOfPrism([0, 2], [1, 2], [3, 2]);
  assert.equal(h.evalPoly(v, 1), 30);
  assert.equal(h.evalPoly(v, 2), 4 * 5 * 7);
  assert.equal(h.polyText(v), '8x³ + 16x² + 6x');
});

test('rootsOfFactors and the rectangle equation', () => {
  assert.deepEqual(h.rootsOfFactors(-3, 0), [0, 3]);
  assert.deepEqual(h.rootsOfFactors(5, -5), [-5, 5]);
  assert.deepEqual(h.rootsOfFactors(2, 3), [-3, -2]);
  assert.deepEqual(h.rootsOfFactors(-3, -3), [3]);
  const r = h.rectangleSide(3, 28); // x(x + 3) = 28
  assert.deepEqual(r.equation, [-28, 3, 1]);
  assert.equal(r.x, 4);
  assert.equal(4 * (4 + 3), 28);
  assert.equal(h.rectangleSide(1, 7).factors, null);
});

test('algebraic fractions simplify by cancelling the common factor (checked by evaluation)', () => {
  for (const x of XS.filter((v) => v !== -3 && v !== 1 / 3)) {
    // (2x + 6y)/(x + 3y) = 2 with y = 1: (2x + 6)/(x + 3)
    assert.equal((2 * x + 6) / (x + 3), 2);
  }
  for (const a of [2, 3, 5, 7]) assert.equal((9 * a * a - 1) / (3 * a + 1), 3 * a - 1);
  for (const [x, y] of [[3, 1], [5, 2], [9, 4]]) assert.equal((3 * x - 3 * y) / (6 * x - 6 * y), 1 / 2);
});
