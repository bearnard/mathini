import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import Formula from '../../../../../components/subjects/Formula';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/acc/term2/partnership-ratio-analysis/diagram.webp", alt: "Source Figures for Ratio Analysis" },
    title: 'Why calculate financial ratios?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Financial ratios convert raw rand amounts into <strong>comparable indicators</strong> that reveal how well a partnership is performing, whether it can pay its debts, and how much each partner earns on their investment.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Profitability</strong>
            <p className="text-slate-600">Is the business earning a good return?</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Liquidity</strong>
            <p className="text-slate-600">Can the business pay short-term debts?</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Solvency</strong>
            <p className="text-slate-600">Is the business financially stable long-term?</p>
          </div>
        </div>
        <FinancialStatement
          title="Source Figures for Ratio Analysis"
          period="Year ended 29 February 2024"
          sections={[
            {
              heading: 'Income statement extract',
              lines: [
                { label: 'Sales', amount: 900000 },
                { label: 'Cost of sales', amount: -540000 },
                { label: 'Gross profit', amount: 360000, isSubtotal: true },
                { label: 'Operating expenses', amount: -210000 },
                { label: 'Net profit', amount: 150000, isTotal: true },
              ],
            },
            {
              heading: 'Statement of financial position extract',
              lines: [
                { label: 'Inventory', amount: 80000 },
                { label: 'Other current assets', amount: 160000 },
                { label: 'Current liabilities', amount: 120000 },
                { label: 'Total liabilities', amount: 300000 },
                { label: 'Total equity', amount: 420000 },
                { label: 'Total assets', amount: 720000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Profitability ratios',
    content: (
      <div className="space-y-4 text-center">
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Gross profit percentage</strong>
            <Formula block>{String.raw`\text{Gross Profit \%} = \frac{\text{Gross Profit}}{\text{Sales}} \times 100`}</Formula>
            <p className="text-slate-600 text-sm">What percentage of sales remains after cost of sales.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Net profit percentage</strong>
            <Formula block>{String.raw`\text{Net Profit \%} = \frac{\text{Net Profit}}{\text{Sales}} \times 100`}</Formula>
            <p className="text-slate-600 text-sm">What percentage of sales remains after all expenses.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Return on equity (ROE)</strong>
            <Formula block>{String.raw`\text{ROE} = \frac{\text{Net Profit}}{\text{Average Equity}} \times 100`}</Formula>
            <p className="text-slate-600 text-sm">Return earned on the total owners' investment.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <strong className="text-cyan-700">Return on partner's equity</strong>
            <Formula block>{String.raw`\text{Partner's Return} = \frac{\text{Partner's Share}}{\text{Partner's Average Equity}} \times 100`}</Formula>
            <p className="text-slate-600 text-sm">Return earned on that individual partner's investment.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Liquidity ratios',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Liquidity ratios measure the ability to meet <strong>short-term obligations</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Current ratio</strong>
            <Formula block>{String.raw`\text{Current Ratio} = \frac{\text{Current Assets}}{\text{Current Liabilities}}`}</Formula>
            <p className="text-slate-600 text-sm">Benchmark: approximately 2:1. Measures ability to pay current debts from current assets.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Acid-test ratio (Quick ratio)</strong>
            <Formula block>{String.raw`\text{Acid-Test Ratio} = \frac{\text{Current Assets} - \text{Inventory}}{\text{Current Liabilities}}`}</Formula>
            <p className="text-slate-600 text-sm">Benchmark: approximately 1:1. Excludes inventory as it is less liquid.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Solvency and debt ratios',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Solvency ratios measure the long-term financial stability of the partnership.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Debt-to-equity ratio</strong>
            <Formula block>{String.raw`\text{Debt-to-Equity Ratio} = \frac{\text{Total Liabilities}}{\text{Total Equity}}`}</Formula>
            <p className="text-slate-600 text-sm">Shows how much debt is used relative to owners' funds. Lower is generally safer.</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">Solvency ratio</strong>
            <Formula block>{String.raw`\text{Solvency Ratio} = \frac{\text{Total Assets}}{\text{Total Liabilities}}`}</Formula>
            <p className="text-slate-600 text-sm">A ratio above 1:1 means assets exceed liabilities — the business is solvent.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'A partnership has gross profit of R120 000 and sales of R400 000. The gross profit percentage is:',
    options: ['25%', '30%', '33%', '40%'],
    answer: '30%',
    explanation: '(R120 000 ÷ R400 000) × 100 = 30%.',
  },
  {
    prompt: 'The current ratio is calculated as:',
    options: [
      'Current liabilities ÷ Current assets',
      'Current assets ÷ Current liabilities',
      'Total assets ÷ Total liabilities',
      'Net profit ÷ Total equity',
    ],
    answer: 'Current assets ÷ Current liabilities',
    explanation: 'The current ratio measures how many rands of current assets are available for every rand of current liabilities.',
  },
  {
    prompt: 'Why is inventory excluded from the acid-test (quick) ratio?',
    options: [
      'Inventory is not owned by the partnership',
      'Inventory cannot be converted to cash quickly enough to pay urgent debts',
      'Inventory is a non-current asset',
      'Inventory has no value',
    ],
    answer: 'Inventory cannot be converted to cash quickly enough to pay urgent debts',
    explanation: 'Inventory must be sold before it becomes cash. The acid-test ratio focuses on truly liquid assets.',
  },
  {
    prompt: 'A current ratio of 1.2:1 suggests the partnership:',
    options: [
      'Has excellent liquidity with far more assets than liabilities',
      'Has slightly more current assets than current liabilities but may struggle to pay debts comfortably',
      'Is insolvent',
      'Has no short-term debts',
    ],
    answer: 'Has slightly more current assets than current liabilities but may struggle to pay debts comfortably',
    explanation: 'A ratio below the benchmark of 2:1 indicates limited liquidity — the business has only R1.20 of current assets for every R1.00 of current liabilities.',
  },
  {
    prompt: 'Return on equity (ROE) measures:',
    options: [
      'The gross profit earned on sales',
      'The percentage return earned on the owners\' total investment in the business',
      'How quickly debtors pay their accounts',
      'The percentage of assets financed by debt',
    ],
    answer: 'The percentage return earned on the owners\' total investment in the business',
    explanation: 'ROE = (Net profit ÷ Average equity) × 100. It shows how effectively partners\' capital is generating profit.',
  },
  {
    prompt: 'Partner A has average equity of R200 000 and received total income from the appropriation of R30 000. Partner A\'s return on equity is:',
    options: ['6.67%', '15%', '10%', '20%'],
    answer: '15%',
    explanation: '(R30 000 ÷ R200 000) × 100 = 15%.',
  },
  {
    prompt: 'A debt-to-equity ratio of 2:1 means:',
    options: [
      'The business has twice as much equity as debt',
      'The business has twice as much debt as equity',
      'The business has no liabilities',
      'The business is solvent with no risk',
    ],
    answer: 'The business has twice as much debt as equity',
    explanation: 'Debt-to-equity = Total liabilities ÷ Total equity. A ratio of 2:1 means creditors finance R2 for every R1 of owner funds — high financial risk.',
  },
  {
    prompt: 'The solvency ratio is calculated as:',
    options: [
      'Current assets ÷ Current liabilities',
      'Total assets ÷ Total liabilities',
      'Net profit ÷ Sales',
      'Equity ÷ Total assets',
    ],
    answer: 'Total assets ÷ Total liabilities',
    explanation: 'The solvency ratio shows whether total assets exceed total liabilities. A ratio above 1:1 means the business is solvent.',
  },
  {
    prompt: 'A net profit percentage has decreased from 18% to 12% compared to last year. This could be caused by:',
    options: [
      'A decrease in operating expenses',
      'An increase in sales revenue',
      'An increase in operating expenses relative to sales',
      'A decrease in cost of sales',
    ],
    answer: 'An increase in operating expenses relative to sales',
    explanation: 'A falling net profit % indicates that expenses are growing faster than revenue, squeezing the profit margin.',
  },
  {
    prompt: 'Which ratio best indicates whether a business can pay its long-term debts from its total asset base?',
    options: ['Current ratio', 'Gross profit percentage', 'Solvency ratio', 'Acid-test ratio'],
    answer: 'Solvency ratio',
    explanation: 'The solvency ratio (Total assets ÷ Total liabilities) measures long-term financial stability — whether the asset base covers all obligations.',
  },
];

const PartnershipRatioAnalysis = () => (
  <CapsSubjectTopic
    title="Partnership Ratio Analysis"
    subtitle="Calculating profitability, liquidity, solvency, and return ratios"
    learnSteps={learnSteps}
    task="gr11-partnership-ratio-analysis-t2"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default PartnershipRatioAnalysis;
