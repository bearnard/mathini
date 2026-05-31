import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Apply grammar in real writing contexts',
    image: {
      src: '/curriculum/grade7/eng/term1/foundational-grammar-context/diagram.webp',
      alt: 'learner editing sentences for tense, number, word order and reported speech',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Foundational grammar supports clear communication. In Grade 7, learners practise singular and plural forms,
          verb tenses, word order, and speech forms in authentic sentences.
        </p>
      </div>
    ),
  },
  {
    title: 'Control tense and sentence order',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Correct tense keeps meaning consistent. Accurate word order helps the reader understand who did what, when,
          and why.
        </p>
      </div>
    ),
  },
  {
    title: 'Switch between direct and indirect speech',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Direct speech shows exact words with quotation marks. Indirect speech reports ideas without quoting every
          word exactly.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Choose the correct plural form: "The ___ are reading quietly."',
    options: ['learners', 'learner', 'learnerss', 'learn'],
    answer: 'learners',
    explanation: 'The sentence needs a plural noun to match "are".',
  },
  {
    prompt: 'Which sentence is in the past tense?',
    options: [
      'She completed the homework yesterday.',
      'She completes the homework every day.',
      'She is completing the homework now.',
      'She will complete the homework tomorrow.',
    ],
    answer: 'She completed the homework yesterday.',
    explanation: 'The verb "completed" shows past tense.',
  },
  {
    prompt: 'Which word order is correct?',
    options: [
      'The class read the poem carefully.',
      'Read carefully the class poem the.',
      'Carefully poem the read class the.',
      'Poem the class carefully read the.',
    ],
    answer: 'The class read the poem carefully.',
    explanation: 'This sentence follows clear subject-verb-object order.',
  },
  {
    prompt: 'Which sentence uses direct speech?',
    options: [
      '"I will revise tonight," said Musa.',
      'Musa said that he would revise that night.',
      'Musa was revising that night.',
      'Musa planned revision for the exam.',
    ],
    answer: '"I will revise tonight," said Musa.',
    explanation: 'Direct speech uses quotation marks for exact words.',
  },
  {
    prompt: 'Change to indirect speech: "Lebo said, \'I am tired.\'"',
    options: [
      'Lebo said that she was tired.',
      'Lebo said, she tired is.',
      'Lebo said that I am tired.',
      'Lebo says she will tired.',
    ],
    answer: 'Lebo said that she was tired.',
    explanation: 'Indirect speech shifts pronoun and tense correctly.',
  },
  {
    prompt: 'Which sentence has correct subject-verb agreement?',
    options: [
      'The team is ready for the debate.',
      'The team are ready for the debate.',
      'The team be ready for the debate.',
      'The team ready for the debate.',
    ],
    answer: 'The team is ready for the debate.',
    explanation: 'The singular noun "team" takes the singular verb "is".',
  },
  {
    prompt: 'Which edit fixes tense consistency?',
    options: [
      'Yesterday we walked to school and played soccer.',
      'Yesterday we walk to school and played soccer.',
      'Yesterday we walked to school and play soccer.',
      'Yesterday we walking to school and play soccer.',
    ],
    answer: 'Yesterday we walked to school and played soccer.',
    explanation: 'Both verbs stay in the past tense for consistency.',
  },
  {
    prompt: 'Which punctuation is needed in direct speech before the spoken words?',
    options: ['Quotation marks', 'Semicolon only', 'Hyphen only', 'No punctuation'],
    answer: 'Quotation marks',
    explanation: 'Quotation marks show the exact words being spoken.',
  },
];

const FoundationalGrammarContext = () => (
  <CapsSubjectTopic
    title="Foundational Grammar in Context"
    subtitle="Sentence accuracy with tense, word order and speech forms"
    learnSteps={learnSteps}
    task="gr7-foundational-grammar-context-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default FoundationalGrammarContext;
