import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';

// Grade 6 History Term 2, branch C: shape, labelled pictures, bank dates recomputed with plain arithmetic, and lesson text.
stubCss();
const rMod = await import('./term2/renaissance/RenaissanceLeonardoGalileo');
const iMod = await import('./term2/inventions-reasons-exploring/InventionsReasonsExploring');
const lessons = { ren: renderSlides(rMod.learnSteps), inv: renderSlides(iMod.learnSteps) };
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
  for (const bank of [rMod.bank, iMod.bank]) {
    assert.equal(bank.length, 14);
    for (const b of bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
  }
});

test('INDEPENDENT: dates and ages', () => {
  assert.equal(key(rMod.bank, 'Leonardo da Vinci was born in 1452'), `${1519 - 1452} years`);
  assert.equal(key(rMod.bank, 'Galileo was born in 1564'), `${1642 - 1564} years`);
  assert.equal(1564 - 1452, 112);
  assert.equal(key(iMod.bank, 'About when did the printing press'), 'About 1450');
  const r = text('ren');
  for (const s of ['rebirth', 'Mona Lisa', '1452', '1519', '67 years', '1564', '1642', '78 years', 'telescope', 'mountains', 'Jupiter', '112 years', 'about 1450']) assert.ok(r.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  const v = text('inv');
  for (const s of ['compass', 'astrolabe', 'caravel', 'spices', 'China', 'printing press', 'about 1450', 'Arab and African sailors']) assert.ok(v.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  assert.ok(!/\b(primitive|savage|backward|tribe)\b/i.test(`${r} ${v}`));
});
