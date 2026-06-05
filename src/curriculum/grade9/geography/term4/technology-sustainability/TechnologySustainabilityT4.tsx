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
    options: ['Random farming', 'Using technology like GPS and sensors to optimize inputs and monitor fields', 'No technology', 'Old methods'],
    answer: 'Using technology like GPS and sensors to optimize inputs and monitor fields',
    explanation: 'Precision agriculture reduces waste and improves yields.',
  },
  {
    prompt: 'How do improved crop varieties support sustainability?',
    options: ['They don\'t', 'They are resistant to drought, pests, diseases, and produce higher yields', 'They decrease production', 'No benefit'],
    answer: 'They are resistant to drought, pests, diseases, and produce higher yields',
    explanation: 'Better varieties reduce dependency on chemical inputs.',
  },
  {
    prompt: 'What is drip irrigation?',
    options: ['Flooding fields', 'Delivering water directly to plant roots, reducing waste', 'No water system', 'Surface flooding'],
    answer: 'Delivering water directly to plant roots, reducing waste',
    explanation: 'Drip irrigation is highly efficient and water-conserving.',
  },
  {
    prompt: 'How can solar power help farms?',
    options: ['It can\'t', 'Solar panels power pumps, irrigation systems, and equipment', 'Only in cities', 'No benefit'],
    answer: 'Solar panels power pumps, irrigation systems, and equipment',
    explanation: 'Solar energy reduces fuel costs and emissions for farmers.',
  },
  {
    prompt: 'What is biogas in agriculture?',
    options: ['Natural gas only', 'Energy generated from animal manure; reduces emissions and provides power', 'No benefit', 'Only for cows'],
    answer: 'Energy generated from animal manure; reduces emissions and provides power',
    explanation: 'Biogas is renewable energy produced on farms.',
  },
  {
    prompt: 'How can data analytics help farmers?',
    options: ['It doesn\'t', 'By tracking water use, soil health, and yields to optimize farming practices', 'No value', 'Only for corporations'],
    answer: 'By tracking water use, soil health, and yields to optimize farming practices',
    explanation: 'Data-driven decisions improve efficiency and sustainability.',
  },
  {
    prompt: 'What are mobile apps used for in agriculture?',
    options: ['Only gaming', 'Providing farmers with market prices, weather forecasts, and advisory services', 'Entertainment only', 'No use'],
    answer: 'Providing farmers with market prices, weather forecasts, and advisory services',
    explanation: 'Mobile technology improves farmer access to critical information.',
  },
  {
    prompt: 'What is an advantage of early warning systems for farmers?',
    options: ['No advantage', 'They alert farmers to weather hazards, allowing preparation and risk reduction', 'Too late anyway', 'No help'],
    answer: 'They alert farmers to weather hazards, allowing preparation and risk reduction',
    explanation: 'Early warning enables farmers to protect crops and livelihoods.',
  },
  {
    prompt: 'What is a major barrier to technology adoption by small farmers?',
    options: ['No barrier', 'High costs, lack of infrastructure, limited knowledge', 'Too simple', 'Not applicable'],
    answer: 'High costs, lack of infrastructure, limited knowledge',
    explanation: 'Small-scale farmers often lack resources for technology investment.',
  },
  {
    prompt: 'How can technology be made more accessible to poor farmers?',
    options: ['It can\'t', 'Low-cost solutions, mobile technology, local innovation, farmer groups, and government support', 'No solution', 'Impossible'],
    answer: 'Low-cost solutions, mobile technology, local innovation, farmer groups, and government support',
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
