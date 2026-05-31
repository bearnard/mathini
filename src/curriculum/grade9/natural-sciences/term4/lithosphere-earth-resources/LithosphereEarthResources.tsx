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
          <strong> core</strong>.
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
    options: ['A type of rock', 'A natural, crystalline solid', 'A fossil fuel', 'A metal only'],
    answer: 'A natural, crystalline solid',
    explanation: 'Minerals are naturally occurring, crystalline solid substances.',
  },
  {
    prompt: 'Which layer of Earth is thickest?',
    options: ['Crust', 'Mantle', 'Core', 'Lithosphere'],
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
    options: ['Layers of rock', 'Sections of the crust that move', 'Minerals', 'Fossils'],
    answer: 'Sections of the crust that move',
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
    options: ['Finding water', 'Extracting minerals and fossil fuels', 'Planting crops', 'Building roads'],
    answer: 'Extracting minerals and fossil fuels',
    explanation: 'Mining is the industrial process of removing valuable materials from the Earth.',
  },
  {
    prompt: 'What are fossil fuels?',
    options: ['Only coal', 'Non-renewable energy sources from ancient organisms', 'Renewable', 'Minerals'],
    answer: 'Non-renewable energy sources from ancient organisms',
    explanation: 'Fossil fuels include coal, oil, and gas formed from ancient life.',
  },
  {
    prompt: 'Why are fossil fuels non-renewable?',
    options: ['They replenish quickly', 'They are infinite', 'They take millions of years to form; we use them faster than they form', 'They are renewable'],
    answer: 'They take millions of years to form; we use them faster than they form',
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
    options: ['No impact', 'Only positive impacts', 'Can cause pollution, habitat destruction, and water contamination', 'Always beneficial'],
    answer: 'Can cause pollution, habitat destruction, and water contamination',
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
