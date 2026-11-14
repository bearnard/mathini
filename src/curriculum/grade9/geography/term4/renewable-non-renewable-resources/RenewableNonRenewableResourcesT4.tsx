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
    options: ['Metals such as iron and gold that are mined', 'Materials and energy from nature that people use', 'Energy such as sun and wind and nothing else', 'Goods that are made in factories from materials'],
    answer: 'Materials and energy from nature that people use',
    explanation: 'Natural resources include both living and non-living materials.',
  },
  {
    prompt: 'What is a renewable resource?',
    options: ['One that can be used only once and then is gone', 'One that can be replaced naturally or by careful management', 'One that never runs out, however much is used', 'One that gets worse the more that it is used'],
    answer: 'One that can be replaced naturally or by careful management',
    explanation: 'Renewable resources regenerate but can be depleted if overused.',
  },
  {
    prompt: 'Which is an example of a renewable resource?',
    options: ['Coal, which forms from ancient plants', 'Oil, which forms from ancient sea life', 'Forests, if they are managed well', 'Diamonds, which form deep inside the Earth'],
    answer: 'Forests, if they are managed well',
    explanation: 'Forests can regenerate through natural or managed replanting.',
  },
  {
    prompt: 'What is a non-renewable resource?',
    options: ['One that is used all the time by people', 'Finite; it does not renew in human lifetimes', 'One that exists in endless supply', 'One that gets better the more it is used'],
    answer: 'Finite; it does not renew in human lifetimes',
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
    options: ['They form again slowly, within a few years', 'They took millions of years to form and do not renew quickly', 'They are renewable, as new coal forms each year', 'They increase in amount as we use more of them'],
    answer: 'They took millions of years to form and do not renew quickly',
    explanation: 'Fossil fuels are essentially locked into one-use.',
  },
  {
    prompt: 'What determines if a resource is renewable?',
    options: ['How much it costs to buy on the market', 'Whether it renews faster than it is used up', 'Where in the world it is found', 'How old the resource is when it is found'],
    answer: 'Whether it renews faster than it is used up',
    explanation: 'A resource can become non-renewable if harvested faster than it regenerates.',
  },
  {
    prompt: 'Can renewable resources become depleted?',
    options: ['Never, since renewable means that it cannot run out', 'Yes, if they are harvested faster than they renew', 'Only the non-renewable ones can become depleted', 'No, since nature always replaces what is used'],
    answer: 'Yes, if they are harvested faster than they renew',
    explanation: 'Overfishing and deforestation show that renewable resources can be depleted.',
  },
  {
    prompt: 'What is an advantage of renewable energy?',
    options: ['It will run out eventually, like fossil fuels', 'It is always available and gives off no greenhouse gases', 'It is limited, so supply must be rationed', 'It works only in deserts, where the sun is strong'],
    answer: 'It is always available and gives off no greenhouse gases',
    explanation: 'Renewable energy is sustainable and environmentally beneficial.',
  },
  {
    prompt: 'Why is sustainable resource use important?',
    options: ['It is not important, as new resources will be found', 'So that resources are there for future generations', 'It speeds up use so that industry can grow faster', 'It matters to industry and not to ordinary people'],
    answer: 'So that resources are there for future generations',
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
