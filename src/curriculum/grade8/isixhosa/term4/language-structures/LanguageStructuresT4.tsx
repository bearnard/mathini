import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './LanguageStructuresT4.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Choose the sentence with correct tense for tomorrow.',
    options: ['Siza kufunda ngomso.', 'Sifunde ngomso.', 'Sifunda izolo.', 'Sasifunda ngomso.'],
    answer: 'Siza kufunda ngomso.',
    explanation: 'Siza kufunda correctly indicates future action.',
  },
  {
    prompt: 'Which sentence shows correct concord?',
    options: ['Abantwana bayadlala.', 'Abantwana uyadlala.', 'Abantwana ndiyadlala.', 'Abantwana siyadlala.'],
    answer: 'Abantwana bayadlala.',
    explanation: 'Plural subject abantwana agrees with baya-.',
  },
  {
    prompt: 'Pick the correctly punctuated option.',
    options: ['Ndicela uncede, enkosi.', 'Ndicela uncede enkosi,,', 'Ndicela uncede enkosi?', 'Ndicela uncede enkosi!'],
    answer: 'Ndicela uncede, enkosi.',
    explanation: 'The comma is correctly placed in the polite phrase.',
  },
  {
    prompt: 'Which spelling is correct?',
    options: ['uvavanyo', 'uvavannyo', 'uvawanyo', 'uvavanyoo'],
    answer: 'uvavanyo',
    explanation: 'Uvavanyo is the correct spelling.',
  },
  {
    prompt: 'Revision of language structures helps learners to...',
    options: ['apply grammar accurately in the exams', 'avoid reading the questions in the paper', 'skip the proofreading of the work', 'remove all of the connectors from the work'],
    answer: 'apply grammar accurately in the exams',
    explanation: 'Consolidation improves exam performance and accuracy.',
  },
  {
    prompt: 'When correcting a sentence, check first for...',
    options: ['agreement, tense and punctuation', 'the colour of the paper and nothing else', 'the position of the desk and nothing else', 'the length of the words and nothing else'],
    answer: 'agreement, tense and punctuation',
    explanation: 'These are common core areas in language corrections.',
  },
  {
    prompt: 'A mixed grammar MCQ often tests whether you can...',
    options: ['choose the best form in context', 'memorise one isolated rule', 'ignore sentence meaning', 'avoid reading options'],
    answer: 'choose the best form in context',
    explanation: 'Context determines the most accurate grammatical choice.',
  },
  {
    prompt: 'Proofreading in final revision is useful because it...',
    options: ['reduces avoidable language errors', 'adds unrelated information', 'replaces comprehension', 'removes all revision'],
    answer: 'reduces avoidable language errors',
    explanation: 'Careful proofreading improves final script quality.',
  },
];

const LanguageStructuresT4 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Revision of grammar, concords, tenses, punctuation, and spelling"
    learnSteps={learnSteps}
    task="gr8-language-structures-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT4;
