import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { GearPair, IdlerTrain } from '../../../../../components/diagrams/tech8/Tech8c';
import { BEVEL_TURN, designMA3, designSpeed4, directionOfGear, effectOf, gearMA, outputForce, outputSpeed, tradeOff, velocityRatio } from '../../../../../components/diagrams/tech8/tech8cHelpers';

// Every number comes from tech8cHelpers.ts (tested in tech8cHelpers.test.ts and g8TechT3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',');

export const learnSteps: LearnStep[] = [
  {
    title: 'Gears and counter-rotation',
    content: slide(
      <>
        <Rule>A gear is a wheel with teeth. When two spur gears mesh, the driver gear turns the driven gear and the driven gear turns in the opposite direction: this is counter-rotation. An idler gear placed between them makes the driven gear turn in the same direction as the driver, and the idler is made of a harder material because it rotates more often. Two bevel gears can transfer the axis of rotation through 90°.</Rule>
        <IdlerTrain />
        <Worked
          title="Follow the direction"
          steps={[
            `The driver is gear 1. Gear 2 turns ${directionOfGear(2)} (counter-rotation).`,
            `Gear 3 turns ${directionOfGear(3)}, so an idler between the driver and the driven gear makes them turn the same way.`,
            `Bevel gears turn the axis of rotation through ${BEVEL_TURN}°, for example in a hand drill.`,
          ]}
        />
        <Mistake>Thinking that an idler changes the speed. It only changes the direction; the ratio depends on the driver and the driven gear.</Mistake>
      </>,
    ),
  },
  {
    title: 'Velocity ratio and mechanical advantage',
    content: slide(
      <>
        <Rule>The ratio of two gears is found from the number of teeth (or the diameters). The velocity ratio is the output speed ÷ the input speed = driver teeth ÷ driven teeth. The mechanical advantage (MA) is the output force ÷ the input force = driven teeth ÷ driver teeth. If force increases, speed decreases, and the other way round.</Rule>
        <GearPair driver={10} driven={30} />
        <Worked
          title="A driver with 10 teeth and a driven gear with 30 teeth"
          steps={[
            `MA = 30 ÷ 10 = ${n(gearMA(10, 30))}: the force is multiplied by ${n(gearMA(10, 30))}. Velocity ratio = 10 ÷ 30 = ${n(velocityRatio(10, 30))}.`,
            `An input of 120 rotations per minute gives ${n(outputSpeed(120, 10, 30))} r/min, and an input force of 20 N gives ${n(outputForce(20, 10, 30))} N.`,
            `In this pair the ${effectOf(10, 30)}. MA × velocity ratio = ${n(tradeOff(10, 30))}.`,
          ]}
        />
        <Mistake>Dividing the driver teeth by the driven teeth to get the mechanical advantage. That is the velocity ratio; the MA is driven ÷ driver.</Mistake>
      </>,
    ),
  },
  {
    title: 'Designing gear systems',
    content: slide(
      <>
        <Rule>To design a gear system, choose the numbers of teeth to meet the specification. A smaller driver turning a bigger driven gear multiplies the force and slows the rotation. A bigger driver turning a smaller driven gear increases the speed and reduces the force. Systems can be drawn with circular templates or compasses.</Rule>
        <FactCards
          cards={[
            { title: 'Force 3 times bigger', line1: `driver ${designMA3.driver} teeth, driven ${designMA3.driven}`, line2: `teeth: MA = ${n(gearMA(designMA3.driver, designMA3.driven))}` },
            { title: 'Speed 4 times bigger', line1: `driver ${designSpeed4.driver} teeth, driven ${designSpeed4.driven}`, line2: `teeth: velocity ratio = ${n(velocityRatio(designSpeed4.driver, designSpeed4.driven))}` },
            { title: 'Four times the force', line1: 'driver 12 teeth, driven 48', line2: `teeth: MA = ${n(gearMA(12, 48))}` },
          ]}
          aria="Designing gear systems. Force three times bigger: a driver with 10 teeth and a driven gear with 30 teeth, so the mechanical advantage is 3. Speed four times bigger: a driver with 40 teeth and a driven gear with 10 teeth, so the velocity ratio is 4. Four times the force: a driver with 12 teeth and a driven gear with 48 teeth, so the mechanical advantage is 4."
        />
        <Worked
          title="Check the second design"
          steps={[
            `Driver 40 teeth, driven 10 teeth: velocity ratio = 40 ÷ 10 = ${n(velocityRatio(40, 10))}.`,
            `An input of 100 r/min gives ${n(outputSpeed(100, 40, 10))} r/min, four times faster.`,
            `The MA is ${n(gearMA(40, 10))}, so the output force is only a quarter of the input force.`,
          ]}
        />
        <Mistake>Expecting a gear system to give more force and more speed together. One goes up as the other goes down.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is counter-rotation?</>,
          <>Find the mechanical advantage when 10 teeth drive 30 teeth.</>,
          <>An input of 120 r/min goes to a driver with 10 teeth and a driven gear with 30. What is the output speed?</>,
          <>What does an idler gear do?</>,
        ]}
        answers={[
          <>The driven gear turns in the opposite direction to the driver.</>,
          <>{n(gearMA(10, 30))}.</>,
          <>{n(outputSpeed(120, 10, 30))} r/min.</>,
          <>It makes the driven gear turn the same way as the driver.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Two meshing spur gears have different sizes. In which direction does the second one turn?",
    options: ["In the same direction", "It does not turn", "In the opposite direction", "It turns in both directions"],
    answer: "In the opposite direction",
    explanation: "Meshing gears counter-rotate.",
  },
  {
    prompt: "What is the job of an idler gear between the driver and the driven gear?",
    options: ["It makes both turn the same way", "It doubles the speed", "It doubles the force", "It changes the axis by 90°"],
    answer: "It makes both turn the same way",
    explanation: "An idler reverses the direction back, so driver and driven turn the same way.",
  },
  {
    prompt: "Why should an idler gear be made of a harder material?",
    options: ["It carries the biggest force of all", "It is the biggest gear of the three", "It turns the slowest of the three", "It rotates more often"],
    answer: "It rotates more often",
    explanation: "A small idler rotates more times than the larger gears.",
  },
  {
    prompt: "What do two bevel gears do?",
    options: ["Reverse the direction only", "Turn the axis through 90°", "Double the speed of a shaft", "Remove all the friction"],
    answer: "Turn the axis through 90°",
    explanation: "Bevel gears transfer the rotation through a right angle.",
  },
  {
    prompt: "Gear A with 10 teeth drives gear B with 30 teeth. What is the mechanical advantage of the pair?",
    options: ["0,33", "3", "20", "300"],
    answer: "3",
    explanation: "MA = driven ÷ driver = 30 ÷ 10 = 3.",
  },
  {
    prompt: "Gear A with 10 teeth drives gear B with 30 teeth. What is the velocity ratio of the pair?",
    options: ["3", "20", "300", "0,33"],
    answer: "0,33",
    explanation: "Velocity ratio = driver ÷ driven = 10 ÷ 30 = 0,33.",
  },
  {
    prompt: "A driver with 10 teeth turns at 120 r/min and drives a gear with 30 teeth. What is the output speed?",
    options: ["40 r/min", "360 r/min", "3,3 r/min", "120 r/min"],
    answer: "40 r/min",
    explanation: "120 × 10 ÷ 30 = 40 r/min.",
  },
  {
    prompt: "A driver with 10 teeth is given an input force of 20 N and drives a gear with 30 teeth. What is the output force?",
    options: ["6,7 N", "20 N", "60 N", "600 N"],
    answer: "60 N",
    explanation: "20 × 30 ÷ 10 = 60 N.",
  },
  {
    prompt: "A driver has 40 teeth and the driven gear has 10 teeth. What is the velocity ratio?",
    options: ["0,25", "30", "400", "4"],
    answer: "4",
    explanation: "40 ÷ 10 = 4: the output turns four times faster.",
  },
  {
    prompt: "A driver with 40 teeth turns at 100 r/min and drives a gear with 10 teeth. What is the output speed?",
    options: ["25 r/min", "400 r/min", "50 r/min", "100 r/min"],
    answer: "400 r/min",
    explanation: "100 × 40 ÷ 10 = 400 r/min.",
  },
  {
    prompt: "A small driver turns a large driven gear. What happens?",
    options: ["The force increases and the speed decreases", "The speed increases and the force decreases", "Both the force and the speed increase", "Nothing changes"],
    answer: "The force increases and the speed decreases",
    explanation: "A bigger driven gear gives mechanical advantage greater than 1 and turns more slowly.",
  },
  {
    prompt: "A big driver turns a small driven gear. What happens?",
    options: ["The force increases and the speed decreases", "Both increase", "The speed increases and the force decreases", "Nothing changes"],
    answer: "The speed increases and the force decreases",
    explanation: "A smaller driven gear turns faster with less force.",
  },
  {
    prompt: "Which gear pair gives a mechanical advantage of 4?",
    options: ["Driver 48 teeth, driven 12 teeth", "Driver 24 teeth, driven 24 teeth", "Driver 12 teeth, driven 48 teeth", "Driver 12 teeth, driven 24 teeth"],
    answer: "Driver 12 teeth, driven 48 teeth",
    explanation: "The mechanical advantage is driven teeth ÷ driver teeth, so 48 ÷ 12 = 4 for this pair.",
  },
  {
    prompt: "A driver with 20 teeth turns a driven gear with 20 teeth. What is the mechanical advantage?",
    options: ["1", "0", "2", "20"],
    answer: "1",
    explanation: "Equal gears give MA = 20 ÷ 20 = 1: no change in force or speed.",
  },
];

const GearSystemsMechanicalAdvantage = () => (
  <CapsSubjectTopic
    title="Gear Systems and Mechanical Advantage"
    subtitle="Counter-rotation, idlers, bevel gears, velocity ratio and mechanical advantage"
    learnSteps={learnSteps}
    task="gr8-gear-systems-mechanical-advantage-t3"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default GearSystemsMechanicalAdvantage;
