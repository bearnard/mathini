import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Strengthen sentences through combining and variety',
    image: {
      src: '/curriculum/grade9/english/term2/sentence-structure-cohesion/image1.jpg',
      alt: 'learner combining simple sentences into complex sentences with conjunctions and pronouns',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Simple, compound, and complex sentences each serve different purposes. Combining ideas with conjunctions 
          (and, but, because) and varying sentence length improves flow and prevents repetitive writing.
        </p>
      </div>
    ),
  },
  {
    title: 'Use pronouns and prepositions to improve cohesion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Pronouns (he, she, it, they) replace nouns to avoid repetition and link ideas. Prepositions (in, on, 
          between, during) show relationships between words. Clear pronoun reference ensures readers follow your meaning.
        </p>
      </div>
    ),
  },
  {
    title: 'Maintain consistent tense in writing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Tense consistency helps readers follow a timeline and understand your perspective. Avoid switching between 
          past and present without reason. This strengthens coherence and improves readability of extended responses.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a simple sentence?',
    options: ['one independent clause with subject and verb', 'always very short', 'contains only nouns', 'requires no punctuation'],
    answer: 'one independent clause with subject and verb',
    explanation: 'Simple sentences express one complete thought.',
  },
  {
    prompt: 'Which conjunction is used to show contrast?',
    options: ['but', 'and', 'because', 'so'],
    answer: 'but',
    explanation: '"But" introduces an idea that contrasts with the previous one.',
  },
  {
    prompt: 'A complex sentence contains...',
    options: ['one independent clause and one or more dependent clauses', 'only independent clauses', 'no verbs', 'only questions'],
    answer: 'one independent clause and one or more dependent clauses',
    explanation: 'Complex sentences show relationships between ideas of different importance.',
  },
  {
    prompt: 'What does pronoun reference mean?',
    options: ['the relationship between a pronoun and the noun it replaces', 'using only nouns in writing', 'avoiding pronouns completely', 'repeating nouns constantly'],
    answer: 'the relationship between a pronoun and the noun it replaces',
    explanation: 'Clear pronoun reference prevents confusion about who or what is being discussed.',
  },
  {
    prompt: 'Which sentence has ambiguous pronoun reference?',
    options: ['When Maria met Sarah, she felt nervous.', 'The students read the book and understood the plot.', 'The dogs chased the cat, catching it.', 'Both of them left early.'],
    answer: 'When Maria met Sarah, she felt nervous.',
    explanation: '"She" could refer to either Maria or Sarah, creating confusion.',
  },
  {
    prompt: 'What is the role of a preposition?',
    options: ['to show relationships between words in time, space, or direction', 'to describe adjectives', 'to replace verbs', 'to connect only sentences'],
    answer: 'to show relationships between words in time, space, or direction',
    explanation: 'Prepositions locate and relate elements in a sentence.',
  },
  {
    prompt: 'Which sentence maintains consistent tense?',
    options: ['She walked to the store and bought milk.', 'She walks to the store and bought milk.', 'She walked to the store and buys milk.', 'She walk to the store and bought milk.'],
    answer: 'She walked to the store and bought milk.',
    explanation: 'Both verbs use past tense consistently.',
  },
  {
    prompt: 'How does sentence combining improve writing?',
    options: ['It shows relationships between ideas and improves flow.', 'It makes writing longer only.', 'It removes all meaning.', 'It has no effect on readability.'],
    answer: 'It shows relationships between ideas and improves flow.',
    explanation: 'Combining sentences creates more sophisticated, connected writing.',
  },
];

const SentenceStructureCohesion = () => (
  <CapsSubjectTopic
    title="Sentence Structure and Cohesion"
    subtitle="Pronouns, prepositions, conjunctions, sentence types and tense consistency"
    learnSteps={learnSteps}
    task="gr9-sentence-structure-cohesion-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default SentenceStructureCohesion;
