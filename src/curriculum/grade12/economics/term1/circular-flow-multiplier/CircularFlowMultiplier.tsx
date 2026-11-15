
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import { OpenCircularFlow } from '@/components/diagrams/economics/OpenCircularFlow';
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
    title: 'The open circular flow',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Four-sector model</p>
          <p className="mt-2 text-slate-700">
            South Africa uses an open economy model with households, firms, government and the foreign
            sector. Money and real flows move between these sectors through income, spending, taxes,
            savings, imports and exports.
          </p>
        </div>
        <OpenCircularFlow />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Real flow</p>
            <p className="mt-2 text-sm text-slate-600">Households supply factors of production and receive goods and services.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Money flow</p>
            <p className="mt-2 text-sm text-slate-600">Income, consumption, taxes and transfers move in the opposite direction.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Leakages and injections',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { flow: 'Savings', amount: 18 },
            { flow: 'Taxes', amount: 22 },
            { flow: 'Imports', amount: 16 },
            { flow: 'Investment', amount: 20 },
            { flow: 'Govt spending', amount: 24 },
            { flow: 'Exports', amount: 12 },
          ]}
          series={[{ key: 'amount', label: 'R bn', color: '#10b981' }]}
          xKey="flow"
          type="bar"
        />
        <p className="text-sm leading-7 text-slate-600">
          Leakages withdraw spending from the income stream, while injections add new spending. National
          income moves toward equilibrium when total leakages equal total injections.
        </p>
      </div>
    ),
  },
  {
    title: 'The multiplier process',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Formula reminder</p>
          <p className="mt-2 text-slate-700">Simple multiplier k = 1 / (1 - MPC). A higher MPC creates more rounds of re-spending.</p>
        </div>
        <DataChart
          data={[
            { round: 'Initial', income: 100 },
            { round: 'Round 2', income: 75 },
            { round: 'Round 3', income: 56 },
            { round: 'Round 4', income: 42 },
            { round: 'Round 5', income: 31 },
          ]}
          series={[{ key: 'income', label: 'Extra income generated', color: '#6366f1' }]}
          xKey="round"
          type="area"
          yLabel="Rand"
        />
      </div>
    ),
  },
  {
    title: 'Applying the model in SA',
    content: (
      <div className="space-y-6">
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Infrastructure spending can create jobs and trigger further rounds of income.</li>
          <li>High import leakages reduce the size of the final multiplier effect.</li>
          <li>Exam answers should link injections to output, employment and tax revenue.</li>
        </ul>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "cfm-1",
    "question": "Which item is an injection into the circular flow of income?",
    "options": ['Savings by households', 'Taxes paid to government', 'Government spending', 'Imports from other countries'],
    "answer": 2,
    "explanation": "Government spending adds expenditure to the economy, so it is an injection."
  },
  {
    "id": "cfm-2",
    "question": "Which item is a leakage from the circular flow?",
    "options": [
      "Exports",
      "Investment",
      "Savings",
      "Government expenditure"
    ],
    "answer": 2,
    "explanation": "Savings withdraw income from current spending, so they are a leakage."
  },
  {
    "id": "cfm-3",
    "question": "An open economy includes which extra sector beyond households, firms and government?",
    "options": [
      "Financial sector only",
      "Foreign sector",
      "Agricultural sector",
      "Informal sector"
    ],
    "answer": 1,
    "explanation": "An open economy includes the foreign sector because imports and exports are part of the model."
  },
  {
    "id": "cfm-4",
    "question": "If the marginal propensity to consume is 0.75, the simple multiplier is ...",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "k = 1 / (1 − MPC) = 1 / 0.25 = 4."
  },
  {
    "id": "cfm-5",
    "question": "Why does a higher marginal propensity to consume increase the multiplier?",
    "options": [
      "It reduces imports automatically as incomes rise",
      "It means households save more",
      "It means more of extra income is re-spent",
      "It makes taxes smaller"
    ],
    "answer": 2,
    "explanation": "When households re-spend more of each extra rand, the chain reaction of spending becomes larger."
  },
  {
    "id": "cfm-6",
    "question": "The flow of factor services in the circular-flow model runs mainly from ...",
    "options": [
      "Firms to households",
      "Households to firms",
      "Government to firms",
      "Foreign sector to government"
    ],
    "answer": 1,
    "explanation": "Households supply labour, land, capital and entrepreneurship to firms."
  },
  {
    "id": "cfm-7",
    "question": "What is the most likely effect of a rise in imports, all else equal?",
    "options": [
      "The multiplier becomes stronger",
      "Leakages increase",
      "Household income becomes an injection",
      "Government revenue falls to zero"
    ],
    "answer": 1,
    "explanation": "Higher imports mean more spending leaves the domestic economy, so leakages increase."
  },
  {
    "id": "cfm-8",
    "question": "In equilibrium national income, planned leakages are ... planned injections.",
    "options": [
      "Greater than",
      "Less than",
      "Equal to",
      "Unrelated to"
    ],
    "answer": 2,
    "explanation": "At equilibrium, withdrawals from the spending stream equal additions to it."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const CircularFlowMultiplier = () => (
      <CapsSubjectTopic
        title="Circular Flow and the Multiplier"
        subtitle="How income moves through an open economy and why injections multiply"
        learnSteps={learnSteps}
        task="gr12-circular-flow-multiplier-t1"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default CircularFlowMultiplier;
