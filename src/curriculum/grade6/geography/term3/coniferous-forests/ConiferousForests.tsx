import GeoTopic from '../../_shared/GeoTopic';
import type { GeoItem, LearnStep } from '../../_shared/types';

import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CardList } from '../../../../../components/diagrams/g6nst/G6Nst';
import { ClimatePanel, LatitudeBands } from '../../../../../components/diagrams/g6geo/G6Geo';
import { RAIN_MM, TEMP_C, annualRange, monthOfMax, monthOfMin, monthsBelowZero, total } from '../../../../../components/diagrams/g6geo/g6geoHelpers';

// Every number below comes from g6geoHelpers.ts (tested in g6geoHelpers.test.ts and g6GeoAtlasConifer.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Where coniferous forests are',
    content: slide(
      <>
        <Rule>Coniferous forests grow in a wide belt in the Northern Hemisphere, north of the temperate regions. The belt crosses Canada, Scandinavia and Russia.</Rule>
        <LatitudeBands />
        <Worked
          title="Find the belt"
          steps={[
            'Coniferous forests are far from the Equator, roughly between 50°N and 65°N.',
            'They are in the Northern Hemisphere, so South Africa has no natural coniferous forests.',
            'On a map, look for the large green belt across the north of Canada and Russia and over Scandinavia.',
          ]}
        />
        <Mistake>Thinking that coniferous forests grow near the Equator. They grow far to the north, where it is cold.</Mistake>
      </>,
    ),
  },
  {
    title: 'The climate',
    content: slide(
      <>
        <Rule>Coniferous forests have long, very cold winters and short, mild summers. There is rain or snow in every month.</Rule>
        <ClimatePanel />
        <Worked
          title="Read the example climate graph"
          steps={[
            `The warmest month is ${monthOfMax(TEMP_C)} at ${Math.max(...TEMP_C)}°C and the coldest is ${monthOfMin(TEMP_C)} at ${Math.min(...TEMP_C)}°C.`,
            `The difference is ${Math.max(...TEMP_C)} − (−${Math.abs(Math.min(...TEMP_C))}) = ${annualRange(TEMP_C)}°C. In ${monthsBelowZero(TEMP_C)} months the temperature is below 0°C.`,
            `Add the months: the rain or melted snow adds up to ${total(RAIN_MM)} mm a year, with the most in ${monthOfMax(RAIN_MM)}.`,
          ]}
        />
        <Mistake>Thinking that it is always cold and dry. The summers are short but mild, and there is rain or snow all year.</Mistake>
      </>,
    ),
  },
  {
    title: 'Plants and animals',
    content: slide(
      <>
        <Rule>Most trees in a coniferous forest are conifers, such as pine, spruce and fir. They are evergreen and have needle-shaped leaves and cones.</Rule>
        <CardList
          cards={[
            { title: 'Trees', line1: 'pine, spruce and fir:', line2: 'needles and cones' },
            { title: 'Why needles', line1: 'thin leaves and a', line2: 'sloping shape shed snow' },
            { title: 'Animals', line1: 'wolves, brown bears,', line2: 'moose, lynx and owls' },
          ]}
          aria="Plants and animals of coniferous forests. Trees are pine, spruce and fir, with needles and cones. Needle leaves and a sloping shape shed snow. Animals include wolves, brown bears, moose, lynx and owls."
        />
        <Worked
          title="How the trees suit the cold"
          steps={[
            'Needle-shaped leaves lose little water in the cold winter.',
            'The sloping branches let heavy snow slide off, so they do not break.',
            'The trees are evergreen, so they can make food as soon as the weather is warm enough.',
          ]}
        />
        <Mistake>Thinking that all trees lose their leaves in winter. Conifers keep their needles all year.</Mistake>
      </>,
    ),
  },
  {
    title: 'How people make a living',
    content: slide(
      <>
        <Rule>People who live in coniferous forests make a living in ways that are linked to the environment: the forest gives wood, animals and minerals, and the snow gives winter fun.</Rule>
        <CardList
          cards={[
            { title: 'Logging', line1: 'cutting trees for', line2: 'timber and paper' },
            { title: 'Hunting and herding', line1: 'trapping animals or', line2: 'herding reindeer' },
            { title: 'Mining and tourism', line1: 'minerals under the forest;', line2: 'skiing and snow visitors' },
          ]}
          aria="Ways people make a living in coniferous forests. Logging, cutting trees for timber and paper. Hunting and herding, trapping animals or herding reindeer. Mining and tourism, getting minerals from under the forest, and visitors who come for skiing and snow."
        />
        <Worked
          title="Link the activity to the environment"
          steps={[
            'Many trees: so logging, for timber and paper.',
            'Cold winters and deep snow: so skiing and other winter tourism.',
            'Forests need care: cut trees should be replaced by planting new ones.',
          ]}
        />
        <Mistake>Forgetting the effect on the forest. If too many trees are cut and not replaced, the forest and its animals suffer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In which hemisphere are coniferous forests found?</>,
          <>What do the leaves of a conifer look like?</>,
          <>Name one way that people make a living in a coniferous forest.</>,
          <>In the example graph, the warmest month is 18°C and the coldest is −12°C. What is the difference?</>,
        ]}
        answers={[
          <>The Northern Hemisphere.</>,
          <>They are thin and shaped like needles.</>,
          <>Logging, hunting or herding, mining or tourism.</>,
          <>18 − (−12) = {annualRange(TEMP_C)}°C.</>,
        ]}
      />,
    ),
  },
];

