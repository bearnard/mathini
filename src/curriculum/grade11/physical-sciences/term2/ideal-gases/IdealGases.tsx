import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards, GasPlot } from '../../../../../components/diagrams/gas11/Gas11';
import { R, boyleV2, charlesV2, combinedV2, gayLussacP2, molesOfGas, toKelvin, volumeOfGasDm3 } from '../../../../../components/diagrams/gas11/gas11Helpers';

// Every number below comes from gas11Helpers.ts (tested in gas11Helpers.test.ts and g11PsGases.test.ts).
const dc = (n: number, d = 2) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const boyleSet = [100, 200, 250, 400].map((p) => ({ x: p, y: boyleV2(100, 2, p), label: `${p} kPa, ${dc(boyleV2(100, 2, p))} dm³` }));
const charlesSet = [200, 300, 400].map((t) => ({ x: t, y: charlesV2(3, 300, t), label: `${t} K, ${dc(charlesV2(3, 300, t))} dm³` }));
const v2 = boyleV2(100, 2, 250);
const v3 = charlesV2(3.0, toKelvin(27), toKelvin(127));
const p3 = gayLussacP2(200, toKelvin(27), toKelvin(77));
const vc = combinedV2(100, 4, 300, 200, 400);
const n1 = molesOfGas(100, 2, 300);
const v4 = volumeOfGasDm3(0.5, 300, 200);

