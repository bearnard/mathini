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
const bank: CapsItem[] = [];
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