export const bank: GeoItem[] = [
  {
    prompt: "Coniferous forests grow in which half of the Earth?",
    options: ["The southern half, the Southern Hemisphere", "Only on the Equator", "The northern half, the Northern Hemisphere", "Only at the South Pole"],
    answer: "The northern half, the Northern Hemisphere",
    explanation: "Coniferous forests grow in a wide belt in the Northern Hemisphere, across Canada, Scandinavia and Russia.",
  },
  {
    prompt: "Which of these countries has a large area of coniferous forest?",
    options: ["Canada", "Egypt", "Botswana", "Namibia"],
    answer: "Canada",
    explanation: "Canada and Russia both have huge coniferous forests. Egypt, Botswana and Namibia are far to the south or dry.",
  },
  {
    prompt: "Which describes the climate of a coniferous forest?",
    options: ["Hot and wet all year", "Hot and very dry all year", "Mild with no change in the seasons", "Long, very cold winters and short, mild summers"],
    answer: "Long, very cold winters and short, mild summers",
    explanation: "Coniferous forests have long cold winters and short mild summers, with rain or snow in every month.",
  },
  {
    prompt: "On a climate graph for a coniferous forest the warmest month is 18°C and the coldest is −12°C. What is the difference between them?",
    options: ["6°C", "30°C", "18°C", "12°C"],
    answer: "30°C",
    explanation: "18 − (−12) = 18 + 12 = 30°C.",
  },
  {
    prompt: "In the example climate graph, in which month is the temperature the highest?",
    options: ["January", "July", "April", "October"],
    answer: "July",
    explanation: "In the Northern Hemisphere, July is the warmest month.",
  },
  {
    prompt: "Which of these trees is a conifer?",
    options: ["Oak", "Baobab", "Acacia", "Pine"],
    answer: "Pine",
    explanation: "Pine, spruce and fir are conifers: they have needles and cones.",
  },
  {
    prompt: "What are the leaves of a conifer shaped like?",
    options: ["Needles", "Broad flat sheets", "Round balls", "Feathers"],
    answer: "Needles",
    explanation: "Conifers have needle-shaped leaves, which suit the cold and the snow.",
  },
  {
    prompt: "Why is the sloping shape of a conifer useful in winter?",
    options: ["It collects as much snow as possible", "It keeps the tree warm in the sun", "Heavy snow can slide off its branches", "It makes the tree grow in the dark"],
    answer: "Heavy snow can slide off its branches",
    explanation: "Snow slides off sloping branches, so they do not break under the weight.",
  },
  {
    prompt: "Which of these animals lives in a coniferous forest?",
    options: ["A lion", "A camel", "A hippo", "A brown bear"],
    answer: "A brown bear",
    explanation: "Brown bears, wolves, moose, lynx and owls live in coniferous forests. Lions, camels and hippos live in warmer places.",
  },
  {
    prompt: "Which activity is a way of making a living in a coniferous forest?",
    options: ["Growing bananas on the trees", "Logging, to get timber and paper", "Pearl diving in the forest", "Mining salt from the sea"],
    answer: "Logging, to get timber and paper",
    explanation: "There are many trees, so people cut them for timber and to make paper.",
  },
  {
    prompt: "Why do many people visit coniferous forest areas in winter?",
    options: ["There is snow for skiing and winter sports", "It is the warmest time of the year", "The trees grow flowers then", "There are no animals about"],
    answer: "There is snow for skiing and winter sports",
    explanation: "Deep snow in the cold winter makes tourism such as skiing possible. This links the environment to how people make a living.",
  },
  {
    prompt: "What should be done when trees are cut in a coniferous forest?",
    options: ["The land should be left bare for ever", "More trees should be cut at once", "New trees should be planted to replace them", "The animals should be moved to Africa"],
    answer: "New trees should be planted to replace them",
    explanation: "If cut trees are not replaced, the forest and the animals that live in it suffer.",
  },
];

const ConiferousForests = () => (
  <GeoTopic
    title="Coniferous Forests"
    subtitle="Where they are, the climate, plants and animals, and how people live"
    learnSteps={learnSteps}
    task="gr6-coniferous-forests-t3"
    bank={bank}
  />
);

export default ConiferousForests;
