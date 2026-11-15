import test from 'node:test';
import assert from 'node:assert/strict';
import { DAY_LABELS, attendancePercent, bestOption, criteriaMet, meetsTarget, polar, scoreDrop, sessionsIn, weeksMeeting, wordCount } from './loHelpers';

test('sessions in a week and the target check', () => {
  const week = [true, false, true, false, true, false, false];
  assert.equal(DAY_LABELS.length, 7);
  assert.equal(sessionsIn(week), 3);
  assert.equal(meetsTarget(week, 3), true);
  assert.equal(meetsTarget(week, 4), false);
  assert.equal(sessionsIn([]), 0);
});

test('attendance percentage', () => {
  assert.equal(attendancePercent(9, 12), 75);
  assert.equal(attendancePercent(12, 12), 100);
  assert.equal(attendancePercent(0, 0), 0);
});

test('weeks meeting a target', () => {
  assert.equal(weeksMeeting([3, 3, 2, 4], 3), 3);
  assert.equal(weeksMeeting([], 3), 0);
});

test('score drop', () => {
  assert.equal(scoreDrop(8, 5), 3);
  assert.equal(scoreDrop(4, 6), -2);
});

test('criteria met and best option', () => {
  const a = { name: 'a', safe: true, affordable: true, enjoyable: true, accessible: true };
  const b = { name: 'b', safe: true, affordable: false, enjoyable: true, accessible: false };
  assert.equal(criteriaMet(a), 4);
  assert.equal(criteriaMet(b), 2);
  assert.equal(bestOption([b, a]).name, 'a');
  assert.equal(bestOption([b, { ...b, name: 'c' }]).name, 'b');
});

test('polar starts at the top and goes clockwise', () => {
  assert.deepEqual(polar(100, 100, 50, 0, 4), { x: 100, y: 50 });
  assert.deepEqual(polar(100, 100, 50, 1, 4), { x: 150, y: 100 });
  assert.deepEqual(polar(100, 100, 50, 2, 4), { x: 100, y: 150 });
  assert.deepEqual(polar(100, 100, 50, 3, 4), { x: 50, y: 100 });
});

test('word count', () => {
  assert.equal(wordCount('  one two   three '), 3);
  assert.equal(wordCount(''), 0);
});
