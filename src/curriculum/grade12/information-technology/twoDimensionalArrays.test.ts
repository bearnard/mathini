import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { findGaps } from '../../../../scripts/g10-12-coverage';
import { COLS, MARKS, ROWS, colTotal, countAtLeast, div, grandTotal, highest, lowest, mark, mod, rowTotal } from './_shared/arrayFacts';
import { informationTechnologyGrade12 } from './index';
import { bank, learnSteps } from './term2/two-dimensional-arrays/TwoDimensionalArraysContent';

const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const lesson = text(html(h('div', null, learnSteps.map((s) => s.content))));
const q = (part: string) => {
  const hits = bank.filter((x) => x.prompt.includes(part));
  assert.equal(hits.length, 1, `exactly one question contains: ${part}`);
  return hits[0];
};

test('the 2-D arrays lesson is registered in Term 2 (the existing ids are unchanged), with a task instruction', () => {
  const t2 = informationTechnologyGrade12.terms.find((t) => t.id === 2)!.topics.map((t) => t.id);
  assert.ok(!t2.includes('gr12-advanced-databases-sql-t2'), 'the SQL lesson moved to Term 1 (2024 amendment: SQL is a Term 1 topic)');
  assert.ok(informationTechnologyGrade12.terms.find((t) => t.id === 1)!.topics.some((p) => p.id === 'gr12-advanced-databases-sql-t2'));
  assert.ok(t2.includes('gr12-two-dimensional-arrays-t2'));
  const tasks = (JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/it-gr12-missing.json', 'utf8')) as { tasks: Record<string, string> }).tasks;
  assert.ok('gr12-two-dimensional-arrays-t2' in tasks);
});

test('4 to 6 slides ending in "Check yourself", every slide renders, 12 to 14 clean questions', () => {
  assert.ok(learnSteps.length >= 4 && learnSteps.length <= 6);
  assert.equal(learnSteps.at(-1)?.title, 'Check yourself');
  for (const s of learnSteps) {
    const out = html(h('div', null, s.content));
    assert.ok(text(out).length > 40, `${s.title}: empty slide`);
    assert.ok(!/undefined|NaN|\[object/.test(out), `${s.title}: broken text`);
  }
  assert.ok((html(h('div', null, learnSteps.at(-1)!.content)).match(/<details/g) ?? []).length >= 3);
  assert.ok(bank.length >= 12 && bank.length <= 14, `${bank.length} questions`);
  assert.equal(new Set(bank.map((x) => x.prompt)).size, bank.length);
  for (const x of bank) {
    assert.equal(x.options.length, 4, x.prompt);
    assert.equal(new Set(x.options).size, 4, x.prompt);
    assert.ok(x.options.includes(x.answer), x.prompt);
    assert.ok((x.explanation ?? '').length >= 20, x.prompt);
    const r = checkQuestion({ prompt: x.prompt, options: x.options, answer: x.answer, explanation: x.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== x).map((o) => o.prompt) });
    assert.deepEqual(r.reasons.map((y) => `${y.severity}:${y.code}`), [], x.prompt);
  }
  const pos = [0, 0, 0, 0];
  for (const x of bank) pos[x.options.indexOf(x.answer)]++;
  assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= bank.length / 2, JSON.stringify(pos));
});

test('every short correct answer can be found in the lesson', () => {
  const gaps = findGaps().gaps.filter((g) => g.file.startsWith('grade12/information-technology/term2/two-dimensional-arrays/') && g.strong.length > 0 && g.answer.trim().split(/\s+/).length < 7 && !/^\d/.test(g.answer) && !/^arrMarks/.test(g.answer));
  assert.deepEqual(gaps.map((g) => `${g.prompt.slice(0, 60)} -> missing ${g.strong.join(',')}`), []);
});

test('Delphi semantics: bounds count from 1, and an index outside them is an error', () => {
  assert.equal(mark(1, 1), 65);
  assert.equal(mark(ROWS, COLS), 74);
  assert.throws(() => mark(5, 1), RangeError);
  assert.throws(() => mark(0, 1), RangeError);
  assert.throws(() => mark(1, 4), RangeError);
  assert.equal(div(217, 3), 72);
  assert.equal(mod(217, 3), 1);
});

test('every number in the lesson and in the questions is recomputed from the one data table', () => {
  assert.equal(ROWS * COLS, 12);
  assert.deepEqual([1, 2, 3, 4].map(rowTotal), [217, 168, 263, 210]);
  assert.deepEqual([1, 2, 3].map(colTotal), [283, 284, 291]);
  assert.equal(grandTotal(), 858);
  assert.equal([1, 2, 3, 4].map(rowTotal).reduce((a, b) => a + b, 0), grandTotal());
  assert.equal([1, 2, 3].map(colTotal).reduce((a, b) => a + b, 0), grandTotal());
  assert.deepEqual(highest(), { value: 90, row: 3, col: 1 });
  assert.deepEqual(lowest(), { value: 49, row: 2, col: 3 });
  assert.equal(countAtLeast(75), 4);
  // the questions
  assert.equal(q('How many elements does array').answer, String(ROWS * COLS));
  assert.equal(q('stored in arrMarks[2, 3]').answer, String(mark(2, 3)));
  assert.equal(q('highest mark of 90').answer, `arrMarks[${highest().row}, ${highest().col}]`);
  assert.equal(q('how many times does the inner statement').answer, String(ROWS * COLS));
  assert.equal(q('total of row 2').answer, String(rowTotal(2)));
  assert.ok(q('total of row 2').prompt.includes(MARKS[1].join(', ').replace(/, (\d+)$/, ' and $1')), 'the marks quoted for row 2 are the real ones');
  assert.equal(q('total of column 3').answer, String(colTotal(3)));
  assert.ok(q('total of column 3').prompt.includes([1, 2, 3, 4].map((r) => mark(r, 3)).join(', ').replace(/, (\d+)$/, ' and $1')), 'the marks quoted for column 3 are the real ones');
  assert.equal(q('grand total of all 12').answer, String(grandTotal()));
  assert.ok(q('grand total of all 12').explanation!.includes(`${rowTotal(1)} + ${rowTotal(2)} + ${rowTotal(3)} + ${rowTotal(4)}`));
  assert.equal(q('217 div 3').answer, String(div(rowTotal(1), COLS)));
  assert.ok(q('217 div 3').prompt.includes(String(rowTotal(1))) && q('217 div 3').explanation!.includes(`${mod(rowTotal(1), COLS)} left over`));
  assert.equal(q('marks are 75 or more').answer, String(countAtLeast(75)));
  // the outside-the-bounds statement is the only one that would raise an error
  const stmt = q('outside the declared bounds');
  for (const o of stmt.options) {
    const m = /arrMarks\[(\d+), (\d+)\]/.exec(o)!;
    const threw = (() => { try { mark(Number(m[1]), Number(m[2])); return false; } catch { return true; } })();
    assert.equal(threw, o === stmt.answer, o);
  }
  // the lesson text shows the computed values
  for (const needle of ['217, 168, 263, 210', '283, 284, 291', '858', 'array[1..4, 1..3]']) assert.ok(lesson.includes(needle), needle);
});
