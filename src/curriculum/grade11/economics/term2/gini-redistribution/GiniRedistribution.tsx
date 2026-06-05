
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const lorenzData = [
  { share: '20%', equality: 20, lorenz: 3 },
  { share: '40%', equality: 40, lorenz: 8 },
  { share: '60%', equality: 60, lorenz: 18 },
  { share: '80%', equality: 80, lorenz: 42 },
  { share: '100%', equality: 100, lorenz: 100 },
];

const redistributionData = [
  { year: '2019', gini: 0.65, grants: 17.6 },
  { year: '2020', gini: 0.66, grants: 18.1 },
  { year: '2021', gini: 0.64, grants: 18.3 },
  { year: '2022', gini: 0.63, grants: 18.5 },
  { year: '2023', gini: 0.63, grants: 18.7 },
];

const learnSteps: LearnStep[] = [
  {
    title: 'Income Inequality and the Lorenz Curve',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The Lorenz curve compares the cumulative share of income earned with the cumulative share of the population. The further the curve bends away from the diagonal, the more unequal the distribution.
        </p>
        <DataChart
          data={lorenzData}
          series={[
            { key: 'equality', label: 'Perfect equality line', color: '#10b981' },
            { key: 'lorenz', label: 'Lorenz curve', color: '#ef4444' },
          ]}
          xKey="share"
          type="line"
          yLabel="Cumulative income share (%)"
        />
        <p className="text-sm text-slate-500">A bowed Lorenz curve tells us that poorer households receive a much smaller share of income than richer households.</p>
      </div>
    ),
  },
  {
    title: 'The Gini Coefficient',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The Gini coefficient turns the Lorenz curve into a single number between 0 and 1. The closer the value is to 1, the more unequal the country is.
        </p>
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Formula idea</p>
          <p className="mt-1 text-slate-600">Gini = area between the line of equality and the Lorenz curve ÷ total area under the line of equality.</p>
        </div>
        <div className="grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">0</p>
            <p className="mt-1 text-slate-600">Perfect equality.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-800">0.3–0.4</p>
            <p className="mt-1 text-slate-600">Moderate inequality in many welfare states.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">1</p>
            <p className="mt-1 text-slate-600">One person earns everything.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "SA's Inequality Context",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          South Africa&apos;s inequality is shaped by apartheid exclusion, unemployment, unequal asset ownership and a large wage gap between skilled and unskilled workers.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-800">Historical roots</p>
            <p className="mt-1 text-slate-600">Unequal access to land, quality schooling and skilled jobs created long-term structural inequality.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-800">Current structure</p>
            <p className="mt-1 text-slate-600">High unemployment and asset inequality keep income distribution very uneven.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Redistribution Policies and Their Evaluation',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Progressive taxation, social grants, land reform and B-BBEE are major redistribution tools, but deep structural inequality means the Gini falls only slowly.
        </p>
        <DataChart
          data={redistributionData}
          series={[
            { key: 'gini', label: 'Gini coefficient', color: '#8b5cf6' },
            { key: 'grants', label: 'Social grant recipients (millions)', color: '#10b981' },
          ]}
          xKey="year"
          type="line"
          yLabel="Index / millions"
        />
        <p className="text-sm text-slate-500">The chart shows why exam answers should evaluate policy: support expanded, but inequality remained stubbornly high.</p>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'The Lorenz curve shows:',
    options: ['How GDP changes over time', 'The relationship between price and quantity demanded', 'The cumulative distribution of income across a population', 'The relationship between inflation and unemployment'],
    answer: 'The cumulative distribution of income across a population',
    explanation: 'The Lorenz curve plots cumulative population share against cumulative income share to illustrate income inequality.',
  },
  {
    prompt: 'A Gini coefficient of 0 indicates:',
    options: ['Perfect inequality', 'That one person earns all income', 'Perfect equality', 'High unemployment'],
    answer: 'Perfect equality',
    explanation: 'Gini = 0 means every person earns exactly the same income — the Lorenz curve coincides with the line of equality.',
  },
  {
    prompt: "South Africa's Gini coefficient of approximately 0.63 means:",
    options: ['SA has one of the most equal income distributions in the world', 'SA has very low unemployment', 'SA has one of the most unequal income distributions in the world', 'SA\'s Lorenz curve is close to the line of equality'],
    answer: "SA has one of the most unequal income distributions in the world",
    explanation: 'A Gini close to 1 indicates extreme inequality. SA\'s 0.63 ranks among the highest globally.',
  },
  {
    prompt: 'The Gini coefficient is calculated as:',
    options: ['Area B ÷ total triangle area', 'Area A ÷ (Area A + Area B)', 'Total income ÷ population', 'Area A ÷ Area B'],
    answer: 'Area A ÷ (Area A + Area B)',
    explanation: 'Area A is between the line of equality and the Lorenz curve. Gini = A ÷ (A + B), where A + B is the total triangle area.',
  },
  {
    prompt: 'Progressive taxation contributes to income redistribution by:',
    options: ['Applying the same tax rate to all income earners', 'Taxing higher earners at higher rates, raising revenue for social spending', 'Exempting corporations from tax', 'Reducing VAT for luxury goods'],
    answer: 'Taxing higher earners at higher rates, raising revenue for social spending',
    explanation: 'Progressive taxes take a larger percentage from higher incomes, reducing post-tax inequality and funding government services.',
  },
  {
    prompt: "SA's Child Support Grant and Old Age Pension are examples of:",
    options: ['Corporate subsidies', 'Social grants that directly raise the income of the poorest households', 'BEE policies', 'Infrastructure investment'],
    answer: 'Social grants that directly raise the income of the poorest households',
    explanation: 'Social grants transfer income to vulnerable households — over 18 million SA citizens receive some form of social grant.',
  },
  {
    prompt: 'Which historical cause MOST explains South Africa\'s extreme income inequality?',
    options: ['Poor natural resources', 'Apartheid policies that denied black South Africans access to education, skilled jobs and land', 'Low levels of foreign investment', 'Currency instability'],
    answer: 'Apartheid policies that denied black South Africans access to education, skilled jobs and land',
    explanation: 'Apartheid systematically excluded the majority from economic opportunity, creating structural inequality that persists decades later.',
  },
  {
    prompt: 'B-BBEE (Broad-Based Black Economic Empowerment) aims to:',
    options: ['Reduce the corporate tax rate', 'Increase black economic ownership, management and employment opportunities', 'Nationalise all large companies', 'Restrict imports to protect local industry'],
    answer: 'Increase black economic ownership, management and employment opportunities',
    explanation: 'B-BBEE is a policy framework designed to redress apartheid economic exclusion by transforming ownership and management of SA businesses.',
  },
  {
    prompt: 'If the Lorenz curve moves closer to the line of perfect equality, this indicates that:',
    options: ['Inequality has increased', 'Inequality has decreased', 'GDP has fallen', 'Unemployment has risen'],
    answer: 'Inequality has decreased',
    explanation: 'A Lorenz curve closer to the diagonal means income is more evenly distributed — inequality is lower.',
  },
  {
    prompt: 'Despite redistribution policies, SA\'s Gini has not fallen significantly. The BEST explanation is:',
    options: ['Social grants are too generous', 'Structural factors (skills gap, unemployment, asset inequality) are deeply entrenched', 'Taxes are too low on the poor', 'The Lorenz curve is perfectly equal'],
    answer: 'Structural factors (skills gap, unemployment, asset inequality) are deeply entrenched',
    explanation: 'Redistribution addresses symptoms but not underlying structural causes — without addressing skills, employment and asset inequality, the Gini remains high.',
  },
];

const GiniRedistribution = () => (
  <CapsSubjectTopic
    title="Gini Coefficient and Income Redistribution"
    subtitle="Measuring inequality and evaluating policies to reduce it in South Africa"
    learnSteps={learnSteps}
    task="gr11-gini-redistribution-t2"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default GiniRedistribution;
