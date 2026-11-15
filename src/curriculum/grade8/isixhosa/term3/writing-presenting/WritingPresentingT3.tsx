import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT3.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'A descriptive essay is strongest when it...',
    options: ['uses clear sensory detail', 'lists random words', 'ignores paragraphing', 'avoids a main topic'],
    answer: 'uses clear sensory detail',
    explanation: 'Descriptive detail helps readers imagine the scene.',
  },
  {
    prompt: 'A narrative text should usually include...',
    options: ['setting, events, and ending', 'only bullet points', 'no sequence', 'just a title'],
    answer: 'setting, events, and ending',
    explanation: 'Narratives need structure and progression.',
  },
  {
    prompt: 'A formal letter should use...',
    options: ['a suitable formal tone and format', 'slang throughout the whole letter', 'no salutation at the start of the letter', 'lines made of emojis and nothing else'],
    answer: 'a suitable formal tone and format',
    explanation: 'Formal writing requires controlled language and layout.',
  },
  {
    prompt: 'Project writing benefits most from...',
    options: ['planning and organised evidence', 'copying without checking', 'no revision', 'single-sentence answers'],
    answer: 'planning and organised evidence',
    explanation: 'Projects require structure and supported content.',
  },
  {
    prompt: 'When presenting project work orally, it helps to...',
    options: ['highlight key points clearly', 'read everything too fast', 'skip your introduction', 'avoid conclusion'],
    answer: 'highlight key points clearly',
    explanation: 'Focused delivery improves audience understanding.',
  },
  {
    prompt: 'Drafting and redrafting are used to...',
    options: ['improve content and accuracy', 'delete all detail', 'change topic each time', 'skip editing'],
    answer: 'improve content and accuracy',
    explanation: 'Revisions make writing clearer and more correct.',
  },
  {
    prompt: 'A useful formal-letter closing is...',
    options: ['Yours sincerely', 'See you later!', 'Bye for now lol', 'No closing needed'],
    answer: 'Yours sincerely',
    explanation: 'Formal letters require polite conventional closings.',
  },
  {
    prompt: 'Strong paragraph development means...',
    options: ['each paragraph develops one clear point', 'all of the ideas are mixed together', 'no examples are given in any paragraph', 'punctuation is ignored in the paragraph'],
    answer: 'each paragraph develops one clear point',
    explanation: 'Paragraph unity improves coherence and clarity.',
  },
];

const WritingPresentingT3 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Descriptive and narrative writing, formal letters, project writing, and presentation"
    learnSteps={learnSteps}
    task="gr8-writing-presenting-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT3;
