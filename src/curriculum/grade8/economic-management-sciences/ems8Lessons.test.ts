import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { learnSteps as t1 } from './term1/economy-government-accounting/Slides';
import { learnSteps as t2, RECEIPTS } from './term2/financial-literacy-entrepreneurship/Slides';
import { learnSteps as t3, PAYMENTS } from './term3/cash-payments-business-ownership/Slides';
import { learnSteps as t4 } from './term4/banking-saving/Slides';

/**
 * The four Grade 8 EMS lessons: each renders every slide, each slide has the standard's blocks, every
 * picture has an aria description, and the amounts shown are the ones worked out here by hand.
 */

const html = (step: { content: unknown }) => renderToStaticMarkup(step.content as never);
const plain = (h: string) =>
  h
    .replace(/<span class="sr-only">[\s\S]*?<\/span>/g, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\u00a0/g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/\s+/g, ' ')
    .trim();

const LESSONS = {
  'Grade 8 Term 1: economy, government and accounting': {
    steps: t1,
    titles: ['Three levels of government', 'Government income and spending', 'Standard of living', 'Source documents and the accounting equation', 'Double entry and the right journal', 'Check yourself'],
    // typed here by hand, independent of the helpers
    amounts: ['R9 000 000', 'R9 600 000', 'deficit of R600 000', 'surplus of R2 500', 'R35 000', 'R5 000', 'R30 000', 'R38 000', 'R8 000', '3 of the 3', '0 of the 3', 'R30 000'],
  },
  'Grade 8 Term 2: financial literacy and entrepreneurship': {
    steps: t2,
    titles: ['The accounting cycle', 'The cash receipts journal', 'The general ledger and posting', 'Factors of production', 'Entrepreneurship', 'Check yourself'],
    amounts: ['R850 + R620 + R1 500', 'R2 970', 'R100 − costs R40 = profit of R60', 'R2 400', 'R950', 'R150 − R60 = R90'],
  },
  'Grade 8 Term 3: cash payments and business ownership': {
    steps: t3,
    titles: ['The cash payments journal', 'Sole trader or partnership', 'Levels of management', 'A budget', 'Prices and demand', 'Check yourself'],
    amounts: ['R2 000 + R900 + R1 500 = R4 400', 'R4 000 + R2 970 − R4 400 = R2 570', 'R11 370', 'R30 000', 'R20 000', 'surplus of R1 200', 'R3 300', 'R10', 'R50', 'R15 000', 'R120'],
  },
  'Grade 8 Term 4: banking and saving': {
    steps: t4,
    titles: ['What a bank does', 'Savings and simple interest', 'Compound interest', 'Entrepreneurs and finding capital', 'Protecting bank customers', 'Check yourself'],
    amounts: ['R80', 'R240', 'R2 240', 'R1 050', 'R1 102,50', 'R1 157,63', 'R157,63', 'R150', 'R2 000', 'R22 000', 'R300 a year', 'R600', 'R1 100', 'R1 210'],
  },
} as const;

for (const [name, lesson] of Object.entries(LESSONS)) {
  test(`${name}: slide titles and shape`, () => {
    assert.deepEqual(lesson.steps.map((s) => s.title), lesson.titles);
    assert.ok(lesson.steps.length >= 4 && lesson.steps.length <= 6);
    lesson.steps.slice(0, -1).forEach((s) => {
      const h = html(s);
      assert.match(h, /The rule/, `${s.title}: no rule`);
      assert.match(h, /Worked example/, `${s.title}: no worked example`);
      assert.match(h, /Common mistake/, `${s.title}: no mistake`);
    });
  });

  test(`${name}: last slide is Check yourself with 4 questions, answers hidden`, () => {
    const h = html(lesson.steps[lesson.steps.length - 1]);
    assert.match(h, /Check yourself/);
    assert.match(h, /<details/);
    assert.equal((h.match(/<ol class="list-decimal/g) ?? []).length, 2);
    assert.equal((h.match(/<li>/g) ?? []).length, 8);
  });

  test(`${name}: every slide has 40 to 120 words, no NaN or undefined`, () => {
    for (const s of lesson.steps) {
      const text = plain(html(s));
      const words = text.split(' ').length;
      assert.ok(words >= 40 && words <= 120, `${s.title}: ${words} words`);
      assert.doesNotMatch(text, /NaN|undefined|\[object|Infinity/);
    }
  });

  test(`${name}: every picture has an aria description`, () => {
    for (const s of lesson.steps) {
      const h = html(s);
      for (const m of h.match(/<svg[^>]*>/g) ?? []) assert.match(m, /role="img"/), assert.match(m, /aria-label="[^"]{20,}"/);
      for (const m of h.match(/<table[^>]*>/g) ?? []) assert.match(m, /aria-label="[^"]{20,}"/);
      for (const m of h.match(/<ol[^>]*aria-label="[^"]+"/g) ?? []) assert.ok(m.length > 10);
    }
  });

  test(`${name}: the amounts shown are the hand-worked ones`, () => {
    const all = lesson.steps.map((s) => plain(html(s))).join(' | ');
    for (const a of lesson.amounts) assert.ok(all.includes(a), `missing "${a}"`);
  });
}

test('the journal rows in the lessons are the ones the pictures total', () => {
  assert.deepEqual(RECEIPTS.map((r) => r.amount), [850, 620, 1500]);
  assert.deepEqual(PAYMENTS.map((p) => p.amount), [2000, 900, 1500]);
});

test('each question bank is untouched: it still starts at "const bank" and is imported unchanged', () => {
  for (const f of [
    'term1/economy-government-accounting/EconomyGovernmentAccounting.tsx',
    'term2/financial-literacy-entrepreneurship/FinancialLiteracyEntrepreneurship.tsx',
    'term3/cash-payments-business-ownership/CashPaymentsBusinessOwnership.tsx',
    'term4/banking-saving/BankingSaving.tsx',
  ]) {
    const src = readFileSync(new URL(f, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
