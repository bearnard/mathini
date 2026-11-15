
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

type RawEconomicsItem = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const learnSteps: LearnStep[] = [
  {
    title: 'Revising economic pursuits',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Revision goal</p>
          <p className="mt-2 text-slate-700">
            Bring growth, development, industrial policy, tourism and sustainability into one picture. The
            strongest answers show how policy choices affect productivity, jobs and inclusion together.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Indicators and current evidence',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { year: '2020', inflation: 3.3, unemployment: 32.5 },
            { year: '2021', inflation: 4.5, unemployment: 35.3 },
            { year: '2022', inflation: 6.9, unemployment: 32.7 },
            { year: '2023', inflation: 6.0, unemployment: 32.1 },
          ]}
          series={[
            { key: 'inflation', label: 'Inflation (%)', color: '#f59e0b' },
            { key: 'unemployment', label: 'Unemployment (%)', color: '#ef4444' },
          ]}
          xKey="year"
          type="line"
          yLabel="%"
        />
      </div>
    ),
  },
  {
    title: 'Tourism, sustainability and quality of growth',
    content: (
      <div className="space-y-6">
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Tourism can create jobs and foreign exchange.</li>
          <li>Leakages and environmental damage reduce long-run value.</li>
          <li>Sustainability improves the quality, not just the quantity, of growth.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Final preparation strategy',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Essay upgrade</p>
          <p className="mt-2 text-slate-700">
            Learn a short judgement sentence for each topic, using phrases like however, in the long run,
            provided that and depends on. Those phrases turn description into evaluation.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Development, sustainability and applied answers",
    content: (
      <div className="space-y-4">
        <GapRule>{"Development means people's wellbeing improves, not just GDP. Sustainable growth leaves resources for later generations. Strong answers use a current South African example to show how a theory plays out."}</GapRule>
        <GapWorked title={"Apply the three ideas"} steps={["Development: higher living standards, not only higher GDP.", "Sustainability: use resources so later generations can also grow.", "Link theory to an SA case such as load-shedding and its effect on production."]} />
        <GapMistake>{"Giving theory without an SA example."}</GapMistake>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "ep-1",
    "question": "Economic development includes improvements in ...",
    "options": [
      "welfare and living standards",
      "the exchange rate and interest rates",
      "customs duties and import quotas",
      "monopoly power only"
    ],
    "answer": 0,
    "explanation": "Development includes better living standards, health, education and reduced poverty."
  },
  {
    "id": "ep-2",
    "question": "Which indicator is used to measure inflation?",
    "options": [
      "CPI",
      "Gini coefficient",
      "Multiplier",
      "Quota"
    ],
    "answer": 0,
    "explanation": "The consumer price index is the standard inflation indicator."
  },
  {
    "id": "ep-3",
    "question": "Beneficiation is intended to ...",
    "options": [
      "increase value before export",
      "lower the repo rate",
      "close down mining activity in the country",
      "raise VAT"
    ],
    "answer": 0,
    "explanation": "Beneficiation adds value to raw materials before they are exported."
  },
  {
    "id": "ep-4",
    "question": "Tourism can support growth because it ...",
    "options": ['destroys jobs in the economy and lowers local incomes', 'earns foreign exchange and creates employment', 'eliminates seasonality in demand', 'removes leakages from the economy'],
    "answer": 1,
    "explanation": "Tourism brings in spending, jobs and foreign exchange."
  },
  {
    "id": "ep-5",
    "question": "Sustainability is important because growth should ...",
    "options": [
      "ignore environmental limits to speed up output",
      "be possible for future generations too",
      "benefit the current generation of producers",
      "focus only on short-run profits"
    ],
    "answer": 1,
    "explanation": "Sustainable growth protects the ability of future generations to meet their needs."
  },
  {
    "id": "ep-6",
    "question": "A rise in unemployment is generally a sign of ...",
    "options": [
      "stronger labour absorption",
      "weaker economic performance",
      "lower inequality in every case",
      "higher carrying capacity"
    ],
    "answer": 1,
    "explanation": "Rising unemployment usually signals weaker job creation and weaker economic performance."
  },
  {
    "id": "ep-7",
    "question": "A good contemporary-issues answer should ...",
    "options": ['avoid using evidence and rely on opinion alone', 'apply theory to a current South African case', 'list memorised definitions', 'ignore policy'],
    "answer": 1,
    "explanation": "The paper rewards learners who apply economics accurately to present South African issues."
  },
  {
    "id": "ep-8",
    "question": "Which phrase usually signals evaluation in an essay?",
    "options": [
      "For example",
      "However",
      "The definition is",
      "It is called"
    ],
    "answer": 1,
    "explanation": "Words such as however help show balanced judgement and evaluation."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const EconomicPursuitsContemporaryRevision = () => (
      <CapsSubjectTopic
        title="Economic Pursuits and Contemporary Issues Revision"
        subtitle="Revision of growth, indicators, tourism, sustainability and current issues"
        learnSteps={learnSteps}
        task="gr12-economic-pursuits-contemporary-revision-t4"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default EconomicPursuitsContemporaryRevision;
