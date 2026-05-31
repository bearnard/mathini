import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Link rights and responsibilities',
    image: {
      src: '/curriculum/grade8/lo/term3/democracy-and-human-rights/diagram.webp',
      alt: 'grade 8 learners discussing rights responsibilities and respectful democratic participation',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Democracy and human rights in Life Orientation includes dignity, equality, respect, constitutional rights,
          and personal responsibilities.
        </p>
      </div>
    ),
  },
  {
    title: 'Protect rights in everyday actions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners strengthen democracy by acting fairly, respecting others, and challenging behaviour that harms
          rights.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a human right?',
    options: [
      'A basic freedom and protection every person should have',
      'A reward only for top learners',
      'A school uniform rule only',
      'A privilege for one group only',
    ],
    answer: 'A basic freedom and protection every person should have',
    explanation: 'Human rights apply to all people and protect dignity.',
  },
  {
    prompt: 'Why must rights be linked to responsibilities?',
    options: [
      'Because your actions affect the rights of others',
      'Because rights remove all duties',
      'Because only adults have responsibilities',
      'Because rules do not matter in democracy',
    ],
    answer: 'Because your actions affect the rights of others',
    explanation: 'Responsible behaviour helps protect everyone in a community.',
  },
  {
    prompt: 'Which action supports equality at school?',
    options: [
      'Treating classmates fairly regardless of background',
      'Excluding learners for being different',
      'Spreading stereotypes',
      'Allowing unfair treatment',
    ],
    answer: 'Treating classmates fairly regardless of background',
    explanation: 'Equality means everyone deserves fair treatment and opportunity.',
  },
  {
    prompt: 'What does dignity mean in this context?',
    options: [
      'Recognising the worth of every person',
      'Winning every argument',
      'Having more rights than others',
      'Ignoring other viewpoints',
    ],
    answer: 'Recognising the worth of every person',
    explanation: 'Dignity requires respect in words and actions.',
  },
  {
    prompt: 'A learner witnesses discrimination. What is the best response?',
    options: [
      'Report it and support the person affected',
      'Join in to fit with others',
      'Stay silent and spread rumours',
      'Treat it as a joke',
    ],
    answer: 'Report it and support the person affected',
    explanation: 'Speaking up helps protect rights and safety.',
  },
  {
    prompt: 'Which behaviour reflects democratic participation?',
    options: [
      'Listening to different views and discussing respectfully',
      'Shouting down everyone else',
      'Refusing all group decisions',
      'Using threats to win debates',
    ],
    answer: 'Listening to different views and discussing respectfully',
    explanation: 'Democracy depends on respectful dialogue and inclusion.',
  },
  {
    prompt: 'What is the role of constitutional rights in South Africa?',
    options: [
      'They provide a framework for protecting people and justice',
      'They apply only in sports',
      'They are optional suggestions only',
      'They protect one language group only',
    ],
    answer: 'They provide a framework for protecting people and justice',
    explanation: 'Constitutional rights guide lawful and fair treatment.',
  },
  {
    prompt: 'How can learners help protect rights daily?',
    options: [
      'Use respectful language and challenge unfair behaviour',
      'Ignore bullying and exclusion',
      'Mock classmates publicly',
      'Break rules when convenient',
    ],
    answer: 'Use respectful language and challenge unfair behaviour',
    explanation: 'Everyday actions can strengthen or weaken rights culture.',
  },
];

const DemocracyAndHumanRights = () => (
  <CapsSubjectTopic
    title="Democracy and Human Rights"
    subtitle="Rights, responsibilities, equality, dignity, respect, and democratic participation"
    learnSteps={learnSteps}
    task="gr8-democracy-and-human-rights-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DemocracyAndHumanRights;
