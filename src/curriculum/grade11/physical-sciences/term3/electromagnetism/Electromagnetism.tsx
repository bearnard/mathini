import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FluxCurve, LenzCases, Solenoid, WireField } from '../../../../../components/diagrams/em11/Em11';
import { emfFactorWhenTimeScaled, fieldDirection, flux, force, inducedPole, solenoidNorthEnd } from '../../../../../components/diagrams/em11/em11Helpers';

// Every direction and number below comes from em11Helpers.ts (tested in em11Helpers.test.ts and g11PsT3.test.ts).
const dc = (n: number, d = 3) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const phi0 = flux(0.2, 0.5, 0);
const phi60 = flux(0.2, 0.5, 60);
const phi90 = flux(0.2, 0.5, 90);

export const learnSteps: LearnStep[] = [
  {
    title: 'The magnetic field around a current',
    content: slide(
      <>
        <Rule>A current-carrying wire has a magnetic field around it: a compass needle placed next to the wire is deflected when the current flows. The Right Hand Rule: point the thumb of the right hand in the direction of the current, and the fingers curl in the direction of the magnetic field.</Rule>
        <WireField current="out" />
        <Worked
          title="Find the direction of the field"
          steps={[
            `Current out of the page (a dot): thumb out of the page, so the field goes ${fieldDirection('out')} round the wire.`,
            `Current into the page (a cross): the field goes ${fieldDirection('in')}.`,
            'The field lines are closer together near the wire, where the field is strongest, and spread out further away.',
            'Overhead power cables carry large currents, so they have magnetic fields around them. They also take up land and can harm birds, and people study their effects on health and on the environment.',
          ]}
        />
        <Mistake>Using the left hand, or pointing the thumb along the field. With the right hand the thumb is the current and the fingers show the field.</Mistake>
      </>,
    ),
  },
  {
    title: 'A loop of wire and a solenoid',
    content: slide(
      <>
        <Rule>A solenoid is a long coil of wire. Its magnetic field is like that of a bar magnet. Right Hand Rule for a coil: curl the fingers of the right hand in the direction of the current, and the thumb points to the north pole of the coil. The field is stronger with more turns, a bigger current and an iron core.</Rule>
        <Solenoid currentSeenFromRight="anticlockwise" />
        <Worked
          title="Find the poles and make an electromagnet"
          steps={[
            `Current anticlockwise as seen from the right-hand end: the north pole is at the ${solenoidNorthEnd('anticlockwise')}-hand end.`,
            `Reverse the current (clockwise from the right): the north pole moves to the ${solenoidNorthEnd('clockwise')}-hand end.`,
            'Inside the coil the field lines run from the south end to the north end, then back round outside.',
            'To make an electromagnet, wind insulated wire round an iron nail and connect a battery: more turns or a bigger current give a stronger magnet.',
          ]}
        />
        <Mistake>Saying that the poles do not change when the current reverses. Reversing the current reverses the poles.</Mistake>
      </>,
    ),
  },
  {
    title: "Magnetic flux and Faraday's law",
    content: slide(
      <>
        <Rule>Magnetic flux through a loop is Φ = BA cos θ, in webers (Wb), where B is the field in tesla, A the area in m² and θ the angle between B and the normal to the loop. Faraday&apos;s law: the induced emf is proportional to the rate of change of the magnetic flux.</Rule>
        <FluxCurve B={0.2} A={0.5} angles={[0, 30, 60, 90]} />
        <Worked
          title="A loop of area 0,50 m² in a field of 0,20 T"
          steps={[
            `Field along the normal (θ = 0°): Φ = 0,20 × 0,50 × cos 0° = ${dc(phi0)} Wb.`,
            `At θ = 60°: Φ = 0,20 × 0,50 × cos 60° = ${dc(phi60)} Wb. At θ = 90° the field is along the loop and Φ = ${dc(phi90, 0)} Wb.`,
            `Faraday: the same change in flux in half the time gives ${dc(emfFactorWhenTimeScaled(0.5), 0)} times the induced emf.`,
          ]}
        />
        <Mistake>Measuring θ from the surface of the loop. θ is the angle between the field and the normal, the line at 90° to the loop.</Mistake>
      </>,
    ),
  },
  {
    title: "Lenz's law: the direction of the induced current",
    content: slide(
      <>
        <Rule>The induced current flows in a direction that sets up a magnetic field to oppose the change in flux. When a pole of a magnet is pushed into a solenoid, the near end of the solenoid becomes the same pole and repels it. When the magnet is pulled out, the near end becomes the opposite pole and attracts it.</Rule>
        <LenzCases cases={[{ pole: 'N', motion: 'in' }, { pole: 'N', motion: 'out' }, { pole: 'S', motion: 'in' }, { pole: 'S', motion: 'out' }]} />
        <Worked
          title="Use the Right Hand Rule on the coil"
          steps={[
            `North pole pushed in: the near end becomes ${inducedPole('N', 'in')} and it ${force('N', 'in')} the magnet.`,
            `North pole pulled out: the near end becomes ${inducedPole('N', 'out')} and it ${force('N', 'out')} the magnet.`,
            'Then use the Right Hand Rule for a coil to find which way the current goes round the coil.',
            'The induced field always opposes the movement, so work must be done to move the magnet: this is the conservation of energy.',
          ]}
        />
        <Mistake>Thinking that the induced field always points the same way as the magnet&apos;s field. It opposes the change: against the field when the flux grows, with it when the flux shrinks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A current flows into the page in a straight wire. In which direction does the magnetic field go round it?</>,
          <>What is the magnetic flux through a 0,50 m² loop in a 0,20 T field when θ = 60°?</>,
          <>A south pole is pushed into a solenoid. What pole does the near end of the solenoid become?</>,
          <>The magnet is moved twice as fast. What happens to the induced emf?</>,
        ]}
        answers={[
          <>Clockwise.</>,
          <>Φ = BA cos θ = 0,20 × 0,50 × cos 60° = {dc(phi60)} Wb.</>,
          <>A south pole: it repels the south pole that is pushed in.</>,
          <>It doubles, because the flux changes twice as fast.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "A compass needle placed next to a wire is deflected when a current flows. What does this show?",
    options: ["A current produces an electric charge", "A wire is always a magnet", "A current produces a magnetic field", "A compass needle is a conductor"],
    answer: "A current produces a magnetic field",
    explanation: "The deflection of the needle is evidence that a current-carrying wire has a magnetic field around it.",
  },
  {
    prompt: "A current flows out of the page in a straight wire. By the Right Hand Rule, how does the magnetic field go round the wire?",
    options: ["Anticlockwise", "Clockwise", "Straight out of the page", "Straight into the page"],
    answer: "Anticlockwise",
    explanation: "Thumb out of the page means the fingers curl anticlockwise.",
  },
  {
    prompt: "Which rule gives the direction of the magnetic field around a wire?",
    options: ["The Left Hand Rule: the thumb is the field and the fingers show the current", "The Right Hand Rule: the thumb is the field and the fingers show the current", "The Left Hand Rule: the thumb is the current and the fingers show the field", "The Right Hand Rule: the thumb is the current and the fingers show the field"],
    answer: "The Right Hand Rule: the thumb is the current and the fingers show the field",
    explanation: "Point the right thumb along the current. The curled fingers then show the direction of the magnetic field.",
  },
  {
    prompt: "Where is the magnetic field around a straight current-carrying wire the strongest?",
    options: ["Far from the wire", "Close to the wire", "At the same strength everywhere", "Only at the ends of the wire"],
    answer: "Close to the wire",
    explanation: "The field lines are closest together near the wire, where the field is strongest.",
  },
  {
    prompt: "Which change makes an electromagnet stronger?",
    options: ["Fewer turns of wire and a smaller current", "More turns of wire and a bigger current", "Fewer turns of wire and a bigger current", "More turns of wire and a smaller current"],
    answer: "More turns of wire and a bigger current",
    explanation: "More turns, a bigger current and an iron core all make the field stronger.",
  },
  {
    prompt: "What happens to the poles of a solenoid when the current is reversed?",
    options: ["The poles stay at the same ends", "The solenoid loses its field", "Both ends become north poles", "The poles swap ends"],
    answer: "The poles swap ends",
    explanation: "Reversing the current reverses the direction of the field, so the north and south poles swap.",
  },
  {
    prompt: "What is the unit of magnetic flux?",
    options: ["weber (Wb)", "tesla (T)", "ampere (A)", "volt (V)"],
    answer: "weber (Wb)",
    explanation: "Flux Φ = BA cos θ is measured in webers. Tesla is the unit of the field B.",
  },
  {
    prompt: "A loop of area 0,50 m² is in a magnetic field of 0,20 T and the field is along the normal to the loop. What is the flux?",
    options: ["0,400 Wb", "0,700 Wb", "0,100 Wb", "2,500 Wb"],
    answer: "0,100 Wb",
    explanation: "Φ = BA cos 0° = 0,20 × 0,50 × 1 = 0,100 Wb.",
  },
  {
    prompt: "A loop of area 0,50 m² is in a magnetic field of 0,20 T and θ = 60°. What is the flux?",
    options: ["0,100 Wb", "0,087 Wb", "0,000 Wb", "0,050 Wb"],
    answer: "0,050 Wb",
    explanation: "Φ = BA cos 60° = 0,20 × 0,50 × 0,5 = 0,050 Wb.",
  },
  {
    prompt: "The magnetic field lies along the surface of a loop (θ = 90° to the normal). What is the flux through the loop?",
    options: ["Its largest possible value", "Zero", "Half of its largest value", "It cannot be worked out"],
    answer: "Zero",
    explanation: "cos 90° = 0, so no field lines pass through the loop and the flux is zero.",
  },
  {
    prompt: "What does Faraday's law say about the induced emf?",
    options: ["It is proportional to the rate of change of the magnetic flux", "It is proportional to the resistance of the loop", "It is the same whatever the flux does", "It is proportional to the mass of the magnet"],
    answer: "It is proportional to the rate of change of the magnetic flux",
    explanation: "A faster change in flux gives a bigger induced emf.",
  },
  {
    prompt: "A magnet is pushed into a solenoid twice as fast as before. What happens to the induced emf?",
    options: ["It becomes half as big", "It stays the same", "It becomes twice as big", "It becomes four times as big"],
    answer: "It becomes twice as big",
    explanation: "The flux changes twice as fast, so the emf is twice as large.",
  },
  {
    prompt: "The north pole of a magnet is pushed into a solenoid. What pole does the end of the solenoid nearest the magnet become?",
    options: ["A south pole", "No pole at all", "A north pole", "A north pole and a south pole"],
    answer: "A north pole",
    explanation: "By Lenz's law the induced field opposes the movement, so the near end repels the north pole.",
  },
  {
    prompt: "The north pole of a magnet is pulled out of a solenoid. What does the end of the solenoid nearest the magnet do?",
    options: ["It becomes a south pole and attracts the magnet", "It becomes a north pole and repels the magnet", "It becomes a south pole and repels the magnet", "It has no pole and does nothing"],
    answer: "It becomes a south pole and attracts the magnet",
    explanation: "The induced field opposes the change, so the near end attracts the magnet that is moving away.",
  },
];

const Electromagnetism = () => (
  <CapsSubjectTopic
    title="Electromagnetism"
    subtitle="The field around a current, the solenoid, magnetic flux, Faraday's law and Lenz's law"
    learnSteps={learnSteps}
    task="gr11-electromagnetism-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default Electromagnetism;
