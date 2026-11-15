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
          Practice these transactional-writing words aloud before drafting formal documents and records.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"agenda"} phonetic={"[aˈχɛnda]"} meaning={"agenda"} lang="af" />
          <PronunciationPlayer word={"notule"} phonetic={"[noˈtyːlə]"} meaning={"minutes"} lang="af" />
          <PronunciationPlayer word={"verslag"} phonetic={"[fərˈslax]"} meaning={"report"} lang="af" />
          <PronunciationPlayer word={"uitnodiging"} phonetic={"[œitˈnuədəχəŋ]"} meaning={"invitation"} lang="af" />
          <PronunciationPlayer word={"versoek"} phonetic={"[fərˈsuək]"} meaning={"request"} lang="af" />
          <PronunciationPlayer word={"formeel"} phonetic={"[fɔrˈmeːl]"} meaning={"formal"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat noem ons die lys van items wat in 'n vergadering bespreek gaan word?",
    options: ["agenda", "notule", "verslag", "uitnodiging"],
    answer: "agenda",
    explanation: "An 'agenda' lists the items to be discussed at a meeting.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'minutes' (die skriftelike rekord van 'n vergadering)?",
    options: ["notule", "agenda", "versoek", "formeel"],
    answer: "notule",
    explanation: "'Notule' means 'minutes', the written record of what was discussed and decided.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'report'?",
    options: ["verslag", "notule", "versoek", "uitnodiging"],
    answer: "verslag",
    explanation: "'Verslag' means 'report'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'invitation'?",
    options: ["uitnodiging", "agenda", "verslag", "formeel"],
    answer: "uitnodiging",
    explanation: "'Uitnodiging' means 'invitation'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'request'?",
    options: ["versoek", "agenda", "notule", "uitnodiging"],
    answer: "versoek",
    explanation: "'Versoek' means 'request', as in a formal request letter.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'formal'?",
    options: ["formeel", "verslag", "versoek", "agenda"],
    answer: "formeel",
    explanation: "'Formeel' means 'formal'. Official documents use a formal style.",
  },
];

const TransactionalWriting = () => (
  <AfrikaansTopic
    title="Transaksionele Skryfwerk"
    subtitle="Agendas, minutes, reports, and formal structures"
    learnSteps={learnSteps}
    task="gr9-transactional-writing-t1"
    bank={bank}
    speak="options"
  />
);

export default TransactionalWriting;
