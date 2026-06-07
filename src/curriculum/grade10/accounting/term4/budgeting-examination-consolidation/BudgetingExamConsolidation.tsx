import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/acc/term4/budgeting-examination-consolidation/diagram.webp", alt: "Cash Budget" },
    title: 'Planning with a cash budget',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          A cash budget helps the owner predict whether the business will have enough cash to cover planned payments in the coming month.
        </p>
        <FinancialStatement
          title="Cash Budget"
          period="September 2025"
          sections={[
            {
              heading: 'Opening balance',
              lines: [{ label: 'Opening bank balance', amount: 28000 }],
            },
            {
              heading: 'Cash receipts',
              lines: [
                { label: 'Cash sales', amount: 54000 },
                { label: 'Collections from debtors', amount: 76000 },
                { label: 'Capital introduced', amount: 24000 },
                { label: 'Total receipts', amount: 154000, isSubtotal: true },
              ],
            },
            {
              heading: 'Cash payments',
              lines: [
                { label: 'Payments to creditors', amount: -68200 },
                { label: 'Rent', amount: -14500 },
                { label: 'Salaries', amount: -27800 },
                { label: 'Equipment instalment', amount: -36000 },
                { label: 'Total payments', amount: -146500, isSubtotal: true },
              ],
            },
            {
              heading: 'Result',
              lines: [{ label: 'Closing bank balance', amount: 35500, isTotal: true }],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Projected income statement',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          The projected income statement estimates profitability for a future period by comparing expected income with expected expenses.
        </p>
        <FinancialStatement
          title="Projected Income Statement"
          period="October 2025"
          sections={[
            {
              heading: 'Trading',
              lines: [
                { label: 'Projected sales', amount: 185000 },
                { label: 'Less: Cost of sales', amount: -108000 },
                { label: 'Projected gross profit', amount: 77000, isSubtotal: true },
              ],
            },
            {
              heading: 'Operating items',
              lines: [
                { label: 'Other operating income', amount: 2500 },
                { label: 'Rent expense', amount: -14500, indent: 1 },
                { label: 'Salaries', amount: -27800, indent: 1 },
                { label: 'Advertising', amount: -6200, indent: 1 },
                { label: 'Projected net profit', amount: 31000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Linking budgets back to ledger skills',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Budgeting becomes easier when learners can picture the effect on the bank ledger. Projected receipts increase bank; projected payments reduce bank.
        </p>
        <TAccount
          title="Projected Bank Account"
          debit={[
            { description: 'Opening balance', amount: 28000 },
            { description: 'Cash receipts', amount: 154000 },
          ]}
          credit={[
            { description: 'Projected cash payments', amount: 146500 },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Examination consolidation strategies',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Term 4 is the time to consolidate all Grade 10 accounting topics. Revision should move from source documents and journals to ledgers, adjustments, statements and interpretation.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-700">Smart revision order</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-600">
              <li>Revise journal purposes and source documents.</li>
              <li>Practise posting to T-accounts and control accounts.</li>
              <li>Do one full adjustment and financial statement question.</li>
              <li>Finish with analysis and interpretation comments.</li>
            </ol>
          </div>
          <div className="rounded-2xl bg-indigo-50 p-5">
            <h3 className="font-semibold text-indigo-700">Exam technique</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>Underline the verb in the question: calculate, explain, identify or compare.</li>
              <li>Keep workings neat so method marks can be awarded.</li>
              <li>Use headings and totals exactly as practised in class.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'The main purpose of a cash budget is to:',
    options: ['Record last month’s transactions', 'Predict future cash inflows and outflows', 'Prepare a bank reconciliation only', 'Replace the trial balance'],
    answer: 'Predict future cash inflows and outflows',
    explanation: 'A cash budget is a planning tool that forecasts cash receipts, payments and the closing bank balance.',
  },
  {
    prompt: 'A projected closing bank balance that is negative indicates:',
    options: ['High profitability', 'A possible cash shortfall or overdraft', 'No liabilities', 'Too much inventory'],
    answer: 'A possible cash shortfall or overdraft',
    explanation: 'A negative closing balance means expected cash payments exceed expected cash receipts and opening cash.',
  },
  {
    prompt: 'Collections from debtors are shown in the cash budget as a:',
    options: ['Cash receipt', 'Non-current asset', 'Credit purchase', 'Liability'],
    answer: 'Cash receipt',
    explanation: 'They are expected cash inflows from customers who previously bought on credit.',
  },
  {
    prompt: 'Which statement estimates future profit?',
    options: ['Projected income statement', 'Bank reconciliation statement', 'Debtors control account', 'Asset register'],
    answer: 'Projected income statement',
    explanation: 'The projected income statement estimates future income, expenses and profit.',
  },
  {
    prompt: 'Depreciation is usually excluded from the cash budget because it is:',
    options: ['A liability', 'A non-cash expense', 'An income item', 'A current asset'],
    answer: 'A non-cash expense',
    explanation: 'No money leaves the bank account when depreciation is recorded.',
  },
  {
    prompt: 'Why is budgeting useful before an examination?',
    options: ['It removes the need for studying journals', 'It helps link calculations, presentation and interpretation across topics', 'It only tests ethics', 'It replaces bookkeeping'],
    answer: 'It helps link calculations, presentation and interpretation across topics',
    explanation: 'Budgeting draws together cash flow, profitability and ledger thinking, making it a good consolidation topic.',
  },
  {
    prompt: 'An increase in planned cash sales will usually cause the bank account to be:',
    options: ['Credited', 'Debited', 'Written off', 'Transferred to drawings'],
    answer: 'Debited',
    explanation: 'Cash received increases the bank asset, so the bank account is debited.',
  },
  {
    prompt: 'Good exam technique in accounting includes:',
    options: ['Ignoring headings to save time', 'Showing workings clearly and using correct labels', 'Leaving out totals', 'Writing comments without figures'],
    answer: 'Showing workings clearly and using correct labels',
    explanation: 'CAPS marking often awards method and presentation marks, so layout and workings matter.',
  },
];

const BudgetingExamConsolidation = () => (
  <CapsSubjectTopic
    title="Budgeting and Examination Consolidation"
    subtitle="Using cash budgets and projected results to revise Grade 10 accounting in an exam-ready way"
    learnSteps={learnSteps}
    task="gr10-budgeting-examination-consolidation"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default BudgetingExamConsolidation;
