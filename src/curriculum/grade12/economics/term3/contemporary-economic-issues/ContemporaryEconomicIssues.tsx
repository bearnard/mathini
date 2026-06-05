
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

type RawEconomicsItem = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const learnSteps: LearnStep[] = [
  {
    title: 'Unemployment and inequality',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">South African context</p>
          <p className="mt-2 text-slate-700">
            High unemployment and deep inequality remain central economic issues. Structural barriers such
            as skills gaps, transport costs and spatial exclusion keep many people outside the formal labour
            market.
          </p>
        </div>
        <DataChart
          data={[
            { year: '2019', unemployment: 29.1, gini: 0.63 },
            { year: '2020', unemployment: 32.5, gini: 0.63 },
            { year: '2021', unemployment: 34.9, gini: 0.63 },
            { year: '2022', unemployment: 33.9, gini: 0.62 },
            { year: '2023', unemployment: 32.1, gini: 0.62 },
          ]}
          series={[
            { key: 'unemployment', label: 'Unemployment (%)', color: '#ef4444' },
            { key: 'gini', label: 'Gini coefficient', color: '#6366f1' },
          ]}
          xKey="year"
          type="line"
        />
      </div>
    ),
  },
  {
    title: 'Energy and infrastructure constraints',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Load-shedding, weak logistics and poor maintenance lower productive capacity, raise costs and make
          investors less confident about future growth.
        </p>
        <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">
          When firms cannot produce reliably, output, exports, tax revenue and employment all come under pressure.
        </div>
      </div>
    ),
  },
  {
    title: 'Inclusive policy responses',
    content: (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Skills development improves employability.</div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Infrastructure upgrades raise productivity.</div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Competition reform supports smaller firms and consumers.</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Exam-style application',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Answer structure</p>
          <p className="mt-2 text-slate-700">
            Define the issue, quote evidence from the source, explain the economic effect, and then judge
            the policy response using clear South African examples.
          </p>
        </div>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "ci-1",
    "question": "Structural unemployment is most closely linked to ...",
    "options": [
      "a temporary holiday shutdown",
      "a mismatch between skills and jobs",
      "higher rainfall only",
      "a lower VAT rate"
    ],
    "answer": 1,
    "explanation": "Structural unemployment happens when workers’ skills do not match available jobs."
  },
  {
    "id": "ci-2",
    "question": "Load-shedding mainly affects the economy by ...",
    "options": [
      "raising productive capacity",
      "reducing output and investment confidence",
      "eliminating inflation",
      "making exports cheaper automatically"
    ],
    "answer": 1,
    "explanation": "Electricity shortages lower output and discourage investment."
  },
  {
    "id": "ci-3",
    "question": "The Gini coefficient is used to measure ...",
    "options": [
      "tourism demand",
      "income inequality",
      "exchange-rate stability",
      "money supply"
    ],
    "answer": 1,
    "explanation": "The Gini coefficient measures how unequal income distribution is."
  },
  {
    "id": "ci-4",
    "question": "Inclusive growth aims to ...",
    "options": [
      "concentrate gains among a few firms",
      "spread opportunities and benefits widely",
      "replace all imports",
      "reduce all government spending"
    ],
    "answer": 1,
    "explanation": "Inclusive growth means broader participation in growth and its rewards."
  },
  {
    "id": "ci-5",
    "question": "A major long-term response to structural unemployment is ...",
    "options": [
      "skills development",
      "price controls on all goods",
      "banning technology",
      "lowering all tariffs to zero immediately"
    ],
    "answer": 0,
    "explanation": "Training and skills development help workers match the needs of the labour market."
  },
  {
    "id": "ci-6",
    "question": "An energy shortage is mainly a ... problem.",
    "options": [
      "supply-side",
      "demand-side only",
      "foreign-trade-only",
      "currency-only"
    ],
    "answer": 0,
    "explanation": "Energy shortages limit the economy’s ability to produce, so they are a supply-side problem."
  },
  {
    "id": "ci-7",
    "question": "A weaker economy usually makes it harder to reduce ...",
    "options": [
      "unemployment",
      "all imports",
      "all taxes",
      "the size of the labour force"
    ],
    "answer": 0,
    "explanation": "Weak growth typically means fewer new jobs are created."
  },
  {
    "id": "ci-8",
    "question": "In an exam data-response question, the best economic answer usually ...",
    "options": [
      "ignores the source material",
      "quotes the case and links it to theory",
      "lists random facts",
      "avoids South African context"
    ],
    "answer": 1,
    "explanation": "Strong answers use evidence from the extract and explain it with accurate economic concepts."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const ContemporaryEconomicIssues = () => (
      <CapsSubjectTopic
        title="Contemporary Economic Issues"
        subtitle="Applying Economics to unemployment, energy, inequality and inclusion"
        learnSteps={learnSteps}
        task="gr12-contemporary-economic-issues-t3"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default ContemporaryEconomicIssues;
