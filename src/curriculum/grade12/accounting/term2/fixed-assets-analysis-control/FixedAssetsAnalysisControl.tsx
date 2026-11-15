'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Cost, carrying value and depreciation',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Tangible fixed assets are recorded at cost and then depreciated over their useful lives, except land. Learners must know that carrying value is cost price minus accumulated depreciation and that depreciation is a non-cash expense.
        </p>
        <FinancialStatement
          title="Tangible Assets Note (Extract)"
          period="Year ended 28 February 2025"
          sections={[
            {
              heading: 'Vehicles',
              lines: [
                { label: 'Cost price', amount: 1480000 },
                { label: 'Accumulated depreciation', amount: -536000 },
                { label: 'Carrying value', amount: 944000, isSubtotal: true },
              ],
            },
            {
              heading: 'Equipment',
              lines: [
                { label: 'Cost price', amount: 920000 },
                { label: 'Accumulated depreciation', amount: -318000 },
                { label: 'Carrying value', amount: 602000, isSubtotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          This layout helps you see immediately how much of each asset's cost is still available for future use. In interpretation questions, compare replacement activity with annual depreciation to judge whether the asset base is being renewed.
        </p>
      </div>
    ),
  },
  {
    title: 'Disposals and asset notes',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          On disposal, the cost and accumulated depreciation linked to the asset sold must be removed from the books. The difference between proceeds and carrying value becomes a profit or loss on sale.
        </p>
        <TAccount
          title="Accumulated Depreciation on Vehicles"
          debit={[
            { description: 'Vehicle sold', amount: 124000 },
          ]}
          credit={[
            { description: 'Balance b/d', amount: 460000 },
            { description: 'Depreciation for the year', amount: 98000 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          If the vehicle sold had a cost of R310 000, its carrying value was R186 000. Proceeds above that amount create a profit on sale, while proceeds below it create a loss.
        </p>
      </div>
    ),
  },
  {
    title: 'Interpreting asset management',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Fixed-asset interpretation asks whether the business is replacing assets quickly enough and whether the assets are being used productively. High depreciation with very few additions may suggest an ageing asset base and future repair problems.
        </p>
        <p className="text-base leading-7 text-slate-600">
          On the other hand, strong additions may be positive if the business can afford them and if those new assets improve production capacity, service delivery or long-term profitability.
        </p>
      </div>
    ),
  },
  {
    title: 'Internal control over fixed assets',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good control over fixed assets includes an asset register, numbered labels, approval for purchases and disposals, regular physical inspections and separation of duties between custody and record-keeping.
        </p>
        <p className="text-base leading-7 text-slate-600">
          In ethics questions, explain the risk clearly: weak control can lead to theft, misuse, unrecorded disposals or overstated carrying values in the published financial statements.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "fac-1",
    "question": "The carrying value of a depreciable asset is:",
    "options": [
      "cost price + accumulated depreciation",
      "cost price - accumulated depreciation",
      "selling price - VAT",
      "book value + profit on sale"
    ],
    "answer": 1,
    "explanation": "Carrying value is the portion of cost that has not yet been depreciated."
  },
  {
    "id": "fac-2",
    "question": "Which asset is normally not depreciated?",
    "options": [
      "Vehicles",
      "Equipment",
      "Land",
      "Computers"
    ],
    "answer": 2,
    "explanation": "Land is usually regarded as having an unlimited useful life, so it is not depreciated."
  },
  {
    "id": "fac-3",
    "question": "Under the diminishing-balance method, depreciation is calculated on the asset's:",
    "options": [
      "original cost at the date of purchase of the asset",
      "carrying value at the start of the year",
      "selling price at the end of the year",
      "replacement cost only"
    ],
    "answer": 1,
    "explanation": "The diminishing-balance method applies a fixed rate to the carrying value each year."
  },
  {
    "id": "fac-4",
    "question": "A profit on sale of an asset occurs when the proceeds are:",
    "options": [
      "less than the carrying value",
      "equal to the accumulated depreciation",
      "greater than the carrying value",
      "greater than the original VAT amount only"
    ],
    "answer": 2,
    "explanation": "If the amount received exceeds carrying value, the difference is a profit on sale."
  },
  {
    "id": "fac-5",
    "question": "The fixed asset register should include details such as:",
    "options": ['dividends declared, share capital issued and directors\' fees', 'cost, date acquired and accumulated depreciation', 'bank balance, cheque numbers and deposit dates', 'creditors\' names, addresses and credit limits'],
    "answer": 1,
    "explanation": "The asset register tracks key information needed for control and reporting."
  },
  {
    "id": "fac-6",
    "question": "Depreciation is best described as a:",
    "options": [
      "cash payment made to replace an old asset at year-end",
      "non-cash expense allocating cost over useful life",
      "method of increasing ordinary share capital",
      "type of VAT refund"
    ],
    "answer": 1,
    "explanation": "Depreciation is a non-cash accounting adjustment, not an immediate cash outflow."
  },
  {
    "id": "fac-7",
    "question": "If the business replaces assets faster than they wear out, this usually suggests:",
    "options": [
      "the asset base is being renewed or expanded",
      "all depreciation must stop",
      "inventory is overvalued",
      "trade receivables will fall to zero"
    ],
    "answer": 0,
    "explanation": "Higher replacement activity generally indicates renewal or expansion of productive capacity."
  },
  {
    "id": "fac-8",
    "question": "Which internal control is most appropriate for fixed assets?",
    "options": [
      "Allowing staff to take assets home without records",
      "Keeping custody of assets separate from record-keeping",
      "Recording disposals only when cash is received months later",
      "Ignoring physical inspections"
    ],
    "answer": 1,
    "explanation": "Separating custody from record-keeping reduces the risk of theft and concealment."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const FixedAssetsAnalysisControl = () => (
  <CapsSubjectTopic
    title="Fixed Assets: Analysis and Control"
    subtitle="Depreciation, carrying value, disposals and internal control over tangible assets"
    learnSteps={learnSteps}
    task="gr12-fixed-assets-analysis-control-t2"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default FixedAssetsAnalysisControl;
