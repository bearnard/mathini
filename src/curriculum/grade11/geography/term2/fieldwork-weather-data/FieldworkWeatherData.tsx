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
    title: 'Collecting weather data',
    content: slide(
      <>
        <Rule>Fieldwork means collecting information first-hand. For weather, use instruments: a thermometer in a shaded Stevenson screen for air temperature, a rain gauge for rainfall, an anemometer for wind speed, a wind vane for wind direction and a barometer for air pressure. You can also collect weather information from the media.</Rule>
        <FactCards
          cards={[
            { title: 'Thermometer', line1: 'air temperature, in a', line2: 'shaded screen' },
            { title: 'Rain gauge', line1: 'rainfall in millimetres', line2: 'in an open space' },
            { title: 'Anemometer', line1: 'wind speed', line2: 'and wind vane for direction' },
            { title: 'Barometer', line1: 'air pressure in', line2: 'hectopascals' },
          ]}
          aria="Weather instruments. Thermometer: air temperature, in a shaded screen. Rain gauge: rainfall in millimetres, in an open space. Anemometer: wind speed, with a wind vane for direction. Barometer: air pressure in hectopascals."
        />
        <Worked
          title="Choose the instrument"
          steps={[
            'To record how much rain fell overnight, read the rain gauge.',
            'To record the wind direction, use a wind vane.',
            'To record the air temperature at noon, read a thermometer kept in the shade.',
          ]}
        />
        <Mistake>Placing the thermometer in direct sunlight. It then measures the heat of the sun, not the air temperature.</Mistake>
      </>,
    ),
  },
  {
    title: 'Recording the data',
    content: slide(
      <>
        <Rule>Record data in a table with clear headings and units, and take readings at the same time each day with the same instrument in the same place. Then process the data: find the total, mean (average) and range.</Rule>
        <WeekGraph />
        <Worked
          title="Process a week of readings"
          steps={[
            `Total rainfall = ${g.WEEK.map((d) => d.rain).join(' + ')} = ${g.weekRain()} mm.`,
            `Mean maximum temperature = ${g.WEEK.map((d) => d.max).join(' + ')} = ${g.WEEK.reduce((a, d) => a + d.max, 0)}, ÷ 7 = ${g.meanMax()} °C.`,
            `The hottest day was ${g.hottest().day} at ${g.hottest().max} °C, and ${g.rainyDays()} days had rain.`,
          ]}
        />
        <Mistake>Mixing units in one table, such as millimetres and centimetres. Write the unit in the heading.</Mistake>
      </>,
    ),
  },
  {
    title: 'Presenting the findings',
    content: slide(
      <>
        <Rule>Choose the graph to suit the data. Use a line graph for something that changes over time, such as temperature, a bar graph for amounts that are separate, such as daily rainfall, and a map to show where things are. A synoptic weather map shows pressure systems and fronts for one moment. Give each graph a title, labelled axes and units.</Rule>
        <FactCards
          cards={[
            { title: 'Line graph', line1: 'temperature through', line2: 'the week' },
            { title: 'Bar graph', line1: 'rainfall on each', line2: 'separate day' },
            { title: 'Map', line1: 'where readings', line2: 'were taken' },
            { title: 'Synoptic map', line1: 'pressure and fronts', line2: 'at one time' },
          ]}
          aria="Choosing how to present findings. A line graph shows temperature through the week. A bar graph shows rainfall on each separate day. A map shows where readings were taken. A synoptic map shows pressure and fronts at one time."
        />
        <Worked
          title="Interpret the results"
          steps={[
            `Thursday had the most rain, ${g.WEEK[3].rain} mm, and the lowest maximum, ${g.WEEK[3].max} °C.`,
            'Rain and cloud keep the day cooler, so the two readings are linked.',
            `On Monday the range was ${g.WEEK[0].max} − ${g.WEEK[0].min} = ${g.dailyRange(g.WEEK[0])} °C.`,
          ]}
        />
        <Mistake>Using a line graph for rainfall on separate days. The days are separate amounts, so a bar graph is clearer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which instrument measures rainfall?</>,
          <>The week had daily rainfall of {g.WEEK.map((d) => d.rain).join(', ')} mm. What is the total?</>,
          <>Which graph suits temperature through a week?</>,
          <>What is the range on a day with a maximum of {g.WEEK[0].max} °C and a minimum of {g.WEEK[0].min} °C?</>,
        ]}
        answers={[
          <>A rain gauge.</>,
          <>{g.weekRain()} mm.</>,
          <>A line graph.</>,
          <>{g.dailyRange(g.WEEK[0])} °C.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which instrument measures rainfall?",
    options: ["A thermometer", "An anemometer", "A rain gauge", "A barometer"],
    answer: "A rain gauge",
    explanation: "A rain gauge collects rain in millimetres.",
  },
  {
    prompt: "Which instrument measures wind speed?",
    options: ["An anemometer", "A rain gauge", "A thermometer", "A wind vane"],
    answer: "An anemometer",
    explanation: "An anemometer measures how fast the wind blows.",
  },
  {
    prompt: "Which instrument shows wind direction?",
    options: ["A barometer", "A rain gauge", "An anemometer", "A wind vane"],
    answer: "A wind vane",
    explanation: "A wind vane points into the wind.",
  },
  {
    prompt: "Which instrument measures air pressure?",
    options: ["A thermometer", "A barometer", "A rain gauge", "An anemometer"],
    answer: "A barometer",
    explanation: "Pressure is measured in hectopascals.",
  },
  {
    prompt: "Why is a thermometer kept in a shaded screen?",
    options: ["To keep the instrument dry in rain", "To read the air, not the sun's heat", "To make the reading higher at noon", "To make the reading lower at noon"],
    answer: "To read the air, not the sun's heat",
    explanation: "Direct sun would heat the instrument itself.",
  },
  {
    prompt: "Daily rainfall for a week is 0, 0, 6, 14, 4, 0 and 0 mm. What is the total?",
    options: ["14 mm", "20 mm", "3,4 mm", "24 mm"],
    answer: "24 mm",
    explanation: "6 + 14 + 4 = 24.",
  },
  {
    prompt: "Daily maximum temperatures are 24, 26, 23, 20, 23, 25 and 27 °C. What is the mean?",
    options: ["24 °C", "20 °C", "27 °C", "168 °C"],
    answer: "24 °C",
    explanation: "The seven values add to 168, and 168 ÷ 7 = 24.",
  },
  {
    prompt: "In the same week, which day had the highest maximum temperature?",
    options: ["Thursday, 20 °C", "Tuesday, 26 °C", "Sunday, 27 °C", "Monday, 24 °C"],
    answer: "Sunday, 27 °C",
    explanation: "27 °C is the largest value.",
  },
  {
    prompt: "On Monday the maximum was 24 °C and the minimum 11 °C. What was the daily range?",
    options: ["35 °C", "24 °C", "11 °C", "13 °C"],
    answer: "13 °C",
    explanation: "The range is the maximum less the minimum: 24 − 11 = 13.",
  },
  {
    prompt: "On how many days of the week did rain fall, if the daily totals were 0, 0, 6, 14, 4, 0 and 0 mm?",
    options: ["4 days", "3 days", "14 days", "24 days"],
    answer: "3 days",
    explanation: "Rain was recorded on three days.",
  },
  {
    prompt: "Which graph is best for showing temperature changing through a week?",
    options: ["A line graph", "A pie chart", "A bar of one day", "A table of names"],
    answer: "A line graph",
    explanation: "Line graphs show change over time.",
  },
  {
    prompt: "Which graph suits rainfall on separate days?",
    options: ["A line graph of pressure", "A map of roads", "A bar graph", "A cross-section"],
    answer: "A bar graph",
    explanation: "Each day is a separate amount.",
  },
  {
    prompt: "What should every graph have?",
    options: ["Only a bright colour", "Only a thick border", "A title, labels and units", "A photograph of the place"],
    answer: "A title, labels and units",
    explanation: "These make a graph clear and readable.",
  },
  {
    prompt: "What does a synoptic weather map show?",
    options: ["Pressure and fronts at one time", "Rainfall for a whole year", "Population density by ward", "The soil types of a region"],
    answer: "Pressure and fronts at one time",
    explanation: "A synoptic chart is a weather picture for one moment.",
  },
];

const FieldworkWeatherData = () => (
  <CapsSubjectTopic
    title="Fieldwork: Collecting and Presenting Weather Data"
    subtitle="Weather instruments, recording and processing data, graphs and synoptic maps"
    learnSteps={learnSteps}
    task="gr11-fieldwork-weather-data-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default FieldworkWeatherData;
