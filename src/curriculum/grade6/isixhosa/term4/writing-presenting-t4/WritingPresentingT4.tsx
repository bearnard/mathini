import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT4.data';

const learnSteps = xhosaSteps(lesson);

export const bank: CapsItem[] = [
  {
    prompt: 'What should a personal paragraph begin with?',
    options: ['A clear topic sentence', 'A random punctuation mark', 'Only a greeting word', 'A list of unrelated numbers'],
    answer: 'A clear topic sentence',
    explanation: 'A topic sentence introduces the main idea of the paragraph.',
  },
  {
    prompt: 'Which detail best supports a topic sentence?',
    options: ['A relevant example linked to the topic', 'A sentence about a different subject', 'A repeated heading with no detail', 'A copied line that changes meaning'],
    answer: 'A relevant example linked to the topic',
    explanation: 'Supporting details should explain or develop the main point.',
  },
  {
    prompt: 'When writing a short message, what is most important?',
    options: ['State who the message is for and the purpose', 'Use as many difficult words as possible', 'Avoid all punctuation completely', 'Write unrelated jokes only'],
    answer: 'State who the message is for and the purpose',
    explanation: 'Messages must be clear about audience and reason.',
  },
  {
    prompt: 'A simple review should include…',
    options: ['an opinion and a reason', 'only copied dictionary definitions', 'no personal response at all', 'a full history chapter'],
    answer: 'an opinion and a reason',
    explanation: 'A review briefly says what you thought and why.',
  },
  {
    prompt: 'In picture writing, what should you do first?',
    options: ['Look carefully at people, place, and action', 'Write the final copy immediately', 'Skip planning and editing', 'Ignore what the picture shows'],
    answer: 'Look carefully at people, place, and action',
    explanation: 'Observing the picture gives accurate ideas for writing.',
  },
  {
    prompt: 'What is the purpose of editing before presenting?',
    options: ['To correct spelling and punctuation mistakes', 'To take out every full sentence', 'To change the topic completely', 'To cut the writing down to one word'],
    answer: 'To correct spelling and punctuation mistakes',
    explanation: 'Editing improves accuracy and clarity in the final text.',
  },
  {
    prompt: 'Which tone is best for a school message to a teacher?',
    options: ['Polite and respectful', 'Rude and demanding', 'Careless and confusing', 'Mocking and sarcastic'],
    answer: 'Polite and respectful',
    explanation: 'School writing should use respectful tone for the audience.',
  },
  {
    prompt: 'How can a writer make a paragraph more connected?',
    options: ['Keep ideas in logical order', 'Jump between unrelated events', 'Repeat one sentence many times', 'Use no full stops at all'],
    answer: 'Keep ideas in logical order',
    explanation: 'Logical sequence helps the reader follow your writing.',
  },
  {
    prompt: 'Which task matches Term 4 Writing & Presenting?',
    options: ['Writing a short connected piece from a familiar prompt', 'Designing a science experiment report only', 'Solving long division worksheets', 'Memorising map coordinates'],
    answer: 'Writing a short connected piece from a familiar prompt',
    explanation: 'Term 4 writing focuses on connected short texts with relevant vocabulary.',
  },
];

const WritingPresentingT4 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Paragraphs, short messages, reviews, and picture-based writing"
    learnSteps={learnSteps}
    task="writing-presenting-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default WritingPresentingT4;
