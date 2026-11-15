'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Core Paper 1 content',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Paper 1 focuses on company accounting, cash flow, analysis and governance. Revision should revisit the main published statements and the links between equity, profit, cash and ratio interpretation.
        </p>
        <FinancialStatement
          title="Paper 1 Revision Extract"
          period="Year ended 28 February 2025"
          sections={[
            {
              heading: 'Performance and position',
              lines: [
                { label: 'Net profit after tax', amount: 1162000 },
                { label: 'Ordinary share capital', amount: 2120000 },
                { label: 'Retained income', amount: 1326000 },
                { label: 'Cash generated from operations', amount: 1624000 },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          These are the figures learners should connect quickly in revision. Profit increases retained income, share issues increase equity and cash, and cash generated from operations supports liquidity and dividends.
        </p>
      </div>
    ),
  },
  {
    title: 'What markers reward',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Markers reward correct layout, clear classification and comments based on figures. If you are asked about liquidity, refer to the current ratio, acid-test ratio and cash flow evidence together.
        </p>
        <TAccount
          title="Ordinary Share Capital"
          debit={[
            { description: 'Share buy-back', amount: 210000 },
          ]}
          credit={[
            { description: 'Balance b/d', amount: 1850000 },
            { description: 'Issue of shares', amount: 480000 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          This account reminds learners that a share issue and a buy-back affect equity differently. The same movements must also be shown correctly in the statement of changes in equity and the cash flow statement.
        </p>
      </div>
    ),
  },
  {
    title: 'High-frequency exam traps',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Common Paper 1 mistakes include treating dividends as expenses, misclassifying financing items in the cash flow statement and forgetting to adjust retained income after dividends. Another frequent error is misreading the audit report.
        </p>
        <p className="text-base leading-7 text-slate-600">
          A final revision checklist should include the headings of all major statements, the treatment of dividends, the meaning of an unqualified audit report and the difference between current and non-current liabilities.
        </p>
      </div>
    ),
  },
  {
    title: 'Ethics and recommendation questions',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Governance answers score best when they are specific. Instead of writing "improve control", recommend appointing more independent directors, disclosing conflicts of interest or strengthening authorisation procedures.
        </p>
        <p className="text-base leading-7 text-slate-600">
          Final-paper recommendation questions are looking for practical judgement. Use the scenario, refer to the stakeholders affected and explain why the recommendation would improve fairness and accountability.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "p1r-1",
    "question": "Retained income is reduced when the company:",
    "options": [
      "issues more shares",
      "declares dividends from profit",
      "purchases inventory",
      "collects from debtors"
    ],
    "answer": 1,
    "explanation": "Dividends are appropriations of profit and reduce retained income."
  },
  {
    "id": "p1r-2",
    "question": "An issue of ordinary shares will increase:",
    "options": [
      "equity",
      "cost of sales",
      "trade payables",
      "depreciation expense"
    ],
    "answer": 0,
    "explanation": "Issuing ordinary shares increases the company's equity."
  },
  {
    "id": "p1r-3",
    "question": "Audit fees owing at year-end are shown as a:",
    "options": [
      "current liability",
      "current asset",
      "financing inflow",
      "non-current asset"
    ],
    "answer": 0,
    "explanation": "Unpaid audit fees are accrued expenses and therefore current liabilities."
  },
  {
    "id": "p1r-4",
    "question": "A repurchase of the company's own shares will usually:",
    "options": [
      "increase shareholders' equity",
      "reduce shareholders' equity",
      "increase sales",
      "create output VAT"
    ],
    "answer": 1,
    "explanation": "A share buy-back uses company resources and usually reduces equity."
  },
  {
    "id": "p1r-5",
    "question": "Earnings per share is based on profit attributable to ordinary shareholders divided by:",
    "options": ['weighted average number of ordinary shares', 'number of directors serving on the company board', 'total number of employees at year end', 'closing inventory units on hand'],
    "answer": 0,
    "explanation": "EPS measures earnings earned per ordinary share using the weighted average number of shares."
  },
  {
    "id": "p1r-6",
    "question": "A current ratio above 1:1 generally indicates that:",
    "options": [
      "current liabilities exceed current assets",
      "current assets exceed current liabilities",
      "the business made a loss",
      "the audit report is qualified"
    ],
    "answer": 1,
    "explanation": "A ratio above 1 suggests current assets are more than enough to cover current liabilities."
  },
  {
    "id": "p1r-7",
    "question": "Good governance requires directors to:",
    "options": ['hide conflicts of interest from shareholders and the board to avoid scrutiny', 'act in the best interests of the company and disclose conflicts', 'focus on short-term bonuses for themselves', 'remove external audits to save costs'],
    "answer": 1,
    "explanation": "Directors must act responsibly and disclose conflicts to protect stakeholders."
  },
  {
    "id": "p1r-8",
    "question": "Depreciation is added back in the cash flow statement because it is:",
    "options": [
      "a non-cash expense",
      "a financing inflow",
      "an investing outflow",
      "part of current liabilities"
    ],
    "answer": 0,
    "explanation": "Depreciation reduced accounting profit without reducing cash, so it is added back."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const Paper1Revision = () => (
  <CapsSubjectTopic
    title="Paper 1 Revision"
    subtitle="Companies, cash flow, financial indicators and governance for final exam readiness"
    learnSteps={learnSteps}
    task="gr12-paper-1-revision-t4"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default Paper1Revision;
