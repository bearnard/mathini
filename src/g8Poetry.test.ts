import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { englishHLGrade8 } from './curriculum/grade8/english';
import poetryTasks from './lib/server/caps/tasks/eng-gr8-poetry.json';

// Grade 8 English HL poetry strand: four lessons beside the umbrella lesson "Poetry and Close Reading".
// Poems are original (and say so) or public domain with author, title and year. The public-domain texts are asserted word for word below
// from the standard editions, independently of the lesson files; every one is also on the teacher-check list.

stubCss();
const LESSONS = [
  { id: 'reading-a-poem', term: 1, dir: 'term1/reading-a-poem', mod: 'ReadingAPoem' },
  { id: 'figures-of-speech-in-poems', term: 2, dir: 'term2/figures-of-speech-in-poems', mod: 'FiguresOfSpeechInPoems' },
  { id: 'sound-and-structure-in-poems', term: 3, dir: 'term3/sound-and-structure-in-poems', mod: 'SoundAndStructureInPoems' },
  { id: 'mood-tone-theme-and-poetry-questions', term: 4, dir: 'term4/mood-tone-theme-and-poetry-questions', mod: 'MoodToneThemeAndPoetryQuestions' },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('registered, and each lesson has a task instruction', () => {
  const ids = (n: number) => englishHLGrade8.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  assert.ok(ids(1).includes('poetry-close-reading'));
  for (const l of LESSONS) {
    assert.ok(ids(l.term).includes(l.id), l.id);
    assert.ok((poetryTasks.tasks as Record<string, string>)[`gr8-${l.id}-t${l.term}`], l.id);
  }
});

for (const l of LESSONS) {
  test(`${l.id}: 4 slides, every poem cited, 14 clean questions`, async () => {
    const { learnSteps } = await import(`./curriculum/grade8/english/${l.dir}/${l.mod}`);
    assert.equal(learnSteps.length, 4);
    assert.equal(learnSteps.at(-1)?.title, 'Check yourself');
    for (const s of learnSteps.slice(0, -1)) {
      const out = html(h('div', null, s.content));
      assert.ok(/The rule/i.test(out) && /Worked example/i.test(out) && /Common mistake/i.test(out), `${s.title}: parts`);
      assert.ok(/role="img"/.test(out) && /aria-label="[^"]{40,}"/.test(out), `${s.title}: picture aria`);
      const poems = out.match(/<figure[\s\S]*?<\/figure>/g) ?? [];
      assert.ok(poems.length >= 1, `${s.title}: a poem is shown`);
      for (const f of poems) {
        assert.match(f, /Original poem written for this lesson|Public domain: [^<]+, \d{4}/, `${s.title}: poem without provenance`);
        const year = f.match(/, (\d{4})/);
        if (/Public domain/.test(f)) assert.ok(Number(year![1]) < 1900, 'public-domain poems are before 1900');
      }
      assert.ok(!out.includes('\\') && !/undefined|\bNaN\b/.test(out));
    }
    assert.ok((html(h('div', null, learnSteps.at(-1)!.content)).match(/<details/g) ?? []).length >= 3);
    const bank = extractCuratedBanks().filter((q) => q.file.includes(`grade8/english/${l.dir}/`));
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
    const pos = [0, 0, 0, 0];
    for (const q of bank) pos[q.options.indexOf(q.answer)]++;
    assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= 5, JSON.stringify(pos));
  });
}

test('INDEPENDENT: public-domain texts are quoted word for word, and the lesson counts are right', async () => {
  const all: Record<string, string> = {};
  for (const l of LESSONS) {
    const { learnSteps } = await import(`./curriculum/grade8/english/${l.dir}/${l.mod}`);
    all[l.id] = learnSteps.map((s: { content: React.ReactNode }) => text(html(h('div', null, s.content)))).join(' ');
  }
  const rp = all['reading-a-poem'];
  // Tennyson, The Eagle (1851), complete
  for (const line of ['He clasps the crag with crooked hands;', 'Close to the sun in lonely lands,', "Ring'd with the azure world, he stands.", 'The wrinkled sea beneath him crawls;', 'He watches from his mountain walls,', 'And like a thunderbolt he falls.']) assert.ok(rp.includes(line), line);
  // Christina Rossetti, Who Has Seen the Wind? (1872), complete
  for (const line of ['Who has seen the wind?', 'Neither I nor you:', 'But when the leaves hang trembling,', 'The wind is passing through.', 'Neither you nor I:', 'But when the trees bow down their heads,', 'The wind is passing by.']) assert.ok(rp.includes(line), line);
  // Emily Dickinson, "Hope" is the thing with feathers, first stanza
  const fs2 = all['figures-of-speech-in-poems'];
  for (const line of ['"Hope" is the thing with feathers -', 'That perches in the soul -', 'And sings the tune without the words -', 'And never stops - at all -']) assert.ok(fs2.includes(line), line);
  // Stevenson, From a Railway Carriage (1885), first four lines; Blake, The Tyger (1794), first stanza
  const ss = all['sound-and-structure-in-poems'];
  for (const line of ['Faster than fairies, faster than witches,', 'Bridges and houses, hedges and ditches;', 'And charging along like troops in a battle,', 'All through the meadows the horses and cattle:', 'Tyger Tyger, burning bright,', 'In the forests of the night;', 'What immortal hand or eye,', 'Could frame thy fearful symmetry?']) assert.ok(ss.includes(line), line);
  // counts stated in the lessons: The Eagle has 6 lines in 2 stanzas of 3; Rossetti has 2 stanzas of 4 lines
  assert.match(rp, /6 lines, in 2 stanzas of 3 lines each/);
  assert.match(rp, /2 stanzas of 4 lines/);
  // rhyme schemes: Rossetti lines 2 and 4 end you / through; Blake bright/night and eye/symmetry (AABB, a near rhyme in the second pair)
  assert.match(ss, /ABAB/);
  assert.match(ss, /AABB/);
  const ends = (ls: string[]) => ls.map((l) => l.replace(/[^a-z' ]/gi, '').trim().split(' ').pop()!.toLowerCase());
  assert.deepEqual(ends(['Tyger Tyger, burning bright,', 'In the forests of the night;']), ['bright', 'night']);
  assert.deepEqual(ends(['Bridges and houses, hedges and ditches;', 'Faster than fairies, faster than witches,']), ['ditches', 'witches']);
  assert.deepEqual(ends(['The puddles hold the sky today,', 'the gutters gargle, gulp and gleam,', 'the children splash and run and play', 'and every window starts to steam.']), ['today', 'gleam', 'play', 'steam']);
});

test('the teacher-check list covers every public-domain poem used', () => {
  const d = fs.readFileSync('docs/notes/g8-poetry-doubts.md', 'utf8');
  for (const part of ['The Eagle', 'Who Has Seen the Wind', 'Hope', 'From a Railway Carriage', 'The Tyger', 'Tennyson', 'Rossetti', 'Dickinson', 'Stevenson', 'Blake']) assert.ok(d.includes(part), part);
});
