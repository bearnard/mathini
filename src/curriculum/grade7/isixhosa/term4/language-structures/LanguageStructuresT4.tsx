import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './LanguageStructuresT4.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Choose the sentence in present tense.',
    options: ['Sifunda isiXhosa yonke imihla.', 'Sifunde isiXhosa izolo.', 'Siza kufunda isiXhosa ngomso.', 'Sasifunda kudala.'],
    answer: 'Sifunda isiXhosa yonke imihla.',
    explanation: 'Sifunda shows a current/habitual action.',
  },
  {
    prompt: 'Which sentence is correctly in future tense?',
    options: ['Ndiza kubhala uvavanyo ngomso.', 'Ndibhala uvavanyo ngoku.', 'Ndibhale uvavanyo izolo.', 'Ndibhalele uvavanyo izolo.'],
    answer: 'Ndiza kubhala uvavanyo ngomso.',
    explanation: 'Ndiza kubhala indicates future action.',
  },
  {
    prompt: 'Pick the correct pronoun sentence.',
    options: ['Bona bayadlala ebaleni.', 'Bona ndiyadlala ebaleni.', 'Bona uyadlala ebaleni.', 'Bona siyadlala ebaleni.'],
    answer: 'Bona bayadlala ebaleni.',
    explanation: 'Bona agrees with plural concord baya-.',
  },
  {
    prompt: 'Which option is a correct question form?',
    options: ['Nihlala phi nina?', 'Nihlala phi nina.', 'Nihlala phi nina,', 'Nihlala phi nina!'],
    answer: 'Nihlala phi nina?',
    explanation: 'The question punctuation and wording are correct.',
  },
  {
    prompt: 'Choose the sentence with correct concord.',
    options: ['Umfundi uyafunda.', 'Umfundi bayafunda.', 'Umfundi siyafunda.', 'Umfundi ndiyafunda.'],
    answer: 'Umfundi uyafunda.',
    explanation: 'Singular subject umfundi takes u- concord.',
  },
  {
    prompt: 'Which word is spelled correctly?',
    options: ['isikolo', 'isikollo', 'isikhollo', 'isikkolo'],
    answer: 'isikolo',
    explanation: 'isikolo is the correct spelling.',
  },
  {
    prompt: 'What is the aim of proofreading tasks?',
    options: ['to find and fix language errors', 'to memorise facts for the exam', 'to take the place of the reading tasks', 'to avoid using punctuation in the text'],
    answer: 'to find and fix language errors',
    explanation: 'Proofreading improves final language accuracy.',
  },
  {
    prompt: 'Why revise mixed grammar in Term 4?',
    options: ['to strengthen exam readiness', 'to remove sentence practice', 'to skip writing work', 'to avoid Grade 8 preparation'],
    answer: 'to strengthen exam readiness',
    explanation: 'Integrated revision prepares learners for final assessments.',
  },
];

const LanguageStructuresT4 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Revision of tenses, pronouns, questions, concords, and spelling"
    learnSteps={learnSteps}
    task="gr7-language-structures-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT4;
