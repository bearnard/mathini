import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The parts of an entry",
    content: slide(
      <>
        <Rule>A <Af>dagboek</Af> <En>diary</En> entry starts with the <Af>datum</Af> <En>date</En>. Then you write <Af>Liewe Dagboek,</Af> <En>Dear Diary,</En>.</Rule>
        <LetterLayout parts={["datum", "groet", "gebeure", "gevoel", "plan"]} aria="The parts of the text from top to bottom: datum, groet, gebeure, gevoel, plan." />
        <Worked
          title="Order the parts"
          steps={[
            <><Af>Die datum kom eerste.</Af> <En>The date comes first.</En></>,
            <><Af>Liewe Dagboek,</Af> <En>Dear Diary,</En> comes next.</>,
          ]}
        />
        <Mistake>Leaving out the date. Every entry needs a date.</Mistake>
      </>,
    ),
  },
  {
    title: "What happened",
    content: slide(
      <>
        <Rule>Use <Af>vandag</Af> <En>today</En> and <Af>gister</Af> <En>yesterday</En>. Past sentences use <Af>het</Af> <En>had</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["vandag", "today"], ["gister", "yesterday"], ["dagboek", "diary"]]} aria="Afrikaans words with their English meaning: vandag is today, gister is yesterday, dagboek is diary." />
        <Worked
          title="Write what happened"
          steps={[
            <><Af>Vandag het ek skool toe gegaan.</Af> <En>Today I went to school.</En></>,
            <><Af>Ek het my vriende gesien.</Af> <En>I saw my friends.</En></>,
          ]}
        />
        <Mistake>Leaving out het. Say Ek het gesien, not Ek gesien.</Mistake>
      </>,
    ),
  },
  {
    title: "How you feel",
    content: slide(
      <>
        <Rule>Say how you feel with <Af>Ek voel</Af> <En>I feel</En>. Add a reason if you can.</Rule>
        <WordBoxes words={["Ek", "voel", "bly."]} hot={[1]} aria="The sentence in boxes: Ek voel bly.." />
        <Worked
          title="Write a feeling"
          steps={[
            <><Af>Ek voel bly.</Af> <En>I feel happy.</En></>,
            <><Af>Ek voel moeg.</Af> <En>I feel tired.</En></>,
          ]}
        />
        <Mistake>Writing only events. A diary also says how you feel.</Mistake>
      </>,
    ),
  },
  {
    title: "Your plan",
    content: slide(
      <>
        <Rule>End with a plan. Use <Af>môre</Af> <En>tomorrow</En> and <Af>sal</Af> <En>will</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["môre", "tomorrow"], ["sal", "will"], ["vandag", "today"]]} aria="Afrikaans words with their English meaning: môre is tomorrow, sal is will, vandag is today." />
        <Worked
          title="Write a plan"
          steps={[
            <><Af>Môre sal ek my boeke saamneem.</Af> <En>Tomorrow I will take my books along.</En></>,
          ]}
        />
        <Mistake>Using het for a plan. For tomorrow use sal, not het.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>diary</En>?</>} answer={<><Af>Dagboek</Af>.</>} />
        <Check question={<>Which word means <En>tomorrow</En>?</>} answer={<><Af>Môre</Af>.</>} />
        <Check question={<>How does an entry start?</>} answer={<>With the date.</>} />
        <Check question={<>Which word shows a plan?</>} answer={<><Af>Sal</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'diary'?",
    options: ["dagboek", "leerders for a user", "vandag", "môre"],
    answer: "dagboek",
    explanation: "'Dagboek' means 'diary'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'date'?",
    options: ["dagboek", "datum", "gister", "môre"],
    answer: "datum",
    explanation: "'Datum' means 'date'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'today'?",
    options: ["môre", "gister", "vandag", "dagboek"],
    answer: "vandag",
    explanation: "'Vandag' means 'today'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'yesterday'?",
    options: ["vandag", "datum", "dagboek", "gister"],
    answer: "gister",
    explanation: "'Gister' means 'yesterday'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'tomorrow'?",
    options: ["môre", "gister", "dagboek", "vandag"],
    answer: "môre",
    explanation: "'Môre' means 'tomorrow'.",
  },
  {
    prompt: "Watter sin sê 'Dear Diary'?",
    options: ["Vandag het ek skool toe gegaan.", "Liewe Dagboek,", "Ek voel moeg.", "Ek voel bly."],
    answer: "Liewe Dagboek,",
    explanation: "'Liewe Dagboek,' means 'Dear Diary'.",
  },
  {
    prompt: "Watter sin sê 'Today I went to school'?",
    options: ["Ek het my vriende gesien. in a file", "Môre sal ek my boeke saamneem. for a user", "Vandag het ek skool toe gegaan.", "Die datum kom eerste. in a lab for a task"],
    answer: "Vandag het ek skool toe gegaan.",
    explanation: "'Vandag het ek skool toe gegaan.' means 'Today I went to school'.",
  },
  {
    prompt: "Watter sin sê 'I saw my friends'?",
    options: ["Liewe Dagboek,", "Vandag het ek skool toe gegaan.", "Ek voel moeg.", "Ek het my vriende gesien."],
    answer: "Ek het my vriende gesien.",
    explanation: "'Ek het my vriende gesien.' means 'I saw my friends'.",
  },
  {
    prompt: "Watter sin sê 'I feel happy'?",
    options: ["Ek voel bly.", "Ek het my vriende gesien.", "Die datum kom eerste.", "Liewe Dagboek,"],
    answer: "Ek voel bly.",
    explanation: "'Ek voel bly.' means 'I feel happy'.",
  },
  {
    prompt: "Watter sin sê 'I feel tired'?",
    options: ["Die datum kom eerste.", "Ek voel moeg.", "Ek voel bly.", "Môre sal ek my boeke saamneem."],
    answer: "Ek voel moeg.",
    explanation: "'Ek voel moeg.' means 'I feel tired'.",
  },
  {
    prompt: "Watter sin sê 'Tomorrow I will take my books along'?",
    options: ["Vandag het ek skool toe gegaan.", "Ek voel bly.", "Môre sal ek my boeke saamneem.", "Liewe Dagboek,"],
    answer: "Môre sal ek my boeke saamneem.",
    explanation: "'Môre sal ek my boeke saamneem.' means 'Tomorrow I will take my books along'.",
  },
  {
    prompt: "Watter sin sê 'The date comes first'?",
    options: ["Vandag het ek skool toe gegaan.", "Ek voel bly.", "Môre sal ek my boeke saamneem.", "Die datum kom eerste."],
    answer: "Die datum kom eerste.",
    explanation: "'Die datum kom eerste.' means 'The date comes first'.",
  },
];

const DiaryEntry = () => (
  <AfrikaansTopic
    title="Skryf ’n Dagboekinskrywing"
    subtitle="The date, Liewe Dagboek, what happened, how you feel and a plan for tomorrow"
    learnSteps={learnSteps}
    task="afr6-diary-entry-t2"
    bank={bank}
    speak="options"
  />
);

export default DiaryEntry;
