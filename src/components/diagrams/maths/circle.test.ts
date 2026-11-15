import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { circleFacts, num, onCircle, shifted } from './circle';

test('a positive centre coordinate gives a minus, a negative one gives a plus', () => {
  assert.equal(shifted('x', 2), 'x − 2');
  assert.equal(shifted('y', -1), 'y + 1');
  assert.equal(shifted('x', 0), 'x');
});

test('centre (2; -1), radius 3: (x - 2)^2 + (y + 1)^2 = 9', () => {
  const f = circleFacts(2, -1, 3);
  assert.equal(f.equation, '(x − 2)² + (y + 1)² = 9');
  assert.equal(f.centre, '(2; −1)');
});

test('the right side is r squared, and the circle really passes through the points the picture draws', () => {
  const { a, b, r } = circleFacts(2, -1, 3);
  for (const [x, y] of [[a + r, b], [a - r, b], [a, b + r], [a, b - r]]) assert.ok(onCircle(x, y, a, b, r));
  assert.ok(!onCircle(a + r + 1, b, a, b, r));
  assert.ok(onCircle(5, -1, 2, -1, 3));
});

test('a centre on an axis drops that term\'s shift, and bad input is refused', () => {
  assert.equal(circleFacts(0, 0, 5).equation, '(x)² + (y)² = 25');
  assert.throws(() => circleFacts(1.5, 0, 2));
  assert.throws(() => circleFacts(0, 0, 0));
  assert.equal(num(-4), '−4');
});

test('the lesson shows the picture next to its (x-a)^2 + (y-b)^2 = r^2 form', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade12/mathematics/term2/analytical-geometry-circle/AnalyticalGeometryCircle.tsx'), 'utf8');
  assert.ok(lesson.includes('CircleCentreRadius'));
  assert.ok(lesson.includes('(x-a)^2 + (y-b)^2 = r^2'));
});