export const learnSteps: LearnStep[] = [
  {
    title: 'The kinetic theory of gases',
    content: slide(
      <>
        <Rule>The kinetic molecular theory says that gas particles are in constant random motion, collide with each other and with the walls, and move at different speeds. The temperature in kelvin is a measure of their average kinetic energy. An ideal gas has no forces between its particles and its particles have no volume.</Rule>
        <FactCards
          cards={[
            { title: 'Pressure', line1: 'caused by particles', line2: 'hitting the walls' },
            { title: 'Real gas', line1: 'is close to ideal at high', line2: 'temperature, low pressure' },
            { title: 'Not ideal', line1: 'at low T and high P: the', line2: 'forces and volume matter' },
          ]}
          aria="Key ideas of kinetic theory. Gas pressure is caused by particles hitting the walls. A real gas is close to an ideal gas at high temperature and low pressure. At low temperature and high pressure the forces between particles and their volume matter, so the gas is not ideal."
        />
        <Worked
          title="Why does heating a gas in a closed container raise the pressure?"
          steps={[
            'Heating makes the particles move faster on average.',
            'They hit the walls harder and more often.',
            'So the pressure goes up when the volume and amount of gas stay the same.',
          ]}
        />
        <Mistake>Thinking that every particle in a gas moves at the same speed. The particles have a range of speeds, and the temperature depends on the average.</Mistake>
      </>,
    ),
  },
  {
    title: "Boyle's law",
    content: slide(
      <>
        <Rule>At constant temperature the volume of a fixed amount of gas is inversely proportional to its pressure: V ∝ 1/P, so P₁V₁ = P₂V₂.</Rule>
        <GasPlot points={boyleSet} curve={Array.from({ length: 31 }, (_, i) => ({ x: 80 + i * 11, y: boyleV2(100, 2, 80 + i * 11) }))} xLabel="pressure P (kPa)" yLabel="V (dm³)" title="Volume against pressure" xMax={420} yMax={3} aria="A curve of volume against pressure for a fixed amount of gas at constant temperature. The volume falls as the pressure rises. The points are 2,00 dm³ at 100 kPa, 1,00 dm³ at 200 kPa, 0,80 dm³ at 250 kPa and 0,50 dm³ at 400 kPa. For every point P times V is 200." />
        <Worked
          title="2,0 dm³ of gas at 100 kPa is compressed to 250 kPa at constant temperature"
          steps={[
            'P₁V₁ = P₂V₂, so (100)(2,0) = (250)V₂.',
            `V₂ = 200 / 250 = ${dc(v2)} dm³.`,
            'Check: P × V is 200 for every point on the graph, so the volume is inversely proportional to the pressure.',
          ]}
        />
        <Mistake>Saying that the volume halves when the pressure is doubled only if the temperature rises. Boyle&apos;s law holds at constant temperature.</Mistake>
      </>,
    ),
  },
  {
    title: "Charles' law and Gay-Lussac's law",
    content: slide(
      <>
        <Rule>At constant pressure the volume of a fixed amount of gas is directly proportional to its temperature in kelvin: V₁/T₁ = V₂/T₂. At constant volume the pressure is directly proportional to the temperature in kelvin: P₁/T₁ = P₂/T₂. Always change °C to K: T = °C + 273.</Rule>
        <GasPlot points={charlesSet} curve={[{ x: 0, y: 0 }, { x: 450, y: 4.5 }]} xLabel="temperature T (K)" yLabel="V (dm³)" title="Volume against temperature" xMax={450} yMax={5} aria="A straight line graph of volume against temperature in kelvin, through the origin, for a fixed amount of gas at constant pressure. The points are 2,00 dm³ at 200 K, 3,00 dm³ at 300 K and 4,00 dm³ at 400 K. The volume divided by the temperature is the same for each point." />
        <Worked
          title="Heat 3,0 dm³ of gas from 27 °C to 127 °C at constant pressure"
          steps={[
            'T₁ = 27 + 273 = 300 K and T₂ = 127 + 273 = 400 K.',
            `V₂ = V₁T₂/T₁ = (3,0)(400) / 300 = ${dc(v3)} dm³.`,
            `Gay-Lussac: a gas at 200 kPa and 27 °C is heated to 77 °C (350 K) at constant volume: P₂ = (200)(350) / 300 = ${dc(p3, 1)} kPa.`,
          ]}
        />
        <Mistake>Using the Celsius temperature in the gas laws. Doubling 27 °C to 54 °C does not double the volume. Use kelvin.</Mistake>
      </>,
    ),
  },
  {
    title: 'The combined and ideal gas laws',
    content: slide(
      <>
        <Rule>The three laws combine into P₁V₁/T₁ = P₂V₂/T₂, and the ideal gas equation is PV = nRT, with R = 8,31 J·K⁻¹·mol⁻¹. Use P in Pa, V in m³ and T in K (1 kPa = 1 000 Pa and 1 dm³ = 10⁻³ m³).</Rule>
        <FactCards
          cards={[
            { title: 'Combined', line1: 'P₁V₁/T₁ = P₂V₂/T₂ for a', line2: 'fixed amount of gas' },
            { title: 'Ideal gas', line1: 'PV = nRT, with', line2: 'R = 8,31 J·K⁻¹·mol⁻¹' },
            { title: 'Units', line1: 'Pa, m³ and K in', line2: 'PV = nRT' },
          ]}
          aria="The combined gas law is P1 V1 over T1 equals P2 V2 over T2, for a fixed amount of gas. The ideal gas equation is PV equals nRT with R equal to 8,31 joules per kelvin per mole. Use pascals, cubic metres and kelvin."
        />
        <Worked
          title="Use the equations"
          steps={[
            `4,0 dm³ at 100 kPa and 300 K goes to 200 kPa and 400 K: V₂ = (100)(4,0)(400) / ((300)(200)) = ${dc(vc)} dm³.`,
            `How many moles are in 2,0 dm³ at 100 kPa and 300 K? n = PV/RT = (100 000)(2,0 × 10⁻³) / ((${dc(R)})(300)) = ${dc(n1, 4)} mol.`,
            `What volume do 0,50 mol occupy at 200 kPa and 300 K? V = nRT/P = (0,50)(${dc(R)})(300) / 200 000 = ${dc(v4 / 1000, 5)} m³ = ${dc(v4)} dm³.`,
          ]}
        />
        <Mistake>Putting kPa and dm³ straight into PV = nRT with R = 8,31. Convert to pascals and cubic metres first, or the answer is wrong by a factor of 1 000.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Convert 127 °C to kelvin.</>,
          <>A gas is compressed from 100 kPa to 400 kPa at constant temperature. The initial volume is 2,0 dm³. What is the final volume?</>,
          <>Under what conditions does a real gas behave most like an ideal gas?</>,
          <>How many moles of gas are in 5,0 dm³ at 200 kPa and 300 K? Use R = 8,31 J·K⁻¹·mol⁻¹.</>,
        ]}
        answers={[
          <>127 + 273 = 400 K.</>,
          <>V₂ = (100)(2,0)/400 = {dc(boyleV2(100, 2, 400))} dm³.</>,
          <>At high temperature and low pressure.</>,
          <>n = PV/RT = (200 000)(5,0 × 10⁻³) / ((8,31)(300)) = {dc(molesOfGas(200, 5, 300))} mol.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does the kinetic molecular theory say about the particles of a gas?",
    options: ["They stay in fixed positions inside the container", "They all move at exactly the same speed as each other", "They move randomly and collide with each other and the walls", "They attract each other very strongly at all times"],
    answer: "They move randomly and collide with each other and the walls",
    explanation: "Gas particles are in constant random motion at a range of speeds and collide with each other and the walls.",
  },
  {
    prompt: "When a gas in a closed rigid container is heated, why does its pressure increase?",
    options: ["The particles move faster and hit the walls harder and often", "The particles become heavier as they are heated", "The particles become much larger when they are heated", "The particles stop colliding with each other and the walls"],
    answer: "The particles move faster and hit the walls harder and often",
    explanation: "A higher temperature means a higher average speed, so the collisions with the walls are harder and more frequent.",
  },
  {
    prompt: "Under which conditions does a real gas behave most like an ideal gas?",
    options: ["Low temperature and high pressure", "Low temperature and low pressure", "High temperature and high pressure", "High temperature and low pressure"],
    answer: "High temperature and low pressure",
    explanation: "At high temperature and low pressure the forces between the particles and their volume matter least.",
  },
  {
    prompt: "What is the temperature 27 °C in kelvin?",
    options: ["246 K", "300 K", "27 K", "3 000 K"],
    answer: "300 K",
    explanation: "T = °C + 273 = 27 + 273 = 300 K.",
  },
  {
    prompt: "A fixed amount of gas at constant temperature has a volume of 2,0 dm³ at 100 kPa. What is the volume at 250 kPa?",
    options: ["5,00 dm³", "0,80 dm³", "2,00 dm³", "0,50 dm³"],
    answer: "0,80 dm³",
    explanation: "P₁V₁ = P₂V₂, so V₂ = (100)(2,0)/250 = 0,80 dm³.",
  },
  {
    prompt: "At constant temperature the pressure on a fixed amount of gas is doubled. What happens to the volume?",
    options: ["It is doubled", "It stays the same", "It is multiplied by four", "It is halved"],
    answer: "It is halved",
    explanation: "Volume is inversely proportional to pressure (Boyle's law), so doubling P halves V.",
  },
  {
    prompt: "A gas has a volume of 3,0 dm³ at 27 °C. At constant pressure it is heated to 127 °C. What is the new volume?",
    options: ["4,00 dm³", "14,11 dm³", "0,64 dm³", "3,00 dm³"],
    answer: "4,00 dm³",
    explanation: "V₂ = V₁T₂/T₁ = (3,0)(400)/300 = 4,00 dm³. The temperatures must be in kelvin.",
  },
  {
    prompt: "A fixed volume of gas at 200 kPa and 27 °C is heated to 77 °C. What is the new pressure?",
    options: ["570,4 kPa", "200,0 kPa", "233,3 kPa", "171,4 kPa"],
    answer: "233,3 kPa",
    explanation: "P₂ = P₁T₂/T₁ = (200)(350)/300 = 233,3 kPa.",
  },
  {
    prompt: "4,0 dm³ of gas at 100 kPa and 300 K is changed to 200 kPa and 400 K. What is the new volume?",
    options: ["10,67 dm³", "4,00 dm³", "2,00 dm³", "2,67 dm³"],
    answer: "2,67 dm³",
    explanation: "V₂ = P₁V₁T₂/(T₁P₂) = (100)(4,0)(400)/((300)(200)) = 2,67 dm³.",
  },
  {
    prompt: "What is the value of R in the ideal gas equation PV = nRT, when P is in Pa, V in m³ and T in K?",
    options: ["8,31 kJ·K⁻¹·mol⁻¹", "8,31 J·K⁻¹·mol⁻¹", "22,4 J·K⁻¹·mol⁻¹", "0,0831 J·K⁻¹·mol⁻¹"],
    answer: "8,31 J·K⁻¹·mol⁻¹",
    explanation: "R = 8,31 J·K⁻¹·mol⁻¹ is on the data sheet.",
  },
  {
    prompt: "How many moles of gas are in 2,0 dm³ at 100 kPa and 300 K? Use R = 8,31 J·K⁻¹·mol⁻¹.",
    options: ["0,0802 mol", "80,2 mol", "0,000080 mol", "12,46 mol"],
    answer: "0,0802 mol",
    explanation: "n = PV/RT = (100 000)(2,0 × 10⁻³)/((8,31)(300)) = 0,0802 mol.",
  },
  {
    prompt: "What volume do 0,50 mol of gas occupy at 200 kPa and 300 K? Use R = 8,31 J·K⁻¹·mol⁻¹.",
    options: ["6232 dm³", "0,00623 dm³", "6,23 dm³", "11,2 dm³"],
    answer: "6,23 dm³",
    explanation: "V = nRT/P = (0,50)(8,31)(300)/200 000 = 6,23 × 10⁻³ m³ = 6,23 dm³.",
  },
  {
    prompt: "What is the pressure of 0,25 mol of gas in a 5,0 dm³ container at 300 K? Use R = 8,31 J·K⁻¹·mol⁻¹.",
    options: ["124650 kPa", "0,125 kPa", "125 kPa", "62 kPa"],
    answer: "125 kPa",
    explanation: "P = nRT/V = (0,25)(8,31)(300)/(5,0 × 10⁻³) = 124 650 Pa, about 125 kPa.",
  },
  {
    prompt: "Which description fits an ideal gas?",
    options: ["Its particles have no forces between them and no volume", "Its particles attract each other strongly", "Its particles stop moving at room temperature", "Its particles have a large volume compared with the container"],
    answer: "Its particles have no forces between them and no volume",
    explanation: "An ideal gas is a model in which the particles have negligible volume and no intermolecular forces.",
  },
];

const IdealGases = () => (
  <CapsSubjectTopic
    title="Ideal Gases"
    subtitle="Kinetic theory, Boyle's, Charles' and Gay-Lussac's laws, and PV = nRT"
    learnSteps={learnSteps}
    task="gr11-ideal-gases-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default IdealGases;
