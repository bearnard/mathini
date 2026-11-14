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
    prompt: "What is a key concept in this topic?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A",
    explanation: "This is the correct answer.",
  },
  {
    prompt: "Why is this important?",
    options: ["For exams", "For communication", "For grades", "For all of the above"],
    answer: "For all of the above",
    explanation: "All reasons are valid.",
  },
  {
    prompt: "What helps most?",
    options: ["Studying alone", "Studying with others", "Practice tests", "All approaches"],
    answer: "All approaches",
    explanation: "Varied methods strengthen learning.",
  },
  {
    prompt: "How do you know if you have learned?",
    options: ["You feel ready", "You pass a test", "You can explain it", "All signs"],
    answer: "All signs",
    explanation: "Multiple indicators show mastery.",
  },
  {
    prompt: "What should be your goal?",
    options: ["Pass only", "Understand deeply", "Get high marks", "Enjoy learning"],
    answer: "Understand deeply",
    explanation: "Understanding is the foundation.",
  },
  {
    prompt: "How much should you practice?",
    options: ["A little", "A lot", "Regularly", "Until mastery"],
    answer: "Until mastery",
    explanation: "Practice until you fully grasp the material.",
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
