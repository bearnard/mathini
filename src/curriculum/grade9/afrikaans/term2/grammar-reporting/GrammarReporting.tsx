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
    prompt: "Watter Afrikaanse woord beteken 'and'?",
    options: ["en", "maar", "daarom", "terwyl"],
    answer: "en",
    explanation: "'En' means 'and' and joins two similar ideas.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'but'?",
    options: ["maar", "en", "daarom", "want"],
    answer: "maar",
    explanation: "'Maar' means 'but' and shows a contrast.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'therefore'?",
    options: ["daarom", "en", "maar", "terwyl"],
    answer: "daarom",
    explanation: "'Daarom' means 'therefore' and shows a result.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'while'?",
    options: ["terwyl", "daarom", "maar", "en"],
    answer: "terwyl",
    explanation: "'Terwyl' means 'while' and links two things happening at the same time.",
  },
  {
    prompt: "Watter woord gee, soos 'omdat', 'n rede?",
    options: ["want", "maar", "en", "terwyl"],
    answer: "want",
    explanation: "'Want' (because / for) gives a reason, like 'omdat'.",
  },
  {
    prompt: "Watter woord gee, soos 'want', 'n rede?",
    options: ["omdat", "daarom", "maar", "terwyl"],
    answer: "omdat",
    explanation: "'Omdat' (because) gives a reason, like 'want'.",
  },
];

const GrammarReporting = () => (
  <AfrikaansTopic
    title="Grammatika vir Verslagdoening"
    subtitle="Direct/indirect speech, conjunctions, and language editing"
    learnSteps={learnSteps}
    task="gr9-grammar-reporting-t2"
    bank={bank}
    speak="options"
  />
);

export default GrammarReporting;
