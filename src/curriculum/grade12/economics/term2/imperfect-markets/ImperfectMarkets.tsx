
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
    title: 'Why markets become imperfect',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Market power</p>
          <p className="mt-2 text-slate-700">
            Imperfect markets exist when firms can influence price, output or product design. This usually
            happens because of barriers to entry, product differentiation or the dominance of a few large
            firms.
          </p>
        </div>
        <SupplyDemand title="Imperfect Market Pricing" showShifts={true} />
      </div>
    ),
  },
  {
    title: 'Monopoly',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A monopolist faces the market demand curve and can restrict output to push price higher than in a
          competitive benchmark.
        </p>
        <DataChart
          data={[
            { market: 'Perfect competition', price: 4, output: 9 },
            { market: 'Monopoly', price: 7, output: 5 },
          ]}
          series={[
            { key: 'price', label: 'Relative price', color: '#ef4444' },
            { key: 'output', label: 'Relative output', color: '#10b981' },
          ]}
          xKey="market"
          type="bar"
        />
      </div>
    ),
  },
  {
    title: 'Monopolistic competition and oligopoly',
    content: (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Monopolistic competition</p>
            <p className="mt-2 text-sm text-slate-600">Many firms sell differentiated products, so branding matters.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Oligopoly</p>
            <p className="mt-2 text-sm text-slate-600">A few large firms are interdependent and watch rivals closely.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Barriers, discrimination and regulation',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Regulation in SA</p>
          <p className="mt-2 text-slate-700">
            Competition policy aims to limit collusion, abuse of dominance and unfair pricing. Price
            discrimination is only possible when firms can separate customers and prevent resale.
          </p>
        </div>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "im-1",
    "question": "A monopoly is best described as a market with ...",
    "options": [
      "many identical firms",
      "one dominant seller",
      "free entry only",
      "perfect information only"
    ],
    "answer": 1,
    "explanation": "A monopoly has a single seller with substantial market power."
  },
  {
    "id": "im-2",
    "question": "Which market structure is most associated with interdependence?",
    "options": [
      "Perfect competition",
      "Oligopoly",
      "Pure public goods",
      "Labour market only"
    ],
    "answer": 1,
    "explanation": "In oligopoly, each large firm must consider how rivals will react."
  },
  {
    "id": "im-3",
    "question": "Differentiated products are most typical of ...",
    "options": [
      "monopolistic competition",
      "perfect competition only",
      "a command economy",
      "foreign exchange markets"
    ],
    "answer": 0,
    "explanation": "Monopolistic competition features many firms selling similar but differentiated products."
  },
  {
    "id": "im-4",
    "question": "A patent acts mainly as a ...",
    "options": [
      "consumer subsidy",
      "barrier to entry",
      "direct tax",
      "budget deficit"
    ],
    "answer": 1,
    "explanation": "A patent legally protects an invention and can block rivals from entering."
  },
  {
    "id": "im-5",
    "question": "Collusion means firms ...",
    "options": [
      "cut prices independently",
      "agree secretly on price or output",
      "must accept the market price",
      "leave the industry immediately"
    ],
    "answer": 1,
    "explanation": "Collusion is cooperative behaviour, often illegal, where rivals act together like a cartel."
  },
  {
    "id": "im-6",
    "question": "Price discrimination happens when a firm charges ...",
    "options": [
      "one price in every market",
      "different prices for the same product",
      "no price at all",
      "only marginal cost"
    ],
    "answer": 1,
    "explanation": "Price discrimination means charging different customers different prices for the same good or service."
  },
  {
    "id": "im-7",
    "question": "Compared with perfect competition, a monopoly tends to produce ...",
    "options": [
      "more output at a lower price",
      "less output at a higher price",
      "the same output at the same price",
      "only public goods"
    ],
    "answer": 1,
    "explanation": "Monopoly restricts output and usually charges a higher price than perfect competition."
  },
  {
    "id": "im-8",
    "question": "Which institution in South Africa is most closely linked to anti-cartel action?",
    "options": [
      "Competition authorities",
      "SARB reserves division",
      "Municipal schools",
      "Export councils only"
    ],
    "answer": 0,
    "explanation": "Competition authorities investigate collusion and abuse of market power."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const ImperfectMarkets = () => (
      <CapsSubjectTopic
        title="Imperfect Markets"
        subtitle="Monopoly, monopolistic competition and oligopoly"
        learnSteps={learnSteps}
        task="gr12-imperfect-markets-t2"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default ImperfectMarkets;
