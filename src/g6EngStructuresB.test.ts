import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 6 English HL language structures, Terms 3 and 4 (task ids eng6-*, never gr6-): shape and bank quality of the lessons, and grammar answers worked out here by rule.

stubCss();
const base = './curriculum/grade6/english';
const L = {
  'active-passive-voice': { mod: await import(`${base}/term3/active-passive-voice/Slides`), task: 'eng6-active-passive-voice' },
  'direct-indirect-speech': { mod: await import(`${base}/term3/direct-indirect-speech/Slides`), task: 'eng6-direct-indirect-speech' },
  'past-future-perfect': { mod: await import(`${base}/term3/past-future-perfect/Slides`), task: 'eng6-past-future-perfect' },
  adverbs: { mod: await import(`${base}/term4/adverbs/Slides`), task: 'eng6-adverbs' },
  'punctuation-marks': { mod: await import(`${base}/term4/punctuation-marks/Slides`), task: 'eng6-punctuation-marks' },
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

test('task ids start with eng6-, are unique, and each has a task instruction', () => {
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/eng-gr6-structures.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
  for (const { task } of Object.values(L)) {
    assert.ok(task.startsWith('eng6-') && !task.startsWith('gr6-'), task);
    assert.ok(task in tasks, task);
  }
});

test('INDEPENDENT: voice, speech, perfect tenses, adverbs and punctuation (grammar rules)', () => {
  // passive = a form of be + past participle; the tense of the verb is kept
  assert.equal(find('active-passive-voice', 'Which sentence is the passive form of The cook baked the bread').answer, 'The bread was baked by the cook.');
  assert.equal(find('active-passive-voice', 'Which sentence is the active form of The letter was written by Sipho').answer, 'Sipho wrote the letter.');
  assert.equal(find('active-passive-voice', 'Which sentence is the passive form of The learners clean the hall').answer, 'The hall is cleaned by the learners.');
  assert.equal(find('active-passive-voice', 'The tests ___ marked').answer, 'are');
  // indirect speech: am -> was, I -> he, tomorrow -> the next day, here -> there
  assert.equal(find('direct-indirect-speech', 'Use the rule that the verb moves back one tense').answer, 'was');
  assert.equal(find('direct-indirect-speech', 'In indirect speech, the time word tomorrow').answer, 'the next day');
  assert.equal(find('direct-indirect-speech', 'A reporter changes the place word here').answer, 'there');
  assert.equal(find('direct-indirect-speech', 'Sipho said, "I am late."').answer, 'he');
  // past perfect = had + participle, future perfect = will have + participle
  assert.equal(find('past-future-perfect', 'When we reached the station').answer, 'had');
  assert.equal(find('past-future-perfect', 'By next month she').answer, 'will have');
  assert.equal(find('past-future-perfect', 'What is the past participle of see').answer, 'seen');
  // adverbs
  assert.equal(find('adverbs', 'Which adverb tells how often').answer, 'always');
  assert.equal(find('adverbs', 'Which adverb of manner can be made from the adjective careful').answer, 'carefully');
  assert.equal(find('adverbs', 'In The learners will leave tomorrow').answer, 'Adverb of time');
  // punctuation
  assert.equal(find('punctuation-marks', 'You write I do not know').answer, "I don't know.");
  assert.equal(find('punctuation-marks', 'What is the contraction of she will').answer, "she'll");
  assert.equal(find('punctuation-marks', 'You write We cannot swim here').answer, "We can't swim here.");
  assert.equal(find('punctuation-marks', 'Which mark is used to introduce a list').answer, 'colon');
  assert.equal(find('punctuation-marks', 'Which mark joins two closely related main clauses').answer, 'semi-colon');
});

test('South African English spelling is used, and the lessons that need a rule state it in the question', () => {
  const all = Object.values(L).flatMap((l) => l.mod.learnSteps.map(html)).join(' ').toLowerCase();
  for (const bad of ['color', 'neighbor', 'favorite']) assert.ok(!all.includes(bad), bad);
  for (const q of bankOf('direct-indirect-speech').filter((x) => /becomes .* ___|moves back/.test(x.prompt))) assert.ok(/rule|moves back/i.test(q.prompt), q.prompt);
});
