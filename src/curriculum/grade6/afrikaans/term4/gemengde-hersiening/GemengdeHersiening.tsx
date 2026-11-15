import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise language building blocks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mixed revision practises vocabulary, tenses, plurals, adjectives and meaning.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-2xl font-bold text-indigo-600">
          <span className="inline-flex items-center">woordeskat <SpeakButton text="woordeskat" /></span>
          <span className="inline-flex items-center">meervoude <SpeakButton text="meervoude" /></span>
          <span className="inline-flex items-center">tye <SpeakButton text="tye" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Watch the time words',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Time words help you choose present, past or future tense.
        </p>
        <p className="text-xl text-slate-700">
          <strong>Vandag</strong> speel ek. <strong>Gister</strong> het ek gespeel. <strong>Môre</strong> sal ek speel.
        </p>
      </div>
    ),
  },
  {
    title: 'Meaning in context',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Read the whole question. A synonym has a similar meaning, while a preposition shows position.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-2xl font-bold text-indigo-600">
          <span className="inline-flex items-center">sinoniem <SpeakButton text="sinoniem" /></span>
          <span className="inline-flex items-center">voorsetsel <SpeakButton text="voorsetsel" /></span>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say singular and plural forms aloud to notice the sound changes that happen in meervoude.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"boek / boeke"} phonetic={"[buk / ˈbukə]"} meaning={"book / books"} lang="af" />
          <PronunciationPlayer word={"hond / honde"} phonetic={"[hɔnt / ˈhɔndə]"} meaning={"dog / dogs"} lang="af" />
          <PronunciationPlayer word={"kind / kinders"} phonetic={"[kənt / ˈkəndərs]"} meaning={"child / children"} lang="af" />
          <PronunciationPlayer word={"huis / huise"} phonetic={"[ɦœys / ˈɦœysə]"} meaning={"house / houses"} lang="af" />
          <PronunciationPlayer word={"dag / dae"} phonetic={"[dax / dɑːi]"} meaning={"day / days"} lang="af" />
          <PronunciationPlayer word={"blom / blomme"} phonetic={"[blɔm / ˈblɔmə]"} meaning={"flower / flowers"} lang="af" />
        </div>
      </div>
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die Afrikaans vir 'window'.",
    options: ['venster', 'deur', 'tafel', 'stoel'],
    answer: 'venster',
    explanation: "'Venster' means 'window'.",
  },
  {
    prompt: 'Vul die teenwoordige tyd in: Hulle ___ elke dag skool toe. (walk)',
    options: ['stap', 'het gestap', 'sal stap', 'stappe'],
    answer: 'stap',
    explanation: "'Elke dag' uses the simple present tense here.",
  },
  {
    prompt: 'Verlede tyd: Ek speel sokker. Gister ___ ek sokker ___.',
    options: ['het ... gespeel', 'het ... speel', 'sal ... speel', 'is ... gespeel'],
    answer: 'het ... gespeel',
    explanation: "Past tense uses 'het ... gespeel': Gister het ek sokker gespeel.",
  },
  {
    prompt: 'Toekomende tyd: Môre ___ ek my boek lees.',
    options: ['sal', 'het', 'is', 'was'],
    answer: 'sal',
    explanation: "'Môre' points to the future, so use 'sal'.",
  },
  {
    prompt: 'Kies die korrekte meervoud: een boek, twee ___.',
    options: ['boeke', 'boeks', 'boekes', 'boek'],
    answer: 'boeke',
    explanation: "The plural of 'boek' is 'boeke'.",
  },
  {
    prompt: 'Kies die byvoeglike naamwoord: Die seun is ___. (friendly)',
    options: ['vriendelik', 'vinnig', 'honger', 'klein'],
    answer: 'vriendelik',
    explanation: "'Vriendelik' means 'friendly'.",
  },
  {
    prompt: 'Die kat sit ___ die stoel. (under)',
    options: ['onder', 'op', 'langs', 'voor'],
    answer: 'onder',
    explanation: "'Onder' means 'under'.",
  },
  {
    prompt: "Kies 'n sinoniem vir 'vinnig'.",
    options: ['gou', 'stadig', 'moeg', 'stil'],
    answer: 'gou',
    explanation: "'Gou' can mean quickly, similar to 'vinnig'.",
  },
  {
    prompt: 'Kies die regte woord: Die ___ bal lê in die tuin. (red)',
    options: ['rooi', 'groen', 'blou', 'wit'],
    answer: 'rooi',
    explanation: "'Rooi' means 'red'.",
  },
  {
    prompt: "Verlede tyd: Sy eet 'n appel. Gister ___ sy 'n appel ___.",
    options: ['het ... geëet', 'sal ... eet', 'eet ... nou', 'is ... eet'],
    answer: 'het ... geëet',
    explanation: "The past tense of 'eet' is 'het ... geëet'.",
  },
];

const GemengdeHersiening = () => (
  <AfrikaansTopic title="Gemengde Hersiening" subtitle="Mixed revision" learnSteps={learnSteps} task="gemengde-hersiening" bank={bank} speak="options" />
);

export default GemengdeHersiening;
