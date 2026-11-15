import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Human rights matter in business',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Term: Dignity</p>
          <p className="text-slate-600 mt-1">Every employee and customer should be treated with respect, fairness and basic human worth.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Equality</strong><p className="text-slate-600 mt-1">No unfair discrimination.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Privacy</strong><p className="text-slate-600 mt-1">Personal information must be handled responsibly.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Safety</strong><p className="text-slate-600 mt-1">Workplaces should protect health and wellbeing.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Inclusivity goes beyond diversity',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Diversity</strong>
            <p className="text-slate-600 mt-1">People differ in language, culture, age, gender, disability, religion and experience.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Inclusivity</strong>
            <p className="text-slate-600 mt-1">The business creates belonging so that people can participate fully and meaningfully.</p>
          </div>
        </div>
        <SwotMatrix
          title="SWOT Analysis: Inclusive Workplace Strategy"
          strengths={['Supportive HR policy', 'Diverse staff base', 'Committed manager']}
          weaknesses={['Limited accessibility tools', 'Bias in some teams', 'Weak reporting channels']}
          opportunities={['Inclusion training', 'Wider talent pool', 'Stronger innovation']}
          threats={['Discrimination complaints', 'Penalties under the Employment Equity Act', 'Reputation damage']}
        />
      </div>
    ),
  },
  {
    title: 'Prevent discrimination and exclusion',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Inclusive actions</strong><p className="text-slate-600 mt-1">Reasonable accommodation, fair policies, accessible facilities and respectful language.</p></div>
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Exclusionary actions</strong><p className="text-slate-600 mt-1">Harassment, stereotypes, humiliating treatment and inaccessible systems.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Inclusive practice strengthens performance',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">Link rights and inclusivity to business outcomes such as morale, innovation, lower conflict and stronger reputation.</p>
        </div>
        <p className="text-sm leading-7 text-slate-600">CAPS answers score better when they show that respectful treatment is both ethical and good for business performance.</p>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "human-rights-inclusivity-1",
    "question": "An inclusive workplace is one where employees:",
    "options": [
      "Are treated exactly the same in every circumstance",
      "Feel respected, valued and able to participate",
      "Must hide their differences",
      "May only use one language at all times"
    ],
    "answer": 1,
    "explanation": "Inclusivity is about creating an environment where people feel respected and included."
  },
  {
    "id": "human-rights-inclusivity-2",
    "question": "Which workplace action BEST supports inclusivity?",
    "options": ['Ignoring the accessibility needs of staff members with disabilities', 'Providing reasonable accommodation for employees with disabilities', 'Allowing harassment jokes in the office', 'Excluding new staff from meetings'],
    "answer": 1,
    "explanation": "Reasonable accommodation helps employees participate fully and fairly."
  },
  {
    "id": "human-rights-inclusivity-3",
    "question": "Harassment in the workplace mainly undermines the right to:",
    "options": [
      "Dignity",
      "Profit",
      "Advertising",
      "Imports"
    ],
    "answer": 0,
    "explanation": "Harassment attacks a person's dignity and sense of safety."
  },
  {
    "id": "human-rights-inclusivity-4",
    "question": "Diversity refers to:",
    "options": ['People being identical in the workplace in culture and age', 'Differences among people in the workplace', 'Cultural events held once a year', 'Differences in age between workers'],
    "answer": 1,
    "explanation": "Diversity includes the many differences among employees and stakeholders."
  },
  {
    "id": "human-rights-inclusivity-5",
    "question": "Which practice is most likely to reduce prejudice in a business?",
    "options": ['Diversity awareness and inclusion training', 'Ignoring complaints from employees about unfair treatment', 'Promoting stereotypes about groups', 'Hiding company policies from staff'],
    "answer": 0,
    "explanation": "Training can build awareness, respect and better relationships among staff."
  },
  {
    "id": "human-rights-inclusivity-6",
    "question": "If a manager humiliates an employee in front of customers, this most directly affects the employee's right to:",
    "options": [
      "Dignity",
      "Investment return",
      "Dividend payout",
      "Supply chain access"
    ],
    "answer": 0,
    "explanation": "Public humiliation undermines the employee's dignity and respect."
  },
  {
    "id": "human-rights-inclusivity-7",
    "question": "A business that values different viewpoints is likely to improve:",
    "options": ['Innovation and problem solving', 'Conflict between staff members', 'Unfair discrimination in hiring', 'Staff turnover in the business'],
    "answer": 0,
    "explanation": "Inclusive environments often lead to broader thinking and better ideas."
  },
  {
    "id": "human-rights-inclusivity-8",
    "question": "Which statement about inclusivity is CORRECT?",
    "options": ['It matters for customers rather than for staff or managers', 'It helps people feel they belong and can contribute', 'It prevents any disagreement in a team', 'It replaces labour legislation'],
    "answer": 1,
    "explanation": "Inclusivity supports belonging, participation and contribution in the workplace."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const HumanRightsInclusivity = () => (
  <CapsSubjectTopic
    title="Human Rights and Inclusivity"
    subtitle="Dignity, equality, diversity and inclusive workplace practices"
    learnSteps={learnSteps}
    task="gr12-human-rights-inclusivity-t3"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default HumanRightsInclusivity;
