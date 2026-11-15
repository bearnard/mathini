'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Linking Paper 1 and Paper 2 skills',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Trial examinations reward learners who can move confidently between company statements, controls, VAT, manufacturing and budgeting. Revision should therefore focus on connections between topics rather than isolated memorised facts.
        </p>
        <FinancialStatement
          title="Integrated Revision Snapshot"
          period="Grade 12 trial preparation"
          sections={[
            {
              heading: 'Paper 1 focus',
              lines: [
                { label: 'Ordinary share capital', amount: 2120000 },
                { label: 'Retained income', amount: 1326000 },
                { label: 'Cash generated from operations', amount: 1624000 },
              ],
            },
            {
              heading: 'Paper 2 focus',
              lines: [
                { label: 'Closing inventory', amount: 269500 },
                { label: 'Cost of finished goods produced', amount: 1006000 },
                { label: 'VAT payable to SARS', amount: 22050 },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Seeing the figures together helps learners remember that inventory affects gross profit, depreciation affects both profit and interpretation, and VAT influences journals as well as control accounts.
        </p>
      </div>
    ),
  },
  {
    title: 'Common integration points',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Many trial errors happen because learners understand single topics but miss the links between them. A useful example is the VAT control account, which connects source documents, journals, reconciliation and SARS compliance.
        </p>
        <TAccount
          title="VAT Control"
          debit={[
            { description: 'Input VAT on purchases', amount: 64800 },
            { description: 'Input VAT on stationery', amount: 3750 },
            { description: 'VAT paid over to SARS', amount: 12000 },
          ]}
          credit={[
            { description: 'Output VAT on cash and credit sales', amount: 102600 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          This one account draws together calculations, journal processing and ethics. If output VAT is understated or input VAT is claimed without a tax invoice, the control account and the VAT return will both be incorrect.
        </p>
      </div>
    ),
  },
  {
    title: 'Correcting common errors',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Trial revision should target predictable mistakes: mixing up operating and financing cash flows, forgetting that depreciation is non-cash, including advertising in factory overheads, or giving comments without using figures.
        </p>
        <p className="text-base leading-7 text-slate-600">
          A strong checking routine is to confirm headings, signs, VAT basis and whether every recommendation is supported by a reason. Those habits protect marks even when the question feels unfamiliar.
        </p>
      </div>
    ),
  },
  {
    title: 'Exam judgement and ethics',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Trial questions often end with recommendations or ethical judgement. Learners should explain why a control weakness is risky, why a manager's behaviour is unfair, or why a governance decision supports shareholders and other stakeholders.
        </p>
        <p className="text-base leading-7 text-slate-600">
          The best responses sound like a responsible accountant: clear, evidence-based and practical. They do not only identify the problem; they also recommend a realistic way to fix it.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "ter-1",
    "question": "Cash received from a new issue of shares is shown in the cash flow statement as a:",
    "options": [
      "financing inflow",
      "operating outflow",
      "current liability",
      "non-cash item"
    ],
    "answer": 0,
    "explanation": "Share issues raise finance from owners, so they are financing inflows."
  },
  {
    "id": "ter-2",
    "question": "In periods of rising prices, FIFO usually causes cost of sales to be:",
    "options": [
      "higher because newest costs are sold first",
      "lower because older, cheaper units are sold first",
      "equal to sales value",
      "unaffected by inventory prices"
    ],
    "answer": 1,
    "explanation": "FIFO sells the oldest costs first, so cost of sales is usually lower when prices are rising."
  },
  {
    "id": "ter-3",
    "question": "Prime cost consists of:",
    "options": [
      "direct materials and direct labour",
      "factory overhead and admin expenses",
      "sales and cost of sales",
      "share capital and retained income"
    ],
    "answer": 0,
    "explanation": "Prime cost includes the direct costs of manufacturing the product."
  },
  {
    "id": "ter-4",
    "question": "An outstanding deposit is best described as a:",
    "options": [
      "timing difference on a bank reconciliation",
      "finance cost in the statement of comprehensive income",
      "VAT refund from SARS",
      "non-current liability"
    ],
    "answer": 0,
    "explanation": "It is a timing difference because the cashbook shows it before the bank statement does."
  },
  {
    "id": "ter-5",
    "question": "The acid-test ratio excludes:",
    "options": [
      "cash",
      "inventory",
      "trade receivables",
      "bank overdraft"
    ],
    "answer": 1,
    "explanation": "Inventory is excluded to test immediate liquidity more strictly."
  },
  {
    "id": "ter-6",
    "question": "VAT charged on sales by a registered vendor is called:",
    "options": [
      "input VAT",
      "output VAT",
      "capital VAT",
      "contra VAT"
    ],
    "answer": 1,
    "explanation": "The vendor charges output VAT on taxable sales."
  },
  {
    "id": "ter-7",
    "question": "Manipulating depreciation to make profit look better is:",
    "options": [
      "good budgeting",
      "ethical because it helps shareholders",
      "unethical because it misleads users",
      "required by auditors"
    ],
    "answer": 2,
    "explanation": "Changing accounting to mislead users is unethical and undermines reliable reporting."
  },
  {
    "id": "ter-8",
    "question": "In the indirect method of the cash flow statement, the reconciliation starts with:",
    "options": [
      "operating profit before working-capital changes",
      "closing inventory",
      "VAT payable",
      "share capital issued during the year"
    ],
    "answer": 0,
    "explanation": "The indirect reconciliation begins with operating profit before adjustments for non-cash and working-capital items."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const TrialExamRevision = () => (
  <CapsSubjectTopic
    title="Trial Examination Revision"
    subtitle="Integrating company reporting, controls, VAT and budgeting for full-paper practice"
    learnSteps={learnSteps}
    task="gr12-trial-exam-revision-t3"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default TrialExamRevision;
