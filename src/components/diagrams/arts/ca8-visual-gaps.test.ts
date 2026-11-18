import test from 'node:test';
import assert from 'node:assert/strict';
import { complementOf, darker, darkness, ELEMENTS, extraInT4, PAIRS, PENCILS, PINCH_STEPS, PRINCIPLES_T1, SCRAPER_STEPS, stepNumber } from './ca8-visual-gaps';

// Written from art teaching practice, not from the helper.
test('complementary colours are opposite on the wheel: red green, blue orange, yellow purple, and the pairing is symmetric', () => {
  assert.equal(complementOf('red'), 'green');
  assert.equal(complementOf('blue'), 'orange');
  assert.equal(complementOf('yellow'), 'purple');
  for (const [a, b] of PAIRS) {
    assert.equal(complementOf(a), b);
    assert.equal(complementOf(b), a);
  }
  assert.equal(PAIRS.length, 3);
});

test('pencil grades: a higher B number is softer and darker, HB the lightest of the four', () => {
  assert.deepEqual([...PENCILS], ['HB', '2B', '3B', '4B']);
  assert.equal(darker('2B', '4B'), '4B');
  assert.equal(darker('3B', 'HB'), '3B');
  assert.ok(darkness('2B') < darkness('3B') && darkness('3B') < darkness('4B'));
});

test('five art elements and five design principles for the lettering project, harmony and rhythm are added in term 4', () => {
  assert.equal(ELEMENTS.length, 5);
  assert.ok(ELEMENTS.includes('complementary colour'));
  assert.equal(PRINCIPLES_T1.length, 5);
  assert.deepEqual(extraInT4().sort(), ['harmony', 'rhythm']);
});

test('craft steps: wax before ink, ink before drying, scratching last; pinch pot walls come after the thumb', () => {
  assert.equal(SCRAPER_STEPS.length, 4);
  assert.equal(stepNumber(SCRAPER_STEPS, 'Cover the paper'), 1);
  assert.equal(stepNumber(SCRAPER_STEPS, 'Paint black'), 2);
  assert.equal(stepNumber(SCRAPER_STEPS, 'Let the paint dry'), 3);
  assert.equal(stepNumber(SCRAPER_STEPS, 'Scratch'), 4);
  assert.equal(PINCH_STEPS.length, 5);
  assert.ok(stepNumber(PINCH_STEPS, 'Press your thumb') < stepNumber(PINCH_STEPS, 'Pinch and turn'));
  assert.equal(stepNumber(PINCH_STEPS, 'Not a step'), 0);
});
