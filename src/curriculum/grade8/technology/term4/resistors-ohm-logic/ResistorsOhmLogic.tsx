import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { GatePanel } from '../../../../../components/diagrams/tech8/Tech8d';
import { DEVICE_ROLES, SYMBOLS, currentChange, panicButtonGate, roleOf, truthTable, wiringFor } from '../../../../../components/diagrams/tech8/tech8dHelpers';

// Every statement comes from tech8dHelpers.ts (tested in tech8dHelpers.test.ts and g8TechT4.test.ts). Ohm's law is qualitative at Grade 8: no calculations.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Circuit components and symbols',
    content: slide(
      <>
        <Rule>A circuit is drawn using accepted symbols for the components: {SYMBOLS.join(', ')}. Input devices supply energy (an electrochemical cell, a generator, a solar panel). Output devices use it (a resistor, lamp, heater, buzzer or motor). A control device such as a switch opens and closes the circuit. Some devices can serve as input, output, process or control devices. A short circuit is a connection of very low resistance across the source.</Rule>
        <FactCards
          cards={[
            { title: 'Input devices', line1: DEVICE_ROLES.input.join(', '), line2: 'supply the energy' },
            { title: 'Output devices', line1: DEVICE_ROLES.output.join(', '), line2: 'use the energy' },
            { title: 'Control device', line1: DEVICE_ROLES.control.join(', '), line2: 'opens and closes the circuit' },
          ]}
          aria="Circuit components. Input devices, which supply the energy: electrochemical cell, generator, solar panel. Output devices, which use the energy: resistor, lamp, heater, buzzer, motor. Control device: switch, which opens and closes the circuit."
        />
        <Worked
          title="Sort the components"
          steps={[
            `A solar panel is an input device (${roleOf('solar panel')}).`,
            `A buzzer is an output device (${roleOf('buzzer')}).`,
            `A switch is a control device (${roleOf('switch')}).`,
          ]}
        />
        <Mistake>Drawing a picture of the component instead of its symbol. Circuit diagrams use the accepted symbols.</Mistake>
      </>,
    ),
  },
  {
    title: 'Resistors and Ohm\'s law (qualitative)',
    content: slide(
      <>
        <Rule>Resistors oppose the flow of current. Resistors in series make the total resistance bigger, so the current is smaller and a lamp is dimmer. Resistors in parallel give the current more pathways, so the total current is bigger. Ohm's law is introduced qualitatively, with no calculations: more cells in series give more voltage, and if the resistance does not change the current increases and the lamp is brighter.</Rule>
        <FactCards
          cards={[
            { title: 'More cells in series', line1: 'more voltage, so the current', line2: `${currentChange('more cells in series')} (resistance unchanged)` },
            { title: 'More resistance in series', line1: 'the current', line2: `${currentChange('more resistance in series')}, the lamp dims` },
            { title: 'More resistors in parallel', line1: 'more pathways, so the', line2: `total current ${currentChange('more resistors in parallel')}` },
          ]}
          aria="Resistors and Ohm's law, qualitatively. More cells in series give more voltage, so the current increases if the resistance does not change. More resistance in series makes the current decrease and the lamp dim. More resistors in parallel give more pathways, so the total current increases."
        />
        <Worked
          title="Investigate with one, two and three cells"
          steps={[
            'Connect one cell to a lamp and note its brightness.',
            'Connect two cells in series: the voltage is higher, so the current increases and the lamp is brighter.',
            'Connect three cells in series: the lamp is brighter still, as long as the resistance does not change.',
          ]}
        />
        <Mistake>Trying to calculate with Ohm's law at this level. In Grade 8 we only describe how voltage, current and resistance change.</Mistake>
      </>,
    ),
  },
  {
    title: 'AND and OR logic gates',
    content: slide(
      <>
        <Rule>A logic gate gives an output that depends on its inputs. For an AND condition both inputs must be on: two switches in series. For an OR condition at least one input must be on: two switches in parallel. A truth table lists every combination of inputs and the output, where 1 means switch closed or output on, and 0 means open or off.</Rule>
        <GatePanel gate="AND" />
        <Worked
          title="Read the AND table"
          steps={[
            `With both switches open (0, 0) the output is ${truthTable('AND')[0].out}.`,
            `With only one switch closed the output is ${truthTable('AND')[1].out}: AND needs both. With both closed it is ${truthTable('AND')[3].out}.`,
            `AND uses switches in ${wiringFor('AND')}; OR uses switches in ${wiringFor('OR')}, so one closed switch gives output ${truthTable('OR')[1].out}.`,
          ]}
        />
        <Mistake>Mixing up AND and OR. AND needs every input on; OR needs at least one.</Mistake>
      </>,
    ),
  },
  {
    title: 'A panic button system',
    content: slide(
      <>
        <Rule>A panic button system uses an alarm that must sound when any one of several panic buttons is pressed, so it needs {panicButtonGate} logic: the buttons are wired in parallel. A system that must be armed and triggered at the same time needs AND logic: switches in series. Learners write a design brief, draw the circuit with symbols, and draw the truth table of the device.</Rule>
        <GatePanel gate="OR" />
        <Worked
          title="Panic buttons in two rooms"
          steps={[
            `The alarm should sound if button A or button B is pressed: this is ${panicButtonGate} logic, wired in ${wiringFor(panicButtonGate)}.`,
            `Truth table: neither pressed gives ${truthTable('OR')[0].out}; A only gives ${truthTable('OR')[2].out}; B only gives ${truthTable('OR')[1].out}; both give ${truthTable('OR')[3].out}.`,
            'A vending machine might use AND: the coin must be in AND the button must be pressed.',
          ]}
        />
        <Mistake>Wiring panic buttons in series. Then the alarm would sound only when every button is pressed together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which type of device is a lamp: input, output or control?</>,
          <>More cells are added in series and the resistance stays the same. What happens to the current?</>,
          <>Which gate needs both switches closed?</>,
          <>Which gate suits a panic button system with two buttons?</>,
        ]}
        answers={[
          <>An output device.</>,
          <>It increases.</>,
          <>The AND gate (switches in series).</>,
          <>The OR gate (switches in parallel).</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which of these is an output device?",
    options: ["A switch", "A solar panel", "A buzzer", "A generator"],
    answer: "A buzzer",
    explanation: "Output devices use the energy: resistor, lamp, heater, buzzer, motor.",
  },
  {
    prompt: "What type of device is a switch?",
    options: ["A control device", "An input device", "An output device", "A source of energy"],
    answer: "A control device",
    explanation: "A switch controls the circuit.",
  },
  {
    prompt: "What is a short circuit?",
    options: ["A circuit with too many switches", "A circuit with no cell at all", "A circuit with only a lamp", "A path of very low resistance"],
    answer: "A path of very low resistance",
    explanation: "The current takes the path of lowest resistance.",
  },
  {
    prompt: "More resistors are added to a circuit in series. What happens to the current?",
    options: ["It increases", "It decreases", "It stays the same", "It becomes alternating"],
    answer: "It decreases",
    explanation: "More resistance in series means less current, and the lamp is dimmer.",
  },
  {
    prompt: "More resistors are added in parallel. What happens to the total current?",
    options: ["It decreases", "It increases", "It stays the same", "It stops"],
    answer: "It increases",
    explanation: "More pathways let more current flow.",
  },
  {
    prompt: "More cells are connected in series to a lamp with the resistance unchanged. What happens to the lamp?",
    options: ["It becomes dimmer", "It goes out", "Nothing changes", "It becomes brighter"],
    answer: "It becomes brighter",
    explanation: "More voltage gives more current.",
  },
  {
    prompt: "In Grade 8, how is Ohm's law treated?",
    options: ["Qualitatively: no calculations", "With calculations only", "As a formula to learn", "It is not mentioned at all"],
    answer: "Qualitatively: no calculations",
    explanation: "Learners note how voltage, current and resistance change without calculating.",
  },
  {
    prompt: "For an AND gate, which inputs give an output of 1?",
    options: ["Either one on", "Both off", "Both on", "Only the first on"],
    answer: "Both on",
    explanation: "For AND both conditions must be true.",
  },
  {
    prompt: "An OR gate turns its output on when...",
    options: ["Both inputs are off", "Only both inputs are on", "Neither input is used", "One or both inputs are on"],
    answer: "One or both inputs are on",
    explanation: "OR needs one or both inputs.",
  },
  {
    prompt: "Two switches are in series with a lamp. Which gate is this?",
    options: ["An OR gate", "An AND gate", "A NOT gate", "No gate"],
    answer: "An AND gate",
    explanation: "Both switches must be closed for the lamp to light.",
  },
  {
    prompt: "Two switches are in parallel with a lamp. Which gate is this?",
    options: ["An OR gate", "An AND gate", "A NOT gate", "No gate"],
    answer: "An OR gate",
    explanation: "Either switch closed lights the lamp.",
  },
  {
    prompt: "In the truth table of an AND gate, which input gives an output of 1?",
    options: ["Only the first switch closed", "Only the second switch closed", "Both switches closed", "Both switches open"],
    answer: "Both switches closed",
    explanation: "The only output of 1 is when both inputs are 1.",
  },
  {
    prompt: "How many rows has the truth table of a gate with two inputs?",
    options: ["Two", "Six", "Four", "Eight"],
    answer: "Four",
    explanation: "Two inputs have 2 × 2 = 4 combinations.",
  },
  {
    prompt: "Which logic suits a panic button system with a button in each of two rooms?",
    options: ["OR", "AND", "Neither", "Both at the same time"],
    answer: "OR",
    explanation: "The alarm must sound if any one button is pressed.",
  },
];

const ResistorsOhmLogic = () => (
  <CapsSubjectTopic
    title="Resistors, Ohm's Law and Logic Gates"
    subtitle="Circuit components, qualitative Ohm law, AND and OR gates and truth tables"
    learnSteps={learnSteps}
    task="gr8-resistors-ohm-logic-t4"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ResistorsOhmLogic;
