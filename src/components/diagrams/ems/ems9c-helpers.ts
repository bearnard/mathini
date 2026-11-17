import { postTransactions, trialBalance, type AccountBalance, type Transaction } from './ems9a-helpers';
import { sum } from './emsHelpers';

const cents = (r: number): number => Math.round(r * 100);
const rands = (c: number): number => c / 100;

/**
 * Grade 9 EMS: credit transactions (debtors and creditors). A tiny double-entry engine: the journals (DJ, DAJ, CRJ for debtors; CJ, CAJ, CPJ for creditors)
 * are lists of entries; the subsidiary ledger gives one account per debtor or creditor; the general ledger gets the journal TOTALS. Every lesson and question
 * amount comes from here, and ems9c-helpers.test.ts checks the books balance (control account = sum of the subsidiary accounts, trial balance debits = credits).
 */

export interface Entry { date: string; name: string; ref: string; amount: number }

export interface PartyAccount {
  name: string;
  /** Debits and credits in date order as written in the journals. */
  debits: readonly number[];
  credits: readonly number[];
  balance: number;
}

const owing = (names: readonly string[], increases: readonly Entry[], decreases: readonly Entry[]): PartyAccount[] =>
  names.map((name) => {
    const d = increases.filter((e) => e.name === name).map((e) => e.amount);
    const c = decreases.filter((e) => e.name === name).map((e) => e.amount);
    return { name, debits: d, credits: c, balance: rands(cents(sum(d)) - cents(sum(c))) };
  });
const names = (...lists: (readonly Entry[])[]): string[] => [...new Set(lists.flat().map((e) => e.name))];

// ---------- debtors: DJ (credit sales), DAJ (allowances), CRJ (receipts from debtors) ----------

export const debtorsLedger = (dj: readonly Entry[], daj: readonly Entry[], crj: readonly Entry[]): PartyAccount[] =>
  owing(names(dj, daj, crj), dj, [...daj, ...crj]);

/** The general-ledger postings that come from the totals of the three debtors journals. */
export const debtorsPostings = (dj: readonly Entry[], daj: readonly Entry[], crj: readonly Entry[]): Transaction[] => [
  { debit: 'Debtors control', credit: 'Sales', amount: sum(dj.map((e) => e.amount)) },
  { debit: 'Debtors allowances', credit: 'Debtors control', amount: sum(daj.map((e) => e.amount)) },
  { debit: 'Bank', credit: 'Debtors control', amount: sum(crj.map((e) => e.amount)) },
];

// ---------- creditors: CJ (credit purchases), CAJ (allowances), CPJ (payments to creditors) ----------

export const creditorsLedger = (cj: readonly Entry[], caj: readonly Entry[], cpj: readonly Entry[]): PartyAccount[] =>
  owing(names(cj, caj, cpj), cj, [...caj, ...cpj]).map((a) => a); // a creditor's account: purchases are credits, allowances and payments are debits

export const creditorsPostings = (cj: readonly Entry[], caj: readonly Entry[], cpj: readonly Entry[]): Transaction[] => [
  { debit: 'Purchases', credit: 'Creditors control', amount: sum(cj.map((e) => e.amount)) },
  { debit: 'Creditors control', credit: 'Creditors allowances', amount: sum(caj.map((e) => e.amount)) },
  { debit: 'Creditors control', credit: 'Bank', amount: sum(cpj.map((e) => e.amount)) },
];

/** Does the list of party balances add up to the control account balance? (Both come from the same journals, so any difference is an error.) */
export const reconciles = (parties: readonly PartyAccount[], controlBalance: number): boolean => cents(sum(parties.map((p) => p.balance))) === cents(controlBalance);

export const controlBalance = (postings: readonly Transaction[], account: string): { balance: number; side: 'debit' | 'credit' | 'nil' } => {
  const acc = postTransactions(postings).find((a) => a.name === account);
  return acc ? { balance: acc.balance, side: acc.side } : { balance: 0, side: 'nil' };
};

/**
 * One debtor's or creditor's own account drawn as a T-account. A debtor's invoices are DEBITS, and credit notes and receipts are CREDITS;
 * for a creditor it is the other way round (purchases are credits; allowances and payments are debits). PartyAccount.debits/credits hold the
 * amounts that INCREASE and DECREASE what is owed, so a creditor's sides are swapped here.
 */
export const partyAccount = (p: PartyAccount, kind: 'debtor' | 'creditor'): AccountBalance => {
  const debits = kind === 'debtor' ? p.debits : p.credits;
  const credits = kind === 'debtor' ? p.credits : p.debits;
  const d = cents(sum(debits));
  const c = cents(sum(credits));
  return { name: p.name, debits, credits, totalDebit: rands(d), totalCredit: rands(c), balance: rands(Math.abs(d - c)), side: d > c ? 'debit' : d < c ? 'credit' : 'nil' };
};

export { postTransactions, trialBalance };
