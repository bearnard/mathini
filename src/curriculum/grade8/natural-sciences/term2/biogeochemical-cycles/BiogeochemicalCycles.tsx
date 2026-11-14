import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Track matter through major Earth cycles',
    image: {
      src: '/curriculum/grade8/ns/term2/biogeochemical-cycles/diagram.webp',
      alt: 'Grade 8 learners tracing water carbon and nitrogen cycles with decomposers in ecosystems',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In biogeochemical cycles, matter is recycled through the air, water, soil, and living things. The
          <strong> water</strong>, <strong>carbon</strong>, and <strong>nitrogen</strong> cycles show how matter
          moves and why decomposers are essential in recycling nutrients.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which process moves water vapour from liquid water into the atmosphere?',
    options: ['Evaporation', 'Condensation', 'Precipitation', 'Infiltration'],
    answer: 'Evaporation',
    explanation: 'Evaporation changes liquid water into water vapour.',
  },
  {
    prompt: 'Cloud formation mainly happens when water vapour...',
    options: ['condenses as air cools', 'changes directly into salt', 'disappears from the atmosphere', 'turns into oxygen gas'],
    answer: 'condenses as air cools',
    explanation: 'Condensation forms tiny droplets that make up clouds.',
  },
  {
    prompt: 'In the carbon cycle, plants remove carbon dioxide from the atmosphere by...',
    options: ['photosynthesis', 'respiration', 'combustion', 'decomposition only'],
    answer: 'photosynthesis',
    explanation: 'Photosynthesis takes in carbon dioxide to build glucose.',
  },
  {
    prompt: 'Which activity increases atmospheric carbon dioxide quickly?',
    options: ['Burning fossil fuels', 'Planting forests', 'Composting leaves', 'Rainfall'],
    answer: 'Burning fossil fuels',
    explanation: 'Combustion of coal, oil, and gas releases large amounts of carbon dioxide.',
  },
  {
    prompt: 'What is the main role of decomposers in nutrient cycles?',
    options: ['They break down dead matter and return nutrients', 'They make lightning in storms', 'They stop nitrogen from entering soil', 'They convert all oxygen to carbon dioxide'],
    answer: 'They break down dead matter and return nutrients',
    explanation: 'Decomposers recycle nutrients back into ecosystems.',
  },
  {
    prompt: 'In the nitrogen cycle, nitrogen-fixing bacteria help by...',
    options: ['turning nitrogen from the air into usable compounds', 'taking all of the nitrogen out of the soil', 'changing nitrogen into sunlight for plants', 'stopping the growth of plants in the soil'],
    answer: 'turning nitrogen from the air into usable compounds',
    explanation: 'Nitrogen fixation makes nitrogen available to plants.',
  },
  {
    prompt: 'Why are biogeochemical cycles important?',
    options: ['They recycle matter needed for life', 'They stop all chemical changes', 'They only occur in oceans', 'They reduce gravity on Earth'],
    answer: 'They recycle matter needed for life',
    explanation: 'Life depends on continuous recycling of water and key elements.',
  },
  {
    prompt: 'Which pair is correctly matched?',
    options: ['Precipitation: water falls from clouds', 'Condensation: water soaks into soil', 'Runoff: plants release water vapour', 'Evaporation: clouds release hail'],
    answer: 'Precipitation: water falls from clouds',
    explanation: 'Precipitation includes rain, hail, or snow falling from clouds.',
  },
];

const BiogeochemicalCycles = () => (
  <CapsSubjectTopic
    title="Biogeochemical Cycles"
    subtitle="Water, carbon, and nitrogen cycles with recycling of matter"
    learnSteps={learnSteps}
    task="gr8-biogeochemical-cycles-t2"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default BiogeochemicalCycles;
