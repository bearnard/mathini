import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'The green economy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>green economy</strong> is one that results in improved human wellbeing and social equity while significantly reducing environmental risks and ecological scarcity.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Linear economy (old model)</strong>
            <p className="text-slate-600 text-sm">Take → Make → Dispose. Resources are extracted, used once, and discarded, generating waste and depleting natural capital.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Circular economy (new model)</strong>
            <p className="text-slate-600 text-sm">Design out waste; keep materials in use as long as possible through reuse, repair, and recycling. Mimics natural cycles.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">The green economy includes sectors such as renewable energy, green building, sustainable agriculture, eco-tourism, and waste management.</p>
      </div>
    ),
  },
  {
    title: 'Carbon footprint and climate agreements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>carbon footprint</strong> measures the total greenhouse gas (GHG) emissions caused directly and indirectly by a person, organisation, or country.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>Kyoto Protocol (1997):</strong> the first binding international agreement committing developed countries to reduce GHG emissions. South Africa ratified it in 2002 as a developing country, without binding emission targets.</p>
          <p><strong>Paris Agreement (2015):</strong> 196 nations committed to limiting global warming to well below 2 °C, ideally 1.5 °C above pre-industrial levels.</p>
          <p><strong>Nationally Determined Contributions (NDCs):</strong> each country sets its own emission reduction targets under the Paris Agreement. South Africa's NDC follows a peak, plateau and decline path for emissions.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Green practices in South Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa has introduced several policies and programmes to transition toward a greener economy.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Carbon tax</strong>
            <p className="text-slate-600 text-sm">Introduced in 2019 — companies pay a tax on GHG emissions above a threshold, creating an incentive to reduce pollution.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Green building</strong>
            <p className="text-slate-600 text-sm">Green Star SA certification ensures buildings meet standards for energy efficiency, water conservation, and sustainable materials.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Waste management</strong>
            <p className="text-slate-600 text-sm">Extended Producer Responsibility (EPR) regulations require producers to manage the end-of-life disposal of their products (packaging, electronics, paper).</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">REIPPPP</strong>
            <p className="text-slate-600 text-sm">The renewable energy procurement programme drives investment in solar and wind, creating green jobs and reducing coal dependence.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'GIS in sustainability planning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>GIS</strong> is a powerful tool for monitoring environmental change and planning sustainable land use and green infrastructure.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>Monitoring deforestation:</strong> satellite images over time reveal forest loss; GIS maps the extent and rate of deforestation.</p>
          <p><strong>Carbon mapping:</strong> GIS layers combine vegetation cover and biomass data to estimate how much carbon is stored in different landscapes.</p>
          <p><strong>Urban green planning:</strong> GIS identifies optimal locations for solar farms, wind turbines, urban parks, and green corridors.</p>
          <p><strong>Disaster risk reduction:</strong> flood-risk mapping and land degradation mapping guide climate adaptation planning.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Climate Data — CO₂ Emissions by Country',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Greener economies aim to lower emissions while keeping economies productive. Comparing emissions per person shows how carbon-intensive different economies are.</p>
        <DataChart
          data={[
                        { country: 'USA', co2: 14.9 },
                        { country: 'China', co2: 8.9 },
                        { country: 'Germany', co2: 7.7 },
                        { country: 'South Africa', co2: 6.9 },
                        { country: 'Nigeria', co2: 0.7 },
                      ]}
          xKey="country"
          series={[
                        { key: 'co2', label: 'CO₂ per person (tonnes)', type: 'bar', color: '#ef4444' },
                      ]}
          yLabel="Tonnes"
          height={240}
        />

        <p className="text-sm text-slate-500">Countries with higher emissions have a bigger task in shifting to cleaner energy and production systems.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A green economy is BEST described as one that:',
    options: ['One that focuses on farming and agriculture only', 'One that improves wellbeing and equity while lowering environmental risk', 'One that bans all fossil fuel use straight away', 'One that is run by the government and by no one else'],
    answer: 'One that improves wellbeing and equity while lowering environmental risk',
    explanation: 'A green economy balances economic growth, social equity, and environmental sustainability — not a no-growth or no-industry model.',
  },
  {
    prompt: 'The circular economy differs from the linear economy because it:',
    options: ['It produces more waste than the linear economy does', 'It designs out waste by keeping materials in use through reuse', 'It uses only renewable materials in every product', 'It relies entirely on subsidies from the state'],
    answer: 'It designs out waste by keeping materials in use through reuse',
    explanation: 'In a circular economy, products and materials are kept in use for as long as possible, eliminating the "take-make-dispose" linear model.',
  },
  {
    prompt: 'What does a carbon footprint measure?',
    options: ['The ground area that is taken up by a carbon factory', 'The total greenhouse gases caused by a person, firm or country', 'The amount of carbon that is stored in the forests', 'The depth of the coal mines that a country has'],
    answer: 'The total greenhouse gases caused by a person, firm or country',
    explanation: 'A carbon footprint quantifies all direct and indirect GHG emissions (measured in CO₂ equivalents) attributable to an entity\'s activities.',
  },
  {
    prompt: 'The Paris Agreement (2015) aims to limit global warming to:',
    options: ['0.5 °C above pre-industrial levels', '1.5–2 °C above pre-industrial levels', '3–4 °C above pre-industrial levels', '5 °C above 2000 levels'],
    answer: '1.5–2 °C above pre-industrial levels',
    explanation: 'The Paris Agreement\'s central goal is to keep the global average temperature rise well below 2 °C, and ideally to 1.5 °C, above pre-industrial levels.',
  },
  {
    prompt: 'What is a Nationally Determined Contribution (NDC)?',
    options: ["A country's national budget for development projects", "A country's own emissions targets, set under the Paris Agreement", 'Aid that rich countries give to climate funds', 'Carbon credits that are traded on the stock exchange'],
    answer: "A country's own emissions targets, set under the Paris Agreement",
    explanation: 'Each Paris Agreement signatory submits NDCs detailing how it will reduce emissions and adapt to climate change, updated every five years.',
  },
  {
    prompt: 'South Africa\'s carbon tax (introduced 2019) is designed to:',
    options: ['To pay for the building of roads', 'To charge firms that emit above a limit and so cut emissions', 'To replace the income tax that businesses pay', 'To fund renewable energy projects directly'],
    answer: 'To charge firms that emit above a limit and so cut emissions',
    explanation: 'The carbon tax puts a price on emissions. Companies that emit above their allowance pay a tax per tonne of CO₂, creating a financial incentive to reduce emissions.',
  },
  {
    prompt: 'Green Star SA certification is associated with:',
    options: ['Eco-friendly packaging that is used on products', 'Buildings that meet standards for energy, water and materials', 'Power stations that run on renewable energy', 'Fishing that meets sustainable standards'],
    answer: 'Buildings that meet standards for energy, water and materials',
    explanation: 'Green Star SA is a building rating tool developed by the Green Building Council of South Africa to certify environmentally sustainable buildings.',
  },
  {
    prompt: 'How can GIS assist in planning renewable energy installations?',
    options: ['It controls how much power the solar panels give', 'It finds the best sites using sunlight, wind and grid access', 'It builds the wind turbines in a large factory', 'It measures the carbon content of the air'],
    answer: 'It finds the best sites using sunlight, wind and grid access',
    explanation: 'GIS overlays multiple spatial datasets to identify the best locations for solar farms or wind turbines, considering resource availability and land suitability.',
  },
  {
    prompt: 'Which international climate agreement preceded and was replaced by the Paris Agreement?',
    options: ['Rio Declaration', 'Kyoto Protocol', 'Montreal Protocol', 'Copenhagen Accord'],
    answer: 'Kyoto Protocol',
    explanation: 'The Kyoto Protocol (1997) was the first binding international climate treaty. It committed developed countries to emission reductions. The Paris Agreement (2015) replaced it with a universal framework.',
  },
  {
    prompt: 'Extended Producer Responsibility (EPR) in South Africa requires:',
    options: ['Shoppers to pay a deposit on all packaging', "Producers to manage disposal of their products' packaging and waste", 'The state to fund all of the recycling programmes', 'Retailers to cut the prices of green products'],
    answer: "Producers to manage disposal of their products' packaging and waste",
    explanation: 'EPR regulations shift the responsibility for managing product waste from municipalities to producers, incentivising sustainable design and recycling.',
  },
];

const GreenerEconomiesT4 = () => (
  <CapsSubjectTopic
    title="Greener Economies"
    subtitle="Circular economy, carbon footprint, climate agreements and GIS in sustainability"
    learnSteps={learnSteps}
    task="gr11-greener-economies-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default GreenerEconomiesT4;
