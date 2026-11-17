import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PolymerChain, ProcessFlow, RECYCLING_CODES } from '../../../../../components/diagrams/chemistry12/Chem12';
import { molarMass, monomerUnits } from '../../../../../components/diagrams/chemistry12/chemHelpers';

// The numbers below come from chemHelpers.ts (tested in chemHelpers.test.ts, g12PsIndustry.test.ts).
const sub = (n: number | string) => <sub className="text-[0.75em]">{n}</sub>;
const nSub = <sub className="text-[0.75em] italic">n</sub>;
const m1 = molarMass('C2H4');
const mP = molarMass('C3H6');
const mC = molarMass('C2H3Cl');
const units = monomerUnits(56000, 'C2H4');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Monomers and polymers',
    content: slide(
      <>
        <Rule>A polymer is a very long molecule made of many small molecules, the monomers, joined together. The same unit repeats along the chain.</Rule>
        <PolymerChain monomer="ethene" repeat="−CH₂−CH₂−" aria="Four ethene molecules joined in a chain to form poly(ethene). The same repeat unit, CH2 CH2, appears n times." />
        <Worked
          title="Poly(ethene)"
          steps={[
            <>The monomer is ethene, C{sub(2)}H{sub(4)}, with a molar mass of {m1} g·mol⁻¹.</>,
            <>The repeat unit in the polymer is −CH{sub(2)}−CH{sub(2)}−, so the polymer is written (C{sub(2)}H{sub(4)}){nSub}.</>,
            <>A polymer chain of {units} ethene units has a molar mass of 56 000 g·mol⁻¹ (56 000 ÷ {m1} = {units}).</>,
          ]}
        />
        <Mistake>Writing the polymer as C{sub(2)}H{sub(4)} with no n. One monomer is not a polymer: the formula needs the n to show that the unit repeats many times.</Mistake>
      </>,
    ),
  },
  {
    title: 'Addition polymerisation',
    content: slide(
      <>
        <Rule>In addition polymerisation, monomers that contain a C=C double bond join end to end. One bond of each double bond opens, so nothing is lost: the polymer has the same atoms as the monomers.</Rule>
        <ProcessFlow
          aria="Addition polymerisation: many molecules of chloroethene with a double bond join to give poly(chloroethene), PVC, in which the double bond has become a single bond."
          steps={[
            { label: 'n CH₂=CHCl', note: 'monomer', color: '#fbbf24' },
            { label: 'opens C=C', note: 'catalyst, heat' },
            { label: 'PVC', note: 'poly(chloroethene)', color: '#34d399' },
          ]}
        />
        <Worked
          steps={[
            <>Ethene gives poly(ethene): n CH{sub(2)}=CH{sub(2)} → −(CH{sub(2)}−CH{sub(2)}){nSub}−.</>,
            <>Propene, C{sub(3)}H{sub(6)} ({mP} g·mol⁻¹), gives poly(propene), with a CH{sub(3)} group on every second carbon.</>,
            <>Chloroethene, C{sub(2)}H{sub(3)}Cl ({mC} g·mol⁻¹), gives poly(chloroethene), PVC.</>,
            <>Check: the polymer's repeat unit has exactly the atoms of the monomer, because no small molecule is released.</>,
          ]}
        />
        <Mistake>Keeping the double bond in the polymer. In the chain every carbon−carbon bond is a single bond: the double bond was used up to make the links.</Mistake>
      </>,
    ),
  },
  {
    title: 'Condensation polymerisation (basic)',
    content: slide(
      <>
        <Rule>In condensation polymerisation the monomers each have two functional groups. Every time two monomers link, a small molecule, usually water, is released.</Rule>
        <ProcessFlow
          aria="Condensation polymerisation: a monomer with two acid groups and a monomer with two alcohol groups link in turn, and a molecule of water is released at every link, giving a polyester."
          steps={[
            { label: 'diol', note: 'two −OH', color: '#fbbf24' },
            { label: 'diacid', note: 'two −COOH', color: '#fbbf24' },
            { label: 'polyester', note: '+ H₂O at each link', color: '#34d399' },
          ]}
        />
        <Worked
          steps={[
            <>An alcohol group −OH and an acid group −COOH react to form an ester link −COO− and water: a polyester.</>,
            <>An amine group −NH{sub(2)} and an acid group −COOH form an amide link −CONH− and water: a polyamide such as nylon.</>,
            <>The polymer has fewer atoms than the monomers added together, because water was lost at every link.</>,
          ]}
        />
        <Mistake>Thinking a condensation polymer needs a C=C double bond. It does not: it needs two reacting groups on each monomer, and it always gives off a small molecule.</Mistake>
      </>,
    ),
  },
  {
    title: 'Uses, recycling and the environment',
    content: slide(
      <>
        <Rule>Plastics are light, cheap and strong, but most do not break down in nature. Recycling codes 1 to 7 on a plastic tell the recycler which polymer it is made of.</Rule>
        <div role="table" aria-label="Plastic recycling codes 1 to 7 with their abbreviation and name" className="overflow-x-auto rounded-xl bg-white/70 p-3 text-left text-sm text-slate-700">
          {RECYCLING_CODES.map((r) => (
            <div key={r.code} role="row" className="flex gap-3 border-b border-slate-200 py-1 last:border-0">
              <span className="w-5 font-bold text-slate-800">{r.code}</span>
              <span className="w-12 font-semibold">{r.abbr}</span>
              <span>{r.name}</span>
            </div>
          ))}
        </div>
        <Worked
          steps={[
            <>Code 2 (HDPE) is used for milk bottles and code 1 (PET) for cold-drink bottles.</>,
            <>Plastic waste in landfills and the sea stays for hundreds of years because the long chains are not biodegradable.</>,
            <>Ways to reduce the problem: reduce use, reuse, recycle by code, and burn only where the gases are controlled.</>,
          ]}
        />
        <Mistake>Believing that all plastics can be recycled together. Different polymers melt at different temperatures, so they must be sorted by code first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which kind of monomer takes part in addition polymerisation?</>,
          <>What is released at each link in a condensation polymer made from a diol and a diacid?</>,
          <>How many ethene units are in a poly(ethene) chain of molar mass 56 000 g·mol⁻¹?</>,
          <>Which polymer has recycling code 3?</>,
        ]}
        answers={[
          <>A monomer with a C=C double bond, such as ethene or propene.</>,
          <>Water: each ester link forms with the loss of one H{sub(2)}O.</>,
          <>56 000 ÷ {m1} = <strong>{units}</strong>.</>,
          <>PVC, poly(chloroethene).</>,
        ]}
      />,
    ),
  },
];

