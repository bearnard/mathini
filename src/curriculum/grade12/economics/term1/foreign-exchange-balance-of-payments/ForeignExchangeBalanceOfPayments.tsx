
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
    title: 'How the forex market works',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Demand and supply of rand</p>
          <p className="mt-2 text-slate-700">
            Demand for rand rises when foreigners buy South African exports or assets. Supply of rand rises
            when South Africans demand foreign currency for imports, travel or investment abroad.
          </p>
        </div>
        <SupplyDemand title="Foreign Exchange Market" eqPrice={18} eqQty={5} showShifts={false} />
      </div>
    ),
  },
  {
    title: 'Appreciation and depreciation',
    content: (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-800">Stronger rand</p>
            <p className="mt-2 text-sm text-emerald-900">Imports become cheaper and imported inflation can ease.</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-800">Weaker rand</p>
            <p className="mt-2 text-sm text-amber-900">Exports become more competitive, but imports cost more.</p>
          </div>
        </div>
        <p className="text-sm leading-7 text-slate-600">
          CAPS questions usually expect you to link currency movements to inflation, tourism, debt-servicing
          costs and export performance.
        </p>
      </div>
    ),
  },
  {
    title: 'Balance of payments accounts',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { year: '2020', current: 2.0, financial: 3.1 },
            { year: '2021', current: 3.7, financial: -1.2 },
            { year: '2022', current: -0.5, financial: 1.6 },
            { year: '2023', current: -1.6, financial: 2.4 },
          ]}
          series={[
            { key: 'current', label: 'Current account (% of GDP)', color: '#ef4444' },
            { key: 'financial', label: 'Financial account (% of GDP)', color: '#6366f1' },
          ]}
          xKey="year"
          type="line"
          yLabel="%"
        />
        <p className="text-sm leading-7 text-slate-600">
          The current account covers trade in goods, services, income and transfers, while the financial
          account records investment flows such as direct and portfolio investment.
        </p>
      </div>
    ),
  },
  {
    title: 'Using external-sector data',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Exam technique</p>
          <p className="mt-2 text-slate-700">
            First identify whether the question is about the exchange rate or the BOP account. Then explain
            what changed, why it changed, and the likely effect on growth, prices and confidence.
          </p>
        </div>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "fx-1",
    "question": "A depreciation of the rand usually makes imports ... for South Africans.",
    "options": [
      "cheaper",
      "more expensive",
      "illegal",
      "unaffected in every case"
    ],
    "answer": 1,
    "explanation": "A weaker rand means more rand are needed to buy foreign goods, so imports cost more."
  },
  {
    "id": "fx-2",
    "question": "The balance of payments records transactions between South Africa and ...",
    "options": [
      "only Africa",
      "the government sector only",
      "the rest of the world",
      "households only"
    ],
    "answer": 2,
    "explanation": "The BOP is the full record of SA’s transactions with the rest of the world."
  },
  {
    "id": "fx-3",
    "question": "Which item belongs on the current account?",
    "options": [
      "Foreign direct investment in SA factories",
      "Trade in goods and services",
      "A SARB gold reserve revaluation",
      "Municipal rates"
    ],
    "answer": 1,
    "explanation": "Exports and imports of goods and services form part of the current account."
  },
  {
    "id": "fx-4",
    "question": "Demand for rand is likely to rise when foreigners ...",
    "options": [
      "buy South African exports",
      "import more from Germany",
      "save less in SA banks automatically",
      "pay more local VAT"
    ],
    "answer": 0,
    "explanation": "Foreigners need rand to pay for South African exports, so demand for rand rises."
  },
  {
    "id": "fx-5",
    "question": "Which institution is most closely linked to managing official foreign reserves in SA?",
    "options": [
      "Competition Commission",
      "SARB",
      "JSE only",
      "National Treasury courts"
    ],
    "answer": 1,
    "explanation": "The South African Reserve Bank manages the country’s official reserves."
  },
  {
    "id": "fx-6",
    "question": "A stronger rand can help to ...",
    "options": [
      "raise the domestic price of imports",
      "reduce imported inflation",
      "make exports cheaper for foreigners",
      "remove all current-account problems"
    ],
    "answer": 1,
    "explanation": "A stronger rand lowers the local-currency cost of imports and can reduce imported inflation."
  },
  {
    "id": "fx-7",
    "question": "In a floating exchange-rate system, the exchange rate is mainly determined by ...",
    "options": [
      "law alone",
      "a fixed gold price",
      "demand and supply",
      "trade unions"
    ],
    "answer": 2,
    "explanation": "Under a floating system, currency values are largely determined by market forces."
  },
  {
    "id": "fx-8",
    "question": "A current-account deficit means that, broadly, SA is ...",
    "options": [
      "earning more from trade than it spends",
      "spending more on current transactions than it earns",
      "running a budget surplus",
      "receiving zero capital inflow"
    ],
    "answer": 1,
    "explanation": "A current-account deficit means outflows on current transactions exceed inflows."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const ForeignExchangeBalanceOfPayments = () => (
      <CapsSubjectTopic
        title="Foreign Exchange and the Balance of Payments"
        subtitle="Exchange rates, demand and supply of currency, and external accounts"
        learnSteps={learnSteps}
        task="gr12-foreign-exchange-balance-of-payments-t1"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default ForeignExchangeBalanceOfPayments;
