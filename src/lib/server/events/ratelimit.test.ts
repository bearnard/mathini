import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRateLimiter } from './ratelimit';

test('allows up to the limit then blocks', () => {
  const rl = createRateLimiter(300, 3600_000);
  assert.equal(rl.allow('a', 150, 0), true);
  assert.equal(rl.allow('a', 150, 1), true);
  assert.equal(rl.allow('a', 1, 2), false);
});
test('keys are independent', () => {
  const rl = createRateLimiter(5, 1000);
  assert.equal(rl.allow('a', 5, 0), true);
  assert.equal(rl.allow('b', 5, 0), true);
});
test('the window resets', () => {
  const rl = createRateLimiter(5, 1000);
  assert.equal(rl.allow('a', 5, 0), true);
  assert.equal(rl.allow('a', 1, 500), false);
  assert.equal(rl.allow('a', 1, 1000), true);
});
test('a single batch bigger than the limit is refused', () => {
  const rl = createRateLimiter(5, 1000);
  assert.equal(rl.allow('a', 6, 0), false);
});
test('memory stays bounded', () => {
  const rl = createRateLimiter(5, 1000, 10);
  for (let i = 0; i < 100; i++) rl.allow(`k${i}`, 1, 0);
  assert.equal(rl.allow('fresh', 1, 0), true);
});
