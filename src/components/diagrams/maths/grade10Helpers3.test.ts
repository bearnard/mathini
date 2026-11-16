import test from 'node:test';
import assert from 'node:assert/strict';
import * as h from './grade10Helpers3';

const near = (a: number, b: number, tol = 1e-9) => Math.abs(a - b) <= tol;

test('analytical geometry', () => {
  assert.equal(h.distanceSquared([1, 2], [4, 6]), 25);
  assert.equal(h.distanceExact([1, 2], [4, 6]), 5);
  assert.equal(h.distanceExact([0, 0], [1, 1]), null);
  assert.deepEqual(h.midpoint([-2, 3], [6, 7]), [[2, 1], [5, 1]]);
  assert.deepEqual(h.midpoint([1, 2], [4, 6]), [[5, 2], [4, 1]]);
  assert.deepEqual(h.gradient([1, 2], [4, 8]), [2, 1]);
  assert.deepEqual(h.perpendicular([2, 3]), [-3, 2]);
  assert.deepEqual(h.perpendicular([-1, 2]), [2, 1]);
  assert.equal(h.perpendicular([0, 1]), null);
  assert.deepEqual(h.endFromMidpoint([1, -2], [3, 1]), [5, 4]);
  assert.equal(h.collinear([1, 2], [3, 6], [5, 10]), true);
  assert.equal(h.collinear([1, 2], [3, 6], [5, 9]), false);
  assert.deepEqual(h.parallelogramD([0, 0], [4, 1], [5, 4]), [1, 3]);
});

test('finance and growth', () => {
  assert.equal(h.cents(2.675), 2.68);
  assert.equal(h.rand(6050), 'R6 050,00');
  assert.equal(h.rand(1234567.5), 'R1 234 567,50');
  assert.equal(h.rand(418.5), 'R418,50');
  assert.equal(h.randWhole(4960), 'R4 960');
  assert.equal(h.simpleAmount(4000, 8, 3), 4960);
  assert.equal(h.simpleInterest(6000, 5, 4), 1200);
  assert.equal(h.cents(h.compoundAmount(5000, 10, 2)), 6050);
  assert.equal(h.cents(h.compoundAmount(200, 5, 3)), 231.53);
  assert.equal(h.cents(h.compoundMonthly(12000, 6, 1)), 12740.13);
  const hp = h.hirePurchase(9000, 10, 12, 2);
  assert.deepEqual([hp.deposit, hp.balance, h.cents(hp.amount), h.cents(hp.total), h.cents(hp.monthly)], [900, 8100, 10044, 10944, 418.5]);
  assert.equal(h.simpleYearsTo(1000, 10, 2000), 10);
  assert.equal(h.simplePrincipal(3300, 10, 2), 2750);
  assert.equal(Math.round(h.compoundAmount(20000, 3, 4)), 22510);
});

test('statistics', () => {
  assert.equal(h.median([3, 1, 2]), 2);
  assert.equal(h.median([4, 1, 3, 2]), 2.5);
  assert.deepEqual(h.quartiles([2, 4, 4, 5, 7, 8, 9, 11]), { q1: 4, q2: 6, q3: 8.5 });
  assert.deepEqual(h.quartiles([1, 2, 3, 4, 5, 6, 7]), { q1: 2, q2: 4, q3: 6 });
  assert.deepEqual(h.fiveNumber([12, 15, 11, 18, 20, 14, 17, 16]), { min: 11, q1: 13, median: 15.5, q3: 17.5, max: 20, iqr: 4.5, range: 9 });
  assert.equal(h.mean([2, 4, 6, 8]), 5);
  const rows = [{ from: 0, to: 10, freq: 4 }, { from: 10, to: 20, freq: 8 }, { from: 20, to: 30, freq: 10 }];
  assert.equal(h.groupedMean(rows), (5 * 4 + 15 * 8 + 25 * 10) / 22);
  assert.deepEqual(h.modalClass(rows), rows[2]);
  assert.deepEqual(h.medianClass(rows), rows[1]); // n = 22: the 11th and 12th values are both in 10–20
  assert.deepEqual(h.cumulative(rows), [4, 12, 22]);
  assert.equal(h.medianClass([{ from: 0, to: 10, freq: 4 }, { from: 10, to: 20, freq: 6 }, { from: 20, to: 30, freq: 10 }]), null); // n = 20: the 10th value is in 10–20, the 11th in 20–30
  assert.deepEqual(h.medianClass([{ from: 0, to: 5, freq: 3 }, { from: 5, to: 10, freq: 5 }, { from: 10, to: 15, freq: 3 }]), { from: 5, to: 10, freq: 5 }); // n = 11: the 6th value
});

test('measurement', () => {
  assert.ok(near(h.sphereVolume(3), 36 * Math.PI));
  assert.ok(near(h.sphereArea(5), 100 * Math.PI));
  assert.equal(h.coneSlant(3, 4), 5);
  assert.ok(near(h.coneVolume(3, 4), 12 * Math.PI));
  assert.ok(near(h.coneCurvedArea(3, 4), 15 * Math.PI));
  assert.ok(near(h.coneTotalArea(3, 4), 24 * Math.PI));
  assert.equal(h.pyramidVolume(6, 10), 120);
  assert.equal(h.pyramidArea(6, 5), 96);
  assert.ok(near(h.cylinderVolume(2, 7), 28 * Math.PI));
  assert.ok(near(h.cylinderArea(2, 7), 36 * Math.PI));
  assert.ok(near(h.hemisphereArea(2), 12 * Math.PI));
  assert.equal(h.prismVolume(12, 5), 60);
  assert.equal(h.cm3ToLitres(60000), 60);
});

test('trigonometry in two dimensions', () => {
  const t = h.towerHeight(45, 30, 20);
  assert.ok(near(t.h, 27.3205, 1e-3) && near(t.x, 27.3205, 1e-3));
  const u = h.towerHeight(40, 25, 15);
  assert.ok(near(u.h, 15.74, 0.01));
  assert.ok(near(h.isoscelesHeight(10, 40), 9.3969, 1e-3));
  assert.ok(near(h.isoscelesBase(8, 50), 6.7570, 1e-3));
});
