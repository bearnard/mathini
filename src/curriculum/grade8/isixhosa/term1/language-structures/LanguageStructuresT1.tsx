import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Strengthen sentence control through core grammar revision',
    image: {
      src: '/curriculum/grade8/xho/term1/language-structures/diagram.webp',
      alt: 'Grade 8 learners revising nouns, concords, adjectives, tense, and punctuation rules',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Language Structures in Term 1 focuses on <strong>nouns, concords, adjectives, simple tenses, punctuation,</strong>{' '}
          and spelling.
        </p>
        <p className="text-slate-600">Use grammar in context so reading and writing become more accurate.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say each grammar term aloud so that the language of grammar becomes familiar as well as the concepts.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Isibizo"} phonetic={"[isi'biːzo]"} meaning={"Noun"} lang="xh" />
          <PronunciationPlayer word={"Isimelabizo"} phonetic={"[isi.mɛla'biːzo]"} meaning={"Pronoun"} lang="xh" />
          <PronunciationPlayer word={"Ixesha"} phonetic={"[i'kʰeʃa]"} meaning={"Tense / time"} lang="xh" />
          <PronunciationPlayer word={"Isivakalisi"} phonetic={"[isi.vaka'liːsi]"} meaning={"Sentence"} lang="xh" />
          <PronunciationPlayer word={"Isiphumlisi"} phonetic={"[isi.pʰum'liːsi]"} meaning={"Punctuation mark"} lang="xh" />
          <PronunciationPlayer word={"Isichazi"} phonetic={"[isi'ʧazi]"} meaning={"Adjective / describing word"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which option is a noun?',
    options: ['isikolo', 'funda', 'khawuleza', 'kakhulu'],
    answer: 'isikolo',
    explanation: 'Isikolo names a place and functions as a noun.',
  },
  {
    prompt: 'Choose the sentence with correct singular concord.',
    options: ['Umfundi uyafunda.', 'Umfundi bayafunda.', 'Umfundi siyafunda.', 'Umfundi ndiyafunda.'],
    answer: 'Umfundi uyafunda.',
    explanation: 'Umfundi (singular) takes the u- concord.',
  },
  {
    prompt: 'Which word is an adjective in this list?',
    options: ['mhle', 'isikolo', 'funda', 'izolo'],
    answer: 'mhle',
    explanation: 'Mhle describes a noun, so it is adjectival.',
  },
  {
    prompt: 'Which sentence is in present tense?',
    options: ['Sibhala umsebenzi ngoku.', 'Sibhale umsebenzi izolo.', 'Siza kubhala ngomso.', 'Sasibhala kudala.'],
    answer: 'Sibhala umsebenzi ngoku.',
    explanation: 'Sibhala indicates present action.',
  },
  {
    prompt: 'Pick the correctly punctuated question.',
    options: ['Uhlala phi?', 'Uhlala phi.', 'Uhlala phi,', 'Uhlala phi!'],
    answer: 'Uhlala phi?',
    explanation: 'A direct question ends with a question mark.',
  },
  {
    prompt: 'Which word is spelled correctly?',
    options: ['incwadi', 'incwaddi', 'inkwadii', 'incwady'],
    answer: 'incwadi',
    explanation: 'Incwadi is the correct spelling.',
  },
  {
    prompt: 'Why is concord important in a sentence?',
    options: ['it matches subjects and verbs correctly', 'it removes all punctuation', 'it changes nouns into numbers', 'it avoids sentence meaning'],
    answer: 'it matches subjects and verbs correctly',
    explanation: 'Concord keeps agreement accurate and meaning clear.',
  },
  {
    prompt: 'Editing for language structures helps learners to...',
    options: ['spot and correct grammar errors', 'skip revision tasks', 'avoid reading instructions', 'replace all short words'],
    answer: 'spot and correct grammar errors',
    explanation: 'Editing improves sentence accuracy and clarity.',
  },
];

const LanguageStructuresT1 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Nouns, concords, adjectives, simple tenses, punctuation, and spelling"
    learnSteps={learnSteps}
    task="gr8-language-structures-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT1;
