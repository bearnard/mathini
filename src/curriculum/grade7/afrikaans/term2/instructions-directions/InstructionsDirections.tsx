import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Instructions",
    content: slide(
      <>
        <Rule><Af>Instruksies</Af> <En>Instructions</En> tell you how to do something. Each step starts with a command, such as <Af>Vou</Af> <En>Fold</En>, <Af>Sny</Af> <En>Cut</En> or <Af>Plak</Af> <En>Stick</En>. Use short sentences, one step in each.</Rule>
        <OrderTiles tiles={["Vou die papier.", "Sny die papier.", "Plak dit op die kaart."]} aria={"Three steps in order: Vou die papier., Sny die papier., Plak dit op die kaart."} />
        <Worked
          title={"Read the steps"}
          steps={[
            <><Af>Vou die papier.</Af> <En>Fold the paper.</En> <SpeakButton text="Vou die papier." /></>,
            <><Af>Sny die papier.</Af> <En>Cut the paper.</En></>,
            <><Af>Plak dit op die kaart.</Af> <En>Stick it on the card.</En></>,
          ]}
        />
        <Mistake>Writing the steps as one long sentence. Give each step its own line.</Mistake>
      </>,
    ),
  },
  {
    title: "Order words",
    content: slide(
      <>
        <Rule>Order words show the sequence. <Af>Eerste</Af> <En>First</En>, <Af>dan</Af> <En>then</En>, <Af>daarna</Af> <En>after that</En> and <Af>laastens</Af> <En>finally</En> tell the reader which step comes when.</Rule>
        <MeaningPairs kind="same" pairs={[["eerste", "first"], ["dan", "then"], ["laastens", "finally"]]} aria={"Afrikaans order words with their English meaning: eerste is first, dan is then, laastens is finally."} />
        <Worked
          title={"Use order words"}
          steps={[
            <><Af>Eerste vou jy die papier.</Af> <En>First you fold the paper.</En> <SpeakButton text="Eerste vou jy die papier." /></>,
            <><Af>Dan sny jy dit.</Af> <En>Then you cut it.</En></>,
            <><Af>Laastens plak jy dit op die kaart.</Af> <En>Finally you stick it on the card.</En></>,
          ]}
        />
        <Mistake>Leaving out the order words. Without them, the reader may not know the order.</Mistake>
      </>,
    ),
  },
  {
    title: "Directions",
    content: slide(
      <>
        <Rule>To give directions, use <Af>links</Af> <En>left</En>, <Af>regs</Af> <En>right</En> and <Af>reguit</Af> <En>straight on</En>. Use <Af>Draai</Af> <En>Turn</En> and <Af>Gaan</Af> <En>Go</En> as commands. <Af>Robot</Af> <En>Traffic light</En> is the word that people use in South Africa.</Rule>
        <MeaningPairs kind="same" pairs={[["links", "left"], ["regs", "right"], ["reguit", "straight on"]]} aria={"Afrikaans direction words with their English meaning: links is left, regs is right, reguit is straight on."} />
        <Worked
          title={"Give directions"}
          steps={[
            <><Af>Gaan reguit.</Af> <En>Go straight on.</En> <SpeakButton text="Gaan reguit." /></>,
            <><Af>Draai links by die robot.</Af> <En>Turn left at the traffic light.</En></>,
          ]}
        />
        <Mistake>Mixing up links and regs. Check the words before you write them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>first</En>?</>} answer={<><Af>Eerste</Af>.</>} />
        <Check question={<>Which word means <En>right</En> (direction)?</>} answer={<><Af>Regs</Af>.</>} />
        <Check question={<>Which sentence means <En>Fold the paper</En>?</>} answer={<><Af>Vou die papier.</Af></>} />
        <Check question={<>Which word means <En>finally</En>?</>} answer={<><Af>Laastens</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'instructions'?",
    options: ["dagboek", "vraelys", "instruksies", "advertensie"],
    answer: "instruksies",
    explanation: "'Instruksies' means 'instructions'.",
  },
  {
    prompt: "Watter sin is 'n opdrag?",
    options: ["Vou die papier.", "Ek hou van papier.", "Die papier is wit.", "Waar is die papier?"],
    answer: "Vou die papier.",
    explanation: "'Vou die papier' is a command: Fold the paper.",
  },
  {
    prompt: "Wat beteken 'Sny die papier'?",
    options: ["Fold the paper.", "Stick the paper.", "Colour the paper.", "Cut the paper."],
    answer: "Cut the paper.",
    explanation: "'Sny' means 'cut'.",
  },
  {
    prompt: "Watter woord beteken 'first'?",
    options: ["dan", "eerste", "daarna", "laastens"],
    answer: "eerste",
    explanation: "'Eerste' means 'first'.",
  },
  {
    prompt: "Watter woord beteken 'then'?",
    options: ["eerste", "daarna", "dan", "laastens"],
    answer: "dan",
    explanation: "'Dan' means 'then'.",
  },
  {
    prompt: "Watter woord beteken 'finally'?",
    options: ["laastens", "eerste", "dan", "vervolgens"],
    answer: "laastens",
    explanation: "'Laastens' means 'finally'.",
  },
  {
    prompt: "Watter woord beteken 'left'?",
    options: ["regs", "reguit", "robot", "links"],
    answer: "links",
    explanation: "'Links' means 'left'.",
  },
  {
    prompt: "Watter woord beteken 'right' (direction)?",
    options: ["links", "regs", "reguit", "robot"],
    answer: "regs",
    explanation: "'Regs' means 'right'.",
  },
  {
    prompt: "Watter woord beteken 'straight on'?",
    options: ["links", "regs", "reguit", "agteruit"],
    answer: "reguit",
    explanation: "'Reguit' means 'straight on'.",
  },
  {
    prompt: "Watter sin sê 'Turn left at the traffic light'?",
    options: ["Draai links by die robot.", "Gaan reguit.", "Draai regs by die tweede robot.", "Vou die papier."],
    answer: "Draai links by die robot.",
    explanation: "'Draai links by die robot' means 'Turn left at the traffic light'.",
  },
  {
    prompt: "Watter sin sê 'Go straight on'?",
    options: ["Draai links by die robot.", "Draai regs by die robot.", "Sny die papier.", "Gaan reguit."],
    answer: "Gaan reguit.",
    explanation: "'Gaan reguit' means 'Go straight on'.",
  },
  {
    prompt: "Watter sin sê 'Finally you stick it on the card'?",
    options: ["Eerste vou jy die papier mooi in twee.", "Laastens plak jy dit op die kaart.", "Dan sny jy dit.", "Plak dit op die kaart."],
    answer: "Laastens plak jy dit op die kaart.",
    explanation: "'Laastens' shows that this is the last step.",
  },
];

const InstructionsDirections = () => (
  <AfrikaansTopic
    title={"Instruksies en aanwysings"}
    subtitle={"Commands, order words and giving directions"}
    learnSteps={learnSteps}
    task={"gr7-afr-instructions-directions-t2"}
    bank={bank}
    speak="options"
  />
);

export default InstructionsDirections;
