import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT2.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'A timetable mainly helps readers find...',
    options: ['times and schedules', 'character feelings', 'poem rhythm', 'recipe flavour'],
    answer: 'times and schedules',
    explanation: 'Timetables organise events by time.',
  },
  {
    prompt: 'Which question checks a main idea?',
    options: ['What is this text mostly about?', 'How many commas are used?', 'What colour is the page border?', 'Who printed the worksheet?'],
    answer: 'What is this text mostly about?',
    explanation: 'Main idea asks for the central focus of the text.',
  },
  {
    prompt: 'What is a key feature of a folk story?',
    options: ['a moral or lesson', 'a shopping price list', 'a train timetable', 'a weather graph only'],
    answer: 'a moral or lesson',
    explanation: 'Folktales often teach values or lessons.',
  },
  {
    prompt: 'If a sign says “No entry”, it means...',
    options: ['do not go in', 'enter quickly', 'pay at desk', 'wait for lunch'],
    answer: 'do not go in',
    explanation: 'The sign gives a restriction.',
  },
  {
    prompt: 'Fact-versus-fiction tasks ask learners to...',
    options: ['separate true information from made-up details', 'count only nouns', 'translate into another language only', 'draw maps from memory'],
    answer: 'separate true information from made-up details',
    explanation: 'These tasks compare factual and imagined content.',
  },
  {
    prompt: 'Which reading action is best for finding one detail fast?',
    options: ['scanning', 'singing', 'memorising all lines first', 'copying the title only'],
    answer: 'scanning',
    explanation: 'Scanning targets specific words and details quickly.',
  },
  {
    prompt: 'A short news snippet usually contains...',
    options: ['brief information about a real event', 'imaginary dragons only', 'dialogue punctuation rules', 'math formulas'],
    answer: 'brief information about a real event',
    explanation: 'News snippets report concise factual updates.',
  },
  {
    prompt: 'When comparing two texts, you should look for...',
    options: ['similarities and differences', 'the longest word only', 'number of pages only', 'font style only'],
    answer: 'similarities and differences',
    explanation: 'Comparison requires identifying what matches and what differs.',
  },
];

const ReadingViewingT2 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="News snippets, folk stories, informational texts, timetables, and signs"
    learnSteps={learnSteps}
    task="gr7-reading-viewing-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT2;
