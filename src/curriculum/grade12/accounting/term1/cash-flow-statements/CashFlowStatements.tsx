'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Purpose of the cash flow statement',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The cash flow statement explains why cash and cash equivalents changed, even when profit was strong. It helps Grade 12 learners see whether the business generated enough cash from normal trading activities to fund investing and financing decisions.
        </p>
        <FinancialStatement
          title="Cash Flow Statement (Extract)"
          period="Year ended 28 February 2025"
          sections={[
            {
              heading: 'Operating activities',
              lines: [
                { label: 'Cash generated from operations', amount: 1124000 },
                { label: 'Interest paid', amount: -125000, indent: 1 },
                { label: 'Dividends paid', amount: -310000, indent: 1 },
                { label: 'Net cash from operating activities', amount: 689000, isSubtotal: true },
              ],
            },
            {
              heading: 'Investing and financing activities',
              lines: [
                { label: 'Purchase of equipment', amount: -480000 },
                { label: 'Proceeds on sale of equipment', amount: 95000 },
                { label: 'Issue of ordinary shares', amount: 600000 },
                { label: 'Repayment of long-term loan', amount: -200000 },
                { label: 'Net increase in cash and cash equivalents', amount: 704000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          A positive operating section is usually a healthy sign because it means the company is generating cash from its core business instead of depending only on loans or share issues.
        </p>
      </div>
    ),
  },
  {
    title: 'Three sections of cash movement',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Every cash movement must be classified correctly. Operating activities relate to trading, investing activities relate to non-current assets and investments, and financing activities relate to equity and long-term borrowings.
        </p>
        <TAccount
          title="Bank Account"
          debit={[
            { description: 'Opening balance', amount: 285000 },
            { description: 'Cash generated from operations', amount: 1124000 },
            { description: 'Issue of ordinary shares', amount: 600000 },
            { description: 'Sale of equipment', amount: 95000 },
          ]}
          credit={[
            { description: 'Equipment purchased', amount: 480000 },
            { description: 'Dividends paid', amount: 310000 },
            { description: 'Interest paid', amount: 125000 },
            { description: 'Loan repaid', amount: 200000 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          This bank account view makes the cash effect visible. The cash flow statement then groups the same entries so that users can evaluate the quality of the company's cash management.
        </p>
      </div>
    ),
  },
  {
    title: 'Non-cash and working-capital adjustments',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Under the indirect method, learners begin with operating profit before working-capital changes. They then adjust for non-cash items such as depreciation and for changes in current assets and current liabilities.
        </p>
        <FinancialStatement
          title="Reconciliation to Cash from Operations"
          period="Year ended 28 February 2025"
          sections={[
            {
              heading: 'Adjustments',
              lines: [
                { label: 'Operating profit before working-capital changes', amount: 1450000 },
                { label: 'Depreciation', amount: 180000, indent: 1 },
                { label: 'Profit on sale of equipment', amount: -15000, indent: 1 },
                { label: 'Increase in inventory', amount: -60000, indent: 1 },
                { label: 'Decrease in trade receivables', amount: 42000, indent: 1 },
                { label: 'Increase in trade payables', amount: 27000, indent: 1 },
                { label: 'Cash generated from operations', amount: 1624000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Remember the logic: increases in current assets usually tie up cash and are deducted, while increases in current liabilities often mean cash has been conserved and are added.
        </p>
      </div>
    ),
  },
  {
    title: 'Interpreting cash flow',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good interpretation asks whether the company can sustain itself. If operating cash is weak but the company keeps raising money from shareholders or lenders, the business may be under pressure even if profit still looks acceptable.
        </p>
        <p className="text-base leading-7 text-slate-600">
          Large investing outflows are not automatically negative. Buying new machinery for R480 000 could support future growth, provided the business can still cover dividends, interest and loan repayments without creating a liquidity crisis.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "cfl-1",
    "question": "In the cash flow statement, depreciation is usually:",
    "options": ['deducted from profit as an outflow in the financing activities section', 'added back in the reconciliation of cash generated from operations', 'recorded as an investing activity inflow', 'shown as a cash receipt from customers'],
    "answer": 1,
    "explanation": "Depreciation reduces accounting profit but does not use cash, so it is added back in the indirect reconciliation."
  },
  {
    "id": "cfl-2",
    "question": "The purchase of equipment for cash is shown as a(n):",
    "options": [
      "operating inflow",
      "operating outflow",
      "investing outflow",
      "financing inflow"
    ],
    "answer": 2,
    "explanation": "Buying non-current assets uses cash in the investing activities section."
  },
  {
    "id": "cfl-3",
    "question": "Cash proceeds from issuing ordinary shares are classified as a(n):",
    "options": [
      "operating inflow",
      "investing inflow",
      "financing inflow",
      "current asset"
    ],
    "answer": 2,
    "explanation": "Share issues raise finance from owners, so they are financing inflows."
  },
  {
    "id": "cfl-4",
    "question": "Dividends paid are normally shown as a(n):",
    "options": [
      "financing outflow",
      "investing outflow",
      "operating inflow",
      "non-cash expense"
    ],
    "answer": 0,
    "explanation": "Dividends paid are distributions to shareholders and appear as financing outflows."
  },
  {
    "id": "cfl-5",
    "question": "An increase in inventory during the year will normally be:",
    "options": [
      "added in the operating section",
      "deducted in the operating section",
      "shown as a financing activity",
      "ignored because inventory is non-current"
    ],
    "answer": 1,
    "explanation": "More cash was tied up in inventory, so the increase is deducted when reconciling cash from operations."
  },
  {
    "id": "cfl-6",
    "question": "Cash received from selling an old vehicle is shown as a(n):",
    "options": [
      "investing inflow",
      "operating expense",
      "financing outflow",
      "equity reserve"
    ],
    "answer": 0,
    "explanation": "Selling a non-current asset brings in cash in the investing section."
  },
  {
    "id": "cfl-7",
    "question": "Net change in cash and cash equivalents for the year equals:",
    "options": [
      "opening cash and cash equivalents + dividends paid",
      "closing cash and cash equivalents - opening cash and cash equivalents",
      "gross profit - operating expenses",
      "ordinary share capital - retained income"
    ],
    "answer": 1,
    "explanation": "The net change is the difference between closing and opening cash and cash equivalents."
  },
  {
    "id": "cfl-8",
    "question": "An increase in trade payables is usually added in the operating section because the business:",
    "options": ['collected more cash from debtors than the credit sales for the period', 'paid less cash to suppliers than the expense incurred', 'bought more fixed assets for cash', 'issued more shares for cash'],
    "answer": 1,
    "explanation": "If payables increased, some purchases or expenses were not yet paid in cash, so cash outflow was lower."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const CashFlowStatements = () => (
  <CapsSubjectTopic
    title="Cash Flow Statements"
    subtitle="Operating, investing and financing activities in Grade 12 company reporting"
    learnSteps={learnSteps}
    task="gr12-cash-flow-statements-t1"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default CashFlowStatements;
