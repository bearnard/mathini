import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Plan writing under exam conditions',
    image: {
      src: '/curriculum/grade8/eng/term4/examination-writing/diagram.webp',
      alt: 'learner planning essay and transactional responses with timed exam checklist',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Examination writing requires fast planning. Learners choose the correct text form, organise ideas, and keep
          purpose and audience in focus.
        </p>
      </div>
    ),
  },
  {
    title: 'Select format and tone accurately',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Essay and transactional tasks each have format conventions. Matching register and structure to the question
          improves marks.
        </p>
      </div>
    ),
  },
  {
    title: 'Edit quickly for clarity and accuracy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Final minutes should be used for editing punctuation, grammar, and coherence. Small corrections can
          significantly improve overall quality.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What should you do first in a timed writing exam?',
    options: ['plan key points and structure briefly', 'start writing without reading the prompt', 'memorise punctuation names', 'copy the question repeatedly'],
    answer: 'plan key points and structure briefly',
    explanation: 'Short planning saves time and improves organisation.',
  },
  {
    prompt: 'A transactional writing task usually requires...',
    options: ['specific format conventions', 'free verse line breaks', 'story climax analysis only', 'headline statistics only'],
    answer: 'specific format conventions',
    explanation: 'Transactional texts follow recognised structures for purpose.',
  },
  {
    prompt: 'Why is time management important in exam writing?',
    options: ['It ensures all sections are attempted and checked.', 'It removes the need for planning.', 'It guarantees perfect marks automatically.', 'It replaces language knowledge.'],
    answer: 'It ensures all sections are attempted and checked.',
    explanation: 'Managing time helps complete tasks and allows editing.',
  },
  {
    prompt: 'Which register suits a formal complaint email?',
    options: ['polite and precise', 'casual slang-heavy', 'comic exaggerated dialogue', 'highly poetic and abstract'],
    answer: 'polite and precise',
    explanation: 'Formal tasks require respectful, clear language.',
  },
  {
    prompt: 'What is a strong reason to leave time for editing?',
    options: ['to correct grammar and punctuation errors', 'to add unrelated new ideas', 'to rewrite in a different genre', 'to shorten every answer to one line'],
    answer: 'to correct grammar and punctuation errors',
    explanation: 'Editing improves clarity and technical accuracy.',
  },
  {
    prompt: 'If a question asks for an essay, the best approach is to...',
    options: ['use introduction, coherent body paragraphs, and conclusion', 'write disconnected bullet points only', 'switch to letter format', 'ignore paragraphing entirely'],
    answer: 'use introduction, coherent body paragraphs, and conclusion',
    explanation: 'Essay structure supports logical development of ideas.',
  },
  {
    prompt: 'What does "audience and purpose" guide in exam writing?',
    options: ['tone, detail and format choices', 'font colour only', 'page margins only', 'word count guessing only'],
    answer: 'tone, detail and format choices',
    explanation: 'Audience and purpose shape communication decisions.',
  },
  {
    prompt: 'Which final check is most useful before handing in?',
    options: ['confirm you answered the exact task asked', 'remove every punctuation mark', 'change topic in conclusion', 'erase planning notes from memory only'],
    answer: 'confirm you answered the exact task asked',
    explanation: 'Task alignment is essential for scoring criteria.',
  },
];

const ExaminationWriting = () => (
  <CapsSubjectTopic
    title="Examination Writing"
    subtitle="Timed planning, text-type selection and fast editing for exam success"
    learnSteps={learnSteps}
    task="gr8-examination-writing-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ExaminationWriting;
