import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Temperate climates are moderate',
    image: {
      src: '/curriculum/grade6/geo/term3/temperate-polar/diagram.webp',
      alt: 'temperate landscape beside snowy polar area illustration',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Temperate</strong> regions are not as hot as the tropics or as cold as polar areas.
          They often have seasons, with forests, grasslands, farms, and towns.
        </p>
        <div className="bg-green-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>warm summers</span>
          <span className="text-slate-400">+</span>
          <span>cool winters</span>
          <span className="text-slate-400">→</span>
          <span className="text-green-700">temperate vegetation</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Mediterranean climates have dry summers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>Mediterranean climate</strong> has <strong>hot, dry summers</strong> and
          <strong> mild, wet winters</strong>. South Africa’s Western Cape is an important example.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-4"><strong>Summer</strong><br />hot and dry</div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Winter</strong><br />mild and wet</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Polar regions are cold',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Polar climates</strong> are found near the North and South Poles. They are very cold,
          have ice or snow for much of the year, and only specially adapted plants and animals survive.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4"><strong>Very cold</strong><br />low temperatures</div>
          <div className="rounded-xl bg-slate-50 p-4"><strong>Ice and snow</strong><br />long winters</div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong>Few plants</strong><br />short growing season</div>
        </div>
      </div>
    ),
  },
];

const bank: GeoItem[] = [
  { prompt: 'Which words best describe many temperate climates?', options: ['Moderate temperatures with seasons', 'Always extremely hot and wet', 'Permanent ice all year everywhere', 'No rain in any month'], answer: 'Moderate temperatures with seasons', explanation: 'Temperate climates are between tropical heat and polar cold.' },
  { prompt: 'What is a Mediterranean climate known for?', options: ['Hot dry summers and mild wet winters', 'Cold dry summers and icy winters', 'Rainforest rain every day', 'No seasonal changes at all'], answer: 'Hot dry summers and mild wet winters', explanation: 'Mediterranean climates have summer drought and winter rainfall.' },
  { prompt: 'Which South African region has a Mediterranean climate?', options: ['The Western Cape', 'The Kalahari only', 'The Drakensberg peaks only', 'The Limpopo Valley only'], answer: 'The Western Cape', explanation: 'The Western Cape has hot dry summers and mild wet winters.' },
  { prompt: 'Where are polar climates found?', options: ['Near the North and South Poles', 'Only along the Equator', 'In all coastal cities', 'In every desert'], answer: 'Near the North and South Poles', explanation: 'Polar climates occur at high latitudes near the poles.' },
  { prompt: 'Why is vegetation limited in polar regions?', options: ['It is very cold and the growing season is short', 'There is too much rainforest shade', 'All soil is made of salt', 'Plants do not need sunlight there'], answer: 'It is very cold and the growing season is short', explanation: 'Low temperatures and short summers make plant growth difficult.' },
  { prompt: 'Which vegetation is common in some temperate regions?', options: ['Grasslands and deciduous forests', 'Only cactus plants', 'Only tropical vines', 'Only seaweed'], answer: 'Grasslands and deciduous forests', explanation: 'Temperate areas can support grasses and trees that handle seasonal changes.' },
  { prompt: 'Which climate is best matched with ice, snow, and very low temperatures?', options: ['Polar', 'Mediterranean', 'Tropical rainforest', 'Savanna'], answer: 'Polar', explanation: 'Polar climates are the coldest climate regions.' },
  { prompt: 'What does mild mean when describing winter?', options: ['Not very cold', 'Hotter than a desert', 'Always below freezing', 'Without any clouds'], answer: 'Not very cold', explanation: 'Mild winters are cool or rainy but not extremely cold.' },
  { prompt: 'Why do many Mediterranean plants have small waxy leaves?', options: ['To reduce water loss in dry summers', 'To grow under sea ice', 'To make snow melt faster', 'To avoid all sunlight'], answer: 'To reduce water loss in dry summers', explanation: 'Small waxy leaves help plants conserve water during hot dry summers.' },
  { prompt: 'Which statement correctly compares temperate and polar regions?', options: ['Temperate regions are generally warmer than polar regions', 'Polar regions are always hotter than temperate regions', 'Both regions have tropical rainforest all year', 'Temperate regions never have seasons'], answer: 'Temperate regions are generally warmer than polar regions', explanation: 'Polar regions receive less direct sunlight and are much colder.' },
];

const TemperatePolar = () => (
  <GeoTopic
    title="Mediterranean, Temperate & Polar"
    subtitle="Moderate climates, winter rainfall, and polar cold"
    learnSteps={learnSteps}
    task="temperate-polar"
    bank={bank}
  />
);

export default TemperatePolar;
