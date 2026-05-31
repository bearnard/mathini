import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Report, review, summary, exam essays, and proofreading skills',
    image: {
      src: '/curriculum/grade9/isixhosa/term4/writing-presenting/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners revising writing types and perfecting proofreading for exams',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 Writing & Presenting focuses on <strong>report, review, summary, exam essays,</strong>{' '}
          and proofreading.
        </p>
        <p className="text-slate-600">
          Learners write timed responses confidently and revise key transactional formats.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Writing under exam conditions requires...',
    options: ['planning before writing, clear organization, and time management', 'no planning', 'writing as fast as possible', 'skipping structure'],
    answer: 'planning before writing, clear organization, and time management',
    explanation: 'Even brief planning improves exam essay quality and reduces errors.',
  },
  {
    prompt: 'A report in an exam context should be...',
    options: ['organized with clear headings and objective, factual language', 'written in narrative form', 'very informal', 'without structure'],
    answer: 'organized with clear headings and objective, factual language',
    explanation: 'Clear report structure makes information easy to find and understand.',
  },
  {
    prompt: 'A review as an exam task requires you to...',
    options: ['provide description, personal judgment, and supporting reasons', 'only praise', 'avoid opinions', 'make no judgments'],
    answer: 'provide description, personal judgment, and supporting reasons',
    explanation: 'Reviews balance objectivity with personal response.',
  },
  {
    prompt: 'Summarizing a passage in an exam means...',
    options: ['capturing the main ideas in fewer words, clearly and accurately', 'copying it verbatim', 'leaving out important information', 'adding your own ideas'],
    answer: 'capturing the main ideas in fewer words, clearly and accurately',
    explanation: 'Successful summarizing shows comprehension and concision.',
  },
  {
    prompt: 'An exam essay should have...',
    options: ['an introduction with thesis, supporting body paragraphs, and conclusion', 'no clear structure', 'a thesis only', 'no introduction'],
    answer: 'an introduction with thesis, supporting body paragraphs, and conclusion',
    explanation: 'This structure ensures your argument is clear and complete.',
  },
  {
    prompt: 'Proofreading means...',
    options: ['checking for spelling, grammar, punctuation, and sense errors', 'ignoring small mistakes', 'rewriting everything', 'skipping the last paragraph'],
    answer: 'checking for spelling, grammar, punctuation, and sense errors',
    explanation: 'Careful proofreading prevents careless errors that reduce marks.',
  },
  {
    prompt: 'When revising transactional writing for exams, focus on...',
    options: ['format conventions, appropriate register, and clarity of message', 'creative flourishes', 'very long sentences', 'informal slang'],
    answer: 'format conventions, appropriate register, and clarity of message',
    explanation: 'Transactional writing rewards precision and professionalism.',
  },
  {
    prompt: 'Reviewing your own exam essay before submission helps you...',
    options: ['catch errors, improve phrasing, and ensure completeness', 'introduce new errors', 'confuse your ideas', 'waste time'],
    answer: 'catch errors, improve phrasing, and ensure completeness',
    explanation: 'Self-review is your last opportunity to strengthen your response.',
  },
];

const WritingPresentingT4 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Report, review, summary, exam essays, and proofreading"
    learnSteps={learnSteps}
    task="gr9-writing-presenting-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT4;
