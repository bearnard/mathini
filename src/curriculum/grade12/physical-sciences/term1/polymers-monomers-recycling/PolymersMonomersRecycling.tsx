import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ProcessFlow, RECYCLING_CODES } from '../../../../../components/diagrams/chemistry12/Chem12';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { massPercent, molarMass } from '../../../../../components/diagrams/chemistry12/chemHelpers';

// Numbers come from chemHelpers.ts and are recomputed independently in g12PsGaps.test.ts. Formulas are written in text, as in the CAPS.
const f = (v: number) => String(Math.round(v * 100) / 100).replace('.', ',');
const f1 = (v: number) => String(Math.round(v * 10) / 10).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const wasteKg = 40;
const plasticKg = 6;

export const learnSteps: LearnStep[] = [
  {
    title: 'Find the monomer from a piece of the chain',
    content: slide(
      <>
        <Rule>In an addition polymer the chain is made only of carbon atoms joined by single bonds, and the same unit repeats. Take one repeat unit of two backbone carbons and put the C=C double bond back between them: that is the monomer. You only need to do this for poly(chloroethene) (PVC), polystyrene, poly(ethene) (polythene) and poly(vinyl acetate) (PVA).</Rule>
        <ProcessFlow
          aria="Finding a monomer: a repeat unit of two backbone carbons from the PVC chain, CH2 CHCl, gets its double bond back and becomes the monomer chloroethene, CH2=CHCl."
          steps={[
            { label: '–CH₂–CHCl–', note: 'repeat unit', color: '#fbbf24' },
            { label: 'restore C=C', note: 'two backbone C' },
            { label: 'CH₂=CHCl', note: 'chloroethene', color: '#34d399' },
          ]}
        />
        <Worked
          title="Four chains, four monomers"
          steps={[
            'PVC: –CH₂–CHCl–CH₂–CHCl– has repeat unit –CH₂–CHCl–, so the monomer is CH₂=CHCl (chloroethene).',
            'Polystyrene: the repeat unit –CH₂–CH(C₆H₅)– gives the monomer CH₂=CH(C₆H₅) (phenylethene, styrene).',
            'Polythene: –CH₂–CH₂–CH₂–CH₂– repeats –CH₂–CH₂–, so the monomer is CH₂=CH₂ (ethene).',
            'PVA: the repeat unit –CH₂–CH(OCOCH₃)– gives the monomer CH₂=CH(OCOCH₃) (ethenyl ethanoate, vinyl acetate).',
          ]}
        />
        <Mistake>Taking four carbons of the chain as one monomer. A four-carbon piece of polythene is two repeat units, so the monomer is ethene, not butene.</Mistake>
      </>,
    ),
  },
  {
    title: 'Addition or condensation from the structure',
    content: slide(
      <>
        <Rule>You can tell the type of polymerisation from the structural formula of the polymer. A chain with only carbon atoms in the backbone, such as polythene, was made by addition: nothing was lost. A chain with ester links, –O–C(=O)–, in the backbone, such as polylactic acid (PLA), was made by condensation: a small molecule, water, was released at each link.</Rule>
        <ProcessFlow
          aria="Deciding the type of polymerisation: an all-carbon backbone means addition, as in polythene; ester links in the backbone mean condensation, as in polylactic acid."
          steps={[
            { label: 'look at backbone', note: 'the main chain' },
            { label: 'all C–C', note: 'addition: polythene', color: '#fbbf24' },
            { label: 'C–O–C(=O)', note: 'condensation: PLA', color: '#34d399' },
          ]}
        />
        <Worked
          title="Check with the atoms"
          steps={[
            <>Lactic acid is HOCH(CH₃)COOH, C₃H₆O₃, M = {molarMass('C3H6O3')} g·mol⁻¹.</>,
            <>One PLA repeat unit is –OCH(CH₃)CO–, C₃H₄O₂, M = {molarMass('C3H4O2')} g·mol⁻¹.</>,
            <>The difference, {molarMass('C3H6O3') - molarMass('C3H4O2')} g·mol⁻¹, is exactly one H₂O per link: condensation. For ethene, the repeat unit and the monomer have the same formula: addition.</>,
          ]}
        />
        <Mistake>Deciding from the monomer name alone. Look at the backbone of the polymer: a polymer with ester links is a condensation polymer, even if the monomer has an –OH group.</Mistake>
      </>,
    ),
  },
  {
    title: 'Uses of polythene and recycling numbers',
    content: slide(
      <>
        <Rule>Polythene (poly(ethene)) is used for squeeze bottles, plastic bags and films, toys, moulded objects and electrical insulation. Plastic products carry a recycling number so that they can be sorted: polythene such as shopping bags has the number 4. Plastics with the same number can be recycled together.</Rule>
        <FactCards
          cards={[
            { title: '1 PET', line1: 'drink bottles', line2: 'polyester' },
            { title: '2 HDPE', line1: 'milk bottles', line2: 'high-density poly(ethene)' },
            { title: '4 LDPE', line1: 'bags and films', line2: 'low-density poly(ethene)' },
            { title: '6 PS', line1: 'yoghurt tubs, foam', line2: 'polystyrene' },
          ]}
          aria="Recycling numbers. 1 PET: drink bottles. 2 HDPE: milk bottles, high-density poly(ethene). 4 LDPE: bags and films, low-density poly(ethene). 6 PS: yoghurt tubs and foam, polystyrene."
        />
        <Worked
          title="Read the number"
          steps={[
            <>The numbers 1 to 7 are: {RECYCLING_CODES.map((c) => `${c.code} ${c.abbr}`).join(', ')}.</>,
            'A squeeze bottle or a shopping bag made of polythene carries the number 4.',
            'A yoghurt tub that is stamped 6 is polystyrene, and it must go with number 6 plastics.',
          ]}
        />
        <Mistake>Believing that the number tells you how many times a plastic can be recycled. It only names the type of plastic.</Mistake>
      </>,
    ),
  },
  {
    title: 'Properties of plastics and the environment',
    content: slide(
      <>
        <Rule>Plastics are light, cheap, flexible, waterproof and electrical insulators, and most do not rot. That is why they are so useful, and also why plastic waste piles up in landfills and pollutes rivers and the sea. Ways to reduce the problem are to refuse and reuse plastic, to recycle sorted plastics, and to use biodegradable plastics such as PLA, whose monomer comes from the fermentation of plant material.</Rule>
        <FactCards
          cards={[
            { title: 'Useful', line1: 'light, flexible,', line2: 'waterproof, insulating' },
            { title: 'Problem', line1: 'most do not rot, so', line2: 'waste builds up' },
            { title: 'Reduce', line1: 'refuse, reuse and', line2: 'recycle' },
            { title: 'PLA', line1: 'biodegradable plastic', line2: 'from plant sugars' },
          ]}
          aria="Plastics and the environment. Useful: light, flexible, waterproof and insulating. Problem: most do not rot, so waste builds up. Reduce: refuse, reuse and recycle. PLA: a biodegradable plastic made from plant sugars."
        />
        <Worked
          title="A household waste survey"
          steps={[
            `A household throws away ${wasteKg} kg of waste in a week, and ${plasticKg} kg of it is plastic.`,
            `Plastic is ${plasticKg} ÷ ${wasteKg} × 100 = ${f1((plasticKg / wasteKg) * 100)}% of the waste by mass.`,
            `If the family recycles half of the plastic, ${plasticKg / 2} kg a week is kept out of the bin.`,
          ]}
        />
        <Mistake>Saying that biodegradable plastics solve the waste problem on their own. They also need the right conditions to break down, so reducing and reusing still matter.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A chain section reads –CH₂–CH(C₆H₅)–CH₂–CH(C₆H₅)–. Name the monomer.</>,
          <>How can you tell from its formula that a polymer is a condensation polymer?</>,
          <>Which recycling number does polythene carry?</>,
          <>Give two properties of plastics that make waste a problem.</>,
        ]}
        answers={[
          <>Phenylethene (styrene), CH₂=CH(C₆H₅).</>,
          <>It has ester links, –O–C(=O)–, in the backbone, and water is released when it forms.</>,
          <>4.</>,
          <>They do not rot, and they are light, so they spread easily.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "A section of a polymer chain is -CH2-CH(C6H5)-CH2-CH(C6H5)-. What is the monomer called?",
    options: ["Ethylbenzene (a solvent)", "Ethene (a gas)", "Phenylethene (styrene)", "Benzene (a ring)"],
    answer: "Phenylethene (styrene)",
    explanation: "Take the two-carbon repeat unit and put the double bond back: CH2=CH(C6H5).",
  },
  {
    prompt: "The repeat unit of a polymer is -CH2-CH(OCOCH3)-. Which monomer formed it?",
    options: ["Ethenyl ethanoate (vinyl acetate)", "Methyl ethanoate (an ester)", "Ethene (the simplest alkene)", "Ethyl propanoate (an ester)"],
    answer: "Ethenyl ethanoate (vinyl acetate)",
    explanation: "This is poly(vinyl acetate), PVA: the double bond goes back between the two backbone carbons.",
  },
  {
    prompt: "A chain of polythene reads -CH2-CH2-CH2-CH2-. Which is its monomer?",
    options: ["Butene", "Ethane", "Methane", "Ethene"],
    answer: "Ethene",
    explanation: "The repeat unit has two backbone carbons, so the monomer is ethene, CH2=CH2.",
  },
  {
    prompt: "The chain section -CH2-CHCl-CH2-CHCl-CH2-CHCl- was made from how many monomer molecules?",
    options: ["6", "3", "2", "12"],
    answer: "3",
    explanation: "Each -CH2-CHCl- unit came from one chloroethene molecule, and there are three units.",
  },
  {
    prompt: "Which polymer has a backbone of carbon atoms only and so forms by addition?",
    options: ["Polylactic acid", "Polythene", "A polyester", "Nylon"],
    answer: "Polythene",
    explanation: "A carbon-only backbone means that no small molecule was released.",
  },
  {
    prompt: "Which feature in the backbone of a polymer shows that it is a condensation polymer?",
    options: ["Only C-C single bonds", "A C=C double bond", "Only C-H bonds", "Ester links, -O-C(=O)-"],
    answer: "Ester links, -O-C(=O)-",
    explanation: "Condensation polymers have a linking group, and water is released at each link.",
  },
  {
    prompt: "Lactic acid forms PLA. Which small molecule is released at each link?",
    options: ["Water", "Carbon dioxide", "Ammonia", "Hydrogen"],
    answer: "Water",
    explanation: "The M of lactic acid (90) less the M of the repeat unit (72) is 18, which is water.",
  },
  {
    prompt: "What is the molar mass of the PLA repeat unit, C3H4O2? (C = 12, H = 1, O = 16)",
    options: ["90 g/mol", "74 g/mol", "72 g/mol", "36 g/mol"],
    answer: "72 g/mol",
    explanation: "3 x 12 + 4 x 1 + 2 x 16 = 72 g/mol.",
  },
  {
    prompt: "Which recycling number is stamped on polythene shopping bags?",
    options: ["1", "6", "7", "4"],
    answer: "4",
    explanation: "Low-density poly(ethene) carries recycling number 4.",
  },
  {
    prompt: "A yoghurt tub is stamped with recycling number 6. From which plastic is it made?",
    options: ["PET", "Polystyrene", "Polythene", "PVC"],
    answer: "Polystyrene",
    explanation: "Recycling number 6 is polystyrene.",
  },
  {
    prompt: "Drink bottles are usually stamped with recycling number 1. Which plastic is this?",
    options: ["PET", "PVC", "HDPE", "Polystyrene"],
    answer: "PET",
    explanation: "Number 1 is poly(ethylene terephthalate), a polyester.",
  },
  {
    prompt: "A home throws away 40 kg of waste in a week and 6 kg is plastic. What percentage is plastic?",
    options: ["6%", "40%", "15%", "85%"],
    answer: "15%",
    explanation: "6 / 40 x 100 = 15%.",
  },
  {
    prompt: "Which is a use of polythene?",
    options: ["Making fuel for cars", "A strong building steel", "Electrical insulation", "A drink for plants"],
    answer: "Electrical insulation",
    explanation: "Polythene is a good electrical insulator and is also used for bags, films and bottles.",
  },
  {
    prompt: "Why is PLA seen as more friendly to the environment than polythene?",
    options: ["It is biodegradable, from plants", "It never breaks down at all", "It is made from crude oil", "It cannot be recycled at all"],
    answer: "It is biodegradable, from plants",
    explanation: "The monomer comes from the fermentation of plants, and the polymer can break down.",
  },
];

const PolymersMonomersRecycling = () => (
  <CapsSubjectTopic
    title="Polymers: Identifying Monomers, Uses and Recycling Numbers"
    subtitle="Monomers from a chain section, addition or condensation from the structure, polythene uses and recycling numbers"
    learnSteps={learnSteps}
    task="gr12-polymers-monomers-recycling-t1"
    bank={bank}
    apiPath="/api/caps/ps"
    grade={12}
  />
);

export default PolymersMonomersRecycling;
