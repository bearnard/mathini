import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'What is a noun?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A noun is a naming word. In Afrikaans we call it a <strong>selfstandige naamwoord</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-flex flex-wrap justify-center gap-4 text-xl font-bold">
          <span className="inline-flex items-center">kat <SpeakButton text="kat" /></span>
          <span className="inline-flex items-center">boek <SpeakButton text="boek" /></span>
          <span className="inline-flex items-center">skool <SpeakButton text="skool" /></span>
        </div>
        <p className="text-slate-500">A person, place, animal, or thing can be a noun.</p>
      </div>
    ),
  },
  {
    title: 'The article die',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use <strong>die</strong> when you mean <strong>the</strong>: a specific noun everyone knows about.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-flex items-center gap-3 text-2xl font-bold">
          <span className="inline-flex items-center">die hond <SpeakButton text="die hond" /></span>
          <span className="text-slate-400">=</span>
          <span className="text-indigo-600">the dog</span>
        </div>
        <p className="text-slate-500">Afrikaans uses <strong>die</strong> for both singular and plural nouns.</p>
      </div>
    ),
  },
  {
    title: "The article 'n",
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use <strong>'n</strong> when you mean <strong>a</strong> or <strong>an</strong>: one noun, but not a specific one.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-flex items-center gap-3 text-2xl font-bold">
          <span className="inline-flex items-center">'n boek <SpeakButton text="'n boek" /></span>
          <span className="text-slate-400">=</span>
          <span className="text-indigo-600">a book</span>
        </div>
        <p className="text-slate-500">Remember: <strong>'n</strong> is only for one thing.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these noun and article words aloud so grammar labels connect with familiar examples.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"die"} phonetic={"[di]"} meaning={"the"} lang="af" />
          <PronunciationPlayer word={"'n"} phonetic={"[ə]"} meaning={"a / an"} lang="af" />
          <PronunciationPlayer word={"boek"} phonetic={"[buk]"} meaning={"book"} lang="af" />
          <PronunciationPlayer word={"tafel"} phonetic={"[ˈtɑːfəl]"} meaning={"table"} lang="af" />
          <PronunciationPlayer word={"hond"} phonetic={"[hɔnt]"} meaning={"dog"} lang="af" />
          <PronunciationPlayer word={"kind"} phonetic={"[kənt]"} meaning={"child"} lang="af" />
        </div>
      </div>
    ),
  },
];

export const bank: AfrikaansItem[] = [
  { prompt: "What is a 'selfstandige naamwoord'?", options: ['noun', 'verb', 'adjective', 'question'], answer: 'noun', explanation: "A 'selfstandige naamwoord' is a noun: a naming word." },
  { prompt: "Which word is a noun in Afrikaans?", options: ['kat', 'hardloop', 'mooi', 'en'], answer: 'kat', explanation: "'Kat' names an animal, so it is a noun." },
  { prompt: "Choose the Afrikaans article meaning 'the'.", options: ['die', "'n", 'is', 'en'], answer: 'die', explanation: "'Die' means 'the' in Afrikaans." },
  { prompt: "Choose the Afrikaans article meaning 'a' or 'an'.", options: ["'n", 'die', 'dit', 'met'], answer: "'n", explanation: "'n' means 'a' or 'an'." },
  { prompt: "Which phrase means 'the book'?", options: ['die boek', "'n boek", 'die hond', "'n skool"], answer: 'die boek', explanation: "'Die' means 'the' and 'boek' means 'book'." },
  { prompt: "Which phrase means 'a house'?", options: ["'n huis", 'die huis', "'n hond", 'die skool'], answer: "'n huis", explanation: "'n' means 'a' and 'huis' means 'house'." },
  { prompt: "In 'die skool', what is 'skool'?", options: ['noun', 'article', 'verb', 'greeting'], answer: 'noun', explanation: "'Skool' names a place, so it is a noun." },
  { prompt: "In the phrase ''n kat', what does ''n' show?", options: ['one non-specific cat', 'many cats', 'the specific cat', 'a verb action'], answer: 'one non-specific cat', explanation: "'n' is indefinite and means one non-specific thing." },
  { prompt: "Which phrase is best for 'the dog'?", options: ['die hond', "'n hond", 'die kat', 'hond die'], answer: 'die hond', explanation: "The article comes before the noun: 'die hond'." },
  { prompt: "Which option uses the article 'die' correctly?", options: ['die water', 'water die', "'n die", 'boek die'], answer: 'die water', explanation: "'Die' comes before the noun: 'die water'." },
];

const NaamwoordeLidwoorde = () => (
  <AfrikaansTopic
    title="Naamwoorde & Lidwoorde"
    subtitle="Nouns and the articles die and 'n"
    learnSteps={learnSteps}
    task="naamwoorde-lidwoorde"
    bank={bank}
    speak="options"
  />
);

export default NaamwoordeLidwoorde;
