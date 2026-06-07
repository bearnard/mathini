'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/acc/term2/manufacturing-cost-statements/diagram.webp", alt: "Production Cost Statement" },
    title: 'Main manufacturing cost categories',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Manufacturing accounting separates direct production costs from overheads and from non-factory expenses. Direct materials and direct labour form prime cost because they can be traced straight to the units produced.
        </p>
        <FinancialStatement
          title="Production Cost Statement"
          period="Month ended 31 August 2025"
          sections={[
            {
              heading: 'Prime cost',
              lines: [
                { label: 'Direct materials consumed', amount: 468000 },
                { label: 'Direct labour', amount: 352000 },
                { label: 'Prime cost', amount: 820000, isSubtotal: true },
              ],
            },
            {
              heading: 'Factory overheads',
              lines: [
                { label: 'Factory rent', amount: 86000, indent: 1 },
                { label: 'Indirect materials', amount: 34000, indent: 1 },
                { label: 'Factory insurance', amount: 18000, indent: 1 },
                { label: 'Depreciation on factory equipment', amount: 42000, indent: 1 },
                { label: 'Total factory overheads', amount: 180000, isSubtotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Notice that selling and administration costs are not included here. Advertising and office salaries belong elsewhere, even if the amounts are important for total business profit.
        </p>
      </div>
    ),
  },
  {
    title: 'Cost of production',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Work-in-process connects one period to the next. Opening WIP is added because it belongs to unfinished goods carried in from the previous period, while closing WIP is deducted because those units are not yet complete.
        </p>
        <FinancialStatement
          title="Cost of Finished Goods Produced"
          period="Month ended 31 August 2025"
          sections={[
            {
              heading: 'Final calculation',
              lines: [
                { label: 'Total factory cost', amount: 1000000 },
                { label: 'Add: Opening work-in-process', amount: 74000 },
                { label: 'Less: Closing work-in-process', amount: -68000 },
                { label: 'Cost of finished goods produced', amount: 1006000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          If 5 300 units were completed, the unit cost would be about R189,81 per unit. That figure helps managers judge efficiency, pricing and waste.
        </p>
      </div>
    ),
  },
  {
    title: 'Unit cost and decision-making',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Managers compare unit cost across months to see whether production is becoming more efficient or more expensive. If direct materials or labour rise faster than output, the business may need to renegotiate supplier prices, reduce waste or improve productivity.
        </p>
        <p className="text-base leading-7 text-slate-600">
          In CAPS interpretation questions, do not just say that costs increased. Explain which category increased, by how much, and what that might mean for future pricing and profitability.
        </p>
      </div>
    ),
  },
  {
    title: 'What is excluded from production cost',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Factory overheads are often confused with non-factory costs. A useful check is to ask whether the cost supports production inside the factory or whether it belongs to selling, distribution, administration or finance.
        </p>
        <TAccount
          title="Factory Overheads Control"
          debit={[
            { description: 'Factory rent', amount: 86000 },
            { description: 'Indirect materials', amount: 34000 },
            { description: 'Factory electricity', amount: 27000 },
            { description: 'Depreciation on equipment', amount: 42000 },
          ]}
          credit={[
            { description: 'Transferred to production cost', amount: 189000 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Advertising, office salaries and loan interest do not belong in this account. Putting them here would overstate manufacturing cost and distort the unit cost calculation.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "mcs-1",
    "question": "Prime cost is made up of:",
    "options": [
      "direct materials + direct labour",
      "direct labour + sales",
      "factory overhead + administration",
      "net profit + dividends"
    ],
    "answer": 0,
    "explanation": "Prime cost includes the costs directly traceable to making the product: direct materials and direct labour."
  },
  {
    "id": "mcs-2",
    "question": "Factory rent is classified as a:",
    "options": [
      "selling expense",
      "factory overhead",
      "direct labour cost",
      "current asset"
    ],
    "answer": 1,
    "explanation": "Factory rent supports production but cannot be traced to one unit, so it is a factory overhead."
  },
  {
    "id": "mcs-3",
    "question": "Cost of production is calculated after adjusting total factory cost for:",
    "options": [
      "opening and closing work-in-process",
      "trade receivables only",
      "share issues and dividends",
      "VAT refunds only"
    ],
    "answer": 0,
    "explanation": "Opening WIP is added and closing WIP is deducted to arrive at the cost of finished goods produced."
  },
  {
    "id": "mcs-4",
    "question": "Which item is excluded from the production cost statement?",
    "options": [
      "Indirect materials",
      "Factory insurance",
      "Advertising",
      "Depreciation on factory equipment"
    ],
    "answer": 2,
    "explanation": "Advertising is a selling expense, not a manufacturing cost."
  },
  {
    "id": "mcs-5",
    "question": "Unit cost is calculated as:",
    "options": [
      "cost of finished goods produced ÷ units completed",
      "sales ÷ units sold",
      "gross profit ÷ trade receivables",
      "factory overhead ÷ number of shareholders"
    ],
    "answer": 0,
    "explanation": "Unit cost measures the production cost per unit completed."
  },
  {
    "id": "mcs-6",
    "question": "Indirect materials are normally treated as:",
    "options": [
      "direct labour",
      "factory overhead",
      "non-current assets",
      "finance cost"
    ],
    "answer": 1,
    "explanation": "Indirect materials assist production but cannot be directly traced to one product, so they are overheads."
  },
  {
    "id": "mcs-7",
    "question": "Wages of workers who directly assemble the product are classified as:",
    "options": [
      "direct labour",
      "factory administration",
      "selling expenses",
      "share capital"
    ],
    "answer": 0,
    "explanation": "Workers directly making the product are part of direct labour."
  },
  {
    "id": "mcs-8",
    "question": "Closing work-in-process is deducted in the production cost statement because it represents:",
    "options": [
      "completed goods sold already",
      "costs of unfinished goods at year-end",
      "payments to shareholders",
      "the VAT payable to SARS"
    ],
    "answer": 1,
    "explanation": "Closing WIP relates to goods not yet completed, so it is removed from the cost of finished production."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const ManufacturingCostStatements = () => (
  <CapsSubjectTopic
    title="Manufacturing Cost Statements"
    subtitle="Prime cost, factory overheads and the cost of producing finished goods"
    learnSteps={learnSteps}
    task="gr12-manufacturing-cost-statements-t2"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default ManufacturingCostStatements;
