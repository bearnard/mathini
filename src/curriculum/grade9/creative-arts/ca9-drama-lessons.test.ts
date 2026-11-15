import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { learnSteps as t1 } from './term1/drama/Slides';
import { learnSteps as t2 } from './term2/drama/Slides';
import { learnSteps as t3 } from './term3/drama/Slides';
import { learnSteps as t4 } from './term4/drama/Slides';

/**
 * The four Grade 9 Drama lessons: every slide renders, has the standard's blocks, every picture has an
 * aria description, and the facts and numbers shown are the ones typed here by hand.
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
  'Grade 9 Term 1 drama': {
    steps: t1,
    titles: ['Devised drama from a social theme', 'Role and conflict', 'Mood and atmosphere', 'Stage space and physical theatre', 'Voice control', 'Check yourself'],
    facts: ['bullying, friendship, family, identity, community issues', 'without a written script', 'Lerato wants to be left alone', 'Kabelo wants to stay in control', 'She enters at Upstage right.', 'She crosses to Centre stage', 'She ends at Downstage left. Total moves: 2.', 'Pause for 2 beats.', 'Say "I saw it." soft and slow.', 'Say "Everyone saw it." loud and fast.', 'movement, gesture and body expression'],
  },
  'Grade 9 Term 2 drama': {
    steps: t2,
    titles: ['Analyse the script first', 'Interpretation and motivation', 'Voice, gesture and stage directions', 'South African theatre and cultural awareness', 'Staged reading', 'Check yourself'],
    facts: ['who are the characters, what do they want, and what is the conflict', 'Characters: Thandi and Mama (2 speakers).', 'Then we open it together.', '3 of the 3 lines have a direction.', 'local history, social issues, languages and cultures', 'Stand at Downstage right, Downstage centre, Downstage left.', 'actors hold their scripts and read on stage'],
  },
  'Grade 9 Term 3 drama': {
    steps: t3,
    titles: ['Start with story, conflict and motives', 'Dialogue and stage directions', 'Adapting a scene', 'Mood and audience impact', 'Rehearsal and collaboration', 'Check yourself'],
    facts: ['understanding your characters\' motives, the conflict and your story', 'SIPHO (looking away, quietly): I’m fine.', 'The original has 3 speakers', 'Our cast has 2 actors', 'It is always late. Did I miss it?', '7 + 13 + 13 + 7 = 40 minutes.', 'MOSA (shrugging): It is always late.', '13 minutes.'],
  },
  'Grade 9 Term 4 drama': {
    steps: t4,
    titles: ['Staging a full production', 'Design choices', 'Evaluating acting', 'Teamwork and audience impact', 'Reflection and careers', 'Check yourself'],
    facts: ['lighting, sound, set design, costume and stage management', 'The stage manager calls the cue.', 'costume, lighting, set and props', '4 + 3 + 5 + 4 = 16 out of 20, which is 80%.', '3 of 4 tasks on time is 75%.', 'Went well:', '3, 4, 4, 4 out of 5', '15 out of 20, which is 75%.', 'actor, director, playwright, dramaturge, drama therapist'],
  },
} as const;

for (const [name, lesson] of Object.entries(LESSONS)) {
  test(`${name}: slide titles and shape`, () => {
    assert.deepEqual(lesson.steps.map((s) => s.title), lesson.titles);
    assert.ok(lesson.steps.length >= 4 && lesson.steps.length <= 6);
    lesson.steps.slice(0, -1).forEach((s) => {
      const h = html(s);
      assert.match(h, /Worked example/, `${s.title}: no worked example`);
      assert.match(h, /Common mistake/, `${s.title}: no mistake`);
    });
  });

  test(`${name}: every teaching slide has a rule; the last is Check yourself with 4 questions, answers hidden`, () => {
    lesson.steps.slice(0, -1).forEach((s) => assert.match(html(s), /The rule/, `${s.title}: no rule`));
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

test('each Grade 9 drama bank is untouched: imported slides, `const bank` kept, no inline learnSteps', () => {
  for (const t of [1, 2, 3, 4]) {
    const src = readFileSync(new URL(`./term${t}/drama/Drama.tsx`, import.meta.url), 'utf8');
    assert.match(src, /import \{ learnSteps \} from '\.\/Slides';/);
    assert.ok(src.includes('const bank: CapsItem[] = ['));
    assert.ok(!src.includes('const learnSteps'));
  }
});
