import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'What are natural resources?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Natural resources</strong> are materials and energy from the environment that humans use for survival and economic benefit.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Categories:</p>
          <p className="text-slate-600">Renewable resources regenerate; non-renewable resources are finite.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Renewable resources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Renewable resources</strong> can be replenished naturally or through human action:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Forests</strong>
            <p className="text-slate-600">Timber, paper, and wildlife habitat; can regenerate if managed sustainably.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Fisheries</strong>
            <p className="text-slate-600">Fish populations; can sustain if harvest rates don't exceed reproduction rates.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Water</strong>
            <p className="text-slate-600">Freshwater; renewable through the water cycle if not overused.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Agricultural land</strong>
            <p className="text-slate-600">Crops; sustainable with proper soil management and rest periods.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Energy sources</strong>
            <p className="text-slate-600">Solar, wind, hydroelectric; constantly available and regenerating.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <strong className="text-cyan-700">Biodiversity</strong>
            <p className="text-slate-600">Wildlife and plants; regenerate if habitats are protected.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Non-renewable resources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Non-renewable resources</strong> are finite; once used, they don't regenerate on human timescales:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Fossil fuels</strong>
            <p className="text-slate-600">Coal, oil, natural gas; formed over millions of years.</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4">
            <strong className="text-gray-700">Metals and minerals</strong>
            <p className="text-slate-600">Gold, copper, iron, diamonds; extracted from deposits.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Radioactive materials</strong>
            <p className="text-slate-600">Uranium for nuclear energy; extremely limited.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Resource importance and scarcity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Understanding resource types is crucial for sustainable planning:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key challenge:</p>
          <p className="text-slate-600">Global demand often exceeds renewable resources' regeneration rates, and non-renewable resources are being depleted rapidly.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Energy Data — South African Electricity Mix',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">This chart compares major energy sources in South Africas electricity system. Coal is still dominant, while renewable energy is growing from a smaller base.</p>
        <DataChart
          data={[
                        { source: 'Coal', share: 80 },
                        { source: 'Renewables', share: 12 },
                        { source: 'Nuclear', share: 4 },
                        { source: 'Gas and diesel', share: 4 },
                      ]}
          xKey="source"
          series={[
                        { key: 'share', label: 'Share of electricity (%)', type: 'bar', color: '#475569' },
                      ]}
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">Comparing renewable and non-renewable sources helps learners think about energy security and sustainability.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What are natural resources?',
    options: ['Only metals', 'Materials and energy from the environment that humans use', 'Only energy', 'Manufactured goods'],
    answer: 'Materials and energy from the environment that humans use',
    explanation: 'Natural resources include both living and non-living materials.',
  },
  {
    prompt: 'What is a renewable resource?',
    options: ['Can only be used once', 'Can be replenished naturally or through human management', 'Never runs out', 'Gets worse over time'],
    answer: 'Can be replenished naturally or through human management',
    explanation: 'Renewable resources regenerate but can be depleted if overused.',
  },
  {
    prompt: 'Which is an example of a renewable resource?',
    options: ['Coal', 'Oil', 'Forests (if sustainably managed)', 'Diamonds'],
    answer: 'Forests (if sustainably managed)',
    explanation: 'Forests can regenerate through natural or managed replanting.',
  },
  {
    prompt: 'What is a non-renewable resource?',
    options: ['Used continuously', 'Finite; doesn\'t regenerate on human timescales', 'Infinite supply', 'Improves with use'],
    answer: 'Finite; doesn\'t regenerate on human timescales',
    explanation: 'Non-renewable resources are depleted by use and won\'t recover.',
  },
  {
    prompt: 'Which is a non-renewable resource?',
    options: ['Sunlight', 'Water', 'Coal', 'Wind energy'],
    answer: 'Coal',
    explanation: 'Coal, formed over millions of years, is finite.',
  },
  {
    prompt: 'Why are fossil fuels considered non-renewable?',
    options: ['They regenerate slowly', 'They took millions of years to form and don\'t regenerate on human timescales', 'They are renewable', 'They increase over time'],
    answer: 'They took millions of years to form and don\'t regenerate on human timescales',
    explanation: 'Fossil fuels are essentially locked into one-use.',
  },
  {
    prompt: 'What determines if a resource is renewable?',
    options: ['Its price', 'Whether it regenerates faster than it\'s consumed', 'Only location', 'Its age'],
    answer: 'Whether it regenerates faster than it\'s consumed',
    explanation: 'A resource can become non-renewable if harvested faster than it regenerates.',
  },
  {
    prompt: 'Can renewable resources become depleted?',
    options: ['Never', 'Yes, if harvested faster than they regenerate', 'Only non-renewable', 'No'],
    answer: 'Yes, if harvested faster than they regenerate',
    explanation: 'Overfishing and deforestation show that renewable resources can be depleted.',
  },
  {
    prompt: 'What is an advantage of renewable energy?',
    options: ['It runs out eventually', 'It\'s continuously available and doesn\'t produce greenhouse gases', 'It\'s limited', 'It only works in deserts'],
    answer: 'It\'s continuously available and doesn\'t produce greenhouse gases',
    explanation: 'Renewable energy is sustainable and environmentally beneficial.',
  },
  {
    prompt: 'Why is sustainable resource use important?',
    options: ['It\'s not', 'To ensure resources are available for future generations', 'To speed up use', 'Only for industry'],
    answer: 'To ensure resources are available for future generations',
    explanation: 'Sustainability balances current use with future needs.',
  },
];

const RenewableNonRenewableResourcesT4 = () => (
  <CapsSubjectTopic
    title="Renewable and Non-Renewable Resources"
    subtitle="Understanding global resource availability"
    learnSteps={learnSteps}
    task="gr9-renewable-non-renewable-resources-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default RenewableNonRenewableResourcesT4;
