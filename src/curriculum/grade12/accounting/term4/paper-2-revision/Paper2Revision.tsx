'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Core Paper 2 content',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Paper 2 combines calculation-heavy topics with internal control and interpretation. Learners should revise inventory, fixed assets, manufacturing, reconciliations, VAT and budgeting as one connected set of skills.
        </p>
        <FinancialStatement
          title="Paper 2 Revision Snapshot"
          period="Final exam preparation"
          sections={[
            {
              heading: 'Key figures to connect',
              lines: [
                { label: 'Closing inventory', amount: 269500 },
                { label: 'Cost of finished goods produced', amount: 1006000 },
                { label: 'Carrying value of vehicles', amount: 944000 },
                { label: 'VAT payable', amount: 34800 },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Revision becomes more effective when these topics are linked. Inventory affects gross profit, manufacturing affects unit cost, and fixed-asset decisions affect both depreciation and budgeting.
        </p>
      </div>
    ),
  },
  {
    title: 'Control and ethics emphasis',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Paper 2 questions often test whether learners can identify control weaknesses and suggest practical improvements. Reconciliations, stock counts, asset registers and VAT documentation are all important control tools.
        </p>
        <TAccount
          title="VAT Control"
          debit={[
            { description: 'Input VAT on purchases', amount: 48600 },
            { description: 'Input VAT on stationery', amount: 2250 },
          ]}
          credit={[
            { description: 'Output VAT on sales', amount: 85650 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          This account is useful revision because it depends on correct documents, accurate calculations and honest reporting. Ethical behaviour is part of technical accuracy in Accounting.
        </p>
      </div>
    ),
  },
  {
    title: 'Method and layout under pressure',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          In Paper 2, learners lose marks when they jump straight to an answer without setting out the method. Label workings clearly, update the books before drawing up a reconciliation and decide on VAT treatment before calculating.
        </p>
        <p className="text-base leading-7 text-slate-600">
          A calm routine matters: identify the topic, choose the correct format, list the known figures and then work step by step. This reduces sign errors and helps markers award method marks even if the final answer is not perfect.
        </p>
      </div>
    ),
  },
  {
    title: 'Integrated final revision',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Integrated revision prepares learners for unfamiliar scenarios. A stock loss may influence gross profit, a new machine may affect depreciation and cash planning, and an inefficient factory may push up unit cost and reduce projected profit.
        </p>
        <p className="text-base leading-7 text-slate-600">
          The goal is to think like an accountant: use figures, identify the risk, explain the effect and recommend a realistic response. That combination is what final examination questions reward most consistently.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "p2r-1",
    "question": "Under FIFO, the closing inventory usually consists of the:",
    "options": [
      "newest units on hand",
      "oldest units on hand",
      "damaged units only",
      "units returned by debtors only"
    ],
    "answer": 0,
    "explanation": "FIFO assumes the oldest units are sold first, so the newest units remain in ending inventory."
  },
  {
    "id": "p2r-2",
    "question": "Carrying value of a fixed asset equals:",
    "options": [
      "cost price - accumulated depreciation",
      "cost price + accumulated depreciation",
      "selling price - VAT",
      "proceeds - profit on sale"
    ],
    "answer": 0,
    "explanation": "Carrying value is the undepreciated portion of the asset's cost."
  },
  {
    "id": "p2r-3",
    "question": "Bank charges appearing on the bank statement but not in the cashbook will:",
    "options": ['increase the cashbook bank balance when the charges are recorded', 'decrease the cashbook bank balance when recorded', 'increase the ordinary share capital', 'reduce the cost of inventory on hand'],
    "answer": 1,
    "explanation": "Bank charges reduce the amount in the Bank account, so the cashbook bank balance must be decreased."
  },
  {
    "id": "p2r-4",
    "question": "A difference in a creditors reconciliation may be caused by:",
    "options": ['an unrecorded supplier invoice or credit note', 'a dividend declaration made by the directors in March', 'a dividend declaration by directors', 'depreciation on land and buildings'],
    "answer": 0,
    "explanation": "Missing supplier documents are common reasons why the supplier statement and business records disagree."
  },
  {
    "id": "p2r-5",
    "question": "Input VAT may only be claimed when there is usually a:",
    "options": ['valid tax invoice from a registered vendor', 'share certificate issued to the owner of the business', 'signed letter from the company secretary', 'debt-equity ratio below 1 for the year'],
    "answer": 0,
    "explanation": "A valid tax invoice is essential evidence for claiming input VAT."
  },
  {
    "id": "p2r-6",
    "question": "Prime cost excludes:",
    "options": [
      "direct materials",
      "direct labour",
      "factory overhead",
      "none of the above"
    ],
    "answer": 2,
    "explanation": "Prime cost includes only direct materials and direct labour; factory overhead is separate."
  },
  {
    "id": "p2r-7",
    "question": "Depreciation is normally excluded from a cash budget because it is:",
    "options": [
      "an asset",
      "non-cash",
      "illegal",
      "paid only by shareholders"
    ],
    "answer": 1,
    "explanation": "Cash budgets include actual cash movements, and depreciation is not a cash payment."
  },
  {
    "id": "p2r-8",
    "question": "Inventory should be written down when:",
    "options": [
      "its NRV falls below cost",
      "shares are issued",
      "the current ratio improves",
      "the audit report is unqualified"
    ],
    "answer": 0,
    "explanation": "The lower-of-cost-and-NRV principle requires a write-down when NRV is below cost."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const Paper2Revision = () => (
  <CapsSubjectTopic
    title="Paper 2 Revision"
    subtitle="Inventory, assets, manufacturing, reconciliations, VAT and budgeting before the NSC exam"
    learnSteps={learnSteps}
    task="gr12-paper-2-revision-t4"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default Paper2Revision;
