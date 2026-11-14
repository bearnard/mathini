import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Resources help people meet needs',
    image: {
      src: '/curriculum/grade6/geo/term2/resources-value/diagram.webp',
      alt: 'natural resources including a mine forest farm water and solar energy',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Resources</strong> are things people use from the environment or make with skills
          and tools. Natural resources include minerals, forests, soil, water, sunlight, and wind.
        </p>
        <div className="bg-emerald-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>resources</span>
          <span className="text-slate-400">→</span>
          <span className="text-emerald-700">goods and services</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Resources have value',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A resource has <strong>value</strong> when people need it or can use it to make something
          useful. Value can change when a resource is scarce, useful, good quality, or in demand.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4"><strong>Useful</strong><br />helps people</div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Scarce</strong><br />not enough for everyone</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Demand</strong><br />many people want it</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Resources support trade',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa trades resources and products made from resources, such as fruit, minerals,
          energy, and manufactured goods. Resources should be used <strong>sustainably</strong> so future
          generations can also benefit.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-yellow-50 p-4"><strong>Minerals</strong><br />mined from the earth</div>
          <div className="rounded-xl bg-green-50 p-4"><strong>Farming</strong><br />food and fibres</div>
          <div className="rounded-xl bg-blue-50 p-4"><strong>Water and sun</strong><br />support life and energy</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Resource Data — South African Export Value',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Some resources are valuable because they are used widely in energy, transport, and manufacturing. This example compares the export value of major South African resources.</p>
        <DataChart
          data={[
                        { resource: 'Coal', exportValue: 190 },
                        { resource: 'Platinum', exportValue: 260 },
                        { resource: 'Gold', exportValue: 130 },
                        { resource: 'Iron ore', exportValue: 150 },
                      ]}
          xKey="resource"
          series={[
                        { key: 'exportValue', label: 'Export value (R billions)', type: 'bar', color: '#6366f1' },
                      ]}
          yLabel="R billions"
          height={220}
        />

        <p className="text-sm text-slate-500">Large export values show why countries protect and manage important natural resources carefully.</p>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What is a natural resource?', options: ['Something from nature that people use', 'A rule written in a textbook', 'A shop where goods are sold', 'A road sign in a town'], answer: 'Something from nature that people use', explanation: 'Natural resources come from the environment and are useful to people.' },
  { prompt: 'Which group lists only natural resources?', options: ['Water, soil, forests, and minerals', 'Taxis, schools, shops, and banks', 'Books, desks, pencils, and rulers', 'Factories, roads, bridges, and cars'], answer: 'Water, soil, forests, and minerals', explanation: 'Water, soil, forests, and minerals all come from nature.' },
  { prompt: 'Why can a resource become more valuable?', options: ['Many people need it and it is scarce', 'Nobody can use it for anything', 'It is always thrown away', 'It has no demand at all'], answer: 'Many people need it and it is scarce', explanation: 'High demand and scarcity can increase the value of a resource.' },
  { prompt: 'How can farmland be valuable?', options: ['It can produce crops and food', 'It turns sunlight into metal', 'It stops all transport', 'It makes imports unnecessary'], answer: 'It can produce crops and food', explanation: 'Good farmland supports farming, food production, jobs, and trade.' },
  { prompt: 'Which resource is mined from the ground?', options: ['Gold', 'Wheat', 'Grapes', 'Timber'], answer: 'Gold', explanation: 'Gold is a mineral resource found underground and mined.' },
  { prompt: 'Why is water an important resource?', options: ['People, plants, animals, and farms need it', 'It is only used to decorate maps', 'It is never used in industry', 'It cannot be shared between places'], answer: 'People, plants, animals, and farms need it', explanation: 'Water supports life, farming, homes, and many economic activities.' },
  { prompt: 'What does sustainable use of resources mean?', options: ['Using resources carefully so they last', 'Using every resource as fast as possible', 'Never using any resource at all', 'Selling resources without planning'], answer: 'Using resources carefully so they last', explanation: 'Sustainable use protects resources for people now and in the future.' },
  { prompt: 'Which example adds value to a resource?', options: ['Turning grapes into juice for sale', 'Letting ripe fruit rot in the field', 'Selling the raw grapes at a lower price', 'Mixing clean water with dirty water'], answer: 'Turning grapes into juice for sale', explanation: 'Processing a raw resource into a product can increase its value.' },
  { prompt: 'Why do resources support trade?', options: ['They can be sold or made into products', 'They make all countries identical', 'They remove the need for jobs', 'They stop countries from cooperating'], answer: 'They can be sold or made into products', explanation: 'Resources are often traded directly or used to make goods for trade.' },
];

const ResourcesValue = () => (
  <GeoTopic
    title="Resources & Their Value"
    subtitle="Why resources matter for trade"
    learnSteps={learnSteps}
    task="resources-value"
    bank={bank}
  />
);

export default ResourcesValue;
