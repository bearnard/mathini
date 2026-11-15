import test from 'node:test';
import assert from 'node:assert/strict';
import { barWidths, hoursMinutes, logGain, subjectMinutes, targetMark, totalMinutes } from './lo8Helpers';

test('barWidths: the biggest value fills the width and the rest are in proportion', () => {
  assert.deepEqual(barWidths([10, 20], 60), [30, 60]);
  assert.deepEqual(barWidths([0, 0]), [0, 0]);
  assert.deepEqual(barWidths([]), []);
});

test('logGain: 12, 15, 17, 20 repetitions is 8 more than week 1', () => {
  assert.equal(logGain([12, 15, 17, 20]), 8);
  assert.equal(logGain([5]), 0);
});

test('targetMark: 55 plus 10 marks is 65', () => {
  assert.equal(targetMark(55, 10), 65);
});

test('study plan: 3 x 30 + 2 x 30 + 2 x 30 is 210 minutes, 3 h 30 min', () => {
  const plan = subjectMinutes([
    { subject: 'Maths', sessions: 3, length: 30 },
    { subject: 'Life Sciences', sessions: 2, length: 30 },
    { subject: 'English', sessions: 2, length: 30 },
  ]);
  assert.deepEqual(plan.map((p) => p.minutes), [90, 60, 60]);
  assert.equal(totalMinutes(plan), 210);
  assert.equal(hoursMinutes(210), '3 h 30 min');
  assert.equal(hoursMinutes(45), '0 h 45 min');
});
