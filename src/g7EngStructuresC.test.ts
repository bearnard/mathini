import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 7 English HL language structures, Terms 3 and 4 (task ids gr7-...-t3 and -t4): shape and bank quality of the lessons, and grammar answers worked out here by rule.

stubCss();
const base = './curriculum/grade7/english';
const L = {
  clauses: { mod: await import(`${base}/term3/clauses/Slides`), task: 'gr7-clauses-t3' },
  pronouns: { mod: await import(`${base}/term3/pronouns/Slides`), task: 'gr7-pronouns-t3' },
  'verbs-gerunds': { mod: await import(`${base}/term4/verbs-gerunds/Slides`), task: 'gr7-verbs-gerunds-t4' },
  'bias-emotive-language': { mod: await import(`${base}/term4/bias-emotive-language/Slides`), task: 'gr7-bias-emotive-language-t4' },
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

test('task ids start with gr7- and end with -t3 or -t4, and each has a task instruction in its own file', () => {
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/eng-gr7-structures.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
  for (const { task } of Object.values(L)) {
    assert.ok(task.startsWith('gr7-') && /-t[34]$/.test(task), task);
    assert.ok(task in tasks, task);
  }
});

test('INDEPENDENT: clauses, pronouns, verb forms and critical language (grammar rules)', () => {
  // relative pronouns: who for people (subject), whose for belonging, which for things
  assert.equal(find('clauses', 'Which relative pronoun completes: The boy').answer, 'whose');
  assert.equal(find('clauses', 'Which relative pronoun completes: The teacher').answer, 'who');
  assert.equal(find('clauses', 'Which relative pronoun completes: The book').answer, 'which');
  assert.equal(find('clauses', 'In The boy who won the race').answer, 'Adjectival clause');
  assert.equal(find('clauses', 'In We left when the bell rang').answer, 'Adverbial clause');
  // pronouns: subject pronoun in a compound subject, object pronoun after a preposition, possessive pronoun stands alone, reflexive ends in self
  assert.equal(find('pronouns', 'Which pronoun completes: Thabo and').answer, 'I');
  assert.equal(find('pronouns', 'Which pronoun completes: The teacher gave the books').answer, 'me');
  assert.equal(find('pronouns', 'Which of these is a reflexive pronoun').answer, 'himself');
  assert.equal(find('pronouns', 'Which pronoun completes: Everybody').answer, 'is');
  assert.equal(find('pronouns', 'Sipho read the books').answer, 'them');
  // verbs: finite verb shows tense, infinitive is to + verb, past participle of break is broken, present participle of run doubles the n
  assert.equal(find('verbs-gerunds', 'Which verb is finite in the sentence Thabo wants to swim').answer, 'wants');
  assert.equal(find('verbs-gerunds', 'Which verb form is the infinitive').answer, 'to swim');
  assert.equal(find('verbs-gerunds', 'What is the present participle of the verb run').answer, 'running');
  assert.equal(find('verbs-gerunds', 'What is the past participle of the verb break').answer, 'broken');
  assert.equal(find('verbs-gerunds', 'In the sentence Dancing is good exercise').answer, 'A gerund');
  assert.equal(find('verbs-gerunds', 'In He is swimming now').answer, 'A present participle');
  // critical language
  assert.equal(find('bias-emotive-language', 'Which word is the most emotive').answer, 'catastrophe');
  assert.equal(find('bias-emotive-language', 'Which question is a rhetorical question').answer, 'Who would not want to save money?');
  assert.equal(find('bias-emotive-language', 'Which statement treats every teenager as the same').answer, 'Teenagers are lazy.');
});

test('the lessons use invented, non-offensive examples and no named real group, person or product', () => {
  const all = Object.values(L).flatMap((l) => l.mod.learnSteps.map(html)).join(' ');
  for (const name of ['Coca', 'Nike', 'Facebook', 'Google', 'Zulu', 'Xhosa', 'Afrikaner', 'Muslim', 'Christian', 'Jewish']) assert.ok(!all.includes(name), name);
});
