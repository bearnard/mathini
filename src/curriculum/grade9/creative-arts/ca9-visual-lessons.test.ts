import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { learnSteps as t1, GRID } from './term1/visual-arts/Slides';
import { learnSteps as t2 } from './term2/visual-arts/Slides';
import { learnSteps as t3 } from './term3/visual-arts/Slides';
import { learnSteps as t4, WALL, WIDTHS } from './term4/visual-arts/Slides';

/**
 * The four Grade 9 Visual Arts lessons: every slide renders, has the standard's blocks, every picture
 * has an aria description, and the measurements shown are the ones worked out here by hand.
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
  'Grade 9 Term 1: drawing, perspective and shading': {
    steps: t1,
    titles: ['One-point perspective', 'Two-point perspective', 'Proportion and the grid method', 'Value and shading', 'Atmospheric perspective and balance', 'Check yourself'],
    // typed by hand, independent of the helpers
    amounts: ['4 by 3 squares of 2 cm on the small picture: 8 cm by 6 cm', 'each 6 cm', '24 cm by 18 cm', 'Each square is 4 cm; the grid is 20 cm wide and 16 cm high'],
  },
  'Grade 9 Term 2: design process, research and printmaking': {
    steps: t2,
    titles: ['The design process', 'Research and experimentation', 'Visual analysis', 'Relief printing', 'Craft techniques and South African themes', 'Check yourself'],
    amounts: [],
  },
  'Grade 9 Term 3: themes, symbolism and mixed media': {
    steps: t3,
    titles: ['Identity and environment themes', 'Planning a themed artwork', 'Symbolism', 'Mixed media', 'Artist statement and critique', 'Check yourself'],
    amounts: [],
  },
  'Grade 9 Term 4: portfolio and exhibition': {
    steps: t4,
    titles: ['Portfolio selection', 'Finishing and presenting', 'Curating an exhibition', 'Reflection and moderation', 'Creative careers', 'Check yourself'],
    amounts: ['60 + 90 + 60 = 210 cm', '300 − 210 = 90 cm', '90 ÷ 4 = 22,5 cm', '40 ÷ 5 = 8 cm'],
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
      for (const m of h.match(/<svg[^>]*>/g) ?? []) assert.match(m, /role="img"/), assert.match(m, /aria-label="[^"]{30,}"/);
      for (const m of h.match(/<ol[^>]*aria-label="[^"]+"/g) ?? []) assert.ok(m.length > 10);
    }
  });

  test(`${name}: the measurements shown are the hand-worked ones`, () => {
    const all = lesson.steps.map((s) => plain(html(s))).join(' | ');
    for (const a of lesson.amounts) assert.ok(all.includes(a), `missing "${a}"`);
  });
}

test('the grid and wall figures the lessons use', () => {
  assert.equal(GRID.bigCell, 6);
  assert.equal(GRID.bigWidth, 24);
  assert.deepEqual([WALL, ...WIDTHS], [300, 60, 90, 60]);
});

test('each question bank is untouched: the topic file imports its slides and keeps const bank', () => {
  for (const f of ['term1/visual-arts/VisualArts.tsx', 'term2/visual-arts/VisualArts.tsx', 'term3/visual-arts/VisualArts.tsx', 'term4/visual-arts/VisualArts.tsx']) {
    const src = readFileSync(new URL(f, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
