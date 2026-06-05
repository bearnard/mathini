import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import Formula from '@/components/subjects/Formula';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import BudgetPlanner from '@/components/subjects/BudgetPlanner';

const learnSteps: LearnStep[] = [
  {
    title: 'Reading Financial Documents',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          In South Africa, you'll encounter many financial documents: invoices from suppliers, till slips from retailers, bank statements, and municipal accounts. Understanding these is crucial for managing money.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Key Elements of an Invoice</h4>
          <ul className="space-y-2 text-sm">
            <li><strong>Invoice number:</strong> Unique identifier for tracking</li>
            <li><strong>Date:</strong> When the transaction occurred</li>
            <li><strong>Itemized costs:</strong> Individual item prices and quantities</li>
            <li><strong>Subtotal:</strong> Total before VAT</li>
            <li><strong>VAT (15%):</strong> Value-Added Tax</li>
            <li><strong>Total:</strong> Final amount payable</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-2">Example Invoice Calculation:</p>
          <div className="space-y-1 text-sm">
            <p>3 items @ R120 each = R360</p>
            <p>2 items @ R80 each = R160</p>
            <Formula>{String.raw`\text{Subtotal} = 360 + 160 = \text{R}520`}</Formula>
            <Formula>{String.raw`\text{VAT (15\%)} = 520 \times 0.15 = \text{R}78`}</Formula>
            <Formula>{String.raw`\text{Total} = 520 + 78 = \text{R}598`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Understanding Tariff Systems',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Tariff systems are pricing structures used by service providers. In South Africa, you'll see these in municipal services (water, electricity), cell phone contracts, and public transport.
        </p>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">Common Tariff Structures</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">1. Flat Rate + Usage</p>
              <Formula>{String.raw`\text{Cost} = \text{Fixed fee} + (\text{Rate} \times \text{Units used})`}</Formula>
            </div>
            <div>
              <p className="font-medium">2. Block Tariff (Tiered pricing)</p>
              <p className="text-xs">Different rates for different usage levels—common in Eskom electricity billing</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg">
          <p className="font-medium mb-2">Example: MTN Data Plan</p>
          <p className="text-sm">Base fee: R149/month + R2 per MB over 1GB</p>
          <p className="text-sm mb-2">Usage: 1.5 GB = 1500 MB (500 MB over limit)</p>
          <Formula>{String.raw`\text{Total} = 149 + (2 \times 500) = 149 + 1000 = \text{R}1149`}</Formula>
        </div>
      </div>
    ),
  },
  {
    title: 'Interactive Budget Planner',
    content: (
      <div>
        <p className="mb-3 text-sm text-muted-foreground">
          Adjust the income and expense items to explore how income, expenses, and budgeting choices create a surplus or deficit.
        </p>
        <BudgetPlanner />
      </div>
    ),
  },
  {
    title: 'Municipal and Service Charges',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          South African municipalities charge for water, electricity, sewerage, and refuse removal. Understanding how to read and verify these accounts helps you manage household expenses.
        </p>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-3">City of Cape Town Water Tariff Example</h4>
          <div className="space-y-2 text-sm">
            <p>0-6 kℓ: R0 (free basic allocation)</p>
            <p>6-10.5 kℓ: R10.50 per kℓ</p>
            <p>10.5-35 kℓ: R23.12 per kℓ</p>
            <p className="mt-3 font-medium">If you use 12 kℓ in a month:</p>
            <p>• First 6 kℓ: Free = R0</p>
            <p>• Next 4.5 kℓ: 4.5 × R10.50 = R47.25</p>
            <p>• Next 1.5 kℓ: 1.5 × R23.12 = R34.68</p>
            <Formula>{String.raw`\text{Total} = 0 + 47.25 + 34.68 = \text{R}81.93`}</Formula>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Visualising Tariff Increases',
    content: (
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          Municipal tariffs often increase in steps. A chart makes it easier to compare fixed charges and usage charges before deciding which service plan is more affordable.
        </p>
        <DataChart
          data={[
            { month: 'Apr', electricity: 420 },
            { month: 'May', electricity: 450 },
            { month: 'Jun', electricity: 510 },
            { month: 'Jul', electricity: 560 },
          ]}
          series={[{ key: 'electricity', label: 'Electricity bill (R)', color: '#f59e0b' }]}
          xKey="month"
          type="line"
        />
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
          When a graph rises sharply, check whether the increase came from higher usage, a block tariff, or a once-off service fee on the bill.
        </div>
      </div>
    ),
  },
];

const bank: MathematicalLiteracyItem[] = [
  {
    prompt: 'A cell phone plan charges R500 per month plus R2 per MB used. If 1500 MB were used, what is the total bill?',
    options: ['R800', 'R3000', 'R3500', 'R2500'],
    answer: 'R3500',
    explanation: 'Cost = R500 + (R2 × 1500) = R500 + R3000 = R3500',
  },
  {
    prompt: 'An invoice shows R1200 before VAT (15%). What is the total amount including VAT?',
    options: ['R1215', 'R1380', 'R1200', 'R1020'],
    answer: 'R1380',
    explanation: 'VAT = 15% of R1200 = R180. Total = R1200 + R180 = R1380',
  },
  {
    prompt: 'A shop invoice lists: 4 shirts @ R85 each, 2 jeans @ R250 each. What is the subtotal (before VAT)?',
    options: ['R840', 'R750', 'R835', 'R966'],
    answer: 'R840',
    explanation: 'Shirts: 4 × R85 = R340. Jeans: 2 × R250 = R500. Subtotal = R340 + R500 = R840',
  },
  {
    prompt: 'Electricity costs R2.80 per kWh. If a household uses 450 kWh in a month, what is the usage cost?',
    options: ['R1260', 'R1125', 'R1400', 'R1260'],
    answer: 'R1260',
    explanation: 'Cost = 450 × R2.80 = R1260',
  },
];

const FinanceDocumentsTariffSystems = () => (
  <CapsSubjectTopic
    title="Finance: Documents and Tariff Systems"
    subtitle="Financial literacy and billing"
    learnSteps={learnSteps}
    task="gr10-finance-documents-tariff-systems-t2"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={10}
  />
);

export default FinanceDocumentsTariffSystems;
