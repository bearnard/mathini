import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use maps, globes, and satellite images',
    image: {
      src: '/curriculum/grade8/geo/term1/maps-globes-and-satellite-images/diagram.webp',
      alt: 'Grade 8 learners comparing a globe, an atlas map, and a satellite image to locate places',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Mapwork combines atlases, latitude and longitude, ratio scale, time zones, the international date line, and
          seasonal patterns. Satellite images add a real-world view of weather, land use, and change over time.
        </p>
      </div>
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
