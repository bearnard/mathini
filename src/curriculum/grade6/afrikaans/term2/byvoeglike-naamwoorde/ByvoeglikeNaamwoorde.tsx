import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Adjectives describe nouns',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>byvoeglike naamwoord</strong> tells us more about a noun, like colour, size, or quality.
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          'n mooi blom <SpeakButton text="'n mooi blom" />
        </span>
      </div>
    ),
  },
  {
    title: 'Put it before the noun',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In simple describing phrases, the adjective often stands before the noun it describes.
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          'n groot huis <SpeakButton text="'n groot huis" />
        </span>
      </div>
    ),
  },
  {
    title: 'Some words change form',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Some common adjectives change a little before a noun, like <strong>goed</strong> becoming
          <strong> goeie</strong>.
        </p>
        <span className="inline-flex items-center gap-2 text-2xl font-bold text-indigo-600">
          'n goeie boek <SpeakButton text="'n goeie boek" />
        </span>
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
    prompt: "Choose the adjective in: ''n groot huis'.",
    options: ['groot', 'huis', "'n", 'bou'],
    answer: 'groot',
    explanation: 'Groot describes the noun huis.',
  },
  {
    prompt: "Which phrase means 'a pretty flower'?",
    options: ["'n mooi blom", "'n blom mooi", "'n groot blom", "'n goeie blom"],
    answer: "'n mooi blom",
    explanation: 'Mooi means pretty and stands before blom.',
  },
  {
    prompt: "Choose the best adjective: ''n ___ boek' (a good book).",
    options: ['goeie', 'goed', 'groot', 'rooi'],
    answer: 'goeie',
    explanation: 'Goed changes to goeie before a noun.',
  },
  {
    prompt: "Which word describes the noun in: 'Die klein hond blaf'?",
    options: ['klein', 'hond', 'blaf', 'Die'],
    answer: 'klein',
    explanation: 'Klein tells us more about the hond.',
  },
  {
    prompt: "Choose the correct phrase for 'a red apple'.",
    options: ["'n rooi appel", "'n appel rooi", "'n rooi eet", "'n mooi rooi"],
    answer: "'n rooi appel",
    explanation: 'Rooi describes appel and comes before it.',
  },
  {
    prompt: "Which adjective fits: ''n ___ meisie' (a friendly girl)?",
    options: ['vriendelike', 'meisie', 'hardloop', 'blou'],
    answer: 'vriendelike',
    explanation: 'Vriendelike means friendly and describes meisie.',
  },
  {
    prompt: "Choose the adjective in: ''n nuwe potlood'.",
    options: ['nuwe', 'potlood', "'n", 'skryf'],
    answer: 'nuwe',
    explanation: 'Nuwe describes the noun potlood.',
  },
  {
    prompt: "Which phrase is correct for 'a cold day'?",
    options: ["'n koue dag", "'n koud dag", "'n dag koud", "'n goed dag"],
    answer: "'n koue dag",
    explanation: 'Koud often becomes koue before a noun.',
  },
  {
    prompt: "Which word is a byvoeglike naamwoord?",
    options: ['vinnig', 'kat', 'spring', 'onder'],
    answer: 'vinnig',
    explanation: 'Vinnig can describe a noun, for example: ’n vinnige kat.',
  },
];

const ByvoeglikeNaamwoorde = () => (
  <AfrikaansTopic
    title="Byvoeglike Naamwoorde"
    subtitle="Describing words (adjectives)"
    learnSteps={learnSteps}
    task="byvoeglike-naamwoorde"
    bank={bank}
    speak="options"
  />
);

export default ByvoeglikeNaamwoorde;
