import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';

// Grade 6 History Term 1 (Mapungubwe), branch A: standard shape, labelled pictures, and every date and duration in the bank recomputed with plain arithmetic
// (not the history6 helper). CAPS gives Mapungubwe 1220 to 1300 exactly; every other date is approximate and the lessons say "about".
stubCss();
const aMod = await import('./term1/limpopo-valley-k2-schroda/LimpopoValleyK2Schroda');
const bMod = await import('./term1/mapungubwe-kingdom/MapungubweKingdom');
const cMod = await import('./term1/mapungubwe-trade-today/MapungubweTradeToday');
const lessons = { limpopo: renderSlides(aMod.learnSteps), kingdom: renderSlides(bMod.learnSteps), trade: renderSlides(cMod.learnSteps) };
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text.replace(/ /g, ' ')).join(' | ');
const key = (bank: { prompt: string; answer: string }[], start: string): string => {
  const hit = bank.filter((b) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, `exactly one question starts with: ${start}`);
  return hit[0].answer.replace(/ /g, ' ');
};

test('all three lessons have the standard shape and labelled pictures; 14 questions with four distinct options', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
  }
  for (const bank of [aMod.bank, bMod.bank, cMod.bank]) {
    assert.equal(bank.length, 14);
    for (const b of bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
  }
});

test('INDEPENDENT: durations and dates', () => {
  assert.equal(key(aMod.bank, 'Schroda lasted from about AD 900 to AD 1000'), `${1000 - 900} years`);
  assert.equal(key(aMod.bank, 'K2 lasted from about AD 1000 to AD 1220'), `${1220 - 1000} years`);
  assert.equal(key(aMod.bank, 'Mapungubwe lasted from AD 1220 to AD 1300'), `${1300 - 1220} years`);
  assert.equal(key(aMod.bank, 'From the start of Schroda'), `${1300 - 900} years`);
  assert.equal(key(aMod.bank, 'About which year did the people of K2 move'), 'About AD 1220');
  assert.equal(key(aMod.bank, 'Which settlement came first'), 'Schroda');
  assert.equal(key(aMod.bank, 'Which settlement came after K2'), 'Mapungubwe');
  assert.equal(key(bMod.bank, 'A state that began in AD 1220'), `${1300 - 1220} years`);
  assert.equal(key(bMod.bank, 'Between which years was Mapungubwe a state'), 'AD 1220 to 1300');
  assert.equal(key(cMod.bank, 'In which year was the Mapungubwe Cultural Landscape'), '2003');
  const a = text('limpopo');
  for (const s of ['100 years', '220 years', '80 years', '400 years', 'about AD 900 to 1000', 'about AD 1000 to 1220', 'AD 1220 to 1300', 'Limpopo', 'archaeologists', 'glass beads', 'ivory', 'continuity']) assert.ok(a.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  const b = text('kingdom');
  for (const s of ['first state in southern Africa', 'sacred', 'Mapungubwe Hill', 'first stone-walled palace', 'first town', 'social class', 'K2', '80 years']) assert.ok(b.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  const c = text('trade');
  for (const s of ['golden rhinoceros', 'royal power', 'globalisation', 'Indian Ocean', 'gold and ivory', 'glass beads', 'on foot', 'lack of water', '2003', '2002', 'World Heritage Site', 'Order of Mapungubwe', 'more than 700 years ago']) assert.ok(c.toLowerCase().includes(s.toLowerCase()), `missing ${s}`);
  assert.ok(2026 - 1300 > 700, 'more than 700 years ago is true');
});

test('the Mapungubwe lessons treat it as an African achievement and avoid ranking words', () => {
  const all = ['limpopo', 'kingdom', 'trade'].map((k) => text(k as 'limpopo')).join(' ');
  assert.ok(/people of southern Africa|southern Africa itself|built by the people/i.test(all));
  assert.ok(!/\b(primitive|savage|backward|tribe)\b/i.test(all));
});
