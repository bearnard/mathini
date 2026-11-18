import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 11 Business Studies gaps: intellectual property, trade unions and the LRA, citizenship roles.
// These lessons are qualitative, so the tests check shape, bank quality and that key facts appear in the lesson.

stubCss();
const topics = [
  { dir: 'term1/intellectual-property-rights', mod: './curriculum/grade11/business-studies/term1/intellectual-property-rights/IntellectualPropertyRights' },
  { dir: 'term1/trade-unions-labour-relations-act', mod: './curriculum/grade11/business-studies/term1/trade-unions-labour-relations-act/TradeUnionsLabourRelationsAct' },
  { dir: 'term3/citizenship-roles-responsibilities', mod: './curriculum/grade11/business-studies/term3/citizenship-roles-responsibilities/CitizenshipRolesResponsibilities' },
];
for (const t of topics) {
  const lesson = renderSlides((await import(t.mod)).learnSteps);
  const bank = extractCuratedBanks().filter((q) => q.file.includes(`grade11/business-studies/${t.dir}/`));
  test(`${t.dir}: standard lesson shape and 14 valid questions`, () => {
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
  test(`${t.dir}: key words of every answer appear in the lesson`, () => {
    const words = (x: string) => x.toLowerCase().match(/[a-z]{6,}/g) ?? [];
    const text = lesson.map((x) => x.text).join(' ').toLowerCase();
    for (const q of bank) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
    }
  });
}
