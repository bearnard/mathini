'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/acc/term3/vat-concepts-control/diagram.webp", alt: "VAT Control" },
    title: 'What VAT is',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          VAT is an indirect tax collected by registered vendors on behalf of SARS. Output VAT is charged on taxable sales, while input VAT is claimed on qualifying purchases supported by a valid tax invoice.
        </p>
        <TAccount
          title="VAT Control"
          debit={[
            { description: 'Input VAT on inventory purchases', amount: 48600 },
            { description: 'Input VAT on stationery', amount: 2250 },
          ]}
          credit={[
            { description: 'Output VAT on cash sales', amount: 58200 },
            { description: 'Output VAT on credit sales', amount: 27450 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Because output VAT exceeds input VAT in this example, the control account will end with a credit balance and the business will owe SARS the difference.
        </p>
      </div>
    ),
  },
  {
    title: 'Basic VAT calculations',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          In South Africa, the standard VAT rate is 15%. To add VAT to an exclusive amount, multiply by 15%. To extract VAT from an inclusive amount, multiply by 15/115.
        </p>
        <FinancialStatement
          title="VAT Calculation Guide"
          period="Standard rate: 15%"
          sections={[
            {
              heading: 'Common calculations',
              lines: [
                { label: 'Goods bought for R23 000 excl. VAT', amount: 3450 },
                { label: 'VAT-inclusive amount of R57 500', amount: 7500, note: 'VAT portion' },
                { label: 'VAT-exclusive value of R57 500', amount: 50000, note: 'inclusive ÷ 1.15' },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Always check whether the amount in the question is VAT-inclusive or VAT-exclusive before calculating. That single habit prevents many avoidable examination errors.
        </p>
      </div>
    ),
  },
  {
    title: 'VAT control account and returns',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The VAT control account summarises the business's relationship with SARS during the period. It combines the VAT from journals so that the final balance can be transferred to the VAT return or settled in cash.
        </p>
        <FinancialStatement
          title="VAT Return Summary"
          period="Two-month period ended 31 August 2025"
          sections={[
            {
              heading: 'Net VAT position',
              lines: [
                { label: 'Total output VAT', amount: 85650 },
                { label: 'Less: Total input VAT', amount: -50850 },
                { label: 'VAT payable to SARS', amount: 34800, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          If the input VAT were higher than the output VAT, SARS would owe the vendor a refund instead. Learners should always interpret the final balance correctly as payable or receivable.
        </p>
      </div>
    ),
  },
  {
    title: 'Compliance and ethics',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          VAT compliance depends on valid source documents, accurate returns and honest reporting of all taxable sales. Claiming input VAT without a tax invoice or hiding sales to reduce output VAT is both unethical and illegal.
        </p>
        <p className="text-base leading-7 text-slate-600">
          Strong internal control includes checking supplier VAT numbers, filing tax invoices carefully and reconciling the VAT control account regularly so that errors are found before the return is submitted to SARS.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "vat-1",
    "question": "Output VAT arises on:",
    "options": [
      "taxable sales by the business",
      "purchases from suppliers only",
      "salaries paid to employees",
      "dividends declared to shareholders"
    ],
    "answer": 0,
    "explanation": "Output VAT is the VAT charged by the vendor on taxable sales."
  },
  {
    "id": "vat-2",
    "question": "Input VAT may generally be claimed on:",
    "options": [
      "purchases from a registered vendor supported by a valid tax invoice",
      "drawings by the owner",
      "dividends paid",
      "unrecorded cash shortages"
    ],
    "answer": 0,
    "explanation": "A valid tax invoice from a registered vendor is normally required to claim input VAT."
  },
  {
    "id": "vat-3",
    "question": "The standard VAT rate in South Africa is:",
    "options": [
      "10%",
      "12%",
      "15%",
      "20%"
    ],
    "answer": 2,
    "explanation": "The standard VAT rate used in CAPS Grade 12 Accounting is 15%."
  },
  {
    "id": "vat-4",
    "question": "If an amount is R115 including VAT, the VAT portion is:",
    "options": [
      "R10",
      "R15",
      "R17,25",
      "R100"
    ],
    "answer": 1,
    "explanation": "VAT included in R115 is R115 × 15/115 = R15."
  },
  {
    "id": "vat-5",
    "question": "When output VAT exceeds input VAT, the business:",
    "options": [
      "must receive a refund from shareholders",
      "owes SARS the difference",
      "owes suppliers more money",
      "must transfer the amount to inventory"
    ],
    "answer": 1,
    "explanation": "More VAT was collected on sales than can be claimed on purchases, so the net amount is payable to SARS."
  },
  {
    "id": "vat-6",
    "question": "Which document is most important when claiming input VAT?",
    "options": [
      "A valid tax invoice",
      "A handwritten note from an employee",
      "The cash budget",
      "The share certificate"
    ],
    "answer": 0,
    "explanation": "A proper tax invoice is the key supporting document for an input VAT claim."
  },
  {
    "id": "vat-7",
    "question": "A credit sale by a registered vendor will normally:",
    "options": [
      "create output VAT even though cash has not yet been received",
      "create only input VAT",
      "have no VAT effect at all",
      "reduce trade receivables"
    ],
    "answer": 0,
    "explanation": "VAT is charged on taxable sales, including credit sales, even before cash is collected."
  },
  {
    "id": "vat-8",
    "question": "A credit balance on the VAT control account usually indicates:",
    "options": [
      "SARS owes the business",
      "the business owes SARS",
      "inventory has been overvalued",
      "there is no VAT for the period"
    ],
    "answer": 1,
    "explanation": "A credit balance means output VAT exceeded input VAT, so the vendor owes SARS."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const VatConceptsControl = () => (
  <CapsSubjectTopic
    title="VAT Concepts and Control"
    subtitle="Input VAT, output VAT, VAT-inclusive calculations and SARS compliance"
    learnSteps={learnSteps}
    task="gr12-vat-concepts-control-t3"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default VatConceptsControl;
