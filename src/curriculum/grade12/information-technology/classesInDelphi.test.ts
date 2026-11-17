import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { findGaps } from '../../../../scripts/g10-12-coverage';
import { Learner, demo } from './_shared/classFacts';
import { bank, learnSteps, METHODS_CODE, USE_CODE } from './term1/classes-in-delphi/ClassesInDelphiContent';

const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const q = (part: string) => { const hits = bank.filter((x) => x.prompt.includes(part)); assert.equal(hits.length, 1, part); return hits[0]; };

test('4 to 6 slides ending in "Check yourself", every slide renders, 12 to 14 clean questions with spread answers', () => {
  assert.ok(learnSteps.length >= 4 && learnSteps.length <= 6);
  assert.equal(learnSteps.at(-1)?.title, 'Check yourself');
  for (const s of learnSteps) { const out = html(h('div', null, s.content)); assert.ok(text(out).length > 40 && !/undefined|NaN|\[object/.test(out), s.title); }
  assert.ok(bank.length >= 12 && bank.length <= 14);
  for (const x of bank) {
    assert.equal(new Set(x.options).size, 4); assert.ok(x.options.includes(x.answer));
    const r = checkQuestion({ prompt: x.prompt, options: x.options, answer: x.answer, explanation: x.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== x).map((o) => o.prompt) });
    assert.deepEqual(r.reasons.map((y) => `${y.severity}:${y.code}`), [], x.prompt);
  }
  const pos = [0, 0, 0, 0]; for (const x of bank) pos[x.options.indexOf(x.answer)]++;
  assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= bank.length / 2, JSON.stringify(pos));
});

test('every short correct answer can be found in the lesson', () => {
  const gaps = findGaps().gaps.filter((g) => g.file.startsWith('grade12/information-technology/term1/classes-in-delphi/') && g.strong.length > 0 && g.answer.trim().split(/\s+/).length < 7 && !/TLearner|objLearner/.test(g.answer));
  assert.deepEqual(gaps.map((g) => `${g.prompt.slice(0, 60)} -> missing ${g.strong.join(',')}`), []);
});

test('the Delphi code in the lesson and the TypeScript class used to compute the answers say the same thing', () => {
  assert.ok(/fMark >= 75/.test(METHODS_CODE) && /\(iNewMark >= 0\) and \(iNewMark <= 100\)/.test(METHODS_CODE));
  assert.ok(/fName \+ ': ' \+ IntToStr\(fMark\)/.test(METHODS_CODE));
  assert.ok(/TLearner\.Create\('Zinzi', 72\)/.test(USE_CODE));
});

test('every output in the lesson and the questions is computed by running the class', () => {
  const o = new Learner('Zinzi', 72);
  assert.equal(o.toString(), 'Zinzi: 72');
  assert.equal(q('has just been made').answer, o.toString());
  o.setMark(80);
  assert.equal(String(o.isDistinction()), 'true');
  assert.equal(q('After setMark(80), what does isDistinction return').answer, 'True');
  assert.equal(new Learner('x', 72).isDistinction(), false, '72 is below 75');
  o.setMark(120);
  assert.equal(String(o.getMark()), q('After setMark(120)').answer);
  o.setMark(-5);
  assert.equal(o.getMark(), 80, 'a negative mark is ignored too');
  assert.deepEqual(demo().map((d) => d.shows), ['Zinzi: 72', 'True', '80']);
  const t = text(html(h('div', null, learnSteps.map((s) => s.content))));
  for (const needle of ['Zinzi: 72', 'True', '80']) assert.ok(t.includes(needle), needle);
});
