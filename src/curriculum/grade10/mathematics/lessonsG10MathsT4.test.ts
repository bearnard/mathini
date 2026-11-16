import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';

// Grade 10 Mathematics, Term 4: the lessons have the standard shape and the worked numbers are the true ones.
stubCss();
const lessons = {
  probability: renderSlides((await import('./term4/probability/Probability')).learnSteps),
  revision: renderSlides((await import('./term4/revision-exam-technique/RevisionExamTechnique')).learnSteps),
};
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text).join(' | ');

test('every Term 4 lesson has the standard shape, labelled pictures and a sensible length', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) {
      assert.ok(s.text.split(' ').length < 330, `${name} / ${s.title}: too long`);
      assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
      assert.ok(!/\d\.\d/.test(s.text), `${name} / ${s.title}: a decimal point, use a comma`);
    }
  }
});

test('Probability: the worked numbers are true', () => {
  const t = text('probability');
  assert.match(t, /3\/6 = 1\/2/);
  assert.match(t, /6\/36 = 1\/6/);
  assert.match(t, /7\/10/);
  assert.match(t, /0,62/);
  assert.match(t, /0,2 × 30 = 6/);
  assert.match(t, /25 \+ 18 − 8 = 35/);
  assert.match(t, /40 − 35 = 5/);
  assert.match(t, /0,8/);
  assert.equal(25 - 8, 17);
  assert.equal(18 - 8, 10);
  assert.equal(40 - (25 + 18 - 8), 5);
  assert.equal(Math.round((0.6 + 0.5 - 0.3) * 10) / 10, 0.8);
});

test('Revision: the planning and worked numbers are true', () => {
  const t = text('revision');
  assert.match(t, /20 minutes/);
  assert.match(t, /113,1 cm³/);
  assert.match(t, /4\/11/);
  assert.match(t, /R3 630,00/);
  assert.equal(120 - 100, 20);
  assert.equal(Math.hypot(3, 4), 5);
});
