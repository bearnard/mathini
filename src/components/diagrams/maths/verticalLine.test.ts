import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SIDEWAYS, SQUARE, meetsOnce } from './verticalLine';

test('y = x^2: any vertical line meets it exactly once', () => {
  for (const c of [-2, -1.5, 0, 1.5, 2]) assert.equal(SQUARE.outputsAt(c).length, 1);
  assert.deepEqual(SQUARE.outputsAt(1.5), [2.25]);
});

test('x = y^2: the line x = 1.5 meets it twice, at plus and minus the square root', () => {
  const ys = SIDEWAYS.outputsAt(1.5);
  assert.equal(ys.length, 2);
  assert.ok(Math.abs(ys[0] + ys[1]) < 1e-9, 'symmetric about the x axis');
  assert.ok(Math.abs(ys[0] ** 2 - 1.5) < 1e-6);
  assert.deepEqual(SIDEWAYS.outputsAt(0), [0]);
  assert.deepEqual(SIDEWAYS.outputsAt(-1), []);
});

test('only the first passes the test at the line the picture uses', () => {
  assert.ok(meetsOnce(SQUARE, 1.5));
  assert.ok(!meetsOnce(SIDEWAYS, 1.5));
});

test('the drawn points really lie on each relation', () => {
  for (const [x, y] of SQUARE.points(20)) assert.ok(Math.abs(y - x * x) < 1e-9);
  for (const [x, y] of SIDEWAYS.points(20)) assert.ok(Math.abs(x - y * y) < 1e-9);
});

test('the lesson shows the picture beside its vertical-line test sentence', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade12/mathematics/term1/functions-inverse-functions/FunctionsInverseFunctions.tsx'), 'utf8');
  assert.ok(lesson.includes('VerticalLineTest'));
  assert.ok(lesson.includes('vertical-line test'));
});
