
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const factorProfileData = [
  { factor: 'Land', scarcity: 7, mobility: 1 },
  { factor: 'Labour', scarcity: 8, mobility: 5 },
  { factor: 'Capital', scarcity: 6, mobility: 7 },
  { factor: 'Entrepreneurship', scarcity: 9, mobility: 8 },
];

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/econ/term1/factors-of-production/diagram.webp", alt: "Labour Market" },
    title: 'The Four Factors of Production',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Every business combines four inputs to produce goods and services. CAPS expects you to know both the definition of each factor and a South African example.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Land</strong>
            <p className="mt-1 text-slate-600">Natural resources such as soil, water, forests and minerals. Gold, platinum and coal are classic South African examples.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Labour</strong>
            <p className="mt-1 text-slate-600">Human effort, whether physical or mental. Teachers, miners, nurses and coders all provide labour.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Capital</strong>
            <p className="mt-1 text-slate-600">Man-made tools used to produce other goods, such as tractors, factory buildings and computers.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Entrepreneurship</strong>
            <p className="mt-1 text-slate-600">The factor that organises the others, takes risks and turns ideas into production.</p>
          </div>
        </div>
        <DataChart
          data={factorProfileData}
          series={[
            { key: 'scarcity', label: 'Scarcity pressure in SA', color: '#6366f1' },
            { key: 'mobility', label: 'Mobility between uses', color: '#10b981' },
          ]}
          xKey="factor"
          type="bar"
          yLabel="Score /10"
        />
        <p className="text-sm text-slate-500">
          Compare the bars: land is least mobile, while entrepreneurship is relatively mobile but scarce.
        </p>
      </div>
    ),
  },
  {
    title: 'Remuneration of Factors',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Each factor earns a different reward. In exam questions, always link the correct factor to its remuneration.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-800">Land → Rent</p>
            <p className="mt-1 text-slate-600">Owners of land or natural resources earn rent or royalties.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-800">Labour → Wages and salaries</p>
            <p className="mt-1 text-slate-600">Workers are paid for their time, effort and skills.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-800">Capital → Interest</p>
            <p className="mt-1 text-slate-600">Businesses earn a return on machinery, equipment and invested funds.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-800">Entrepreneurship → Profit</p>
            <p className="mt-1 text-slate-600">Profit rewards the entrepreneur for risk-taking, planning and innovation.</p>
          </div>
        </div>
        <div className="rounded-xl bg-amber-50 p-4 text-left text-amber-900">
          <p className="font-semibold">Quick memory link</p>
          <p className="mt-1">Land-rent, labour-wages, capital-interest, entrepreneur-profit.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Mobility of Factors',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Factor mobility explains how easily resources move from one job, region or industry to another. Labour and capital can move; land usually cannot.
        </p>
        <SupplyDemand title="Labour Market" eqPrice={35} eqQty={5} showShifts={true} />
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">Derived demand</p>
            <p className="mt-1 text-slate-600">Firms demand labour because they demand output. If product demand rises, labour demand also rises.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">Barriers to movement</p>
            <p className="mt-1 text-slate-600">Training costs, transport costs and location limit how quickly labour can move.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'SA Factor Endowments and Challenges',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          South Africa is rich in natural resources and financial infrastructure, but the economy still struggles with unemployment, skills shortages and uneven entrepreneurship.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-800">Strong land endowment</p>
            <p className="mt-1 text-slate-600">Mining resources helped shape the country&apos;s historical growth pattern.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-800">Labour challenge</p>
            <p className="mt-1 text-slate-600">A large labour force exists, but many workers lack the skills demanded by modern firms.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-800">Capital depth</p>
            <p className="mt-1 text-slate-600">Banks, the JSE and pension funds make finance available, although infrastructure bottlenecks reduce returns.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="font-semibold text-slate-800">Entrepreneurship support</p>
            <p className="mt-1 text-slate-600">SMME support, training and easier access to credit can expand entrepreneurial activity.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'Which factor of production is rewarded with rent?',
    options: ['Capital', 'Labour', 'Land', 'Entrepreneurship'],
    answer: 'Land',
    explanation: 'Land earns rent as remuneration — payment for the use of natural resources such as mineral rights or farmland.',
  },
  {
    prompt: 'What is the remuneration for labour?',
    options: ['Rent', 'Wages', 'Interest', 'Profit'],
    answer: 'Wages',
    explanation: 'Labour is rewarded with wages or salaries — payment for human mental or physical effort contributed to production.',
  },
  {
    prompt: 'Which factor of production refers to man-made tools and machinery?',
    options: ['Land', 'Labour', 'Capital', 'Entrepreneurship'],
    answer: 'Capital',
    explanation: 'Capital consists of man-made resources used in production, such as machinery, equipment and factory buildings.',
  },
  {
    prompt: 'The entrepreneur earns which type of remuneration?',
    options: ['Interest', 'Rent', 'Wages', 'Profit'],
    answer: 'Profit',
    explanation: 'The entrepreneur earns profit (revenue minus all costs) as compensation for organising production and bearing risk.',
  },
  {
    prompt: 'Which factor is described as a "gift of nature"?',
    options: ['Capital', 'Entrepreneurship', 'Labour', 'Land'],
    answer: 'Land',
    explanation: 'Land includes all natural resources that exist without human effort, hence it is called a gift of nature.',
  },
  {
    prompt: "South Africa's gold and platinum deposits are an example of which factor?",
    options: ['Capital', 'Labour', 'Entrepreneurship', 'Land'],
    answer: 'Land',
    explanation: 'Mineral resources are natural resources, which fall under the factor of production called land.',
  },
  {
    prompt: 'Interest is the remuneration earned by which factor?',
    options: ['Labour', 'Land', 'Capital', 'Entrepreneurship'],
    answer: 'Capital',
    explanation: 'Capital earns interest or a return on investment as its remuneration for being used in the production process.',
  },
  {
    prompt: 'Which factor of production organises the other three factors?',
    options: ['Land', 'Capital', 'Labour', 'Entrepreneurship'],
    answer: 'Entrepreneurship',
    explanation: 'The entrepreneur is the organiser who combines land, labour and capital to produce goods and services.',
  },
  {
    prompt: 'Which factor of production is the LEAST geographically mobile?',
    options: ['Labour', 'Capital', 'Entrepreneurship', 'Land'],
    answer: 'Land',
    explanation: 'Land is fixed in location and cannot be physically moved — it is the least geographically mobile factor.',
  },
  {
    prompt: 'A factory building is classified as which factor of production?',
    options: ['Land', 'Labour', 'Capital', 'Entrepreneurship'],
    answer: 'Capital',
    explanation: 'Buildings are man-made resources used in production, so they are classified as capital.',
  },
];

const FactorsOfProduction = () => (
  <CapsSubjectTopic
    title="Factors of Production and Remuneration"
    subtitle="Understanding land, labour, capital, entrepreneurship and their rewards"
    learnSteps={learnSteps}
    task="gr11-factors-of-production-t1"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default FactorsOfProduction;
