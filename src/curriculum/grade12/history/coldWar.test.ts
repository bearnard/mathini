import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { CapsItem, LearnStep } from '../../../components/CapsSubjectTopic';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { findGaps } from '../../../../scripts/g10-12-coverage';
import { ANGOLA, CHINA, ORIGINS, VIETNAM, dateText } from './_shared/coldWarFacts';
import { historyGrade12 } from './index';
import * as origins from './term1/cold-war-origins/ColdWarOriginsContent';
import * as china from './term1/cold-war-china/ColdWarChinaContent';
import * as vietnam from './term1/cold-war-vietnam/ColdWarVietnamContent';
import * as angola from './term1/cold-war-angola/ColdWarAngolaContent';

interface Lesson { id: string; learnSteps: LearnStep[]; bank: CapsItem[] }
const LESSONS: Lesson[] = [
  { id: 'gr12-cold-war-origins-t1', ...origins },
  { id: 'gr12-cold-war-china-t1', ...china },
  { id: 'gr12-cold-war-vietnam-t1', ...vietnam },
  { id: 'gr12-cold-war-angola-t1', ...angola },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('the four Cold War lessons are registered in Grade 12 History term 1 (after the existing lessons, which are unchanged) with a task instruction each', () => {
  const t1 = historyGrade12.terms.find((t) => t.id === 1)!.topics.map((t) => t.id);
  for (const l of LESSONS) assert.ok(t1.includes(l.id), l.id);
  assert.deepEqual(t1.slice(0, 4), ['gr12-black-consciousness-movement-t1', 'gr12-soweto-uprising-t1', 'gr12-trade-unions-and-the-udf-t1', 'gr12-independence-in-congo-and-tanzania-t1'], 'existing lessons keep their place and ids');
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/his-gr12-coldwar.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
  assert.deepEqual(Object.keys(tasks).sort(), LESSONS.map((l) => l.id).sort());
});

for (const l of LESSONS) {
  test(`${l.id}: 4 to 6 slides ending in "Check yourself", every slide renders, 12 to 14 clean questions`, () => {
    assert.ok(l.learnSteps.length >= 4 && l.learnSteps.length <= 6, `${l.learnSteps.length} slides`);
    assert.equal(l.learnSteps.at(-1)?.title, 'Check yourself');
    for (const s of l.learnSteps) {
      const out = html(h('div', null, s.content));
      assert.ok(text(out).length > 40, `${s.title}: empty slide`);
      assert.ok(!/undefined|NaN|\[object/.test(out), `${s.title}: broken text`);
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
  for (const q of LESSONS.flatMap((l) => l.bank)) pos[q.options.indexOf(q.answer)]++;
  assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= LESSONS.flatMap((l) => l.bank).length / 2, JSON.stringify(pos));
});

test('every short correct answer can be found in its lesson', () => {
  const gaps = findGaps().gaps.filter((g) => g.file.startsWith('grade12/history/term1/cold-war-') && g.strong.length > 0 && g.answer.trim().split(/\s+/).length < 7 && !/^\d/.test(g.answer)); // a date answer is shown in the timeline, built from the facts file
  assert.deepEqual(gaps.map((g) => `${g.file.split('/').at(-1)}: ${g.prompt.slice(0, 60)} -> missing ${g.strong.join(',')}`), []);
});

test('the dates in the facts file are the real ones, and the lessons show them', () => {
  assert.equal(dateText(ORIGINS.wallBuilt), '13 August 1961');
  assert.equal(dateText(ORIGINS.wallFell), '9 November 1989');
  assert.equal(dateText(ORIGINS.blockadeStart), '24 June 1948');
  assert.equal(dateText(ORIGINS.blockadeEnd), '12 May 1949');
  assert.equal(ORIGINS.cubaEnd.day - ORIGINS.cubaStart.day + 1, 13, 'thirteen days, 16 to 28 October 1962');
  assert.equal(dateText(CHINA.prc), '1 October 1949');
  assert.equal(CHINA.culturalRevolution.to - CHINA.culturalRevolution.from, 10);
  assert.equal(dateText(CHINA.diplomaticRelations), '1 January 1979');
  assert.equal(dateText(VIETNAM.parisAccords), '27 January 1973');
  assert.equal(dateText(VIETNAM.saigonFell), '30 April 1975');
  assert.equal(VIETNAM.parallel, 17);
  assert.equal(dateText(ANGOLA.independence), '11 November 1975');
  assert.equal(dateText(ANGOLA.newYorkAccords), '22 December 1988');
  assert.equal(dateText(ANGOLA.namibia), '21 March 1990');
  const all = LESSONS.map((l) => text(html(h('div', null, l.learnSteps.map((s) => s.content))))).join(' ');
  for (const needle of ['13 August 1961', '9 November 1989', '1 October 1949', '27 January 1973', '30 April 1975', '22 December 1988', '21 March 1990', '11 November 1975']) assert.ok(all.includes(needle), needle);
});

test('Cuito Cuanavale is presented as contested: both accounts appear and no lesson text names a winner', () => {
  const t = text(html(h('div', null, angola.learnSteps.map((s) => s.content))));
  assert.ok(/South African and UNITA accounts/.test(t) && /Angolan and Cuban accounts/.test(t));
  assert.ok(!/(SADF|South Africa|Cuba|Angola)\w* (won|was defeated|lost) the battle/i.test(t));
  assert.ok(angola.bank.some((q) => /Why do South African and Cuban accounts/.test(q.prompt)), 'a question on how and why the accounts differ');
});
