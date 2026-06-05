import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Use sal for the future',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Afrikaans, the future tense often uses <strong>sal</strong> before the action word.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          sal <SpeakButton text="sal" />
        </span>
      </div>
    ),
  },
  {
    title: 'Put the action at the end',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a simple sentence, the verb moves near the end: <strong>Ek sal sokker speel.</strong>
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          speel <SpeakButton text="speel" />
        </span>
      </div>
    ),
  },
  {
    title: 'Make future sentences',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Keep the subject first, add <strong>sal</strong>, then place the main action later.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          Ons sal eet <SpeakButton text="Ons sal eet" />
        </span>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these future-tense words aloud to hear how Afrikaans signals what will happen next.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"sal"} phonetic={"[sal]"} meaning={"will / shall"} lang="af" />
          <PronunciationPlayer word={"môre"} phonetic={"[ˈmɔːrə]"} meaning={"tomorrow"} lang="af" />
          <PronunciationPlayer word={"later"} phonetic={"[ˈlɑːtər]"} meaning={"later"} lang="af" />
          <PronunciationPlayer word={"volgende week"} phonetic={"[ˈfɔlxəndə viːk]"} meaning={"next week"} lang="af" />
          <PronunciationPlayer word={"reis"} phonetic={"[rɛis]"} meaning={"travel"} lang="af" />
          <PronunciationPlayer word={"leer"} phonetic={"[liər]"} meaning={"learn"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Choose the future tense of: 'Ek speel sokker.'",
    options: ['Ek sal sokker speel', 'Ek speel sal sokker', 'Sal ek sokker speel', 'Ek het sokker gespeel'],
    answer: 'Ek sal sokker speel',
    explanation: "Use subject + sal + object + verb: 'Ek sal sokker speel.'",
  },
  {
    prompt: "Choose the future tense of: 'Ons eet aandete.'",
    options: ['Ons sal aandete eet', 'Ons eet sal aandete', 'Ons het aandete geëet', 'Sal ons aandete eet'],
    answer: 'Ons sal aandete eet',
    explanation: "'Sal' shows future tense, and 'eet' moves to the end.",
  },
  {
    prompt: "Choose the future tense of: 'Sy lees 'n boek.'",
    options: ["Sy sal 'n boek lees", "Sy lees sal 'n boek", "Sy het 'n boek gelees", "Sal sy 'n boek lees"],
    answer: "Sy sal 'n boek lees",
    explanation: "The statement is 'Sy sal 'n boek lees.'",
  },
  {
    prompt: "Choose the future tense of: 'Hulle gaan skool toe.'",
    options: ['Hulle sal skool toe gaan', 'Hulle gaan sal skool toe', 'Hulle het skool toe gegaan', 'Sal hulle skool toe gaan'],
    answer: 'Hulle sal skool toe gaan',
    explanation: "Use 'sal' and put 'gaan' at the end.",
  },
  {
    prompt: "Choose the future tense of: 'Ek maak tee.'",
    options: ['Ek sal tee maak', 'Ek maak sal tee', 'Ek het tee gemaak', 'Sal ek tee maak'],
    answer: 'Ek sal tee maak',
    explanation: "The future tense is 'Ek sal tee maak.'",
  },
  {
    prompt: "Choose the future tense of: 'Jy skryf 'n brief.'",
    options: ["Jy sal 'n brief skryf", "Jy skryf sal 'n brief", "Jy het 'n brief geskryf", "Sal jy 'n brief skryf"],
    answer: "Jy sal 'n brief skryf",
    explanation: "In a statement, write 'Jy sal ... skryf.'",
  },
  {
    prompt: "Choose the future tense of: 'Die hond slaap.'",
    options: ['Die hond sal slaap', 'Die hond slaap sal', 'Die hond het geslaap', 'Sal die hond slaap'],
    answer: 'Die hond sal slaap',
    explanation: "Use 'sal' before the verb for a future statement.",
  },
  {
    prompt: 'Which word usually shows the future tense in Afrikaans?',
    options: ['sal', 'het', 'is', 'was'],
    answer: 'sal',
    explanation: "'Sal' is the helping word for the future tense.",
  },
];

const ToekomendeTyd = () => (
  <AfrikaansTopic
    title="Toekomende Tyd"
    subtitle="The future tense (sal)"
    learnSteps={learnSteps}
    task="toekomende-tyd"
    bank={bank}
    speak="options"
  />
);

export default ToekomendeTyd;
