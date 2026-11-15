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
          Say these grammar words aloud so the metalanguage of Afrikaans feels familiar during practice.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"leestekens"} phonetic={"[ˈleəstɛkəns]"} meaning={"punctuation"} lang="af" />
          <PronunciationPlayer word={"woordorde"} phonetic={"[ˈvuərdərdə]"} meaning={"word order"} lang="af" />
          <PronunciationPlayer word={"tyd"} phonetic={"[tɛit]"} meaning={"tense / time"} lang="af" />
          <PronunciationPlayer word={"voornaamwoord"} phonetic={"[ˈfoːrnɑːmvuərt]"} meaning={"pronoun"} lang="af" />
          <PronunciationPlayer word={"werkwoord"} phonetic={"[ˈvɛrkvuərt]"} meaning={"verb"} lang="af" />
          <PronunciationPlayer word={"sin"} phonetic={"[sən]"} meaning={"sentence"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'punctuation'?",
    options: ["leestekens", "woordorde", "werkwoord", "voornaamwoord"],
    answer: "leestekens",
    explanation: "'Leestekens' means 'punctuation' (full stops, commas and so on).",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'word order'?",
    options: ["woordorde", "leestekens", "tyd", "voornaamwoord"],
    answer: "woordorde",
    explanation: "'Woordorde' means 'word order'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'tense' (verlede, teenwoordige of toekomende)?",
    options: ["tyd", "sin", "werkwoord", "woordorde"],
    answer: "tyd",
    explanation: "'Tyd' means 'tense' (or 'time'): past, present or future.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'pronoun'?",
    options: ["voornaamwoord", "leestekens", "werkwoord", "sin"],
    answer: "voornaamwoord",
    explanation: "'Voornaamwoord' means 'pronoun'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'verb'?",
    options: ["werkwoord", "voornaamwoord", "leestekens", "woordorde"],
    answer: "werkwoord",
    explanation: "'Werkwoord' means 'verb'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'sentence'?",
    options: ["sin", "tyd", "werkwoord", "woordorde"],
    answer: "sin",
    explanation: "'Sin' means 'sentence'.",
  },
];

const GrammarConsolidation = () => (
  <AfrikaansTopic
    title="Taalkonsolidasie"
    subtitle="Year-end review of grammar, spelling, vocabulary, and FET preparation"
    learnSteps={learnSteps}
    task="gr9-grammar-consolidation-t4"
    bank={bank}
    speak="options"
  />
);

export default GrammarConsolidation;
