import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { FlowDiagram } from '../../../../../components/diagrams/science/SciencePictures4';
import { DECAY_STEPS, NITROGEN_STEPS } from '../../../../../components/diagrams/science/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Matter is recycled',
    content: slide(
      <>
        <Rule>
          In biogeochemical cycles, matter is recycled through the air, water, soil and living things. They recycle matter needed for life. Decomposers break down dead matter and return nutrients.
        </Rule>
        <NumberedSteps steps={DECAY_STEPS} tone="amber" label="Nutrients are recycled" />
        <Worked
          title="Follow a nutrient"
          steps={[<>A leaf dies and falls to the ground.</>, <>Decomposers break down the dead leaf and return nutrients to the soil.</>, <>A plant takes the nutrients up through its roots, and an animal that eats the plant gets them too.</>]}
        />
        <Mistake>Thinking matter is used up. Matter is not created or destroyed in a cycle. It only moves from one place to another.</Mistake>
      </>,
    ),
  },
  {
    title: 'The water cycle',
    content: slide(
      <>
        <Rule>
          <strong>Evaporation</strong> changes liquid water into water vapour. When the air cools, the vapour <strong>condenses</strong> into tiny droplets that make clouds. <strong>Precipitation</strong> is water falling from clouds.
        </Rule>
        <FlowDiagram
          id="wc"
          title="The water cycle"
          desc="Water evaporates from the sea and rivers into the air as water vapour. As air cools, the vapour condenses into clouds. Rain, hail or snow falls as precipitation, and the water runs back to rivers and the sea."
          nodes={[
            { id: 'sea', label: 'sea and rivers', x: 30, y: 74, color: '#38bdf8' },
            { id: 'air', label: 'air', x: 80, y: 20, color: '#e2e8f0' },
            { id: 'cloud', label: 'clouds', x: 132, y: 74, color: '#a5b4fc' },
          ]}
          edges={[
            { from: 'sea', to: 'air', label: 'evaporation', bend: 0, lx: 28, ly: 40 },
            { from: 'air', to: 'cloud', label: 'condensation', lx: 136, ly: 40 },
            { from: 'cloud', to: 'sea', label: 'precipitation, then run-off', lx: 80, ly: 92 },
          ]}
        />
        <Worked
          title="A puddle on a hot day"
          steps={[
            <>Heat from the Sun evaporates the water, and invisible water vapour rises.</>,
            <>High up the air is cooler, so the vapour condenses into droplets that form clouds.</>,
            <>Precipitation brings the water back: rain, hail or snow falls from the clouds, then runs off into rivers and the sea.</>,
          ]}
        />
        <Mistake>Calling a cloud water vapour. Vapour is an invisible gas. A cloud is made of tiny liquid droplets that have condensed.</Mistake>
      </>,
    ),
  },
  {
    title: 'The carbon cycle',
    content: slide(
      <>
        <Rule>
          Plants remove carbon dioxide from the atmosphere by photosynthesis. Respiration and decay return it. Burning fossil fuels releases large amounts of carbon dioxide quickly.
        </Rule>
        <FlowDiagram
          id="cc"
          title="The carbon cycle"
          desc="Plants take carbon dioxide from the air by photosynthesis. Animals get carbon by eating plants. Respiration and decay return carbon dioxide to the air."
          nodes={[
            { id: 'air', label: 'carbon dioxide in air', x: 80, y: 20, color: '#e2e8f0' },
            { id: 'plants', label: 'plants', x: 30, y: 74, color: '#34d399' },
            { id: 'animals', label: 'animals', x: 132, y: 74, color: '#fbbf24' },
          ]}
          edges={[
            { from: 'air', to: 'plants', label: 'photosynthesis', lx: 30, ly: 40 },
            { from: 'plants', to: 'animals', label: 'eaten', lx: 80, ly: 92 },
            { from: 'animals', to: 'air', label: 'respiration and decay', lx: 124, ly: 40 },
          ]}
        />
        <Worked
          title="Follow a carbon atom"
          steps={[<>It starts in a carbon dioxide molecule in the air.</>, <>A plant takes it in by photosynthesis and builds it into glucose.</>, <>An animal eats the plant. When the animal respires, the carbon goes back into the air as carbon dioxide.</>]}
        />
        <Mistake>Believing that plants only take carbon dioxide in. Plants respire too, so they also release it.</Mistake>
      </>,
    ),
  },
  {
    title: 'The nitrogen cycle',
    content: slide(
      <>
        <Rule>
          Most of the air is nitrogen, but plants cannot use it as a gas. Nitrogen-fixing bacteria help by turning nitrogen from the air into usable compounds.
        </Rule>
        <NumberedSteps steps={NITROGEN_STEPS} tone="teal" loop label="The nitrogen cycle" />
        <Worked
          title="From the air to your dinner"
          steps={[
            <>Nitrogen-fixing bacteria in the soil turn nitrogen from the air into usable compounds.</>,
            <>A bean plant takes the compounds up through its roots and uses them to grow.</>,
            <>An animal eats the plant. When either dies, decomposers break it down and return the nutrients to the soil.</>,
          ]}
        />
        <Mistake>Saying plants take nitrogen straight from the air. They need it in compounds that bacteria make.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which process moves water vapour from liquid water into the atmosphere? What forms clouds?</li>
            <li>Match: precipitation. How do plants remove carbon dioxide? Which activity quickly raises carbon dioxide?</li>
            <li>What do decomposers do? What do nitrogen-fixing bacteria do?</li>
            <li>Why are biogeochemical cycles important?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Evaporation. Water vapour condenses as air cools.</li>
            <li>Precipitation: water falls from clouds. By photosynthesis. Burning fossil fuels.</li>
            <li>They break down dead matter and return nutrients. They turn nitrogen from the air into usable compounds.</li>
            <li>They recycle matter needed for life.</li>
          </ol>
        }
      />,
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
