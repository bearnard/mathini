import { postTransactions, trialBalance, type AccountBalance, type Transaction } from './ems9a-helpers';
import { sum } from './emsHelpers';

/** Numbers for the Grade 8 EMS lessons on the accounting cycle, the Cash Receipts Journal, the Cash Payments Journal and the General Ledger of a SERVICE business.
 * One small business ("Thandi's Tutoring") is used throughout: every journal, the ledger, the trial balance and the statements come from the same seven cash transactions,
 * and ems8b-helpers.test.ts checks that they balance. Money is worked in cents. */

export { postTransactions, trialBalance, sum };
export type { AccountBalance, Transaction };

const cents = (r: number): number => Math.round(r * 100);
const rands = (c: number): number => c / 100;

export interface CashEntry { date: string; doc: string; details: string; account: string; amount: number }

/** Cash received: banked, with the account that is credited. */
export const CRJ_ENTRIES: CashEntry[] = [
  { date: '1 Mar', doc: 'R1', details: 'Owner: capital', account: 'Capital', amount: 10000 },
  { date: '5 Mar', doc: 'R2', details: 'Tutoring fees', account: 'Fees earned', amount: 4500 },
  { date: '19 Mar', doc: 'R3', details: 'Tutoring fees', account: 'Fees earned', amount: 2500 },
];
/** Cash paid: banked out, with the account that is debited. */
export const CPJ_ENTRIES: CashEntry[] = [
  { date: '2 Mar', doc: 'C1', details: 'Rent', account: 'Rent expense', amount: 1500 },
  { date: '8 Mar', doc: 'C2', details: 'Telephone', account: 'Telephone expense', amount: 400 },
  { date: '28 Mar', doc: 'C3', details: 'Salaries', account: 'Salaries expense', amount: 1200 },
  { date: '30 Mar', doc: 'C4', details: 'Computers bought', account: 'Equipment', amount: 2000 },
];

export const crjTotal = (): number => sum(CRJ_ENTRIES.map((e) => e.amount));
export const cpjTotal = (): number => sum(CPJ_ENTRIES.map((e) => e.amount));
/** Total of one analysis column of the CRJ (for example Fees earned). */
export const crjColumn = (account: string): number => sum(CRJ_ENTRIES.filter((e) => e.account === account).map((e) => e.amount));
export const cpjColumn = (account: string): number => sum(CPJ_ENTRIES.filter((e) => e.account === account).map((e) => e.amount));
export const bankBalanceEnd = (): number => rands(cents(crjTotal()) - cents(cpjTotal()));
/** Double entry for every cash transaction. */
export const ledgerTransactions = (): Transaction[] => [
  ...CRJ_ENTRIES.map((e) => ({ debit: 'Bank', credit: e.account, amount: e.amount })),
  ...CPJ_ENTRIES.map((e) => ({ debit: e.account, credit: 'Bank', amount: e.amount })),
];
export const ledger = (): AccountBalance[] => postTransactions(ledgerTransactions());
export const trial = () => trialBalance(ledger());

export const EXPENSE_ACCOUNTS = ['Rent expense', 'Telephone expense', 'Salaries expense'] as const;
export const incomeStatement = () => {
  const income = crjColumn('Fees earned');
  const expenses = EXPENSE_ACCOUNTS.map((a) => ({ account: a, amount: cpjColumn(a) }));
  const totalExpenses = sum(expenses.map((e) => e.amount));
  const net = rands(cents(income) - cents(totalExpenses));
  return { income, expenses, totalExpenses, net, kind: net > 0 ? 'profit' : net < 0 ? 'loss' : 'neither' } as const;
};
export const balanceSheet = () => {
  const is = incomeStatement();
  const capital = crjColumn('Capital');
  const equipment = cpjColumn('Equipment');
  const bank = bankBalanceEnd();
  const assets = sum([equipment, bank]);
  const equity = sum([capital, is.net]);
  const liabilities = 0;
  return { equipment, bank, assets, capital, profit: is.net, equity, liabilities, balanced: cents(assets) === cents(equity) + cents(liabilities) };
};
/** The equation effects of the CRJ: bank (asset) and owner's equity both increase by the total received. */
export const crjEffectOnEquation = () => ({ assets: crjTotal(), liabilities: 0, equity: crjTotal() });

// ---------- factors of production and markets ----------

export const FACTORS = [
  { factor: 'natural resources', reward: 'rent' },
  { factor: 'labour', reward: 'wages and salaries' },
  { factor: 'capital', reward: 'interest' },
  { factor: 'entrepreneurship', reward: 'profit' },
] as const;
export const rewardFor = (factor: string): string => FACTORS.find((f) => f.factor === factor)!.reward;
export const LABOUR = [
  { type: 'unskilled', example: 'a cleaner or a general labourer', pay: 'lowest, no special training needed' },
  { type: 'semi-skilled', example: 'a machine operator or a till operator', pay: 'in the middle, some training' },
  { type: 'skilled', example: 'an electrician or an accountant', pay: 'highest, a qualification is needed' },
] as const;
export const MARKETS = {
  goodsServices: 'households buy goods and services from businesses',
  factor: 'businesses buy labour, capital and other factors of production from households',
} as const;
/** Remuneration of labour: workers times the daily wage times the days. */
export const wageBill = (workers: number, dailyWage: number, days: number): number => rands(Math.round(cents(dailyWage) * workers * days));
export const FAIR_EMPLOYMENT = ['a written contract', 'a safe place to work', 'at least the minimum wage', 'no unfair discrimination'] as const;
