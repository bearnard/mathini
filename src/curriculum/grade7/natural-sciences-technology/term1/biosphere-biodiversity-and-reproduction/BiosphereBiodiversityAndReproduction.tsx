import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare } from '../../../../../components/diagrams/science/ScienceBlocks';
import { FlowerParts, KeyTree } from '../../../../../components/diagrams/science/SciencePictures';

// Two places to compare for biodiversity. The count on the slide is the length of each list.
const poor = ['grass'];
const rich = ['reeds', 'frogs', 'fish', 'dragonflies', 'water birds', 'snails'];

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'The biosphere and biodiversity',
    content: slide(
      <>
        <Rule>
          The <strong>biosphere</strong> is all the living things on Earth and the places they live. <strong>Biodiversity</strong> is the variety of living organisms in an area.
        </Rule>
        <Worked
          title="Which area has more biodiversity?"
          steps={[
            <>Area A is a lawn with only {poor.join(', ')}: {poor.length} kind of living thing.</>,
            <>Area B is a wetland with {rich.join(', ')}: {rich.length} kinds of living things.</>,
            <>More different kinds means more biodiversity, so <strong>Area B</strong> has more.</>,
          ]}
        />
        <Mistake>
          Biodiversity is not the number of animals. A field with 1 000 ants of one kind has less biodiversity than a pond with six different kinds.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Classifying living things',
    content: slide(
      <>
        <Rule>
          Scientists classify organisms to group them by shared features and relationships. This helps us organise and study the great variety of life.
        </Rule>
        <KeyTree
          id="bk"
          question="Has a backbone?"
          yes={{ title: 'vertebrates', lines: ['fish, frogs, snakes', 'birds, mammals'], color: '#34d399' }}
          no={{ title: 'invertebrates', lines: ['insects, spiders', 'worms, snails'], color: '#fbbf24' }}
        />
        <Worked
          title="Classify a butterfly"
          steps={[<>Ask: does it have a backbone? A butterfly does not.</>, <>So it goes in the invertebrates, with other insects.</>, <>A dog has a backbone, so a dog is a vertebrate (and a mammal).</>]}
        />
        <Mistake>
          Grouping by which organisms matter most, or by size alone. We group by shared features, such as having a backbone.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Sexual and asexual reproduction',
    content: slide(
      <>
        <Rule>
          <strong>Sexual</strong> reproduction usually involves two parent organisms, so the offspring are different from both. <strong>Asexual</strong> reproduction needs one parent and the offspring are genetically identical to the parent.
        </Rule>
        <Compare
          left={{ title: 'Sexual', tone: 'sky', rows: ['two parents', 'offspring differ from each parent', 'examples: dogs, humans, plants that make seeds'] }}
          right={{ title: 'Asexual', tone: 'emerald', rows: ['one parent', 'offspring are identical to the parent (clones)', 'examples: bacteria splitting, strawberry runners'] }}
        />
        <Worked
          title="A strawberry plant sends out a runner"
          steps={[<>The runner grows roots and becomes a new plant.</>, <>Only one parent plant was needed.</>, <>The new plant is genetically identical to the parent: asexual reproduction.</>]}
        />
        <Mistake>Asexual does not mean no parent. It means one parent.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pollination and seed dispersal',
    content: slide(
      <>
        <Rule>
          <strong>Pollination</strong> is the transfer of pollen from the anther to the stigma. Later the seeds are <strong>dispersed</strong> (spread) away from the parent plant.
        </Rule>
        <FlowerParts />
        <Worked
          title="How do seeds travel?"
          steps={[
            <>Wind: lightweight seeds with wing-like structures or hairs are carried through the air.</>,
            <>Animals: hooks stick to fur, or animals eat the fruit and drop the seeds elsewhere.</>,
            <>Water: seeds that float are carried away on rivers and the sea.</>,
          ]}
        />
        <Mistake>
          Pollination and seed dispersal are different steps. Pollen is moved first. Seeds form later, and only then are they dispersed.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does biodiversity mean?</li>
            <li>What is the purpose of sorting organisms into groups such as plants and animals?</li>
            <li>Name one difference between sexual and asexual reproduction.</li>
            <li>Which seed is best for wind dispersal: a lightweight seed with wings, or a heavy seed with a thick shell?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The variety of living organisms in an area.</li>
            <li>To group them by shared features and relationships, so we can study them.</li>
            <li>Sexual: two parents and different offspring. Asexual: one parent and identical offspring.</li>
            <li>The lightweight seed with wing-like structures.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does biodiversity mean?',
    options: [
      'The variety of living organisms in an area',
      'Only the number of predators in a habitat',
      'The temperature of a habitat each day',
      'The amount of rainfall in one week',
    ],
    answer: 'The variety of living organisms in an area',
    explanation: 'Biodiversity describes how many different kinds of living things are present.',
  },
  {
    prompt: 'Why do scientists classify living organisms?',
    options: [
      'To group them by shared features and relationships',
      'To decide which organisms are more important',
      'To remove organisms from their habitats',
      'To measure only the size of organisms',
    ],
    answer: 'To group them by shared features and relationships',
    explanation: 'Classification helps us organise and study living things systematically.',
  },
  {
    prompt: 'Sexual reproduction usually involves...',
    options: ['two parent organisms', 'no parent organisms', 'only spores in water', 'only one identical clone'],
    answer: 'two parent organisms',
    explanation: 'In sexual reproduction, genetic information comes from two parents.',
  },
  {
    prompt: 'Asexual reproduction usually produces offspring that are...',
    options: ['genetically identical to the parent', 'always larger than the parent', 'completely unrelated to the parent', 'always produced by pollination'],
    answer: 'genetically identical to the parent',
    explanation: 'Asexual reproduction commonly makes clones with very similar genetic information.',
  },
  {
    prompt: 'What is pollination?',
    options: [
      'The transfer of pollen from anther to stigma',
      'The growth of roots through dry soil',
      'The movement of seeds by flowing water',
      'The breakdown of dead matter by fungi',
    ],
    answer: 'The transfer of pollen from anther to stigma',
    explanation: 'Pollination is a key step in sexual reproduction for flowering plants.',
  },
  {
    prompt: 'Which seed adaptation best supports wind dispersal?',
    options: ['Lightweight seeds with wing-like structures', 'Large heavy seeds with thick shells', 'Seeds that must be buried by mammals', 'Sticky seeds that only travel in water'],
    answer: 'Lightweight seeds with wing-like structures',
    explanation: 'Light seeds with wings or hairs are carried more easily by wind.',
  },
];

const BiosphereBiodiversityAndReproduction = () => (
  <CapsSubjectTopic
    title="Biosphere, Biodiversity and Reproduction"
    subtitle="Classification, habitats, and survival through reproduction"
    learnSteps={learnSteps}
    task="gr7-biosphere-biodiversity-and-reproduction-t1"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default BiosphereBiodiversityAndReproduction;
