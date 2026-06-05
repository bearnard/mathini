
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import SupplyDemand from '@/components/subjects/SupplyDemand';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const issueTrendData = [
  { year: '2019', unemployment: 29, inflation: 4.1, growth: 0.3 },
  { year: '2020', unemployment: 32, inflation: 3.3, growth: -6.3 },
  { year: '2021', unemployment: 34, inflation: 4.5, growth: 4.7 },
  { year: '2022', unemployment: 33, inflation: 6.9, growth: 1.9 },
  { year: '2023', unemployment: 32, inflation: 5.9, growth: 0.6 },
];

const learnSteps: LearnStep[] = [
  {
    title: 'Current SA Economic Challenges',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          South Africa faces a mix of structural problems such as unemployment and load-shedding, plus short-run shocks such as inflation spikes and exchange-rate weakness.
        </p>
        <DataChart
          data={issueTrendData}
          series={[
            { key: 'unemployment', label: 'Unemployment (%)', color: '#ef4444' },
            { key: 'inflation', label: 'Inflation (%)', color: '#f59e0b' },
            { key: 'growth', label: 'GDP growth (%)', color: '#6366f1' },
          ]}
          xKey="year"
          type="line"
          yLabel="%"
        />
      </div>
    ),
  },
  {
    title: 'Index Numbers and Nominal vs Real Values',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Index numbers compare a current value with a base year value of 100. They are useful for CPI, GDP and many exam calculations.
        </p>
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Formula recap</p>
          <p className="mt-1 text-slate-600">Index = (current value ÷ base year value) × 100</p>
          <p className="mt-2 text-slate-600">Real GDP = (nominal GDP ÷ price index) × 100</p>
        </div>
      </div>
    ),
  },
  {
    title: 'GDP per Capita and Economic Comparisons',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          GDP per capita helps compare average income levels, but it should always be read together with inequality and cost-of-living data.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Calculation</p>
            <p className="mt-1 text-slate-600">GDP per capita = GDP ÷ population.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-semibold text-purple-800">Limitation</p>
            <p className="mt-1 text-slate-600">A high average can hide severe inequality, as in South Africa.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Structured Answer Technique for Exams',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good exam answers describe the trend, calculate correctly, explain with theory and evaluate with South African evidence.
        </p>
        <SupplyDemand title="Cost-push Inflation Shock" showShifts={true} />
        <div className="rounded-xl bg-slate-50 p-4 text-left">
          <p className="font-semibold text-slate-800">Using the graph</p>
          <p className="mt-1 text-slate-600">Load-shedding raises production costs, shifts supply left and helps explain why prices can rise while output falls.</p>
        </div>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: "SA's unemployment rate of 33%+ is mainly classified as:",
    options: ['Cyclical unemployment', 'Frictional unemployment', 'Structural unemployment', 'Seasonal unemployment'],
    answer: 'Structural unemployment',
    explanation: "SA's unemployment is primarily structural — a persistent mismatch between the skills workers have and the skills employers need, not just a business cycle effect.",
  },
  {
    prompt: 'Load-shedding affects SA\'s economy primarily by:',
    options: ['Reducing import costs', 'Cutting production hours for firms and increasing costs through diesel generators', 'Raising the rand exchange rate', 'Increasing agricultural output'],
    answer: 'Cutting production hours for firms and increasing costs through diesel generators',
    explanation: 'Load-shedding forces businesses to stop production during blackouts and invest in costly backup power — estimated to cost 1–2% of GDP annually.',
  },
  {
    prompt: 'If the CPI base year = 100 and current CPI = 150, the inflation since base year is:',
    options: ['50%', '150%', '15%', '1.5%'],
    answer: '50%',
    explanation: 'Price level rose from 100 to 150 — an increase of 50 points on a base of 100, representing 50% inflation over the period.',
  },
  {
    prompt: 'Real GDP is calculated by:',
    options: ['Multiplying nominal GDP by the exchange rate', 'Dividing nominal GDP by the price index and multiplying by 100', 'Subtracting government spending from nominal GDP', 'Adding the inflation rate to nominal GDP'],
    answer: 'Dividing nominal GDP by the price index and multiplying by 100',
    explanation: 'Real GDP = (Nominal GDP ÷ Price Index) × 100. This removes the effect of inflation to show changes in actual output.',
  },
  {
    prompt: 'GDP per capita is calculated as:',
    options: ['GDP × population', 'GDP ÷ population', 'Real GDP − inflation rate', 'GNI ÷ labour force'],
    answer: 'GDP ÷ population',
    explanation: 'GDP per capita = total GDP divided by total population, giving the average income per person in the economy.',
  },
  {
    prompt: 'When the rand weakens against the US dollar, the effect on SA is:',
    options: ['Imports become cheaper', 'Exports become less competitive', 'Import prices rise, pushing up inflation', 'The repo rate automatically falls'],
    answer: 'Import prices rise, pushing up inflation',
    explanation: 'A weaker rand means SA pays more rands for each dollar of imports — fuel, food and machinery imported costs rise, pushing up CPI inflation.',
  },
  {
    prompt: 'An index number for GDP in Year 2 = 115. This means:',
    options: ['GDP fell by 15% from the base year', 'GDP grew by 115% from the base year', 'GDP is 15% higher than in the base year', 'GDP is R115 billion'],
    answer: 'GDP is 15% higher than in the base year',
    explanation: 'An index of 115 means the value has risen by 15 percentage points above the base year value of 100.',
  },
  {
    prompt: 'In a structured essay response, after defining a concept you should:',
    options: ['Write only theoretical definitions', 'Provide a South African example and evaluate the concept\'s relevance or impact', 'Simply repeat the question', 'List only advantages without evaluation'],
    answer: "Provide a South African example and evaluate the concept's relevance or impact",
    explanation: 'High marks come from concept definition + SA-specific evidence + evaluation — mere definitions earn few marks in FET Economics essays.',
  },
  {
    prompt: 'SARB\'s inflation target of 3–6% helps the economy by:',
    options: ['Guaranteeing full employment', 'Providing price stability which reduces uncertainty for businesses and consumers making decisions', 'Fixing the exchange rate', 'Eliminating the need for interest rate changes'],
    answer: 'Providing price stability which reduces uncertainty for businesses and consumers making decisions',
    explanation: 'Price stability (low, stable inflation) reduces economic uncertainty, supports investment planning and protects consumers\' purchasing power.',
  },
  {
    prompt: 'Which calculation method converts nominal GDP to real GDP?',
    options: ['Add population growth rate to nominal GDP', 'Nominal GDP × CPI ÷ 100', '(Nominal GDP ÷ CPI) × 100', 'Nominal GDP − net exports'],
    answer: '(Nominal GDP ÷ CPI) × 100',
    explanation: 'Dividing by the CPI (price index) and multiplying by 100 strips out inflation to show real changes in production volume.',
  },
];

const CurrentEconomicIssues = () => (
  <CapsSubjectTopic
    title="Current Economic Issues and Quantitative Skills"
    subtitle="SA's key challenges, index numbers, real vs nominal values and exam technique"
    learnSteps={learnSteps}
    task="gr11-current-economic-issues-t4"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default CurrentEconomicIssues;
