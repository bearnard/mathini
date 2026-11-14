import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Consolidate language structures for exam readiness',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grammar consolidation revises tense control, clause use, punctuation, and vocabulary choices so learners can
          apply language accurately in context.
        </p>
      </div>
    ),
  },
  {
    title: 'Edit sentences with precision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Careful editing catches agreement mistakes, tense shifts, and punctuation errors that weaken meaning.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply grammar while reading and writing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Language knowledge is strongest when used in full texts, not isolated drills. Context-based practice supports
          better exam performance.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is in the future tense?',
    options: [
      'They will revise before the test.',
      'They revised before the test.',
      'They revise before the test.',
      'They are revising before the test yesterday.',
    ],
    answer: 'They will revise before the test.',
    explanation: 'The helping verb "will" indicates future tense.',
  },
  {
    prompt: 'Choose the sentence with correct punctuation.',
    options: [
      'When the bell rang, the class started writing.',
      'When the bell rang the class started writing',
      'When the bell rang; the class started writing',
      'When the bell rang the class, started writing.',
    ],
    answer: 'When the bell rang, the class started writing.',
    explanation: 'The introductory clause is correctly followed by a comma.',
  },
  {
    prompt: 'A clause must contain...',
    options: ['a subject and a verb', 'only one adjective', 'a heading and date', 'a punctuation symbol'],
    answer: 'a subject and a verb',
    explanation: 'These are the core parts needed for a clause.',
  },
  {
    prompt: 'Which word best completes the sentence: "The speaker gave a ___ explanation."',
    options: ['clear', 'clearly', 'clearness', 'clearerly'],
    answer: 'clear',
    explanation: 'A noun needs an adjective, and "clear" is the correct form.',
  },
  {
    prompt: 'Which sentence shows correct tense consistency?',
    options: [
      'She read the article and wrote a summary.',
      'She read the article and writes a summary.',
      'She reads the article and wrote a summary.',
      'She reading the article and wrote summary.',
    ],
    answer: 'She read the article and wrote a summary.',
    explanation: 'Both verbs are consistently in past tense.',
  },
  {
    prompt: 'Which edit fixes this sentence? "The learners was ready."',
    options: [
      'The learners were ready.',
      'The learners is ready.',
      'The learners be ready.',
      'The learners ready were.',
    ],
    answer: 'The learners were ready.',
    explanation: 'Plural subject "learners" takes "were".',
  },
  {
    prompt: 'What does language in context mean?',
    options: ['using grammar choices inside meaningful reading or writing', 'memorising grammar terms without using them', 'copying one sentence over and over again', 'avoiding the writing of full paragraphs'],
    answer: 'using grammar choices inside meaningful reading or writing',
    explanation: 'Contextual language use connects rules to real communication.',
  },
  {
    prompt: 'Which sentence uses a comma correctly with a connector?',
    options: [
      'However, the group completed the task on time.',
      'However the group, completed the task on time.',
      'However the group completed, the task on time.',
      'However the group completed the task on time',
    ],
    answer: 'However, the group completed the task on time.',
    explanation: 'A comma after the introductory connector is correct.',
  },
];

const GrammarConsolidation = () => (
  <CapsSubjectTopic
    title="Grammar Consolidation"
    subtitle="Tense, clauses, punctuation and vocabulary in context"
    learnSteps={learnSteps}
    task="gr7-grammar-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default GrammarConsolidation;
