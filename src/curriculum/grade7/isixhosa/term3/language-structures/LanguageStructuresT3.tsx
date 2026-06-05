import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Connect ideas using conjunctions and correct concords',
    image: {
      src: '/curriculum/grade7/xho/term3/language-structures/diagram.webp',
      alt: 'Grade 7 learners linking isiXhosa sentences with connectors and punctuation',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Term 3, language structures focus on <strong>connectors, conjunctions, past and future tense,</strong>{' '}
          concords, and punctuation to make writing more fluent.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-semibold text-sky-800">Linking words</p>
            <p className="text-slate-600">Use ngoba, kodwa, kwaye to connect ideas smoothly.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-semibold text-emerald-800">Tense and concord</p>
            <p className="text-slate-600">Keep agreement and time forms consistent in a sentence.</p>
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

const bank: CapsItem[] = [
  {
    prompt: 'Choose the best connector for cause: “Ndafunda ___ ndifuna amanqaku aphezulu.”',
    options: ['kuba', 'kodwa', 'okanye', 'nangona'],
    answer: 'kuba',
    explanation: 'Kuba introduces a reason or cause.',
  },
  {
    prompt: 'Which conjunction shows contrast?',
    options: ['kodwa', 'kwaye', 'kuba', 'ukuze'],
    answer: 'kodwa',
    explanation: 'Kodwa means but and contrasts ideas.',
  },
  {
    prompt: 'Pick the correct past tense sentence.',
    options: ['Sabhala uvavanyo izolo.', 'Sibhala uvavanyo ngoku.', 'Siza kubhala uvavanyo ngomso.', 'Sibhalele uvavanyo rhoqo ngomso.'],
    answer: 'Sabhala uvavanyo izolo.',
    explanation: 'Sabhala and izolo show past action.',
  },
  {
    prompt: 'Pick the correct future tense sentence.',
    options: ['Baza kuthetha ngomso.', 'Bathetha ngoku.', 'Bethethile izolo.', 'Bathetha izolo.'],
    answer: 'Baza kuthetha ngomso.',
    explanation: 'Baza ... ngomso indicates future action.',
  },
  {
    prompt: 'Which sentence uses concord correctly?',
    options: ['Abantwana bayacula.', 'Abantwana uyacula.', 'Abantwana ndiyacula.', 'Abantwana siyacula yena.'],
    answer: 'Abantwana bayacula.',
    explanation: 'Plural subject takes plural concord baya-.',
  },
  {
    prompt: 'Which punctuation best separates two linked clauses?',
    options: [',', '?', '"', '!?!'],
    answer: ',',
    explanation: 'A comma often separates clauses joined by connectors.',
  },
  {
    prompt: 'Complete: “Ndiyafunda, ___ ndifuna ukuphumelela.”',
    options: ['kwaye', 'okanye', 'nokuba', 'kodwa hayi'],
    answer: 'kwaye',
    explanation: 'Kwaye adds related information.',
  },
  {
    prompt: 'Why use connectors in paragraph writing?',
    options: ['to make ideas flow logically', 'to remove meaning', 'to avoid full sentences', 'to hide the topic'],
    answer: 'to make ideas flow logically',
    explanation: 'Connectors create cohesion between thoughts.',
  },
];

const LanguageStructuresT3 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Connectors, conjunctions, tense control, concords, and punctuation"
    learnSteps={learnSteps}
    task="gr7-language-structures-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT3;
