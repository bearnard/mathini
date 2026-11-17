import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { CapsItem, LearnStep } from '../../../components/CapsSubjectTopic';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { findGaps } from '../../../../scripts/g10-12-coverage';
import { PACIFIC, PROJECT, RACE, UDHR, dateText } from './_shared/facts';
import { historyGrade9 } from './index';
import * as pacific from './term1/wwii-pacific/WwiiPacificContent';
import * as udhr from './term3/udhr/UdhrContent';
import * as racism from './term3/racism-myth-of-race/RacismMythOfRaceContent';
import * as oral from './term3/oral-history-project/OralHistoryProjectContent';

interface Lesson { id: string; term: number; dir: string; learnSteps: LearnStep[]; bank: CapsItem[] }
const LESSONS: Lesson[] = [
  { id: 'gr9-wwii-pacific-t1', term: 1, dir: 'term1/wwii-pacific', ...pacific },
  { id: 'gr9-udhr-t3', term: 3, dir: 'term3/udhr', ...udhr },
  { id: 'gr9-racism-myth-of-race-t3', term: 3, dir: 'term3/racism-myth-of-race', ...racism },
  { id: 'gr9-oral-history-project-t3', term: 3, dir: 'term3/oral-history-project', ...oral },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const lessonText = (l: { learnSteps: LearnStep[] }) => text(html(h('div', null, l.learnSteps.map((s) => s.content))));

test('the Grade 9 History additions are registered in their term after the existing lessons (ids unchanged), with a task instruction each', () => {
  const existing: Record<number, string[]> = {
    1: ['gr9-rise-of-hitler-t1', 'gr9-holocaust-genocide-t1', 'gr9-world-war-2-allies-axis-t1', 'gr9-resistance-to-nazism-t1'],
    3: ['gr9-apartheid-system-1948-t3', 'gr9-sophiatown-bantustans-t3', 'gr9-defiance-campaign-freedom-charter-t3', 'gr9-womens-march-resistance-t3'],
  };
  for (const term of [1, 3]) {
    const ids = historyGrade9.terms.find((t) => t.id === term)!.topics.map((t) => t.id);
    assert.deepEqual(ids.slice(0, existing[term].length), existing[term], `term ${term}: existing lessons keep their place and ids`);
    for (const l of LESSONS.filter((x) => x.term === term)) assert.ok(ids.includes(l.id), l.id);
  }
  for (const [file, id] of [['term1', 'gr9-wwii-pacific-t1'], ['term3', 'gr9-udhr-t3'], ['term3', 'gr9-racism-myth-of-race-t3'], ['term3', 'gr9-oral-history-project-t3']]) assert.ok(id in (JSON.parse(fs.readFileSync(`src/lib/server/caps/tasks/his-gr9-${file}.json`, 'utf8')) as { tasks: Record<string, string> }).tasks, id);
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
      assert.ok((q.explanation ?? '').length >= 20, q.prompt);
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
  const gaps = findGaps().gaps.filter((g) => LESSONS.some((l) => g.file.startsWith(`grade9/history/${l.dir}/`)) && g.strong.length > 0 && g.answer.trim().split(/\s+/).length < 7 && !/^\d/.test(g.answer));
  assert.deepEqual(gaps.map((g) => `${g.file.split('/').at(-1)}: ${g.prompt.slice(0, 60)} -> missing ${g.strong.join(',')}`), []);
});

test('the dates and numbers in the facts file are the real ones and the lessons show them', () => {
  assert.equal(dateText(PACIFIC.pearlHarbor), '7 December 1941');
  assert.equal(dateText(PACIFIC.usDeclares), '8 December 1941');
  assert.equal(dateText(PACIFIC.eo9066), '19 February 1942');
  assert.equal(PACIFIC.apology.year, 1988);
  assert.equal(PACIFIC.chinaWar.year, 1937);
  assert.equal(dateText(UDHR.adopted), '10 December 1948');
  assert.equal(UDHR.articles, 30);
  assert.equal(UDHR.votes.for + UDHR.votes.against + UDHR.votes.abstained, 56, '48 + 0 + 8 states voted or abstained');
  const p = lessonText(pacific);
  for (const n of ['7 December 1941', '8 December 1941', '19 February 1942', '1988', 'July 1937']) assert.ok(p.includes(n), n);
  const u = lessonText(udhr);
  for (const n of ['10 December 1948', '30 articles', '48 states voted for it', '8 abstained']) assert.ok(u.includes(n), n);
});

test('the sensitive material is handled with care: both points of view, no casualty figures, the apology, and the "not law" point', () => {
  const p = lessonText(pacific);
  assert.ok(/Two points of view/.test(p) && /apologised and paid compensation/.test(p) && /loyal/.test(p));
  assert.ok(!/\b\d{2,3}[ ,]?000\b[^.]{0,40}(killed|died|dead)/.test(p), 'no contested casualty figures');
  assert.ok(/[Mm]ore than 100\D{0,2}000/.test(p));
  const u = lessonText(udhr);
  assert.ok(/not a law that a court can enforce/.test(u));
});

test('RACISM: the Act year, the CAPS common-ancestry wording and the social-construct point are in the lesson, with the 1950 question answered from the facts', () => {
  assert.equal(RACE.registrationAct.year, 1950);
  assert.equal(RACE.ancestorsYears, 100000);
  const r = lessonText(racism);
  assert.ok(/Population Registration Act of 1950/.test(r));
  assert.ok(/100\D{0,2}000 years ago/.test(r) && /even earlier/.test(r), 'the CAPS wording with the note that scientists give earlier dates');
  assert.ok(/social construct, not a biological one/.test(r) && /real effects/.test(r));
  assert.ok(racism.bank.some((q) => q.prompt.includes('1950') && q.answer === 'It sorted South Africans into groups'));
});

test('ORAL HISTORY: the CAPS numbers (300 words, 2 illustrations, about 10 questions, 600 words) are in the lesson and in the answers', () => {
  assert.deepEqual([PROJECT.researchWords, PROJECT.illustrations, PROJECT.questions, PROJECT.storyWords], [300, 2, 10, 600]);
  const o = lessonText(oral);
  for (const frag of ['300 words', '2 illustrations', 'about 10 questions', '600 words']) assert.ok(o.includes(frag), frag);
  const ans = (part: string) => oral.bank.find((q) => q.prompt.includes(part))!.answer;
  assert.equal(ans('minimum length of the written research'), '300 words');
  assert.equal(ans('How many illustrations'), '2');
  assert.equal(ans('About how many questions'), 'About 10');
  assert.equal(ans('How long should the story'), '600 words');
  assert.ok(/Ask permission/.test(o) && /skip/.test(o));
});
