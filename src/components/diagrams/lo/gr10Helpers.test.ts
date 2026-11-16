import test from 'node:test';
import assert from 'node:assert/strict';
import { breathingSeconds, gain, hoursOf, netPay, rand, sessionMinutes, termMark, weeklyMinutes, yearMark, yearPercent } from './gr10Helpers';

test('netPay: gross minus deductions', () => {
  assert.equal(netPay(15000, 3000), 12000);
  assert.equal(netPay(8000, 0), 8000);
});

test('rand: thousands with a space, no decimals', () => {
  assert.equal(rand(15000), 'R15 000');
  assert.equal(rand(950), 'R950');
  assert.equal(rand(1234567), 'R1 234 567');
});

test('sessionMinutes and weeklyMinutes add up', () => {
  assert.equal(sessionMinutes([{ minutes: 10 }, { minutes: 30 }, { minutes: 10 }]), 50);
  assert.equal(weeklyMinutes(3, 30), 90);
  assert.equal(weeklyMinutes(5, 20), 100);
});

test('Life Orientation marks: a term is task + PET out of 100, the year is out of 400', () => {
  assert.equal(termMark(60, 15), 75);
  const terms = [termMark(60, 15), termMark(56, 14), termMark(64, 16), termMark(60, 15)];
  assert.deepEqual(terms, [75, 70, 80, 75]);
  assert.equal(yearMark(terms), 300);
  assert.equal(yearPercent(terms), 75);
});

test('hoursOf and a weekly study plan: 5 days of 120 minutes is 600 minutes, 10 hours', () => {
  assert.equal(weeklyMinutes(5, 120), 600);
  assert.equal(hoursOf(weeklyMinutes(5, 120)), 10);
});

test('gain: last record minus first record', () => {
  assert.equal(gain(4, 8), 4);
  assert.equal(gain(8, 6), -2);
});

test('breathingSeconds: (in + out) x repeats', () => {
  assert.equal(breathingSeconds(4, 6, 5), 50);
  assert.equal(breathingSeconds(3, 3, 10), 60);
});
