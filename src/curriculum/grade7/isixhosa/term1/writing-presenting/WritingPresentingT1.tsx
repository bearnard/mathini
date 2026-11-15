import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT1.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Which opening is suitable for a friendly letter?',
    options: ['Mhlobo wam othandekayo,', 'INJONGO YEBALI', '1) Isihloko 2) Umhla', 'Sivavanyo seBanga 7'],
    answer: 'Mhlobo wam othandekayo,',
    explanation: 'Friendly letters begin with a warm personal greeting.',
  },
  {
    prompt: 'What should a personal paragraph include?',
    options: ['connected sentences about one topic', 'unrelated words that are put together', 'headings and nothing else under them', 'punctuation marks and nothing else'],
    answer: 'connected sentences about one topic',
    explanation: 'A paragraph develops one clear idea with linked sentences.',
  },
  {
    prompt: 'In dialogue writing, each new speaker should...',
    options: ['start on a new line', 'use one long paragraph', 'avoid punctuation', 'write only in capitals'],
    answer: 'start on a new line',
    explanation: 'New lines make speakers clear and easy to follow.',
  },
  {
    prompt: 'Which punctuation usually ends a question?',
    options: ['?', '.', ',', ';'],
    answer: '?',
    explanation: 'Questions are closed with a question mark.',
  },
  {
    prompt: 'A caption should be...',
    options: ['short and linked to the image', 'longer than the story', 'unrelated to the picture', 'written without meaning'],
    answer: 'short and linked to the image',
    explanation: 'Captions briefly explain the picture content.',
  },
  {
    prompt: 'Which is best for presenting your writing orally?',
    options: ['speak clearly and keep eye contact', 'read while whispering', 'skip difficult words', 'rush through every sentence'],
    answer: 'speak clearly and keep eye contact',
    explanation: 'Clear speech and confidence improve presentation.',
  },
  {
    prompt: 'What improves a first draft most?',
    options: ['editing spelling and punctuation', 'adding random emojis', 'removing all full stops', 'changing topic each line'],
    answer: 'editing spelling and punctuation',
    explanation: 'Editing makes writing accurate and easier to understand.',
  },
  {
    prompt: 'Which closing suits a friendly letter?',
    options: ['Ozithobayo,', 'Breaking News:', 'Imibuzo emininzi', 'Inani 1 kuphela'],
    answer: 'Ozithobayo,',
    explanation: 'It is an appropriate closing line for informal personal letters.',
  },
];

const WritingPresentingT1 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Friendly letters, dialogues, captions, and personal paragraphs"
    learnSteps={learnSteps}
    task="gr7-writing-presenting-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT1;
