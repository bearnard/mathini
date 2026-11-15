import test from 'node:test';
import assert from 'node:assert/strict';
import { BAR, STEP_BLOCK, drawingLength, gearRatio, outputForce, pressure, pulleyEffort, realLength, toPascals, trainDirection, views } from './tech9Helpers';

test('the step block has 12 cubes: a base of 4 x 2 x 1 and a step of 2 x 2 x 1', () => {
  assert.equal(STEP_BLOCK.length, 12);
});

test('front view is 4 wide and 2 high at the left; top view is 4 wide and 2 deep; side view is 2 deep and 2 high', () => {
  const v = views(STEP_BLOCK);
  assert.equal(v.front.length, 4 + 2);
  assert.equal(v.top.length, 8);
  assert.equal(v.side.length, 4);
  assert.equal(Math.max(...v.front.map((c) => c[0])), 3);
  assert.equal(Math.max(...v.front.map((c) => c[1])), 1);
  assert.equal(Math.max(...v.top.map((c) => c[1])), 1);
  assert.equal(Math.max(...v.side.map((c) => c[0])), 1);
});

test('views of a plain cuboid are rectangles whose sides match the model', () => {
  const box: [number, number, number][] = [0, 1, 2].flatMap((x) => [0, 1].flatMap((y) => [0, 1, 2, 3].map((z): [number, number, number] => [x, y, z])));
  const v = views(box);
  assert.equal(v.front.length, 3 * 4);
  assert.equal(v.top.length, 3 * 2);
  assert.equal(v.side.length, 2 * 4);
});

test('scale 1:10: 5 cm on the drawing is 50 cm in real life, and 1:1 is full size', () => {
  assert.equal(realLength(5, 10), 50);
  assert.equal(drawingLength(50, 10), 5);
  assert.equal(realLength(7, 1), 7);
  assert.throws(() => realLength(5, 0.5));
});

test('a fixed pulley holds the load with one segment (no gain); a movable pulley has two (half the effort); a 4-segment block and tackle needs a quarter', () => {
  assert.equal(pulleyEffort(100, 1), 100);
  assert.equal(pulleyEffort(100, 2), 50);
  assert.equal(pulleyEffort(100, 4), 25);
  assert.throws(() => pulleyEffort(100, 0));
});

test('gear ratio, driven teeth over driving teeth: 20 and 40 teeth gives 2:1, so the driven gear turns at half the speed', () => {
  assert.equal(gearRatio(20, 40), 2);
  assert.equal(1 / gearRatio(20, 40), 0.5);
  assert.equal(gearRatio(40, 20), 0.5);
});

test('gears in a train alternate direction', () => {
  assert.deepEqual([0, 1, 2, 3].map((i) => trainDirection(i, 'clockwise')), ['clockwise', 'anticlockwise', 'clockwise', 'anticlockwise']);
});

test('hydraulics: 50 N on 5 cm2 is 10 N/cm2, so a piston of twice the area gives twice the force', () => {
  assert.equal(pressure(50, 5), 10);
  assert.equal(outputForce(50, 5, 10), 100);
  assert.equal(outputForce(50, 5, 20), 200);
  assert.equal(outputForce(50, 5, 5), 50);
  assert.equal(toPascals(10), 100000);
  assert.equal(toPascals(10), BAR);
});
