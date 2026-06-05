import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Transactional writing formats',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Formal letters and practical texts need clear structure and audience focus.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">formele brief <SpeakButton text="formele brief" /></span>
          <span className="inline-flex items-center">voegwoorde <SpeakButton text="voegwoorde" /></span>
          <span className="inline-flex items-center">leestekens <SpeakButton text="leestekens" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Refine sentence links',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Conjunctions improve flow and make reasons, contrasts and results explicit.
        </p>
        <p className="text-xl text-slate-700">Choose link words that match meaning exactly.</p>
      </div>
    ),
  },
  {
    title: 'Check punctuation and reported speech',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Edit punctuation and reporting forms to improve formal writing quality.
        </p>
        <p className="text-slate-500">Final checks prevent avoidable language errors.</p>
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
  {
    prompt: "Watter groet pas in 'n formele brief?",
    options: ['Geagte Mevrou', 'Hi daar', 'Hallo maat', 'Yo vriend'],
    answer: 'Geagte Mevrou',
    explanation: 'Formal letters start with respectful greetings.',
  },
  {
    prompt: "Kies die beste voegwoord: 'Ek studeer hard, ___ ek wil slaag.'",
    options: ['want', 'maar', 'of', 'alhoewel'],
    answer: 'want',
    explanation: "'Want' gives a reason.",
  },
  {
    prompt: "Watter leesteken voltooi: 'Dankie vir u hulp___'",
    options: ['.', '?', ':', ';'],
    answer: '.',
    explanation: 'A polite statement ends with a full stop.',
  },
  {
    prompt: "Kies die korrekte indirekte rede: Hy sê: 'Ek is laat.'",
    options: ['Hy sê dat hy laat is.', 'Hy sê dat ek laat is.', 'Hy sê hy is laat?', 'Hy sê: hy laat is.'],
    answer: 'Hy sê dat hy laat is.',
    explanation: 'Reported speech adjusts pronoun and structure.',
  },
  {
    prompt: "Wat is die hoofdoel van 'n formele brief se slotparagraaf?",
    options: ['Om die versoek netjies af te sluit', 'Om nuwe onverwante idees te begin', 'Om graptaal te gebruik', 'Om geen slot te hê nie'],
    answer: 'Om die versoek netjies af te sluit',
    explanation: 'The closing should be concise and purposeful.',
  },
  {
    prompt: "Kies die beste sin met samehang.",
    options: ['Ons begin vroeg; daarom voltooi ons betyds.', 'Ons begin vroeg daarom ons voltooi betyds daarom.', 'Begin vroeg voltooi betyds daarom ons.', 'Ons begin vroeg maar daarom en.'],
    answer: 'Ons begin vroeg; daarom voltooi ons betyds.',
    explanation: 'Logical linking shows clear cause and result.',
  },
  {
    prompt: "Watter opsie wys taalverfyning tydens redigering?",
    options: ['Vervang vae woorde met presiese taal', 'Laat alle foute soos dit is', 'Verwyder leestekens', 'Skryf alles in hoofletters'],
    answer: 'Vervang vae woorde met presiese taal',
    explanation: 'Refinement improves clarity and register.',
  },
  {
    prompt: "Kies die mees gepaste afsluiting vir 'n formele brief.",
    options: ['Die uwe', 'Groete maat', 'Cheers', 'Later'],
    answer: 'Die uwe',
    explanation: 'This closing is appropriate in formal correspondence.',
  },
];

const TransactionalWritingLanguageRefinement = () => (
  <AfrikaansTopic
    title="Transaksionele Skryfwerk & Taalverfyning"
    subtitle="Formal writing, conjunction choices and editing precision"
    learnSteps={learnSteps}
    task="gr8-transactional-writing-language-refinement-t3"
    bank={bank}
    speak="options"
  />
);

export default TransactionalWritingLanguageRefinement;
