import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../../components/subjects/lesson/lessonTest';

// Grade 9 Natural Sciences Term 4 (the atmosphere): standard shape, labelled pictures, every numeric bank key recomputed with plain arithmetic, and the
// greenhouse wording: the lesson teaches that greenhouse gases trap HEAT and never says they trap ultraviolet radiation (the CAPS wording is physically wrong).
stubCss();
const aMod = await import('./atmosphere/Atmosphere');
const slides = renderSlides(aMod.learnSteps);
const text = slides.map((s) => s.text.replace(/ /g, ' ')).join(' | ');
const key = (start: string): string => {
  const hit = aMod.bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, `exactly one question starts with: ${start}`);
  return hit[0].answer.replace(/ /g, ' ');
};

test('the lesson has the standard shape and labelled pictures; the bank has 14 or 15 questions with four distinct options', () => {
  assertLessonShape(slides);
  for (const s of slides) assert.equal(s.labelled, s.pictures, `${s.title}: every picture has an aria label`);
  assert.ok(aMod.bank.length >= 14 && aMod.bank.length <= 15);
  for (const b of aMod.bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
});

test('INDEPENDENT: atmosphere keys', () => {
  assert.equal(key('How thick is the stratosphere'), `${50 - 10} km`);
  assert.equal(key('On a scale drawing with 1 cm for every 10 km'), `${(80 - 50) / 10} cm`);
  assert.equal(key('The temperature at sea level is 25 °C'), `${25 - 3000 / 100} °C`.replace('-', '−'));
  assert.equal(key('The temperature at sea level is 20 °C'), `${(20 - 5) * 100} m`.replace('1500', '1 500'));
  assert.equal(key('What percentage of the air is oxygen'), '21%');
  assert.equal(key('Which gas makes up most of the air'), 'Nitrogen');
  assert.equal(key('Which is the correct order of the layers'), 'Troposphere, stratosphere, mesosphere, thermosphere');
  assert.equal(78 + 21, 99);
  assert.equal(100 - 78 - 21, 1);
  assert.equal(25 - 3000 / 100, -5);
  assert.equal(25 - 1000 / 100, 15);
  assert.equal(30 - 2500 / 100, 5);
  assert.equal(40 / 10, 4);
  for (const s of ['78%', '21%', 'nitrogen', 'troposphere', 'stratosphere', 'mesosphere', 'thermosphere', 'ozone', 'ultraviolet', 'greenhouse', 'global warming', '1 °C for every 100 m', '−5 °C', '99%', '4 cm', 'Space Station', '370 km']) assert.ok(text.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
});

test('the greenhouse effect is taught as trapping heat, not as trapping ultraviolet radiation', () => {
  assert.ok(/trap heat/i.test(text), 'greenhouse gases trap heat');
  assert.ok(!/(greenhouse gases?|they) trap(s)? (the )?ultraviolet/i.test(text), 'never says greenhouse gases trap ultraviolet radiation');
  for (const b of aMod.bank) assert.ok(!/ultraviolet/i.test(b.prompt + b.options.join(' ')) || /ozone|stratosphere/i.test(b.prompt + b.options.join(' ')), `UV is only asked about ozone: ${b.prompt}`);
});
