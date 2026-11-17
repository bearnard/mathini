import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Steps in order",
    content: slide(
      <>
        <Rule><Af>Instruksies</Af> <En>instructions</En> tell you how to do something. Use order words: <Af>eerste</Af> <En>first</En>, <Af>dan</Af> <En>then</En>, <Af>daarna</Af> <En>after that</En> and <Af>laastens</Af> <En>lastly</En>.</Rule>
        <OrderTiles tiles={["Eerste", "Dan", "Daarna", "Laastens"]} aria="The steps in order: Eerste, Dan, Daarna, Laastens." />
        <Worked
          title="Make a paper boat"
          steps={[
            <><Af>Eerste, vou die papier in die helfte.</Af> <En>First, fold the paper in half.</En> <SpeakButton text="Eerste, vou die papier in die helfte." /></>,
            <><Af>Dan vou jy die hoeke.</Af> <En>Then you fold the corners.</En> <Af>Laastens maak jy die boot oop.</Af> <En>Lastly you open the boat.</En></>,
          ]}
        />
        <Mistake>Writing the steps in the wrong order. The order words show the order.</Mistake>
      </>,
    ),
  },
  {
    title: "The command form",
    content: slide(
      <>
        <Rule>An instruction uses the command form. It is the verb alone, without a name in front: <Af>Vou!</Af> <En>Fold!</En> <Af>Draai!</Af> <En>Turn!</En> <Af>Loop!</Af> <En>Walk!</En></Rule>
        <MeaningPairs kind="same" pairs={[["Vou die papier.", "Fold the paper."], ["Draai links.", "Turn left."], ["Loop reguit.", "Walk straight."]]} aria="Afrikaans words with their English meaning: Vou die papier. is Fold the paper., Draai links. is Turn left., Loop reguit. is Walk straight.." />
        <Worked
          title="Say it as a command"
          steps={[
            <><Af>Draai links.</Af> <En>Turn left.</En> <SpeakButton text="Draai links." /></>,
            <><Af>Loop reguit.</Af> <En>Walk straight on.</En></>,
          ]}
        />
        <Mistake>Writing <Af>Jy vou die papier</Af> in a list of steps. Use the command: <Af>Vou die papier.</Af></Mistake>
      </>,
    ),
  },
  {
    title: "Giving directions",
    content: slide(
      <>
        <Rule>Directions tell a person the way. Use <Af>links</Af> <En>left</En>, <Af>regs</Af> <En>right</En> and <Af>reguit</Af> <En>straight</En>, and place words such as <Af>langs</Af> <En>next to</En>, <Af>teenoor</Af> <En>opposite</En> and <Af>verby</Af> <En>past</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["links", "left"], ["regs", "right"], ["teenoor", "opposite"]]} aria="Afrikaans words with their English meaning: links is left, regs is right, teenoor is opposite." />
        <Worked
          title="Find the clinic"
          steps={[
            <><Af>Draai regs en stap verby die kerk.</Af> <En>Turn right and walk past the church.</En> <SpeakButton text="Draai regs en stap verby die kerk." /></>,
            <><Af>Die kliniek is teenoor die bakkery.</Af> <En>The clinic is opposite the bakery.</En></>,
            <><Af>Draai regs by die kerk.</Af> <En>Turn right at the church.</En> Name <Af>’n plek soos die kerk</Af> <En>a place such as the church</En>.</>,
          ]}
        />
        <Mistake>Giving directions with no landmark. Name a place, such as <Af>die kerk</Af> <En>the church</En>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>first</En>?</>} answer={<><Af>Eerste</Af>.</>} />
        <Check question={<>Which word means <En>left</En>?</>} answer={<><Af>Links</Af>.</>} />
        <Check question={<>Which is a command?</>} answer={<><Af>Draai links.</Af></>} />
        <Check question={<>Which word means <En>opposite</En>?</>} answer={<><Af>Teenoor</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'first'?",
    options: ["eerste", "laastens", "daarna", "dan"],
    answer: "eerste",
    explanation: "'Eerste' means 'first'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'lastly'?",
    options: ["eerste hier", "daarna hier", "laastens", "dan hier"],
    answer: "laastens",
    explanation: "'Laastens' means 'lastly'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'left'?",
    options: ["regs", "reguit", "links", "verby"],
    answer: "links",
    explanation: "'Links' means 'left'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'right'?",
    options: ["links", "regs", "reguit", "teenoor"],
    answer: "regs",
    explanation: "'Regs' means 'right'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'straight on'?",
    options: ["reguit", "linkerkant", "regterkant", "agterkant"],
    answer: "reguit",
    explanation: "'Reguit' means 'straight on'.",
  },
  {
    prompt: "Watter woord beteken 'opposite'?",
    options: ["langsaan", "voor-aan", "teenoor", "agter-aan"],
    answer: "teenoor",
    explanation: "'Teenoor' means 'opposite'.",
  },
  {
    prompt: "Watter sin is 'n opdrag?",
    options: ["Ek draai links.", "Hy het links gedraai.", "Draai links.", "Draai jy links?"],
    answer: "Draai links.",
    explanation: "A command is the verb alone.",
  },
  {
    prompt: "Watter sin sê 'Fold the paper'?",
    options: ["Ek vou die papier.", "Die papier is gevou.", "Het jy die papier?", "Vou die papier."],
    answer: "Vou die papier.",
    explanation: "'Vou die papier' is a command.",
  },
  {
    prompt: "Watter woord wys die volgorde?",
    options: ["papier", "kerk", "daarna", "bakkery"],
    answer: "daarna",
    explanation: "'Daarna' means 'after that'.",
  },
  {
    prompt: "Waarmee begin 'n lys instruksies gewoonlik?",
    options: ["eerste", "laastens", "teenoor", "verby"],
    answer: "eerste",
    explanation: "Start with 'eerste'.",
  },
  {
    prompt: "Watter sin gee 'n rigting?",
    options: ["Draai regs by die kerk.", "Gister was ek by die kerk.", "Ek hou van die groot kerk.", "Die kerk is baie mooi hier."],
    answer: "Draai regs by die kerk.",
    explanation: "It tells the way.",
  },
  {
    prompt: "Wat help mense om die plek te vind?",
    options: ["’n lang storie oor die dorp", "’n gedig oor die kerk hier", "’n grap oor die kerk hier", "’n plek soos die kerk"],
    answer: "’n plek soos die kerk",
    explanation: "A landmark helps.",
  },
];

const InstructionsDirections = () => (
  <AfrikaansTopic
    title="Aanwysings en instruksies"
    subtitle="Steps in order, the command form, and giving directions"
    learnSteps={learnSteps}
    task="gr8-afr-instructions-directions-t2"
    bank={bank}
    speak="options"
  />
);

export default InstructionsDirections;
