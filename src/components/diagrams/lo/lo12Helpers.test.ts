import test from 'node:test';
import assert from 'node:assert/strict';
import { PLAN, STALL, activeDays, minutesShort, stallProfit, unemploymentRate, weekMinutes } from './lo12Helpers';

test('INDEPENDENT: the plan, by hand', () => {
  assert.equal(30 + 0 + 45 + 0 + 30 + 60 + 0, 165);
  assert.equal(weekMinutes(PLAN.days), 165);
  assert.equal(activeDays(PLAN.days), 4);
  assert.equal(minutesShort(165, PLAN.target), 0);
  assert.equal(minutesShort(105, 150), 45);
  assert.equal(minutesShort(weekMinutes([{ day: 'Mon', minutes: 30 }, { day: 'Wed', minutes: 45 }, { day: 'Fri', minutes: 30 }]), 150), 45);
});

test('INDEPENDENT: unemployment rate and stall profit, by hand', () => {
  assert.equal(unemploymentRate(400, 2000), 20);
  assert.equal(unemploymentRate(300, 1200), 25);
  assert.equal(unemploymentRate(1, 3), 33.3);
  assert.equal(9000 - 5000 - 1500, 2500);
  assert.equal(stallProfit(STALL), 2500);
  assert.equal(stallProfit(STALL) * 12, 30000);
});

test('randNb groups thousands with a non-breaking space', async () => {
  const { randNb } = await import('./lo12Helpers');
  assert.equal(randNb(9000), 'R9 000');
  assert.equal(randNb(30000), 'R30 000');
  assert.equal(randNb(950), 'R950');
  assert.equal(randNb(1200000), 'R1 200 000');
  assert.ok(!randNb(30000).includes(' '));
});