// BANK:START
const bank: CapsItem[] = [
  {
    prompt: "Which monomer is used to make PVC?",
    options: ["ethene", "chloroethene", "chloroethane", "propene"],
    answer: "chloroethene",
    explanation: "PVC is made by addition polymerisation of chloroethene, CH2=CHCl.",
  },
  {
    prompt: "What type of polymerisation changes ethene into poly(ethene)?",
    options: ["Addition polymerisation", "Condensation polymerisation", "Substitution", "Elimination"],
    answer: "Addition polymerisation",
    explanation: "Ethene has a C=C double bond, which opens so that the molecules join end to end with nothing lost.",
  },
  {
    prompt: "Which feature must a monomer have to take part in addition polymerisation?",
    options: ["Two functional groups on one molecule", "A benzene ring", "An OH group", "A C=C double bond"],
    answer: "A C=C double bond",
    explanation: "Addition polymers form when double bonds open. Two functional groups are needed for condensation polymerisation.",
  },
  {
    prompt: "Which statement about condensation polymerisation is correct?",
    options: ["Only one product is formed, and no small molecule is released", "Only alkenes with a C=C double bond can be used as monomers", "A small molecule such as water is released at each link", "The C=C double bonds in the monomers open up to form the links"],
    answer: "A small molecule such as water is released at each link",
    explanation: "Every time two monomers link by a condensation reaction, a small molecule (usually H2O) is lost.",
  },
  {
    prompt: "What is the molar mass of a poly(ethene) chain made of 1 000 ethene molecules? (C = 12, H = 1)",
    options: ["28 g·mol⁻¹", "28 000 g·mol⁻¹", "2 800 g·mol⁻¹", "280 000 g·mol⁻¹"],
    answer: "28 000 g·mol⁻¹",
    explanation: "Ethene, C2H4, has M = 28 g·mol⁻¹. Addition loses no atoms, so 1 000 × 28 = 28 000 g·mol⁻¹.",
  },
  {
    prompt: "A poly(propene) chain has a molar mass of 63 000 g·mol⁻¹. How many propene molecules (C3H6) formed it? (C = 12, H = 1)",
    options: ["1 500", "63", "150", "15 000"],
    answer: "1 500",
    explanation: "M(C3H6) = 3(12) + 6(1) = 42 g·mol⁻¹. 63 000 ÷ 42 = 1 500.",
  },
  {
    prompt: "What is the repeat unit of poly(ethene)?",
    options: ["−CH=CH−", "−CH3−CH3−", "−CH2−", "−CH2−CH2−"],
    answer: "−CH2−CH2−",
    explanation: "Each ethene molecule contributes CH2−CH2 to the chain, and the carbon atoms are joined by single bonds.",
  },
  {
    prompt: "A diol reacts with a dicarboxylic acid in a condensation reaction. What type of polymer forms?",
    options: ["A polyamide", "A poly(alkene)", "A polyester", "Poly(chloroethene)"],
    answer: "A polyester",
    explanation: "An alcohol group and an acid group give an ester link, so the polymer is a polyester (and water is released).",
  },
  {
    prompt: "Which link joins the monomers in nylon?",
    options: ["An ester link", "An amide link", "An ether link", "A C=C double bond"],
    answer: "An amide link",
    explanation: "Nylon forms from monomers with amine and carboxylic acid groups, which join through amide links.",
  },
  {
    prompt: "Which plastic has recycling code 3?",
    options: ["PVC", "PET", "HDPE", "LDPE"],
    answer: "PVC",
    explanation: "Codes: 1 PET, 2 HDPE, 3 PVC, 4 LDPE, 5 PP, 6 PS, 7 other.",
  },
  {
    prompt: "Why are plastics an environmental problem?",
    options: ["They dissolve in rain water and slowly poison fish and plants", "They are much heavier than metals, so landfill sites fill quickly", "They react with the soil to form strong acids that burn roots", "Most are not biodegradable, so they remain for hundreds of years"],
    answer: "Most are not biodegradable, so they remain for hundreds of years",
    explanation: "The long carbon chains are not broken down by organisms, so plastic waste accumulates.",
  },
  {
    prompt: "What happens to the C=C double bond when ethene molecules polymerise?",
    options: ["It stays a double bond", "It becomes a triple bond", "It becomes a single bond", "It breaks and is lost as a gas"],
    answer: "It becomes a single bond",
    explanation: "One bond of the double bond opens to form the link to the next molecule, so the chain has only single bonds.",
  },
  {
    prompt: "Which compound is the monomer of poly(propene)?",
    options: ["propane", "propene", "ethene", "propyne"],
    answer: "propene",
    explanation: "Poly(propene) is the addition polymer of propene, CH3CH=CH2.",
  },
  {
    prompt: "Which equation represents the formation of poly(ethene)?",
    options: ["n CH2=CH2 → −(CH2−CH2)n−", "n CH3−CH3 → −(CH2−CH2)n−", "CH2=CH2 + H2 → CH3−CH3", "n CH2=CH2 + n H2O → −(CH2−CH2−O)n−"],
    answer: "n CH2=CH2 → −(CH2−CH2)n−",
    explanation: "Many ethene molecules join with no other product. The second option is hydrogenation, which gives ethane, not a polymer.",
  },
];
// BANK:END

const PlasticsPolymers = () => (
  <CapsSubjectTopic
    title="Plastics and Polymers"
    subtitle="Monomers, addition and condensation polymerisation, recycling"
    learnSteps={learnSteps}
    task="gr12-plastics-polymers-t1"
    bank={bank}
    apiPath="/api/caps/ps"
    grade={12}
  />
);

export default PlasticsPolymers;
