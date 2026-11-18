import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { SystemsDiagram, GearPair } from '../../../../../components/diagrams/tech8/Tech8c';
import { BICYCLE_TERMS, bicycleGear, gearMA, wheelTurnsPerPedalTurn } from '../../../../../components/diagrams/tech8/tech8cHelpers';

// Every number comes from tech8cHelpers.ts (tested in tech8cHelpers.test.ts and g8TechT3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',');

export const learnSteps: LearnStep[] = [
  {
    title: 'The gears of a bicycle',
    content: slide(
      <>
        <Rule>On a bicycle the pedals turn the chain wheel, which is the driver (master) gear. The chain turns the cog on the rear wheel, which is the driven (slave) gear. The number of teeth on the chain wheel and the cog decide the gear ratio.</Rule>
        <FactCards
          cards={[
            { title: 'Driver (master)', line1: 'turned by the pedals:', line2: 'the chain wheel' },
            { title: 'Driven (slave)', line1: 'turned by the chain:', line2: 'the cog on the rear wheel' },
            { title: 'Chain wheel', line1: 'the large front gear', line2: 'attached to the pedals' },
            { title: 'Cog', line1: 'a small gear on the', line2: 'rear wheel' },
          ]}
          aria={`Bicycle gear terms. ${BICYCLE_TERMS.map((t) => `${t.term}: ${t.meaning}`).join('. ')}.`}
        />
        <Worked
          title="A chain wheel with 48 teeth and a cog with 12 teeth"
          steps={[
            `The wheel turns 48 ÷ 12 = ${n(wheelTurnsPerPedalTurn(48, 12))} times for each turn of the pedals.`,
            `This is a ${bicycleGear(48, 12)}: fast but harder to pedal.`,
            `A chain wheel with 28 teeth and a cog with 32 teeth gives ${n(wheelTurnsPerPedalTurn(28, 32))} turns per pedal turn: a ${bicycleGear(28, 32)}.`,
          ]}
        />
        <Mistake>Thinking that a bicycle has one gear ratio. Moving the chain to another cog or chain wheel changes the ratio.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choosing a gear',
    content: slide(
      <>
        <Rule>A low gear (a small chain wheel and a large cog) gives a large mechanical advantage: it is easy to pedal up a hill, but the wheel turns slowly. A high gear (a large chain wheel and a small cog) makes the wheel turn faster for each pedal turn, which is good on a flat road, but it needs more force.</Rule>
        <GearPair driver={14} driven={30} />
        <Worked
          title="Hill or flat road?"
          steps={[
            `On a steep hill choose a low gear: with 14 teeth on the driver and 30 on the driven gear the MA is ${n(gearMA(14, 30))} on this pair.`,
            `On a flat road choose a high gear: 48 ÷ 12 gives ${n(wheelTurnsPerPedalTurn(48, 12))} wheel turns for every pedal turn.`,
            'When the force needed rises, the speed falls: you cannot have both.',
          ]}
        />
        <Mistake>Saying that a low gear is slower to pedal. It is easier to pedal (more force), but the bicycle moves more slowly for each pedal turn.</Mistake>
      </>,
    ),
  },
  {
    title: 'Systems diagrams',
    content: slide(
      <>
        <Rule>We can analyse a mechanical system by breaking it into input, process and output. A systems diagram shows these three parts in boxes joined by arrows. We can also plan a system to produce a specific output, such as a gear train with MA = 4 or a driven gear that rotates faster than the driver.</Rule>
        <SystemsDiagram input="effort force / on the pedals" process="chain wheel / and cog" output="rotation / of the wheel" />
        <Worked
          title="Draw the systems diagram for MA = 4"
          steps={[
            'Input: a small force turns the driver gear.',
            `Process: a driver with 12 teeth turns a driven gear with 48 teeth, so MA = 48 ÷ 12 = ${n(gearMA(12, 48))}.`,
            'Output: a force four times bigger, turning more slowly.',
          ]}
        />
        <Mistake>Drawing the output before the process. The diagram runs from input to process to output.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the driver gear of a bicycle.</>,
          <>The chain wheel has 36 teeth and the cog 12. How many wheel turns for one pedal turn?</>,
          <>Which gear makes a hill easy to climb?</>,
          <>Which three boxes make up a systems diagram?</>,
        ]}
        answers={[
          <>The chain wheel.</>,
          <>{n(wheelTurnsPerPedalTurn(36, 12))} times.</>,
          <>A low gear.</>,
          <>Input, process and output.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which bicycle gear is turned directly by the pedals?",
    options: ["The cog on the rear wheel", "The front wheel", "The chain wheel at the pedals", "The brake"],
    answer: "The chain wheel at the pedals",
    explanation: "The pedals turn the chain wheel, which drives the cog.",
  },
  {
    prompt: "In a bicycle gear system, what is the rear cog called?",
    options: ["Driven (slave) gear", "Driver (master) gear", "Idler gear", "Bevel gear"],
    answer: "Driven (slave) gear",
    explanation: "The chain turns the cog.",
  },
  {
    prompt: "A chain wheel has 48 teeth and the cog has 12 teeth. How many times does the wheel turn for one turn of the pedals?",
    options: ["0,25 times", "36 times", "60 times", "4 times"],
    answer: "4 times",
    explanation: "Wheel turns per pedal turn = chain wheel teeth ÷ cog teeth = 48 ÷ 12 = 4.",
  },
  {
    prompt: "With 32 teeth on the chain wheel and 16 on the cog, how often does the wheel turn per pedal turn?",
    options: ["0,5 times", "2 times", "16 times", "48 times"],
    answer: "2 times",
    explanation: "Wheel turns per pedal turn = chain wheel teeth ÷ cog teeth = 32 ÷ 16 = 2.",
  },
  {
    prompt: "A chain wheel has 28 teeth and a cog has 32 teeth. What kind of gear setting is this?",
    options: ["High gear", "Low gear", "Neither, they are equal", "It depends on the chain"],
    answer: "Low gear",
    explanation: "28 ÷ 32 is less than 1, so the wheel turns less than once per pedal turn.",
  },
  {
    prompt: "Which gear is best for pedalling up a steep hill?",
    options: ["A high gear", "Any gear is the same", "No gear", "A low gear"],
    answer: "A low gear",
    explanation: "A low gear has a large mechanical advantage.",
  },
  {
    prompt: "Which gear is best on a flat road when you want speed?",
    options: ["A high gear", "A low gear", "The smallest chain wheel", "No gear"],
    answer: "A high gear",
    explanation: "A high gear turns the wheel faster for each pedal turn.",
  },
  {
    prompt: "Why is a low gear easy to pedal?",
    options: ["It multiplies the speed", "It has no chain", "It multiplies the force", "It uses no teeth"],
    answer: "It multiplies the force",
    explanation: "A low gear gives mechanical advantage greater than 1.",
  },
  {
    prompt: "What happens to the speed when the force from a gear system increases?",
    options: ["The speed increases", "The speed stays the same", "The speed doubles", "The speed decreases"],
    answer: "The speed decreases",
    explanation: "If force increases, speed decreases.",
  },
  {
    prompt: "A systems diagram splits a machine into which three parts?",
    options: ["Cause, effect and result", "Input, process and output", "Start, middle and end", "Force, load and effort"],
    answer: "Input, process and output",
    explanation: "A system is analysed as input, process and output.",
  },
  {
    prompt: "In a systems diagram for a bicycle, what is the input?",
    options: ["The effort force on the pedals", "The turning of the wheel", "The chain wheel and cog", "The road surface"],
    answer: "The effort force on the pedals",
    explanation: "The rider's force on the pedals is the input.",
  },
  {
    prompt: "In a systems diagram for a bicycle, what is the process?",
    options: ["The effort force", "The rotation of the wheel", "The chain wheel and cog", "The rider's weight"],
    answer: "The chain wheel and cog",
    explanation: "The gear system changes the force and speed.",
  },
  {
    prompt: "In a systems diagram for a bicycle, what is the output?",
    options: ["The force on the pedals", "The chain wheel", "The rotation of the wheel", "The brakes"],
    answer: "The rotation of the wheel",
    explanation: "The system produces a turning wheel.",
  },
  {
    prompt: "A gear train must make the driven gear rotate faster than the driver. In the systems diagram, which part does the gear train fill?",
    options: ["The process", "The input", "The output", "None of the three"],
    answer: "The process",
    explanation: "The gear train is the process that changes the speed.",
  },
];

const BicycleGearsSystemsDiagrams = () => (
  <CapsSubjectTopic
    title="Bicycle Gears and Systems Diagrams"
    subtitle="Chain wheel and cogs, high and low gears, and input-process-output diagrams"
    learnSteps={learnSteps}
    task="gr8-bicycle-gears-systems-diagrams-t3"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default BicycleGearsSystemsDiagrams;
