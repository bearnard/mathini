import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Recognise risk and choose safety',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Health and risk behaviour explores substance abuse risks, unsafe situations, refusal skills, and resilience
          in everyday decisions.
        </p>
      </div>
    ),
  },
  {
    title: 'Use refusal and support skills',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners stay safer by setting boundaries, planning ahead, and getting help from trusted people when under
          pressure.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a risk behaviour?',
    options: ['An action likely to harm health or safety', 'A homework routine that is planned well', 'A polite discussion in a classroom', 'A regular schedule of sleep each night'],
    answer: 'An action likely to harm health or safety',
    explanation: 'Risk behaviours increase chances of injury or long-term harm.',
  },
  {
    prompt: 'Which response best shows refusal skills?',
    options: [
      'Saying no clearly and leaving the unsafe situation',
      'Agreeing to fit in',
      'Keeping quiet while uncomfortable',
      'Joining risky behaviour to avoid teasing',
    ],
    answer: 'Saying no clearly and leaving the unsafe situation',
    explanation: 'Clear refusal and exit plans reduce pressure and danger.',
  },
  {
    prompt: 'Why is substance abuse harmful?',
    options: [
      'It can damage health, learning, and relationships',
      'It always improves judgement',
      'It has no effect on behaviour',
      'It guarantees better school performance',
    ],
    answer: 'It can damage health, learning, and relationships',
    explanation: 'Substance abuse affects body systems, choices, and social wellbeing.',
  },
  {
    prompt: 'A friend pressures you to do something unsafe. What should you do?',
    options: ['Say a firm no and contact a trusted person for support', 'Follow the group without thinking about it', 'Hide your worry and carry on with them', 'Take bigger risks so as to look brave'],
    answer: 'Say a firm no and contact a trusted person for support',
    explanation: 'Safe choices include boundaries plus immediate support.',
  },
  {
    prompt: 'Which behaviour builds resilience?',
    options: ['Learning from setbacks and trying again', 'Giving up after a single hard challenge', 'Avoiding all feedback from other people', 'Ignoring your own limits when you train'],
    answer: 'Learning from setbacks and trying again',
    explanation: 'Resilience means adapting positively during challenges.',
  },
  {
    prompt: 'What is a personal safety plan?',
    options: ['A set of steps for staying safe in risky situations', 'A list of the rumours that go round school', 'A plan for skipping your responsibilities', 'A schedule of the sports fixtures'],
    answer: 'A set of steps for staying safe in risky situations',
    explanation: 'Safety plans identify warning signs, actions, and support contacts.',
  },
  {
    prompt: 'Which source is most reliable when you need help?',
    options: [
      'A trusted adult, teacher, or counselor',
      'Anonymous online dares',
      'Friends who encourage danger',
      'Unverified social media claims',
    ],
    answer: 'A trusted adult, teacher, or counselor',
    explanation: 'Reliable support gives safe and informed guidance.',
  },
  {
    prompt: 'How can learners lower everyday risk?',
    options: ['Think ahead about the consequences before acting', 'Act first and think about it afterwards', 'Ignore the warning signs around you', 'Choose to be popular rather than safe'],
    answer: 'Think ahead about the consequences before acting',
    explanation: 'Consequence thinking improves responsible decisions.',
  },
];

const HealthAndRiskBehaviour = () => (
  <CapsSubjectTopic
    title="Health and Risk Behaviour"
    subtitle="Substance abuse awareness, refusal skills, personal safety, and resilience"
    learnSteps={learnSteps}
    task="gr8-health-and-risk-behaviour-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default HealthAndRiskBehaviour;
