
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
    image: { src: "/curriculum/grade12/econ/term2/perfect-markets/diagram.webp", alt: "Perfect Competition Market" },
    title: 'Features of perfect competition',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Price taker model</p>
          <p className="mt-2 text-slate-700">
            Perfect competition assumes many buyers and sellers, identical products, free entry and perfect
            information. An individual firm cannot influence price and must accept the market equilibrium.
          </p>
        </div>
        <SupplyDemand title="Perfect Competition Market" showShifts={true} />
      </div>
    ),
  },
  {
    title: 'Revenue and equilibrium',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { output: 'Q1', price: 5, mr: 5, mc: 3 },
            { output: 'Q2', price: 5, mr: 5, mc: 4 },
            { output: 'Q3', price: 5, mr: 5, mc: 5 },
            { output: 'Q4', price: 5, mr: 5, mc: 6 },
          ]}
          series={[
            { key: 'price', label: 'Price / AR', color: '#6366f1' },
            { key: 'mr', label: 'MR', color: '#10b981' },
            { key: 'mc', label: 'MC', color: '#ef4444' },
          ]}
          xKey="output"
          type="line"
        />
        <p className="text-sm leading-7 text-slate-600">Profit is maximised where MC = MR, as long as price still covers AVC in the short run.</p>
      </div>
    ),
  },
  {
    title: 'Short run and long run',
    content: (
      <div className="space-y-6">
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Supernormal profit attracts new firms into the industry.</li>
          <li>Entry increases market supply and pushes price down.</li>
          <li>Long-run equilibrium leaves firms earning normal profit.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Efficiency in perfect markets',
    content: (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-800">Allocative efficiency</p>
            <p className="mt-2 text-sm text-emerald-900">Occurs where price equals marginal cost.</p>
          </div>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="font-semibold text-indigo-800">Productive efficiency</p>
            <p className="mt-2 text-sm text-indigo-900">Occurs at the lowest point of average cost.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "pm-1",
    "question": "A perfectly competitive firm is a ...",
    "options": [
      "price maker",
      "price taker",
      "state monopoly",
      "cartel leader"
    ],
    "answer": 1,
    "explanation": "The individual firm accepts the market price and cannot influence it."
  },
  {
    "id": "pm-2",
    "question": "Which feature belongs to perfect competition?",
    "options": [
      "One seller only",
      "Differentiated products",
      "Many buyers and sellers",
      "Strong barriers to entry"
    ],
    "answer": 2,
    "explanation": "Perfect competition assumes many small buyers and sellers."
  },
  {
    "id": "pm-3",
    "question": "For a perfectly competitive firm, marginal revenue is ...",
    "options": [
      "less than price",
      "equal to price",
      "greater than average revenue",
      "always zero"
    ],
    "answer": 1,
    "explanation": "Because the firm can sell additional units at the same market price, MR = price."
  },
  {
    "id": "pm-4",
    "question": "The usual profit-maximising output rule is ...",
    "options": [
      "MC = AC",
      "TR = TC",
      "MC = MR",
      "AR = AC"
    ],
    "answer": 2,
    "explanation": "Firms maximise profit at the output where marginal cost equals marginal revenue."
  },
  {
    "id": "pm-5",
    "question": "In the long run, firms in perfect competition tend to earn ...",
    "options": [
      "supernormal profit only",
      "normal profit",
      "permanent losses",
      "zero revenue"
    ],
    "answer": 1,
    "explanation": "Entry and exit drive the industry toward normal profit in the long run."
  },
  {
    "id": "pm-6",
    "question": "A horizontal demand curve for the firm means that ...",
    "options": [
      "the firm can charge any price",
      "the firm faces a fixed market price",
      "consumers buy nothing",
      "marginal cost is zero"
    ],
    "answer": 1,
    "explanation": "A perfectly competitive firm can sell all it wants at the market price."
  },
  {
    "id": "pm-7",
    "question": "Allocative efficiency in perfect competition occurs where ...",
    "options": [
      "AC = TC",
      "price = marginal cost",
      "profit = zero",
      "output = zero"
    ],
    "answer": 1,
    "explanation": "Allocative efficiency is achieved when consumers’ valuation reflected in price equals MC."
  },
  {
    "id": "pm-8",
    "question": "If price falls below average variable cost in the short run, the firm should usually ...",
    "options": [
      "expand output immediately",
      "shut down temporarily",
      "merge with government",
      "set a higher price"
    ],
    "answer": 1,
    "explanation": "If price does not cover AVC, the firm minimises loss by shutting down in the short run."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const PerfectMarkets = () => (
      <CapsSubjectTopic
        title="Perfect Markets"
        subtitle="Perfect competition, price taking and efficiency"
        learnSteps={learnSteps}
        task="gr12-perfect-markets-t2"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default PerfectMarkets;
