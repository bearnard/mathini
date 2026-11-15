import test from 'node:test';
import assert from 'node:assert/strict';
import {
  complement, cube, cylinder, enlarge, euler, frequencyTable, mean, median, modes, outcomePairs, pieAngles, POLYHEDRA, prismCounts,
  probability, pt, pyramidCounts, range, rectPrism, reflectInXAxis, reflectInYAxis, reflectInYEqualsX, rotate180, rotate90, sa, translate,
} from './grade9SpaceDataHelpers';

test('formatting', () => {
  assert.equal(sa(125.6), '125,6');
  assert.equal(sa(-3), '−3');
  assert.equal(pt({ x: -3, y: 4 }), '(−3, 4)');
  assert.equal(pt(reflectInYAxis({ x: 0, y: 2 })), '(0, 2)');
});

test('surface area and volume', () => {
  assert.deepEqual(rectPrism(5, 3, 4), { base: 15, volume: 60, faces: { lb: 15, lh: 20, bh: 12 }, surface: 94 });
  assert.equal(rectPrism(2, 3, 5).volume, 30);
  assert.deepEqual(rectPrism(6, 2, 3), { base: 12, volume: 36, faces: { lb: 12, lh: 18, bh: 6 }, surface: 72 });
  assert.deepEqual(cube(2), { face: 4, surface: 24, volume: 8 });
  assert.deepEqual(cube(3), { face: 9, surface: 54, volume: 27 });
  assert.deepEqual(cube(4), { face: 16, surface: 96, volume: 64 });
  assert.deepEqual(cube(5), { face: 25, surface: 150, volume: 125 });
  assert.deepEqual(cylinder(2, 10), { rSquared: 4, base: 12.56, volume: 125.6, circumference: 12.56, curved: 125.6, surface: 150.72, twoBases: 25.12 });
  assert.equal(cylinder(3, 5).volume, 141.3);
});

test('polyhedra and Euler', () => {
  assert.deepEqual(prismCounts(4), POLYHEDRA['rectangular prism']);
  assert.deepEqual(prismCounts(3), POLYHEDRA['triangular prism']);
  assert.deepEqual(pyramidCounts(4), POLYHEDRA['square pyramid']);
  assert.deepEqual(pyramidCounts(3), POLYHEDRA['triangular pyramid']);
  assert.deepEqual(prismCounts(6), { faces: 8, edges: 18, vertices: 12 });
  assert.equal(pyramidCounts(5).faces, 6);
  for (const p of Object.values(POLYHEDRA)) assert.ok(euler(p).holds);
  assert.deepEqual(euler(POLYHEDRA.cube), { left: 14, right: 14, holds: true });
  assert.deepEqual(euler(POLYHEDRA['triangular prism']), { left: 11, right: 11, holds: true });
  assert.deepEqual(euler(POLYHEDRA['square pyramid']), { left: 10, right: 10, holds: true });
});

test('data handling', () => {
  assert.equal(median([3, 5, 7, 9, 11]), 7);
  assert.equal(median([4, 8, 12, 16]), 10);
  assert.equal(median([9, 3, 11, 5, 7]), 7);
  assert.equal(mean([4, 8, 12, 16]), 10);
  assert.deepEqual(modes([2, 5, 5, 7, 9]), [5]);
  assert.deepEqual(modes([1, 2, 3]), []);
  assert.deepEqual(range([3, 8, 12, 5, 20]), { min: 3, max: 20, range: 17 });
  assert.equal(mean([1, 2, 3, 4, 100]), 22);
  assert.equal(median([1, 2, 3, 4, 100]), 3);
  assert.deepEqual(frequencyTable([{ value: 1, freq: 5 }, { value: 2, freq: 3 }, { value: 3, freq: 2 }]), { total: 10, products: [5, 6, 6], sum: 17, mean: 1.7 });
  assert.deepEqual(pieAngles([20, 12, 8]), [180, 108, 72]);
  assert.equal(mean([6, 2, 9, 4, 9]), 6);
  assert.equal(median([6, 2, 9, 4, 9]), 6);
  assert.deepEqual(modes([6, 2, 9, 4, 9]), [9]);
  assert.equal(range([6, 2, 9, 4, 9]).range, 7);
});

test('probability', () => {
  assert.deepEqual(probability(1, 6).simplest, { n: 1, d: 6 });
  assert.deepEqual(probability(3, 5).simplest, { n: 3, d: 5 });
  assert.deepEqual(probability(13, 52).simplest, { n: 1, d: 4 });
  assert.equal(complement(0.3), 0.7);
  assert.equal(complement(0.85), 0.15);
  assert.deepEqual(outcomePairs(['H', 'T'], ['H', 'T']), ['HH', 'HT', 'TH', 'TT']);
  assert.deepEqual(probability(2, 4).simplest, { n: 1, d: 2 });
  assert.deepEqual(probability(4, 6).simplest, { n: 2, d: 3 });
  assert.equal(probability(23, 50).decimal, 0.46);
  assert.deepEqual(probability(4, 10).simplest, { n: 2, d: 5 });
  assert.equal(outcomePairs(['H', 'T'], ['1', '2', '3', '4', '5', '6']).length, 12);
  assert.deepEqual(probability(4, 52).simplest, { n: 1, d: 13 });
});

test('transformations', () => {
  assert.deepEqual(translate({ x: 2, y: 3 }, 3, 2), { x: 5, y: 5 });
  assert.deepEqual(reflectInYAxis({ x: 3, y: 4 }), { x: -3, y: 4 });
  assert.deepEqual(reflectInXAxis({ x: 3, y: 4 }), { x: 3, y: -4 });
  assert.deepEqual(reflectInYEqualsX({ x: 2, y: 2 }), { x: 2, y: 2 });
  assert.deepEqual(reflectInYEqualsX({ x: 2, y: 5 }), { x: 5, y: 2 });
  assert.deepEqual(rotate90({ x: 1, y: 0 }), { x: 0, y: 1 });
  assert.deepEqual(rotate90({ x: 2, y: 1 }), { x: -1, y: 2 });
  assert.deepEqual(rotate180({ x: 2, y: 1 }), { x: -2, y: -1 });
  assert.deepEqual(enlarge({ x: 3, y: 1 }, 2), { x: 6, y: 2 });
  assert.deepEqual(enlarge({ x: 4, y: 6 }, 1 / 2), { x: 2, y: 3 });
  assert.deepEqual(translate({ x: -1, y: 4 }, 5, -3), { x: 4, y: 1 });
  assert.deepEqual(reflectInXAxis({ x: 5, y: -2 }), { x: 5, y: 2 });
  assert.deepEqual(reflectInYEqualsX({ x: 5, y: -2 }), { x: -2, y: 5 });
  assert.deepEqual(rotate90({ x: 3, y: 2 }), { x: -2, y: 3 });
  assert.deepEqual(enlarge({ x: 6, y: -3 }, 1 / 3), { x: 2, y: -1 });
});
