import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { acceleration, averageSpeed, averageVelocity, kmhToMs, motionKind, msToKmh } from '../../../../../components/diagrams/motion10/motion10Helpers';

// Every number comes from motion10Helpers.ts (tested in motion10Helpers.test.ts and g10PsW2T3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',').replace('-', '−');

export const learnSteps: LearnStep[] = [
  {
    title: 'Average speed and average velocity',
    content: slide(
      <>
        <Rule>Average speed is the total distance divided by the total time, and it is a scalar. Average velocity is the displacement divided by the time taken, and it is a vector: v = Δx ÷ Δt. The unit is m·s⁻¹.</Rule>
        <FactCards
          cards={[
            { title: 'Average speed', line1: 'distance ÷ time', line2: 'scalar, never negative' },
            { title: 'Average velocity', line1: 'displacement ÷ time', line2: 'vector, with a sign' },
            { title: 'Units', line1: 'm·s⁻¹ and km·h⁻¹', line2: '1 m·s⁻¹ = 3,6 km·h⁻¹' },
          ]}
          aria="Speed and velocity. Average speed is distance divided by time, a scalar that is never negative. Average velocity is displacement divided by time, a vector with a sign. The units are metres per second and kilometres per hour, where 1 metre per second equals 3,6 kilometres per hour."
        />
        <Worked
          title="Calculations"
          steps={[
            `A car travels 120 km in 1,5 h: average speed = 120 ÷ 1,5 = ${n(averageSpeed(120, 1.5))} km·h⁻¹.`,
            `A runner's displacement is −6 m in 3 s: average velocity = −6 ÷ 3 = ${n(averageVelocity(-6, 3))} m·s⁻¹, so 2 m·s⁻¹ west if east is positive.`,
            `A round trip has a displacement of 0 m, so the average velocity is ${n(averageVelocity(0, 40))} m·s⁻¹, but the average speed is not zero.`,
          ]}
        />
        <Mistake>Calling average speed and average velocity the same. Speed uses distance and velocity uses displacement.</Mistake>
      </>,
    ),
  },
  {
    title: 'Changing units',
    content: slide(
      <>
        <Rule>To change km·h⁻¹ to m·s⁻¹, divide by 3,6. To change m·s⁻¹ to km·h⁻¹, multiply by 3,6. This is because 1 km = 1 000 m and 1 h = 3 600 s.</Rule>
        <FactCards
          cards={[
            { title: 'km·h⁻¹ to m·s⁻¹', line1: 'divide by 3,6', line2: `72 km·h⁻¹ = ${n(kmhToMs(72))} m·s⁻¹` },
            { title: 'm·s⁻¹ to km·h⁻¹', line1: 'multiply by 3,6', line2: `15 m·s⁻¹ = ${n(msToKmh(15))} km·h⁻¹` },
          ]}
          aria="Changing speed units. To change kilometres per hour to metres per second, divide by 3,6: 72 kilometres per hour is 20 metres per second. To change metres per second to kilometres per hour, multiply by 3,6: 15 metres per second is 54 kilometres per hour."
        />
        <Worked
          title="Why 3,6?"
          steps={[
            '1 km·h⁻¹ = 1 000 m ÷ 3 600 s.',
            'So 1 km·h⁻¹ = 1 ÷ 3,6 m·s⁻¹.',
            `A speed of 90 km·h⁻¹ is 90 ÷ 3,6 = ${n(kmhToMs(90))} m·s⁻¹.`,
          ]}
        />
        <Mistake>Multiplying by 3,6 when changing km·h⁻¹ to m·s⁻¹. The number gets smaller in m·s⁻¹.</Mistake>
      </>,
    ),
  },
  {
    title: 'Acceleration',
    content: slide(
      <>
        <Rule>Acceleration is the rate of change of velocity: a = Δv ÷ Δt = (vf − vi) ÷ Δt, in m·s⁻². Whether an object speeds up or slows down depends on the signs of velocity and acceleration together: the same sign means speeding up, opposite signs mean slowing down.</Rule>
        <FactCards
          cards={[
            { title: 'v and a same sign', line1: 'speeding up', line2: `e.g. v = −6 and a = −2: ${motionKind(-6, -2)}` },
            { title: 'v and a opposite signs', line1: 'slowing down', line2: `e.g. v = 20 and a = −3: ${motionKind(20, -3)}` },
            { title: 'a = 0', line1: 'constant velocity', line2: 'no change in v' },
          ]}
          aria="Acceleration and motion. If the velocity and acceleration have the same sign the object is speeding up, for example v equals minus 6 and a equals minus 2. If they have opposite signs it is slowing down, for example v equals 20 and a equals minus 3. If the acceleration is zero the velocity is constant."
        />
        <Worked
          title="Acceleration calculations"
          steps={[
            `From 5 m·s⁻¹ to 20 m·s⁻¹ in 3 s: a = (20 − 5) ÷ 3 = ${n(acceleration(5, 20, 3))} m·s⁻².`,
            `From 20 m·s⁻¹ to 8 m·s⁻¹ in 4 s: a = (8 − 20) ÷ 4 = ${n(acceleration(20, 8, 4))} m·s⁻². It is slowing down because v is positive and a is negative.`,
            'The acceleration alone does not tell the direction of motion.',
          ]}
        />
        <Mistake>Thinking that a negative acceleration always means slowing down. If the velocity is also negative the object speeds up.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the average speed of a car that travels 120 km in 1,5 h?</>,
          <>Change 72 km·h⁻¹ to m·s⁻¹.</>,
          <>A car goes from 5 m·s⁻¹ to 20 m·s⁻¹ in 3 s. What is the acceleration?</>,
          <>A body has v = −6 m·s⁻¹ and a = −2 m·s⁻². Is it speeding up or slowing down?</>,
        ]}
        answers={[
          <>{n(averageSpeed(120, 1.5))} km·h⁻¹.</>,
          <>{n(kmhToMs(72))} m·s⁻¹.</>,
          <>{n(acceleration(5, 20, 3))} m·s⁻².</>,
          <>Speeding up.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is average speed?",
    options: ["Displacement divided by time", "Change in velocity divided by time", "Total distance divided by total time", "The speed at one moment"],
    answer: "Total distance divided by total time",
    explanation: "Average speed is a scalar: distance ÷ time.",
  },
  {
    prompt: "What is average velocity?",
    options: ["Displacement divided by the time taken", "Distance divided by the time taken", "Speed multiplied by time", "Change in speed divided by time"],
    answer: "Displacement divided by the time taken",
    explanation: "Average velocity is Δx ÷ Δt, a vector.",
  },
  {
    prompt: "A car travels 120 km in 1,5 h. What is the average speed?",
    options: ["180 km·h⁻¹", "0,0125 km·h⁻¹", "60 km·h⁻¹", "80 km·h⁻¹"],
    answer: "80 km·h⁻¹",
    explanation: "Average speed = 120 ÷ 1,5 = 80 km·h⁻¹.",
  },
  {
    prompt: "A runner has a displacement of −6 m in 3 s. What is the average velocity?",
    options: ["+2 m·s⁻¹", "−2 m·s⁻¹", "−18 m·s⁻¹", "−0,5 m·s⁻¹"],
    answer: "−2 m·s⁻¹",
    explanation: "Average velocity = −6 ÷ 3 = −2 m·s⁻¹.",
  },
  {
    prompt: "A trip ends where it started. What is the average velocity?",
    options: ["Equal to the average speed", "Zero", "Negative", "Equal to the total distance"],
    answer: "Zero",
    explanation: "The displacement is zero, so the average velocity is zero.",
  },
  {
    prompt: "Change 72 km·h⁻¹ to m·s⁻¹.",
    options: ["259,2 m·s⁻¹", "2 m·s⁻¹", "200 m·s⁻¹", "20 m·s⁻¹"],
    answer: "20 m·s⁻¹",
    explanation: "Divide by 3,6: 72 ÷ 3,6 = 20 m·s⁻¹.",
  },
  {
    prompt: "Change 15 m·s⁻¹ to km·h⁻¹.",
    options: ["54 km·h⁻¹", "4,2 km·h⁻¹", "15 000 km·h⁻¹", "5,4 km·h⁻¹"],
    answer: "54 km·h⁻¹",
    explanation: "Multiply by 3,6: 15 × 3,6 = 54 km·h⁻¹.",
  },
  {
    prompt: "What is acceleration?",
    options: ["The rate of change of distance", "The distance travelled per second", "The rate of change of velocity", "The size of the displacement"],
    answer: "The rate of change of velocity",
    explanation: "Acceleration is the change in velocity divided by the time taken, a = Δv ÷ Δt.",
  },
  {
    prompt: "A car speeds up from 5 m·s⁻¹ to 20 m·s⁻¹ in 3 s. What is its acceleration?",
    options: ["45 m·s⁻²", "0,2 m·s⁻²", "8,3 m·s⁻²", "5 m·s⁻²"],
    answer: "5 m·s⁻²",
    explanation: "a = (20 − 5) ÷ 3 = 5 m·s⁻².",
  },
  {
    prompt: "A car slows from 20 m·s⁻¹ to 8 m·s⁻¹ in 4 s. What is its acceleration?",
    options: ["+3 m·s⁻²", "−3 m·s⁻²", "−7 m·s⁻²", "+7 m·s⁻²"],
    answer: "−3 m·s⁻²",
    explanation: "a = (8 − 20) ÷ 4 = −3 m·s⁻².",
  },
  {
    prompt: "An object has a positive velocity and a negative acceleration. What is happening?",
    options: ["It is slowing down", "It is speeding up", "It is moving at constant velocity", "It is at rest"],
    answer: "It is slowing down",
    explanation: "Opposite signs of velocity and acceleration mean slowing down.",
  },
  {
    prompt: "An object has v = −6 m·s⁻¹ and a = −2 m·s⁻². What is happening?",
    options: ["It is slowing down", "It is at rest", "It is speeding up", "Its velocity is constant"],
    answer: "It is speeding up",
    explanation: "Both are negative, so the speed increases in the negative direction.",
  },
  {
    prompt: "What is the unit of acceleration?",
    options: ["m·s⁻¹", "m", "m·s⁻²", "s"],
    answer: "m·s⁻²",
    explanation: "Acceleration is a change in velocity (m·s⁻¹) per second.",
  },
  {
    prompt: "What does an acceleration of zero mean?",
    options: ["The velocity is constant", "The object is always at rest", "The object must be slowing down", "The speed is zero"],
    answer: "The velocity is constant",
    explanation: "No change in velocity means constant velocity, which can be non-zero.",
  },
];

const SpeedVelocityAcceleration = () => (
  <CapsSubjectTopic
    title="Speed, Velocity and Acceleration"
    subtitle="Average speed, average velocity, changing units and acceleration"
    learnSteps={learnSteps}
    task="gr10-speed-velocity-acceleration-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default SpeedVelocityAcceleration;
