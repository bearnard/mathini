
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
    title: 'Tourism as an economic driver',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Multiplier effect</p>
          <p className="mt-2 text-slate-700">
            Tourist spending supports transport, accommodation, food, entertainment and retail. That is why
            tourism can create large multiplier effects in local economies.
          </p>
        </div>
        <DataChart
          data={[
            { sector: 'Accommodation', receipts: 18 },
            { sector: 'Transport', receipts: 14 },
            { sector: 'Food', receipts: 11 },
            { sector: 'Activities', receipts: 9 },
          ]}
          series={[{ key: 'receipts', label: 'Tourism receipts (R bn)', color: '#10b981' }]}
          xKey="sector"
          type="bar"
        />
      </div>
    ),
  },
  {
    title: 'Leakages and seasonality',
    content: (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Leakages</p>
            <p className="mt-2 text-sm text-slate-600">Imported goods, foreign-owned profits and external bookings reduce local gains.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Seasonality</p>
            <p className="mt-2 text-sm text-slate-600">Holiday peaks create unstable demand and uneven employment.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Environmental sustainability',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { issue: 'Water stress', risk: 7 },
            { issue: 'Waste', risk: 6 },
            { issue: 'Congestion', risk: 5 },
            { issue: 'Habitat damage', risk: 8 },
          ]}
          series={[{ key: 'risk', label: 'Pressure index', color: '#ef4444' }]}
          xKey="issue"
          type="bar"
        />
        <p className="text-sm leading-7 text-slate-600">If tourism damages natural assets, it can weaken the very attractions that support long-term income.</p>
      </div>
    ),
  },
  {
    title: 'Sustainable tourism strategies',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Smart strategy</p>
          <p className="mt-2 text-slate-700">
            Sustainable tourism combines conservation, community participation, efficient resource use and
            responsible visitor behaviour so growth remains durable.
          </p>
        </div>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "te-1",
    "question": "Tourism earns South Africa ...",
    "options": [
      "only tax losses",
      "foreign exchange",
      "no employment",
      "less transport demand"
    ],
    "answer": 1,
    "explanation": "Foreign visitors bring spending into the economy, earning foreign exchange."
  },
  {
    "id": "te-2",
    "question": "Seasonality in tourism means that demand ...",
    "options": [
      "is the same every month",
      "changes during the year",
      "is illegal in winter",
      "comes only from locals"
    ],
    "answer": 1,
    "explanation": "Tourism demand often rises in holiday periods and falls in off-peak periods."
  },
  {
    "id": "te-3",
    "question": "A tourism leakage occurs when ...",
    "options": [
      "visitor spending is re-spent locally",
      "income leaves the local economy",
      "new jobs are created",
      "parks are protected"
    ],
    "answer": 1,
    "explanation": "Leakages reduce the amount of tourism income retained locally."
  },
  {
    "id": "te-4",
    "question": "Ecotourism places special emphasis on ...",
    "options": [
      "mass consumption only",
      "environmental conservation",
      "price fixing",
      "removing local communities"
    ],
    "answer": 1,
    "explanation": "Ecotourism promotes responsible travel that supports conservation and communities."
  },
  {
    "id": "te-5",
    "question": "Sustainable development means meeting present needs without ...",
    "options": ['creating jobs in the economy for the current generation', 'harming future generations’ ability to meet theirs', 'using modern technology', 'allowing tourism to grow'],
    "answer": 1,
    "explanation": "This is the standard sustainability idea used in economics and environmental policy."
  },
  {
    "id": "te-6",
    "question": "The tourism multiplier refers to the way initial tourist spending ...",
    "options": [
      "stays in one business only",
      "creates additional rounds of income",
      "eliminates imports",
      "reduces all taxes"
    ],
    "answer": 1,
    "explanation": "Tourist spending circulates and supports more income and jobs in linked sectors."
  },
  {
    "id": "te-7",
    "question": "Which is a likely negative externality of heavy tourism?",
    "options": [
      "Cleaner beaches in every case",
      "Less congestion",
      "Litter and environmental damage",
      "Automatic price stability"
    ],
    "answer": 2,
    "explanation": "Heavy tourism can create congestion, waste and environmental pressure."
  },
  {
    "id": "te-8",
    "question": "Carrying capacity refers to the ...",
    "options": ['maximum visitors an area can handle sustainably', 'number of airlines that operate in a country each year', 'price of a hotel room', 'size of the fiscal deficit'],
    "answer": 0,
    "explanation": "Carrying capacity is the level of use that an environment can sustain without serious damage."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const TourismEnvironmentalSustainability = () => (
      <CapsSubjectTopic
        title="Tourism and Environmental Sustainability"
        subtitle="Tourism as a growth sector and the need for sustainable use of resources"
        learnSteps={learnSteps}
        task="gr12-tourism-environmental-sustainability-t3"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default TourismEnvironmentalSustainability;
