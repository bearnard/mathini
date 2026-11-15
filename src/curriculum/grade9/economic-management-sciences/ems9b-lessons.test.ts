import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { learnSteps as plans } from './term3/business-plans-functions/Slides';
import { learnSteps as prodMkt } from './term3/production-marketing/Slides';
import { learnSteps as resp } from './term4/business-responsibility-integration/Slides';
import { learnSteps as revision, SALES } from './term4/exam-revision-preparation/Slides';

/**
 * The four Grade 9 Term 3 and 4 EMS lessons: each renders every slide, each slide has the standard's
 * blocks, every picture has an aria description, and the figures shown are the ones worked out here by hand.
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
  'Grade 9 Term 3: business plans and functions': {
    steps: plans,
    titles: ['The business plan', 'Putting numbers in the plan', 'Business functions', 'Internal and external environment', 'Check yourself'],
    // typed by hand, independent of the helpers
    amounts: ['R3 500 + shelves R1 200 + first stock R2 300 = R7 000', 'R6 000 − R4 800 = surplus of R1 200', 'R9 000', 'R9 800', 'deficit of R800'],
  },
  'Grade 9 Term 3: production and marketing': {
    steps: prodMkt,
    titles: ['Production and quality control', 'Market research', 'The 4 Ps of marketing', 'Setting a price', 'Production and marketing must agree', 'Check yourself'],
    amounts: ['200 made, 6 faulty: 194 are good', '6 ÷ 200 × 100 = 3%', '28 ÷ 40 × 100 = 70%', 'R12 + R6 = R18', 'R2 above', '650 − 500 = 150 loaves short', '25 ÷ 500 × 100 = 5%', '40%', 'R5 mark-up, so R25', '60 short'],
  },
  'Grade 9 Term 4: business responsibility and integration': {
    steps: resp,
    titles: ['Responsibility to employees', 'Social responsibility and customers', 'Records and financial literacy', 'Economic systems and entrepreneurs', 'Integrated business decisions', 'Check yourself'],
    amounts: ['R12 400 + R1 000 + R2 000 = R15 400', 'R18 000 − R15 400 = surplus of R2 600', 'deficit of R800'],
  },
  'Grade 9 Term 4: exam revision and preparation': {
    steps: revision,
    titles: ['Read the case study first', 'Match clues to concepts', 'Structure your answer', 'Link topics together', 'Plan your time and your revision', 'Check yourself'],
    amounts: ['R400 + R350 + R250 = R1 000', 'R12 × 20 washes = R240', 'R1 000 − R240 = R760', '1 minute per mark', 'about 10 minutes', '0,5 minute a mark, so 6 minutes'],
  },
} as const;

for (const [name, lesson] of Object.entries(LESSONS)) {
  test(`${name}: slide titles and shape`, () => {
    assert.deepEqual(lesson.steps.map((s) => s.title), lesson.titles);
    assert.ok(lesson.steps.length >= 4 && lesson.steps.length <= 6);
    lesson.steps.slice(0, -1).forEach((s) => {
      const h = html(s);
      assert.match(h, /The rule/, `${s.title}: no rule`);
      assert.match(h, /Common mistake/, `${s.title}: no mistake`);
    });
  });

  test(`${name}: every teaching slide has a worked example (except where a table or picture is the example)`, () => {
    const without = lesson.steps.slice(0, -1).filter((s) => !/Worked example/.test(html(s))).map((s) => s.title);
    assert.ok(without.length <= (name.includes('production and marketing') ? 0 : 1), `no worked example: ${without.join(', ')}`);
  });

  test(`${name}: last slide is Check yourself with 4 questions, answers hidden`, () => {
    const h = html(lesson.steps[lesson.steps.length - 1]);
    assert.match(h, /Check yourself/);
    assert.match(h, /<details/);
    assert.equal((h.match(/<ol class="[^"]*list-decimal/g) ?? []).length, 1);
    assert.equal((h.match(/<details/g) ?? []).length, 4);
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

  test(`${name}: the figures shown are the hand-worked ones`, () => {
    const all = lesson.steps.map((s) => plain(html(s))).join(' | ');
    for (const a of lesson.amounts) assert.ok(all.includes(a), `missing "${a}"`);
  });
}

test('the car-wash sales rows are the ones the table totals', () => {
  assert.deepEqual(SALES.map((s) => s.amount), [400, 350, 250]);
});

test('each question bank is untouched: it still starts at "const bank" and imports its slides', () => {
  for (const f of [
    'term3/business-plans-functions/BusinessPlansFunctions.tsx',
    'term3/production-marketing/ProductionMarketing.tsx',
    'term4/business-responsibility-integration/BusinessResponsibilityIntegration.tsx',
    'term4/exam-revision-preparation/ExamRevisionPreparation.tsx',
  ]) {
    const src = readFileSync(new URL(f, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
