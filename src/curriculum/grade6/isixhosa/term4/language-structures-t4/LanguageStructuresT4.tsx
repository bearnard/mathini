import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './LanguageStructuresT4.data';

const learnSteps = xhosaSteps(lesson);

export const bank: CapsItem[] = [
  {
    prompt: 'Which word is a pronoun?',
    options: ['thina', 'isikolo', 'incwadi', 'itafile'],
    answer: 'thina',
    explanation: '“Thina” means “we/us,” so it is a pronoun.',
  },
  {
    prompt: 'Choose the sentence with correct concord agreement.',
    options: ['Umfundi uyafunda.', 'Umfundi bayafunda.', 'Abafundi uyafunda.', 'Abafundi ndiyafunda.'],
    answer: 'Umfundi uyafunda.',
    explanation: 'Singular subject “umfundi” matches with “uya-” in the verb form.',
  },
  {
    prompt: 'Which sentence is in the present tense?',
    options: ['Ndiyadlala ngoku.', 'Ndidlalile izolo.', 'Ndiza kudlala ngomso.', 'Ndidlale kwiveki ezayo.'],
    answer: 'Ndiyadlala ngoku.',
    explanation: '“Ndiyadlala ngoku” describes an action happening now (present tense).',
  },
  {
    prompt: 'Which sentence best shows past tense?',
    options: ['Baculile emsithweni izolo.', 'Baza kucula ngomso.', 'Bayacula ngoku.', 'Bacula yonke imihla ngoku.'],
    answer: 'Baculile emsithweni izolo.',
    explanation: '“Baculile” with “izolo” indicates completed action in the past.',
  },
  {
    prompt: 'Which sentence best shows future tense?',
    options: ['Ndiza kufunda ngomso.', 'Ndifunda ngoku.', 'Ndifundile izolo.', 'Ndafunda kanye namhlanje kusasa.'],
    answer: 'Ndiza kufunda ngomso.',
    explanation: '“Ndiza … ngomso” expresses a future action.',
  },
  {
    prompt: 'Which punctuation mark should end a question sentence?',
    options: ['?', '.', ',', ':'],
    answer: '?',
    explanation: 'Questions end with a question mark.',
  },
  {
    prompt: 'Which sentence starts with a correct capital letter?',
    options: ['USipho uya esikolweni.', 'uSipho uya esikolweni.', 'usipho uya esikolweni.', 'USIPHO uya esikolweni ngaphandle kwezizathu.'],
    answer: 'USipho uya esikolweni.',
    explanation: 'Proper names begin with a capital letter in normal sentence case.',
  },
  {
    prompt: 'What is the best proofreading strategy?',
    options: ['Read each sentence and fix one error at a time', 'Ignore punctuation completely', 'Change every word to make it longer', 'Delete all full stops and commas'],
    answer: 'Read each sentence and fix one error at a time',
    explanation: 'Careful, step-by-step proofreading helps catch grammar and spelling mistakes.',
  },
  {
    prompt: 'Why is spelling revision important in Term 4?',
    options: ['It improves accuracy for year-end assessment', 'It replaces all reading work', 'It means punctuation is no longer needed', 'It removes the need for sentence meaning'],
    answer: 'It improves accuracy for year-end assessment',
    explanation: 'Correct spelling supports clear communication and exam readiness.',
  },
  {
    prompt: 'Which option is part of Language Structures & Conventions revision?',
    options: ['Pronouns, tenses, concords, punctuation, spelling', 'Only drawing and colouring activities', 'Only mapwork symbols and directions', 'Only sport movement patterns'],
    answer: 'Pronouns, tenses, concords, punctuation, spelling',
    explanation: 'These language elements are the core grammar-consolidation focus for Term 4.',
  },
];

const LanguageStructuresT4 = () => (
  <CapsSubjectTopic
    title="Language Structures & Conventions"
    subtitle="Pronouns, tenses, concords, punctuation, and spelling revision"
    learnSteps={learnSteps}
    task="language-structures-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LanguageStructuresT4;
