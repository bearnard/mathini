import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Settlements can be urban or rural',
    image: {
      src: '/curriculum/grade6/geo/term4/settlement-patterns/diagram.svg',
      alt: 'urban and rural settlements shown side by side',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>settlement</strong> is a place where people live. <strong>Urban settlements</strong>
          include towns and cities, while <strong>rural settlements</strong> include villages, farms, and small communities.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-sky-50 p-4">
            <strong>Urban</strong><br />many buildings, roads, and services
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong>Rural</strong><br />farms, open land, and fewer houses
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Urban settlements are busy places',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Urban areas usually have a <strong>high population density</strong>. People live close to shops,
          factories, offices, schools, hospitals, and transport routes.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>buildings</span>
          <span className="text-slate-400">+</span>
          <span>roads</span>
          <span className="text-slate-400">+</span>
          <span>services</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Rural settlements use more open space',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Rural areas usually have a <strong>lower population density</strong>. Many people work in farming,
          forestry, fishing, tourism, or travel to nearby towns for services.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Farms</strong><br />crops and animals</div>
          <div className="rounded-xl bg-lime-50 p-4"><strong>Villages</strong><br />small communities</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Open land</strong><br />fewer buildings</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Settlement Data — South African Urbanisation Trend',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Urbanisation is the percentage of people living in towns and cities. This trend shows how South Africa has become more urban over time.</p>
        <DataChart
          data={[
                        { year: 1996, urbanRate: 52 },
                        { year: 2005, urbanRate: 59 },
                        { year: 2015, urbanRate: 65 },
                        { year: 2023, urbanRate: 68 },
                      ]}
          xKey="year"
          series={[
                        { key: 'urbanRate', label: 'Urban population (%)', type: 'line', color: '#0ea5e9' },
                      ]}
          type="line"
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">As urbanisation rises, settlement patterns change from mainly rural villages to larger towns, cities, and metropolitan areas.</p>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What is a settlement?', options: ['A place where people live', 'A type of rainfall', 'A line of latitude', 'A tool for measuring wind'], answer: 'A place where people live', explanation: 'Settlements are places such as villages, towns, cities, and farms where people live.' },
  { prompt: 'Which is an example of an urban settlement?', options: ['A city', 'A cattle farm', 'An isolated farmhouse', 'A small fishing hut'], answer: 'A city', explanation: 'Cities and towns are urban settlements.' },
  { prompt: 'Which is an example of a rural settlement?', options: ['A farming village', 'A city centre', 'A large shopping mall district', 'A busy industrial city'], answer: 'A farming village', explanation: 'Rural settlements are often villages, farms, or small communities in the countryside.' },
  { prompt: 'What is usually found in urban areas?', options: ['Many buildings and services', 'Only crop fields', 'No roads at all', 'No people living nearby'], answer: 'Many buildings and services', explanation: 'Urban places usually have many buildings, roads, shops, schools, and clinics.' },
  { prompt: 'What is usually found in rural areas?', options: ['Open land and fewer houses', 'Only skyscrapers', 'Crowded highways everywhere', 'No natural resources'], answer: 'Open land and fewer houses', explanation: 'Rural areas generally have more open space and lower population density.' },
  { prompt: 'Which job is strongly linked to many rural areas?', options: ['Farming', 'Elevator repair in skyscrapers', 'Underground city train driving', 'Airport tower control only'], answer: 'Farming', explanation: 'Farming is common in rural areas because there is land for crops and animals.' },
  { prompt: 'What does high population density mean?', options: ['Many people live close together', 'People live very far apart', 'There is no settlement', 'Only wild animals live there'], answer: 'Many people live close together', explanation: 'High density means many people live in a small area.' },
  { prompt: 'Why might a rural learner travel to a town?', options: ['To use services not available nearby', 'Because towns have no schools', 'To avoid all shops and clinics', 'Because farms cannot have roads'], answer: 'To use services not available nearby', explanation: 'Some rural areas have fewer specialised services, so people may travel to towns.' },
  { prompt: 'Which description best matches an urban settlement?', options: ['Busy streets, many people, and tall buildings', 'Scattered houses, fields, and livestock', 'No shops, no roads, and no schools', 'Only mountains with no houses'], answer: 'Busy streets, many people, and tall buildings', explanation: 'Urban settlements are usually busier and more built up than rural places.' },
];

const SettlementPatterns = () => (
  <GeoTopic
    title="Urban & Rural Settlements"
    subtitle="How different settlements look and work"
    learnSteps={learnSteps}
    task="settlement-patterns"
    bank={bank}
  />
);

export default SettlementPatterns;
