import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 10 Physical Sciences terms 3 and 4: ions in solution, precipitation and reaction types, the hydrosphere.
// The numbers in the questions are recomputed here independently of ems8c-helpers.ts.

stubCss();
const topics = [
  { dir: 'term3/cash-payments-journal', mod: './curriculum/grade8/economic-management-sciences/term3/cash-payments-journal/CashPaymentsJournal' },
  { dir: 'term3/forms-of-ownership', mod: './curriculum/grade8/economic-management-sciences/term3/forms-of-ownership/FormsOfOwnership' },
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

test('INDEPENDENT: the Cash Payments Journal, the combined journals and the equation (hand-checked)', () => {
  const d = 'term3/cash-payments-journal';
  const payments = [1500, 400, 1200, 2000];
  const paid = payments.reduce((a, b) => a + b, 0);
  assert.equal(paid, 5100);
  assert.equal(find(d, 'The CPJ has payments of R1 500, R400, R1 200 and R2 000').answer, 'R5 100');
  assert.equal(find(d, 'A business banked R17 000 and paid out R5 100').answer, `R${17000 - paid}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  assert.equal(find(d, 'Received R9 000 and paid R2 500').answer, `R${9000 - 2500}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  // the equation: receipts 17 000 raise assets and equity; the three expenses 3 100 lower both; the equipment swap changes neither total
  const assets = 17000 - 3100, equity = 17000 - 3100;
  assert.equal(assets, equity);
  assert.equal(find(d, 'After all seven transactions the assets are R13 900').answer, `R${equity}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  assert.equal(find(d, 'The business pays R2 000 cash for computers').answer, 'They stay the same');
});

test('INDEPENDENT: sharing a profit in a ratio adds up exactly', () => {
  const d = 'term3/forms-of-ownership';
  const share = (profit: number, ratio: number[]) => ratio.map((r) => (profit * r) / ratio.reduce((a, b) => a + b, 0));
  assert.deepEqual(share(60000, [3, 2]), [36000, 24000]);
  assert.equal(find(d, 'Two partners share R60 000 of profit 3 : 2').answer, 'R36 000');
  assert.deepEqual(share(90000, [2, 1]), [60000, 30000]);
  assert.equal(find(d, 'A profit of R90 000 is shared 2 : 1').answer, 'R30 000');
  assert.equal(find(d, 'A profit of R40 000 is shared equally').answer, `R${40000 / 2}`.replace(/(\d)(?=(\d{3})$)/, '$1 '));
  assert.equal(find(d, 'What is true of close corporations in South Africa since 1 May 2011').answer, 'No new ones can be registered');
});
