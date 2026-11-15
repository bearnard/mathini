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

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat is die meervoud van 'boek'?",
    options: ["boeke", "boeks", "boekke", "boekers"],
    answer: "boeke",
    explanation: "'Boek' becomes 'boeke' in the plural (boek / boeke).",
  },
  {
    prompt: "Wat is die meervoud van 'hond'?",
    options: ["honde", "honds", "hondde", "hondens"],
    answer: "honde",
    explanation: "'Hond' becomes 'honde' in the plural (hond / honde).",
  },
  {
    prompt: "Wat is die meervoud van 'kind'?",
    options: ["kinders", "kinde", "kinds", "kindere"],
    answer: "kinders",
    explanation: "'Kind' has the special plural 'kinders' (kind / kinders).",
  },
  {
    prompt: "Wat is die meervoud van 'huis'?",
    options: ["huise", "huisse", "huises", "huiser"],
    answer: "huise",
    explanation: "'Huis' becomes 'huise' in the plural (huis / huise).",
  },
  {
    prompt: "Wat is die meervoud van 'dag'?",
    options: ["dae", "dage", "dagge", "dags"],
    answer: "dae",
    explanation: "'Dag' changes to 'dae' in the plural (dag / dae).",
  },
  {
    prompt: "Wat is die meervoud van 'blom'?",
    options: ["blomme", "bloms", "blome", "blommes"],
    answer: "blomme",
    explanation: "'Blom' has a short vowel, so the consonant doubles: blom / blomme.",
  },
];

const LanguageStructures = () => (
  <AfrikaansTopic
    title="Taalstrukture in Konteks"
    subtitle="Plurals, adjectives, tenses, and punctuation"
    learnSteps={learnSteps}
    task="gr9-language-structures-t1"
    bank={bank}
    speak="options"
  />
);

export default LanguageStructures;
