import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ProcessFlow from '../../../../../components/subjects/ProcessFlow';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Origins of Life',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">How Life Began on Earth</h3>
          <p className="text-slate-700 leading-relaxed">
            Life on Earth began approximately 3.8 billion years ago. Several theories explain the origin of life, 
            with the most accepted being chemical evolution from simple organic molecules to complex living cells.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Conditions on Early Earth:</h4>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>No oxygen in atmosphere (reducing atmosphere: CH₄, NH₃, H₂O, H₂)</li>
            <li>Intense UV radiation (no ozone layer)</li>
            <li>Frequent volcanic activity and lightning</li>
            <li>Warm, shallow seas (primordial soup)</li>
            <li>These conditions allowed simple organic molecules to form</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">Miller-Urey Experiment (1953)</h4>
            <p className="text-sm text-purple-800 mb-2">Simulated early Earth conditions:</p>
            <ul className="text-xs text-purple-700 space-y-1">
              <li>• Mixed gases (CH₄, NH₃, H₂O, H₂)</li>
              <li>• Applied electrical sparks (lightning)</li>
              <li>• Produced amino acids and organic compounds</li>
              <li>• Showed life's building blocks can form naturally</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">From Molecules to Cells</h4>
            <ul className="text-sm text-green-800 space-y-1">
              <li>Simple organic molecules formed (amino acids, nucleotides)</li>
              <li>Molecules combined into polymers (proteins, RNA)</li>
              <li>RNA may have been first self-replicating molecule</li>
              <li>Membranes formed, creating first protocells</li>
              <li>Prokaryotic cells (bacteria) were first life forms</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Timeline of Life',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Major Events in Earth's History</h3>
          <p className="text-slate-700 leading-relaxed">
            Life has evolved over 3.8 billion years through gradual changes and major evolutionary innovations. 
            The fossil record provides evidence of this progression from simple to complex organisms.
          </p>
        </div>
        <ProcessFlow
          title="Evolution of Life on Earth"
          direction="vertical"
          steps={[
            {
              label: '3.8 BYA - First Life',
              description: 'Prokaryotes (bacteria)',
              detail: 'Simple single-celled organisms without nucleus. Anaerobic (no oxygen required). Reproduced by binary fission. Fossilized in stromatolites.',
              icon: '🦠',
            },
            {
              label: '2.5 BYA - Photosynthesis',
              description: 'Cyanobacteria produce O₂',
              detail: 'Cyanobacteria began photosynthesis, releasing oxygen as waste. Gradually changed atmosphere from reducing to oxidizing. Enabled aerobic respiration.',
              icon: '🌿',
            },
            {
              label: '2.0 BYA - Eukaryotes',
              description: 'Complex cells evolve',
              detail: 'First cells with nucleus and organelles. Endosymbiotic theory: mitochondria and chloroplasts were once free-living bacteria engulfed by larger cells.',
              icon: '🔬',
            },
            {
              label: '600 MYA - Multicellular Life',
              description: 'Complex organisms',
              detail: 'Large, complex multicellular animals appear (the Ediacaran biota). Cambrian explosion (540 MYA): rapid diversification of animal phyla.',
              icon: '🪸',
            },
            {
              label: '400 MYA - Life on Land',
              description: 'Plants and animals',
              detail: 'Plants colonize land, followed by arthropods and amphibians. Development of seeds, then reptiles. Permian extinction (252 MYA) - largest mass extinction.',
              icon: '🌳',
            },
            {
              label: '230 MYA - Age of Reptiles',
              description: 'Dinosaurs dominate',
              detail: 'Dinosaurs, pterosaurs, marine reptiles. First mammals appear (about 230 MYA); the first birds appear later, about 150 MYA. K-Pg extinction (66 MYA) - asteroid impact ends dinosaur era.',
              icon: '🦕',
            },
            {
              label: '65 MYA - Age of Mammals',
              description: 'Mammals diversify',
              detail: 'After dinosaur extinction, mammals radiated into diverse forms. Primates evolve. Modern humans (Homo sapiens) appear ~300,000 years ago.',
              icon: '🦒',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Fossil Evidence',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Reading the Fossil Record</h3>
          <p className="text-slate-700 leading-relaxed">
            Fossils are preserved remains or traces of ancient organisms. They provide direct evidence of how life 
            has changed over time, showing transitional forms and extinct species.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2">Types of Fossils:</h4>
            <ul className="space-y-1 text-sm text-amber-800">
              <li><strong>Body fossils:</strong> Preserved remains (bones, teeth, shells)</li>
              <li><strong>Trace fossils:</strong> Evidence of activity (footprints, burrows)</li>
              <li><strong>Mold/cast fossils:</strong> Impression left in rock</li>
              <li><strong>Petrified fossils:</strong> Organic material replaced by minerals</li>
              <li><strong>Amber fossils:</strong> Organisms preserved in tree resin</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h4 className="font-semibold text-teal-900 mb-2">What Fossils Tell Us:</h4>
            <ul className="space-y-1 text-sm text-teal-800">
              <li>Relative age of organisms (older fossils in deeper rock layers)</li>
              <li>Transitional forms show evolutionary links (Archaeopteryx: reptile-bird)</li>
              <li>Past climates and environments</li>
              <li>Geographic distribution of extinct species</li>
              <li>Mass extinction events</li>
            </ul>
          </div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-900 mb-2">South African Fossil Sites:</h4>
          <p className="text-sm text-red-800">
            South Africa is rich in fossils. The <strong>Cradle of Humankind</strong> (Sterkfontein Caves) contains 
            early hominin fossils (Australopithecus africanus - "Mrs. Ples", Homo naledi). 
            The <strong>Karoo Basin</strong> has extensive Permian-Triassic fossils showing the transition from 
            mammal-like reptiles to true mammals.
          </p>
        </div>
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'What do fossils provide evidence for?',
    options: ['Modern animal behavior', 'Past life and evolutionary history', 'Current species distribution', 'Human civilization'],
    answer: 'Past life and evolutionary history',
    explanation: 'Fossils are preserved remains showing how life has changed over time.',
  },
  {
    prompt: 'Which event caused the extinction of dinosaurs?',
    options: ['Climate change alone', 'An asteroid impact event', 'Volcanic activity alone', 'Disease outbreak'],
    answer: 'An asteroid impact event',
    explanation: 'The K-Pg extinction event was likely caused by a large asteroid impact.',
  },
  {
    prompt: 'What were the first life forms on Earth?',
    options: ['Multicellular animals', 'Prokaryotic bacteria', 'Plants', 'Fungi'],
    answer: 'Prokaryotic bacteria',
    explanation: 'Simple prokaryotic cells (bacteria) were the first life forms about 3.8 billion years ago.',
  },
  {
    prompt: 'What process did cyanobacteria introduce that changed Earth\'s atmosphere?',
    options: ['Cellular respiration, which used up oxygen', 'Photosynthesis, which released oxygen', 'Nitrogen fixation in the soil', 'Decomposition of dead organisms'],
    answer: 'Photosynthesis, which released oxygen',
    explanation: 'Cyanobacteria produced oxygen through photosynthesis, gradually oxygenating the atmosphere.',
  },
];

const HistoryOfLifeEarth = () => (
  <CapsSubjectTopic
    title="History of Life on Earth"
    subtitle="Evolution and paleontology"
    learnSteps={learnSteps}
    task="gr10-history-of-life-earth-t3"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default HistoryOfLifeEarth;
