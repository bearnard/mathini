'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Business information and decision-making',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Businesses need accurate information before making decisions. Information may come from sales records,
          customer feedback, market research, budgets and observation of competitors.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Primary information</strong>
            <p className="mt-1 text-slate-600">Collected first-hand through surveys, interviews, observation or questionnaires.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Secondary information</strong>
            <p className="mt-1 text-slate-600">Already available from reports, websites, statistics and published research.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Qualities of useful information',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good information should be accurate, relevant, timely and easy to understand. Poor information leads to
          poor planning because decisions are based on guesswork instead of evidence.
        </p>
        <div className="rounded-xl bg-slate-50 p-5">
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            <li>Accurate information is correct and verified.</li>
            <li>Relevant information links directly to the problem.</li>
            <li>Timely information is recent enough to use now.</li>
            <li>Reliable information comes from trusted sources.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Planning tools for business activities',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Planning means deciding what should be done, when it should happen, who is responsible and what resources
          are needed. A simple action plan keeps tasks focused and measurable.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Goals and targets</strong>
            <p className="mt-1 text-slate-600">Set realistic objectives such as increasing sales or improving customer service.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Budgets and schedules</strong>
            <p className="mt-1 text-slate-600">Show the money, time and people needed to complete the plan.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Using information in a business plan',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Business plans combine information and planning. A strong plan explains the product, market, budget and
          operations so that owners or investors can judge whether the idea is realistic.
        </p>
        <p className="rounded-xl bg-amber-50 p-4 text-slate-700">
          CAPS answers should link information directly to planning decisions. For example, customer research can help
          decide product features, prices and promotion methods.
        </p>
      </div>
    ),
  },
  {
    title: "Why information must be up to date",
    content: (
      <div className="space-y-4">
        <GapRule>{"Decisions are only as good as the information behind them. Figures that describe how things stand today let a manager act on facts, while old figures can hide new problems."}</GapRule>
        <GapWorked title={"Check the stock"} steps={["Monday: the manager counts the stock on the shelves.", "The count from last month would not show the sell-out of bread over the weekend.", "Today's count tells her exactly what to order."]} />
        <GapMistake>{"Using last month's report to make today's order."}</GapMistake>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Which source is an example of primary information?',
    options: ['A. A questionnaire completed by customers', 'B. A newspaper article from last year', 'C. A website summary copied by someone else', 'D. A published census report'],
    answer: 'A. A questionnaire completed by customers',
    explanation: 'Primary information is collected first-hand by the business for a specific purpose.',
  },
  {
    prompt: 'Why is timely information important?',
    options: ['A. It is always free of charge to obtain', 'B. It reflects the current situation', 'C. It removes all of the risk in decisions', 'D. It replaces the need for planning'],
    answer: 'B. It reflects the current situation',
    explanation: 'Information must be recent enough to support current decisions.',
  },
  {
    prompt: 'A business budget is mainly used to show:',
    options: ['A. The cost of planned activities', 'B. The colour of the logo', 'C. Only customer complaints', 'D. The age of the owner'],
    answer: 'A. The cost of planned activities',
    explanation: 'Budgets estimate income and expenses so that plans remain affordable.',
  },
  {
    prompt: 'Relevant information is information that:',
    options: ['A. Is interesting but unrelated', 'B. Directly helps solve the problem', 'C. Comes from gossip', 'D. Is always digital'],
    answer: 'B. Directly helps solve the problem',
    explanation: 'Relevant information fits the decision that needs to be made.',
  },
  {
    prompt: 'Which statement best describes planning?',
    options: ['A. Guessing what will happen in the future', 'B. Deciding in advance what must be done and how', 'C. Waiting for problems to happen before acting', 'D. Avoiding all of the records of the business'],
    answer: 'B. Deciding in advance what must be done and how',
    explanation: 'Planning involves setting goals, allocating resources and organising tasks before action is taken.',
  },
];

export default function BusinessInformationPlanning() {
  return (
    <CapsSubjectTopic
      title="Business Information and Planning"
      subtitle="Grade 10 · Business Studies · Term 3"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-business-information-planning"
      apiPath="/api/caps/bus"
      grade={10}
    />
  );
}
