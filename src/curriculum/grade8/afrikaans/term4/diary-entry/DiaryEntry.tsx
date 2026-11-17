import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The opening",
    content: slide(
      <>
        <Rule>A <Af>dagboekinskrywing</Af> <En>diary entry</En> is written for yourself. It starts with the <Af>datum</Af> <En>date</En> and the greeting <Af>Liewe Dagboek</Af> <En>Dear Diary</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["dagboek", "diary"], ["inskrywing", "entry"], ["datum", "date"]]} aria="Afrikaans words with their English meaning: dagboek is diary, inskrywing is entry, datum is date." />
        <Worked
          title="Open the entry"
          steps={[
            <><Af>Liewe Dagboek,</Af> <En>Dear Diary,</En> <SpeakButton text="Liewe Dagboek," /></>,
            <>After the greeting, write about your day with <Af>Ek</Af> <En>I</En>.</>,
            <><Af>Die datum</Af> <En>the date</En> comes first.</>,
          ]}
        />
        <Mistake>Starting with <Af>Geagte Meneer</Af>. A diary is personal.</Mistake>
      </>,
    ),
  },
  {
    title: "Time words and the past",
    content: slide(
      <>
        <Rule>Say when things happen with <Af>gister</Af> <En>yesterday</En>, <Af>vandag</Af> <En>today</En> and <Af>môre</Af> <En>tomorrow</En>. For the past use <Af>het</Af> and a word with <Af>ge-</Af>.</Rule>
        <WordBoxes words={["Ek", "het", "gister", "gespeel"]} hot={[1, 3]} aria="The sentence in boxes: Ek het gister gespeel." />
        <Worked
          title="Say what happened"
          steps={[
            <><Af>Gister het ek gespeel.</Af> <En>Yesterday I played.</En> <SpeakButton text="Gister het ek gespeel." /></>,
            <><Af>Môre sal ek rus.</Af> <En>Tomorrow I will rest.</En></>,
          ]}
        />
        <Mistake>Writing <Af>Ek speel gister</Af>. For the past write <Af>Ek het gister gespeel.</Af></Mistake>
      </>,
    ),
  },
  {
    title: "Feelings",
    content: slide(
      <>
        <Rule>A diary shows how you feel. Use <Af>bly</Af> <En>happy</En>, <Af>hartseer</Af> <En>sad</En>, <Af>moeg</Af> <En>tired</En> and <Af>trots</Af> <En>proud</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["bly", "happy"], ["hartseer", "sad"], ["trots", "proud"]]} aria="Afrikaans words with their English meaning: bly is happy, hartseer is sad, trots is proud." />
        <Worked
          title="Say how you feel"
          steps={[
            <><Af>Ek is trots.</Af> <En>I am proud.</En> <SpeakButton text="Ek is trots." /></>,
            <><Af>Ek was hartseer.</Af> <En>I was sad.</En></>,
          ]}
        />
        <Mistake>Only listing events. Add one sentence about how you feel.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>yesterday</En>?</>} answer={<><Af>Gister</Af>.</>} />
        <Check question={<>Which word means <En>tired</En>?</>} answer={<><Af>Moeg</Af>.</>} />
        <Check question={<>Complete: <Af>Gister ___ ek gespeel.</Af></>} answer={<><Af>het</Af>: <Af>Gister het ek gespeel.</Af></>} />
        <Check question={<>How does a diary start?</>} answer={<><Af>Liewe Dagboek,</Af></>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'diary'?",
    options: ["dagblad", "bladsy", "skryfboek", "dagboek"],
    answer: "dagboek",
    explanation: "'Dagboek' means 'diary'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'yesterday'?",
    options: ["vandag", "gister", "môre", "nou"],
    answer: "gister",
    explanation: "'Gister' means 'yesterday'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'tomorrow'?",
    options: ["môre", "vandag", "gister", "nou"],
    answer: "môre",
    explanation: "'Môre' means 'tomorrow'.",
  },
  {
    prompt: "Hoe begin 'n dagboekinskrywing?",
    options: ["Geagte Meneer,", "Aan: die Redakteur", "Liewe Dagboek,", "Hoogagtend"],
    answer: "Liewe Dagboek,",
    explanation: "A diary entry starts with 'Liewe Dagboek'.",
  },
  {
    prompt: "Watter sin vertel van iets wat reeds gebeur het?",
    options: ["Ek speel nou buite. at work", "Môre sal ek speel. in a file", "Speel jy vandag? for a user", "Gister het ek gespeel."],
    answer: "Gister het ek gespeel.",
    explanation: "'het' and 'ge-' show the past.",
  },
  {
    prompt: "Voltooi die sin: 'Gister ___ ek gespeel.'",
    options: ["sal", "is", "het", "word"],
    answer: "het",
    explanation: "'het' shows the past.",
  },
  {
    prompt: "Watter woord beteken 'tired'?",
    options: ["bly", "trots", "moeg", "hartseer"],
    answer: "moeg",
    explanation: "'Moeg' means 'tired'.",
  },
  {
    prompt: "Watter woord beteken 'proud'?",
    options: ["moeg", "hartseer", "trots", "bly"],
    answer: "trots",
    explanation: "'Trots' means 'proud'.",
  },
  {
    prompt: "Watter sin vertel hoe jy voel?",
    options: ["Ek het gespeel.", "Ek is trots.", "Môre sal ek rus.", "Gister was dit Maandag."],
    answer: "Ek is trots.",
    explanation: "It names a feeling.",
  },
  {
    prompt: "Watter sin sê 'Tomorrow I will rest'?",
    options: ["Gister het ek gerus.", "Vandag rus ek nie.", "Ek rus altyd.", "Môre sal ek rus."],
    answer: "Môre sal ek rus.",
    explanation: "'sal' shows the future.",
  },
  {
    prompt: "Wat kom eerste in 'n dagboekinskrywing?",
    options: ["die handtekening", "die adres van die skool", "die onderwerp van die brief", "die datum"],
    answer: "die datum",
    explanation: "The date comes first.",
  },
  {
    prompt: "Watter woord gebruik jy om oor jouself te skryf?",
    options: ["Ek", "Hy", "Sy", "Hulle"],
    answer: "Ek",
    explanation: "A diary uses 'Ek'.",
  },
];

const DiaryEntry = () => (
  <AfrikaansTopic
    title="Dagboekinskrywing"
    subtitle="The opening, time words, the past with het, and feelings"
    learnSteps={learnSteps}
    task="gr8-afr-diary-entry-t4"
    bank={bank}
    speak="options"
  />
);

export default DiaryEntry;
