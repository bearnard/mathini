import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 9 Life Orientation gaps (values, national days, NSC and NCV, workplace, violence, funding, religions and peace, sport ethics, challenging situations).
// Qualitative lessons: tests check shape, bank quality, key words, help sources, and the wording rules (ask the learner directly, no CAPS or learners in prompts, no graphic words).

stubCss();
const topics: [string, string, string[]][] = [
  ['term2/constitutional-values-role-models', 'ConstitutionalValuesRoleModels', []],
  ['term2/national-days', 'NationalDays', []],
  ['term2/nsc-and-ncv', 'NscAndNcv', []],
  ['term2/workplace-rights', 'WorkplaceRights', []],
  ['term3/violence-causes-help', 'ViolenceCausesHelp', ['116', '0800 428 428', '10111']],
  ['term4/study-career-funding', 'StudyCareerFunding', []],
  ['term4/religions-and-peace', 'ReligionsAndPeace', []],
  ['term4/sport-ethics', 'SportEthics', []],
  ['term4/challenging-situations', 'ChallengingSituations', ['116']],
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const allowedNumbers = new Set(['116', '0800 428 428', '0800 012 322', '10111']);
for (const [dir, name, help] of topics) {
  const steps = (await import(`./curriculum/grade9/life-orientation/${dir}/${name}`)).learnSteps;
  const lesson = renderSlides(steps);
  const bank = extractCuratedBanks().filter((q) => q.file.includes(`grade9/life-orientation/${dir}/`));
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
test('INDEPENDENT: the national days, dates as in the standard record', async () => {
  const { DAYS } = await import('./curriculum/grade9/life-orientation/_shared/days');
  const got = Object.fromEntries(DAYS.map((d) => [d.name, `${d.day} ${d.month}`]));
  assert.deepEqual(got, {
    'Human Rights Day': '21 March', 'Freedom Day': '27 April', "Workers' Day": '1 May', 'Africa Day': '25 May', 'Youth Day': '16 June',
    'World Refugee Day': '20 June', 'Nelson Mandela Day': '18 July', "Women's Day": '9 August', 'Heritage Day': '24 September', 'Reconciliation Day': '16 December',
  });
});
test('the violence and challenging-situations lessons say that it is never the victim\u2019s fault or name a trusted adult and a help line', async () => {
  const v = renderSlides((await import('./curriculum/grade9/life-orientation/term3/violence-causes-help/ViolenceCausesHelp')).learnSteps).map((s) => s.text).join(' ');
  assert.ok(/never the victim|never acceptable|victim.{0,3}s fault/i.test(v));
  const c = renderSlides((await import('./curriculum/grade9/life-orientation/term4/challenging-situations/ChallengingSituations')).learnSteps).map((s) => s.text).join(' ');
  assert.ok(/trusted adult/.test(c) && /Childline on 116/.test(c) && /school counsellor/.test(c));
  assert.ok(!/\b(overdose|hanging|cutting yourself|pills)\b/i.test(c), 'no self-harm methods');
});
