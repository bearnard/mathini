import test from 'node:test';
import assert from 'node:assert/strict';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { debtorsLedger, debtorsPostings, controlBalance, postTransactions, trialBalance } from './components/diagrams/ems/ems9c-helpers';

// Grade 9 EMS credit lessons: shape, bank quality, and every amount in the bank recomputed from the journals.

stubCss();
const debtors = await import('./curriculum/grade9/economic-management-sciences/term2/debtors-credit/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const bank = extractCuratedBanks().filter((q) => q.file.includes('debtors-credit'));

test('the debtors lesson has 4 to 6 slides with the standard blocks, a picture with a description, and a final Check yourself', () => {
  const steps = debtors.learnSteps;
  assert.ok(steps.length >= 4 && steps.length <= 6);
  assert.equal(steps[steps.length - 1].title, 'Check yourself');
  for (const s of steps.slice(0, -1)) {
    const h = html(s);
    assert.match(h, /The rule/);
    assert.match(h, /Worked example/);
    assert.match(h, /Common mistake/);
    assert.match(h, /aria-label="[^"]+"/, `${s.title}: a picture with a description`);
  }
  assert.match(html(steps[steps.length - 1]), /<details/);
});

test('the bank has 14 valid questions, the key in all four positions, no quality reject', () => {
  assert.equal(bank.length, 14);
  for (const q of bank) {
    assert.equal(new Set(q.options).size, 4, q.prompt);
    assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
    const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
    assert.deepEqual(r.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
  }
  assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
});

test('INDEPENDENT: the amounts in the bank are what the journals give', () => {
  const { DJ, DAJ, CRJ } = debtors;
  const find = (start: string) => bank.find((q) => q.prompt.startsWith(start))!;
  // by hand, from the entries
  const sales = [1200, 850, 400, 1500];
  assert.deepEqual(DJ.map((x) => x.amount), sales);
  assert.equal(sales.reduce((a, b) => a + b, 0), 3950);
  assert.equal(find('The debtors journal for March shows credit sales').answer, 'Debit R3 950');
  const owed = (name: string) => DJ.filter((x) => x.name === name).reduce((a, x) => a + x.amount, 0) - DAJ.filter((x) => x.name === name).reduce((a, x) => a + x.amount, 0) - CRJ.filter((x) => x.name === name).reduce((a, x) => a + x.amount, 0);
  assert.equal(owed('Dlamini'), 600);
  assert.equal(owed('Naidoo'), 0);
  assert.equal(owed('Pillay'), 1500);
  assert.equal(find('Dlamini was invoiced').answer, 'R600');
  assert.equal(find('Naidoo was invoiced').answer, 'R0');
  assert.equal(find('Debtors owe: Dlamini R600').answer, 'R2 100');
  // the engine agrees
  const ledger = debtorsLedger(DJ, DAJ, CRJ);
  assert.deepEqual(ledger.map((a) => a.balance), [600, 0, 1500]);
  assert.deepEqual(controlBalance(debtorsPostings(DJ, DAJ, CRJ), 'Debtors control'), { balance: 2100, side: 'debit' });
  assert.equal(trialBalance(postTransactions(debtorsPostings(DJ, DAJ, CRJ))).balanced, true);
  // the wrong amounts are different numbers
  for (const start of ['Dlamini was invoiced', 'Naidoo was invoiced', 'Debtors owe: Dlamini R600']) {
    const q = find(start);
    for (const o of q.options.filter((x) => x !== q.answer)) assert.notEqual(o, q.answer);
  }
});

test('the lesson shows the amounts the bank uses (so the lesson teaches the numbers)', () => {
  const text = debtors.learnSteps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/\s+/g, ' ')).join(' ');
  for (const frag of ['R3 950', 'R600', 'R2 100', 'R1 200']) assert.ok(text.includes(frag), frag);
});
