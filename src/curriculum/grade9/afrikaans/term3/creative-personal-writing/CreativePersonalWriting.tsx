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
          Say these literature words aloud before discussing stories, poems, characters, and themes.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"karakter"} phonetic={"[karakˈtɛr]"} meaning={"character"} lang="af" />
          <PronunciationPlayer word={"tema"} phonetic={"[ˈteːma]"} meaning={"theme"} lang="af" />
          <PronunciationPlayer word={"konflik"} phonetic={"[kɔnˈflək]"} meaning={"conflict"} lang="af" />
          <PronunciationPlayer word={"storie"} phonetic={"[ˈstoːri]"} meaning={"story"} lang="af" />
          <PronunciationPlayer word={"resensie"} phonetic={"[rɛˈsɛnsi]"} meaning={"review"} lang="af" />
          <PronunciationPlayer word={"toneel"} phonetic={"[tɔˈniəl]"} meaning={"scene / stage"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'character'?",
    options: ["karakter", "tema", "konflik", "resensie"],
    answer: "karakter",
    explanation: "'Karakter' means 'character', a person in a story.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'theme'?",
    options: ["tema", "storie", "toneel", "konflik"],
    answer: "tema",
    explanation: "'Tema' means 'theme', the main message of a text.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'conflict'?",
    options: ["konflik", "karakter", "storie", "resensie"],
    answer: "konflik",
    explanation: "'Konflik' means 'conflict', the problem or struggle in a story.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'story'?",
    options: ["storie", "tema", "resensie", "toneel"],
    answer: "storie",
    explanation: "'Storie' means 'story'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'review'?",
    options: ["resensie", "karakter", "tema", "toneel"],
    answer: "resensie",
    explanation: "'Resensie' means 'review', a text that gives an opinion with reasons.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'scene / stage'?",
    options: ["toneel", "konflik", "storie", "karakter"],
    answer: "toneel",
    explanation: "'Toneel' means 'scene' or 'stage'.",
  },
];

const CreativePersonalWriting = () => (
  <AfrikaansTopic
    title="Kreatiewe & Persoonlike Skryfwerk"
    subtitle="Narrative, descriptive, reflective essays, and reviews"
    learnSteps={learnSteps}
    task="gr9-creative-personal-writing-t3"
    bank={bank}
    speak="options"
  />
);

export default CreativePersonalWriting;
