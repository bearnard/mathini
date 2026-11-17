import test from 'node:test';
import assert from 'node:assert/strict';
import * as d from './drawingHelpers';

test('scale: 1:n is smaller, n:1 is larger, and the two directions agree', () => {
  assert.equal(d.scaleFactor('1:10'), 0.1);
  assert.equal(d.scaleFactor('2:1'), 2);
  assert.equal(d.scaleFactor('1:20'), 0.05);
  assert.equal(d.drawnLength(1200, '1:10'), 120);
  assert.equal(d.drawnLength(600, '1:10'), 60);
  assert.equal(d.drawnLength(800, '1:20'), 40);
  assert.equal(d.drawnLength(800, '1:5'), 160);
  assert.equal(d.drawnLength(15, '2:1'), 30);
  assert.equal(d.realLength(45, '1:10'), 450);
  assert.equal(d.realLength(d.drawnLength(1200, '1:10'), '1:10'), 1200);
  assert.throws(() => d.scaleFactor('ten'));
});

test('oblique box: the front is true shape and the back is shifted equally across and up', () => {
  const b = d.obliqueBox(40, 30, 20, 0.5);
  assert.deepEqual(b.front, [{ x: 0, y: 0 }, { x: 40, y: 0 }, { x: 40, y: 30 }, { x: 0, y: 30 }]);
  const off = 10 * Math.cos(Math.PI / 4); // half of 20 along 45 degrees
  for (let i = 0; i < 4; i++) {
    assert.ok(Math.abs(b.back[i].x - b.front[i].x - off) < 0.001);
    assert.ok(Math.abs(b.back[i].y - b.front[i].y - off) < 0.001);
    // the step is at 45 degrees: across equals up
    assert.ok(Math.abs(b.back[i].x - b.front[i].x - (b.back[i].y - b.front[i].y)) < 0.001);
    // and its length is the drawn depth
    assert.ok(Math.abs(Math.hypot(b.back[i].x - b.front[i].x, b.back[i].y - b.front[i].y) - 10) < 0.01);
  }
  assert.equal(d.obliqueDepthDrawn(20, 0.5), 10);
  assert.equal(d.obliqueDepthDrawn(20, 1), 20);
  assert.equal(d.obliqueOffset(20, 0.5), 7.071);
});

test('vanishing point: every back corner lies on the line from its front corner to the point, and the back is smaller', () => {
  const front = [{ x: 18, y: 52 }, { x: 52, y: 52 }, { x: 52, y: 22 }, { x: 18, y: 22 }];
  const vp = { x: 92, y: 14 };
  const t = 0.4;
  const b = d.vpBox(front, vp, t);
  assert.deepEqual(b.front, front);
  for (let i = 0; i < 4; i++) {
    // collinear: cross product of (vp - front) and (back - front) is zero
    const ax = vp.x - front[i].x, ay = vp.y - front[i].y;
    const bx = b.back[i].x - front[i].x, by = b.back[i].y - front[i].y;
    assert.ok(Math.abs(ax * by - ay * bx) < 0.01, `corner ${i} is on the line to the vanishing point`);
    // and it is t of the way along
    assert.ok(Math.abs(bx - t * ax) < 0.01 && Math.abs(by - t * ay) < 0.01);
  }
  // back width is (1 - t) of the front width
  const fw = front[1].x - front[0].x;
  const bw = b.back[1].x - b.back[0].x;
  assert.ok(Math.abs(bw - fw * 0.6) < 0.01);
  assert.equal(d.backScale(0.4), 0.6);
  assert.deepEqual(d.towardVP({ x: 0, y: 0 }, { x: 10, y: 10 }, 0), { x: 0, y: 0 });
  assert.deepEqual(d.towardVP({ x: 0, y: 0 }, { x: 10, y: 10 }, 1), { x: 10, y: 10 });
});
