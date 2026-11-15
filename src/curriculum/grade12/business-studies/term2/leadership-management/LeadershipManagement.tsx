import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Management and leadership are related but different',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Management</strong>
            <p className="text-slate-600 mt-1">Planning, organising, leading and controlling systems and resources.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Leadership</strong>
            <p className="text-slate-600 mt-1">Inspiring, motivating and guiding people towards a shared vision.</p>
          </div>
        </div>
        <SwotMatrix
          title="SWOT Analysis: Entrepreneurial Business"
          strengths={['Flexible decisions', 'Close customer contact', 'Motivated owner']}
          weaknesses={['Owner dependency', 'Limited capital', 'Small management team']}
          opportunities={['Niche markets', 'Technology adoption', 'Government support']}
          threats={['Large competitors', 'Economic downturn', 'Regulatory change']}
        />
      </div>
    ),
  },
  {
    title: 'Leadership styles fit different situations',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Autocratic</strong><p className="text-slate-600 mt-1">Useful for urgency and crisis decisions.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Democratic</strong><p className="text-slate-600 mt-1">Useful when consultation improves buy-in.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Laissez-faire</strong><p className="text-slate-600 mt-1">Useful with highly skilled, self-directed teams.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Transactional</strong><p className="text-slate-600 mt-1">Useful when targets, rewards and control matter.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Leadership theories explain behaviour',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Term: Transformational leadership</p>
          <p className="text-slate-600 mt-1">A style that inspires change by communicating a compelling vision and motivating people to improve.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Trait theory</strong><p className="text-slate-600 mt-1">Focuses on inborn qualities and characteristics.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Situational theory</strong><p className="text-slate-600 mt-1">Says effective leaders adapt to context and team needs.</p></div>
          <div className="rounded-xl bg-fuchsia-50 p-4"><strong className="text-fuchsia-700">Transactional theory</strong><p className="text-slate-600 mt-1">Uses rewards and corrective action to keep performance on track.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use evidence from the scenario',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">Quote the clue first: consultation suggests democratic leadership, strict instructions suggest autocratic leadership, and strong vision suggests transformational leadership.</p>
        </div>
        <p className="text-sm leading-7 text-slate-600">Then explain why the style suits the situation and add one advantage or disadvantage for application marks.</p>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "leadership-management-1",
    "question": "Which function mainly involves setting goals and deciding how to achieve them?",
    "options": [
      "Planning",
      "Recruiting",
      "Induction",
      "Networking"
    ],
    "answer": 0,
    "explanation": "Planning is the management function that sets objectives and maps out actions."
  },
  {
    "id": "leadership-management-2",
    "question": "A leader who consults employees before making a decision is using a ______ style.",
    "options": [
      "Autocratic",
      "Democratic",
      "Bureaucratic",
      "Coercive only"
    ],
    "answer": 1,
    "explanation": "Democratic leaders involve team members in decision making."
  },
  {
    "id": "leadership-management-3",
    "question": "Which leadership style is often suitable when quick decisions are needed in a crisis?",
    "options": [
      "Laissez-faire",
      "Autocratic",
      "Democratic only",
      "Participative only"
    ],
    "answer": 1,
    "explanation": "Autocratic leadership can be effective in emergencies where speed is critical."
  },
  {
    "id": "leadership-management-4",
    "question": "Transformational leaders are best known for:",
    "options": ['Ignoring change in the business environment and the market', 'Inspiring innovation and a shared vision', 'Avoiding communication with staff', 'Relying on punishment to motivate'],
    "answer": 1,
    "explanation": "Transformational leaders motivate people around vision, growth and change."
  },
  {
    "id": "leadership-management-5",
    "question": "Transactional leadership mainly uses:",
    "options": [
      "Rewards and corrective action",
      "No performance standards",
      "Only informal chats",
      "Family ownership"
    ],
    "answer": 0,
    "explanation": "Transactional leadership focuses on performance, rewards and consequences."
  },
  {
    "id": "leadership-management-6",
    "question": "Situational leadership suggests that a leader should:",
    "options": [
      "Use one style in every situation",
      "Adapt the style to the context and team",
      "Avoid delegation completely",
      "Ignore staff competence"
    ],
    "answer": 1,
    "explanation": "Situational theory says effective leaders adjust their approach to the situation."
  },
  {
    "id": "leadership-management-7",
    "question": "Which management function checks whether actual performance matches standards?",
    "options": [
      "Organising",
      "Controlling",
      "Leading",
      "Planning"
    ],
    "answer": 1,
    "explanation": "Controlling involves monitoring results and comparing them with plans or standards."
  },
  {
    "id": "leadership-management-8",
    "question": "A highly skilled team of designers may work well under which style?",
    "options": [
      "Laissez-faire",
      "Autocratic",
      "Directive only",
      "Punitive"
    ],
    "answer": 0,
    "explanation": "Laissez-faire can work well when staff are experienced, independent and creative."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const LeadershipManagement = () => (
  <CapsSubjectTopic
    title="Leadership and Management"
    subtitle="Management tasks, leadership styles and leadership theories"
    learnSteps={learnSteps}
    task="gr12-leadership-management-t2"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default LeadershipManagement;
