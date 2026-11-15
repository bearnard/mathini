'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Use marks, verbs and figures',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          In the NSC Accounting exam, the question verb tells you what the marker wants. Calculate requires a correct figure and method, while explain or comment requires a judgement supported by evidence from the scenario.
        </p>
        <FinancialStatement
          title="Exam Layout Check"
          period="Paper 1 quick revision"
          sections={[
            {
              heading: 'Use the figures as evidence',
              lines: [
                { label: 'Current assets', amount: 1260000 },
                { label: 'Current liabilities', amount: 540000 },
                { label: 'Current ratio', amount: 2.33, note: 'to 1' },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          A strong comment would say that liquidity is sound because current assets cover current liabilities about 2.33 times. It would not stop at writing down the formula only.
        </p>
      </div>
    ),
  },
  {
    title: 'Protect easy marks',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Easy marks are often lost through wrong signs, missing labels and confusion between VAT-inclusive and VAT-exclusive figures. Build a checking routine that catches those errors before you move on.
        </p>
        <TAccount
          title="Bank Account Checkpoint"
          debit={[
            { description: 'Outstanding deposit recorded', amount: 18600 },
            { description: 'Direct deposit by debtor', amount: 12850 },
          ]}
          credit={[
            { description: 'Bank charges', amount: 780 },
            { description: 'Unpresented cheque no. 426', amount: 12820 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Before finalising a reconciliation answer, check whether each item belongs in the cashbook or in the reconciliation statement. That one distinction protects several marks at once.
        </p>
      </div>
    ),
  },
  {
    title: 'Revision with understanding',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Memorising isolated facts is not enough. Learners should understand why a ratio changes, why a budget can show profit but still forecast a cash shortfall, and why weak internal control creates risk.
        </p>
        <p className="text-base leading-7 text-slate-600">
          The best revision method is to compare linked topics side by side: inventory and gross profit, depreciation and cash flow, VAT and source documents, or governance and shareholder confidence.
        </p>
      </div>
    ),
  },
  {
    title: 'Professional judgement and ethics',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Final answers should sound like responsible accountants. Use evidence, communicate clearly and recommend realistic actions such as stronger segregation of duties, better document control or faster follow-up on unusual items.
        </p>
        <p className="text-base leading-7 text-slate-600">
          Whether the scenario is about stock losses, VAT fraud or governance, exam success comes from combining technical accuracy with fairness, accountability and practical business sense.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "ers-1",
    "question": "When asked to comment on a financial indicator, the strongest answer will:",
    "options": [
      "repeat the formula only",
      "use the figures from the question as evidence",
      "avoid mentioning numbers",
      "copy the question without analysis"
    ],
    "answer": 1,
    "explanation": "Interpretation answers score best when they use the actual figures as evidence for the comment."
  },
  {
    "id": "ers-2",
    "question": "Which internal control weakness is most serious for inventory?",
    "options": ['One person ordering, receiving and recording stock alone', 'Locking the storeroom after working hours and keeping the key safe', 'Locking the storeroom after working hours', 'Doing regular stock counts by different staff'],
    "answer": 0,
    "explanation": "Allowing one person to control the full process weakens segregation of duties and increases fraud risk."
  },
  {
    "id": "ers-3",
    "question": "A company with very high gearing usually faces:",
    "options": [
      "lower financial risk",
      "greater financial risk",
      "automatic VAT refunds",
      "zero finance costs"
    ],
    "answer": 1,
    "explanation": "High gearing means greater reliance on debt, which increases financial risk."
  },
  {
    "id": "ers-4",
    "question": "Buying equipment for cash is classified in the cash flow statement as a(n):",
    "options": [
      "investing outflow",
      "operating inflow",
      "financing inflow",
      "current liability"
    ],
    "answer": 0,
    "explanation": "The purchase of a non-current asset uses cash in the investing section."
  },
  {
    "id": "ers-5",
    "question": "An unqualified audit report means the financial statements are:",
    "options": ['materially fair according to the auditor', 'free of any minor error in the accounting records', 'guaranteed to contain no fraud at all', 'prepared and approved by SARS officials'],
    "answer": 0,
    "explanation": "An unqualified report means the auditor believes the statements are fairly presented in all material respects."
  },
  {
    "id": "ers-6",
    "question": "If a business expects a cash shortfall in a budget, management should:",
    "options": [
      "ignore it because profit may still be good",
      "plan how to finance or reduce the shortfall",
      "declare more dividends immediately",
      "write down fixed assets to zero"
    ],
    "answer": 1,
    "explanation": "A forecast shortfall should be addressed through planning, such as cutting costs, collecting faster or arranging finance."
  },
  {
    "id": "ers-7",
    "question": "When extracting VAT from a VAT-inclusive amount, the correct fraction at 15% is:",
    "options": [
      "15/100",
      "100/115",
      "15/115",
      "115/15"
    ],
    "answer": 2,
    "explanation": "To extract the VAT portion from an inclusive amount at 15%, multiply by 15/115."
  },
  {
    "id": "ers-8",
    "question": "Which exam habit best protects marks in Accounting?",
    "options": ['Skipping labels and headings on the answer sheet to save time during the paper', 'Checking whether the amount is VAT-inclusive or exclusive before calculating', 'Ignoring the mark allocation next to each question', 'Answering interpretation questions without using figures'],
    "answer": 1,
    "explanation": "Many avoidable errors come from using the wrong VAT basis, so checking this first protects marks."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const ExamReadinessStrategies = () => (
  <CapsSubjectTopic
    title="Exam Readiness Strategies"
    subtitle="Final CAPS consolidation, common pitfalls and evidence-based answering in Grade 12 Accounting"
    learnSteps={learnSteps}
    task="gr12-exam-readiness-strategies-t4"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default ExamReadinessStrategies;
