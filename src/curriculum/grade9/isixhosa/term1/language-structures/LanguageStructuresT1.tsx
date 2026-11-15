import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './LanguageStructuresT1.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'The simple present tense is used for...',
    options: ['habitual actions and general truths', 'events that finished in the past', 'plans that will happen in the future', 'situations that are only imagined'],
    answer: 'habitual actions and general truths',
    explanation: 'Present tense describes what happens regularly or what is generally true.',
  },
  {
    prompt: 'Concord in isiXhosa means...',
    options: ['agreement between the words in a phrase', 'a written deal between two people', 'the pitch that a note has in a song', 'a class of noun that takes a prefix'],
    answer: 'agreement between the words in a phrase',
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
    options: ['report what was said without using the exact words', "copy the speaker's exact words in quotation marks", 'invent words that the speaker never said', 'change the meaning of what the speaker said'],
    answer: 'report what was said without using the exact words',
    explanation: 'Indirect speech summarizes meaning while adjusting tense and pronouns.',
  },
  {
    prompt: 'An idiomatic phrase is...',
    options: ['a phrase whose meaning is cultural, not literal', 'a phrase that is used only by doctors', 'a phrase made up of a verb and a noun', 'a phrase whose words mean just what they say'],
    answer: 'a phrase whose meaning is cultural, not literal',
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
    options: ['adjust tenses and pronouns to fit the reporting context', 'keep every word exactly the same as the speaker said', 'change the meaning so that it sounds more polite', 'leave out the details that seem less important'],
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
