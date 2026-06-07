
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
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
    image: { src: "/curriculum/grade12/econ/term2/trade-policy-protectionism/diagram.webp", alt: "Imported Goods Market" },
    title: 'Free trade and protection',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Big idea</p>
          <p className="mt-2 text-slate-700">
            Free trade expands choice and competition, while protectionism uses barriers to shield domestic
            producers. CAPS answers should weigh both costs and benefits before reaching a judgement.
          </p>
        </div>
        <SupplyDemand title="Imported Goods Market" showShifts={true} />
      </div>
    ),
  },
  {
    title: 'Main protectionist measures',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { tool: 'Tariff', effect: 8 },
            { tool: 'Quota', effect: 7 },
            { tool: 'Subsidy', effect: 6 },
            { tool: 'Standards', effect: 5 },
          ]}
          series={[{ key: 'effect', label: 'Impact on imports', color: '#f59e0b' }]}
          xKey="tool"
          type="bar"
        />
        <p className="text-sm leading-7 text-slate-600">Tariffs raise import prices, quotas limit quantity, and subsidies reduce local producers' costs.</p>
      </div>
    ),
  },
  {
    title: 'Reasons countries protect',
    content: (
      <div className="space-y-6">
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Protect infant industries while they build scale and skills.</li>
          <li>Respond to dumping or unfair foreign competition.</li>
          <li>Support jobs, food security or strategic industries.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Evaluating trade policy',
    content: (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-800">Possible gains</p>
            <p className="mt-2 text-sm text-emerald-900">More local production, employment and policy space.</p>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
            <p className="font-semibold text-rose-800">Possible costs</p>
            <p className="mt-2 text-sm text-rose-900">Higher prices, weaker competition and slower innovation.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "tp-1",
    "question": "What is a tariff?",
    "options": [
      "A subsidy on exports",
      "A tax on imports",
      "A ban on all trade",
      "A quota on production"
    ],
    "answer": 1,
    "explanation": "A tariff is a tax placed on imported goods."
  },
  {
    "id": "tp-2",
    "question": "A quota limits the ...",
    "options": [
      "price of exports",
      "quantity of imports",
      "level of VAT",
      "number of consumers"
    ],
    "answer": 1,
    "explanation": "A quota directly limits how much of a product may be imported."
  },
  {
    "id": "tp-3",
    "question": "Which reason is commonly given for protecting an infant industry?",
    "options": [
      "It is already the world leader",
      "It needs time to become competitive",
      "It never needs innovation",
      "It should avoid all exports"
    ],
    "answer": 1,
    "explanation": "Infant industries are protected so they can develop and become competitive over time."
  },
  {
    "id": "tp-4",
    "question": "Free trade generally gives consumers ...",
    "options": [
      "fewer choices",
      "more choices and lower prices",
      "higher quotas",
      "automatic subsidies"
    ],
    "answer": 1,
    "explanation": "Free trade usually widens consumer choice and increases price competition."
  },
  {
    "id": "tp-5",
    "question": "Dumping refers to selling goods abroad at ...",
    "options": [
      "a higher exchange rate",
      "an artificially low price",
      "a fixed legal maximum wage",
      "the same price everywhere"
    ],
    "answer": 1,
    "explanation": "Dumping is selling at an unfairly low price, sometimes below cost, to gain market share."
  },
  {
    "id": "tp-6",
    "question": "Which organisation aims to promote rules-based international trade?",
    "options": [
      "SARB",
      "WTO",
      "SADC Tribunal only",
      "Stats SA"
    ],
    "answer": 1,
    "explanation": "The World Trade Organization promotes a rules-based trading system."
  },
  {
    "id": "tp-7",
    "question": "A likely disadvantage of protectionism is that it can ...",
    "options": [
      "lower domestic prices in every case",
      "reduce competition and raise prices",
      "eliminate all unemployment",
      "guarantee export success"
    ],
    "answer": 1,
    "explanation": "Protection can reduce competitive pressure and leave consumers paying more."
  },
  {
    "id": "tp-8",
    "question": "An export subsidy makes a country’s exports ... in foreign markets.",
    "options": [
      "more expensive",
      "less competitive",
      "cheaper",
      "illegal"
    ],
    "answer": 2,
    "explanation": "A subsidy lowers producers’ costs, which can make exports cheaper abroad."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const TradePolicyProtectionism = () => (
      <CapsSubjectTopic
        title="Trade Policy and Protectionism"
        subtitle="Free trade, tariffs, quotas and reasons for protection"
        learnSteps={learnSteps}
        task="gr12-trade-policy-protectionism-t2"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default TradePolicyProtectionism;
