
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const energyTransitionData = [
  { year: '2019', emissions: 470, renewables: 11 },
  { year: '2020', emissions: 455, renewables: 12 },
  { year: '2021', emissions: 448, renewables: 14 },
  { year: '2022', emissions: 438, renewables: 16 },
  { year: '2023', emissions: 430, renewables: 18 },
];

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/econ/term4/environmental-sustainability/diagram.webp", alt: "Polluting Industry" },
    title: 'Environmental Externalities and Market Failure',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Pollution is a negative externality because firms do not automatically include the full social cost of production in the market price.
        </p>
        <SupplyDemand title="Polluting Industry" showShifts={true} />
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Interpretation</p>
          <p className="mt-1 text-slate-600">Policies such as carbon taxes raise private costs and can shift supply left, reducing output and emissions toward a more socially efficient level.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Climate Change — Economic Impacts',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Climate change affects agriculture, water security, coastal infrastructure, tourism and energy demand in South Africa.
        </p>
        <DataChart
          data={energyTransitionData}
          series={[
            { key: 'emissions', label: 'CO₂ emissions index', color: '#ef4444' },
            { key: 'renewables', label: 'Renewables share (%)', color: '#10b981' },
          ]}
          xKey="year"
          type="line"
          yLabel="Index / %"
        />
      </div>
    ),
  },
  {
    title: 'Sustainable Development',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Sustainable development means meeting present needs without reducing the ability of future generations to meet theirs.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Economic</p>
            <p className="mt-1 text-slate-600">Growth should be productive and financially sustainable.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Environmental</p>
            <p className="mt-1 text-slate-600">Natural resources and ecosystems must be protected.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-semibold text-purple-800">Social</p>
            <p className="mt-1 text-slate-600">Development must reduce poverty and expand fair access to opportunity.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'SA Environmental Policies and International Agreements',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          South Africa uses domestic tools such as a carbon tax and renewable procurement, while also participating in global agreements such as Kyoto and Paris.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-4">
            <p className="font-semibold text-orange-800">SA policy</p>
            <p className="mt-1 text-slate-600">Carbon tax and REIPPPP encourage cleaner production and energy diversification.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Global agreements</p>
            <p className="mt-1 text-slate-600">Kyoto and Paris coordinate international action to limit warming and emissions.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'A negative externality occurs when:',
    options: ['A product has no market price', 'Production or consumption imposes costs on third parties not involved in the transaction', 'A firm earns supernormal profit', 'Government subsidises a good'],
    answer: 'Production or consumption imposes costs on third parties not involved in the transaction',
    explanation: 'Negative externalities (like pollution) mean the social cost of production exceeds the private cost — the market over-produces harmful goods.',
  },
  {
    prompt: 'The Brundtland Commission\'s definition of sustainable development emphasises:',
    options: ['Maximising GDP growth at any environmental cost', 'Meeting present needs without compromising future generations\' ability to meet their needs', 'Reducing all industrial production', 'Only economic sustainability'],
    answer: "Meeting present needs without compromising future generations' ability to meet their needs",
    explanation: 'Brundtland (1987) defined sustainability as development that balances present needs against the needs of future generations.',
  },
  {
    prompt: "SA's carbon tax (2019) aims to address climate change by:",
    options: ['Subsidising coal-fired power stations', 'Taxing greenhouse gas emissions to make polluters pay the social cost and incentivise clean technology', 'Banning all fossil fuel use immediately', 'Reducing income taxes for manufacturers'],
    answer: 'Taxing greenhouse gas emissions to make polluters pay the social cost and incentivise clean technology',
    explanation: 'A carbon tax internalises the external cost of emissions — firms face a financial incentive to reduce pollution and invest in cleaner alternatives.',
  },
  {
    prompt: 'The Paris Agreement (2015) commits signatory countries to:',
    options: ['Immediately eliminating coal use', 'Setting nationally determined contributions (NDCs) to limit global warming to 1.5–2°C', 'Paying reparations to developing countries for historical emissions', 'Establishing a global carbon market only'],
    answer: 'Setting nationally determined contributions (NDCs) to limit global warming to 1.5–2°C',
    explanation: 'Paris Agreement signatories commit to their own NDC targets to collectively keep global temperature rises within the 1.5–2°C limit.',
  },
  {
    prompt: 'The "tragedy of the commons" occurs when:',
    options: ['A monopoly controls a natural resource', 'Shared resources are overused because no individual owner exists to manage them sustainably', 'Government taxes common resources excessively', 'Environmental laws are too strict'],
    answer: 'Shared resources are overused because no individual owner exists to manage them sustainably',
    explanation: 'Without ownership or regulation, shared resources like fisheries and the atmosphere are overexploited by each individual pursuing self-interest.',
  },
  {
    prompt: 'REIPPPP in SA supports environmental sustainability by:',
    options: ['Expanding coal mining', 'Procuring private renewable energy (solar and wind) to diversify the electricity supply', 'Subsidising petrol prices', 'Building more nuclear power stations'],
    answer: 'Procuring private renewable energy (solar and wind) to diversify the electricity supply',
    explanation: 'REIPPPP has attracted billions in private investment in solar and wind projects, reducing SA\'s dependence on coal-fired electricity.',
  },
  {
    prompt: 'Which of the following is an economic impact of climate change on SA?',
    options: ['Rising GDP from increased rainfall', 'Reduced need for infrastructure investment', 'Agricultural disruption and water scarcity threatening food security', 'Lower energy demand due to warmer winters'],
    answer: 'Agricultural disruption and water scarcity threatening food security',
    explanation: 'Droughts and unpredictable rainfall reduce crop yields in SA — threatening food security, particularly in rural and farming communities.',
  },
  {
    prompt: 'A positive externality is an example of market failure because the market:',
    options: ['Over-produces the good', 'Under-produces or under-prices the good since the producer cannot capture all social benefits', 'Charges too high a price', 'Creates a monopoly over the good'],
    answer: 'Under-produces or under-prices the good since the producer cannot capture all social benefits',
    explanation: 'With positive externalities, the social benefit exceeds the private benefit — markets under-supply goods like education and green technology.',
  },
  {
    prompt: 'The Kyoto Protocol (1997) was significant because it was:',
    options: ['The first voluntary climate agreement', 'The first legally binding treaty requiring developed countries to reduce greenhouse gas emissions', 'An agreement between only African countries', 'A trade agreement disguised as a climate deal'],
    answer: 'The first legally binding treaty requiring developed countries to reduce greenhouse gas emissions',
    explanation: 'Kyoto established legally binding emission reduction targets for developed (Annex I) countries — a landmark in international environmental law.',
  },
  {
    prompt: 'SA\'s 2018 Cape Town water crisis ("Day Zero") demonstrated that:',
    options: ['Water is an infinite resource', 'Climate-related water scarcity poses serious economic and humanitarian risks', 'SA has too much rainfall', 'Droughts only affect agriculture, not cities'],
    answer: 'Climate-related water scarcity poses serious economic and humanitarian risks',
    explanation: 'The near-total depletion of Cape Town\'s reservoirs showed that climate change-induced droughts threaten urban water security and economic activity.',
  },
];

const EnvironmentalSustainability = () => (
  <CapsSubjectTopic
    title="Environmental Deterioration and Sustainability"
    subtitle="Externalities, climate change, green economy and SA's environmental policy"
    learnSteps={learnSteps}
    task="gr11-environmental-sustainability-t4"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default EnvironmentalSustainability;
