import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberLinePath } from '../../../../../components/diagrams/motion10/Motion10';
import { displacement, displacementAlong, distanceAlong } from '../../../../../components/diagrams/motion10/motion10Helpers';

// Every number comes from motion10Helpers.ts (tested in motion10Helpers.test.ts and g10PsW2T3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',').replace('-', '−');
const walk = [0, 4, 1];

export const learnSteps: LearnStep[] = [
  {
    title: 'Frame of reference and position',
    content: slide(
      <>
        <Rule>A frame of reference is an origin and a set of directions, for example east and west, or up and down. Position (x) is where an object is relative to the origin. In one dimension, position can be positive or negative: it is positive in the chosen positive direction and negative on the other side of the origin.</Rule>
        <FactCards
          cards={[
            { title: 'Origin', line1: 'the point where x = 0,', line2: 'chosen by us' },
            { title: 'Positive direction', line1: 'chosen by us, for example', line2: 'east or up' },
            { title: 'Position x', line1: 'distance from the origin with', line2: 'a sign for the direction' },
          ]}
          aria="A frame of reference. The origin is the point where x equals zero, chosen by us. The positive direction is chosen by us, for example east or up. The position x is the distance from the origin with a sign for the direction."
        />
        <Worked
          title="A learner walks along a straight road"
          steps={[
            'Choose the school gate as the origin and east as positive.',
            'A shop 150 m east of the gate has x = +150 m.',
            'A bus stop 80 m west of the gate has x = −80 m.',
          ]}
        />
        <Mistake>Thinking that a negative position means a negative distance. It only means the other side of the origin.</Mistake>
      </>,
    ),
  },
  {
    title: 'Distance and displacement',
    content: slide(
      <>
        <Rule>Distance is the total length of the path travelled. It is a scalar and is never negative. Displacement is the change in position, Δx = x(final) − x(initial). It is a vector that points from the starting position to the final position.</Rule>
        <NumberLinePath path={walk} min={-1} max={5} />
        <Worked
          title="Walk 4 m east and then 3 m west"
          steps={[
            `Distance = 4 + 3 = ${n(distanceAlong(walk))} m.`,
            `Displacement = x(final) − x(initial) = ${walk[2]} − ${walk[0]} = +${n(displacementAlong(walk))} m, so 1 m east of the start.`,
            `From x = 2 m to x = −3 m: Δx = −3 − 2 = ${n(displacement(2, -3))} m, which is 5 m west.`,
          ]}
        />
        <Mistake>Giving the displacement as 7 m. Displacement is final minus initial, not the total path length.</Mistake>
      </>,
    ),
  },
  {
    title: 'When are they equal?',
    content: slide(
      <>
        <Rule>The size of the displacement equals the distance only when the motion is in a straight line without changing direction. Otherwise the distance is greater. A full return to the start gives a displacement of zero, whatever the distance.</Rule>
        <FactCards
          cards={[
            { title: 'No change of direction', line1: 'distance equals the size', line2: 'of the displacement' },
            { title: 'Change of direction', line1: 'distance is greater than the', line2: 'size of the displacement' },
            { title: 'Back to the start', line1: 'displacement is zero,', line2: 'but the distance is not' },
          ]}
          aria="Comparing distance and displacement. With no change of direction, the distance equals the size of the displacement. With a change of direction, the distance is greater than the size of the displacement. Back at the start, the displacement is zero but the distance is not."
        />
        <Worked
          title="A there-and-back trip"
          steps={[
            'A cyclist rides 6 km east to a shop and 6 km west back home.',
            'Distance = 6 + 6 = 12 km.',
            'Displacement = 0 km, because the final position equals the initial position.',
          ]}
        />
        <Mistake>Saying that the displacement is 12 km because the cyclist travelled 12 km.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Is distance a scalar or a vector?</>,
          <>A walker goes 4 m east and then 3 m west. What is the distance travelled?</>,
          <>The walker's displacement is?</>,
          <>What is the displacement from x = 2 m to x = −3 m?</>,
        ]}
        answers={[
          <>A scalar.</>,
          <>{n(distanceAlong(walk))} m.</>,
          <>+{n(displacementAlong(walk))} m, 1 m east of the start.</>,
          <>{n(displacement(2, -3))} m.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a frame of reference?",
    options: ["A fixed picture frame around a path", "A list of speeds in a trip", "An origin together with a set of directions", "A stopwatch and a ruler"],
    answer: "An origin together with a set of directions",
    explanation: "A frame of reference gives the origin and directions, such as east and west.",
  },
  {
    prompt: "In a frame of reference with east as positive, what does a position of −80 m mean?",
    options: ["80 m west of the origin", "80 m east of the origin", "A distance of −80 m", "The object is at the origin"],
    answer: "80 m west of the origin",
    explanation: "A negative position is on the other side of the origin from the positive direction.",
  },
  {
    prompt: "Which quantity is a scalar?",
    options: ["Displacement", "Position", "Velocity", "Distance"],
    answer: "Distance",
    explanation: "Distance has size only; the others have direction.",
  },
  {
    prompt: "Which quantity is a vector?",
    options: ["Distance", "Displacement", "Time", "Speed"],
    answer: "Displacement",
    explanation: "Displacement has size and direction.",
  },
  {
    prompt: "What is displacement?",
    options: ["The total length of the path", "The change in position", "The time taken to travel", "The speed in a given direction"],
    answer: "The change in position",
    explanation: "Displacement is Δx = x(final) − x(initial).",
  },
  {
    prompt: "A walker goes 4 m east and then 3 m west. What is the distance travelled?",
    options: ["1 m", "12 m", "−1 m", "7 m"],
    answer: "7 m",
    explanation: "Distance = 4 + 3 = 7 m.",
  },
  {
    prompt: "A walker goes 4 m east and then 3 m west. What is the displacement, taking east as positive?",
    options: ["+1 m", "+7 m", "−1 m", "+12 m"],
    answer: "+1 m",
    explanation: "Displacement = 1 − 0 = +1 m, which is 1 m east of the start.",
  },
  {
    prompt: "What is the displacement of an object that moves from x = 2 m to x = −3 m?",
    options: ["+5 m", "−1 m", "−5 m", "+1 m"],
    answer: "−5 m",
    explanation: "Δx = −3 − 2 = −5 m.",
  },
  {
    prompt: "What is the displacement of an object that moves from x = −4 m to x = 6 m?",
    options: ["+2 m", "−10 m", "−2 m", "+10 m"],
    answer: "+10 m",
    explanation: "Δx = 6 − (−4) = +10 m.",
  },
  {
    prompt: "A cyclist rides 6 km east to a shop and 6 km west back home. What is the displacement?",
    options: ["12 km", "0 km", "6 km", "−12 km"],
    answer: "0 km",
    explanation: "The final position equals the initial position.",
  },
  {
    prompt: "A cyclist rides 6 km east to a shop and 6 km west back home. What is the distance travelled?",
    options: ["12 km", "0 km", "6 km", "−6 km"],
    answer: "12 km",
    explanation: "Distance = 6 + 6 = 12 km.",
  },
  {
    prompt: "When is the size of the displacement equal to the distance?",
    options: ["Whenever the motion is fast", "Whenever the object returns to the start", "In a straight line with no change of direction", "Whenever the time is short"],
    answer: "In a straight line with no change of direction",
    explanation: "A change of direction makes the distance greater than the size of the displacement.",
  },
  {
    prompt: "Can the distance travelled be smaller than the size of the displacement?",
    options: ["Yes, when the object turns", "Yes, when the object is slow", "No, it is always equal or greater", "Yes, when the position is negative"],
    answer: "No, it is always equal or greater",
    explanation: "A straight path is the shortest, so distance is at least the size of the displacement.",
  },
  {
    prompt: "Which symbol is used for displacement in one dimension?",
    options: ["Δx", "D", "v", "a"],
    answer: "Δx",
    explanation: "Δx is the change in position; D is used for distance.",
  },
];

const PositionDisplacement = () => (
  <CapsSubjectTopic
    title="Position, Displacement and Distance"
    subtitle="Frame of reference, position, distance and displacement in one dimension"
    learnSteps={learnSteps}
    task="gr10-position-displacement-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default PositionDisplacement;
