import test from 'node:test';
import assert from 'node:assert/strict';
import * as p from './perspectiveHelpers';

const rect = (x: number, y: number, w: number, h: number) => [{ x, y: y + h }, { x: x + w, y: y + h }, { x: x + w, y }, { x, y }];

test('eye level decides which faces you see (y goes down the page)', () => {
  const vp = { x: 60, y: 30 };
  // below the horizon, left of the vanishing point: top and right side
  assert.deepEqual(p.visibleFaces(rect(12, 44, 28, 18), vp), { top: true, bottom: false, left: false, right: true });
  // above the horizon, right of the vanishing point: underside and left side
  assert.deepEqual(p.visibleFaces(rect(84, 6, 28, 16), vp), { top: false, bottom: true, left: true, right: false });
  // level with the eyes and centred on the point: neither top nor underside, neither side
  assert.deepEqual(p.visibleFaces(rect(50, 20, 20, 20), vp), { top: false, bottom: false, left: false, right: false });
});

test('the back face is smaller by the fraction (1 - t)', () => {
  assert.equal(p.backWidth(60, 0.4), 36);
  assert.equal(p.backWidth(40, 0.4), 24);
  assert.equal(p.backWidth(80, 0.4), 48);
  assert.equal(p.backWidth(120, 0.25), 90);
  assert.equal(p.backWidth(100, 0.25), 75);
  assert.equal(p.backWidth(200, 0.55), 90);
  // and the geometry agrees: width of the drawn back face / front face
  const vp = { x: 100, y: 12 };
  const front = rect(18, 28, 40, 26);
  const b = p.vpBox(front, vp, 0.4);
  assert.ok(Math.abs(b.back[1].x - b.back[0].x - 40 * 0.6) < 0.01);
  assert.ok(Math.abs(b.back[0].y - b.back[3].y - 26 * 0.6) < 0.01);
});

test('shading: the top is lightest, the front next, and a face turned from the light is darkest but never black', () => {
  assert.ok(Math.abs(Math.hypot(...p.LIGHT) - 1) < 1e-9);
  const top = p.brightness(p.NORMALS.top), front = p.brightness(p.NORMALS.front);
  const right = p.brightness(p.NORMALS.right), left = p.brightness(p.NORMALS.left);
  assert.ok(top > front && front > right);
  assert.equal(right, 0);
  assert.equal(left, front); // the light is as far to the left as it is in front
  assert.ok(p.shade(p.NORMALS.top) > p.shade(p.NORMALS.front) && p.shade(p.NORMALS.front) > p.shade(p.NORMALS.right));
  assert.ok(p.shade(p.NORMALS.right) >= 0.25 && p.shade(p.NORMALS.top) <= 1);
  // by hand: light (-0.5, 0.7, 0.5), length sqrt(0.99)
  const len = Math.sqrt(0.25 + 0.49 + 0.25);
  assert.ok(Math.abs(top - 0.7 / len) < 0.001);
  assert.ok(Math.abs(front - 0.5 / len) < 0.001);
});

test('classroom: the back wall is a true rectangle, smaller than the page, with every corner on the line to the vanishing point', () => {
  const page = { w: 120, h: 64 };
  const vp = { x: 62, y: 30 };
  const t = 0.55;
  const { near, back } = p.room(page, vp, t);
  assert.equal(back[1].x - back[0].x, back[2].x - back[3].x); // top and bottom edges equal
  assert.equal(back[0].y - back[3].y, back[1].y - back[2].y); // left and right edges equal
  assert.equal(back[0].y, back[1].y); // level bottom
  assert.equal(back[0].x, back[3].x); // upright left
  assert.ok(Math.abs(back[1].x - back[0].x - page.w * (1 - t)) < 0.01);
  for (let i = 0; i < 4; i++) {
    const ax = vp.x - near[i].x, ay = vp.y - near[i].y;
    const bx = back[i].x - near[i].x, by = back[i].y - near[i].y;
    assert.ok(Math.abs(ax * by - ay * bx) < 0.01, `corner ${i}`);
  }
});
