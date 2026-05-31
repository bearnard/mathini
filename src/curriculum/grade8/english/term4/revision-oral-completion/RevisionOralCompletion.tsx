import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Consolidate mixed-genre revision',
    image: {
      src: '/curriculum/grade8/eng/term4/revision-oral-completion/diagram.webp',
      alt: 'learner revising mixed English genres and preparing oral evidence',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 revision brings together reading, writing, language, and oral skills. Learners practise mixed-genre
          questions to strengthen transfer across tasks.
        </p>
      </div>
    ),
  },
  {
    title: 'Use targeted exam strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective revision includes skimming for overview, scanning for detail, planning answers quickly, and
          checking instructions before writing.
        </p>
      </div>
    ),
  },
  {
    title: 'Complete oral evidence with confidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Oral completion requires clear speaking, organised ideas, and reflection on texts studied during the year.
          Preparation improves confidence and fluency.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main goal of integrated revision in Term 4?',
    options: ['to consolidate skills across all genres', 'to study only one poem repeatedly', 'to avoid oral practice', 'to memorise unrelated definitions only'],
    answer: 'to consolidate skills across all genres',
    explanation: 'Revision combines multiple language and literature demands.',
  },
  {
    prompt: 'Which strategy helps first when reading a new exam text?',
    options: ['skim for overall meaning', 'copy random sentences', 'ignore the title', 'answer before reading'],
    answer: 'skim for overall meaning',
    explanation: 'Skimming gives quick orientation before detailed analysis.',
  },
  {
    prompt: 'Scanning is useful when you need to...',
    options: ['find a specific detail quickly', 'analyse theme across the whole text first', 'rewrite the text from memory', 'avoid evidence in answers'],
    answer: 'find a specific detail quickly',
    explanation: 'Scanning targets precise information like names and dates.',
  },
  {
    prompt: 'Mixed-genre questions require learners to...',
    options: ['adapt reading strategies to each text type', 'use one identical approach always', 'ignore differences between genres', 'focus only on handwriting style'],
    answer: 'adapt reading strategies to each text type',
    explanation: 'Different genres demand different analytical focus.',
  },
  {
    prompt: 'An oral reflection response should include...',
    options: ['clear points with examples from studied texts', 'single-word answers only', 'no preparation or structure', 'unrelated jokes only'],
    answer: 'clear points with examples from studied texts',
    explanation: 'Evidence-based oral responses show understanding and organisation.',
  },
  {
    prompt: 'Why is portfolio completion important in Term 4?',
    options: ['It finalises required evidence of progress.', 'It replaces final examinations.', 'It removes language revision.', 'It is only for attendance records.'],
    answer: 'It finalises required evidence of progress.',
    explanation: 'Portfolio evidence supports assessment requirements.',
  },
  {
    prompt: 'Which habit improves timed revision practice?',
    options: ['setting short task deadlines and checking answers', 'reading without any time awareness', 'skipping instruction words', 'using only guesswork'],
    answer: 'setting short task deadlines and checking answers',
    explanation: 'Time-managed practice builds exam readiness.',
  },
  {
    prompt: 'What should you do before submitting an answer script?',
    options: ['review instructions and check completeness', 'leave questions blank intentionally', 'remove all punctuation', 'change all final answers randomly'],
    answer: 'review instructions and check completeness',
    explanation: 'Final checks catch omissions and instruction errors.',
  },
];

const RevisionOralCompletion = () => (
  <CapsSubjectTopic
    title="Revision and Oral Completion"
    subtitle="Mixed-genre revision, exam readiness and final oral evidence"
    learnSteps={learnSteps}
    task="gr8-revision-oral-completion-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default RevisionOralCompletion;
