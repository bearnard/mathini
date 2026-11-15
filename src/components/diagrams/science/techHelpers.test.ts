import test from 'node:test';
import assert from 'node:assert/strict';
import { and, or, parallelLamp, rampAdvantage, rampEffort, seriesLamp, truthTable } from './techHelpers';

test('AND gives 1 only when both inputs are 1, OR when at least one is', () => {
  assert.deepEqual(truthTable(and).map((r) => r.out), [0, 0, 0, 1]);
  assert.deepEqual(truthTable(or).map((r) => r.out), [0, 1, 1, 1]);
  assert.equal(truthTable(and).length, 4);
});

test('switches in series behave as AND, switches in parallel as OR', () => {
  for (const r of truthTable(and)) assert.equal(seriesLamp(r.a, r.b), r.out);
  for (const r of truthTable(or)) assert.equal(parallelLamp(r.a, r.b), r.out);
});

test('the rows of a truth table cover each input combination once, in counting order', () => {
  assert.deepEqual(truthTable(and).map((r) => `${r.a}${r.b}`), ['00', '01', '10', '11']);
});

test('a 100 N load raised 1 m up a 4 m ramp needs 25 N, so the ramp has a mechanical advantage of 4', () => {
  assert.equal(rampEffort(100, 1, 4), 25);
  assert.equal(rampAdvantage(1, 4), 4);
  assert.ok(rampEffort(100, 1, 8) < rampEffort(100, 1, 4), 'a longer ramp needs less effort');
  assert.equal(rampEffort(100, 1, 1), 100, 'a ramp as steep as it is long is a straight lift');
  assert.throws(() => rampEffort(100, 2, 1));
});
