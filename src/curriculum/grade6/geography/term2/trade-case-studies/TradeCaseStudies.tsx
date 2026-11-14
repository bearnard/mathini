import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'South Africa trades with the world',
    image: {
      src: '/curriculum/grade6/geo/term2/trade-case-studies/diagram.svg',
      alt: 'South Africa trade map with export icons and import arrows',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa sells <strong>exports</strong> to other countries and buys <strong>imports</strong>
          from other countries. Trade links South Africa to Africa and the wider world.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>South Africa</span>
          <span className="text-slate-400">↔</span>
          <span className="text-indigo-700">world trade</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Examples of South African exports',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa exports goods such as <strong>minerals</strong>, fruit, wine, vehicles, and some
          manufactured products. Exports can earn money and create jobs.
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl bg-yellow-50 p-4"><strong>Gold</strong><br />mineral</div>
          <div className="rounded-xl bg-orange-50 p-4"><strong>Fruit</strong><br />farming</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Wine</strong><br />processed grapes</div>
          <div className="rounded-xl bg-slate-50 p-4"><strong>Cars</strong><br />manufacturing</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Examples of imports and trade routes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa imports goods it needs, such as some oil, electronics, machinery, and
          medicines. Goods travel by <strong>ship</strong>, truck, train, and aeroplane.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4"><strong>Oil</strong><br />energy</div>
          <div className="rounded-xl bg-cyan-50 p-4"><strong>Electronics</strong><br />phones and computers</div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Transport</strong><br />ports and roads</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Trade Data — South Africa and Major Trade Partners',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">South Africa trades with many partners. Comparing exports and imports helps learners see that trade flows in both directions.</p>
        <DataChart
          data={[
                        { partner: 'EU', exports: 24, imports: 20 },
                        { partner: 'China', exports: 18, imports: 24 },
                        { partner: 'USA', exports: 14, imports: 11 },
                        { partner: 'India', exports: 10, imports: 9 },
                      ]}
          xKey="partner"
          series={[
                        { key: 'exports', label: 'Exports (US$ bn)', type: 'bar', color: '#10b981' },
                        { key: 'imports', label: 'Imports (US$ bn)', type: 'bar', color: '#f97316' },
                      ]}
          yLabel="US$ billions"
          height={220}
        />

        <p className="text-sm text-slate-500">Goods such as minerals, vehicles, machinery, and chemicals move through these trade links.</p>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'Which good is a well-known South African export?', options: ['Gold', 'Snowmobiles', 'Maple syrup', 'Polar bear skins'], answer: 'Gold', explanation: 'South Africa has mined and exported minerals such as gold.' },
  { prompt: 'Which pair lists examples of South African agricultural exports?', options: ['Fruit and wine', 'Oil and phones', 'Snow and ice', 'Satellites and rockets'], answer: 'Fruit and wine', explanation: 'Fruit and wine come from farming and processing in South Africa.' },
  { prompt: 'Why does South Africa import some goods?', options: ['It does not produce enough of every product it needs', 'It is not allowed to export anything', 'It has no farms or factories at all', 'Imports are always free'], answer: 'It does not produce enough of every product it needs', explanation: 'Countries import goods that are needed, scarce, or cheaper to get from elsewhere.' },
  { prompt: 'Which good may South Africa import?', options: ['Oil', 'Table Mountain', 'Local sunlight', 'Cape beaches'], answer: 'Oil', explanation: 'South Africa imports some fuel and oil products to meet energy needs.' },
  { prompt: 'Which transport method is often used for overseas trade?', options: ['Ships carrying containers', 'Walking across the ocean', 'Wheelbarrows to Europe', 'Donkeys pulling cargo planes'], answer: 'Ships carrying containers', explanation: 'Large ships carry many containers between ports around the world.' },
  { prompt: 'What is a trade route?', options: ['A path used to move goods between places', 'A type of rainfall in summer', 'A mountain that blocks all roads', 'A rule that stops all markets'], answer: 'A path used to move goods between places', explanation: 'Trade routes connect producers, ports, markets, and customers.' },
  { prompt: 'How can exports help a country?', options: ['They can earn income and support jobs', 'They make imports impossible forever', 'They remove all need for transport', 'They stop people from buying goods'], answer: 'They can earn income and support jobs', explanation: 'Export businesses can create jobs and bring money into the country.' },
  { prompt: 'Which is an example of a manufactured export?', options: ['Cars assembled in a factory', 'Rain falling on a field', 'Unpicked wild flowers', 'Sea water at the coast'], answer: 'Cars assembled in a factory', explanation: 'Manufactured goods are made or assembled in factories.' },
  { prompt: 'What does international trade mean?', options: ['Trade between different countries', 'Only swapping lunch at school', 'Selling only inside one classroom', 'A map without borders'], answer: 'Trade between different countries', explanation: 'International trade happens when goods or services move between countries.' },
];

const TradeCaseStudies = () => (
  <GeoTopic
    title="Trade in SA & the World"
    subtitle="Examples of exports, imports, and trade links"
    learnSteps={learnSteps}
    task="trade-case-studies"
    bank={bank}
  />
);

export default TradeCaseStudies;
