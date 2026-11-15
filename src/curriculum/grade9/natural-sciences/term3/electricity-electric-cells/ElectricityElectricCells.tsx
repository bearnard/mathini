import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { CircuitPair } from '../../../../../components/diagrams/science/SciencePictures2';
import { CircuitSymbols } from '../../../../../components/diagrams/science/SciencePictures6';
import { WireResistance } from '../../../../../components/diagrams/science/SciencePictures9';
import { current } from '../../../../../components/diagrams/science/electronicsHelpers';
import { wireResistance } from '../../../../../components/diagrams/science/science9Helpers';

// The Ohm's law example and the wire resistances come from tested helpers (electronics.test.ts, science9.test.ts).
const amps = current(12, 3);
const sa = (n: number) => String(n).replace('.', ',');
const rShort = wireResistance(1, 1);
const rLong = wireResistance(2, 1);
const rThin = wireResistance(2, 0.5);
const amps6 = current(12, 6);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Current and the parts of a circuit',
    content: slide(
      <>
        <Rule>
          Electric current is the flow of electrons through a conductor, such as a wire. A power source, a cell or battery, gives the energy that pushes the current round the circuit.
        </Rule>
        <CircuitSymbols />
        <Terms
          rows={[
            ['Power source', 'a cell or battery: gives the energy that pushes the current round'],
            ['Conductor', 'a wire: lets current flow'],
            ['Load', 'a bulb or motor: uses the energy'],
            ['Switch', 'opens or closes the circuit'],
          ]}
        />
        <Worked
          title="Follow the current"
          steps={[<>The cell pushes electrons out into the wire.</>, <>The electrons flow through the closed circuit and through the bulb, which uses the energy and lights.</>, <>Open the switch and the path is broken, so the current stops.</>]}
        />
        <Mistake>Thinking the bulb uses up the electrons. The electrons keep flowing round the circuit. The bulb changes electrical energy into light and heat.</Mistake>
      </>,
    ),
  },
  {
    title: 'Series and parallel circuits',
    content: slide(
      <>
        <Rule>
          In a series circuit all the components are in one path. In a parallel circuit each component has its own path, so if one path breaks, the other paths still work.
        </Rule>
        <CircuitPair />
        <Compare
          left={{ title: 'Series', tone: 'sky', rows: ['one path for the current', 'if one bulb breaks, all bulbs go out', 'adding more bulbs makes the bulbs dimmer'] }}
          right={{ title: 'Parallel', tone: 'emerald', rows: ['each bulb has its own path', 'if one path breaks, the other paths still work', 'house lights are wired in parallel'] }}
        />
        <Worked
          title="One bulb breaks"
          steps={[<>Series: the single path is broken, so all the bulbs go out.</>, <>Parallel: only the broken path stops. The other bulbs stay on.</>, <>Adding more bulbs in series adds more resistance, which reduces the current, so every bulb gets dimmer.</>]}
        />
        <Mistake>Believing that a parallel circuit has no complete loop. Each branch makes its own complete loop with the cell.</Mistake>
      </>,
    ),
  },
  {
    title: 'Potential difference',
    content: slide(
      <>
        <Rule>
          Potential difference, or voltage, is the push that drives the current. It is measured in volts (V).
        </Rule>
        <Terms
          rows={[
            ['Potential difference', 'the push that drives current: measured in volts (V)'],
            ['Higher voltage', 'pushes more current through the same circuit'],
            ['A cell', 'about 1,5 V; a battery is cells joined together, so it gives a larger voltage'],
          ]}
        />
        <Worked
          title="Name the quantity"
          steps={[<>What pushes electrons through the circuit? The potential difference.</>, <>What unit measures potential difference? Volts.</>, <>If the same bulb is connected to a bigger voltage, more current flows.</>]}
        />
        <Mistake>Thinking voltage is the amount of current. Voltage is the push, and current is the flow it causes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Resistance',
    content: slide(
      <>
        <Rule>
          Resistance is the opposition to the flow of current. Making a wire longer and thinner increases its resistance. Resistance is measured in ohms (Ω).
        </Rule>
        <WireResistance />
        <Worked
          title="Compare three wires (relative units)"
          steps={[<>A short, thick wire has resistance {sa(rShort)}.</>, <>Doubling the length doubles the resistance: {sa(rLong)}.</>, <>Making that wire half as thick doubles it again: {sa(rThin)}. Longer and thinner means more resistance.</>]}
        />
        <Mistake>Thinking a thicker wire resists more because there is more material. A thick wire gives the electrons more room, so its resistance is lower.</Mistake>
      </>,
    ),
  },
  {
    title: "Ohm's law",
    content: slide(
      <>
        <Rule>
          Ohm&apos;s law links the three quantities: V = I × R, so the current I = V ÷ R. V is in volts, I in amperes (A) and R in ohms (Ω).
        </Rule>
        <Worked
          title="A 12 V source and a 3 Ω resistor"
          steps={[<>Write the law: I = V ÷ R.</>, <>Put in the numbers: I = 12 ÷ 3.</>, <>I = <strong>{amps} A</strong>. With a 6 Ω resistor the current would be 12 ÷ 6 = {amps6} A: more resistance, less current.</>]}
        />
        <Mistake>Multiplying instead of dividing. To find the current you divide the voltage by the resistance, I = V ÷ R.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is electric current? What does a power source do in a circuit?</li>
            <li>In a series circuit, if one bulb breaks, what happens? What is an advantage of a parallel circuit? What happens to brightness when you add more bulbs in series?</li>
            <li>What is potential difference? Which unit measures it?</li>
            <li>What is resistance? Which factor increases the resistance of a wire? What does a 12 V source give through a 3 Ω resistor?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The flow of electrons. It gives the energy that pushes the current round.</li>
            <li>All bulbs go out. If one path breaks, the other paths still work. It gets dimmer.</li>
            <li>The push that drives current. Volts.</li>
            <li>The opposition to the flow of current. Making it longer and thinner. 4 A.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is electric current?',
    options: ['A type of voltage', 'The flow of electrons', 'Resistance in a wire', 'A power source'],
    answer: 'The flow of electrons',
    explanation: 'Electric current is the movement of electrons through a conductor.',
  },
  {
    prompt: 'What does a power source do in a circuit?',
    options: ['Stops the current when the switch is closed', 'Gives the energy that pushes the current round', 'Adds resistance to slow the current down', 'Slows the electrons to save the energy'],
    answer: 'Gives the energy that pushes the current round',
    explanation: 'A power source (cell or battery) pushes electrons around the circuit.',
  },
  {
    prompt: 'In a series circuit, if one bulb breaks, what happens?',
    options: ['Other bulbs stay bright', 'All bulbs go out', 'Current increases', 'The cell explodes'],
    answer: 'All bulbs go out',
    explanation: 'In series, components share one path; breaking it stops all current.',
  },
  {
    prompt: 'What is an advantage of a parallel circuit?',
    options: ['It uses less energy than a series circuit does', 'The bulbs always shine brighter than in a series circuit', 'If one path breaks, the other paths still work', 'It needs fewer wires than a series circuit does'],
    answer: 'If one path breaks, the other paths still work',
    explanation: 'In parallel circuits, each component has its own path.',
  },
  {
    prompt: 'What is potential difference?',
    options: ['The resistance of a wire', 'The rate of current flow', 'The push that drives current', 'A circuit component'],
    answer: 'The push that drives current',
    explanation: 'Potential difference (voltage) is what pushes electrons through a circuit.',
  },
  {
    prompt: 'What is resistance?',
    options: ['The part that gives the circuit its energy', 'The opposition to the flow of current', 'The part that opens and closes the circuit', 'The metal that joins the parts of the circuit'],
    answer: 'The opposition to the flow of current',
    explanation: 'Resistance opposes and reduces the flow of current in a circuit.',
  },
  {
    prompt: 'Which factor increases the resistance of a wire?',
    options: ['Making it thicker and shorter', 'Making it shorter but of the same thickness', 'Making it longer and thinner', 'Making it of a thicker and more costly metal'],
    answer: 'Making it longer and thinner',
    explanation: 'Longer wires and thinner wires have more resistance.',
  },
  {
    prompt: 'In which circuit are all components in one path?',
    options: ['Parallel', 'Series', 'Mixed', 'Random'],
    answer: 'Series',
    explanation: 'Series circuits have all components connected one after another.',
  },
  {
    prompt: 'What happens to brightness when you add more bulbs in series?',
    options: ['Gets brighter', 'Gets dimmer', 'Stays the same', 'Flickers'],
    answer: 'Gets dimmer',
    explanation: 'More resistors in series reduce current and dim the bulbs.',
  },
  {
    prompt: 'What unit measures potential difference?',
    options: ['Amps', 'Ohms', 'Volts', 'Watts'],
    answer: 'Volts',
    explanation: 'Potential difference is measured in volts (V).',
  },
];

const ElectricityElectricCells = () => (
  <CapsSubjectTopic
    title="Electricity and Electric Cells"
    subtitle="Circuits, current, and how electricity flows"
    learnSteps={learnSteps}
    task="gr9-electricity-electric-cells-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default ElectricityElectricCells;
