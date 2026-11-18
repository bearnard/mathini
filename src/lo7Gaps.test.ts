import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 7 Life Orientation gaps (reading and memory, abuse, environmental health, diet, common diseases, oral traditions and scriptures).
// Qualitative lessons: tests check shape, bank quality, key words, help sources, and the wording rules (ask the learner directly, no CAPS or learners in prompts, no graphic words).

stubCss();
const topics: [string, string, string[]][] = [
  ['term1/reading-studying-memory', 'ReadingStudyingMemory', []],
  ['term2/dealing-with-abuse', 'DealingWithAbuse', ['116', '10111']],
  ['term3/environmental-health', 'EnvironmentalHealth', []],
  ['term4/diet-and-nutrition', 'DietAndNutrition', []],
  ['term4/common-diseases-tb-diabetes-epilepsy', 'CommonDiseasesTbDiabetesEpilepsy', []],
  ['term4/common-diseases-obesity-anorexia-hiv', 'CommonDiseasesObesityAnorexiaHiv', ['116', '0800 012 322']],
  ['term4/oral-traditions-and-scriptures', 'OralTraditionsAndScriptures', []],
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const allowedNumbers = new Set(['116', '0800 428 428', '0800 012 322', '10111']);
for (const [dir, name, help] of topics) {
  const steps = (await import(`./curriculum/grade7/life-orientation/${dir}/${name}`)).learnSteps;
  const lesson = renderSlides(steps);
  const bank = extractCuratedBanks().filter((q) => q.file.includes(`grade7/life-orientation/${dir}/`));
  test(`${dir}: standard lesson shape, 14 valid questions, key words, direct wording`, () => {
    assertLessonShape(lesson);
    assert.equal(bank.length, 14);
    const text = lesson.map((x) => x.text).join(' ').toLowerCase();
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
      assert.ok(!/\blearners?\b|\bCAPS\b/i.test(q.prompt), `ask the learner directly: ${q.prompt}`);
      const words = q.answer.toLowerCase().match(/[a-z]{6,}/g) ?? [];
      assert.ok(words.filter((w) => !text.includes(w)).length < 3, `${q.prompt}`);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
    for (const n of help) assert.ok(lesson.map((x) => x.text).join(' ').includes(n), `${dir} names ${n}`);
    // only the approved helplines appear as numbers anywhere in the lesson text
    const nums = (lesson.map((x) => x.text).join(' ').match(/0800[ \d]{8,12}|\b10111\b|\b116\b/g) ?? []).map((s) => s.trim());
    for (const n of nums) assert.ok(allowedNumbers.has(n), `unapproved number ${n}`);
    // no graphic words
    assert.ok(!/\b(blood-stained|naked|genital|penis|vagina(?!l fluids)|orgasm|intercourse|suicide|self-harm)\b/i.test(text), 'no graphic wording');
  });
}
test('the abuse lesson says that it is never the child\u2019s fault and names a trusted adult and Childline; the diseases lesson gives no weights, calories or BMI', async () => {
  const v = renderSlides((await import('./curriculum/grade7/life-orientation/term2/dealing-with-abuse/DealingWithAbuse')).learnSteps).map((s) => s.text).join(' ');
  assert.ok(/never the fault of the child|never your fault/i.test(v));
  assert.ok(/trusted adult/.test(v) && /Childline on 116/.test(v));
  const d = renderSlides((await import('./curriculum/grade7/life-orientation/term4/common-diseases-obesity-anorexia-hiv/CommonDiseasesObesityAnorexiaHiv')).learnSteps).map((s) => s.text).join(' ');
  assert.ok(!/\b\d+\s?(kg|kilogram|calorie|kJ)\b/i.test(d) && !/\bBMI\b/.test(d), 'no weights, calories or BMI');
});
