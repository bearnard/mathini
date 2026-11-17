import CapsSubjectTopic, { type CapsItem, type LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ParallelOverload, PlugDiagram } from '../../../../../components/diagrams/science/Ns9Pictures';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as e from '../../../../../components/diagrams/science/ns9Energy';

// CAPS Natural Sciences Grade 9 Term 3: safety with electricity: fuses, circuit breakers, earth leakage and earthing, the 3-pin plug (live, neutral, earth),
// overload from parallel connections, a plan for wiring a house, and energy theft. No wire colours or fuse ratings are taught (the CAPS gives none).
// Currents come from ns9Energy.ts (ns9Energy.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const c = (n: number) => String(n).replace('.', ',');

const lesson = { currents: [3, 4, 5], rating: 10 };
const check = { total: e.totalCurrent([1, 8, 0.5]), trips: e.overloaded([6, 5], 10) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Fuses, circuit breakers and earth leakage',
    content: slide(
      <>
        <Rule>Electricity can burn, shock and start fires, so circuits have safety devices. A fuse contains a thin wire that melts and breaks the circuit when the current is too big. A circuit breaker is a switch that trips when the current is too big and can be switched back on. An earth leakage system switches the supply off when current leaks to the ground.</Rule>
        <InfoTable
          cols={[{ title: 'Device', w: 30 }, { title: 'What it does', w: 70 }]}
          rows={[
            ['Fuse', 'Wire melts: circuit breaks when\nthe current is too big; replace it'],
            ['Circuit breaker', 'Trips when the current is too big;\nswitch it back on'],
            ['Earth leakage', 'Cuts the supply if current leaks\nto the ground'],
          ]}
          aria="A table of safety devices. A fuse has a wire that melts and breaks the circuit when the current is too big, and must be replaced. A circuit breaker trips when the current is too big and can be switched back on. An earth leakage system cuts the supply if current leaks to the ground."
        />
        <Worked
          title="Why a safety device is needed"
          steps={[
            <>Too much current heats the wires. Hot wires can melt their covering and start a fire.</>,
            <>The fuse or circuit breaker breaks the circuit <strong>before</strong> the wires get dangerously hot.</>,
            <>A house has a main switch and a fuse or circuit breaker to prevent overload.</>,
          ]}
        />
        <Mistake>Putting a thicker wire or a bigger fuse in place of a blown fuse. The fuse is the weak point on purpose, so a bigger one stops protecting the circuit.</Mistake>
      </>,
    ),
  },
  {
    title: 'The 3-pin plug and earthing',
    content: slide(
      <>
        <Rule>Many appliances have a 3-pin plug as a safety device. It has a live wire, a neutral wire and an earth wire. The earth wire is joined to the metal case of the appliance, such as a kettle, and through the wall plug to an earth cable in the ground.</Rule>
        <PlugDiagram />
        <Worked
          title="What the earth wire does"
          steps={[
            <>The live and neutral wires carry the current to the appliance and back.</>,
            <>If a fault makes the metal case charged, the earth cable has almost zero resistance, so the charge flows safely to the <strong>ground</strong>.</>,
            <>Without the earth wire, the next person to touch the kettle could receive a shock.</>,
          ]}
        />
        <Mistake>Thinking that the earth wire carries current when the appliance works normally. It only carries current when there is a fault.</Mistake>
      </>,
    ),
  },
  {
    title: 'Overload in parallel circuits',
    content: slide(
      <>
        <Rule>Appliances in a house are connected in parallel. In a parallel circuit the total current is the sum of the currents in the branches, so every extra appliance adds more current. If the total is more than the rating of the fuse or circuit breaker, the circuit is overloaded and the device trips.</Rule>
        <ParallelOverload currents={lesson.currents} ratingA={lesson.rating} />
        <Worked
          title="Adding up the branches"
          steps={[
            <>Three appliances draw {lesson.currents.map(c).join(' A, ')} A.</>,
            <>Total current = {lesson.currents.join(' + ')} = <strong>{e.totalCurrent(lesson.currents)} A</strong>.</>,
            <>The circuit breaker is rated {lesson.rating} A. {e.totalCurrent(lesson.currents)} A is more than {lesson.rating} A, so the breaker <strong>trips</strong> by {e.amountOver(lesson.currents, lesson.rating)} A.</>,
            <>To fix it, switch off one appliance or move it to another circuit.</>,
          ]}
        />
        <Mistake>Plugging many appliances into one multi-plug to avoid tripping. More appliances means more total current, which makes an overload more likely.</Mistake>
      </>,
    ),
  },
  {
    title: 'Wiring a house and energy theft',
    content: slide(
      <>
        <Rule>A plan for wiring a house gives each room its own light with a switch, and the house has a main switch and a fuse to prevent overload. Illegal connections to the Eskom supply are dangerous and are regarded as energy theft.</Rule>
        <InfoTable
          cols={[{ title: 'Part of the plan', w: 36 }, { title: 'Why', w: 64 }]}
          rows={[
            ['Light and switch in each room', 'Each light is on its own branch\nand can be switched on and off'],
            ['Main switch', 'Switches the whole house off'],
            ['Fuse or circuit breaker', 'Prevents overload of the wiring'],
          ]}
          aria="A table for the plan of wiring a house. A light and a switch in each room, so each light is on its own branch and can be switched on and off. A main switch, which switches the whole house off. A fuse or circuit breaker, which prevents overload of the wiring."
        />
        <Worked
          title="Why energy theft is dangerous"
          steps={[
            <>An illegal connection uses bare or poorly made wires without the safety devices of a proper connection.</>,
            <>Exposed wires can cause a fatal shock or a fire.</>,
            <>It is also theft: the person uses electricity that others pay for, and the extra load can overload the supply.</>,
          ]}
        />
        <Mistake>Believing that an illegal connection is safe if the lights work. The lights working does not mean the wiring is protected.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>A lamp (1 A), a kettle (8 A) and a radio (0,5 A) share a parallel circuit. Find the total current.</>,
            <>Two appliances draw 6 A and 5 A on a 10 A circuit breaker. Does it trip?</>,
            <>Name the three wires of a 3-pin plug.</>,
            <>What does the earth wire do when a kettle&apos;s metal case becomes charged?</>,
          ]}
          answers={[
            <>1 + 8 + 0,5 = <strong>{c(check.total)} A</strong>.</>,
            <>6 + 5 = 11 A, which is more than 10 A, so it <strong>{check.trips ? 'trips' : 'does not trip'}</strong>.</>,
            <><strong>Live, neutral and earth</strong>.</>,
            <>It carries the charge <strong>safely to the ground</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "What does a fuse do?", options: ["It breaks the circuit when the current is too big","It makes the current in the circuit bigger","It stores electrical energy in the circuit","It changes the voltage of the supply"], answer: "It breaks the circuit when the current is too big", explanation: "The wire in a fuse melts when the current is too big, which breaks the circuit." },
  { prompt: "How does a circuit breaker differ from a fuse?", options: ["It does not break the circuit","It can be switched back on after it trips","It has to be replaced each time it trips","It works with batteries, not the mains"], answer: "It can be switched back on after it trips", explanation: "A circuit breaker is a switch that trips and can be reset. A fuse has to be replaced when it blows." },
  { prompt: "Which three wires does a 3-pin plug have?", options: ["Live, positive and negative","Neutral, negative and earth","Live, neutral and earth","Live, resistor and earth"], answer: "Live, neutral and earth", explanation: "A 3-pin plug has a live wire, a neutral wire and an earth wire." },
  { prompt: "To what is the earth wire of a kettle connected?", options: ["The switch of the kettle","The live pin of the plug","The cell of the kettle","The metal case of the kettle"], answer: "The metal case of the kettle", explanation: "The earth wire is joined to the metal case and, through the plug, to an earth cable in the ground." },
  { prompt: "The earth cable in the ground has almost zero resistance. Why is this useful?", options: ["Fault charge flows safely to the ground","It makes the appliance work faster","It increases the voltage of the supply","It stops current flowing in the live wire"], answer: "Fault charge flows safely to the ground", explanation: "With almost no resistance, any charge on a faulty metal case flows to the ground instead of through a person." },
  { prompt: "A fault makes the metal case of a kettle charged. What does the earth wire do?", options: ["It switches the kettle on","It carries the charge safely to the ground","It stores the charge in the plug","It turns the charge into heat in the case"], answer: "It carries the charge safely to the ground", explanation: "The earth wire gives the charge a safe path to the ground." },
  { prompt: "Appliances drawing 4 A, 5 A and 6 A are on one parallel circuit protected by a 10 A circuit breaker. What happens?", options: ["The total of 6 A is less than 10 A, so it stays on","The total of 15 A is less than 10 A, so it stays on","The total of 15 A is more than 10 A, so it trips","The breaker trips only if one appliance draws 10 A"], answer: "The total of 15 A is more than 10 A, so it trips", explanation: "In parallel the currents add: 4 + 5 + 6 = 15 A, which is more than the 10 A rating." },
  { prompt: "Two appliances in parallel draw 3,5 A and 2,5 A. What is the total current?", options: ["1 A","8,75 A","3 A","6 A"], answer: "6 A", explanation: "In a parallel circuit the total current is the sum of the branch currents: 3,5 + 2,5 = 6 A." },
  { prompt: "Why does plugging many appliances into one parallel circuit cause overload?", options: ["The total current in the branches adds up","The voltage of the supply rises each time","The wires become thinner","The earth wire gets shorter"], answer: "The total current in the branches adds up", explanation: "Each extra appliance adds its current, so the total can pass the rating of the fuse or breaker." },
  { prompt: "A person connects illegally to the Eskom supply. What is this called?", options: ["Earthing","Energy theft","Fusing","Energy saving"], answer: "Energy theft", explanation: "An illegal connection to the mains supply is energy theft." },
  { prompt: "Why are illegal connections to the mains supply dangerous?", options: ["They make the electricity cheaper for everyone","They stop the current from flowing","Unprotected wires can cause a fatal shock or a fire","They add an extra earth wire to the street"], answer: "Unprotected wires can cause a fatal shock or a fire", explanation: "Bare or poorly made wires have none of the safety devices of a proper connection." },
  { prompt: "Which should every room have in a plan for wiring a house?", options: ["Its own main switch for the whole house","A power station of its own","A separate earth cable for each bulb","Its own light with a switch"], answer: "Its own light with a switch", explanation: "Each room has its own light and switch. The house has one main switch and a fuse." },
  { prompt: "What do the main switch and fuse of a house protect the wiring from?", options: ["Overload","Rust","Low voltage","Damp air"], answer: "Overload", explanation: "The fuse or circuit breaker prevents overload, and the main switch can switch the whole house off." },
  { prompt: "Two appliances drawing 3 A and 4 A are on a 10 A circuit breaker. Does the breaker trip?", options: ["Yes, because the total of 7 A is more than 10 A","No, because the total of 7 A is less than 10 A","Yes, because each appliance draws less than 10 A","No, because a breaker never trips in a house"], answer: "No, because the total of 7 A is less than 10 A", explanation: "The total of 3 + 4 = 7 A is within the 10 A rating, so the breaker does not trip." },
];

const ElectricitySafety = () => (
  <CapsSubjectTopic
    title="Safety with Electricity"
    subtitle="Fuses, circuit breakers, earthing, the 3-pin plug and overload"
    learnSteps={learnSteps}
    task="gr9-electricity-safety-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default ElectricitySafety;
