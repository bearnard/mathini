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
          Use these mixed-genre revision words aloud while preparing for final Afrikaans consolidation.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"begrip"} phonetic={"[bəˈχrəp]"} meaning={"comprehension"} lang="af" />
          <PronunciationPlayer word={"woordeskat"} phonetic={"[ˈvuərdəskat]"} meaning={"vocabulary"} lang="af" />
          <PronunciationPlayer word={"gedig"} phonetic={"[χəˈdəχ]"} meaning={"poem"} lang="af" />
          <PronunciationPlayer word={"brief"} phonetic={"[brif]"} meaning={"letter"} lang="af" />
          <PronunciationPlayer word={"advertensie"} phonetic={"[adfərˈtɛnsi]"} meaning={"advertisement"} lang="af" />
          <PronunciationPlayer word={"hersiening"} phonetic={"[hərˈsiənəŋ]"} meaning={"revision"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'comprehension'?",
    options: ["begrip", "gedig", "brief", "hersiening"],
    answer: "begrip",
    explanation: "'Begrip' means 'comprehension', understanding a text.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'vocabulary'?",
    options: ["woordeskat", "advertensie", "hersiening", "begrip"],
    answer: "woordeskat",
    explanation: "'Woordeskat' means 'vocabulary'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'poem'?",
    options: ["gedig", "brief", "begrip", "woordeskat"],
    answer: "gedig",
    explanation: "'Gedig' means 'poem'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'letter'?",
    options: ["brief", "gedig", "advertensie", "hersiening"],
    answer: "brief",
    explanation: "'Brief' means 'letter'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'advertisement'?",
    options: ["advertensie", "gedig", "brief", "woordeskat"],
    answer: "advertensie",
    explanation: "'Advertensie' means 'advertisement'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'revision'?",
    options: ["hersiening", "begrip", "woordeskat", "gedig"],
    answer: "hersiening",
    explanation: "'Hersiening' means 'revision', going over work again before an exam.",
  },
];

const SynopticRevision = () => (
  <AfrikaansTopic
    title="Sinoptiese Hersiening"
    subtitle="Full curriculum review, mixed-genre texts, and comprehension strategies"
    learnSteps={learnSteps}
    task="gr9-synoptic-revision-t4"
    bank={bank}
    speak="options"
  />
);

export default SynopticRevision;
