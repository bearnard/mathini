import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { coolerWithHeight, COOLING_PER_KM } from '../../../../../components/diagrams/geo8/grade8Geo';

// The cooling with height comes from grade8Geo (tested in grade8Geo.test.ts). The place descriptions are qualitative on purpose:
// exact rainfall and temperature figures belong to the weather service statistics, and none is given here (see docs/notes/g8-geography-doubts.md).
const rate = String(COOLING_PER_KM).replace('.', ',');
const sea = 24;
const high = coolerWithHeight(sea, 2000);
const c1 = coolerWithHeight(30, 1500);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Five factors that influence temperature and rainfall',
    content: slide(
      <>
        <Rule>Five factors explain the temperature and rainfall of a place: its distance from the equator (latitude), its distance from the sea, its height above sea level (altitude), the ocean currents near it, and the mountains around it (relief).</Rule>
        <FactCards
          cards={[
            { title: "Latitude", line1: "nearer the equator", line2: "is warmer" },
            { title: "The sea", line1: "coasts have milder", line2: "temperatures" },
            { title: "Altitude", line1: "higher places", line2: "are cooler" },
            { title: "Currents", line1: "warm or cold water", line2: "warms or cools a coast" },
          ]}
          aria={'Four factors. Latitude: places nearer the equator are warmer. The sea: coasts have milder temperatures. Altitude: higher places are cooler. Ocean currents: warm or cold water warms or cools a coast. The fifth factor, relief, is on the next slide.'}
        />
        <Worked
          title={`Air cools by about ${rate} °C for every 1 000 m of height (an average).`}
          steps={[
            `A place at sea level is ${sea} °C.`,
            `At 2 000 m the air is about 2 × ${rate} = ${2 * COOLING_PER_KM} °C cooler.`,
            `So the temperature at 2 000 m is about ${sea} − ${2 * COOLING_PER_KM} = ${String(high).replace('.', ',')} °C.`,
          ]}
        />
        <Mistake>Thinking that high places are warmer because they are closer to the Sun. The air thins with height and cools, so high places are cooler.</Mistake>
      </>,
    ),
  },
  {
    title: 'Currents and mountains in South Africa',
    content: slide(
      <>
        <Rule>The warm Agulhas Current flows down the east coast and brings warm, moist air and rain. The cold Benguela Current flows up the west coast, cools the air and helps keep the coast dry. Mountains make moist air rise and cool, so rain falls on the windward side, and the far side is dry (a rain shadow).</Rule>
        <FactCards
          cards={[
            { title: "East coast", line1: "the warm Agulhas", line2: "Current: warm, wet" },
            { title: "West coast", line1: "the cold Benguela", line2: "Current: cool, dry" },
            { title: "Windward", line1: "rain on the side", line2: "facing the wind" },
            { title: "Leeward", line1: "a dry rain shadow", line2: "on the far side" },
          ]}
          aria={'Currents and mountains. On the east coast the warm Agulhas Current makes the coast warm and wet. On the west coast the cold Benguela Current makes it cool and dry. Mountains give rain on the windward side and a dry rain shadow on the far side.'}
        />
        <Worked
          steps={[
            'Durban lies on the east coast beside the warm Agulhas Current, so it is warm and humid with summer rain.',
            'Port Nolloth lies on the west coast beside the cold Benguela Current, so it is cool and very dry.',
            'Both coasts are at similar distances from the sea, but the two currents give them very different climates.',
          ]}
        />
        <Mistake>Saying that the east and west coasts have the same climate. The warm and cold currents make them very different.</Mistake>
      </>,
    ),
  },
  {
    title: 'South African places and their climates',
    content: slide(
      <>
        <Rule>To explain the climate of a place, go through the five factors one at a time. For exact monthly figures use the climate statistics of a weather service, and also look at the figures for your own area.</Rule>
        <FactCards
          cards={[
            { title: "Cape Town", line1: "west coast: mild, with", line2: "most rain in winter" },
            { title: "Johannesburg", line1: "high inland: cooler,", line2: "summer thunderstorms" },
            { title: "Upington", line1: "far from the sea:", line2: "hot, with little rain" },
            { title: "Durban", line1: "east coast: warm,", line2: "humid, summer rain" },
          ]}
          aria={'Four places. Cape Town on the west coast is mild with most rain in winter. Johannesburg is high and inland, so it is cooler, with summer thunderstorms. Upington is far from the sea, so it is hot with little rain. Durban on the east coast is warm and humid with summer rain.'}
        />
        <Worked
          title="Use the factors for more places."
          steps={[
            'Port Nolloth: the cold Benguela Current makes it cool and dry. Beaufort West: in the dry Karoo, with little rain and big temperature changes.',
            'George: mountains and the ocean give rain throughout the year. Mbombela: in the lowveld, hot and humid, with summer rain.',
            'Mmabatho: inland, with hot summers and summer rain. Mthatha: on the east side, warm, with summer rain.',
          ]}
        />
        <Mistake>Giving numbers from memory. Take the rainfall and temperature figures from a weather service table, and say which months the figures are for.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          'Why is a high place cooler than a place at sea level?',
          'Which current cools the west coast of South Africa?',
          'Why is Johannesburg cooler than a town in the lowveld?',
          `The air is 30 °C at sea level. About how warm is it at 1 500 m, cooling ${rate} °C per 1 000 m?`,
        ]}
        answers={[
          'Air cools as you go higher.',
          'The cold Benguela Current.',
          'It lies at a high altitude.',
          `About ${String(c1).replace('.', ',')} °C: 30 − 1,5 × ${rate}.`,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which factor describes a place's distance from the equator?",
    options: ["Altitude", "Relief", "Latitude", "Ocean current"],
    answer: "Latitude",
    explanation: "Latitude is the distance north or south of the equator.",
  },
  {
    prompt: "Why is the air usually cooler on high mountains?",
    options: ["Air gets cooler with height", "Mountains are closer to the Sun", "Mountains are far from the equator", "Mountain air holds the day's heat"],
    answer: "Air gets cooler with height",
    explanation: "The air cools by about 6,5 °C for every 1 000 m.",
  },
  {
    prompt: "Sea level is 30 °C. About how warm is it at 1 000 m, cooling 6,5 °C per 1 000 m?",
    options: ["36,5 °C", "30 °C", "6,5 °C", "23,5 °C"],
    answer: "23,5 °C",
    explanation: "30 − 6,5 = 23,5 °C.",
  },
  {
    prompt: "How does the sea affect the climate of a coastal town?",
    options: ["It makes temperatures more extreme", "It makes temperatures milder", "It stops the rain", "It makes the days longer"],
    answer: "It makes temperatures milder",
    explanation: "Water warms and cools slowly, so coasts have milder temperatures.",
  },
  {
    prompt: "Which current flows along the east coast of South Africa?",
    options: ["The cold Benguela Current", "The cold Canary Current", "The warm Agulhas Current", "The Gulf Stream in the north"],
    answer: "The warm Agulhas Current",
    explanation: "The Agulhas Current is warm and flows down the east coast.",
  },
  {
    prompt: "Which current cools the west coast of South Africa?",
    options: ["The cold Benguela Current", "The warm Agulhas Current", "The warm Mozambique Current", "The Gulf Stream in the north"],
    answer: "The cold Benguela Current",
    explanation: "The cold Benguela Current flows up the west coast.",
  },
  {
    prompt: "Why is Port Nolloth cool and dry?",
    options: ["It lies far inland in the dry Karoo", "It is at a high altitude in the mountains", "The warm Agulhas Current flows past it", "A cold current flows by the west coast"],
    answer: "A cold current flows by the west coast",
    explanation: "The cold Benguela Current cools the air and keeps the coast dry.",
  },
  {
    prompt: "Which of these places is warm and humid with summer rain on the east coast?",
    options: ["Port Nolloth", "Durban", "Upington", "Cape Town"],
    answer: "Durban",
    explanation: "Durban lies beside the warm Agulhas Current.",
  },
  {
    prompt: "Why is a town on the high inland plateau cooler than a lowveld town at the same latitude?",
    options: ["It is on the coast", "It is close to the cold Benguela Current", "It lies at a high altitude", "It is nearer the pole"],
    answer: "It lies at a high altitude",
    explanation: "Height above sea level makes the air cooler.",
  },
  {
    prompt: "Which of these places has most of its rain in winter?",
    options: ["Cape Town", "Durban", "Johannesburg", "Mbombela"],
    answer: "Cape Town",
    explanation: "Cape Town has a winter rainfall.",
  },
  {
    prompt: "What is a rain shadow?",
    options: ["A wet area on the windward side of a mountain", "A cloud that blocks the Sun's heat in summer", "A shaded area where rain falls each month", "A dry area on the leeward side of a mountain"],
    answer: "A dry area on the leeward side of a mountain",
    explanation: "The air has lost its moisture by the time it crosses the mountains.",
  },
  {
    prompt: "Which of these places is dry and hot because it lies far from the sea?",
    options: ["Durban", "Upington", "George", "Port Nolloth"],
    answer: "Upington",
    explanation: "Upington is far inland, with hot summers and little rain.",
  },
  {
    prompt: "Which statement about George is correct?",
    options: ["It gets no rain in the winter months", "It is a hot desert with little rain", "It gets rain in all seasons", "It has a Mediterranean climate with dry summers"],
    answer: "It gets rain in all seasons",
    explanation: "Mountains and the ocean give George rain in all seasons.",
  },
  {
    prompt: "How do warm ocean currents affect a coast?",
    options: ["They warm the air and can bring rain", "They cool the air and make the coast dry", "They have no effect on the climate", "They make the sea level rise"],
    answer: "They warm the air and can bring rain",
    explanation: "Warm water warms the air above it and adds moisture.",
  },
];

const ClimateFactorsAndSaClimate = () => (
  <CapsSubjectTopic
    title="Climate Factors and South Africa's Climate"
    subtitle="Latitude, the sea, altitude, ocean currents and mountains, and some South African places"
    learnSteps={learnSteps}
    task="gr8-climate-factors-and-sa-climate-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default ClimateFactorsAndSaClimate;
