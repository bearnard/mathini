import test from 'node:test';
import assert from 'node:assert/strict';
import * as p from './paper1';

test('paper layout: 30 + 10 + 30 = 70 marks in 120 minutes, 1,7 minutes a mark, sections 51, 17 and 51 minutes', () => {
  assert.equal(p.PAPER1.comprehension + p.PAPER1.summary + p.PAPER1.language, p.PAPER1.total);
  assert.equal(p.minutesPerMark(), 1.7);
  assert.deepEqual([30, 10, 30].map(p.sectionMinutes), [51, 17, 51]);
  assert.equal(51 + 17 + 51, 119);
});
test('word counting: hyphenated words and contractions count as one word', () => {
  assert.equal(p.countWords('The well-known teacher didn’t arrive.'), 5);
  assert.equal(p.countWords('  one   two three '), 3);
  assert.equal(p.countWords(''), 0);
});
test('the model summary is within 80 to 90 words and seven points of about 12 words fit the limit', () => {
  assert.equal(p.MODEL_WORDS, p.MODEL_SUMMARY.split(' ').length);
  assert.ok(p.inRange(p.MODEL_WORDS), `${p.MODEL_WORDS}`);
  assert.equal(p.wordsPerPoint(84), 12);
  assert.ok(p.inRange(7 * 12) && !p.inRange(7 * 10) && !p.inRange(7 * 14));
});
