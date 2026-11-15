import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { learnSteps as t1 } from './term1/music/Slides';
import { learnSteps as t2 } from './term2/music/Slides';
import { learnSteps as t3 } from './term3/music/Slides';
import { learnSteps as t4 } from './term4/music/Slides';
import { TEMPO_TERMS } from '../../../components/diagrams/arts/ca8-music-helpers';

/**
 * The four Grade 8 Creative Arts music lessons: each renders every slide, each slide has the
 * standard's blocks, every picture has an aria description, and the counts shown are the ones
 * worked out here by hand (independent of the helpers).
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
  'Grade 8 Term 1 music: beat, rhythm, pitch, dynamics': {
    steps: t1,
    titles: ['Beat and metre', 'Rhythm, note values and rests', 'Pitch on the staff', 'Dynamics', 'Clap-back and keeping time', 'Check yourself'],
    shown: [
      'Say 1 2 3 4 for the first bar.',
      'Two bars of 4 beats = 8 beats.',
      'Crotchet 1 + crotchet 1 + minim 2 = 4 beats.',
      '1 + 1 (silent) + 2 = 4 beats.',
      'E is on the bottom line: step 0.',
      'B is on the middle line: step 4.',
      'B is 4 steps higher',
      'mp is number 3 on the scale',
      'f is number 5.',
      '3 × 4 = 12 beats.',
      '1 more beat: a crotchet or a crotchet rest.',
    ],
  },
  'Grade 8 Term 2 music: melody, texture, call-and-response, balance': {
    steps: t2,
    titles: ['Melody', 'Texture', 'Call-and-response', 'Comparing styles by listening', 'Ensemble balance and counting in', 'Check yourself'],
    shown: [
      'E to G: skip up.',
      'G to A: step up.',
      'A to G: step down.',
      'G to E: skip down.',
      'Voice alone: 1 layer.',
      'Voice and drum: 2 layers.',
      'Voice, drum and marimba: 3 layers',
      'The order is: call, response, call, response.',
      'Too loud: Drums.',
      'Count in 1 2 3 4 so all start together.',
      'A skip up.',
      'Lower the drums and rebalance.',
    ],
  },
  'Grade 8 Term 3 music: form, ostinato, composition': {
    steps: t3,
    titles: ['Binary form (AB)', 'Ternary form (ABA)', 'Ostinato', 'Composing: motif and contrast', 'Listening analysis and peer feedback', 'Check yourself'],
    shown: [
      'binary form, AB.',
      'it returns to the start: yes. That is ternary form.',
      '3 notes.',
      '3 × 4 = 12 notes in all',
      'The motif is 4 beats, one bar.',
      'Play it twice: 8 beats.',
      'mf (4) and B at p (2)',
      '2 × 5 = 10 notes',
    ],
  },
  'Grade 8 Term 4 music: revision, genre, tempo, etiquette': {
    steps: t4,
    titles: ['Aural recall', 'Genre comparison', 'Performance revision and warm-up', 'Steady tempo', 'Stage etiquette and self-evaluation', 'Check yourself'],
    shown: [
      'two short claps and one long sound, 4 beats in all',
      'Do it 4 times: 8 bars of practice',
      '60 seconds ÷ 120 = 0,5 seconds for each beat.',
      '4 beats × 0,5 = 2 seconds a bar.',
      '4 bars take 8 seconds.',
      '2 bars × 5 = 10 bars.',
      '2 bars last 6 seconds.',
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
      for (const m of h.match(/<svg[^>]*>/g) ?? []) {
        assert.match(m, /role="img"/);
        assert.match(m, /aria-label="[^"]{20,}"/);
      }
    }
  });

  test(`${name}: the counts shown are the hand-worked ones`, () => {
    const all = lesson.steps.map((s) => plain(html(s))).join(' | ');
    for (const a of lesson.shown) assert.ok(all.includes(a), `missing "${a}"`);
  });
}

test('the tempo words the lesson uses match the helper', () => {
  const all = t4.map((s) => plain(html(s))).join(' | ');
  for (const t of TEMPO_TERMS) assert.ok(all.toLowerCase().includes(t.term));
  assert.deepEqual(TEMPO_TERMS.map((t) => t.meaning), ['slow', 'at a walking pace', 'fast and lively']);
  assert.ok(all.includes('Adagio is slow, andante is walking pace and allegro is fast.'));
});

test('each music bank is untouched: imported header, `const bank` still there, no inline learnSteps', () => {
  for (const f of ['term1/music/Music.tsx', 'term2/music/Music.tsx', 'term3/music/Music.tsx', 'term4/music/Music.tsx']) {
    const src = readFileSync(new URL(f, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
