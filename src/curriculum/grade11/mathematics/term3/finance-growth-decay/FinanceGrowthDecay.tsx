import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';

const learnSteps: LearnStep[] = [
  {
    title: 'Model Growth and Decay Exponentially',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Repeated percentage change is exponential, so multiply by a growth factor each period.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`A = P(1+i)^n`}</Formula>
          <Formula block>{String.raw`A = P(1-i)^n`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => 100 * 1.12 ** x, label: 'growth', color: '#22c55e' },
            { fn: (x: number) => 100 * 0.88 ** x, label: 'decay', color: '#f97316' },
          ]}
          xRange={[0, 8]}
          yRange={[0, 260]}
        />
      </div>
    ),
  },
  {
    title: 'Distinguish Straight-Line and Compound Change',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Straight-line depreciation subtracts the same amount each time, but reducing-balance depreciation multiplies by the same factor.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <Formula block>{String.raw`V = P - nd`}</Formula>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <Formula block>{String.raw`V = P(1-i)^n`}</Formula>
          </div>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => 120 - 10 * x, label: 'straight-line', color: '#6366f1' },
            { fn: (x: number) => 120 * 0.9 ** x, label: 'reducing-balance', color: '#8b5cf6' },
          ]}
          xRange={[0, 8]}
          yRange={[0, 130]}
        />
      </div>
    ),
  },
  {
    title: 'Work with Effective Rates',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">If interest is compounded more than once a year, convert to an effective annual rate before comparing investments.</p>
        <Formula block>{String.raw`i_{\\text{eff} = \\left(1 + \\frac{i_{\\text{nom}}{m}\\right)^m - 1`}</Formula>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4">
            <h4 className="font-semibold text-emerald-700">Quarterly example</h4>
            <Formula block>{String.raw`i_{\\text{eff} = \\left(1 + \\frac{0.12}{4}\\right)^4 - 1`}</Formula>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <h4 className="font-semibold text-cyan-700">Interpretation</h4>
            <p className="text-sm text-slate-600">The effective rate is the true yearly increase after compounding has been taken into account.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'The compound growth formula is:',
    options: ['A = P(1 − i)^n', 'A = P(1 + in)', 'A = P(1 + i)^n', 'A = P + in'],
    answer: 'A = P(1 + i)^n',
    explanation: 'Compound growth: A = P(1 + i)^n. Simple growth uses A = P(1 + in).',
  },
  {
    prompt: 'R10 000 is invested at 8% p.a. compound interest for 3 years. The accumulated amount is closest to:',
    options: ['R12 000', 'R12 597', 'R14 400', 'R11 664'],
    answer: 'R12 597',
    explanation: 'A = 10 000(1.08)³ = 10 000 × 1.259712 ≈ R12 597.',
  },
  {
    prompt: 'Straight-line depreciation reduces an asset\'s value by:',
    options: ['A percentage of its current value', 'A percentage of its previous year value', 'A fixed rand amount each year', 'An increasing amount each year'],
    answer: 'A fixed rand amount each year',
    explanation: 'Straight-line: A = P(1 − in). The depreciation amount (P × i) is constant each year.',
  },
  {
    prompt: 'The compound decay (reducing balance) formula is:',
    options: ['A = P(1 + i)^n', 'A = P − in', 'A = P(1 − in)', 'A = P(1 − i)^n'],
    answer: 'A = P(1 − i)^n',
    explanation: 'Reducing balance depreciation: A = P(1 − i)^n. Each year, i% of the current value is lost.',
  },
  {
    prompt: 'The effective annual rate from a nominal rate of 12% p.a. compounded monthly is approximately:',
    options: ['12.00%', '12.68%', '11.39%', '13.56%'],
    answer: '12.68%',
    explanation: 'EAR = (1 + 0.12/12)^12 − 1 = (1.01)^12 − 1 ≈ 0.1268 = 12.68%.',
  },
  {
    prompt: 'A car worth R200 000 depreciates at 15% p.a. on reducing balance. After 4 years its value is closest to:',
    options: ['R80 000', 'R120 000', 'R104 401', 'R92 000'],
    answer: 'R104 401',
    explanation: 'A = 200 000(1 − 0.15)⁴ = 200 000(0.85)⁴ = 200 000 × 0.52201 ≈ R104 401.',
  },
  {
    prompt: 'Compared to the nominal rate, the effective annual rate is always:',
    options: ['Equal to the nominal rate', 'Less than the nominal rate', 'Greater than the nominal rate when compounding is more than once a year', 'Half the nominal rate'],
    answer: 'Greater than the nominal rate when compounding is more than once a year',
    explanation: 'Each compounding period adds to the base, so EAR > nominal rate when m > 1.',
  },
  {
    prompt: 'R5 000 is invested for 2 years at 10% simple interest per annum. The interest earned is:',
    options: ['R1 000', 'R500', 'R1 100', 'R2 000'],
    answer: 'R1 000',
    explanation: 'Simple interest: I = Prt = 5 000 × 0.10 × 2 = R1 000.',
  },
  {
    prompt: 'Which formula is used for straight-line depreciation?',
    options: ['A = P(1 − i)^n', 'A = P(1 + i)^n', 'A = P(1 − in)', 'A = P(1 + in)'],
    answer: 'A = P(1 − in)',
    explanation: 'Straight-line depreciation: A = P(1 − in). Note: n is not an exponent here.',
  },
];

const FinanceGrowthDecay = () => (
  <CapsSubjectTopic
    title="Finance, Growth and Decay"
    subtitle="Compound interest, depreciation and effective interest rates"
    learnSteps={learnSteps}
    task="gr11-finance-growth-decay-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default FinanceGrowthDecay;
