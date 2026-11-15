import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './LanguageStructuresT2.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is a correct question form?',
    options: ['Uyaya esikolweni namhlanje?', 'Uyaya esikolweni namhlanje.', 'Uyaya esikolweni namhlanje,', 'Uyaya esikolweni namhlanje!'],
    answer: 'Uyaya esikolweni namhlanje?',
    explanation: 'The question mark signals a proper question.',
  },
  {
    prompt: 'Choose the correct negative sentence.',
    options: ['Andiyi evenkileni namhlanje.', 'Ndiyi evenkileni namhlanje.', 'Siyi evenkileni namhlanje.', 'Ndiye evenkileni namhlanje.'],
    answer: 'Andiyi evenkileni namhlanje.',
    explanation: 'Andiyi indicates a negative first-person form.',
  },
  {
    prompt: 'Which pronoun fits: “___ uyacula kakuhle.”',
    options: ['Yena', 'Mna', 'Sona', 'Nina'],
    answer: 'Yena',
    explanation: 'Yena agrees with uyacula in this context.',
  },
  {
    prompt: 'Pick the sentence with correct subject concord use.',
    options: ['Abafundi bayafunda.', 'Abafundi uyafunda.', 'Abafundi ndiyafunda.', 'Abafundi sifunda.'],
    answer: 'Abafundi bayafunda.',
    explanation: 'Plural subject abafundi matches baya-.',
  },
  {
    prompt: 'Which adjective best completes: “indlu ___” (a big house)?',
    options: ['enkulu', 'encinci', 'emdaka', 'eluhlaza'],
    answer: 'enkulu',
    explanation: 'Enkulu describes size as big.',
  },
  {
    prompt: 'What is the purpose of a question word like “phi” or “nini”?',
    options: ['to ask for specific information', 'to show punctuation only', 'to make words plural', 'to replace all verbs'],
    answer: 'to ask for specific information',
    explanation: 'Question words target place, time, person, and reason details.',
  },
  {
    prompt: 'Which sentence has correct word order for a simple question?',
    options: ['Uhlala phi umhlobo wakho?', 'Phi uhlala umhlobo wakho?', 'Umhlobo wakho phi uhlala?', 'Uhlala umhlobo wakho phi?'],
    answer: 'Uhlala phi umhlobo wakho?',
    explanation: 'This ordering is clear and natural for the question.',
  },
  {
    prompt: 'Why are concord checks important?',
    options: ['They keep sentences grammatically accurate.', 'They make sentences longer only.', 'They replace punctuation rules.', 'They remove meaning from texts.'],
    answer: 'They keep sentences grammatically accurate.',
    explanation: 'Correct agreement improves clarity and correctness.',
  },
];

const LanguageStructuresT2 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Negatives, question forms, pronouns, concords, and adjectives"
    learnSteps={learnSteps}
    task="gr7-language-structures-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT2;
