
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const accessGapData = [
  { area: 'Metro', electricity: 95, internet: 78 },
  { area: 'Township', electricity: 86, internet: 52 },
  { area: 'Rural', electricity: 71, internet: 35 },
];

const learnSteps: LearnStep[] = [
  {
    title: 'Types of Infrastructure',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Infrastructure includes the physical and social systems that make economic life possible. CAPS normally divides it into economic and social infrastructure.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Economic infrastructure</p>
            <p className="mt-1 text-slate-600">Roads, ports, railways, electricity, water networks and telecommunications support production and trade.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Social infrastructure</p>
            <p className="mt-1 text-slate-600">Schools, clinics, hospitals and housing build human capital and improve quality of life.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Infrastructure and Economic Development',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Better infrastructure lowers costs, raises productivity and shifts supply to the right. Poor infrastructure has the opposite effect.
        </p>
        <SupplyDemand title="Transport Costs and Supply" showShifts={true} />
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Interpretation</p>
          <p className="mt-1 text-slate-600">When roads, electricity and broadband improve, firms can supply more at lower cost, increasing output and reducing prices.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Apartheid Legacy and Economic Exclusion',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Apartheid spatial planning concentrated services in white areas and left townships and rural settlements with weak access to infrastructure.
        </p>
        <DataChart
          data={accessGapData}
          series={[
            { key: 'electricity', label: 'Households with electricity (%)', color: '#6366f1' },
            { key: 'internet', label: 'Households with internet (%)', color: '#10b981' },
          ]}
          xKey="area"
          type="bar"
          yLabel="%"
        />
        <p className="text-sm text-slate-500">
          The chart highlights how access gaps translate into exclusion from jobs, education and markets.
        </p>
      </div>
    ),
  },
  {
    title: 'Government Policy Responses to Exclusion',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Since 1994, government has tried to close the infrastructure gap through service delivery, housing, transport upgrades and digital inclusion programmes.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Progress</p>
            <p className="mt-1 text-slate-600">RDP housing, electricity connections and water expansion widened access for millions of households.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">Ongoing barriers</p>
            <p className="mt-1 text-slate-600">Load-shedding, weak municipal capacity, corruption and maintenance backlogs slow progress.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'Roads, ports and electricity grids are examples of:',
    options: ['Social infrastructure', 'Economic infrastructure', 'Demerit goods', 'Public goods only'],
    answer: 'Economic infrastructure',
    explanation: 'Economic infrastructure includes physical systems that support productive economic activity such as transport networks and energy supply.',
  },
  {
    prompt: 'Schools and hospitals are classified as:',
    options: ['Economic infrastructure', 'Social infrastructure', 'Capital goods', 'Tertiary sector output'],
    answer: 'Social infrastructure',
    explanation: 'Social infrastructure supports human development — education, health and welfare facilities.',
  },
  {
    prompt: "SA's electricity load-shedding crisis primarily damages which type of infrastructure?",
    options: ['Social infrastructure', 'Road infrastructure', 'Economic infrastructure', 'Digital infrastructure'],
    answer: 'Economic infrastructure',
    explanation: 'Electricity generation is economic infrastructure — its failure directly reduces productive capacity and GDP growth.',
  },
  {
    prompt: "Apartheid's homelands policy contributed to economic exclusion mainly by:",
    options: ['Raising wages in rural areas', 'Concentrating infrastructure in white areas and forcing black workers to live far from economic centres', 'Investing heavily in township roads', 'Expanding access to finance for black entrepreneurs'],
    answer: 'Concentrating infrastructure in white areas and forcing black workers to live far from economic centres',
    explanation: 'Spatial apartheid denied infrastructure to homelands and townships, creating deep economic exclusion that persists today.',
  },
  {
    prompt: 'The RDP (Reconstruction and Development Programme) aimed to address economic exclusion through:',
    options: ['Privatising SOEs', 'Providing housing, services and infrastructure to previously disadvantaged communities', 'Reducing taxes on corporations', 'Eliminating trade unions'],
    answer: 'Providing housing, services and infrastructure to previously disadvantaged communities',
    explanation: 'The RDP focused on meeting basic needs: housing, water, electricity and social services for all South Africans.',
  },
  {
    prompt: 'The National Development Plan (NDP) targets large-scale investment in infrastructure to:',
    options: ['Replace all SOEs with private firms', 'Close the infrastructure gap and stimulate inclusive economic growth', 'Export more raw materials', 'Reduce government spending'],
    answer: 'Close the infrastructure gap and stimulate inclusive economic growth',
    explanation: 'The NDP identifies infrastructure investment as central to achieving inclusive growth and reducing poverty.',
  },
  {
    prompt: 'Which factor does unreliable electricity supply most directly affect?',
    options: ['Social infrastructure only', 'Labour mobility', 'Economic infrastructure and productive capacity', 'Trade balance'],
    answer: 'Economic infrastructure and productive capacity',
    explanation: 'Load-shedding reduces hours of operation for factories, mines and businesses, directly cutting productive output.',
  },
  {
    prompt: 'Broadband and ICT network access is increasingly seen as:',
    options: ['A luxury good', 'Essential 21st-century economic infrastructure', 'Only relevant to the quaternary sector', 'A demerit good'],
    answer: 'Essential 21st-century economic infrastructure',
    explanation: 'Digital connectivity enables economic participation, e-commerce and education — it is now considered core infrastructure.',
  },
  {
    prompt: 'Economic exclusion refers to:',
    options: ['Restrictions on importing foreign goods', 'The inability of certain groups to participate fully in economic opportunities', 'Government monopoly over production', 'The removal of subsidies for agriculture'],
    answer: 'The inability of certain groups to participate fully in economic opportunities',
    explanation: 'Economic exclusion describes barriers (spatial, historical or structural) that prevent people from accessing jobs, markets and services.',
  },
  {
    prompt: 'Health infrastructure increases economic output by:',
    options: ['Reducing government debt', 'Improving labour productivity through healthier workers', 'Lowering the interest rate', 'Expanding the primary sector'],
    answer: 'Improving labour productivity through healthier workers',
    explanation: 'A healthy workforce is more productive — investment in clinics and hospitals strengthens the human capital base of the economy.',
  },
];

const InfrastructureExclusion = () => (
  <CapsSubjectTopic
    title="Infrastructure and Economic Exclusion"
    subtitle="How infrastructure shapes economic access and development in SA"
    learnSteps={learnSteps}
    task="gr11-infrastructure-exclusion-t1"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default InfrastructureExclusion;
