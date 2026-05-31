import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Connectors, passive voice, pronouns, question tags, and concord',
    image: {
      src: '/curriculum/grade9/isixhosa/term2/language-structures/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners studying connectors, passive voice, and sentence patterns',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 Language Structures focuses on <strong>connectors, passive voice, pronouns,</strong>{' '}
          question tags, and concord.
        </p>
        <p className="text-slate-600">
          Learners improve coherence and accuracy across longer written responses.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Connectors or linking words help to...',
    options: ['join ideas and show relationships between sentences', 'confuse readers', 'make sentences shorter', 'replace nouns'],
    answer: 'join ideas and show relationships between sentences',
    explanation: 'Connectors create flow and clarify how ideas relate logically.',
  },
  {
    prompt: 'Which word is a connector that shows contrast?',
    options: ['kodwa', 'kanti', 'waya', 'kuba'],
    answer: 'kodwa',
    explanation: 'Kodwa means "but" and introduces contrasting ideas.',
  },
  {
    prompt: 'The passive voice is used when...',
    options: ['the action is more important than who does it', 'you want to emphasize the subject', 'action is not mentioned', 'you are always angry'],
    answer: 'the action is more important than who does it',
    explanation: 'Passive voice shifts focus from the doer to the action or receiver.',
  },
  {
    prompt: 'Pronouns replace...',
    options: ['nouns to avoid repetition', 'verbs only', 'adjectives always', 'nothing at all'],
    answer: 'nouns to avoid repetition',
    explanation: 'Pronouns like he, she, it, and they make writing less repetitive.',
  },
  {
    prompt: 'A question tag is...',
    options: ['a short question added to the end of a statement', 'a label on a product', 'a type of punctuation mark', 'a noun'],
    answer: 'a short question added to the end of a statement',
    explanation: 'Question tags invite confirmation or agreement in conversation.',
  },
  {
    prompt: 'In isiXhosa, subject-verb concord means...',
    options: ['the subject and verb must agree in form and class', 'words can be in any order', 'verbs ignore subjects', 'grammar rules do not apply'],
    answer: 'the subject and verb must agree in form and class',
    explanation: 'Concord ensures grammatical agreement and clarity in sentences.',
  },
  {
    prompt: 'Which connector indicates reason or cause?',
    options: ['kuba', 'kwaye', 'kodwa', 'kanti'],
    answer: 'kuba',
    explanation: 'Kuba means "because" and introduces reasons or causes.',
  },
  {
    prompt: 'Pronoun agreement means...',
    options: ['pronouns refer clearly and correctly to their nouns', 'pronouns are random', 'pronouns do not matter', 'any pronoun works everywhere'],
    answer: 'pronouns refer clearly and correctly to their nouns',
    explanation: 'Clear pronoun reference prevents confusion and improves readability.',
  },
];

const LanguageStructuresT2 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Connectors, passive voice, pronouns, question tags, and concord"
    learnSteps={learnSteps}
    task="gr9-language-structures-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT2;
