import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT4.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'When revising literature studied during the year, you should...',
    options: ['review themes, characters and key quotes from each text', 'ignore what you have already read this year', 'study only the new texts of the term', 'avoid re-reading, since you know the plots'],
    answer: 'review themes, characters and key quotes from each text',
    explanation: 'Systematic review reinforces learning and prepares you for assessment.',
  },
  {
    prompt: 'A summary of a text should be...',
    options: ['brief, accurate and covering the main ideas', 'as long as the text that it summarises', 'missing some of the main points', 'made up of your own opinions of the text'],
    answer: 'brief, accurate and covering the main ideas',
    explanation: 'Effective summaries distill content to essentials.',
  },
  {
    prompt: 'Visual comprehension involves understanding...',
    options: ['colour, composition, symbols and the meaning they carry', 'the printed words and nothing else on the page', 'the title of the image and nothing else', 'the page number and the margins around the text'],
    answer: 'colour, composition, symbols and the meaning they carry',
    explanation: 'Visual literacy is essential in contemporary communication.',
  },
  {
    prompt: 'Exam-style questions about texts typically ask you to...',
    options: ['interpret meaning, analyse language and give evidence', 'list facts that appear in the text and no more', 'guess the answer from the length of the options', 'avoid analysis and simply retell the story'],
    answer: 'interpret meaning, analyse language and give evidence',
    explanation: 'Higher-order thinking skills are tested through analysis and interpretation.',
  },
  {
    prompt: 'When revising poetry, focus on...',
    options: ['poetic devices, tone, imagery and how they work together', 'the rhyming words and nothing else', 'the age and life story of the poet', 'the lines that you like best and nothing more'],
    answer: 'poetic devices, tone, imagery and how they work together',
    explanation: 'Understanding technique deepens appreciation and analytical ability.',
  },
  {
    prompt: 'Revising drama involves remembering...',
    options: ['character growth, how conflict is settled and key scenes', 'the ending of the play and nothing else about it', 'the names of the characters and no more than that', 'the length of the play in minutes and acts'],
    answer: 'character growth, how conflict is settled and key scenes',
    explanation: 'Recall of key plot and character elements prepares you for questions.',
  },
  {
    prompt: 'A reading strategy for exam practice is to...',
    options: ['skim first, then read carefully, then summarise', 'read slowly once and then stop', 'skip the text and answer from memory', 'read the text from the end to the start'],
    answer: 'skim first, then read carefully, then summarise',
    explanation: 'Multi-stage reading maximizes comprehension and time efficiency.',
  },
  {
    prompt: 'Annotation during revision reading helps you...',
    options: ['mark key ideas and make a reference for later study', 'confuse yourself with too many marks', 'waste paper and ink on the page', 'save you from having to think about the text'],
    answer: 'mark key ideas and make a reference for later study',
    explanation: 'Annotation keeps you active and creates useful study notes.',
  },
];

const ReadingViewingT4 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Revision across literature, visual texts, comprehension, and summary"
    learnSteps={learnSteps}
    task="gr9-reading-viewing-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT4;
