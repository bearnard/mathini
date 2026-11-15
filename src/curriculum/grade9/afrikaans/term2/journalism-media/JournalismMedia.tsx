import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Learn key concepts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 9 Afrikaans FAL builds on foundational skills.
        </p>
      </div>
    ),
  },
  {
    title: 'Develop deeper understanding',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mastering these concepts prepares you for advanced language study.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply learning in context',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Practice strengthens your command of Afrikaans language and literature.
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
    prompt: "Watter woord is die lidwoord wat 'the' beteken?",
    options: ["die", "'n", "boek", "tafel"],
    answer: "die",
    explanation: "'Die' is the definite article and means 'the'.",
  },
  {
    prompt: "Watter woord is die lidwoord wat 'a / an' beteken?",
    options: ["'n", "die", "hond", "kind"],
    answer: "'n",
    explanation: "'n is the indefinite article and means 'a' or 'an'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'book'?",
    options: ["boek", "tafel", "hond", "kind"],
    answer: "boek",
    explanation: "'Boek' means 'book'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'table'?",
    options: ["tafel", "boek", "hond", "kind"],
    answer: "tafel",
    explanation: "'Tafel' means 'table'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'dog'?",
    options: ["hond", "boek", "tafel", "kind"],
    answer: "hond",
    explanation: "'Hond' means 'dog'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'child'?",
    options: ["kind", "boek", "tafel", "hond"],
    answer: "kind",
    explanation: "'Kind' means 'child'. Its plural is 'kinders'.",
  },
];

const JournalismMedia = () => (
  <AfrikaansTopic
    title="Joernalistiek & Mediatekste"
    subtitle="News reports, magazine articles, interviews, and key information"
    learnSteps={learnSteps}
    task="gr9-journalism-media-t2"
    bank={bank}
    speak="options"
  />
);

export default JournalismMedia;
