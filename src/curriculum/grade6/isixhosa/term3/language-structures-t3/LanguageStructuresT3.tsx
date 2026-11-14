import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Future tense, conjunctions, and connectors',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Language structures in Term 3 help learners build clearer sentences. Focus areas include future tense,
          conjunctions, and connectors.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Future tense</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">will happen</span>
              <span className="rounded-full bg-white px-3 py-1">next action</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Conjunctions</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">and</span>
              <span className="rounded-full bg-white px-3 py-1">but</span>
              <span className="rounded-full bg-white px-3 py-1">because</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Connectors</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">then</span>
              <span className="rounded-full bg-white px-3 py-1">after that</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Sentence variety</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">different openings</span>
              <span className="rounded-full bg-white px-3 py-1">better flow</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Question words and sentence expansion',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Question words guide meaning in conversations and reading tasks. Expanding a sentence with extra detail
          makes writing more precise.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Who</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">person</span>
              <span className="rounded-full bg-white px-3 py-1">character</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Where</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">location</span>
              <span className="rounded-full bg-white px-3 py-1">place detail</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">When</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">time</span>
              <span className="rounded-full bg-white px-3 py-1">sequence</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Why</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">reason</span>
              <span className="rounded-full bg-white px-3 py-1">cause</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Using noun classes and agreement carefully',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Correct agreement supports meaning in isiXhosa SAL. Learners practise matching words in a sentence and
          checking grammar choices in context.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Noun class</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">grouping nouns</span>
              <span className="rounded-full bg-white px-3 py-1">agreement pattern</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Concords</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">word matching</span>
              <span className="rounded-full bg-white px-3 py-1">correct form</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Error check</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">spot mistakes</span>
              <span className="rounded-full bg-white px-3 py-1">correct sentence</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Meaning link</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">clear grammar</span>
              <span className="rounded-full bg-white px-3 py-1">clear message</span>
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
          Say these linking and time words aloud to make sentence building smoother and more accurate.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Kwaye"} phonetic={"[kwa'jɛ]"} meaning={"And"} lang="xh" />
          <PronunciationPlayer word={"Kodwa"} phonetic={"[kɔ'dwa]"} meaning={"But"} lang="xh" />
          <PronunciationPlayer word={"Ngoko"} phonetic={"[ŋɔ'kɔ]"} meaning={"So / therefore"} lang="xh" />
          <PronunciationPlayer word={"Xa"} phonetic={"[ksa]"} meaning={"When / if"} lang="xh" />
          <PronunciationPlayer word={"Namhlanje"} phonetic={"[nam'ɬaɲɛ]"} meaning={"Today"} lang="xh" />
          <PronunciationPlayer word={"Izolo"} phonetic={"[i'zɔlɔ]"} meaning={"Yesterday"} lang="xh" />
          <PronunciationPlayer word={"Ngomso"} phonetic={"[ŋɔm'sɔ]"} meaning={"Tomorrow"} lang="xh" />
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which sentence shows future tense?',
    options: [
      'We will visit the museum tomorrow',
      'We visited the museum yesterday',
      'We are at the museum now',
      'We were visiting when it rained',
    ],
    answer: 'We will visit the museum tomorrow',
    explanation: 'Future tense describes an action that has not happened yet.',
  },
  {
    prompt: 'What is the main job of a conjunction?',
    options: [
      'To join words or ideas in a sentence',
      'To replace all verbs in a paragraph',
      'To show only punctuation marks',
      'To remove sentence meaning',
    ],
    answer: 'To join words or ideas in a sentence',
    explanation: 'Conjunctions connect words, clauses, or complete ideas.',
  },
  {
    prompt: 'Which connector best shows sequence?',
    options: ['Then', 'Although', 'Because', 'However'],
    answer: 'Then',
    explanation: '“Then” signals what happens next in order.',
  },
  {
    prompt: 'Which question word asks for a reason?',
    options: ['Why', 'Who', 'Where', 'When'],
    answer: 'Why',
    explanation: '“Why” asks about cause or reason.',
  },
  {
    prompt: 'Choose the sentence with a clear connector.',
    options: [
      'We finished homework, then we played outside',
      'We finished homework outside because then',
      'Then because homework we',
      'Outside we homework then because',
    ],
    answer: 'We finished homework, then we played outside',
    explanation: 'It uses a connector to show logical sequence between actions.',
  },
  {
    prompt: 'Why is sentence variety important?',
    options: [
      'It makes writing smoother and clearer to read',
      'It means repeating the same opener every time',
      'It removes all linking words from writing',
      'It makes ideas less understandable',
    ],
    answer: 'It makes writing smoother and clearer to read',
    explanation: 'Varied sentence openings improve flow and reader interest.',
  },
  {
    prompt: 'In grammar tasks, noun class work helps learners...',
    options: [
      'Match word forms correctly for agreement',
      'Ignore sentence structure completely',
      'Use any random word ending',
      'Write without checking meaning',
    ],
    answer: 'Match word forms correctly for agreement',
    explanation: 'Noun classes guide agreement patterns in the sentence.',
  },
  {
    prompt: 'Which sentence best combines ideas with a conjunction?',
    options: [
      'She read the poster and answered the question',
      'She read poster question answered',
      'And she question poster',
      'Poster answered read she',
    ],
    answer: 'She read the poster and answered the question',
    explanation: 'The conjunction “and” links two actions clearly.',
  },
  {
    prompt: 'What should you do in a tense change item?',
    options: [
      'Keep the meaning but change the verb form correctly',
      'Change the topic to a new idea',
      'Delete all verbs from the sentence',
      'Only add punctuation marks',
    ],
    answer: 'Keep the meaning but change the verb form correctly',
    explanation: 'Tense-change tasks test accurate verb form while preserving meaning.',
  },
];

const LanguageStructuresT3 = () => (
  <CapsSubjectTopic
    title="Language Structures and Conventions"
    subtitle="Applying tense, connectors, question words, and agreement patterns"
    learnSteps={learnSteps}
    task="language-structures-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LanguageStructuresT3;
