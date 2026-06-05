
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const revenueTestData = [
  { price: 'R10', elasticTR: 1000, inelasticTR: 1000 },
  { price: 'R12', elasticTR: 960, inelasticTR: 1140 },
  { price: 'R14', elasticTR: 840, inelasticTR: 1260 },
  { price: 'R16', elasticTR: 640, inelasticTR: 1360 },
];

const learnSteps: LearnStep[] = [
  {
    title: 'Price Elasticity of Demand (PED)',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          PED measures how strongly buyers react to price changes. Elastic demand means quantity responds a lot; inelastic demand means it responds only a little.
        </p>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-left">
          <p className="font-semibold text-slate-800">Formula</p>
          <p className="mt-1 text-slate-600">PED = % change in quantity demanded ÷ % change in price</p>
        </div>
        <SupplyDemand title="Elastic vs Inelastic Demand" showShifts={true} />
      </div>
    ),
  },
  {
    title: 'Factors Affecting PED',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Availability of substitutes, whether the good is a necessity, the share of income spent and the time available to adjust all affect elasticity.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">More substitutes → more elastic</p>
            <p className="mt-1 text-slate-600">Coke vs Pepsi is much more elastic than insulin.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Necessities → more inelastic</p>
            <p className="mt-1 text-slate-600">Bread, water and medicine are bought even when prices rise.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-semibold text-purple-800">Big budget share → more elastic</p>
            <p className="mt-1 text-slate-600">Cars and holidays take a larger share of income than salt.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-800">Longer time → more elastic</p>
            <p className="mt-1 text-slate-600">People need time to find alternatives and change habits.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Price Elasticity of Supply (PES)',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          PES measures how much quantity supplied changes when price changes. Supply is more elastic when firms have spare capacity and time to expand production.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-4">
            <p className="font-semibold text-orange-800">Elastic supply</p>
            <p className="mt-1 text-slate-600">Factories with spare capacity can increase output quickly.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Inelastic supply</p>
            <p className="mt-1 text-slate-600">Farmers cannot quickly increase crop output in one growing season.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Total Revenue Test and Policy Applications',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Elasticity matters for firm pricing and tax policy. Governments often tax inelastic goods such as fuel, alcohol and tobacco to raise revenue.
        </p>
        <DataChart
          data={revenueTestData}
          series={[
            { key: 'elasticTR', label: 'Total revenue with elastic demand', color: '#ef4444' },
            { key: 'inelasticTR', label: 'Total revenue with inelastic demand', color: '#10b981' },
          ]}
          xKey="price"
          type="line"
          yLabel="Revenue"
        />
        <p className="text-sm text-slate-500">When demand is elastic, a price increase cuts revenue. When demand is inelastic, a price increase raises revenue.</p>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'The formula for Price Elasticity of Demand (PED) is:',
    options: ['% change in P ÷ % change in Qd', '% change in Qd ÷ % change in P', '% change in income ÷ % change in Qd', '% change in Qs ÷ % change in P'],
    answer: '% change in Qd ÷ % change in P',
    explanation: 'PED = (% change in quantity demanded) ÷ (% change in price).',
  },
  {
    prompt: 'If PED = −2.5, demand is:',
    options: ['Perfectly inelastic', 'Inelastic', 'Elastic', 'Unit elastic'],
    answer: 'Elastic',
    explanation: '|PED| = 2.5 > 1, so demand is elastic — quantity demanded is very responsive to price changes.',
  },
  {
    prompt: 'Which good is MOST likely to have inelastic demand?',
    options: ['Designer handbags', 'Overseas holidays', 'Life-saving medication', 'Luxury sports cars'],
    answer: 'Life-saving medication',
    explanation: 'Life-saving medication has no substitutes and is a necessity — demand is highly inelastic regardless of price.',
  },
  {
    prompt: 'If the price of a good rises and total revenue increases, demand for that good is:',
    options: ['Elastic', 'Inelastic', 'Unit elastic', 'Perfectly elastic'],
    answer: 'Inelastic',
    explanation: 'With inelastic demand, a price rise causes a smaller proportional fall in quantity — total revenue rises.',
  },
  {
    prompt: 'The availability of close substitutes makes demand for a good:',
    options: ['More inelastic', 'More elastic', 'Perfectly inelastic', 'Unit elastic'],
    answer: 'More elastic',
    explanation: 'When close substitutes are available, consumers easily switch when price rises, making demand more elastic.',
  },
  {
    prompt: 'Why does the government impose high taxes on alcohol and tobacco?',
    options: ['Because demand is elastic and revenue is maximised', 'Because demand is inelastic and significant revenue is raised without large falls in consumption', 'To make these goods cheaper', 'Because they are public goods'],
    answer: 'Because demand is inelastic and significant revenue is raised without large falls in consumption',
    explanation: 'Sin taxes exploit inelastic demand — consumers keep buying despite price rises, generating tax revenue.',
  },
  {
    prompt: 'PES for agricultural products during a single growing season is likely to be:',
    options: ['Highly elastic', 'Unit elastic', 'Perfectly elastic', 'Highly inelastic'],
    answer: 'Highly inelastic',
    explanation: 'Farmers cannot quickly increase crop output during one season — supply is fixed by biological production constraints.',
  },
  {
    prompt: 'Which factor makes PES more elastic over time?',
    options: ['Fixed land supply', 'Longer time period allowing producers to adjust capacity', 'Rising input costs', 'Seasonal production constraints'],
    answer: 'Longer time period allowing producers to adjust capacity',
    explanation: 'In the long run, firms can build new factories, hire more workers and find new suppliers — increasing supply responsiveness.',
  },
  {
    prompt: 'If PED = −1 (unit elastic), a 10% price increase will:',
    options: ['Increase total revenue', 'Decrease total revenue', 'Leave total revenue unchanged', 'Double total revenue'],
    answer: 'Leave total revenue unchanged',
    explanation: 'Unit elastic demand means the percentage fall in quantity exactly offsets the percentage rise in price — total revenue stays the same.',
  },
  {
    prompt: 'Over the long run, demand for petrol becomes more elastic because:',
    options: ['Petrol is a public good', 'Consumers can find alternatives such as electric vehicles and public transport', 'The price of petrol falls', 'Petrol has no substitutes'],
    answer: 'Consumers can find alternatives such as electric vehicles and public transport',
    explanation: 'Given time, consumers adapt by switching to substitute modes of transport, increasing the elasticity of demand for petrol.',
  },
];

const PriceElasticity = () => (
  <CapsSubjectTopic
    title="Price Elasticity of Demand and Supply"
    subtitle="Measuring how responsive buyers and sellers are to price changes"
    learnSteps={learnSteps}
    task="gr11-price-elasticity-t2"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default PriceElasticity;
