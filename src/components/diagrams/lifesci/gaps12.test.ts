import test from 'node:test';
import assert from 'node:assert/strict';
import * as g from './gaps12';

test('reaction time: mean 0,25 s and a car at 100 km/h travels 6,94 m, 12,5 m when slowed', () => {
  assert.equal(g.mean(g.REACTION), 0.25);
  assert.equal((0.21 + 0.25 + 0.28 + 0.24 + 0.27) / 5, 1.25 / 5);
  assert.ok(Math.abs(g.mps(100) - 27.7778) < 1e-3);
  assert.equal(g.reactionDistance(100, 0.25), 6.94);
  assert.equal(g.reactionDistance(100, g.SLOWED), 12.5);
  assert.equal(g.reactionDistance(60, 0.25), 4.17);
});
test('resistance model: 0,5% resistant becomes about 9%, 67% and 98%', () => {
  assert.equal(g.pct(g.resistantShare(0.005, 0.05, 0)), 0.5);
  assert.equal(g.pct(g.resistantShare(0.005, 0.05, 1)), 9.13);
  assert.equal(g.pct(g.resistantShare(0.005, 0.05, 2)), 66.78);
  assert.equal(g.pct(g.resistantShare(0.005, 0.05, 3)), 97.57);
});
test('changes', () => {
  assert.equal(g.change(9.2, 9.7), 0.5);
  assert.equal(g.percentChange(9.2, 9.7), 5.43);
  assert.equal(g.percentChange(12000, 9000), -25);
  assert.equal(g.HERD[3] - g.HERD[0], 4.5);
});
