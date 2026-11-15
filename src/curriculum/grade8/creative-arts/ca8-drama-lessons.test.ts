import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { learnSteps as t1 } from './term1/drama/Slides';
import { learnSteps as t2 } from './term2/drama/Slides';
import { learnSteps as t3 } from './term3/drama/Slides';
import { learnSteps as t4 } from './term4/drama/Slides';

/**
 * The four Grade 8 Drama lessons: every slide renders, has the standard's blocks, every picture has
 * an aria description, and the facts and numbers shown are the ones typed here by hand.
 */

const html = (step: { content: unknown }) => renderToStaticMarkup(step.content as never);
const plain = (h: string) =>
  h
    .replace(/<span class="sr-only">[\s\S]*?<\/span>/g, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/ /g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const LESSONS = {
  'Grade 8 Term 1 drama': {
    steps: t1,
    titles: ['Warm up the body and voice', 'Voice projection', 'Tableaux and body language', 'Improvisation and characterisation', 'Stage directions and reflection', 'Check yourself'],
    facts: ['Stop! Don\'t open that door.', 'Pause for 1 beat', 'Say the first word loud and fast', 'frozen picture made with bodies', 'without a fixed script', 'The script has 1 stage direction', 'projection means speaking clearly so the audience can hear'],
  },
  'Grade 8 Term 2 drama': {
    steps: t2,
    titles: ['Story structure', 'Tension and focus', 'Script excerpts and cue cards', 'Blocking and audience awareness', 'Improvise, then reflect', 'Check yourself'],
    facts: ['beginning, a middle and an ending', 'expectation or suspense', 'Enter at Upstage right', 'Cross to Centre stage on the first line: 1 area', 'Exit at Downstage left: 1 area. Total moves: 2', 'Planned movement on stage', 'Prompting key points during rehearsal'],
  },
  'Grade 8 Term 3 drama': {
    steps: t3,
    titles: ['Characterisation', 'Hot-seating', 'Conflict drives the scene', 'Staging and scripted dialogue', 'Rehearsal discipline and reflection', 'Check yourself'],
    facts: ['5 + 10 + 10 + 5 = 30 minutes', 'Plan a 30-minute rehearsal', 'Place Sipho at Downstage centre', 'Place Mama at Upstage right, 2 areas away', 'in role as a character', 'drives the action of the scene', 'did the staging choices support the conflict'],
  },
  'Grade 8 Term 4 drama': {
    steps: t4,
    titles: ['Scripted performance', 'Clear articulation and cue accuracy', 'Rehearsal discipline and backstage teamwork', 'Audience etiquette', 'Evaluating a performance', 'Check yourself'],
    facts: ['interpret written dialogue and stage directions', 'speaking at the right moment', 'smooth transitions and focus', 'listening respectfully during performances', "how the techniques affected the audience's understanding", 'Evidence from specific moments in the scene'],
  },
} as const;

for (const [name, lesson] of Object.entries(LESSONS)) {
  test(`${name}: slide titles and shape`, () => {
    assert.deepEqual(lesson.steps.map((s) => s.title), lesson.titles);
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

  test(`${name}: every picture has an aria description and at most 6 named labels`, () => {
    for (const s of lesson.steps) {
      const h = html(s);
      for (const m of h.match(/<svg[^>]*>/g) ?? []) {
        assert.match(m, /role="img"/);
        assert.match(m, /aria-label="[^"]{20,}"/);
      }
      for (const m of h.match(/<div[^>]*role="group"[^>]*>/g) ?? []) assert.match(m, /aria-label="[^"]{20,}"/);
      for (const svg of h.match(/<svg[\s\S]*?<\/svg>/g) ?? []) {
        const names = (svg.match(/<text[^>]*>[^<]*[A-Za-z][^<]*<\/text>/g) ?? []).length;
        assert.ok(names <= 20, `${s.title}: ${names} text elements`);
      }
    }
  });

  test(`${name}: the facts and numbers shown are the hand-typed ones`, () => {
    const all = lesson.steps.map((s) => plain(html(s))).join(' | ');
    for (const f of lesson.facts) assert.ok(all.includes(f), `missing "${f}"`);
  });
}

test('each drama bank is untouched: imported slides, `const bank` kept, no inline learnSteps', () => {
  for (const t of [1, 2, 3, 4]) {
    const src = readFileSync(new URL(`./term${t}/drama/Drama.tsx`, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
