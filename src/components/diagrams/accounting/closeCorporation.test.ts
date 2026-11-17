import test from 'node:test';
import assert from 'node:assert/strict';
import { DUBE_KHAN, TERMS, ccStatements } from './closeCorporation';

test('the close corporation: profit, distribution, retained income and the balance sheet agree, worked by hand', () => {
  const s = ccStatements(DUBE_KHAN);
  assert.equal(s.grossProfit, 640000 - 384000);
  assert.equal(s.operatingProfit, 256000 - 96000 - 18000 - 54000);
  assert.equal(s.operatingProfit, 88000);
  assert.equal(s.netProfitBeforeTax, 88000 + 1600 - 6000);
  assert.equal(s.netProfitBeforeTax, 83600);
  assert.equal(s.netProfitAfterTax, 83600 - 22572);
  assert.equal(s.netProfitAfterTax, 61028);
  assert.equal(s.retainedIncomeEnd, 35000 + 61028 - 40000);
  assert.equal(s.retainedIncomeEnd, 56028);
  assert.equal(s.membersInterest, 156028);
  assert.equal(s.taxPayable, 8572);
  assert.equal(s.totalEquityAndLiabilities, 156028 + 60000 + 38000 + 8572);
  assert.equal(s.totalEquityAndLiabilities, 262600);
  assert.equal(s.totalAssets, 150000 + 20000 + 42000 + 28000 + 22600);
  assert.equal(s.totalAssets, 262600);
  assert.equal(s.balanced, true);
});

test('loans: a loan to a member is on the assets side, a loan from a member on the equity and liabilities side; interest is the loan times the rate', () => {
  const s = ccStatements(DUBE_KHAN);
  assert.ok(s.balanceSheet.assets.some((l) => l.label === 'Loan to member' && l.amount === 20000));
  assert.ok(s.balanceSheet.equityAndLiabilities.some((l) => l.label === 'Loan from member' && l.amount === 60000));
  assert.equal(20000 * 0.08, DUBE_KHAN.interestOnLoanToMember, '8% on R20 000');
  assert.equal(60000 * 0.1, DUBE_KHAN.interestOnLoanFromMember, '10% on R60 000');
});

test('the lines of the income statement add up to the net profit, and a wrong figure breaks the balance', () => {
  const s = ccStatements(DUBE_KHAN);
  const lines = s.incomeStatement.filter((l) => !l.bold);
  assert.equal(Math.round(lines.reduce((t, l) => t + l.amount, 0) * 100) / 100, s.netProfitAfterTax);
  assert.equal(ccStatements({ ...DUBE_KHAN, bank: 20000 }).balanced, false);
});

test('terminology: no company term is repeated and the close corporation terms are distinct', () => {
  assert.equal(new Set(TERMS.map((t) => t.company)).size, TERMS.length);
  assert.equal(new Set(TERMS.map((t) => t.cc)).size, TERMS.length);
  assert.ok(TERMS.some((t) => t.company === 'Dividends' && t.cc === 'Distribution to members'));
});
