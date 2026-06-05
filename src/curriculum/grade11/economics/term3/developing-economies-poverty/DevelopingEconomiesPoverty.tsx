
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

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
];

const bank: EconomicsItem[] = [
  {
    prompt: 'Which of the following BEST characterises a developing economy?',
    options: ['High GDP per capita and strong institutions', 'Low GDP per capita, high population growth and dependence on primary commodities', 'Advanced technology and low unemployment', 'Highly diversified industrial base'],
    answer: 'Low GDP per capita, high population growth and dependence on primary commodities',
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
    options: ['Government reducing poverty grants annually', 'How poverty in one generation leads to poor education and low income in the next', 'The business cycle during recessions', 'Seasonal fluctuations in agricultural income'],
    answer: 'How poverty in one generation leads to poor education and low income in the next',
    explanation: 'Poor children attend underfunded schools, get lower qualifications, earn less, and their children face the same cycle — a trap that is hard to escape.',
  },
  {
    prompt: "SA's EPWP (Expanded Public Works Programme) aims to:",
    options: ['Attract foreign investment to SA', 'Create temporary employment while building public infrastructure and delivering services', 'Privatise state-owned enterprises', 'Reduce social grant expenditure'],
    answer: 'Create temporary employment while building public infrastructure and delivering services',
    explanation: 'The EPWP addresses short-term unemployment by paying people to build roads, plant trees and deliver community services.',
  },
  {
    prompt: 'Free basic electricity (50 kWh) provided to indigent households is an example of:',
    options: ['A merit good subsidy', 'A social grant', 'A free basic service aimed at reducing energy poverty', 'A demerit good tax'],
    answer: 'A free basic service aimed at reducing energy poverty',
    explanation: 'Free basic electricity provides a minimum amount of energy to the poorest households, reducing their energy costs.',
  },
  {
    prompt: 'Which apartheid policy MOST directly caused SA\'s current educational inequality?',
    options: ['Sanctions by the international community', 'Bantu Education — deliberately inferior schooling for black learners', 'The Homelands policy only', 'Import substitution industrialisation'],
    answer: 'Bantu Education — deliberately inferior schooling for black learners',
    explanation: 'Bantu Education (1953) provided deliberately inferior schooling to black learners, creating a skills and opportunity gap that persists today.',
  },
  {
    prompt: "South Africa's HDI of approximately 0.71 places it in which category?",
    options: ['Very high human development', 'High human development', 'Medium human development', 'Low human development'],
    answer: 'High human development',
    explanation: 'HDI above 0.700 is classified as "high" human development — SA sits in this band, though with significant internal inequality.',
  },
  {
    prompt: 'NSFAS (National Student Financial Aid Scheme) addresses poverty by:',
    options: ['Providing housing for the homeless', 'Funding tertiary education for students from low-income households', 'Creating government jobs', 'Subsidising food prices'],
    answer: 'Funding tertiary education for students from low-income households',
    explanation: 'NSFAS provides bursaries and loans for university and TVET studies, helping break the poverty cycle through education.',
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
