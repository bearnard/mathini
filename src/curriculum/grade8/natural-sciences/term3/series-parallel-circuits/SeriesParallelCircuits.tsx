import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { BulbLayout } from '../../../../../components/diagrams/ns8/Ns8b';
import { brightnessEach, othersStayLit, pathways, totalCurrentChange } from '../../../../../components/diagrams/ns8/ns8bHelpers';

// Every statement comes from ns8bHelpers.ts (tested in ns8bHelpers.test.ts and g8NsT3.test.ts). The effects of resistance are qualitative at Grade 8: bulb brightness, no V = IR.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Series circuits',
    content: slide(
      <>
        <Rule>A series circuit has only one pathway for the current. The current is the same everywhere in the circuit. Every time a resistor, such as a bulb, is added in series, the overall current in the circuit decreases, so the bulbs get dimmer.</Rule>
        <BulbLayout layout="series" bulbs={3} />
        <Worked
          title="Add bulbs in series"
          steps={[
            `One bulb in a circuit lights brightly. When a second bulb is added in series the current ${totalCurrentChange('series', 1, 2)}.`,
            `With three bulbs in series each bulb is ${brightnessEach('series', 3)}.`,
            `There is ${pathways('series', 3)} pathway, so if one bulb burns out the others go out (the others stay lit: ${othersStayLit('series') ? 'yes' : 'no'}).`,
          ]}
        />
        <Mistake>Thinking that adding bulbs in series makes the circuit brighter. The bulbs share the energy and each is dimmer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Parallel circuits',
    content: slide(
      <>
        <Rule>A parallel circuit has two or more pathways for the current. The overall current increases when more resistors are added in parallel, because each new pathway carries its own current. Bulbs in parallel stay as bright as a single bulb.</Rule>
        <BulbLayout layout="parallel" bulbs={3} />
        <Worked
          title="Add bulbs in parallel"
          steps={[
            `One bulb in a circuit lights. When two more are added in parallel the total current ${totalCurrentChange('parallel', 1, 3)}.`,
            `Each bulb is ${brightnessEach('parallel', 3)}.`,
            `There are ${pathways('parallel', 3)} pathways, so if one bulb burns out the others stay lit (${othersStayLit('parallel') ? 'yes' : 'no'}).`,
          ]}
        />
        <Mistake>Thinking that bulbs in parallel get dimmer as more are added. Each branch has its own pathway, so each bulb stays as bright.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing circuits and other output devices',
    content: slide(
      <>
        <Rule>We can compare the circuits by observing the brightness of bulbs. Different conductors, such as copper and nichrome wire, have different resistance: in a series circuit a nichrome wire makes the bulbs dimmer than a copper wire does, because all conductors have some resistance. Other output devices such as beepers, buzzers, LEDs and motors are also used in circuits.</Rule>
        <FactCards
          cards={[
            { title: 'Series', line1: '1 pathway; same current; more', line2: 'bulbs make each dimmer' },
            { title: 'Parallel', line1: 'several pathways; more bulbs', line2: 'increase the total current' },
            { title: 'Output devices', line1: 'bulb, beeper, buzzer, LED', line2: 'and motor use the energy' },
          ]}
          aria="Comparing circuits. Series: one pathway, the same current everywhere, and more bulbs make each one dimmer. Parallel: several pathways, and more bulbs increase the total current. Output devices such as a bulb, beeper, buzzer, LED and motor use the energy."
        />
        <Worked
          title="Choose the better circuit"
          steps={[
            'A string of old-style lights that all go out when one bulb fails is wired in series.',
            'House lights are wired in parallel so that one lamp can be switched off without the others.',
            'A resistor made of steel wool or nichrome wire in series makes a bulb dimmer.',
          ]}
        />
        <Mistake>Saying that copper has no resistance. All conductors have some resistance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How many pathways does a series circuit have?</>,
          <>Bulbs are added in series. What happens to the current?</>,
          <>Bulbs are added in parallel. What happens to the total current?</>,
          <>In a parallel circuit one bulb burns out. What happens to the others?</>,
        ]}
        answers={[
          <>One pathway.</>,
          <>It decreases.</>,
          <>It increases.</>,
          <>They stay lit.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How many pathways does a series circuit provide for the current?",
    options: ["Two", "As many as there are bulbs", "One", "None"],
    answer: "One",
    explanation: "A series circuit has only one pathway.",
  },
  {
    prompt: "What is true of the current in a series circuit?",
    options: ["It is the same everywhere in the circuit", "It divides between the bulbs", "It is biggest at the cell", "It is used up by the first bulb"],
    answer: "It is the same everywhere in the circuit",
    explanation: "In a series circuit the current is the same everywhere.",
  },
  {
    prompt: "More bulbs are added to a series circuit. What happens to the current?",
    options: ["It increases", "It stays the same", "It becomes zero", "It decreases"],
    answer: "It decreases",
    explanation: "Every resistor added in series decreases the overall current.",
  },
  {
    prompt: "More bulbs are added to a series circuit. What happens to the brightness of each bulb?",
    options: ["Each bulb gets brighter", "Each bulb gets dimmer", "Nothing changes", "Only the first bulb is dimmer"],
    answer: "Each bulb gets dimmer",
    explanation: "The current gets smaller, so the bulbs are dimmer.",
  },
  {
    prompt: "A bulb in a series circuit burns out. What do the other bulbs do?",
    options: ["They stay lit and unchanged", "They all go out", "They get much brighter", "Only the next one goes out"],
    answer: "They all go out",
    explanation: "The only pathway is broken.",
  },
  {
    prompt: "How many pathways does a parallel circuit provide for the current?",
    options: ["Only one", "None", "It depends on the cell only", "Two or more"],
    answer: "Two or more",
    explanation: "A parallel circuit has several pathways.",
  },
  {
    prompt: "More bulbs are added to a parallel circuit. What happens to the overall current?",
    options: ["It increases", "It decreases", "It stays the same", "It becomes zero"],
    answer: "It increases",
    explanation: "Each extra pathway carries current, so the total goes up.",
  },
  {
    prompt: "Three bulbs are connected in parallel. How bright is each bulb compared with a single bulb?",
    options: ["Dimmer than a single bulb", "Brighter than a single bulb", "As bright as a single bulb", "They are all off"],
    answer: "As bright as a single bulb",
    explanation: "Each bulb has its own pathway.",
  },
  {
    prompt: "In a parallel circuit one bulb fails. How do the remaining bulbs behave?",
    options: ["They all go out together", "They get dimmer at once", "They all explode", "They stay lit"],
    answer: "They stay lit",
    explanation: "The other pathways are still complete.",
  },
  {
    prompt: "Why are house lights wired in parallel?",
    options: ["It uses less energy", "One lamp can be off while the others stay on", "The current is the same everywhere", "They would be dimmer in series"],
    answer: "One lamp can be off while the others stay on",
    explanation: "Each lamp has its own pathway.",
  },
  {
    prompt: "In which circuit does adding more bulbs make each bulb dimmer?",
    options: ["A series circuit", "A parallel circuit", "Both circuits", "Neither circuit"],
    answer: "A series circuit",
    explanation: "In series the overall current decreases as bulbs are added.",
  },
  {
    prompt: "A nichrome wire and a copper wire are put into a series circuit in turn. What is seen?",
    options: ["The bulb is dimmer with the copper wire", "The bulb is the same brightness", "The bulb is dimmer with the nichrome wire", "The bulb does not light with either"],
    answer: "The bulb is dimmer with the nichrome wire",
    explanation: "All conductors have some resistance and nichrome has more.",
  },
  {
    prompt: "Which of these is an output device in a circuit?",
    options: ["A switch", "A cell", "A buzzer", "A connecting wire"],
    answer: "A buzzer",
    explanation: "Buzzers, beepers, LEDs, motors and bulbs are output devices.",
  },
  {
    prompt: "How can learners show the effect of resistance in a circuit at this level?",
    options: ["By observing the brightness of a bulb", "By calculating with a formula", "By weighing the wires", "By measuring the temperature of the cell"],
    answer: "By observing the brightness of a bulb",
    explanation: "The effects of resistance are treated qualitatively, using bulb brightness.",
  },
];

const SeriesParallelCircuits = () => (
  <CapsSubjectTopic
    title="Series and Parallel Circuits"
    subtitle="Pathways, current and bulb brightness in series and parallel circuits"
    learnSteps={learnSteps}
    task="gr8-series-parallel-circuits-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default SeriesParallelCircuits;
