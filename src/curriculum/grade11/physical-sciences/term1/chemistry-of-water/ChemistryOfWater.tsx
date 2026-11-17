import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { DensityBars, FactCards, HydrideBoiling, WaterHBond } from '../../../../../components/diagrams/ps11/Ps11';
import { HYDRIDES, ICE_DENSITY, WATER_ANGLE, WATER_BP, freezeExpansionPercent, volumeOf } from '../../../../../components/diagrams/ps11/ps11Helpers';

// Every number below comes from ps11Helpers.ts (tested in ps11Helpers.test.ts and g11PsT1.test.ts).
const dc = (n: number, d = 1) => (Math.round(n * 10 ** d) / 10 ** d).toFixed(d).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const iceVol = volumeOf(1000, ICE_DENSITY);
const grow = freezeExpansionPercent();

export const learnSteps: LearnStep[] = [
  {
    title: 'The water molecule',
    content: slide(
      <>
        <Rule>A water molecule is bent, with a bond angle of 104,5°. Oxygen is more electronegative than hydrogen, so each O–H bond is polar and the molecule as a whole is polar: the oxygen end is partially negative (δ−) and the hydrogen end is partially positive (δ+).</Rule>
        <WaterHBond />
        <Worked
          title="Why is water polar?"
          steps={[
            'EN of O is 3,5 and of H is 2,1, so ΔEN = 1,4 and each O–H bond is polar.',
            `The molecule is bent (${dc(WATER_ANGLE)}°), so the two bond dipoles do not cancel.`,
            'The result is a polar molecule with a δ− oxygen and two δ+ hydrogens.',
          ]}
        />
        <Mistake>Saying that water is linear like CO₂. Water has two lone pairs on the oxygen, so it is bent.</Mistake>
      </>,
    ),
  },
  {
    title: 'Hydrogen bonds',
    content: slide(
      <>
        <Rule>A hydrogen bond is the attraction between a hydrogen atom, bonded to a small, very electronegative atom (N, O or F), and a lone pair on a N, O or F atom of another molecule. In water each molecule can form up to four hydrogen bonds.</Rule>
        <FactCards
          cards={[
            { title: 'Two as donor', line1: 'the two δ+ H atoms bond', line2: 'to another O' },
            { title: 'Two as acceptor', line1: 'two lone pairs on O', line2: 'accept two more H' },
            { title: 'In total', line1: 'up to four hydrogen', line2: 'bonds each' },
          ]}
          aria="Hydrogen bonds in water. Each of the two partially positive hydrogen atoms can bond to the oxygen of another molecule. The two lone pairs on the oxygen can accept two more hydrogen atoms. In total each water molecule can form up to four hydrogen bonds."
        />
        <Worked
          title="Count the hydrogen bonds on one water molecule"
          steps={[
            'It has 2 hydrogen atoms, each of which can form 1 hydrogen bond.',
            'Its oxygen has 2 lone pairs, each of which can accept 1 hydrogen bond.',
            'So the maximum is 2 + 2 = 4 hydrogen bonds.',
          ]}
        />
        <Mistake>Calling a hydrogen bond a bond inside the molecule. A hydrogen bond is a force between molecules and is much weaker than the covalent O–H bond.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why water boils at a high temperature',
    content: slide(
      <>
        <Rule>The boiling points of the hydrides of group 16 go up from H₂S to H₂Te, but water is far above this trend. Strong hydrogen bonds between water molecules need a lot of energy to break, so water has an unusually high boiling point.</Rule>
        <HydrideBoiling />
        <Worked
          title="Read the graph"
          steps={HYDRIDES.map((h) => `${h.formula} boils at ${h.bp} °C.`).concat([`H₂O boils at ${WATER_BP} °C, much higher than the trend of the other hydrides.`, 'H₂S, H₂Se and H₂Te have only London forces and dipole-dipole forces, and no hydrogen bonds.'])}
        />
        <Mistake>Explaining the high boiling point of water by its small size or its mass. Water has the smallest mass of the four, so its high boiling point is due to hydrogen bonds.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ice floats: the density of water',
    content: slide(
      <>
        <Rule>Water is densest at 4 °C. Ice is less dense than liquid water because the hydrogen bonds hold the molecules in an open lattice, so ice floats. This is the anomalous behaviour of water.</Rule>
        <DensityBars />
        <Worked
          title="What happens when 1 000 g of water freezes?"
          steps={[
            `At 4 °C the density is 1,000 g·cm⁻³, so 1 000 g takes up 1 000 cm³.`,
            `Ice has a density of ${String(ICE_DENSITY).replace('.', ',')} g·cm⁻³, so 1 000 g takes up 1 000 / ${String(ICE_DENSITY).replace('.', ',')} = ${dc(iceVol, 0)} cm³.`,
            `The volume grows by about ${dc(grow, 0)}%, which is why water pipes can burst and why a lake freezes from the top.`,
          ]}
        />
        <Mistake>Thinking that most substances behave like water. For most substances the solid is denser than the liquid, so water is unusual.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the bond angle in water?</>,
          <>What is the maximum number of hydrogen bonds that one water molecule can form?</>,
          <>Why does water boil at a much higher temperature than H₂S?</>,
          <>At which temperature is liquid water the densest?</>,
        ]}
        answers={[
          <>{dc(WATER_ANGLE)}°.</>,
          <>4: two through its hydrogen atoms and two through the lone pairs on the oxygen.</>,
          <>Hydrogen bonds hold the water molecules together, and they need a lot of energy to break.</>,
          <>4 °C.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the shape of a water molecule?",
    options: ["Linear", "Trigonal planar", "Bent", "Tetrahedral"],
    answer: "Bent",
    explanation: "Oxygen has two bonding pairs and two lone pairs, which gives a bent shape.",
  },
  {
    prompt: "What is the bond angle in a molecule of water?",
    options: ["104,5°", "109,5°", "120°", "180°"],
    answer: "104,5°",
    explanation: "The two lone pairs push the O–H bonds together, so the angle is smaller than 109,5°.",
  },
  {
    prompt: "Why is a water molecule polar?",
    options: ["Its molecule is linear and symmetrical", "Its O–H bonds are non-polar bonds", "Oxygen and hydrogen have equal electronegativity values", "Its polar O–H bonds do not cancel because it is bent"],
    answer: "Its polar O–H bonds do not cancel because it is bent",
    explanation: "ΔEN of O–H is 1,4 and the molecule is bent, so the dipoles add up.",
  },
  {
    prompt: "What is a hydrogen bond?",
    options: ["A shared pair of electrons between two hydrogen atoms in a molecule", "A force between a δ+ hydrogen and a lone pair on N, O or F of another molecule", "A bond that holds the two hydrogen atoms inside a water molecule", "A bond that forms between two oxygen atoms in a molecule"],
    answer: "A force between a δ+ hydrogen and a lone pair on N, O or F of another molecule",
    explanation: "A hydrogen bond is a force between molecules. It is much weaker than a covalent bond.",
  },
  {
    prompt: "What is the maximum number of hydrogen bonds that one water molecule can form?",
    options: ["1", "4", "2", "6"],
    answer: "4",
    explanation: "Two through its two hydrogen atoms and two through the two lone pairs on the oxygen.",
  },
  {
    prompt: "Which of these hydrides has the highest boiling point?",
    options: ["H₂S", "H₂Se", "H₂Te", "H₂O"],
    answer: "H₂O",
    explanation: "Water boils at 100 °C, because of hydrogen bonds. H₂S, H₂Se and H₂Te boil at −60 °C, −41 °C and −2 °C.",
  },
  {
    prompt: "Why does water boil at a much higher temperature than H₂S?",
    options: ["Hydrogen bonds between its molecules take much energy to break", "Water has a larger molar mass than H₂S has", "Water has weaker intermolecular forces than H₂S has", "Water molecules are non-polar molecules, unlike H₂S"],
    answer: "Hydrogen bonds between its molecules take much energy to break",
    explanation: "Water has hydrogen bonds. H₂S has only weaker intermolecular forces.",
  },
  {
    prompt: "The boiling points of H₂S, H₂Se and H₂Te are −60 °C, −41 °C and −2 °C. Which of the three has the highest boiling point?",
    options: ["H₂S", "H₂Se", "H₂Te", "They are all the same"],
    answer: "H₂Te",
    explanation: "−2 °C is the highest of the three temperatures.",
  },
  {
    prompt: "At which temperature is liquid water the densest?",
    options: ["0 °C", "10 °C", "100 °C", "4 °C"],
    answer: "4 °C",
    explanation: "Water is densest at 4 °C. It becomes less dense on cooling further towards 0 °C.",
  },
  {
    prompt: "The density of ice is 0,917 g·cm⁻³ and of liquid water at 4 °C it is 1,000 g·cm⁻³. What does this show?",
    options: ["Ice is denser than water, so ice sinks", "Ice is less dense than water, so ice floats", "Ice and water have the same density", "Ice is heavier than water for the same volume"],
    answer: "Ice is less dense than water, so ice floats",
    explanation: "A lower density means that the same mass takes up more volume, so ice floats on water.",
  },
  {
    prompt: "The density of ice is 0,917 g·cm⁻³. What volume does 1 000 g of ice take up?",
    options: ["1 091 cm³", "917 cm³", "1 000 cm³", "1 109 cm³"],
    answer: "1 091 cm³",
    explanation: "V = m / ρ = 1 000 / 0,917 = 1 091 cm³.",
  },
  {
    prompt: "By about what percentage does the volume of 1 000 g of water at 4 °C increase when it freezes to ice of density 0,917 g·cm⁻³?",
    options: ["0,9%", "92%", "9%", "11%"],
    answer: "9%",
    explanation: "V(ice) = 1 000/0,917 = 1 091 cm³, which is 91 cm³ more than 1 000 cm³: about 9%.",
  },
  {
    prompt: "Why can a water pipe burst when the water in it freezes?",
    options: ["Water contracts when it freezes", "Ice is denser than water", "Water expands when it freezes", "The hydrogen bonds break when water freezes"],
    answer: "Water expands when it freezes",
    explanation: "Ice takes up about 9% more volume than the water, so it pushes on the pipe.",
  },
  {
    prompt: "Why does the water in a lake freeze from the top?",
    options: ["Ice is less dense than water, so it floats on top of the water", "Ice is denser than water, so it sinks", "Water is densest at 0 °C", "Water at the bottom is always warmer than water at the top"],
    answer: "Ice is less dense than water, so it floats on top of the water",
    explanation: "Ice floats and forms a layer on top, which keeps the water at about 4 °C below it.",
  },
];

const TheChemistryofWater = () => (
  <CapsSubjectTopic
    title="The Chemistry of Water"
    subtitle="The water molecule, hydrogen bonds, boiling point and the density of ice"
    learnSteps={learnSteps}
    task="gr11-chemistry-of-water-t1"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default TheChemistryofWater;
