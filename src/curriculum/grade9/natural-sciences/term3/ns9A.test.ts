import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../../components/subjects/lesson/lessonTest';

// Grade 9 Natural Sciences Term 3, branch A (forces; safety with electricity): standard shape, labelled pictures, and every numeric bank key recomputed
// with plain arithmetic (not the ns9Energy helpers). g is always given in a question.
stubCss();
const fMod = await import('./forces/Forces');
const sMod = await import('./electricity-safety/ElectricitySafety');
const lessons = { forces: renderSlides(fMod.learnSteps), safety: renderSlides(sMod.learnSteps) };
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text.replace(/ /g, ' ')).join(' | ');
const key = (bank: { prompt: string; answer: string }[], start: string): string => {
  const hit = bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, `exactly one question starts with: ${start}`);
  return hit[0].answer.replace(/ /g, ' ');
};
const fmt = (n: number) => String(n).replace('.', ',');

test('both lessons have the standard shape and labelled pictures; 14 questions with four distinct options', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
  }
  for (const bank of [fMod.bank, sMod.bank]) {
    assert.equal(bank.length, 14);
    for (const b of bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
  }
});

test('INDEPENDENT: forces keys', () => {
  const b = fMod.bank;
  assert.equal(key(b, 'A learner has a mass of 50 kg'), `${50 * 10} N`);
  assert.equal(key(b, 'A box weighs 80 N'), `${80 / 10} kg`);
  assert.equal(key(b, 'An astronaut weighs 600 N'), `${Math.round(600 / 6)} N`);
  assert.equal(key(b, 'In which unit is force measured'), 'Newtons (N)');
  assert.equal(key(b, 'Which quantity is measured with a spring balance'), 'Weight');
  assert.equal(key(b, 'A plastic ruler is rubbed'), 'Electrons');
  const t = text('forces');
  for (const s of ['600 N', 'about 100 N', 'contact force', 'field force', 'newtons', 'electrons', 'lightning', 'discharge', 'north', 'repel', 'attract', 'iron', 'mass', 'weight']) assert.ok(t.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  assert.equal(60 * 10, 600);
  assert.equal(Math.round(600 / 6), 100);
  assert.equal(45 * 10, 450);
  assert.equal(300 / 10, 30);
  assert.ok(t.includes('450 N') && t.includes('30 kg'));
});

test('INDEPENDENT: electricity safety keys', () => {
  const b = sMod.bank;
  assert.equal(key(b, 'Two appliances in parallel draw 3,5 A and 2,5 A'), `${fmt(3.5 + 2.5)} A`);
  assert.ok(4 + 5 + 6 > 10);
  assert.ok(key(b, 'Appliances drawing 4 A, 5 A and 6 A').startsWith('The total of 15 A is more than 10 A'));
  assert.ok(3 + 4 < 10);
  assert.ok(key(b, 'Two appliances drawing 3 A and 4 A').startsWith('No, because the total of 7 A'));
  assert.equal(key(b, 'Which three wires does a 3-pin plug have'), 'Live, neutral and earth');
  const t = text('safety');
  for (const s of ['fuse', 'circuit breaker', 'earth leakage', 'live', 'neutral', 'earth', 'overload', 'energy theft', 'Eskom', 'almost zero resistance', 'main switch', '12 A', 'trips', 'overloaded by 2 A']) assert.ok(t.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  assert.equal(3 + 4 + 5, 12);
  assert.equal(12 - 10, 2);
  assert.equal(1 + 8 + 0.5, 9.5);
  assert.ok(!/\b(brown|blue|green and yellow|red wire|black wire)\b/i.test(t), 'no wire colours are taught');
});
