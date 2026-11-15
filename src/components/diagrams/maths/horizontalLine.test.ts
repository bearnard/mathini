import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { RESTRICTED, WHOLE, curvePoints, isOneToOne, meetingPoints } from './horizontalLine';

test('y = x^2 on all x: the line y = 2.25 meets it at -1.5 and 1.5, so it is not one-to-one', () => {
  assert.deepEqual(meetingPoints(2.25, WHOLE), [1.5, -1.5]);
  assert.ok(!isOneToOne(WHOLE));
});

test('restricted to x >= 0: the same line meets it once, at 1.5, so it is one-to-one', () => {
  assert.deepEqual(meetingPoints(2.25, RESTRICTED), [1.5]);
  assert.ok(isOneToOne(RESTRICTED));
});

test('edge cases: the vertex is met once either way, and a line below the graph meets nothing', () => {
  assert.deepEqual(meetingPoints(0, WHOLE), [0]);
  assert.deepEqual(meetingPoints(-1, WHOLE), []);
});

test('the drawn points lie on y = x^2, and the restricted curve has no points left of the y axis', () => {
  for (const [x, y] of curvePoints(WHOLE)) assert.ok(Math.abs(y - x * x) < 1e-9);
  assert.ok(curvePoints(RESTRICTED).every(([x]) => x >= 0));
  assert.ok(curvePoints(RESTRICTED).length > 10);
});

test('the lesson uses the picture beside its horizontal-line test and x >= 0 restriction', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade12/mathematics/term1/functions-inverse-functions/FunctionsInverseFunctions.tsx'), 'utf8');
  assert.ok(lesson.includes('HorizontalLineTest'));
  assert.ok(lesson.includes('horizontal-line test'));
  assert.ok(lesson.includes('x \\ge 0 \\text{ for } f(x)=x^2'));
});
