import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Climate zones follow latitude',
    image: {
      src: '/curriculum/grade6/geo/term3/climate-regions/diagram.svg',
      alt: 'climate belts from equator to poles diagram',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>climate region</strong> is an area with similar temperature and rainfall over a long time.
          Climate belts often follow <strong>latitude</strong>: hot near the Equator and colder towards the poles.
        </p>
        <div className="bg-sky-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span className="text-emerald-700">tropical</span>
          <span className="text-slate-400">→</span>
          <span className="text-amber-700">desert</span>
          <span className="text-slate-400">→</span>
          <span className="text-green-700">temperate</span>
          <span className="text-slate-400">→</span>
          <span className="text-blue-700">polar</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Temperature and rainfall shape climate',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Geographers describe climate by looking at average <strong>temperature</strong> and
          <strong> rainfall</strong>. These two factors help explain why some places have forests,
          grasslands, deserts, or ice-covered land.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-red-50 p-4"><strong>Hot</strong><br />near the Equator</div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Wet or dry</strong><br />depends on rainfall</div>
          <div className="rounded-xl bg-blue-50 p-4"><strong>Cold</strong><br />near the poles</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Climate affects how people live',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Climate influences <strong>clothing</strong>, <strong>homes</strong>, farming, water use, and transport.
          People adapt to local conditions, such as saving water in dry climates or using warm clothing in cold climates.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Wet climate</strong><br />forests and crops</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Dry climate</strong><br />water is precious</div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong>Cold climate</strong><br />warm shelter needed</div>
        </div>
      </div>
    ),
  },
];

const bank: GeoItem[] = [
  { prompt: 'What is a climate region?', options: ['An area with similar temperature and rainfall over time', 'A short storm that lasts one afternoon', 'A line showing one river on a map', 'A place where all plants are identical'], answer: 'An area with similar temperature and rainfall over time', explanation: 'Climate describes the usual weather patterns of a place over many years.' },
  { prompt: 'Which climate belt is usually closest to the Equator?', options: ['Tropical', 'Polar', 'Mediterranean', 'Tundra'], answer: 'Tropical', explanation: 'Tropical regions near the Equator are generally hot throughout the year.' },
  { prompt: 'Which two measurements are most useful for describing climate?', options: ['Temperature and rainfall', 'Population and language', 'Roads and buildings', 'Minerals and factories'], answer: 'Temperature and rainfall', explanation: 'Average temperature and rainfall are key parts of climate.' },
  { prompt: 'What happens to average temperature as you move from the Equator towards the poles?', options: ['It generally becomes colder', 'It always becomes hotter', 'It stays exactly the same', 'It changes only at night'], answer: 'It generally becomes colder', explanation: 'The Sun’s rays are less direct near the poles, so they are colder.' },
  { prompt: 'Which climate region is known for very little rainfall?', options: ['Desert', 'Tropical rainforest', 'Temperate forest', 'Wetland'], answer: 'Desert', explanation: 'Deserts are dry because they receive very little rainfall.' },
  { prompt: 'Which climate region is usually very cold and found near the poles?', options: ['Polar', 'Tropical', 'Hot desert', 'Mediterranean'], answer: 'Polar', explanation: 'Polar regions are found near the North and South Poles and are very cold.' },
  { prompt: 'How can climate affect people’s lives?', options: ['It influences homes, clothing, farming, and water use', 'It decides every person’s favourite food', 'It stops people from making maps', 'It makes all countries the same size'], answer: 'It influences homes, clothing, farming, and water use', explanation: 'People adapt many daily activities to their local climate.' },
  { prompt: 'Which statement is about climate, not daily weather?', options: ['The area has hot summers and low rainfall most years', 'It is raining outside right now', 'The wind is strong this morning', 'There is a thunderstorm today'], answer: 'The area has hot summers and low rainfall most years', explanation: 'Climate is the long-term pattern, while weather changes from day to day.' },
  { prompt: 'Why do different climate regions have different vegetation?', options: ['Plants grow best in climates that meet their needs', 'All seeds choose climates randomly', 'Rainfall never affects plants', 'Temperature only affects rocks'], answer: 'Plants grow best in climates that meet their needs', explanation: 'Plants need suitable temperature and water to survive.' },
  { prompt: 'Which climate region is between very hot tropical areas and very cold polar areas?', options: ['Temperate', 'Equatorial only', 'Ice cap only', 'Ocean trench'], answer: 'Temperate', explanation: 'Temperate regions have moderate conditions compared with tropical and polar areas.' },
];

const ClimateRegions = () => (
  <GeoTopic
    title="Climate Regions"
    subtitle="How temperature and rainfall create climate belts"
    learnSteps={learnSteps}
    task="climate-regions"
    bank={bank}
  />
);

export default ClimateRegions;
