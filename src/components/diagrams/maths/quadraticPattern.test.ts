import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { QUADRATIC, differences, frame, term, terms } from './quadraticPattern';

const here = path.dirname(fileURLToPath(import.meta.url));
const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade11/mathematics/term1/number-patterns/NumberPatterns.tsx'), 'utf8');

test('T(n) = n^2 + n + 1 gives 3, 7, 13, 21', () => {
  assert.deepEqual(terms(4), [3, 7, 13, 21]);
  assert.equal(term(1), 3);
  assert.equal(term(7), 57);
});

test('the dot frames hold exactly T(n) dots: n by (n + 1) plus one', () => {
  for (let n = 1; n <= 8; n++) {
    const f = frame(n);
    assert.equal(f.cols * f.rows + f.extra, term(n));
    assert.equal(f.total, term(n));
  }
});

test('first differences 4, 6, 8; the second difference is the constant 2, which is 2a so a = 1', () => {
  const first = differences(terms(4));
  const second = differences(first);
  assert.deepEqual(first, [4, 6, 8]);
  assert.deepEqual(second, [2, 2]);
  assert.equal(second[0], 2 * QUADRATIC.a);
});

test('the second difference is constant for any quadratic (and not for a cubic)', () => {
  const q = Array.from({ length: 8 }, (_, i) => term(i + 1, 3, -2, 5));
  const s = differences(differences(q));
  assert.ok(s.every((d) => d === 6)); // 2a = 6
  const cubic = Array.from({ length: 8 }, (_, i) => (i + 1) ** 3);
  assert.ok(!differences(differences(cubic)).every((d, _, arr) => d === arr[0]));
});

test('it is the same rule the lesson graphs on this slide: n^2 + n + 1', () => {
  assert.ok(lesson.includes('x ** 2 + x + 1'));
  assert.ok(lesson.includes('T(n) = n² + n + 1'));
  assert.ok(lesson.includes('second difference'));
});
