/** Numbers for the Grade 11 Accounting gap lessons: non-profit organisations (clubs) and GAAP principles. One imaginary club (Riverside Netball Club) is used throughout;
 * club11.test.ts recomputes the Analysis Cash Book, the Statement of Receipts and Payments, the ledger accounts and the Trial Balance independently. Money is in whole rand. */

export interface Line { name: string; amount: number }

// ---------- the club's opening position ----------

export const OPENING = { bank: 8000, equipment: 4000, creditors: 1000 } as const;
/** Accumulated fund at the start = assets - liabilities (the club's equivalent of owner's equity). */
export const openingFund = (): number => OPENING.bank + OPENING.equipment - OPENING.creditors;

// ---------- the Analysis Cash Book for the year ----------

export const RECEIPTS: Line[] = [
  { name: 'Membership fees', amount: 12000 },
  { name: 'Entrance fees', amount: 1500 },
  { name: 'Donations', amount: 2000 },
  { name: 'Sale of refreshments', amount: 3500 },
];
export const PAYMENTS: Line[] = [
  { name: 'Honorarium (coach)', amount: 4000 },
  { name: 'Purchase of refreshments', amount: 2500 },
  { name: 'Repairs', amount: 1200 },
  { name: 'Bank charges', amount: 300 },
  { name: 'Equipment bought', amount: 3000 },
  { name: 'Creditors paid', amount: 1000 },
];
export const MEMBERS = { paying: 60, feePerMember: 200, newMembers: 30, entranceFee: 50 } as const;
export const sum = (xs: readonly Line[]): number => xs.reduce((a, l) => a + l.amount, 0);
export const totalReceipts = (): number => sum(RECEIPTS);
export const totalPayments = (): number => sum(PAYMENTS);
export const closingBank = (): number => OPENING.bank + totalReceipts() - totalPayments();
/** The surplus (or deficit) of receipts over payments for the year. */
export const receiptsSurplus = (): number => totalReceipts() - totalPayments();

// ---------- receipts and income, payments and expenses ----------

/** Payments that are not expenses: buying equipment (an asset) and paying creditors (a liability). */
export const NON_EXPENSE_PAYMENTS = ['Equipment bought', 'Creditors paid'] as const;
export const expensePayments = (): number => sum(PAYMENTS.filter((p) => !(NON_EXPENSE_PAYMENTS as readonly string[]).includes(p.name)));
export const nonExpensePayments = (): number => sum(PAYMENTS.filter((p) => (NON_EXPENSE_PAYMENTS as readonly string[]).includes(p.name)));
export const feesCheck = (): { membership: number; entrance: number } => ({ membership: MEMBERS.paying * MEMBERS.feePerMember, entrance: MEMBERS.newMembers * MEMBERS.entranceFee });
/** Income earned less expenses incurred for the year: here every receipt is income and every expense payment is an expense, so surplus = income - expenses. */
export const incomeLessExpenses = (): number => totalReceipts() - expensePayments();

// ---------- the ledger and the Trial Balance ----------

export interface TbRow { account: string; side: 'Dr' | 'Cr'; amount: number }
export const trialBalanceRows = (): TbRow[] => [
  { account: 'Bank', side: 'Dr', amount: closingBank() },
  { account: 'Equipment', side: 'Dr', amount: OPENING.equipment + 3000 },
  { account: 'Honorarium', side: 'Dr', amount: 4000 },
  { account: 'Purchase of refreshments', side: 'Dr', amount: 2500 },
  { account: 'Repairs', side: 'Dr', amount: 1200 },
  { account: 'Bank charges', side: 'Dr', amount: 300 },
  { account: 'Accumulated fund', side: 'Cr', amount: openingFund() },
  { account: 'Membership fees', side: 'Cr', amount: 12000 },
  { account: 'Entrance fees', side: 'Cr', amount: 1500 },
  { account: 'Donations', side: 'Cr', amount: 2000 },
  { account: 'Sale of refreshments', side: 'Cr', amount: 3500 },
];
export const tbTotals = (): { dr: number; cr: number } => {
  const rows = trialBalanceRows();
  return { dr: rows.filter((r) => r.side === 'Dr').reduce((a, r) => a + r.amount, 0), cr: rows.filter((r) => r.side === 'Cr').reduce((a, r) => a + r.amount, 0) };
};
/** The accumulated fund at the end: opening fund plus the surplus of income over expenses. */
export const closingFund = (): number => openingFund() + incomeLessExpenses();
export const closingAssets = (): number => closingBank() + OPENING.equipment + 3000;

// ---------- GAAP principles ----------

export const GAAP = [
  { principle: 'historical cost', meaning: 'assets are recorded at the price actually paid' },
  { principle: 'prudence', meaning: 'do not overstate assets or profit: recognise losses early and profits only when they are certain' },
  { principle: 'materiality', meaning: 'amounts that are too small to affect decisions need not be treated separately' },
  { principle: 'business entity', meaning: 'the business is separate from its owner, so private transactions are not business transactions' },
  { principle: 'going concern', meaning: 'the business is assumed to continue trading for the foreseeable future' },
  { principle: 'matching', meaning: 'expenses are matched with the income that they helped to earn in the same period' },
] as const;
export const recordedAt = (cost: number, _marketValue: number): number => cost; // historical cost
/** Stock is shown at the lower of cost and net realisable value (prudence). */
export const stockValue = (cost: number, netRealisable: number): number => Math.min(cost, netRealisable);
/** Matching: the part of a payment that belongs to the current year, and the amount that is prepaid. */
export const matching = (paid: number, monthsPaid: number, monthsInYear: number): { expense: number; prepaid: number } => {
  const expense = Math.round((paid / monthsPaid) * monthsInYear);
  return { expense, prepaid: paid - expense };
};
export const isMaterial = (amount: number, turnover: number): boolean => amount / turnover >= 0.01;
/** Business entity: a private payment made from the business bank account is drawings (owner's), not a business expense. */
export const privatePayment = (): 'drawings' => 'drawings';
export const principleFor = (scenario: 'asset at cost' | 'stock below cost' | 'tiny amount' | 'owner private spending' | 'continues trading' | 'expense in the right year'): string =>
  scenario === 'asset at cost' ? 'historical cost' : scenario === 'stock below cost' ? 'prudence' : scenario === 'tiny amount' ? 'materiality' : scenario === 'owner private spending' ? 'business entity' : scenario === 'continues trading' ? 'going concern' : 'matching';
