import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { FoodWeb } from '../../../../../components/diagrams/science/SciencePictures3';
import { loseAPredator } from '../../../../../components/diagrams/science/foodWeb';
import { DECAY_STEPS } from '../../../../../components/diagrams/science/steps';

// The food-web example comes from tested helpers (foodWeb.test.ts).
const freed = loseAPredator('snake');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Biotic and abiotic factors',
    content: slide(
      <>
        <Rule>
          An ecosystem has <strong>biotic</strong> factors, the living components, and <strong>abiotic</strong> factors, the non-living parts of the environment, such as sunlight and water.
        </Rule>
        <Compare
          left={{ title: 'Biotic (living)', tone: 'emerald', rows: ['plants and animals', 'fungi', 'micro-organisms such as bacteria'] }}
          right={{ title: 'Abiotic (non-living)', tone: 'sky', rows: ['sunlight', 'water', 'temperature, soil and air'] }}
        />
        <Worked
          title="Sort the parts of a pond"
          steps={[<>Fish, algae and bacteria are living: biotic.</>, <>Sunlight, water and temperature are not living: abiotic.</>, <>A healthy ecosystem needs both, linked together.</>]}
        />
        <Mistake>Thinking that abiotic means unimportant. Sunlight and water are non-living, but every ecosystem depends on them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Food webs and balance',
    content: slide(
      <>
        <Rule>A food web shows who eats whom. Predators help control prey numbers and keep the ecosystem in balance.</Rule>
        <FoodWeb />
        <Worked
          title="The snake is removed from the web"
          steps={[
            <>The snake ate the {freed.join(' and the ')}.</>,
            <>With no predator, the {freed.join(' and the ')} are eaten less, so some prey populations may increase too much.</>,
            <>They then eat more of the animals and plants below them, and the balance is lost.</>,
          ]}
        />
        <Mistake>Reading an arrow as &quot;eats&quot;. In a food web the arrow points to the eater and shows the way energy moves: grass → rabbit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Decomposers recycle nutrients',
    content: slide(
      <>
        <Rule>Decomposers break down dead material and recycle nutrients. Many fungi are decomposers in ecosystems, and so are many bacteria.</Rule>
        <NumberedSteps steps={DECAY_STEPS} tone="amber" label="How a dead leaf is recycled" />
        <Worked
          title="A fallen leaf"
          steps={[<>Fungi and bacteria feed on the dead leaf.</>, <>The leaf is broken down and its nutrients return to the soil.</>, <>Plants take up the nutrients, so the nutrient cycle continues.</>]}
        />
        <Mistake>Thinking decomposers are only a nuisance. Without them, dead material would pile up and the nutrients would stay locked in it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bacteria, fungi and viruses',
    content: slide(
      <>
        <Rule>Micro-organisms can be useful or harmful. Bacteria, fungi and viruses are three groups.</Rule>
        <Terms
          rows={[
            ['Bacteria', 'single cells. Useful: used to make yoghurt. Harmful: some cause disease.'],
            ['Fungi', 'many are decomposers. Useful: yeast makes bread rise. Harmful: some moulds spoil food.'],
            ['Viruses', 'not living cells: they cannot reproduce independently without a host cell.'],
          ]}
        />
        <Worked
          title="Yoghurt or flu?"
          steps={[<>Yoghurt is made with useful bacteria that ferment milk.</>, <>A flu virus can only copy itself inside the cells of a host.</>]}
        />
        <Mistake>Believing that all micro-organisms are harmful. Many bacteria and fungi are useful, and decomposers are essential.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conservation',
    content: slide(
      <>
        <Rule>Conservation protects habitats and biodiversity when human activities cause change.</Rule>
        <Worked
          title="Which action is conservation?"
          steps={[
            <>Protecting wetlands and limiting pollution keeps habitats and the food webs in them healthy: conservation.</>,
            <>Draining a wetland for building removes a habitat: not conservation.</>,
          ]}
        />
        <Mistake>Thinking conservation only means protecting big animals. Protecting habitats keeps the whole food web healthy.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which of these is an abiotic factor: sunlight or a frog? What are biotic factors?</li>
            <li>What do decomposers do? What is true about many fungi?</li>
            <li>Which group of organisms turns milk into yoghurt? Why is a virus not counted as a living cell?</li>
            <li>If a top predator is removed from a food web, what may happen? Give an example of conservation.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Sunlight. Biotic factors are the living components of an ecosystem.</li>
            <li>They break down dead material and recycle nutrients. Many fungi are decomposers in ecosystems.</li>
            <li>Bacteria. They cannot reproduce without a host cell.</li>
            <li>Some prey populations may increase too much. Protecting wetlands and limiting pollution.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which is an abiotic factor in an ecosystem?',
    options: ['Sunlight', 'Grass', 'Bird', 'Fungus'],
    answer: 'Sunlight',
    explanation: 'Abiotic factors are non-living parts of the environment, such as sunlight and water.',
  },
  {
    prompt: 'What is the role of decomposers in an ecosystem?',
    options: ['They break down dead material and recycle nutrients', 'They make food from sunlight in their leaves', 'They hunt the herbivores in the ecosystem', 'They remove all of the oxygen from the soil'],
    answer: 'They break down dead material and recycle nutrients',
    explanation: 'Decomposers return nutrients to the soil and support nutrient cycles.',
  },
  {
    prompt: 'Which group includes organisms often used to make yoghurt?',
    options: ['Bacteria', 'Viruses', 'Mammals', 'Insects'],
    answer: 'Bacteria',
    explanation: 'Useful bacteria are used in food production such as yoghurt fermentation.',
  },
  {
    prompt: 'Why are viruses usually not classified as living cells?',
    options: ['They cannot reproduce independently without a host cell', 'They make their own food using chlorophyll', 'They are made only of water', 'They have roots and stems'],
    answer: 'They cannot reproduce independently without a host cell',
    explanation: 'Viruses need a host cell to copy themselves.',
  },
  {
    prompt: 'If a top predator is removed from a food web, one likely result is...',
    options: ['Some prey populations may increase too much', 'All plants stop photosynthesis', 'Sunlight in the ecosystem disappears', 'All decomposers die immediately'],
    answer: 'Some prey populations may increase too much',
    explanation: 'Predators help control prey numbers and maintain ecosystem balance.',
  },
  {
    prompt: 'Which is the best example of conservation?',
    options: ['Protecting wetlands and limiting pollution', 'Cutting down all trees for farming', 'Removing all insects from an area', 'Burning grasslands every month'],
    answer: 'Protecting wetlands and limiting pollution',
    explanation: 'Conservation actions protect habitats and biodiversity.',
  },
  {
    prompt: 'Which statement about fungi is correct?',
    options: ['Many fungi are decomposers in ecosystems', 'All fungi make food by photosynthesis', 'Fungi are all harmful to humans', 'Fungi are a type of virus'],
    answer: 'Many fungi are decomposers in ecosystems',
    explanation: 'Fungi often break down dead matter and help nutrient recycling.',
  },
  {
    prompt: 'Biotic factors are...',
    options: ['living components of an ecosystem', 'temperature and rainfall only', 'non-living factors such as rocks', 'chemical formulas used in labs'],
    answer: 'living components of an ecosystem',
    explanation: 'Biotic factors include plants, animals, fungi, and micro-organisms.',
  },
];

const EcosystemsAndMicroOrganisms = () => (
  <CapsSubjectTopic
    title="Ecosystems and Micro-organisms"
    subtitle="Biotic and abiotic factors, food webs, microbes, and conservation"
    learnSteps={learnSteps}
    task="gr8-ecosystems-and-micro-organisms-t1"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default EcosystemsAndMicroOrganisms;
