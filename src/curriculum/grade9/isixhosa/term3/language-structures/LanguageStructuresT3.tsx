import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Complex sentences, conjunctions, punctuation, editing, and vocabulary refinement',
    image: {
      src: '/curriculum/grade9/isixhosa/term3/language-structures/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners learning complex sentence structures and advanced punctuation',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 Language Structures focuses on <strong>complex sentences, conjunctions, punctuation,</strong>{' '}
          editing, and vocabulary refinement.
        </p>
        <p className="text-slate-600">
          Learners refine sentence structure and edit work carefully for clarity and correctness.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A complex sentence contains...',
    options: ['one independent clause and one or more dependent clauses', 'only simple verbs', 'no punctuation', 'only questions'],
    answer: 'one independent clause and one or more dependent clauses',
    explanation: 'Complex sentences show relationships between ideas by combining clauses.',
  },
  {
    prompt: 'Subordinating conjunctions like "because" and "although" are used to...',
    options: ['join a dependent clause to an independent clause', 'join only nouns', 'replace adjectives', 'add emphasis'],
    answer: 'join a dependent clause to an independent clause',
    explanation: 'Subordinating conjunctions establish logical relationships between ideas.',
  },
  {
    prompt: 'Editing your own work helps you...',
    options: ['catch errors and improve clarity before submitting', 'waste time', 'introduce new mistakes', 'ignore grammar'],
    answer: 'catch errors and improve clarity before submitting',
    explanation: 'Self-editing demonstrates care for your writing\'s quality.',
  },
  {
    prompt: 'Punctuation marks like semicolons (;) are used to...',
    options: ['connect two independent clauses or separate items in a list', 'replace periods always', 'confuse readers', 'add decoration'],
    answer: 'connect two independent clauses or separate items in a list',
    explanation: 'Correct punctuation clarifies relationships between ideas.',
  },
  {
    prompt: 'Vocabulary refinement means...',
    options: ['choosing more precise and appropriate words for your meaning', 'using the longest words possible', 'repeating the same words', 'using slang always'],
    answer: 'choosing more precise and appropriate words for your meaning',
    explanation: 'Precise vocabulary conveys meaning more effectively and sophisticatedly.',
  },
  {
    prompt: 'When combining sentences, you should...',
    options: ['use conjunctions or subordinators to connect related ideas clearly', 'always join everything randomly', 'split all sentences into fragments', 'use run-ons'],
    answer: 'use conjunctions or subordinators to connect related ideas clearly',
    explanation: 'Thoughtful combining improves flow and shows sophisticated writing.',
  },
  {
    prompt: 'An error in parallel structure occurs when...',
    options: ['items in a series do not follow the same grammatical form', 'all sentences are correct', 'there are no conjunctions', 'words rhyme'],
    answer: 'items in a series do not follow the same grammatical form',
    explanation: 'Parallel structure creates balance and clarity in lists and comparisons.',
  },
  {
    prompt: 'Choosing the right word form (e.g., "its" vs. "it\'s") shows...',
    options: ['careful editing and attention to detail', 'that spelling does not matter', 'carelessness', 'no importance at all'],
    answer: 'careful editing and attention to detail',
    explanation: 'Correct word choice demonstrates professionalism and clarity.',
  },
];

const LanguageStructuresT3 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Complex sentences, conjunctions, punctuation, editing, and vocabulary refinement"
    learnSteps={learnSteps}
    task="gr9-language-structures-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT3;
