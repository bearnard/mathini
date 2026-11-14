import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'What is colonialism?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Colonialism</strong> is when a powerful country controls and rules over another territory, extracting resources and imposing its systems of government.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Historical impact:</p>
          <p className="text-slate-600">Colonial powers extracted wealth, exploited labour, and left lasting economic and social imbalances.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Colonial legacy and economic impacts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Colonialism created economic structures that still affect development today:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Extraction of resources</strong>
            <p className="text-slate-600">Minerals, timber, and agricultural products were sent to colonial powers.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Dependent economies</strong>
            <p className="text-slate-600">Colonies became dependent on exports; little local manufacturing developed.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Limited investment</strong>
            <p className="text-slate-600">Colonial powers invested little in education, healthcare, or local infrastructure.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Debt and poverty</strong>
            <p className="text-slate-600">Many post-colonial nations remained poor and indebted.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Understanding trade imbalances',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Trade imbalances</strong> occur when developed and developing nations trade on unequal terms.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Developed countries:</strong>
            <p className="text-slate-600">Export high-value manufactured goods; import raw materials cheaply.</p>
          </div>
          <div className="rounded-xl bg-green-50 p4">
            <strong className="text-green-700">Developing countries:</strong>
            <p className="text-slate-600">Export cheap raw materials; import expensive manufactured goods.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Breaking cycles of dependency',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Countries are working to reduce colonial economic patterns through diversification and development:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Strategies:</p>
          <p className="text-slate-600">Investing in education, developing local industries, fair trade partnerships, infrastructure development, and regional cooperation.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Trade Data — Value Added Along a Colonial Trade Chain',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Colonial trade often exported low-value raw materials and imported high-value manufactured products. This example shows how value rises as processing increases.</p>
        <DataChart
          data={[
                        { stage: 'Raw cocoa beans', value: 1000 },
                        { stage: 'Cocoa paste', value: 1800 },
                        { stage: 'Chocolate blocks', value: 6000 },
                        { stage: 'Branded chocolate', value: 12000 },
                      ]}
          xKey="stage"
          series={[
                        { key: 'value', label: 'Approximate value (US$/tonne)', type: 'bar', color: '#8b5cf6' },
                      ]}
          yLabel="US$/tonne"
          height={220}
        />

        <p className="text-sm text-slate-500">The gap between raw exports and finished imports helped create long-term trade imbalances.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is colonialism?',
    options: ['Trade between two countries on equal terms', 'When a strong country rules and exploits another territory', 'People moving to settle in a new country', 'Growth of the economy of a country over time'],
    answer: 'When a strong country rules and exploits another territory',
    explanation: 'Colonialism involved political control, resource extraction, and economic exploitation.',
  },
  {
    prompt: 'How did colonialism affect developing countries economically?',
    options: ['It helped colonies develop evenly across all sectors', 'It took resources out and left dependent, unbalanced economies', 'It had no real impact on the economies of colonies', 'It affected the trade of colonies but nothing else'],
    answer: 'It took resources out and left dependent, unbalanced economies',
    explanation: 'Colonial economies were structured to benefit the colonizer, leaving colonies underdeveloped.',
  },
  {
    prompt: 'What is a trade imbalance?',
    options: ['Trade in which both partners gain exactly the same', 'Trade in which one side gains more than the other', 'A situation with no trade between any partners', 'Trade between people who live in one country'],
    answer: 'Trade in which one side gains more than the other',
    explanation: 'Trade imbalances favour those selling high-value goods over those selling raw materials.',
  },
  {
    prompt: 'Why do developing countries often export raw materials?',
    options: ['By choice, since raw materials are easy to sell', 'Because of colonial history and little industry of their own', 'Because raw materials earn more than finished goods', 'Because of rules that protect the environment'],
    answer: 'Because of colonial history and little industry of their own',
    explanation: 'Colonial structures limited industrial development in colonized territories.',
  },
  {
    prompt: 'What advantage do developed countries have in international trade?',
    options: ['They can sell goods at lower prices than anyone else', 'They have more access to raw materials than others', 'They can sell high-value factory goods for larger profits', 'They have less need to trade with other countries'],
    answer: 'They can sell high-value factory goods for larger profits',
    explanation: 'Manufactured goods command higher prices than raw materials on international markets.',
  },
  {
    prompt: 'What did colonial powers typically invest in during colonization?',
    options: ['Education and healthcare, in equal amounts everywhere', 'Little in schools or clinics; most in rail and ports to take resources out', 'Farming only, to feed the people who lived there', 'Everything, in equal amounts, across the whole colony'],
    answer: 'Little in schools or clinics; most in rail and ports to take resources out',
    explanation: 'Colonial investment focused on extracting resources, not developing local society.',
  },
  {
    prompt: 'How does colonial economic dependency affect modern development?',
    options: ['It has no effect on the economies of today', 'Many former colonies stay poor, with unbalanced economies', 'It affects the trade of countries and nothing else', 'It has helped all countries to grow in the same way'],
    answer: 'Many former colonies stay poor, with unbalanced economies',
    explanation: 'Colonial-era economic structures persist, limiting opportunities for diversification and growth.',
  },
  {
    prompt: 'Which sector grew most during colonialism in Africa?',
    options: ['Factory manufacturing for local sale', 'Schools and universities for local people', 'Mining and farming for export', 'Technology firms such as phone makers'],
    answer: 'Mining and farming for export',
    explanation: 'Colonial economies focused on extracting minerals and agricultural products.',
  },
  {
    prompt: 'What is "fair trade" in the context of overcoming trade imbalances?',
    options: ['Trade that is backed by the army of a strong country', 'Trade in which all sides get fair prices and working conditions', 'Trade that is limited to countries of one region', 'Trade that is stopped to protect local firms'],
    answer: 'Trade in which all sides get fair prices and working conditions',
    explanation: 'Fair trade aims to correct historical imbalances and ensure ethical commerce.',
  },
  {
    prompt: 'How can developing countries break cycles of colonial dependency?',
    options: ['They cannot, since their past decides the future', 'By investing in schools, building local industry and diversifying', 'Only by exporting more raw materials than before', 'By using force to take back what was lost'],
    answer: 'By investing in schools, building local industry and diversifying',
    explanation: 'Economic diversification reduces dependency on raw material exports.',
  },
];

const ColonialismTradeImbalances = () => (
  <CapsSubjectTopic
    title="Colonialism and Trade Imbalances"
    subtitle="Historical impacts on global development"
    learnSteps={learnSteps}
    task="gr9-colonialism-trade-imbalances-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default ColonialismTradeImbalances;
