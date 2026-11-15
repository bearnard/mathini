import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT2.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Theme in a story is best described as...',
    options: ['the central message or idea', 'the first word only', 'the page colour', 'the writer’s signature'],
    answer: 'the central message or idea',
    explanation: 'Theme expresses the deeper meaning of a text.',
  },
  {
    prompt: 'Character evidence is found in...',
    options: ['the actions and dialogue in the text', 'the file name of the text and nothing else', 'wild guesses about what the character is like', 'the size of the paper the text is printed on'],
    answer: 'the actions and dialogue in the text',
    explanation: 'What characters do and say shows who they are.',
  },
  {
    prompt: 'A folklore text often includes...',
    options: ['a cultural lesson', 'scientific data tables only', 'shopping totals', 'exam timetables'],
    answer: 'a cultural lesson',
    explanation: 'Folklore often carries values and lessons.',
  },
  {
    prompt: 'Media texts are usually read to understand...',
    options: ['purpose and audience', 'poetic meter only', 'grammar drills only', 'word origins only'],
    answer: 'purpose and audience',
    explanation: 'Media reading asks who the message targets and why.',
  },
  {
    prompt: 'Conflict in prose refers to...',
    options: ['the main problem or struggle', 'the title design', 'the author’s age', 'the paragraph spacing'],
    answer: 'the main problem or struggle',
    explanation: 'Conflict drives events and character choices.',
  },
  {
    prompt: 'To support an inference, you should...',
    options: ['use clues from the text', 'invent new plot details', 'ignore context', 'choose the shortest option'],
    answer: 'use clues from the text',
    explanation: 'Inferences must be based on available evidence.',
  },
  {
    prompt: 'Which question checks character development?',
    options: ['How does the character change by the end?', 'How many pages are printed in the book?', 'What is the weight of the paper of the book?', 'Who stapled the pages of the text together?'],
    answer: 'How does the character change by the end?',
    explanation: 'Character development focuses on growth or change.',
  },
  {
    prompt: 'A strong comprehension response should include...',
    options: ['an answer plus supporting detail from the text', 'only a yes or a no without any reason', 'no reference to the text at all', 'a copy of the question and nothing more'],
    answer: 'an answer plus supporting detail from the text',
    explanation: 'Support makes responses clearer and more accurate.',
  },
];

const ReadingViewingT2 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Folklore, youth prose, media texts, comprehension, theme, and character"
    learnSteps={learnSteps}
    task="gr8-reading-viewing-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT2;
