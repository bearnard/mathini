import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { ccStatements, DUBE_KHAN } from './components/diagrams/accounting/closeCorporation';
import { SAMPLE, CASH, errorRate, estimatedErrors, cashDifference } from './components/diagrams/accounting/auditExamples';

// Grade 12 Accounting: close corporations, internal control, internal audit.
// Every printed figure is recomputed by hand here and from the helper modules.

stubCss();
const cc = await import('./curriculum/grade12/accounting/term2/close-corporations/Slides');
const ic = await import('./curriculum/grade12/accounting/term2/internal-control/Slides');
const ia = await import('./curriculum/grade12/accounting/term2/internal-audit/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;| | /g, ' ').replace(/\s+/g, ' ')).join(' ');
const LESSONS = [['close-corporations', cc], ['internal-control', ic], ['internal-audit', ia]] as const;

test('each lesson has 4 to 6 slides, the standard blocks, and a final Check yourself', () => {
  for (const [name, m] of LESSONS) {
    const steps = m.learnSteps;
    assert.ok(steps.length >= 4 && steps.length <= 6, name);
    assert.equal(steps[steps.length - 1].title, 'Check yourself', name);
    assert.match(html(steps[steps.length - 1]), /<details/, name);
    for (const s of steps.slice(0, -1)) {
      const h = html(s);
      assert.match(h, /The rule/, `${name}: ${s.title}`);
      assert.match(h, /Common mistake/, `${name}: ${s.title}`);
    }
  }
});

test('each bank has 14 valid questions, no reject, the key in all four positions', () => {
  for (const [name] of LESSONS) {
    const bank = extractCuratedBanks().filter((q) => q.file.includes(`/${name}/`));
    assert.equal(bank.length, 14, name);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4, name);
  }
});

test('INDEPENDENT: the close corporation statements balance, by hand', () => {
  const D = DUBE_KHAN;
  const gross = 640000 - 384000;
  const operating = gross - 96000 - 18000 - 54000;
  const nbt = operating + 1600 - 6000; // interest from the member loan received, interest on the member loan paid
  assert.equal(gross, 256000);
  assert.equal(operating, 88000);
  const s = ccStatements(D);
  assert.equal(s.grossProfit, gross);
  assert.equal(s.operatingProfit, operating);
  assert.equal(s.netProfitBeforeTax, 83600);
  assert.equal(s.netProfitAfterTax, 83600 - 22572);
  assert.equal(s.netProfitAfterTax, 61028);
  assert.equal(s.retainedIncomeEnd, 35000 + 61028 - 40000);
  assert.equal(s.membersInterest, 100000 + 56028);
  assert.equal(s.taxPayable, 22572 - 14000);
  assert.equal(s.totalAssets, 150000 + 42000 + 28000 + 22600 + 20000 - 0);
  assert.equal(s.totalAssets, s.totalEquityAndLiabilities);
  assert.equal(s.balanced, true);
  assert.equal(nbt, 83600);
});

test('INDEPENDENT: audit sample and cash count figures', () => {
  assert.equal(errorRate(3, 20), 15);
  assert.equal(estimatedErrors(200, 3, 20), 30);
  assert.equal(200 * 0.15, 30);
  assert.deepEqual([SAMPLE.population, SAMPLE.sampleSize, SAMPLE.errors], [200, 20, 3]);
  assert.equal(cashDifference(CASH.expected, CASH.counted), -50); // counted is 50 short
  assert.equal(4820 - 4770, 50);
  assert.equal(errorRate(2, 40), 5);
});

test('the lessons print the figures that the helpers and the bank use', () => {
  const ccText = text(cc.learnSteps);
  assert.match(ccText, /1 May 2011/);
  for (const f of ['256 000', '88 000', '61 028', '56 028', '156 028', '8 572', '262 600']) assert.ok(ccText.includes(f), `cc ${f}`);
  assert.ok(text(ic.learnSteps).includes('4 770'));
  const iaText = text(ia.learnSteps);
  for (const f of ['15%', '30', '200', '20']) assert.ok(iaText.includes(f), `ia ${f}`);
});
