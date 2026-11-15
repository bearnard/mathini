import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { ProtectionLayers } from '../../../../../components/diagrams/science/SciencePictures6';
import { ElectroplatingCell } from '../../../../../components/diagrams/science/SciencePictures8';
import { PLASTIC_STEPS } from '../../../../../components/diagrams/science/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Corrosion and galvanising',
    content: slide(
      <>
        <Rule>
          Corrosion is the chemical wearing away of metals by oxygen and moisture. Galvanising protects metal: a zinc coat keeps oxygen and moisture away from the metal.
        </Rule>
        <ProtectionLayers />
        <Worked
          title="Why does a galvanised roof last?"
          steps={[<>Rust (iron oxide) is the most common corrosion problem. It damages structures and equipment.</>, <>The zinc coat keeps oxygen and moisture off the steel.</>, <>Galvanised coatings are sacrificial: the zinc protects the steel underneath even if the coating is scratched.</>]}
        />
        <Mistake>Thinking galvanising is a kind of paint. It is a coating of zinc, bonded to the steel.</Mistake>
      </>,
    ),
  },
  {
    title: 'Electroplating',
    content: slide(
      <>
        <Rule>
          Electroplating uses an electric current to put a thin metal coat on a surface. It makes precise, uniform coatings for corrosion protection and decoration.
        </Rule>
        <ElectroplatingCell />
        <Worked
          title="Chrome-plate a tap"
          steps={[<>Hang the tap in a solution of the coating metal and connect it to the negative terminal of a cell. A bar of the coating metal goes to the positive terminal.</>, <>The electric current makes a thin layer of the metal build up on the tap.</>, <>The coat protects against corrosion and gives a shiny appearance.</>]}
        />
        <Mistake>Thinking electroplating needs no electricity. The current is what moves the coating metal onto the object.</Mistake>
      </>,
    ),
  },
  {
    title: 'Preserving food',
    content: slide(
      <>
        <Rule>
          Food preservation makes food last longer, keeps its goodness and stops it going off. Common methods are freezing, canning, drying, salting and smoking.
        </Rule>
        <Terms
          rows={[
            ['Freezing', 'lowers the temperature so microbes cannot grow'],
            ['Canning', 'heats the food to kill microbes, then seals it so new ones cannot get in'],
            ['Drying', 'removes water'],
            ['Salting', 'draws out water'],
            ['Smoking', 'treats the food so that microbes cannot grow'],
          ]}
        />
        <Worked
          title="Choose a method"
          steps={[<>Meat to keep for weeks without a fridge: drying, salting or smoking, as in biltong.</>, <>Fruit to keep for a year in a jar: canning.</>, <>These methods stop food spoiling by removing water, lowering the temperature, or heating and sealing the food so that microbes cannot grow.</>]}
        />
        <Mistake>Thinking preservation only means keeping food cold. Several methods work by removing water or sealing out microbes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Plastics and the environment',
    content: slide(
      <>
        <Rule>
          Plastic processing changes raw plastic into products by melting, moulding and shaping. Recycling cuts waste and saves resources, so it harms the environment less.
        </Rule>
        <NumberedSteps steps={PLASTIC_STEPS} tone="teal" label="From raw plastic to product to recycling" />
        <Worked
          title="Weigh up a processing choice"
          steps={[<>Injection moulding, extrusion and thermoforming are common plastic processing techniques.</>, <>Recycling addresses pollution and resource scarcity while creating secondary materials.</>, <>Energy use, emissions, waste and material choice all matter when you choose a process.</>]}
        />
        <Mistake>Looking only at cost. Responsible material and processing choices keep the environmental footprint small.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is corrosion? How does galvanising protect metal?</li>
            <li>What is electroplating? Why is food preservation important?</li>
            <li>Name some ways of keeping food from spoiling. What is plastic processing?</li>
            <li>Why should plastic be recycled? In what ways can the way we process materials affect the environment?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The chemical wearing away of metals by oxygen and moisture. A zinc coat keeps oxygen and moisture away from the metal.</li>
            <li>Using an electric current to put a thin metal coat on a surface. To make food last longer, keep its goodness, and stop it going off.</li>
            <li>Freezing, canning, drying, salting and smoking. Changing raw plastic into products by melting, moulding and shaping.</li>
            <li>Recycling cuts waste and saves resources, so it harms the environment less. Energy use, emissions, waste and material choice all matter.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is corrosion?',
    options: ['the chemical wearing away of metals by oxygen and moisture', 'the wearing away of a metal by rubbing against another', 'the stretching of a metal when it is pulled too hard', 'the melting of a metal when it gets too hot'],
    answer: 'the chemical wearing away of metals by oxygen and moisture',
    explanation: 'Rust (iron oxide) is the most common corrosion problem, damaging structures and equipment.',
  },
  {
    prompt: 'How does galvanising protect metal?',
    options: ['a zinc coat keeps oxygen and moisture away from the metal', 'a plastic coat keeps the metal from getting hot', 'a zinc coat makes the metal stronger inside', 'a paint coat makes the zinc harder to scratch'],
    answer: 'a zinc coat keeps oxygen and moisture away from the metal',
    explanation: 'Galvanised coatings are sacrificial, protecting the underlying metal even if the coating is scratched.',
  },
  {
    prompt: 'What is electroplating?',
    options: ['using an electric current to put a thin metal coat on a surface', 'using heat to melt a thick metal coat onto a surface', 'using a brush to paint a metal-coloured coat on a surface', 'using a magnet to pull a metal coat onto a surface'],
    answer: 'using an electric current to put a thin metal coat on a surface',
    explanation: 'Electroplating creates precise, uniform coatings for corrosion protection and decoration.',
  },
  {
    prompt: 'Why is food preservation important?',
    options: ['to make food last longer, keep its goodness, and stop it going off', 'to make all foods taste the same as fresh food does', 'to make food heavier so it can be sold for more', 'to stop food from ever needing to be cooked'],
    answer: 'to make food last longer, keep its goodness, and stop it going off',
    explanation: 'Preservation methods allow food to be stored safely for longer periods.',
  },
  {
    prompt: 'What are common food preservation methods?',
    options: ['freezing, canning, drying, salting and smoking', 'boiling, baking, frying, mixing and grating', 'chopping, peeling, blending, mashing and slicing', 'sweetening, colouring, flavouring, whipping and rolling'],
    answer: 'freezing, canning, drying, salting and smoking',
    explanation: 'These methods stop food spoiling by removing water, lowering the temperature, or sealing and treating the food so that microbes cannot grow.',
  },
  {
    prompt: 'What is plastic processing?',
    options: ['changing raw plastic into products by melting, moulding and shaping', 'changing oil into plastic by growing it in a field', 'changing plastic into metal by heating and cooling it', 'changing plastic products into raw plastic by crushing them'],
    answer: 'changing raw plastic into products by melting, moulding and shaping',
    explanation: 'Injection moulding, extrusion, and thermoforming are common plastic processing techniques.',
  },
  {
    prompt: 'Why is recycling important for plastic materials?',
    options: ['recycling cuts waste and saves resources, so it harms the environment less', 'recycling creates more waste because plastic is cleaned', 'recycling is only worth doing for large factories', 'recycling stops plastic from ever being made again'],
    answer: 'recycling cuts waste and saves resources, so it harms the environment less',
    explanation: 'Plastic recycling addresses pollution and resource scarcity while creating secondary materials.',
  },
  {
    prompt: 'How do processing choices affect the environment?',
    options: ['energy use, emissions, waste and material choice all matter', 'only the colour of the finished product matters to nature', 'only the price of the finished product matters to nature', 'only the shop where it is sold matters to nature'],
    answer: 'energy use, emissions, waste and material choice all matter',
    explanation: 'Responsible material and processing selection minimizes environmental footprint.',
  },
];

const ProcessingMaterials = () => (
  <CapsSubjectTopic
    title="Processing of Metals, Food and Plastics"
    subtitle="Corrosion prevention, galvanising, electroplating, food preservation, plastics, recycling, processing choices"
    learnSteps={learnSteps}
    task="gr9-processing-materials-t4"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ProcessingMaterials;
