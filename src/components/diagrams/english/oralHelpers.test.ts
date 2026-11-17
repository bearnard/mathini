import test from 'node:test';
import assert from 'node:assert/strict';
import { DURATIONS, EXAMPLE, PAPER4, exampleTotal, paper4Percent, paper4Total, preparedMarks, rangeText } from './oralHelpers';

test('INDEPENDENT: Paper 4 marks, by hand', () => {
  assert.equal(2 * 10, 20);
  assert.equal(preparedMarks(), 20);
  assert.equal(20 + 15 + 15, 50);
  assert.equal(paper4Total(), 50);
  assert.equal(PAPER4.endOfYearTotal, 300);
  assert.equal(50 / 300, 1 / 6);
  assert.equal(paper4Percent(), 16.7);
  assert.equal(12 + 8 + 9 + 11, 40);
  assert.equal(exampleTotal(EXAMPLE), 40);
});

test('durations match the CAPS table', () => {
  const by = (t: string) => DURATIONS.find((d) => d.text.startsWith(t))!;
  assert.equal(rangeText(by('Prepared')), '4 to 5 minutes');
  assert.equal(rangeText(by('Unprepared')), '2 to 3 minutes');
  assert.equal(rangeText(by('Interview')), '10 to 15 minutes');
  assert.equal(rangeText(by('Dialogue')), '6 to 8 minutes');
  assert.equal(rangeText(by('Debate')), '20 to 30 minutes');
  assert.equal(rangeText(by('Introducing')), '4 to 5 minutes');
});
