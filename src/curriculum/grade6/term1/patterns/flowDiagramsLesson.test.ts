import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../../components/subjects/lesson/lessonTest';

stubCss();
const slides = renderSlides((await import('./FlowDiagrams')).learnSteps);

test('Grade 6 Flow Diagrams has the standard shape and covers every bank question', () => {
  assertLessonShape(slides);
  assert.equal(slides.length, 6);
});

test('Grade 6 Flow Diagrams: the worked numbers are true', () => {
  assert.match(slides[0].text, /6 × 4 = 24/);
  assert.match(slides[0].text, /6 \+ 4 = 10/);
  assert.match(slides[1].text, /30 ÷ 5 = 6/);
  assert.match(slides[1].text, /4 \+ 7 = 11/);
  assert.match(slides[2].text, /17 − 9 = 8/);
  assert.match(slides[2].text, /17 \+ 9 = 26/);
  assert.match(slides[3].text, /fits \+ 9 and × 4|fits × 4 and \+ 9/);
  assert.match(slides[3].text, /5 \+ 9 = 14/);
  assert.match(slides[3].text, /7 × 4 = 28/);
  assert.match(slides[4].text, /5 × 2 = 10/);
  assert.match(slides[4].text, /10 \+ 1 = 11/);
  assert.match(slides[4].text, /\(5 \+ 1\) × 2 = 12/);
  assert.match(slides[5].text, /7 × 6 = 42/);
  assert.match(slides[5].text, /20 − 8 = 12/);
  assert.match(slides[5].text, /rule is × 5/);
  assert.match(slides[5].text, /12 \+ 2 = 14/);
});
