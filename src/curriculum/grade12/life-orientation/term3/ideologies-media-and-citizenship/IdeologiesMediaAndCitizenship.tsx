import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'What Ideology Means',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">An ideology is a set of ideas or beliefs that shapes how people understand society and what changes they support. Ideologies influence political parties, media messages and public debate.</p>
      </div>
    ),
  },
  {
    title: 'Bias, Framing and Propaganda',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Media messages are not always neutral. Bias can appear through word choice, selection of facts, missing voices or images, while propaganda aims to persuade strongly by appealing to emotion, fear or repetition.</p>
      </div>
    ),
  },
  {
    title: 'Critical Media Literacy',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Critical literacy means asking who created a message, what evidence is used, whose interests are served and what may be left out. Responsible citizens compare sources instead of accepting every message at face value.</p>
      </div>
    ),
  },
  {
    title: 'Citizenship, Social Movements and Participation',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Citizens use information to participate in democracy through discussion, voting, campaigns and community action. Social movements can advance justice, but responsible participation requires evidence, ethics and respect for others.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'What is an ideology?',
    options: ['A passing opinion held by one person', 'A set of beliefs that shapes political views', 'A rule set out in the school\'s code of conduct', 'A law passed by a municipal council'],
    answer: 1,
    explanation: 'Ideologies are broader belief systems that influence how people interpret society.',
  },
  {
    prompt: 'Which statement best describes media bias?',
    options: ['Media must report events with no viewpoint', 'Media can favour a view through choice of words', 'Bias appears in advertising but not in news reports', 'Bias means that the reported facts are false'],
    answer: 1,
    explanation: 'Bias often appears in what is included, omitted or emphasised.',
  },
  {
    prompt: 'What is a common goal of propaganda?',
    options: ['Balanced analysis that weighs several views', 'Persuasion through emotional or selective messages', 'Neutral reporting that avoids influencing the audience', 'Detailed proof presented with full context'],
    answer: 1,
    explanation: 'Propaganda is designed to shape opinion strongly, often without balanced evidence.',
  },
  {
    prompt: 'Which question shows critical media literacy?',
    options: [
      'How many likes does this post have?',
      'Who created this message and why?',
      'Do my friends agree with it?',
      'Can I repeat it immediately?',
    ],
    answer: 1,
    explanation: 'Critical literacy asks who produced the message and what purpose it serves.',
  },
  {
    prompt: 'Why should citizens compare sources?',
    options: ['The first source read is usually enough', 'Different sources reveal bias and aid judgement', 'Comparing sources wastes time without improving accuracy', 'Well-known sources do not need checking'],
    answer: 1,
    explanation: 'Comparing sources improves accuracy and reduces manipulation.',
  },
  {
    prompt: 'How can social movements contribute to democracy?',
    options: ['By stopping open debate on important public issues', 'By raising justice issues and mobilising people', 'By taking over the role of Parliament', 'By replacing elections with street protest'],
    answer: 1,
    explanation: 'Social movements can raise awareness and encourage civic participation.',
  },
  {
    prompt: 'Which message most likely shows propaganda?',
    options: [
      'A report that presents evidence and multiple perspectives',
      'A slogan that repeats fear without evidence',
      'A fact sheet with cited sources',
      'A textbook summary with definitions',
    ],
    answer: 1,
    explanation: 'Propaganda often relies on emotion, repetition and weak evidence.',
  },
  {
    prompt: 'What makes digital citizenship responsible?',
    options: [
      'Sharing immediately without checking facts',
      'Using evidence and respecting others online',
      'Attacking people who disagree',
      'Following every trend',
    ],
    answer: 1,
    explanation: 'Responsible participation online depends on truthfulness, respect and critical thinking.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const IdeologiesMediaAndCitizenship = () => (
  <CapsSubjectTopic
    title='Ideologies, Media and Citizenship'
    subtitle='Ideology, bias, propaganda, social movements and responsible participation in democracy.'
    learnSteps={learnSteps}
    task='gr12-ideologies-media-and-citizenship-t3'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default IdeologiesMediaAndCitizenship;
