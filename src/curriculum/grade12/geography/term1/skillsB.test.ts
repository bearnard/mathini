import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../../components/subjects/lesson/lessonTest';

// Grade 12 Geography skills, branch B (contours, gradient, cross-sections, intervisibility; aerial photographs and orthophoto maps): standard shape,
// labelled pictures, and every numeric bank key recomputed with plain arithmetic (not the mapwork helpers).
stubCss();
const cMod = await import('./contours-gradient-sections/ContoursGradientSectionsT1');
const aMod = await import('./aerial-orthophoto/AerialOrthophotoT1');
const lessons = { contours: renderSlides(cMod.learnSteps), aerial: renderSlides(aMod.learnSteps) };
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text.replace(/ /g, ' ')).join(' | ');
const key = (bank: { prompt: string; answer: string }[], start: string): string => {
  const hit = bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, `exactly one question starts with: ${start}`);
  return hit[0].answer.replace(/ /g, ' ');
};
const fmt = (n: number) => String(n).replace('.', ',');
const dist = (m: number) => (m >= 1000 ? `${fmt(m / 1000)} km` : `${fmt(m)} m`);
const sp = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

test('both lessons have the standard shape and labelled pictures, 14 questions each with four distinct options', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
  }
  for (const bank of [cMod.bank, aMod.bank]) {
    assert.equal(bank.length, 14);
    for (const b of bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
  }
});

// a plain implementation of the line of sight, independent of mapwork.ts
const sees = (h: number[]) => h.every((v, i) => i === 0 || i === h.length - 1 || v < h[0] + ((h[h.length - 1] - h[0]) * i) / (h.length - 1));

test('INDEPENDENT: contour, gradient, section and intervisibility keys', () => {
  const b = cMod.bank;
  assert.equal(key(b, 'The contour interval is 20 m'), `${sp(1000 + 3 * 20)} m`);
  assert.equal(key(b, 'The height difference between two points is 100 m'), `1:${fmt(2500 / 100)}`);
  assert.equal(key(b, 'Point A is at 1 200 m'), `1:${fmt((2 * 500) / (1300 - 1200))}`);
  assert.equal(key(b, 'Which of these gradients is the steepest'), `1:${Math.min(10, 25, 50, 100)}`);
  assert.equal(key(b, 'A slope has a gradient of 1:20'), `${20 / 20} m`);
  assert.equal(key(b, 'The horizontal scale of a cross-section is 1:50 000 and the vertical scale is 1 cm = 20 m'), `${50000 / (20 * 100)} times`);
  assert.equal(key(b, 'A cross-section has a horizontal scale of 1:50 000 and a vertical scale of 1 cm = 10 m'), `${50000 / (10 * 100)} times`);
  assert.equal(key(b, 'On a cross-section 1 cm stands for 20 m'), `${fmt((1100 - 1000) / 20)} cm`);
  assert.equal(sees([1000, 1020, 1100, 1030, 1000]), false);
  assert.ok(key(b, 'The heights from A to B at equal steps are 1 000 m, 1 020 m').startsWith('No'));
  assert.equal(sees([1000, 940, 900, 960, 1000]), true);
  assert.ok(key(b, 'The heights from A to B at equal steps are 1 000 m, 940 m').startsWith('Yes'));
  assert.equal(key(b, 'Contour lines are close together'), 'A steep slope');
  const t = text('contours');
  for (const s of ['contour interval', 'gradient', 'vertical exaggeration', 'intervisible', 'upstream', '25 times', '1:10']) assert.ok(t.includes(s), `missing ${s}`);
  assert.equal((50000 / 2000), 25);
  assert.equal(1000 / 100, 10);
  assert.equal((1060 - 1000) / 20, 3);
});

test('INDEPENDENT: aerial photograph and orthophoto keys', () => {
  const b = aMod.bank;
  assert.equal(key(b, 'On a 1:10 000 orthophoto map two houses are 6 cm apart'), dist((6 * 10000) / 100));
  assert.equal(key(b, 'A road that is 500 m long'), `${fmt((500 * 100) / 10000)} cm`);
  assert.equal(key(b, 'On an aerial photograph, 4 cm stand for 400 m'), `1:${sp((400 * 100) / 4)}`);
  assert.equal(key(b, 'An orthophoto map at 1:10 000 is used'), 'The orthophoto map');
  const t = text('aerial');
  for (const s of ['horizon', 'tone', 'texture', 'shadow', 'pattern', '1:10 000', '1:50 000', '600 m', '5 cm', 'orient']) assert.ok(t.includes(s) || t.toLowerCase().includes(s), `missing ${s}`);
  assert.equal((8 * 10000) / 100, 800);
  assert.equal((1000 * 100) / 10000, 10);
  assert.equal((5 * 0 + 500 * 100) / 5, 10000);
});
