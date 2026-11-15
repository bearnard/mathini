import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT4.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'What is the first step in a comprehension task?',
    options: ['read the passage carefully', 'write answers before reading', 'skip the title', 'ignore key words'],
    answer: 'read the passage carefully',
    explanation: 'Understanding the passage comes before answering.',
  },
  {
    prompt: 'A good summary includes...',
    options: ['main points only', 'every single detail', 'new invented facts', 'no verbs'],
    answer: 'main points only',
    explanation: 'Summaries are short and focused on key ideas.',
  },
  {
    prompt: 'If a notice says “Meeting at 13:30 in Hall B”, what can you extract?',
    options: ['time and venue', 'character personality', 'poem theme', 'bus fare'],
    answer: 'time and venue',
    explanation: 'Notices provide practical details like place and time.',
  },
  {
    prompt: 'Which question checks understanding of a story message?',
    options: ['What lesson can we learn from the story?', 'How many letters in paragraph 2?', 'What shape is the margin?', 'What ink brand was used?'],
    answer: 'What lesson can we learn from the story?',
    explanation: 'Message questions ask for meaning beyond facts.',
  },
  {
    prompt: 'Matching tasks in revision usually require learners to...',
    options: ['connect statements to correct details', 'write long essays', 'draw landscapes', 'translate into coding symbols'],
    answer: 'connect statements to correct details',
    explanation: 'Matching checks recognition of linked information.',
  },
  {
    prompt: 'Which strategy helps avoid losing marks in comprehension?',
    options: ['answer in full, clear sentences when needed', 'copy lines from the text that you choose by chance', 'leave the answer spaces blank', 'ignore the question words in the questions'],
    answer: 'answer in full, clear sentences when needed',
    explanation: 'Clear responses aligned to question demand earn marks.',
  },
  {
    prompt: '“Select the best heading for the paragraph” tests...',
    options: ['main idea understanding', 'punctuation editing only', 'spelling list memory only', 'calculator skills'],
    answer: 'main idea understanding',
    explanation: 'Choosing a heading depends on core meaning.',
  },
  {
    prompt: 'Why revisit multiple genres in Term 4?',
    options: ['to prepare for year-end assessment', 'to remove reading practice', 'to avoid vocabulary growth', 'to skip comprehension work'],
    answer: 'to prepare for year-end assessment',
    explanation: 'Revision across genres builds exam readiness.',
  },
];

const ReadingViewingT4 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Revision passages, notices, stories, and summary-focused comprehension"
    learnSteps={learnSteps}
    task="gr7-reading-viewing-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT4;
