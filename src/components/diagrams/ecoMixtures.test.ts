import test from 'node:test';
import assert from 'node:assert/strict';
import { PLATE, PLATE_EXTRA, wedges } from './EcoMixtures';

test('healthy plate: half vegetables and fruit, a quarter carbohydrates, a quarter protein', () => {
  assert.deepEqual(PLATE.map((p) => p.share), [50, 25, 25]);
  assert.equal(PLATE.reduce((a, p) => a + p.share, 0), 100);
});

test('fats and oils are a small extra beside the plate, not a wedge', () => {
  assert.equal(PLATE.map((p) => p.name as string).includes(PLATE_EXTRA.name), false);
  assert.match(PLATE_EXTRA.job, /a little/);
});

test('the three wedges (1/2 + 1/4 + 1/4) fill the circle, each starting where the last ended', () => {
  const ws = wedges(PLATE.map((p) => p.share), 38, 40, 31);
  assert.equal(ws.length, 3);
  assert.deepEqual(ws.map((w) => [w.from, w.to]), [[0, 180], [180, 270], [270, 360]]);
});

test('wedge arcs are rounded so server and browser agree', () => {
  for (const w of wedges([50, 25, 25], 38, 40, 31)) assert.doesNotMatch(w.d, /\d\.\d{4,}/);
});
