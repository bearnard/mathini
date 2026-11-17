import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { EQUATIONS, PRECIPITATE_COLOUR, REDOX, balanced, electronsTransferred, soluble } from '../../../../../components/diagrams/aq10/aq10Helpers';

// Every equation and rule below comes from aq10Helpers.ts (tested in aq10Helpers.test.ts and g10PsT3.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const pretty = (s: string) => s.replace(/([A-Za-z\]\)])(\d)/g, (_, a, d) => a + '₀₁₂₃₄₅₆₇₈₉'[Number(d)]);
const ok = (eq: string) => (balanced(eq) ? 'balanced' : 'NOT balanced');
const yn = (b: boolean) => (b ? 'soluble' : 'insoluble');

export const learnSteps: LearnStep[] = [
  {
    title: 'Precipitation reactions',
    content: slide(
      <>
        <Rule>When two solutions are mixed, the positive ions can swap partners. This is an ion-exchange reaction. If one of the new compounds is insoluble, it forms a solid called a precipitate. The driving force is the formation of an insoluble salt.</Rule>
        <FactCards
          cards={[
            { title: 'Always soluble', line1: 'all nitrates, and all salts of', line2: 'sodium, potassium, ammonium' },
            { title: 'Chlorides, bromides, iodides', line1: 'soluble, except those of', line2: 'silver and lead' },
            { title: 'Sulfates', line1: 'soluble, except those of', line2: 'barium and lead' },
            { title: 'Carbonates, hydroxides', line1: 'insoluble, except those of', line2: 'sodium, potassium, ammonium' },
          ]}
          aria="Simple solubility rules. All nitrates and all salts of sodium, potassium and ammonium are soluble. Chlorides, bromides and iodides are soluble except those of silver and lead. Sulfates are soluble except those of barium and lead. Carbonates and hydroxides are insoluble except those of sodium, potassium and ammonium."
        />
        <Worked
          title="Mix silver nitrate and sodium chloride solutions"
          steps={[
            `${pretty(EQUATIONS.agcl)} is ${ok(EQUATIONS.agcl)}, with state symbols AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq).`,
            `AgCl is ${yn(soluble('Ag', 'Cl'))} and NaNO₃ is ${yn(soluble('Na', 'NO3'))}, so a white precipitate of AgCl forms.`,
            'The ionic equation leaves out the ions that do not change (Na⁺ and NO₃⁻): Ag⁺(aq) + Cl⁻(aq) → AgCl(s).',
          ]}
        />
        <Mistake>Writing the precipitate as (aq). A precipitate is a solid, so it is written (s).</Mistake>
      </>,
    ),
  },
  {
    title: 'Tests for anions',
    content: slide(
      <>
        <Rule>We can test for an anion by adding a solution that makes a precipitate with it. Silver nitrate with nitric acid tests for chloride, bromide and iodide. Barium nitrate tests for sulfate and carbonate.</Rule>
        <FactCards
          cards={[
            { title: 'Chloride Cl⁻', line1: 'AgNO₃ gives a', line2: `${PRECIPITATE_COLOUR.AgCl} precipitate` },
            { title: 'Bromide Br⁻', line1: 'AgNO₃ gives a', line2: `${PRECIPITATE_COLOUR.AgBr} precipitate` },
            { title: 'Iodide I⁻', line1: 'AgNO₃ gives a', line2: `${PRECIPITATE_COLOUR.AgI} precipitate` },
            { title: 'Sulfate SO₄²⁻', line1: 'Ba(NO₃)₂: white precipitate that', line2: 'does not dissolve in acid' },
            { title: 'Carbonate CO₃²⁻', line1: 'Ba(NO₃)₂: white precipitate that', line2: 'dissolves in acid with bubbles' },
          ]}
          aria="Tests for anions. Chloride with silver nitrate gives a white precipitate. Bromide gives a cream precipitate. Iodide gives a yellow precipitate. Sulfate with barium nitrate gives a white precipitate that does not dissolve in nitric acid. Carbonate with barium nitrate gives a white precipitate that dissolves in nitric acid with bubbles of carbon dioxide."
        />
        <Worked
          title="Identify the anion"
          steps={[
            'A solution gives a yellow precipitate with silver nitrate and nitric acid: the anion is iodide.',
            `A solution gives a white precipitate with barium nitrate that stays when nitric acid is added: the anion is sulfate (${pretty(EQUATIONS.baso4)} is ${ok(EQUATIONS.baso4)}).`,
            'If the white precipitate dissolves with bubbles in the acid, the anion is carbonate.',
          ]}
        />
        <Mistake>Adding nitric acid and then forgetting to look at whether the precipitate dissolves. The acid is what separates a carbonate from a sulfate.</Mistake>
      </>,
    ),
  },
  {
    title: 'Four types of reaction in solution',
    content: slide(
      <>
        <Rule>Many reactions in aqueous solution fall into four types, each with a driving force: precipitation (an insoluble salt forms), gas formation (a gas is given off), acid-base (protons are transferred) and redox (electrons are transferred).</Rule>
        <FactCards
          cards={[
            { title: 'Precipitation', line1: 'insoluble salt: BaCl₂ + Na₂SO₄', line2: '→ BaSO₄ + 2NaCl' },
            { title: 'Gas formation', line1: 'gas given off: Na₂CO₃ + 2HCl', line2: '→ 2NaCl + H₂O + CO₂' },
            { title: 'Acid-base', line1: 'protons move: HCl + NaOH', line2: '→ NaCl + H₂O' },
            { title: 'Redox', line1: 'electrons move: Zn + CuSO₄', line2: '→ ZnSO₄ + Cu' },
          ]}
          aria="Four reaction types in solution. Precipitation, where an insoluble salt forms: barium chloride plus sodium sulfate gives barium sulfate and sodium chloride. Gas formation, where a gas is given off: sodium carbonate plus hydrochloric acid gives sodium chloride, water and carbon dioxide. Acid-base, where protons move: hydrochloric acid plus sodium hydroxide gives sodium chloride and water. Redox, where electrons move: zinc plus copper sulfate gives zinc sulfate and copper."
        />
        <Worked
          title="Check that the equations balance"
          steps={[
            `${pretty(EQUATIONS.baso4)}: ${ok(EQUATIONS.baso4)}.`,
            `${pretty(EQUATIONS.gas)}: ${ok(EQUATIONS.gas)}. The bubbles are carbon dioxide.`,
            `${pretty(EQUATIONS.acidBase)}: ${ok(EQUATIONS.acidBase)}.`,
            `${pretty(EQUATIONS.redox)}: ${ok(EQUATIONS.redox)}.`,
          ]}
        />
        <Mistake>Mixing up the reaction types. Look for the evidence: a solid forming, bubbles, a colour change of an indicator, or a metal being deposited.</Mistake>
      </>,
    ),
  },
  {
    title: 'Redox: following the charge',
    content: slide(
      <>
        <Rule>In a redox reaction electrons are transferred. We can see it from the charges: an atom that loses electrons becomes more positive, and an atom or ion that gains electrons becomes less positive.</Rule>
        <FactCards
          cards={[
            { title: 'Zn → Zn²⁺', line1: `charge ${REDOX.zincBefore} to +${REDOX.zincAfter}: it`, line2: 'loses 2 electrons' },
            { title: 'Cu²⁺ → Cu', line1: `charge +${REDOX.copperBefore} to ${REDOX.copperAfter}: it`, line2: 'gains 2 electrons' },
            { title: 'Balance', line1: 'the electrons lost equal', line2: 'the electrons gained' },
          ]}
          aria="Redox by charge. Zinc goes from a charge of 0 to plus 2 and loses 2 electrons. The copper ion goes from plus 2 to 0 and gains 2 electrons. The electrons lost equal the electrons gained."
        />
        <Worked
          title="Zinc is put in copper sulfate solution"
          steps={[
            `Zn → Zn²⁺: ${electronsTransferred(REDOX.zincBefore, REDOX.zincAfter)} electrons are lost by each zinc atom.`,
            `Cu²⁺ → Cu: ${electronsTransferred(REDOX.copperBefore, REDOX.copperAfter)} electrons are gained by each copper ion.`,
            'A reddish-brown coating of copper forms on the zinc and the blue colour of the solution fades.',
          ]}
        />
        <Mistake>Saying that the zinc gains electrons because its charge goes up. A rise in charge means that electrons are lost.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Is silver chloride soluble or insoluble?</>,
          <>A white precipitate forms with silver nitrate. What anion is probably present?</>,
          <>What is the driving force in a gas-forming reaction?</>,
          <>How many electrons does a Zn atom lose to become Zn²⁺?</>,
        ]}
        answers={[
          <>Insoluble, so it forms a precipitate.</>,
          <>Chloride.</>,
          <>The formation of a gas.</>,
          <>{electronsTransferred(REDOX.zincBefore, REDOX.zincAfter)}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a precipitate?",
    options: ["A gas that forms when a solid dissolves", "A solution that has been filtered", "An insoluble solid that forms when solutions are mixed", "A liquid that floats on water"],
    answer: "An insoluble solid that forms when solutions are mixed",
    explanation: "A precipitate is a solid that forms from ions in solution, because the new compound is insoluble.",
  },
  {
    prompt: "In an equation, how is a precipitate shown?",
    options: ["With (s)", "With (aq)", "With (g)", "With (l)"],
    answer: "With (s)",
    explanation: "A precipitate is a solid, so it is written (s) in the equation.",
  },
  {
    prompt: "Which of these salts is insoluble in water?",
    options: ["Sodium chloride", "Potassium nitrate", "Ammonium chloride", "Silver chloride"],
    answer: "Silver chloride",
    explanation: "Chlorides are soluble except those of silver and lead.",
  },
  {
    prompt: "Which of these salts is soluble in water?",
    options: ["Barium sulfate", "Sodium nitrate", "Silver chloride", "Copper carbonate"],
    answer: "Sodium nitrate",
    explanation: "All nitrates are soluble, so sodium nitrate stays dissolved.",
  },
  {
    prompt: "Barium sulfate is formed when barium chloride and sodium sulfate solutions are mixed. Which statement is correct?",
    options: ["Barium sulfate is soluble, so no change is seen", "Barium sulfate is insoluble, so it forms a precipitate", "Barium sulfate is a gas", "Sodium chloride is the precipitate"],
    answer: "Barium sulfate is insoluble, so it forms a precipitate",
    explanation: "Sulfates are soluble except those of barium and lead, so BaSO₄ precipitates. NaCl stays dissolved.",
  },
  {
    prompt: "What precipitate forms when silver nitrate solution is added to a chloride solution?",
    options: ["A yellow precipitate", "A cream precipitate", "No precipitate", "A white precipitate"],
    answer: "A white precipitate",
    explanation: "AgCl is white. AgBr is cream and AgI is yellow.",
  },
  {
    prompt: "A yellow precipitate forms when silver nitrate and nitric acid are added to a solution. Which anion is present?",
    options: ["Iodide", "Chloride", "Bromide", "Sulfate"],
    answer: "Iodide",
    explanation: "Silver iodide, AgI, is a yellow solid, so the yellow precipitate shows iodide.",
  },
  {
    prompt: "A white precipitate forms with barium nitrate and does not dissolve when nitric acid is added. Which anion is present?",
    options: ["Carbonate", "Chloride", "Sulfate", "Iodide"],
    answer: "Sulfate",
    explanation: "BaSO₄ does not dissolve in acid. A carbonate precipitate dissolves with bubbles.",
  },
  {
    prompt: "A white precipitate forms with barium nitrate and dissolves with bubbles when nitric acid is added. Which anion is present?",
    options: ["Sulfate", "Bromide", "Nitrate", "Carbonate"],
    answer: "Carbonate",
    explanation: "BaCO₃ dissolves in acid and gives off carbon dioxide.",
  },
  {
    prompt: "What is the driving force of a precipitation reaction?",
    options: ["The formation of a gas", "The formation of an insoluble salt", "The transfer of protons", "The transfer of electrons"],
    answer: "The formation of an insoluble salt",
    explanation: "A precipitation reaction goes ahead because an insoluble salt forms.",
  },
  {
    prompt: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. What is the driving force of this reaction?",
    options: ["The formation of a gas", "The formation of a precipitate", "The transfer of electrons", "The transfer of protons only"],
    answer: "The formation of a gas",
    explanation: "Carbon dioxide gas is given off, which drives the reaction.",
  },
  {
    prompt: "HCl + NaOH → NaCl + H₂O. What type of reaction is this?",
    options: ["A precipitation reaction", "A redox reaction", "An acid-base reaction", "A gas-forming reaction"],
    answer: "An acid-base reaction",
    explanation: "Protons are transferred from the acid to the base.",
  },
  {
    prompt: "Zn + CuSO₄ → ZnSO₄ + Cu. What type of reaction is this?",
    options: ["A precipitation reaction", "An acid-base reaction", "A redox reaction", "A gas-forming reaction"],
    answer: "A redox reaction",
    explanation: "Electrons are transferred from zinc to copper ions.",
  },
  {
    prompt: "In Zn + Cu²⁺ → Zn²⁺ + Cu, how many electrons does each zinc atom lose?",
    options: ["2", "1", "0", "4"],
    answer: "2",
    explanation: "The charge of zinc goes from 0 to +2, so each atom loses two electrons.",
  },
];

const PrecipitationReactionTypes = () => (
  <CapsSubjectTopic
    title="Precipitation and Reaction Types"
    subtitle="Ion exchange, solubility, tests for anions and four types of reaction in solution"
    learnSteps={learnSteps}
    task="gr10-precipitation-reaction-types-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default PrecipitationReactionTypes;
