import test from 'node:test';
import assert from 'node:assert/strict';
import { assignBlocks, barHeights, comma, minutesPerMark, minutesText, percent, weeklyMinutes } from './lo7Helpers';

test('assignBlocks shares 10 blocks between 3 subjects in turn: 4, 3, 3', () => {
  const a = assignBlocks(['Maths', 'English', 'Natural Sciences'], 5, 2);
  assert.equal(a.total, 10);
  assert.deepEqual(a.counts, [
    { subject: 'Maths', blocks: 4 },
    { subject: 'English', blocks: 3 },
    { subject: 'Natural Sciences', blocks: 3 },
  ]);
  assert.deepEqual(a.grid[0], ['Maths', 'English']);
  assert.deepEqual(a.grid[1], ['Natural Sciences', 'Maths']);
  assert.equal(a.counts.reduce((s, c) => s + c.blocks, 0), a.total);
});

test('minutesText', () => {
  assert.equal(minutesText(300), '5 h');
  assert.equal(minutesText(90), '1 h 30 min');
  assert.equal(minutesText(45), '45 min');
  assert.equal(minutesText(60), '1 h');
});

test('comma and minutesPerMark: a 30-mark test in 45 minutes is 1,5 minutes a mark', () => {
  assert.equal(minutesPerMark(45, 30), 1.5);
  assert.equal(comma(minutesPerMark(45, 30)), '1,5');
  assert.equal(comma(2), '2');
  assert.equal(minutesPerMark(10, 0), 0);
});

test('percent and weeklyMinutes', () => {
  assert.equal(percent(30, 40), 75);
  assert.equal(percent(1, 0), 0);
  assert.equal(weeklyMinutes(20, 3), 60);
});

test('barHeights scale to the biggest value', () => {
  assert.deepEqual(barHeights([6, 9], 36), [24, 36]);
  assert.deepEqual(barHeights([0, 0]), [0, 0]);
});
