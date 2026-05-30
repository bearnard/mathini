import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Sinonieme mean the same',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Sinonieme</strong> are words with the same or almost the same meaning.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          bly = gelukkig <SpeakButton text="bly, gelukkig" />
        </span>
      </div>
    ),
  },
  {
    title: 'Antonieme are opposites',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Antonieme</strong> or <strong>teenoorgesteldes</strong> have opposite meanings.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          groot ↔ klein <SpeakButton text="groot, klein" />
        </span>
      </div>
    ),
  },
  {
    title: 'Use meaning clues',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Read the question carefully: it may ask for a word that is the same or the opposite.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          warm ↔ koud <SpeakButton text="warm, koud" />
        </span>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Choose a synonym for 'bly' (happy).",
    options: ['gelukkig', 'hartseer', 'kwaad', 'moeg'],
    answer: 'gelukkig',
    explanation: "'Bly' and 'gelukkig' both mean happy.",
  },
  {
    prompt: "Choose an antonym for 'groot' (big).",
    options: ['klein', 'lank', 'breed', 'sterk'],
    answer: 'klein',
    explanation: "The opposite of 'groot' is 'klein'.",
  },
  {
    prompt: "Choose an antonym for 'warm' (warm).",
    options: ['koud', 'heet', 'sag', 'droog'],
    answer: 'koud',
    explanation: "'Warm' and 'koud' are opposites.",
  },
  {
    prompt: "Choose a synonym for 'vinnig' (fast).",
    options: ['gou', 'stadig', 'laat', 'stil'],
    answer: 'gou',
    explanation: "'Gou' can mean quickly, so it is close in meaning to 'vinnig'.",
  },
  {
    prompt: "Choose a synonym for 'praat' (talk).",
    options: ['gesels', 'luister', 'skryf', 'lees'],
    answer: 'gesels',
    explanation: "'Praat' and 'gesels' both describe talking.",
  },
  {
    prompt: "Choose an antonym for 'stadig' (slow).",
    options: ['vinnig', 'sag', 'stil', 'mooi'],
    answer: 'vinnig',
    explanation: "The opposite of 'stadig' is 'vinnig'.",
  },
  {
    prompt: "Choose an antonym for 'lank' (long).",
    options: ['kort', 'hoog', 'breed', 'dun'],
    answer: 'kort',
    explanation: "'Lank' and 'kort' are opposites.",
  },
  {
    prompt: "Choose a synonym for 'mooi' (pretty).",
    options: ['pragtig', 'lelik', 'oud', 'koud'],
    answer: 'pragtig',
    explanation: "'Mooi' and 'pragtig' both describe something beautiful.",
  },
  {
    prompt: "Choose an antonym for 'oop' (open).",
    options: ['toe', 'wyd', 'naby', 'nuut'],
    answer: 'toe',
    explanation: "The opposite of 'oop' is 'toe'.",
  },
  {
    prompt: "Choose a synonym for 'kwaad' (angry).",
    options: ['boos', 'vriendelik', 'bly', 'rustig'],
    answer: 'boos',
    explanation: "'Kwaad' and 'boos' can both mean angry.",
  },
];

const SinoniemeAntonieme = () => (
  <AfrikaansTopic
    title="Sinonieme & Antonieme"
    subtitle="Synonyms and opposites"
    learnSteps={learnSteps}
    task="sinonieme-antonieme"
    bank={bank}
    speak="options"
  />
);

export default SinoniemeAntonieme;
