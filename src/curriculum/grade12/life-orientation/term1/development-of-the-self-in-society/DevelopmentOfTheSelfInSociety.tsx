import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Personal Mission and Purpose',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A personal mission statement explains what matters to you, what kind of person you want to be, and what you want your Grade 12 year to stand for. In Life Orientation, it should connect values, purpose and action so that daily choices support long-term goals instead of temporary pressure.</p>
      </div>
    ),
  },
  {
    title: 'Goals, Priorities and Habits',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Strong Grade 12 goals are specific, measurable and linked to realistic routines. Learners need to break big aims into weekly actions such as attending extra classes, limiting distractions, completing revision plans and reviewing progress regularly.</p>
      </div>
    ),
  },
  {
    title: 'Self-Motivation and Resilience',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Self-motivation helps you keep working even when results are slow, while resilience helps you recover from setbacks such as stress, poor marks or conflict. Positive self-talk, reflection, problem-solving and support from trusted adults all strengthen resilience.</p>
      </div>
    ),
  },
  {
    title: 'Responsibility and Support Systems',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Responsibility means owning your choices, meeting deadlines and asking for help before problems grow. Support systems can include family, friends, teachers, counsellors, study groups and faith or community networks that encourage healthy persistence.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'What is the main purpose of a personal mission statement in Grade 12?',
    options: [
      'To list every school rule',
      'To explain your values and direction for your actions',
      'To replace a study timetable',
      'To compare yourself with other learners',
    ],
    answer: 1,
    explanation: 'A mission statement gives direction by linking values and purpose to everyday choices.',
  },
  {
    prompt: 'Which goal is most aligned with the SMART principle?',
    options: ['Get better marks in my subjects soon', 'Become a more successful learner someday', 'Do two Maths revision sessions a week', 'Study harder whenever I feel stressed'],
    answer: 2,
    explanation: 'SMART goals are specific and measurable, so the learner knows exactly what to do.',
  },
  {
    prompt: 'Which habit is most likely to support final-year success?',
    options: [
      'Ignoring difficult topics',
      'Waiting for motivation before working',
      'Reviewing classwork consistently and planning ahead',
      'Studying only the night before a test',
    ],
    answer: 2,
    explanation: 'Consistent review and planning build understanding and reduce panic before assessments.',
  },
  {
    prompt: 'What does resilience help a learner do?',
    options: [
      'Avoid all challenges',
      'Recover and keep going after setbacks',
      'Depend only on friends',
      'Lower expectations after one failure',
    ],
    answer: 1,
    explanation: 'Resilience is the ability to bounce back and continue working after difficulties.',
  },
  {
    prompt: 'A learner receives poor marks and asks a teacher for guidance. This best shows:',
    options: [
      'Irresponsibility',
      'Dependence',
      'Responsible help-seeking',
      'Peer pressure',
    ],
    answer: 2,
    explanation: 'Responsible learners use support systems early so problems can be addressed.',
  },
  {
    prompt: 'Which support system would best help with academic planning?',
    options: [
      'A random social media post',
      'A teacher or study group',
      'A rumour from classmates',
      'Avoiding discussion about school',
    ],
    answer: 1,
    explanation: 'Teachers and study groups can provide structured academic guidance and accountability.',
  },
  {
    prompt: 'Why is accountability important in Grade 12?',
    options: [
      'It allows others to solve all your problems',
      'It helps you take ownership of actions and consequences',
      'It removes the need for goals',
      'It guarantees success without effort',
    ],
    answer: 1,
    explanation: 'Accountability means accepting responsibility for your decisions and responding constructively.',
  },
  {
    prompt: 'Which action best reflects self-motivation?',
    options: ['Giving up after one weak test result', 'Working toward goals unprompted', 'Studying when parents threaten punishment', 'Avoiding feedback to protect confidence'],
    answer: 1,
    explanation: 'Self-motivation comes from internal commitment rather than external pressure alone.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const DevelopmentOfTheSelfInSociety = () => (
  <CapsSubjectTopic
    title='Development of the Self in Society'
    subtitle='Personal mission, goals, resilience, self-motivation and responsibility for final-year success.'
    learnSteps={learnSteps}
    task='gr12-development-of-the-self-in-society-t1'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default DevelopmentOfTheSelfInSociety;
