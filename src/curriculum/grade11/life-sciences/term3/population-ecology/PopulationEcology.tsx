import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Measuring Population Size and Density',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>population</strong> is all individuals of one species living in a defined area at a given time:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Population size (N)</strong>
            <p className="text-slate-600">
              Changes through: <strong>Natality</strong> (births) and <strong>Immigration</strong> add individuals; <strong>Mortality</strong> (deaths) and <strong>Emigration</strong> remove individuals.
            </p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Population density</strong>
            <p className="text-slate-600">Number of individuals per unit area or volume. High density increases competition, disease spread, and predation risk.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-left">
          <p className="text-slate-700 font-medium">ΔN = (Natality + Immigration) − (Mortality + Emigration)</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Population Growth Curves',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Two classic growth patterns describe how populations change over time:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">J-shaped (exponential) curve</strong>
            <p className="text-slate-600">Unrestricted growth when resources are unlimited. Population doubles at a constant rate. Unsustainable — eventually crashes when resources are exhausted.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">S-shaped (logistic) curve</strong>
            <p className="text-slate-600">Growth slows as population approaches <strong>carrying capacity (K)</strong> — the maximum population size the environment can sustainably support. Resources become limiting.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Ecological Interactions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Populations interact in ways that affect their size and structure:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Predator–prey</strong>
            <p className="text-slate-600">Cyclical relationship: prey numbers rise → predator numbers rise → prey numbers fall → predator numbers fall. (Classic example: lynx and snowshoe hare.)</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Competition</strong>
            <p className="text-slate-600"><strong>Intraspecific</strong> (same species) — intense, directly limits population size. <strong>Interspecific</strong> (different species) — competitive exclusion may result.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Mutualism</strong>
            <p className="text-slate-600">Both species benefit. Example: bees pollinate flowers; flowers provide nectar. Both populations are assisted.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Parasitism</strong>
            <p className="text-slate-600">Parasite benefits at the host's expense. Example: tapeworm living in the human intestine absorbs digested nutrients.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Ecological Succession',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Succession</strong> is the gradual, directional replacement of one community by another over time:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Primary succession</strong>
            <p className="text-slate-600">Starts on bare rock or newly formed land with no soil. Pioneer species (lichens, mosses) colonise, break down rock, and add organic matter. Soil gradually forms, allowing more complex communities to establish.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Secondary succession</strong>
            <p className="text-slate-600">Starts where a community was disturbed or destroyed but soil remains (e.g. after a fire, flood, or land clearing). Faster than primary succession because seed banks and soil already exist.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Both types eventually lead to a stable <strong>climax community</strong> determined by the local climate.</p>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'The maximum population size an environment can sustainably support is called:',
    options: ['Natality rate', 'Carrying capacity (K)', 'Population density', 'Emigration rate'],
    answer: 'Carrying capacity (K)',
    explanation: 'Carrying capacity is the upper limit on population size set by the availability of resources such as food, water, space, and shelter in an ecosystem.',
  },
  {
    prompt: 'A J-shaped population growth curve indicates:',
    options: ['Logistic growth approaching carrying capacity', 'Exponential growth with unlimited resources', 'Steady population decline', 'S-shaped logistic growth'],
    answer: 'Exponential growth with unlimited resources',
    explanation: 'A J-shaped curve results from unrestricted exponential growth. In nature resources eventually become limiting, causing the curve to level off (S-shape) or crash.',
  },
  {
    prompt: 'Which equation correctly represents population change?',
    options: [
      'ΔN = (Natality + Mortality) − (Immigration + Emigration)',
      'ΔN = (Natality + Immigration) − (Mortality + Emigration)',
      'ΔN = Natality − Mortality',
      'ΔN = Immigration − Emigration',
    ],
    answer: 'ΔN = (Natality + Immigration) − (Mortality + Emigration)',
    explanation: 'Population size increases through births (natality) and inward movement (immigration) and decreases through deaths (mortality) and outward movement (emigration).',
  },
  {
    prompt: 'In a predator–prey relationship, what typically happens to predator numbers when prey numbers fall sharply?',
    options: ['Predator numbers rise quickly with less competition', 'Predator numbers also fall because of a food shortage', 'Predator numbers stay constant, whatever the prey do', 'Prey numbers rise even further at the same time'],
    answer: 'Predator numbers also fall because of a food shortage',
    explanation: 'When prey is scarce, predators face starvation and their reproduction declines, so predator numbers follow prey numbers with a slight time lag — producing cyclical fluctuations.',
  },
  {
    prompt: 'Which type of competition is most intense and directly limits a population\'s growth?',
    options: ['Interspecific competition between different species', 'Intraspecific competition within the same species', 'Mutualistic competition', 'Commensalism'],
    answer: 'Intraspecific competition within the same species',
    explanation: 'Members of the same species compete for identical resources; this intraspecific competition intensifies as population density increases and is the main factor producing the S-shaped growth curve.',
  },
  {
    prompt: 'Which ecological relationship benefits both species involved?',
    options: ['Predation', 'Parasitism', 'Mutualism', 'Competition'],
    answer: 'Mutualism',
    explanation: 'In mutualism both species benefit — for example, bees feed on the nectar of a flower while pollinating the flower.',
  },
  {
    prompt: 'Primary succession differs from secondary succession because primary succession:',
    options: ['Is faster due to existing soil', 'Starts on bare substrate with no pre-existing soil', 'Only occurs after fires', 'Involves pioneer species that need rich soil'],
    answer: 'Starts on bare substrate with no pre-existing soil',
    explanation: 'Primary succession begins on bare rock, sand dunes, or cooled lava where no soil exists. Pioneer species must first build up organic matter and weather rock to create soil.',
  },
  {
    prompt: 'What is a pioneer species in ecological succession?',
    options: ['The dominant species in a climax community', 'The first organisms to colonise a bare or disturbed habitat', 'A predator that controls prey populations', 'A species that causes competitive exclusion'],
    answer: 'The first organisms to colonise a bare or disturbed habitat',
    explanation: 'Pioneer species (e.g. lichens in primary succession) tolerate harsh conditions, stabilise the substrate, add organic matter, and make the habitat suitable for subsequent, less tolerant species.',
  },
  {
    prompt: 'An S-shaped (logistic) population growth curve levels off because:',
    options: ['The birth rate increases beyond carrying capacity', 'Resources become limiting and density-dependent factors slow growth', 'There are no predators present', 'Immigration exceeds emigration'],
    answer: 'Resources become limiting and density-dependent factors slow growth',
    explanation: 'As population density increases, competition for food, space, and other resources intensifies. Birth rates fall and death rates rise until the population stabilises at carrying capacity (K).',
  },
];

const PopulationEcology = () => (
  <CapsSubjectTopic
    title="Population Ecology"
    subtitle="Population dynamics, growth curves, interactions, and succession"
    learnSteps={learnSteps}
    task="gr11-population-ecology-t3"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default PopulationEcology;
