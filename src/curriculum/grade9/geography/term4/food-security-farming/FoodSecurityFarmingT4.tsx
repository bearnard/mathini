import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'What is food security?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Food security</strong> means all people have reliable access to sufficient, safe, and nutritious food for a healthy life.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Challenge:</p>
          <p className="text-slate-600">Over 800 million people globally suffer from hunger due to poverty, conflict, and climate change.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Factors affecting food security',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Food security is affected by many interconnected factors:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Production</strong>
            <p className="text-slate-600">Adequate land, water, inputs, and technology for farming.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Distribution</strong>
            <p className="text-slate-600">Infrastructure for storage, transport, and market access.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Access</strong>
            <p className="text-slate-600">Income, affordability, and availability in local markets.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Climate</strong>
            <p className="text-slate-600">Rainfall, temperature; droughts and floods threaten harvests.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Conflict</strong>
            <p className="text-slate-600">War disrupts farming and supply chains.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Poverty</strong>
            <p className="text-slate-600">Low income limits ability to purchase food.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Sustainable agriculture and farming',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Sustainable farming practices balance productivity with environmental care:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Soil health</strong>
            <p className="text-slate-600">Crop rotation, composting, reduced tilling conserve soil.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Water management</strong>
            <p className="text-slate-600">Efficient irrigation; rainwater harvesting; protecting water sources.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Biodiversity</strong>
            <p className="text-slate-600">Agroforestry, hedgerows, and polyculture support ecosystems.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Reduced chemicals</strong>
            <p className="text-slate-600">Integrated pest management; organic methods; lower pollution.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Energy efficiency</strong>
            <p className="text-slate-600">Minimal fossil fuel use; renewable energy adoption.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Fair trade</strong>
            <p className="text-slate-600">Ensuring farmers receive fair prices and decent work.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Solutions for food security',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Addressing global food insecurity requires coordinated action:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key strategies:</p>
          <p className="text-slate-600">Increase agricultural productivity sustainably, reduce food waste, improve distribution, reduce poverty, adapt to climate change, support farmers, and ensure peace and stability.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Food Security Data — Undernourished People by Region',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Food security can be measured by the number of people who still do not get enough food. The totals are highest in regions with large populations and widespread poverty.</p>
        <DataChart
          data={[
                        { region: 'Asia', people: 402 },
                        { region: 'Africa', people: 282 },
                        { region: 'Latin America', people: 43 },
                        { region: 'Oceania', people: 3 },
                      ]}
          xKey="region"
          series={[
                        { key: 'people', label: 'Undernourished people (millions)', type: 'bar', color: '#ef4444' },
                      ]}
          yLabel="Millions"
          height={220}
        />

        <p className="text-sm text-slate-500">Food insecurity is linked to poverty, climate shocks, conflict, and poor access to markets.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is food security?',
    options: ['Locking food away', 'All people having reliable access to sufficient, safe, nutritious food', 'Only in wealthy countries', 'Storing food'],
    answer: 'All people having reliable access to sufficient, safe, nutritious food',
    explanation: 'Food security is a basic human right and global development goal.',
  },
  {
    prompt: 'Why is food security a global problem?',
    options: ['It\'s not', 'Over 800 million people lack reliable food access due to poverty, conflict, and climate', 'Everyone has enough food', 'No reason'],
    answer: 'Over 800 million people lack reliable food access due to poverty, conflict, and climate',
    explanation: 'Hunger remains widespread despite global food production capacity.',
  },
  {
    prompt: 'What does sustainable agriculture aim to do?',
    options: ['Only maximize profits', 'Balance productivity with environmental protection and social fairness', 'No environmental concern', 'Increase chemicals'],
    answer: 'Balance productivity with environmental protection and social fairness',
    explanation: 'Sustainable farming maintains ecosystems while feeding people.',
  },
  {
    prompt: 'What is crop rotation?',
    options: ['Planting one crop forever', 'Growing different crops in sequence on the same land to maintain soil health', 'No planting', 'Moving crops far away'],
    answer: 'Growing different crops in sequence on the same land to maintain soil health',
    explanation: 'Crop rotation prevents soil depletion and reduces pest buildup.',
  },
  {
    prompt: 'How does agroforestry contribute to food security?',
    options: ['It doesn\'t', 'By integrating trees with crops, improving soil, providing diverse food, and protecting ecosystems', 'Only for trees', 'Only for forests'],
    answer: 'By integrating trees with crops, improving soil, providing diverse food, and protecting ecosystems',
    explanation: 'Agroforestry is productive and sustainable.',
  },
  {
    prompt: 'What is the impact of climate change on food security?',
    options: ['Improves food production', 'Droughts, floods, and temperature changes threaten harvests and cause crop failures', 'No impact', 'Only positive'],
    answer: 'Droughts, floods, and temperature changes threaten harvests and cause crop failures',
    explanation: 'Climate change is a major threat to global food security.',
  },
  {
    prompt: 'How does poverty relate to food insecurity?',
    options: ['No connection', 'Low income limits people\'s ability to purchase food', 'Poverty helps food security', 'No relationship'],
    answer: 'Low income limits people\'s ability to purchase food',
    explanation: 'Affordability is critical to food access.',
  },
  {
    prompt: 'What is food waste and how does it affect food security?',
    options: ['No problem', 'One-third of food produced is wasted; this could feed millions if recovered', 'All food is eaten', 'Waste is good'],
    answer: 'One-third of food produced is wasted; this could feed millions if recovered',
    explanation: 'Reducing food waste can significantly improve food security.',
  },
  {
    prompt: 'How does conflict affect food security?',
    options: ['It improves it', 'War disrupts farming, supply chains, and causes displacement and hunger', 'No effect', 'Only positive'],
    answer: 'War disrupts farming, supply chains, and causes displacement and hunger',
    explanation: 'Conflict is a major driver of food crises.',
  },
  {
    prompt: 'What can individual actions contribute to food security?',
    options: ['Nothing', 'Reducing waste, buying from local farmers, supporting fair trade, and eating less meat', 'Only governments', 'Impossible'],
    answer: 'Reducing waste, buying from local farmers, supporting fair trade, and eating less meat',
    explanation: 'Individual choices collectively support food security and sustainability.',
  },
];

const FoodSecurityFarmingT4 = () => (
  <CapsSubjectTopic
    title="Food Security and Sustainable Farming"
    subtitle="Ensuring nutrition for a growing world"
    learnSteps={learnSteps}
    task="gr9-food-security-farming-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default FoodSecurityFarmingT4;
