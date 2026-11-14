'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'The three business sectors',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The economy is grouped into primary, secondary and tertiary sectors. Each sector adds value in a different
          way and depends on the others to keep the economy functioning.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-lime-50 p-4">
            <strong className="text-lime-700">Primary</strong>
            <p className="mt-1 text-slate-600">Extracts natural resources through farming, fishing and mining.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Secondary</strong>
            <p className="mt-1 text-slate-600">Processes raw materials into products through manufacturing and construction.</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Tertiary</strong>
            <p className="mt-1 text-slate-600">Provides services such as transport, banking, retail and tourism.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interdependence between sectors',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Sectors support each other. For example, maize grown in the primary sector is processed in the secondary
          sector and sold by tertiary sector businesses.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
          <p><strong>Flow of value:</strong> raw materials → manufactured goods → distribution and services.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Socio-economic issues in South Africa',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Businesses operate in a country shaped by unemployment, poverty, inequality, crime and environmental
          stress. These issues reduce purchasing power but also create opportunities for innovation and support.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Unemployment and poverty</strong>
            <p className="mt-1 text-slate-600">Lower household income can reduce demand for non-essential goods.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Inequality and crime</strong>
            <p className="mt-1 text-slate-600">Firms may need stronger security, more affordable pricing and community support projects.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Responsible sector responses',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Businesses can respond by creating jobs, improving skills, supporting local suppliers and reducing harm to
          the environment. A good answer should connect the response to the sector involved.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Primary sector businesses can protect land and water resources.</li>
          <li>Secondary sector businesses can improve safety and reduce waste.</li>
          <li>Tertiary sector businesses can offer training, service access and digital inclusion.</li>
        </ul>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Mining belongs mainly to which sector?',
    options: ['A. Primary sector', 'B. Secondary sector', 'C. Tertiary sector', 'D. Informal sector only'],
    answer: 'A. Primary sector',
    explanation: 'Mining extracts natural resources directly from the earth, so it belongs to the primary sector.',
  },
  {
    prompt: 'A bakery that turns flour into bread operates mainly in the:',
    options: ['A. Primary sector', 'B. Secondary sector', 'C. Tertiary sector', 'D. Public sector'],
    answer: 'B. Secondary sector',
    explanation: 'Manufacturing and processing are activities of the secondary sector.',
  },
  {
    prompt: 'Which issue directly reduces many households ability to buy goods?',
    options: ['A. Unemployment', 'B. Filing systems', 'C. Quality circles', 'D. Division of labour'],
    answer: 'A. Unemployment',
    explanation: 'Unemployment reduces income and therefore lowers purchasing power.',
  },
  {
    prompt: 'A bank is an example of which sector?',
    options: ['A. Primary', 'B. Secondary', 'C. Tertiary', 'D. Agricultural'],
    answer: 'C. Tertiary',
    explanation: 'Banks provide services, which places them in the tertiary sector.',
  },
  {
    prompt: 'Which response shows a responsible business reaction to socio-economic problems?',
    options: ['A. Ignoring community needs', 'B. Training local workers', 'C. Hiding all information', 'D. Avoiding quality checks'],
    answer: 'B. Training local workers',
    explanation: 'Training supports skills development and can help address unemployment and inequality.',
  },
];

export default function BusinessSectorsSocioeconomic() {
  return (
    <CapsSubjectTopic
      title="Business Sectors and Socio-economic Issues"
      subtitle="Grade 10 · Business Studies · Term 2"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-business-sectors-socio-economic-issues"
      apiPath="/api/caps/bus"
      grade={10}
    />
  );
}
