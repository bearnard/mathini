import test from 'node:test';
import assert from 'node:assert/strict';
import * as c from './controlHelpers';

test('ratchet: one click is 360 / teeth degrees and there is one click per tooth', () => {
  assert.equal(c.clickAngle(12), 30);
  assert.equal(c.clickAngle(24), 15);
  assert.equal(c.clickAngle(18), 20);
  assert.equal(c.clickAngle(36), 10);
  for (const n of [12, 18, 24, 36]) assert.equal(c.clickAngle(n) * c.clicksPerTurn(n), 360);
});

test('ratchet wheel outline: one saw tooth per tooth, root and tip on the right circles', () => {
  const d = c.ratchetPath(50, 50, 17, 22, 12);
  assert.equal((d.match(/M/g) ?? []).length, 1);
  assert.equal((d.match(/L/g) ?? []).length, 23); // 24 points (a root and a tip for each of 12 teeth): the first is the M
  const nums = [...d.matchAll(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g)].map((m) => ({ x: Number(m[1]) - 50, y: Number(m[2]) - 50 }));
  const radii = nums.map((p) => Math.hypot(p.x, p.y));
  assert.equal(radii.filter((r) => Math.abs(r - 17) < 0.05).length, 12);
  assert.equal(radii.filter((r) => Math.abs(r - 22) < 0.05).length, 12);
  // each tooth rises gently (85% of the step) and drops steeply (15%), so the gentle side is the longer arc
  const a = (p: { x: number; y: number }) => ((Math.atan2(-p.y, p.x) * 180) / Math.PI + 360) % 360;
  assert.ok(Math.abs(a(nums[1]) - a(nums[0]) - 0.85 * 30) < 0.5);
});

test('polar: 3 o clock, 12 o clock', () => {
  assert.deepEqual(c.polar(10, 10, 5, 0), { x: 15, y: 10 });
  assert.deepEqual(c.polar(10, 10, 5, 90), { x: 10, y: 5 });
});

test('hydraulic brake: pressure is the same everywhere, so force grows with area', () => {
  assert.equal(c.pressure(100, 2), 50);
  assert.equal(c.outputForce(100, 2, 6), 300);
  assert.equal(c.outputForce(150, 3, 9), 450);
  // output / input equals the area ratio
  assert.equal(c.outputForce(100, 2, 6) / 100, 6 / 2);
});

test('lever: mechanical advantage is effort distance over load distance, and force follows', () => {
  assert.equal(c.leverMA(8, 2), 4);
  assert.equal(c.leverMA(6, 2), 3);
  assert.equal(c.cableForce(20, 8, 2), 80);
  assert.equal(c.cableForce(15, 8, 2), 60);
  // moments balance about the pivot: effort x its distance = load x its distance
  assert.equal(20 * 8, c.cableForce(20, 8, 2) * 2);
});
