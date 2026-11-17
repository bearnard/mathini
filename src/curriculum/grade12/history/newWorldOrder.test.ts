import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { CapsItem, LearnStep } from '../../../components/CapsSubjectTopic';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { findGaps } from '../../../../scripts/g10-12-coverage';
import { END_OF_COLD_WAR, NEW_ORDER, dateText } from './_shared/newWorldOrderFacts';
import { historyGrade12 } from './index';
import * as endOfWar from './term3/end-of-cold-war/EndOfColdWarContent';
import * as order from './term3/new-world-order/NewWorldOrderContent';

interface Lesson { id: string; learnSteps: LearnStep[]; bank: CapsItem[] }
const LESSONS: Lesson[] = [
  { id: 'gr12-end-of-cold-war-t3', ...endOfWar },
  { id: 'gr12-new-world-order-t3', ...order },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('the two lessons are registered in Grade 12 History term 3 after the existing lessons, with a task instruction each', () => {
  const t3 = historyGrade12.terms.find((t) => t.id === 3)!.topics.map((t) => t.id);
  for (const l of LESSONS) assert.ok(t3.includes(l.id), l.id);
  assert.equal(t3[0], 'gr12-de-klerk-reforms-and-unbanning-t3', 'existing lessons keep their place and ids');
  assert.equal(t3.indexOf('gr12-codesa-and-negotiated-settlement-t3'), 1);
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/his-gr12-neworder.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
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
  const names = ['end-of-cold-war', 'new-world-order'];
  const gaps = findGaps().gaps.filter((g) => names.some((n) => g.file.startsWith(`grade12/history/term3/${n}/`)) && g.strong.length > 0 && g.answer.trim().split(/\s+/).length < 7 && !/^\d/.test(g.answer));
  assert.deepEqual(gaps.map((g) => `${g.file.split('/').at(-1)}: ${g.prompt.slice(0, 60)} -> missing ${g.strong.join(',')}`), []);
});

test('the dates in the facts file are the real ones, and the lessons show them', () => {
  const E = END_OF_COLD_WAR;
  assert.equal(dateText(E.afghanistan), '15 February 1989');
  assert.equal(dateText(E.polishElection), '4 June 1989');
  assert.equal(dateText(E.wallFell), '9 November 1989');
  assert.equal(dateText(E.reunification), '3 October 1990');
  assert.equal(E.coup.to - E.coup.from, 2, '19 to 21 August 1991');
  assert.equal(dateText(E.gorbachevResigned), '25 December 1991');
  assert.equal(E.sovietEnd.day - E.gorbachevResigned.day, 1, 'the next day');
  assert.equal(dateText(E.newYorkAccords), '22 December 1988');
  assert.equal(dateText(E.namibia), '21 March 1990');
  assert.equal(dateText(E.deKlerkSpeech), '2 February 1990');
  assert.equal(dateText(E.mandelaReleased), '11 February 1990', 'separate from the speech');
  assert.equal(dateText(E.election), '27 April 1994');
  assert.equal(dateText(NEW_ORDER.wto), '1 January 1995');
  assert.equal(dateText(NEW_ORDER.seattle), '30 November 1999');
  assert.equal(dateText(NEW_ORDER.nineEleven), '11 September 2001');
  const all = LESSONS.map((l) => text(html(h('div', null, l.learnSteps.map((s) => s.content))))).join(' ');
  for (const needle of ['15 February 1989', '4 June 1989', '9 November 1989', '3 October 1990', '25 December 1991', '22 December 1988', '2 February 1990', '11 February 1990', '27 April 1994', '1 January 1995', '30 November 1999', '11 September 2001']) assert.ok(all.includes(needle), needle);
});

test('the end of the USSR and of apartheid are presented as having several debated causes, and Cuito Cuanavale as disputed', () => {
  const t = text(html(h('div', null, endOfWar.learnSteps.map((s) => s.content))));
  assert.ok(/Historians debate how far they caused its end/.test(t));
  assert.ok(/Other causes/.test(t) && /Links to the Cold War/.test(t));
  assert.ok(/Cuito Cuanavale is also given weight by some accounts, and others dispute it/.test(t));
  assert.ok(!/(SADF|South Africa|Cuba|Angola)\w* (won|was defeated|lost) the battle/i.test(t));
});

test('the globalisation lesson gives supporters\' and critics\' views', () => {
  const t = text(html(h('div', null, order.learnSteps.map((s) => s.content))));
  assert.ok(/Supporters point to growth/.test(t) && /critics point to unequal gains/.test(t));
});
