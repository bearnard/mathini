import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Everyday greetings',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Afrikaans greetings help us start and end conversations politely. Use <strong>Hallo</strong>, <strong>Goeiemôre</strong>, and <strong>Totsiens</strong> often.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-flex flex-wrap justify-center gap-4 text-xl font-bold">
          <span className="inline-flex items-center">Hallo <SpeakButton text="Hallo" /></span>
          <span className="inline-flex items-center">Goeiemôre <SpeakButton text="Goeiemôre" /></span>
          <span className="inline-flex items-center">Totsiens <SpeakButton text="Totsiens" /></span>
        </div>
        <p className="text-slate-500">Hello • Good morning • Goodbye</p>
      </div>
    ),
  },
  {
    title: 'Polite words',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Polite words show respect. Say <strong>Dankie</strong> for thank you and <strong>Asseblief</strong> for please.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-flex items-center gap-3 text-2xl font-bold">
          <span className="inline-flex items-center text-indigo-600">Dankie <SpeakButton text="Dankie" /></span>
          <span className="text-slate-400">+</span>
          <span className="inline-flex items-center text-indigo-600">Asseblief <SpeakButton text="Asseblief" /></span>
        </div>
        <p className="text-slate-500">Thank you and please make your Afrikaans friendly.</p>
      </div>
    ),
  },
  {
    title: 'Useful classroom nouns',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learn common nouns by matching the Afrikaans word to its English meaning.
        </p>
        <div className="grid grid-cols-2 gap-3 bg-slate-50 p-6 rounded-xl text-lg font-bold">
          <span className="inline-flex items-center justify-center">kat <SpeakButton text="kat" /> = cat</span>
          <span className="inline-flex items-center justify-center">hond <SpeakButton text="hond" /> = dog</span>
          <span className="inline-flex items-center justify-center">huis <SpeakButton text="huis" /> = house</span>
          <span className="inline-flex items-center justify-center">skool <SpeakButton text="skool" /> = school</span>
          <span className="inline-flex items-center justify-center">boek <SpeakButton text="boek" /> = book</span>
          <span className="inline-flex items-center justify-center">water <SpeakButton text="water" /> = water</span>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these greeting phrases aloud so that everyday Afrikaans conversation feels natural and confident.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Goeiemore"} phonetic={"[ɣujəˈmɔːrə]"} meaning={"Good morning"} lang="af" />
          <PronunciationPlayer word={"Goedag"} phonetic={"[ɣuˈdax]"} meaning={"Good day"} lang="af" />
          <PronunciationPlayer word={"Totsiens"} phonetic={"[tɔtˈsins]"} meaning={"Goodbye"} lang="af" />
          <PronunciationPlayer word={"Dankie"} phonetic={"[ˈdaŋki]"} meaning={"Thank you"} lang="af" />
          <PronunciationPlayer word={"Asseblief"} phonetic={"[asəˈblif]"} meaning={"Please"} lang="af" />
          <PronunciationPlayer word={"Verskoon my"} phonetic={"[fərˈskoːn mɛi]"} meaning={"Excuse me"} lang="af" />
          <PronunciationPlayer word={"Hoe gaan dit?"} phonetic={"[huː χɑːn dət]"} meaning={"How are you?"} lang="af" />
          <PronunciationPlayer word={"Baie goed"} phonetic={"[ˈbɑːiə χut]"} meaning={"Very well"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  { prompt: "What does 'Hallo' mean in English?", options: ['Hello', 'Goodbye', 'Please', 'Book'], answer: 'Hello', explanation: "'Hallo' is the Afrikaans greeting for 'Hello'." },
  { prompt: "Choose the Afrikaans word for 'Good morning'.", options: ['Goeiemôre', 'Goeienaand', 'Totsiens', 'Dankie'], answer: 'Goeiemôre', explanation: "'Goeiemôre' means 'Good morning'." },
  { prompt: "What does 'Goeienaand' mean?", options: ['Good evening', 'Good morning', 'Goodbye', 'Thank you'], answer: 'Good evening', explanation: "'Goeienaand' is used in the evening." },
  { prompt: "Choose the Afrikaans word for 'Goodbye'.", options: ['Totsiens', 'Hallo', 'Asseblief', 'Skool'], answer: 'Totsiens', explanation: "'Totsiens' means 'Goodbye'." },
  { prompt: "What does 'Dankie' mean?", options: ['Thank you', 'Please', 'House', 'Dog'], answer: 'Thank you', explanation: "'Dankie' is the Afrikaans word for 'Thank you'." },
  { prompt: "Choose the Afrikaans word for 'Please'.", options: ['Asseblief', 'Dankie', 'Hallo', 'Water'], answer: 'Asseblief', explanation: "'Asseblief' means 'Please'." },
  { prompt: "What is the English meaning of 'kat'?", options: ['cat', 'dog', 'book', 'school'], answer: 'cat', explanation: "'Kat' means 'cat'." },
  { prompt: "Choose the Afrikaans word for 'dog'.", options: ['hond', 'kat', 'huis', 'boek'], answer: 'hond', explanation: "'Hond' means 'dog'." },
  { prompt: "What does 'skool' mean in English?", options: ['school', 'house', 'water', 'book'], answer: 'school', explanation: "'Skool' means 'school'." },
  { prompt: "Choose the Afrikaans word for 'book'.", options: ['boek', 'huis', 'water', 'kat'], answer: 'boek', explanation: "'Boek' means 'book'." },
];

const WoordeskatGroete = () => (
  <AfrikaansTopic
    title="Woordeskat & Groete"
    subtitle="Everyday Afrikaans words & greetings"
    learnSteps={learnSteps}
    task="woordeskat"
    bank={bank}
    speak="options"
  />
);

export default WoordeskatGroete;
