import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise pronouns and concords',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Language Structures in Term 4 revise the year&apos;s grammar foundations: pronouns, concords, tenses,
          punctuation, and spelling.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Pronouns</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">mna</span>
              <span className="rounded-full bg-white px-3 py-1">wena</span>
              <span className="rounded-full bg-white px-3 py-1">thina</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Concords</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">umfundi uyafunda</span>
              <span className="rounded-full bg-white px-3 py-1">abafundi bayafunda</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Agreement</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">subject + verb</span>
              <span className="rounded-full bg-white px-3 py-1">match forms</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Sentence check</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">meaning</span>
              <span className="rounded-full bg-white px-3 py-1">accuracy</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Consolidate tense revision',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Learners practise present, past, and future tense forms in familiar contexts so grammar choices stay accurate
          in exams.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Present</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">ndiyadlala</span>
              <span className="rounded-full bg-white px-3 py-1">bayacula</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Past</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">ndidlalile</span>
              <span className="rounded-full bg-white px-3 py-1">baculile</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Future</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">ndiza kudlala</span>
              <span className="rounded-full bg-white px-3 py-1">baza kucula</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Time clues</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">namhlanje</span>
              <span className="rounded-full bg-white px-3 py-1">izolo</span>
              <span className="rounded-full bg-white px-3 py-1">ngomso</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Polish punctuation and spelling',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Final revision includes capital letters, full stops, question marks, and correct spelling in short sentences.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Capital letters</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">sentence start</span>
              <span className="rounded-full bg-white px-3 py-1">names</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">End marks</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">.</span>
              <span className="rounded-full bg-white px-3 py-1">?</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Spelling</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">check vowels</span>
              <span className="rounded-full bg-white px-3 py-1">check prefixes</span>
            </div>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <strong className="text-yellow-800">Proofread</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-yellow-700">
              <span className="rounded-full bg-white px-3 py-1">read aloud</span>
              <span className="rounded-full bg-white px-3 py-1">fix one error at a time</span>
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
          Keep these core grammar words active in memory while revising forms, tense control, and punctuation.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Isibizo"} phonetic={"[isi'biːzo]"} meaning={"Noun"} lang="xh" />
          <PronunciationPlayer word={"Isimelabizo"} phonetic={"[isi.mɛla'biːzo]"} meaning={"Pronoun"} lang="xh" />
          <PronunciationPlayer word={"Ixesha"} phonetic={"[i'kʰeʃa]"} meaning={"Tense / time"} lang="xh" />
          <PronunciationPlayer word={"Kwaye"} phonetic={"[kwa'jɛ]"} meaning={"And"} lang="xh" />
          <PronunciationPlayer word={"Kodwa"} phonetic={"[kɔ'dwa]"} meaning={"But"} lang="xh" />
          <PronunciationPlayer word={"Isiphumlisi"} phonetic={"[isi.pʰum'liːsi]"} meaning={"Punctuation mark"} lang="xh" />
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which word is a pronoun?',
    options: ['thina', 'isikolo', 'incwadi', 'itafile'],
    answer: 'thina',
    explanation: '“Thina” means “we/us,” so it is a pronoun.',
  },
  {
    prompt: 'Choose the sentence with correct concord agreement.',
    options: ['Umfundi uyafunda.', 'Umfundi bayafunda.', 'Abafundi uyafunda.', 'Abafundi ndiyafunda.'],
    answer: 'Umfundi uyafunda.',
    explanation: 'Singular subject “umfundi” matches with “uya-” in the verb form.',
  },
  {
    prompt: 'Which sentence is in the present tense?',
    options: ['Ndiyadlala ngoku.', 'Ndidlalile izolo.', 'Ndiza kudlala ngomso.', 'Ndidlale kwiveki ezayo.'],
    answer: 'Ndiyadlala ngoku.',
    explanation: '“Ndiyadlala ngoku” describes an action happening now (present tense).',
  },
  {
    prompt: 'Which sentence best shows past tense?',
    options: ['Baculile emsithweni izolo.', 'Baza kucula ngomso.', 'Bayacula ngoku.', 'Bacula yonke imihla ngoku.'],
    answer: 'Baculile emsithweni izolo.',
    explanation: '“Baculile” with “izolo” indicates completed action in the past.',
  },
  {
    prompt: 'Which sentence best shows future tense?',
    options: ['Ndiza kufunda ngomso.', 'Ndifunda ngoku.', 'Ndifundile izolo.', 'Ndafunda kanye namhlanje kusasa.'],
    answer: 'Ndiza kufunda ngomso.',
    explanation: '“Ndiza … ngomso” expresses a future action.',
  },
  {
    prompt: 'Which punctuation mark should end a question sentence?',
    options: ['?', '.', ',', ':'],
    answer: '?',
    explanation: 'Questions end with a question mark.',
  },
  {
    prompt: 'Which sentence starts with a correct capital letter?',
    options: ['USipho uya esikolweni.', 'uSipho uya esikolweni.', 'usipho uya esikolweni.', 'USIPHO uya esikolweni ngaphandle kwezizathu.'],
    answer: 'USipho uya esikolweni.',
    explanation: 'Proper names begin with a capital letter in normal sentence case.',
  },
  {
    prompt: 'What is the best proofreading strategy?',
    options: ['Read each sentence and fix one error at a time', 'Ignore punctuation completely', 'Change every word to make it longer', 'Delete all full stops and commas'],
    answer: 'Read each sentence and fix one error at a time',
    explanation: 'Careful, step-by-step proofreading helps catch grammar and spelling mistakes.',
  },
  {
    prompt: 'Why is spelling revision important in Term 4?',
    options: ['It improves accuracy for year-end assessment', 'It replaces all reading work', 'It means punctuation is no longer needed', 'It removes the need for sentence meaning'],
    answer: 'It improves accuracy for year-end assessment',
    explanation: 'Correct spelling supports clear communication and exam readiness.',
  },
  {
    prompt: 'Which option is part of Language Structures & Conventions revision?',
    options: ['Pronouns, tenses, concords, punctuation, spelling', 'Only drawing and colouring activities', 'Only mapwork symbols and directions', 'Only sport movement patterns'],
    answer: 'Pronouns, tenses, concords, punctuation, spelling',
    explanation: 'These language elements are the core grammar-consolidation focus for Term 4.',
  },
];

const LanguageStructuresT4 = () => (
  <CapsSubjectTopic
    title="Language Structures & Conventions"
    subtitle="Pronouns, tenses, concords, punctuation, and spelling revision"
    learnSteps={learnSteps}
    task="language-structures-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LanguageStructuresT4;
