import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Land use inside a town or city",
    content: slide(
      <>
        <Rule>{"Land use is what land is used for. In a town or city the main zones are the central business district (CBD), light and heavy industry, residential areas, shopping centres, services such as schools and hospitals, and recreation such as parks and sports fields. Each zone has its own characteristics."}</Rule>
        <FactCards
          cards={[
            { title: "CBD", line1: "offices, banks, shops,", line2: "taxi and bus ranks" },
            { title: "Industry", line1: "factories: light and", line2: "heavy, near roads or rail" },
            { title: "Services", line1: "schools, clinics,", line2: "hospitals, police" },
            { title: "Recreation", line1: "parks, sports fields,", line2: "open spaces" },
          ]}
          aria={"Land use in a town. The central business district has offices, banks, shops and taxi and bus ranks. Industry means factories, light and heavy, near roads or rail. Services are schools, clinics, hospitals and police. Recreation means parks, sports fields and open spaces."}
        />
        <Worked
          title={"Describe the zones"}
          steps={[
            "The CBD is the busiest part: tall buildings, many people and good transport links.",
            "Heavy industry makes more noise and pollution, so it is usually kept away from housing.",
            "Light industry, such as small workshops, is often closer to homes and shops.",
          ]}
        />
        <Mistake>{"Thinking that the CBD is always in the geographic centre. It is the commercial centre, where roads meet and many people come to work and shop."}</Mistake>
      </>,
    ),
  },
  {
    title: "Residential areas",
    content: slide(
      <>
        <Rule>{"Residential areas are where people live. High-income areas usually have large plots, gardens and large houses. Middle-income areas have medium plots and houses. Low-income areas often have small plots, more people per hectare and fewer services, and some are informal settlements made from scrap materials. Many of these patterns come from the history of planning, including apartheid, and the cost of land."}</Rule>
        <FactCards
          cards={[
            { title: "High-income", line1: "large plots, gardens,", line2: "large houses" },
            { title: "Middle-income", line1: "medium plots and", line2: "medium houses" },
            { title: "Low-income", line1: "small plots, many people,", line2: "fewer services" },
            { title: "Informal", line1: "houses of scrap,", line2: "often without services" },
          ]}
          aria={"Residential areas. High-income areas have large plots, gardens and large houses. Middle-income areas have medium plots and houses. Low-income areas have small plots, many people and fewer services. Informal settlements have houses of scrap materials, often without services."}
        />
        <Worked
          title={"Explain the pattern"}
          steps={[
            "Land close to the CBD and to jobs costs more, so high-income and middle-income groups often live where it is better served.",
            "Under apartheid, laws forced people to live in separate areas, and many low-income areas were placed far from jobs.",
            "Many African cities, not only South African ones, have informal settlements because housing is hard to afford.",
          ]}
        />
        <Mistake>{"Describing an informal settlement as a place without a community. People there build homes, businesses and neighbourhoods, and what they lack is mainly services and secure land."}</Mistake>
      </>,
    ),
  },
  {
    title: "Rural settlements and aerial photographs",
    content: slide(
      <>
        <Rule>{"Rural settlements depend on the land and on natural resources, and they can be based on farming, mining, forestry or fishing. Aerial photographs help us to study land use. A vertical photograph looks straight down and shows patterns, and an oblique photograph looks at an angle and shows height."}</Rule>
        <FactCards
          cards={[
            { title: "Farming", line1: "farms and villages", line2: "on crop or grazing land" },
            { title: "Mining", line1: "mine villages near", line2: "the mine" },
            { title: "Forestry", line1: "plantations and", line2: "timber villages" },
            { title: "Fishing", line1: "coastal villages", line2: "with harbours" },
          ]}
          aria={"Rural settlement types. Farming: farms and villages on crop or grazing land. Mining: mine villages near the mine. Forestry: plantations and timber villages. Fishing: coastal villages with harbours."}
        />
        <Worked
          title={"Read an aerial photograph"}
          steps={[
            "A vertical photograph shows the shape of fields, roads and buildings from above.",
            "An oblique photograph shows the height of buildings and hills, but the scale changes across the picture.",
            "Natural features include rivers and hills; constructed features include roads, buildings and dams.",
          ]}
        />
        <Mistake>{"Mixing up the two photographs. Vertical means looking straight down; oblique means looking at a slant."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "What is land use?",
          "Name two land-use zones of a town.",
          "Name one type of rural settlement.",
          "How is a vertical photograph different from an oblique one?",
        ]}
        answers={[
          "What a piece of land is used for.",
          "For example: the CBD and industry.",
          "For example: farming, mining, forestry or fishing.",
          "A vertical photograph looks straight down; an oblique one looks at an angle.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does the CBD stand for?",
    options: ["Central building design area", "City boundary district office", "Central business district", "Common business deal centre"],
    answer: "Central business district",
    explanation: "CBD stands for central business district.",
  },
  {
    prompt: "Which land use is found in a CBD?",
    options: ["Offices, banks and shops", "Farms, orchards and dams", "Harbours, nets and boats", "Pine plantations and sawmills"],
    answer: "Offices, banks and shops",
    explanation: "The CBD is the commercial centre of a town.",
  },
  {
    prompt: "Why is heavy industry usually kept away from housing?",
    options: ["It is shorter than most houses", "It uses no roads or railways", "It is quiet and very clean", "It makes noise and pollution"],
    answer: "It makes noise and pollution",
    explanation: "Heavy industry can cause noise and pollution.",
  },
  {
    prompt: "Which of these is a service?",
    options: ["A factory", "A clinic", "A farm", "A mine"],
    answer: "A clinic",
    explanation: "Schools and clinics are services.",
  },
  {
    prompt: "Which of these is a recreation land use?",
    options: ["A bank in the centre", "A factory on the edge", "A sports field", "A taxi rank by the road"],
    answer: "A sports field",
    explanation: "Parks and sports fields are used for recreation.",
  },
  {
    prompt: "What is typical of a high-income residential area?",
    options: ["Large plots with gardens", "Very small plots close together", "Houses without any services", "Rows of shacks near the road"],
    answer: "Large plots with gardens",
    explanation: "High-income areas usually have large plots.",
  },
  {
    prompt: "What is typical of a low-income residential area?",
    options: ["Very large gardens and lawns", "Few people in large houses", "Private golf courses on site", "Small plots, many people"],
    answer: "Small plots, many people",
    explanation: "Low-income areas are often crowded, with fewer services.",
  },
  {
    prompt: "Why were many low-income areas in South Africa placed far from jobs?",
    options: ["People chose to live far away", "Apartheid laws kept areas separate", "Jobs were moved to the farms", "Factories refused to employ anyone there"],
    answer: "Apartheid laws kept areas separate",
    explanation: "Apartheid planning separated people and often placed low-income areas far from work.",
  },
  {
    prompt: "What is an informal settlement?",
    options: ["A new town with many banks", "A forest plantation village", "Houses made of scrap materials", "A town centre with tall buildings"],
    answer: "Houses made of scrap materials",
    explanation: "Informal settlements are often built without planning and services.",
  },
  {
    prompt: "Which of these is a rural settlement based on mining?",
    options: ["A mine village near a mine", "A village by a harbour", "A farm with sheep", "A plantation of pine trees"],
    answer: "A mine village near a mine",
    explanation: "Mining settlements grow near the mine.",
  },
  {
    prompt: "Which of these is a rural settlement based on forestry?",
    options: ["A village beside a busy harbour", "A village near a gold mine", "A village on a wheat farm", "A village near tree plantations"],
    answer: "A village near tree plantations",
    explanation: "Forestry villages are near the plantations.",
  },
  {
    prompt: "Which rural settlement is usually near the coast with a harbour?",
    options: ["A mine village inland", "A fishing village", "A sheep farm on the veld", "A timber village in the hills"],
    answer: "A fishing village",
    explanation: "Fishing settlements are on the coast.",
  },
  {
    prompt: "Which photograph looks straight down at the ground?",
    options: ["An oblique aerial photograph", "A portrait photograph", "A vertical aerial photograph", "A satellite weather photograph"],
    answer: "A vertical aerial photograph",
    explanation: "A vertical photograph looks straight down.",
  },
  {
    prompt: "Which of these is a constructed feature on an aerial photograph?",
    options: ["A road", "A river", "A hill", "A forest"],
    answer: "A road",
    explanation: "Roads are made by people; rivers and hills are natural.",
  },
];

const LandUseUrbanAndRuralSettlements = () => (
  <CapsSubjectTopic
    title={"Land Use in Urban and Rural Settlements"}
    subtitle={"The zones of a town, high-, middle- and low-income housing, rural settlement types, and aerial photographs"}
    learnSteps={learnSteps}
    task={"gr8-land-use-urban-and-rural-settlements-t3"}
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default LandUseUrbanAndRuralSettlements;
