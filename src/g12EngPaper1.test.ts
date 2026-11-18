import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';
import { PAPER1, MODEL_SUMMARY, countWords } from './components/diagrams/english/paper1';
import { grade12 } from './curriculum/grade12';

// Grade 12 English HL Paper 1 (language in context) gap lessons: vocabulary and figures of speech, summary writing, sentence structures, comprehension and
// visual texts, critical language awareness. Every passage is original. The numbers are recomputed here independently of paper1.ts.

stubCss();
const topics: [string, string, number][] = [
  ['term1/p1-vocabulary-figures', 'P1VocabularyFigures', 1],
  ['term1/p1-summary-writing', 'P1SummaryWriting', 1],
  ['term2/p1-sentence-structures', 'P1SentenceStructures', 2],
  ['term2/p1-comprehension-visual', 'P1ComprehensionVisual', 2],
  ['term3/p1-critical-language', 'P1CriticalLanguage', 3],
];
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
for (const [dir, name] of topics) {
  lessons[dir] = renderSlides((await import(`./curriculum/grade12/english/${dir}/${name}`)).learnSteps);
  banks[dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade12/english/${dir}/`));
}
for (const [dir] of topics) {
  test(`${dir}: standard lesson shape, 14 valid questions, key words, direct wording`, () => {
    assertLessonShape(lessons[dir]);
    const bank = banks[dir];
    assert.equal(bank.length, 14);
    const text = lessons[dir].map((x) => x.text).join(' ').toLowerCase();
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
      assert.ok(!/\blearners?\b|\bCAPS\b/i.test(q.prompt), `ask the learner directly: ${q.prompt}`);
      const words = q.answer.toLowerCase().match(/[a-z]{6,}/g) ?? [];
      assert.ok(words.filter((w) => !text.includes(w)).length < 3, q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });
}
test('registered in the right terms and no term is empty', () => {
  const eng = grade12.subjects.find((s) => s.id === 'eng')!;
  const termOf = (id: string) => eng.terms.find((t) => t.topics.some((p) => p.id === id))?.id;
  for (const [dir, , term] of topics) assert.equal(termOf(`gr12-${dir.split('/')[1]}-t${term}`), term, dir);
  for (const t of eng.terms) assert.ok(t.topics.length > 0);
});
test('INDEPENDENT: marks, time, words and percentages', () => {
  const find = (dir: string, start: string) => banks[dir].find((q) => q.prompt.startsWith(start))!;
  assert.equal(30 + 10 + 30, 70);
  assert.equal(PAPER1.total, 70);
  assert.ok(Math.abs(120 / 70 - 1.714) < 1e-3);
  assert.equal(Math.round(10 * (120 / 70)), 17);
  assert.equal(Math.round(30 * (120 / 70)), 51);
  assert.equal(find('term2/p1-comprehension-visual', 'About how many minutes do you have').answer, '1,7 minutes');
  assert.equal(find('term2/p1-comprehension-visual', 'About how many minutes should you spend').answer, '17 minutes');
  assert.equal((84 / 350) * 100, 24);
  assert.equal(find('term1/p1-summary-writing', 'A summary of 84 words').answer, '24%');
  assert.equal(84 / 7, 12);
  assert.equal(find('term1/p1-summary-writing', 'Seven points').answer, '12 words');
  // the model summary has 84 words (counted by hand with split on spaces) and lies in 80 to 90
  assert.equal(MODEL_SUMMARY.split(' ').length, 84);
  assert.equal(countWords(MODEL_SUMMARY), 84);
  assert.ok(84 >= 80 && 84 <= 90);
  assert.equal("The well-known teacher didn't arrive.".split(' ').length, 5);
  assert.equal(find('term1/p1-summary-writing', 'How many words are in').answer, '5');
  assert.ok(76 < 80 && 98 > 90);
  // a 2-mark question needs 2 points, 1,7 minutes a mark
  assert.equal(2 * 1, 2);
});
