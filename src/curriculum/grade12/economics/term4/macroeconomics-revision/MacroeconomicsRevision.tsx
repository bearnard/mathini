
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
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
    title: 'Linking the macro topics',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Think in links</p>
          <p className="mt-2 text-slate-700">
            Government spending, the multiplier, exchange-rate changes and the business cycle all affect
            aggregate demand and national income. Revision is strongest when you explain these links.
          </p>
        </div>
        <DataChart
          data={[
            { year: '2020', growth: -6.4, unemployment: 32.5 },
            { year: '2021', growth: 4.9, unemployment: 34.9 },
            { year: '2022', growth: 1.9, unemployment: 33.9 },
            { year: '2023', growth: 0.6, unemployment: 32.1 },
          ]}
          series={[
            { key: 'growth', label: 'GDP growth (%)', color: '#6366f1' },
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
    title: 'Handling graphs and data',
    content: (
      <div className="space-y-6">
        <SupplyDemand title="Foreign Exchange Revision Market" eqPrice={18} eqQty={5} showShifts={false} />
        <p className="text-sm leading-7 text-slate-600">In macro questions, always read units, dates and labels before explaining what changed and why it matters.</p>
      </div>
    ),
  },
  {
    title: 'Revision of calculations and terms',
    content: (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Leakages: savings, taxes, imports</div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Injections: investment, government spending, exports</div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Currency: appreciation vs depreciation</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Exam technique for Paper 1 sections',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Fast method</p>
          <p className="mt-2 text-slate-700">
            Eliminate weak options first, then choose the answer that is most precise in economic language.
            In longer responses, define, apply and evaluate.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Data-response technique",
    content: (
      <div className="space-y-4">
        <GapRule>{"In a macroeconomic data-response question, use the source and explain the economic concept clearly."}</GapRule>
        <GapWorked title={"Answer a data question"} steps={["Quote the figure from the source.", "Name the concept, such as inflation or the repo rate.", "Explain the link and its effect on the economy."]} />
        <GapMistake>{"Writing everything you know without using the source."}</GapMistake>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "mr-1",
    "question": "Which pair consists only of leakages?",
    "options": [
      "Savings and taxes",
      "Government spending and exports",
      "Investment and imports",
      "Exports and consumption"
    ],
    "answer": 0,
    "explanation": "Savings and taxes are both withdrawals from the circular-flow spending stream."
  },
  {
    "id": "mr-2",
    "question": "The upper turning point of the business cycle is the ...",
    "options": [
      "trough",
      "peak",
      "recession",
      "recovery"
    ],
    "answer": 1,
    "explanation": "The peak is the highest point before contraction begins."
  },
  {
    "id": "mr-3",
    "question": "A weaker rand is most likely to help ...",
    "options": [
      "importers of machinery",
      "South African exporters",
      "foreign tourists leaving SA",
      "domestic import prices fall"
    ],
    "answer": 1,
    "explanation": "A weaker rand makes South African exports cheaper to foreign buyers."
  },
  {
    "id": "mr-4",
    "question": "Which policy tool belongs mainly to fiscal policy?",
    "options": [
      "Repo rate",
      "Open-market operations",
      "Government taxation",
      "Reserve requirement only"
    ],
    "answer": 2,
    "explanation": "Taxation is a fiscal policy tool used by government."
  },
  {
    "id": "mr-5",
    "question": "A current-account deficit suggests that SA is ...",
    "options": [
      "earning more from current transactions than it spends",
      "spending more on current transactions than it earns",
      "running a budget surplus",
      "recording no imports"
    ],
    "answer": 1,
    "explanation": "A current-account deficit means outflows exceed inflows on current transactions."
  },
  {
    "id": "mr-6",
    "question": "An increase in autonomous spending affects national income through the ...",
    "options": [
      "Lorenz curve",
      "multiplier",
      "Gini coefficient",
      "Laffer curve"
    ],
    "answer": 1,
    "explanation": "The multiplier describes how an initial increase in spending creates a larger overall change in income."
  },
  {
    "id": "mr-7",
    "question": "Which outcome is most likely during a recession?",
    "options": [
      "Lower unemployment",
      "Higher output growth",
      "Rising unemployment",
      "Fewer business failures"
    ],
    "answer": 2,
    "explanation": "Recessions typically reduce output and raise unemployment."
  },
  {
    "id": "mr-8",
    "question": "Which answer style is best in a macro data-response question?",
    "options": [
      "State facts from memory without linking them to the theory",
      "Use the source and explain the economic concept clearly",
      "Ignore South African context",
      "Write only definitions"
    ],
    "answer": 1,
    "explanation": "Good answers use evidence from the source and apply relevant economic theory."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const MacroeconomicsRevision = () => (
      <CapsSubjectTopic
        title="Macroeconomics Revision"
        subtitle="Integrated revision of circular flow, cycles, public sector and foreign exchange"
        learnSteps={learnSteps}
        task="gr12-macroeconomics-revision-t4"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default MacroeconomicsRevision;
