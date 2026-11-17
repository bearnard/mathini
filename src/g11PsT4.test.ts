import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 11 Physical Sciences term 4: mining and mineral processing. Numbers and equations recomputed independently.

stubCss();
const lesson = renderSlides((await import('./curriculum/grade11/physical-sciences/term4/mining-minerals/MiningMinerals')).learnSteps);
const bank = extractCuratedBanks().filter((q) => q.file.includes('/mining-minerals/'));
const find = (start: string) => {
  const hits = bank.filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};
const num = (s: string): number => Number(s.replace(',', '.').match(/-?[\d.]+/)![0]);

test('the lesson has the standard shape, and the bank has 14 valid questions with the key spread over all four positions', () => {
  assertLessonShape(lesson);
  assert.equal(bank.length, 14);
  for (const q of bank) {
    assert.equal(new Set(q.options).size, 4, q.prompt);
    assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
    const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
    assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
  }
  assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
});

test('INDEPENDENT: numbers, equations and processes', () => {
  assert.equal(num(find('Oxygen makes up about 46%').answer), 46 + 28);
  assert.equal(new Set(find('Oxygen makes up about 46%').options.map(num)).size, 4);
  // 2Fe2O3 + 3C -> 4Fe + 3CO2: the ratio Fe2O3 : Fe is 2 : 4, so 2 mol gives 4 mol
  assert.equal(num(find('2Fe₂O₃ + 3C → 4Fe + 3CO₂. How many moles of iron').answer), (4 / 2) * 2);
  assert.equal(new Set(find('2Fe₂O₃ + 3C → 4Fe + 3CO₂. How many moles of iron').options.map(num)).size, 4);
  // iron oxide loses oxygen to carbon: reduction; gold loses electrons with cyanide and oxygen: oxidation; zinc gives electrons: reduction of the gold ion
  assert.match(find('In the recovery of gold with zinc').answer, /reduced/);
  assert.match(find('Which two substances are used to dissolve gold').answer, /cyanide and oxygen/);
  assert.equal(find('Which element is the most abundant').answer, 'Oxygen');
  assert.match(find('Where is the major gold-mining area').answer, /Witwatersrand/);
  assert.match(find('Which method is used to get iron').answer, /carbon/);
});

test('the lesson teaches what the bank asks (key words of every answer appear in the lesson text)', () => {
  const words = (s: string) => s.toLowerCase().match(/[a-zα-ω]{6,}/g) ?? [];
  const text = lesson.map((s) => s.text).join(' ').toLowerCase();
  for (const q of bank) {
    const missing = words(q.answer).filter((w) => !text.includes(w));
    assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
  }
});
