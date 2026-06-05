
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
    title: 'What market failure means',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Definition</p>
          <p className="mt-2 text-slate-700">
            Market failure happens when free markets do not allocate resources in the socially best way.
            Too much, too little or the wrong mix of goods may be produced.
          </p>
        </div>
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Externalities</li>
          <li>Public goods and free riding</li>
          <li>Imperfect information and market power</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Externalities and social cost',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { category: 'Private cost', value: 40 },
            { category: 'External cost', value: 25 },
            { category: 'Social cost', value: 65 },
          ]}
          series={[{ key: 'value', label: 'Cost index', color: '#ef4444' }]}
          xKey="category"
          type="bar"
        />
        <p className="text-sm leading-7 text-slate-600">
          Pollution raises social cost above private cost, which is why negative externalities usually lead
          to overproduction if markets are left alone.
        </p>
      </div>
    ),
  },
  {
    title: 'Public, merit and demerit goods',
    content: (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Public goods are non-rival and non-excludable.</div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Merit goods are under-consumed without support.</div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">Demerit goods are over-consumed because social costs are ignored.</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Cost-benefit analysis',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">CBA checklist</p>
          <p className="mt-2 text-slate-700">
            Cost-benefit analysis compares social costs and social benefits before a project is approved.
            It includes non-financial effects such as health outcomes, travel time and environmental damage.
          </p>
        </div>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "mf-1",
    "question": "Air pollution from a factory is an example of a ...",
    "options": [
      "positive externality",
      "negative externality",
      "public good",
      "private benefit"
    ],
    "answer": 1,
    "explanation": "Pollution imposes external costs on society, so it is a negative externality."
  },
  {
    "id": "mf-2",
    "question": "A public good is typically ...",
    "options": [
      "rival and excludable",
      "non-rival and non-excludable",
      "always imported",
      "sold only by monopolies"
    ],
    "answer": 1,
    "explanation": "Public goods are non-rival and non-excludable."
  },
  {
    "id": "mf-3",
    "question": "The free-rider problem is mainly associated with ...",
    "options": [
      "public goods",
      "exchange rates",
      "private schools only",
      "oligopolies only"
    ],
    "answer": 0,
    "explanation": "People can benefit from a public good without paying, creating a free-rider problem."
  },
  {
    "id": "mf-4",
    "question": "Which policy best helps to reduce a negative production externality?",
    "options": [
      "A subsidy per unit produced",
      "A pollution tax",
      "Removing all regulation",
      "A higher export rebate"
    ],
    "answer": 1,
    "explanation": "A pollution tax internalises the external cost and discourages over-production."
  },
  {
    "id": "mf-5",
    "question": "Education is often described as a merit good because it is ...",
    "options": [
      "always over-consumed",
      "under-consumed if left to the market",
      "a pure public good only",
      "a demerit good"
    ],
    "answer": 1,
    "explanation": "Merit goods create social benefits and may be under-consumed without state support."
  },
  {
    "id": "mf-6",
    "question": "Cost-benefit analysis is mainly used to ...",
    "options": [
      "set the repo rate",
      "compare social costs and social benefits of projects",
      "measure unemployment only",
      "calculate VAT refunds"
    ],
    "answer": 1,
    "explanation": "CBA helps policymakers decide whether a project is worthwhile for society."
  },
  {
    "id": "mf-7",
    "question": "Which item is most likely a demerit good?",
    "options": [
      "Textbooks",
      "Vaccines",
      "Cigarettes",
      "Public parks"
    ],
    "answer": 2,
    "explanation": "Demerit goods are over-consumed and impose social costs, as with cigarettes."
  },
  {
    "id": "mf-8",
    "question": "A subsidy is commonly used to encourage ...",
    "options": [
      "positive externalities",
      "cartel behaviour",
      "imports only",
      "fiscal drag"
    ],
    "answer": 0,
    "explanation": "Subsidies can encourage activities with external benefits such as education or clean energy."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const MarketFailureCostBenefitAnalysis = () => (
      <CapsSubjectTopic
        title="Market Failure and Cost-Benefit Analysis"
        subtitle="Externalities, public goods and government intervention"
        learnSteps={learnSteps}
        task="gr12-market-failure-cost-benefit-analysis-t2"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default MarketFailureCostBenefitAnalysis;
