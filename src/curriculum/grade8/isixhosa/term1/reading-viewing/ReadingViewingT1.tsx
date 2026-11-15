import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT1.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'The main purpose of an advertisement is usually to...',
    options: ['persuade an audience', 'tell a folktale', 'explain grammar rules', 'record attendance'],
    answer: 'persuade an audience',
    explanation: 'Advertisements are designed to influence readers or viewers.',
  },
  {
    prompt: 'Which question checks the main idea of a passage?',
    options: ['What is the text mostly about?', 'How many commas are there?', 'Who printed the page?', 'What colour is the desk?'],
    answer: 'What is the text mostly about?',
    explanation: 'Main idea asks for the central meaning of the text.',
  },
  {
    prompt: 'In a short story, sequence questions ask learners to...',
    options: ['order events correctly', 'count only adjectives', 'rename all characters', 'change the ending'],
    answer: 'order events correctly',
    explanation: 'Sequencing checks understanding of event order.',
  },
  {
    prompt: 'Visual literacy includes reading...',
    options: ['images, layout, and symbols', 'only long paragraphs', 'math equations only', 'spelling lists only'],
    answer: 'images, layout, and symbols',
    explanation: 'Visual texts communicate meaning beyond words.',
  },
  {
    prompt: 'If a poem repeats a word, it often helps to...',
    options: ['emphasise an idea or mood', 'hide the topic completely', 'remove all imagery', 'change the writer'],
    answer: 'emphasise an idea or mood',
    explanation: 'Repetition often strengthens feeling or meaning.',
  },
  {
    prompt: 'Vocabulary in context means you should...',
    options: ['use nearby clues to find meaning', 'ignore the sentence', 'choose the longest word', 'translate every line first'],
    answer: 'use nearby clues to find meaning',
    explanation: 'Context clues help determine a word’s meaning.',
  },
  {
    prompt: 'A supporting detail in comprehension is...',
    options: ['evidence that backs up the main idea', 'the font style that is used for the title', 'an opinion that has no link to the text', 'the page number at the bottom of the page'],
    answer: 'evidence that backs up the main idea',
    explanation: 'Supporting details provide proof from the text.',
  },
  {
    prompt: 'The best way to answer a text-based question is to...',
    options: ['refer to evidence from the passage', 'guess the answer without reading the passage', 'copy any option that you see quickly', 'skip the question and move on to the next'],
    answer: 'refer to evidence from the passage',
    explanation: 'Evidence-based answers are more accurate and reliable.',
  },
];

const ReadingViewingT1 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Visual texts, advertisements, short stories, poems, and comprehension strategies"
    learnSteps={learnSteps}
    task="gr8-reading-viewing-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT1;
