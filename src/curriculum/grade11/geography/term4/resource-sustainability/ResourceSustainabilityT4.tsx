import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Types of resources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Natural resources are materials and substances found in the natural environment that people use for economic gain or survival.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Renewable resources</strong>
            <p className="text-slate-600 text-sm">Can be replenished naturally at a rate comparable to use. Examples: solar energy, wind, timber, fish (if managed), freshwater.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Non-renewable resources</strong>
            <p className="text-slate-600 text-sm">Form over millions of years — once used, cannot be replaced on a human timescale. Examples: coal, oil, gas, minerals, metals.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Flow resources</strong>
            <p className="text-slate-600 text-sm">Continuously available regardless of use (e.g., solar radiation, wind, tidal energy). Cannot be stored in nature.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Overexploitation challenges',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When resources are used faster than they can be replenished, critical environmental systems break down. South Africa faces several overexploitation challenges.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Deforestation</strong>
            <p className="text-slate-600 text-sm">Removal of forests reduces biodiversity, increases soil erosion, disrupts water cycles, and releases stored carbon.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Groundwater depletion</strong>
            <p className="text-slate-600 text-sm">Over-abstraction of underground aquifers can cause land subsidence and deplete water supplies for millions. South Africa's aquifers are under pressure.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Overfishing</strong>
            <p className="text-slate-600 text-sm">Catching fish faster than they can reproduce collapses fish populations. The West Coast pilchard and hake fisheries in SA have been severely stressed.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Soil degradation</strong>
            <p className="text-slate-600 text-sm">Overgrazing, poor farming, and urbanisation degrade 500 million hectares of agricultural land globally each year.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Ecological footprint and Earth Overshoot Day',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>ecological footprint</strong> measures how much biologically productive land and sea is required to sustain a population's lifestyle and absorb its waste.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>Unit:</strong> global hectares (gha) per person. If everyone lived like the average American (~8 gha), we would need 4 Earths.</p>
          <p><strong>Earth Overshoot Day:</strong> the date each year when humanity has used more from nature than the planet can renew in the entire year. In 2023 it fell on 2 August.</p>
          <p><strong>South Africa's footprint:</strong> moderate compared to developed nations, but growing. Water scarcity is a particular concern.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Pathways to sustainability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Achieving sustainability requires changes at individual, community, corporate, and government levels.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Conservation and protected areas</strong>
            <p className="text-slate-600 text-sm">Protecting ecosystems preserves biodiversity and the services they provide (clean water, carbon storage, pollination).</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Recycling and waste reduction</strong>
            <p className="text-slate-600 text-sm">Recovering materials reduces demand for virgin resources and lowers energy use and pollution.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Green technology</strong>
            <p className="text-slate-600 text-sm">Solar panels, electric vehicles, efficient appliances, drip irrigation — technology reduces resource intensity of economic activity.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Community-Based Natural Resource Management (CBNRM)</strong>
            <p className="text-slate-600 text-sm">Local communities manage shared natural resources (forests, fisheries, wildlife) sustainably when given rights and incentives to do so.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Resource Data — South African Water Use by Sector',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Resource sustainability often focuses on water because it is limited and essential. This chart shows the main sectors using water in South Africa.</p>
        <DataChart
          data={[
                        { sector: 'Agriculture', share: 61 },
                        { sector: 'Municipal use', share: 27 },
                        { sector: 'Industry', share: 8 },
                        { sector: 'Mining', share: 4 },
                      ]}
          xKey="sector"
          series={[
                        { key: 'share', label: 'Share of water use (%)', type: 'bar', color: '#0ea5e9' },
                      ]}
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">Efficient irrigation and better urban water management are essential for long-term sustainability.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which of the following is a RENEWABLE resource?',
    options: ['Coal', 'Natural gas', 'Solar energy', 'Iron ore'],
    answer: 'Solar energy',
    explanation: 'Solar energy is continuously replenished by the Sun and is inexhaustible on human timescales — making it a renewable (and flow) resource.',
  },
  {
    prompt: 'An example of a NON-RENEWABLE resource is:',
    options: ['Timber (sustainably managed)', 'Wind', 'Coal', 'Freshwater (managed)'],
    answer: 'Coal',
    explanation: 'Coal is a fossil fuel formed over millions of years. Once extracted and burned, it cannot be replaced — making it a non-renewable resource.',
  },
  {
    prompt: 'What does the ecological footprint measure?',
    options: ['The area of land that is used for farming only', 'The land and sea needed to sustain a lifestyle and absorb its waste', 'The ground area that is covered by human settlements', 'The distance that people travel in a single year'],
    answer: 'The land and sea needed to sustain a lifestyle and absorb its waste',
    explanation: 'The ecological footprint compares human demand on nature against Earth\'s biocapacity (ability to regenerate resources and absorb waste).',
  },
  {
    prompt: 'Earth Overshoot Day marks:',
    options: ['The day that the last glacier on Earth melts', 'The day humanity has used more than nature can renew in a year', 'The yearly World Environment Day on 5 June', 'The date when renewables overtake fossil fuels'],
    answer: 'The day humanity has used more than nature can renew in a year',
    explanation: 'After Earth Overshoot Day, humanity runs on ecological debt — depleting stocks and accumulating waste beyond Earth\'s capacity to absorb it.',
  },
  {
    prompt: 'Deforestation impacts the water cycle by:',
    options: ['More groundwater recharge in the cleared land below', 'Less transpiration, more runoff, floods and less groundwater', 'A cooler local climate above the cleared land area', 'Less rainfall for the whole planet all at the same time'],
    answer: 'Less transpiration, more runoff, floods and less groundwater',
    explanation: 'Trees regulate water by releasing moisture into the atmosphere (transpiration) and absorbing rainfall. Removing them increases runoff and reduces groundwater recharge.',
  },
  {
    prompt: 'Overfishing is defined as:',
    options: ['Catching fish by using methods that are illegal', 'Catching fish faster than stocks can recover, so the stock collapses', 'Using very large fishing nets at sea', 'Importing more fish than a country catches at home'],
    answer: 'Catching fish faster than stocks can recover, so the stock collapses',
    explanation: 'When fishing pressure exceeds the reproductive capacity of a species, populations decline rapidly, threatening both ecosystems and fishing livelihoods.',
  },
  {
    prompt: 'How does recycling contribute to resource sustainability?',
    options: ['It creates new natural resources out of waste', 'It recovers materials for reuse, cutting raw material and energy use', 'It removes all waste from every production process', 'It makes manufacturing cheaper in every case'],
    answer: 'It recovers materials for reuse, cutting raw material and energy use',
    explanation: 'Recycling metals, glass, plastic, and paper reduces mining, quarrying, and processing — conserving both the resource and the energy needed to process virgin materials.',
  },
  {
    prompt: 'Which term describes a resource that is continuously available regardless of how much is used?',
    options: ['Non-renewable', 'Renewable', 'Flow resource', 'Strategic resource'],
    answer: 'Flow resource',
    explanation: 'Flow resources like solar radiation, wind, and tidal energy are continuously supplied by natural processes and cannot be "used up" or stored in nature.',
  },
  {
    prompt: 'Community-Based Natural Resource Management (CBNRM) works best when:',
    options: ['Central government manages every resource from far away', 'Local people get rights and incentives to manage shared resources well', 'Corporations buy the land that belongs to a community', 'International NGOs take over control of local lands'],
    answer: 'Local people get rights and incentives to manage shared resources well',
    explanation: 'When communities have a stake in the resource (property rights, income), they self-regulate use to prevent overexploitation — as seen in Namibian conservancies.',
  },
  {
    prompt: 'Groundwater overuse can lead to which environmental consequence?',
    options: ['More surface water that flows in the rivers', 'Aquifer depletion and land subsidence (sinking ground)', 'More rainfall in the region that is affected', 'Higher flood levels in the rivers of the region'],
    answer: 'Aquifer depletion and land subsidence (sinking ground)',
    explanation: 'When groundwater is extracted faster than it is recharged, aquifer levels drop. In some areas, the empty pore spaces collapse, causing the land surface to sink (subsidence).',
  },
];

const ResourceSustainabilityT4 = () => (
  <CapsSubjectTopic
    title="Resource Use and Sustainability"
    subtitle="Renewable vs non-renewable resources, ecological footprint and pathways to sustainability"
    learnSteps={learnSteps}
    task="gr11-resource-sustainability-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default ResourceSustainabilityT4;
