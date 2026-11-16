import test from 'node:test';
import assert from 'node:assert/strict';
import { netPay, rand, sessionMinutes, weeklyMinutes } from './gr10Helpers';

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
