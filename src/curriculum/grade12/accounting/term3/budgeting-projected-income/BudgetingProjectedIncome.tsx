'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Purpose of budgeting',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Budgets are planned financial targets based on evidence such as past results, expected price changes and business strategy. They help managers prepare for likely profit levels, cash needs and operating pressures before those events actually happen.
        </p>
        <FinancialStatement
          title="Projected Income Statement"
          period="Budget for March 2026"
          sections={[
            {
              heading: 'Projected profitability',
              lines: [
                { label: 'Sales', amount: 1580000 },
                { label: 'Less: Cost of sales', amount: -948000 },
                { label: 'Gross profit', amount: 632000, isSubtotal: true },
                { label: 'Other operating income', amount: 18000 },
                { label: 'Salaries', amount: -168000, indent: 1 },
                { label: 'Rent expense', amount: -54000, indent: 1 },
                { label: 'Depreciation', amount: -22000, indent: 1 },
                { label: 'Bad debts', amount: -14000, indent: 1 },
                { label: 'Net profit', amount: 392000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          The projected income statement measures profit, not cash. That is why non-cash items like depreciation still appear even though they do not create immediate payments.
        </p>
      </div>
    ),
  },
  {
    title: 'Projected income statement',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Learners should build the projected income statement from key assumptions such as units sold, selling price, gross profit percentage and expected operating expenses. Each assumption must be realistic and clearly linked to the scenario given in the question.
        </p>
        <FinancialStatement
          title="Sales and Gross Profit Assumptions"
          period="Budget for March 2026"
          sections={[
            {
              heading: 'Key assumptions',
              lines: [
                { label: 'Budgeted units sold', amount: 7900 },
                { label: 'Selling price per unit', amount: 200, note: 'rand per unit' },
                { label: 'Cost of sales per unit', amount: 120, note: 'rand per unit' },
                { label: 'Gross profit per unit', amount: 80, isSubtotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Even a small change in selling price or unit cost can have a large effect on projected profit, so always read the assumptions carefully before calculating.
        </p>
      </div>
    ),
  },
  {
    title: 'Cash planning',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Cash budgets focus on timing. A business can budget a healthy profit but still run short of cash if debtors pay late or major expenses fall due before receipts arrive.
        </p>
        <TAccount
          title="Bank (Budgeted Cash Movement)"
          debit={[
            { description: 'Opening balance', amount: 84000 },
            { description: 'Cash sales', amount: 632000 },
            { description: 'Collections from debtors', amount: 488000 },
          ]}
          credit={[
            { description: 'Payments to creditors', amount: 516000 },
            { description: 'Salaries', amount: 168000 },
            { description: 'Rent', amount: 54000 },
            { description: 'Equipment instalment', amount: 62000 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          This planned bank movement shows why collection patterns matter. If debtors pay more slowly than expected, the closing cash balance can become a deficit even though the projected income statement still shows a profit.
        </p>
      </div>
    ),
  },
  {
    title: 'Interpreting assumptions and variances',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good budgeting answers assess whether assumptions are sensible. For example, increasing the selling price might improve the gross profit per unit, but it could reduce demand if customers are price-sensitive.
        </p>
        <p className="text-base leading-7 text-slate-600">
          When actual results are later compared with the budget, variances should be explained using evidence. A higher-than-budget wage cost might come from overtime, a staffing increase or lower-than-expected productivity.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "bpi-1",
    "question": "A projected income statement is prepared to estimate:",
    "options": [
      "future profit for a planned period",
      "past cash receipts and payments",
      "the number of shares authorised",
      "the fixed asset register balance only"
    ],
    "answer": 0,
    "explanation": "The projected income statement forecasts future financial performance."
  },
  {
    "id": "bpi-2",
    "question": "Which item is included in a projected income statement but is not a cash payment?",
    "options": [
      "Depreciation",
      "Cash sales",
      "Debtor collections",
      "Loan receipts"
    ],
    "answer": 0,
    "explanation": "Depreciation affects profit but does not involve an immediate cash outflow."
  },
  {
    "id": "bpi-3",
    "question": "If the selling price increases while the number of units sold stays the same, budgeted sales revenue will usually:",
    "options": [
      "decrease",
      "increase",
      "stay zero",
      "become a liability"
    ],
    "answer": 1,
    "explanation": "Revenue equals selling price × units sold, so a higher price increases revenue if units remain unchanged."
  },
  {
    "id": "bpi-4",
    "question": "A cash budget deficit means that for the period:",
    "options": [
      "cash receipts exceed cash payments",
      "cash payments exceed cash receipts",
      "net profit equals zero",
      "the business has no creditors"
    ],
    "answer": 1,
    "explanation": "A deficit means more cash is expected to go out than come in during the period."
  },
  {
    "id": "bpi-5",
    "question": "Gross profit is calculated as:",
    "options": [
      "sales - cost of sales",
      "sales - operating expenses",
      "cash receipts - cash payments",
      "current assets - current liabilities"
    ],
    "answer": 0,
    "explanation": "Gross profit shows the margin earned after covering the direct cost of goods sold."
  },
  {
    "id": "bpi-6",
    "question": "The pattern of debtor collections mainly affects the:",
    "options": [
      "cash budget",
      "authorised share capital",
      "audit report type",
      "asset register"
    ],
    "answer": 0,
    "explanation": "Collection timing matters for cash flow planning because it determines when cash is received."
  },
  {
    "id": "bpi-7",
    "question": "If rent is expected to increase next month, the budgeted operating expenses should:",
    "options": [
      "decrease",
      "remain unchanged automatically",
      "increase",
      "move to ordinary share capital"
    ],
    "answer": 2,
    "explanation": "A planned increase in rent must be reflected as a higher operating expense in the budget."
  },
  {
    "id": "bpi-8",
    "question": "Bad debts expense will usually:",
    "options": ['reduce projected profit but not create an immediate cash outflow', 'be shown as an inflow in the financing activities section of the statement', 'be shown as a financing activity inflow', 'raise the ordinary share capital of the company'],
    "answer": 0,
    "explanation": "Bad debts reduce profit, but the write-off itself is not a new cash payment."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const BudgetingProjectedIncome = () => (
  <CapsSubjectTopic
    title="Budgeting and Projected Income"
    subtitle="Preparing projected statements and evaluating assumptions before they become results"
    learnSteps={learnSteps}
    task="gr12-budgeting-projected-income-t3"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default BudgetingProjectedIncome;
