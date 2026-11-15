import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './LanguageStructuresT3.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Choose the best connector for cause: “Ndafunda ___ ndifuna amanqaku aphezulu.”',
    options: ['kuba', 'kodwa', 'okanye', 'nangona'],
    answer: 'kuba',
    explanation: 'Kuba introduces a reason or cause.',
  },
  {
    prompt: 'Which conjunction shows contrast?',
    options: ['kodwa', 'kwaye', 'kuba', 'ukuze'],
    answer: 'kodwa',
    explanation: 'Kodwa means but and contrasts ideas.',
  },
  {
    prompt: 'Pick the correct past tense sentence.',
    options: ['Sabhala uvavanyo izolo.', 'Sibhala uvavanyo ngoku.', 'Siza kubhala uvavanyo ngomso.', 'Sibhalele uvavanyo rhoqo ngomso.'],
    answer: 'Sabhala uvavanyo izolo.',
    explanation: 'Sabhala and izolo show past action.',
  },
  {
    prompt: 'Pick the correct future tense sentence.',
    options: ['Baza kuthetha ngomso.', 'Bathetha ngoku.', 'Bethethile izolo.', 'Bathetha izolo.'],
    answer: 'Baza kuthetha ngomso.',
    explanation: 'Baza ... ngomso indicates future action.',
  },
  {
    prompt: 'Which sentence uses concord correctly?',
    options: ['Abantwana bayacula.', 'Abantwana uyacula.', 'Abantwana ndiyacula.', 'Abantwana siyacula yena.'],
    answer: 'Abantwana bayacula.',
    explanation: 'Plural subject takes plural concord baya-.',
  },
  {
    prompt: 'Which punctuation best separates two linked clauses?',
    options: [',', '?', '"', '!?!'],
    answer: ',',
    explanation: 'A comma often separates clauses joined by connectors.',
  },
  {
    prompt: 'Complete: “Ndiyafunda, ___ ndifuna ukuphumelela.”',
    options: ['kwaye', 'okanye', 'nokuba', 'kodwa hayi'],
    answer: 'kwaye',
    explanation: 'Kwaye adds related information.',
  },
  {
    prompt: 'Why use connectors in paragraph writing?',
    options: ['to make ideas flow logically', 'to remove meaning', 'to avoid full sentences', 'to hide the topic'],
    answer: 'to make ideas flow logically',
    explanation: 'Connectors create cohesion between thoughts.',
  },
];

const LanguageStructuresT3 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Connectors, conjunctions, tense control, concords, and punctuation"
    learnSteps={learnSteps}
    task="gr7-language-structures-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT3;
