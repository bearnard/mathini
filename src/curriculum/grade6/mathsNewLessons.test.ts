import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../components/subjects/lesson/lessonTest';

// Grade 6 Mathematics, the CAPS gap topics: every lesson has the standard shape (docs/notes/lesson-standard.md), labelled pictures, no decimal point,
// and the worked numbers are the true ones (independent arithmetic below).
stubCss();
const lessons = {
  add5: renderSlides((await import('./term1/whole-numbers/AddSubtract5Digit')).learnSteps),
  add6: renderSlides((await import('./term3/whole-numbers/AddSubtract6Digit')).learnSteps),
};
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text).join(' | ');

test('every new Grade 6 maths lesson has the standard shape, labelled pictures and a sensible length', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) {
      assert.ok(s.text.split(' ').length < 330, `${name} / ${s.title}: too long`);
      assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
      assert.ok(!/\d\.\d/.test(s.text), `${name} / ${s.title}: a decimal point, use a comma`);
    }
  }
});

test('Adding and subtracting 5-digit numbers: the worked numbers are true', () => {
  const t = text('add5');
  assert.match(t, /46 000/);
  assert.match(t, /12 000/);
  assert.match(t, /58 000/);
  assert.match(t, /58 023/);
  assert.match(t, /85 483/);
  assert.match(t, /53 059/);
  assert.match(t, /77 850/);
  assert.match(t, /22 553/);
  assert.match(t, /R37/);
  assert.match(t, /5 566/);
  assert.equal(45678 + 12345, 58023);
  assert.equal(56423 + 7581 + 21479, 85483);
  assert.equal(98743 - 45684, 53059);
  assert.equal(45362 + 32488, 77850);
  assert.equal(54687 - 32134, 22553);
  assert.equal(200 - 163, 37);
  assert.equal(4567 + 999, 5566);
});

test('Adding and subtracting 6-digit numbers: the worked numbers are true', () => {
  const t = text('add6');
  for (const n of ['469 134', '601 105', '434 522', '812 888', '524 244', 'R224 442', 'R496 893', 'R600 000', '654 322', '423 455']) assert.ok(t.includes(n), `missing ${n}`);
  assert.equal(345678 + 123456, 469134);
  assert.equal(502340 + 98765, 601105);
  assert.equal(800000 - 365478, 434522);
  assert.equal(126789 + 341567 + 344532, 812888);
  assert.equal(866589 - 342345, 524244);
  assert.equal(268231 - 43789, 224442);
  assert.equal(864328 - 367435, 496893);
  assert.equal(589544 + 10456, 600000);
  assert.equal(1000000 - 345678, 654322);
  assert.equal(123456 + 299999, 423455);
  assert.equal(725604 - 389215, 336389);
  assert.ok(t.includes('R336 389'));
});
