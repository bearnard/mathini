import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Join ideas',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Voegwoorde join words, phrases or sentences. Start with common joining words.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-2xl font-bold text-indigo-600">
          <span className="inline-flex items-center">en <SpeakButton text="en" /></span>
          <span className="inline-flex items-center">maar <SpeakButton text="maar" /></span>
          <span className="inline-flex items-center">want <SpeakButton text="want" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Choose the meaning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>en</strong> means and, <strong>maar</strong> means but, and <strong>want</strong> gives a reason.
        </p>
        <p className="text-xl text-slate-700">
          Ek lees <strong>en</strong> ek skryf. Ek is moeg, <strong>want</strong> ek het hard gewerk.
        </p>
      </div>
    ),
  },
  {
    title: 'Other useful joiners',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use <strong>of</strong> for a choice. Use <strong>omdat</strong> for because; it often sends the verb to the end.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-2xl font-bold text-indigo-600">
          <span className="inline-flex items-center">of <SpeakButton text="of" /></span>
          <span className="inline-flex items-center">omdat <SpeakButton text="omdat" /></span>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these joining words aloud to make links between ideas sound smooth and accurate.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"en"} phonetic={"[ɛn]"} meaning={"and"} lang="af" />
          <PronunciationPlayer word={"maar"} phonetic={"[mɑːr]"} meaning={"but"} lang="af" />
          <PronunciationPlayer word={"want"} phonetic={"[vant]"} meaning={"because / for"} lang="af" />
          <PronunciationPlayer word={"omdat"} phonetic={"[ɔmˈdat]"} meaning={"because"} lang="af" />
          <PronunciationPlayer word={"daarom"} phonetic={"[ˈdɑːrɔm]"} meaning={"therefore"} lang="af" />
          <PronunciationPlayer word={"terwyl"} phonetic={"[tərˈvɛil]"} meaning={"while"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: 'Ek lees ___ ek skryf. (and)',
    options: ['en', 'maar', 'want', 'of'],
    answer: 'en',
    explanation: "'en' means 'and'.",
  },
  {
    prompt: 'Hy is klein, ___ hy is sterk. (but)',
    options: ['want', 'maar', 'en', 'of'],
    answer: 'maar',
    explanation: "'maar' means 'but'.",
  },
  {
    prompt: 'Ons bly binne, ___ dit reën. (because)',
    options: ['of', 'en', 'want', 'maar'],
    answer: 'want',
    explanation: "'want' gives a reason and means 'because'.",
  },
  {
    prompt: 'Wil jy appels ___ pere hê? (or)',
    options: ['maar', 'of', 'want', 'en'],
    answer: 'of',
    explanation: "'of' means 'or'.",
  },
  {
    prompt: 'Sy sing ___ sy dans. (and)',
    options: ['en', 'want', 'maar', 'of'],
    answer: 'en',
    explanation: "Use 'en' to add another action.",
  },
  {
    prompt: 'Ek hou van sokker, ___ ek speel vandag nie. (but)',
    options: ['of', 'maar', 'en', 'want'],
    answer: 'maar',
    explanation: "Use 'maar' to show contrast.",
  },
  {
    prompt: "Ek dra 'n jas, ___ dit is koud. (because)",
    options: ['want', 'en', 'of', 'maar'],
    answer: 'want',
    explanation: "Use 'want' before a simple reason.",
  },
  {
    prompt: 'Kom jy vandag ___ môre? (or)',
    options: ['en', 'maar', 'of', 'want'],
    answer: 'of',
    explanation: "Use 'of' when there is a choice.",
  },
  {
    prompt: 'Hulle lag ___ hulle speel. (and)',
    options: ['maar', 'want', 'en', 'of'],
    answer: 'en',
    explanation: "'en' joins two similar ideas.",
  },
];

const Voegwoorde = () => (
  <AfrikaansTopic title="Voegwoorde" subtitle="Joining words (conjunctions)" learnSteps={learnSteps} task="voegwoorde" bank={bank} speak="options" />
);

export default Voegwoorde;
