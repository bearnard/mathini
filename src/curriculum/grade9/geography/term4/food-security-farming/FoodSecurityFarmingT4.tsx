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
      <div className="space-y-2">
  <p className="text-slate-600">{"In agroforestry, farmers grow trees and crops together on the same land. The tree roots hold the soil, falling leaves feed it, and the trees give extra products such as fruit and firewood."}</p>
  <p className="text-slate-600">{"Everyone can help: plan meals so that less food is thrown away, buy fresh produce from nearby growers, and grow some vegetables at home."}</p>
  <p className="text-slate-600">{"A large share of all food produced is thrown away before it is eaten. Wasted food uses land, water and money, and if it were saved there would be more food to share."}</p>
</div>
</div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is food security?',
    options: ['Locking food away in a safe store so it is not stolen', 'All people having steady access to enough safe, healthy food', 'A condition that exists in wealthy countries only', 'Storing large amounts of food in a warehouse'],
    answer: 'All people having steady access to enough safe, healthy food',
    explanation: 'Food security is a basic human right and global development goal.',
  },
  {
    prompt: 'Why is food security a global problem?',
    options: ['It is not a global problem, as most countries grow enough', 'Over 800 million people lack food because of poverty, conflict and climate', 'Everyone has enough food, but it is badly shared', 'It is a problem of the past that has been solved'],
    answer: 'Over 800 million people lack food because of poverty, conflict and climate',
    explanation: 'Hunger remains widespread despite global food production capacity.',
  },
  {
    prompt: 'What does sustainable agriculture aim to do?',
    options: ['Making the most profit, whatever the cost to nature', 'Balancing yield with care for nature and social fairness', 'Ignoring the environment to grow more food', 'Adding more chemicals to boost every harvest'],
    answer: 'Balancing yield with care for nature and social fairness',
    explanation: 'Sustainable farming maintains ecosystems while feeding people.',
  },
  {
    prompt: 'What is crop rotation?',
    options: ['Planting the same crop on the land year after year', 'Growing different crops in turn on the same land to keep soil healthy', 'Leaving the land bare for many seasons in a row', 'Moving the crops to a distant farm each season'],
    answer: 'Growing different crops in turn on the same land to keep soil healthy',
    explanation: 'Crop rotation prevents soil depletion and reduces pest buildup.',
  },
  {
    prompt: 'How does agroforestry contribute to food security?',
    options: ['It does not help, as trees take water from crops', 'By mixing trees with crops, improving soil and giving varied food', 'It helps trees to grow and nothing else', 'It helps forests only and has no link to farms'],
    answer: 'By mixing trees with crops, improving soil and giving varied food',
    explanation: 'Agroforestry is productive and sustainable.',
  },
  {
    prompt: 'What is the impact of climate change on food security?',
    options: ['Climate change improves food output in all regions', 'Droughts, floods and heat can destroy harvests and cause crop failure', 'Climate change has no effect on harvests', 'Climate change has good effects on farms only'],
    answer: 'Droughts, floods and heat can destroy harvests and cause crop failure',
    explanation: 'Climate change is a major threat to global food security.',
  },
  {
    prompt: 'How does poverty relate to food insecurity?',
    options: ['There is no link between poverty and hunger', 'Low incomes limit how much food people can buy', 'Poverty makes it easier to get enough food', 'Poverty affects housing and not food'],
    answer: 'Low incomes limit how much food people can buy',
    explanation: 'Affordability is critical to food access.',
  },
  {
    prompt: 'What is food waste and how does it affect food security?',
    options: ['Food waste is not a problem, as it is eaten by animals', 'A third of food made is wasted, and could feed millions if saved', 'All food made is eaten, so none is wasted', 'Food waste is good, as it makes new food grow'],
    answer: 'A third of food made is wasted, and could feed millions if saved',
    explanation: 'Reducing food waste can significantly improve food security.',
  },
  {
    prompt: 'How does conflict affect food security?',
    options: ['War improves food supply as armies grow food', 'War disrupts farming and supply, and causes hunger and flight', 'War has no effect on farming or on food supply', 'War has only good effects on the supply of food'],
    answer: 'War disrupts farming and supply, and causes hunger and flight',
    explanation: 'Conflict is a major driver of food crises.',
  },
  {
    prompt: 'What can individual actions contribute to food security?',
    options: ['Nothing, since one person has no effect', 'Cutting waste, buying from local farmers and eating less meat', 'Only governments can act, so people should wait', 'It is impossible for one person to make a difference'],
    answer: 'Cutting waste, buying from local farmers and eating less meat',
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
