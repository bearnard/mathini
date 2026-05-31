import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Balance creative and practical writing with revision',
    image: {
      src: '/curriculum/grade8/xho/term3/writing-presenting/diagram.webp',
      alt: 'Grade 8 learner planning a descriptive essay, formal letter, and project notes',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 Writing & Presenting includes <strong>descriptive essays, narrative writing, formal letters,</strong>{' '}
          and project tasks.
        </p>
        <p className="text-slate-600">
          Use planning, drafting, feedback, and presentation skills to strengthen final responses.
        </p>
      </div>
    ),
  },
];

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
    options: ['appropriate formal tone and format', 'slang throughout', 'no salutation', 'emoji-only lines'],
    answer: 'appropriate formal tone and format',
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
    options: ['each paragraph develops one clear point', 'all ideas mix together', 'no examples are given', 'punctuation is ignored'],
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
