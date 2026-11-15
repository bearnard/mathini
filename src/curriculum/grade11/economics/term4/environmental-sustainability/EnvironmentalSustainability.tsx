
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
    options: ['A product has no market price in the economy', 'Production or use imposes costs on outside third parties', 'A firm earns supernormal profit in the market', 'The government subsidises a good for consumers'],
    answer: 'Production or use imposes costs on outside third parties',
    explanation: 'Negative externalities (like pollution) mean the social cost of production exceeds the private cost — the market over-produces harmful goods.',
  },
  {
    prompt: 'The Brundtland Commission\'s definition of sustainable development emphasises:',
    options: ['Maximising GDP growth at any cost to nature', 'Meeting present needs without harming future generations', 'Reducing all of the industrial production', 'Economic sustainability and nothing else'],
    answer: 'Meeting present needs without harming future generations',
    explanation: 'Brundtland (1987) defined sustainability as development that balances present needs against the needs of future generations.',
  },
  {
    prompt: "SA's carbon tax (2019) aims to address climate change by:",
    options: ['Subsidising the coal-fired power stations', 'Taxing emissions so polluters pay and clean tech is favoured', 'Banning the use of all fossil fuels at once', 'Cutting the income taxes that manufacturers pay'],
    answer: 'Taxing emissions so polluters pay and clean tech is favoured',
    explanation: 'A carbon tax internalises the external cost of emissions — firms face a financial incentive to reduce pollution and invest in cleaner alternatives.',
  },
  {
    prompt: 'The Paris Agreement (2015) commits signatory countries to:',
    options: ['Immediately eliminating coal use in every participating country', 'Setting national targets (NDCs) to hold warming well below 2°C, pursuing 1.5°C', 'Paying reparations to developing countries for historical emissions', 'Establishing a global carbon market and nothing else'],
    answer: 'Setting national targets (NDCs) to hold warming well below 2°C, pursuing 1.5°C',
    explanation: 'Paris Agreement signatories commit to their own NDC targets to collectively hold the temperature rise well below 2°C while pursuing efforts to limit it to 1.5°C.',
  },
  {
    prompt: 'The "tragedy of the commons" occurs when:',
    options: ['A monopoly controls a scarce natural resource', 'Shared resources are overused as no owner manages them', 'The government taxes common resources too heavily', 'Environmental laws are too strict for firms'],
    answer: 'Shared resources are overused as no owner manages them',
    explanation: 'Without ownership or regulation, shared resources like fisheries and the atmosphere are overexploited by each individual pursuing self-interest.',
  },
  {
    prompt: 'REIPPPP in SA supports environmental sustainability by:',
    options: ['Expanding the mining of coal in the country', 'Buying private renewable power (solar and wind) to widen supply', 'Subsidising the price of petrol at the pump', 'Building more nuclear power stations on the coast'],
    answer: 'Buying private renewable power (solar and wind) to widen supply',
    explanation: 'REIPPPP has attracted billions in private investment in solar and wind projects, reducing SA\'s dependence on coal-fired electricity.',
  },
  {
    prompt: 'Which of the following is an economic impact of climate change on SA?',
    options: ['A rise in GDP from higher rainfall', 'A smaller need for investment in infrastructure', 'Farming disruption and water scarcity that threaten food security', 'Lower demand for energy in warmer winters'],
    answer: 'Farming disruption and water scarcity that threaten food security',
    explanation: 'Droughts and unpredictable rainfall reduce crop yields in SA — threatening food security, particularly in rural and farming communities.',
  },
  {
    prompt: 'A positive externality is an example of market failure because the market:',
    options: ['It over-produces the good in the market', 'It under-produces the good, as benefits are not all captured', 'It charges too high a price for the good', 'It creates a monopoly in the market for the good'],
    answer: 'It under-produces the good, as benefits are not all captured',
    explanation: 'With positive externalities, the social benefit exceeds the private benefit — markets under-supply goods like education and green technology.',
  },
  {
    prompt: 'The Kyoto Protocol (1997) was significant because it was:',
    options: ['The first voluntary climate agreement', 'The first binding treaty for developed countries to cut emissions', 'An agreement between African countries only', 'A trade agreement that was disguised as a climate deal'],
    answer: 'The first binding treaty for developed countries to cut emissions',
    explanation: 'Kyoto established legally binding emission reduction targets for developed (Annex I) countries — a landmark in international environmental law.',
  },
  {
    prompt: 'SA\'s 2018 Cape Town water crisis ("Day Zero") demonstrated that:',
    options: ['Water is an infinite resource in the country', 'Water scarcity from climate brings real economic risks', 'SA gets far too much rainfall each year', 'Droughts hit agriculture and never affect cities'],
    answer: 'Water scarcity from climate brings real economic risks',
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
