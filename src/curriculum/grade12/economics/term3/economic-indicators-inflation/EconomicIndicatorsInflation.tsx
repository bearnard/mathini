
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
    image: { src: "/curriculum/grade12/econ/term3/economic-indicators-inflation/diagram.webp", alt: "Economic Indicators and Inflation" },
    title: 'Why indicators matter',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Read the signals</p>
          <p className="mt-2 text-slate-700">
            Indicators such as GDP growth, unemployment and inflation help policymakers judge whether the
            economy is expanding, struggling or overheating.
          </p>
        </div>
        <DataChart
          data={[
            { year: '2019', gdp: 0.2, unemployment: 29.1 },
            { year: '2020', gdp: -6.4, unemployment: 32.5 },
            { year: '2021', gdp: 4.9, unemployment: 34.9 },
            { year: '2022', gdp: 1.9, unemployment: 33.9 },
            { year: '2023', gdp: 0.6, unemployment: 32.1 },
          ]}
          series={[
            { key: 'gdp', label: 'GDP growth (%)', color: '#6366f1' },
            { key: 'unemployment', label: 'Unemployment (%)', color: '#ef4444' },
          ]}
          xKey="year"
          type="line"
          yLabel="%"
        />
      </div>
    ),
  },
  {
    title: 'Measuring inflation',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Inflation is a sustained increase in the general price level. The CPI tracks consumer prices while
          the PPI tracks prices received by producers.
        </p>
        <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600">A rise in one product's price is not inflation unless it feeds into the general price level.</div>
      </div>
    ),
  },
  {
    title: 'Demand-pull and cost-push inflation',
    content: (
      <div className="space-y-6">
        <DataChart
          data={[
            { source: 'Demand-pull', impact: 6 },
            { source: 'Fuel and food', impact: 7 },
            { source: 'Electricity', impact: 5 },
            { source: 'Wages', impact: 4 },
          ]}
          series={[{ key: 'impact', label: 'Inflation pressure index', color: '#f59e0b' }]}
          xKey="source"
          type="bar"
        />
        <p className="text-sm leading-7 text-slate-600">Demand-pull comes from excess spending, while cost-push comes from higher input costs.</p>
      </div>
    ),
  },
  {
    title: 'Effects and policy responses',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm font-semibold text-blue-900">Policy link</p>
          <p className="mt-2 text-slate-700">
            South Africa's inflation target range is 3% to 6%. The SARB mainly uses the repo rate to slow
            excessive demand, while fiscal discipline and better supply conditions also help.
          </p>
        </div>
      </div>
    ),
  },
];

const items: RawEconomicsItem[] = [
  {
    "id": "ei-1",
    "question": "The CPI measures changes in ...",
    "options": [
      "producer profits only",
      "consumer prices over time",
      "GDP per capita only",
      "exchange rates only"
    ],
    "answer": 1,
    "explanation": "The consumer price index tracks changes in the prices paid by consumers."
  },
  {
    "id": "ei-2",
    "question": "Demand-pull inflation occurs when ...",
    "options": [
      "aggregate demand grows too quickly",
      "imports become cheaper",
      "taxes are zero",
      "productivity rises rapidly"
    ],
    "answer": 0,
    "explanation": "Demand-pull inflation happens when total demand outpaces productive capacity."
  },
  {
    "id": "ei-3",
    "question": "Cost-push inflation is most likely caused by ...",
    "options": [
      "lower electricity tariffs",
      "rising production costs",
      "higher productivity",
      "more competition"
    ],
    "answer": 1,
    "explanation": "Cost-push inflation happens when firms face higher input costs."
  },
  {
    "id": "ei-4",
    "question": "South Africa’s inflation target range is commonly stated as ...",
    "options": [
      "0% to 2%",
      "1% to 3%",
      "3% to 6%",
      "6% to 9%"
    ],
    "answer": 2,
    "explanation": "The SARB’s inflation target range is 3% to 6%."
  },
  {
    "id": "ei-5",
    "question": "If inflation rises faster than wages, real wages generally ...",
    "options": [
      "increase",
      "stay unchanged",
      "fall",
      "become impossible to measure"
    ],
    "answer": 2,
    "explanation": "When prices rise faster than pay, workers can afford fewer goods and services."
  },
  {
    "id": "ei-6",
    "question": "Which indicator measures unemployment most directly?",
    "options": [
      "The share of the labour force without work but seeking work",
      "The CPI basket",
      "The repo rate",
      "The value of exports only"
    ],
    "answer": 0,
    "explanation": "The unemployment rate measures the share of the labour force actively seeking work but unemployed."
  },
  {
    "id": "ei-7",
    "question": "The PPI mainly measures price changes at the ... level.",
    "options": [
      "retail consumer",
      "factory or producer",
      "import tourist",
      "exchange-control"
    ],
    "answer": 1,
    "explanation": "The producer price index tracks prices received by domestic producers."
  },
  {
    "id": "ei-8",
    "question": "A higher repo rate is generally used to ...",
    "options": [
      "speed up demand and inflation",
      "reduce inflationary pressure",
      "increase the money multiplier immediately",
      "fix the exchange rate permanently"
    ],
    "answer": 1,
    "explanation": "Higher interest rates can reduce spending and help contain inflation."
  }
];

    const bank: EconomicsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));

    const EconomicIndicatorsInflation = () => (
      <CapsSubjectTopic
        title="Economic Indicators and Inflation"
        subtitle="Reading macro indicators and understanding price instability"
        learnSteps={learnSteps}
        task="gr12-economic-indicators-inflation-t3"
        bank={bank}
        apiPath="/api/caps/econ"
        grade={12}
      />
    );

    export default EconomicIndicatorsInflation;
