import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dist, exactValues, triangle3060, triangle45 } from './specialTriangles';

const close = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-12, `${a} vs ${b}`);
const rad = (d: number) => (d * Math.PI) / 180;

test('the drawn triangles have the side lengths the picture labels, and a right angle at B', () => {
  for (const t of [triangle3060, triangle45]) {
    close(dist(t.B, t.C), t.opposite);
    close(dist(t.A, t.B), t.adjacent);
    close(dist(t.A, t.C), t.hypotenuse);
    close(t.opposite ** 2 + t.adjacent ** 2, t.hypotenuse ** 2);
    assert.equal(t.A.y, t.B.y, 'AB is horizontal');
    assert.equal(t.B.x, t.C.x, 'BC is vertical, so the angle at B is 90 degrees');
  }
});

test('the angle at A really is 30 and 45 degrees', () => {
  for (const t of [triangle3060, triangle45]) close(Math.atan2(t.C.y - t.A.y, t.C.x - t.A.x), rad(t.angleA));
});

test('sin 30 = 1/2, cos 60 = 1/2 and tan 45 = 1 from the sides, and from the calculator', () => {
  const [sn, sd] = exactValues.sin30;
  close(triangle3060.opposite / triangle3060.hypotenuse, sn / sd);
  close(Math.sin(rad(30)), sn / sd);
  const [cn, cd] = exactValues.cos60;
  close(triangle3060.opposite / triangle3060.hypotenuse, cn / cd, ); // at the 60 degree vertex C, the adjacent side is BC = 1
  close(Math.cos(rad(60)), cn / cd);
  const [tn, td] = exactValues.tan45;
  close(triangle45.opposite / triangle45.adjacent, tn / td);
  close(Math.tan(rad(45)), tn / td);
});

test('the lesson shows the triangles next to the exact values', () => {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade11/mathematics/term2/trigonometry/Trigonometry.tsx'), 'utf8');
  assert.ok(lesson.includes('SpecialTriangles'));
  assert.ok(lesson.includes('\\sin 30^\\circ = \\frac{1}{2}') && lesson.includes('\\tan 45^\\circ = 1'));
});
