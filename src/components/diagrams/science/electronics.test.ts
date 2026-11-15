import test from 'node:test';
import assert from 'node:assert/strict';
import { current, ldrResistance, thermistorResistance } from './electronicsHelpers';

test('an LDR has lower resistance in bright light than in the dark, all the way along', () => {
  const xs = Array.from({ length: 21 }, (_, i) => ldrResistance(i / 20));
  for (let i = 1; i < xs.length; i++) assert.ok(xs[i] < xs[i - 1]);
  assert.ok(ldrResistance(1) < ldrResistance(0));
});

test('a common (NTC) thermistor has lower resistance when it is hot, all the way along', () => {
  const xs = Array.from({ length: 21 }, (_, i) => thermistorResistance(i / 20));
  for (let i = 1; i < xs.length; i++) assert.ok(xs[i] < xs[i - 1]);
});

test('Ohm: 12 V across 3 ohms gives 4 A, and a lower resistance gives a higher current', () => {
  assert.equal(current(12, 3), 4);
  assert.ok(current(12, ldrResistance(1)) > current(12, ldrResistance(0)));
  assert.throws(() => current(12, 0));
  assert.throws(() => ldrResistance(2));
});
