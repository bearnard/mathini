import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Read longer prose and identify theme and character',
    image: {
      src: '/curriculum/grade8/xho/term2/reading-viewing/diagram.webp',
      alt: 'Grade 8 learners reading folklore and youth prose while identifying theme and character',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reading & Viewing in Term 2 includes <strong>folklore, youth prose, media texts,</strong> and deeper
          comprehension.
        </p>
        <p className="text-slate-600">
          Practise identifying theme, character, conflict, message, and evidence from texts.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Theme in a story is best described as...',
    options: ['the central message or idea', 'the first word only', 'the page colour', 'the writer’s signature'],
    answer: 'the central message or idea',
    explanation: 'Theme expresses the deeper meaning of a text.',
  },
  {
    prompt: 'Character evidence is found in...',
    options: ['actions and dialogue in the text', 'the file name only', 'random guesses', 'the paper size'],
    answer: 'actions and dialogue in the text',
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
    options: ['How does the character change by the end?', 'How many pages are printed?', 'What is the paper weight?', 'Who stapled the text?'],
    answer: 'How does the character change by the end?',
    explanation: 'Character development focuses on growth or change.',
  },
  {
    prompt: 'A strong comprehension response should include...',
    options: ['an answer plus supporting detail', 'only a yes or no', 'no reference to text', 'a copied question only'],
    answer: 'an answer plus supporting detail',
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
