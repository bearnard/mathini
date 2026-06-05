import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Formal email, review, report, dialogue, and transactional writing',
    image: {
      src: '/curriculum/grade9/isixhosa/term2/writing-presenting/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners writing formal emails, reviews, and transactional texts',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 Writing & Presenting focuses on <strong>formal email, review, report, dialogue,</strong>{' '}
          and transactional writing.
        </p>
        <p className="text-slate-600">
          Learners write formal transactional texts while maintaining correct register and format.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practise these formal-writing words before composing emails, reports, speeches, and other transactional texts.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"I-imeyile"} phonetic={"[i i'meːjile]"} meaning={"Email"} lang="xh" />
          <PronunciationPlayer word={"Ingxelo"} phonetic={"[iŋ'xelo]"} meaning={"Report"} lang="xh" />
          <PronunciationPlayer word={"Inqaku"} phonetic={"[inqaku]"} meaning={"Article / note"} lang="xh" />
          <PronunciationPlayer word={"Ileta"} phonetic={"[i'lɛta]"} meaning={"Letter"} lang="xh" />
          <PronunciationPlayer word={"Intetho"} phonetic={"[in'tɛːtʰɔ]"} meaning={"Speech"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A formal email should include...',
    options: ['greeting, clear subject, body with purpose, and professional closing', 'no punctuation', 'slang throughout', 'no clear structure'],
    answer: 'greeting, clear subject, body with purpose, and professional closing',
    explanation: 'Email conventions ensure your message is clear and professional.',
  },
  {
    prompt: 'Register means...',
    options: ['the level of formality appropriate to your audience and context', 'a list of names', 'how loud you write', 'the size of the font'],
    answer: 'the level of formality appropriate to your audience and context',
    explanation: 'Matching register to context shows respect and professionalism.',
  },
  {
    prompt: 'A review of a product or service typically includes...',
    options: ['description, personal opinion, and supporting reasons', 'only compliments', 'no specific details', 'lies and exaggeration'],
    answer: 'description, personal opinion, and supporting reasons',
    explanation: 'Good reviews are honest, specific, and explain the reviewer\'s reasoning.',
  },
  {
    prompt: 'A report should be written in...',
    options: ['objective, clear language focused on facts', 'very emotional language', 'poetry form', 'riddles and puzzles'],
    answer: 'objective, clear language focused on facts',
    explanation: 'Reports require neutral, accurate language to inform readers effectively.',
  },
  {
    prompt: 'Dialogue in writing is used to...',
    options: ['bring characters and scenes to life through conversation', 'avoid narrative description', 'take up space', 'confuse readers'],
    answer: 'bring characters and scenes to life through conversation',
    explanation: 'Dialogue adds authenticity, reveals character, and moves the story forward.',
  },
  {
    prompt: 'Transactional writing is writing that...',
    options: ['conducts business or achieves a practical purpose', 'is fictional and imaginative', 'has no clear goal', 'is always academic'],
    answer: 'conducts business or achieves a practical purpose',
    explanation: 'Transactional writing includes emails, applications, complaints, and inquiries.',
  },
  {
    prompt: 'The structure of a report typically includes...',
    options: ['title, introduction, findings or body, conclusion, and recommendations', 'only one paragraph', 'no organization', 'random headings'],
    answer: 'title, introduction, findings or body, conclusion, and recommendations',
    explanation: 'Clear structure helps readers understand and navigate your report.',
  },
  {
    prompt: 'When writing a complaint or formal request, you should...',
    options: ['be clear, polite, and specific about the issue and desired outcome', 'be rude and demanding', 'stay vague', 'never explain the problem'],
    answer: 'be clear, polite, and specific about the issue and desired outcome',
    explanation: 'Professionalism increases the likelihood of a positive response.',
  },
];

const WritingPresentingT2 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Formal email, review, report, dialogue, and transactional writing"
    learnSteps={learnSteps}
    task="gr9-writing-presenting-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT2;
