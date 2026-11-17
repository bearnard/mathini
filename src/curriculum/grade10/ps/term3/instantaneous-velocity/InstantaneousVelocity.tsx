import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { XtGraph } from '../../../../../components/diagrams/motion10/Motion10';
import { chordVelocity, instantaneousSpeed, positionAt, velocityAt } from '../../../../../components/diagrams/motion10/motion10Helpers';

// Every number comes from motion10Helpers.ts (tested in motion10Helpers.test.ts and g10PsW2T3.test.ts).
// The example is x = 2 t² (starts at rest at x = 0 with a = 4 m·s⁻²), which gives v = 4 t.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',').replace('-', '−');
const X = (t: number) => positionAt(0, 0, 4, t);
const chord = (t2: number) => chordVelocity(0, 0, 4, 3, t2);

export const learnSteps: LearnStep[] = [
  {
    title: 'Slope of a position-time graph',
    content: slide(
      <>
        <Rule>On a position-time (x–t) graph the gradient is the velocity. A straight line means constant velocity, a steeper line means a higher speed, and a line sloping down means a negative velocity. A curve means that the velocity is changing.</Rule>
        <XtGraph x0={0} v0={0} a={4} t0={3} t1={4} tMax={5} />
        <Worked
          title="Read the graph"
          steps={[
            'A horizontal line means that the position is not changing: the velocity is zero.',
            'A straight line that slopes up means a constant positive velocity.',
            'A curve that gets steeper means that the velocity is increasing: the object is accelerating.',
          ]}
        />
        <Mistake>Reading a position-time graph as a picture of the path. It shows where the object is at each time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Instantaneous velocity',
    content: slide(
      <>
        <Rule>Instantaneous velocity is the velocity at one moment: the displacement divided by a very small time interval. On an x–t graph it is the gradient of the tangent at that point. Instantaneous speed is the size of the instantaneous velocity.</Rule>
        <FactCards
          cards={[
            { title: 'Average velocity', line1: 'gradient of the chord', line2: 'over a time interval' },
            { title: 'Instantaneous velocity', line1: 'gradient of the tangent', line2: 'at one moment' },
            { title: 'Instantaneous speed', line1: 'the size of the', line2: 'instantaneous velocity' },
          ]}
          aria="Average and instantaneous velocity. The average velocity is the gradient of the chord over a time interval. The instantaneous velocity is the gradient of the tangent at one moment. The instantaneous speed is the size of the instantaneous velocity."
        />
        <Worked
          title="Shrink the interval (x = 2t², from t = 3 s)"
          steps={[
            `x(3) = ${n(X(3))} m. Over 3 s to 4 s: average velocity = (${n(X(4))} − ${n(X(3))}) ÷ 1 = ${n(chord(4))} m·s⁻¹.`,
            `Over 3 s to 3,5 s: ${n(chord(3.5))} m·s⁻¹. Over 3 s to 3,1 s: ${n(chord(3.1))} m·s⁻¹.`,
            `The values approach ${n(velocityAt(0, 4, 3))} m·s⁻¹, the instantaneous velocity at 3 s.`,
          ]}
        />
        <Mistake>Using the average velocity over a long interval as the velocity at one moment.</Mistake>
      </>,
    ),
  },
  {
    title: 'Constant acceleration',
    content: slide(
      <>
        <Rule>For constant acceleration the instantaneous velocity changes at a steady rate: v = vi + at. The position is x = xi + vi·t + ½at². The average velocity over an interval equals the instantaneous velocity at the middle of the interval.</Rule>
        <FactCards
          cards={[
            { title: 'Velocity', line1: 'v = vi + a t', line2: 'changes at a steady rate' },
            { title: 'Position', line1: 'x = xi + vi t + ½ a t²', line2: 'a curve on the x–t graph' },
            { title: 'Check', line1: 'average velocity over an interval', line2: 'equals v at the middle time' },
          ]}
          aria="Equations for constant acceleration. Velocity: v equals vi plus a t, which changes at a steady rate. Position: x equals xi plus vi t plus a half a t squared, a curve on the x-t graph. Check: the average velocity over an interval equals the velocity at the middle time."
        />
        <Worked
          title="A car starts from rest with a = 4 m·s⁻²"
          steps={[
            `At t = 3 s: v = 0 + 4 × 3 = ${n(velocityAt(0, 4, 3))} m·s⁻¹ and x = ½ × 4 × 3² = ${n(X(3))} m.`,
            `Average velocity from 2 s to 4 s = (${n(X(4))} − ${n(X(2))}) ÷ 2 = ${n(chordVelocity(0, 0, 4, 2, 4))} m·s⁻¹, equal to v at 3 s.`,
            `A velocity of −12 m·s⁻¹ gives an instantaneous speed of ${n(instantaneousSpeed(-12))} m·s⁻¹.`,
          ]}
        />
        <Mistake>Using the equations of motion when the acceleration is changing. They are only for constant acceleration.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does the gradient of a position-time graph give?</>,
          <>How do we get the instantaneous velocity at a point on an x–t graph?</>,
          <>What is the instantaneous speed when the velocity is −12 m·s⁻¹?</>,
          <>A car starts from rest with a = 4 m·s⁻². What is its velocity after 3 s?</>,
        ]}
        answers={[
          <>The velocity.</>,
          <>The gradient of the tangent at that point.</>,
          <>{n(instantaneousSpeed(-12))} m·s⁻¹.</>,
          <>{n(velocityAt(0, 4, 3))} m·s⁻¹.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does the gradient of a position-time graph give?",
    options: ["The acceleration", "The distance", "The velocity", "The time"],
    answer: "The velocity",
    explanation: "The gradient of an x–t graph is Δx ÷ Δt, the velocity.",
  },
  {
    prompt: "What does a horizontal line on a position-time graph mean?",
    options: ["The object is at rest", "The object moves at constant speed", "The object is accelerating", "The object is moving backwards"],
    answer: "The object is at rest",
    explanation: "The position is not changing, so the velocity is zero.",
  },
  {
    prompt: "What does a curve that gets steeper on a position-time graph show?",
    options: ["The velocity is constant", "The object has stopped", "The velocity is decreasing", "The velocity is increasing"],
    answer: "The velocity is increasing",
    explanation: "A steeper gradient means a greater velocity.",
  },
  {
    prompt: "What is the instantaneous velocity?",
    options: ["The velocity over the whole trip", "The velocity at one moment", "The distance divided by the time", "The velocity of a slow object"],
    answer: "The velocity at one moment",
    explanation: "Instantaneous velocity is the displacement divided by a very small time interval.",
  },
  {
    prompt: "How do we find the instantaneous velocity on an x–t graph?",
    options: ["From the gradient of a chord over a long interval", "From the gradient of the tangent at that point", "From the area under the graph", "From the height of the graph"],
    answer: "From the gradient of the tangent at that point",
    explanation: "The tangent at a point has the gradient equal to the instantaneous velocity.",
  },
  {
    prompt: "What is the gradient of a chord on an x–t graph?",
    options: ["The instantaneous velocity at one point", "The acceleration of the object", "The distance that was travelled", "The average velocity"],
    answer: "The average velocity",
    explanation: "A chord joins two points, so its gradient is the average velocity between them.",
  },
  {
    prompt: "What is instantaneous speed?",
    options: ["The size of the instantaneous velocity", "The average of the speeds", "The distance divided by the time", "The change in velocity"],
    answer: "The size of the instantaneous velocity",
    explanation: "Instantaneous speed is the magnitude of the instantaneous velocity.",
  },
  {
    prompt: "What is the instantaneous speed when the velocity is −12 m·s⁻¹?",
    options: ["−12 m·s⁻¹", "0 m·s⁻¹", "12 m·s⁻¹", "24 m·s⁻¹"],
    answer: "12 m·s⁻¹",
    explanation: "Speed is the size of the velocity.",
  },
  {
    prompt: "A car starts from rest with a = 4 m·s⁻². What is its velocity after 3 s?",
    options: ["7 m·s⁻¹", "1,3 m·s⁻¹", "36 m·s⁻¹", "12 m·s⁻¹"],
    answer: "12 m·s⁻¹",
    explanation: "v = 0 + 4 × 3 = 12 m·s⁻¹.",
  },
  {
    prompt: "A car starts from rest at x = 0 with a = 4 m·s⁻². What is its position after 3 s?",
    options: ["12 m", "18 m", "36 m", "6 m"],
    answer: "18 m",
    explanation: "x = ½ × 4 × 3² = 18 m.",
  },
  {
    prompt: "The position of a car is 18 m at 3 s and 32 m at 4 s. What is its average velocity in this interval?",
    options: ["14 m·s⁻¹", "7 m·s⁻¹", "50 m·s⁻¹", "1,8 m·s⁻¹"],
    answer: "14 m·s⁻¹",
    explanation: "(32 − 18) ÷ 1 = 14 m·s⁻¹.",
  },
  {
    prompt: "As the time interval after 3 s becomes very small, the average velocity of the car approaches which value?",
    options: ["The acceleration", "The average velocity over the trip", "The instantaneous velocity at 3 s", "Zero"],
    answer: "The instantaneous velocity at 3 s",
    explanation: "The chord tends to the tangent, so the average velocity tends to the instantaneous velocity.",
  },
  {
    prompt: "For constant acceleration, how does the average velocity over an interval compare with the velocity at its middle time?",
    options: ["The average velocity is larger", "The average velocity is smaller", "They are equal", "They are never related"],
    answer: "They are equal",
    explanation: "For constant acceleration, v changes at a steady rate.",
  },
  {
    prompt: "For which motion may the equations of motion in this lesson be used?",
    options: ["Motion with constant acceleration", "Motion with changing acceleration", "Motion in a circle", "Motion with zero time"],
    answer: "Motion with constant acceleration",
    explanation: "The equations are only valid for constant acceleration.",
  },
];

const InstantaneousVelocity = () => (
  <CapsSubjectTopic
    title="Instantaneous Velocity and Position-Time Graphs"
    subtitle="Gradients of x-t graphs, instantaneous velocity and constant acceleration"
    learnSteps={learnSteps}
    task="gr10-instantaneous-velocity-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default InstantaneousVelocity;
