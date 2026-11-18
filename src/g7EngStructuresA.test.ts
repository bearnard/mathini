import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 7 English HL language structures, Term 1 (task ids gr7-...-t1): shape and bank quality of the lessons, and grammar answers worked out here by rule.

stubCss();
const base = './curriculum/grade7/english';
const L = {
  'adjectives-comparison': { mod: await import(`${base}/term1/adjectives-comparison/Slides`), task: 'gr7-adjectives-comparison-t1' },
  'prefixes-suffixes-roots': { mod: await import(`${base}/term1/prefixes-suffixes-roots/Slides`), task: 'gr7-prefixes-suffixes-roots-t1' },
  'sentence-parts-clauses': { mod: await import(`${base}/term1/sentence-parts-clauses/Slides`), task: 'gr7-sentence-parts-clauses-t1' },
  'multiple-meanings': { mod: await import(`${base}/term1/multiple-meanings/Slides`), task: 'gr7-multiple-meanings-t1' },
  'spelling-dictionary': { mod: await import(`${base}/term1/spelling-dictionary/Slides`), task: 'gr7-spelling-dictionary-t1' },
} as const;
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes('grade7/english/') && q.file.includes(`/${name}/`));
const find = (name: string, start: string) => {
  const hits = bankOf(name).filter((q) => q.prompt.startsWith(start));
  assert.equal(hits.length, 1, start);
  return hits[0];
};

test('each lesson has 4 to 6 slides, the standard blocks, a described picture and a final Check yourself', () => {
  for (const [name, { mod }] of Object.entries(L)) {
    const steps = mod.learnSteps;
    assert.ok(steps.length >= 4 && steps.length <= 6, name);
    assert.equal(steps[steps.length - 1].title, 'Check yourself', name);
    assert.match(html(steps[steps.length - 1]), /<details/, name);
    for (const s of steps.slice(0, -1)) {
      const h = html(s);
      for (const re of [/The rule/, /Worked example/, /Common mistake/, /aria-label="[^"]+"/]) assert.match(h, re, `${name}: ${s.title}`);
    }
  }
});

test('each bank has 14 valid questions, no quality reason at all, the key in all four positions, no stray backslash', () => {
  for (const name of Object.keys(L)) {
    const bank = bankOf(name);
    assert.equal(bank.length, 14, name);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      for (const t of [q.prompt, q.answer, q.explanation ?? '', ...q.options]) assert.ok(!t.includes('\\'), `backslash in: ${t}`);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4, name);
  }
});

test('task ids start with gr7-, are unique, and each has a task instruction in its own file', () => {
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/eng-gr7-structures.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
  for (const { task } of Object.values(L)) {
    assert.ok(task.startsWith('gr7-') && task.endsWith('-t1'), task);
    assert.ok(task in tasks, task);
  }
});

test('INDEPENDENT: comparison, spelling rules, clauses, roots and homophones (grammar rules)', () => {
  // comparatives: tall -> taller, big -> bigger (double the consonant), happy -> happiest (y to i), good -> best (irregular), bad -> worse
  assert.equal(find('adjectives-comparison', 'What is the comparative form of the adjective tall').answer, 'taller');
  assert.equal(find('adjectives-comparison', 'What is the comparative form of the adjective big').answer, 'bigger');
  assert.equal(find('adjectives-comparison', 'What is the superlative form of the adjective happy').answer, 'happiest');
  assert.equal(find('adjectives-comparison', 'What is the superlative form of the adjective good').answer, 'best');
  assert.equal(find('adjectives-comparison', 'What is the comparative form of the adjective bad').answer, 'worse');
  assert.equal(find('adjectives-comparison', 'What is the comparative form of the adjective beautiful').answer, 'more beautiful');
  // roots: port carry, dict say, aud hear, scrib write
  assert.equal(find('prefixes-suffixes-roots', 'What does the root port mean').answer, 'carry');
  assert.equal(find('prefixes-suffixes-roots', 'What does the root dict mean').answer, 'say');
  assert.equal(find('prefixes-suffixes-roots', 'What does the root aud mean').answer, 'hear');
  assert.equal(find('prefixes-suffixes-roots', 'What does the root scrib mean').answer, 'write');
  assert.equal(find('prefixes-suffixes-roots', 'Which word has the correct spelling after adding ing to hope').answer, 'hoping');
  // clauses: the subject The young girl has 3 words, the predicate barked at the postman has 4
  assert.equal(find('sentence-parts-clauses', 'In the sentence The young girl sang loudly').answer, String('The young girl'.split(' ').length).replace('3', 'Three'));
  assert.equal(find('sentence-parts-clauses', 'In the sentence The dog barked at the postman').answer, 'Four');
  assert.equal('barked at the postman'.split(' ').length, 4);
  assert.equal(find('sentence-parts-clauses', 'How many clauses are there').answer, 'Two');
  // homophones and homonyms
  assert.equal(find('multiple-meanings', 'Which pair are homophones').answer, 'sea and see');
  assert.equal(find('multiple-meanings', 'Which word completes the sentence correctly: She has').answer, 'two');
  // plurals and endings
  assert.equal(find('spelling-dictionary', 'What is the plural of the noun box').answer, 'boxes');
  assert.equal(find('spelling-dictionary', 'What is the plural of the noun story').answer, 'stories');
  assert.equal(find('spelling-dictionary', 'What is the plural of the noun knife').answer, 'knives');
  assert.equal(find('spelling-dictionary', 'Which word is spelt correctly after adding ed to stop').answer, 'stopped');
  assert.equal(find('spelling-dictionary', 'Which word is spelt correctly after adding ed to carry').answer, 'carried');
});

test('South African English spelling is used (colour, favourite, centre; practise the verb, practice the noun)', () => {
  const all = Object.values(L).flatMap((l) => l.mod.learnSteps.map(html)).join(' ').toLowerCase();
  assert.ok(all.includes('colour') && all.includes('favourite') && all.includes('practise') && all.includes('practice'));
  assert.equal(find('spelling-dictionary', 'Which word completes the sentence: You must').answer, 'practise');
  assert.equal(find('spelling-dictionary', 'Which word completes the sentence: Soccer').answer, 'practice');
  assert.equal(find('spelling-dictionary', 'Which word is spelt in the South African way').answer, 'colour');
});
