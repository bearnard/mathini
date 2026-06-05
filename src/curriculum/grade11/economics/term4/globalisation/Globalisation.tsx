
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const globalisationData = [
  { year: '2019', exports: 1510, imports: 1430, fdi: 90 },
  { year: '2020', exports: 1405, imports: 1310, fdi: 70 },
  { year: '2021', exports: 1690, imports: 1545, fdi: 98 },
  { year: '2022', exports: 1820, imports: 1710, fdi: 105 },
  { year: '2023', exports: 1775, imports: 1688, fdi: 94 },
];

const learnSteps: LearnStep[] = [
  {
    title: 'What is Globalisation?',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Globalisation is the increasing integration of national economies through trade, investment, migration, finance and technology.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Trade</p>
            <p className="mt-1 text-slate-600">Countries buy and sell more goods and services across borders.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Capital flows</p>
            <p className="mt-1 text-slate-600">FDI and portfolio investment move across countries more easily.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <p className="font-semibold text-orange-800">Technology</p>
            <p className="mt-1 text-slate-600">Ideas, software and production methods spread rapidly.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-semibold text-purple-800">Migration</p>
            <p className="mt-1 text-slate-600">Workers and skills move between countries, sometimes causing brain drain.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "SA's Trade Frameworks — WTO, BRICS and AGOA",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          South Africa participates in global institutions and trade agreements that shape market access, investment and development finance.
        </p>
        <DataChart
          data={globalisationData}
          series={[
            { key: 'exports', label: 'Exports (R bn)', color: '#6366f1' },
            { key: 'imports', label: 'Imports (R bn)', color: '#10b981' },
            { key: 'fdi', label: 'FDI inflows (R bn)', color: '#ef4444' },
          ]}
          xKey="year"
          type="line"
          yLabel="R billion"
        />
      </div>
    ),
  },
  {
    title: 'The North-South Divide',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The North-South divide describes the gap between richer, industrialised countries and poorer developing countries in income, technology and bargaining power.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-800">Why the gap persists</p>
            <p className="mt-1 text-slate-600">Many poorer economies depend on commodity exports, face debt burdens and import expensive manufactured goods.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-800">Why it matters</p>
            <p className="mt-1 text-slate-600">The gap affects trade terms, technology transfer and long-run development opportunities.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Advantages and Disadvantages of Globalisation for SA',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Globalisation expands export markets and access to technology, but it can also expose local firms to intense competition and allow profits to leave the country.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Advantages</p>
            <p className="mt-1 text-slate-600">FDI, technology transfer, larger markets and cheaper imported inputs can support growth.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">Disadvantages</p>
            <p className="mt-1 text-slate-600">Local industries may lose jobs, skilled workers may emigrate and multinational profits may be repatriated.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'Globalisation is BEST described as:',
    options: ['The process of countries becoming more economically isolated', 'The increasing integration of the world\'s economies through trade, investment, technology and migration', 'Only the movement of people between countries', 'The establishment of a single world government'],
    answer: "The increasing integration of the world's economies through trade, investment, technology and migration",
    explanation: 'Globalisation is a multi-dimensional process integrating national economies through trade flows, capital movements, technology sharing and migration.',
  },
  {
    prompt: 'The WTO (World Trade Organisation) promotes globalisation mainly through:',
    options: ['Setting global minimum wages', 'Reducing trade barriers and providing a rules-based framework for international trade', 'Providing loans to developing countries', 'Controlling global currency exchange rates'],
    answer: 'Reducing trade barriers and providing a rules-based framework for international trade',
    explanation: 'The WTO negotiates tariff reductions and enforces trade rules to promote freer international trade among its 164 member countries.',
  },
  {
    prompt: 'AGOA (Africa Growth and Opportunity Act) benefits SA by:',
    options: ['Providing US military aid to SA', 'Giving SA preferential tariff-free access to US markets for manufactured goods', 'Funding SA\'s National Development Plan', 'Creating a currency union between SA and the USA'],
    answer: 'Giving SA preferential tariff-free access to US markets for manufactured goods',
    explanation: 'AGOA allows SA to export textiles, motor vehicles and other goods to the US duty-free, boosting SA exports and job creation.',
  },
  {
    prompt: 'The North-South divide refers to:',
    options: ['Regional disparities within South Africa', 'The development gap between wealthy Northern nations and poorer Southern developing countries', 'Political differences between SADC member states', 'Geographic differences in climate and agriculture'],
    answer: 'The development gap between wealthy Northern nations and poorer Southern developing countries',
    explanation: 'The North-South divide describes the persistent wealth, technology and power gap between developed (North) and developing (South) nations.',
  },
  {
    prompt: "Developing countries' 'unfavourable terms of trade' means they:",
    options: ['Pay higher tariffs than developed countries', 'Export raw materials cheaply and import expensive manufactured goods, getting less per unit of exports over time', 'Cannot join the WTO', 'Have stronger currencies than developed nations'],
    answer: 'Export raw materials cheaply and import expensive manufactured goods, getting less per unit of exports over time',
    explanation: 'Declining terms of trade is a persistent problem for commodity exporters — raw material prices fall relative to manufactured goods over time.',
  },
  {
    prompt: 'Brain drain refers to:',
    options: ['Importing skilled workers from abroad', 'The emigration of skilled and educated workers to higher-income countries', 'Poor education systems in developing countries', 'Over-investment in higher education'],
    answer: 'The emigration of skilled and educated workers to higher-income countries',
    explanation: 'Brain drain describes the loss of skilled professionals (doctors, engineers, IT specialists) who emigrate for better opportunities — a significant issue for SA.',
  },
  {
    prompt: 'Foreign Direct Investment (FDI) benefits developing countries through:',
    options: ['Extracting their natural resources without compensation', 'Job creation, technology transfer and access to global value chains', 'Reducing their exports', 'Increasing their debt to foreign institutions'],
    answer: 'Job creation, technology transfer and access to global value chains',
    explanation: 'FDI brings capital, technology and skills to host countries, creating jobs and linking them to global production networks.',
  },
  {
    prompt: 'Which institution provides an alternative development finance option to the World Bank for BRICS nations?',
    options: ['The IMF', 'The WTO', 'The New Development Bank (NDB)', 'AGOA'],
    answer: 'The New Development Bank (NDB)',
    explanation: 'The New Development Bank was established by BRICS countries to finance infrastructure and sustainable development as an alternative to Western-dominated institutions.',
  },
  {
    prompt: 'When a multinational company repatriates profits from SA to its home country, SA\'s:',
    options: ['GDP rises', 'GNI falls relative to GDP', 'Exports increase', 'Rand appreciates'],
    answer: 'GNI falls relative to GDP',
    explanation: 'Profit repatriation means income generated in SA leaves the country — GNI (which adjusts for factor income flows) falls below GDP.',
  },
  {
    prompt: 'A major criticism of globalisation for developing countries is that it:',
    options: ['Reduces consumer choice', 'Can undermine local industries through competition from cheaper imported goods', 'Prevents all forms of foreign investment', 'Always raises living standards immediately'],
    answer: 'Can undermine local industries through competition from cheaper imported goods',
    explanation: 'Cheaper imports from highly efficient global producers can destroy local industries and jobs, particularly in manufacturing sectors of developing countries.',
  },
];

const Globalisation = () => (
  <CapsSubjectTopic
    title="Globalisation and the North-South Divide"
    subtitle="World economic integration, trade frameworks and development disparities"
    learnSteps={learnSteps}
    task="gr11-globalisation-north-south-t4"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default Globalisation;
