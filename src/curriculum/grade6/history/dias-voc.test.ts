import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';

// Grade 6 History Term 2, branch D: shape, labelled pictures, bank dates recomputed with plain arithmetic, lesson text, and the Mossel Bay account told
// from both sides in plain words.
stubCss();
const dMod = await import('./term2/dias-da-gama/DiasDaGama');
const vMod = await import('./term2/voc-sailors/VocSailors');
const lessons = { dias: renderSlides(dMod.learnSteps), voc: renderSlides(vMod.learnSteps) };
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text.replace(/ /g, ' ')).join(' | ');
const key = (bank: { prompt: string; answer: string }[], start: string): string => {
  const hit = bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, `exactly one question starts with: ${start}`);
  return hit[0].answer.replace(/ /g, ' ');
};

test('standard shape, labelled pictures, 14 questions with four distinct options', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
  }
  for (const bank of [dMod.bank, vMod.bank]) {
    assert.equal(bank.length, 14);
    for (const b of bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
  }
});

test('INDEPENDENT: dates', () => {
  assert.equal(key(dMod.bank, 'In which year did Dias sail'), '1488');
  assert.equal(key(dMod.bank, 'How many years after Dias'), `${1497 - 1488} years`);
  assert.equal(key(vMod.bank, 'The VOC began trading as a company'), '1602');
  assert.equal(key(dMod.bank, 'Which Portuguese sailor was the first European'), 'Vasco da Gama');
  const d = text('dias');
  for (const s of ['1488', '1497', '1498', '9 years', 'Mossel Bay', 'Khoikhoi', 'water', 'cattle', 'Portugal', 'local pilot']) assert.ok(d.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  const v = text('voc');
  for (const s of ['1602', 'Dutch East India Company', 'scurvy', 'vitamin C', 'salted meat', 'many months', 'captain', 'surgeon']) assert.ok(v.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
});

test('Mossel Bay is told from both sides, in plain words, without graphic or blaming language', () => {
  const d = text('dias');
  assert.ok(/needed fresh water/i.test(d) && /protect(ed|ing)? their water and (their )?cattle/i.test(d), 'both sides give their reasons');
  assert.ok(!/\b(savage|primitive|barbarian|hostile natives|blood|slaughter|massacre|stabbed|brutal)\b/i.test(`${d} ${text('voc')}`));
  assert.ok(!/\bdiscover(ed|y)\b[^.]{0,40}\b(South Africa|the Cape|Mossel Bay)\b/i.test(d), 'not described as discovering a place where people lived');
});
