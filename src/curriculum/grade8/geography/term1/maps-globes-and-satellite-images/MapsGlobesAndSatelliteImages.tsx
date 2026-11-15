import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { SeasonsTilt } from '../../../../../components/diagrams/science/SciencePictures2';
import { DateLine, GlobeLines, RatioRuler, TimeStrip } from '../../../../../components/diagrams/geography/MapPictures';
import { crossEastToWest, groundMetres, hoursBetween } from '../../../../../components/diagrams/geography/mapHelpers';

// Every number comes from tested helpers (mapHelpers.test.ts).
const nb = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const oneCm = groundMetres(1, 50000);
const threeCm = groundMetres(3, 50000);
const hours = hoursBetween(0, 15);
const hours45 = hoursBetween(0, 45);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Latitude and longitude',
    content: slide(
      <>
        <Rule>
          Lines of latitude run east to west, parallel to the Equator. 0° longitude is called the Prime Meridian: it passes through Greenwich and is the starting line for longitude.
        </Rule>
        <GlobeLines />
        <Worked
          title="Find the lines"
          steps={[<>The Equator is 0° latitude. The Tropics of Cancer and Capricorn are 23,5° north and south of it.</>, <>All the latitude lines run east to west, parallel to the Equator.</>, <>Longitude is counted east and west from the Prime Meridian, 0°.</>]}
        />
        <Mistake>Thinking latitude lines run north to south. They run east to west. Lines of longitude run from pole to pole.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ratio scale',
    content: slide(
      <>
        <Rule>
          A ratio scale such as 1:50 000 means 1 unit on the map is 50 000 of the same units on the ground.
        </Rule>
        <RatioRuler ratio={50000} cm={3} />
        <Worked
          title="A map has a ratio scale of 1:50 000"
          steps={[<>1 cm on the map is 50 000 cm on the ground.</>, <>50 000 cm is {nb(oneCm)} m, so 1 cm on the map represents {nb(oneCm)} m.</>, <>So 3 cm on the map is 3 × {nb(oneCm)} = {nb(threeCm)} m.</>]}
        />
        <Mistake>Forgetting to change units. 50 000 cm is not 50 000 m; divide by 100 to get {nb(oneCm)} m.</Mistake>
      </>,
    ),
  },
  {
    title: 'Time zones and the date line',
    content: slide(
      <>
        <Rule>
          Earth rotates 360° in 24 hours, so 15° of longitude is about 1 hour. Crossing the International Date Line from east to west, you add one day.
        </Rule>
        <TimeStrip />
        <DateLine start="Monday" />
        <Worked
          title="Time and date"
          steps={[<>15° apart is {hours} hour, so a place 45° east of Greenwich is {hours45} hours ahead.</>, <>Going east, the time is later; going west, it is earlier.</>, <>Crossing the date line from east to west moves the calendar forward: Monday becomes {crossEastToWest('Monday')}.</>]}
        />
        <Mistake>Subtracting a day when crossing east to west. From east to west you add one day; from west to east you go back a day.</Mistake>
      </>,
    ),
  },
  {
    title: 'Seasons',
    content: slide(
      <>
        <Rule>
          The main reason Earth has seasons is that Earth is tilted on its axis as it orbits the Sun. The tilt changes the angle of sunlight and the length of day through the year.
        </Rule>
        <SeasonsTilt />
        <Worked
          title="December and June"
          steps={[<>In December the southern hemisphere is tilted towards the Sun: summer in South Africa, with longer days.</>, <>In June it is tilted away: winter, with shorter days.</>, <>The tilt, not the distance from the Sun, causes the seasons.</>]}
        />
        <Mistake>Thinking summer is when Earth is closest to the Sun. The axial tilt is the reason for seasons.</Mistake>
      </>,
    ),
  },
  {
    title: 'Satellite images and atlases',
    content: slide(
      <>
        <Rule>
          Satellite images show real-time or recent views of Earth&apos;s surface. An atlas is used to access different maps and geographic information.
        </Rule>
        <Terms
          rows={[
            ['Satellite image', 'a view of Earth from space, used to observe weather systems, land use and environmental change'],
            ['Atlas', 'many maps and supporting information for location and comparison'],
            ['Use them together', 'an atlas shows where; a satellite image shows what it looks like now'],
          ]}
        />
        <Worked
          title="Choose the right source"
          steps={[<>To watch a storm system move: a satellite image.</>, <>To compare how land use has changed: satellite images from different years.</>, <>To find different maps for a region: an atlas.</>]}
        />
        <Mistake>Treating a satellite image as a map with labels. It shows what the surface looks like; you still need a map or atlas to name places.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In which direction do lines of latitude run? What is 0° longitude called?</>,
          <>On a map with a ratio scale of 1:25 000, how far in reality is a road that measures 3 cm?</>,
          <>Two towns are 45° apart in longitude. What is the time difference between them? What happens to the date when you travel west across the International Date Line?</>,
          <>Why is it winter in Cape Town while it is summer in London? How can satellite images help to track a flood? What would you use an atlas to look up?</>,
        ]}
        answers={[
          <>East to west. The Prime Meridian.</>,
          <>750 m.</>,
          <>About 3 hours. The date moves forward by one day.</>,
          <>Earth is tilted on its axis as it orbits the Sun. They show recent views of large areas from above. To look up maps and place information.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In which direction do lines of latitude run on a map?',
    options: ['East to west', 'North to south', 'Diagonal only', 'In circles around the poles only'],
    answer: 'East to west',
    explanation: 'Lines of latitude are parallel to the Equator and run east-west.',
  },
  {
    prompt: 'What is 0° longitude called?',
    options: ['Prime Meridian', 'Equator', 'Tropic of Capricorn', 'International Date Line'],
    answer: 'Prime Meridian',
    explanation: 'The Prime Meridian passes through Greenwich and is the starting line for longitude.',
  },
  {
    prompt: 'A map has a ratio scale of 1:50 000. What does 1 cm on the map represent in reality?',
    options: ['500 m', '50 m', '5 km', '50 km'],
    answer: '500 m',
    explanation: '1:50 000 means 1 cm on the map equals 50 000 cm on the ground, which is 500 m.',
  },
  {
    prompt: 'How much time difference is there between places about 15° apart in longitude?',
    options: ['About 1 hour', 'About 15 hours', 'About 30 minutes', 'No time difference'],
    answer: 'About 1 hour',
    explanation: 'Earth rotates 360° in 24 hours, so 15° is about one hour.',
  },
  {
    prompt: 'What usually happens when you cross the International Date Line from east to west?',
    options: ['You add one day', 'You lose one hour', 'You subtract one day', 'You add one month'],
    answer: 'You add one day',
    explanation: 'Crossing east to west over the date line moves the calendar forward by one day.',
  },
  {
    prompt: 'What is the main reason Earth has seasons?',
    options: [
      'Earth is tilted on its axis as it orbits the Sun',
      'Earth moves closer to the Moon in winter',
      'Cloud cover changes every year',
      'The Equator moves north and south',
    ],
    answer: 'Earth is tilted on its axis as it orbits the Sun',
    explanation: 'The axial tilt changes sunlight angle and day length through the year.',
  },
  {
    prompt: 'Why are satellite images useful in geography?',
    options: [
      'They show real-time or recent views of Earth’s surface',
      'They replace all atlases and globes permanently',
      'They only show political borders',
      'They cannot be used for weather monitoring',
    ],
    answer: 'They show real-time or recent views of Earth’s surface',
    explanation: 'Satellites help geographers observe weather systems, land use, and environmental change.',
  },
  {
    prompt: 'What is an atlas mainly used for?',
    options: [
      'To access different maps and geographic information',
      'To measure rainfall directly in the field',
      'To calculate test marks',
      'To predict earthquakes exactly',
    ],
    answer: 'To access different maps and geographic information',
    explanation: 'An atlas contains many maps and supporting information for location and comparison.',
  },
];

const MapsGlobesAndSatelliteImages = () => (
  <CapsSubjectTopic
    title="Maps, Globes and Satellite Images"
    subtitle="Atlas skills, coordinates, scale, time zones, date line, and seasonal patterns"
    learnSteps={learnSteps}
    task="gr8-maps-globes-and-satellite-images-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default MapsGlobesAndSatelliteImages;
