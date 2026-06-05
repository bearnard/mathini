
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
    title: 'Phases of the cycle',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">CAPS focus</p>
          <p className="mt-2 text-slate-700">
            A business cycle tracks how real output moves around a long-term trend through expansion,
            peak, recession and trough. In Grade 12 answers, always connect each phase to output,
            employment and confidence.
          </p>
        </div>
        <DataChart
          data={[
            { year: '2019', growth: 0.2, unemployment: 29.1 },
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
        <p className="text-sm leading-7 text-slate-600">
          The sharp contraction in 2020 and slow recovery afterwards show why recessions usually bring
          job losses and weaker household income.
        </p>
      </div>
    ),
  },
  {
    title: 'Turning points and amplitude',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The peak is the upper turning point and the trough is the lower turning point. Amplitude is the
          size of the swing above or below the trend line, while duration refers to how long the phase
          lasts.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Expansion</p>
            <p className="mt-2 text-sm text-slate-600">Output, employment and spending rise.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Peak</p>
            <p className="mt-2 text-sm text-slate-600">The economy is near capacity and inflation risks build.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Trough</p>
            <p className="mt-2 text-sm text-slate-600">Contraction ends and recovery can begin.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Indicators and causes',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Indicator tip</p>
          <p className="mt-2 text-slate-700">
            Leading indicators move first, coincident indicators move with the economy, and lagging
            indicators confirm a trend after the turning point.
          </p>
        </div>
        <ul className="list-disc pl-6 text-slate-600 space-y-2">
          <li>Business confidence and building plans often lead the cycle.</li>
          <li>Employment and retail sales usually move with current activity.</li>
          <li>Inflation and long-term debt stress may lag behind the cycle.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Stabilisation policy',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          In a recession, expansionary fiscal or monetary policy can support spending. During an
          overheating boom, contractionary policy can slow demand and limit inflationary pressure.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-800">Recession response</p>
            <p className="mt-2 text-sm text-emerald-900">Raise spending, cut taxes or lower rates to lift demand.</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="font-semibold text-amber-800">Boom response</p>
            <p className="mt-2 text-sm text-amber-900">Tighten policy to protect price stability and external balance.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "bc-1",
    "question": "What is the lower turning point of a business cycle called?",
    "options": [
      "Boom",
      "Peak",
      "Trough",
      "Trend"
    ],
    "answer": 2,
    "explanation": "The trough is the lowest point of the cycle before recovery begins."
  },
  {
    "id": "bc-2",
    "question": "A period of falling economic activity is called a ...",
    "options": [
      "Recovery",
      "Recession",
      "Prosperity",
      "Peak"
    ],
    "answer": 1,
    "explanation": "A recession is the downward phase in which output and spending decline."
  },
  {
    "id": "bc-3",
    "question": "Which type of indicator usually changes before the economy changes?",
    "options": [
      "Lagging indicator",
      "Leading indicator",
      "Coincident indicator",
      "Nominal indicator"
    ],
    "answer": 1,
    "explanation": "Leading indicators move ahead of the broader business cycle."
  },
  {
    "id": "bc-4",
    "question": "Which policy is most appropriate during a deep recession?",
    "options": [
      "Higher taxes and less spending",
      "Expansionary fiscal policy",
      "A stronger exchange-rate target only",
      "Price fixing in all markets"
    ],
    "answer": 1,
    "explanation": "Expansionary fiscal policy raises demand through higher spending or lower taxes."
  },
  {
    "id": "bc-5",
    "question": "The distance between the trend line and the peak or trough is called the ...",
    "options": [
      "Frequency",
      "Duration",
      "Amplitude",
      "Multiplier"
    ],
    "answer": 2,
    "explanation": "Amplitude measures how large the swing is around the trend."
  },
  {
    "id": "bc-6",
    "question": "What usually happens to unemployment during a recession?",
    "options": [
      "It falls sharply",
      "It stays fixed by law",
      "It tends to rise",
      "It becomes impossible to measure"
    ],
    "answer": 2,
    "explanation": "Firms reduce output and often employ fewer workers during a recession."
  },
  {
    "id": "bc-7",
    "question": "The point where expansion ends and contraction begins is the ...",
    "options": [
      "Upper turning point",
      "Circular flow",
      "Multiplier point",
      "Lagged point"
    ],
    "answer": 0,
    "explanation": "The peak is also called the upper turning point."
  },
  {
    "id": "bc-8",
    "question": "Which statement best describes a recovery?",
    "options": [
      "Output continues to fall below trend forever",
      "The economy moves upward after the trough",
      "Inflation is always zero",
      "Imports disappear completely"
    ],
    "answer": 1,
    "explanation": "Recovery begins after the trough when production and spending start increasing again."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const BusinessCycles = () => (
      <CapsSubjectTopic
        title="Business Cycles"
        subtitle="Phases, turning points, indicators and stabilisation policy"
        learnSteps={learnSteps}
        task="gr12-business-cycles-t1"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default BusinessCycles;
