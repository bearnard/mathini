
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const roleBalanceData = [
  { area: 'Retail', market: 9, state: 2 },
  { area: 'Education', market: 4, state: 8 },
  { area: 'Electricity', market: 5, state: 7 },
  { area: 'Healthcare', market: 6, state: 7 },
];

const learnSteps: LearnStep[] = [
  {
    title: 'Three Economic Systems',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Every economy must answer what to produce, how to produce and for whom to produce. Different systems answer these questions in different ways.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Market economy</p>
            <p className="mt-1 text-slate-600">Private ownership and price signals guide most decisions.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">Command economy</p>
            <p className="mt-1 text-slate-600">Government planners decide output, prices and distribution.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Mixed economy</p>
            <p className="mt-1 text-slate-600">Markets allocate many resources, but the state corrects failures and provides public goods.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Features of South Africa's Mixed Economy",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          South Africa is a mixed economy because private firms dominate many sectors while the state regulates markets and provides essential services.
        </p>
        <DataChart
          data={roleBalanceData}
          series={[
            { key: 'market', label: 'Market influence', color: '#6366f1' },
            { key: 'state', label: 'Government influence', color: '#f59e0b' },
          ]}
          xKey="area"
          type="bar"
          yLabel="Relative role /10"
        />
        <p className="text-sm text-slate-500">Different sectors sit at different points on the market-state spectrum.</p>
      </div>
    ),
  },
  {
    title: 'Public Goods, Merit Goods and Demerit Goods',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Government intervention is strongest where markets under-provide or over-provide certain goods.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Public goods</p>
            <p className="mt-1 text-slate-600">Non-rival and non-excludable goods like street lighting and defence.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Merit goods</p>
            <p className="mt-1 text-slate-600">Education and healthcare create social benefits, so the state subsidises them.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">Demerit goods</p>
            <p className="mt-1 text-slate-600">Alcohol and cigarettes are taxed because they create social costs.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "SA's Economic Structure — The Four Sectors",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The price mechanism still matters in a mixed economy. When demand rises or supply falls, prices help ration scarce resources and signal producers.
        </p>
        <SupplyDemand title="Market for Maize" showShifts={true} />
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Why the graph matters</p>
          <p className="mt-1 text-slate-600">Even with regulation, markets for many goods still move toward equilibrium through changing prices and quantities.</p>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: "South Africa's economy is best described as a:",
    options: ['Command economy', 'Pure market economy', 'Mixed economy', 'Traditional economy'],
    answer: 'Mixed economy',
    explanation: 'SA combines private enterprise (market forces) with significant government intervention — a mixed economy.',
  },
  {
    prompt: 'In a mixed economy, most resource allocation decisions are made by:',
    options: ['Central government planners', 'Price signals and the profit motive', 'Trade unions only', 'Foreign investors'],
    answer: 'Price signals and the profit motive',
    explanation: 'In a mixed economy, markets (price mechanism) guide most decisions, with government correcting market failures.',
  },
  {
    prompt: 'National defence is an example of a:',
    options: ['Merit good', 'Demerit good', 'Public good', 'Private good'],
    answer: 'Public good',
    explanation: 'National defence is non-rival (many people benefit simultaneously) and non-excludable — a classic public good.',
  },
  {
    prompt: 'Government subsidises education because it is a:',
    options: ['Demerit good', 'Public good', 'Merit good', 'Private good'],
    answer: 'Merit good',
    explanation: 'Education is a merit good — socially desirable but under-consumed by markets without government support.',
  },
  {
    prompt: 'The government taxes cigarettes heavily because tobacco is a:',
    options: ['Public good', 'Merit good', 'Demerit good', 'Capital good'],
    answer: 'Demerit good',
    explanation: 'Tobacco is a demerit good — harmful to society and over-consumed if left entirely to market forces.',
  },
  {
    prompt: 'Which sector of the SA economy includes mining activities?',
    options: ['Secondary sector', 'Tertiary sector', 'Primary sector', 'Quaternary sector'],
    answer: 'Primary sector',
    explanation: 'Mining extracts raw natural resources, placing it in the primary sector of the economy.',
  },
  {
    prompt: 'Manufacturing of motor vehicles falls in which economic sector?',
    options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'],
    answer: 'Secondary',
    explanation: 'The secondary sector transforms raw materials into finished goods through manufacturing and construction.',
  },
  {
    prompt: 'A public good differs from a private good because it is:',
    options: ['Provided by private firms', 'Non-rival and non-excludable', 'Always free to produce', 'Only used by the government'],
    answer: 'Non-rival and non-excludable',
    explanation: 'Public goods are non-rival (use by one does not reduce availability to others) and non-excludable (cannot prevent free-riding).',
  },
  {
    prompt: 'Eskom and Transnet are examples of:',
    options: ['Private firms', 'SOEs (State-Owned Enterprises)', 'Foreign multinationals', 'Non-profit organisations'],
    answer: 'SOEs (State-Owned Enterprises)',
    explanation: 'Eskom and Transnet are state-owned enterprises — government-owned entities operating commercially in a mixed economy.',
  },
  {
    prompt: "SA's largest sector by GDP contribution is the:",
    options: ['Primary sector', 'Secondary sector', 'Tertiary sector', 'Quaternary sector'],
    answer: 'Tertiary sector',
    explanation: 'Services (banking, retail, transport, tourism) make up the largest share of SA\'s GDP — the tertiary sector.',
  },
];

const MixedEconomy = () => (
  <CapsSubjectTopic
    title="South Africa's Mixed Economy"
    subtitle="The role of markets and government in SA's economic system"
    learnSteps={learnSteps}
    task="gr11-mixed-economy-t1"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default MixedEconomy;
