import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { AGREEMENT, LETTER_PARTS, closingFor, essayTime, minutesBySection, planInRange } from './examWriting';
import { TENSE_CHECKS, keepsTense } from './tense';
import { learnSteps } from '../../../curriculum/grade9/english/term4/examination-writing-practice/ExaminationWritingPracticeSlides';

test('a 45-minute essay: plan 7, write 30, edit 8, planning inside the 5-10 minute range', () => {
  const t = essayTime(45, 7, 8);
  assert.deepEqual(t, { plan: 7, write: 30, edit: 8 });
  assert.equal(t.plan + t.write + t.edit, 45);
  assert.ok(planInRange(t.plan) && !planInRange(1) && !planInRange(60));
});

test('120 minutes over 30, 50 and 20 marks is 36, 60 and 24, and always adds to the total', () => {
  assert.deepEqual(minutesBySection(120, [30, 50, 20]), [36, 60, 24]);
  for (const [total, marks] of [[100, [30, 30, 40]], [50, [1, 1, 1]], [97, [10, 25, 13]]] as const) {
    assert.equal(minutesBySection(total, marks).reduce((a, b) => a + b, 0), total);
  }
});

test('the letter starts with sender address, date, recipient address and the closing matches the greeting', () => {
  assert.deepEqual(LETTER_PARTS.slice(0, 3).map((p) => p.label), ["Sender's address", 'Date', "Recipient's address"]);
  assert.equal(closingFor('Dear Ms Naidoo'), 'Yours sincerely');
  assert.equal(closingFor('Dear Sir/Madam'), 'Yours faithfully');
});

test('editing examples: the wrong sentence mixes tenses, the right one keeps one; agreement is corrected', () => {
  assert.ok(!keepsTense(TENSE_CHECKS.lebo.wrong));
  assert.ok(keepsTense(TENSE_CHECKS.lebo.right));
  assert.ok(AGREEMENT.wrong.includes('was') && AGREEMENT.right.includes('were'));
});

test('the lesson renders all 6 slides, ends with Check yourself, and teaches what the bank asks', () => {
  assert.equal(learnSteps.length, 6);
  assert.equal(learnSteps[learnSteps.length - 1].title, 'Check yourself');
  const all = learnSteps.map((s) => renderToStaticMarkup(createElement(Fragment, null, s.content))).join(' ').toLowerCase();
  for (const need of ['5 to 10 minutes', 'plan', 'sender', 'recipient', 'date', 'tense', 'agreement', 'read', 'marks', 'major errors', 'topic']) {
    assert.ok(all.includes(need), need);
  }
  assert.ok(all.includes('36, 60, 24 minutes'));
});
