import test from 'node:test';
import assert from 'node:assert/strict';
import * as t from './grade6Transform';

test('translation, reflection and rotation of points', () => {
  assert.deepEqual(t.translate([[2, 1], [4, 1]], 3, 1), [[5, 2], [7, 2]]);
  assert.equal(t.corner(t.translate([[2, 1]], 3, 1)[0]), 'F3');
  assert.equal(t.corner(t.reflectInVertical([[1, 2]], 3)[0]), 'F3'); // B3 in the mirror down the middle of column D
  assert.equal(t.corner(t.reflectInHorizontal([[2, 1]], 3.5)[0]), 'C7');
  assert.deepEqual(t.reflectInVertical([[1, 2]], 3), [[5, 2]]);
  assert.deepEqual(t.reflectInHorizontal([[2, 1]], 3), [[2, 5]]);
  assert.deepEqual(t.rotateQuarter([[3, 2]], [2, 2], 1), [[2, 3]]); // right of the centre goes below it
  assert.deepEqual(t.rotateQuarter([[3, 2]], [2, 2], 2), [[1, 2]]);
  assert.deepEqual(t.rotateQuarter([[3, 2]], [2, 2], 4), [[3, 2]]);
  assert.deepEqual(t.rotateQuarter([[3, 2]], [2, 2], 3), [[2, 1]]);
  // lengths are kept by all three moves
  const tri: t.Pt[] = [[0, 0], [3, 0], [0, 4]];
  const len = (p: t.Pt[]) => p.map((_, i) => Math.hypot(p[(i + 1) % p.length][0] - p[i][0], p[(i + 1) % p.length][1] - p[i][1])).sort();
  for (const img of [t.translate(tri, 5, 2), t.reflectInVertical(tri, 6), t.rotateQuarter(tri, [1, 1], 1)]) assert.deepEqual(len(img), len(tri));
});

test('enlargements and reductions', () => {
  assert.deepEqual(t.scaleLengths([3, 4, 5], 2, 1), [6, 8, 10]);
  assert.deepEqual(t.scaleLengths([12, 8], 1, 2), [6, 4]);
  assert.deepEqual(t.scaleFrom([[0, 0], [3, 0], [0, 4]], 2, 1), [[0, 0], [6, 0], [0, 8]]);
  assert.equal(t.perimeter([3, 4, 5]), 12);
  assert.equal(t.perimeter(t.scaleLengths([3, 4, 5], 2, 1)), 24);
  assert.equal(t.rectArea(3, 5), 15);
  assert.equal(t.rectArea(6, 10), 60);
  assert.equal(t.areaFactor(2), 4);
  assert.equal(t.areaFactor(3), 9);
  assert.equal(t.rectArea(12, 8), 96);
  assert.equal(t.rectArea(6, 4), 24);
  for (const k of [2, 3, 4]) assert.equal(t.rectArea(3 * k, 5 * k), t.rectArea(3, 5) * t.areaFactor(k));
  assert.equal(t.triangleAreaTwice(3, 4) / 2, 6);
});
