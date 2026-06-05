import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Use appropriate tone and format in transactional writing',
    image: {
      src: '/curriculum/grade8/xho/term2/writing-presenting/diagram.webp',
      alt: 'Grade 8 learner preparing an email, review, and short report draft in class',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 writing includes <strong>emails, reviews, reports, informal paragraphs,</strong> and process writing
          steps.
        </p>
        <p className="text-slate-600">
          Choose suitable tone, audience, and structure, then revise for clarity and correctness.
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
    prompt: 'An email should usually include...',
    options: ['a subject and clear message', 'only emojis', 'no greeting', 'random symbols'],
    answer: 'a subject and clear message',
    explanation: 'Basic email format includes a focused subject and message.',
  },
  {
    prompt: 'A review mainly gives...',
    options: ['an opinion supported by reasons', 'a shopping receipt', 'a grammar table', 'a timetable'],
    answer: 'an opinion supported by reasons',
    explanation: 'Reviews evaluate with evidence and examples.',
  },
  {
    prompt: 'The purpose of a report is to...',
    options: ['present factual information clearly', 'retell fantasy only', 'write a poem only', 'avoid organisation'],
    answer: 'present factual information clearly',
    explanation: 'Reports communicate structured facts about a topic.',
  },
  {
    prompt: 'In process writing, editing comes...',
    options: ['after drafting', 'before planning', 'instead of writing', 'before understanding the topic'],
    answer: 'after drafting',
    explanation: 'Writers draft first, then revise and edit.',
  },
  {
    prompt: 'Tone should match...',
    options: ['audience and purpose', 'page margins only', 'font colour only', 'the weather'],
    answer: 'audience and purpose',
    explanation: 'Appropriate tone depends on who will read and why.',
  },
  {
    prompt: 'A clear paragraph usually has...',
    options: ['topic sentence and supporting detail', 'many unrelated points', 'no punctuation', 'only one long line'],
    answer: 'topic sentence and supporting detail',
    explanation: 'Paragraph unity improves readability.',
  },
  {
    prompt: 'A strong revision step is to...',
    options: ['check sequence and clarity', 'remove all details', 'change topic completely', 'ignore mistakes'],
    answer: 'check sequence and clarity',
    explanation: 'Revision improves logic and expression.',
  },
  {
    prompt: 'When writing for classmates, language should be...',
    options: ['clear and appropriately informal', 'always legalistic', 'deliberately confusing', 'only abbreviations'],
    answer: 'clear and appropriately informal',
    explanation: 'Audience awareness guides effective style choices.',
  },
];

const WritingPresentingT2 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Emails, reviews, reports, informal paragraphs, and process writing"
    learnSteps={learnSteps}
    task="gr8-writing-presenting-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT2;
