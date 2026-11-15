import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SOLID_FACTS, coinOutcomes, enlarge, euler, prismCounts, probability, pt, pyramidCounts, quadrant, reflectInX, reflectInY, rotate180, rotate90cw, translate,
} from './grade8SpaceHelpers';

test('solids: counts and Euler', () => {
  assert.deepEqual(prismCounts(3), { faces: 5, edges: 9, vertices: 6 });
  assert.deepEqual(prismCounts(4), { faces: 6, edges: 12, vertices: 8 });
  assert.deepEqual(prismCounts(6), { faces: 8, edges: 18, vertices: 12 });
  assert.deepEqual(pyramidCounts(4), { faces: 5, edges: 8, vertices: 5 });
  assert.deepEqual(pyramidCounts(3), { faces: 4, edges: 6, vertices: 4 });
  // the table agrees with the prism and pyramid formulas, and every polyhedron satisfies Euler
  const t = SOLID_FACTS['triangular prism'];
  assert.deepEqual({ faces: t.flat, edges: t.edges, vertices: t.vertices }, prismCounts(3));
  const p = SOLID_FACTS['square pyramid'];
  assert.deepEqual({ faces: p.flat, edges: p.edges, vertices: p.vertices }, pyramidCounts(4));
  for (const s of ['cube', 'triangular prism', 'square pyramid'] as const) assert.equal(euler(SOLID_FACTS[s].vertices, SOLID_FACTS[s].edges, SOLID_FACTS[s].flat), 2);
  assert.equal(euler(10, 15, 7), 2);
  assert.equal(SOLID_FACTS.sphere.edges, 0);
  assert.equal(SOLID_FACTS.cylinder.flat, 2);
});

test('the coordinate plane', () => {
  assert.equal(quadrant(-2, 3), 2);
  assert.equal(quadrant(3, -2), 4);
  assert.equal(quadrant(3, -4), 4);
  assert.equal(quadrant(-5, -1), 3);
  assert.equal(quadrant(0, 5), 0);
  assert.equal(pt(-2, 3), '(−2; 3)');
});

test('transformations', () => {
  assert.deepEqual(translate([2, -1], 3, 2), [5, 1]);
  assert.deepEqual(reflectInY([4, -3]), [-4, -3]);
  assert.deepEqual(reflectInX([4, -3]), [4, 3]);
  assert.deepEqual(rotate90cw([1, 2]), [2, -1]);
  assert.deepEqual(rotate90cw([3, 1]), [1, -3]);
  assert.deepEqual(rotate180([1, 2]), [-1, -2]);
  assert.deepEqual(enlarge([2, 3], 2), [4, 6]);
  assert.deepEqual(translate([-3, 4], 5, -2), [2, 2]);
  assert.deepEqual(reflectInX([-2, 5]), [-2, -5]);
});

test('probability', () => {
  assert.deepEqual(probability(1, 4), { n: 1, d: 4, decimal: 0.25, percent: 25 });
  assert.deepEqual(probability(75, 100), { n: 3, d: 4, decimal: 0.75, percent: 75 });
  assert.deepEqual(probability(8, 10), { n: 4, d: 5, decimal: 0.8, percent: 80 });
  assert.equal(probability(23, 50).decimal, 0.46);
  assert.deepEqual(coinOutcomes(2), ['HH', 'HT', 'TH', 'TT']);
  assert.equal(coinOutcomes(3).length, 8);
});
