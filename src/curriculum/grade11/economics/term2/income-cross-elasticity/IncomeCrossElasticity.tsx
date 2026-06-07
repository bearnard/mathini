
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const incomePatternData = [
  { group: 'Lower income', staple: 68, luxury: 8 },
  { group: 'Middle income', staple: 52, luxury: 18 },
  { group: 'Higher income', staple: 36, luxury: 32 },
];

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/econ/term2/income-cross-elasticity/diagram.webp", alt: "Substitutes and Complements" },
    title: 'Income Elasticity of Demand (YED)',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          YED measures how much quantity demanded changes when income changes. It helps us classify goods as normal, inferior, luxury or necessity goods.
        </p>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-left">
          <p className="font-semibold text-slate-800">Formula</p>
          <p className="mt-1 text-slate-600">YED = % change in quantity demanded ÷ % change in income</p>
        </div>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Normal good</p>
            <p className="mt-1 text-slate-600">YED &gt; 0. Demand rises when income rises.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">Inferior good</p>
            <p className="mt-1 text-slate-600">YED &lt; 0. Demand falls when income rises.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Cross Elasticity of Demand (XED)',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          XED shows how demand for one good reacts when the price of another good changes. Positive values show substitutes; negative values show complements.
        </p>
        <SupplyDemand title="Substitutes and Complements" showShifts={true} />
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Formula</p>
          <p className="mt-1 text-slate-600">XED = % change in demand for good A ÷ % change in price of good B</p>
        </div>
      </div>
    ),
  },
  {
    title: 'SA Consumer Behaviour Applications',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Elasticity helps explain how South African households respond to changing incomes and prices.
        </p>
        <DataChart
          data={incomePatternData}
          series={[
            { key: 'staple', label: 'Budget share on staples (%)', color: '#f59e0b' },
            { key: 'luxury', label: 'Budget share on luxuries (%)', color: '#6366f1' },
          ]}
          xKey="group"
          type="bar"
          yLabel="% of spending"
        />
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-800">Income shock</p>
            <p className="mt-1 text-slate-600">When income falls, households often trade down toward cheaper staples and inferior goods.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-800">Substitution</p>
            <p className="mt-1 text-slate-600">If taxi fares rise, commuters may switch to buses or trains if these are available.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Calculations and Interpretation',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          In exam questions, calculate the value first and then interpret the sign and size of the elasticity coefficient.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">YED example</p>
            <p className="mt-1 text-slate-600">Income rises by 10% and demand for overseas holidays rises by 25%. YED = 2.5, so it is a luxury good.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">XED example</p>
            <p className="mt-1 text-slate-600">Petrol price rises by 20% and car demand falls by 10%. XED = -0.5, so the goods are complements.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'The formula for Income Elasticity of Demand (YED) is:',
    options: ['% change in P ÷ % change in Y', '% change in Qd ÷ % change in Y', '% change in Qs ÷ % change in Qd', '% change in Qd ÷ % change in P'],
    answer: '% change in Qd ÷ % change in Y',
    explanation: 'YED = (% change in quantity demanded) ÷ (% change in income).',
  },
  {
    prompt: 'A good with YED = −0.6 is classified as:',
    options: ['A luxury good', 'A normal necessity', 'An inferior good', 'A complement'],
    answer: 'An inferior good',
    explanation: 'A negative YED indicates an inferior good — as income rises, consumers buy less of it and switch to superior alternatives.',
  },
  {
    prompt: 'Income rises by 20% and demand for air travel rises by 40%. YED = ?',
    options: ['0.5', '2.0', '−2.0', '0.2'],
    answer: '2.0',
    explanation: 'YED = 40% ÷ 20% = 2.0 — a luxury normal good with demand rising proportionally more than income.',
  },
  {
    prompt: 'Minibus taxis and Metrobus services in SA are most likely:',
    options: ['Complements', 'Independent goods', 'Substitutes', 'Inferior and normal goods simultaneously'],
    answer: 'Substitutes',
    explanation: 'When taxi fares rise, commuters switch to Metrobus — a substitute. XED would be positive.',
  },
  {
    prompt: 'Petrol and cars have a negative XED because they are:',
    options: ['Substitutes', 'Inferior goods', 'Complements', 'Public goods'],
    answer: 'Complements',
    explanation: 'Cars and petrol are used together (complements). Rising petrol prices reduce car purchases — negative XED.',
  },
  {
    prompt: 'If the price of butter rises and demand for margarine increases, the XED is:',
    options: ['Negative (complements)', 'Zero (independent)', 'Positive (substitutes)', 'Greater than one (luxury)'],
    answer: 'Positive (substitutes)',
    explanation: 'Butter and margarine are substitutes — a rise in the price of butter increases demand for margarine, giving a positive XED.',
  },
  {
    prompt: 'As township residents in SA earn higher incomes, demand for pap (maize meal) falls. Pap is therefore:',
    options: ['A luxury good', 'A normal good', 'An inferior good', 'A public good'],
    answer: 'An inferior good',
    explanation: 'When income rises and people switch away from a staple food to better alternatives, it is classified as an inferior good.',
  },
  {
    prompt: 'A good with YED between 0 and 1 is classified as:',
    options: ['A luxury good', 'An inferior good', 'A necessity/normal good', 'A complementary good'],
    answer: 'A necessity/normal good',
    explanation: 'YED between 0 and 1 means demand rises with income but less than proportionally — characteristics of a necessity good.',
  },
  {
    prompt: 'XED = 0 between two goods means they are:',
    options: ['Close substitutes', 'Close complements', 'Unrelated goods', 'Both inferior goods'],
    answer: 'Unrelated goods',
    explanation: 'A zero cross-elasticity means a price change in one good has no effect on demand for the other — they are unrelated.',
  },
  {
    prompt: 'A firm selling luxury cars benefits from knowing their product has YED > 1 because:',
    options: ['The cars will remain affordable during recessions', 'Rising consumer incomes will boost demand more than proportionally', 'The firm can lower prices to increase revenue', 'Supply will be perfectly elastic'],
    answer: 'Rising consumer incomes will boost demand more than proportionally',
    explanation: 'YED > 1 (luxury good) means a given income increase generates a larger proportional rise in demand — sales grow strongly in economic booms.',
  },
];

const IncomeCrossElasticity = () => (
  <CapsSubjectTopic
    title="Income and Cross Elasticity of Demand"
    subtitle="Classifying goods using YED and XED, with South African applications"
    learnSteps={learnSteps}
    task="gr11-income-cross-elasticity-t2"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default IncomeCrossElasticity;
