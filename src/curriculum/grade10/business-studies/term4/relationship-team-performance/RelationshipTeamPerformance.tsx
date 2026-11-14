'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Human relations in business',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Positive relationships improve morale, communication and productivity. Businesses rely on respect, trust
          and clear roles so that individuals can work together effectively.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Good relationships</strong>
            <p className="mt-1 text-slate-600">Support teamwork, lower conflict and encourage commitment to business goals.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Poor relationships</strong>
            <p className="mt-1 text-slate-600">Cause misunderstanding, stress, absenteeism and weak service delivery.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Features of effective teams',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Effective teams share a goal, divide tasks fairly and communicate regularly. Team performance depends on
          planning, participation and accountability.
        </p>
        <div className="rounded-xl bg-slate-50 p-5">
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            <li>Members understand the task and the deadline.</li>
            <li>Each person contributes a useful skill.</li>
            <li>Progress is reviewed and problems are solved early.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Managing conflict and communication',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Conflict is not always harmful, but it must be managed constructively. Active listening, respect and clear
          feedback prevent disagreements from damaging the team.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Constructive response</strong>
            <p className="mt-1 text-slate-600">Focus on the issue, not the person, and search for a fair solution.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Communication tools</strong>
            <p className="mt-1 text-slate-600">Meetings, written instructions, digital messages and feedback sessions all help coordination.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Measuring team performance',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Teams should be evaluated by looking at the quality of work, meeting deadlines, solving problems and serving
          customers effectively. Reflection helps teams improve future performance.
        </p>
        <p className="rounded-xl bg-indigo-50 p-4 text-slate-700">
          A strong written answer explains both how to improve relationships and how that improvement raises team performance.
        </p>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Which factor usually improves team performance?',
    options: ['A. Clear communication', 'B. Constant gossip', 'C. Ignoring deadlines', 'D. Unclear roles'],
    answer: 'A. Clear communication',
    explanation: 'Teams work better when members understand tasks, expectations and feedback clearly.',
  },
  {
    prompt: 'Conflict should be managed by:',
    options: ['A. Attacking the person who disagrees', 'B. Ignoring the problem for ever', 'C. Focusing on the issue and finding a solution', 'D. Refusing to listen to the other side'],
    answer: 'C. Focusing on the issue and finding a solution',
    explanation: 'Constructive conflict management deals with the problem respectfully and seeks agreement.',
  },
  {
    prompt: 'A team with shared goals and clear roles is more likely to:',
    options: ['A. Perform effectively', 'B. Miss every deadline', 'C. Avoid all planning', 'D. Produce more conflict automatically'],
    answer: 'A. Perform effectively',
    explanation: 'Shared goals and role clarity improve coordination and accountability.',
  },
  {
    prompt: 'Which is a sign of poor workplace relationships?',
    options: ['A. Mutual respect between the colleagues', 'B. Frequent misunderstandings', 'C. Helpful feedback that is given in time', 'D. Support within the team that works together'],
    answer: 'B. Frequent misunderstandings',
    explanation: 'Misunderstandings often show weak communication and damaged relationships.',
  },
  {
    prompt: 'Why should a team reflect after completing a task?',
    options: ['A. To identify improvements for next time', 'B. To avoid learning', 'C. To waste time', 'D. To ignore customer feedback'],
    answer: 'A. To identify improvements for next time',
    explanation: 'Reflection helps teams recognise strengths and fix weaknesses for future tasks.',
  },
];

export default function RelationshipTeamPerformance() {
  return (
    <CapsSubjectTopic
      title="Relationships and Team Performance"
      subtitle="Grade 10 · Business Studies · Term 4"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-relationship-team-performance"
      apiPath="/api/caps/bus"
      grade={10}
    />
  );
}
