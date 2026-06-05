import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Using the income statement for analysis',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Financial analysis starts with reliable figures. Learners use the statement of comprehensive income to judge profitability and to explain why profit improved or declined.
        </p>
        <FinancialStatement
          title="Statement of Comprehensive Income Extract"
          period="Year ended 28 February 2025"
          sections={[
            {
              heading: 'Trading results',
              lines: [
                { label: 'Sales', amount: 780000 },
                { label: 'Less: Cost of sales', amount: -468000 },
                { label: 'Gross profit', amount: 312000, isSubtotal: true },
              ],
            },
            {
              heading: 'Operating result',
              lines: [
                { label: 'Other operating income', amount: 12000 },
                { label: 'Operating expenses', amount: -222000 },
                { label: 'Net profit', amount: 102000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Profitability indicators',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Grade 10 analysis focuses on simple indicators and sensible comments rather than advanced ratios. Always explain what the figure means for the owner.
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-left">
          <div className="rounded-2xl bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-700">Gross profit percentage</h3>
            <p className="mt-2 font-mono text-sm text-blue-700">312 000 ÷ 780 000 × 100 = 40%</p>
            <p className="mt-2 text-slate-600">Shows the mark-up left after paying for stock sold.</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-5">
            <h3 className="font-semibold text-emerald-700">Net profit percentage</h3>
            <p className="mt-2 font-mono text-sm text-emerald-700">102 000 ÷ 780 000 × 100 = 13.1%</p>
            <p className="mt-2 text-slate-600">Shows the final percentage of sales converted into profit.</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-5">
            <h3 className="font-semibold text-amber-700">Expense control</h3>
            <p className="mt-2 text-slate-600">Compare expenses to sales and identify which costs are rising too quickly.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Liquidity and solvency indicators',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          A profitable business can still struggle if it cannot pay short-term debts. Liquidity and solvency focus on the business’s ability to survive and settle obligations.
        </p>
        <FinancialStatement
          title="Statement of Financial Position Extract"
          period="28 February 2025"
          sections={[
            {
              heading: 'Current assets',
              lines: [
                { label: 'Inventory', amount: 148000 },
                { label: 'Trade receivables', amount: 62000 },
                { label: 'Bank', amount: 41000 },
                { label: 'Total current assets', amount: 251000, isSubtotal: true },
              ],
            },
            {
              heading: 'Current liabilities',
              lines: [
                { label: 'Trade payables', amount: 74000 },
                { label: 'Bank overdraft', amount: 12000 },
                { label: 'Accrued expenses', amount: 9000 },
                { label: 'Total current liabilities', amount: 95000, isSubtotal: true },
              ],
            },
            {
              heading: 'Interpretation',
              lines: [
                { label: 'Working capital', amount: 156000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Interpreting results ethically',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Good financial interpretation is honest, balanced and supported by evidence. Do not manipulate comments to make poor results look better than they are.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700">Strong analytical comment</h3>
            <p className="mt-2 text-slate-600">"Gross profit improved from 36% to 40%, suggesting better mark-up or stock control, but net profit remains under pressure because expenses rose sharply."</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700">Weak analytical comment</h3>
            <p className="mt-2 text-slate-600">"The business is doing well" without quoting any figures or explaining the reason.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'Gross profit is calculated as:',
    options: ['Sales + Cost of sales', 'Sales - Cost of sales', 'Assets - Liabilities', 'Current assets - Current liabilities'],
    answer: 'Sales - Cost of sales',
    explanation: 'Gross profit measures the surplus left after the direct cost of stock sold has been deducted from sales.',
  },
  {
    prompt: 'If expenses increase faster than sales, net profit will usually:',
    options: ['Increase automatically', 'Stay the same', 'Decrease', 'Become an asset'],
    answer: 'Decrease',
    explanation: 'Higher expenses reduce the amount of profit left after costs are deducted.',
  },
  {
    prompt: 'Liquidity refers to the business’s ability to:',
    options: ['Earn a gross profit', 'Pay short-term debts when due', 'Buy fixed assets', 'Increase capital'],
    answer: 'Pay short-term debts when due',
    explanation: 'Liquidity is about having enough short-term resources to settle current liabilities.',
  },
  {
    prompt: 'Working capital is calculated as:',
    options: ['Current assets - Current liabilities', 'Sales - Expenses', 'Capital + Liabilities', 'Gross profit - Cost of sales'],
    answer: 'Current assets - Current liabilities',
    explanation: 'Working capital measures the short-term financial cushion available to the business.',
  },
  {
    prompt: 'A gross profit percentage of 40% means that:',
    options: ['40% of every rand of sales is left after cost of sales', 'The business made a 40% net profit', 'Expenses are 40% of liabilities', 'Debtors pay within 40 days'],
    answer: '40% of every rand of sales is left after cost of sales',
    explanation: 'Gross profit percentage shows how much of sales remains after covering the cost of stock sold.',
  },
  {
    prompt: 'Which statement is the best example of sound interpretation?',
    options: ['Profit is nice', 'Sales are bigger', 'Net profit rose from R84 000 to R102 000 because sales increased while cost of sales was controlled', 'There are many assets'],
    answer: 'Net profit rose from R84 000 to R102 000 because sales increased while cost of sales was controlled',
    explanation: 'A strong interpretation uses figures and explains the cause of the change.',
  },
  {
    prompt: 'If current liabilities are greater than current assets, the business may have a:',
    options: ['Liquidity problem', 'Depreciation gain', 'Capital surplus only', 'Higher gross profit'],
    answer: 'Liquidity problem',
    explanation: 'The business may struggle to pay short-term debts if current liabilities exceed current assets.',
  },
  {
    prompt: 'Ethical financial analysis requires the accountant to:',
    options: ['Hide poor results from the owner', 'Use evidence and report honestly', 'Change figures to impress investors', 'Ignore liabilities'],
    answer: 'Use evidence and report honestly',
    explanation: 'Ethical analysis must reflect the real position of the business and be supported by reliable figures.',
  },
];

const AnalysisInterpretation = () => (
  <CapsSubjectTopic
    title="Analysis and Interpretation"
    subtitle="Using income statement and balance sheet figures to judge profitability, liquidity and overall performance"
    learnSteps={learnSteps}
    task="gr10-analysis-interpretation"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default AnalysisInterpretation;
