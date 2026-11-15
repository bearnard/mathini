import test from 'node:test';
import assert from 'node:assert/strict';
import { EATEN_BY, ORGANISMS, eaters, loseAPredator, loseFood, prey, producers, topPredators } from './foodWeb';

test('grass is the only producer and the snake is the only top predator', () => {
  assert.deepEqual(producers(), ['grass']);
  assert.deepEqual(topPredators(), ['snake']);
});

test('who eats whom', () => {
  assert.deepEqual(eaters('grass'), ['grasshopper', 'rabbit']);
  assert.deepEqual(prey('snake'), ['frog', 'rabbit']);
  assert.deepEqual(prey('frog'), ['grasshopper']);
});

test('removing the top predator frees its prey from predation, and they may increase too much', () => {
  assert.deepEqual(loseAPredator('snake'), ['frog', 'rabbit']);
});

test('removing the grass leaves its eaters without food', () => {
  assert.deepEqual(loseFood('grass'), ['grasshopper', 'rabbit']);
});

test('every edge links two organisms of the web, nobody eats itself, and energy flows one way (no cycles of length 2)', () => {
  for (const [f, e] of EATEN_BY) {
    assert.ok(ORGANISMS.includes(f) && ORGANISMS.includes(e));
    assert.notEqual(f, e);
    assert.ok(!EATEN_BY.some(([a, b]) => a === e && b === f));
  }
});
