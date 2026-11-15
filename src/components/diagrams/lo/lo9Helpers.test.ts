import test from 'node:test';
import assert from 'node:assert/strict';
import { BUILD_UP, buildUpTotal, compareLayout, sessionPlan } from './lo9Helpers';

test('compareLayout stacks each column under its heading and returns the taller height', () => {
  const c = compareLayout(['Blood', 'Sexual contact'], ['Hugging', 'Sharing a plate of food together today'], 20);
  assert.equal(c.left[0].y, 16);
  assert.equal(c.right[1].y, c.right[0].y + c.right[0].h + 3);
  assert.ok(Math.abs(c.height - (Math.max(c.left[1].y + c.left[1].h, c.right[1].y + c.right[1].h) + 4)) < 0.01);
});

test('a practice session is 10 + 20 + 25 + 5 = 60 minutes and the bar widths use the whole width', () => {
  const s = sessionPlan();
  assert.equal(s.total, 60);
  assert.deepEqual(s.segs.map((g) => g.minutes), [10, 20, 25, 5]);
  assert.ok(Math.abs(s.segs.reduce((a, g) => a + g.w, 0) - 108) < 0.01);
  assert.ok(Math.abs(s.share.reduce((a, b) => a + b, 0) - 1) < 0.01);
});

test('the endurance build-up is 15 + 20 + 25 = 60 minutes over three days', () => {
  assert.equal(BUILD_UP.days.length, BUILD_UP.minutes.length);
  assert.equal(buildUpTotal(), 60);
});
