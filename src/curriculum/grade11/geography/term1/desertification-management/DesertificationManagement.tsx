import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import * as g from '../../../../../components/diagrams/geo11/geo11';
import { AtlasGrid, CoreRings, PairBars, RainBars, RostowSteps, SustainCircles, WeekGraph } from '../../../../../components/diagrams/geo11/Geo11Pictures';

// Every number comes from geo11.ts (tested in geo11.test.ts and g11GeoGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What is desertification and where does it happen?',
    content: slide(
      <>
        <Rule>Desertification is the spread of desert-like conditions into dry land that was once productive. It happens in dry areas such as the Sahel in Africa and parts of the Karoo, and it is caused by climate variation together with human use of the land. It is not the same thing as the natural spread of deserts caused by climate alone.</Rule>
        <FactCards
          cards={[
            { title: 'Where', line1: 'dry and semi-arid areas', line2: 'such as the Sahel' },
            { title: 'What', line1: 'productive land loses', line2: 'its plant cover' },
            { title: 'Scale', line1: 'regional and local', line2: 'areas at risk' },
            { title: 'Result', line1: 'bare, eroded soil that', line2: 'cannot grow crops' },
          ]}
          aria="Desertification. Where: dry and semi-arid areas such as the Sahel. What: productive land loses its plant cover. Scale: regional and local areas at risk. Result: bare, eroded soil that cannot grow crops."
        />
        <Worked
          title="Is this desertification?"
          steps={[
            'A grassy rangeland becomes bare sand after years of heavy grazing: desertification.',
            'The dry edge of a natural desert slowly moves because of a change in climate: a natural change.',
            'A flooded river valley after heavy rain: neither.',
          ]}
        />
        <Mistake>Believing that desertification only happens in the Sahara. It can happen wherever dry land is overused.</Mistake>
      </>,
    ),
  },
  {
    title: 'Causes and effects of desertification',
    content: slide(
      <>
        <Rule>The main causes are overgrazing, overcultivation, cutting trees for fuel, poor irrigation that leaves salt in the soil, and droughts that leave the ground bare. The effects are loss of topsoil, lower crop and grass yields, hunger, poverty and migration to towns, and loss of habitats and wildlife.</Rule>
        <PairBars title="Animals on a 400 ha farm" aLabel="carrying capacity" a={g.carryingCapacity()} bLabel="actual" b={g.FARM.animals} unit="animals" verdict={`${g.overstocked()} animals too many`} />
        <Worked
          title="Check for overgrazing"
          steps={[
            `Carrying capacity = ${g.FARM.hectares} ha ÷ ${g.FARM.hectaresPerAnimal} ha per animal = ${g.carryingCapacity()} animals.`,
            `The farmer keeps ${g.FARM.animals} animals, which is ${g.overstocked()} too many, or ${g.dec(g.overstockPercent())}% over the limit.`,
            'Too many animals eat the grass faster than it grows, so the soil is left bare and erodes.',
          ]}
        />
        <Mistake>Blaming only the weather. Heavy grazing and ploughing are the main human causes, and a drought makes the damage show sooner.</Mistake>
      </>,
    ),
  },
  {
    title: 'Management strategies and case studies',
    content: slide(
      <>
        <Rule>Desertification can be managed by controlling the number of animals, rotating grazing between camps, planting trees and grass to hold the soil, building terraces and small dams, using drip irrigation, and giving farmers alternative fuels and incomes. Case studies include the Great Green Wall planned across the Sahel and farmer-managed tree regrowth in Niger.</Rule>
        <FactCards
          cards={[
            { title: 'Livestock', line1: 'keep numbers within', line2: 'the carrying capacity' },
            { title: 'Cover', line1: 'plant trees and', line2: 'grass to bind soil' },
            { title: 'Water', line1: 'dams, terraces and', line2: 'drip irrigation' },
            { title: 'People', line1: 'training, fuel and', line2: 'other incomes' },
          ]}
          aria="Management strategies. Livestock: keep numbers within the carrying capacity. Cover: plant trees and grass to bind soil. Water: dams, terraces and drip irrigation. People: training, fuel and other incomes."
        />
        <Worked
          title="Apply a strategy"
          steps={[
            `The farm in this lesson carries ${g.carryingCapacity()} animals but has ${g.FARM.animals}.`,
            `The farmer sells ${g.overstocked()} animals to reach the carrying capacity.`,
            'He then rotates the animals between camps so that the grass can recover.',
          ]}
        />
        <Mistake>Looking for a single cure. The strategies work best together, and they need the people who live on the land to take part.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give one human cause of desertification.</>,
          <>A farm of {g.FARM.hectares} ha needs {g.FARM.hectaresPerAnimal} ha for each animal. How many animals can it carry?</>,
          <>It has {g.FARM.animals} animals. By how many is it overstocked?</>,
          <>Name one strategy that manages desertification.</>,
        ]}
        answers={[
          <>Overgrazing, overcultivation or cutting trees.</>,
          <>{g.carryingCapacity()} animals.</>,
          <>{g.overstocked()} animals.</>,
          <>Rotating grazing, planting trees or building terraces.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is desertification?",
    options: ["Desert land becoming a forest", "A short dry spell", "Productive dry land becoming desert-like", "Rain falling on a desert"],
    answer: "Productive dry land becoming desert-like",
    explanation: "It is the spread of desert-like conditions into productive land.",
  },
  {
    prompt: "Which region of Africa is well known for desertification?",
    options: ["The Sahel", "The Congo Basin", "The Nile Delta", "The Cape Peninsula"],
    answer: "The Sahel",
    explanation: "The Sahel is a semi-arid belt south of the Sahara.",
  },
  {
    prompt: "Which human activity is a main cause of desertification?",
    options: ["Planting trees", "Building terraces", "Rotating camps", "Overgrazing by livestock"],
    answer: "Overgrazing by livestock",
    explanation: "Too many animals strip the plant cover.",
  },
  {
    prompt: "Why does cutting trees for fuel lead to desertification?",
    options: ["The soil is held together", "The soil is left bare and erodes", "More rain falls", "The soil becomes richer"],
    answer: "The soil is left bare and erodes",
    explanation: "Trees protect the soil from wind and water.",
  },
  {
    prompt: "How can poor irrigation cause desertification?",
    options: ["It makes soil too wet to dig", "It can leave salt in the soil", "It adds forests to the land", "It adds organic matter"],
    answer: "It can leave salt in the soil",
    explanation: "Salt build-up makes the land unproductive.",
  },
  {
    prompt: "A farm of 400 ha needs 8 ha for each animal. How many animals can it carry?",
    options: ["32", "80", "3 200", "50"],
    answer: "50",
    explanation: "Carrying capacity is 400 ha ÷ 8 ha per animal, which is 50 animals.",
  },
  {
    prompt: "The 400 ha farm has 80 animals and a carrying capacity of 50. By how many is it overstocked?",
    options: ["30 animals", "50 animals", "80 animals", "130 animals"],
    answer: "30 animals",
    explanation: "The overstocking is 80 − 50 = 30 animals more than the land can carry.",
  },
  {
    prompt: "The farm has 30 animals too many and a carrying capacity of 50. By what percentage is it overstocked?",
    options: ["30%", "37,5%", "60%", "160%"],
    answer: "60%",
    explanation: "30 ÷ 50 × 100 = 60.",
  },
  {
    prompt: "Which is an effect of desertification on people?",
    options: ["Better harvests on dry land", "More jobs on the farms", "Cheaper food in the shops", "Hunger and migration to towns"],
    answer: "Hunger and migration to towns",
    explanation: "Land that cannot grow food drives people away.",
  },
  {
    prompt: "Which is an effect of desertification on the environment?",
    options: ["More grass cover on the land", "Loss of topsoil and habitats", "Richer soil on the slopes", "More wildlife in the area"],
    answer: "Loss of topsoil and habitats",
    explanation: "Bare land erodes and animals lose their homes.",
  },
  {
    prompt: "Which management strategy reduces overgrazing?",
    options: ["Rotating animals between camps", "Adding more animals to the camp", "Cutting more trees on the land", "Draining the dams on the farm"],
    answer: "Rotating animals between camps",
    explanation: "Rotation lets the grass recover.",
  },
  {
    prompt: "Which strategy helps to bind the soil?",
    options: ["Burning the veld", "Leaving the soil bare", "Planting trees and grass", "Ploughing steep slopes"],
    answer: "Planting trees and grass",
    explanation: "Roots hold the soil together.",
  },
  {
    prompt: "What is the Great Green Wall?",
    options: ["A wall of concrete in the Sahara", "A large dam in Egypt", "A planned belt of trees across the Sahel", "A wind farm in Kenya"],
    answer: "A planned belt of trees across the Sahel",
    explanation: "It aims to restore degraded land across the Sahel.",
  },
  {
    prompt: "Why do management strategies need local people to take part?",
    options: ["They live on and use the land", "They own all the rain", "They run the weather service", "They make the maps"],
    answer: "They live on and use the land",
    explanation: "Strategies work only if the land users accept and carry them out.",
  },
];

const DesertificationManagement = () => (
  <CapsSubjectTopic
    title="Desertification: Causes, Effects and Management"
    subtitle="Causes, effects, carrying capacity and management strategies with case studies"
    learnSteps={learnSteps}
    task="gr11-desertification-management-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default DesertificationManagement;
