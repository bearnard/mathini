import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Use het + ge-',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Afrikaans, many past tense sentences use <strong>het</strong> and a verb with <strong>ge-</strong>.
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          Ek het gespeel <SpeakButton text="Ek het gespeel" />
        </span>
      </div>
    ),
  },
  {
    title: 'Change the action word',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Put <strong>het</strong> after the subject, then add <strong>ge-</strong> to the action word.
        </p>
        <div className="space-y-2">
          <p className="text-xl font-semibold text-slate-700">Ek loop → Ek het geloop</p>
          <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
            geloop <SpeakButton text="geloop" />
          </span>
        </div>
      </div>
    ),
  },
  {
    title: 'Know common forms',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Some common words look a little different: <strong>is</strong> becomes <strong>was</strong>, and
          <strong> het</strong> can become <strong>het gehad</strong>.
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          Ek was moeg <SpeakButton text="Ek was moeg" />
        </span>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Use these past-tense words aloud to notice the common het ge- pattern in Afrikaans.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"het"} phonetic={"[hɛt]"} meaning={"has / had (auxiliary)"} lang="af" />
          <PronunciationPlayer word={"ge-"} phonetic={"[χə]"} meaning={"past-tense prefix"} lang="af" />
          <PronunciationPlayer word={"gespeel"} phonetic={"[χəˈspeəl]"} meaning={"played"} lang="af" />
          <PronunciationPlayer word={"gelees"} phonetic={"[χəˈleəs]"} meaning={"read (past)"} lang="af" />
          <PronunciationPlayer word={"geskryf"} phonetic={"[χəˈskrɛif]"} meaning={"wrote / written"} lang="af" />
          <PronunciationPlayer word={"gekook"} phonetic={"[χəˈkuək]"} meaning={"cooked"} lang="af" />
        </div>
      </div>
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Past tense of 'Ek speel' is ...",
    options: ['Ek het gespeel', 'Ek speel', 'Ek sal speel', 'Ek gespeel'],
    answer: 'Ek het gespeel',
    explanation: 'Past tense uses het + ge-: speel → het gespeel.',
  },
  {
    prompt: "Past tense of 'Ons loop skool toe' is ...",
    options: ['Ons het skool toe geloop', 'Ons loop skool toe', 'Ons het loop skool toe', 'Ons sal skool toe loop'],
    answer: 'Ons het skool toe geloop',
    explanation: 'Loop becomes het geloop in the past tense.',
  },
  {
    prompt: "Choose the correct past tense: 'Hy skop die bal.'",
    options: ['Hy het die bal geskop', 'Hy skop die bal', 'Hy het die bal skop', 'Hy sal die bal skop'],
    answer: 'Hy het die bal geskop',
    explanation: 'Skop becomes het geskop.',
  },
  {
    prompt: "Past tense of 'Sy lees 'n boek' is ...",
    options: ["Sy het 'n boek gelees", "Sy lees 'n boek", "Sy het 'n boek lees", "Sy sal 'n boek lees"],
    answer: "Sy het 'n boek gelees",
    explanation: 'Lees becomes het gelees.',
  },
  {
    prompt: "Past tense of 'Ek sien die hond' is ...",
    options: ['Ek het die hond gesien', 'Ek sien die hond', 'Ek het die hond sien', 'Ek sal die hond sien'],
    answer: 'Ek het die hond gesien',
    explanation: 'Sien becomes het gesien.',
  },
  {
    prompt: "Past tense of 'Ons eet appels' is ...",
    options: ['Ons het appels geëet', 'Ons eet appels', 'Ons het appels geeet', 'Ons sal appels eet'],
    answer: 'Ons het appels geëet',
    explanation: 'Eet becomes het geëet, with ë to show the new syllable.',
  },
  {
    prompt: "Past tense of 'Ek is moeg' is ...",
    options: ['Ek was moeg', 'Ek het moeg gewees', 'Ek is moeg', 'Ek sal moeg wees'],
    answer: 'Ek was moeg',
    explanation: 'For simple Grade 6 sentences, is often becomes was.',
  },
  {
    prompt: "Past tense of 'Hy het 'n pen' is ...",
    options: ["Hy het 'n pen gehad", "Hy het 'n pen", "Hy gehad 'n pen", "Hy sal 'n pen hê"],
    answer: "Hy het 'n pen gehad",
    explanation: 'The past tense of having something is het gehad.',
  },
  {
    prompt: "Past tense of 'Hulle werk hard' is ...",
    options: ['Hulle het hard gewerk', 'Hulle werk hard', 'Hulle het hard werk', 'Hulle sal hard werk'],
    answer: 'Hulle het hard gewerk',
    explanation: 'Werk becomes het gewerk.',
  },
];

const VerledeTyd = () => (
  <AfrikaansTopic
    title="Verlede Tyd"
    subtitle="The past tense (het ge-)"
    learnSteps={learnSteps}
    task="verlede-tyd"
    bank={bank}
    speak="options"
  />
);

export default VerledeTyd;
