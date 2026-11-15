import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT3.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'In poetry questions, “mood” means...',
    options: ['the feeling that the poem creates', 'the page number of the poem in the book', 'the age of the poet who wrote it', 'the length of the lines in the poem'],
    answer: 'the feeling that the poem creates',
    explanation: 'Mood describes emotional atmosphere.',
  },
  {
    prompt: 'What is the main purpose of a poster?',
    options: ['to give a message quickly and clearly', 'to tell a long novel in many chapters', 'to list the grammar rules and nothing else', 'to take the place of oral speaking'],
    answer: 'to give a message quickly and clearly',
    explanation: 'Posters communicate key ideas visually and briefly.',
  },
  {
    prompt: 'A picture sequence task asks learners to...',
    options: ['order the images logically to show events', 'count the colours that are in the images', 'memorise a single caption of one image', 'ignore the context clues in the images'],
    answer: 'order the images logically to show events',
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
    options: ['names, places, numbers and dates', 'imaginary stories and made-up characters', 'rhyming words and nothing else', 'the turns of the speakers and nothing else'],
    answer: 'names, places, numbers and dates',
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
    options: ['read the question first, then scan the text', 'skip the passage and guess the answer', 'answer without reading the text at all', 'write your own story in its place'],
    answer: 'read the question first, then scan the text',
    explanation: 'Targeted scanning helps retrieve evidence efficiently.',
  },
  {
    prompt: 'Why compare two texts in Grade 7 reading?',
    options: ['to spot different viewpoints and details', 'to avoid doing any comprehension practice', 'to cut down on the learning of vocabulary', 'to remove the discussion tasks from the lesson'],
    answer: 'to spot different viewpoints and details',
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
