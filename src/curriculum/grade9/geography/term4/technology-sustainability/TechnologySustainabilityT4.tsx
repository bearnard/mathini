import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Technology in agriculture',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Technology offers many tools to improve agricultural productivity and sustainability:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Precision agriculture</strong>
            <p className="text-slate-600">GPS, sensors, drones monitor fields; targeted water/fertilizer application.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Improved varieties</strong>
            <p className="text-slate-600">Drought-resistant, pest-resistant, high-yield crop varieties developed.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Irrigation tech</strong>
            <p className="text-slate-600">Drip irrigation, rainwater harvesting, efficient water systems.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Renewable energy in agriculture',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Renewable energy reduces agriculture's environmental footprint and cost:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Solar power</strong>
            <p className="text-slate-600">Solar panels power pumps, irrigation, and farm equipment.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Biogas</strong>
            <p className="text-slate-600">Manure generates energy; reduces methane emissions.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Wind power</strong>
            <p className="text-slate-600">Wind turbines provide energy for farm operations.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Digital solutions for sustainability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Digital technologies support sustainable resource management:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Data analytics</strong>
            <p className="text-slate-600">Track water use, soil health, yields to optimize practices.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Monitoring systems</strong>
            <p className="text-slate-600">Real-time tracking of environmental conditions and resources.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Market information</strong>
            <p className="text-slate-600">Mobile apps help farmers access prices, weather, advice.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Climate adaptation</strong>
            <p className="text-slate-600">Early warning systems for weather hazards; adaptive planning.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Challenges and opportunities',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Technology must be accessible, affordable, and appropriate for local contexts:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Challenges:</strong>
            <p className="text-slate-600">Cost barriers, infrastructure gaps, knowledge gaps, land rights issues.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Opportunities:</strong>
            <p className="text-slate-600">Low-cost solutions, mobile technology, local innovation, community empowerment.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Technology Data — Example Resource Savings',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Sustainable technology can reduce energy and water use. This chart shows the typical savings linked to several common solutions.</p>
        <DataChart
          data={[
                        { technology: 'LED lighting', saving: 40 },
                        { technology: 'Drip irrigation', saving: 30 },
                        { technology: 'Solar water heaters', saving: 60 },
                        { technology: 'Recycling systems', saving: 25 },
                      ]}
          xKey="technology"
          series={[
                        { key: 'saving', label: 'Typical resource saving (%)', type: 'bar', color: '#10b981' },
                      ]}
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">The aim of green technology is to meet human needs while using fewer resources and producing less waste.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is precision agriculture?',
    options: ['Farming by planting wherever there is room in the field', 'Using GPS and sensors to fine-tune inputs and watch fields', 'Farming with no technology, using hand tools only', 'Farming by old methods that have been handed down'],
    answer: 'Using GPS and sensors to fine-tune inputs and watch fields',
    explanation: 'Precision agriculture reduces waste and improves yields.',
  },
  {
    prompt: 'How do improved crop varieties support sustainability?',
    options: ['They do not help, as all seed gives the same yield', 'They resist drought, pests and disease and give higher yields', 'They lower production, as they need more water', 'They bring no benefit that farmers can see'],
    answer: 'They resist drought, pests and disease and give higher yields',
    explanation: 'Better varieties reduce dependency on chemical inputs.',
  },
  {
    prompt: 'What is drip irrigation?',
    options: ['Flooding the whole field so that water spreads out', 'Giving water straight to plant roots, so less is wasted', 'Using no water system, and relying on rain only', 'Spraying water across the field from the air'],
    answer: 'Giving water straight to plant roots, so less is wasted',
    explanation: 'Drip irrigation is highly efficient and water-conserving.',
  },
  {
    prompt: 'How can solar power help farms?',
    options: ['It cannot, as farms get too little sun', 'Solar panels can power pumps, irrigation and equipment', 'It works in cities only, and not on farms', 'It brings no benefit, as panels cost too much'],
    answer: 'Solar panels can power pumps, irrigation and equipment',
    explanation: 'Solar energy reduces fuel costs and emissions for farmers.',
  },
  {
    prompt: 'What is biogas in agriculture?',
    options: ['A natural gas dug up from deep underground', 'Energy made from animal manure, which cuts emissions and gives power', 'A gas with no benefit to farms', 'A fuel that is made only from cow dung and nothing else'],
    answer: 'Energy made from animal manure, which cuts emissions and gives power',
    explanation: 'Biogas is renewable energy produced on farms.',
  },
  {
    prompt: 'How can data analytics help farmers?',
    options: ['It does not help, as farmers know their land', 'By tracking water, soil health and yields to improve farming', 'It has no value for work on a farm', 'It is useful to big companies and not to farmers'],
    answer: 'By tracking water, soil health and yields to improve farming',
    explanation: 'Data-driven decisions improve efficiency and sustainability.',
  },
  {
    prompt: 'What are mobile apps used for in agriculture?',
    options: ['Playing games for entertainment during rest', 'Giving farmers market prices, weather news and advice', 'Watching films and music while working', 'Nothing, as apps are of no use on farms'],
    answer: 'Giving farmers market prices, weather news and advice',
    explanation: 'Mobile technology improves farmer access to critical information.',
  },
  {
    prompt: 'What is an advantage of early warning systems for farmers?',
    options: ['No advantage, since weather cannot be predicted', 'They warn farmers of weather hazards so they can prepare', 'They come too late to be of any help', 'They help only farmers who own large farms'],
    answer: 'They warn farmers of weather hazards so they can prepare',
    explanation: 'Early warning enables farmers to protect crops and livelihoods.',
  },
  {
    prompt: 'What is a major barrier to technology adoption by small farmers?',
    options: ['There is no barrier, as technology is cheap', 'High costs, poor infrastructure and limited know-how', 'Technology is too simple for small farmers to want', 'Small farmers have no need of any technology'],
    answer: 'High costs, poor infrastructure and limited know-how',
    explanation: 'Small-scale farmers often lack resources for technology investment.',
  },
  {
    prompt: 'How can technology be made more accessible to poor farmers?',
    options: ['It cannot be done, as poor farmers cannot learn', 'Low-cost tools, mobile phones, local ideas, farmer groups and state support', 'There is no solution, since cost cannot be lowered', 'It is impossible, as technology is meant for big farms'],
    answer: 'Low-cost tools, mobile phones, local ideas, farmer groups and state support',
    explanation: 'Appropriate, affordable technology is key to inclusive sustainable agriculture.',
  },
];

const TechnologySustainabilityT4 = () => (
  <CapsSubjectTopic
    title="Technology and Sustainable Resource Use"
    subtitle="Innovation for environmental stewardship"
    learnSteps={learnSteps}
    task="gr9-technology-sustainability-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default TechnologySustainabilityT4;
