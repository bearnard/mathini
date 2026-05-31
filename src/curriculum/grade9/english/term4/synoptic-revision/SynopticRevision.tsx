import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Review genres and comprehension strategies',
    image: {
      src: '/curriculum/grade9/english/term4/synoptic-revision/image1.jpg',
      alt: 'learner reviewing multiple texts representing different genres with comprehension strategies',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Synoptic revision pulls together all year\'s learning: poetry, prose, drama, essays, reports, and letters. 
          Use comprehension strategies like scanning, skimming, inferencing, and summarizing to handle mixed-genre exam 
          papers efficiently.
        </p>
      </div>
    ),
  },
  {
    title: 'Practise summary skills and evidence selection',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Summary condenses main ideas in your own words while keeping original meaning. Exam success depends on 
          selecting the most relevant evidence and organizing it clearly to answer the specific question posed.
        </p>
      </div>
    ),
  },
  {
    title: 'Develop exam strategy and time management',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Exam technique includes reading questions carefully, planning answers, managing time across multiple sections, 
          and checking for errors. Regular practice with mixed-paper items builds confidence and strategic thinking for 
          final assessment.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the purpose of a comprehension strategy like skimming?',
    options: ['to quickly identify the main idea', 'to memorize every word', 'to avoid reading actively', 'to miss important details'],
    answer: 'to quickly identify the main idea',
    explanation: 'Skimming helps you understand overall meaning before deep reading.',
  },
  {
    prompt: 'Which strategy is most useful for finding specific information?',
    options: ['scanning', 'memorizing', 'ignoring details', 'random reading'],
    answer: 'scanning',
    explanation: 'Scanning allows you to locate exact details quickly without reading every word.',
  },
  {
    prompt: 'In a summary, you should...',
    options: ['paraphrase main ideas in your own words', 'copy sentences directly from the text', 'include every minor detail', 'add your own unrelated opinions'],
    answer: 'paraphrase main ideas in your own words',
    explanation: 'Effective summaries preserve meaning while demonstrating your understanding.',
  },
  {
    prompt: 'When selecting evidence for an exam answer, prioritize...',
    options: ['the most relevant quotes that directly support your point', 'the longest passages', 'any quote that appears in the text', 'quotes from unrelated sections'],
    answer: 'the most relevant quotes that directly support your point',
    explanation: 'Strategic evidence selection strengthens your argument.',
  },
  {
    prompt: 'How should you approach a mixed-genre exam paper?',
    options: ['read all questions first, then manage your time across sections', 'answer randomly without planning', 'spend all time on one section', 'skip difficult questions'],
    answer: 'read all questions first, then manage your time across sections',
    explanation: 'Planning helps ensure balanced coverage and time for all sections.',
  },
  {
    prompt: 'What makes an inference during reading?',
    options: ['reaching a reasonable conclusion using textual clues', 'ignoring what the text actually says', 'guessing randomly', 'always assuming the obvious'],
    answer: 'reaching a reasonable conclusion using textual clues',
    explanation: 'Inference combines evidence with logical reasoning.',
  },
  {
    prompt: 'Which exam technique prevents careless errors?',
    options: ['rereading your answer and checking grammar, spelling, and logic', 'rushing to finish quickly', 'skipping proofreading', 'changing answers without reason'],
    answer: 'rereading your answer and checking grammar, spelling, and logic',
    explanation: 'Careful checking catches and corrects mistakes before submission.',
  },
  {
    prompt: 'Why is planning an answer before writing important in exams?',
    options: ['it organizes your thoughts and ensures you address the question fully', 'it wastes valuable time', 'it replaces the need for revision', 'it guarantees a perfect answer'],
    answer: 'it organizes your thoughts and ensures you address the question fully',
    explanation: 'Planning prevents incomplete or off-topic responses.',
  },
];

const SynopticRevision = () => (
  <CapsSubjectTopic
    title="Synoptic Revision"
    subtitle="All genres, comprehension strategies, summary skills and evidence selection"
    learnSteps={learnSteps}
    task="gr9-synoptic-revision-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default SynopticRevision;
