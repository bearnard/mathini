import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { ResistorLayout } from '../../../../../components/diagrams/circuit10/Circuit10';
import { chargeFlowed, current, missingPart, parallelR, potentialDifference, seriesR, totalCurrent, totalPd, twoParallel } from '../../../../../components/diagrams/circuit10/circuit10Helpers';

// Every number comes from circuit10Helpers.ts (tested in circuit10Helpers.test.ts and g10PsW2T2b.test.ts).
// Kept to the Grade 10 CAPS list: V = W/Q, I = Q/t, resistance, series and parallel. Ohm's law (V = IR) is Grade 11 and is not used.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(x).replace('.', ',');

export const learnSteps: LearnStep[] = [
  {
    title: 'Potential difference and current',
    content: slide(
      <>
        <Rule>The potential difference (pd) between two points is the work done per unit charge moved between them: V = W/Q, measured in volts (V). Current is the rate of flow of charge: I = Q/t, measured in amperes (A), where 1 A is 1 coulomb per second. The emf is the pd across a battery when no current flows.</Rule>
        <FactCards
          cards={[
            { title: 'Potential difference', line1: 'V = W ÷ Q, in volts (V)', line2: '1 V = 1 joule per coulomb' },
            { title: 'Current', line1: 'I = Q ÷ t, in amperes (A)', line2: '1 A = 1 coulomb per second' },
            { title: 'Ammeter', line1: 'connected in series with', line2: 'the component it measures' },
            { title: 'Voltmeter', line1: 'connected in parallel with', line2: 'the component it measures' },
          ]}
          aria="Electric circuit quantities. Potential difference: V equals W divided by Q, in volts, where one volt is one joule per coulomb. Current: I equals Q divided by t, in amperes, where one ampere is one coulomb per second. An ammeter is connected in series with the component it measures. A voltmeter is connected in parallel with the component it measures."
        />
        <Worked
          title="Two calculations"
          steps={[
            `12 J of work moves 4 C between two points: V = 12 ÷ 4 = ${potentialDifference(12, 4)} V.`,
            `90 C flows past a point in 30 s: I = 90 ÷ 30 = ${current(90, 30)} A.`,
            `A current of 2 A for 30 s moves Q = 2 × 30 = ${chargeFlowed(2, 30)} C.`,
          ]}
        />
        <Mistake>Connecting an ammeter in parallel. It must be in series so that the current flows through it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Resistance',
    content: slide(
      <>
        <Rule>Resistance is the opposition to the flow of electric current. Its unit is the ohm (Ω): one ohm is one volt per ampere. In a metal the moving electrons collide with the particles of the metal and transfer kinetic energy to them, so the metal heats up. A long, thin, hot conductor has more resistance than a short, thick, cool one.</Rule>
        <FactCards
          cards={[
            { title: 'Longer wire', line1: 'more resistance:', line2: 'more collisions on the way' },
            { title: 'Thicker wire', line1: 'less resistance:', line2: 'more room for the electrons' },
            { title: 'Material', line1: 'copper has low resistance;', line2: 'nichrome has high resistance' },
            { title: 'Temperature', line1: 'a hotter metal has', line2: 'more resistance' },
          ]}
          aria="Factors affecting the resistance of a conductor. A longer wire has more resistance, because there are more collisions on the way. A thicker wire has less resistance, because there is more room for the electrons. The material matters: copper has low resistance and nichrome has high resistance. A hotter metal has more resistance."
        />
        <Worked
          title="Why does a battery go flat?"
          steps={[
            'A battery changes chemical potential energy into electrical energy.',
            'The resistors in the circuit change the electrical energy into heat and light.',
            'When the chemical energy is used up, the battery can no longer push charge round the circuit: it is flat.',
          ]}
        />
        <Mistake>Saying that a battery stores charge. It stores chemical energy, and the charge is already in the wires.</Mistake>
      </>,
    ),
  },
  {
    title: 'Resistors in series',
    content: slide(
      <>
        <Rule>In a series circuit there is one path. The current is the same everywhere, the pds across the components add up to the pd of the supply (a voltage divider), and the equivalent resistance is Rs = R₁ + R₂ + R₃. Adding a resistor in series increases the total resistance.</Rule>
        <ResistorLayout kind="series" rs={[2, 3, 5]} />
        <Worked
          title="Series calculations"
          steps={[
            `Resistors of 2 Ω, 3 Ω and 5 Ω in series: Rs = 2 + 3 + 5 = ${seriesR([2, 3, 5])} Ω.`,
            `The pds across three components are 2 V, 3 V and 1 V, so the supply is ${totalPd([2, 3, 1])} V.`,
            `A 12 V supply drives a circuit with pds of 4 V and 5 V across two bulbs, so the third component has ${missingPart(12, [4, 5])} V.`,
          ]}
        />
        <Mistake>Saying that the current is used up as it passes through each resistor. The same current flows through all of them; the energy is what is transferred.</Mistake>
      </>,
    ),
  },
  {
    title: 'Resistors in parallel',
    content: slide(
      <>
        <Rule>In a parallel circuit there are several paths. The pd is the same across each branch, the branch currents add up to the total current (a current divider), and the equivalent resistance follows 1/Rp = 1/R₁ + 1/R₂. For two resistors Rp = R₁R₂ ÷ (R₁ + R₂). Adding a resistor in parallel decreases the total resistance.</Rule>
        <ResistorLayout kind="parallel" rs={[6, 3]} />
        <Worked
          title="Parallel calculations"
          steps={[
            `6 Ω and 3 Ω in parallel: Rp = (6 × 3) ÷ (6 + 3) = ${n(twoParallel(6, 3))} Ω, less than the smaller resistor.`,
            `Three 6 Ω resistors in parallel: 1/Rp = 3/6, so Rp = ${n(parallelR([6, 6, 6]))} Ω.`,
            `Branch currents of 1,5 A and 0,5 A give a total current of ${n(totalCurrent([1.5, 0.5]))} A.`,
          ]}
        />
        <Mistake>Adding the resistances in a parallel circuit. The total is always smaller than the smallest branch.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How do you connect an ammeter to measure the current through a bulb?</>,
          <>What is the equivalent resistance of 2 Ω, 3 Ω and 5 Ω in series?</>,
          <>What is the equivalent resistance of 6 Ω and 3 Ω in parallel?</>,
          <>12 J of work moves 4 C. What is the pd?</>,
        ]}
        answers={[
          <>In series with the bulb.</>,
          <>{seriesR([2, 3, 5])} Ω.</>,
          <>{n(twoParallel(6, 3))} Ω.</>,
          <>{potentialDifference(12, 4)} V.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the potential difference between two points?",
    options: ["The charge that flows per second", "The opposition to the flow of charge", "The work done per unit charge moved between them", "The total energy stored in a battery"],
    answer: "The work done per unit charge moved between them",
    explanation: "Potential difference is V = W/Q, work done per coulomb.",
  },
  {
    prompt: "30 J of work is done to move 5 C of charge between two points. What is the potential difference?",
    options: ["6 V", "150 V", "0,17 V", "35 V"],
    answer: "6 V",
    explanation: "V = W ÷ Q = 30 ÷ 5 = 6 V.",
  },
  {
    prompt: "A charge of 90 C flows past a point in a wire in 30 s. What is the current?",
    options: ["2 700 A", "0,33 A", "60 A", "3 A"],
    answer: "3 A",
    explanation: "I = Q ÷ t = 90 ÷ 30 = 3 A.",
  },
  {
    prompt: "A current of 2 A flows through a bulb for 30 s. How much charge flows through it?",
    options: ["15 C", "60 C", "0,07 C", "32 C"],
    answer: "60 C",
    explanation: "Q = I × t = 2 × 30 = 60 C.",
  },
  {
    prompt: "How must an ammeter be connected to measure the current through a bulb?",
    options: ["In parallel with the bulb", "In series with the bulb", "Across the battery only", "Next to the switch, but not in the circuit"],
    answer: "In series with the bulb",
    explanation: "The current must flow through the ammeter, so it is placed in series.",
  },
  {
    prompt: "How must a voltmeter be connected to measure the pd across a resistor?",
    options: ["In series with the resistor", "In series with the battery", "In place of the resistor", "In parallel with the resistor"],
    answer: "In parallel with the resistor",
    explanation: "A voltmeter measures the pd between two points, so it is connected across the component.",
  },
  {
    prompt: "What does one ohm mean?",
    options: ["One volt per ampere", "One joule per coulomb", "One coulomb per second", "One watt per volt"],
    answer: "One volt per ampere",
    explanation: "The ohm is the unit of resistance, defined as one volt per ampere.",
  },
  {
    prompt: "Three resistors of 4 Ω, 6 Ω and 8 Ω are connected in series. What is the equivalent resistance?",
    options: ["1,8 Ω", "192 Ω", "18 Ω", "2 Ω"],
    answer: "18 Ω",
    explanation: "Rs = 4 + 6 + 8 = 18 Ω.",
  },
  {
    prompt: "In a series circuit with a 12 V supply, two bulbs have pds of 4 V and 5 V. What is the pd across the third component?",
    options: ["21 V", "9 V", "1 V", "3 V"],
    answer: "3 V",
    explanation: "The pds add up to the supply: 12 − 4 − 5 = 3 V.",
  },
  {
    prompt: "Which statement about the current in a series circuit is correct?",
    options: ["It divides between the components", "It is the same through every component", "It is used up in the first resistor", "It is largest in the biggest resistor"],
    answer: "It is the same through every component",
    explanation: "In a series circuit there is only one path, so the same current flows everywhere.",
  },
  {
    prompt: "What is the equivalent resistance of a 6 Ω and a 3 Ω resistor in parallel?",
    options: ["2 Ω", "9 Ω", "4,5 Ω", "18 Ω"],
    answer: "2 Ω",
    explanation: "Rp = (6 × 3) ÷ (6 + 3) = 2 Ω.",
  },
  {
    prompt: "What is the equivalent resistance of a 12 Ω and a 4 Ω resistor in parallel?",
    options: ["16 Ω", "8 Ω", "3 Ω", "48 Ω"],
    answer: "3 Ω",
    explanation: "Rp = (12 × 4) ÷ (12 + 4) = 3 Ω.",
  },
  {
    prompt: "The total current in a parallel circuit is 2 A. One branch carries 1,5 A. What current does the other branch carry?",
    options: ["3,5 A", "1,5 A", "0,5 A", "1,3 A"],
    answer: "0,5 A",
    explanation: "The branch currents add up to the total: 2 − 1,5 = 0,5 A.",
  },
  {
    prompt: "What happens to the total resistance when another resistor is connected in parallel to a circuit?",
    options: ["It decreases", "It increases", "It stays the same", "It becomes zero"],
    answer: "It decreases",
    explanation: "A new path lets more current flow, so the equivalent resistance decreases.",
  },
];

const CircuitsSeriesParallel = () => (
  <CapsSubjectTopic
    title="Electric Circuits: Series and Parallel"
    subtitle="Potential difference, current, resistance, and resistors in series and in parallel"
    learnSteps={learnSteps}
    task="gr10-circuits-series-parallel-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default CircuitsSeriesParallel;
