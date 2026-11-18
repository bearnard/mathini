import { CPJ_ENTRIES, CRJ_ENTRIES, ledger, trial, type AccountBalance } from './ems8b-helpers';
import { sum } from './emsHelpers';

/** Numbers for the Grade 8 EMS Term 4 lessons: levels and functions of management, the General Ledger and the Trial Balance of the same service business
 * (Thandi's Tutoring). Tested in ems8d-helpers.test.ts. */

export { CPJ_ENTRIES, CRJ_ENTRIES, ledger, trial, sum };
export type { AccountBalance };

const cents = (r: number): number => Math.round(r * 100);
const rands = (c: number): number => c / 100;

// ---------- management ----------

export const LEVELS = [
  { level: 'top management', does: 'sets the long-term goals and strategy of the whole business', example: 'the owner or the board of directors' },
  { level: 'middle management', does: 'turns the goals into plans for each department', example: 'a branch or department manager' },
  { level: 'operational (supervisory) level', does: 'supervises the daily work and the staff', example: 'a supervisor or team leader' },
] as const;
export const FUNCTIONS = [
  { task: 'planning', meaning: 'deciding the goals and how to reach them' },
  { task: 'organising', meaning: 'arranging people, money and equipment to carry out the plan' },
  { task: 'leading', meaning: 'guiding and motivating the workers' },
  { task: 'controlling', meaning: 'checking results against the plan and correcting problems' },
] as const;
export const STYLES = [
  { style: 'autocratic', feature: 'the manager makes all the decisions and tells the workers what to do', good: 'quick decisions in a crisis', bad: 'workers feel unheard and may be unmotivated' },
  { style: 'laissez-faire (permissive or free-rein)', feature: 'the manager gives the workers almost complete freedom to decide', good: 'skilled workers can be creative', bad: 'little direction, so the work can lack focus' },
  { style: 'democratic (participatory)', feature: 'the manager asks the workers for ideas and decides with them', good: 'workers feel valued and motivated', bad: 'decisions can take longer' },
] as const;
export const GOOD_MANAGEMENT = ['communicates clearly', 'is fair and honest', 'makes sound decisions', 'motivates and develops the workers', 'takes responsibility'] as const;
export const styleFor = (feature: 'makes all the decisions' | 'asks the workers for ideas' | 'gives workers almost complete freedom'): string =>
  feature === 'makes all the decisions' ? 'autocratic' : feature === 'asks the workers for ideas' ? 'democratic' : 'laissez-faire';
/** Controlling: the difference between the plan and the actual result (actual minus planned). */
export const controlVariance = (planned: number, actual: number): { diff: number; kind: 'above plan' | 'below plan' | 'on plan' } => {
  const d = cents(actual) - cents(planned);
  return { diff: rands(d), kind: d > 0 ? 'above plan' : d < 0 ? 'below plan' : 'on plan' };
};

// ---------- the General Ledger ----------

export interface Posting { from: 'CRJ' | 'CPJ'; date: string; doc: string; debit: string; credit: string; amount: number }
/** Every journal entry becomes one debit and one credit of the same amount (the double-entry principle). */
export const postings = (): Posting[] => [
  ...CRJ_ENTRIES.map((e) => ({ from: 'CRJ' as const, date: e.date, doc: e.doc, debit: 'Bank', credit: e.account, amount: e.amount })),
  ...CPJ_ENTRIES.map((e) => ({ from: 'CPJ' as const, date: e.date, doc: e.doc, debit: e.account, credit: 'Bank', amount: e.amount })),
];
export const account = (name: string): AccountBalance => ledger().find((a) => a.name === name)!;
export const BALANCE_SHEET_ACCOUNTS = ['Capital', 'Bank', 'Equipment'] as const;
export const NOMINAL_ACCOUNTS = ['Fees earned', 'Rent expense', 'Telephone expense', 'Salaries expense'] as const;
export const totalDebits = (): number => sum(postings().map((p) => p.amount));
export const totalCredits = (): number => sum(postings().map((p) => p.amount));
/** The debit side of an account normally holds assets and expenses; the credit side holds capital, liabilities and income. */
export const normalSide = (kind: 'asset' | 'expense' | 'capital' | 'liability' | 'income'): 'debit' | 'credit' => (kind === 'asset' || kind === 'expense' ? 'debit' : 'credit');
export const trialBalanceRows = () => trial();
