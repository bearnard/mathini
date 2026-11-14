import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

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

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Repeat these grammar-and-style terms to support complex sentence control and careful editing.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Igatya"} phonetic={"[i'gaːtja]"} meaning={"Clause"} lang="xh" />
          <PronunciationPlayer word={"Isihlanganisi"} phonetic={"[isi.hlaŋga'niːsi]"} meaning={"Conjunction"} lang="xh" />
          <PronunciationPlayer word={"Isimbo"} phonetic={"[i'simbɔ]"} meaning={"Style"} lang="xh" />
          <PronunciationPlayer word={"Ukuhlela"} phonetic={"[uku'ɬɛla]"} meaning={"Editing"} lang="xh" />
          <PronunciationPlayer word={"Isivakalisi"} phonetic={"[isi.vaka'liːsi]"} meaning={"Sentence"} lang="xh" />
          <PronunciationPlayer word={"Isiphumlisi"} phonetic={"[isi.pʰum'liːsi]"} meaning={"Punctuation mark"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A complex sentence contains...',
    options: ['one independent clause and one or more dependent clauses', 'only simple verbs and no links between clauses', 'no punctuation marks of any kind in it', 'only questions that ask the reader for answers'],
    answer: 'one independent clause and one or more dependent clauses',
    explanation: 'Complex sentences show relationships between ideas by combining clauses.',
  },
  {
    prompt: 'Subordinating conjunctions like "because" and "although" are used to...',
    options: ['join a dependent clause to an independent clause', 'join two nouns that are side by side', 'replace adjectives in a sentence', 'add emphasis to a word in a sentence'],
    answer: 'join a dependent clause to an independent clause',
    explanation: 'Subordinating conjunctions establish logical relationships between ideas.',
  },
  {
    prompt: 'Editing your own work helps you...',
    options: ['catch errors and improve clarity before you submit', 'waste time that is needed to write', 'add new mistakes to what you wrote', 'ignore the grammar of your sentences'],
    answer: 'catch errors and improve clarity before you submit',
    explanation: 'Self-editing demonstrates care for your writing\'s quality.',
  },
  {
    prompt: 'Punctuation marks like semicolons (;) are used to...',
    options: ['link two independent clauses or separate items in a list', 'replace full stops in every sentence', 'confuse readers about where sentences end', 'add decoration to a page of writing'],
    answer: 'link two independent clauses or separate items in a list',
    explanation: 'Correct punctuation clarifies relationships between ideas.',
  },
  {
    prompt: 'Vocabulary refinement means...',
    options: ['choosing more precise words for your meaning', 'using the longest words that you can find', 'repeating the same words to keep it simple', 'using slang so that the text sounds fresh'],
    answer: 'choosing more precise words for your meaning',
    explanation: 'Precise vocabulary conveys meaning more effectively and sophisticatedly.',
  },
  {
    prompt: 'When combining sentences, you should...',
    options: ['use conjunctions to link related ideas clearly', 'join everything with the word "and"', 'split every sentence into small fragments', 'run clauses together with no links'],
    answer: 'use conjunctions to link related ideas clearly',
    explanation: 'Thoughtful combining improves flow and shows sophisticated writing.',
  },
  {
    prompt: 'An error in parallel structure occurs when...',
    options: ['items in a series do not share the same form', 'all of the sentences in the text are correct', 'there are no conjunctions between the items', 'the words at the ends of the lines rhyme'],
    answer: 'items in a series do not share the same form',
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
