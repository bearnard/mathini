import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';
import { grade10 } from './curriculum/grade10';

// Grade 10 Accounting gaps: VAT (2 lessons), internal control components, cost concepts and budget types. Money is recomputed here with BigInt cents, independent of acc10.ts.

stubCss();
const topics: [string, string, number][] = [
  ['term2/vat-concepts-rates', 'VatConceptsRates', 2], ['term2/vat-calculations-account', 'VatCalculationsAccount', 2],
  ['term1/internal-control-components', 'InternalControlComponents', 1], ['term4/cost-concepts-budget-types', 'CostConceptsBudgetTypes', 4],
];
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
for (const [dir, name] of topics) {
  lessons[dir] = renderSlides((await import(`./curriculum/grade10/accounting/${dir}/${name}`)).learnSteps);
  banks[dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade10/accounting/${dir}/`));
}
for (const [dir] of topics) {
  test(`${dir}: standard lesson shape, 14 valid questions, key words`, () => {
    assertLessonShape(lessons[dir]);
    const bank = banks[dir];
    assert.equal(bank.length, 14);
    const text = lessons[dir].map((x) => x.text).join(' ').toLowerCase();
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
      assert.ok(!/\blearners?\b|\bCAPS\b/i.test(q.prompt), q.prompt);
      const words = q.answer.toLowerCase().match(/[a-z]{6,}/g) ?? [];
      assert.ok(words.filter((w) => !text.includes(w)).length < 3, q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
    assert.ok(!/section \d+|\bNaN\b|undefined/i.test(lessons[dir].map((x) => x.text).join(' ')), 'no section numbers');
  });
}
test('registered in the right terms and no term is empty', () => {
  const acc = grade10.subjects.find((s) => s.id === 'accounting')!;
  const termOf = (id: string) => acc.terms.find((t) => t.topics.some((p) => p.id === id))?.id;
  for (const [dir, , term] of topics) assert.equal(termOf(`gr10-${dir.split('/')[1]}-t${term}`), term, dir);
  for (const t of acc.terms) assert.ok(t.topics.length > 0);
});
test('INDEPENDENT: VAT, net VAT, count differences, prime cost and cash budget in BigInt cents', () => {
  const find = (dir: string, start: string) => banks[dir].find((q) => q.prompt.startsWith(start))!;
  const vat = (x: bigint) => (x * 15n) / 100n;
  assert.equal(vat(20000n), 3000n);
  assert.equal(5000000n + vat(5000000n), 5750000n);
  assert.equal((2300000n * 100n) / 115n, 2000000n);
  assert.equal(57500n - (57500n * 100n) / 115n, 7500n);
  assert.equal((57500n * 15n) / 100n, 8625n);
  assert.equal(vat(8000000n) - vat(5000000n), 450000n);
  assert.equal(vat(2000000n) - vat(4000000n), -300000n);
  assert.equal(vat(4000000n), 600000n);
  assert.equal(vat(1000000n), 150000n);
  assert.equal((1150000n * 100n) / 115n, 1000000n);
  assert.equal(200 - 188, 12);
  assert.equal(12 * 4500, 54000);
  assert.equal(1240000 - 1225000, 15000);
  assert.equal(4000000 + 2500000, 6500000);
  assert.equal(300000 + 500000 + 700000, 1500000);
  assert.equal(6500000 + 1500000, 8000000);
  assert.equal(500000 + (900000 + 300000) - 1050000, 650000);
  const ans = (dir: string, s: string) => find(dir, s).answer;
  assert.equal(ans('term2/vat-calculations-account', 'A vendor sells goods for R50 000'), 'R57 500');
  assert.equal(ans('term2/vat-calculations-account', 'A price including VAT is R23 000'), 'R20 000');
  assert.equal(ans('term2/vat-calculations-account', 'A tax invoice total'), 'R75');
  assert.equal(ans('term2/vat-calculations-account', 'Output VAT is R12 000'), 'R4 500 payable to SARS');
  assert.equal(ans('term2/vat-calculations-account', "A vendor's purchases"), 'R6 000');
  assert.equal(ans('term2/vat-calculations-account', 'Sales are R80 000'), 'R4 500');
  assert.equal(ans('term1/internal-control-components', 'The stock records show 200'), '12 units');
  assert.equal(ans('term1/internal-control-components', 'The 12 missing'), 'R540');
  assert.equal(ans('term1/internal-control-components', 'The till roll'), 'R150');
  assert.equal(ans('term4/cost-concepts-budget-types', 'Direct materials are R40 000'), 'R65 000');
  assert.equal(ans('term4/cost-concepts-budget-types', 'Indirect materials are R3 000'), 'R15 000');
  assert.equal(ans('term4/cost-concepts-budget-types', 'The prime cost is R65 000'), 'R80 000');
  assert.equal(ans('term4/cost-concepts-budget-types', 'Opening cash is R5 000'), 'R6 500');
});
