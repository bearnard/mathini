import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Fair trade helps producers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Fair trade</strong> means producers, such as farmers and craft workers, should get a
          fair price and safe working conditions when their goods are sold.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>fair price</span>
          <span className="text-slate-400">+</span>
          <span>safe work</span>
          <span className="text-slate-400">→</span>
          <span className="text-amber-700">better lives</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Many people are part of trade',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A product may pass through farmers, transport workers, markets, shops, and customers.
          Fair trade asks whether each person in the chain is treated <strong>fairly</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4"><strong>Producer</strong><br />grows or makes goods</div>
          <div className="rounded-xl bg-blue-50 p-4"><strong>Trader</strong><br />moves or sells goods</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Customer</strong><br />buys goods</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Consumers can make fair choices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Consumers can support fair trade by asking where products come from, avoiding waste, and
          choosing goods from businesses that treat workers and the environment responsibly.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4"><strong>Ask</strong><br />who made it?</div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Choose</strong><br />responsible sellers</div>
          <div className="rounded-xl bg-rose-50 p-4"><strong>Respect</strong><br />people and nature</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Trade Data — Fair-trade Producer Prices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">These are made-up example prices, not real market prices. They show the idea that fair-trade systems aim to pay producers a more stable and better price for the same product.</p>
        <DataChart
          data={[
                        { commodity: 'Coffee', fairTrade: 52, conventional: 44 },
                        { commodity: 'Cocoa', fairTrade: 38, conventional: 31 },
                        { commodity: 'Bananas', fairTrade: 18, conventional: 14 },
                      ]}
          xKey="commodity"
          series={[
                        { key: 'fairTrade', label: 'Fair-trade producer price (R/kg)', type: 'bar', color: '#10b981' },
                        { key: 'conventional', label: 'Conventional producer price (R/kg)', type: 'bar', color: '#f59e0b' },
                      ]}
          yLabel="R/kg"
          height={220}
        />

        <p className="text-sm text-slate-500">A higher producer price can help farmers pay workers fairly, invest in tools, and keep farming sustainably.</p>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What is fair trade?', options: ['Trade that gives producers fair pay and conditions', 'Trade where goods are sold at the lowest possible price', 'Trade that happens between neighbouring countries', 'Trade where goods are swapped without using any money'], answer: 'Trade that gives producers fair pay and conditions', explanation: 'Fair trade aims to treat producers and workers fairly.' },
  { prompt: 'Who is a producer in a trade chain?', options: ['A person who grows or makes goods', 'A person who only buys goods for home', 'A mapmaker drawing borders', 'A learner writing notes'], answer: 'A person who grows or makes goods', explanation: 'Producers create the goods that are later sold.' },
  { prompt: 'Which situation is most fair for a farmer?', options: ['Being paid a fair price for good produce', 'Working safely but receiving no payment', 'Selling crops for less than the cost to grow them', 'Having no choice but to waste all crops'], answer: 'Being paid a fair price for good produce', explanation: 'Fair payment helps farmers cover costs and support their families.' },
  { prompt: 'Why are safe working conditions important?', options: ['They protect workers from harm', 'They make food impossible to sell', 'They stop all markets from opening', 'They reduce the need for clean water'], answer: 'They protect workers from harm', explanation: 'Workers should not be injured or treated badly while producing goods.' },
  { prompt: 'How can consumers support fair trade?', options: ['Choose products from responsible sellers', 'Always buy the cheapest item without asking', 'Waste food after buying it', 'Ignore where products come from'], answer: 'Choose products from responsible sellers', explanation: 'Consumer choices can support businesses that treat workers fairly.' },
  { prompt: 'Which product could be part of fair trade?', options: ['Fresh fruit grown by paid farm workers', 'A stolen bicycle sold secretly', 'Polluted water sold as medicine', 'Goods made by unpaid forced labour'], answer: 'Fresh fruit grown by paid farm workers', explanation: 'Fair trade can include farm products when workers are paid and treated fairly.' },
  { prompt: 'What does a fair price help producers do?', options: ['Cover costs and earn an income', 'Stop producing useful goods', 'Avoid selling anything ever again', 'Make products less safe'], answer: 'Cover costs and earn an income', explanation: 'A fair price helps producers pay expenses and support households.' },
  { prompt: 'Which choice best shows fairness in trade?', options: ['Respecting workers, customers, and the environment', 'Keeping prices low by paying workers less', 'Selling goods only to the richest customers', 'Hiding product problems from buyers until after the sale'], answer: 'Respecting workers, customers, and the environment', explanation: 'Fair trade considers people and the environment in the trade process.' },
  { prompt: 'Why might local markets be important to small farmers?', options: ['They provide a place to sell produce and earn money', 'They prevent farmers from meeting customers', 'They only sell imported electronics', 'They make crops grow without water'], answer: 'They provide a place to sell produce and earn money', explanation: 'Markets can connect farmers with buyers and support local incomes.' },
];

const FairTrade = () => (
  <GeoTopic
    title="Fair Trade"
    subtitle="Making trade better for people"
    learnSteps={learnSteps}
    task="fair-trade"
    bank={bank}
  />
);

export default FairTrade;
