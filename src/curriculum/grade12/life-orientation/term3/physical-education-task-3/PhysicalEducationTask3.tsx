import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Consistency and Fitness Maintenance',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">By Term 3, learners should recognise that fitness is maintained through regular effort, not occasional intensity. Consistent participation builds endurance, skill confidence and healthy habits.</p>
      </div>
    ),
  },
  {
    title: 'Teamwork and Cooperation',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Many physical activities require learners to cooperate, communicate and adapt to others. Teamwork builds trust and teaches learners to contribute positively even when performance levels differ.</p>
      </div>
    ),
  },
  {
    title: 'Self-Discipline and Responsibility',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Self-discipline in physical education means arriving prepared, following routines, managing effort and staying committed. It reflects personal responsibility for health rather than dependence on last-minute motivation.</p>
      </div>
    ),
  },
  {
    title: 'Reviewing Participation and Progress',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Participation reviews help learners reflect on attendance, effort, strengths and areas to improve. Honest reflection supports goal adjustment and reminds learners that wellbeing depends on repeated healthy choices.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'What best maintains fitness over time?',
    options: [
      'One intense session per term',
      'Regular participation and effort',
      'Avoiding all rest days',
      'Training only when assessed',
    ],
    answer: 1,
    explanation: 'Fitness is maintained through consistent activity over time.',
  },
  {
    prompt: 'Why is teamwork valuable in physical education?',
    options: [
      'It allows some learners to do nothing',
      'It builds cooperation and communication skills',
      'It removes the need for rules',
      'It matters only in tournaments',
    ],
    answer: 1,
    explanation: 'Teamwork teaches learners to communicate, support and adapt.',
  },
  {
    prompt: 'What does self-discipline look like in PET?',
    options: [
      'Skipping sessions without reason',
      'Being prepared and following through consistently',
      'Blaming teammates for effort',
      'Ignoring feedback',
    ],
    answer: 1,
    explanation: 'Self-discipline involves commitment, preparation and consistency.',
  },
  {
    prompt: 'Why should learners review their participation record?',
    options: [
      'To hide weak effort',
      'To reflect honestly and improve goals',
      'To avoid future activity',
      'Because marks are the only purpose of PE',
    ],
    answer: 1,
    explanation: 'Reflection helps learners understand progress and make better choices.',
  },
  {
    prompt: 'Which action shows responsibility for personal health?',
    options: [
      'Ignoring repeated exhaustion',
      'Balancing effort, rest and hydration',
      'Exercising through injury without help',
      'Comparing yourself negatively to others',
    ],
    answer: 1,
    explanation: 'Responsible health choices include balance, recovery and safe practice.',
  },
  {
    prompt: 'What is a likely result of consistent participation?',
    options: [
      'Lower skill confidence',
      'Improved fitness and routine',
      'No change at all',
      'Guaranteed competition success',
    ],
    answer: 1,
    explanation: 'Consistent participation usually improves both fitness and confidence.',
  },
  {
    prompt: 'How should teammates respond to different ability levels?',
    options: [
      'Mock weaker participants',
      'Work respectfully and support inclusion',
      'Exclude beginners',
      'Refuse to cooperate',
    ],
    answer: 1,
    explanation: 'Respect and inclusion strengthen teamwork and participation for everyone.',
  },
  {
    prompt: 'What should happen if a learner notices poor consistency?',
    options: [
      'Ignore it until the end of the year',
      'Set a realistic improvement target',
      'Quit all activity',
      'Hide the attendance record',
    ],
    answer: 1,
    explanation: 'A realistic target turns reflection into constructive action.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const PhysicalEducationTask3 = () => (
  <CapsSubjectTopic
    title='Physical Education Task — Term 3'
    subtitle='Fitness maintenance, teamwork, self-discipline, participation review and health responsibility.'
    learnSteps={learnSteps}
    task='gr12-physical-education-task-3-t3'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default PhysicalEducationTask3;
