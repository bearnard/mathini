import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Build a healthy self-concept',
    image: {
      src: '/curriculum/grade8/lo/term1/development-of-the-self-in-society/diagram.webp',
      alt: 'grade 8 learner reflecting on strengths goals and support systems in life orientation',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Development of the self in society focuses on self-image, self-motivation, strengths, support systems, and
          realistic goal setting.
        </p>
      </div>
    ),
  },
  {
    title: 'Set goals and use support',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Positive growth happens when learners reflect honestly, ask for help when needed, and keep working toward
          personal goals.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is self-concept?',
    options: ['How you see your own strengths and areas to improve', 'A list of the school rules for all learners', 'A sports score from a single game that you played', 'A trend that is spreading on social media'],
    answer: 'How you see your own strengths and areas to improve',
    explanation: 'Self-concept is your view of who you are and how you can grow.',
  },
  {
    prompt: 'Which action best shows self-motivation?',
    options: ['Carrying on with a study goal even when the work is hard', 'Waiting for other people to do your tasks for you', 'Giving up after you make a single mistake', 'Blaming everyone else for your low marks'],
    answer: 'Carrying on with a study goal even when the work is hard',
    explanation: 'Self-motivation means pushing yourself to keep improving.',
  },
  {
    prompt: 'Why is it useful to identify your strengths?',
    options: [
      'It helps you set realistic goals and build confidence',
      'It means you never need support',
      'It removes all challenges instantly',
      'It guarantees perfect marks in every subject',
    ],
    answer: 'It helps you set realistic goals and build confidence',
    explanation: 'Knowing strengths helps learners plan and progress with purpose.',
  },
  {
    prompt: 'Which person is part of a healthy support system for a learner?',
    options: ['A trusted adult who listens and guides', 'Someone who pressures risky choices', 'A person who mocks effort', 'A stranger who demands secrets'],
    answer: 'A trusted adult who listens and guides',
    explanation: 'Support systems include reliable people who promote safety and growth.',
  },
  {
    prompt: 'A SMART personal goal should be...',
    options: ['specific and time-linked', 'vague and impossible to measure', 'based only on luck', 'copied from a friend'],
    answer: 'specific and time-linked',
    explanation: 'Clear goals are easier to track and achieve.',
  },
  {
    prompt: 'How can a learner strengthen self-esteem?',
    options: [
      'Use positive self-talk and celebrate small progress',
      'Compare themselves negatively every day',
      'Ignore every success completely',
      'Pretend problems do not exist',
    ],
    answer: 'Use positive self-talk and celebrate small progress',
    explanation: 'Recognising progress and speaking kindly to yourself builds confidence.',
  },
  {
    prompt: 'Which response shows responsibility for personal growth?',
    options: [
      'Reflecting on feedback and adjusting your plan',
      'Rejecting all advice without thinking',
      'Avoiding all goals',
      'Choosing shortcuts that break rules',
    ],
    answer: 'Reflecting on feedback and adjusting your plan',
    explanation: 'Reflection helps learners improve their choices and habits.',
  },
  {
    prompt: 'What is a good first step when you feel overwhelmed?',
    options: ['Talk to a trusted person and make a simple action plan', 'Keep quiet about it and stop trying', 'Pass your stress on to your classmates', 'Skip all of your school duties for a while'],
    answer: 'Talk to a trusted person and make a simple action plan',
    explanation: 'Support and planning help you regain control in healthy ways.',
  },
];

const DevelopmentOfTheSelfInSociety = () => (
  <CapsSubjectTopic
    title="Development of the Self in Society"
    subtitle="Self-image, self-motivation, strengths, support systems, and personal goals"
    learnSteps={learnSteps}
    task="gr8-development-of-the-self-in-society-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DevelopmentOfTheSelfInSociety;
