import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Recognise risk and choose safety',
    image: {
      src: '/curriculum/grade8/lo/term2/health-and-risk-behaviour/diagram.webp',
      alt: 'grade 8 learner choosing safe responses to peer pressure and risk situations',
    },
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
    options: [
      'An action likely to harm health or safety',
      'A planned homework routine',
      'A polite classroom discussion',
      'A regular sleep schedule',
    ],
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
    options: [
      'Use an assertive no and contact trusted support',
      'Follow the group without thinking',
      'Hide your concern and continue',
      'Take bigger risks to appear brave',
    ],
    answer: 'Use an assertive no and contact trusted support',
    explanation: 'Safe choices include boundaries plus immediate support.',
  },
  {
    prompt: 'Which behaviour builds resilience?',
    options: [
      'Learning from setbacks and trying healthy strategies again',
      'Giving up after one challenge',
      'Avoiding all feedback',
      'Ignoring personal limits',
    ],
    answer: 'Learning from setbacks and trying healthy strategies again',
    explanation: 'Resilience means adapting positively during challenges.',
  },
  {
    prompt: 'What is a personal safety plan?',
    options: [
      'A set of steps for staying safe in risky situations',
      'A list of rumours at school',
      'A strategy to skip responsibilities',
      'A sports fixture schedule',
    ],
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
    options: [
      'Think ahead about consequences before acting',
      'Act first and reflect later',
      'Ignore warning signs',
      'Choose popularity over safety',
    ],
    answer: 'Think ahead about consequences before acting',
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
