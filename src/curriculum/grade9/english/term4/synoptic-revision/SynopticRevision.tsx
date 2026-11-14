import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Review genres and comprehension strategies',
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
    options: ['the most relevant quotes that directly support your point', 'the longest passages, since they carry more detail', 'any quote that appears in the text near your point', 'quotes from other sections that sound impressive'],
    answer: 'the most relevant quotes that directly support your point',
    explanation: 'Strategic evidence selection strengthens your argument.',
  },
  {
    prompt: 'How should you approach a mixed-genre exam paper?',
    options: ['read all questions first, then plan your time across sections', 'start with the first question and keep going to the end', 'spend all your time on the section you like most', 'skip the difficult questions and never return'],
    answer: 'read all questions first, then plan your time across sections',
    explanation: 'Planning helps ensure balanced coverage and time for all sections.',
  },
  {
    prompt: 'What makes an inference during reading?',
    options: ['reaching a sound conclusion from clues in the text', 'ignoring what the text actually says', 'making a wild guess that has no support', 'always assuming that the obvious meaning is right'],
    answer: 'reaching a sound conclusion from clues in the text',
    explanation: 'Inference combines evidence with logical reasoning.',
  },
  {
    prompt: 'Which exam technique prevents careless errors?',
    options: ['rereading your answer and checking grammar, spelling and logic', 'finishing quickly so that you have time to spare', 'skipping proofreading to save time for new questions', 'changing answers without any reason to do so'],
    answer: 'rereading your answer and checking grammar, spelling and logic',
    explanation: 'Careful checking catches and corrects mistakes before submission.',
  },
  {
    prompt: 'Why is planning an answer before writing important in exams?',
    options: ['it organises your thoughts so you answer the whole question', 'it uses up valuable time that you need to write', 'it takes the place of revising for the exam', 'it guarantees that your answer will be perfect'],
    answer: 'it organises your thoughts so you answer the whole question',
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
