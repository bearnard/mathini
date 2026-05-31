import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Revision across literature, visual texts, comprehension, and summary',
    image: {
      src: '/curriculum/grade9/isixhosa/term4/reading-viewing/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners revising literary analysis and visual comprehension skills',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 Reading & Viewing focuses on <strong>revision across literature, visual texts,</strong>{' '}
          comprehension, and summary skills.
        </p>
        <p className="text-slate-600">
          Learners apply the year's reading strategies in exam-style contexts and revision activities.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'When revising literature studied during the year, you should...',
    options: ['review themes, characters, and key quotes from each text', 'ignore what you already read', 'only study new material', 'avoid re-reading'],
    answer: 'review themes, characters, and key quotes from each text',
    explanation: 'Systematic review reinforces learning and prepares you for assessment.',
  },
  {
    prompt: 'A summary of a text should be...',
    options: ['brief, accurate, and capture the main ideas', 'as long as the original', 'incomplete', 'only your opinions'],
    answer: 'brief, accurate, and capture the main ideas',
    explanation: 'Effective summaries distill content to essentials.',
  },
  {
    prompt: 'Visual comprehension involves understanding...',
    options: ['colour, composition, symbols, and how they convey meaning', 'only text', 'only the title', 'random visual elements'],
    answer: 'colour, composition, symbols, and how they convey meaning',
    explanation: 'Visual literacy is essential in contemporary communication.',
  },
  {
    prompt: 'Exam-style questions about texts typically ask you to...',
    options: ['interpret meaning, analyse language, and support answers with evidence', 'list facts only', 'guess randomly', 'avoid analysis'],
    answer: 'interpret meaning, analyse language, and support answers with evidence',
    explanation: 'Higher-order thinking skills are tested through analysis and interpretation.',
  },
  {
    prompt: 'When revising poetry, focus on...',
    options: ['poetic devices, tone, imagery, and how they work together', 'rhyming words only', 'the poet\'s age', 'random lines'],
    answer: 'poetic devices, tone, imagery, and how they work together',
    explanation: 'Understanding technique deepens appreciation and analytical ability.',
  },
  {
    prompt: 'Revising drama involves remembering...',
    options: ['character development, conflict resolution, and key scenes', 'only the ending', 'character names only', 'the play\'s length'],
    answer: 'character development, conflict resolution, and key scenes',
    explanation: 'Recall of key plot and character elements prepares you for questions.',
  },
  {
    prompt: 'A reading strategy for exam practice is to...',
    options: ['skim first, then read carefully, then summarize', 'read once slowly', 'not read at all', 'read backwards'],
    answer: 'skim first, then read carefully, then summarize',
    explanation: 'Multi-stage reading maximizes comprehension and time efficiency.',
  },
  {
    prompt: 'Annotation during revision reading helps you...',
    options: ['mark key ideas and create a reference for later study', 'confuse yourself', 'waste paper', 'avoid thinking'],
    answer: 'mark key ideas and create a reference for later study',
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
