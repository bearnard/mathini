import test from 'node:test';
import assert from 'node:assert/strict';
import { DEMO_PATTERN, beatsIn, starts } from './lifeSkillsHelpers';

test('the demo pattern fills a bar of four beats', () => {
  assert.equal(beatsIn(DEMO_PATTERN), 4);
});

test('each sound starts where the one before it ends', () => {
  assert.deepEqual(starts(DEMO_PATTERN), [0, 1, 1.5, 2, 3]);
});

test('two short sounds take the time of one long sound', () => {
  assert.equal(beatsIn(['short', 'short']), beatsIn(['long']));
});
