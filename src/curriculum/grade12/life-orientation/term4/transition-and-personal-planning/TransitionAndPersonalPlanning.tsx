import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Financial Awareness and Budgeting',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Transitioning after school requires realistic thinking about costs such as transport, food, study materials, data and accommodation. Basic budgeting helps learners compare needs and wants and avoid poor financial decisions.</p>
      </div>
    ),
  },
  {
    title: 'Growing Independence',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Independence includes managing time, making responsible decisions, keeping documents safe and communicating effectively. It does not mean rejecting support; it means taking greater ownership of everyday responsibilities.</p>
      </div>
    ),
  },
  {
    title: 'Support Networks and Resilience',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">The first year after school can bring uncertainty and change. Support networks and resilience help learners adapt to new environments, cope with setbacks and stay focused on long-term goals.</p>
      </div>
    ),
  },
  {
    title: 'Planning the Next Step',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A personal transition plan should include goals, deadlines, documents, support contacts, funding ideas and backup options. Good planning reduces panic and gives learners a practical path forward.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'Why is budgeting important after school?',
    options: [
      'It removes all financial pressure',
      'It helps manage limited money responsibly',
      'It is only for working adults',
      'It replaces planning for study',
    ],
    answer: 1,
    explanation: 'Budgeting helps learners make realistic financial choices.',
  },
  {
    prompt: 'Which cost is a likely need in post-school planning?',
    options: [
      'Transport to study or work',
      'Luxury shopping every week',
      'Random spending with no plan',
      'Ignoring food costs',
    ],
    answer: 0,
    explanation: 'Transport is a common real cost in transition planning.',
  },
  {
    prompt: 'What does independence mean in this context?',
    options: [
      'Never asking for help',
      'Taking ownership of decisions and responsibilities',
      'Doing whatever you want without consequences',
      'Rejecting all guidance',
    ],
    answer: 1,
    explanation: 'Healthy independence means responsible self-management, not isolation.',
  },
  {
    prompt: 'Why are backup options useful in a transition plan?',
    options: ['They show you lack confidence in the plan', 'They offer options if plans change', 'They are for learners who expect to fail', 'They save you from having to work hard'],
    answer: 1,
    explanation: 'Backup options make planning more resilient and realistic.',
  },
  {
    prompt: 'Which action best strengthens resilience after school?',
    options: [
      'Giving up after one setback',
      'Adjusting plans and using support networks',
      'Ignoring all feedback',
      'Comparing yourself negatively to everyone',
    ],
    answer: 1,
    explanation: 'Resilience involves adapting and seeking constructive support.',
  },
  {
    prompt: 'What should a transition action plan include?',
    options: ['A single dream with no timeline', 'Goals, deadlines, documents and contacts', 'A list of jobs without steps to reach them', 'Opinions from online strangers'],
    answer: 1,
    explanation: 'A useful plan includes concrete steps and resources.',
  },
  {
    prompt: 'Why should learners keep important documents organised?',
    options: [
      'It makes applications and transitions easier to manage',
      'Documents are not important after school',
      'Someone else will always keep them safe',
      'It only matters for university',
    ],
    answer: 0,
    explanation: 'Organised documents support applications, funding and identity needs.',
  },
  {
    prompt: 'Which statement about support networks is true?',
    options: [
      'They are unnecessary in adulthood',
      'They can help with change, stress and decision-making',
      'They should replace all personal effort',
      'They are only for emergencies',
    ],
    answer: 1,
    explanation: 'Support networks remain important during major life transitions.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const TransitionAndPersonalPlanning = () => (
  <CapsSubjectTopic
    title='Transition and Personal Planning'
    subtitle='Financial awareness, independence, support networks, resilience and future action planning.'
    learnSteps={learnSteps}
    task='gr12-transition-and-personal-planning-t4'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default TransitionAndPersonalPlanning;
