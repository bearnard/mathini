import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT2.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'A good oral presentation usually starts with...',
    options: ['a clear opening statement', 'an unrelated joke only', 'no greeting', 'very fast speech'],
    answer: 'a clear opening statement',
    explanation: 'A clear opening helps listeners follow your talk.',
  },
  {
    prompt: 'In an interview task, the best response is...',
    options: ['relevant, polite, and complete', 'one random word', 'silence only', 'changing the question'],
    answer: 'relevant, polite, and complete',
    explanation: 'Interview responses should address the question clearly.',
  },
  {
    prompt: 'Everyday transaction language is used when...',
    options: ['buying or requesting a service', 'analysing poetry only', 'writing a long essay', 'solving geometry'],
    answer: 'buying or requesting a service',
    explanation: 'Transactions involve practical communication in daily contexts.',
  },
  {
    prompt: 'To summarise a spoken text, learners should...',
    options: ['keep only the main points', 'copy every single word', 'add unrelated opinions', 'ignore the topic'],
    answer: 'keep only the main points',
    explanation: 'Summaries are concise and focused on key ideas.',
  },
  {
    prompt: 'Which phrase is most suitable in a polite service encounter?',
    options: ['Nceda undincede ngale nto.', 'Andinamdla kwaphela, hamba.', 'Ndiyakuxelela, yenza ngoku!', 'Hayi, andifuni nokuthetha nawe.'],
    answer: 'Nceda undincede ngale nto.',
    explanation: 'Polite requests improve communication in transactions.',
  },
  {
    prompt: 'During listening-for-detail tasks, it helps to...',
    options: ['note names, places, and actions', 'focus only on background noise', 'guess immediately', 'skip instructions'],
    answer: 'note names, places, and actions',
    explanation: 'Specific details support accurate answers.',
  },
  {
    prompt: 'If a speaker gives too much detail, your summary should...',
    options: ['pick out the most important ideas only', 'repeat all of the examples that were given', 'add new facts that were not in the talk', 'rewrite the question that was asked'],
    answer: 'pick out the most important ideas only',
    explanation: 'Effective summaries filter information.',
  },
  {
    prompt: 'Strong speaking fluency means you can...',
    options: ['express ideas smoothly and clearly', 'speak with no pauses of any kind', 'avoid all eye contact with the audience', 'ignore the audience while you speak'],
    answer: 'express ideas smoothly and clearly',
    explanation: 'Fluency combines clarity, pace, and confident delivery.',
  },
];

const ListeningSpeakingT2 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Oral presentations, interviews, everyday transactions, and spoken summaries"
    learnSteps={learnSteps}
    task="gr8-listening-speaking-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT2;
