import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Build questions clearly in isiXhosa',
    image: {
      src: '/curriculum/grade6/xho/term2/language-structures-t2/diagram.webp',
      alt: 'word cards showing question forms negatives adjectives possessives and tense',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Language Structures and Conventions help you ask and answer correctly. In Term 2, practise question
          forms, negatives, adjectives, possessives, and present or past tense.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Ngubani?</p>
            <p className="text-slate-600">asks about a person: who?</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Phi?</p>
            <p className="text-slate-600">asks about place: where?</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Nini?</p>
            <p className="text-slate-600">asks about time: when?</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Intoni?</p>
            <p className="text-slate-600">asks about things: what?</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use negatives, adjectives, and possessives correctly',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Accurate sentence control means choosing the correct form. Negatives change the verb, adjectives add
          detail, and possessives show ownership.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Negative form</p>
            <p className="text-slate-600">example: Andityi isonka</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Adjective</p>
            <p className="text-slate-600">describes size, colour, or quality</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Possessive</p>
            <p className="text-slate-600">example: incwadi yam</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <p className="font-bold text-fuchsia-700">Agreement</p>
            <p className="text-slate-600">keep words matching the sentence meaning</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Keep present and past tense consistent',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Tense shows time in a sentence. Keep one tense in a sentence unless you clearly show a time change.
          This makes speaking and writing accurate and easy to follow.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Present tense</p>
            <p className="text-slate-600">happening now: Ndiyafunda</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <p className="font-bold text-orange-700">Past tense</p>
            <p className="text-slate-600">already happened: Ndifundile</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <p className="font-bold text-teal-700">Question mark</p>
            <p className="text-slate-600">end direct questions correctly</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <p className="font-bold text-yellow-700">Sentence check</p>
            <p className="text-slate-600">read again for correct form and meaning</p>
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
          Practice these question and control words to strengthen negatives, question forms, and sentence accuracy.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Umbuzo"} phonetic={"[um'buːzo]"} meaning={"Question"} lang="xh" />
          <PronunciationPlayer word={"Ngubani?"} phonetic={"[ŋu'baːni]"} meaning={"Who?"} lang="xh" />
          <PronunciationPlayer word={"Phi?"} phonetic={"[pʰi]"} meaning={"Where?"} lang="xh" />
          <PronunciationPlayer word={"Nini?"} phonetic={"[ni'ni]"} meaning={"When?"} lang="xh" />
          <PronunciationPlayer word={"Kutheni?"} phonetic={"[ku'tʰɛni]"} meaning={"Why?"} lang="xh" />
          <PronunciationPlayer word={"Hayi"} phonetic={"[hayi]"} meaning={"No / not"} lang="xh" />
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which question word asks “who?” in isiXhosa?',
    options: ['Ngubani?', 'Phi?', 'Nini?', 'Kutheni?'],
    answer: 'Ngubani?',
    explanation: 'Ngubani? is used to ask about a person.',
  },
  {
    prompt: 'Which sentence is in the negative form?',
    options: ['Andidlali ibhola.', 'Ndidlala ibhola.', 'Sidlala ibhola.', 'Badlala ibhola.'],
    answer: 'Andidlali ibhola.',
    explanation: 'The prefix andi- shows a negative meaning: I do not play.',
  },
  {
    prompt: 'In “Imoto ebomvu imile,” which word is an adjective?',
    options: ['ebomvu', 'imoto', 'imile', 'kwaye'],
    answer: 'ebomvu',
    explanation: 'Ebomvu describes the noun (car), so it is the adjective.',
  },
  {
    prompt: 'Which phrase shows possession meaning “my book”?',
    options: ['incwadi yam', 'incwadi yakho', 'incwadi yakhe', 'incwadi yethu'],
    answer: 'incwadi yam',
    explanation: 'Yam is the possessive form for “my.”',
  },
  {
    prompt: 'Which sentence is in present tense?',
    options: ['Ndiyafunda ngoku.', 'Izolo ndifundile.', 'Ndiza kufunda ngomso.', 'Ndfunde ngeCawe.'],
    answer: 'Ndiyafunda ngoku.',
    explanation: 'Ndiyafunda ngoku shows an action happening now.',
  },
  {
    prompt: 'Which sentence is in past tense?',
    options: ['Izolo ndidlale ibhola.', 'Namhlanje ndidlala ibhola.', 'Ngomso ndiza kudlala ibhola.', 'Ndiyadlala ibhola ngoku.'],
    answer: 'Izolo ndidlale ibhola.',
    explanation: 'Izolo and ndidlale show that the action already happened.',
  },
  {
    prompt: 'Which question is punctuated correctly?',
    options: ['Uhlala phi?', 'Uhlala phi.', 'Uhlala phi!', 'Uhlala phi,'],
    answer: 'Uhlala phi?',
    explanation: 'Direct questions should end with a question mark.',
  },
  {
    prompt: 'Choose the correct negative form of “Nditya isonka.”',
    options: ['Andityi isonka.', 'Nditya isonka.', 'Sitya isonka.', 'Ndithe isonka.'],
    answer: 'Andityi isonka.',
    explanation: 'Andityi changes the sentence to “I do not eat bread.”',
  },
  {
    prompt: 'Why is tense consistency important in one sentence?',
    options: ['It keeps the time meaning clear', 'It makes words look longer', 'It removes the subject', 'It changes questions into commands'],
    answer: 'It keeps the time meaning clear',
    explanation: 'Consistent tense helps the listener or reader understand when the action happens.',
  },
];

const LanguageStructuresT2 = () => (
  <CapsSubjectTopic
    title="Language Structures & Conventions"
    subtitle="Question forms, negatives, adjectives, possessives, and tense control"
    learnSteps={learnSteps}
    task="language-structures-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LanguageStructuresT2;
