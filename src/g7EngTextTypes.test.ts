import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';

// Grade 7 English HL text types (Wave A, task ids gr7-...): shape and bank quality of the nine lessons and checks of facts that have one right answer.

stubCss();
const base = './curriculum/grade7/english';
const L = {
  'poem-writing': { mod: await import(`${base}/term1/poem-writing/Slides`), task: 'gr7-poem-writing-t1' },
  'drama-dialogue': { mod: await import(`${base}/term1/drama-dialogue/Slides`), task: 'gr7-drama-dialogue-t1' },
  instructions: { mod: await import(`${base}/term2/instructions/Slides`), task: 'gr7-instructions-t2' },
  'drama-review': { mod: await import(`${base}/term2/drama-review/Slides`), task: 'gr7-drama-review-t2' },
  'forms-questionnaires': { mod: await import(`${base}/term3/forms-questionnaires/Slides`), task: 'gr7-forms-questionnaires-t3' },
  'notice-agenda-minutes': { mod: await import(`${base}/term3/notice-agenda-minutes/Slides`), task: 'gr7-notice-agenda-minutes-t3' },
  'newspaper-article': { mod: await import(`${base}/term3/newspaper-article/Slides`), task: 'gr7-newspaper-article-t3' },
  'diary-email-flyer': { mod: await import(`${base}/term4/diary-email-flyer/Slides`), task: 'gr7-diary-email-flyer-t4' },
  speech: { mod: await import(`${base}/term4/speech/Slides`), task: 'gr7-speech-t4' },
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

test('task ids match the plan (gr7-poem-writing-t1 ... gr7-speech-t4) and each has a task instruction in its own file', () => {
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/eng-gr7-text-types.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
  assert.deepEqual(Object.keys(tasks).sort(), Object.values(L).map((l) => l.task).sort());
  assert.deepEqual(Object.keys(tasks).sort(), ['gr7-diary-email-flyer-t4', 'gr7-drama-dialogue-t1', 'gr7-drama-review-t2', 'gr7-forms-questionnaires-t3', 'gr7-instructions-t2', 'gr7-newspaper-article-t3', 'gr7-notice-agenda-minutes-t3', 'gr7-poem-writing-t1', 'gr7-speech-t4']);
});

test('INDEPENDENT: facts with one right answer (format, order and rhyme)', () => {
  // rhyme scheme of cat/hat/sun/fun is AABB; a quatrain has four lines
  assert.equal(find('poem-writing', 'What is the rhyme scheme of this poem').answer, 'AABB');
  assert.equal(find('poem-writing', 'How many lines are there in a quatrain').answer, 'Four');
  assert.equal(find('poem-writing', 'Which pair of words rhyme').answer, 'moon and spoon');
  // 5 March 2012 as dd/mm/yyyy is 05/03/2012
  assert.equal(find('forms-questionnaires', 'A form asks for the date of birth as dd/mm/yyyy').answer, `${String(5).padStart(2, '0')}/${String(3).padStart(2, '0')}/2012`);
  assert.equal(find('forms-questionnaires', 'A form asks for your surname in block letters').answer, 'Mokoena'.toUpperCase());
  // agenda before the meeting, minutes after, in the past tense
  assert.equal(find('notice-agenda-minutes', 'When is an agenda sent out').answer, 'Before the meeting');
  assert.equal(find('notice-agenda-minutes', 'When are minutes written').answer, 'After the meeting');
  assert.equal(find('notice-agenda-minutes', 'Which tense do minutes use').answer, 'The past tense');
  // instructions: command verb first, present tense, finally = last step
  assert.equal(find('instructions', 'Which word is a command verb').answer, 'Fold');
  assert.equal(find('instructions', 'Which sequence word shows the last step').answer, 'finally');
  // news article: by-line names the writer, the lead gives the main facts, third person and past tense
  assert.equal(find('newspaper-article', 'Which part of a news article names the writer').answer, 'The by-line');
  assert.equal(find('newspaper-article', 'Which person is used in a news report').answer, 'The third person');
  // e-mail and diary: date first, subject line tells the topic, Cc is a copy
  assert.equal(find('diary-email-flyer', 'What does a diary entry begin with').answer, 'The date');
  assert.equal(find('diary-email-flyer', 'What does Cc mean in an e-mail').answer, 'People who get a copy');
  // speech parts
  assert.equal(find('speech', 'A speech is divided into three parts').answer, 'Opening, body and closing');
});

test('model texts use invented names and details, and no real person, place name or product is shown as a source', () => {
  const all = Object.values(L).flatMap((l) => l.mod.learnSteps.map(html)).join(' ');
  for (const name of ['Coca', 'Nike', 'Facebook', 'Google', 'WhatsApp', 'Mandela', 'Ramaphosa']) assert.ok(!all.includes(name), name);
});
