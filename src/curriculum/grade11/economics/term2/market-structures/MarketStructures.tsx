
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const costRevenueData = [
  { output: '1', mc: 12, mr: 18, atc: 24 },
  { output: '2', mc: 14, mr: 18, atc: 20 },
  { output: '3', mc: 16, mr: 18, atc: 18 },
  { output: '4', mc: 18, mr: 18, atc: 17 },
  { output: '5', mc: 21, mr: 18, atc: 18 },
];

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/econ/term2/market-structures/diagram.webp", alt: "Competitive Market" },
    title: 'The Four Market Structures',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Market structure depends on the number of sellers, the type of product, barriers to entry and how much control firms have over price.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Perfect competition</p>
            <p className="mt-1 text-slate-600">Many sellers, standard products and no price power.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Monopolistic competition</p>
            <p className="mt-1 text-slate-600">Many sellers but products are differentiated.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-800">Oligopoly</p>
            <p className="mt-1 text-slate-600">A few large firms dominate and react to each other.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">Monopoly</p>
            <p className="mt-1 text-slate-600">One seller controls the market and faces strong barriers to entry.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Costs of Production',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Firms compare revenue with different cost concepts when deciding how much to produce.
        </p>
        <DataChart
          data={costRevenueData}
          series={[
            { key: 'mc', label: 'Marginal cost', color: '#ef4444' },
            { key: 'mr', label: 'Marginal revenue', color: '#6366f1' },
            { key: 'atc', label: 'Average total cost', color: '#10b981' },
          ]}
          xKey="output"
          type="line"
          yLabel="Rand per unit"
        />
        <p className="text-sm text-slate-500">Profit is maximised at the output where MC and MR intersect.</p>
      </div>
    ),
  },
  {
    title: 'Revenue Concepts',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Total revenue, average revenue and marginal revenue help us describe the money side of firm behaviour.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">TR</p>
            <p className="mt-1 text-slate-600">Total revenue = price × quantity sold.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">AR</p>
            <p className="mt-1 text-slate-600">Average revenue = TR ÷ quantity, usually the price per unit.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">MR</p>
            <p className="mt-1 text-slate-600">Marginal revenue is the extra income from selling one more unit.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Profit Maximisation: MC = MR Rule',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          In competitive markets, price is determined by supply and demand. Firms then decide output using the MC = MR rule.
        </p>
        <SupplyDemand title="Competitive Market" eqPrice={5} eqQty={5} showShifts={false} />
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-4">
            <p className="font-semibold text-orange-800">Price taker</p>
            <p className="mt-1 text-slate-600">A perfectly competitive firm accepts the market price set by the industry.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">Price maker</p>
            <p className="mt-1 text-slate-600">A monopoly can restrict output to keep prices above the competitive level.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'In perfect competition, firms are described as "price takers" because:',
    options: ['They set prices above those of their competitors', 'They must accept the market price set by supply and demand', 'They collude with each other to fix the prices', 'The government sets the prices that they charge'],
    answer: 'They must accept the market price set by supply and demand',
    explanation: 'In perfect competition, no single firm is large enough to influence the market price — each firm takes the prevailing market price.',
  },
  {
    prompt: 'Which market structure is characterised by a few large, interdependent firms?',
    options: ['Perfect competition', 'Monopolistic competition', 'Oligopoly', 'Monopoly'],
    answer: 'Oligopoly',
    explanation: 'An oligopoly has a small number of large firms who are interdependent — one firm\'s decisions affect the others.',
  },
  {
    prompt: "SA's banking sector (Absa, Standard Bank, FNB, Nedbank) is best described as:",
    options: ['A monopoly', 'Perfect competition', 'An oligopoly', 'Monopolistic competition'],
    answer: 'An oligopoly',
    explanation: 'The Big Four SA banks dominate the market — few large firms with high barriers to entry, a classic oligopoly.',
  },
  {
    prompt: 'Fixed costs differ from variable costs because fixed costs:',
    options: ['Rise with output', 'Are zero when output is zero', 'Do not change with the level of output', 'Are always smaller than variable costs'],
    answer: 'Do not change with the level of output',
    explanation: 'Fixed costs (rent, loan repayments, insurance) remain constant regardless of how much is produced.',
  },
  {
    prompt: 'A firm maximises profit at the output level where:',
    options: ['TR is at its maximum', 'TC is at its minimum', 'MC = MR', 'ATC = AVC'],
    answer: 'MC = MR',
    explanation: 'The profit-maximising rule is MC = MR — any output where MC < MR means more production increases profit; where MC > MR, less is needed.',
  },
  {
    prompt: 'Marginal Cost (MC) is defined as:',
    options: ['Total cost divided by the total output made', 'The change in total cost from making one extra unit', 'The fixed cost that is spread over each unit', 'Total variable cost divided by the output made'],
    answer: 'The change in total cost from making one extra unit',
    explanation: 'MC measures the additional cost of producing one more unit of output — crucial for profit maximisation decisions.',
  },
  {
    prompt: 'In perfect competition, in the long run firms earn:',
    options: ['Supernormal profits', 'Losses', 'Normal (zero economic) profit', 'Negative marginal revenue'],
    answer: 'Normal (zero economic) profit',
    explanation: 'Free entry and exit ensure that supernormal profits attract competitors who compete them away — leaving only normal profit in the long run.',
  },
  {
    prompt: 'A monopoly can earn supernormal profits in the long run because:',
    options: ['It faces a perfectly elastic demand curve', 'High barriers to entry keep competitors out of the market', 'The government subsidises it with public money', 'It produces under conditions of perfect competition'],
    answer: 'High barriers to entry keep competitors out of the market',
    explanation: 'Barriers to entry (patents, scale, legal rights) protect the monopoly from competition, allowing sustained supernormal profits.',
  },
  {
    prompt: 'Economies of scale occur when:',
    options: ['Total costs rise faster than output', 'Average total cost falls as output increases', 'A firm reduces its workforce', 'Marginal revenue equals average revenue'],
    answer: 'Average total cost falls as output increases',
    explanation: 'Economies of scale arise from specialisation, bulk purchasing and spreading fixed costs over more units as production grows.',
  },
  {
    prompt: 'Total Revenue (TR) is calculated as:',
    options: ['TC − FC', 'Price × Quantity', 'Profit + TC', 'MR × ATC'],
    answer: 'Price × Quantity',
    explanation: 'TR = Price × Quantity sold. It represents the total income a firm receives from selling its output.',
  },
];

const MarketStructures = () => (
  <CapsSubjectTopic
    title="Market Structures, Costs and Revenue"
    subtitle="From perfect competition to monopoly — costs, revenue and profit maximisation"
    learnSteps={learnSteps}
    task="gr11-market-structures-t2"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default MarketStructures;
