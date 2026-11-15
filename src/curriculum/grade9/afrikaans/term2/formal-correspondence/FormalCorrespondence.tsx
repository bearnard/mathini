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
          Practice these formal-writing words aloud so register and structure feel more natural on the page.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Geagte"} phonetic={"[χəˈɑxtə]"} meaning={"Dear / respected"} lang="af" />
          <PronunciationPlayer word={"Onderwerp"} phonetic={"[ˈɔndərvɛrp]"} meaning={"Subject"} lang="af" />
          <PronunciationPlayer word={"Adres"} phonetic={"[aˈdrɛs]"} meaning={"Address"} lang="af" />
          <PronunciationPlayer word={"Datum"} phonetic={"[ˈdɑːtəm]"} meaning={"Date"} lang="af" />
          <PronunciationPlayer word={"Handtekening"} phonetic={"[ˈhanttɛikəneŋ]"} meaning={"Signature"} lang="af" />
          <PronunciationPlayer word={"Vriendelik"} phonetic={"[ˈfriəndələk]"} meaning={"Kind / friendly"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'Dear / respected'?",
    options: ["Geagte", "Adres", "Datum", "Vriendelik"],
    answer: "Geagte",
    explanation: "'Geagte' means 'Dear' or 'respected' and opens a formal letter, e.g. 'Geagte Meneer'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'Subject'?",
    options: ["Onderwerp", "Handtekening", "Vriendelik", "Adres"],
    answer: "Onderwerp",
    explanation: "'Onderwerp' means 'Subject'. A formal letter or e-mail states its subject.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'Address'?",
    options: ["Adres", "Datum", "Geagte", "Onderwerp"],
    answer: "Adres",
    explanation: "'Adres' means 'Address'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'Date'?",
    options: ["Datum", "Adres", "Geagte", "Vriendelik"],
    answer: "Datum",
    explanation: "'Datum' means 'Date'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'Signature'?",
    options: ["Handtekening", "Onderwerp", "Adres", "Vriendelik"],
    answer: "Handtekening",
    explanation: "'Handtekening' means 'Signature'. It comes at the end of the letter.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'Kind / friendly'?",
    options: ["Vriendelik", "Datum", "Geagte", "Onderwerp"],
    answer: "Vriendelik",
    explanation: "'Vriendelik' means 'kind' or 'friendly'.",
  },
];

const FormalCorrespondence = () => (
  <AfrikaansTopic
    title="Formele Korrespondensie"
    subtitle="Register, audience awareness, and professional format"
    learnSteps={learnSteps}
    task="gr9-formal-correspondence-t2"
    bank={bank}
    speak="options"
  />
);

export default FormalCorrespondence;
