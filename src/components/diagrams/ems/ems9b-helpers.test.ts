import test from 'node:test';
import assert from 'node:assert/strict';
import { capacityGap, comma, defectRate, minutesFor, minutesPerMark, percentOf, priceCheck } from './ems9b-helpers';

test('percentOf: 28 of 40 is 70%, 20 of 50 is 40%', () => {
  assert.equal(percentOf(28, 40), 70);
  assert.equal(percentOf(20, 50), 40);
});

test('defect rate: 6 faulty out of 200 is 3%, 25 of 500 is 5%', () => {
  assert.deepEqual(defectRate(200, 6), { made: 200, faulty: 6, good: 194, percent: 3 });
  assert.equal(defectRate(500, 25).percent, 5);
});

test('capacity gap: promising 650 loaves with a capacity of 500 is 150 short', () => {
  assert.deepEqual(capacityGap(500, 650), { capacity: 500, promised: 650, short: 150, canDeliver: false });
  assert.equal(capacityGap(500, 500).short, 0);
  assert.equal(capacityGap(300, 360).short, 60);
});

test('price check: cost R12 with 50% mark-up is R18, R2 above a R16 competitor', () => {
  const p = priceCheck(12, 50, 16);
  assert.equal(p.price, 18);
  assert.equal(p.verdict, 'above');
  assert.equal(p.gap, 2);
  assert.equal(priceCheck(20, 25, 25).verdict, 'same');
  assert.equal(priceCheck(20, 25, 30).verdict, 'below');
});

test('exam time per mark', () => {
  assert.equal(minutesPerMark(60, 60), 1);
  assert.equal(minutesFor(60, 60, 10), 10);
  assert.equal(minutesPerMark(45, 90), 0.5);
  assert.equal(minutesFor(45, 90, 12), 6);
  assert.equal(comma(minutesPerMark(90, 100)), '0,9');
});
