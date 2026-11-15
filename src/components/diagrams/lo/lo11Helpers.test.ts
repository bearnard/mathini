import test from 'node:test';
import assert from 'node:assert/strict';
import { barHeights, change, examPlan, fetSubjects, gapToGoal, perEvening, phaseOf, weeklyMinutes } from './lo11Helpers';

test('change: sit-ups from 18 to 26 is 8 more', () => {
  assert.deepEqual(change(18, 26), { from: 18, to: 26, diff: 8, direction: 'up' });
  assert.equal(change(9, 9).direction, 'same');
  assert.equal(change(9, 5).diff, -4);
});

test('gapToGoal: 54 to reach 60 is 6 points, and never negative', () => {
  assert.equal(gapToGoal(54, 60), 6);
  assert.equal(gapToGoal(70, 60), 0);
});

test('weeklyMinutes: 4 sessions of 20 minutes are 80 minutes', () => {
  assert.equal(weeklyMinutes(20, 4), 80);
});

test('perEvening: 8 topics over 4 evenings is 2 each', () => {
  assert.deepEqual(perEvening(8, 4), { each: 2, rest: 0 });
  assert.deepEqual(perEvening(9, 4), { each: 2, rest: 1 });
});

test('examPlan: a 60-mark, 90-minute paper with 15 minutes to read and 15 to check gives 1 minute a mark', () => {
  const p = examPlan(90, 60, 15, 15, [20, 40]);
  assert.equal(p.answering, 60);
  assert.equal(p.perMark, 1);
  assert.deepEqual(p.sections, [20, 40]);
  assert.equal(p.sumMarks, 60);
  assert.equal(15 + 15 + p.sections.reduce((a, b) => a + b, 0), 90);
});

test('fetSubjects: four compulsory plus three chosen make seven', () => {
  const f = fetSubjects();
  assert.equal(f.compulsory.length, 4);
  assert.equal(f.chosen, 3);
  assert.equal(f.total, 7);
});

test('phaseOf: Grades 7-9 are the Senior Phase and Grades 10-12 are FET', () => {
  assert.equal(phaseOf(9), 'Senior Phase');
  assert.equal(phaseOf(10), 'FET');
  assert.equal(phaseOf(12), 'FET');
  assert.equal(phaseOf(6), 'other');
});

test('barHeights: scaled to the tallest and totalled', () => {
  const b = barHeights([8, 9, 7, 10]);
  assert.equal(b.total, 34);
  assert.equal(b.bars[3].h, 40);
  assert.equal(b.bars[0].h, 32);
  assert.equal(barHeights([0, 0]).bars[0].h, 0);
});
