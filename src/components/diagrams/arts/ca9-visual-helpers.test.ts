import test from 'node:test';
import assert from 'node:assert/strict';
import { brightness, gridEnlarge, hatchOffsets, layerRects, mirrorX, mix, onePointBox, ridgeColours, scalePoint, towards, twoPointBox, valueScale, wallSpacing } from './ca9-visual-helpers';

const cross = (a: { x: number; y: number }, b: { x: number; y: number }, c: { x: number; y: number }) => (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);

test('one-point perspective: every back corner lies on the line from its front corner to the vanishing point', () => {
  const vp = { x: 60, y: 30 };
  const box = onePointBox({ x: 20, y: 40, w: 40, h: 30 }, vp, 0.4);
  box.front.forEach((c, i) => assert.ok(Math.abs(cross(c, box.back[i], vp)) < 0.01));
  assert.deepEqual(box.back[0], { x: 36, y: 36 });
  // the back face is the same shape, 0.6 as big
  assert.equal(Math.round((box.back[1].x - box.back[0].x) * 1000) / 1000, 24);
  assert.equal(Math.round((box.back[2].y - box.back[1].y) * 1000) / 1000, 18);
});

test('two-point perspective: far edges are vertical and every edge heads for its vanishing point', () => {
  const vpL = { x: 0, y: 30 };
  const vpR = { x: 120, y: 30 };
  const b = twoPointBox({ x: 55, top: 20, bottom: 60 }, vpL, vpR, 0.5, 0.4);
  assert.equal(b.left.top.x, b.left.bottom.x);
  assert.equal(b.right.top.x, b.right.bottom.x);
  assert.deepEqual(b.left.top, { x: 27.5, y: 25 });
  assert.ok(Math.abs(cross(b.near.top, b.left.top, vpL)) < 0.01 && Math.abs(cross(b.near.bottom, b.left.bottom, vpL)) < 0.01);
  assert.ok(Math.abs(cross(b.near.top, b.right.top, vpR)) < 0.01 && Math.abs(cross(b.near.bottom, b.right.bottom, vpR)) < 0.01);
  assert.deepEqual(towards({ x: 0, y: 0 }, { x: 10, y: 20 }, 0.5), { x: 5, y: 10 });
});

test('grid method: the same squares, each three times as wide', () => {
  assert.deepEqual(gridEnlarge(4, 3, 10, 3), { cols: 4, rows: 3, cell: 10, bigCell: 30, width: 40, height: 30, bigWidth: 120, bigHeight: 90 });
  assert.deepEqual(scalePoint({ x: 15, y: 25 }, 3), { x: 45, y: 75 });
});

test('value scale runs light to dark in even steps', () => {
  const v = valueScale(5);
  assert.deepEqual(v, ['#f0f0f0', '#bcbcbc', '#878787', '#535353', '#1e1e1e']);
  assert.equal(valueScale(1).length, 1);
});

test('hatching: lines cover the rectangle', () => {
  assert.deepEqual(hatchOffsets(30, 10, 10), [0, 10, 20, 30]);
  assert.equal(hatchOffsets(30, 10, 4).length, 10);
});

test('atmospheric perspective: each ridge further away is lighter and hazier', () => {
  assert.equal(mix('#000000', '#ffffff', 0.5), '#808080');
  const r = ridgeColours(3);
  assert.equal(r.length, 3);
  const b = r.map(brightness);
  assert.ok(b[0] < b[1] && b[1] < b[2]);
});

test('relief print: mirrored about the axis, so the print is the reverse of the block', () => {
  assert.deepEqual(mirrorX([{ x: 10, y: 5 }, { x: 30, y: 8 }], 50), [{ x: 90, y: 5 }, { x: 70, y: 8 }]);
  assert.deepEqual(mirrorX(mirrorX([{ x: 12, y: 3 }], 40), 40), [{ x: 12, y: 3 }]);
});

test('mixed-media layers step across and down', () => {
  assert.deepEqual(layerRects(3, 40, 30, 8), [{ x: 0, y: 0, w: 40, h: 30 }, { x: 8, y: 8, w: 40, h: 30 }, { x: 16, y: 16, w: 40, h: 30 }]);
});

test('exhibition: equal gaps, the works and gaps fill the wall exactly', () => {
  const w = wallSpacing(100, [20, 20, 20]);
  assert.deepEqual(w, { gap: 10, xs: [10, 40, 70] });
  assert.equal(w.xs[2] + 20 + w.gap, 100);
  assert.equal(wallSpacing(90, [30, 15, 15]).gap, 7.5);
});
