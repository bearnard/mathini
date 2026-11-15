import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Rocks, minerals, and Earth structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Minerals</strong> are natural, crystalline solids. <strong>Rocks</strong> are made
          of minerals. The Earth has layers: <strong>crust</strong>, <strong>mantle</strong>, and
          <strong> core</strong>. The <strong>lithosphere</strong> is the crust together with the
          rigid top part of the mantle; tectonic plates are pieces of it.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left">
          <p className="font-bold text-slate-800 mb-2">Three types of rocks:</p>
          <div className="space-y-2">
            <p className="text-slate-600"><strong>Igneous:</strong> Form when molten rock cools (e.g., granite, basalt).</p>
            <p className="text-slate-600"><strong>Sedimentary:</strong> Form from compressed sediment (e.g., sandstone).</p>
            <p className="text-slate-600"><strong>Metamorphic:</strong> Form under heat and pressure (e.g., marble).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Plate tectonics and mining',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Earth's crust is divided into <strong>tectonic plates</strong> that move slowly. This
          causes earthquakes and volcanoes. <strong>Mining</strong> extracts valuable minerals and fossil fuels.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Plate movement:</strong>
            <p className="text-slate-600">Plates diverge (move apart), converge (collide), or slide past each other.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Mining impacts:</strong>
            <p className="text-slate-600">Job creation but environmental damage, pollution, habitat loss.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Fossil fuels and Earth resources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Fossil fuels</strong> (coal, oil, gas) formed from ancient organisms. They are
          <strong> non-renewable</strong> — once used, they cannot be replaced quickly.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-gray-50 p-4">
            <strong className="text-gray-700">Fossil Fuels:</strong>
            <p className="text-slate-600">Coal, oil, natural gas. Burned for energy.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Renewable Resources:</strong>
            <p className="text-slate-600">Solar, wind, water, biofuel. Naturally replaced.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a mineral?',
    options: ['A type of rock that is made of several minerals', 'A natural solid with a crystal structure', 'A fuel made from the remains of old plants', 'A shiny metal that can be dug from the ground only'],
    answer: 'A natural solid with a crystal structure',
    explanation: 'Minerals are naturally occurring, crystalline solid substances.',
  },
  {
    prompt: 'Which layer of Earth is thickest?',
    options: ['Crust', 'Mantle', 'Inner core', 'Lithosphere'],
    answer: 'Mantle',
    explanation: 'The mantle is the thickest layer, between the crust and core.',
  },
  {
    prompt: 'How do igneous rocks form?',
    options: ['From sediment', 'From compressed layers', 'When molten rock cools', 'From heat and pressure'],
    answer: 'When molten rock cools',
    explanation: 'Igneous rocks form when magma or lava solidifies.',
  },
  {
    prompt: 'What are tectonic plates?',
    options: ['Layers of rock that lie flat under the soil', 'Large sections of the crust that slowly move', 'Minerals that form crystals in the rocks of the crust', 'Fossils that are found in the layers of rock'],
    answer: 'Large sections of the crust that slowly move',
    explanation: 'Tectonic plates are large sections of the lithosphere that move slowly.',
  },
  {
    prompt: 'What causes earthquakes?',
    options: ['Ocean waves', 'Wind', 'Movement of tectonic plates', 'Temperature changes'],
    answer: 'Movement of tectonic plates',
    explanation: 'Earthquakes occur when tectonic plates suddenly shift and release energy.',
  },
  {
    prompt: 'What is mining?',
    options: ['Finding water from deep below the ground', 'Taking minerals and fuels out of the ground', 'Planting crops on soil that is rich in minerals', 'Building roads across the hills and valleys'],
    answer: 'Taking minerals and fuels out of the ground',
    explanation: 'Mining is the industrial process of removing valuable materials from the Earth.',
  },
  {
    prompt: 'What are fossil fuels?',
    options: ['Coal only, because oil and gas are made in a lab', 'Non-renewable fuels that came from ancient life', 'Fuels that renew themselves in a few years', 'Minerals that are mined and used to make metals'],
    answer: 'Non-renewable fuels that came from ancient life',
    explanation: 'Fossil fuels include coal, oil, and gas formed from ancient life.',
  },
  {
    prompt: 'Why are fossil fuels non-renewable?',
    options: ['They refill themselves within a few years of being used', 'They are in endless supply, so they can never run out', 'They take millions of years to form and we use them faster', 'They are renewable, so they come back each year'],
    answer: 'They take millions of years to form and we use them faster',
    explanation: 'Fossil fuels form over geological time scales much slower than we consume them.',
  },
  {
    prompt: 'Which is a renewable resource?',
    options: ['Coal', 'Oil', 'Natural gas', 'Solar energy'],
    answer: 'Solar energy',
    explanation: 'Solar energy is renewable; the sun continuously provides it.',
  },
  {
    prompt: 'What is an environmental impact of mining?',
    options: ['It has no effect, because mines are far from towns', 'It brings only good effects, such as jobs and wealth', 'It can cause pollution, loss of habitat and dirty water', 'It is always good, since the land is replanted later'],
    answer: 'It can cause pollution, loss of habitat and dirty water',
    explanation: 'Mining has significant environmental costs despite its economic benefits.',
  },
];

const LithosphereEarthResources = () => (
  <CapsSubjectTopic
    title="Lithosphere and Earth Resources"
    subtitle="Rocks, plate tectonics, and sustainable resource use"
    learnSteps={learnSteps}
    task="gr9-lithosphere-earth-resources-t4"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default LithosphereEarthResources;
