import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/geo/term4/soil-formation-erosion/diagram.webp", alt: "Soil Formation and Erosion" },
    title: 'Soil formation: the five factors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Soil forms through <strong>pedogenesis</strong> — a slow process controlled by five interdependent factors, sometimes remembered as <em>CLORPT</em>.
        </p>
        <div className="grid gap-2 md:grid-cols-3 text-left text-sm">
          <div className="rounded-xl bg-brown-50 bg-amber-50 p-3">
            <strong className="text-amber-700">Parent material</strong>
            <p className="text-slate-600">The underlying rock or sediment that weathers to provide mineral content.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-3">
            <strong className="text-blue-700">Climate</strong>
            <p className="text-slate-600">Temperature and rainfall control weathering rates and organic matter decomposition.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-3">
            <strong className="text-green-700">Organisms</strong>
            <p className="text-slate-600">Plants, animals, bacteria, and fungi add organic matter and mix the soil.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-3">
            <strong className="text-yellow-700">Relief (topography)</strong>
            <p className="text-slate-600">Slope affects drainage and erosion — steep slopes have thin soils; flat areas accumulate deep soils.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-3">
            <strong className="text-slate-700">Time</strong>
            <p className="text-slate-600">Soil development takes hundreds to thousands of years. Young soils are undeveloped; old soils are deeply weathered.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The soil profile: horizons',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>soil profile</strong> is a vertical cross-section through the soil revealing distinct layers called <strong>horizons</strong>.
        </p>
        <div className="grid gap-2 md:grid-cols-2 text-left text-sm">
          <div className="rounded-xl bg-green-50 p-3">
            <strong className="text-green-700">O horizon</strong>
            <p className="text-slate-600">Surface layer of organic material — leaves, decomposed plant matter (humus). Dark and rich.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-3">
            <strong className="text-yellow-700">A horizon (topsoil)</strong>
            <p className="text-slate-600">Mixed mineral and organic matter. Most biologically active; where most plant roots feed.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-3">
            <strong className="text-orange-700">B horizon (subsoil)</strong>
            <p className="text-slate-600">Minerals leached from A horizon accumulate here. Less organic matter; more clay.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-3">
            <strong className="text-red-700">C horizon</strong>
            <p className="text-slate-600">Weathered parent material — partially broken-down rock fragments. Transitional layer.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-3 md:col-span-2">
            <strong className="text-slate-700">R horizon (bedrock)</strong>
            <p className="text-slate-600">Solid unweathered parent rock. Not technically soil — the foundation from which all above layers develop.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Types of soil erosion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Soil erosion</strong> is the removal and transport of topsoil by water or wind. It is one of the most serious environmental problems in South Africa.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Sheet erosion</strong>
            <p className="text-slate-600 text-sm">Uniform removal of a thin layer of topsoil across a large area by shallow overland flow. Often not noticed until the soil is severely degraded.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Rill erosion</strong>
            <p className="text-slate-600 text-sm">Small channels (rills) cut into the surface by concentrated water flow. Early stage; can be ploughed out.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Gully erosion</strong>
            <p className="text-slate-600 text-sm">Deep channels carved by concentrated flow. Most severe type; cannot be ploughed out; causes irreversible land loss.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Wind erosion (deflation)</strong>
            <p className="text-slate-600 text-sm">Fine dry topsoil particles blown away by wind in semi-arid areas. Creates dust storms and contributes to desertification.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Soil conservation methods',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective soil conservation combines agronomic practices, mechanical structures, and land management policies.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Contour ploughing</strong>
            <p className="text-slate-600 text-sm">Ploughing along contour lines to slow water runoff and reduce soil loss down slopes.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Terracing</strong>
            <p className="text-slate-600 text-sm">Building stepped platforms on steep slopes to trap water and sediment, common in hilly farming areas.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Strip cropping</strong>
            <p className="text-slate-600 text-sm">Alternating strips of crops provide year-round ground cover, reducing both water and wind erosion.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Afforestation &amp; mulching</strong>
            <p className="text-slate-600 text-sm">Planting trees and covering soil with organic material protects against raindrop impact and keeps soil moist.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Soil Data — Example Erosion Rates in South Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Soil erosion risk varies from place to place. This comparison shows example annual soil loss rates in selected provinces.</p>
        <DataChart
          data={[
                        { province: 'KwaZulu-Natal', soilLoss: 18 },
                        { province: 'Eastern Cape', soilLoss: 15 },
                        { province: 'Free State', soilLoss: 12 },
                        { province: 'Limpopo', soilLoss: 10 },
                      ]}
          xKey="province"
          series={[
                        { key: 'soilLoss', label: 'Soil loss (t/ha/yr)', type: 'bar', color: '#92400e' },
                      ]}
          yLabel="t/ha/yr"
          height={220}
        />

        <p className="text-sm text-slate-500">High erosion rates reduce soil fertility and make conservation farming more important.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which five factors control soil formation?',
    options: [
      'Rainfall, temperature, altitude, vegetation, and minerals',
      'Parent material, climate, organisms, relief (topography), and time',
      'Rock type, water, wind, gravity, and humans',
      'Erosion, deposition, weathering, vegetation, and bacteria',
    ],
    answer: 'Parent material, climate, organisms, relief (topography), and time',
    explanation: 'These five factors — sometimes called CLORPT (Climate, Organisms, Relief, Parent material, Time) — determine the type and depth of soil that develops.',
  },
  {
    prompt: 'The A horizon is called the topsoil because:',
    options: [
      'It is the deepest layer',
      'It contains the most organic matter and is the most biologically active layer',
      'It is made of solid unweathered rock',
      'It contains accumulated minerals from above',
    ],
    answer: 'It contains the most organic matter and is the most biologically active layer',
    explanation: 'The A horizon is where humus, plant roots, soil organisms, and mineral particles mix — it is the layer most important for plant growth.',
  },
  {
    prompt: 'Which soil horizon consists of solid unweathered bedrock?',
    options: ['O horizon', 'A horizon', 'B horizon', 'R horizon'],
    answer: 'R horizon',
    explanation: 'The R horizon (regolith) is the unweathered parent rock underlying all other soil horizons.',
  },
  {
    prompt: 'What is the most SEVERE type of water erosion?',
    options: ['Sheet erosion', 'Rill erosion', 'Gully erosion', 'Wind deflation'],
    answer: 'Gully erosion',
    explanation: 'Gully erosion creates deep channels that cannot be repaired by ploughing. It causes permanent and irreversible loss of agricultural land.',
  },
  {
    prompt: 'Wind erosion is most common in which environment?',
    options: ['Tropical rainforests', 'Semi-arid and arid environments with dry, exposed soils', 'Coastal regions', 'Waterlogged floodplains'],
    answer: 'Semi-arid and arid environments with dry, exposed soils',
    explanation: 'Dry, fine-grained, exposed soils in semi-arid areas (like the Karoo) are most vulnerable to wind erosion (deflation).',
  },
  {
    prompt: 'Contour ploughing reduces soil erosion by:',
    options: [
      'Increasing the slope gradient',
      'Ploughing across the slope along contour lines, slowing water runoff',
      'Removing all vegetation from the field',
      'Deep ploughing to break up the R horizon',
    ],
    answer: 'Ploughing across the slope along contour lines, slowing water runoff',
    explanation: 'Contour ploughing creates small ridges perpendicular to the slope, trapping water and reducing its velocity, which limits soil loss.',
  },
  {
    prompt: 'Which human activity is the LEADING cause of soil erosion in South Africa?',
    options: ['Mining', 'Overgrazing (too many livestock on too little land)', 'Tourism', 'Urban expansion'],
    answer: 'Overgrazing (too many livestock on too little land)',
    explanation: 'Overgrazing removes protective vegetation cover, exposes bare soil, and compacts the ground, making it highly vulnerable to erosion.',
  },
  {
    prompt: 'How does terracing help conserve soil on steep hillsides?',
    options: [
      'It prevents any farming on slopes',
      'It creates flat stepped platforms that trap water and sediment, reducing runoff speed',
      'It adds fertilisers to the soil',
      'It plants trees on the hillside',
    ],
    answer: 'It creates flat stepped platforms that trap water and sediment, reducing runoff speed',
    explanation: 'Terraces act like a series of small dams on steep hillsides, storing water and preventing sediment from washing downslope.',
  },
  {
    prompt: 'Sheet erosion is particularly dangerous because:',
    options: [
      'It creates deep gullies quickly',
      'It removes topsoil uniformly and slowly — often not noticed until soil is severely degraded',
      'It only affects sandy soils',
      'It occurs only in urban areas',
    ],
    answer: 'It removes topsoil uniformly and slowly — often not noticed until soil is severely degraded',
    explanation: 'Sheet erosion is insidious; the thin layer removed per rainfall event is invisible, but cumulative losses over years devastate soil fertility.',
  },
  {
    prompt: 'What is the O horizon in a soil profile?',
    options: [
      'Weathered parent material',
      'A layer of surface organic matter (humus and decomposed plant material)',
      'Clay-rich subsoil',
      'Solid bedrock',
    ],
    answer: 'A layer of surface organic matter (humus and decomposed plant material)',
    explanation: 'The O horizon is the topmost layer, composed of partially decomposed organic matter. It is dark, nutrient-rich, and critical for soil fertility.',
  },
];

const SoilFormationErosionT4 = () => (
  <CapsSubjectTopic
    title="Soil Formation and Erosion"
    subtitle="Pedogenesis, soil horizons, erosion types and conservation strategies"
    learnSteps={learnSteps}
    task="gr11-soil-formation-erosion-t4"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default SoilFormationErosionT4;
