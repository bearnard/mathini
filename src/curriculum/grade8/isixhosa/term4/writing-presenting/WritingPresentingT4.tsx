import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT4.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'In summary writing, the first step is to...',
    options: ['find the key ideas in the source', 'copy every one of the sentences', 'add personal stories of your own', 'change the topic of the source'],
    answer: 'find the key ideas in the source',
    explanation: 'Summaries begin by selecting main points.',
  },
  {
    prompt: 'A report should primarily be...',
    options: ['clear, factual and well organised', 'purely imaginative and made up', 'written in the form of a poem', 'set out without any sections'],
    answer: 'clear, factual and well organised',
    explanation: 'Reports communicate information accurately and logically.',
  },
  {
    prompt: 'A review becomes stronger when it...',
    options: ['includes a judgment and reasons for it', 'lists words that have no link to the text', 'avoids giving any opinion', 'ignores the text that is reviewed'],
    answer: 'includes a judgment and reasons for it',
    explanation: 'Reviews evaluate and justify viewpoints.',
  },
  {
    prompt: 'Proofreading mainly checks...',
    options: ['grammar, spelling and punctuation', 'the arrangement of the desks', 'the thickness of the paper', 'how popular the font is'],
    answer: 'grammar, spelling and punctuation',
    explanation: 'Proofreading improves technical accuracy.',
  },
  {
    prompt: 'Exam writing is improved by...',
    options: ['planning before drafting', 'writing immediately without reading instructions', 'skipping structure', 'changing topic midway'],
    answer: 'planning before drafting',
    explanation: 'Brief planning helps structure better answers under time limits.',
  },
  {
    prompt: 'Choosing key details for a summary means...',
    options: ['keeping what is essential', 'including every example', 'copying quotations only', 'adding extra facts'],
    answer: 'keeping what is essential',
    explanation: 'Only essential points belong in a concise summary.',
  },
  {
    prompt: 'When revising a report draft, you should...',
    options: ['check clarity and sequence', 'remove all connectors', 'delete all punctuation', 'ignore audience'],
    answer: 'check clarity and sequence',
    explanation: 'Clear sequence and expression improve readability.',
  },
  {
    prompt: 'Final editing should happen...',
    options: ['after completing the full draft', 'before reading the question', 'instead of writing', 'during title selection only'],
    answer: 'after completing the full draft',
    explanation: 'Editing the full draft helps catch language issues effectively.',
  },
];

const WritingPresentingT4 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Summary writing, reports, reviews, exam writing, and proofreading"
    learnSteps={learnSteps}
    task="gr8-writing-presenting-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT4;
