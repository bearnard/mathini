
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const povertyTrendData = [
  { year: '2019', unemployment: 29, poverty: 55 },
  { year: '2020', unemployment: 32, poverty: 57 },
  { year: '2021', unemployment: 34, poverty: 56 },
  { year: '2022', unemployment: 33, poverty: 55 },
  { year: '2023', unemployment: 32, poverty: 54 },
];

const learnSteps: LearnStep[] = [
  {
    title: 'Developing vs Developed Economies',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Developing economies usually have lower incomes, more unemployment, weaker infrastructure and greater dependence on primary products than developed economies.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Developing economy</p>
            <p className="mt-1 text-slate-600">Lower GDP per capita, higher population growth and more structural poverty.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Developed economy</p>
            <p className="mt-1 text-slate-600">Higher GDP per capita, stronger institutions and more diversified production.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Measuring Poverty',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Economists measure poverty using income lines, relative comparisons and broader development indicators such as the HDI.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-800">Absolute poverty</p>
            <p className="mt-1 text-slate-600">A household cannot afford basic needs such as food, shelter and clothing.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <p className="font-semibold text-orange-800">Relative poverty</p>
            <p className="mt-1 text-slate-600">Income is low compared with typical living standards in the same country.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-semibold text-purple-800">HDI</p>
            <p className="mt-1 text-slate-600">Combines life expectancy, education and GNI per capita into one index.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <p className="font-semibold text-yellow-800">Multi-dimensional poverty</p>
            <p className="mt-1 text-slate-600">Includes poor access to health, education, housing and services.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Causes and Effects of Poverty in SA',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Poverty in South Africa is linked to the apartheid legacy, unemployment, poor education outcomes and weak local service delivery.
        </p>
        <DataChart
          data={povertyTrendData}
          series={[
            { key: 'unemployment', label: 'Unemployment (%)', color: '#ef4444' },
            { key: 'poverty', label: 'Poverty rate (%)', color: '#6366f1' },
          ]}
          xKey="year"
          type="line"
          yLabel="%"
        />
        <p className="text-sm text-slate-500">High unemployment and poverty reinforce one another, creating a poverty trap across generations.</p>
      </div>
    ),
  },
  {
    title: 'Government Interventions to Address Poverty',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Social grants, public works programmes, free basic services and education support all aim to reduce poverty and strengthen long-term development.
        </p>
        <div className="grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-semibold text-green-800">Income support</p>
            <p className="mt-1 text-slate-600">Child support grants and pensions protect vulnerable households.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="font-semibold text-blue-800">Work and skills</p>
            <p className="mt-1 text-slate-600">EPWP and NSFAS help people build earning capacity over time.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Measuring and fighting poverty in South Africa",
    content: (
      <div className="space-y-4">
        <GapRule>{"Someone in absolute poverty cannot afford the basic needs of life, however the rest of society is doing. The state responds with public works jobs, free basic services and student funding, and it still lives with the legacy of unequal schooling under Bantu Education."}</GapRule>
        <GapWorked title={"Match policy to problem"} steps={["EPWP: short-term jobs that also build roads and drains.", "Free electricity for indigent households eases energy poverty.", "NSFAS pays for study so poor students can qualify.", "Bantu Education gave black learners inferior schools, still felt in today's skills gaps."]} />
        <GapMistake>{"Judging poverty by comparison with the neighbours rather than by basic needs."}</GapMistake>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'Which of the following BEST characterises a developing economy?',
    options: ['High GDP per capita and strong institutions', 'Low GDP per capita, fast population growth, primary exports', 'Advanced technology and low unemployment', 'A highly diversified industrial base'],
    answer: 'Low GDP per capita, fast population growth, primary exports',
    explanation: 'Developing economies typically have low incomes, rapid population growth, and rely heavily on raw material exports.',
  },
  {
    prompt: 'Absolute poverty is defined as:',
    options: ['Earning less than 50% of the national median income', 'Unable to meet basic needs — income below a fixed minimum threshold', 'Having a Gini coefficient above 0.5', 'Being unemployed for more than one year'],
    answer: 'Unable to meet basic needs — income below a fixed minimum threshold',
    explanation: 'Absolute poverty means a person\'s income or consumption falls below the level needed for basic survival (food, shelter, clothing).',
  },
  {
    prompt: 'The Human Development Index (HDI) is a composite measure of:',
    options: ['GDP, inflation and unemployment', 'Life expectancy, education and GNI per capita', 'Foreign debt, trade balance and exports', 'Gini coefficient, poverty rate and literacy'],
    answer: 'Life expectancy, education and GNI per capita',
    explanation: 'HDI combines life expectancy (health), mean/expected years of schooling (education) and GNI per capita (income) into a single index.',
  },
  {
    prompt: 'Relative poverty measures poverty by comparing incomes to:',
    options: ['A fixed international dollar threshold', 'The national median income (e.g. 50% of median)', 'The HDI value', 'Per capita GDP growth rate'],
    answer: 'The national median income (e.g. 50% of median)',
    explanation: 'Relative poverty reflects deprivation relative to living standards in the same society — not just survival needs.',
  },
  {
    prompt: 'The "poverty cycle" or "poverty trap" refers to:',
    options: ['The government cutting poverty grants each year', 'Poverty in one generation causes poor schooling in the next', 'The business cycle during a period of recession', 'Seasonal swings in the income from agriculture'],
    answer: 'Poverty in one generation causes poor schooling in the next',
    explanation: 'Poor children attend underfunded schools, get lower qualifications, earn less, and their children face the same cycle — a trap that is hard to escape.',
  },
  {
    prompt: "SA's EPWP (Expanded Public Works Programme) aims to:",
    options: ['Attract foreign investment into South Africa', 'Create temporary jobs while building public assets', 'Privatise the state-owned enterprises', 'Cut the amount spent on social grants each year'],
    answer: 'Create temporary jobs while building public assets',
    explanation: 'The EPWP addresses short-term unemployment by paying people to build roads, plant trees and deliver community services.',
  },
  {
    prompt: 'Free basic electricity (50 kWh) provided to indigent households is an example of:',
    options: ['A subsidy on a merit good for all households', 'A social grant that is paid in cash each month', 'A free basic service aimed at lowering energy poverty', 'A tax that is placed on a demerit good'],
    answer: 'A free basic service aimed at lowering energy poverty',
    explanation: 'Free basic electricity provides a minimum amount of energy to the poorest households, reducing their energy costs.',
  },
  {
    prompt: 'Which apartheid policy MOST directly caused SA\'s current educational inequality?',
    options: ['Sanctions by the international community of nations', 'Bantu Education, inferior schooling for black learners', 'The homelands policy and nothing else besides it', 'Import-substitution industrialisation after the war'],
    answer: 'Bantu Education, inferior schooling for black learners',
    explanation: 'Bantu Education (1953) provided deliberately inferior schooling to black learners, creating a skills and opportunity gap that persists today.',
  },
  {
    prompt: "South Africa's HDI of approximately 0.74 places it in which category?",
    options: ['Very high human development', 'High human development', 'Medium human development', 'Low human development'],
    answer: 'High human development',
    explanation: 'HDI above 0.700 is classified as "high" human development — SA sits in this band, though with significant internal inequality.',
  },
  {
    prompt: 'NSFAS (National Student Financial Aid Scheme) addresses poverty by:',
    options: ['Providing housing for the homeless poor', 'Funding tertiary study for poor students', 'Creating new jobs in the government', 'Subsidising the price of food in shops'],
    answer: 'Funding tertiary study for poor students',
    explanation: 'NSFAS provides bursaries (full-cost study funding) to qualifying students at universities and TVET colleges, helping break the poverty cycle through education.',
  },
];

const DevelopingEconomiesPoverty = () => (
  <CapsSubjectTopic
    title="Developing Economies and Poverty"
    subtitle="Characteristics, measurement and responses to poverty in South Africa"
    learnSteps={learnSteps}
    task="gr11-developing-economies-poverty-t3"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default DevelopingEconomiesPoverty;
