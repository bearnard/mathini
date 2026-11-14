import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Analyse transport and trade systems',
    image: {
      src: '/curriculum/grade8/geo/term4/transport-and-trade/diagram.webp',
      alt: 'Grade 8 learners exploring trade routes, transport modes, and South African harbour links',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Trade depends on transport networks that move people and goods efficiently. Learners compare road, rail, air,
          and sea transport, and connect imports, exports, harbours, and commuter travel to economic activity.
        </p>
      </div>
    ),
  },
  {
    title: 'Transport Data — Freight by Transport Mode',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Trade depends on transport systems. In South Africa, most freight moves by road, with smaller shares on rail and pipelines.</p>
        <DataChart
          data={[
                        { mode: 'Road', share: 76 },
                        { mode: 'Rail', share: 19 },
                        { mode: 'Pipeline', share: 5 },
                      ]}
          xKey="mode"
          series={[
                        { key: 'share', label: 'Share of freight (%)', type: 'bar', color: '#f97316' },
                      ]}
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">When one transport mode carries most freight, bottlenecks on that network can slow trade and raise costs.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why do countries trade with one another?',
    options: ['Because no country can make everything it needs', 'Because trade removes all of the costs of transport', 'Because imports are always free of any charge', 'Because climate has no effect on what is produced'],
    answer: 'Because no country can make everything it needs',
    explanation: 'Trade allows countries to access goods they cannot produce efficiently themselves.',
  },
  {
    prompt: 'What is an import?',
    options: [
      'A product bought from another country',
      'A product sold to another country',
      'A local product sold in the same town',
      'A product moved from one classroom to another',
    ],
    answer: 'A product bought from another country',
    explanation: 'Imports enter a country from abroad.',
  },
  {
    prompt: 'What is an export?',
    options: [
      'A product sold to another country',
      'A product bought from another country',
      'A product used only by farmers',
      'A product that cannot be transported',
    ],
    answer: 'A product sold to another country',
    explanation: 'Exports leave a country to be sold in foreign markets.',
  },
  {
    prompt: 'Which transport mode is usually best for moving heavy bulk goods over long distances on land?',
    options: ['Rail transport', 'Air transport', 'Private car transport', 'Bicycle transport'],
    answer: 'Rail transport',
    explanation: 'Rail is efficient for large, heavy loads over long inland distances.',
  },
  {
    prompt: 'Which South African harbour is one of the busiest container ports?',
    options: ['Durban Harbour', 'Kimberley Harbour', 'Bloemfontein Harbour', 'Polokwane Harbour'],
    answer: 'Durban Harbour',
    explanation: 'Durban is a major South African port handling large container volumes.',
  },
  {
    prompt: 'Which option best describes urban commuter transport?',
    options: [
      'Daily travel by people between home, school, or work',
      'Shipping minerals between continents by cargo ship',
      'Only emergency rescue flights',
      'Transport used once a year for holidays',
    ],
    answer: 'Daily travel by people between home, school, or work',
    explanation: 'Commuter transport supports regular movement within and around cities.',
  },
  {
    prompt: 'When is air transport usually preferred for trade?',
    options: [
      'When goods are high-value, light, or urgently needed',
      'When transporting coal in very large volumes',
      'When no airports exist in either country',
      'When goods are not time-sensitive',
    ],
    answer: 'When goods are high-value, light, or urgently needed',
    explanation: 'Air freight is fast but costly, so it suits urgent or high-value cargo.',
  },
  {
    prompt: 'How do transport networks support trade?',
    options: ['They link producers, markets and ports so goods move easily', 'They stop goods from reaching the markets', 'They remove the need for imports and exports', 'They help movement within one suburb only'],
    answer: 'They link producers, markets and ports so goods move easily',
    explanation: 'Roads, railways, ports, and airports enable reliable movement through supply chains.',
  },
];

const TransportAndTrade = () => (
  <CapsSubjectTopic
    title="Transport and Trade"
    subtitle="Modes of transport, imports and exports, harbours, and commuter systems"
    learnSteps={learnSteps}
    task="gr8-transport-and-trade-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default TransportAndTrade;
