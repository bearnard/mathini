
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const outputTrendData = [
  { year: '2019', gdp: 0.3, gni: 0.1 },
  { year: '2020', gdp: -6.3, gni: -6.8 },
  { year: '2021', gdp: 4.7, gni: 4.3 },
  { year: '2022', gdp: 1.9, gni: 1.4 },
  { year: '2023', gdp: 0.6, gni: 0.2 },
];

const nominalRealIndexData = [
  { year: '2020', nominal: 100, real: 100 },
  { year: '2021', nominal: 108, real: 104 },
  { year: '2022', nominal: 118, real: 106 },
  { year: '2023', nominal: 126, real: 107 },
];

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/econ/term1/gdp-gni/diagram.webp", alt: "GDP, GNI and Gross Value Added" },
    title: 'What is GDP?',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Gross Domestic Product is the total market value of all final goods and services produced inside a country&apos;s borders during a given period.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Final goods only</p>
            <p className="mt-1 text-slate-600">Intermediate goods are excluded to avoid double-counting.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-semibold text-purple-800">Domestic production</p>
            <p className="mt-1 text-slate-600">It counts output produced in South Africa, even if foreign firms own the business.</p>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-left">
          <p className="font-semibold text-slate-800">Expenditure formula</p>
          <p className="mt-1 text-slate-600">GDP = C + I + G + (X − M)</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Three Approaches to Measuring GDP',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Economists can measure the same total output from the spending side, the income side or the production side.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Expenditure</p>
            <p className="mt-1 text-slate-600">Adds household, business, government and foreign spending.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-800">Income</p>
            <p className="mt-1 text-slate-600">Adds wages, rent, interest and profit earned by factors of production.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <p className="font-semibold text-orange-800">Output</p>
            <p className="mt-1 text-slate-600">Adds value added by firms across the economy.</p>
          </div>
        </div>
        <DataChart
          data={outputTrendData}
          series={[
            { key: 'gdp', label: 'GDP growth (%)', color: '#6366f1' },
            { key: 'gni', label: 'GNI growth (%)', color: '#ef4444' },
          ]}
          xKey="year"
          type="line"
          yLabel="%"
        />
      </div>
    ),
  },
  {
    title: 'GDP vs GNI',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          GDP measures production inside the country, while GNI adjusts for income flowing into and out of the country.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">GDP</p>
            <p className="mt-1 text-slate-600">Includes profits earned by foreign-owned mines, factories and banks operating in South Africa.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">GNI</p>
            <p className="mt-1 text-slate-600">Adds income South Africans earn abroad and subtracts profits sent to foreign owners.</p>
          </div>
        </div>
        <div className="rounded-xl bg-amber-50 p-4 text-left text-amber-900">
          <p className="font-semibold">Exam link</p>
          <p className="mt-1">If foreign firms repatriate profits, GNI will usually be lower than GDP.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Nominal vs Real GDP and GDP per Capita',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          To compare output properly, we must adjust for price changes and population growth.
        </p>
        <DataChart
          data={nominalRealIndexData}
          series={[
            { key: 'nominal', label: 'Nominal GDP index', color: '#8b5cf6' },
            { key: 'real', label: 'Real GDP index', color: '#10b981' },
          ]}
          xKey="year"
          type="line"
          yLabel="Index"
        />
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-800">Nominal GDP</p>
            <p className="mt-1 text-slate-600">Measured at current prices, so it rises when prices rise.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-semibold text-slate-800">Real GDP</p>
            <p className="mt-1 text-slate-600">Adjusted for inflation, showing the true change in output.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">GDP per capita = GDP ÷ population, but this average can hide inequality.</p>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'GDP measures the total value of all final goods and services produced:',
    options: ['By SA residents anywhere in the world', 'Within SA\'s borders in a given period', 'Excluding government spending', 'Including intermediate goods'],
    answer: "Within SA's borders in a given period",
    explanation: 'GDP captures output produced within a country\'s geographic borders regardless of who owns the factors of production.',
  },
  {
    prompt: 'In the expenditure approach, the formula for GDP is:',
    options: ['C + I + G + (X − M)', 'W + R + I + P', 'GVA + taxes − subsidies', 'GNI − net factor income'],
    answer: 'C + I + G + (X − M)',
    explanation: 'GDP = Consumption + Investment + Government spending + (Exports − Imports).',
  },
  {
    prompt: 'GNI differs from GDP because GNI:',
    options: ['Excludes government spending', 'Adds net factor income from abroad to GDP', 'Uses constant prices', 'Only counts manufacturing output'],
    answer: 'Adds net factor income from abroad to GDP',
    explanation: 'GNI = GDP + income earned by residents abroad − income paid to foreigners in the country.',
  },
  {
    prompt: 'Why is real GDP more useful than nominal GDP for comparing growth over time?',
    options: ['Real GDP includes more sectors of the economy than nominal GDP', 'Real GDP is adjusted for inflation, so it shows true output change', 'Nominal GDP uses a base year and real GDP does not', 'Real GDP is the same as gross national income (GNI)'],
    answer: 'Real GDP is adjusted for inflation, so it shows true output change',
    explanation: 'Adjusting for inflation allows comparison of actual volumes of output, not just price increases.',
  },
  {
    prompt: 'GDP per capita is calculated as:',
    options: ['GDP × population', 'GDP ÷ population', 'GNI ÷ labour force', 'Real GDP − inflation'],
    answer: 'GDP ÷ population',
    explanation: 'GDP per capita = GDP divided by total population, giving the average income per person.',
  },
  {
    prompt: 'Which approach sums the incomes earned by all factors of production to calculate GDP?',
    options: ['Expenditure approach', 'Production approach', 'Income approach', 'GVA approach'],
    answer: 'Income approach',
    explanation: 'The income approach adds wages, rent, interest and profit earned across the economy.',
  },
  {
    prompt: 'Why are intermediate goods excluded from GDP calculations?',
    options: ['They are too small for statisticians to measure', 'To avoid double-counting value already in the final goods', 'They are produced by the government and not by firms', 'Intermediate goods have no market price at all'],
    answer: 'To avoid double-counting value already in the final goods',
    explanation: 'Including intermediate goods would count the same value multiple times as goods move through production stages.',
  },
  {
    prompt: 'A foreign company mines platinum in SA and sends profits abroad. This reduces SA\'s:',
    options: ['GDP', 'GNI', 'Gross Value Added', 'Real GDP'],
    answer: 'GNI',
    explanation: 'Profits repatriated abroad reduce GNI (but not GDP), since GNI adjusts for net factor income flows.',
  },
  {
    prompt: 'Which measure best reflects the income actually available to a country\'s residents?',
    options: ['Nominal GDP', 'Real GDP', 'GNI', 'GDP per capita'],
    answer: 'GNI',
    explanation: 'GNI accounts for income flows in and out of the country, better reflecting residents\' purchasing power.',
  },
  {
    prompt: 'A major limitation of using GDP per capita to measure well-being is that it:',
    options: ['It ignores the output of the government sector', 'It is not adjusted for inflation in any way', 'It hides income inequality within the country', 'It counts exports twice in the national accounts'],
    answer: 'It hides income inequality within the country',
    explanation: 'GDP per capita is an average — in a highly unequal country like SA it masks extreme gaps between rich and poor.',
  },
];

const GdpGni = () => (
  <CapsSubjectTopic
    title="GDP, GNI and Gross Value Added"
    subtitle="Measuring national economic output and income"
    learnSteps={learnSteps}
    task="gr11-gdp-gni-t1"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default GdpGni;
