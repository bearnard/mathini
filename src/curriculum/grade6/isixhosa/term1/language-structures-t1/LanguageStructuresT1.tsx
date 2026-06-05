import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Use personal pronouns and subject concords',
    image: {
      src: '/curriculum/grade6/xho/term1/language-structures-t1/diagram.webp',
      alt: 'Grade 6 learners practising isiXhosa pronouns and sentence patterns on classroom cards',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Language structures help learners build correct sentences. Begin with personal pronouns and common subject
          concord patterns used in present-tense statements.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Pronouns</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">mna</span>
              <span className="rounded-full bg-white px-3 py-1">wena</span>
              <span className="rounded-full bg-white px-3 py-1">yena</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Subject concords</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">ndi-</span>
              <span className="rounded-full bg-white px-3 py-1">u-</span>
              <span className="rounded-full bg-white px-3 py-1">ba-</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Sentence pattern</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">subject + verb</span>
              <span className="rounded-full bg-white px-3 py-1">clear meaning</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Agreement</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">match subject</span>
              <span className="rounded-full bg-white px-3 py-1">correct form</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Work with singular, plural, and present tense',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Learners must notice if words are singular or plural, and then choose the correct present-tense form in
          simple classroom and family sentences.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Singular</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">one person</span>
              <span className="rounded-full bg-white px-3 py-1">one object</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Plural</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">more than one</span>
              <span className="rounded-full bg-white px-3 py-1">group form</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Present tense</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">happens now</span>
              <span className="rounded-full bg-white px-3 py-1">daily actions</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Grammar checks</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">gap-fill</span>
              <span className="rounded-full bg-white px-3 py-1">edit errors</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Apply punctuation conventions correctly',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Correct punctuation supports meaning. Start sentences with capital letters and end with the right punctuation
          mark for statements and questions.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Capital letters</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">sentence start</span>
              <span className="rounded-full bg-white px-3 py-1">names</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Full stop</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">end statement</span>
              <span className="rounded-full bg-white px-3 py-1">clear finish</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Question mark</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">ask a question</span>
              <span className="rounded-full bg-white px-3 py-1">who/what prompt</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Editing</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">spot mistakes</span>
              <span className="rounded-full bg-white px-3 py-1">correct quickly</span>
            </div>
          </div>
        </div>
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
    prompt: 'Which option is a personal pronoun?',
    options: ['mna', 'isikolo', 'itafile', 'incwadi'],
    answer: 'mna',
    explanation: 'mna means “I/me” and is a pronoun.',
  },
  {
    prompt: 'Which subject concord is commonly used with “mna” in present tense?',
    options: ['ndi-', 'ba-', 'zi-', 'lu-'],
    answer: 'ndi-',
    explanation: 'Many first-person singular forms use the ndi- concord.',
  },
  {
    prompt: 'Which sentence shows singular meaning?',
    options: ['Umfundi ufunda incwadi.', 'Abafundi bafunda iincwadi.', 'Bona bafunda kunye.', 'Sifunda eklasini.'],
    answer: 'Umfundi ufunda incwadi.',
    explanation: 'Umfundi refers to one learner (singular).',
  },
  {
    prompt: 'Which sentence shows plural meaning?',
    options: ['Abafundi bafunda iincwadi.', 'Umama upheka namhlanje.', 'Ndibhala umsebenzi.', 'Utata uyasebenza.'],
    answer: 'Abafundi bafunda iincwadi.',
    explanation: 'Abafundi refers to more than one learner (plural).',
  },
  {
    prompt: 'Present tense is used for actions that…',
    options: ['happen now or regularly', 'happened long ago only', 'will happen next year only', 'never happen'],
    answer: 'happen now or regularly',
    explanation: 'Present tense describes current or habitual actions.',
  },
  {
    prompt: 'Which sentence starts correctly with a capital letter?',
    options: ['Ndifunda isiXhosa.', 'ndifunda isiXhosa.', 'ndifunda isixhosa.', 'ndifunda IsiXhosa.'],
    answer: 'Ndifunda isiXhosa.',
    explanation: 'A sentence should start with a capital letter.',
  },
  {
    prompt: 'Choose the sentence with correct ending punctuation.',
    options: ['Uhlala phi?', 'Uhlala phi.', 'Uhlala phi,', 'Uhlala phi!'],
    answer: 'Uhlala phi?',
    explanation: 'A direct question ends with a question mark.',
  },
  {
    prompt: 'What is the best way to improve sentence accuracy?',
    options: ['Edit for concord and punctuation', 'Add random words', 'Remove all verbs', 'Use no capitals ever'],
    answer: 'Edit for concord and punctuation',
    explanation: 'Editing helps fix grammar and punctuation errors.',
  },
  {
    prompt: 'Which pair is correctly matched for grammar meaning?',
    options: ['Singular = one; plural = many', 'Singular = many; plural = one', 'Both mean exactly the same', 'Neither is used in sentences'],
    answer: 'Singular = one; plural = many',
    explanation: 'Singular and plural show number agreement.',
  },
];

const LanguageStructuresT1 = () => (
  <CapsSubjectTopic
    title="Language Structures and Conventions"
    subtitle="Pronouns, concords, number forms, tense, and punctuation"
    learnSteps={learnSteps}
    task="language-structures-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LanguageStructuresT1;
