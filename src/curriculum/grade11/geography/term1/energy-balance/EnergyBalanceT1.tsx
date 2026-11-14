import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/geo/term1/energy-balance/diagram.webp", alt: "The Earth" },
    title: "The Earth's energy budget",
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>energy budget</strong> is the balance between the solar radiation arriving at Earth and the radiation leaving it. When balanced, global temperature is stable.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Incoming (short-wave)</strong>
            <p className="text-slate-600">Visible light and UV radiation from the Sun — about 342 W/m².</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Outgoing (long-wave)</strong>
            <p className="text-slate-600">Infrared radiation emitted back from Earth's surface and atmosphere.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Roughly 30% of incoming radiation is reflected back to space (albedo); the rest is absorbed and eventually re-radiated.</p>
      </div>
    ),
  },
  {
    title: 'Albedo and surface heating',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Albedo</strong> is the reflectivity of a surface — the fraction of incoming solar radiation that is reflected.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Snow / Ice</strong>
            <p className="text-slate-600">High albedo (~80–90%). Reflects most radiation → stays cold.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Vegetation</strong>
            <p className="text-slate-600">Moderate albedo (~10–25%). Absorbs more radiation than snow.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Dark soil/asphalt</strong>
            <p className="text-slate-600">Low albedo (~5–15%). Absorbs most radiation → heats quickly.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Melting ice caps reduce Earth's albedo — a positive feedback loop that accelerates warming.</p>
      </div>
    ),
  },
  {
    title: 'The greenhouse effect',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Greenhouse gases (CO₂, methane, water vapour) trap long-wave radiation, warming the lower atmosphere. Without it, Earth would average −18 °C instead of +15 °C.
        </p>
        <div className="bg-orange-50 p-6 rounded-xl text-left space-y-2">
          <p><strong className="text-orange-700">Natural greenhouse effect:</strong> essential for life — keeps Earth warm enough for liquid water.</p>
          <p><strong className="text-orange-700">Enhanced greenhouse effect:</strong> extra CO₂ from burning fossil fuels intensifies warming → climate change.</p>
        </div>
        <p className="text-sm text-slate-500">Africa is highly vulnerable to enhanced greenhouse warming due to its dependence on rain-fed agriculture.</p>
      </div>
    ),
  },
  {
    title: 'Latitude and the urban heat island',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Latitude</strong> affects the angle of incidence of solar radiation: lower latitudes receive more direct, intense radiation — this is why Africa is hot.
        </p>
        <div className="rounded-xl bg-slate-50 p-4 text-left space-y-2">
          <p className="text-slate-700"><strong>Urban Heat Island (UHI):</strong> cities are warmer than surrounding rural areas because dark paved surfaces absorb more heat, and less vegetation means less evaporative cooling.</p>
          <p className="text-slate-600 text-sm">South African cities like Johannesburg and Cape Town record UHI effects of 2–4 °C above rural surroundings.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Energy Data — Earths Average Radiation Budget',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">The global energy balance can be summarised by comparing incoming solar radiation with the energy reflected or absorbed by the atmosphere and surface.</p>
        <DataChart
          data={[
                        { component: 'Incoming solar', watts: 340 },
                        { component: 'Reflected by clouds and air', watts: 100 },
                        { component: 'Absorbed by atmosphere', watts: 78 },
                        { component: 'Absorbed by surface', watts: 162 },
                      ]}
          xKey="component"
          series={[
                        { key: 'watts', label: 'Energy (W/m²)', type: 'bar', color: '#f59e0b' },
                      ]}
          yLabel="W/m²"
          height={220}
        />

        <p className="text-sm text-slate-500">Small imbalances between incoming and outgoing energy can drive climate change over time.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does the Earth\'s energy budget describe?',
    options: ['The cost of making electricity in a country', 'The balance between incoming solar and outgoing Earth radiation', 'The amount of energy stored beneath the ground', 'The speed at which the ocean currents move'],
    answer: 'The balance between incoming solar and outgoing Earth radiation',
    explanation: 'The energy budget measures whether Earth gains or loses net energy, determining global temperature stability.',
  },
  {
    prompt: 'Which type of radiation does the Sun send to Earth?',
    options: ['Long-wave infrared (heat) radiation', 'Short-wave (visible light and UV)', 'Microwave radiation only', 'Radio waves only'],
    answer: 'Short-wave (visible light and UV)',
    explanation: 'Solar radiation is predominantly short-wave. Earth re-radiates this energy as long-wave infrared radiation.',
  },
  {
    prompt: 'What is albedo?',
    options: ['The temperature of the air in the atmosphere', 'The reflectivity of a surface, the share of radiation it reflects', 'The strength of the long-wave radiation given off', 'The angle at which the Sun strikes the equator'],
    answer: 'The reflectivity of a surface, the share of radiation it reflects',
    explanation: 'High albedo surfaces (like snow) reflect most radiation; low albedo surfaces (like dark soil) absorb most radiation.',
  },
  {
    prompt: 'Which surface has the HIGHEST albedo?',
    options: ['Dense forest', 'Dark volcanic rock', 'Fresh snow', 'Dry grassland'],
    answer: 'Fresh snow',
    explanation: 'Fresh snow reflects 80–90% of incoming solar radiation, giving it the highest albedo of common surfaces.',
  },
  {
    prompt: 'The greenhouse effect is caused by gases that trap which type of radiation?',
    options: ['Short-wave solar radiation from the Sun', 'Long-wave infrared radiation from the Earth', 'UV radiation that is given off by the Sun', 'Gamma radiation from deep space'],
    answer: 'Long-wave infrared radiation from the Earth',
    explanation: 'Greenhouse gases like CO₂ and water vapour absorb outgoing long-wave radiation, warming the lower atmosphere.',
  },
  {
    prompt: 'Why do low-latitude regions like equatorial Africa receive more solar energy?',
    options: ['They are much closer to the Sun than other regions', "The Sun's rays strike more directly, so energy is concentrated", 'They have a lower albedo than other regions have', 'They have a thinner ozone layer than other regions have'],
    answer: "The Sun's rays strike more directly, so energy is concentrated",
    explanation: 'At low latitudes the angle of incidence is steep; the same beam of sunlight covers less area, delivering more energy per m².',
  },
  {
    prompt: 'What is the urban heat island effect?',
    options: ['A city that has been built near a hot desert region', 'Cities are warmer than the countryside, due to dark surfaces and few plants', 'Heat from ocean currents that flow past coastal cities', 'More rain that falls over cities than over farmland'],
    answer: 'Cities are warmer than the countryside, due to dark surfaces and few plants',
    explanation: 'Paved surfaces absorb heat and lack of vegetation reduces evaporative cooling, raising urban temperatures by 2–4 °C.',
  },
  {
    prompt: 'What percentage of incoming solar radiation is roughly reflected back to space by Earth\'s average albedo?',
    options: ['10%', '30%', '50%', '70%'],
    answer: '30%',
    explanation: 'Earth\'s average albedo reflects approximately 30% of incoming solar radiation back to space.',
  },
  {
    prompt: 'How does melting Arctic sea ice create a positive feedback loop for warming?',
    options: ['Ice reflects heat but water absorbs it, so less ice means more warming', 'Meltwater evaporates and cools the air above the Arctic', 'Ice releases carbon dioxide when it melts', 'Melting ice forms clouds that trap more radiation'],
    answer: 'Ice reflects heat but water absorbs it, so less ice means more warming',
    explanation: 'As ice melts, darker ocean water (lower albedo) replaces it, absorbing more radiation and accelerating warming.',
  },
  {
    prompt: 'Without the natural greenhouse effect, Earth\'s average temperature would be approximately:',
    options: ['0 °C', '−18 °C', '+5 °C', '+30 °C'],
    answer: '−18 °C',
    explanation: 'The natural greenhouse effect raises Earth\'s average temperature from −18 °C to approximately +15 °C, making life possible.',
  },
];

const EnergyBalanceT1 = () => (
  <CapsSubjectTopic
    title="The Earth's Energy Balance"
    subtitle="Radiation, albedo and the greenhouse effect"
    learnSteps={learnSteps}
    task="gr11-energy-balance-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default EnergyBalanceT1;
