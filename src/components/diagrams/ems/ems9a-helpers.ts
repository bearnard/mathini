import { sum } from './emsHelpers';

/**
 * Numbers for the first two Grade 9 EMS lesson pairs (economic systems, recording, budgets,
 * entrepreneurship planning). Every amount a slide, picture or check answer shows comes from here
 * (ems9a-helpers.test.ts). Money is worked in whole cents.
 */

const cents = (r: number): number => Math.round(r * 100);
const rands = (c: number): number => c / 100;

/** What a household has left to spend after tax and saving. */
export const householdSpending = (income: number, tax: number, saved: number) => ({
  income,
  tax,
  saved,
  spent: rands(cents(income) - cents(tax) - cents(saved)),
});

/** Output per worker. */
export const perWorker = (output: number, workers: number): number => output / workers;

// ---------- double entry, ledger, trial balance ----------

export interface Transaction {
  debit: string;
  credit: string;
  amount: number;
}
export interface AccountBalance {
  name: string;
  debits: readonly number[];
  credits: readonly number[];
  totalDebit: number;
  totalCredit: number;
  /** The closing balance and which side it falls on. */
  balance: number;
  side: 'debit' | 'credit' | 'nil';
}

/** Post every transaction to its two accounts, in the order the accounts first appear. */
export const postTransactions = (txs: readonly Transaction[]): AccountBalance[] => {
  const names: string[] = [];
  for (const t of txs) for (const n of [t.debit, t.credit]) if (!names.includes(n)) names.push(n);
  return names.map((name) => {
    const debits = txs.filter((t) => t.debit === name).map((t) => t.amount);
    const credits = txs.filter((t) => t.credit === name).map((t) => t.amount);
    const d = cents(sum(debits));
    const c = cents(sum(credits));
    return { name, debits, credits, totalDebit: rands(d), totalCredit: rands(c), balance: rands(Math.abs(d - c)), side: d > c ? 'debit' : d < c ? 'credit' : 'nil' };
  });
};

export interface TrialBalanceRow {
  name: string;
  debit: number | null;
  credit: number | null;
}
/** The closing balance of each account in the debit or credit column, with both column totals. */
export const trialBalance = (accounts: readonly AccountBalance[]) => {
  const rows: TrialBalanceRow[] = accounts
    .filter((a) => a.side !== 'nil')
    .map((a) => ({ name: a.name, debit: a.side === 'debit' ? a.balance : null, credit: a.side === 'credit' ? a.balance : null }));
  const totalDebit = sum(rows.map((r) => r.debit ?? 0));
  const totalCredit = sum(rows.map((r) => r.credit ?? 0));
  return { rows, totalDebit, totalCredit, balanced: cents(totalDebit) === cents(totalCredit) };
};

// ---------- budgets ----------

/** A budget: income, then fixed and variable expenses, and what is left. */
export const budgetPlan = (income: number, fixed: readonly number[], variable: readonly number[]) => {
  const totalFixed = sum(fixed);
  const totalVariable = sum(variable);
  const spending = sum([totalFixed, totalVariable]);
  const left = rands(cents(income) - cents(spending));
  return { income, totalFixed, totalVariable, spending, left, kind: left > 0 ? 'surplus' : left < 0 ? 'deficit' : 'balanced', amount: Math.abs(left) };
};

/** Total cost at a number of units: the fixed cost stays, the variable cost grows with the units. */
export const totalCost = (fixed: number, variablePerUnit: number, units: number) => {
  const variable = rands(cents(variablePerUnit) * units);
  return { fixed, variable, total: rands(cents(fixed) + cents(variable)) };
};

/** Budget variance for an expense: actual minus budget. Over budget is a positive difference. */
export const variance = (budget: number, actual: number) => {
  const diff = rands(cents(actual) - cents(budget));
  return { budget, actual, diff, amount: Math.abs(diff), kind: diff > 0 ? 'over budget' : diff < 0 ? 'under budget' : 'on budget' } as const;
};

/** Profit is sales minus costs; cash flow is cash received minus cash paid. A credit sale gives profit but no cash yet. */
export const profitAndCash = (sales: number, costs: number, cashReceived: number, cashPaid: number) => ({
  profit: rands(cents(sales) - cents(costs)),
  cashFlow: rands(cents(cashReceived) - cents(cashPaid)),
});

/** Money needed to start: the total of the start-up costs. */
export const startUpCapital = (items: readonly number[]): number => sum(items);

/** Expected monthly income (price x units) against monthly costs. */
export const monthlyViability = (price: number, units: number, costs: readonly number[]) => {
  const income = rands(cents(price) * units);
  const spending = sum(costs);
  const left = rands(cents(income) - cents(spending));
  return { income, spending, left, viable: left > 0 };
};
