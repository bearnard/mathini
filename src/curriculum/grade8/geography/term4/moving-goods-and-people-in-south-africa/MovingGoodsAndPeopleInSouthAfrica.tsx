import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Road and rail",
    content: slide(
      <>
        <Rule>{"Roads and railways carry goods and people across South Africa. Road transport is flexible and can go from door to door, but it is costly for long distances with heavy loads and causes congestion and pollution. Rail transport is cheap for heavy loads such as coal and ores over long distances, but its routes are fixed and goods usually need a road at each end."}</Rule>
        <FactCards
          cards={[
            { title: "Road", line1: "door to door,", line2: "flexible and quick" },
            { title: "Road problems", line1: "congestion, pollution,", line2: "road wear" },
            { title: "Rail", line1: "heavy loads over", line2: "long distances" },
            { title: "Rail problems", line1: "fixed routes and", line2: "needs road links" },
          ]}
          aria={"Road and rail. Road is flexible and goes door to door, but it causes congestion, pollution and wear on roads. Rail carries heavy loads over long distances cheaply, but its routes are fixed and it needs road links."}
        />
        <Worked
          title={"Choose the mode"}
          steps={[
            "A load of coal for a port a long way away suits rail, because it is heavy and the route is fixed.",
            "Fresh vegetables for a shop in the next town suit road, because the trip is short and the load must arrive quickly.",
            "Future networks should link road, rail, harbours and airports, be safe and reliable, and serve people at a price they can afford.",
          ]}
        />
        <Mistake>{"Saying that one mode is always better. Each mode suits different loads and distances, so good networks link them."}</Mistake>
      </>,
    ),
  },
  {
    title: "A harbour case study: Durban",
    content: slide(
      <>
        <Rule>{"Durban is a major South African harbour. It lies in a sheltered natural bay on the east coast, and it has road, rail and pipeline links to Gauteng. Ships bring containers, fuel, vehicles and machinery, and carry away goods such as manufactured products, sugar and citrus. Different ships do different work: container ships, tankers, bulk carriers, car carriers and passenger liners."}</Rule>
        <FactCards
          cards={[
            { title: "Location", line1: "a sheltered natural", line2: "bay on the east coast" },
            { title: "Links", line1: "road, rail and", line2: "pipeline to Gauteng" },
            { title: "Cargo", line1: "containers, fuel,", line2: "vehicles, sugar, citrus" },
            { title: "Ships", line1: "container ships, tankers,", line2: "bulk carriers, liners" },
          ]}
          aria={"The harbour of Durban. It has a sheltered natural bay on the east coast. It has road, rail and pipeline links to Gauteng. Cargo includes containers, fuel, vehicles, sugar and citrus. Ships include container ships, tankers, bulk carriers and passenger liners."}
        />
        <Worked
          title={"Explain the harbour"}
          steps={[
            "A sheltered bay protects ships from rough seas, which is one reason for the location.",
            "The links to Gauteng allow goods to move between the harbour and the inland cities.",
            "A tanker carries liquid cargo such as fuel; a bulk carrier carries loose cargo such as grain; a container ship carries goods in standard boxes.",
          ]}
        />
        <Mistake>{"Naming a ship type for the wrong cargo. A tanker carries liquids, not containers, and a passenger liner carries people."}</Mistake>
      </>,
    ),
  },
  {
    title: "People and transport in cities",
    content: slide(
      <>
        <Rule>{"In cities people travel by public transport, such as buses and trains, or by private transport, such as minibus taxis, cars and bicycles. Problems include the cost of travel, traffic congestion and pollution. Cities use public transit strategies such as bus rapid transport, subsidised public transport, bus and cycle lanes, park and ride and car-free zones."}</Rule>
        <FactCards
          cards={[
            { title: "Public", line1: "buses and trains", line2: "for many people" },
            { title: "Private", line1: "minibus taxis, cars", line2: "and bicycles" },
            { title: "Problems", line1: "cost, congestion", line2: "and pollution" },
            { title: "Strategies", line1: "bus lanes, park and", line2: "ride, car-free zones" },
          ]}
          aria={"Transport in cities. Public transport is buses and trains for many people. Private transport is minibus taxis, cars and bicycles. The problems are cost, congestion and pollution. Strategies include bus lanes, park and ride and car-free zones."}
        />
        <Worked
          title={"Match strategy and problem"}
          steps={[
            "Bus rapid transport uses special lanes so that buses avoid traffic. South African cities such as Johannesburg and Cape Town have such systems, and so have Bogotá in Colombia and Curitiba in Brazil.",
            "Park and ride lets people leave a car at the edge of the city and take a bus or train in, which reduces congestion.",
            "Car-free zones, such as the pedestrian streets in the centre of many European cities, reduce pollution and make walking safer.",
          ]}
        />
        <Mistake>{"Thinking that more roads solve congestion. Where people can choose public transport, bus lanes and park and ride often move more people."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "Give one advantage of road transport.",
          "Why do heavy goods over a long distance often go by rail?",
          "Name two kinds of specialised ship.",
          "What is park and ride?",
        ]}
        answers={[
          "It is flexible and goes from door to door.",
          "Rail carries heavy loads over long distances cheaply.",
          "For example: container ships and tankers.",
          "Leaving a car at the edge of a city and taking a bus or train in.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is an advantage of road transport?",
    options: ["It follows fixed tracks across the land", "It cannot carry people in cities", "It is flexible, door to door", "It does not cause any pollution"],
    answer: "It is flexible, door to door",
    explanation: "Roads can reach almost any place.",
  },
  {
    prompt: "What is a disadvantage of road transport for heavy loads over long distances?",
    options: ["It is costly and adds congestion", "It cannot reach any small town", "It runs during the night hours", "It is quieter than the railways today"],
    answer: "It is costly and adds congestion",
    explanation: "Trucks cost more per tonne than rail over long distances.",
  },
  {
    prompt: "What is an advantage of rail transport?",
    options: ["It goes to farm gates and homes", "It needs no roads at its ends", "It is quicker than a plane for short trips", "Cheap for heavy loads over distance"],
    answer: "Cheap for heavy loads over distance",
    explanation: "Rail suits coal and ores.",
  },
  {
    prompt: "What is a disadvantage of rail transport?",
    options: ["It cannot carry coal", "Its routes are fixed", "It makes more noise than a plane", "It uses no energy"],
    answer: "Its routes are fixed",
    explanation: "Trains can only go where the track goes.",
  },
  {
    prompt: "What should future transport networks do?",
    options: ["Replace trains with trucks in the country", "End travel between cities and towns", "Link road, rail, harbours and airports", "Close the harbours to reduce traffic"],
    answer: "Link road, rail, harbours and airports",
    explanation: "Good networks link the modes.",
  },
  {
    prompt: "Why is a natural bay a good place for a harbour?",
    options: ["It shelters ships from rough seas", "It makes the water too shallow for ships", "It lies far from the coast", "It is on a high mountain top"],
    answer: "It shelters ships from rough seas",
    explanation: "A sheltered bay protects ships.",
  },
  {
    prompt: "Which three kinds of link join the harbour to Gauteng?",
    options: ["A tunnel under the Indian Ocean", "Cable cars and canals", "Bridges over the sea", "Road, rail and pipeline"],
    answer: "Road, rail and pipeline",
    explanation: "Road, rail and a fuel pipeline link the harbour to Gauteng.",
  },
  {
    prompt: "Which ship carries liquid cargo such as fuel?",
    options: ["A container ship", "A tanker", "A passenger liner", "A bulk carrier of grain"],
    answer: "A tanker",
    explanation: "A tanker carries liquids.",
  },
  {
    prompt: "Which ship carries goods in standard boxes?",
    options: ["A tanker", "A passenger liner", "A container ship", "A fishing boat"],
    answer: "A container ship",
    explanation: "A container ship carries containers.",
  },
  {
    prompt: "Which ship carries loose cargo such as grain or coal?",
    options: ["A bulk carrier", "A tanker", "A passenger liner", "A container ship"],
    answer: "A bulk carrier",
    explanation: "A bulk carrier carries loose cargo.",
  },
  {
    prompt: "Which of these is a form of private transport in a city?",
    options: ["A city train", "A municipal bus", "A tram", "A minibus taxi"],
    answer: "A minibus taxi",
    explanation: "Minibus taxis, cars and bicycles are private transport.",
  },
  {
    prompt: "Which of these is a problem of transport in cities?",
    options: ["Too few cars", "Traffic congestion", "Roads without traffic", "Quiet streets"],
    answer: "Traffic congestion",
    explanation: "Congestion slows travel and adds to pollution.",
  },
  {
    prompt: "What does a park and ride system do?",
    options: ["Ban cars from the country's main roads", "Build parks next to the main roads", "Leave a car at the city edge, take a bus", "Rent bicycles to visitors at the airport"],
    answer: "Leave a car at the city edge, take a bus",
    explanation: "It reduces cars in the city centre.",
  },
  {
    prompt: "What is a car-free zone?",
    options: ["Part of a city closed to cars", "A road with no signs or lights", "A garage that has no cars", "A park without trees or paths"],
    answer: "Part of a city closed to cars",
    explanation: "Car-free zones are made for people on foot and bicycles.",
  },
];

const MovingGoodsAndPeopleInSouthAfrica = () => (
  <CapsSubjectTopic
    title={"Moving Goods and People in South Africa"}
    subtitle={"Road and rail, a harbour case study, and public transport in cities"}
    learnSteps={learnSteps}
    task={"gr8-moving-goods-and-people-in-south-africa-t4"}
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default MovingGoodsAndPeopleInSouthAfrica;
