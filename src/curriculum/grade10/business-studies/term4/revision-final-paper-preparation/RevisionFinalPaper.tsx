'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'What to revise for the final paper',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The final paper integrates all four terms. Revision should revisit business environments, quality, ownership,
          planning, creative thinking and teamwork rather than studying each section in isolation.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Knowledge revision</strong>
            <p className="mt-1 text-slate-600">Definitions, comparisons, advantages, disadvantages and practical examples.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Application revision</strong>
            <p className="mt-1 text-slate-600">Case studies, paragraph writing, recommendations and motivation of answers.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Reading command words carefully',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          CAPS questions often use command words such as identify, explain, discuss, recommend and evaluate. These
          verbs tell you how much detail is needed.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
          <ul className="list-disc space-y-1 pl-5">
            <li><strong>Identify</strong> means name the concept or factor.</li>
            <li><strong>Explain</strong> means give meaning or cause.</li>
            <li><strong>Recommend</strong> means propose a practical action and justify it.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Case study and paragraph technique',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          High marks come from using case study facts. Quote or refer to the scenario, connect it to theory and then
          provide a suitable business response.
        </p>
        <div className="rounded-xl bg-amber-50 p-5 text-slate-700">
          Use the pattern: concept → evidence from case study → explanation → recommendation.
        </div>
      </div>
    ),
  },
  {
    title: 'Building a revision timetable',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good preparation spreads revision over time, includes self-testing and leaves space for weaker sections.
          Practice questions are more useful than reading notes passively.
        </p>
        <ol className="list-decimal space-y-1 pl-5 text-slate-700">
          <li>Revise one major topic at a time.</li>
          <li>Answer short questions and check corrections.</li>
          <li>Write at least one full paragraph or case-study response each week.</li>
          <li>Review mistakes and build a final summary sheet.</li>
        </ol>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Which revision method is usually most effective?',
    options: ['A. Passive reading only', 'B. Practice questions with feedback', 'C. Memorising headings only', 'D. Skipping weak topics'],
    answer: 'B. Practice questions with feedback',
    explanation: 'Practice and correction improve understanding and exam technique better than passive reading alone.',
  },
  {
    prompt: 'What should a learner do first in a case study question?',
    options: ['A. Ignore the scenario', 'B. Read the facts carefully', 'C. Write the conclusion immediately', 'D. Guess the answer'],
    answer: 'B. Read the facts carefully',
    explanation: 'Case study answers should be based on the scenario details as well as subject knowledge.',
  },
  {
    prompt: 'The command word recommend means you should:',
    options: ['A. Name only', 'B. Provide a practical suggestion', 'C. Draw a graph', 'D. List unrelated facts'],
    answer: 'B. Provide a practical suggestion',
    explanation: 'Recommend asks for a suitable action that addresses the problem and is usually justified.',
  },
  {
    prompt: 'Why is a revision timetable useful?',
    options: ['A. It organises time and topic coverage', 'B. It guarantees full marks without studying', 'C. It removes all stress automatically', 'D. It replaces practice'],
    answer: 'A. It organises time and topic coverage',
    explanation: 'A timetable helps learners revise consistently and spend time where it is most needed.',
  },
  {
    prompt: 'A strong business studies paragraph should include:',
    options: ['A. Only a heading', 'B. Theory linked to the case study', 'C. No explanation', 'D. No business terms'],
    answer: 'B. Theory linked to the case study',
    explanation: 'Business Studies answers score better when subject knowledge is applied directly to the scenario.',
  },
];

export default function RevisionFinalPaper() {
  return (
    <CapsSubjectTopic
      title="Revision and Final Paper Preparation"
      subtitle="Grade 10 · Business Studies · Term 4"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-revision-final-paper-preparation"
      apiPath="/api/caps/bus"
      grade={10}
    />
  );
}
