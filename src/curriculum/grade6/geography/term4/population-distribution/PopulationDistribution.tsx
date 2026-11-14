import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Population is not spread evenly',
    image: {
      src: '/curriculum/grade6/geo/term4/population-distribution/diagram.svg',
      alt: 'map showing densely and sparsely populated areas with dots',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Population distribution</strong> describes how people are spread over an area.
          Some places have many people close together, while other places have only a few people.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong>Dense population</strong><br />many people in a small area
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong>Sparse population</strong><br />few people spread far apart
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Why people live in some places',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          People often settle where there is <strong>water</strong>, <strong>fertile land</strong>,
          <strong> jobs</strong>, transport, schools, and clinics. These services make daily life easier.
        </p>
        <div className="bg-emerald-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>water</span>
          <span className="text-slate-400">+</span>
          <span>jobs</span>
          <span className="text-slate-400">+</span>
          <span>services</span>
          <span className="text-slate-400">→</span>
          <span className="text-emerald-700">more people</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Why some places have few people',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Dry deserts, very steep mountains, poor soils, and places far from roads or services usually
          have <strong>sparser populations</strong>. People may find it harder to farm, travel, or get work there.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-orange-50 p-4"><strong>Dry areas</strong><br />little water</div>
          <div className="rounded-xl bg-stone-100 p-4"><strong>Steep land</strong><br />hard to build</div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Far away</strong><br />few services</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Population Data — Density in South African Provinces',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Population density tells us how many people live in each square kilometre. Provinces with more jobs and services usually have much higher densities.</p>
        <DataChart
          data={[
                        { province: 'Gauteng', density: 890 },
                        { province: 'KwaZulu-Natal', density: 140 },
                        { province: 'Limpopo', density: 48 },
                        { province: 'Northern Cape', density: 4 },
                      ]}
          xKey="province"
          series={[
                        { key: 'density', label: 'People per km²', type: 'bar', color: '#f59e0b' },
                      ]}
          yLabel="People per km²"
          height={220}
        />

        <p className="text-sm text-slate-500">Dense populations often form where transport routes, industries, and major cities are concentrated.</p>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What does population distribution describe?', options: ['How people are spread over an area', 'How rivers flow to the sea', 'How mountains are formed', 'How weather changes each day'], answer: 'How people are spread over an area', explanation: 'Population distribution shows where people live and how closely they are grouped.' },
  { prompt: 'What does a densely populated area have?', options: ['Many people living close together', 'No people at all', 'Only farms and no towns', 'Very few houses spread far apart'], answer: 'Many people living close together', explanation: 'Dense population means many people live in a relatively small area.' },
  { prompt: 'What does a sparsely populated area have?', options: ['Few people spread over a large area', 'Tall buildings on every street', 'Many factories in one place', 'Crowded trains all day'], answer: 'Few people spread over a large area', explanation: 'Sparse population means there are not many people for the size of the area.' },
  { prompt: 'Which factor often attracts people to settle in a place?', options: ['Reliable water supply', 'Very poor soil', 'No roads or transport', 'Dangerous steep slopes'], answer: 'Reliable water supply', explanation: 'Water is needed for drinking, farming, homes, and businesses.' },
  { prompt: 'Which place is likely to be sparsely populated?', options: ['A dry desert far from services', 'A city centre with many jobs', 'A town beside a harbour', 'A farming valley with water'], answer: 'A dry desert far from services', explanation: 'Deserts usually have little water, so fewer people can live there easily.' },
  { prompt: 'Why do many people live in cities?', options: ['Cities often have jobs and services', 'Cities have more farmland for growing food', 'Housing in cities is always free', 'Cities are much quieter than rural areas'], answer: 'Cities often have jobs and services', explanation: 'Jobs, schools, clinics, shops, and transport can attract people to cities.' },
  { prompt: 'Which map symbol could show population distribution?', options: ['Dots representing groups of people', 'Arrows showing wind direction only', 'Blue lines showing rivers only', 'Triangles showing mountain peaks only'], answer: 'Dots representing groups of people', explanation: 'Dots can show where people are concentrated or spread out on a map.' },
  { prompt: 'What is one reason steep mountain areas may have fewer people?', options: ['It is harder to build roads and houses', 'There is always more flat land', 'All jobs are found there', 'The soil is always fertile'], answer: 'It is harder to build roads and houses', explanation: 'Steep slopes make building, farming, and transport more difficult.' },
  { prompt: 'If a new mine or factory opens, what may happen nearby?', options: ['More people may move there for work', 'All people must leave immediately', 'The area becomes an ocean', 'Schools and roads disappear'], answer: 'More people may move there for work', explanation: 'Work opportunities can attract people and increase population density.' },
];

const PopulationDistribution = () => (
  <GeoTopic
    title="Population Distribution"
    subtitle="How people are spread across places"
    learnSteps={learnSteps}
    task="population-distribution"
    bank={bank}
  />
);

export default PopulationDistribution;
