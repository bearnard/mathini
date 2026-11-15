import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';


const learnSteps: LearnStep[] = [
  {
    title: 'Conventional (non-renewable) energy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Conventional energy sources are <strong>finite</strong> — once used they cannot be replenished on a human timescale. Most emit greenhouse gases when burned.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Coal</strong>
            <p className="text-slate-600 text-sm">South Africa generates roughly 70-80% of its electricity from coal (Eskom). Cheap and abundant locally, but major CO₂ emitter and health risk from pollution.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Oil and natural gas</strong>
            <p className="text-slate-600 text-sm">Used mainly for transport (oil) and heating/cooking (gas). South Africa imports most of its oil. Natural gas is cleaner than coal.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Nuclear</strong>
            <p className="text-slate-600 text-sm">Koeberg near Cape Town generates roughly 4-5% of SA's electricity. Zero direct carbon emissions but radioactive waste and high cost remain concerns.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Renewable (non-conventional) energy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Renewable energy sources are <strong>naturally replenished</strong> and produce little or no greenhouse gas emissions during operation.
        </p>
        <div className="grid gap-2 md:grid-cols-3 text-left text-sm">
          <div className="rounded-xl bg-yellow-50 p-3">
            <strong className="text-yellow-700">Solar</strong>
            <p className="text-slate-600">SA has excellent solar irradiation. PV panels and CSP plants are increasingly common. Low operating cost.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-3">
            <strong className="text-blue-700">Wind</strong>
            <p className="text-slate-600">Wind farms along the Western and Eastern Cape. Intermittent but increasingly cost-competitive.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-3">
            <strong className="text-teal-700">Hydroelectric</strong>
            <p className="text-slate-600">Large hydro (e.g., DRC's Inga Dam potential) and run-of-river schemes. Reliable but geography-dependent.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-3">
            <strong className="text-orange-700">Geothermal</strong>
            <p className="text-slate-600">Uses Earth's internal heat. Limited potential in SA but significant in East Africa (Kenya, Ethiopia).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-3">
            <strong className="text-green-700">Biomass</strong>
            <p className="text-slate-600">Burning wood, crop waste, or biogas from animal waste. Widely used in rural SA. Can be carbon-neutral if managed sustainably.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "South Africa's energy crisis",
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa has experienced severe electricity shortages — known as <strong>load shedding</strong> — as demand has outpaced supply and ageing coal power stations have become unreliable.
        </p>
        <div className="bg-red-50 p-5 rounded-xl text-left space-y-2">
          <p><strong className="text-red-700">Causes of load shedding:</strong> ageing Eskom infrastructure, maintenance backlogs, lack of new generating capacity, rising demand, corruption, and funding shortfalls.</p>
          <p><strong className="text-red-700">Economic impact:</strong> massive costs to businesses, job losses, reduced economic growth, and deterred investment.</p>
          <p className="text-slate-600"><strong>Response:</strong> the REIPPPP has brought over 6 000 MW of private renewable energy capacity online since 2011; rooftop solar has expanded rapidly.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Comparing energy sources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Each energy source has trade-offs across cost, environmental impact, reliability, and job creation that must be weighed in energy planning.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Advantages of renewables</strong>
            <p className="text-slate-600 text-sm">Zero fuel cost, low carbon emissions, rapidly falling costs (solar), energy security (less import dependence), job creation in new industries.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Disadvantages of renewables</strong>
            <p className="text-slate-600 text-sm">Intermittent supply (wind and solar need storage or backup), high upfront capital cost, land use concerns for large installations.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Energy Data — South African Electricity Sources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">South Africa still relies heavily on coal, but renewable energy is increasing. Comparing the shares helps learners think about energy transitions.</p>
        <DataChart
          data={[
                        { source: 'Coal', share: 80 },
                        { source: 'Renewables', share: 12 },
                        { source: 'Nuclear', share: 4 },
                        { source: 'Gas and diesel', share: 4 },
                      ]}
          xKey="source"
          series={[
                        { key: 'share', label: 'Share of electricity (%)', type: 'bar', color: '#475569' },
                      ]}
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">This mix matters because energy choices affect jobs, costs, greenhouse gas emissions, and energy security.</p>
      </div>
    ),
  },
  {
    title: "Fuels and their costs",
    content: (
      <div className="space-y-4">
        <GapRule>{"Burning coal releases carbon dioxide and other pollutants that warm the planet and harm health. Rotating blackouts let Eskom share limited supply instead of letting the grid crash. Plants take in carbon while growing, so burning wood or crop waste can roughly balance out if replanted."}</GapRule>
        <GapWorked title={"Explain the terms"} steps={["Coal: warming gases and health problems near power stations.", "Blackouts: Eskom rotates outages to protect the grid.", "Biomass: new growth absorbs what burning releases, if the crop is replanted."]} />
        <GapMistake>{"Calling biomass carbon-free."}</GapMistake>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Approximately what percentage of South Africa\'s electricity is generated from coal?',
    options: ['20%', '40%', '50%', '70-80%'],
    answer: '70-80%',
    explanation: 'Eskom\'s coal power stations provide roughly 70-80% of South Africa\'s electricity (about 70% in recent years), making the country highly carbon-intensive.',
  },
  {
    prompt: 'Which South African nuclear power station is located near Cape Town?',
    options: ['Pelindaba', 'Koeberg', 'Medupi', 'Kusile'],
    answer: 'Koeberg',
    explanation: 'Koeberg Nuclear Power Station near Cape Town is Africa\'s only commercial nuclear plant, providing about 4-5% of South Africa\'s electricity.',
  },
  {
    prompt: 'What is the main environmental disadvantage of burning coal for electricity?',
    options: ['Coal is too costly to buy for power stations', 'It emits a lot of CO₂ and pollutants, driving climate change', 'Coal power stations use far too much water', 'Coal is an unreliable fuel for making power'],
    answer: 'It emits a lot of CO₂ and pollutants, driving climate change',
    explanation: 'Coal combustion is the largest source of CO₂ emissions and also releases SO₂, NOₓ, and particulates that cause acid rain and health problems.',
  },
  {
    prompt: 'What is "load shedding" in the South African context?',
    options: ['Sending electricity out to rural areas that lack power', 'Planned power cuts to stop the grid collapsing when supply is short', 'Putting up new electrical lines and poles in towns', 'Lowering the load on the power lines during winter'],
    answer: 'Planned power cuts to stop the grid collapsing when supply is short',
    explanation: 'Eskom implements load shedding (rotational power cuts) when available generating capacity falls short of national electricity demand.',
  },
  {
    prompt: 'Which renewable energy source uses the energy of falling or flowing water to generate electricity?',
    options: ['Geothermal', 'Solar PV', 'Hydroelectricity', 'Biomass'],
    answer: 'Hydroelectricity',
    explanation: 'Hydroelectric plants use the gravitational potential energy of water flowing through turbines to generate electricity.',
  },
  {
    prompt: 'South Africa has excellent potential for solar energy primarily because:',
    options: ['It has no coal reserves that can be used', 'It has high solar irradiation, especially in the Northern Cape', 'Solar panels are cheap to make in South Africa', 'It lies close to the equator'],
    answer: 'It has high solar irradiation, especially in the Northern Cape',
    explanation: 'South Africa receives some of the highest levels of solar irradiation in the world, making it ideal for both PV and concentrated solar power (CSP) projects.',
  },
  {
    prompt: 'A main DISADVANTAGE of wind energy is that it:',
    options: ['It gives off a large amount of greenhouse gas', 'It is intermittent: it makes power only when the wind is strong enough', 'It needs radioactive materials to run turbines', 'It makes harmful waste products that must be stored'],
    answer: 'It is intermittent: it makes power only when the wind is strong enough',
    explanation: 'Wind turbines cannot generate electricity when wind speeds are too low or too high, requiring backup power or storage solutions.',
  },
  {
    prompt: 'Geothermal energy is generated by:',
    options: [
      'Burning natural gas underground',
      'Harnessing heat from the Earth\'s interior',
      'Solar panels installed underground',
      'Tidal movements in the ocean',
    ],
    answer: 'Harnessing heat from the Earth\'s interior',
    explanation: 'Geothermal energy uses steam or hot water from deep underground to drive turbines. Kenya and Ethiopia have significant geothermal capacity in East Africa.',
  },
  {
    prompt: 'The REIPPPP was designed to:',
    options: ['To build new coal-fired power stations in the north', 'To buy renewable power from private producers and widen the energy mix', 'To make the state the full owner of the electricity grid', 'To expand the generation of nuclear power in the Cape'],
    answer: 'To buy renewable power from private producers and widen the energy mix',
    explanation: 'The Renewable Energy Independent Power Producer Procurement Programme has successfully brought solar, wind, and other renewable capacity online through competitive bidding since 2011.',
  },
  {
    prompt: 'Biomass energy is considered potentially carbon-neutral because:',
    options: ['It gives off no CO₂ at all when it is burned', 'Plants absorb CO₂ as they grow, offsetting the CO₂ released when burned', 'It is too costly to burn, so it is hardly ever used', 'Biomass is a fossil fuel that formed long ago'],
    answer: 'Plants absorb CO₂ as they grow, offsetting the CO₂ released when burned',
    explanation: 'When biomass is sustainably managed, the CO₂ released during burning is reabsorbed by new plant growth, making it approximately carbon-neutral.',
  },
];

const EnergyResourcesT4 = () => (
  <CapsSubjectTopic
    title="Energy Resources"
    subtitle="Conventional and renewable energy, South Africa's energy mix and the transition to clean power"
    learnSteps={learnSteps}
    task="gr11-energy-resources-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default EnergyResourcesT4;
