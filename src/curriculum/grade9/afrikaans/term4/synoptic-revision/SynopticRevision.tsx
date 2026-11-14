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
    prompt: "What is a key concept in this topic?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A",
    explanation: "This is the correct answer.",
  },
  {
    prompt: "How should you approach this skill?",
    options: ['Carefully, step by step', 'Quickly, without checking', 'By guessing the answers', 'By copying from a friend'],
    answer: 'Carefully, step by step',
    explanation: "Careful practice builds strong skills.",
  },
  {
    prompt: "What supports learning?",
    options: ["Repetition", "Breaks", "Guessing", "Skipping"],
    answer: "Repetition",
    explanation: "Repetition strengthens understanding.",
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
