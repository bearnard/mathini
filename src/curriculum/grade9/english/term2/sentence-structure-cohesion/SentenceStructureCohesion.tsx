import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Strengthen sentences through combining and variety',
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
    options: ['one independent clause with a subject and a verb', 'a sentence that is always very short', 'a sentence that has two or more clauses joined', 'a sentence that is made of nouns and adjectives'],
    answer: 'one independent clause with a subject and a verb',
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
    options: ['one independent clause and one or more dependent clauses', 'two independent clauses joined by "and"', 'a single clause with a subject and a verb', 'a question that has a subject but no verb'],
    answer: 'one independent clause and one or more dependent clauses',
    explanation: 'Complex sentences show relationships between ideas of different importance.',
  },
  {
    prompt: 'What does pronoun reference mean?',
    options: ['the link between a pronoun and the noun it replaces', 'the use of nouns only, with no pronouns at all', 'the choice to avoid pronouns in formal writing', 'the repeating of the same noun in each sentence'],
    answer: 'the link between a pronoun and the noun it replaces',
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
    options: ['to show how words relate in time, space or direction', 'to describe a noun by giving more detail about it', 'to replace a verb in a long sentence', 'to join two clauses in a compound sentence'],
    answer: 'to show how words relate in time, space or direction',
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
    options: ['It shows how ideas relate and improves the flow.', 'It makes the writing longer and more detailed.', 'It cuts out the meaning of the shorter sentences.', 'It has no effect on how easily the text is read.'],
    answer: 'It shows how ideas relate and improves the flow.',
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
