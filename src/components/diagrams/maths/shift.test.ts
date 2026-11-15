import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { P, Q, asymptotes, hyperbola, parabola, pieces, vertex } from './shift';

test('y = (x - p)^2 + q is y = x^2 moved p right and q up, at every x', () => {
  const base = parabola(1, 0, 0);
  const moved = parabola(1, P, Q);
  for (const x of [-3, -1, 0, 1.5, 2, 4, 6]) assert.ok(Math.abs(moved(x) - (base(x - P) + Q)) < 1e-12);
});

test('the vertex of the lesson example is (2; 1), the lowest point', () => {
  assert.deepEqual(vertex(P, Q), [2, 1]);
  const f = parabola(1, P, Q);
  assert.equal(f(2), 1);
  for (const x of [-1, 0, 1, 1.9, 2.1, 3, 5]) assert.ok(f(x) > 1);
});

test('the hyperbola is undefined at x = p and tends to y = q far from the centre', () => {
  const f = hyperbola(1, P, Q);
  assert.deepEqual(asymptotes(P, Q), { x: 2, y: 1 });
  assert.equal(Math.abs(f(P)), Infinity);
  assert.ok(Math.abs(f(2000) - Q) < 0.001);
  assert.ok(Math.abs(f(-1996) - Q) < 0.001);
});

test('pieces splits the hyperbola into its two branches, one each side of x = 2', () => {
  const p = pieces(hyperbola(1, P, Q), -3, 6, -4, 5);
  assert.equal(p.length, 2);
  assert.ok(p[0].every(([x]) => x < P));
  assert.ok(p[1].every(([x]) => x > P));
  assert.ok(p.flat().every(([, y]) => y >= -4 && y <= 5));
});

test('the picture uses the same shift as the lesson text: (x-2)^2 + 1, 2 units right and 1 unit up', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade11/mathematics/term2/functions/Functions.tsx'), 'utf8');
  const m = /y = \(x-(\d+)\)\^2 \+ (\d+)/.exec(lesson);
  assert.ok(m, 'the lesson gives the example');
  assert.equal(Number(m![1]), P);
  assert.equal(Number(m![2]), Q);
  assert.ok(lesson.includes('TransformationsShift'));
});
