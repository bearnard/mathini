import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/em11/Em11';
import { EnergyProfile } from '../../../../../components/diagrams/chemistry12/Chem12Rates';
import { activationEnergy, deltaH, kind, reverseActivation, type Profile } from '../../../../../components/diagrams/em11/em11Helpers';

// Every number below comes from em11Helpers.ts (tested in em11Helpers.test.ts and g11PsT3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const sign = (n: number) => (n > 0 ? `+${n}` : String(n).replace('-', '−'));
export const EXO: Profile = { reactants: 50, peak: 90, products: 20 };
export const ENDO: Profile = { reactants: 20, peak: 80, products: 50 };

export const learnSteps: LearnStep[] = [
  {
    title: 'Energy changes in reactions',
    content: slide(
      <>
        <Rule>In a chemical reaction bonds in the reactants are broken and new bonds form in the products. Breaking bonds needs energy (endothermic). Forming bonds releases energy (exothermic). Whether the whole reaction is exothermic or endothermic depends on which is bigger.</Rule>
        <FactCards
          cards={[
            { title: 'Break bonds', line1: 'takes in energy:', line2: 'endothermic' },
            { title: 'Form bonds', line1: 'gives out energy:', line2: 'exothermic' },
            { title: 'Overall', line1: 'more released than taken in:', line2: 'exothermic reaction' },
          ]}
          aria="Energy and bonds. Breaking bonds takes in energy, which is endothermic. Forming bonds gives out energy, which is exothermic. If more energy is released by forming bonds than is taken in by breaking bonds, the reaction as a whole is exothermic."
        />
        <Worked
          title="Classify these reactions and give a reason"
          steps={[
            'Combustion of a fuel is exothermic: the bonds formed in CO₂ and H₂O release more energy than is needed to break the bonds in the fuel and oxygen.',
            'Respiration is exothermic: it releases energy from glucose that the body uses.',
            'Photosynthesis is endothermic: it takes in energy from sunlight to make glucose.',
          ]}
        />
        <Mistake>Saying that breaking bonds releases energy. Energy must be put in to break a bond. It is released when a bond forms.</Mistake>
      </>,
    ),
  },
  {
    title: 'Enthalpy and ΔH',
    content: slide(
      <>
        <Rule>Enthalpy (H) is the heat content of a substance. The heat of reaction ΔH = H(products) − H(reactants), in kJ·mol⁻¹. For an exothermic reaction ΔH is negative. For an endothermic reaction ΔH is positive.</Rule>
        <FactCards
          cards={[
            { title: 'ΔH < 0', line1: 'exothermic: products have', line2: 'less energy than reactants' },
            { title: 'ΔH > 0', line1: 'endothermic: products have', line2: 'more energy than reactants' },
            { title: 'ΔH = H(p) − H(r)', line1: 'products minus', line2: 'reactants' },
          ]}
          aria="The sign of delta H. If delta H is negative, the reaction is exothermic: the products have less energy than the reactants. If delta H is positive, the reaction is endothermic: the products have more energy than the reactants. Delta H is the enthalpy of the products minus the enthalpy of the reactants."
        />
        <Worked
          title="Find ΔH from the energies"
          steps={[
            `Reactants at ${EXO.reactants} kJ·mol⁻¹ and products at ${EXO.products} kJ·mol⁻¹: ΔH = ${EXO.products} − ${EXO.reactants} = ${sign(deltaH(EXO))} kJ·mol⁻¹, so the reaction is ${kind(EXO)}.`,
            `Reactants at ${ENDO.reactants} and products at ${ENDO.products}: ΔH = ${ENDO.products} − ${ENDO.reactants} = ${sign(deltaH(ENDO))} kJ·mol⁻¹, so the reaction is ${kind(ENDO)}.`,
          ]}
        />
        <Mistake>Calculating ΔH as reactants minus products. ΔH is always the products minus the reactants.</Mistake>
      </>,
    ),
  },
  {
    title: 'Activation energy and energy graphs',
    content: slide(
      <>
        <Rule>The activation energy is the minimum energy that colliding particles need in order to react. On an energy graph it is the rise from the reactants to the top of the peak, the activated complex. ΔH is the difference between the products and the reactants.</Rule>
        <EnergyProfile reactants={EXO.reactants} peak={EXO.peak} products={EXO.products} />
        <Worked
          title="Read the graph (energies in kJ·mol⁻¹)"
          steps={[
            `Activation energy = peak − reactants = ${EXO.peak} − ${EXO.reactants} = ${activationEnergy(EXO)} kJ·mol⁻¹.`,
            `ΔH = products − reactants = ${EXO.products} − ${EXO.reactants} = ${sign(deltaH(EXO))} kJ·mol⁻¹: exothermic.`,
            `For the reverse reaction the activation energy is peak − products = ${EXO.peak} − ${EXO.products} = ${reverseActivation(EXO)} kJ·mol⁻¹ and ΔH = ${sign(-deltaH(EXO))} kJ·mol⁻¹.`,
            `An endothermic reaction has reactants at ${ENDO.reactants}, a peak at ${ENDO.peak} and products at ${ENDO.products}: Ea = ${activationEnergy(ENDO)} and ΔH = ${sign(deltaH(ENDO))} kJ·mol⁻¹.`,
          ]}
        />
        <Mistake>Measuring the activation energy from the products. It is measured from the reactants up to the peak.</Mistake>
      </>,
    ),
  },
  {
    title: 'Exothermic and endothermic reactions in daily life',
    content: slide(
      <>
        <Rule>Exothermic reactions release heat to the surroundings, so the surroundings get warmer. Endothermic reactions take in heat, so the surroundings get colder.</Rule>
        <FactCards
          cards={[
            { title: 'Exothermic', line1: 'combustion, respiration,', line2: 'calcium chloride in water' },
            { title: 'Endothermic', line1: 'photosynthesis, ammonium', line2: 'nitrate in water' },
            { title: 'Uses', line1: 'hand warmers and cold packs', line2: 'for sports injuries' },
          ]}
          aria="Examples. Exothermic reactions include combustion, respiration and calcium chloride dissolving in water. Endothermic reactions include photosynthesis and ammonium nitrate dissolving in water. Uses include hand warmers, which are exothermic, and cold packs for sports injuries, which are endothermic."
        />
        <Worked
          title="A cold pack for a sports injury"
          steps={[
            'When ammonium nitrate dissolves in water it takes in heat from the surroundings.',
            'So the water gets colder: the process is endothermic and ΔH is positive.',
            'A hand warmer works the other way round: the reaction gives out heat, so ΔH is negative.',
          ]}
        />
        <Mistake>Thinking that an endothermic reaction cannot happen without a flame. Some endothermic processes, such as dissolving ammonium nitrate, take in heat from the water around them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the sign of ΔH for an exothermic reaction?</>,
          <>Reactants are at 50 kJ·mol⁻¹, the peak is at 90 kJ·mol⁻¹ and the products are at 20 kJ·mol⁻¹. Find ΔH.</>,
          <>What is the activation energy in that reaction?</>,
          <>Is photosynthesis exothermic or endothermic? Give a reason.</>,
        ]}
        answers={[
          <>Negative.</>,
          <>ΔH = 20 − 50 = {sign(deltaH(EXO))} kJ·mol⁻¹.</>,
          <>90 − 50 = {activationEnergy(EXO)} kJ·mol⁻¹.</>,
          <>Endothermic: it takes in energy from sunlight.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What happens to energy when bonds are broken?",
    options: ["Energy is released", "Energy is destroyed", "Energy is taken in", "Energy stays the same"],
    answer: "Energy is taken in",
    explanation: "Breaking a bond requires energy, so the process is endothermic.",
  },
  {
    prompt: "What happens to energy when new bonds form?",
    options: ["Energy is released", "Energy is taken in", "Energy is destroyed", "Energy is needed to hold the atoms apart"],
    answer: "Energy is released",
    explanation: "Forming a bond releases energy, so the process is exothermic.",
  },
  {
    prompt: "What does ΔH stand for?",
    options: ["The heat of reaction, reactants minus products", "The activation energy of the reaction", "The rate of the reaction", "The heat of reaction, products minus reactants"],
    answer: "The heat of reaction, products minus reactants",
    explanation: "ΔH = H(products) − H(reactants).",
  },
  {
    prompt: "What is the sign of ΔH for an endothermic reaction?",
    options: ["Negative", "Positive", "Zero", "It can be either sign"],
    answer: "Positive",
    explanation: "In an endothermic reaction the products have more energy than the reactants, so ΔH > 0.",
  },
  {
    prompt: "What is the sign of ΔH for an exothermic reaction?",
    options: ["Positive", "Negative", "Zero", "It can be either sign"],
    answer: "Negative",
    explanation: "In an exothermic reaction the products have less energy than the reactants, so ΔH < 0.",
  },
  {
    prompt: "A reaction goes from reactants at 50 kJ·mol⁻¹ down to products at 20 kJ·mol⁻¹. Calculate ΔH.",
    options: ["+30 kJ·mol⁻¹", "+70 kJ·mol⁻¹", "−70 kJ·mol⁻¹", "−30 kJ·mol⁻¹"],
    answer: "−30 kJ·mol⁻¹",
    explanation: "ΔH = 20 − 50 = −30 kJ·mol⁻¹, so the reaction is exothermic.",
  },
  {
    prompt: "The energy of the reactants is 20 kJ·mol⁻¹ and that of the products is 50 kJ·mol⁻¹. Which value is ΔH?",
    options: ["+30 kJ·mol⁻¹", "−30 kJ·mol⁻¹", "+70 kJ·mol⁻¹", "−70 kJ·mol⁻¹"],
    answer: "+30 kJ·mol⁻¹",
    explanation: "ΔH = 50 − 20 = +30 kJ·mol⁻¹, so the reaction is endothermic.",
  },
  {
    prompt: "On an energy graph the reactants are at 50 kJ·mol⁻¹ and the peak is at 90 kJ·mol⁻¹. What is the activation energy?",
    options: ["140 kJ·mol⁻¹", "90 kJ·mol⁻¹", "40 kJ·mol⁻¹", "20 kJ·mol⁻¹"],
    answer: "40 kJ·mol⁻¹",
    explanation: "Activation energy = peak − reactants = 90 − 50 = 40 kJ·mol⁻¹.",
  },
  {
    prompt: "On an energy graph the products are at 20 kJ·mol⁻¹ and the peak is at 90 kJ·mol⁻¹. What is the activation energy of the reverse reaction?",
    options: ["40 kJ·mol⁻¹", "110 kJ·mol⁻¹", "30 kJ·mol⁻¹", "70 kJ·mol⁻¹"],
    answer: "70 kJ·mol⁻¹",
    explanation: "For the reverse reaction the energy goes from the products to the peak: 90 − 20 = 70 kJ·mol⁻¹.",
  },
  {
    prompt: "What is the activation energy?",
    options: ["The energy released by the whole reaction", "The least energy colliding particles need to react", "The total energy that the products have", "The energy that a catalyst carries"],
    answer: "The least energy colliding particles need to react",
    explanation: "Particles must collide with at least the activation energy for a reaction to occur.",
  },
  {
    prompt: "Which of these processes is exothermic?",
    options: ["Combustion of a fuel", "Photosynthesis", "Dissolving ammonium nitrate in water", "Melting ice by heating"],
    answer: "Combustion of a fuel",
    explanation: "Burning a fuel releases heat, so it is exothermic.",
  },
  {
    prompt: "Why is photosynthesis an endothermic reaction?",
    options: ["It gives out heat to the leaves", "It releases energy from glucose", "It takes in energy from sunlight", "It needs no energy at all"],
    answer: "It takes in energy from sunlight",
    explanation: "Plants take in energy from sunlight to make glucose, so the energy of the products is higher.",
  },
  {
    prompt: "A cold pack gets cold when ammonium nitrate dissolves in water. What kind of process is this?",
    options: ["Exothermic, because it takes in heat", "Endothermic, because it gives out heat", "Endothermic, because it takes in heat", "Exothermic, because it gives out heat"],
    answer: "Endothermic, because it takes in heat",
    explanation: "The water gets colder because heat flows into the dissolving process: it is endothermic.",
  },
  {
    prompt: "In an exothermic reaction, which statement about the energy is correct?",
    options: ["The products have less energy than the reactants", "The products have more energy than the reactants", "The products and reactants have the same energy", "Energy is created in the reaction"],
    answer: "The products have less energy than the reactants",
    explanation: "Energy is released to the surroundings, so the products are lower in energy than the reactants.",
  },
];

const EnergyChemicalChange = () => (
  <CapsSubjectTopic
    title="Energy and Chemical Change"
    subtitle="Bond energy, enthalpy, ΔH, activation energy and energy graphs"
    learnSteps={learnSteps}
    task="gr11-energy-chemical-change-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default EnergyChemicalChange;
