import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { CapsItem, LearnStep } from '../../../components/CapsSubjectTopic';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { findGaps } from '../../../../scripts/g10-12-coverage';
import { englishHLGrade9 } from './index';
import * as diary from './term2/diary-entry/DiaryEntryContent';
import * as constitution from './term2/constitution-and-policy/ConstitutionAndPolicyContent';
import * as will from './term3/will-and-testament/WillAndTestamentContent';
import * as cv from './term3/cv-and-covering-letter/CvAndCoveringLetterContent';
import * as application from './term4/letter-of-application/LetterOfApplicationContent';
import * as email from './term4/email/EmailContent';

interface Lesson { id: string; term: number; dir: string; learnSteps: LearnStep[]; bank: CapsItem[] }
const LESSONS: Lesson[] = [
  { id: 'diary-entry', term: 2, dir: 'term2/diary-entry', ...diary },
  { id: 'constitution-and-policy', term: 2, dir: 'term2/constitution-and-policy', ...constitution },
  { id: 'will-and-testament', term: 3, dir: 'term3/will-and-testament', ...will },
  { id: 'cv-and-covering-letter', term: 3, dir: 'term3/cv-and-covering-letter', ...cv },
  { id: 'letter-of-application', term: 4, dir: 'term4/letter-of-application', ...application },
  { id: 'email', term: 4, dir: 'term4/email', ...email },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('the Grade 9 transactional-text lessons are registered in their CAPS term after the existing lessons, with a task instruction each', () => {
  const existing: Record<number, string[]> = {
    1: ['advertising-visual-design', 'essay-transactional-writing', 'grammar-revision-accuracy'],
    2: ['poetry-drama-study', 'letters-reviews', 'sentence-structure-cohesion'],
    3: ['oral-literature-narrative', 'reports-instructional-texts', 'advanced-language-context'],
    4: ['synoptic-revision', 'examination-writing-practice', 'grammar-literature-consolidation'],
  };
  for (const term of [1, 2, 3, 4]) {
    const ids = englishHLGrade9.terms.find((t) => t.id === term)!.topics.map((t) => t.id);
    assert.deepEqual(ids.slice(0, 3), existing[term], `term ${term}: existing lessons keep their place and ids`);
    for (const l of LESSONS.filter((x) => x.term === term)) assert.ok(ids.includes(l.id), l.id);
  }
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/eng-gr9-transactional.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
  assert.deepEqual(Object.keys(tasks).sort(), LESSONS.map((l) => `gr9-${l.id}-t${l.term}`).sort());
});

for (const l of LESSONS) {
  test(`${l.id}: 4 to 6 slides ending in "Check yourself", every slide renders, 12 to 14 clean questions`, () => {
    assert.ok(l.learnSteps.length >= 4 && l.learnSteps.length <= 6, `${l.learnSteps.length} slides`);
    assert.equal(l.learnSteps.at(-1)?.title, 'Check yourself');
    for (const s of l.learnSteps) {
      const out = html(h('div', null, s.content));
      assert.ok(text(out).length > 40, `${s.title}: empty slide`);
      assert.ok(!/undefined|NaN|\[object/.test(out), `${s.title}: broken text`);
      assert.ok(!/&ldquo;|&rsquo;/.test(s.title), `${s.title}: raw entity in a title`);
    }
    assert.ok((html(h('div', null, l.learnSteps.at(-1)!.content)).match(/<details/g) ?? []).length >= 3);
    assert.ok(l.bank.length >= 12 && l.bank.length <= 14, `${l.bank.length} questions`);
    assert.equal(new Set(l.bank.map((q) => q.prompt)).size, l.bank.length);
    for (const q of l.bank) {
      assert.equal(q.options.length, 4, q.prompt);
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.ok(q.options.includes(q.answer), q.prompt);
      assert.ok((q.explanation ?? '').length >= 40, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: l.bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
  });
}

test('the answer positions are spread over the four options', () => {
  const pos = [0, 0, 0, 0];
  const all = LESSONS.flatMap((l) => l.bank);
  for (const q of all) pos[q.options.indexOf(q.answer)]++;
  assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= all.length / 2, JSON.stringify(pos));
});

test('every short correct answer can be found in its lesson', () => {
  const gaps = findGaps().gaps.filter((g) => LESSONS.some((l) => g.file.startsWith(`grade9/english/${l.dir}/`)) && g.strong.length > 0 && g.answer.trim().split(/\s+/).length < 7);
  assert.deepEqual(gaps.map((g) => `${g.file.split('/').at(-1)}: ${g.prompt.slice(0, 60)} -> missing ${g.strong.join(',')}`), []);
});

test('every model text is labelled as original and shows its parts', () => {
  for (const l of LESSONS) {
    const t = text(html(h('div', null, l.learnSteps.map((s) => s.content))));
    assert.ok(/An original model written for this lesson/.test(t), `${l.id}: model not labelled`);
  }
  const d = text(html(h('div', null, diary.learnSteps.map((s) => s.content))));
  for (const needle of ['Date and time', 'Events', 'Evaluation', 'first person']) assert.ok(d.includes(needle), `diary: ${needle}`);
  const c = text(html(h('div', null, constitution.learnSteps.map((s) => s.content))));
  for (const needle of ['Membership', 'Amendments', 'Date of adoption and signature', 'binding']) assert.ok(c.includes(needle), `constitution: ${needle}`);
});

test('the will lesson keeps the legal detail out of the questions and tells the learner to see a lawyer', () => {
  const t = text(html(h('div', null, will.learnSteps.map((s) => s.content))));
  assert.ok(/drawn up with a lawyer/.test(t));
  const bankText = will.bank.map((q) => `${q.prompt} ${q.options.join(' ')} ${q.explanation}`).join(' ');
  assert.ok(!/\b(age|years old|two witnesses|valid|Wills Act)\b/i.test(bankText), 'no question depends on the exact legal rules');
});

test('the covering letter lesson gives the closing rule: Yours faithfully after Dear Sir or Madam, Yours sincerely after a name', () => {
  const t = text(html(h('div', null, cv.learnSteps.map((s) => s.content))));
  assert.ok(/Dear Sir or Madam.{0,30}Yours faithfully/.test(t) && /Dear Mr Naidoo.{0,40}Yours sincerely/.test(t));
  const ends = cv.bank.filter((q) => /How should it end/.test(q.prompt));
  assert.equal(ends.length, 2);
  assert.deepEqual(ends.map((q) => q.answer).sort(), ['Yours faithfully', 'Yours sincerely']);
});

test('the letter of application follows the CAPS formal letter: two addresses, underlined subject line, surname and initials', () => {
  const t = text(html(h('div', null, application.learnSteps.map((s) => s.content))));
  assert.ok(/two addresses/.test(t) && /underlined/.test(t) && /surname and initials/.test(t));
  assert.ok(/<u>/.test(html(h('div', null, application.learnSteps[1].content))), 'the model has an underlined subject line');
});

test('the e-mail lesson follows the CAPS e-mail description: address parts, CC, subject as a summary, signature', () => {
  const t = text(html(h('div', null, email.learnSteps.map((s) => s.content))));
  for (const needle of ['moloi.q@webmail.co.za', 'CC', 'a summary of the content', 'signature', 'automatically']) assert.ok(t.includes(needle), needle);
});
