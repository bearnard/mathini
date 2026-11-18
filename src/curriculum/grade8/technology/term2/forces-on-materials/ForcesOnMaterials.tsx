import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { ReinforcedBeam, SectionShapes } from '../../../../../components/diagrams/tech8/Tech8b';
import { FORCES, PLYWOOD, SECTIONS, beamSides, iBeamArea, materialSaved, rectArea } from '../../../../../components/diagrams/tech8/tech8bHelpers';

// Every statement and number comes from tech8bHelpers.ts (tested in tech8bHelpers.test.ts and g8TechT2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const big = (x: number) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const solid = rectArea(100, 100);
const ibeam = iBeamArea(100, 100, 10, 10);

export const learnSteps: LearnStep[] = [
  {
    title: 'Forces on materials',
    content: slide(
      <>
        <Rule>Forces act on materials in five ways: tension, compression, bending, torsion and shear. Choosing the right material and shape depends on which forces it must withstand.</Rule>
        <FactCards
          cards={[
            { title: 'Tension', line1: 'pulls the material apart:', line2: FORCES[0].example },
            { title: 'Compression', line1: 'squashes the material together:', line2: FORCES[1].example },
            { title: 'Bending', line1: 'curves it: tension on one side,', line2: 'compression on the other' },
            { title: 'Torsion', line1: 'twists the material:', line2: FORCES[3].example },
            { title: 'Shear', line1: 'layers slide past each other:', line2: FORCES[4].example },
          ]}
          aria={`Forces on materials. ${FORCES.map((f) => `${f.name}: ${f.action}, for example ${f.example}`).join('. ')}.`}
        />
        <Worked
          title="Name the force"
          steps={FORCES.slice(0, 3).map((f) => `${f.example[0].toUpperCase() + f.example.slice(1)}: ${f.name}.`)}
        />
        <Mistake>Mixing up tension and compression. Tension pulls the material apart and compression squashes it together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reinforcing concrete and plywood',
    content: slide(
      <>
        <Rule>Materials can be adapted to withstand forces. Concrete is strong in compression but weak in tension, so steel reinforcing bars are put in the part of a beam that is in tension. When a beam bends, the top is in {beamSides.top} and the bottom is in {beamSides.bottom}. Plywood is made of {PLYWOOD.layers}, with {PLYWOOD.grain}, so it is {PLYWOOD.result}.</Rule>
        <ReinforcedBeam />
        <Worked
          title="Where do the steel bars go?"
          steps={[
            `A loaded beam bends, so its top edge is in ${beamSides.top} and its bottom edge is in ${beamSides.bottom}.`,
            'Concrete cracks easily in tension, so the steel bars are placed near the bottom.',
            'In plywood each layer has its grain at right angles to the next, so a sheet resists splitting in both directions.',
          ]}
        />
        <Mistake>Putting the steel bars at the top of a beam that carries a load in the middle. The tension is at the bottom.</Mistake>
      </>,
    ),
  },
  {
    title: 'Metal sections that save material',
    content: slide(
      <>
        <Rule>Metal sections such as the I-beam, angle iron, T-bar and channel have shapes that withstand forces with less metal than a solid bar. An I-beam puts most of its metal in the top and bottom flanges, where bending forces are greatest, and uses a thin web in between. This saves material and cost.</Rule>
        <SectionShapes depth={100} flange={100} flangeT={10} web={10} />
        <Worked
          title="Compare a solid bar with an I-beam"
          steps={[
            `A solid bar 100 mm wide and 100 mm deep has a cross-section of ${big(solid)} mm².`,
            `An I-beam of the same size with flanges 10 mm thick and a web 10 mm thick has 2 × 100 × 10 + 10 × 80 = ${big(ibeam)} mm².`,
            `That is ${materialSaved(solid, ibeam)}% less metal. Angle iron is used for ${SECTIONS[1].use}.`,
          ]}
        />
        <Mistake>Saying that the I-beam is weaker because it has less metal. The shape puts the metal where it is most useful.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which force twists a material?</>,
          <>Which side of a loaded beam is in tension?</>,
          <>Why is steel put in concrete beams?</>,
          <>Name one metal section that saves material.</>,
        ]}
        answers={[
          <>Torsion.</>,
          <>The bottom.</>,
          <>Concrete is weak in tension and steel is strong in tension.</>,
          <>An I-beam (or angle iron, T-bar, channel).</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which force pulls a material apart?",
    options: ["Compression", "Torsion", "Tension", "Shear"],
    answer: "Tension",
    explanation: "Tension is a pulling force.",
  },
  {
    prompt: "Which force squashes a material together?",
    options: ["Compression", "Tension", "Torsion", "Shear"],
    answer: "Compression",
    explanation: "Compression pushes the material together.",
  },
  {
    prompt: "Which force twists a material?",
    options: ["Shear", "Bending", "Tension", "Torsion"],
    answer: "Torsion",
    explanation: "Torsion is twisting.",
  },
  {
    prompt: "Which force makes layers of a material slide past each other?",
    options: ["Tension", "Shear", "Compression", "Torsion"],
    answer: "Shear",
    explanation: "Shear forces slide layers over each other, as in scissors.",
  },
  {
    prompt: "A rope is pulled at both ends. Which force acts on the rope?",
    options: ["Compression", "Tension", "Shear", "Torsion"],
    answer: "Tension",
    explanation: "Pulling at both ends is tension.",
  },
  {
    prompt: "A pillar holds up a heavy roof. Which force acts on the pillar?",
    options: ["Tension", "Torsion", "Shear", "Compression"],
    answer: "Compression",
    explanation: "The load squashes the pillar.",
  },
  {
    prompt: "A screwdriver turns a screw. Which force acts on the screwdriver shaft?",
    options: ["Torsion", "Compression", "Tension", "Shear"],
    answer: "Torsion",
    explanation: "Turning the handle twists the shaft.",
  },
  {
    prompt: "A beam supported at both ends has a load in the middle. Which side of the beam is in tension?",
    options: ["The top", "The ends", "The bottom", "Neither side"],
    answer: "The bottom",
    explanation: "The beam sags, so the bottom is stretched and the top is squashed.",
  },
  {
    prompt: "On a bending beam, which edge gets squashed?",
    options: ["The bottom", "The ends", "Neither side", "The top"],
    answer: "The top",
    explanation: "The top edge is squashed when the beam bends.",
  },
  {
    prompt: "Why are steel bars placed in concrete beams?",
    options: ["Concrete is too heavy without steel", "Steel is strong in tension", "Concrete cannot take compression", "Steel makes the concrete lighter"],
    answer: "Steel is strong in tension",
    explanation: "The steel carries the tension.",
  },
  {
    prompt: "Where in a loaded concrete beam are the reinforcing bars placed?",
    options: ["Near the bottom", "Near the top", "Only at the ends", "Along the middle only"],
    answer: "Near the bottom",
    explanation: "The bottom is in tension.",
  },
  {
    prompt: "How is plywood made?",
    options: ["From one thick plank of wood", "From sawdust and glue only", "Thin layers glued crosswise", "From sheets of plastic"],
    answer: "Thin layers glued crosswise",
    explanation: "Each layer has its grain at right angles to the next.",
  },
  {
    prompt: "Why is plywood less likely to split than a plank?",
    options: ["It is made of metal inside", "It contains steel bars", "Its layers run in different directions", "It is a lot softer than wood"],
    answer: "Its layers run in different directions",
    explanation: "The crossed grains resist splitting in both directions.",
  },
  {
    prompt: "Why is an I-beam used instead of a solid bar?",
    options: ["It resists bending using less metal", "It is made of a lighter metal", "It is easier to weld to a pipe", "It has no flanges"],
    answer: "It resists bending using less metal",
    explanation: "The flanges carry the bending forces and the thin web saves material.",
  },
];

const ForcesOnMaterials = () => (
  <CapsSubjectTopic
    title="Forces on Materials and Reinforcing"
    subtitle="Tension, compression, bending, torsion and shear, reinforced concrete, plywood and metal sections"
    learnSteps={learnSteps}
    task="gr8-forces-on-materials-t2"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ForcesOnMaterials;
