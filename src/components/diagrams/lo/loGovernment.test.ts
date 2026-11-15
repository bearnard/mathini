import test from 'node:test';
import assert from 'node:assert/strict';
import { checkSchematic } from '../schematic';
import { BRANCHES, GOVERNMENT } from './loGovernment';

test('three branches: legislature makes laws, executive implements them, judiciary interprets them; each is linked to both others', () => {
  assert.deepEqual(checkSchematic(GOVERNMENT), []);
  assert.deepEqual(GOVERNMENT.boxes.map((b) => b.lines?.[0]), [...BRANCHES]);
  const second = Object.fromEntries(GOVERNMENT.boxes.map((b) => [b.lines?.[0], b.lines?.[1]]));
  assert.equal(second.Legislature, 'makes laws');
  assert.match(second.Executive ?? '', /implements/);
  assert.match(second.Judiciary ?? '', /interprets/);
  // every pair is joined exactly once, in both directions, so no branch sits above another
  const pairs = GOVERNMENT.arrows.map((a) => [a.from, a.to].sort().join('-')).sort();
  assert.deepEqual(pairs, ['exe-jud', 'exe-leg', 'jud-leg']);
  assert.ok(GOVERNMENT.arrows.every((a) => a.both && a.dashed));
});
