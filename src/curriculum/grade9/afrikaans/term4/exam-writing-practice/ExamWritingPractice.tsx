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
          Say these exam-practice words aloud before moving into timed writing and revision tasks.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"beplan"} phonetic={"[bəˈplan]"} meaning={"plan"} lang="af" />
          <PronunciationPlayer word={"formaat"} phonetic={"[fɔrˈmɑːt]"} meaning={"format"} lang="af" />
          <PronunciationPlayer word={"proeflees"} phonetic={"[ˈprufleəs]"} meaning={"proofread"} lang="af" />
          <PronunciationPlayer word={"tyd"} phonetic={"[tɛit]"} meaning={"time"} lang="af" />
          <PronunciationPlayer word={"vraag"} phonetic={"[frɑːχ]"} meaning={"question"} lang="af" />
          <PronunciationPlayer word={"antwoord"} phonetic={"[ˈantvɔrt]"} meaning={"answer"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'plan'?",
    options: ["beplan", "formaat", "tyd", "vraag"],
    answer: "beplan",
    explanation: "'Beplan' means 'plan'. Plan before you write.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'format'?",
    options: ["formaat", "beplan", "vraag", "antwoord"],
    answer: "formaat",
    explanation: "'Formaat' means 'format'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'proofread'?",
    options: ["proeflees", "beplan", "antwoord", "formaat"],
    answer: "proeflees",
    explanation: "'Proeflees' means 'proofread', to check for mistakes.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'time'?",
    options: ["tyd", "vraag", "formaat", "antwoord"],
    answer: "tyd",
    explanation: "'Tyd' means 'time'. Manage your time in an exam.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'question'?",
    options: ["vraag", "tyd", "antwoord", "beplan"],
    answer: "vraag",
    explanation: "'Vraag' means 'question'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'answer'?",
    options: ["antwoord", "vraag", "tyd", "formaat"],
    answer: "antwoord",
    explanation: "'Antwoord' means 'answer'.",
  },
];

const ExamWritingPractice = () => (
  <AfrikaansTopic
    title="Eksamen Skryfwerk Praktyk"
    subtitle="Final essays, transactional texts, planning, and proofreading"
    learnSteps={learnSteps}
    task="gr9-exam-writing-practice-t4"
    bank={bank}
    speak="options"
  />
);

export default ExamWritingPractice;
