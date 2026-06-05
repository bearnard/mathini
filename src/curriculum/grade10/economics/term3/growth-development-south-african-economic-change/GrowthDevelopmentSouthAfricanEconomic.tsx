'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Economic growth and development',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Economic growth means an increase in production over time, while development looks more broadly at living
          standards, health, education and access to opportunities. A country can grow without improving life equally for everyone.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Growth</strong>
            <p className="mt-1 text-slate-600">Usually measured with changes in real GDP.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Development</strong>
            <p className="mt-1 text-slate-600">Measured with indicators such as income, schooling, health and service access.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Indicators used in South Africa',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Economists use indicators such as GDP growth, unemployment, literacy and life expectancy to understand whether
          the economy is expanding and whether that growth improves wellbeing.
        </p>
        <DataChart
          data={[
            { year: '2020', gdp: -6.4 },
            { year: '2021', gdp: 4.9 },
            { year: '2022', gdp: 1.9 },
          ]}
          series={[{ key: 'gdp', label: 'SA GDP Growth (%)', color: '#14b8a6' }]}
          xKey="year"
          type="line"
        />
      </div>
    ),
  },
  {
    title: 'Structural change in the South African economy',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Over time, the South African economy has shifted from stronger reliance on primary production to greater
          importance of manufacturing and especially services. Structural change affects jobs, training needs and regional development.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
          Structural change is not only about sectors growing or shrinking. It also changes the skills needed in the labour market.
        </div>
      </div>
    ),
  },
  {
    title: 'Policies for inclusive development',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Development policy aims to reduce poverty, improve education, expand infrastructure and support economic
          participation. Inclusive growth matters because growth without access leaves many households behind.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Skills development improves employability.</li>
          <li>Infrastructure lowers business costs and supports communities.</li>
          <li>Good governance improves confidence and service delivery.</li>
        </ul>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'Economic growth mainly refers to an increase in:',
    options: ['A. Real GDP', 'B. Only imports', 'C. Crime levels', 'D. School uniforms'],
    answer: 'A. Real GDP',
    explanation: 'Growth is usually measured by increases in real gross domestic product over time.',
  },
  {
    prompt: 'Development differs from growth because development focuses more on:',
    options: ['A. Human wellbeing and living standards', 'B. Gold mining only', 'C. Exchange rates only', 'D. Import taxes only'],
    answer: 'A. Human wellbeing and living standards',
    explanation: 'Development includes quality-of-life indicators such as health, education and income access.',
  },
  {
    prompt: 'Which indicator can be used to judge whether more people are finding work?',
    options: ['A. Inflation rate only', 'B. Unemployment rate', 'C. Rainfall level', 'D. Number of websites'],
    answer: 'B. Unemployment rate',
    explanation: 'The unemployment rate shows the share of the labour force that is without work.',
  },
  {
    prompt: 'Structural change means:',
    options: ['A. The economy never changes', 'B. The composition of sectors and jobs changes over time', 'C. Taxes are removed forever', 'D. Only prices increase'],
    answer: 'B. The composition of sectors and jobs changes over time',
    explanation: 'Structural change refers to shifts in how an economy is organised across sectors and employment patterns.',
  },
  {
    prompt: 'Which policy can support inclusive development?',
    options: ['A. Skills training and infrastructure', 'B. Ignoring education', 'C. Avoiding maintenance', 'D. Removing all public services'],
    answer: 'A. Skills training and infrastructure',
    explanation: 'Training and infrastructure help people participate more fully in the economy.',
  },
];

export default function GrowthDevelopmentSouthAfricanEconomic() {
  return (
    <CapsSubjectTopic
      title="Growth, Development and South African Economic Change"
      subtitle="Grade 10 · Economics · Term 3"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-growth-development-south-african-economic-change"
      apiPath="/api/caps/econ"
      grade={10}
    />
  );
}
