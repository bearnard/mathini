import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import { LatLongGlobe, LatLongGrid, LATLONG_HOTSPOTS } from '@/components/diagrams/LatLong';

const learnSteps: LearnStep[] = [
  {
    title: 'Imaginary lines help us locate places',
    content: (
      <div className="space-y-4 text-center">
        <LatLongGlobe />
        <p className="text-lg text-slate-600">
          Geographers use imaginary lines called <strong>latitude</strong> and <strong>longitude</strong>
          to locate places on Earth. Together, the lines make a grid on maps and globes.
        </p>
      </div>
    ),
  },
  {
    title: 'Latitude lines run east-west',
    content: (
      <div className="space-y-4 text-center">
        <LatLongGrid />
        <p className="text-lg text-slate-600">
          Lines of <strong>latitude</strong> run around Earth from east to west. The
          <strong> Equator</strong> is 0° latitude and divides Earth into the Northern and Southern
          Hemispheres.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-4"><strong>Latitude</strong><br />east-west lines</div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Equator</strong><br />0° latitude</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Hemispheres</strong><br />north and south halves</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Longitude lines run north-south',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Lines of <strong>longitude</strong> run from the North Pole to the South Pole. The
          <strong> Greenwich Meridian</strong>, also called the Prime Meridian, is 0° longitude.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-purple-50 p-4"><strong>Longitude</strong><br />north-south lines</div>
          <div className="rounded-xl bg-rose-50 p-4"><strong>Prime Meridian</strong><br />0° longitude</div>
        </div>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What are latitude and longitude used for?', options: ['Locating places on Earth', 'Measuring rainfall', 'Showing food chains', 'Counting road signs'], answer: 'Locating places on Earth', explanation: 'The lines form a grid that helps us find exact positions.' },
  { prompt: 'Which line is 0° latitude?', options: ['Equator', 'Prime Meridian', 'Tropic of Capricorn', 'International Date Line'], answer: 'Equator', explanation: 'The Equator is the main latitude line at 0°.' },
  { prompt: 'The Equator divides Earth into which two hemispheres?', options: ['Northern and Southern', 'Eastern and Western', 'Land and Ocean', 'Day and Night'], answer: 'Northern and Southern', explanation: 'Places north of the Equator are in the Northern Hemisphere; places south are in the Southern Hemisphere.' },
  { prompt: 'Lines of latitude run mainly in which direction?', options: ['East-west', 'North-south', 'Up-down through Earth', 'Around only South Africa'], answer: 'East-west', explanation: 'Latitude lines circle Earth parallel to the Equator.' },
  { prompt: 'Lines of longitude run between which two points?', options: ['North Pole and South Pole', 'Cape Town and Durban', 'Equator and Moon', 'East coast and west coast only'], answer: 'North Pole and South Pole', explanation: 'Longitude lines meet at the poles.' },
  { prompt: 'Which line is also called the Prime Meridian?', options: ['Greenwich Meridian', 'Equator', 'Tropic of Cancer', 'Arctic Circle'], answer: 'Greenwich Meridian', explanation: 'The Greenwich Meridian is 0° longitude.' },
  { prompt: 'A place south of the Equator is in which hemisphere?', options: ['Southern Hemisphere', 'Northern Hemisphere', 'Eastern Hemisphere', 'Western Hemisphere'], answer: 'Southern Hemisphere', explanation: 'South of the Equator means in the Southern Hemisphere.' },
  { prompt: 'What symbol is commonly used with latitude and longitude numbers?', options: ['Degrees (°)', 'Kilograms (kg)', 'Litres (L)', 'Rand (R)'], answer: 'Degrees (°)', explanation: 'Latitude and longitude are measured in degrees.' },
  { prompt: 'Which pair gives a more exact position on a map or globe?', options: ['Latitude and longitude', 'Colour and shape', 'Weather and climate', 'Plants and animals'], answer: 'Latitude and longitude', explanation: 'A latitude-longitude pair gives a location on the global grid.' },
  { kind: 'label', section: 'equator-prime-meridian', prompt: 'Label the Equator, the Prime Meridian and the North Pole on this globe.', Diagram: LatLongGlobe, hotspots: LATLONG_HOTSPOTS.filter((h) => h.id !== 'south-pole').map(({ id, x, y }) => ({ id, x, y })), options: ['Equator', 'Prime Meridian', 'North Pole', 'South Pole', 'Hemisphere'], answer: 'equator=Equator|prime-meridian=Prime Meridian|north-pole=North Pole', explanation: 'The Equator is 0° latitude and runs east-west. The Prime Meridian is 0° longitude and runs from pole to pole. The North Pole is where the lines of longitude meet at the top.' },

];

const LatitudeLongitude = () => (
  <GeoTopic
    title="Latitude & Longitude"
    subtitle="Finding places with Earth’s grid"
    learnSteps={learnSteps}
    task="latitude-longitude"
    bank={bank}
  />
);

export default LatitudeLongitude;
