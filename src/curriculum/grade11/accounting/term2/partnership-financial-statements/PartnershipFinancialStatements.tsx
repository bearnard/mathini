import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Preparing the statement of comprehensive income',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>statement of comprehensive income</strong> for a partnership shows turnover, cost of sales, gross profit, other income, expenses, and the net profit for the year — exactly like a sole trader, but the net profit then feeds into the appropriation account.
        </p>
        <FinancialStatement
          title="Statement of Comprehensive Income"
          period="For the year ended 29 February 2024"
          sections={[
            {
              heading: 'Revenue',
              lines: [
                { label: 'Sales / Turnover', amount: 980000 },
                { label: 'Less: Cost of sales', amount: -410000 },
                { label: 'Gross profit', amount: 570000, isSubtotal: true },
              ],
            },
            {
              heading: 'Other income and expenses',
              lines: [
                { label: 'Discount received', amount: 18000 },
                { label: 'Salaries and wages', amount: -108000, indent: 1 },
                { label: 'Rent expense', amount: -54000, indent: 1 },
                { label: 'Advertising', amount: -28000, indent: 1 },
                { label: 'Depreciation', amount: -43000, indent: 1 },
              ],
            },
            {
              heading: 'Result',
              lines: [
                { label: 'Net profit for the year', amount: 355000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-sm text-slate-500">Partner salary allowances are <strong>not</strong> an expense here — they are distributions in the appropriation account.</p>
      </div>
    ),
  },
  {
    title: 'Preparing the statement of financial position',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>statement of financial position</strong> (balance sheet) shows what the partnership owns (assets) and owes (liabilities), with equity representing the partners' combined interest.
        </p>
        <FinancialStatement
          title="Statement of Financial Position"
          period="At 29 February 2024"
          sections={[
            {
              heading: 'Equity',
              lines: [
                { label: 'Partner A capital account', amount: 260000 },
                { label: 'Partner A current account', amount: 121000 },
                { label: 'Partner B capital account', amount: 200000 },
                { label: 'Partner B current account', amount: 94000 },
                { label: 'Total equity', amount: 675000, isTotal: true },
              ],
            },
            {
              heading: 'Liabilities',
              lines: [
                { label: 'Loan from bank', amount: 120000 },
                { label: 'Trade payables', amount: 98000 },
                { label: 'Accrued expenses', amount: 27000 },
                { label: 'Total liabilities', amount: 245000, isSubtotal: true },
              ],
            },
            {
              heading: 'Assets',
              lines: [
                { label: 'Equipment at carrying value', amount: 310000 },
                { label: 'Motor vehicles at carrying value', amount: 205000 },
                { label: 'Inventory', amount: 168000 },
                { label: 'Trade receivables', amount: 99000 },
                { label: 'Bank', amount: 138000 },
                { label: 'Total assets', amount: 920000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Working from the trial balance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Partnership financial statements are usually prepared from a <strong>pre-adjustment trial balance</strong> together with a list of adjustments.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-amber-700">Common adjustments to process:</p>
          <ul className="text-slate-600 list-disc list-inside space-y-1">
            <li>Accrued income and expenses</li>
            <li>Prepaid income and expenses</li>
            <li>Depreciation for the year</li>
            <li>Bad debts and provision for bad debts</li>
            <li>Partner salary allowances and interest</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Formatting requirements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          CAPS examinations award marks for correct <strong>format and presentation</strong>, not just the numbers.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Must include:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Business name and statement title</li>
              <li>Reporting period or date</li>
              <li>Currency indicator (R)</li>
              <li>Sub-totals and totals clearly shown</li>
            </ul>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Common errors to avoid:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Including salary allowances as expenses</li>
              <li>Omitting accumulated depreciation from assets</li>
              <li>Mixing up current and non-current classifications</li>
              <li>Forgetting to update current accounts after appropriation</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'In a partnership income statement, partner salary allowances are:',
    options: ['Listed under the operating expenses of the firm', 'Shown in the appropriation account, not the income statement', 'Included in the cost of sales of the firm', 'Shown as a liability on the balance sheet'],
    answer: 'Shown in the appropriation account, not the income statement',
    explanation: 'Salary allowances are profit distributions, not business expenses, so they belong in the appropriation account after net profit is calculated.',
  },
  {
    prompt: 'The equity section of a partnership balance sheet includes:',
    options: ['Only the capital accounts of the partners', 'Both the capital and current accounts of all partners', 'Loans from partners and bank overdrafts', 'Only the retained earnings of the business'],
    answer: 'Both the capital and current accounts of all partners',
    explanation: 'Equity = sum of all partners\' capital accounts + all partners\' current accounts.',
  },
  {
    prompt: 'On the balance sheet, non-current assets are shown at:',
    options: ['The original cost price of each asset', 'The market value of each asset', 'Cost less accumulated depreciation (carrying value)', 'The residual value of each asset only'],
    answer: 'Cost less accumulated depreciation (carrying value)',
    explanation: 'GAAP requires assets to be stated at carrying value (cost − accumulated depreciation) on the balance sheet.',
  },
  {
    prompt: 'Which document is the starting point for preparing partnership financial statements?',
    options: ['The cash budget for the following year', 'The pre-adjustment trial balance and adjustments', 'The bank reconciliation of the business', 'The fixed asset register on its own'],
    answer: 'The pre-adjustment trial balance and adjustments',
    explanation: 'Financial statements are prepared from the trial balance after all year-end adjustments have been identified and processed.',
  },
  {
    prompt: 'An accrued expense in the trial balance means:',
    options: [
      'An expense paid in advance',
      'An expense incurred but not yet paid',
      'An income already received',
      'A liability that has been settled',
    ],
    answer: 'An expense incurred but not yet paid',
    explanation: 'Accrued expenses are amounts owed for services already used — they are liabilities on the balance sheet and expenses in the income statement.',
  },
  {
    prompt: 'Where does depreciation for the year appear in the financial statements?',
    options: ['Income that is shown in the income statement', 'An operating expense that also lowers carrying value', 'On the balance sheet only, as a liability', 'In the appropriation account of the partners'],
    answer: 'An operating expense that also lowers carrying value',
    explanation: 'Depreciation is an expense that reduces profit and simultaneously reduces the carrying value of the asset on the balance sheet.',
  },
  {
    prompt: 'Inventory on hand at the end of the period appears on the balance sheet under:',
    options: ['Non-current assets', 'Current assets', 'Equity', 'Current liabilities'],
    answer: 'Current assets',
    explanation: 'Inventory (trading stock) is a current asset as it is expected to be converted to cash within one year.',
  },
  {
    prompt: 'A prepaid expense is classified on the balance sheet as:',
    options: ['A current liability', 'A non-current asset', 'A current asset', 'Equity'],
    answer: 'A current asset',
    explanation: 'A prepaid expense represents economic benefit already paid for but not yet used — it is a current asset.',
  },
  {
    prompt: 'Which of the following would NOT appear in the income statement of a partnership?',
    options: ['Depreciation expense for the year', "Partner A's interest on capital", 'Bad debts expense for the year', 'Rent expense for the year'],
    answer: "Partner A's interest on capital",
    explanation: 'Interest on capital is a profit distribution recorded in the appropriation account, not an income statement expense.',
  },
  {
    prompt: 'After the appropriation account is completed, partners\' shares are credited to their:',
    options: ['Capital accounts', 'Drawings accounts', 'Current accounts', 'Loan accounts'],
    answer: 'Current accounts',
    explanation: 'The results of the appropriation (salary, interest, profit share) are transferred to each partner\'s current account.',
  },
];

const PartnershipFinancialStatements = () => (
  <CapsSubjectTopic
    title="Partnership Financial Statements"
    subtitle="Preparing the income statement and balance sheet for a partnership"
    learnSteps={learnSteps}
    task="gr11-partnership-financial-statements-t2"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default PartnershipFinancialStatements;
