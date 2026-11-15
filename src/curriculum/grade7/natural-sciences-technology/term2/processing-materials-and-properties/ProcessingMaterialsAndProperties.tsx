import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { PAPER_STEPS } from '../../../../../components/diagrams/science/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Natural and processed materials',
    content: slide(
      <>
        <Rule>
          <strong>Natural</strong> materials come from plants, animals or the ground, such as wood, cotton and clay. <strong>Processed</strong> materials have been changed into useful manufactured products.
        </Rule>
        <NumberedSteps steps={PAPER_STEPS} tone="amber" label="From wood to paper" />
        <Worked
          title="Is it natural or processed?"
          steps={[
            <>Wood comes straight from trees: natural.</>,
            <>Paper made from wood pulp has been changed in a factory: processed.</>,
            <>Processing changes raw materials into products that are more useful.</>,
          ]}
        />
        <Mistake>Thinking that processed means unnatural. Paper starts as wood, a natural material, and is processed from it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Properties of materials',
    content: slide(
      <>
        <Rule>A <strong>property</strong> describes how a material behaves. We choose a material by looking at the properties the job needs.</Rule>
        <Terms
          rows={[
            ['Hardness', 'resists scratching and wear'],
            ['Flexibility', 'can bend without breaking easily'],
            ['Durability', 'lasts a long time in use'],
            ['Heat conduction', 'how easily heat passes through it'],
          ]}
        />
        <Worked
          title="Which property for the edge of a metal ruler?"
          steps={[<>The edge is rubbed by pencils and paper all the time.</>, <>A hard edge resists wear and scratching.</>, <>So hardness is the most important property, and the ruler stays straight and accurate.</>]}
        />
        <Mistake>Thinking flexible means weak. A flexible material bends without breaking easily, which is useful for a ruler of plastic or a fishing rod.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choosing a material for a purpose',
    content: slide(
      <>
        <Rule>Match the property to the job. One product can need different materials in different parts.</Rule>
        <Worked
          title="A cooking pot"
          steps={[
            <>The body of the pot must pass heat to the food, so it is made of metal, a good heat conductor.</>,
            <>The handle must not pass heat to your hand. Plastic or wood handles are used because they are poorer heat conductors.</>,
            <>So the pot uses two materials, each chosen for its property.</>,
          ]}
        />
        <Mistake>Using one material for the whole product. A metal handle would burn your hand.</Mistake>
      </>,
    ),
  },
  {
    title: 'Shaping and joining safely',
    content: slide(
      <>
        <Rule>Materials are shaped and joined with the right tool or adhesive, and with safe habits.</Rule>
        <Worked
          title="Join two pieces of wood for a model"
          steps={[
            <>Wood glue is a common joining method for wood in simple models.</>,
            <>Spread the glue, press the pieces together and hold them until the glue sets.</>,
            <>Wear safety goggles when cutting or sanding, and tie back long hair.</>,
          ]}
        />
        <Mistake>Rushing the glue. The joint is only strong once the adhesive has set.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sustainable choices',
    content: slide(
      <>
        <Rule>A sustainable choice means using resources responsibly and reducing waste, so there is enough for the future.</Rule>
        <Worked
          title="A model made from waste"
          steps={[<>Use off-cuts and old boxes instead of new material.</>, <>Reuse what you can, and recycle what is left.</>, <>This reduces waste and uses fewer new resources.</>]}
        />
        <Mistake>Thinking sustainability only means recycling. It also means using less and choosing materials that last.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Give an example of a processed material.</li>
            <li>Which property matters most for the edge of a metal ruler?</li>
            <li>Why do cooking pots have plastic or wooden handles?</li>
            <li>What does flexibility mean? What does a sustainable choice mean?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Paper made from wood pulp.</li>
            <li>Hardness.</li>
            <li>They are poorer heat conductors.</li>
            <li>It can bend without breaking easily. Using resources responsibly and reducing waste.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which is a processed material?',
    options: ['Paper made from wood pulp', 'A raw tree trunk', 'Unprocessed cotton in a field', 'Natural river sand only'],
    answer: 'Paper made from wood pulp',
    explanation: 'Processing changes raw materials into useful manufactured products.',
  },
  {
    prompt: 'Which property is most important for a metal ruler edge?',
    options: ['Hardness', 'Sweetness', 'Transparency only', 'Low mass only'],
    answer: 'Hardness',
    explanation: 'A hard edge resists wear and scratching, so the ruler stays straight and accurate during use.',
  },
  {
    prompt: 'Why are plastic or wooden handles used on cooking pots?',
    options: ['They are poorer heat conductors', 'They are stronger than all metals', 'They dissolve in hot water', 'They increase electrical current'],
    answer: 'They are poorer heat conductors',
    explanation: 'Insulating handles reduce heat transfer to the hand.',
  },
  {
    prompt: 'What does flexibility mean for a material?',
    options: ['It can bend without breaking easily', 'It must always be transparent', 'It attracts iron strongly', 'It can only be used once'],
    answer: 'It can bend without breaking easily',
    explanation: 'Flexible materials change shape more easily without snapping.',
  },
  {
    prompt: 'Which joining method is commonly used for wood in simple models?',
    options: ['Wood glue', 'Condensation', 'Evaporation', 'Magnetic repulsion only'],
    answer: 'Wood glue',
    explanation: 'Adhesives such as wood glue create stable joints in wooden models.',
  },
  {
    prompt: 'A sustainable material choice usually means...',
    options: ['using resources responsibly and reducing waste', 'always choosing the heaviest material', 'discarding usable off-cuts', 'avoiding maintenance and repairs'],
    answer: 'using resources responsibly and reducing waste',
    explanation: 'Sustainability focuses on wise resource use and lower environmental impact.',
  },
];

const ProcessingMaterialsAndProperties = () => (
  <CapsSubjectTopic
    title="Processing Materials and Properties"
    subtitle="Selecting, shaping, and joining materials safely and sustainably"
    learnSteps={learnSteps}
    task="gr7-processing-materials-and-properties-t2"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default ProcessingMaterialsAndProperties;
