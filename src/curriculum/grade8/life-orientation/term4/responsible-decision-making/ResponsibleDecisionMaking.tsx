import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Make choices with consequences in mind',
    image: {
      src: '/curriculum/grade8/lo/term4/responsible-decision-making/diagram.webp',
      alt: 'grade 8 learner weighing choices and consequences before making a decision',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Responsible decision-making uses goals, values, consequence thinking, resilience, and healthy routines to
          guide everyday choices.
        </p>
      </div>
    ),
  },
  {
    title: 'Use a simple decision process',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong choices come from pausing, gathering facts, considering outcomes, and choosing the option that
          protects wellbeing and goals.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a responsible decision?',
    options: [
      'A choice made after considering consequences',
      'A random choice with no reflection',
      'A choice based only on pressure',
      'A choice that ignores safety',
    ],
    answer: 'A choice made after considering consequences',
    explanation: 'Responsible decisions balance values, risks, and long-term impact.',
  },
  {
    prompt: 'Which step should come first in decision-making?',
    options: [
      'Define the problem clearly',
      'Act immediately without thinking',
      'Follow the loudest opinion',
      'Ignore available information',
    ],
    answer: 'Define the problem clearly',
    explanation: 'Clear problem definition improves the quality of choices.',
  },
  {
    prompt: 'How do goals help decision-making?',
    options: [
      'They guide choices toward what matters most',
      'They remove all difficult situations',
      'They make consequences irrelevant',
      'They are unrelated to behaviour',
    ],
    answer: 'They guide choices toward what matters most',
    explanation: 'Goals provide direction when facing competing options.',
  },
  {
    prompt: 'A friend encourages harmful behaviour. What is the best response?',
    options: ['Say no, choose safety and seek support if needed', 'Join in to avoid feeling left out', 'Hide the risk from the adults around you', 'Pretend that there will be no consequences'],
    answer: 'Say no, choose safety and seek support if needed',
    explanation: 'Safe boundaries and support protect your wellbeing.',
  },
  {
    prompt: 'Why is consequence thinking important?',
    options: [
      'It helps predict short- and long-term results',
      'It makes planning unnecessary',
      'It guarantees perfect outcomes',
      'It is only needed for major emergencies',
    ],
    answer: 'It helps predict short- and long-term results',
    explanation: 'Good decisions depend on understanding likely outcomes.',
  },
  {
    prompt: 'Which routine supports better daily choices?',
    options: [
      'Regular sleep, planning, and reflection',
      'No structure and no rest',
      'Ignoring deadlines and responsibilities',
      'Taking risks for attention',
    ],
    answer: 'Regular sleep, planning, and reflection',
    explanation: 'Healthy routines improve focus and self-control.',
  },
  {
    prompt: 'What is resilience in decision-making?',
    options: ['Recovering from mistakes and choosing better', 'Never admitting that you made any errors', 'Repeating the same harmful choices again', 'Blaming other people for everything that happens'],
    answer: 'Recovering from mistakes and choosing better',
    explanation: 'Resilience supports growth after setbacks.',
  },
  {
    prompt: 'Which final check improves a decision?',
    options: ['Ask if it is safe, respectful and in line with goals', 'Ask if it looks popular on social media', 'Ask if it will get you out of any effort', 'Ask if it will impress your friends the most'],
    answer: 'Ask if it is safe, respectful and in line with goals',
    explanation: 'A values-based check keeps decisions responsible.',
  },
];

const ResponsibleDecisionMaking = () => (
  <CapsSubjectTopic
    title="Responsible Decision-making"
    subtitle="Goals, consequences, influence, resilience, and healthy routines"
    learnSteps={learnSteps}
    task="gr8-responsible-decision-making-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ResponsibleDecisionMaking;
