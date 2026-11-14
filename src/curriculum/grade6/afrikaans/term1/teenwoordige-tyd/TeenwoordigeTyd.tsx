import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'What is present tense?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The present tense (<strong>teenwoordige tyd</strong>) tells us what happens now or usually happens.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-flex items-center gap-3 text-2xl font-bold">
          <span className="inline-flex items-center">Ek speel <SpeakButton text="Ek speel" /></span>
          <span className="text-slate-400">=</span>
          <span className="text-indigo-600">I play / I am playing</span>
        </div>
        <p className="text-slate-500">Afrikaans uses the same sentence for both meanings.</p>
      </div>
    ),
  },
  {
    title: 'The verb stays the same',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In the present tense, the main verb usually stays the same after <strong>Ek</strong>, <strong>Jy</strong>, <strong>Hy</strong>, <strong>Sy</strong>, and <strong>Ons</strong>.
        </p>
        <div className="grid gap-3 bg-indigo-50 p-6 rounded-xl text-xl font-bold">
          <span className="inline-flex items-center justify-center">Ek speel <SpeakButton text="Ek speel" /></span>
          <span className="inline-flex items-center justify-center">Jy speel <SpeakButton text="Jy speel" /></span>
          <span className="inline-flex items-center justify-center">Hy speel <SpeakButton text="Hy speel" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Find the verb',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A verb (<strong>werkwoord</strong>) is an action word. Find the action to understand the sentence.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-flex flex-wrap justify-center gap-4 text-xl font-bold">
          <span className="inline-flex items-center">lees <SpeakButton text="lees" /></span>
          <span className="inline-flex items-center">skryf <SpeakButton text="skryf" /></span>
          <span className="inline-flex items-center">drink <SpeakButton text="drink" /></span>
          <span className="inline-flex items-center">hardloop <SpeakButton text="hardloop" /></span>
        </div>
        <p className="text-slate-500">These words tell us what someone does.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Repeat these present-tense verbs aloud before using them in simple Afrikaans sentences.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"lees"} phonetic={"[leəs]"} meaning={"read"} lang="af" />
          <PronunciationPlayer word={"skryf"} phonetic={"[skrɛif]"} meaning={"write"} lang="af" />
          <PronunciationPlayer word={"praat"} phonetic={"[prɑːt]"} meaning={"speak / talk"} lang="af" />
          <PronunciationPlayer word={"speel"} phonetic={"[speəl]"} meaning={"play"} lang="af" />
          <PronunciationPlayer word={"eet"} phonetic={"[eət]"} meaning={"eat"} lang="af" />
          <PronunciationPlayer word={"loop"} phonetic={"[loəp]"} meaning={"walk"} lang="af" />
        </div>
      </div>
    ),
  },
];

export const bank: AfrikaansItem[] = [
  { prompt: "Which sentence is in the present tense?", options: ['Ek speel.', 'Ek het gespeel.', 'Ek sal speel.', 'Ek wou speel.'], answer: 'Ek speel.', explanation: "'Ek speel' tells what is happening now or usually happens." },
  { prompt: "Choose the correct Afrikaans for 'You play.'", options: ['Jy speel.', 'Jy speels.', 'Jy gespeel.', 'Jy sal speel.'], answer: 'Jy speel.', explanation: "In the present tense, the verb stays 'speel': Jy speel." },
  { prompt: "Choose the correct Afrikaans for 'He plays.'", options: ['Hy speel.', 'Hy speels.', 'Hy gespeel.', 'Hy speel het.'], answer: 'Hy speel.', explanation: "Afrikaans does not add -s to the verb after 'Hy'." },
  { prompt: "What is the verb in 'Sy lees die boek'?", options: ['lees', 'Sy', 'die', 'boek'], answer: 'lees', explanation: "'Lees' is the action word; it means 'reads/is reading'." },
  { prompt: "What is the verb in 'Ons drink water'?", options: ['drink', 'Ons', 'water', 'drinks'], answer: 'drink', explanation: "'Drink' is the action word in the sentence." },
  { prompt: "Choose the present tense sentence meaning 'I write.'", options: ['Ek skryf.', 'Ek het geskryf.', 'Ek sal skryf.', 'Ek skryfs.'], answer: 'Ek skryf.', explanation: "'Ek skryf' is present tense." },
  { prompt: "Which word is a 'werkwoord' (verb)?", options: ['hardloop', 'kat', 'boek', 'skool'], answer: 'hardloop', explanation: "'Hardloop' means 'run', so it is a verb." },
  { prompt: "Complete the sentence: 'Hulle ___ by die skool.'", options: ['leer', 'leers', 'geleer', 'sal leer'], answer: 'leer', explanation: "Present tense uses the unchanged verb: Hulle leer." },
  { prompt: "Choose the correct present tense form: 'Ons ___ Afrikaans.'", options: ['praat', 'praats', 'gepraat', 'sal praat'], answer: 'praat', explanation: "The present tense verb stays 'praat': Ons praat Afrikaans." },
  { prompt: "What does 'Ek lees' mean?", options: ['I read / I am reading', 'I read yesterday', 'I will read', 'I cannot read'], answer: 'I read / I am reading', explanation: "Afrikaans present tense can mean both 'I read' and 'I am reading'." },
];

const TeenwoordigeTyd = () => (
  <AfrikaansTopic
    title="Teenwoordige Tyd"
    subtitle="The present tense"
    learnSteps={learnSteps}
    task="teenwoordige-tyd"
    bank={bank}
    speak="options"
  />
);

export default TeenwoordigeTyd;
