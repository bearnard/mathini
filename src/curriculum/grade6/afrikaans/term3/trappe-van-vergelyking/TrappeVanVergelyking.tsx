import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Three degrees',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Afrikaans compares qualities in three steps: positive, comparative, and superlative.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          mooi, mooier, mooiste <SpeakButton text="mooi, mooier, mooiste" />
        </span>
      </div>
    ),
  },
  {
    title: 'Add -er and -ste',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Many words add <strong>-er</strong> for more and <strong>-ste</strong> for most.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          groot, groter, grootste <SpeakButton text="groot, groter, grootste" />
        </span>
      </div>
    ),
  },
  {
    title: 'Some words change',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Some common comparison words are irregular and must be memorised.
        </p>
        <span className="inline-flex items-center text-2xl font-bold text-indigo-600">
          goed, beter, beste <SpeakButton text="goed, beter, beste" />
        </span>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these comparison forms aloud so the sound of each degree becomes familiar.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"groot"} phonetic={"[χruət]"} meaning={"big"} lang="af" />
          <PronunciationPlayer word={"groter"} phonetic={"[ˈχruətər]"} meaning={"bigger"} lang="af" />
          <PronunciationPlayer word={"grootste"} phonetic={"[ˈχruətstə]"} meaning={"biggest"} lang="af" />
          <PronunciationPlayer word={"mooi"} phonetic={"[moi]"} meaning={"pretty"} lang="af" />
          <PronunciationPlayer word={"mooier"} phonetic={"[ˈmojər]"} meaning={"prettier"} lang="af" />
          <PronunciationPlayer word={"mooiste"} phonetic={"[ˈmojstə]"} meaning={"prettiest"} lang="af" />
        </div>
      </div>
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Comparative of 'mooi' (pretty)?",
    options: ['mooier', 'mooiste', 'mooi', 'meer mooi'],
    answer: 'mooier',
    explanation: "'Mooi' becomes 'mooier' in the comparative form.",
  },
  {
    prompt: "Superlative of 'mooi' (pretty)?",
    options: ['mooiste', 'mooier', 'mooi', 'mees mooi'],
    answer: 'mooiste',
    explanation: "The three forms are mooi, mooier, mooiste.",
  },
  {
    prompt: "Comparative of 'groot' (big)?",
    options: ['groter', 'grootste', 'groot', 'meer groot'],
    answer: 'groter',
    explanation: "'Groot' becomes 'groter' when comparing two things.",
  },
  {
    prompt: "Superlative of 'groot' (big)?",
    options: ['grootste', 'groter', 'groot', 'mees groot'],
    answer: 'grootste',
    explanation: "The three forms are groot, groter, grootste.",
  },
  {
    prompt: "Comparative of 'goed' (good)?",
    options: ['beter', 'beste', 'goeder', 'goedste'],
    answer: 'beter',
    explanation: "'Goed' is irregular: goed, beter, beste.",
  },
  {
    prompt: "Superlative of 'goed' (good)?",
    options: ['beste', 'beter', 'goedste', 'goeder'],
    answer: 'beste',
    explanation: "The superlative form of 'goed' is 'beste'.",
  },
  {
    prompt: "Comparative of 'vinnig' (fast)?",
    options: ['vinniger', 'vinnigste', 'vinnig', 'meer vinnig'],
    answer: 'vinniger',
    explanation: "'Vinnig' becomes 'vinniger' in the comparative form.",
  },
  {
    prompt: "Superlative of 'vinnig' (fast)?",
    options: ['vinnigste', 'vinniger', 'vinnig', 'mees vinnig'],
    answer: 'vinnigste',
    explanation: "The three forms are vinnig, vinniger, vinnigste.",
  },
  {
    prompt: "Comparative of 'klein' (small)?",
    options: ['kleiner', 'kleinste', 'klein', 'meer klein'],
    answer: 'kleiner',
    explanation: "'Klein' becomes 'kleiner' when comparing two things.",
  },
  {
    prompt: "Superlative of 'warm' (warm)?",
    options: ['warmste', 'warmer', 'warm', 'mees warm'],
    answer: 'warmste',
    explanation: "The three forms are warm, warmer, warmste.",
  },
];

const TrappeVanVergelyking = () => (
  <AfrikaansTopic
    title="Trappe van Vergelyking"
    subtitle="Degrees of comparison"
    learnSteps={learnSteps}
    task="trappe-van-vergelyking"
    bank={bank}
    speak="options"
  />
);

export default TrappeVanVergelyking;
