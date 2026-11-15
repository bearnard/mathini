import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { learnSteps as t1 } from './term1/dance/Slides';
import { learnSteps as t2 } from './term2/dance/Slides';
import { learnSteps as t3 } from './term3/dance/Slides';
import { learnSteps as t4 } from './term4/dance/Slides';

/**
 * The four Grade 9 dance lessons: each renders every slide, each slide has the standard's blocks,
 * every picture has an aria description, and the numbers shown are the ones worked out by hand here.
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
  'Grade 9 Term 1 dance: technique and dynamics': {
    steps: t1,
    titles: ['Alignment and posture', 'Travelling and non-locomotor movement', 'Building a longer phrase', 'Dynamics and contrast', 'Safe conditioning', 'Check yourself'],
    // typed here by hand, independent of the helpers
    amounts: ['8 + 4 + 8 + 4 = 24 counts', '24 ÷ 8 = 3 eights', 'Jumps in energy: 1, 3, 2', 'The biggest is 3, from sway to stamp', '5 + 5 + 6 + 4 = 20 minutes', '8 + 4 + 4 = 16 counts, or 2 eights'],
  },
  'Grade 9 Term 2 dance: canon, formation and culture': {
    steps: t2,
    titles: ['Choreographic intent and repetition', 'Canon', 'Formations', 'Social and cultural dance', 'Ensemble coordination and pattern work', 'Check yourself'],
    amounts: ['A appears 3 times in the pattern AABA', 'Starts: 0, 2, 4, 6.', 'finishes at 6 + 8 = 14', 'every start is 0 counts apart', 'Starts: 0, 0, 1.', 'is 1 count, so dancer 3 is late', 'Starts 0, 4, 8; the last starts at 8 and finishes at 8 + 8 = 16'],
  },
  'Grade 9 Term 3 dance: group choreography and evaluation': {
    steps: t3,
    titles: ['Group choreography and its sections', 'Transitions: linking the sections', 'Expressive intent', 'Rehearsal discipline and logs', 'Self-evaluation and performance gaps', 'Check yourself'],
    amounts: ['16 + 32 + 32 + 16 = 96 counts', '3 × 8 = 24', '96 + 24 = 120 counts, or 15 eights', '4 of 5 rehearsals attended', '4 ÷ 5 = 80%', 'Technique 4, Timing 2, Expression 3. Average 3', 'The lowest is Timing (2)', '16 + 8 + 16 = 40 counts'],
  },
  'Grade 9 Term 4 dance: final performance': {
    steps: t4,
    titles: ['Refining the final choreography', 'Timing with the music and each other', 'A polished performance', 'Dance communicates ideas', 'Feedback and community performance', 'Check yourself'],
    amounts: ['120 × 60 ÷ 120 = 60 seconds', '1 × 60 ÷ 120 = 0,5 seconds', 'A 32-count section lasts 16 seconds', 'Technique 4, Expression 5, Presence 3. Average 4', 'Presence is lowest (3)', '64 × 60 ÷ 120 = 32 seconds', 'Unison: every start is the same (0 counts apart)'],
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

  test(`${name}: most teaching slides have a worked example`, () => {
    const withWorked = lesson.steps.slice(0, -1).filter((s) => /Worked example/.test(html(s))).length;
    assert.ok(withWorked >= lesson.steps.length - 2, `${withWorked} worked examples`);
  });

  test(`${name}: last slide is Check yourself with 4 questions, answers hidden`, () => {
    const h = html(lesson.steps[lesson.steps.length - 1]);
    assert.match(h, /Check yourself/);
    assert.match(h, /<details/);
    assert.equal((h.match(/<ol class="[^"]*list-decimal/g) ?? []).length, 1);
    assert.equal((h.match(/<details/g) ?? []).length, 4);
  });

  test(`${name}: every slide has 35 to 120 words, no NaN, undefined or decimal point`, () => {
    for (const s of lesson.steps) {
      const text = plain(html(s));
      const words = text.split(' ').length;
      assert.ok(words >= 35 && words <= 120, `${s.title}: ${words} words`);
      assert.doesNotMatch(text, /NaN|undefined|\[object|Infinity/);
      assert.doesNotMatch(text, /\d\.\d/, `${s.title}: a decimal point`);
    }
  });

  test(`${name}: every picture has an aria description`, () => {
    for (const s of lesson.steps) {
      const h = html(s);
      for (const m of h.match(/<svg[^>]*>/g) ?? []) assert.match(m, /role="img"/), assert.match(m, /aria-label="[^"]{30,}"/);
      for (const m of h.match(/<table[^>]*>/g) ?? []) assert.match(m, /aria-label="[^"]{20,}"/);
    }
  });

  test(`${name}: at most six words-labels in each picture`, () => {
    for (const s of lesson.steps) {
      for (const svg of html(s).match(/<svg[\s\S]*?<\/svg>/g) ?? []) {
        const texts = (svg.match(/<text[^>]*>[^<]*<\/text>/g) ?? []).map((t) => t.replace(/<[^>]+>/g, '')).filter((t) => /[A-Za-z]{2,}/.test(t));
        assert.ok(texts.length <= 6, `${s.title}: ${texts.length} words in a picture: ${texts.join(' | ')}`);
      }
    }
  });

  test(`${name}: the numbers shown are the hand-worked ones`, () => {
    const all = lesson.steps.map((s) => plain(html(s))).join(' | ');
    for (const a of lesson.amounts) assert.ok(all.includes(a), `missing "${a}"`);
  });
}

test('each question bank is untouched: topic files import learnSteps and keep const bank', () => {
  for (const t of [1, 2, 3, 4]) {
    const src = readFileSync(new URL(`./term${t}/dance/Dance.tsx`, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
