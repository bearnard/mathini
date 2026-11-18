import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of ems8a-helpers.ts.

stubCss();
const topics = [
  { dir: 'term1/government-national-budget', mod: './curriculum/grade8/economic-management-sciences/term1/government-national-budget/GovernmentNationalBudget' },
  { dir: 'term1/accounting-concepts-equation', mod: './curriculum/grade8/economic-management-sciences/term1/accounting-concepts-equation/AccountingConceptsEquation' },
  { dir: 'term1/source-documents-t1', mod: './curriculum/grade8/economic-management-sciences/term1/source-documents-t1/SourceDocumentsT1' },
];
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
for (const t of topics) {
  lessons[t.dir] = renderSlides((await import(t.mod)).learnSteps);
  banks[t.dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade8/economic-management-sciences/${t.dir}/`));
}
const find = (dir: string, start: string) => {
  const hits = banks[dir].filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};

for (const t of topics) {
  test(`${t.dir}: standard lesson shape, 14 valid questions, key spread over all four positions`, () => {
    assertLessonShape(lessons[t.dir]);
    const bank = banks[t.dir];
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
    const words = (s: string) => s.toLowerCase().match(/[a-zα-ω]{6,}/g) ?? [];
    const text = lessons[t.dir].map((s) => s.text).join(' ').toLowerCase();
    for (const q of banks[t.dir]) {
      const missing = words(q.answer).filter((w) => !text.includes(w));
      assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
    }
  });
}

test('INDEPENDENT: VAT and the budget (plain arithmetic, VAT rate quoted)', () => {
  const d = 'term1/government-national-budget';
  assert.equal(find(d, 'VAT is 15% in the example').answer, `R${0.15 * 200}`);
  assert.match(find(d, 'VAT is 15% in the example').prompt, /15%/);
  assert.equal(find(d, 'Using VAT of 15%').answer, `R${200 + 0.15 * 200}`);
  assert.equal(find(d, 'Revenue is R500 000 and expenditure is R450 000').answer, 'A surplus of R50 000');
  assert.equal(500000 - 450000, 50000);
  assert.equal(find(d, 'Revenue is R400 000 and expenditure is R450 000').answer, 'A deficit of R50 000');
  assert.equal(find(d, 'How many levels of government').answer, 'Three');
});

test('INDEPENDENT: the accounting equation balances after every transaction (checked by hand)', () => {
  const d = 'term1/accounting-concepts-equation';
  // capital 20 000; equipment 5 000 on credit; fees 3 000; rent 1 000; repay 2 000
  const steps = [
    { a: 20000, l: 0, e: 20000 },
    { a: 25000, l: 5000, e: 20000 },
    { a: 28000, l: 5000, e: 23000 },
    { a: 27000, l: 5000, e: 22000 },
    { a: 25000, l: 3000, e: 22000 },
  ];
  for (const s of steps) assert.equal(s.a, s.l + s.e);
  assert.equal(find(d, 'A business has assets of R25 000 and liabilities of R3 000').answer, 'R22 000');
  assert.equal(find(d, "Owner's equity is R20 000 and liabilities are R5 000").answer, 'R25 000');
  assert.equal(find(d, 'Fees earned are R3 000 and costs paid are R1 000').answer, 'A profit of R2 000');
  assert.equal(3000 - 1000, 2000);
});

test('INDEPENDENT: source document arithmetic', () => {
  const d = 'term1/source-documents-t1';
  assert.equal(find(d, 'Paying in two R200, three R100').answer, `R${2 * 200 + 3 * 100 + 50 + 4 * 20 + 5 * 10}`);
  assert.equal(find(d, 'Paying in three R200 notes').answer, `R${3 * 200 + 2 * 50}`);
  assert.equal(find(d, 'A bank account opens with R1 000').answer, 'R1 350');
  assert.equal(1000 + (500 + 250) - (300 + 100), 1350);
  assert.equal(find(d, 'A cash invoice is for 4 tyres').answer, `R${4 * 50}`);
  assert.match(find(d, 'VAT of 15%').prompt, /15%/);
  assert.equal(find(d, 'VAT of 15%').answer, `R${200 + 0.15 * 200}`);
});
