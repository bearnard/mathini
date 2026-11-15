import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { CircuitPair } from '../../../../../components/diagrams/science/SciencePictures2';
import { CircuitSymbols } from '../../../../../components/diagrams/science/SciencePictures6';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Parts of a circuit',
    content: slide(
      <>
        <Rule>
          Electrical systems use a cell, switches, conductors and safety devices. An open switch breaks the circuit, so the circuit stops conducting current.
        </Rule>
        <CircuitSymbols />
        <Worked
          title="Why does the bulb not light?"
          steps={[
            <>The cell is the energy source: it supplies electrical energy to the circuit.</>,
            <>The switch is open, so there is a gap in the path and the circuit stops conducting current.</>,
            <>Wires are made of a good conductor. Metals such as copper let electrical current pass easily.</>,
          ]}
        />
        <Mistake>Thinking that current flows to a bulb through an open switch. The path must be complete and closed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Series and parallel layouts',
    content: slide(
      <>
        <Rule>
          In a series circuit everything sits on a single path. A parallel circuit gives the current more than one path.
        </Rule>
        <CircuitPair />
        <Worked
          title="Compare the layouts"
          steps={[
            <>Series circuits have a single route for current, so one failed bulb breaks the whole loop.</>,
            <>Parallel branches allow current to flow through multiple paths, so each bulb has its own route.</>,
            <>Houses use parallel wiring so that one light can be off while the others stay on.</>,
          ]}
        />
        <Mistake>Thinking a parallel circuit has no complete loop. Each branch makes its own complete loop with the cell.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fuses and circuit breakers',
    content: slide(
      <>
        <Rule>
          A fuse melts and breaks the circuit when current is too high. A circuit breaker does the same job but it can be reset after tripping.
        </Rule>
        <Terms
          rows={[
            ['Fuse', 'a thin wire that melts and breaks the circuit when the current is too high. It must be replaced.'],
            ['Circuit breaker', 'a switch that trips when the current is too high. It can be switched back on once the fault is fixed.'],
          ]}
        />
        <Worked
          title="Protect the wiring"
          steps={[<>Too much current heats wires and can start a fire.</>, <>A fuse protects the wiring by interrupting the dangerous overcurrent.</>, <>A circuit breaker trips instead. After the fault is fixed, it can be reset: this is the difference from a fuse.</>]}
        />
        <Mistake>Replacing a fuse with a thicker wire or a nail. The fuse must melt at the right current, or the wiring is no longer protected.</Mistake>
      </>,
    ),
  },
  {
    title: 'Earthing and safe working',
    content: slide(
      <>
        <Rule>
          Earthing helps safety by giving fault current a low-resistance path to the ground. When working on household wiring, switch off power before touching wires.
        </Rule>
        <Worked
          title="A fault in an appliance"
          steps={[
            <>A loose wire touches the metal case of a kettle, so the case could become live.</>,
            <>The earth wire gives the fault current a low-resistance path to ground, instead of through a person.</>,
            <>Always isolate the power first, by switching it off, before touching household wires, to prevent electric shock.</>,
          ]}
        />
        <Mistake>Thinking a switched-off appliance is safe to open while it is plugged in. Switch off power at the supply first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>How many paths does the current have in a series circuit? Describe a parallel circuit.</li>
            <li>What happens to the current when a switch is open? Name a good conductor of electricity.</li>
            <li>What does a fuse do when the current is too high? How does a circuit breaker differ?</li>
            <li>Why is a plug earthed? What should you always do before touching household wiring?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>In one path. It has more than one path for current.</li>
            <li>It stops flowing. Copper.</li>
            <li>Melt and break the circuit when current is too high. It can be reset after tripping.</li>
            <li>Giving fault current a low-resistance path. Switch off power before touching wires.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In a series circuit, components are connected...',
    options: ['In one path', 'On separate branches', 'Without wires', 'Only to a resistor'],
    answer: 'In one path',
    explanation: 'Series circuits have a single route for current.',
  },
  {
    prompt: 'What is true about a parallel circuit?',
    options: [
      'It has more than one path for current',
      'It works only with one bulb',
      'It cannot use switches',
      'It always has higher resistance than any branch',
    ],
    answer: 'It has more than one path for current',
    explanation: 'Parallel branches allow current to flow through multiple paths.',
  },
  {
    prompt: 'An open switch causes a circuit to...',
    options: ['Stop conducting current', 'Increase voltage automatically', 'Store extra charge', 'Become a parallel circuit'],
    answer: 'Stop conducting current',
    explanation: 'An open switch breaks the circuit path.',
  },
  {
    prompt: 'Which material is usually a good conductor?',
    options: ['Copper', 'Rubber', 'Plastic', 'Dry wood'],
    answer: 'Copper',
    explanation: 'Metals like copper allow electrical current to pass easily.',
  },
  {
    prompt: 'What is the main job of a fuse?',
    options: [
      'Melt and break the circuit when current is too high',
      'Increase current to power devices faster',
      'Store energy like a battery',
      'Convert AC to mechanical motion',
    ],
    answer: 'Melt and break the circuit when current is too high',
    explanation: 'A fuse protects wiring by interrupting dangerous overcurrent.',
  },
  {
    prompt: 'How is a circuit breaker different from a fuse?',
    options: [
      'It can be reset after tripping',
      'It works only in toys',
      'It has no safety function',
      'It is made of rubber insulation',
    ],
    answer: 'It can be reset after tripping',
    explanation: 'Circuit breakers can be switched back on after fault conditions are fixed.',
  },
  {
    prompt: 'Earthing helps safety by...',
    options: ['Giving fault current a low-resistance path', 'Making all of the bulbs shine brighter', 'Replacing all of the switches in the circuit', 'Removing the need for any insulation'],
    answer: 'Giving fault current a low-resistance path',
    explanation: 'Earthing directs fault current safely to ground.',
  },
  {
    prompt: 'Which practice is safest when working on household wiring?',
    options: [
      'Switch off power before touching wires',
      'Touch bare wires to test quickly',
      'Use wet hands for better grip',
      'Bypass the fuse for stronger current',
    ],
    answer: 'Switch off power before touching wires',
    explanation: 'Always isolate power first to prevent electric shock.',
  },
];

const ElectricalSystemsAndCircuitSafety = () => (
  <CapsSubjectTopic
    title="Electrical Systems and Circuit Safety"
    subtitle="Series and parallel circuits, components, and electrical safety"
    learnSteps={learnSteps}
    task="gr8-electrical-systems-and-circuit-safety-t2"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ElectricalSystemsAndCircuitSafety;
