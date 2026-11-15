import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT1.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'A narrative paragraph should usually include...',
    options: ['a sequence of events', 'only a shopping list', 'random headings', 'just one isolated word'],
    answer: 'a sequence of events',
    explanation: 'Narratives are built around events in logical order.',
  },
  {
    prompt: 'Descriptive writing is strongest when it uses...',
    options: ['specific sensory details about what is described', 'only numbers and dates, with no description', 'no adjectives at all, to keep it short', 'no clear topic, so that it feels free'],
    answer: 'specific sensory details about what is described',
    explanation: 'Details help readers imagine the scene clearly.',
  },
  {
    prompt: 'Which belongs in a friendly letter?',
    options: ['a greeting and sign-off', 'formal legal language only', 'a bibliography page', 'math calculations'],
    answer: 'a greeting and sign-off',
    explanation: 'Friendly letters follow informal but clear format conventions.',
  },
  {
    prompt: 'Dialogue writing should show...',
    options: ['speaker turns clearly', 'one endless sentence', 'no punctuation', 'no change of voice'],
    answer: 'speaker turns clearly',
    explanation: 'Dialogue needs clear turn-taking between speakers.',
  },
  {
    prompt: 'What is the purpose of drafting?',
    options: ['to shape ideas before the final writing', 'to skip the planning stage of the task', 'to avoid any revision of the work', 'to remove all of the detail from the work'],
    answer: 'to shape ideas before the final writing',
    explanation: 'Drafting helps organize and improve writing before final submission.',
  },
  {
    prompt: 'An effective paragraph usually has...',
    options: ['one main idea with support', 'many unrelated topics', 'no full stops', 'only headings'],
    answer: 'one main idea with support',
    explanation: 'Unity and support make paragraphs clear and coherent.',
  },
  {
    prompt: 'Redrafting improves writing by...',
    options: ['fixing clarity and language errors', 'adding random facts', 'removing punctuation', 'shortening every sentence blindly'],
    answer: 'fixing clarity and language errors',
    explanation: 'Redrafting focuses on quality and accuracy.',
  },
  {
    prompt: 'When presenting written work orally, you should...',
    options: ['speak clearly and keep key points', 'read as fast as possible', 'skip difficult words only', 'avoid eye contact completely'],
    answer: 'speak clearly and keep key points',
    explanation: 'Clear delivery helps the audience follow your writing.',
  },
];

const WritingPresentingT1 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Narrative paragraphs, descriptive writing, friendly letters, dialogue, and drafting"
    learnSteps={learnSteps}
    task="gr8-writing-presenting-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT1;
