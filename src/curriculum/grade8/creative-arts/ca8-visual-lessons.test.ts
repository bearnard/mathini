import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { learnSteps as t1 } from './term1/visual-arts/Slides';
import { learnSteps as t2 } from './term2/visual-arts/Slides';
import { learnSteps as t3 } from './term3/visual-arts/Slides';
import { learnSteps as t4 } from './term4/visual-arts/Slides';

/**
 * The four Grade 8 Visual Arts lessons: every slide renders, has the standard's blocks, every picture
 * has an aria description, and the figures shown are the ones worked out here by hand.
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
  'Grade 8 Term 1: elements of art and observational drawing': {
    steps: t1,
    titles: ['Line: a mark that makes us feel something', 'Shape, form and value', 'Texture: marks that suggest a surface', 'Warm and cool colours', 'Composition: depth and balance', 'Check yourself'],
    // typed by hand, independent of the helpers
    facts: ['red is warm and orange is warm', 'Opposite orange sits blue', 'Blue.', 'The foreground.', 'Value.'],
  },
  'Grade 8 Term 2: principles of design, print and collage': {
    steps: t2,
    titles: ['Principles of design: contrast and focal point', 'Pattern and repetition', 'Positive and negative space', 'Printmaking', 'Collage and African visual references', 'Check yourself'],
    facts: ['start at 8, 23, 38, 53, 68, 83, 98', 'order A B A B', 'mirror image'],
  },
  'Grade 8 Term 3: symbolism and mixed media': {
    steps: t3,
    titles: ['Symbolism', 'Visual literacy: reading an artwork', 'South African and African art', 'Mixed media and texture', 'A themed artwork and artist research', 'Check yourself'],
    facts: ['Describe, analyse, interpret, judge.', 'Texture contrast.', 'where and when'],
  },
  'Grade 8 Term 4: portfolio and exhibition': {
    steps: t4,
    titles: ['Choosing portfolio pieces', 'Finishing and handling your work', 'Planning an exhibition', 'The artist statement', 'Reflecting on your growth', 'Check yourself'],
    facts: [
      'Choose 6 of your 12 works',
      'You made 4 drawings, 3 prints, 3 collages and 2 paintings',
      '2 drawings, 2 prints, 1 collage and 1 painting',
      '600 + 800 + 600 = 2000 mm',
      '4000 − 2000 = 2000 mm, shared by 4 gaps',
      '2000 ÷ 4 = 500 mm',
    ],
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
      assert.ok(/Worked example/.test(h) || /aria-label="[^"]*"/.test(h), `${s.title}: no worked example or numbered steps`);
    });
  });

  test(`${name}: every taught slide has a worked example or numbered steps`, () => {
    for (const s of lesson.steps.slice(0, -1)) {
      const h = html(s);
      assert.ok(/Worked example/.test(h) || /<ol aria-label=/.test(h), `${s.title}`);
    }
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

  test(`${name}: every picture has an aria description, at most 6 text labels`, () => {
    for (const s of lesson.steps) {
      const h = html(s);
      for (const m of h.match(/<svg[^>]*role="img"[^>]*>/g) ?? []) assert.match(m, /aria-label="[^"]{30,}"/);
      for (const svg of h.match(/<svg[^>]*role="img"[\s\S]*?<\/svg>/g) ?? []) {
        const labels = (svg.match(/<text/g) ?? []).length;
        assert.ok(labels <= 6, `${s.title}: ${labels} labels`);
      }
    }
  });

  test(`${name}: the facts and figures shown are the hand-worked ones`, () => {
    const all = lesson.steps.map((s) => plain(html(s))).join(' | ');
    for (const f of lesson.facts) assert.ok(all.includes(f), `missing "${f}"`);
  });
}

test('each question bank is untouched: topic files import learnSteps and keep const bank', () => {
  for (const t of [1, 2, 3, 4]) {
    const src = readFileSync(new URL(`./term${t}/visual-arts/VisualArts.tsx`, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
