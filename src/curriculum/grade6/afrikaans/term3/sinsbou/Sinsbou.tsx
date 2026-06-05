import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Verb second',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a normal Afrikaans statement, the verb usually stands in the second position.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          Ek speel buite <SpeakButton text="Ek speel buite" />
        </span>
      </div>
    ),
  },
  {
    title: 'STOMPI order',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          STOMPI helps you order ideas: subject, time, object, manner, place, and infinitive.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          Ek lees vandag 'n boek <SpeakButton text="Ek lees vandag 'n boek" />
        </span>
      </div>
    ),
  },
  {
    title: 'Inversion after time',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          If a time phrase starts the sentence, the verb stays second and the subject follows it.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          Vandag speel ek buite <SpeakButton text="Vandag speel ek buite" />
        </span>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Repeat these time and linking words aloud while practising Afrikaans word order.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"eers"} phonetic={"[iərs]"} meaning={"first"} lang="af" />
          <PronunciationPlayer word={"dan"} phonetic={"[dan]"} meaning={"then"} lang="af" />
          <PronunciationPlayer word={"omdat"} phonetic={"[ɔmˈdat]"} meaning={"because"} lang="af" />
          <PronunciationPlayer word={"vandag"} phonetic={"[fanˈdax]"} meaning={"today"} lang="af" />
          <PronunciationPlayer word={"môre"} phonetic={"[ˈmɔːrə]"} meaning={"tomorrow / morning"} lang="af" />
          <PronunciationPlayer word={"gister"} phonetic={"[ˈχəstər]"} meaning={"yesterday"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: 'Which sentence has the correct Afrikaans word order?',
    options: ['Ek speel vandag buite', 'Ek vandag speel buite', 'Speel ek vandag buite', 'Vandag ek speel buite'],
    answer: 'Ek speel vandag buite',
    explanation: "In a normal statement, the verb 'speel' is second.",
  },
  {
    prompt: 'Which sentence correctly starts with a time word?',
    options: ['Vandag speel ek buite', 'Vandag ek speel buite', 'Vandag buite speel ek', 'Speel vandag ek buite'],
    answer: 'Vandag speel ek buite',
    explanation: "After 'Vandag', the verb comes next, then the subject.",
  },
  {
    prompt: 'Which sentence has the correct word order?',
    options: ["Sy lees saans 'n boek", "Sy saans lees 'n boek", "Saans sy lees 'n boek", "Lees sy saans 'n boek"],
    answer: "Sy lees saans 'n boek",
    explanation: "The verb 'lees' is second in the statement.",
  },
  {
    prompt: 'Which sentence correctly uses inversion?',
    options: ["Môre gaan ons skool toe", "Môre ons gaan skool toe", "Môre skool toe gaan ons", "Gaan môre ons skool toe"],
    answer: "Môre gaan ons skool toe",
    explanation: "When 'Môre' starts the sentence, 'gaan' comes second.",
  },
  {
    prompt: 'Which sentence has the correct Afrikaans word order?',
    options: ['Die hond slaap op die mat', 'Die hond op die mat slaap', 'Slaap die hond op die mat', 'Op die mat die hond slaap'],
    answer: 'Die hond slaap op die mat',
    explanation: "The verb 'slaap' is second in a normal statement.",
  },
  {
    prompt: 'Which sentence correctly starts with a time phrase?',
    options: ['Na skool speel hulle sokker', 'Na skool hulle speel sokker', 'Na skool sokker speel hulle', 'Speel na skool hulle sokker'],
    answer: 'Na skool speel hulle sokker',
    explanation: "After a fronted time phrase, the verb comes before the subject.",
  },
  {
    prompt: 'Which sentence has the correct word order?',
    options: ['Ons eet vanaand pizza', 'Ons vanaand eet pizza', 'Vanaand ons eet pizza', 'Eet ons vanaand pizza'],
    answer: 'Ons eet vanaand pizza',
    explanation: "The verb 'eet' is second in a normal statement.",
  },
  {
    prompt: 'Which sentence correctly uses verb second?',
    options: ['Die kinders sing hard in die klas', 'Die kinders hard sing in die klas', 'In die klas die kinders sing hard', 'Sing die kinders hard in die klas'],
    answer: 'Die kinders sing hard in die klas',
    explanation: "The verb 'sing' stands second after the subject.",
  },
  {
    prompt: 'Which sentence correctly starts with a time word?',
    options: ['Gister het ek huiswerk gedoen', 'Gister ek het huiswerk gedoen', 'Gister huiswerk het ek gedoen', 'Het gister ek huiswerk gedoen'],
    answer: 'Gister het ek huiswerk gedoen',
    explanation: "With 'Gister' first, 'het' is second and 'ek' follows.",
  },
  {
    prompt: 'Which sentence has the correct Afrikaans word order?',
    options: ['My ma koop brood by die winkel', 'My ma brood koop by die winkel', 'By die winkel my ma koop brood', 'Koop my ma brood by die winkel'],
    answer: 'My ma koop brood by die winkel',
    explanation: "The verb 'koop' is second in the statement.",
  },
];

const Sinsbou = () => (
  <AfrikaansTopic
    title="Sinsbou (STOMPI)"
    subtitle="Afrikaans word order"
    learnSteps={learnSteps}
    task="sinsbou"
    bank={bank}
    speak="options"
  />
);

export default Sinsbou;
