'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/bus/term1/business-environments-functions/diagram.webp", alt: "Business Environments and Functions" },
    title: 'Understanding the business environments',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          South African businesses operate inside three connected environments. The micro environment is internal,
          the market environment includes stakeholders such as customers and suppliers, and the macro environment
          includes broader forces such as legislation, inflation and technology.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Micro environment</strong>
            <p className="mt-1 text-slate-600">Mission, staff, policies, resources and business functions under direct control.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Market environment</strong>
            <p className="mt-1 text-slate-600">Customers, competitors, suppliers and intermediaries that the business can influence but not control.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Macro environment</strong>
            <p className="mt-1 text-slate-600">PESTLE factors such as politics, economics, social change, technology and laws.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'PESTLE and external pressures',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          CAPS expects learners to identify how macro factors influence businesses. A change in taxation,
          load-shedding, unemployment, exchange rates or consumer trends can all force a business to adjust plans.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">Political and legislative</strong>
            <p className="mt-1 text-slate-600">Government policy, labour law and consumer protection affect how firms employ staff and trade.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">Economic and social</strong>
            <p className="mt-1 text-slate-600">Inflation, interest rates, inequality and changing lifestyles influence spending and demand.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">Technological</strong>
            <p className="mt-1 text-slate-600">New software, automation and online selling create opportunities and threats.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">Environmental</strong>
            <p className="mt-1 text-slate-600">Water shortages, waste rules and sustainability pressure require responsible decisions.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Core business functions',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The business functions work together to achieve the aims of the enterprise. In Grade 10, learners should
          recognise the purpose of each function and explain how external factors can affect them.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">General management and administration</strong>
            <p className="mt-1 text-slate-600">Planning, organising, controlling records and coordinating all business activities.</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">Marketing and public relations</strong>
            <p className="mt-1 text-slate-600">Promoting products, understanding customer needs and building a good image.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <strong className="text-cyan-700">Purchasing and production</strong>
            <p className="mt-1 text-slate-600">Obtaining inputs and turning them into goods or services efficiently.</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <strong className="text-violet-700">Human resources and finance</strong>
            <p className="mt-1 text-slate-600">Recruiting workers, paying salaries, budgeting and managing cash flow.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Responding to environmental challenges',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Businesses cannot remove every threat, but they can plan sensible responses. Managers monitor changes,
          compare risks and then adapt policies, budgets and marketing strategies.
        </p>
        <div className="rounded-xl bg-amber-50 p-5">
          <p className="font-semibold text-amber-800">Case study tip</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
            <li>Name the environment correctly.</li>
            <li>Explain which function is affected.</li>
            <li>Recommend one practical response such as training, budgeting or new technology.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Which environment includes suppliers and customers?',
    options: ['A. Micro environment', 'B. Market environment', 'C. Macro environment', 'D. Internal environment only'],
    answer: 'B. Market environment',
    explanation: 'Customers and suppliers are part of the market environment because the business interacts with them directly but does not fully control them.',
  },
  {
    prompt: 'A rise in interest rates is best classified as which factor?',
    options: ['A. Economic factor', 'B. Administrative factor', 'C. Human resource factor', 'D. Production factor'],
    answer: 'A. Economic factor',
    explanation: 'Interest rates are part of the economic environment and influence borrowing costs and consumer spending.',
  },
  {
    prompt: 'Which business function is mainly responsible for recruiting and training workers?',
    options: ['A. Marketing', 'B. Human resources', 'C. Purchasing', 'D. Public relations'],
    answer: 'B. Human resources',
    explanation: 'The human resources function deals with staff needs, recruitment, development and employee wellbeing.',
  },
  {
    prompt: 'PESTLE is used to analyse which environment?',
    options: ['A. Micro', 'B. Market', 'C. Macro', 'D. Internal sales'],
    answer: 'C. Macro',
    explanation: 'PESTLE focuses on the wider macro environment such as political, economic and technological change.',
  },
  {
    prompt: 'What is the best first step when answering a case study about an external challenge?',
    options: ['A. Ignore the function involved', 'B. Identify the environment and its effect', 'C. Give only a definition of profit', 'D. List random facts'],
    answer: 'B. Identify the environment and its effect',
    explanation: 'A strong CAPS answer first identifies the environment correctly and then explains the effect on the business.',
  },
];

export default function BusinessEnvironmentsFunctions() {
  return (
    <CapsSubjectTopic
      title="Business Environments and Functions"
      subtitle="Grade 10 · Business Studies · Term 1"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-business-environments-functions"
      apiPath="/api/caps/bus"
      grade={10}
    />
  );
}
