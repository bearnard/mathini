import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { learnSteps as a } from './term1/economic-systems-circular-flow/Slides';
import { learnSteps as b, TRANSACTIONS } from './term1/financial-literacy-recording/Slides';
import { learnSteps as c, ACTUALS, FIXED, VARIABLE } from './term2/budgeting-business-decisions/Slides';
import { learnSteps as d, START_UP } from './term2/entrepreneurship-planning/Slides';

/**
 * The first four Grade 9 EMS lessons: each renders every slide, each slide has the standard's blocks,
 * every picture has an aria description, and the amounts shown are the ones worked out here by hand.
 */

const html = (step: { content: unknown }) => renderToStaticMarkup(step.content as never);
const plain = (h: string) =>
  h
    .replace(/<span class="sr-only">[\s\S]*?<\/span>/g, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/ /g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/\s+/g, ' ')
    .trim();

const LESSONS = {
  'Grade 9 Term 1: economic systems and circular flow': {
    steps: a,
    titles: ['Planned, market and mixed economies', 'The circular flow', 'Factors of production and growth', 'South Africa in the global economy', 'Check yourself'],
    // typed here by hand, independent of the helpers
    amounts: ['R20 000', 'R4 000', 'R2 000', 'R20 000 − R4 000 − R2 000 = R14 000', 'R0', '200 crates: 20 per worker', '350: 35 per worker', 'R12 000 − R2 000 − R1 000 = R9 000'],
  },
  'Grade 9 Term 1: financial literacy and recording': {
    steps: b,
    titles: ['Source documents', 'Double entry and classifying a sale', 'Journals: CRJ and CPJ', 'The ledger account', 'The trial balance', 'Check yourself'],
    amounts: ['R2 400', 'Total paid out: R2 000 + R4 000 = R6 000', 'R32 970', 'Debit side: R30 000 + R2 970 = R32 970', 'Credit side: R2 000 + R4 000 = R6 000', 'R32 970 − R6 000 = R26 970 (debit)', 'Debits: R26 970 + R2 000 + R4 000 = R32 970', 'Credits: R30 000 + R2 970 = R32 970'],
  },
  'Grade 9 Term 2: budgeting and business decisions': {
    steps: c,
    titles: ['A realistic budget', 'Fixed and variable expenses', 'Monitor and adjust: budget variance', 'Priorities and unexpected expenses', 'Cash flow and profit', 'Check yourself'],
    amounts: ['R1 900 fixed + R3 100 variable = R5 000', 'R6 000 − R5 000 = surplus of R1 000', '10 tables: R2 000 + R1 500 = R3 500', '20 tables: R2 000 + R3 000 = R5 000', 'R3 100 − R2 800 = R300, over budget', 'R5 000 sales − R3 000 costs = R2 000', 'R0 received − R3 000 paid = -R3 000', '−R150: R150 under budget', 'deficit of R200'],
  },
  'Grade 9 Term 2: entrepreneurship planning': {
    steps: d,
    titles: ['Traits of a successful entrepreneur', 'Spotting a business opportunity', 'Financial planning: capital needed', 'Is the business viable?', 'Keeping customers', 'Check yourself'],
    amounts: ['R600 + R900 + R150 = R1 650', 'R1 800 − R1 350 = R450', 'R1 200 − R1 350 = -R150', 'R2 000 + R500 + R250 = R2 750'],
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
    }
  });

  test(`${name}: the amounts shown are the hand-worked ones`, () => {
    const all = lesson.steps.map((s) => plain(html(s))).join(' | ');
    for (const x of lesson.amounts) assert.ok(all.includes(x), `missing "${x}"`);
  });
}

test('the lesson data is the data the hand-worked amounts assume', () => {
  assert.deepEqual(TRANSACTIONS.map((t) => t.amount), [30000, 2970, 2000, 4000]);
  assert.deepEqual([...FIXED], [1500, 400]);
  assert.deepEqual([...VARIABLE], [2800, 300]);
  assert.deepEqual(ACTUALS.map((x) => x.actual), [3100, 1500, 250]);
  assert.deepEqual(START_UP.map((s) => s.amount), [600, 900, 150]);
});

test('each question bank is untouched: it is still declared as "const bank" and the slides are imported', () => {
  for (const f of [
    'term1/economic-systems-circular-flow/EconomicSystemsCircularFlow.tsx',
    'term1/financial-literacy-recording/FinancialLiteracyRecording.tsx',
    'term2/budgeting-business-decisions/BudgetingBusinessDecisions.tsx',
    'term2/entrepreneurship-planning/EntrepreneurshipPlanning.tsx',
  ]) {
    const src = readFileSync(new URL(f, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
