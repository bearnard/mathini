import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { CircuitSymbols, SimpleCircuit } from '../../../../../components/diagrams/ns8/Ns8b';
import { CIRCUIT_SYMBOLS, COMPONENTS, ELECTROLYSIS, bulbLights, positiveTerminal } from '../../../../../components/diagrams/ns8/ns8bHelpers';

// Every statement comes from ns8bHelpers.ts (tested in ns8bHelpers.test.ts and g8NsT3.test.ts). Circuits are qualitative at Grade 8: there is no V = IR here.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'A circuit',
    content: slide(
      <>
        <Rule>A circuit is a system for transferring electrical energy. A circuit is a complete conducting pathway: from one terminal of the cell or battery, along the wires, through the device, such as the filament of a bulb, and back to the other terminal. A closed circuit is needed to make a device work.</Rule>
        <SimpleCircuit switchClosed />
        <Worked
          title="Will the bulb light?"
          steps={[
            `Cell, closed switch and unbroken wires: the bulb lights (${bulbLights(true, true, true) ? 'yes' : 'no'}).`,
            `The switch is open, so the pathway is broken: the bulb stays off (${bulbLights(true, false, true) ? 'yes' : 'no'}).`,
            `There is no cell, so there is no source of energy: the bulb stays off (${bulbLights(false, true, true) ? 'yes' : 'no'}).`,
          ]}
        />
        <Mistake>Thinking that a bulb needs only one wire from the cell. The circuit must be a complete loop.</Mistake>
      </>,
    ),
  },
  {
    title: 'Components of a circuit',
    content: slide(
      <>
        <Rule>Conducting wires are usually made of metal and carry electricity over a short or long distance. Switches control the circuit. Cells and batteries are chemical systems that are sources of energy: the chemicals react to produce an electric current, which is a flow of charges. Resistors oppose the flow of current, and a bulb filament is a resistance wire.</Rule>
        <FactCards
          cards={COMPONENTS.map((c) => ({ title: c.name, line1: c.job.slice(0, 40), line2: c.job.slice(40).trim() }))}
          aria={`Components of a circuit. ${COMPONENTS.map((c) => `${c.name}: ${c.job}`).join('. ')}.`}
        />
        <Worked
          title="Where does the energy come from?"
          steps={[
            'A cell stores chemical potential energy in its chemicals.',
            'When the circuit is complete the chemicals react and a current flows (kinetic energy of moving charges).',
            'The filament of the bulb resists the current, heats up and gives out light.',
          ]}
        />
        <Mistake>Saying that a cell is full of electricity. It stores chemical energy that makes a current flow when the circuit is complete.</Mistake>
      </>,
    ),
  },
  {
    title: 'Circuit diagrams and symbols',
    content: slide(
      <>
        <Rule>Scientists draw a circuit as a circuit diagram, using a symbol for each component. Wires are drawn as straight lines. In the symbol for a cell, the long thin line is the positive terminal and the short thick line is the negative terminal. A battery is two or more cells joined together.</Rule>
        <CircuitSymbols />
        <Worked
          title="Read the diagram"
          steps={[
            `A circle with a cross inside is a ${CIRCUIT_SYMBOLS.find((s) => s.looks.startsWith('a circle'))!.name}.`,
            `A small rectangle is a ${CIRCUIT_SYMBOLS.find((s) => s.looks === 'a small rectangle')!.name}.`,
            `The positive terminal of a cell is the ${positiveTerminal()}.`,
            'A switch drawn with a gap is open, so the circuit is broken and no current flows.',
          ]}
        />
        <Mistake>Drawing a picture of a real bulb or battery in a circuit diagram. Use the symbols, and draw the wires as straight lines with square corners.</Mistake>
      </>,
    ),
  },
  {
    title: 'Effects of an electric current',
    content: slide(
      <>
        <Rule>A current has three effects. It heats a resistance wire, for example a bulb filament, which can get white hot. It makes a magnetic field around a wire, so a coil of wire can be an electromagnet. It can cause a chemical reaction in a solution, called electrolysis. A short circuit happens when the current takes the path of lowest resistance, and a fuse is a safety wire that melts and breaks the circuit when it gets too hot.</Rule>
        <FactCards
          cards={[
            { title: 'Heating effect', line1: 'a bulb filament gets white hot', line2: 'a fuse melts if it overheats' },
            { title: 'Magnetic effect', line1: 'current in a coil of wire makes', line2: 'a temporary electromagnet' },
            { title: 'Chemical effect', line1: `water gives ${ELECTROLYSIS.water.products.join(' and ')}`, line2: `copper(II) chloride: ${ELECTROLYSIS.copperChloride.products.join(' and ')}` },
          ]}
          aria="Effects of a current. The heating effect: a bulb filament gets white hot and a fuse melts if it overheats. The magnetic effect: current in a coil of wire makes a temporary electromagnet. The chemical effect: electrolysis breaks water into hydrogen and oxygen, and copper(II) chloride solution into copper and chlorine."
        />
        <Worked
          title="Why is a fuse a safety device?"
          steps={[
            'A short circuit lets a very large current flow through a wire joined straight across the cell.',
            'The fuse wire overheats and melts, which breaks the circuit.',
            'The current stops before the wires get hot enough to cause a fire.',
          ]}
        />
        <Mistake>Thinking that a short circuit is a break in the wire. It is an easy path of low resistance that lets too much current flow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is needed for a bulb to light?</>,
          <>Explain the job of a switch.</>,
          <>Name the effect of a current when a filament gets white hot.</>,
          <>What two gases form when water is broken down by electricity?</>,
        ]}
        answers={[
          <>A complete (closed) circuit with a cell.</>,
          <>It opens and closes the circuit.</>,
          <>The heating effect.</>,
          <>Hydrogen and oxygen.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a circuit?",
    options: ["A battery with two terminals", "A bulb connected to nothing", "A complete pathway for electricity", "A switch that is left open"],
    answer: "A complete pathway for electricity",
    explanation: "A circuit is a complete pathway from the source, through the device and back.",
  },
  {
    prompt: "What is needed to make a bulb light up?",
    options: ["A closed circuit with a source of energy", "A single wire from one terminal", "Only a bulb", "A switch that is open"],
    answer: "A closed circuit with a source of energy",
    explanation: "The pathway must be complete and have a cell or battery.",
  },
  {
    prompt: "Why does a bulb stay off when the switch is open?",
    options: ["The cell has no chemicals", "The bulb has too much resistance", "Current flows only in wires", "The circuit is broken, so no current flows"],
    answer: "The circuit is broken, so no current flows",
    explanation: "An open switch breaks the pathway.",
  },
  {
    prompt: "What does a switch do in a circuit?",
    options: ["It stores energy", "It opens and closes the circuit", "It makes light", "It makes the current bigger"],
    answer: "It opens and closes the circuit",
    explanation: "Switches are a convenient way of controlling circuits.",
  },
  {
    prompt: "What kind of energy is stored in a cell?",
    options: ["Electrical kinetic energy", "Chemical potential energy", "Heat energy", "Light energy"],
    answer: "Chemical potential energy",
    explanation: "Cells store chemical substances; when the circuit is complete they react to give a current.",
  },
  {
    prompt: "What is an electric current?",
    options: ["A store of chemicals", "A source of energy", "A gas made in a cell", "A flow of charges"],
    answer: "A flow of charges",
    explanation: "An electric current is a flow of charges (kinetic energy).",
  },
  {
    prompt: "Why are conducting wires usually made of metal?",
    options: ["Metals carry electricity well", "Metals store chemical energy", "Metals give out light", "Metals stop the current"],
    answer: "Metals carry electricity well",
    explanation: "Wires are conductors that carry electricity over short or long distances.",
  },
  {
    prompt: "How does a resistor affect the current in a circuit?",
    options: ["It stores charge", "It switches the current off", "It opposes the flow of current", "It makes new charges"],
    answer: "It opposes the flow of current",
    explanation: "Resistors resist the flow of electric current.",
  },
  {
    prompt: "Which part of a torch bulb heats up until it is white hot?",
    options: ["The casing", "The insulator", "The solder knob", "The filament"],
    answer: "The filament",
    explanation: "The filament is a resistance wire that heats up and gives out light.",
  },
  {
    prompt: "What is a fuse?",
    options: ["A wire that stores charge", "A safety wire that melts", "A switch to turn a bulb on", "A cell that gives energy"],
    answer: "A safety wire that melts",
    explanation: "A fuse melts when a circuit overheats.",
  },
  {
    prompt: "What is a short circuit?",
    options: ["A path of very low resistance", "A circuit with too many bulbs", "A cell that is empty", "A bulb that is missing"],
    answer: "A path of very low resistance",
    explanation: "A conductor joined directly across the cell lets too much current flow.",
  },
  {
    prompt: "Which effect of a current is used in an electromagnet?",
    options: ["The heating effect", "The chemical effect", "The magnetic effect", "The cooling effect"],
    answer: "The magnetic effect",
    explanation: "A current in a coil of wire makes a magnetic field.",
  },
  {
    prompt: "What process uses a current to break down water into hydrogen and oxygen?",
    options: ["Evaporation", "Filtration", "Electrolysis", "Dissolving"],
    answer: "Electrolysis",
    explanation: "A current can cause a chemical reaction in a solution called electrolysis.",
  },
  {
    prompt: "What products form when copper(II) chloride solution is broken down by electrolysis?",
    options: ["Copper and chlorine", "Hydrogen and oxygen", "Copper and oxygen", "Chlorine and hydrogen"],
    answer: "Copper and chlorine",
    explanation: "Copper is deposited on one electrode and chlorine bubbles form at the other.",
  },
  {
    prompt: "In a circuit diagram, which symbol stands for a bulb?",
    options: ["A small rectangle", "A circle with a cross inside", "A long line and a short line", "A line lifted away from a contact"],
    answer: "A circle with a cross inside",
    explanation: "A bulb is drawn as a circle with a cross inside. A small rectangle is a resistor, and a long and a short line is a cell.",
  },
  {
    prompt: "In the circuit-diagram symbol for a cell, which line is the positive terminal?",
    options: ["The shorter, thicker line", "Both lines", "The longer, thinner line", "Neither line"],
    answer: "The longer, thinner line",
    explanation: "The long thin line is the positive terminal and the short thick line is the negative terminal.",
  },
  {
    prompt: "A circuit diagram shows a switch drawn with a gap. What does this tell you?",
    options: ["The switch is closed and the bulb lights", "The bulb is broken", "The cell is flat", "The switch is open, so no current flows"],
    answer: "The switch is open, so no current flows",
    explanation: "A gap means the switch is open, so the pathway is broken and no current flows.",
  },
];

const ElectricCircuitsCurrent = () => (
  <CapsSubjectTopic
    title="Electric Circuits and Current Electricity"
    subtitle="Circuits, components and the effects of an electric current"
    learnSteps={learnSteps}
    task="gr8-electric-circuits-current-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default ElectricCircuitsCurrent;
