import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT1.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'A good essay typically has...',
    options: ['an introduction, body paragraphs and a conclusion', 'a single long sentence that says everything', 'a set of notes that are not linked at all', 'paragraphs in the order that the writer feels'],
    answer: 'an introduction, body paragraphs and a conclusion',
    explanation: 'Clear structure helps readers follow your ideas from start to finish.',
  },
  {
    prompt: 'Paragraph unity means...',
    options: ['all sentences in a paragraph stay on one main idea', 'a paragraph must be very long to be good', 'a paragraph should mix many topics together', 'a paragraph does not need a topic sentence'],
    answer: 'all sentences in a paragraph stay on one main idea',
    explanation: 'Unified paragraphs are easier to understand and more persuasive.',
  },
  {
    prompt: 'A topic sentence in a paragraph...',
    options: ['introduces the main idea', 'tells a joke', 'ends the paragraph', 'is always hidden'],
    answer: 'introduces the main idea',
    explanation: 'Topic sentences guide readers and organize your essay effectively.',
  },
  {
    prompt: 'Good descriptive writing uses...',
    options: ['sensory details and vivid language', 'only adjectives, with no verbs or nouns', 'technical terms that few readers know', 'a plain list of facts with no verbs'],
    answer: 'sensory details and vivid language',
    explanation: 'Details help readers visualize and engage with your description.',
  },
  {
    prompt: 'When planning an essay, you should first...',
    options: ['brainstorm ideas and create an outline', 'start writing the final copy', 'only use one idea', 'skip planning entirely'],
    answer: 'brainstorm ideas and create an outline',
    explanation: 'Planning saves time and improves the quality of your final essay.',
  },
  {
    prompt: 'Tone in writing should match...',
    options: ['your audience and purpose', 'the longest words you know', 'how angry you feel', 'random choices'],
    answer: 'your audience and purpose',
    explanation: 'Matching tone to context makes your message more effective and professional.',
  },
  {
    prompt: 'A friendly letter typically includes...',
    options: ['a greeting, body, closing and signature', 'numbers and dates and nothing else', 'paragraphs in any order that suits the writer', 'details that have no link to the reader'],
    answer: 'a greeting, body, closing and signature',
    explanation: 'This format is expected and shows respect for the reader.',
  },
  {
    prompt: 'Supporting details in narrative writing should...',
    options: ['develop the plot and help readers follow events', 'confuse the reader with extra information', 'have no link to the rest of the story', 'contradict what the main idea says'],
    answer: 'develop the plot and help readers follow events',
    explanation: 'Good details create a coherent, engaging narrative that readers can follow.',
  },
];

const WritingPresentingT1 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Narrative and descriptive essays, personal reflection, friendly letters, and planning"
    learnSteps={learnSteps}
    task="gr9-writing-presenting-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT1;
