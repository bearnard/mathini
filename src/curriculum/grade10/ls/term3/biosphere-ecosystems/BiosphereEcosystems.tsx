import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ProcessFlow from '../../../../../components/subjects/ProcessFlow';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Ecosystem Components',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Biotic and Abiotic Factors</h3>
          <p className="text-slate-700 leading-relaxed">
            An ecosystem is a community of living organisms (biotic factors) interacting with non-living 
            components (abiotic factors) in their environment. These interactions determine ecosystem structure and function.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🌿 Biotic Factors (Living)</h4>
            <ul className="space-y-1 text-sm text-green-800">
              <li><strong>Producers (Autotrophs):</strong> Plants, algae - make their own food via photosynthesis</li>
              <li><strong>Consumers (Heterotrophs):</strong> Cannot make own food
                <ul className="ml-4 mt-1 space-y-0.5 text-xs">
                  <li>• Herbivores: Plant-eaters (e.g., zebra, rabbit)</li>
                  <li>• Carnivores: Meat-eaters (e.g., lion, hawk)</li>
                  <li>• Omnivores: Eat both (e.g., human, bear)</li>
                </ul>
              </li>
              <li><strong>Decomposers:</strong> Bacteria, fungi - break down dead organic matter, recycle nutrients</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">🌍 Abiotic Factors (Non-living)</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li><strong>Climate:</strong> Temperature, rainfall, humidity, wind</li>
              <li><strong>Light:</strong> Sunlight intensity and duration (affects photosynthesis)</li>
              <li><strong>Water:</strong> Availability determines which organisms can survive</li>
              <li><strong>Soil:</strong> Nutrient content, pH, texture</li>
              <li><strong>Topography:</strong> Altitude, slope, aspect</li>
              <li><strong>Air:</strong> Oxygen, carbon dioxide levels</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Energy Flow',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Food Chains, Webs, and Energy Pyramids</h3>
          <p className="text-slate-700 leading-relaxed">
            Energy flows through ecosystems from producers to consumers. Only about 10% of energy is transferred 
            between trophic levels; the rest is lost as heat through metabolism.
          </p>
        </div>
        <ProcessFlow
          title="Energy Flow Through Trophic Levels"
          steps={[
            {
              label: 'Producers',
              description: '1st Trophic Level',
              detail: 'Plants capture solar energy through photosynthesis (6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂). Store energy in chemical bonds (glucose). Form the base of all food chains.',
              icon: '🌱',
            },
            {
              label: 'Primary Consumers',
              description: '2nd Level (Herbivores)',
              detail: 'Eat producers. ~10% of plant energy transferred. Examples: grasshoppers, antelope, caterpillars. Rest lost as heat, used in metabolism, or undigested.',
              icon: '🦗',
            },
            {
              label: 'Secondary Consumers',
              description: '3rd Level (Carnivores)',
              detail: 'Eat primary consumers. ~10% of herbivore energy transferred. Examples: frogs, small birds, snakes. Energy pyramid narrows significantly.',
              icon: '🐸',
            },
            {
              label: 'Tertiary Consumers',
              description: '4th Level (Top predators)',
              detail: 'Eat secondary consumers. ~10% energy transferred. Examples: lions, eagles, sharks. Top of food chain. Smallest population due to limited energy.',
              icon: '🦅',
            },
            {
              label: 'Decomposers',
              description: 'All levels',
              detail: 'Bacteria and fungi break down dead organisms and waste at every level. Return nutrients (C, N, P) to soil for producers. Complete the nutrient cycle.',
              icon: '🍄',
            },
          ]}
        />
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-900">
            <strong>Food webs</strong> are more realistic than food chains because most organisms eat multiple food sources. 
            <strong>Energy pyramids</strong> show the energy available decreasing at higher trophic levels (only about 10% is passed on). This explains why there are 
            more producers than herbivores, more herbivores than carnivores.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Biomes',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Major Terrestrial Biomes</h3>
          <p className="text-slate-700 leading-relaxed">
            A biome is a large geographic region with similar climate, soil, plants, and animals. 
            South Africa has diverse biomes including grassland, savanna, fynbos, and forest.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🌾 Grassland Biome</h4>
            <ul className="text-sm text-green-800 space-y-1">
              <li>Climate: Summer rainfall, cold winters, frost</li>
              <li>Vegetation: Grasses dominate, few trees</li>
              <li>Animals: Grazers (wildebeest, zebra), predators (cheetah)</li>
              <li>Location: Central South Africa (Highveld)</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2">🦒 Savanna Biome</h4>
            <ul className="text-sm text-amber-800 space-y-1">
              <li>Climate: Warm, distinct wet and dry seasons</li>
              <li>Vegetation: Grasses with scattered trees (acacia)</li>
              <li>Animals: Large herbivores (elephant, giraffe), big cats</li>
              <li>Location: Kruger National Park region</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">🌺 Fynbos Biome</h4>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>Climate: Mediterranean - wet winters, dry summers</li>
              <li>Vegetation: Small, fire-adapted shrubs, high diversity</li>
              <li>Animals: Many endemic species (protea beetles)</li>
              <li>Location: Western and Eastern Cape (unique to SA)</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h4 className="font-semibold text-teal-900 mb-2">🌳 Forest Biome</h4>
            <ul className="text-sm text-teal-800 space-y-1">
              <li>Climate: High rainfall, stable temperature</li>
              <li>Vegetation: Dense canopy, tall trees, ferns</li>
              <li>Animals: Forest birds, monkeys, insects</li>
              <li>Location: Small patches (Knysna, Tsitsikamma)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'What role do producers play in an ecosystem?',
    options: ['Consume other organisms', 'Decompose dead matter', 'Convert light to chemical energy', 'Disperse seeds'],
    answer: 'Convert light to chemical energy',
    explanation: 'Producers (plants) capture solar energy through photosynthesis.',
  },
  {
    prompt: 'Which of the following is an abiotic factor?',
    options: ['Herbivores', 'Bacteria', 'Temperature', 'Trees'],
    answer: 'Temperature',
    explanation: 'Abiotic factors are non-living physical components of an environment.',
  },
  {
    prompt: 'What percentage of energy is typically transferred between trophic levels?',
    options: ['50%', '25%', '10%', '90%'],
    answer: '10%',
    explanation: 'Only about 10% of energy is transferred to the next trophic level; the rest is lost as heat.',
  },
  {
    prompt: 'Which South African biome is characterized by fire-adapted shrubs and high plant diversity?',
    options: ['Grassland', 'Savanna', 'Fynbos', 'Desert'],
    answer: 'Fynbos',
    explanation: 'The Fynbos biome is unique to South Africa with high diversity of fire-adapted plants.',
  },
];

const BiosphereEcosystems = () => (
  <CapsSubjectTopic
    title="Biosphere to Ecosystems"
    subtitle="Ecology and environmental systems"
    learnSteps={learnSteps}
    task="gr10-biosphere-ecosystems-t3"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default BiosphereEcosystems;
