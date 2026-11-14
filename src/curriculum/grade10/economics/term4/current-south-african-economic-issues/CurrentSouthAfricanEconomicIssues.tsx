'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import type { EconomicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/econ/term4/current-south-african-economic-issues/diagram.webp", alt: "Current South African Economic Issues" },
    title: 'Unemployment in South Africa',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Unemployment remains one of the most serious economic challenges in South Africa. It reduces household income,
          lowers tax revenue and increases pressure on communities and public services.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Causes</strong>
            <p className="mt-1 text-slate-600">Weak growth, skills mismatch, low investment and structural barriers in the labour market.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Effects</strong>
            <p className="mt-1 text-slate-600">Higher poverty, reduced demand in the economy and growing social pressure.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Inequality and the Gini coefficient',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Inequality describes the gap between high-income and low-income households. The Gini coefficient is used to
          summarise income inequality, where values closer to 1 show greater inequality.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
          High inequality can limit social mobility and reduce the ability of growth to improve life for all citizens.
        </div>
      </div>
    ),
  },
  {
    title: 'Inflation and household pressure',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Inflation is a sustained increase in the general price level. When inflation rises faster than wages, the
          purchasing power of households falls, especially for low-income families.
        </p>
        <DataChart
          data={[
            { year: '2020', rate: 3.3 },
            { year: '2021', rate: 4.5 },
            { year: '2022', rate: 6.9 },
          ]}
          series={[{ key: 'rate', label: 'SA Inflation (%)', color: '#f97316' }]}
          xKey="year"
          type="line"
        />
      </div>
    ),
  },
  {
    title: 'Policy responses and active citizenship',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Solutions include investment in infrastructure, support for small businesses, education, better governance
          and stronger labour market opportunities. Economic issues need action from both the state and citizens.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Support entrepreneurship and local production.</li>
          <li>Improve education and training quality.</li>
          <li>Protect vulnerable households during inflationary periods.</li>
        </ul>
      </div>
    ),
  },
];

const bank: EconomicsItem[] = [
  {
    prompt: 'What is one major effect of unemployment?',
    options: ['A. Higher household income', 'B. Reduced household income', 'C. Lower need for skills', 'D. Automatic equality'],
    answer: 'B. Reduced household income',
    explanation: 'Unemployment reduces earnings and weakens spending power in the economy.',
  },
  {
    prompt: 'The Gini coefficient is mainly used to measure:',
    options: ['A. Population size', 'B. Income inequality', 'C. Interest rates', 'D. Export quality'],
    answer: 'B. Income inequality',
    explanation: 'The Gini coefficient is an indicator of how evenly or unevenly income is distributed.',
  },
  {
    prompt: 'Inflation means:',
    options: ['A. A fall in all of the prices for ever', 'B. A sustained rise in the general price level', 'C. Zero unemployment in the economy', 'D. More exports and nothing else'],
    answer: 'B. A sustained rise in the general price level',
    explanation: 'Inflation refers to the overall increase in prices over time.',
  },
  {
    prompt: 'Which response can help reduce unemployment over time?',
    options: ['A. Skills development', 'B. Ignoring small businesses', 'C. Closing schools', 'D. Removing infrastructure investment'],
    answer: 'A. Skills development',
    explanation: 'Skills development helps workers meet labour market needs and supports employability.',
  },
  {
    prompt: 'High inflation harms low-income households because it:',
    options: ['A. Increases purchasing power strongly', 'B. Reduces the real value of income', 'C. Makes all goods free', 'D. Ends inequality immediately'],
    answer: 'B. Reduces the real value of income',
    explanation: 'When prices rise faster than income, households can afford fewer goods and services.',
  },
];

export default function CurrentSouthAfricanEconomicIssues() {
  return (
    <CapsSubjectTopic
      title="Current South African Economic Issues"
      subtitle="Grade 10 · Economics · Term 4"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-current-south-african-economic-issues"
      apiPath="/api/caps/econ"
      grade={10}
    />
  );
}
