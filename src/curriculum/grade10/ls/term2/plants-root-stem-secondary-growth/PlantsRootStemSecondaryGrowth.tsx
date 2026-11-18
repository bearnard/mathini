import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { AnnualRings, RootSection, StemSection } from '../../../../../components/diagrams/lifesci/PlantSections';
import * as p from '../../../../../components/diagrams/lifesci/plants10';

// Numbers come from plants10.ts (tested in plants10.test.ts and g10LsPlants.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Where the tissues lie in a dicot root',
    content: slide(
      <>
        <Rule>A dicotyledonous (dicot) plant, such as a bean or a sunflower, has a root with tissues arranged in layers. The outer epidermis has root hairs that take in water. Inside it is a wide cortex of storage cells. In the centre the xylem forms a star shape with phloem between its arms. The xylem carries water and minerals up, and the phloem carries food.</Rule>
        <RootSection />
        <Worked
          title="Trace the water into the root"
          steps={[
            'Water enters through the root hairs of the epidermis.',
            'It crosses the cortex to the vascular tissue in the centre.',
            'It enters the xylem, which carries it up to the stem and leaves.',
          ]}
        />
        <Mistake>Placing the xylem near the outside of the root. In a dicot root the xylem lies in the centre, and the cortex lies between the epidermis and the vascular tissue.</Mistake>
      </>,
    ),
  },
  {
    title: 'Where the tissues lie in a dicot stem',
    content: slide(
      <>
        <Rule>In a dicot stem the vascular bundles are arranged in a ring. In each bundle the xylem is on the inside and the phloem is on the outside, with a thin layer of dividing cells, the cambium, between them. The epidermis covers the stem, and the cortex and the pith in the centre store food and give support.</Rule>
        <StemSection />
        <Worked
          title="Name the position"
          steps={[
            'Going from the outside to the centre of a young dicot stem: epidermis, cortex, phloem, cambium, xylem and pith.',
            'The vascular bundles form a ring around the pith.',
            'Compare: in the root the xylem is in the centre, and in the stem it is in a ring of bundles.',
          ]}
        />
        <Mistake>Putting the phloem on the inside of the bundle. In the stem the xylem is on the inside and the phloem is on the outside.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cells of the support and transport tissues',
    content: slide(
      <>
        <Rule>Xylem vessels are long, dead, hollow tubes with walls strengthened by lignin; they carry water and minerals, and the lignin also supports the plant. Phloem has living sieve tube cells with companion cells beside them, and it carries manufactured food (sucrose) from the leaves to other parts. Sclerenchyma cells have thick lignified walls and support the plant, and turgid parenchyma cells press on each other and keep soft stems upright.</Rule>
        <InfoTable
          cols={[{ title: 'Tissue', w: 26 }, { title: 'Cells', w: 38 }, { title: 'Job', w: 36 }]}
          rows={[
            ['Xylem', 'dead, hollow, lignified\nvessels', 'carries water and\nminerals, supports'],
            ['Phloem', 'living sieve tubes and\ncompanion cells', 'carries sucrose from\nleaves'],
            ['Sclerenchyma', 'thick, lignified walls', 'supports the plant'],
            ['Parenchyma', 'thin-walled, turgid', 'stores food, keeps\nsoft parts firm'],
          ]}
          aria="A table of plant tissues. Xylem: dead, hollow, lignified vessels that carry water and minerals and support the plant. Phloem: living sieve tubes and companion cells that carry sucrose from the leaves. Sclerenchyma: cells with thick lignified walls that support the plant. Parenchyma: thin-walled turgid cells that store food and keep soft parts firm."
        />
        <Worked
          title="Match the structure to the job"
          steps={[
            'Lignin makes the xylem wall strong, so the tube does not collapse when water is pulled up.',
            'Dead, hollow cells give water a clear path with little resistance.',
            'A wilted plant has lost turgor in its parenchyma cells, so the soft parts droop.',
          ]}
        />
        <Mistake>Saying that xylem cells are living. Mature xylem vessels are dead and hollow, and the phloem sieve tubes are living.</Mistake>
      </>,
    ),
  },
  {
    title: 'Secondary growth and annual rings',
    content: slide(
      <>
        <Rule>Secondary growth makes a stem or root grow wider. Cells of the cambium divide (mitosis): they make new xylem on the inside and new phloem on the outside. In a tree trunk the new xylem forms a ring each year. A wide ring shows a good growing year with plenty of water and warmth, and a narrow ring shows a poor, dry or cold year. Counting the rings gives the age of the tree.</Rule>
        <AnnualRings />
        <Worked
          title="Read a tree trunk"
          steps={[
            `The trunk has ${p.RINGS.length} rings, so the tree is ${p.age()} years old.`,
            `The widest ring is ring ${p.widest()} (${p.dec(Math.max(...p.RINGS))} mm), counting from the centre: a very good year. The narrowest is ring ${p.narrowest()} (${p.dec(Math.min(...p.RINGS))} mm): a poor year, perhaps a drought.`,
            `The widths add up to ${p.dec(p.trunkRadius())} mm, and the mean ring is ${p.dec(p.trunkRadius())} ÷ ${p.RINGS.length} = ${p.dec(p.meanRing())} mm.`,
          ]}
        />
        <Mistake>Counting the rings from the outside as the first year. The ring at the centre is the oldest, and the ring at the bark is the most recent.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Where is the xylem in a dicot root?</>,
          <>In a dicot stem, is the xylem on the inside or the outside of the bundle?</>,
          <>What tissue divides to make secondary growth?</>,
          <>A trunk has 14 rings. How old is the tree?</>,
        ]}
        answers={[
          <>In the centre, in a star shape.</>,
          <>On the inside, with the phloem on the outside.</>,
          <>The cambium.</>,
          <>14 years.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Where is the xylem found in a dicot root?",
    options: ["On the outside, next to the epidermis", "In the cortex as a ring of bundles", "In the centre, in a star shape", "Only in the root hairs"],
    answer: "In the centre, in a star shape",
    explanation: "The xylem forms a star in the centre, with phloem between its arms.",
  },
  {
    prompt: "What is the job of root hairs?",
    options: ["To take in water and ions", "To make food by photosynthesis", "To carry sucrose upwards", "To store starch for winter"],
    answer: "To take in water and ions",
    explanation: "Root hairs increase the surface area for uptake.",
  },
  {
    prompt: "In a dicot stem, how are the vascular bundles arranged?",
    options: ["In the centre as a star", "Scattered all over the stem", "Only on the outside", "In a ring around the pith"],
    answer: "In a ring around the pith",
    explanation: "Each bundle has xylem inside and phloem outside.",
  },
  {
    prompt: "In a vascular bundle of a dicot stem, where is the phloem?",
    options: ["On the inside of the bundle", "On the outside of the bundle", "In the pith", "In the epidermis"],
    answer: "On the outside of the bundle",
    explanation: "Xylem is on the inside and phloem is on the outside.",
  },
  {
    prompt: "Which tissue carries water and minerals upwards?",
    options: ["Phloem", "Xylem", "Epidermis", "Cambium"],
    answer: "Xylem",
    explanation: "The xylem vessels are dead hollow tubes.",
  },
  {
    prompt: "Which tissue carries sucrose from the leaves to other parts?",
    options: ["Xylem", "Cortex", "Pith", "Phloem"],
    answer: "Phloem",
    explanation: "Phloem has living sieve tube cells with companion cells.",
  },
  {
    prompt: "Why is lignin in the walls of xylem vessels important?",
    options: ["It strengthens them against collapse", "It makes all of the cells alive again", "It makes the cells green in colour", "It makes sugar for the whole plant"],
    answer: "It strengthens them against collapse",
    explanation: "Lignin stops the vessels from collapsing.",
  },
  {
    prompt: "Which statement about mature xylem vessels is correct?",
    options: ["They are alive with a nucleus", "They are alive with chloroplasts", "They are dead and hollow", "They are filled with sap and cytoplasm"],
    answer: "They are dead and hollow",
    explanation: "The hollow tubes give a clear path for water.",
  },
  {
    prompt: "What keeps soft, young stems upright?",
    options: ["Dead xylem only", "The cuticle", "The root hairs", "Turgid parenchyma cells"],
    answer: "Turgid parenchyma cells",
    explanation: "Turgor pressure makes the cells press on each other.",
  },
  {
    prompt: "What is secondary growth?",
    options: ["Growth in height at the tip of a shoot", "A wider stem or root", "The growth of new leaves", "The growth of new seeds"],
    answer: "A wider stem or root",
    explanation: "The cambium divides to make new xylem and phloem.",
  },
  {
    prompt: "Which tissue divides to cause secondary growth?",
    options: ["The cambium", "The epidermis", "The pith", "The cuticle"],
    answer: "The cambium",
    explanation: "Cambium cells divide by mitosis.",
  },
  {
    prompt: "A tree trunk has 14 annual rings. How old is the tree?",
    options: ["7 years", "28 years", "14 years", "1 year"],
    answer: "14 years",
    explanation: "One ring forms each year.",
  },
  {
    prompt: "What does a very narrow annual ring suggest about that year?",
    options: ["It was an excellent year", "The tree was not alive", "It was a poor growing year", "The tree was moved"],
    answer: "It was a poor growing year",
    explanation: "A dry or cold year gives little new xylem.",
  },
  {
    prompt: "Annual ring widths in mm are 4,2; 3,8; 1,5; 4,0; 5,0; 2,0; 3,6; 4,4; 1,2 and 3,8. What is the mean width?",
    options: ["3,35 mm", "3,0 mm", "33,5 mm", "5,0 mm"],
    answer: "3,35 mm",
    explanation: "The total is 33,5 mm and 33,5 / 10 = 3,35 mm.",
  },
];

const PlantsRootStemSecondaryGrowth = () => (
  <CapsSubjectTopic
    title="Support and Transport in Plants 1: Dicot Root and Stem"
    subtitle="Where the tissues lie in a dicot root and stem, the cells of xylem and phloem, secondary growth and annual rings"
    learnSteps={learnSteps}
    task="gr10-plants-root-stem-secondary-growth-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default PlantsRootStemSecondaryGrowth;
