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
          Practice these persuasive words aloud before analysing how adverts and campaigns influence audiences.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"koop"} phonetic={"[koəp]"} meaning={"buy"} lang="af" />
          <PronunciationPlayer word={"spesiaal"} phonetic={"[spɛsiˈɑːl]"} meaning={"special"} lang="af" />
          <PronunciationPlayer word={"vars"} phonetic={"[fars]"} meaning={"fresh"} lang="af" />
          <PronunciationPlayer word={"keuse"} phonetic={"[ˈkœsə]"} meaning={"choice"} lang="af" />
          <PronunciationPlayer word={"aandag"} phonetic={"[ˈaːndax]"} meaning={"attention"} lang="af" />
          <PronunciationPlayer word={"oortuig"} phonetic={"[ˈuːrtœiχ]"} meaning={"convince / persuade"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'buy'?",
    options: ["koop", "vars", "keuse", "aandag"],
    answer: "koop",
    explanation: "'Koop' means 'buy'. It is a key persuasive word in adverts: 'Koop nou!'",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'special'?",
    options: ["spesiaal", "oortuig", "keuse", "koop"],
    answer: "spesiaal",
    explanation: "'Spesiaal' means 'special', as in a special offer.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'fresh'?",
    options: ["vars", "aandag", "spesiaal", "oortuig"],
    answer: "vars",
    explanation: "'Vars' means 'fresh'. Adverts often use it for food.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'choice'?",
    options: ["keuse", "koop", "vars", "aandag"],
    answer: "keuse",
    explanation: "'Keuse' means 'choice'. Adverts often give the audience a choice.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'attention'?",
    options: ["aandag", "oortuig", "spesiaal", "vars"],
    answer: "aandag",
    explanation: "'Aandag' means 'attention'. The first step of an advert is to get the reader's attention.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'convince / persuade'?",
    options: ["oortuig", "koop", "spesiaal", "aandag"],
    answer: "oortuig",
    explanation: "'Oortuig' means 'convince' or 'persuade', which is the aim of an advert.",
  },
];

const AdvertisingVisualPersuasion = () => (
  <AfrikaansTopic
    title="Advertensies & Visuele Oortuiging"
    subtitle="Target audiences, persuasive language, and design impact"
    learnSteps={learnSteps}
    task="gr9-advertising-visual-persuasion-t1"
    bank={bank}
    speak="options"
  />
);

export default AdvertisingVisualPersuasion;
