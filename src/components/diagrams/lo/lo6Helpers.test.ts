import test from 'node:test';
import assert from 'node:assert/strict';
import { buildUp, countUnique, joinList, shareDays } from './lo6Helpers';

test('joinList reads naturally', () => {
  assert.equal(joinList([]), '');
  assert.equal(joinList(['Monday']), 'Monday');
  assert.equal(joinList(['Monday', 'Wednesday']), 'Monday and Wednesday');
  assert.equal(joinList(['Mon', 'Wed', 'Fri']), 'Mon, Wed and Fri');
});

test('shareDays: two groups share four days two each, by turns', () => {
  const s = shareDays(['Monday', 'Tuesday', 'Wednesday', 'Thursday'], ['Group A', 'Group B']);
  assert.deepEqual(s, [
    { group: 'Group A', days: ['Monday', 'Wednesday'] },
    { group: 'Group B', days: ['Tuesday', 'Thursday'] },
  ]);
  assert.equal(s.reduce((a, g) => a + g.days.length, 0), 4);
});

test('countUnique ignores case and repeats', () => {
  assert.equal(countUnique(['Food', 'Music', 'Dance', 'Stories']), 4);
  assert.equal(countUnique(['Food', 'food ', 'Music']), 2);
  assert.equal(countUnique([]), 0);
});

test('buildUp: 10, 12, 14 minutes over three sessions is 36 minutes', () => {
  assert.deepEqual(buildUp(10, 2, 3), { sessions: [10, 12, 14], total: 36 });
  assert.deepEqual(buildUp(5, 5, 0), { sessions: [], total: 0 });
});
