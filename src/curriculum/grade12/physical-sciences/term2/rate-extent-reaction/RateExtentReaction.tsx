import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ConcTimeGraph, EnergyProfile } from '../../../../../components/diagrams/chemistry12/Chem12Rates';
import { rate } from '../../../../../components/diagrams/chemistry12/rateHelpers';

// The numbers below come from rateHelpers.ts (tested in rateHelpers.test.ts, g12PsRates.test.ts).
const sub = (n: number | string) => <sub className="text-[0.75em]">{n}</sub>;
const f = (v: number) => String(v).replace('.', ',');
const r1 = rate(0.8 - 0.2, 30);
const dH = 30 - 50;
const ea = 90 - 50;
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'How fast? The rate of a reaction',
    content: slide(
      <>
        <Rule>The rate of a reaction is the change in concentration of a reactant or product divided by the time taken: rate = Δc ÷ Δt, in mol·dm⁻³·s⁻¹. It can also be measured as the mass or volume of a product made per second.</Rule>
        <ConcTimeGraph mode="rate" c0={1} />
        <Worked
          steps={[
            <>A reactant falls from 0,80 to 0,20 mol·dm⁻³ in 30 s.</>,
            <>Change in concentration: 0,80 − 0,20 = 0,60 mol·dm⁻³.</>,
            <>Rate = 0,60 ÷ 30 = <strong>{f(r1)} mol·dm⁻³·s⁻¹</strong>.</>,
            <>The curve is steepest at the start: the rate is greatest when the concentration is highest, and it slows as the reactant is used up.</>,
          ]}
        />
        <Mistake>Dividing the final concentration by the time. The rate uses the change in concentration: 0,60, not 0,20.</Mistake>
      </>,
    ),
  },
  {
    title: 'Collision theory and the factors',
    content: slide(
      <>
        <Rule>Particles react only when they collide with enough energy (at least the activation energy, Ea) and in the right orientation. More effective collisions per second means a faster reaction.</Rule>
        <EnergyProfile reactants={50} peak={90} products={30} />
        <Worked
          steps={[
            <><strong>Concentration or pressure</strong> up: more particles in the same volume, so more collisions per second.</>,
            <><strong>Surface area</strong> up (a powder instead of lumps): more particles exposed to collide.</>,
            <><strong>Temperature</strong> up: particles move faster and a greater fraction have energy of at least Ea, so more collisions are effective.</>,
            <>In the profile the activation energy is the rise from the reactants (50) to the peak (90): Ea = {ea} kJ·mol⁻¹.</>,
          ]}
        />
        <Mistake>Saying a higher temperature only makes collisions more frequent. The main reason is that a larger fraction of the particles has enough energy to react.</Mistake>
      </>,
    ),
  },
  {
    title: 'Catalysts and energy profiles',
    content: slide(
      <>
        <Rule>A catalyst speeds up a reaction by providing a path with a lower activation energy. It is not used up, and it does not change ΔH or the final amounts.</Rule>
        <EnergyProfile reactants={50} peak={90} products={30} catalystPeak={70} />
        <Worked
          steps={[
            <>ΔH = energy of the products − energy of the reactants = 30 − 50 = <strong>{dH} kJ·mol⁻¹</strong>. It is negative, so the reaction is exothermic.</>,
            <>With the catalyst the peak is lower (70): Ea falls from 40 to 20 kJ·mol⁻¹, so more particles have enough energy.</>,
            <>The reactants and products stay at the same levels, so ΔH is still {dH} kJ·mol⁻¹.</>,
          ]}
        />
        <Mistake>Thinking a catalyst makes more product. It only gets to the same result faster: it does not change ΔH or the yield at equilibrium.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A product's concentration rises from 0 to 0,45 mol·dm⁻³ in 90 s. What is the average rate?</>,
          <>Give two ways to increase the rate of a reaction between a solid and a liquid.</>,
          <>A reaction has reactants at 20 kJ·mol⁻¹, products at 65 kJ·mol⁻¹ and a peak at 95 kJ·mol⁻¹. Find ΔH and Ea.</>,
        ]}
        answers={[
          <>0,45 ÷ 90 = <strong>{f(rate(0.45, 90))} mol·dm⁻³·s⁻¹</strong>.</>,
          <>Crush the solid into a powder (greater surface area), or raise the temperature, or add a catalyst, or use a more concentrated liquid.</>,
          <>ΔH = 65 − 20 = <strong>+45 kJ·mol⁻¹</strong> (endothermic). Ea = 95 − 20 = <strong>75 kJ·mol⁻¹</strong>.</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: CapsItem[] = [
  {
    prompt: "A reactant's concentration falls from 0,80 to 0,20 mol·dm⁻³ in 30 s. What is the average rate of reaction?",
    options: ["0,60 mol·dm⁻³·s⁻¹", "0,020 mol·dm⁻³·s⁻¹", "0,0067 mol·dm⁻³·s⁻¹", "0,033 mol·dm⁻³·s⁻¹"],
    answer: "0,020 mol·dm⁻³·s⁻¹",
    explanation: "Rate = Δc ÷ Δt = (0,80 − 0,20) ÷ 30 = 0,020 mol·dm⁻³·s⁻¹.",
  },
  {
    prompt: "Which are the SI-style units of the rate of a reaction measured by concentration?",
    options: ["mol·dm⁻³·s⁻¹", "mol·dm⁻³", "dm³·mol⁻¹", "s·mol⁻¹"],
    answer: "mol·dm⁻³·s⁻¹",
    explanation: "Rate = change in concentration (mol·dm⁻³) per unit of time (s).",
  },
  {
    prompt: "According to collision theory, which two conditions must be met for a collision to be effective?",
    options: ["The particles must be at the same temperature and the same size", "The particles must be gases and collide at a high speed", "The particles must be charged and have equal masses", "The particles must have enough energy and the correct orientation"],
    answer: "The particles must have enough energy and the correct orientation",
    explanation: "A collision leads to a reaction only if the particles have at least the activation energy and collide in an orientation that lets bonds break and form.",
  },
  {
    prompt: "Why does a higher temperature increase the rate of a reaction?",
    options: ["The activation energy of the reaction becomes smaller", "The concentration of the reactants in the solution increases", "A larger fraction of the particles has energy of at least the activation energy", "The particles become larger and so collide more often"],
    answer: "A larger fraction of the particles has energy of at least the activation energy",
    explanation: "Heating gives more particles the minimum energy needed, and collisions are also more frequent. The activation energy itself does not change.",
  },
  {
    prompt: "Which change increases the rate of a reaction by increasing the frequency of collisions but NOT the fraction of particles with enough energy?",
    options: ["Raising the temperature", "Increasing the concentration of a reactant", "Adding a catalyst", "Using a different solvent at the same temperature"],
    answer: "Increasing the concentration of a reactant",
    explanation: "A higher concentration puts more particles in the same volume. Temperature and catalysts change how many collisions are effective.",
  },
  {
    prompt: "Why does powdered zinc react faster with acid than a lump of zinc of the same mass?",
    options: ["The powder has a larger surface area, so more particles can collide", "The powder has a lower activation energy than the lump", "The powder is automatically at a higher temperature", "The powder has a higher concentration of zinc atoms inside"],
    answer: "The powder has a larger surface area, so more particles can collide",
    explanation: "Only the particles at the surface are exposed to the acid, and a powder has a much larger surface area.",
  },
  {
    prompt: "What does a catalyst do to a reaction?",
    options: ["It increases the energy of the products", "It raises the temperature of the system", "It makes the reaction release more heat", "It provides a path with a lower activation energy"],
    answer: "It provides a path with a lower activation energy",
    explanation: "A catalyst lowers Ea. It takes part and is regenerated, and ΔH stays the same.",
  },
  {
    prompt: "A catalyst is added to an exothermic reaction. What happens to ΔH?",
    options: ["It becomes more negative", "It becomes zero", "It stays the same", "It becomes positive"],
    answer: "It stays the same",
    explanation: "ΔH depends only on the energy of the reactants and products, which a catalyst does not change.",
  },
  {
    prompt: "Reactants have an energy of 50 kJ·mol⁻¹ and products 30 kJ·mol⁻¹. What is ΔH?",
    options: ["+20 kJ·mol⁻¹", "−20 kJ·mol⁻¹", "−80 kJ·mol⁻¹", "+80 kJ·mol⁻¹"],
    answer: "−20 kJ·mol⁻¹",
    explanation: "ΔH = energy of products − energy of reactants = 30 − 50 = −20 kJ·mol⁻¹: exothermic.",
  },
  {
    prompt: "On an energy profile the reactants are at 50 kJ·mol⁻¹ and the peak is at 90 kJ·mol⁻¹. What is the activation energy?",
    options: ["40 kJ·mol⁻¹", "90 kJ·mol⁻¹", "140 kJ·mol⁻¹", "20 kJ·mol⁻¹"],
    answer: "40 kJ·mol⁻¹",
    explanation: "Ea is the rise from the reactants to the top of the peak: 90 − 50 = 40 kJ·mol⁻¹.",
  },
  {
    prompt: "Products are at a higher energy than the reactants. What type of reaction is this?",
    options: ["Exothermic", "A catalysed reaction", "A reaction with no activation energy", "Endothermic"],
    answer: "Endothermic",
    explanation: "When the products have more energy than the reactants, energy is absorbed: ΔH is positive.",
  },
  {
    prompt: "On a graph of concentration of a reactant against time, where is the rate of reaction the greatest?",
    options: ["At the end, where the curve is flat", "In the middle, where the curve is straight", "At the start, where the curve is steepest", "At every point, because the rate is constant"],
    answer: "At the start, where the curve is steepest",
    explanation: "The gradient of the curve is the rate. It is steepest at the start and flattens as the reactant is used up.",
  },
  {
    prompt: "A product's concentration rises from 0 to 0,45 mol·dm⁻³ in 90 s. What is the average rate of formation?",
    options: ["0,45 mol·dm⁻³·s⁻¹", "0,0050 mol·dm⁻³·s⁻¹", "0,0020 mol·dm⁻³·s⁻¹", "40,5 mol·dm⁻³·s⁻¹"],
    answer: "0,0050 mol·dm⁻³·s⁻¹",
    explanation: "Rate = 0,45 ÷ 90 = 0,0050 mol·dm⁻³·s⁻¹.",
  },
  {
    prompt: "Which change will NOT increase the rate of a reaction between a solid and a solution?",
    options: ["Using the solid in bigger lumps", "Crushing the solid", "Heating the solution", "Using a more concentrated solution"],
    answer: "Using the solid in bigger lumps",
    explanation: "Bigger lumps have a smaller surface area for the same mass, which lowers the rate.",
  },
];
// BANK:END

const RateExtentReaction = () => (
  <CapsSubjectTopic
    title="Rate and Extent of Reaction"
    subtitle="Collision theory, the factors that change the rate, catalysts and energy profiles"
    learnSteps={learnSteps}
    task="gr12-rate-extent-reaction-t2"
    bank={bank}
    apiPath="/api/caps/ps"
    grade={12}
  />
);

export default RateExtentReaction;
