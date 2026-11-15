import test from 'node:test';
import assert from 'node:assert/strict';
import { byDeadline, gain, nearestDefender, openTeammate, PASS_SCENE, percentDone, progressBars } from './lo4Helpers';

test('progressBars scale against the maximum and cap at it', () => {
  assert.deepEqual(progressBars([4, 10], 10).map((b) => b.h), [16, 40]);
  assert.equal(progressBars([12], 10)[0].h, 40);
  assert.equal(progressBars([3], 0)[0].h, 0);
});

test('gain and percentDone', () => {
  assert.equal(gain(55, 65), 10);
  assert.equal(gain(4, 6), 2);
  assert.equal(percentDone(3, 5), 60);
  assert.equal(percentDone(4, 5), 80);
  assert.equal(percentDone(0, 0), 0);
});

test('byDeadline puts the nearest deadline first and keeps ties in order', () => {
  const sorted = byDeadline([
    { name: 'Read chapter', daysLeft: 7 },
    { name: 'Maths worksheet', daysLeft: 1 },
    { name: 'History project', daysLeft: 4 },
    { name: 'Spelling', daysLeft: 4 },
  ]);
  assert.deepEqual(sorted.map((t) => t.name), ['Maths worksheet', 'History project', 'Spelling', 'Read chapter']);
});

test('the pass scene: teammate B (index 1) is the open one, teammate A is marked', () => {
  const { mates, defenders } = PASS_SCENE;
  assert.equal(openTeammate([...mates], [...defenders]), 1);
  assert.ok(nearestDefender(mates[0], [...defenders]) < 10);
  assert.ok(nearestDefender(mates[1], [...defenders]) > 30);
  assert.equal(openTeammate([{ x: 0, y: 0 }], [{ x: 1, y: 1 }]), 0);
});
