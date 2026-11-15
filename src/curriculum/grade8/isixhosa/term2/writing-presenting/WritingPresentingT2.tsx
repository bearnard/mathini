import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT2.data';

const learnSteps = xhosaSteps(lesson);

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
