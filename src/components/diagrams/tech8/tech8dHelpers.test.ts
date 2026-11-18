import test from 'node:test';
import assert from 'node:assert/strict';
import { seriesVolts, parallelVolts, parallelLifetime, SOURCES, POWER_STATIONS, GRID_STAGES, transformerType, currentChange, truthTable, wiringFor, panicButtonGate, roleOf, SYMBOLS, AND, OR } from './tech8dHelpers';

test('cells in series and parallel (plain arithmetic)', () => {
  assert.equal(seriesVolts(3), 4.5);
  assert.equal(seriesVolts(2, 1.2), 2.4);
  assert.equal(parallelVolts(3), 1.5);
  assert.equal(parallelLifetime(3, 10), 30);
  assert.equal(SOURCES.length, 4);
});

test('power stations, the grid and transformers', () => {
  assert.equal(POWER_STATIONS.length, 3);
  assert.deepEqual([...POWER_STATIONS[0].sources], ['coal', 'gas', 'nuclear', 'sun']);
  assert.equal(GRID_STAGES[1], 'step-up transformer');
  assert.equal(GRID_STAGES.length, 5);
  assert.equal(transformerType(100, 1000), 'step-up');
  assert.equal(transformerType(1000, 100), 'step-down');
  assert.equal(transformerType(50, 50), 'neither');
});

test('qualitative Ohm law, truth tables and wiring', () => {
  assert.equal(currentChange('more cells in series'), 'increases');
  assert.equal(currentChange('more resistance in series'), 'decreases');
  assert.equal(currentChange('more resistors in parallel'), 'increases');
  assert.deepEqual(truthTable('AND'), [{ a: 0, b: 0, out: 0 }, { a: 0, b: 1, out: 0 }, { a: 1, b: 0, out: 0 }, { a: 1, b: 1, out: 1 }]);
  assert.deepEqual(truthTable('OR'), [{ a: 0, b: 0, out: 0 }, { a: 0, b: 1, out: 1 }, { a: 1, b: 0, out: 1 }, { a: 1, b: 1, out: 1 }]);
  // exhaustive check of both gates
  for (const a of [false, true]) for (const b of [false, true]) {
    assert.equal(AND(a, b), a && b);
    assert.equal(OR(a, b), a || b);
  }
  assert.equal(wiringFor('AND'), 'series');
  assert.equal(wiringFor('OR'), 'parallel');
  assert.equal(panicButtonGate, 'OR');
  assert.equal(roleOf('solar panel'), 'input');
  assert.equal(roleOf('buzzer'), 'output');
  assert.equal(roleOf('switch'), 'control');
  assert.equal(SYMBOLS.length, 7);
});
