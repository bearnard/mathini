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
          Repeat these sentence-structure words aloud before changing voice or improving editing accuracy.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"onderwerp"} phonetic={"[ˈɔndərvɛrp]"} meaning={"subject"} lang="af" />
          <PronunciationPlayer word={"werkwoord"} phonetic={"[ˈvɛrkvuərt]"} meaning={"verb"} lang="af" />
          <PronunciationPlayer word={"voorwerp"} phonetic={"[ˈfoːrvɛrp]"} meaning={"object"} lang="af" />
          <PronunciationPlayer word={"bedrywende vorm"} phonetic={"[bəˈdrɛivəndə fɔrm]"} meaning={"active voice"} lang="af" />
          <PronunciationPlayer word={"lydende vorm"} phonetic={"[ˈlœidəndə fɔrm]"} meaning={"passive voice"} lang="af" />
          <PronunciationPlayer word={"sinsbou"} phonetic={"[ˈsənsboʊ]"} meaning={"sentence structure"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'subject' (van 'n sin)?",
    options: ["onderwerp", "werkwoord", "voorwerp", "sinsbou"],
    answer: "onderwerp",
    explanation: "'Onderwerp' is the subject, the doer of the action.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'verb'?",
    options: ["werkwoord", "onderwerp", "voorwerp", "sinsbou"],
    answer: "werkwoord",
    explanation: "'Werkwoord' means 'verb', the action word.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'object'?",
    options: ["voorwerp", "onderwerp", "werkwoord", "sinsbou"],
    answer: "voorwerp",
    explanation: "'Voorwerp' means 'object', the receiver of the action.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'active voice'?",
    options: ["bedrywende vorm", "lydende vorm", "sinsbou", "werkwoord"],
    answer: "bedrywende vorm",
    explanation: "'Bedrywende vorm' means 'active voice': the subject does the action.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'passive voice'?",
    options: ["lydende vorm", "bedrywende vorm", "sinsbou", "onderwerp"],
    answer: "lydende vorm",
    explanation: "'Lydende vorm' means 'passive voice': the subject receives the action.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'sentence structure'?",
    options: ["sinsbou", "voorwerp", "werkwoord", "onderwerp"],
    answer: "sinsbou",
    explanation: "'Sinsbou' means 'sentence structure'.",
  },
];

const SentenceStructureVoice = () => (
  <AfrikaansTopic
    title="Sinstruktuur & Stem"
    subtitle="Sentence patterns, active/passive voice, and editing"
    learnSteps={learnSteps}
    task="gr9-sentence-structure-voice-t3"
    bank={bank}
    speak="options"
  />
);

export default SentenceStructureVoice;
