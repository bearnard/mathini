import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Accruals and prepayments',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Year-end adjustments make sure income and expenses are recorded in the correct accounting period. Accruals increase an expense or income still owing, while prepayments reduce an amount that belongs to the next period.
        </p>
        <TAccount
          title="Rent Expense Account"
          debit={[
            { description: 'Bank (rent paid during year)', amount: 36000 },
            { description: 'Accrued rent', amount: 3000 },
          ]}
          credit={[
            { description: 'Statement of comprehensive income', amount: 39000 },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Depreciation and bad debts adjustments',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Depreciation spreads the cost of non-current assets over their useful life, while bad debts and allowances for credit losses make receivables more realistic.
        </p>
        <TAccount
          title="Allowance for Credit Losses"
          debit={[
            { description: 'Bad debts written off', amount: 1800 },
            { description: 'Balance c/d', amount: 5200 },
          ]}
          credit={[
            { description: 'Balance b/d', amount: 4000 },
            { description: 'Increase in allowance', amount: 3000 },
          ]}
        />
        <p className="text-sm text-slate-500">The new allowance is higher than last year, so the increase is treated as an expense in the current period.</p>
      </div>
    ),
  },
  {
    title: 'Preparing the statement of comprehensive income',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          After all adjustments are processed, the statement of comprehensive income shows whether the sole trader made a net profit or loss for the year.
        </p>
        <FinancialStatement
          title="Statement of Comprehensive Income"
          period="Year ended 28 February 2025"
          sections={[
            {
              heading: 'Revenue',
              lines: [
                { label: 'Sales', amount: 540000 },
                { label: 'Less: Cost of sales', amount: -312000 },
                { label: 'Gross profit', amount: 228000, isSubtotal: true },
              ],
            },
            {
              heading: 'Other income and expenses',
              lines: [
                { label: 'Discount received', amount: 6400 },
                { label: 'Rent expense', amount: -39000, indent: 1 },
                { label: 'Salaries and wages', amount: -108600, indent: 1 },
                { label: 'Depreciation', amount: -22500, indent: 1 },
                { label: 'Bad debts', amount: -4800, indent: 1 },
              ],
            },
            {
              heading: 'Result',
              lines: [
                { label: 'Net profit for the year', amount: 59200, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Preparing the statement of financial position',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          The statement of financial position reflects the adjusted balances of assets, liabilities and owner’s equity after year-end entries have been completed.
        </p>
        <FinancialStatement
          title="Statement of Financial Position"
          period="At 28 February 2025"
          sections={[
            {
              heading: 'Owner’s equity',
              lines: [
                { label: 'Capital', amount: 268000 },
                { label: 'Add: Net profit', amount: 59200, indent: 1 },
                { label: 'Less: Drawings', amount: -24000, indent: 1 },
                { label: 'Closing owner’s equity', amount: 303200, isTotal: true },
              ],
            },
            {
              heading: 'Liabilities',
              lines: [
                { label: 'Loan: Mzansi Bank', amount: 85000 },
                { label: 'Trade payables', amount: 28600 },
                { label: 'Accrued rent', amount: 3000 },
                { label: 'Total liabilities', amount: 116600, isSubtotal: true },
              ],
            },
            {
              heading: 'Assets',
              lines: [
                { label: 'Equipment at carrying value', amount: 146000 },
                { label: 'Inventory', amount: 132800 },
                { label: 'Trade receivables', amount: 51800 },
                { label: 'Bank', amount: 89100 },
                { label: 'Prepaid insurance', amount: 1200 },
                { label: 'Total assets', amount: 420900, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'An accrued expense at year-end means the expense was:',
    options: ['Paid in advance', 'Incurred but not yet paid', 'Never recorded', 'Transferred to capital'],
    answer: 'Incurred but not yet paid',
    explanation: 'Accrued expenses belong to the current period even though cash has not yet been paid.',
  },
  {
    prompt: 'A prepaid expense is shown in the statement of financial position as a:',
    options: ['Current asset', 'Current liability', 'Revenue item', 'Capital reserve'],
    answer: 'Current asset',
    explanation: 'The business has already paid for a future benefit, so it is treated as an asset.',
  },
  {
    prompt: 'Depreciation is recorded to:',
    options: ['Raise the profit of the business for the year', 'Reduce the carrying value of an asset over time', 'Raise the drawings of the owner for the year', 'Remove the creditors from the books'],
    answer: 'Reduce the carrying value of an asset over time',
    explanation: 'Depreciation allocates the cost of the asset across the periods that use it.',
  },
  {
    prompt: 'Bad debts affect the financial statements by:',
    options: ['Increasing trade receivables', 'Reducing trade receivables and profit', 'Increasing liabilities only', 'Changing drawings only'],
    answer: 'Reducing trade receivables and profit',
    explanation: 'Bad debts are an expense and also reduce the amount expected from customers.',
  },
  {
    prompt: 'Which statement shows the profit or loss for the year?',
    options: ['Statement of financial position', 'Statement of comprehensive income', 'Bank reconciliation', 'Debtors ledger'],
    answer: 'Statement of comprehensive income',
    explanation: 'The statement of comprehensive income summarises income and expenses to determine the net result.',
  },
  {
    prompt: 'Drawings by the owner are shown in the statement of financial position by:',
    options: ['Increasing capital', 'Reducing owner’s equity', 'Increasing liabilities', 'Increasing sales'],
    answer: 'Reducing owner’s equity',
    explanation: 'Drawings are amounts taken by the owner for personal use and reduce the owner’s claim on the business.',
  },
  {
    prompt: 'If the allowance for credit losses increases, the adjustment is treated as a:',
    options: ['Gain', 'Liability settlement', 'Expense', 'Capital contribution'],
    answer: 'Expense',
    explanation: 'An increase in the allowance reduces the value of receivables and is recognised as an expense.',
  },
  {
    prompt: 'Inventory on hand at year-end is normally classified as a:',
    options: ['Current asset', 'Current liability', 'Non-current liability', 'Expense'],
    answer: 'Current asset',
    explanation: 'Inventory is expected to be sold within the normal operating cycle of the business.',
  },
];

const AdjustmentsFinancial = () => (
  <CapsSubjectTopic
    title="Adjustments and Financial Statements"
    subtitle="Processing year-end adjustments and preparing the final statements of a sole trader"
    learnSteps={learnSteps}
    task="gr10-adjustments-financial-statements"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default AdjustmentsFinancial;
