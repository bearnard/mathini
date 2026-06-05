import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand taxable income and deductions',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Taxation questions begin with income, then consider allowable deductions or exempt amounts before tax is calculated. Learners should distinguish between gross income, taxable income and the final amount paid after rebates.</p>
        <Formula block>{String.raw`\\text{Taxable income} = \\text{gross income} - \\text{allowable deductions}`}</Formula>
        <Formula block>{String.raw`\\text{Tax payable} = \\text{tax before rebate} - \\text{rebate}`}</Formula>
      </div>
    ),
  },
  {
    title: 'Use progressive tax tables step by step',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Progressive tax means different portions of income are taxed at different rates. Work through the lower bracket first and then tax only the part that falls into the higher bracket.</p>
        <Formula block>{String.raw`\\text{Tax before rebate} = \\text{base tax} + (\\text{taxable income} - \\text{bracket threshold}) \\times \\text{rate}`}</Formula>
        <DataChart
          type="bar"
          xKey="bracket"
          data={[
            { bracket: 'R0–237.9k', rate: 18 },
            { bracket: 'R237.9–370.5k', rate: 26 },
            { bracket: 'R370.5–512.8k', rate: 31 },
            { bracket: 'R512.8–673k', rate: 36 },
            { bracket: 'R673–857.9k', rate: 39 },
            { bracket: 'R857.9k+', rate: 41 },
          ]}
          series={[{ key: 'rate', label: 'Tax rate (%)', color: '#ef4444' }]}
          yLabel="Rate (%)"
          height={220}
        />
      </div>
    ),
  },
  {
    title: 'Interpret payslip deductions in context',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">PAYE, UIF and other deductions reduce the amount that reaches the employee. In Mathematical Literacy, you may need to compare gross pay, tax, rebates and net pay on the same document.</p>
        <Formula block>{String.raw`\\text{Net pay} = \\text{gross pay} - \\text{total deductions}`}</Formula>
        <p className="text-lg leading-8 text-slate-600">For 2025 the primary rebate is R17 235, with extra rebates of R9 444 for 65+ and R3 145 for 75+ taxpayers.</p>
      </div>
    ),
  },
  {
    title: 'Connect taxation to everyday decisions',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Tax questions are about more than arithmetic. Learners should explain why overtime increases tax paid or why higher income can move part of earnings into a new bracket without the whole salary being taxed at that top rate.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Explain the effect of rebates after calculating the bracket tax.</li>
          <li>Distinguish between marginal rate and total tax paid.</li>
          <li>Link the final answer to the payslip or budget context.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "taxation-1",
    "question": "A worker earns R180 000 per year and has allowable deductions of R12 000. What is the taxable income?",
    "options": [
      "R168 000",
      "R180 000",
      "R192 000",
      "R12 000"
    ],
    "answer": 0,
    "explanation": "Taxable income = R180 000 − R12 000 = R168 000."
  },
  {
    "id": "taxation-2",
    "question": "Use this simplified table: first R100 000 taxed at 18%, the rest at 26%. What is the tax on an income of R150 000?",
    "options": [
      "R18 000",
      "R26 000",
      "R31 000",
      "R39 000"
    ],
    "answer": 2,
    "explanation": "First R100 000 gives R18 000 tax. The remaining R50 000 at 26% gives R13 000. Total tax = R31 000."
  },
  {
    "id": "taxation-3",
    "question": "If annual tax is R36 000, about how much PAYE is that per month?",
    "options": [
      "R300",
      "R3 000",
      "R3 600",
      "R30 000"
    ],
    "answer": 1,
    "explanation": "R36 000 ÷ 12 = R3 000 per month."
  },
  {
    "id": "taxation-4",
    "question": "VAT is best described as a tax on:",
    "options": [
      "goods and services purchased",
      "only salary income",
      "only savings interest",
      "all exports only"
    ],
    "answer": 0,
    "explanation": "VAT is an indirect tax added to many goods and services."
  },
  {
    "id": "taxation-5",
    "question": "What is the VAT amount on an item priced at R240 excluding VAT?",
    "options": [
      "R24",
      "R36",
      "R40",
      "R276"
    ],
    "answer": 1,
    "explanation": "15% of R240 is R36."
  },
  {
    "id": "taxation-6",
    "question": "A monthly salary is R22 500 with PAYE of R3 400 and UIF of R225. What is the take-home pay?",
    "options": [
      "R18 875",
      "R18 900",
      "R19 100",
      "R25 675"
    ],
    "answer": 0,
    "explanation": "R22 500 − R3 400 − R225 = R18 875."
  },
  {
    "id": "taxation-7",
    "question": "In a progressive tax system, the lower tax bracket is calculated:",
    "options": [
      "after the higher bracket",
      "only if overtime is worked",
      "before the higher bracket portion",
      "only on deductions"
    ],
    "answer": 2,
    "explanation": "You always tax the lower portion first and then move to the higher bracket on the remaining income."
  },
  {
    "id": "taxation-8",
    "question": "An overtime payment of R1 500 is taxed at a marginal rate of 26%. How much tax is paid on the overtime amount?",
    "options": [
      "R260",
      "R390",
      "R650",
      "R1 110"
    ],
    "answer": 1,
    "explanation": "0.26 × R1 500 = R390."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title,
  content: step.content,
}));

const Taxation = () => (
  <CapsSubjectTopic
    title="Finance: Taxation"
    subtitle="Taxable income, deductions and progressive tax tables"
    learnSteps={topicLearnSteps}
    task="gr12-taxation-t3"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default Taxation;
