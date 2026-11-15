import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT1.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'In reading comprehension, what is a main idea?',
    options: ['the most important message of the text', 'the first difficult word that you meet', 'the longest sentence in the passage', 'the font style of the title'],
    answer: 'the most important message of the text',
    explanation: 'The main idea is what the text is mostly about.',
  },
  {
    prompt: 'Which text is most likely an advertisement?',
    options: ['A poster saying “50% off school bags this Friday!”', 'A family tree of the relatives of a family', 'A page from a dictionary of words', 'A class register with the names of learners'],
    answer: 'A poster saying “50% off school bags this Friday!”',
    explanation: 'Ads usually promote products, prices, or offers.',
  },
  {
    prompt: 'If a notice says “Library closes at 14:00”, what detail is given?',
    options: ['closing time', 'author name', 'weather report', 'bus route'],
    answer: 'closing time',
    explanation: 'Notices often provide specific practical details.',
  },
  {
    prompt: 'What helps when reading a short poem?',
    options: ['looking for mood and key images', 'counting only punctuation marks', 'ignoring repeated words', 'reading only the last line'],
    answer: 'looking for mood and key images',
    explanation: 'Poetry meaning often comes from imagery and mood.',
  },
  {
    prompt: 'Visual literacy means you can...',
    options: ['interpret meaning from pictures and layout', 'only decode the long words in a text', 'memorise the letters of the alphabet', 'write essays without any planning'],
    answer: 'interpret meaning from pictures and layout',
    explanation: 'Visual literacy involves understanding images and design clues.',
  },
  {
    prompt: 'Which question checks retrieval from a story?',
    options: ['Where did the character go after school?', 'Do you like this font?', 'How many syllables in the title?', 'Can you draw a map?'],
    answer: 'Where did the character go after school?',
    explanation: 'Retrieval asks for a detail stated in the text.',
  },
  {
    prompt: 'What is sequencing in reading tasks?',
    options: ['putting events in the correct order', 'using only capital letters', 'finding all verbs', 'reading backwards'],
    answer: 'putting events in the correct order',
    explanation: 'Sequencing tracks what happened first, next, and last.',
  },
  {
    prompt: 'A sign with a red circle and a cigarette crossed out means...',
    options: ['No smoking', 'Smoking area', 'Buy cigarettes here', 'Open fire zone'],
    answer: 'No smoking',
    explanation: 'The crossed symbol indicates something is not allowed.',
  },
];

const ReadingViewingT1 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Stories, advertisements, notices, poems, and visual literacy"
    learnSteps={learnSteps}
    task="gr7-reading-viewing-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT1;
