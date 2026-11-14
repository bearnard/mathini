import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import Formula from '../../../../../components/subjects/Formula';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Moving from calculation to interpretation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Calculating a ratio is only the first step. <strong>Interpretation</strong> means explaining what the number means in context — is it good or bad, and why did it change?
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-amber-700">Three-step interpretation method:</p>
          <ol className="text-slate-600 list-decimal list-inside space-y-1">
            <li><strong>State</strong> the ratio value clearly.</li>
            <li><strong>Explain</strong> what it means (link to a benchmark or prior period).</li>
            <li><strong>Comment</strong> on whether it is favourable or a concern, and what caused it.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Comparing ratios across periods',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A single ratio tells you little on its own. Comparing <strong>current year vs prior year</strong> ratios reveals trends and triggers further questions.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Improving trends (favourable):</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Rising gross profit %</li>
              <li>Current ratio moving toward 2:1</li>
              <li>Increasing ROE for partners</li>
            </ul>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Deteriorating trends (unfavourable):</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Falling net profit %</li>
              <li>Rising debt-to-equity ratio</li>
              <li>Decreasing current ratio below 1:1</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <FinancialStatement
            title="2023 Results"
            period="Year ended 28 February 2023"
            sections={[
              {
                heading: 'Income statement extract',
                lines: [
                  { label: 'Sales', amount: 860000 },
                  { label: 'Cost of sales', amount: -559000 },
                  { label: 'Gross profit', amount: 301000, isSubtotal: true },
                  { label: 'Operating expenses', amount: -197800 },
                  { label: 'Net profit', amount: 103200, isTotal: true },
                ],
              },
            ]}
          />
          <FinancialStatement
            title="2024 Results"
            period="Year ended 29 February 2024"
            sections={[
              {
                heading: 'Income statement extract',
                lines: [
                  { label: 'Sales', amount: 920000 },
                  { label: 'Cost of sales', amount: -533600 },
                  { label: 'Gross profit', amount: 386400, isSubtotal: true },
                  { label: 'Operating expenses', amount: -257600 },
                  { label: 'Net profit', amount: 128800, isTotal: true },
                ],
              },
            ]}
          />
        </div>
      </div>
    ),
  },
  {
    title: 'Partner-specific interpretation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a partnership, it is important to check whether each partner is earning a <strong>fair return</strong> on their investment, and whether the profit-sharing arrangement remains equitable.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-slate-700">Key partner-specific questions:</p>
          <ul className="text-slate-600 list-disc list-inside space-y-1">
            <li>Is Partner A's return on equity higher or lower than Partner B's? Why?</li>
            <li>Are drawings excessive relative to the partner's share of profit?</li>
            <li>Does the current account show a debit balance — indicating the partner owes the business?</li>
            <li>Would the partner be better off investing elsewhere?</li>
          </ul>
        </div>
        <Formula block>{String.raw`\text{Return on Partner's Equity} = \frac{\text{Partner's share of profit}}{\text{Average partner's equity}} \times 100`}</Formula>
        <Formula block>{String.raw`\text{Current Ratio} = \frac{\text{Current Assets}}{\text{Current Liabilities}}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Making recommendations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Exam questions often ask for a <strong>recommendation</strong> — a practical suggestion based on your interpretation. It must be supported by the figures.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Liquidity concern:</strong>
            <p className="text-slate-600">"The current ratio is 0.9:1, which is below 1:1. The partners should reduce drawings and negotiate longer creditor payment terms to improve cash flow."</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Profitability concern:</strong>
            <p className="text-slate-600">"Net profit % fell from 15% to 10%. The partners should review their expense structure, particularly the increase in salary expense, to identify areas for cost reduction."</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'When interpreting a financial ratio, you should:',
    options: ['Only state the number and move on to the next', 'State it, explain it and say if it is favourable', 'Always compare it to a firm in another industry', 'Ignore any change that is less than 5%'],
    answer: 'State it, explain it and say if it is favourable',
    explanation: 'A good interpretation includes the value, a benchmark or comparison, and a reasoned comment about what the figure means for the business.',
  },
  {
    prompt: 'A partnership\'s current ratio fell from 2.4:1 to 1.1:1. This indicates:',
    options: ['The business can now pay its short-term debts more easily', 'Liquidity has fallen sharply and bills may be hard to pay', 'The business has too many long-term assets', 'Net profit has risen sharply'],
    answer: 'Liquidity has fallen sharply and bills may be hard to pay',
    explanation: 'A drop to 1.1:1 means only R1.10 of current assets for every R1.00 of current liabilities — well below the 2:1 benchmark, indicating a liquidity risk.',
  },
  {
    prompt: 'Partner A\'s return on equity is 8% while the bank offers 7% interest. What can you conclude?',
    options: ['Partner A should withdraw all of the capital at once', 'Partner A earns slightly more than the bank, a good sign', 'The partnership should be dissolved at once', "Partner A's capital is far too high for the firm"],
    answer: 'Partner A earns slightly more than the bank, a good sign',
    explanation: 'A return above the bank rate suggests the investment in the partnership is worthwhile, though the margin is narrow and should be monitored.',
  },
  {
    prompt: 'A rising gross profit percentage from 35% to 42% over two years suggests:',
    options: ['The cost of sales is rising faster than sales', 'The operating expenses are far too high', 'The business is controlling its cost of sales better', 'The business has a serious liquidity problem'],
    answer: 'The business is controlling its cost of sales better',
    explanation: 'A higher gross profit % means more of each rand of sales is retained after cost of sales — this is a favourable trend.',
  },
  {
    prompt: 'A partner\'s current account shows a debit balance. What does this mean?',
    options: ['The partner is owed extra funds by the business', 'The partner has drawn more than their share and owes the firm', 'The partnership has made a loss', 'The capital of the partner has increased'],
    answer: 'The partner has drawn more than their share and owes the firm',
    explanation: 'A debit balance in a current account indicates the partner\'s drawings exceeded their earned income — they effectively owe the business.',
  },
  {
    prompt: 'The debt-to-equity ratio increased from 0.5:1 to 1.8:1 over one year. A suitable recommendation is:',
    options: ['Borrow more money to expand the business', 'Cut borrowings and repay debts to bring the ratio down', 'Raise the drawings of the partners', 'No action is needed as it is still below 2:1'],
    answer: 'Cut borrowings and repay debts to bring the ratio down',
    explanation: 'A sharp rise in debt-to-equity increases financial risk. Reducing debt restores confidence for creditors and lowers interest costs.',
  },
  {
    prompt: 'Net profit percentage decreased while gross profit percentage remained stable. The most likely cause is:',
    options: [
      'Cost of sales increased',
      'Sales decreased significantly',
      'Operating expenses increased',
      'Interest income increased',
    ],
    answer: 'Operating expenses increased',
    explanation: 'If gross profit % is stable (cost of sales is under control) but net profit % drops, it means operating expenses have risen between gross and net profit.',
  },
  {
    prompt: 'Which ratio would you use to assess whether a partnership can meet its long-term obligations?',
    options: ['Acid-test ratio', 'Gross profit %', 'Solvency ratio', 'Debtors collection period'],
    answer: 'Solvency ratio',
    explanation: 'The solvency ratio (Total assets ÷ Total liabilities) indicates whether the business has sufficient total resources to cover all its debts in the long run.',
  },
  {
    prompt: 'Partner B contributed more capital than Partner A but both partners earn the same ROE. What can you conclude?',
    options: ['Partner A is the better investor of the two', 'Both earn the same return per rand invested, which is fair', 'Partner B is being treated unfairly', 'Partner A should put in more capital'],
    answer: 'Both earn the same return per rand invested, which is fair',
    explanation: 'Equal ROE means both partners earn the same percentage return on their respective investments — this is fair regardless of capital amount.',
  },
  {
    prompt: 'What is the most appropriate benchmark for the acid-test ratio?',
    options: ['3:1', '0.5:1', '1:1', '2:1'],
    answer: '1:1',
    explanation: 'The acid-test benchmark is approximately 1:1, meaning at least R1 of liquid assets for every R1 of current liabilities.',
  },
];

const PartnershipPerformanceInterpretation = () => (
  <CapsSubjectTopic
    title="Interpreting Partnership Performance"
    subtitle="Explaining ratio results and making evidence-based recommendations"
    learnSteps={learnSteps}
    task="gr11-partnership-performance-interpretation-t2"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default PartnershipPerformanceInterpretation;
