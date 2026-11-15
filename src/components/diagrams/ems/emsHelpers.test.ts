import test from 'node:test';
import assert from 'node:assert/strict';
import {
  applyEffect, randNb, ownersEquity, servicesReached, bankBalance, budgetBalance, compoundYears, dailyProfit, demandSchedule, equationTrail, isBalanced, ledgerSide,
  loanRepayment, markUp, shareProfit, simpleInterest, sum,
} from './emsHelpers';

test('sum works in cents', () => {
  assert.equal(sum([0.1, 0.2]), 0.3);
  assert.equal(sum([850, 620, 1200]), 2670);
});

test('budget: surplus, deficit or balanced, amount always positive', () => {
  assert.deepEqual(budgetBalance(9_000_000, 9_600_000), { income: 9_000_000, spending: 9_600_000, kind: 'deficit', amount: 600_000 });
  assert.equal(budgetBalance(12_000, 9_500).kind, 'surplus');
  assert.equal(budgetBalance(12_000, 9_500).amount, 2_500);
  assert.equal(budgetBalance(500, 500).kind, 'balanced');
});

test('accounting equation stays balanced through the Thandi example', () => {
  const trail = equationTrail([
    { assets: 30000, equity: 30000 }, // owner invests R30 000 cash
    { assets: 8000, liabilities: 8000 }, // equipment R8 000 on credit
    { assets: -3000, liabilities: -3000 }, // pays R3 000 of the debt
  ]);
  assert.deepEqual(trail, [
    { assets: 30000, liabilities: 0, equity: 30000 },
    { assets: 38000, liabilities: 8000, equity: 30000 },
    { assets: 35000, liabilities: 5000, equity: 30000 },
  ]);
  assert.ok(trail.every(isBalanced));
  assert.equal(isBalanced({ assets: 50000, liabilities: 20000, equity: 20000 }), false);
  assert.deepEqual(applyEffect({ assets: 1, liabilities: 0, equity: 1 }, {}), { assets: 1, liabilities: 0, equity: 1 });
});

test('bank balance and ledger side', () => {
  assert.deepEqual(bankBalance(4000, [850, 620, 1200], [1500, 900]), { totalIn: 2670, totalOut: 2400, closing: 4270 });
  assert.deepEqual(ledgerSide([850, 620, 1500]), { entries: [850, 620, 1500], total: 2970 });
});

test('profit sharing adds back up to the profit', () => {
  assert.deepEqual(shareProfit(50000, [60, 40]), [30000, 20000]);
  assert.deepEqual(shareProfit(100, [1, 1, 1]), [33.34, 33.33, 33.33]);
  assert.equal(sum(shareProfit(77777.77, [3, 2])), 77777.77);
});

test('mark-up and selling price', () => {
  assert.deepEqual(markUp(40, 25), { cost: 40, percent: 25, add: 10, price: 50 });
  assert.equal(markUp(12, 50).price, 18);
});

test('demand falls as price rises', () => {
  const d = demandSchedule([5, 10, 15, 20], 100, 4);
  assert.deepEqual(d, [{ price: 5, qty: 80 }, { price: 10, qty: 60 }, { price: 15, qty: 40 }, { price: 20, qty: 20 }]);
  assert.ok(d.every((p, i) => i === 0 || p.qty < d[i - 1].qty));
  assert.equal(demandSchedule([30], 100, 4)[0].qty, 0);
});

test('daily profit of a vetkoek stall: 20 sold at R5, cost R2 each, R10 fixed', () => {
  assert.deepEqual(dailyProfit(5, 2, 20), { margin: 3, revenue: 100, costs: 40, profit: 60 });
  assert.deepEqual(dailyProfit(5, 2, 20, 10), { margin: 3, revenue: 100, costs: 50, profit: 50 });
});

test('simple interest: R2 000 at 4% for 1 year, R1 000 at 5% for 3 years', () => {
  assert.deepEqual(simpleInterest(2000, 4, 1), { interest: 80, total: 2080 });
  assert.deepEqual(simpleInterest(1000, 5, 3), { interest: 150, total: 1150 });
});

test('compound interest: R1 000 at 5% for 3 years, rounded to the cent each year', () => {
  assert.deepEqual(compoundYears(1000, 5, 3), { balances: [1000, 1050, 1102.5, 1157.63], interestEarned: 157.63, closing: 1157.63 });
  assert.ok(compoundYears(1000, 5, 3).interestEarned > simpleInterest(1000, 5, 3).interest);
  assert.equal(compoundYears(1000, 5, 1).interestEarned, simpleInterest(1000, 5, 1).interest);
});

test('a loan repaid with simple interest', () => {
  assert.deepEqual(loanRepayment(20000, 10, 1), { borrowed: 20000, interest: 2000, total: 22000 });
});

test('owner\'s equity is assets minus liabilities, and services reached are counted', () => {
  assert.equal(ownersEquity(50000, 20000), 30000);
  assert.equal(ownersEquity(35000, 5000), 30000);
  assert.deepEqual(servicesReached([true, true, true]), { got: 3, of: 3 });
  assert.deepEqual(servicesReached([false, false, false]), { got: 0, of: 3 });
});

test('randNb keeps every amount on one line', () => {
  assert.equal(randNb(9_600_000), 'R9\u00a0600\u00a0000');
  assert.equal(randNb(1157.63), 'R1\u00a0157,63');
  assert.equal(randNb(-25000), '-R25\u00a0000');
});
