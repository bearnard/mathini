import { sum } from '../ems/emsHelpers';

/**
 * Grade 12 Accounting: the financial statements of a close corporation (CAPS Term 2, Topic 3). One set of inputs gives the income statement, the appropriation of
 * profit and the balance sheet, and closeCorporation.test.ts checks that they agree: net profit, retained income carried forward, and assets = members' interest + liabilities.
 * Money is kept in rand and added with sum() (which rounds in cents), as in the other accounting helpers.
 */

export interface CcInputs {
  sales: number;
  costOfSales: number;
  salaries: number;
  depreciation: number;
  otherExpenses: number;
  /** Interest earned on a loan to a member. */
  interestOnLoanToMember: number;
  /** Interest paid on a loan from a member. */
  interestOnLoanFromMember: number;
  /** Normal tax charged for the year (given: no tax rate is taught here). */
  incomeTax: number;
  distributionToMembers: number;
  openingRetainedIncome: number;
  membersContributions: number;
  loanFromMember: number;
  loanToMember: number;
  fixedAssetsCarryingValue: number;
  inventory: number;
  debtors: number;
  bank: number;
  creditors: number;
  /** Tax paid in advance (provisional payments) during the year. */
  taxPaid: number;
}

export interface Line { label: string; amount: number; bold?: boolean; indent?: boolean }

export interface CcStatements {
  grossProfit: number;
  operatingProfit: number;
  netProfitBeforeTax: number;
  netProfitAfterTax: number;
  incomeStatement: Line[];
  retainedIncomeEnd: number;
  appropriation: Line[];
  membersInterest: number;
  taxPayable: number;
  totalAssets: number;
  totalEquityAndLiabilities: number;
  balanceSheet: { equityAndLiabilities: Line[]; assets: Line[] };
  balanced: boolean;
}

const cents = (r: number): number => Math.round(r * 100);

export const ccStatements = (i: CcInputs): CcStatements => {
  const grossProfit = sum([i.sales, -i.costOfSales]);
  const operatingProfit = sum([grossProfit, -i.salaries, -i.depreciation, -i.otherExpenses]);
  const netProfitBeforeTax = sum([operatingProfit, i.interestOnLoanToMember, -i.interestOnLoanFromMember]);
  const netProfitAfterTax = sum([netProfitBeforeTax, -i.incomeTax]);
  const retainedIncomeEnd = sum([i.openingRetainedIncome, netProfitAfterTax, -i.distributionToMembers]);
  const membersInterest = sum([i.membersContributions, retainedIncomeEnd]);
  const taxPayable = sum([i.incomeTax, -i.taxPaid]);
  const totalAssets = sum([i.fixedAssetsCarryingValue, i.loanToMember, i.inventory, i.debtors, i.bank]);
  const totalEquityAndLiabilities = sum([membersInterest, i.loanFromMember, i.creditors, taxPayable]);
  return {
    grossProfit,
    operatingProfit,
    netProfitBeforeTax,
    netProfitAfterTax,
    incomeStatement: [
      { label: 'Sales', amount: i.sales },
      { label: 'Cost of sales', amount: -i.costOfSales },
      { label: 'Gross profit', amount: grossProfit, bold: true },
      { label: 'Salaries', amount: -i.salaries, indent: true },
      { label: 'Depreciation', amount: -i.depreciation, indent: true },
      { label: 'Other operating expenses', amount: -i.otherExpenses, indent: true },
      { label: 'Operating profit', amount: operatingProfit, bold: true },
      { label: 'Interest on loan to member', amount: i.interestOnLoanToMember, indent: true },
      { label: 'Interest on loan from member', amount: -i.interestOnLoanFromMember, indent: true },
      { label: 'Net profit before tax', amount: netProfitBeforeTax, bold: true },
      { label: 'Income tax', amount: -i.incomeTax, indent: true },
      { label: 'Net profit after tax', amount: netProfitAfterTax, bold: true },
    ],
    retainedIncomeEnd,
    appropriation: [
      { label: 'Retained income at the start', amount: i.openingRetainedIncome },
      { label: 'Net profit after tax', amount: netProfitAfterTax },
      { label: 'Distribution to members', amount: -i.distributionToMembers },
      { label: 'Retained income at the end', amount: retainedIncomeEnd, bold: true },
    ],
    membersInterest,
    taxPayable,
    totalAssets,
    totalEquityAndLiabilities,
    balanceSheet: {
      equityAndLiabilities: [
        { label: "Members' contributions", amount: i.membersContributions, indent: true },
        { label: 'Retained income', amount: retainedIncomeEnd, indent: true },
        { label: "Members' interest", amount: membersInterest, bold: true },
        { label: 'Loan from member', amount: i.loanFromMember },
        { label: 'Trade creditors', amount: i.creditors },
        { label: 'Income tax payable', amount: taxPayable },
        { label: 'Total equity and liabilities', amount: totalEquityAndLiabilities, bold: true },
      ],
      assets: [
        { label: 'Fixed assets (carrying value)', amount: i.fixedAssetsCarryingValue },
        { label: 'Loan to member', amount: i.loanToMember },
        { label: 'Inventory', amount: i.inventory },
        { label: 'Trade debtors', amount: i.debtors },
        { label: 'Bank', amount: i.bank },
        { label: 'Total assets', amount: totalAssets, bold: true },
      ],
    },
    balanced: cents(totalAssets) === cents(totalEquityAndLiabilities),
  };
};

/** Terminology: how a company's statements are named and how a close corporation's are. */
export const TERMS: readonly { company: string; cc: string }[] = [
  { company: 'Shareholders', cc: 'Members' },
  { company: 'Ordinary share capital', cc: "Members' contributions" },
  { company: 'Dividends', cc: 'Distribution to members' },
  { company: 'Directors', cc: 'Members (who manage the business)' },
  { company: 'Memorandum of Incorporation', cc: 'Founding statement' },
  { company: 'Loan from a director or shareholder', cc: 'Loan from a member' },
  { company: 'Equity (shareholders\' equity)', cc: "Members' interest" },
  { company: 'Companies Act 71 of 2008', cc: 'Close Corporations Act 69 of 1984' },
];

/** The close corporation used in the lesson: Dube & Khan Traders CC (invented). */
export const DUBE_KHAN: CcInputs = {
  sales: 640000,
  costOfSales: 384000,
  salaries: 96000,
  depreciation: 18000,
  otherExpenses: 54000,
  interestOnLoanToMember: 1600,
  interestOnLoanFromMember: 6000,
  incomeTax: 22572,
  distributionToMembers: 40000,
  openingRetainedIncome: 35000,
  membersContributions: 100000,
  loanFromMember: 60000,
  loanToMember: 20000,
  fixedAssetsCarryingValue: 150000,
  inventory: 42000,
  debtors: 28000,
  bank: 22600,
  creditors: 38000,
  taxPaid: 14000,
};
