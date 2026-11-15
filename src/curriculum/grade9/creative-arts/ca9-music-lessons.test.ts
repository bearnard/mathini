import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { learnSteps as t1 } from './term1/music/Slides';
import { learnSteps as t2 } from './term2/music/Slides';
import { learnSteps as t3 } from './term3/music/Slides';
import { learnSteps as t4 } from './term4/music/Slides';

/** The four Grade 9 music lessons: each slide renders, has its blocks, has an aria description on every picture, and shows the hand-worked values. */

const html = (step: { content: unknown }) => renderToStaticMarkup(step.content as never);
const plain = (h: string) =>
  h
    .replace(/<span class="sr-only">[\s\S]*?<\/span>/g, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/\s+/g, ' ')
    .trim();

const LESSONS = {
  'Grade 9 Term 1 music: improvisation, scales, phrasing, ensemble': {
    steps: t1,
    titles: ['Improvising within a structure', 'Scales and tonal patterns', 'Phrasing', 'Ensemble accuracy and technical control', 'Notation review and rhythm dictation', 'Check yourself'],
    // typed by hand, independent of the helpers
    values: ['G A B C D E F#', '1 + ½ + ½ + 2 = 4 beats', 'G to A is 2 semitones', 'B to C is 1 semitone', 'F#', 'A 4-bar phrase in 4/4 (16 beats)', '2 + 1 = 3', '1 + ½ + ½ + 1 = 3', 'a minim and a quaver is 2.5 beats, not 3', '1 + 1 + 2 = 4, so it is full'],
  },
  'Grade 9 Term 2 music: African and world music, harmony, texture': {
    steps: t2,
    titles: ['African music: polyrhythm and call-and-response', 'World music styles', 'Harmony: notes sounding together', 'Texture: how many layers', 'Listening analysis and ensemble balance', 'Check yourself'],
    values: ['2 calls and 2 answers', 'G, B, D', 'G A B C D', '1 layer, thin', '4 layers, thick', 'C, E, G'],
  },
  'Grade 9 Term 3 music: form, ostinato, composition, arrangement': {
    steps: t3,
    titles: ['Binary and ternary form', 'The ostinato', 'Composition', 'Arrangement', 'Music technology and independent rehearsal', 'Check yourself'],
    values: ['8 bars ÷ 2 bars = 4 repeats', 'ABA is 12 bars', '12 × 4 = 48 beats', '12 ÷ 4 = 3 times', '2 × 8 = 16 bars'],
  },
  'Grade 9 Term 4 music: aural, key signatures, chords, performance': {
    steps: t4,
    titles: ['Aural skills: intervals, rhythms and chords', 'Score reading and key signatures', 'Theory revision: scales, chords and form', 'The final performance and stage etiquette', 'Listening analysis and music careers', 'Check yourself'],
    values: ['G, A, B', '3 letters, so it is a 3rd', '1 sharp: F#', '2 sharps: F#, C#', 'I: G, B, D', 'IV: C, E, G', 'V: D, F#, A', 'A, B, C, D: a 4th', 'F# and C#'],
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

  test(`${name}: most teaching slides have a worked example, last slide is Check yourself with 4 hidden answers`, () => {
    const body = lesson.steps.slice(0, -1);
    assert.ok(body.filter((s) => /Worked example/.test(html(s))).length >= body.length - 1);
    const last = html(lesson.steps[lesson.steps.length - 1]);
    assert.match(last, /Check yourself/);
    assert.match(last, /<details/);
    assert.equal((last.match(/<details/g) ?? []).length, 4);
  });

  test(`${name}: every slide has 40 to 120 words and no NaN or undefined`, () => {
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
        assert.match(m, /aria-label="[^"]{20,}"/);
      }
      for (const m of h.match(/<ul[^>]*aria-label="[^"]+"/g) ?? []) assert.ok(m.length > 20);
      for (const m of h.match(/<ol[^>]*aria-label="[^"]+"/g) ?? []) assert.ok(m.length > 10);
    }
  });

  test(`${name}: the numbers and note names shown are the hand-worked ones`, () => {
    const all = lesson.steps.map((s) => plain(html(s))).join(' | ');
    for (const v of lesson.values) assert.ok(all.includes(v), `missing "${v}"`);
  });
}

test('each music topic file keeps its bank and imports its slides', () => {
  for (const t of [1, 2, 3, 4]) {
    const src = readFileSync(new URL(`./term${t}/music/Music.tsx`, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
