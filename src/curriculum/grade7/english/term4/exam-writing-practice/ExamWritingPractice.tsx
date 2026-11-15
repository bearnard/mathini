import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './lesson';

const bank: CapsItem[] = [
  {
    prompt: 'What should you do first in an exam writing task?',
    options: ['Read the question and plan the key points', 'Write down anything and edit it later', 'Skip the instructions and start at once', 'Copy a text from memory and nothing else'],
    answer: 'Read the question and plan the key points',
    explanation: 'A quick plan keeps writing focused and relevant.',
  },
  {
    prompt: 'Which text is a transactional writing form?',
    options: ['Formal letter', 'Poem analysis', 'Character sketch', 'Novel chapter review'],
    answer: 'Formal letter',
    explanation: 'Transactional texts include practical communication forms like letters.',
  },
  {
    prompt: 'Why is timing important in exam writing?',
    options: ['It helps you finish planning, drafting and editing', 'It removes the need for any structure', 'It lets you skip the conclusion', 'It makes punctuation optional'],
    answer: 'It helps you finish planning, drafting and editing',
    explanation: 'Time management ensures all parts of the task are covered.',
  },
  {
    prompt: 'Which sentence best matches formal tone?',
    options: ['I would appreciate your response on this matter.', 'Hey, just fix this quickly for me please!', 'Yo, this is not cool at all, you know.', 'Whatever, just do what you want to do.'],
    answer: 'I would appreciate your response on this matter.',
    explanation: 'Formal tone is polite and professional.',
  },
  {
    prompt: 'What is the purpose of an editing checklist?',
    options: [
      'to catch errors before final submission',
      'to increase word count without meaning',
      'to replace planning',
      'to avoid rereading',
    ],
    answer: 'to catch errors before final submission',
    explanation: 'Checklists help you systematically improve accuracy.',
  },
  {
    prompt: 'Which choice shows good paragraph organisation?',
    options: [
      'Each paragraph develops one clear idea with support',
      'Every paragraph repeats the same sentence',
      'Paragraphs switch topic each line',
      'Paragraphs have no linking words',
    ],
    answer: 'Each paragraph develops one clear idea with support',
    explanation: 'Organised paragraphs improve clarity and coherence.',
  },
  {
    prompt: 'In a timed essay, what is a practical planning method?',
    options: ['Make a brief outline of the introduction, body and conclusion', 'Write the final copy at once with no plan for it', 'Spend all of the time on the title page', 'Ignore the audience that the text is meant for'],
    answer: 'Make a brief outline of the introduction, body and conclusion',
    explanation: 'A short outline keeps the essay structured.',
  },
  {
    prompt: 'Which is a common exam trap during editing?',
    options: ['Forgetting punctuation and agreement errors', 'Using a clear introduction in the essay', 'Checking the format requirements', 'Leaving time for proofreading at the end'],
    answer: 'Forgetting punctuation and agreement errors',
    explanation: 'Many marks are lost when basic language errors are missed.',
  },
];

const ExamWritingPractice = () => (
  <CapsSubjectTopic
    title="Exam Writing Practice"
    subtitle="Timed planning, text-type choice and accurate final editing"
    learnSteps={learnSteps}
    task="gr7-exam-writing-practice-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ExamWritingPractice;

