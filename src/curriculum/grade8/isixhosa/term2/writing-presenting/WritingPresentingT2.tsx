import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Use appropriate tone and format in transactional writing',
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
    options: ['a subject line and a clear message', 'only emojis in place of words', 'no greeting at the start of the email', 'a string of symbols that has no meaning'],
    answer: 'a subject line and a clear message',
    explanation: 'Basic email format includes a focused subject and message.',
  },
  {
    prompt: 'A review mainly gives...',
    options: ['an opinion that is backed up by reasons', 'a shopping receipt that lists the items bought', 'a grammar table of the rules of language', 'a timetable of the events of the week'],
    answer: 'an opinion that is backed up by reasons',
    explanation: 'Reviews evaluate with evidence and examples.',
  },
  {
    prompt: 'The purpose of a report is to...',
    options: ['present factual information clearly', 'retell a fantasy story and nothing else', 'write a poem and nothing else', 'avoid any kind of organisation'],
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
    options: ['a topic sentence and supporting detail', 'many points that have no link to each other', 'no punctuation marks of any kind', 'only one long line with no breaks'],
    answer: 'a topic sentence and supporting detail',
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
    options: ['clear and suitably informal', 'always legalistic and full of formal terms', 'deliberately confusing to the reader', 'made up of abbreviations and nothing else'],
    answer: 'clear and suitably informal',
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
