import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Build respectful relationships',
    image: {
      src: '/curriculum/grade8/lo/term1/relationships-and-emotional-wellbeing/diagram.webp',
      alt: 'grade 8 learners practising respectful communication and emotional support',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          This topic covers peer pressure, bullying, abuse warning signs, communication, assertiveness, and where to
          seek help.
        </p>
      </div>
    ),
  },
  {
    title: 'Choose safe help-seeking actions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners protect wellbeing by setting boundaries, speaking up early, and contacting trusted adults or
          support services.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which action shows assertive communication?',
    options: [
      'Calmly saying no and explaining your boundary',
      'Agreeing because you are scared',
      'Insulting someone loudly',
      'Ignoring the issue and staying silent',
    ],
    answer: 'Calmly saying no and explaining your boundary',
    explanation: 'Assertive communication is clear, respectful, and firm.',
  },
  {
    prompt: 'What is peer pressure?',
    options: [
      'Influence from others to behave in a certain way',
      'A formal school timetable',
      'A type of weather pattern',
      'A test score report',
    ],
    answer: 'Influence from others to behave in a certain way',
    explanation: 'Peer pressure can be positive or negative depending on the behaviour encouraged.',
  },
  {
    prompt: 'Which is a warning sign of bullying?',
    options: [
      'Repeated harmful behaviour toward someone',
      'One respectful disagreement',
      'A teacher giving class instructions',
      'A learner asking for help politely',
    ],
    answer: 'Repeated harmful behaviour toward someone',
    explanation: 'Bullying usually involves repeated harm and power imbalance.',
  },
  {
    prompt: 'If a learner feels unsafe, what should happen first?',
    options: [
      'Tell a trusted adult as soon as possible',
      'Keep the problem secret forever',
      'Post details online publicly',
      'Handle the danger alone',
    ],
    answer: 'Tell a trusted adult as soon as possible',
    explanation: 'Early help-seeking improves safety and support.',
  },
  {
    prompt: 'Which response best protects emotional wellbeing?',
    options: [
      'Using healthy coping skills and support networks',
      'Bottling up feelings for months',
      'Taking anger out on friends',
      'Pretending harmful behaviour is normal',
    ],
    answer: 'Using healthy coping skills and support networks',
    explanation: 'Healthy coping includes communication, reflection, and asking for help.',
  },
  {
    prompt: 'What is a respectful way to support a friend under pressure?',
    options: [
      'Listen without judgement and help them find support',
      'Laugh at their concern',
      'Force them to copy your choice',
      'Share their private story with everyone',
    ],
    answer: 'Listen without judgement and help them find support',
    explanation: 'Supportive listening and confidentiality build trust.',
  },
  {
    prompt: 'Which scenario is most likely abuse?',
    options: [
      'A person repeatedly threatens and controls another person',
      'A friend asks for help with homework',
      'A coach explains safety rules',
      'A classmate gives constructive feedback',
    ],
    answer: 'A person repeatedly threatens and controls another person',
    explanation: 'Control, threats, and fear are key abuse warning signs.',
  },
  {
    prompt: 'How can learners resist negative peer pressure?',
    options: [
      'Use refusal skills and choose safe friends',
      'Follow every crowd decision',
      'Take risks to gain popularity',
      'Ignore personal values',
    ],
    answer: 'Use refusal skills and choose safe friends',
    explanation: 'Strong values and refusal phrases help learners make safer choices.',
  },
];

const RelationshipsAndEmotionalWellbeing = () => (
  <CapsSubjectTopic
    title="Relationships and Emotional Wellbeing"
    subtitle="Peer pressure, bullying, communication, assertiveness, and help-seeking"
    learnSteps={learnSteps}
    task="gr8-relationships-and-emotional-wellbeing-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default RelationshipsAndEmotionalWellbeing;
