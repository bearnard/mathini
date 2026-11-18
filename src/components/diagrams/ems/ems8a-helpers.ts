import { applyEffect, bankBalance, equationTrail, isBalanced, sum, type Effect, type Equation } from './emsHelpers';

/** Numbers for the Grade 8 EMS Term 1 lessons: government and the National Budget, accounting concepts and the accounting equation, source documents.
 * Money is worked in cents (emsHelpers). Tested in ems8a-helpers.test.ts. */

export { applyEffect, bankBalance, equationTrail, isBalanced, sum };

const cents = (r: number): number => Math.round(r * 100);
const rands = (c: number): number => c / 100;

// ---------- government ----------

export const LEVELS = [
  { level: 'national', roles: 'makes laws, runs defence, police and the revenue service, and sets the National Budget' },
  { level: 'provincial', roles: 'runs public schools and hospitals and provincial roads' },
  { level: 'local', roles: 'supplies water, electricity, refuse removal and local roads' },
] as const;
export const TAXES = { direct: 'paid straight to the government by the person or business that earns the money, for example income tax', indirect: 'included in the price of goods and services, for example VAT' } as const;
export const VAT_RATE = 15; // percent, the rate used in the examples
export const vatOn = (priceExcl: number): number => rands(Math.round((cents(priceExcl) * VAT_RATE) / 100));
export const priceInclVat = (priceExcl: number): number => rands(cents(priceExcl) + cents(vatOn(priceExcl)));
export const EXPENDITURE = ['education', 'health', 'housing', 'social grants', 'transport', 'security'] as const;
export const budgetResult = (revenue: number, expenditure: number): { kind: 'surplus' | 'deficit' | 'balanced'; amount: number } => {
  const d = cents(revenue) - cents(expenditure);
  return { kind: d > 0 ? 'surplus' : d < 0 ? 'deficit' : 'balanced', amount: rands(Math.abs(d)) };
};
export const LIFESTYLES = [
  { type: 'self-sufficient', meaning: 'households grow, make or collect most of what they need' },
  { type: 'rural', meaning: 'people live outside towns and often farm or depend on the land' },
  { type: 'modern', meaning: 'people buy goods and services with money and use technology' },
] as const;

// ---------- accounting concepts and the equation ----------

export const CONCEPTS = [
  { term: 'asset', meaning: 'something of value that the business owns' },
  { term: 'liability', meaning: 'an amount that the business owes' },
  { term: 'owner\'s equity', meaning: 'the owner\'s share of the business (assets minus liabilities)' },
  { term: 'capital', meaning: 'money or assets that the owner puts into the business' },
  { term: 'income', meaning: 'money earned from selling services' },
  { term: 'expense', meaning: 'a cost of running the business' },
  { term: 'profit', meaning: 'income is more than expenses' },
  { term: 'loss', meaning: 'expenses are more than income' },
] as const;
export const profitOrLoss = (income: number, expenses: number): { kind: 'profit' | 'loss' | 'neither'; amount: number } => {
  const d = cents(income) - cents(expenses);
  return { kind: d > 0 ? 'profit' : d < 0 ? 'loss' : 'neither', amount: rands(Math.abs(d)) };
};
/** A service business starts up and trades: each transaction is an effect on the equation. */
export const TRANSACTIONS: { text: string; effect: Effect }[] = [
  { text: 'The owner puts R20 000 into the business bank account (capital).', effect: { assets: 20000, equity: 20000 } },
  { text: 'The business buys equipment for R5 000 on credit.', effect: { assets: 5000, liabilities: 5000 } },
  { text: 'The business earns R3 000 in service fees, paid into the bank.', effect: { assets: 3000, equity: 3000 } },
  { text: 'The business pays R1 000 for rent from the bank.', effect: { assets: -1000, equity: -1000 } },
  { text: 'The business repays R2 000 of the amount it owes.', effect: { assets: -2000, liabilities: -2000 } },
];
export const trail = (): Equation[] => equationTrail(TRANSACTIONS.map((t) => t.effect));
export const finalEquation = (): Equation => trail()[trail().length - 1];

// ---------- source documents ----------

export const DOCUMENTS = [
  { name: 'receipt', use: 'proof that money was received, given to the person who paid' },
  { name: 'deposit slip', use: 'lists the cash and cheques paid into the bank account' },
  { name: 'cash register (till) slip', use: 'proof of a cash sale printed by the till' },
  { name: 'cheque', use: 'an instruction to the bank to pay money from the account' },
  { name: 'cheque counterfoil', use: 'the stub kept in the cheque book as a record of the cheque written' },
  { name: 'bank statement', use: 'the bank\'s record of all money paid in and out of the account' },
  { name: 'cash invoice', use: 'a document that shows the goods or services sold and the amount paid in cash' },
] as const;
export const documentFor = (transaction: 'money paid into the bank' | 'cash sale at the till' | 'a payment made by cheque' | 'the bank\'s record of the account'): string =>
  transaction === 'money paid into the bank' ? 'deposit slip' : transaction === 'cash sale at the till' ? 'cash register (till) slip' : transaction === 'a payment made by cheque' ? 'cheque counterfoil' : 'bank statement';
export const DENOMINATIONS = [200, 100, 50, 20, 10] as const;
/** Total of a cash deposit from the number of notes of each denomination. */
export const depositTotal = (counts: readonly number[]): number => sum(DENOMINATIONS.map((d, i) => d * (counts[i] ?? 0)));
/** Cash invoice: quantity times price, plus VAT. */
export const invoiceTotal = (qty: number, unitPriceExcl: number): { excl: number; vat: number; total: number } => {
  const excl = rands(Math.round(cents(unitPriceExcl) * qty));
  return { excl, vat: vatOn(excl), total: priceInclVat(excl) };
};
/** The closing balance on a bank statement. */
export const statementBalance = (opening: number, deposits: readonly number[], withdrawals: readonly number[]): number => bankBalance(opening, deposits, withdrawals).closing;
