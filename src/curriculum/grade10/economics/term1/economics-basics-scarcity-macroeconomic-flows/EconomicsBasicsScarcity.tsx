'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/econ/term1/economics-basics-scarcity-macroeconomic-flows/diagram.webp", alt: "Economics Basics, Scarcity and Macroeconomic Flows" },
    title: 'Scarcity, choice and opportunity cost',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Economics begins with scarcity. Human wants are unlimited, but resources are limited, so people, businesses
          and governments must choose how to use what they have. Every choice has an opportunity cost.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Scarcity</strong>
            <p className="mt-1 text-slate-600">The condition where limited resources cannot satisfy all wants fully.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Opportunity cost</strong>
            <p className="mt-1 text-slate-600">The next best alternative that is given up when a choice is made.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Factors of production',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Goods and services are produced by combining land, labour, capital and entrepreneurship. Each factor earns a
          reward and plays a different role in production.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">Land and labour</strong>
            <p className="mt-1 text-slate-600">Natural resources and human effort used in production.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">Capital and entrepreneurship</strong>
            <p className="mt-1 text-slate-600">Tools and machinery plus the risk-taking ability that organises production.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Economic systems and decision-making',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Economic systems answer the questions of what to produce, how to produce and for whom to produce. Market,
          command and mixed systems differ in the role played by the state and private sector.
        </p>
        <div className="rounded-xl bg-amber-50 p-5 text-slate-700">
          South Africa follows a mixed economy, where market forces operate alongside government regulation and service delivery.
        </div>
      </div>
    ),
  },
  {
    title: 'Circular flow and GDP basics',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The circular flow model shows how households, businesses, government and foreign sectors interact. GDP helps
          measure the total value of final goods and services produced in an economy.
        </p>
        <DataChart
          data={[
            { year: '2020', gdp: -6.4 },
            { year: '2021', gdp: 4.9 },
            { year: '2022', gdp: 1.9 },
          ]}
          series={[{ key: 'gdp', label: 'SA GDP Growth (%)', color: '#6366f1' }]}
          xKey="year"
          type="line"
        />
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'What causes scarcity?',
    options: ['A. Unlimited resources', 'B. Limited resources and unlimited wants', 'C. Too many factories only', 'D. Low taxes only'],
    answer: 'B. Limited resources and unlimited wants',
    explanation: 'Scarcity exists because available resources are not enough to satisfy all wants.',
  },
  {
    prompt: 'If a government spends money on roads instead of clinics, the clinics represent the:',
    options: ['A. Demand curve', 'B. Opportunity cost', 'C. Circular flow', 'D. Inflation target'],
    answer: 'B. Opportunity cost',
    explanation: 'Opportunity cost is the next best option that is given up when a choice is made.',
  },
  {
    prompt: 'Which factor of production includes machinery and equipment?',
    options: ['A. Labour', 'B. Land', 'C. Capital', 'D. Entrepreneurship only'],
    answer: 'C. Capital',
    explanation: 'Capital refers to manufactured resources used to produce other goods and services.',
  },
  {
    prompt: 'South Africa is best described as a:',
    options: ['A. Command economy', 'B. Mixed economy', 'C. Traditional economy only', 'D. Barter economy'],
    answer: 'B. Mixed economy',
    explanation: 'South Africa combines market activity with state involvement and regulation.',
  },
  {
    prompt: 'GDP measures the value of:',
    options: ['A. Imported second-hand goods only', 'B. Final goods and services produced in the economy', 'C. Household savings only', 'D. All unpaid work only'],
    answer: 'B. Final goods and services produced in the economy',
    explanation: 'GDP is a measure of production in an economy over a period of time.',
  },
];

export default function EconomicsBasicsScarcity() {
  return (
    <CapsSubjectTopic
      title="Economics Basics, Scarcity and Macroeconomic Flows"
      subtitle="Grade 10 · Economics · Term 1"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-economics-basics-scarcity-macroeconomic-flows"
      apiPath="/api/caps/econ"
      grade={10}
    />
  );
}
