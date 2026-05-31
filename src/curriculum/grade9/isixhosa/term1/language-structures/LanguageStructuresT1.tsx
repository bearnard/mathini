import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Tenses, concords, vocabulary, direct and indirect speech, and punctuation',
    image: {
      src: '/curriculum/grade9/isixhosa/term1/language-structures/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners studying grammar structures including tenses, concords, and punctuation',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 1 Language Structures focuses on <strong>tenses, idiomatic vocabulary, concords,</strong>{' '}
          direct and indirect speech, and punctuation accuracy.
        </p>
        <p className="text-slate-600">
          Learners use a wider range of language structures accurately in context.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'The simple present tense is used for...',
    options: ['habitual actions and general truths', 'past events', 'future plans', 'imaginary situations'],
    answer: 'habitual actions and general truths',
    explanation: 'Present tense describes what happens regularly or what is generally true.',
  },
  {
    prompt: 'Concord in isiXhosa means...',
    options: ['agreement between words in a phrase', 'a contract', 'a musical note', 'a type of noun'],
    answer: 'agreement between words in a phrase',
    explanation: 'Concord ensures that adjectives, pronouns, and verbs match their nouns.',
  },
  {
    prompt: 'Direct speech is...',
    options: ['the exact words someone said', 'a summary of what someone said', 'the writer\'s opinion', 'a fictional quote'],
    answer: 'the exact words someone said',
    explanation: 'Direct speech is enclosed in quotation marks and reports the speaker\'s exact words.',
  },
  {
    prompt: 'Indirect speech is used when you...',
    options: ['report what someone said without using their exact words', 'copy their exact words', 'make up their words', 'ignore their meaning'],
    answer: 'report what someone said without using their exact words',
    explanation: 'Indirect speech summarizes meaning while adjusting tense and pronouns.',
  },
  {
    prompt: 'An idiomatic phrase is...',
    options: ['a phrase whose meaning is not literal but cultural or conventional', 'a medical condition', 'a type of verb', 'always technical'],
    answer: 'a phrase whose meaning is not literal but cultural or conventional',
    explanation: 'Idioms cannot be understood by translating words literally; they require cultural knowledge.',
  },
  {
    prompt: 'Which is the correct use of punctuation in a sentence?',
    options: ['Uthethe nge-ekseso. Wafika ngo-11.', 'uthethe nge-ekseso wafika ngo-11', 'UTHETHE NGE-EKSESO WAFIKA NGO-11', 'uthethe...nge ekseso,wafika,ngo 11'],
    answer: 'Uthethe nge-ekseso. Wafika ngo-11.',
    explanation: 'Proper capitalization and periods show sentence boundaries and respect grammar rules.',
  },
  {
    prompt: 'The past tense is used for...',
    options: ['events that already happened', 'things happening now', 'future events', 'hypothetical situations'],
    answer: 'events that already happened',
    explanation: 'Past tense shows that an action was completed at a previous time.',
  },
  {
    prompt: 'When converting direct speech to indirect speech, you usually...',
    options: ['adjust tenses and pronouns to fit the reporting context', 'keep everything identical', 'change the meaning', 'remove important details'],
    answer: 'adjust tenses and pronouns to fit the reporting context',
    explanation: 'Tense and pronoun shifts make indirect speech coherent within the new context.',
  },
];

const LanguageStructuresT1 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Tenses, idiomatic vocabulary, concords, direct and indirect speech, and punctuation"
    learnSteps={learnSteps}
    task="gr9-language-structures-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT1;
