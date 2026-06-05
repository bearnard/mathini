import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Build sentence control',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reinforcement means practising punctuation, sentence order and clear meaning.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">leestekens <SpeakButton text="leestekens" /></span>
          <span className="inline-flex items-center">sinsbou <SpeakButton text="sinsbou" /></span>
          <span className="inline-flex items-center">woordeskat <SpeakButton text="woordeskat" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Edit with purpose',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Read each sentence aloud to hear mistakes in grammar and flow.
        </p>
        <p className="text-xl text-slate-700">Fix one type of error at a time.</p>
      </div>
    ),
  },
  {
    title: 'Vocabulary in context',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learn words in full sentences so you remember meaning and usage together.
        </p>
        <p className="text-slate-500">Context helps you choose precise words.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Repeat these time and linking words aloud while practising Afrikaans word order.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"eers"} phonetic={"[iərs]"} meaning={"first"} lang="af" />
          <PronunciationPlayer word={"dan"} phonetic={"[dan]"} meaning={"then"} lang="af" />
          <PronunciationPlayer word={"omdat"} phonetic={"[ɔmˈdat]"} meaning={"because"} lang="af" />
          <PronunciationPlayer word={"vandag"} phonetic={"[fanˈdax]"} meaning={"today"} lang="af" />
          <PronunciationPlayer word={"môre"} phonetic={"[ˈmɔːrə]"} meaning={"tomorrow / morning"} lang="af" />
          <PronunciationPlayer word={"gister"} phonetic={"[ˈχəstər]"} meaning={"yesterday"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die korrekte leesteken: 'Waar gaan jy ___'",
    options: ['?', '.', '!', ','],
    answer: '?',
    explanation: 'A direct question ends with a question mark.',
  },
  {
    prompt: "Watter sin het die korrekte woordorde?",
    options: ['Vandag lees ek my boek.', 'Vandag ek lees my boek.', 'Lees ek vandag my boek ek.', 'Ek vandag my boek lees.'],
    answer: 'Vandag lees ek my boek.',
    explanation: 'After a time phrase, Afrikaans usually inverts subject and verb.',
  },
  {
    prompt: "Kies die beste woord: 'Die film was baie ___.'",
    options: ['interessant', 'interesse', 'interesser', 'interes'],
    answer: 'interessant',
    explanation: "'Interessant' fits the adjective slot correctly.",
  },
  {
    prompt: "Watter sin is grammatikaal korrek?",
    options: ['Hulle het gister by die winkel gewag.', 'Hulle het gister by die winkel wag.', 'Hulle gister het by die winkel gewag.', 'Hulle by die winkel gewag het gister.'],
    answer: 'Hulle het gister by die winkel gewag.',
    explanation: 'The auxiliary and past participle are correctly placed.',
  },
  {
    prompt: "Kies die korrekte spelling.",
    options: ['geleentheid', 'geleeentheid', 'geleenthied', 'gelleentheid'],
    answer: 'geleentheid',
    explanation: 'This is the standard Afrikaans spelling.',
  },
  {
    prompt: "Watter voegwoord pas? 'Ek leer hard, ___ ek wil slaag.'",
    options: ['want', 'maar', 'of', 'en'],
    answer: 'want',
    explanation: "'Want' gives a reason.",
  },
  {
    prompt: "Kies die beste sinoniem vir 'begin'.",
    options: ['start', 'einde', 'stop', 'wag'],
    answer: 'start',
    explanation: "'Start' carries the same meaning as 'begin'.",
  },
  {
    prompt: "Watter redigeeraksie is die nuttigste laaste stap?",
    options: ['Lees jou werk weer stadig deur', 'Skryf alles in hoofletters', 'Vee jou eerste paragraaf uit', 'Verander die onderwerp heeltemal'],
    answer: 'Lees jou werk weer stadig deur',
    explanation: 'A final read-through catches overlooked mistakes.',
  },
];

const LanguageReinforcement = () => (
  <AfrikaansTopic
    title="Taalversterking"
    subtitle="Editing, punctuation and vocabulary in context"
    learnSteps={learnSteps}
    task="gr7-language-reinforcement-t3"
    bank={bank}
    speak="options"
  />
);

export default LanguageReinforcement;
