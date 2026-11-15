import test from 'node:test';
import assert from 'node:assert/strict';
import { groupCounts, mean, median, modes, range, relativeFrequency, sorted, stemLeaf, sum } from './grade8DataHelpers';

test('mean, median, mode and range', () => {
  assert.equal(sum([2, 4, 6, 8]), 20);
  assert.equal(mean([2, 4, 6, 8]), 5);
  assert.deepEqual(median([3, 11, 5, 9]), { value: 7, middle: [5, 9] });
  assert.deepEqual(median([7, 3, 9, 3, 8]), { value: 7, middle: [7] });
  assert.deepEqual(modes([1, 2, 2, 3]), [2]);
  assert.deepEqual(modes([1, 2, 3]), []);
  assert.equal(range([9, 12, 14, 20]), 11);
  assert.deepEqual(sorted([3, 1, 2]), [1, 2, 3]);
});

test('stem-and-leaf, grouping and relative frequency', () => {
  assert.deepEqual(stemLeaf([34, 23, 45, 31, 38, 27, 34, 47, 42]), [
    { stem: 2, leaves: [3, 7] },
    { stem: 3, leaves: [1, 4, 4, 8] },
    { stem: 4, leaves: [2, 5, 7] },
  ]);
  const heights = [142, 147, 151, 153, 155, 156, 158, 159, 160, 161, 162, 163, 164, 166, 167, 169, 171, 172, 175, 178];
  assert.deepEqual(groupCounts(heights, 140, 10, 4).map((g) => g.count), [2, 6, 8, 4]);
  assert.deepEqual(relativeFrequency(6, 30), { decimal: 0.2, percent: 20 });
  assert.deepEqual(relativeFrequency(9, 36), { decimal: 0.25, percent: 25 });
});
