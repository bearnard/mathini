import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ls/term4/human-impact-environment/diagram.webp", alt: "Human Impact on the Environment" },
    title: 'Climate Change and the Greenhouse Effect',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Human activities are intensifying the <strong>greenhouse effect</strong>, driving global climate change:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Greenhouse gases</strong>
            <p className="text-slate-600">CO₂ (from fossil fuels and deforestation), CH₄ (from livestock and landfills), N₂O (from agriculture), and water vapour trap outgoing infrared radiation, warming the atmosphere.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Consequences</strong>
            <p className="text-slate-600">Rising average temperatures, melting ice caps and glaciers, rising sea levels, more frequent extreme weather events, and shifting biomes.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Mitigation strategies</strong>
            <p className="text-slate-600">Renewable energy (solar, wind), energy efficiency, reforestation, carbon capture technologies, and international agreements (e.g. Paris Agreement).</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Ozone depletion</strong>
            <p className="text-slate-600">CFCs (chlorofluorocarbons) from refrigerants and aerosols break down stratospheric ozone (O₃), allowing harmful UV-B radiation to reach Earth — increasing skin cancer and cataracts.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Water Pollution and Eutrophication',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Human activities introduce pollutants into freshwater and marine ecosystems:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Eutrophication</strong>
            <p className="text-slate-600">Excess nitrates and phosphates (from agricultural run-off and sewage) cause explosive growth of algae. Algal blooms block light and deplete oxygen as they decompose, killing aquatic life.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Other pollutants</strong>
            <p className="text-slate-600">Heavy metals (mercury, lead), pesticides, oil spills, plastic waste, and thermal pollution all degrade water quality and harm aquatic organisms.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Clean water is essential for biodiversity, food security, and human health — protecting water quality is a global priority.</p>
      </div>
    ),
  },
  {
    title: 'Habitat Destruction and Loss of Biodiversity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Habitat destruction is the primary driver of biodiversity loss worldwide:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Deforestation</strong>
            <p className="text-slate-600">Clearing forests for agriculture, logging, and urban expansion destroys habitat, fragments populations, and reduces carbon storage.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Habitat fragmentation</strong>
            <p className="text-slate-600">Isolated habitat patches prevent gene flow and migration, making populations more vulnerable to extinction — especially large mammals and birds.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Loss of biodiversity</strong>
            <p className="text-slate-600">Extinction of species reduces ecosystem resilience, disrupts food webs and ecosystem services (pollination, water purification, soil formation).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Conservation strategies</strong>
            <p className="text-slate-600">Protected areas (national parks), wildlife corridors, habitat restoration, legislation (CITES, ESA), captive breeding, and sustainable land use.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Waste and Food Security',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Unsustainable consumption and waste threaten both ecosystems and food production:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Solid waste</strong>
            <p className="text-slate-600">Landfills release methane (greenhouse gas) and leachate that pollutes groundwater. Plastic persists for centuries, accumulating in ocean gyres and entering food chains as microplastics.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Waste management hierarchy</strong>
            <p className="text-slate-600"><strong>Reduce</strong> (use less) → <strong>Reuse</strong> (use again) → <strong>Recycle</strong> (convert to new material) → <strong>Recover</strong> (energy from waste) → Dispose (landfill — least preferred).</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Food security threats</strong>
            <p className="text-slate-600">Soil degradation (erosion, salinisation), loss of pollinators, climate extremes, monocultures increasing pest vulnerability, and water scarcity all reduce crop yields and food availability.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Sustainable agriculture</strong>
            <p className="text-slate-600">Crop rotation, organic farming, integrated pest management, water-efficient irrigation, and agroforestry maintain productivity without degrading natural systems.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'Which greenhouse gas released mainly by burning fossil fuels is the largest contributor to anthropogenic climate change?',
    options: ['Methane (CH₄)', 'Carbon dioxide (CO₂)', 'Nitrous oxide (N₂O)', 'Water vapour'],
    answer: 'Carbon dioxide (CO₂)',
    explanation: 'CO₂ from burning coal, oil, and natural gas for energy is the dominant anthropogenic greenhouse gas driving contemporary global warming.',
  },
  {
    prompt: 'Ozone depletion in the stratosphere is primarily caused by which class of compounds?',
    options: ['Carbon dioxide from the burning of fuels', 'Methane from cattle and from wetlands', 'Chlorofluorocarbons (CFCs)', 'Sulphur dioxide from the burning of coal'],
    answer: 'Chlorofluorocarbons (CFCs)',
    explanation: 'CFCs, once widely used in refrigerants and aerosols, release chlorine atoms in the stratosphere that catalytically destroy ozone (O₃), thinning the ozone layer.',
  },
  {
    prompt: 'Eutrophication in freshwater systems is caused by excess:',
    options: ['Carbon dioxide and methane from the air', 'Nitrates and phosphates from farm run-off', 'Heavy metals that wash out of the mines', 'Chlorine from the treatment of tap water'],
    answer: 'Nitrates and phosphates from farm run-off',
    explanation: 'Nutrient overloading triggers explosive algal growth (algal blooms). When the algae die and decompose, bacteria consume oxygen, creating dead zones that suffocate aquatic life.',
  },
  {
    prompt: 'What is the correct order of priority in the waste management hierarchy?',
    options: [
      'Recycle → Reuse → Reduce → Dispose',
      'Reduce → Reuse → Recycle → Recover → Dispose',
      'Dispose → Recycle → Reuse → Reduce',
      'Recover → Reduce → Reuse → Recycle',
    ],
    answer: 'Reduce → Reuse → Recycle → Recover → Dispose',
    explanation: 'The waste hierarchy prioritises prevention first (reduce), followed by maximising product lifespan (reuse), then material recovery (recycle), energy recovery, and landfill disposal as the last resort.',
  },
  {
    prompt: 'Habitat fragmentation threatens biodiversity mainly because it:',
    options: ['It increases the supply of food for animals', 'It isolates populations, cutting gene flow', 'It speeds up the process of succession', 'It improves the quality of the water in rivers'],
    answer: 'It isolates populations, cutting gene flow',
    explanation: 'Small, isolated populations suffer from inbreeding, loss of genetic diversity, and inability to recover from local disasters, making species far more vulnerable to extinction.',
  },
  {
    prompt: 'A consequence of thinning of the ozone layer is:',
    options: ['Global cooling', 'Increased UV-B radiation reaching Earth\'s surface', 'Reduced greenhouse effect', 'Decreased skin pigmentation in humans'],
    answer: 'Increased UV-B radiation reaching Earth\'s surface',
    explanation: 'The ozone layer absorbs harmful UV-B radiation. Its depletion allows more UV-B to reach the surface, increasing rates of skin cancer, cataracts, and damage to aquatic ecosystems.',
  },
  {
    prompt: 'Which human activity is the single greatest driver of global biodiversity loss?',
    options: ['Climate change that warms the planet', 'Invasive species that are brought in from other places', 'Habitat destruction (deforestation and land conversion)', 'Pollution of the air, soil and water'],
    answer: 'Habitat destruction (deforestation and land conversion)',
    explanation: 'Converting natural habitats to farmland, urban areas, and plantations eliminates the living space of native species and is the primary cause of population declines and extinctions globally.',
  },
  {
    prompt: 'What is the relationship between microplastics and food chains?',
    options: ['Microplastics add nutrients to the food chain', 'Microplastics build up in organisms higher in the food chain', 'Microplastics break down fast and are harmless', 'Microplastics affect land organisms and no sea life'],
    answer: 'Microplastics build up in organisms higher in the food chain',
    explanation: 'Small animals ingest microplastics, which are not metabolised; as they pass up the food chain the concentration increases (biomagnification), posing toxicity risks to top predators including humans.',
  },
  {
    prompt: 'How does deforestation contribute to climate change?',
    options: ['It cools the air by removing the plants', 'It releases stored carbon as CO₂ and cuts CO₂ absorption', 'It increases soil moisture across the whole world', 'It has no effect on the CO₂ that is in the air'],
    answer: 'It releases stored carbon as CO₂ and cuts CO₂ absorption',
    explanation: 'Trees store large quantities of carbon. When forests are burned or cleared, this carbon is released as CO₂, and the lost trees can no longer absorb atmospheric CO₂ through photosynthesis.',
  },
  {
    prompt: 'Which strategy best addresses long-term food security while protecting biodiversity?',
    options: ['Expanding monoculture farming to all available land', 'Sustainable farming with crop rotation and water management', 'Turning all remaining forests into farmland', 'Using chemical pesticides alone to raise yields'],
    answer: 'Sustainable farming with crop rotation and water management',
    explanation: 'Sustainable agriculture maintains soil health, water quality, and ecological balance, ensuring food production capacity for future generations without permanently degrading natural systems.',
  },
];

const HumanImpactEnvironment = () => (
  <CapsSubjectTopic
    title="Human Impact on the Environment"
    subtitle="Climate change, biodiversity loss, pollution, and sustainable strategies"
    learnSteps={learnSteps}
    task="gr11-human-impact-environment-t4"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default HumanImpactEnvironment;
