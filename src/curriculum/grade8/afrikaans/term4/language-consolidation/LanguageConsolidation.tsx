import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise core grammar areas',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          End-of-year consolidation revises tenses, punctuation, concord and sentence control.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">tye <SpeakButton text="tye" /></span>
          <span className="inline-flex items-center">leestekens <SpeakButton text="leestekens" /></span>
          <span className="inline-flex items-center">sinsbou <SpeakButton text="sinsbou" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Fix common language errors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Work through mixed errors to improve automatic grammar decisions.
        </p>
        <p className="text-xl text-slate-700">Accuracy grows through repeated correction in context.</p>
      </div>
    ),
  },
  {
    title: 'Prepare for final assessment',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Consolidation helps learners answer integrated comprehension and language tasks confidently.
        </p>
        <p className="text-slate-500">Review both rules and practical sentence application.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Use these past-tense words aloud to notice the common het ge- pattern in Afrikaans.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"het"} phonetic={"[hɛt]"} meaning={"has / had (auxiliary)"} lang="af" />
          <PronunciationPlayer word={"ge-"} phonetic={"[χə]"} meaning={"past-tense prefix"} lang="af" />
          <PronunciationPlayer word={"gespeel"} phonetic={"[χəˈspeəl]"} meaning={"played"} lang="af" />
          <PronunciationPlayer word={"gelees"} phonetic={"[χəˈleəs]"} meaning={"read (past)"} lang="af" />
          <PronunciationPlayer word={"geskryf"} phonetic={"[χəˈskrɛif]"} meaning={"wrote / written"} lang="af" />
          <PronunciationPlayer word={"gekook"} phonetic={"[χəˈkuək]"} meaning={"cooked"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die korrekte verlede tyd: 'Gister ___ ons die opdrag voltooi.'",
    options: ['het', 'sal', 'is', 'word'],
    answer: 'het',
    explanation: "'Gister' signals past tense with 'het'.",
  },
  {
    prompt: "Watter sin het korrekte woordorde ná 'Môre'?",
    options: ['Môre skryf ons die toets.', 'Môre ons skryf die toets.', 'Ons môre skryf die toets.', 'Skryf ons môre die toets ons.'],
    answer: 'Môre skryf ons die toets.',
    explanation: 'Verb placement remains correct after a fronted time phrase.',
  },
  {
    prompt: "Kies die korrekte leesteken: 'Ek hou van lees___ skryf en oefen.'",
    options: [',', '.', '!', '?'],
    answer: ',',
    explanation: 'A comma separates listed actions.',
  },
  {
    prompt: "Watter woordsoort is 'gelukkig' in: 'Sy glimlag gelukkig'?",
    options: ['Bywoord', 'Selfstandige naamwoord', 'Voegwoord', 'Lidwoord'],
    answer: 'Bywoord',
    explanation: "It describes how she smiles.",
  },
  {
    prompt: "Kies die sin met korrekte kongruensie.",
    options: ['Die klas werk stil.', 'Die klas werk stilletjie is.', 'Die klas werke stil.', 'Die klas het werk stil nou.'],
    answer: 'Die klas werk stil.',
    explanation: 'Subject and verb agreement are correct.',
  },
  {
    prompt: "Wat is die beste antoniem vir 'duidelik'?",
    options: ['onduidelik', 'helder', 'presies', 'netjies'],
    answer: 'onduidelik',
    explanation: "'Onduidelik' is the opposite of 'duidelik'.",
  },
  {
    prompt: "Watter sin gebruik hoofletters korrek?",
    options: ['Op Dinsdag lees ons Afrikaans in die biblioteek.', 'op Dinsdag lees ons afrikaans in die biblioteek.', 'Op dinsdag lees ons Afrikaans in die biblioteek.', 'Op Dinsdag lees ons afrikaans in die biblioteek.'],
    answer: 'Op Dinsdag lees ons Afrikaans in die biblioteek.',
    explanation: 'Sentence start and proper nouns are capitalized correctly.',
  },
  {
    prompt: "Waarom is taalkonsolidasie belangrik voor die eindeksamen?",
    options: ['Dit versterk kernreëls en verminder slordige foute', 'Dit vervang alle leeswerk', 'Dit fokus net op een vraagtipe', 'Dit maak redigering onnodig'],
    answer: 'Dit versterk kernreëls en verminder slordige foute',
    explanation: 'Consolidation improves accuracy across mixed tasks.',
  },
];

const LanguageConsolidation = () => (
  <AfrikaansTopic
    title="Taalkonsolidasie"
    subtitle="Integrated grammar and sentence-control end-of-year revision"
    learnSteps={learnSteps}
    task="gr8-language-consolidation-t4"
    bank={bank}
    speak="options"
  />
);

export default LanguageConsolidation;
