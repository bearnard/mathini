import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { countingTree, outcomeCount } from './counting';

test('the number of leaves is m x n, counted from the tree itself', () => {
  for (const [m, n] of [[3, 2], [1, 1], [2, 4], [5, 3]]) assert.equal(outcomeCount(countingTree(m, n)), m * n);
});

test('3 x 2: three branches of two, six distinct outcomes in order', () => {
  const t = countingTree(3, 2);
  assert.equal(t.length, 3);
  assert.ok(t.every((b) => b.leaves.length === 2));
  assert.deepEqual(t.flatMap((b) => b.leaves.map((l) => l.outcome)), ['AX', 'AY', 'BX', 'BY', 'CX', 'CY']);
});

test('bad sizes are refused', () => {
  assert.throws(() => countingTree(0, 2));
  assert.throws(() => countingTree(2, 1.5));
  assert.throws(() => countingTree(6, 2));
});

test('the lesson shows the tree next to its m x n sentence', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade12/mathematics/term3/counting-probability/CountingProbability.tsx'), 'utf8');
  assert.ok(lesson.includes('CountingTree'));
  assert.ok(lesson.includes('m \\times n'));
});
