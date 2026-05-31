import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Interpret poems, posters, folktales, and picture sequences',
    image: {
      src: '/curriculum/grade7/xho/term3/reading-viewing/diagram.webp',
      alt: 'Grade 7 learners interpreting a poem and poster with picture sequence cards',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 reading broadens to <strong>poems, folktales, posters, factual texts,</strong> and image sequences.
          Identify mood, message, and key details.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-pink-50 p-4 text-left">
            <p className="font-semibold text-pink-800">Poetry</p>
            <p className="text-slate-600">Look for feelings, repeated words, and imagery.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-semibold text-cyan-800">Visual texts</p>
            <p className="text-slate-600">Use symbols, layout, and pictures to infer meaning.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In poetry questions, “mood” means...',
    options: ['the feeling created by the poem', 'the page number', 'the poet age', 'the line length only'],
    answer: 'the feeling created by the poem',
    explanation: 'Mood describes emotional atmosphere.',
  },
  {
    prompt: 'What is the main purpose of a poster?',
    options: ['to give a message quickly and clearly', 'to tell a long novel', 'to list grammar rules only', 'to replace oral speaking'],
    answer: 'to give a message quickly and clearly',
    explanation: 'Posters communicate key ideas visually and briefly.',
  },
  {
    prompt: 'A picture sequence task asks learners to...',
    options: ['order images logically to show events', 'count colours only', 'memorise one caption', 'ignore context clues'],
    answer: 'order images logically to show events',
    explanation: 'Sequence tasks test understanding of event order.',
  },
  {
    prompt: 'Which question checks message in a folktale?',
    options: ['What lesson does the story teach?', 'How many commas are there?', 'What is the title font?', 'Which desk is nearest?'],
    answer: 'What lesson does the story teach?',
    explanation: 'Folktale interpretation often focuses on moral message.',
  },
  {
    prompt: 'In a short factual text, key details are usually...',
    options: ['names, places, numbers, and dates', 'imaginary spells and magic', 'rhyming words only', 'speaker turns only'],
    answer: 'names, places, numbers, and dates',
    explanation: 'Factual reading requires extracting concrete information.',
  },
  {
    prompt: 'What helps infer meaning from a poster image?',
    options: ['looking at symbols and context', 'reading only the smallest word', 'ignoring colours and icons', 'counting letters only'],
    answer: 'looking at symbols and context',
    explanation: 'Symbols and visual context guide interpretation.',
  },
  {
    prompt: 'Which option best describes a comprehension strategy?',
    options: ['read the question first, then scan the text', 'skip the passage', 'answer without reading', 'write your own story instead'],
    answer: 'read the question first, then scan the text',
    explanation: 'Targeted scanning helps retrieve evidence efficiently.',
  },
  {
    prompt: 'Why compare two texts in Grade 7 reading?',
    options: ['to identify different viewpoints and details', 'to avoid comprehension practice', 'to reduce vocabulary learning', 'to remove discussion tasks'],
    answer: 'to identify different viewpoints and details',
    explanation: 'Comparison develops deeper understanding of texts.',
  },
];

const ReadingViewingT3 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Poems, folktales, posters, factual texts, and picture sequences"
    learnSteps={learnSteps}
    task="gr7-reading-viewing-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT3;
