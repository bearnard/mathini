import { applyEffect, equationTrail, isBalanced, shareProfit, sum, type Effect, type Equation } from './emsHelpers';
import { CPJ_ENTRIES, CRJ_ENTRIES, balanceSheet, bankBalanceEnd, cpjColumn, cpjTotal, crjTotal } from './ems8b-helpers';

/** Numbers for the Grade 8 EMS Term 3 lessons: the Cash Payments Journal and the combined cash journals of the same service business (Thandi's Tutoring),
 * and forms of ownership. Tested in ems8c-helpers.test.ts. */

export { CPJ_ENTRIES, CRJ_ENTRIES, bankBalanceEnd, cpjColumn, cpjTotal, crjTotal, equationTrail, applyEffect, isBalanced, shareProfit, sum };
export type { Effect, Equation };

const cents = (r: number): number => Math.round(r * 100);

/** The effect of one payment on the accounting equation: an expense lowers the bank and owner's equity; buying equipment swaps one asset for another. */
export const paymentEffect = (account: string, amount: number): Effect => (account === 'Equipment' ? { assets: 0 } : { assets: -amount, equity: -amount });
export const receiptEffect = (account: string, amount: number): Effect => ({ assets: amount, equity: account === 'Capital' || account === 'Fees earned' ? amount : 0 });
/** All fourteen... seven transactions, in date order, as equation effects. */
export const allEffects = (): Effect[] => [
  ...CRJ_ENTRIES.map((e) => receiptEffect(e.account, e.amount)),
  ...CPJ_ENTRIES.map((e) => paymentEffect(e.account, e.amount)),
];
export const equationAfterAll = (): Equation => {
  const t = equationTrail(allEffects());
  return t[t.length - 1];
};
/** Closing off both journals: the cash balance carried forward is the CRJ total minus the CPJ total. */
export const cashCarriedForward = (): number => bankBalanceEnd();
export const combinedTotals = () => ({ received: crjTotal(), paid: cpjTotal(), balance: cashCarriedForward() });
/** Cross-casting the CPJ: the Bank column equals the sum of the analysis columns. */
export const cpjAnalysis = (): { account: string; amount: number }[] => ['Rent expense', 'Telephone expense', 'Salaries expense', 'Equipment'].map((a) => ({ account: a, amount: cpjColumn(a) }));

// ---------- forms of ownership ----------

export const FORMS = [
  { form: 'sole trader', owners: 'one person owns and runs the business', liability: 'the owner is personally responsible for all debts', capital: 'limited to the owner\'s savings and loans' },
  { form: 'partnership', owners: 'two or more partners share the ownership', liability: 'partners are personally responsible for the debts', capital: 'more than one person puts money in' },
  { form: 'close corporation', owners: 'the members own it; it is a separate legal person', liability: 'members are not personally responsible for its debts (limited liability)', capital: 'members\' contributions' },
  { form: 'private company', owners: 'shareholders own it and its shares are not sold to the public', liability: 'limited liability for the shareholders', capital: 'shareholders\' money' },
  { form: 'public company', owners: 'shareholders own it and its shares can be bought by the public', liability: 'limited liability for the shareholders', capital: 'the most capital, from many shareholders' },
] as const;
export const CC_NOTE = 'No new close corporations can be registered since 1 May 2011; existing ones continue';
export const SHARE_NAMES = { private: '(Pty) Ltd', public: 'Ltd', cc: 'CC' } as const;
/** Share a profit between partners in a ratio, in cents so the shares add up exactly. */
export const partnerShares = (profit: number, ratio: readonly number[]): number[] => shareProfit(profit, ratio);
export const limitedLiability = (form: string): boolean => ['close corporation', 'private company', 'public company'].includes(form);
export const formFor = (feature: 'shares sold to the public' | 'one owner' | 'two or more partners' | 'no new ones since 2011'): string =>
  feature === 'shares sold to the public' ? 'public company' : feature === 'one owner' ? 'sole trader' : feature === 'two or more partners' ? 'partnership' : 'close corporation';
export const OWNERSHIP_ROLES = {
  jobs: 'businesses of every form create jobs, and a growing business can employ more people',
  resources: 'businesses should use natural resources sustainably, so that they last for the future',
} as const;
export { cents };
