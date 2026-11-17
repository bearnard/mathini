import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { CapsItem, LearnStep } from '../../../components/CapsSubjectTopic';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { findGaps } from '../../../../scripts/g10-12-coverage';
import { BLACK_POWER, CIVIL_RIGHTS, WOMEN_AND_PEACE, dateText } from './_shared/civilSocietyFacts';
import { historyGrade12 } from './index';
import * as civil from './term2/civil-rights-movement/CivilRightsMovementContent';
import * as power from './term2/black-power-movement/BlackPowerMovementContent';
import * as women from './term2/women-and-peace-movements/WomenAndPeaceMovementsContent';

interface Lesson { id: string; learnSteps: LearnStep[]; bank: CapsItem[] }
const LESSONS: Lesson[] = [
  { id: 'gr12-civil-rights-movement-t2', ...civil },
  { id: 'gr12-black-power-movement-t2', ...power },
  { id: 'gr12-women-and-peace-movements-t2', ...women },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('the three civil-society lessons are registered in Grade 12 History term 2 after the existing lessons, with a task instruction each', () => {
  const t2 = historyGrade12.terms.find((t) => t.id === 2)!.topics.map((t) => t.id);
  for (const l of LESSONS) assert.ok(t2.includes(l.id), l.id);
  assert.deepEqual(t2.slice(0, 4), ['gr12-tricameral-parliament-and-pw-botha-reforms-t2', 'gr12-mass-democratic-movement-and-cosatu-t2', 'gr12-repression-and-states-of-emergency-t2', 'gr12-sanctions-disinvestment-and-the-road-to-negotiations-t2'], 'existing lessons keep their place and ids');
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/his-gr12-civilsociety.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
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
  const names = ['civil-rights-movement', 'black-power-movement', 'women-and-peace-movements'];
  const gaps = findGaps().gaps.filter((g) => names.some((n) => g.file.startsWith(`grade12/history/term2/${n}/`)) && g.strong.length > 0 && g.answer.trim().split(/\s+/).length < 7 && !/^\d/.test(g.answer));
  assert.deepEqual(gaps.map((g) => `${g.file.split('/').at(-1)}: ${g.prompt.slice(0, 60)} -> missing ${g.strong.join(',')}`), []);
});

test('the dates in the facts file are the real ones, and the lessons show them', () => {
  assert.equal(dateText(CIVIL_RIGHTS.brown), '17 May 1954');
  assert.equal(dateText(CIVIL_RIGHTS.marchOnWashington), '28 August 1963');
  assert.equal(dateText(CIVIL_RIGHTS.civilRightsAct), '2 July 1964');
  assert.equal(dateText(CIVIL_RIGHTS.votingRightsAct), '6 August 1965');
  assert.equal(dateText(CIVIL_RIGHTS.kingKilled), '4 April 1968');
  assert.equal(CIVIL_RIGHTS.littleRockStudents, 9);
  assert.equal(dateText(BLACK_POWER.malcolmKilled), '21 February 1965');
  assert.equal(BLACK_POWER.panthers.year, 1966);
  assert.equal(dateText(WOMEN_AND_PEACE.womensMarch), '9 August 1956');
  assert.equal(dateText(WOMEN_AND_PEACE.moratorium), '15 October 1969');
  const all = LESSONS.map((l) => text(html(h('div', null, l.learnSteps.map((s) => s.content))))).join(' ');
  for (const needle of ['17 May 1954', '28 August 1963', '2 July 1964', '6 August 1965', '4 April 1968', '21 February 1965', '9 August 1956', '15 October 1969']) assert.ok(all.includes(needle), needle);
});

test('the Black Power lesson is balanced: it names gains and limits and says historians judge the Panthers differently', () => {
  const t = text(html(h('div', null, power.learnSteps.map((s) => s.content))));
  assert.ok(/Gains/.test(t) && /Limits/.test(t) && /Historians judge the Panthers differently/.test(t));
});
