
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
    title: 'Trade and market structures together',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Big revision link</p>
          <p className="mt-2 text-slate-700">
            Trade barriers change competition, market power affects price and output, and externalities help
            explain why government may need to intervene.
          </p>
        </div>
        <SupplyDemand title="Microeconomics Revision Market" showShifts={true} />
      </div>
    ),
  },
  {
    title: 'Key decision rules and diagrams',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { structure: 'Perfect competition', power: 2, efficiency: 9 },
            { structure: 'Monopolistic competition', power: 5, efficiency: 6 },
            { structure: 'Oligopoly', power: 7, efficiency: 5 },
            { structure: 'Monopoly', power: 9, efficiency: 4 },
          ]}
          series={[
            { key: 'power', label: 'Market power', color: '#ef4444' },
            { key: 'efficiency', label: 'Relative efficiency', color: '#10b981' },
          ]}
          xKey="structure"
          type="bar"
        />
      </div>
    ),
  },
  {
    title: 'Evaluating intervention',
    content: (
      <div className="space-y-6">
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Tariffs may save jobs, but they can also raise prices.</li>
          <li>Pollution taxes can improve welfare if they reflect the external cost.</li>
          <li>Subsidies work best when they target clear social benefits.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Final exam technique',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Precision wins</p>
          <p className="mt-2 text-slate-700">
            If two options look similar, choose the one that is most exact about price, output, welfare or
            efficiency. CAPS often rewards the most complete economic statement.
          </p>
        </div>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "mir-1",
    "question": "Which trade measure directly limits import quantity?",
    "options": [
      "Tariff",
      "Quota",
      "Subsidy",
      "Inflation target"
    ],
    "answer": 1,
    "explanation": "A quota directly restricts the quantity of imports allowed."
  },
  {
    "id": "mir-2",
    "question": "A perfectly competitive firm is called a price taker because it ...",
    "options": [
      "can set any price it wants",
      "must accept the market price",
      "has only one buyer",
      "always earns losses"
    ],
    "answer": 1,
    "explanation": "In perfect competition the individual firm is too small to influence market price."
  },
  {
    "id": "mir-3",
    "question": "Which structure usually has the greatest market power?",
    "options": [
      "Perfect competition",
      "Monopoly",
      "Monopolistic competition",
      "Foreign trade"
    ],
    "answer": 1,
    "explanation": "A monopoly has one dominant seller and the greatest market power."
  },
  {
    "id": "mir-4",
    "question": "Pollution is a classic example of ...",
    "options": [
      "a positive externality",
      "a negative externality",
      "a merit good",
      "perfect information"
    ],
    "answer": 1,
    "explanation": "Pollution creates external costs for third parties."
  },
  {
    "id": "mir-5",
    "question": "Allocative efficiency is reached where ...",
    "options": [
      "price = marginal cost",
      "profit = revenue",
      "AC = zero",
      "imports = exports"
    ],
    "answer": 0,
    "explanation": "Allocative efficiency occurs where price equals marginal cost."
  },
  {
    "id": "mir-6",
    "question": "A likely result of long-term protectionism is ...",
    "options": [
      "more competition and lower prices automatically",
      "less competitive pressure on local firms",
      "the removal of all trade barriers",
      "an end to scarcity"
    ],
    "answer": 1,
    "explanation": "Long-term protection can reduce pressure on firms to innovate and lower costs."
  },
  {
    "id": "mir-7",
    "question": "Which policy is best suited to encourage a positive externality?",
    "options": [
      "A subsidy",
      "A pollution fine only",
      "A cartel agreement",
      "An import quota"
    ],
    "answer": 0,
    "explanation": "Subsidies encourage more consumption or production where social benefits are high."
  },
  {
    "id": "mir-8",
    "question": "In revision, the strongest answer to a market-structure question usually compares ...",
    "options": [
      "only one fact",
      "price, output and efficiency",
      "weather and exchange rates",
      "tax forms only"
    ],
    "answer": 1,
    "explanation": "Market-structure questions are strongest when they compare outcomes such as price, output and efficiency."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const MicroeconomicsRevision = () => (
      <CapsSubjectTopic
        title="Microeconomics Revision"
        subtitle="Integrated revision of trade, market structures and market failure"
        learnSteps={learnSteps}
        task="gr12-microeconomics-revision-t4"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default MicroeconomicsRevision;
