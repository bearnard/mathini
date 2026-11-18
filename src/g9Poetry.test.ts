import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { englishHLGrade9 } from './curriculum/grade9/english';
import poetryTasks from './lib/server/caps/tasks/eng-gr9-poetry.json';

// Grade 9 English HL poetry strand: four lessons beside the umbrella lesson "Poetry and Drama Study".
// Poems are original (and say so) or public domain with author, title and year. The public-domain texts are asserted word for word below
// from the standard editions, independently of the lesson files; every one is also on the teacher-check list.

stubCss();
const LESSONS = [
  { id: 'imagery-and-symbolism-in-poems', term: 2, dir: 'term2/imagery-and-symbolism-in-poems', mod: 'ImageryAndSymbolismInPoems' },
  { id: 'form-and-structure-in-poems', term: 2, dir: 'term2/form-and-structure-in-poems', mod: 'FormAndStructureInPoems' },
  { id: 'tone-mood-irony-and-message', term: 3, dir: 'term3/tone-mood-irony-and-message', mod: 'ToneMoodIronyAndMessage' },
  { id: 'analysing-a-poem-and-writing-poetry', term: 4, dir: 'term4/analysing-a-poem-and-writing-poetry', mod: 'AnalysingAPoemAndWritingPoetry' },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('registered, and each lesson has a task instruction', () => {
  const ids = (n: number) => englishHLGrade9.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  assert.ok(ids(2).includes('poetry-drama-study'));
  for (const l of LESSONS) {
    assert.ok(ids(l.term).includes(l.id), l.id);
    assert.ok((poetryTasks.tasks as Record<string, string>)[`gr9-${l.id}-t${l.term}`], l.id);
  }
});

for (const l of LESSONS) {
  test(`${l.id}: 4 slides, every poem cited, 14 clean questions`, async () => {
    const { learnSteps } = await import(`./curriculum/grade9/english/${l.dir}/${l.mod}`);
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
    const bank = extractCuratedBanks().filter((q) => q.file.includes(`grade9/english/${l.dir}/`));
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

test('INDEPENDENT: public-domain texts are quoted word for word, and the structure claims are right', async () => {
  const all: Record<string, string> = {};
  for (const l of LESSONS) {
    const { learnSteps } = await import(`./curriculum/grade9/english/${l.dir}/${l.mod}`);
    all[l.id] = learnSteps.map((s: { content: React.ReactNode }) => text(html(h('div', null, s.content)))).join(' ');
  }
  const im = all['imagery-and-symbolism-in-poems'];
  // Wordsworth, I Wandered Lonely as a Cloud (1807), first stanza
  for (const line of ['I wandered lonely as a cloud', "That floats on high o'er vales and hills,", 'When all at once I saw a crowd,', 'A host, of golden daffodils;', 'Beside the lake, beneath the trees,', 'Fluttering and dancing in the breeze.']) assert.ok(im.includes(line), line);
  // Blake, The Sick Rose (1794), complete
  for (const line of ['O Rose thou art sick!', 'The invisible worm,', 'That flies in the night', 'In the howling storm:', 'Has found out thy bed', 'Of crimson joy:', 'And his dark secret love', 'Does thy life destroy.']) assert.ok(im.includes(line), line);
  const fm = all['form-and-structure-in-poems'];
  // Shakespeare, Sonnet 18 (1609), complete: 14 lines
  const sonnet = ["Shall I compare thee to a summer's day?", 'Thou art more lovely and more temperate:', 'Rough winds do shake the darling buds of May,', "And summer's lease hath all too short a date;", 'Sometime too hot the eye of heaven shines,', "And often is his gold complexion dimm'd;", 'And every fair from fair sometime declines,', "By chance or nature's changing course untrimm'd;", 'But thy eternal summer shall not fade,', "Nor lose possession of that fair thou ow'st;", "Nor shall Death brag thou wander'st in his shade,", "When in eternal lines to time thou grow'st:", 'So long as men can breathe or eyes can see,', 'So long lives this, and this gives life to thee.'];
  assert.equal(sonnet.length, 14);
  for (const line of sonnet) assert.ok(fm.includes(line), line);
  // the rhyme scheme ABAB CDCD EFEF GG, checked from the line endings
  const end = (l: string) => l.replace(/[^a-z']/gi, ' ').trim().split(/\s+/).pop()!.toLowerCase();
  const e = sonnet.map(end);
  assert.deepEqual([e[0], e[2]], ['day', 'may']);
  assert.deepEqual([e[1], e[3]], ['temperate', 'date']);
  assert.deepEqual([e[4], e[6]], ['shines', 'declines']);
  assert.deepEqual([e[5], e[7]], ["dimm'd", "untrimm'd"]);
  assert.deepEqual([e[8], e[10]], ['fade', 'shade']);
  assert.deepEqual([e[9], e[11]], ["ow'st", "grow'st"]);
  assert.deepEqual([e[12], e[13]], ['see', 'thee']);
  assert.match(fm, /ABAB CDCD EFEF GG/);
  assert.match(fm, /fourteen lines/);
  // Shelley, Ozymandias (1818), last six lines
  const tn = all['tone-mood-irony-and-message'];
  for (const line of ['And on the pedestal, these words appear:', "'My name is Ozymandias, King of Kings;", "Look on my Works, ye Mighty, and despair!'", 'Nothing beside remains. Round the decay', 'Of that colossal Wreck, boundless and bare', 'The lone and level sands stretch far away.']) assert.ok(tn.includes(line), line);
  assert.match(all['analysing-a-poem-and-writing-poetry'], /four to eight stanzas/);
});

test('the teacher-check list covers every public-domain poem used', () => {
  const d = fs.readFileSync('docs/notes/g9-poetry-doubts.md', 'utf8');
  for (const part of ['Wordsworth', 'Daffodils', 'The Sick Rose', 'Blake', 'Sonnet 18', 'Shakespeare', 'Ozymandias', 'Shelley']) assert.ok(d.includes(part), part);
});
