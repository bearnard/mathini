import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { RainGauge } from '../../../../components/diagrams/g5/Grade5Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Weather and climate',
    content: slide(
      <>
        <Rule>
          Weather is what the air is like at a place at a certain time, such as today. Climate is the usual weather of a place, averaged over many years.
        </Rule>
        <Worked
          title="Weather or climate?"
          steps={[
            <>“It is raining in Durban this morning.” This is about one time, so it is weather.</>,
            <>“Durban has hot, humid summers.” This describes the usual conditions year after year, so it is climate.</>,
            <>Weather can change in a day; climate changes very slowly.</>,
            <>Climate is worked out from many years of weather records.</>,
          ]}
        />
        <Mistake>Thinking weather and climate mean the same thing. Weather is short-term; climate is the long-term average.</Mistake>
      </>,
    ),
  },
  {
    title: 'Measuring the weather',
    content: slide(
      <>
        <Rule>
          A thermometer measures temperature in degrees Celsius (°C). A rain gauge measures rainfall in millimetres (mm). A wind vane shows wind direction, an anemometer measures wind speed, and a barometer measures air pressure.
        </Rule>
        <RainGauge />
        <Worked
          title="Read the rain gauge"
          steps={[
            <>Look at where the top of the water meets the scale.</>,
            <>The water is at the 32 mark, and the scale is in millimetres.</>,
            <>So 32 mm of rain fell.</>,
            <>Tip: the rain is measured in millimetres (mm), temperature in °C.</>,
          ]}
        />
        <Mistake>Using a thermometer for rain, or reading rain in degrees. Rain is measured with a rain gauge, in millimetres.</Mistake>
      </>,
    ),
  },
  {
    title: 'Where and when it rains',
    content: slide(
      <>
        <Rule>
          The south-western Cape gets most of its rain in winter, with dry summers: a Mediterranean climate. Most of the interior and the east get rain in summer. The Karoo is dry, a semi-desert.
        </Rule>
        <Worked
          title="Match rain to place"
          steps={[
            <>The Western Cape: winter rain, hot dry summers.</>,
            <>The Highveld and the east: summer rain.</>,
            <>The Karoo: very little rain all year, so it is dry.</>,
            <>Rainfall explains which plants and crops grow in each place.</>,
          ]}
        />
        <Mistake>Thinking all of South Africa gets rain in summer. The south-western Cape is the main winter-rainfall area.</Mistake>
      </>,
    ),
  },
  {
    title: 'Plants and crops',
    content: slide(
      <>
        <Rule>
          Fynbos grows mainly in the south-western Cape and is found nowhere else in the world. The dry Karoo has succulents (plants that store water) and small bushes. Grassland covers the Highveld. Grapes and fruit grow well in the Western Cape, and sugar cane grows in the hot, wet KwaZulu-Natal coast.
        </Rule>
        <Worked
          title="Link climate to plants"
          steps={[
            <>Winter rain and dry summers: fynbos, vineyards and fruit orchards.</>,
            <>Very dry: succulents and small bushes that need little water.</>,
            <>Hot and humid with plenty of rain: sugar cane on the KwaZulu-Natal coast.</>,
            <>Plants and crops fit the rainfall and the temperature of their region.</>,
          ]}
        />
        <Mistake>Expecting the same plants everywhere. Each region’s plants and crops suit its own rain and temperature.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Is “it is cloudy today” weather or climate?</li>
            <li>Which instrument measures rainfall, and in which unit?</li>
            <li>Which part of South Africa has winter rain?</li>
            <li>Which plants live in the dry Karoo, and which crop grows on the KwaZulu-Natal coast?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Weather.</li>
            <li>A rain gauge; millimetres (mm).</li>
            <li>The south-western Cape (Western Cape).</li>
            <li>Succulents and small bushes; sugar cane.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: '“Pretoria is usually hot in summer.” This describes the…',
    options: ['climate', 'weather', 'wind', 'rainfall only'],
    answer: 'climate',
    explanation: 'The usual conditions over many years are the climate.',
  },
  {
    prompt: 'Which instrument shows the direction of the wind?',
    options: ['Wind vane', 'Rain gauge', 'Thermometer', 'Barometer'],
    answer: 'Wind vane',
    explanation: 'A wind vane points the way the wind blows from.',
  },
  {
    prompt: 'Rainfall is measured in…',
    options: ['millimetres', 'degrees Celsius', 'kilograms', 'kilometres per hour'],
    answer: 'millimetres',
    explanation: 'Rain is measured in millimetres.',
  },
  {
    prompt: 'Which plants store water and are found in the dry Karoo?',
    options: ['Succulents', 'Tall forest trees', 'Rice', 'Water lilies'],
    answer: 'Succulents',
    explanation: 'Succulents store water so they can survive in dry places.',
  },
  {
    prompt: 'Which crop needs the hot, wet climate of the KwaZulu-Natal coast?',
    options: ['Sugar cane', 'Wheat in winter only', 'Fynbos', 'Cactus'],
    answer: 'Sugar cane',
    explanation: 'Sugar cane likes heat and plenty of rain.',
  },
];

const WeatherClimateVegetation = () => (
  <CapsSubjectTopic
    title="Weather, Climate and Vegetation"
    subtitle="Instruments, rainfall regions, plants and crops"
    learnSteps={learnSteps}
    task="gr5-geography-weather-climate-vegetation"
    bank={bank}
    apiPath="/api/caps/geo"
    grade={5}
  />
);

export default WeatherClimateVegetation;
