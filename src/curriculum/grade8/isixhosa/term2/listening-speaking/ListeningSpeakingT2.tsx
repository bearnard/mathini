import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Present ideas clearly and summarise spoken information',
    image: {
      src: '/curriculum/grade8/xho/term2/listening-speaking/diagram.webp',
      alt: 'Grade 8 learners giving short presentations and interview responses in isiXhosa FAL',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Term 2, listening and speaking includes <strong>oral presentations, interviews, everyday transactions,</strong>{' '}
          and spoken summaries.
        </p>
        <p className="text-slate-600">
          Focus on speaking confidently, listening for detail, and reporting key points accurately.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these formal oral-task words before speeches, interviews, summaries, or discussions.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Intetho"} phonetic={"[in'tɛːtʰɔ]"} meaning={"Speech"} lang="xh" />
          <PronunciationPlayer word={"Ingxoxo"} phonetic={"[iŋ'xɔxɔ]"} meaning={"Discussion"} lang="xh" />
          <PronunciationPlayer word={"Udliwano-ndlebe"} phonetic={"[udli'wanɔ ndlɛbɛ]"} meaning={"Interview"} lang="xh" />
          <PronunciationPlayer word={"Phulaphula"} phonetic={"[pʰula'pʰula]"} meaning={"Listen"} lang="xh" />
          <PronunciationPlayer word={"Thetha"} phonetic={"[tɛta]"} meaning={"Speak"} lang="xh" />
          <PronunciationPlayer word={"Isishwankathelo"} phonetic={"[isiʃwaŋka'tʰeːlɔ]"} meaning={"Summary"} lang="xh" />
        </div>
      </div>
    ),
  },
];

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
    options: ['Nceda undincede ngale nto.', 'Andinamdla.', 'Yenza ngoku!', 'Sukundithetha.'],
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
    options: ['select the most important ideas', 'repeat all examples', 'add new facts', 'rewrite the question'],
    answer: 'select the most important ideas',
    explanation: 'Effective summaries filter information.',
  },
  {
    prompt: 'Strong speaking fluency means you can...',
    options: ['express ideas smoothly and clearly', 'use no pauses at all', 'avoid all eye contact', 'ignore the audience'],
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
