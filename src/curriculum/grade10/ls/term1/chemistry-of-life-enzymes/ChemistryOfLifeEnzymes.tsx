import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ProcessFlow from '../../../../../components/subjects/ProcessFlow';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Chemistry in Living Systems',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Chemical Elements and Compounds</h3>
          <p className="text-slate-700 leading-relaxed">
            Living organisms are made of organic compounds (contain carbon) and inorganic compounds. 
            Six elements make up 99% of living matter: Carbon (C), Hydrogen (H), Oxygen (O), Nitrogen (N), 
            Phosphorus (P), and Sulfur (S) - remembered as CHONPS.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Organic Compounds:</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li><strong>Carbohydrates:</strong> Energy source (glucose), storage (starch, glycogen), structure (cellulose)</li>
              <li><strong>Proteins:</strong> Enzymes, hormones, antibodies, structural components</li>
              <li><strong>Lipids:</strong> Energy storage, cell membranes, insulation</li>
              <li><strong>Nucleic acids:</strong> DNA and RNA - genetic information</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Inorganic Compounds:</h4>
            <ul className="space-y-1 text-sm text-green-800">
              <li><strong>Water (H₂O):</strong> Universal solvent, temperature regulation, chemical reactions</li>
              <li><strong>Salts:</strong> Minerals for bones, nerve function (Na⁺, K⁺, Ca²⁺)</li>
              <li><strong>Acids & Bases:</strong> pH regulation (buffers maintain pH 7.4 in blood)</li>
              <li><strong>Oxygen (O₂):</strong> Cellular respiration</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Enzymes and Catalysis',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Biological Catalysts</h3>
          <p className="text-slate-700 leading-relaxed">
            Enzymes are protein catalysts that speed up biochemical reactions by lowering activation energy. 
            Each enzyme has a specific active site that binds to its substrate (lock-and-key model or induced-fit model).
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 mb-3">Factors Affecting Enzyme Activity:</h4>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="bg-white rounded p-2">
              <strong className="text-purple-800">Temperature</strong>
              <p className="text-purple-700 mt-1">Optimum ~37°C for human enzymes. Too high → denaturation.</p>
            </div>
            <div className="bg-white rounded p-2">
              <strong className="text-purple-800">pH</strong>
              <p className="text-purple-700 mt-1">Each enzyme has optimal pH. Pepsin (stomach) = pH 2; Trypsin (intestine) = pH 8.</p>
            </div>
            <div className="bg-white rounded p-2">
              <strong className="text-purple-800">Substrate Concentration</strong>
              <p className="text-purple-700 mt-1">Increases rate until all active sites are saturated.</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-900">
            <strong>Enzyme specificity:</strong> Amylase breaks down starch, lipase breaks down fats, 
            protease breaks down proteins. Names often end in "-ase" indicating their substrate.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Metabolic Reactions',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Anabolism vs Catabolism</h3>
          <p className="text-slate-700 leading-relaxed">
            Metabolism includes all chemical reactions in living organisms. Anabolic reactions build complex molecules 
            from simpler ones (require energy). Catabolic reactions break down complex molecules (release energy).
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🌱 Anabolic Reactions</h4>
            <ul className="space-y-1 text-sm text-green-800">
              <li><strong>Photosynthesis:</strong> 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂</li>
              <li>Protein synthesis from amino acids</li>
              <li>Glycogen formation from glucose</li>
              <li>DNA replication</li>
              <li><em>Requires energy input (endergonic)</em></li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">🔥 Catabolic Reactions</h4>
            <ul className="space-y-1 text-sm text-red-800">
              <li><strong>Cellular Respiration:</strong> C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP</li>
              <li>Protein breakdown into amino acids</li>
              <li>Glycogen breakdown to glucose</li>
              <li>Fat breakdown (lipolysis)</li>
              <li><em>Releases energy (exergonic)</em></li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>ATP (Adenosine Triphosphate):</strong> The universal energy currency of cells. 
            Energy is released when ATP → ADP + P (phosphate), and stored when ADP + P → ATP.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Sequence of Enzyme Action',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700 leading-relaxed">
          Enzyme-controlled reactions follow a clear sequence. Thinking of the reaction as a flow helps you remember why enzymes are specific and why they can be reused.
        </p>
        <ProcessFlow
          title="Enzyme-catalysed reaction"
          steps={[
            { label: 'Substrate present', icon: '🧪', description: 'Correct molecule available', detail: 'The substrate has a shape that matches the enzyme’s active site.' },
            { label: 'Binding', icon: '🔒', description: 'Enzyme-substrate complex forms', detail: 'Temporary binding lowers the activation energy needed for the reaction.' },
            { label: 'Reaction', icon: '⚗️', description: 'Bonds break or form', detail: 'The substrate is converted into products while attached to the active site.' },
            { label: 'Release', icon: '➡️', description: 'Products leave', detail: 'The products no longer fit the active site and move away.' },
            { label: 'Reuse', icon: '♻️', description: 'Enzyme works again', detail: 'Because the enzyme is unchanged, it can catalyse another reaction if conditions remain suitable.' },
          ]}
        />
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'What is the primary role of enzymes in cells?',
    options: ['Store energy', 'Catalyze chemical reactions', 'Provide structure', 'Produce heat'],
    answer: 'Catalyze chemical reactions',
    explanation: 'Enzymes speed up biochemical reactions by lowering activation energy.',
  },
  {
    prompt: 'Which element is essential for protein synthesis?',
    options: ['Carbon', 'Nitrogen', 'Oxygen', 'Phosphorus'],
    answer: 'Nitrogen',
    explanation: 'Nitrogen is a key component of amino acids that form proteins.',
  },
  {
    prompt: 'What happens to an enzyme when it is denatured?',
    options: ['It works faster', 'It loses its shape and function', 'It multiplies', 'It becomes a substrate'],
    answer: 'It loses its shape and function',
    explanation: 'Denaturation changes the enzyme\'s 3D structure, destroying the active site.',
  },
  {
    prompt: 'Which process is anabolic?',
    options: ['Cellular respiration', 'Digestion of proteins', 'Photosynthesis', 'Breakdown of glycogen'],
    answer: 'Photosynthesis',
    explanation: 'Photosynthesis builds glucose from CO₂ and H₂O, requiring energy input.',
  },
];

const ChemistryOfLifeEnzymes = () => (
  <CapsSubjectTopic
    title="Chemistry of Life and Enzymes"
    subtitle="Biochemistry and cellular processes"
    learnSteps={learnSteps}
    task="gr10-chemistry-of-life-enzymes-t1"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default ChemistryOfLifeEnzymes;
