import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Core grammar patterns',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Revise plurals, adjectives and verbs in present, past and future tense.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">meervoude <SpeakButton text="meervoude" /></span>
          <span className="inline-flex items-center">werkwoorde <SpeakButton text="werkwoorde" /></span>
          <span className="inline-flex items-center">byvoeglike naamwoorde <SpeakButton text="byvoeglike naamwoorde" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Tense clues',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Time words help you choose the right tense.
        </p>
        <p className="text-xl text-slate-700">
          Vandag = present, gister = past, môre = future.
        </p>
      </div>
    ),
  },
  {
    title: 'Idioms and meaning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Idioms are fixed phrases. Learn the meaning, not only the words.
        </p>
        <p className="text-xl font-semibold text-slate-700">
          “Die kat uit die boom kyk” means to wait and see.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these noun and article words aloud so grammar labels connect with familiar examples.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"die"} phonetic={"[di]"} meaning={"the"} lang="af" />
          <PronunciationPlayer word={"'n"} phonetic={"[ə]"} meaning={"a / an"} lang="af" />
          <PronunciationPlayer word={"boek"} phonetic={"[buk]"} meaning={"book"} lang="af" />
          <PronunciationPlayer word={"tafel"} phonetic={"[ˈtɑːfəl]"} meaning={"table"} lang="af" />
          <PronunciationPlayer word={"hond"} phonetic={"[hɔnt]"} meaning={"dog"} lang="af" />
          <PronunciationPlayer word={"kind"} phonetic={"[kənt]"} meaning={"child"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die korrekte meervoud: een kind, twee ___.",
    options: ['kinders', 'kinde', 'kinds', 'kindere'],
    answer: 'kinders',
    explanation: "'Kind' changes to 'kinders' in the plural.",
  },
  {
    prompt: "Vul die verlede tyd in: Gister ___ ons sokker gespeel.",
    options: ['het', 'sal', 'is', 'was'],
    answer: 'het',
    explanation: "Past tense with an action commonly uses 'het ... ge-'.",
  },
  {
    prompt: "Kies die toekomende tyd: 'Môre ___ ek hard werk.'",
    options: ['sal', 'het', 'is', 'was'],
    answer: 'sal',
    explanation: "'Môre' signals future tense.",
  },
  {
    prompt: "Watter byvoeglike naamwoord pas? 'Die ___ hond hardloop vinnig.'",
    options: ['bruin', 'hardloop', 'hond', 'vinnig'],
    answer: 'bruin',
    explanation: "'Bruin' describes the noun 'hond'.",
  },
  {
    prompt: "Kies die korrekte vorm: 'Ek ___ nou my huiswerk.'",
    options: ['doen', 'het gedoen', 'sal doen', 'gedoen'],
    answer: 'doen',
    explanation: "'Nou' indicates present tense.",
  },
  {
    prompt: "Wat beteken die idioom 'Die kat uit die boom kyk'?",
    options: ['Eers wag en kyk', 'Om hard te hardloop', 'Om iemand te soek', 'Om baie te praat'],
    answer: 'Eers wag en kyk',
    explanation: 'This idiom means to wait before acting.',
  },
  {
    prompt: "Kies die regte sin in die verlede tyd.",
    options: ['Sy het die boek gelees.', 'Sy lees die boek.', 'Sy sal die boek lees.', 'Sy leesde die boek.'],
    answer: 'Sy het die boek gelees.',
    explanation: "Correct past tense form is 'het ... gelees'.",
  },
  {
    prompt: "Kies die woord wat 'n homofoniese valstrik kan wees.",
    options: ['lei/ly', 'boek', 'stoel', 'huis'],
    answer: 'lei/ly',
    explanation: 'Homophones sound alike but have different meanings/spellings.',
  },
];

const WordSentenceGrammar = () => (
  <AfrikaansTopic
    title="Woord- en Sinvlak Grammatika"
    subtitle="Plurals, tense, idioms and grammar in context"
    learnSteps={learnSteps}
    task="gr7-word-sentence-grammar-t1"
    bank={bank}
    speak="options"
  />
);

export default WordSentenceGrammar;
