import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 6 English HL language structures (Wave A, task ids eng6-*, never gr6-*, because the weekly top-up treats gr6-* as Maths):
// shape and bank quality of the lessons, and grammar checks recomputed here from the rules, not from the lesson text.

stubCss();
const base = './curriculum/grade6/english';
const L = {
  'pronouns-types': { mod: await import(`${base}/term1/pronouns-types/Slides`), task: 'eng6-pronouns-types', term: 1 },
  'subject-verb-agreement': { mod: await import(`${base}/term1/subject-verb-agreement/Slides`), task: 'eng6-subject-verb-agreement', term: 1 },
  prepositions: { mod: await import(`${base}/term1/prepositions/Slides`), task: 'eng6-prepositions', term: 1 },
  'prefixes-suffixes-stems': { mod: await import(`${base}/term2/prefixes-suffixes-stems/Slides`), task: 'eng6-prefixes-suffixes-stems', term: 2 },
  'continuous-present-perfect': { mod: await import(`${base}/term2/continuous-present-perfect/Slides`), task: 'eng6-continuous-present-perfect', term: 2 },
} as const;
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes('grade6/english/') && q.file.includes(`/${name}/`));
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

test('each bank has 14 valid questions, no quality reason at all, the key in all four positions, one correct option', () => {
  for (const name of Object.keys(L)) {
    const bank = bankOf(name);
    assert.equal(bank.length, 14, name);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      assert.ok(!/learners?\b.*\bCAPS\b|\bCAPS\b/.test(q.prompt), q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4, name);
  }
});

test('task ids start with eng6-, are unique, and each has a task instruction in its own file', () => {
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/eng-gr6-structures.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
  for (const l of Object.values(L)) assert.ok(l.task in tasks, l.task);
  for (const k of Object.keys(tasks)) assert.ok(k.startsWith('eng6-') && !k.startsWith('gr6-'), k);
});

// Grammar answers worked out here by rule, so that a wrong key cannot pass.
test('INDEPENDENT: agreement, tenses, prepositions and word parts (grammar rules)', () => {
  // singular subject: s form; plural subject: plain form; "to be" with I is am; a subject joined by and is plural
  assert.equal(find('subject-verb-agreement', 'Complete: My sister ___ to school').answer, 'goes');
  assert.equal(find('subject-verb-agreement', 'I ___ ready').answer, 'am');
  assert.equal(find('subject-verb-agreement', 'Thabo and Sipho ___').answer, 'are');
  assert.equal(find('subject-verb-agreement', 'The cat and the dog ___').answer, 'are');
  assert.equal(find('subject-verb-agreement', 'Yesterday we ___').answer, 'won');
  assert.equal(find('subject-verb-agreement', 'What is the simple past tense of go').answer, 'went');
  // prepositions of time: clock time at, day on, month in
  assert.equal(find('prepositions', 'Complete: The school day starts').answer, 'at');
  assert.equal(find('prepositions', 'Complete: We have a test').answer, 'on');
  assert.equal(find('prepositions', 'Complete: My birthday is').answer, 'in');
  assert.equal(find('prepositions', 'Complete: The ball is ___ the two chairs').answer, 'between');
  // prefix and suffix meanings
  assert.equal(find('prefixes-suffixes-stems', 'Which suffix means without').answer, 'less');
  assert.equal(find('prefixes-suffixes-stems', 'What does the prefix re mean').answer, 'again');
  assert.equal(find('prefixes-suffixes-stems', 'Which prefix means not').answer, 'un');
  // alphabetical order: apple, banana, cherry, date
  assert.equal(find('prefixes-suffixes-stems', 'Which list is in alphabetical order').answer, ['apple', 'banana', 'cherry', 'date'].sort().join(', '));
  // continuous and perfect forms
  assert.equal(find('continuous-present-perfect', 'What is the past participle of write').answer, 'written');
  assert.equal(find('continuous-present-perfect', 'They ___ already left').answer, 'have');
  assert.equal(find('continuous-present-perfect', 'Which auxiliary verb completes the past continuous').answer, 'were');
  assert.equal(find('continuous-present-perfect', 'Which tense uses will be').answer, 'Future continuous');
  // pronouns
  assert.equal(find('pronouns-types', 'You point at two books').answer, 'Those');
  assert.equal(find('pronouns-types', 'Which sentence is correct').answer, 'Everyone is ready.');
  assert.equal(find('pronouns-types', 'Which interrogative pronoun is used to ask about a thing').answer, 'what');
});

test('South African English spelling is used in the lessons (colour, practise as a verb), not the American forms', () => {
  const all = Object.values(L).flatMap((l) => l.mod.learnSteps.map(html)).join(' ').toLowerCase();
  for (const bad of ['color', 'practice as', 'neighbor', 'favorite']) assert.ok(!all.includes(bad), bad);
});
