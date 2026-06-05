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
    options: ['Trade between countries', 'When a powerful country controls and exploits another territory', 'Immigration to a new country', 'Economic growth'],
    answer: 'When a powerful country controls and exploits another territory',
    explanation: 'Colonialism involved political control, resource extraction, and economic exploitation.',
  },
  {
    prompt: 'How did colonialism affect developing countries economically?',
    options: ['It helped them develop evenly', 'It extracted resources and created dependent, unbalanced economies', 'It had no impact', 'It only affected trade'],
    answer: 'It extracted resources and created dependent, unbalanced economies',
    explanation: 'Colonial economies were structured to benefit the colonizer, leaving colonies underdeveloped.',
  },
  {
    prompt: 'What is a trade imbalance?',
    options: ['Equal trade between partners', 'Unequal trade where one side profits more than the other', 'No trade at all', 'Trade within a country'],
    answer: 'Unequal trade where one side profits more than the other',
    explanation: 'Trade imbalances favour those selling high-value goods over those selling raw materials.',
  },
  {
    prompt: 'Why do developing countries often export raw materials?',
    options: ['By choice', 'Due to colonial history and lack of industrial infrastructure', 'Because it\'s more profitable', 'For environmental reasons'],
    answer: 'Due to colonial history and lack of industrial infrastructure',
    explanation: 'Colonial structures limited industrial development in colonized territories.',
  },
  {
    prompt: 'What advantage do developed countries have in international trade?',
    options: ['Lower prices only', 'More access to raw materials', 'Ability to sell high-value manufactured goods for higher profits', 'Less need for trade'],
    answer: 'Ability to sell high-value manufactured goods for higher profits',
    explanation: 'Manufactured goods command higher prices than raw materials on international markets.',
  },
  {
    prompt: 'What did colonial powers typically invest in during colonization?',
    options: ['Education and healthcare equally', 'Little in education and healthcare; mostly in resource extraction infrastructure', 'Only agriculture', 'Everything equally'],
    answer: 'Little in education and healthcare; mostly in resource extraction infrastructure',
    explanation: 'Colonial investment focused on extracting resources, not developing local society.',
  },
  {
    prompt: 'How does colonial economic dependency affect modern development?',
    options: ['It has no effect', 'Many post-colonial nations remain in poverty, with unbalanced economies', 'It only affects trade', 'It benefits everyone'],
    answer: 'Many post-colonial nations remain in poverty, with unbalanced economies',
    explanation: 'Colonial-era economic structures persist, limiting opportunities for diversification and growth.',
  },
  {
    prompt: 'Which sector grew most during colonialism in Africa?',
    options: ['Manufacturing', 'Education', 'Mining and agriculture for export', 'Technology'],
    answer: 'Mining and agriculture for export',
    explanation: 'Colonial economies focused on extracting minerals and agricultural products.',
  },
  {
    prompt: 'What is "fair trade" in the context of overcoming trade imbalances?',
    options: ['Trade with military force', 'Trade where all parties receive equitable prices and working conditions', 'Trade within a region only', 'No trade at all'],
    answer: 'Trade where all parties receive equitable prices and working conditions',
    explanation: 'Fair trade aims to correct historical imbalances and ensure ethical commerce.',
  },
  {
    prompt: 'How can developing countries break cycles of colonial dependency?',
    options: ['They can\'t', 'By investing in education, developing local industries, and diversifying their economies', 'Only by exporting more', 'Through military means'],
    answer: 'By investing in education, developing local industries, and diversifying their economies',
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
