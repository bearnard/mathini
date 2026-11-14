import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Position words',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Voorsetsels wys waar iets is. Leer die plekwoorde vir objects and people.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-2xl font-bold text-indigo-600">
          <span className="inline-flex items-center">op <SpeakButton text="op" /></span>
          <span className="inline-flex items-center">in <SpeakButton text="in" /></span>
          <span className="inline-flex items-center">onder <SpeakButton text="onder" /></span>
          <span className="inline-flex items-center">voor <SpeakButton text="voor" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Around a place',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use <strong>agter</strong>, <strong>langs</strong>, <strong>tussen</strong> and <strong>by</strong> to describe location clearly.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-2xl font-bold text-indigo-600">
          <span className="inline-flex items-center">agter <SpeakButton text="agter" /></span>
          <span className="inline-flex items-center">langs <SpeakButton text="langs" /></span>
          <span className="inline-flex items-center">tussen <SpeakButton text="tussen" /></span>
          <span className="inline-flex items-center">by <SpeakButton text="by" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Read the hint',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In practice, fill the blank with the Afrikaans preposition that matches the English hint.
        </p>
        <p className="text-xl text-slate-700">
          Die boek lê <strong>op</strong> die tafel. = The book is <strong>on</strong> the table.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these position words aloud to connect meaning with movement and place.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"op"} phonetic={"[ɔp]"} meaning={"on"} lang="af" />
          <PronunciationPlayer word={"onder"} phonetic={"[ˈɔndər]"} meaning={"under"} lang="af" />
          <PronunciationPlayer word={"langs"} phonetic={"[laŋs]"} meaning={"next to / along"} lang="af" />
          <PronunciationPlayer word={"tussen"} phonetic={"[ˈtœsən]"} meaning={"between"} lang="af" />
          <PronunciationPlayer word={"agter"} phonetic={"[ˈaxtər]"} meaning={"behind"} lang="af" />
          <PronunciationPlayer word={"voor"} phonetic={"[foːr]"} meaning={"in front of / for"} lang="af" />
        </div>
      </div>
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: 'Die boek lê ___ die tafel. (on)',
    options: ['op', 'onder', 'in', 'agter'],
    answer: 'op',
    explanation: "'op' means 'on'.",
  },
  {
    prompt: 'Die hond slaap ___ die bed. (under)',
    options: ['langs', 'onder', 'voor', 'by'],
    answer: 'onder',
    explanation: "'onder' means 'under'.",
  },
  {
    prompt: 'Die leerders sit ___ die klas. (in)',
    options: ['tussen', 'agter', 'in', 'op'],
    answer: 'in',
    explanation: "'in' means 'in'.",
  },
  {
    prompt: 'Die motor staan ___ die huis. (in front of)',
    options: ['agter', 'voor', 'onder', 'langs'],
    answer: 'voor',
    explanation: "'voor' means 'in front of'.",
  },
  {
    prompt: 'Die tuin is ___ die skool. (behind)',
    options: ['by', 'op', 'agter', 'tussen'],
    answer: 'agter',
    explanation: "'agter' means 'behind'.",
  },
  {
    prompt: 'My maat sit ___ my. (next to)',
    options: ['langs', 'in', 'voor', 'onder'],
    answer: 'langs',
    explanation: "'langs' means 'next to' or 'beside'.",
  },
  {
    prompt: 'Die bal is ___ die twee stoele. (between)',
    options: ['agter', 'tussen', 'by', 'op'],
    answer: 'tussen',
    explanation: "'tussen' means 'between'.",
  },
  {
    prompt: 'Ons wag ___ die hek. (at/by)',
    options: ['onder', 'langs', 'by', 'in'],
    answer: 'by',
    explanation: "'by' can mean 'at' or 'by'.",
  },
];

const Voorsetsels = () => (
  <AfrikaansTopic title="Voorsetsels" subtitle="Prepositions" learnSteps={learnSteps} task="voorsetsels" bank={bank} speak="options" />
);

export default Voorsetsels;
