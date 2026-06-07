'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/bus/term1/quality-external-environments/diagram.webp", alt: "Quality and the External Environment" },
    title: 'Quality concepts in business',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Quality means meeting customer expectations consistently. A business builds quality through good systems,
          skilled workers, reliable suppliers and a commitment to continuous improvement.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Quality control</strong>
            <p className="mt-1 text-slate-600">Inspecting the finished product to identify faults before it reaches the customer.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Quality assurance</strong>
            <p className="mt-1 text-slate-600">Building quality into every stage so that errors are prevented early.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'TQM, ISO and quality circles',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Total Quality Management links all employees to the goal of customer satisfaction. Formal systems such as
          ISO standards and quality circles help a business stay organised and accountable.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">TQM</strong>
            <p className="mt-1 text-slate-600">A company-wide approach that focuses on doing things right the first time.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">ISO</strong>
            <p className="mt-1 text-slate-600">Recognised standards that guide procedures, documentation and consistency.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">Quality circles</strong>
            <p className="mt-1 text-slate-600">Small groups of workers who meet regularly to solve quality problems.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'How external environments affect quality',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Quality is not shaped only inside the factory or office. External factors can disrupt production,
          increase costs or raise customer expectations.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Economic pressure</strong>
            <p className="mt-1 text-slate-600">Inflation may push businesses to use cheaper materials, which can weaken quality if not managed carefully.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Legislation and technology</strong>
            <p className="mt-1 text-slate-600">Safety laws and improved technology can force better systems and higher standards.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Improving quality in practice',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Managers improve quality by training staff, using checklists, measuring customer complaints and correcting
          causes instead of only fixing symptoms.
        </p>
        <div className="rounded-xl bg-slate-50 p-5">
          <ol className="list-decimal space-y-1 pl-5 text-slate-700">
            <li>Set clear quality standards.</li>
            <li>Monitor processes and collect feedback.</li>
            <li>Analyse defects and identify the root cause.</li>
            <li>Implement improvements and review results.</li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'What is the main aim of quality assurance?',
    options: ['A. To prevent problems during the process', 'B. To advertise the product only', 'C. To reduce salaries', 'D. To close the business'],
    answer: 'A. To prevent problems during the process',
    explanation: 'Quality assurance is proactive and focuses on preventing defects throughout the process.',
  },
  {
    prompt: 'Which concept involves all employees in continuous improvement?',
    options: ['A. TQM', 'B. VAT', 'C. Outsourcing', 'D. Retrenchment'],
    answer: 'A. TQM',
    explanation: 'Total Quality Management is a company-wide quality approach that stresses improvement and customer satisfaction.',
  },
  {
    prompt: 'A small group of workers meeting to solve production problems is called a:',
    options: ['A. Bargaining council', 'B. Quality circle', 'C. Pressure group', 'D. Marketing panel'],
    answer: 'B. Quality circle',
    explanation: 'Quality circles encourage employee participation in solving quality-related issues.',
  },
  {
    prompt: 'Which external factor may force a business to meet new product standards?',
    options: ['A. Legislation', 'B. Staff tea break', 'C. Petty cash book', 'D. Mission statement'],
    answer: 'A. Legislation',
    explanation: 'Laws and regulations often require compliance with safety, labelling or quality standards.',
  },
  {
    prompt: 'Quality control differs from quality assurance because quality control:',
    options: ['A. Happens only before planning', 'B. Checks the final output for faults', 'C. Is the same as marketing', 'D. Ignores customer needs'],
    answer: 'B. Checks the final output for faults',
    explanation: 'Quality control is usually done on the completed product or service to find defects.',
  },
];

export default function QualityExternalEnvironments() {
  return (
    <CapsSubjectTopic
      title="Quality and the External Environment"
      subtitle="Grade 10 · Business Studies · Term 1"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-quality-external-environments"
      apiPath="/api/caps/bus"
      grade={10}
    />
  );
}
