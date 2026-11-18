import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { ClimateGraph, LatitudeBands } from '../../../../../components/diagrams/geo8/Geo8Pictures';
import { EXAMPLES, summary } from '../../../../../components/diagrams/geo8/grade8Geo';

// The example graphs are invented values for a kind of climate (not measurements for a real place). Every reading below
// comes from summary() in grade8Geo (tested by hand in grade8Geo.test.ts); g8GeographyC.test.ts checks the rendered text.
const a = summary(EXAMPLES.mediterranean);
const b = summary(EXAMPLES.tropical);
const c = summary(EXAMPLES.desert);
const mm = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0')} mm`;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Weather, climate and the kinds of climate',
    content: slide(
      <>
        <Rule>Weather is the state of the air at a place over a short time, such as today or this week. Climate is the average weather of a place over many years. The elements of weather are temperature, humidity, winds and precipitation. Geographers group climates into kinds: tropical, subtropical, temperate, desert, semi-desert, continental, polar, Mediterranean, tundra and high mountain (alpine).</Rule>
        <FactCards
          cards={[
            { title: "Weather", line1: "short term:", line2: "today, this week" },
            { title: "Climate", line1: "the long-term", line2: "average of weather" },
            { title: "Elements", line1: "temperature, humidity,", line2: "winds, precipitation" },
            { title: "Kinds", line1: "ten kinds, from", line2: "tropical to polar" },
          ]}
          aria={'Weather and climate. Weather is short term, such as today or this week. Climate is the long-term average of weather. The elements are temperature, humidity, winds and precipitation. There are ten kinds of climate, from tropical to polar.'}
        />
        <Worked
          steps={[
            '"It rained heavily this afternoon" describes the weather.',
            '"Cape Town has wet winters and dry summers" describes the climate.',
            'The ten kinds: tropical, subtropical, temperate, desert, semi-desert, continental, polar, Mediterranean, tundra and alpine.',
          ]}
        />
        <Mistake>Calling one hot day a hot climate. Climate is the pattern over many years, not one day.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading a climate graph',
    content: slide(
      <>
        <Rule>On a climate graph the bars show the rainfall for each month (in millimetres) and the line shows the temperature (in degrees Celsius). To describe a climate, find the warmest and coldest months, the wettest and driest months, the total rainfall for the year, and the temperature range.</Rule>
        <ClimateGraph data={EXAMPLES.mediterranean} />
        <Worked
          title="Example A (invented values for one kind of climate, not a real place)"
          steps={[
            `The wettest month is ${a.wettest}, and the driest month is ${a.driest}.`,
            `The warmest month is ${a.warmest} and the coldest month is ${a.coldest}, so the temperature range is ${a.range} °C.`,
            `The total rainfall for the year is ${mm(a.yearRain)}, and most of it falls in the cooler months, which suggests a Mediterranean climate.`,
          ]}
        />
        <Mistake>Reading a bar against the temperature scale. The bars are for rainfall and the line is for temperature; they have different scales.</Mistake>
      </>,
    ),
  },
  {
    title: 'Where the kinds of climate occur',
    content: slide(
      <>
        <Rule>Latitude, distance from the sea, altitude and ocean currents explain where each kind of climate occurs. Tropical climates lie near the equator. Many deserts lie between about 15° and 35° latitude, and some lie along coasts with cold currents. Polar and tundra climates lie near the poles, and alpine climates occur on high mountains at any latitude.</Rule>
        <LatitudeBands
          bands={[
            { label: 'Tropical', from: 0, to: 15, color: 'a' },
            { label: 'Deserts', from: 15, to: 35, color: 'r' },
            { label: 'Temperate', from: 35, to: 60, color: 'e' },
            { label: 'Polar', from: 60, to: 90, color: 'i' },
          ]}
        />
        <Worked
          steps={[
            `Example B has ${mm(b.yearRain)} of rain and a temperature range of ${b.range} °C: that is hot and wet all year, a tropical climate.`,
            `Example C has only ${mm(c.yearRain)} of rain in the whole year: that is a desert climate.`,
            'Example A has wet, mild winters and dry summers: that is a Mediterranean climate, found on the west sides of continents at middle latitudes.',
          ]}
        />
        <Mistake>Saying that a desert is a place that is very hot. A desert is a place with very little rain; some deserts are hot by day and cold at night.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          'What is the difference between weather and climate?',
          'What do the bars and the line on a climate graph show?',
          'How do you find the temperature range from a climate graph?',
          'Which kind of climate is found on high mountains at any latitude?',
        ]}
        answers={[
          'Weather is short term, such as today. Climate is the average weather over many years.',
          'The bars show rainfall and the line shows temperature.',
          "Subtract the coldest month's temperature from the warmest month's temperature.",
          'Alpine (high mountain).',
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is climate?",
    options: ["The weather that a place has today", "The weather that a place has this week", "The long-term average weather", "The changes in the sky at night"],
    answer: "The long-term average weather",
    explanation: "Climate is the average weather of a place over many years.",
  },
  {
    prompt: "Which of these is an element of weather?",
    options: ["Humidity", "Altitude", "Latitude", "Population"],
    answer: "Humidity",
    explanation: "The elements of weather are temperature, humidity, winds and precipitation.",
  },
  {
    prompt: "Which statement describes weather?",
    options: ["Cape Town has wet winters and dry summers", "Deserts get very little rain in the year", "Summers are warm and winters are cool there", "It rained heavily this afternoon"],
    answer: "It rained heavily this afternoon",
    explanation: "Weather is the state of the air over a short time.",
  },
  {
    prompt: "Which kind of climate is hot and wet all year near the equator?",
    options: ["Polar", "Tropical", "Mediterranean", "Continental"],
    answer: "Tropical",
    explanation: "Tropical climates are hot and wet near the equator.",
  },
  {
    prompt: "Which kind of climate has wet winters and dry summers?",
    options: ["Tropical rainforest climate", "Polar tundra climate", "Mediterranean climate", "Alpine mountain climate"],
    answer: "Mediterranean climate",
    explanation: "The Mediterranean climate has wet winters and dry summers.",
  },
  {
    prompt: "Which kind of climate has very little rain?",
    options: ["Desert", "Tropical", "Temperate", "Subtropical"],
    answer: "Desert",
    explanation: "A desert gets very little rain.",
  },
  {
    prompt: "What do the bars on a climate graph show?",
    options: ["Temperature", "Wind speed", "Cloud cover", "Rainfall"],
    answer: "Rainfall",
    explanation: "The bars show the rainfall of each month.",
  },
  {
    prompt: "What does the line on a climate graph show?",
    options: ["Rainfall total", "Temperature", "Humidity level", "Altitude above sea level"],
    answer: "Temperature",
    explanation: "The line shows the temperature of each month.",
  },
  {
    prompt: "A place gets 2 300 mm of rain a year and its monthly temperature stays between 26 °C and 27 °C. Which kind of climate is it?",
    options: ["Desert", "Polar", "Tropical", "Mediterranean"],
    answer: "Tropical",
    explanation: "Heavy rain and warm temperatures all year are tropical.",
  },
  {
    prompt: "A place gets about 40 mm of rain in the whole year and is hot in summer. Which kind of climate is it?",
    options: ["Desert", "Tundra", "Tropical", "Mediterranean"],
    answer: "Desert",
    explanation: "Very little rain means a desert climate.",
  },
  {
    prompt: "How do you find the temperature range from a climate graph?",
    options: ["Add up the temperatures of the months", "Wettest rainfall minus driest rainfall", "Divide the rainfall by twelve months", "Warmest minus coldest temperature"],
    answer: "Warmest minus coldest temperature",
    explanation: "The range is the warmest temperature minus the coldest temperature.",
  },
  {
    prompt: "Which kind of climate is found on high mountains at any latitude?",
    options: ["Tropical", "Alpine", "Desert", "Mediterranean"],
    answer: "Alpine",
    explanation: "Alpine climates occur on high mountains.",
  },
  {
    prompt: "Which kind of climate is found near the poles?",
    options: ["Tropical", "Mediterranean", "Polar", "Subtropical"],
    answer: "Polar",
    explanation: "Polar climates lie near the poles.",
  },
  {
    prompt: "How do you find the total yearly rainfall from a climate graph?",
    options: ["Add the 12 monthly rainfall bars", "Read the height of the highest bar", "Multiply the warmest temperature by 12", "Subtract the lowest bar from the highest bar"],
    answer: "Add the 12 monthly rainfall bars",
    explanation: "The total is the sum of the monthly rainfall.",
  },
];

const ClimateKindsAndGraphs = () => (
  <CapsSubjectTopic
    title="Kinds of Climate and Climate Graphs"
    subtitle="Weather and climate, reading climate graphs, and where the kinds of climate occur"
    learnSteps={learnSteps}
    task="gr8-climate-kinds-and-climate-graphs-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default ClimateKindsAndGraphs;
