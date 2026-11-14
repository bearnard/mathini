import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/geo/term3/trade-globalisation/diagram.webp", alt: "Trade and Globalisation" },
    title: 'International trade concepts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          International trade involves the exchange of goods and services between countries. Every country trades to access resources or products it cannot produce efficiently.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Exports</strong>
            <p className="text-slate-600 text-sm">Goods and services sold to other countries. Export earnings are income for the country.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Imports</strong>
            <p className="text-slate-600 text-sm">Goods and services bought from other countries. Import spending leaves the economy.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Trade balance</strong>
            <p className="text-slate-600 text-sm">Exports − Imports. Positive = trade surplus; negative = trade deficit.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Free trade vs protectionism',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Countries must decide how open to make their markets. <strong>Free trade</strong> removes barriers; <strong>protectionism</strong> erects them to shield local industries.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Free trade arguments</strong>
            <p className="text-slate-600 text-sm">Lower consumer prices, greater efficiency, specialisation, economic growth. Promoted by WTO and free trade agreements.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Protectionist tools</strong>
            <p className="text-slate-600 text-sm"><strong>Tariffs:</strong> tax on imports. <strong>Quotas:</strong> limits on import quantities. <strong>Subsidies:</strong> government support to local producers.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">The WTO (World Trade Organization) works to reduce trade barriers and resolve disputes between member countries.</p>
      </div>
    ),
  },
  {
    title: 'Globalisation and transnational corporations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Globalisation</strong> is the increasing integration of the world's economies, cultures, and populations through trade, investment, and technology.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>Drivers:</strong> advances in transport and communication technology, trade liberalisation, internet and digital economy.</p>
          <p><strong>TNCs (Transnational Corporations):</strong> large companies operating in multiple countries (e.g., Nestlé, Toyota, Anglo American). They control global supply chains.</p>
          <p><strong>Benefits:</strong> investment, job creation, technology transfer, lower prices.</p>
          <p><strong>Concerns:</strong> profits repatriated to home country, exploitation of cheaper labour, environmental impacts, cultural homogenisation.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Effects on developing countries: debt, brain drain and fair trade',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Globalisation can both help and harm developing countries depending on the terms of trade and national policies.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Debt trap</strong>
            <p className="text-slate-600 text-sm">Developing nations borrow to fund development; high interest repayments divert funds from healthcare and education.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Brain drain</strong>
            <p className="text-slate-600 text-sm">Skilled workers (doctors, engineers) emigrate to developed countries for higher pay, leaving shortages at home.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Fair trade</strong>
            <p className="text-slate-600 text-sm">Guarantees farmers in developing countries a fair minimum price, community premiums, and better working conditions.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Trade Data — World Trade Growth',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Globalisation is often tracked through the growth of world trade. This chart shows how trade expansion can speed up and slow down over time.</p>
        <DataChart
          data={[
                        { year: 2015, growth: 2.8 },
                        { year: 2017, growth: 5.3 },
                        { year: 2019, growth: 0.9 },
                        { year: 2021, growth: 10.8 },
                        { year: 2023, growth: 1.2 },
                      ]}
          xKey="year"
          series={[
                        { key: 'growth', label: 'World trade growth (%)', type: 'line', color: '#8b5cf6' },
                      ]}
          type="line"
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">Trade networks expand quickly in some years and slow sharply during periods of recession or disruption.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A country has exports of R500 billion and imports of R350 billion. What is its trade balance?',
    options: ['Trade deficit of R150 billion', 'Trade surplus of R150 billion', 'Trade surplus of R850 billion', 'Trade deficit of R500 billion'],
    answer: 'Trade surplus of R150 billion',
    explanation: 'Trade balance = Exports − Imports = R500bn − R350bn = R150bn surplus (exports exceed imports).',
  },
  {
    prompt: 'A tariff is best described as:',
    options: [
      'A limit on the quantity of goods that can be imported',
      'A tax levied on imported goods',
      'Government financial support to local producers',
      'A free trade agreement',
    ],
    answer: 'A tax levied on imported goods',
    explanation: 'A tariff raises the price of imported goods, making them less competitive compared to domestically produced goods.',
  },
  {
    prompt: 'Which organisation promotes free trade and resolves trade disputes between member countries?',
    options: ['UNICEF, which helps children', 'UNDP, which promotes human development', 'The WTO (World Trade Organization)', 'NATO, which is a military alliance'],
    answer: 'The WTO (World Trade Organization)',
    explanation: 'The WTO\'s core functions are to facilitate trade negotiations, administer trade agreements, and settle disputes between member countries.',
  },
  {
    prompt: 'Globalisation is best described as:',
    options: ['The spread of democracy to countries around the world', "The growing links between the world's economies, cultures and people", 'The growth of towns and cities across the world', 'The wider spread of internet access around the world'],
    answer: "The growing links between the world's economies, cultures and people",
    explanation: 'Globalisation involves the interconnection of markets, cultures, and peoples through trade, technology, and communication.',
  },
  {
    prompt: 'A transnational corporation (TNC) is a company that:',
    options: ['Sells goods to other countries and does nothing more', 'Has its headquarters in a developing country', 'Runs production and business in several countries', 'Is owned and run by a government'],
    answer: 'Runs production and business in several countries',
    explanation: 'TNCs like Toyota, Shell, and Nestlé have subsidiaries and operations across the globe, controlling international supply chains.',
  },
  {
    prompt: 'Brain drain affects developing countries by:',
    options: ['Lower innovation in the richer countries', 'Skilled people emigrate, leaving shortages in key sectors', 'More unskilled workers in the richer countries', 'Higher wages in the home country'],
    answer: 'Skilled people emigrate, leaving shortages in key sectors',
    explanation: 'When doctors, engineers, and teachers emigrate to higher-paying jobs in developed countries, developing countries lose the talent they need most.',
  },
  {
    prompt: 'What is comparative advantage in international trade?',
    options: [
      'Having the largest economy in a region',
      'Producing goods more cheaply in absolute terms than all competitors',
      'The ability to produce a good at a lower opportunity cost than others',
      'Exporting only raw materials',
    ],
    answer: 'The ability to produce a good at a lower opportunity cost than others',
    explanation: 'Comparative advantage means specialising in what you can produce relatively most efficiently — the basis for mutually beneficial trade.',
  },
  {
    prompt: 'Fair trade certification aims to:',
    options: ['It removes all trade barriers between developing nations', 'Producers in developing countries get fair minimum prices and conditions', 'It subsidises food imports for poor countries', 'It removes all tariffs on farm goods in every country'],
    answer: 'Producers in developing countries get fair minimum prices and conditions',
    explanation: 'Fair trade guarantees minimum prices, community development premiums, and ethical standards to small-scale producers in developing countries.',
  },
  {
    prompt: 'A trade deficit occurs when:',
    options: [
      'A country exports more than it imports',
      'A country imports more than it exports',
      'Exports and imports are equal',
      'A country stops trading internationally',
    ],
    answer: 'A country imports more than it exports',
    explanation: 'A trade deficit means more money is leaving the country to pay for imports than is entering from export earnings.',
  },
  {
    prompt: 'Which of the following is a CONCERN about the activities of transnational corporations in developing countries?',
    options: ['They create too many jobs for local people', 'They pass on too much technology to local firms', 'Profits often go to the home country, not reinvested locally', 'They lower the competition between local firms'],
    answer: 'Profits often go to the home country, not reinvested locally',
    explanation: 'TNCs may exploit cheap labour and natural resources while sending profits back to their home countries, limiting the development benefit for host nations.',
  },
];

const TradeGlobalisationT3 = () => (
  <CapsSubjectTopic
    title="Trade and Globalisation"
    subtitle="International trade, free trade vs protectionism, TNCs and fair trade"
    learnSteps={learnSteps}
    task="gr11-trade-globalisation-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default TradeGlobalisationT3;
