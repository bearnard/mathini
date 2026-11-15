/**
 * Numbers for the Grade 8-9 EMS lessons. Every amount a slide, picture or check answer shows comes
 * from here (emsHelpers.test.ts), so the slides, the pictures and the answers can not drift apart.
 * Money is worked in whole cents inside, so R1 157,63 never becomes R1 157,6300000000002.
 */

import { rand } from '../accounting/rand';

/** Rand with non-breaking spaces, so "R9 600 000" never splits across two lines in a sentence. */
export const randNb = (n: number): string => rand(n).replace(/ /g, '\u00a0');

const cents = (rands: number): number => Math.round(rands * 100);
const rands = (c: number): number => c / 100;

export const sum = (xs: readonly number[]): number => rands(xs.reduce((t, x) => t + cents(x), 0));

export type BalanceKind = 'surplus' | 'deficit' | 'balanced';
export interface BudgetBalance {
  income: number;
  spending: number;
  kind: BalanceKind;
  /** Always positive: how far income and spending are apart. */
  amount: number;
}

/** Income against spending: more income is a surplus, more spending is a deficit. */
export const budgetBalance = (income: number, spending: number): BudgetBalance => {
  const d = cents(income) - cents(spending);
  return { income, spending, kind: d > 0 ? 'surplus' : d < 0 ? 'deficit' : 'balanced', amount: rands(Math.abs(d)) };
};

// ---------- the accounting equation: Assets = Liabilities + Owner's equity ----------

export interface Equation {
  assets: number;
  liabilities: number;
  equity: number;
}
export interface Effect {
  assets?: number;
  liabilities?: number;
  equity?: number;
}

export const isBalanced = (e: Equation): boolean => cents(e.assets) === cents(e.liabilities) + cents(e.equity);

/** Add a transaction's effect (negative numbers reduce) to the equation. */
export const applyEffect = (e: Equation, fx: Effect): Equation => ({
  assets: rands(cents(e.assets) + cents(fx.assets ?? 0)),
  liabilities: rands(cents(e.liabilities) + cents(fx.liabilities ?? 0)),
  equity: rands(cents(e.equity) + cents(fx.equity ?? 0)),
});

/** The equation after each effect in turn, starting from nothing. */
export const equationTrail = (effects: readonly Effect[]): Equation[] => {
  const out: Equation[] = [];
  let e: Equation = { assets: 0, liabilities: 0, equity: 0 };
  for (const fx of effects) {
    e = applyEffect(e, fx);
    out.push(e);
  }
  return out;
};

/** The missing side of the equation: equity = assets - liabilities. */
export const ownersEquity = (assets: number, liabilities: number): number => rands(cents(assets) - cents(liabilities));

/** How many of the listed services a community can reach, out of how many. */
export const servicesReached = (reached: readonly boolean[]) => ({ got: reached.filter(Boolean).length, of: reached.length });

// ---------- journals and ledgers ----------

/** Closing bank balance: opening balance + money received - money paid out. */
export const bankBalance = (opening: number, received: readonly number[], paid: readonly number[]) => {
  const totalIn = sum(received);
  const totalOut = sum(paid);
  return { totalIn, totalOut, closing: rands(cents(opening) + cents(totalIn) - cents(totalOut)) };
};

export interface Ledger {
  entries: readonly number[];
  total: number;
}
/** One side of a ledger account: the amounts posted and their total. */
export const ledgerSide = (entries: readonly number[]): Ledger => ({ entries, total: sum(entries) });

// ---------- ownership, prices ----------

/** Share a profit in a ratio such as 60:40. The shares are in cents inside, so they add up to the profit. */
export const shareProfit = (profit: number, ratio: readonly number[]): number[] => {
  const whole = ratio.reduce((a, b) => a + b, 0);
  const total = cents(profit);
  const parts = ratio.map((r) => Math.floor((total * r) / whole));
  parts[0] += total - parts.reduce((a, b) => a + b, 0);
  return parts.map(rands);
};

/** Selling price = cost + mark-up (a percentage of cost). */
export const markUp = (cost: number, percent: number) => {
  const add = rands(Math.round((cents(cost) * percent) / 100));
  return { cost, percent, add, price: rands(cents(cost) + cents(add)) };
};

/** A straight-line demand schedule: quantity wanted at each price, never below zero. */
export const demandSchedule = (prices: readonly number[], at0: number, perRand: number) =>
  prices.map((price) => ({ price, qty: Math.max(0, Math.round(at0 - perRand * price)) }));

/** Money made from an item sold: (price - cost) x number sold, less fixed costs. */
export const dailyProfit = (price: number, cost: number, sold: number, fixed = 0) => {
  const margin = rands(cents(price) - cents(cost));
  const revenue = rands(cents(price) * sold);
  const costs = rands(cents(cost) * sold + cents(fixed));
  return { margin, revenue, costs, profit: rands(cents(revenue) - cents(costs)) };
};

// ---------- interest ----------

/** Simple interest for whole years: P x rate x years. Rounded to the cent. */
export const simpleInterest = (principal: number, ratePercent: number, years: number) => {
  const interest = rands(Math.round((cents(principal) * ratePercent * years) / 100));
  return { interest, total: rands(cents(principal) + cents(interest)) };
};

/** Compound interest: the balance after each year, interest added and rounded to the cent every year. */
export const compoundYears = (principal: number, ratePercent: number, years: number) => {
  const balances = [principal];
  for (let y = 1; y <= years; y++) {
    const prev = cents(balances[y - 1]);
    balances.push(rands(prev + Math.round((prev * ratePercent) / 100)));
  }
  const closing = balances[years];
  return { balances, interestEarned: rands(cents(closing) - cents(principal)), closing };
};

/** A loan repaid in one go with simple interest after `years`. */
export const loanRepayment = (borrowed: number, ratePercent: number, years: number) => {
  const { interest, total } = simpleInterest(borrowed, ratePercent, years);
  return { borrowed, interest, total };
};
