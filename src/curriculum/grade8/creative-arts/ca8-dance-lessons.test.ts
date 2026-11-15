import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { learnSteps as t1 } from './term1/dance/Slides';
import { learnSteps as t2 } from './term2/dance/Slides';
import { learnSteps as t3 } from './term3/dance/Slides';
import { learnSteps as t4 } from './term4/dance/Slides';

/**
 * The four Grade 8 dance lessons: each renders every slide, each slide has the standard's blocks, every
 * picture has an aria description, and the counts shown are the ones worked out here by hand.
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
  'Term 1 dance: movement, timing and safe technique': {
    steps: t1,
    titles: ['Locomotor and non-locomotor movement', 'Counting the beat', 'High, medium and low levels', 'Spatial awareness in a group', 'Safe technique', 'Check yourself'],
    // typed by hand, independent of the helpers
    shown: ['Step: counts 1 to 2 (2 counts).', 'Turn: counts 3 to 4 (2 counts).', 'Reach: counts 5 to 6 (2 counts).', 'Close: counts 7 to 8 (2 counts).', '2 + 2 + 2 + 2 = 8 counts.', '8 counts fill 2 bars of 4', '8 ÷ 4 = 2 bars', 'High level on counts 1 to 2.', 'Medium level on counts 3 to 4.', 'Low level on counts 5 to 6.', 'High level on counts 7 to 8 (rise back up).', '6 dancers in a circle', '10 + 25 + 5 = 40 minutes.'],
  },
  'Term 2 dance: motifs and group dance': {
    steps: t2,
    titles: ['What a motif is', 'Developing a motif', 'Group patterns and folk dance', 'Rhythm accents and coordination', 'Partner work and the journal', 'Check yourself'],
    shown: ['Reach: counts 1 to 2.', 'Turn: count 3.', 'Step: count 4.', '2 + 1 + 1 = 4 counts, one bar of 4.', 'Repeat it: 8 counts.', 'Reverse the order (Step, Turn, Reach): still 4 counts.', 'each move takes twice as long: 8 counts.', '8 ÷ 4 = 2 rows', 'Arrange 8 dancers', 'Accent counts 1 and 5', '4 × 2 = 8 counts', '8 ÷ 4 = 2 rows.'],
  },
  'Term 3 dance: space, energy and devices': {
    steps: t3,
    titles: ['Space and pathways', 'Energy quality', 'Choreographic devices', 'Transitions and performance quality', 'Cultural dance, style and feedback', 'Check yourself'],
    shown: ['Straight pathway: counts 1 to 2.', 'Zigzag pathway: counts 3 to 4.', 'Circular pathway: counts 5 to 8.', '2 + 2 + 4 = 8 counts.', 'Dancer 1 dances counts 1 to 4.', 'Dancer 2 dances counts 3 to 6.', 'Dancer 3 dances counts 5 to 8.', 'Phrase A: counts 1 to 8.', 'Link: counts 9 to 10.', 'Phrase B: counts 11 to 18.', '8 + 2 + 8 = 18 counts.'],
  },
  'Term 4 dance: routines, expression and timing': {
    steps: t4,
    titles: ['The structure of a routine', 'Timing and group synchronisation', 'Expression', 'Safe performance habits', 'Appreciation, reflection and careers', 'Check yourself'],
    shown: ['Beginning: counts 1 to 8.', 'Development: counts 9 to 24.', 'Ending: counts 25 to 32.', '32 counts = 8 bars of 4.', 'Everyone enters on count 9', 'On count 8 the lead dancer nods', 'Count silently from 1 to 8.', '32 − 8 − 8 = 16 counts.', '9 − 1 = count 8.', 'Warm-up: 10 minutes.', 'Run-through: 20 minutes.', 'Cool-down: 5 minutes.'],
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
      for (const m of h.match(/<svg[^>]*>/g) ?? []) {
        assert.match(m, /role="img"/);
        assert.match(m, /aria-label="[^"]{30,}"/);
      }
      for (const m of h.match(/<ol[^>]*aria-label="[^"]+"/g) ?? []) assert.ok(m.length > 10);
    }
  });

  test(`${name}: the counts shown are the hand-worked ones`, () => {
    const all = lesson.steps.map((s) => plain(html(s))).join(' | ');
    for (const a of lesson.shown) assert.ok(all.includes(a), `missing "${a}"`);
  });
}

test('each question bank is untouched: it is imported from Slides and still defined in the topic file', () => {
  for (const f of ['term1/dance/Dance.tsx', 'term2/dance/Dance.tsx', 'term3/dance/Dance.tsx', 'term4/dance/Dance.tsx']) {
    const src = readFileSync(new URL(f, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
