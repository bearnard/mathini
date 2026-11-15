import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT2.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Which feature belongs in a diary entry?',
    options: ['date and personal reflection', 'price list table', 'bus route symbols only', 'bibliography format'],
    answer: 'date and personal reflection',
    explanation: 'Diary entries are personal and usually dated.',
  },
  {
    prompt: 'A short report should mostly include...',
    options: ['clear facts in logical order', 'random jokes', 'unrelated drawings only', 'single-word answers only'],
    answer: 'clear facts in logical order',
    explanation: 'Reports present information clearly and sequentially.',
  },
  {
    prompt: 'Which phrase helps sequence instructions?',
    options: ['Okokuqala...', 'Mhlawumbi hayi...', 'Mna kuphela...', 'Andikhumbuli...'],
    answer: 'Okokuqala...',
    explanation: 'Okokuqala introduces the first step.',
  },
  {
    prompt: 'In a message to a teacher, tone should be...',
    options: ['respectful and clear', 'rude and demanding', 'confusing and vague', 'all-capitals and shouting'],
    answer: 'respectful and clear',
    explanation: 'Formal school messages should be polite and direct.',
  },
  {
    prompt: 'What improves dialogue writing most?',
    options: ['using speaker turns and punctuation', 'removing all commas', 'writing every line as one sentence', 'changing topic each word'],
    answer: 'using speaker turns and punctuation',
    explanation: 'Dialogue needs clear turns and correct punctuation marks.',
  },
  {
    prompt: 'Which title suits an instruction text?',
    options: ['How to prepare for a class presentation', 'My favourite cloud in the sky', 'A very funny dream that I once had', 'Who am I and where do I come from?'],
    answer: 'How to prepare for a class presentation',
    explanation: 'Instruction texts use practical action-focused titles.',
  },
  {
    prompt: 'Before presenting writing, you should...',
    options: ['check grammar and spelling', 'erase every full stop', 'add unrelated slang', 'skip proofreading'],
    answer: 'check grammar and spelling',
    explanation: 'Editing helps make your writing accurate and readable.',
  },
  {
    prompt: 'Which sentence is best for a school message?',
    options: ['Nceda uzise incwadi yam ngomso, enkosi.', 'Yiza ngoku, ndikuxelela!', 'Andifuni mntu apha ngomso.', 'Mna ndiphumile nje, hamba wena.'],
    answer: 'Nceda uzise incwadi yam ngomso, enkosi.',
    explanation: 'It is polite, specific, and suitable for school communication.',
  },
];

const WritingPresentingT2 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Diary entries, short reports, dialogues, instructions, and messages"
    learnSteps={learnSteps}
    task="gr7-writing-presenting-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT2;
