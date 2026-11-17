import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PulseMeeting, SinglePulse } from '../../../../../components/diagrams/waves10/Waves10';
import { distanceTravelled, interferenceKind, pulseSpeed, resultantAmplitude } from '../../../../../components/diagrams/waves10/waves10Helpers';

// Every number below comes from waves10Helpers.ts (tested in waves10Helpers.test.ts and g10PsT1.test.ts).
const dc = (n: number, d = 1) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'A transverse pulse',
    content: slide(
      <>
        <Rule>A pulse is a single disturbance that travels through a medium. In a transverse pulse the particles of the medium move at right angles to the direction in which the pulse travels. The amplitude is the maximum disturbance of a particle from its rest (equilibrium) position.</Rule>
        <SinglePulse amp={3} />
        <Worked
          title="A pulse on a rope"
          steps={[
            'Flick one end of a rope up and down once. A pulse travels along the rope.',
            'The rope itself moves up and down, but the pulse moves along it.',
            `A pulse travels 3,0 m in 0,60 s: speed = distance / time = 3,0 / 0,60 = ${dc(pulseSpeed(3.0, 0.6))} m·s⁻¹.`,
            `In 0,40 s at this speed the pulse travels ${dc(distanceTravelled(5.0, 0.4))} m.`,
          ]}
        />
        <Mistake>Thinking that the rope travels along with the pulse. The particles only move up and down about their rest position.</Mistake>
      </>,
    ),
  },
  {
    title: 'Superposition: pulses that add',
    content: slide(
      <>
        <Rule>Superposition is the addition of the disturbances of two pulses that occupy the same space at the same time. If the disturbances are on the same side of the rest position, they add up: constructive interference. If they are on opposite sides, they partly cancel: destructive interference. The pulses then carry on in their original directions, unchanged.</Rule>
        <PulseMeeting a={2} b={3} />
        <Worked
          title="Two pulses on the same side"
          steps={[
            `Pulse 1 has an amplitude of 2 cm and pulse 2 has an amplitude of 3 cm, both above the rope.`,
            `When they overlap: resultant = 2 + 3 = ${dc(resultantAmplitude(2, 3), 0)} cm, so the interference is ${interferenceKind(2, 3)}.`,
            'After they have passed through each other, each pulse is again 2 cm and 3 cm high and travels on as before.',
          ]}
        />
        <Mistake>Saying that the pulses bounce off each other or are destroyed. They pass through each other and carry on unchanged.</Mistake>
      </>,
    ),
  },
  {
    title: 'Destructive interference',
    content: slide(
      <>
        <Rule>A pulse on the other side of the rest position has a negative amplitude. When two such pulses overlap, add the amplitudes with their signs. If they are equal in size and opposite, the rope is flat for an instant: complete destructive interference.</Rule>
        <PulseMeeting a={3} b={-2} />
        <Worked
          title="Add the amplitudes with their signs"
          steps={[
            `+3 cm and −2 cm: resultant = 3 + (−2) = ${dc(resultantAmplitude(3, -2), 0)} cm, so the interference is ${interferenceKind(3, -2)}.`,
            `+2 cm and −2 cm: resultant = ${dc(resultantAmplitude(2, -2), 0)} cm. For that instant the rope looks flat.`,
            'The energy of the pulses is not lost. It is still there, and the pulses emerge from the overlap unchanged.',
          ]}
        />
        <Mistake>Subtracting the two amplitudes without thinking about the sides. Give a pulse above the rest position a plus sign and one below a minus sign, then add.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In a transverse pulse, which way do the particles move compared with the direction of the pulse?</>,
          <>A pulse travels 4,0 m along a spring in 0,80 s. What is its speed?</>,
          <>A pulse of +4 cm meets a pulse of −1 cm. What is the resultant amplitude?</>,
          <>What happens to two pulses after they have passed through each other?</>,
        ]}
        answers={[
          <>At right angles to it.</>,
          <>4,0 / 0,80 = {dc(pulseSpeed(4.0, 0.8))} m·s⁻¹.</>,
          <>4 + (−1) = {dc(resultantAmplitude(4, -1), 0)} cm.</>,
          <>Each continues in its original direction, unchanged.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a pulse?",
    options: ["A continuous series of waves in a medium", "A wave that does not need any medium", "A single disturbance moving through a medium", "A vibration that stays in the same place"],
    answer: "A single disturbance moving through a medium",
    explanation: "A pulse is a single disturbance that moves through a medium. A wave is a succession of pulses.",
  },
  {
    prompt: "In a transverse pulse, how do the particles of the medium move?",
    options: ["At right angles to the direction of the pulse", "In the same direction as the pulse", "Opposite to the direction of the pulse", "In circles of the same size"],
    answer: "At right angles to the direction of the pulse",
    explanation: "The particles move up and down while the pulse travels along the medium.",
  },
  {
    prompt: "What is the amplitude of a pulse?",
    options: ["The distance that the pulse has travelled", "The time that the pulse takes to pass a point", "The speed at which the pulse is moving along", "The largest displacement from the rest position"],
    answer: "The largest displacement from the rest position",
    explanation: "Amplitude is the greatest displacement from the equilibrium position.",
  },
  {
    prompt: "A pulse travels 3,0 m along a rope in 0,60 s. What is the speed of the pulse?",
    options: ["1,80 m·s⁻¹", "5,0 m·s⁻¹", "0,20 m·s⁻¹", "3,6 m·s⁻¹"],
    answer: "5,0 m·s⁻¹",
    explanation: "speed = distance / time = 3,0 / 0,60 = 5,0 m·s⁻¹.",
  },
  {
    prompt: "A pulse travels at 5,0 m·s⁻¹. How far does it travel in 0,40 s?",
    options: ["12,5 m", "2,0 m", "5,4 m", "0,08 m"],
    answer: "2,0 m",
    explanation: "distance = speed × time = 5,0 × 0,40 = 2,0 m.",
  },
  {
    prompt: "What is superposition?",
    options: ["The bouncing of one pulse off a hard barrier", "The slowing down of one pulse in a new medium", "The splitting of one single pulse into two pulses", "The adding of two disturbances in the same place"],
    answer: "The adding of two disturbances in the same place",
    explanation: "When two pulses overlap the resultant disturbance is the sum of the two disturbances.",
  },
  {
    prompt: "What is constructive interference?",
    options: ["Two pulses on the same side combine to give a bigger disturbance", "Two pulses on opposite sides combine to give a smaller disturbance", "Two pulses destroy each other for ever", "Two pulses move in the same direction at the same speed"],
    answer: "Two pulses on the same side combine to give a bigger disturbance",
    explanation: "Constructive interference gives a resultant amplitude larger than either pulse.",
  },
  {
    prompt: "What is destructive interference?",
    options: ["Two pulses on the same side combine to give a bigger disturbance", "Two pulses are broken into smaller pieces", "Two pulses on opposite sides combine to give a smaller disturbance", "Two pulses lose their energy and disappear"],
    answer: "Two pulses on opposite sides combine to give a smaller disturbance",
    explanation: "Destructive interference gives a resultant amplitude smaller than the larger pulse.",
  },
  {
    prompt: "A pulse of amplitude 2 cm and a pulse of amplitude 3 cm, both above the rest position, overlap. What is the resultant amplitude?",
    options: ["1 cm", "6 cm", "3 cm", "5 cm"],
    answer: "5 cm",
    explanation: "On the same side the amplitudes add: 2 + 3 = 5 cm.",
  },
  {
    prompt: "A pulse of +3 cm overlaps with a pulse of −2 cm. What is the resultant amplitude?",
    options: ["+5 cm", "+1 cm", "−1 cm", "−5 cm"],
    answer: "+1 cm",
    explanation: "3 + (−2) = +1 cm, so the interference is destructive.",
  },
  {
    prompt: "A pulse of +2 cm overlaps with a pulse of −2 cm. What is the resultant amplitude at that moment?",
    options: ["0 cm", "+4 cm", "−4 cm", "+2 cm"],
    answer: "0 cm",
    explanation: "2 + (−2) = 0. The rope is flat for an instant.",
  },
  {
    prompt: "What happens to two pulses after they have passed through each other?",
    options: ["They stay stuck together", "They both stop at the point where they met", "Each continues in its original direction, unchanged", "They swap amplitudes with each other"],
    answer: "Each continues in its original direction, unchanged",
    explanation: "Pulses pass through each other and are not changed by the meeting.",
  },
  {
    prompt: "What does a negative amplitude mean for a pulse on a rope?",
    options: ["The pulse is moving backwards", "The pulse has no energy", "The pulse is below the rest position", "The pulse is longitudinal"],
    answer: "The pulse is below the rest position",
    explanation: "A pulse on the other side of the rest position is given a negative sign when its amplitude is added to another.",
  },
  {
    prompt: "Why do we say that the rope does not travel along with a pulse?",
    options: ["The particles only move up and down about their rest positions", "The rope is too heavy to move", "The rope moves in the same direction as the pulse", "The rope moves faster than the pulse"],
    answer: "The particles only move up and down about their rest positions",
    explanation: "The disturbance travels along the rope, but each particle of the rope only moves up and down.",
  },
];

const PulsesSuperposition = () => (
  <CapsSubjectTopic
    title="Transverse Pulses and Superposition"
    subtitle="Pulses, amplitude, the speed of a pulse and constructive and destructive interference"
    learnSteps={learnSteps}
    task="gr10-pulses-superposition-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default PulsesSuperposition;
