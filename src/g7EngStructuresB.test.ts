import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 7 English HL language structures, Term 2 (task ids gr7-...-t2): shape and bank quality of the lessons, and grammar answers worked out here by rule.

stubCss();
const base = './curriculum/grade7/english';
const L = {
  'active-passive-voice': { mod: await import(`${base}/term2/active-passive-voice/Slides`), task: 'gr7-active-passive-voice-t2' },
  'prepositions-adverbs': { mod: await import(`${base}/term2/prepositions-adverbs/Slides`), task: 'gr7-prepositions-adverbs-t2' },
  'direct-reported-speech': { mod: await import(`${base}/term2/direct-reported-speech/Slides`), task: 'gr7-direct-reported-speech-t2' },
  'apostrophe-hyphen-quotation': { mod: await import(`${base}/term2/apostrophe-hyphen-quotation/Slides`), task: 'gr7-apostrophe-hyphen-quotation-t2' },
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

test('task ids start with gr7- and end with -t2, and each has a task instruction in its own file', () => {
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/eng-gr7-structures.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
  for (const { task } of Object.values(L)) {
    assert.ok(task.startsWith('gr7-') && task.endsWith('-t2'), task);
    assert.ok(task in tasks, task);
  }
});

test('INDEPENDENT: voice, prepositions, adverbs, reported speech and punctuation (grammar rules)', () => {
  // passive = be + past participle in the tense of the active verb; progressive passive = am/is/are being + participle
  assert.equal(find('active-passive-voice', 'Which sentence is the passive form of The chef cooks the meal').answer, 'The meal is cooked by the chef.');
  assert.equal(find('active-passive-voice', 'Which sentence is the passive form of The chef is cooking the meal').answer, 'The meal is being cooked by the chef.');
  assert.equal(find('active-passive-voice', 'Which sentence is the passive form of They will paint the hall').answer, 'The hall will be painted by them.');
  assert.equal(find('active-passive-voice', 'Which sentence is the active form of The tests were marked').answer, 'The teacher marked the tests.');
  assert.equal(find('active-passive-voice', 'The books ___ returned yesterday').answer, 'were');
  assert.equal(find('active-passive-voice', 'The cake ___ eaten').answer, 'was');
  assert.equal(find('active-passive-voice', 'In Thabo kicked the red ball').answer, 'Three');
  assert.equal('the red ball'.split(' ').length, 3);
  // fixed prepositions and adverb forms
  assert.equal(find('prepositions-adverbs', 'Which preposition completes: She is afraid').answer, 'of');
  assert.equal(find('prepositions-adverbs', 'Which preposition completes: He is interested').answer, 'in');
  assert.equal(find('prepositions-adverbs', 'Which preposition completes: It depends').answer, 'on');
  assert.equal(find('prepositions-adverbs', 'Which preposition completes: Please listen').answer, 'to');
  assert.equal(find('prepositions-adverbs', 'What is the adverb that is made from the adjective happy').answer, 'happily');
  assert.equal(find('prepositions-adverbs', 'Which word completes: She sings').answer, 'well');
  // reported speech: the verb moves back one tense (am was, can could, will would), questions have statement order and a full stop
  assert.equal(find('direct-reported-speech', 'Use the rule that the verb moves back one tense. Zanele').answer, 'was');
  assert.equal(find('direct-reported-speech', 'Use the rule that the verb moves back one tense. Sipho').answer, 'could');
  assert.equal(find('direct-reported-speech', 'Use the rule that the verb moves back one tense. She said').answer, 'would');
  assert.equal(find('direct-reported-speech', 'Which sentence correctly reports He asked').answer, 'He asked where I lived.');
  assert.equal(find('direct-reported-speech', 'Which sentence correctly reports She asked').answer, 'She asked if I was ready.');
  assert.equal(find('direct-reported-speech', 'In reported speech, what does now change to').answer, 'then');
  // apostrophes, hyphens and quotation marks
  assert.equal(find('apostrophe-hyphen-quotation', 'How do you write the bag that belongs to one girl').answer, "the girl's bag");
  assert.equal(find('apostrophe-hyphen-quotation', 'How do you write the bags that belong to two girls').answer, "the girls' bags");
  assert.equal(find('apostrophe-hyphen-quotation', 'How do you write the toys that belong to the children').answer, "the children's toys");
  assert.equal(find('apostrophe-hyphen-quotation', 'How do you write the number 21').answer, 'twenty-one');
  assert.equal(find('apostrophe-hyphen-quotation', 'What is the contraction of he is').answer, "he's");
});

test('South African English spelling is used', () => {
  const all = Object.values(L).flatMap((l) => l.mod.learnSteps.map(html)).join(' ').toLowerCase();
  for (const bad of ['color', 'neighbor', 'favorite']) assert.ok(!all.includes(bad), bad);
  for (const q of bankOf('direct-reported-speech').filter((x) => /moves back one tense/.test(x.prompt))) assert.ok(/rule/i.test(q.prompt), q.prompt);
});
