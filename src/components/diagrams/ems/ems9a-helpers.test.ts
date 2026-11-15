import test from 'node:test';
import assert from 'node:assert/strict';
import { budgetPlan, householdSpending, monthlyViability, perWorker, postTransactions, profitAndCash, startUpCapital, totalCost, trialBalance, variance } from './ems9a-helpers';

test('a household: R20 000 income, R4 000 tax, R2 000 saved leaves R14 000 to spend', () => {
  assert.deepEqual(householdSpending(20000, 4000, 2000), { income: 20000, tax: 4000, saved: 2000, spent: 14000 });
  assert.equal(householdSpending(12000, 2000, 1000).spent, 9000);
  assert.equal(householdSpending(5000, 0, 5000).spent, 0); // saving everything leaves nothing for firms
});

test('productivity per worker', () => {
  assert.equal(perWorker(200, 10), 20);
  assert.equal(perWorker(350, 10), 35);
});

const TXS = [
  { debit: 'Bank', credit: 'Capital', amount: 30000 },
  { debit: 'Bank', credit: 'Sales', amount: 2970 },
  { debit: 'Rent', credit: 'Bank', amount: 2000 },
  { debit: 'Purchases', credit: 'Bank', amount: 4000 },
];

test('posting four transactions to the ledger', () => {
  const accts = postTransactions(TXS);
  assert.deepEqual(accts.map((a) => a.name), ['Bank', 'Capital', 'Sales', 'Rent', 'Purchases']);
  const bank = accts[0];
  assert.deepEqual([bank.debits, bank.credits, bank.totalDebit, bank.totalCredit, bank.balance, bank.side], [[30000, 2970], [2000, 4000], 32970, 6000, 26970, 'debit']);
  assert.deepEqual([accts[1].balance, accts[1].side], [30000, 'credit']);
  assert.deepEqual([accts[2].balance, accts[2].side], [2970, 'credit']);
});

test('the trial balance agrees: both columns total R32 970', () => {
  const tb = trialBalance(postTransactions(TXS));
  assert.deepEqual(tb.rows, [
    { name: 'Bank', debit: 26970, credit: null },
    { name: 'Capital', debit: null, credit: 30000 },
    { name: 'Sales', debit: null, credit: 2970 },
    { name: 'Rent', debit: 2000, credit: null },
    { name: 'Purchases', debit: 4000, credit: null },
  ]);
  assert.equal(tb.totalDebit, 32970);
  assert.equal(tb.totalCredit, 32970);
  assert.ok(tb.balanced);
});

test('a one-sided entry breaks the trial balance (the mistake)', () => {
  const oneSided = trialBalance([{ name: 'Bank', debits: [100], credits: [], totalDebit: 100, totalCredit: 0, balance: 100, side: 'debit' }]);
  assert.equal(oneSided.balanced, false);
});

test('a budget: income R6 000, fixed R1 500 + R400, variable R2 800 + R300', () => {
  const b = budgetPlan(6000, [1500, 400], [2800, 300]);
  assert.deepEqual([b.totalFixed, b.totalVariable, b.spending, b.left, b.kind, b.amount], [1900, 3100, 5000, 1000, 'surplus', 1000]);
  assert.equal(budgetPlan(1000, [800], [400]).kind, 'deficit');
  assert.equal(budgetPlan(1000, [800], [400]).amount, 200);
});

test('fixed cost stays, variable cost grows: rent R2 000, wood R150 a table', () => {
  assert.deepEqual(totalCost(2000, 150, 10), { fixed: 2000, variable: 1500, total: 3500 });
  assert.deepEqual(totalCost(2000, 150, 20), { fixed: 2000, variable: 3000, total: 5000 });
  assert.equal(totalCost(2000, 150, 0).total, 2000);
});

test('variance is actual minus budget', () => {
  assert.deepEqual(variance(2800, 3100), { budget: 2800, actual: 3100, diff: 300, amount: 300, kind: 'over budget' });
  assert.equal(variance(600, 450).kind, 'under budget');
  assert.equal(variance(600, 450).amount, 150);
  assert.equal(variance(500, 500).kind, 'on budget');
});

test('profit and cash flow differ for a credit sale', () => {
  assert.deepEqual(profitAndCash(5000, 3000, 0, 3000), { profit: 2000, cashFlow: -3000 });
});

test('start-up capital and monthly viability', () => {
  assert.equal(startUpCapital([600, 900, 150]), 1650);
  assert.deepEqual(monthlyViability(15, 120, [1350]), { income: 1800, spending: 1350, left: 450, viable: true });
  assert.equal(monthlyViability(15, 80, [1350]).viable, false);
  assert.equal(monthlyViability(15, 80, [1350]).left, -150);
});
