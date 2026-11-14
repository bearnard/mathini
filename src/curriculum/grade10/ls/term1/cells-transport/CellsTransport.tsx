import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ProcessFlow from '../../../../../components/subjects/ProcessFlow';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Cell Structure',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Prokaryotic vs Eukaryotic Cells</h3>
          <p className="text-slate-700 leading-relaxed">
            Prokaryotic cells (bacteria) lack a membrane-bound nucleus and organelles. Their DNA floats freely in the cytoplasm. 
            Eukaryotic cells (animals, plants, fungi, protists) have a true nucleus containing DNA and specialized membrane-bound organelles.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Key Organelles:</h4>
          <ul className="space-y-1 text-sm text-blue-800">
            <li><strong>Nucleus:</strong> Controls cell activities, contains DNA</li>
            <li><strong>Mitochondria:</strong> Cellular respiration, ATP production</li>
            <li><strong>Ribosomes:</strong> Protein synthesis</li>
            <li><strong>Endoplasmic Reticulum:</strong> Protein and lipid synthesis</li>
            <li><strong>Golgi Apparatus:</strong> Package and transport proteins</li>
            <li><strong>Chloroplasts (plants):</strong> Photosynthesis</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Transport Mechanisms',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Passive and Active Transport</h3>
          <p className="text-slate-700 leading-relaxed">
            Cell membranes are selectively permeable, controlling what enters and leaves. Transport occurs through passive processes 
            (no energy required) or active transport (requires ATP energy).
          </p>
        </div>
        <ProcessFlow
          title="Transport Across Membranes"
          steps={[
            {
              label: 'Diffusion',
              description: 'High to low concentration',
              detail: 'Movement of molecules from high to low concentration until equilibrium. No energy required. Example: oxygen entering cells.',
              icon: '🌀',
            },
            {
              label: 'Osmosis',
              description: 'Water movement',
              detail: 'Diffusion of water across a semi-permeable membrane from high water concentration (low solute) to low water concentration (high solute).',
              icon: '💧',
            },
            {
              label: 'Facilitated Diffusion',
              description: 'Via carrier proteins',
              detail: 'Large or charged molecules move through protein channels down their concentration gradient. No energy needed.',
              icon: '🚪',
            },
            {
              label: 'Active Transport',
              description: 'Against gradient (ATP)',
              detail: 'Uses energy (ATP) to pump substances from low to high concentration. Example: sodium-potassium pump in nerve cells.',
              icon: '⚡',
            },
          ]}
        />
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-900">
            <strong>Tonicity effects:</strong> In a hypotonic solution, cells swell (water enters). 
            In a hypertonic solution, cells shrink (water leaves). In an isotonic solution, no net water movement.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Fluid Mosaic Model',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Cell Membrane Structure</h3>
          <p className="text-slate-700 leading-relaxed">
            The fluid mosaic model describes the cell membrane as a flexible, double layer (bilayer) of phospholipids with embedded proteins 
            that move laterally within the membrane like a mosaic.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">Components:</h4>
            <ul className="space-y-1 text-sm text-purple-800">
              <li><strong>Phospholipid bilayer:</strong> Hydrophilic heads (outside), hydrophobic tails (inside)</li>
              <li><strong>Proteins:</strong> Integral (embedded) and peripheral (surface)</li>
              <li><strong>Cholesterol:</strong> Maintains membrane fluidity</li>
              <li><strong>Carbohydrates:</strong> Cell recognition (glycoproteins, glycolipids)</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Functions:</h4>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Selective permeability and transport control</li>
              <li>Cell signaling and communication</li>
              <li>Cell recognition and adhesion</li>
              <li>Enzymatic activity</li>
              <li>Protection and structural support</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'What is the primary function of the cell membrane?',
    options: ['Makes energy for the cell in the form of ATP', 'Controls what enters and leaves, and protects the cell', 'Carries out photosynthesis in sunlight', 'Stores the DNA of the cell in its nucleus'],
    answer: 'Controls what enters and leaves, and protects the cell',
    explanation: 'The cell membrane regulates what enters and exits the cell.',
  },
  {
    prompt: 'Which process requires energy to move substances against concentration gradient?',
    options: ['Diffusion', 'Osmosis', 'Active transport', 'Facilitated diffusion'],
    answer: 'Active transport',
    explanation: 'Active transport uses ATP to move particles against their gradient.',
  },
  {
    prompt: 'What happens to an animal cell placed in a hypotonic solution?',
    options: ['It shrinks', 'It swells and may burst', 'It remains unchanged', 'It divides'],
    answer: 'It swells and may burst',
    explanation: 'In a hypotonic solution, water enters the cell by osmosis, causing it to swell.',
  },
  {
    prompt: 'Which structure is found in prokaryotic cells?',
    options: ['Mitochondria', 'Nucleus', 'Ribosomes', 'Endoplasmic reticulum'],
    answer: 'Ribosomes',
    explanation: 'Ribosomes are found in both prokaryotic and eukaryotic cells for protein synthesis.',
  },
];

const CellsTransport = () => (
  <CapsSubjectTopic
    title="Cells and Transport"
    subtitle="Cell biology and membrane mechanisms"
    learnSteps={learnSteps}
    task="gr10-cells-transport-t1"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default CellsTransport;
