'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/bus/term3/creative-thinking-opportunity-analysis/diagram.webp", alt: "SWOT: Local Clothing Business" },
    title: 'Creative thinking in business',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Creative thinking helps entrepreneurs see possibilities that others miss. It is useful when solving
          customer problems, designing products and improving business processes.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Creative thinking</strong>
            <p className="mt-1 text-slate-600">Generating new ideas by asking unusual questions and considering many options.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Opportunity analysis</strong>
            <p className="mt-1 text-slate-600">Testing whether an idea is realistic, profitable and suitable for the market.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Techniques for generating ideas',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Learners should know practical methods such as brainstorming, mind maps, forced connections and asking what
          can be improved, reduced or combined.
        </p>
        <div className="rounded-xl bg-slate-50 p-5">
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            <li>Brainstorm without judging ideas too early.</li>
            <li>Group similar ideas together after the first round.</li>
            <li>Select the strongest ideas using criteria such as cost, demand and feasibility.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Using SWOT to analyse an opportunity',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          SWOT analysis compares internal strengths and weaknesses with external opportunities and threats. It helps a
          business decide whether an idea should be developed, adapted or rejected.
        </p>
        <SwotMatrix
          title="SWOT: Local Clothing Business"
          strengths={['Established brand', 'Skilled workforce']}
          weaknesses={['Limited capital', 'No online store']}
          opportunities={['Export market', 'Youth fashion trends']}
          threats={['Cheap imports', 'Loadshedding']}
        />
      </div>
    ),
  },
  {
    title: 'Evaluating and presenting the best idea',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          After generating ideas, businesses compare risk, resources, expected demand and possible profit. The best
          answer in an assessment is the one supported by evidence, not only excitement.
        </p>
        <div className="rounded-xl bg-amber-50 p-5 text-slate-700">
          Use a short recommendation format: identify the idea, give two supporting reasons and mention one possible risk.
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'What is the purpose of brainstorming?',
    options: ['A. To generate many ideas', 'B. To close the business', 'C. To check wages only', 'D. To avoid discussion'],
    answer: 'A. To generate many ideas',
    explanation: 'Brainstorming is used to produce a wide range of possible ideas before evaluating them.',
  },
  {
    prompt: 'In SWOT, opportunities are usually:',
    options: ['A. Internal strengths', 'B. External favourable factors', 'C. Internal weaknesses', 'D. Financial statements'],
    answer: 'B. External favourable factors',
    explanation: 'Opportunities come from the outside environment and may help the business grow.',
  },
  {
    prompt: 'Which factor should be checked during opportunity analysis?',
    options: ['A. Market demand', 'B. The favourite colour of the owner', 'C. The school timetable only', 'D. The age of customers pets'],
    answer: 'A. Market demand',
    explanation: 'A business idea must meet a real need in the market to be viable.',
  },
  {
    prompt: 'A lack of capital in SWOT is a:',
    options: ['A. Strength', 'B. Weakness', 'C. Opportunity', 'D. Threat from customers'],
    answer: 'B. Weakness',
    explanation: 'Limited capital is an internal limitation, so it is classified as a weakness.',
  },
  {
    prompt: 'Why should ideas be evaluated after brainstorming?',
    options: ['A. To choose the most feasible option', 'B. To ignore all risks', 'C. To prevent teamwork', 'D. To remove all customer input'],
    answer: 'A. To choose the most feasible option',
    explanation: 'Evaluation helps a business select an idea that fits resources, demand and goals.',
  },
];

export default function CreativeThinkingOpportunity() {
  return (
    <CapsSubjectTopic
      title="Creative Thinking and Opportunity Analysis"
      subtitle="Grade 10 · Business Studies · Term 3"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-creative-thinking-opportunity-analysis"
      apiPath="/api/caps/bus"
      grade={10}
    />
  );
}
