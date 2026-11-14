import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Trade is buying and selling',
    image: {
      src: '/curriculum/grade6/geo/term2/what-is-trade/diagram.svg',
      alt: 'imports and exports arrows between a country and the world',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Trade</strong> happens when people, businesses, or countries buy and sell goods
          and services. Trade helps places get things they need and sell things they make well.
        </p>
        <div className="bg-sky-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>goods</span>
          <span className="text-slate-400">+</span>
          <span>services</span>
          <span className="text-slate-400">→</span>
          <span className="text-sky-700">trade</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Imports come in, exports go out',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>import</strong> is something brought into a country from another country. An
          <strong> export</strong> is something sent out of a country to be sold somewhere else.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4"><strong>Imports</strong><br />goods coming into South Africa</div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Exports</strong><br />goods going out to the world</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Countries trade because resources differ',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          No country has everything it needs. Countries trade because they have different
          <strong> resources</strong>, skills, climates, factories, and needs.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4"><strong>Natural resources</strong><br />gold or fruit</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Skills</strong><br />designing or farming</div>
          <div className="rounded-xl bg-slate-50 p-4"><strong>Needs</strong><br />fuel or machines</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Trade Data — A Simple Export and Import Example',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">This example uses a few products to show how exports and imports can be compared. When exports are larger than imports for a product, the country earns more from that trade item.</p>
        <DataChart
          data={[
                        { product: 'Fruit', exports: 12, imports: 3 },
                        { product: 'Gold', exports: 25, imports: 1 },
                        { product: 'Clothing', exports: 4, imports: 10 },
                        { product: 'Computers', exports: 2, imports: 14 },
                      ]}
          xKey="product"
          series={[
                        { key: 'exports', label: 'Exports', type: 'bar', color: '#0ea5e9' },
                        { key: 'imports', label: 'Imports', type: 'bar', color: '#8b5cf6' },
                      ]}
          yLabel="Value index"
          height={220}
        />

        <p className="text-sm text-slate-500">Trade is easier to understand when learners compare what a country sells to other countries with what it buys.</p>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What is trade?', options: ['Buying and selling goods or services', 'Only growing food at home', 'Drawing maps of rivers', 'Counting the population'], answer: 'Buying and selling goods or services', explanation: 'Trade means buying and selling goods or services between people, businesses, or countries.' },
  { prompt: 'What is an import?', options: ['A good brought into a country', 'A good sent out of a country', 'A tax paid at school', 'A resource left unused'], answer: 'A good brought into a country', explanation: 'Imports come into a country from another country.' },
  { prompt: 'What is an export?', options: ['A good sent out of a country', 'A good brought into a country', 'A shop that only sells bread', 'A river used for transport'], answer: 'A good sent out of a country', explanation: 'Exports leave a country to be sold in other countries.' },
  { prompt: 'Why do countries trade with each other?', options: ['They have different resources and needs', 'Every country has exactly the same goods', 'Trade stops people from working', 'Countries trade only for fun'], answer: 'They have different resources and needs', explanation: 'Countries trade to get what they need and sell what they can produce.' },
  { prompt: 'Which example shows South Africa importing a good?', options: ['Buying oil from another country', 'Selling oranges to another country', 'Sending wine to Europe', 'Exporting cars from a harbour'], answer: 'Buying oil from another country', explanation: 'Buying oil from another country brings the good into South Africa, so it is an import.' },
  { prompt: 'Which example shows South Africa exporting a good?', options: ['Selling fruit to another country', 'Buying phones from overseas', 'Importing petrol from abroad', 'Receiving machines from Asia'], answer: 'Selling fruit to another country', explanation: 'Selling fruit to another country sends a South African product out to the world.' },
  { prompt: 'Which of these is a service that can be traded?', options: ['Transporting goods for a customer', 'A box of apples', 'A bag of coal', 'A bottle of water'], answer: 'Transporting goods for a customer', explanation: 'A service is work done for someone, such as transport, banking, or tourism.' },
  { prompt: 'What can happen when trade is fair and well managed?', options: ['People can earn income and get needed goods', 'All resources disappear immediately', 'Countries stop needing transport', 'Farmers never sell crops'], answer: 'People can earn income and get needed goods', explanation: 'Trade can create jobs and help people access products they do not make themselves.' },
  { prompt: 'Which statement is true about imports and exports?', options: ['Imports come in and exports go out', 'Imports and exports are both rainfall types', 'Exports come in and imports go out', 'Only large countries can export'], answer: 'Imports come in and exports go out', explanation: 'The direction of movement helps you remember the difference.' },
];

const WhatIsTrade = () => (
  <GeoTopic
    title="What is Trade?"
    subtitle="How goods and services move between places"
    learnSteps={learnSteps}
    task="what-is-trade"
    bank={bank}
  />
);

export default WhatIsTrade;
