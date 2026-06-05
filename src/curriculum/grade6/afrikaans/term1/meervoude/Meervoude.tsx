import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'What are plurals?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A plural (<strong>meervoud</strong>) means more than one. Many Afrikaans nouns add <strong>-e</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-flex items-center gap-3 text-2xl font-bold">
          <span className="inline-flex items-center">hond <SpeakButton text="hond" /></span>
          <span className="text-slate-400">→</span>
          <span className="inline-flex items-center text-indigo-600">honde <SpeakButton text="honde" /></span>
        </div>
        <p className="text-slate-500">one dog → many dogs</p>
      </div>
    ),
  },
  {
    title: 'Adding -s',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Some Afrikaans nouns make the plural with <strong>-s</strong>, especially many words ending in vowels or unstressed syllables.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-flex items-center gap-3 text-2xl font-bold">
          <span className="inline-flex items-center">tafel <SpeakButton text="tafel" /></span>
          <span className="text-slate-400">→</span>
          <span className="inline-flex items-center text-indigo-600">tafels <SpeakButton text="tafels" /></span>
        </div>
        <p className="text-slate-500">Learn common examples by listening and practising.</p>
      </div>
    ),
  },
  {
    title: 'Spelling changes and special plurals',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Some plurals change spelling. A short vowel often needs a doubled consonant, and some words are special.
        </p>
        <div className="grid gap-3 bg-slate-50 p-6 rounded-xl text-2xl font-bold">
          <span className="inline-flex items-center justify-center">kop <SpeakButton text="kop" /> <span className="mx-3 text-slate-400">→</span> koppe <SpeakButton text="koppe" /></span>
          <span className="inline-flex items-center justify-center">kind <SpeakButton text="kind" /> <span className="mx-3 text-slate-400">→</span> kinders <SpeakButton text="kinders" /></span>
        </div>
        <p className="text-slate-500">Practise high-confidence examples first.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say singular and plural forms aloud to notice the sound changes that happen in meervoude.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"boek / boeke"} phonetic={"[buk / ˈbukə]"} meaning={"book / books"} lang="af" />
          <PronunciationPlayer word={"hond / honde"} phonetic={"[hɔnt / ˈhɔndə]"} meaning={"dog / dogs"} lang="af" />
          <PronunciationPlayer word={"kind / kinders"} phonetic={"[kənt / ˈkəndərs]"} meaning={"child / children"} lang="af" />
          <PronunciationPlayer word={"huis / huise"} phonetic={"[ɦœys / ˈɦœysə]"} meaning={"house / houses"} lang="af" />
          <PronunciationPlayer word={"dag / dae"} phonetic={"[dax / dɑːi]"} meaning={"day / days"} lang="af" />
          <PronunciationPlayer word={"blom / blomme"} phonetic={"[blɔm / ˈblɔmə]"} meaning={"flower / flowers"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  { prompt: "What is the plural of 'hond' (dog)?", options: ['honde', 'honds', 'honne', 'hondes'], answer: 'honde', explanation: "Most Afrikaans nouns like 'hond' add -e: hond → honde." },
  { prompt: "What is the plural of 'kat' (cat)?", options: ['katte', 'kats', 'kate', 'katers'], answer: 'katte', explanation: "'Kat' has a short vowel, so the consonant doubles: kat → katte." },
  { prompt: "What is the plural of 'boek' (book)?", options: ['boeke', 'boeks', 'boekke', 'boeken'], answer: 'boeke', explanation: "'Boek' takes -e in the plural: boek → boeke." },
  { prompt: "What is the plural of 'huis' (house)?", options: ['huise', 'huiss', 'huises', 'huiseë'], answer: 'huise', explanation: "'Huis' becomes 'huise' in the plural." },
  { prompt: "What is the plural of 'tafel' (table)?", options: ['tafels', 'tafele', 'taffels', 'tafelte'], answer: 'tafels', explanation: "'Tafel' is a common noun that forms the plural with -s." },
  { prompt: "What is the plural of 'appel' (apple)?", options: ['appels', 'appele', 'appel', 'appelers'], answer: 'appels', explanation: "'Appel' forms the plural with -s: appel → appels." },
  { prompt: "What is the plural of 'kop' (head/cup)?", options: ['koppe', 'kops', 'kope', 'kopies'], answer: 'koppe', explanation: "The consonant doubles after the short vowel: kop → koppe." },
  { prompt: "What is the plural of 'kind' (child)?", options: ['kinders', 'kinde', 'kinds', 'kindere'], answer: 'kinders', explanation: "'Kind' has the special plural 'kinders'." },
  { prompt: "Which word is already plural?", options: ['honde', 'hond', 'kat', 'boek'], answer: 'honde', explanation: "'Honde' means more than one dog." },
  { prompt: "Which plural uses -s?", options: ['tafels', 'honde', 'katte', 'boeke'], answer: 'tafels', explanation: "'Tafel' becomes 'tafels' by adding -s." },
];

const Meervoude = () => (
  <AfrikaansTopic
    title="Meervoude"
    subtitle="Making Afrikaans plurals"
    learnSteps={learnSteps}
    task="meervoude"
    bank={bank}
    speak="options"
  />
);

export default Meervoude;
