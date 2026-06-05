'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Statement of comprehensive income',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The statement of comprehensive income shows the company's performance for the year. Learners must classify items correctly, place subtotals accurately and distinguish operating activities from finance costs and taxation.
        </p>
        <FinancialStatement
          title="Statement of Comprehensive Income"
          period="Year ended 28 February 2025"
          sections={[
            {
              heading: 'Revenue and gross profit',
              lines: [
                { label: 'Sales', amount: 6280000 },
                { label: 'Less: Cost of sales', amount: -3895000 },
                { label: 'Gross profit', amount: 2385000, isSubtotal: true },
              ],
            },
            {
              heading: 'Operating performance',
              lines: [
                { label: 'Other operating income', amount: 118000 },
                { label: "Directors' fees", amount: -320000, indent: 1 },
                { label: 'Audit fees', amount: -124000, indent: 1 },
                { label: 'Depreciation', amount: -265000, indent: 1 },
                { label: 'Bad debts', amount: -42000, indent: 1 },
                { label: 'Operating profit', amount: 1752000, isSubtotal: true },
                { label: 'Interest on loan', amount: -138000 },
                { label: 'Profit before tax', amount: 1614000, isSubtotal: true },
                { label: 'Income tax', amount: -452000 },
                { label: 'Net profit after tax', amount: 1162000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Use the published-format wording exactly. Marks are often lost when learners mix up operating expenses, finance costs and appropriations from retained income.
        </p>
      </div>
    ),
  },
  {
    title: 'Statement of financial position',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The statement of financial position reports what the company owns and owes at year-end. Company topics require accurate classification of non-current assets, current assets, equity, non-current liabilities and current liabilities.
        </p>
        <FinancialStatement
          title="Statement of Financial Position"
          period="At 28 February 2025"
          sections={[
            {
              heading: 'Assets',
              lines: [
                { label: 'Property, plant and equipment', amount: 3440000 },
                { label: 'Inventory', amount: 540000 },
                { label: 'Trade and other receivables', amount: 618000 },
                { label: 'Cash and cash equivalents', amount: 486000 },
                { label: 'Total assets', amount: 5084000, isTotal: true },
              ],
            },
            {
              heading: 'Equity and liabilities',
              lines: [
                { label: 'Ordinary share capital', amount: 2100000 },
                { label: 'Retained income', amount: 1326000 },
                { label: 'Loan from Mzansi Bank', amount: 950000 },
                { label: 'Trade and other payables', amount: 708000 },
                { label: 'Total equity and liabilities', amount: 5084000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Published questions often require figures to move between the statements and the notes. Learners should always confirm whether the amount given belongs in a note or in the main statement.
        </p>
      </div>
    ),
  },
  {
    title: 'Year-end adjustments',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Adjustments change both profit and position. Depreciation, accrued expenses, prepaid expenses and bad debts must be processed before the financial statements are finalised.
        </p>
        <TAccount
          title="Accumulated Depreciation on Equipment"
          debit={[
            { description: 'Equipment sold', amount: 96000 },
          ]}
          credit={[
            { description: 'Balance b/d', amount: 420000 },
            { description: 'Depreciation for the year', amount: 138000 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          The disposal removes the accumulated depreciation linked to the asset sold, while the annual depreciation adjustment increases the expense in the income statement and reduces the carrying value in the statement of financial position.
        </p>
      </div>
    ),
  },
  {
    title: 'Notes and published information',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Notes support the main statements by giving extra detail about ordinary share capital, retained income, fixed assets, receivables and payables. In exams, the note is often the starting point for a calculation that later appears in a published statement.
        </p>
        <FinancialStatement
          title="Ordinary Share Capital Note (Extract)"
          period="Year ended 28 February 2025"
          sections={[
            {
              heading: 'Share information',
              lines: [
                { label: 'Authorised: 1 500 000 shares', note: 'no-par-value' },
                { label: 'Issued at start of year: 800 000 shares', amount: 1800000 },
                { label: 'Issued during the year: 40 000 shares at R7,50', amount: 300000 },
                { label: 'Issued at year-end: 840 000 shares', amount: 2100000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Whenever you see a note like this, connect the movement to the financing section of the cash flow statement and to equity in the statement of financial position.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "cfs-1",
    "question": "Trade and other receivables are shown in the statement of financial position as a:",
    "options": [
      "current asset",
      "non-current asset",
      "current liability",
      "finance cost"
    ],
    "answer": 0,
    "explanation": "Amounts owing by debtors are expected to be collected within the operating cycle, so they are current assets."
  },
  {
    "id": "cfs-2",
    "question": "Which adjustment reduces the carrying amount of a fixed asset each year?",
    "options": [
      "Depreciation",
      "Dividends",
      "Share issues",
      "Interest on capital"
    ],
    "answer": 0,
    "explanation": "Depreciation allocates the cost of a depreciable asset over its useful life and reduces carrying value."
  },
  {
    "id": "cfs-3",
    "question": "Closing retained income is generally calculated as:",
    "options": [
      "Opening retained income + net profit after tax - dividends",
      "Opening retained income + share capital - liabilities",
      "Net profit after tax + trade receivables",
      "Cash and cash equivalents - bank overdraft"
    ],
    "answer": 0,
    "explanation": "Retained income accumulates profits kept in the business after dividends are deducted."
  },
  {
    "id": "cfs-4",
    "question": "Audit fees owing at year-end are classified as a:",
    "options": [
      "current asset",
      "equity reserve",
      "current liability",
      "cost of sales item"
    ],
    "answer": 2,
    "explanation": "An unpaid audit fee is an accrued expense, so it is shown as a current liability."
  },
  {
    "id": "cfs-5",
    "question": "Inventory is presented under:",
    "options": [
      "equity",
      "non-current liabilities",
      "current assets",
      "operating expenses"
    ],
    "answer": 2,
    "explanation": "Trading stock or inventory is normally expected to be sold within the year, so it is a current asset."
  },
  {
    "id": "cfs-6",
    "question": "Interest on debentures is shown in the statement of comprehensive income as a:",
    "options": [
      "finance cost",
      "current asset",
      "dividend",
      "other comprehensive income reserve"
    ],
    "answer": 0,
    "explanation": "Debenture interest is a finance cost because it is the cost of borrowing long-term funds."
  },
  {
    "id": "cfs-7",
    "question": "Ordinary share capital appears in the statement of financial position under:",
    "options": [
      "current liabilities",
      "equity",
      "operating expenses",
      "current assets"
    ],
    "answer": 1,
    "explanation": "Ordinary share capital belongs to shareholders and therefore forms part of equity."
  },
  {
    "id": "cfs-8",
    "question": "Which item belongs in cash and cash equivalents?",
    "options": [
      "Trade receivables",
      "Bank overdraft repayable on demand",
      "Inventory",
      "Ordinary share capital"
    ],
    "answer": 1,
    "explanation": "A bank overdraft repayable on demand is included in cash and cash equivalents for cash flow statement purposes."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const CompanyFinancialStatements = () => (
  <CapsSubjectTopic
    title="Company Financial Statements"
    subtitle="Preparing the statement of comprehensive income, statement of financial position and supporting notes"
    learnSteps={learnSteps}
    task="gr12-company-financial-statements-t1"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default CompanyFinancialStatements;
