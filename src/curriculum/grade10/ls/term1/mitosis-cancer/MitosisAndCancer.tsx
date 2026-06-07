import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ProcessFlow from '../../../../../components/subjects/ProcessFlow';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/ls/term1/mitosis-cancer/diagram.webp", alt: "Stages of Mitosis" },
    title: 'Cell Division Overview',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">The Cell Cycle</h3>
          <p className="text-slate-700 leading-relaxed">
            The cell cycle consists of interphase (G1, S, G2) and M phase (mitosis + cytokinesis). 
            Interphase is the growth phase where DNA replicates. Mitosis divides the nucleus, producing 
            two genetically identical daughter cells with the same chromosome number as the parent.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Interphase (90% of cell cycle):</h4>
          <ul className="space-y-1 text-sm text-blue-800">
            <li><strong>G1 Phase:</strong> Cell growth, organelle production, normal metabolism</li>
            <li><strong>S Phase:</strong> DNA replication - chromosomes are duplicated</li>
            <li><strong>G2 Phase:</strong> Continued growth, preparation for mitosis, protein synthesis</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Phases of Mitosis',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Nuclear Division (PMAT)</h3>
          <p className="text-slate-700 leading-relaxed">
            Mitosis ensures genetic continuity. Each daughter cell receives an exact copy of the parent cell's DNA. 
            Remember the sequence: Prophase, Metaphase, Anaphase, Telophase.
          </p>
        </div>
        <ProcessFlow
          title="Stages of Mitosis"
          steps={[
            {
              label: 'Prophase',
              description: 'Chromosomes condense',
              detail: 'Chromatin condenses into visible chromosomes (each consisting of 2 sister chromatids joined at centromere). Nuclear membrane breaks down. Centrioles move to opposite poles. Spindle fibres form.',
              icon: '🧬',
            },
            {
              label: 'Metaphase',
              description: 'Chromosomes align',
              detail: 'Chromosomes line up along the equator (metaphase plate) of the cell. Spindle fibres attach to centromeres. This is the best stage for viewing and counting chromosomes.',
              icon: '➖',
            },
            {
              label: 'Anaphase',
              description: 'Chromatids separate',
              detail: 'Sister chromatids separate and are pulled to opposite poles by spindle fibres. Centromeres split. The cell elongates.',
              icon: '⬅️➡️',
            },
            {
              label: 'Telophase',
              description: 'Two nuclei form',
              detail: 'Chromosomes decondense back into chromatin. Nuclear membranes reform around each set of chromosomes. Spindle fibres disappear. Cytokinesis begins (cleavage furrow in animals, cell plate in plants).',
              icon: '⚪⚪',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Cancer Biology',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Uncontrolled Cell Growth</h3>
          <p className="text-slate-700 leading-relaxed">
            Cancer results from mutations in genes that control the cell cycle. These mutations cause cells to 
            divide uncontrollably, ignore signals to stop dividing, and potentially spread to other tissues (metastasis).
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">Causes of Cancer:</h4>
            <ul className="space-y-1 text-sm text-red-800">
              <li><strong>Carcinogens:</strong> Tobacco smoke, UV radiation, asbestos, certain chemicals</li>
              <li><strong>Genetic factors:</strong> Inherited mutations (e.g., BRCA genes)</li>
              <li><strong>Viruses:</strong> HPV, Hepatitis B/C</li>
              <li><strong>Lifestyle:</strong> Poor diet, lack of exercise, alcohol</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Prevention & Detection:</h4>
            <ul className="space-y-1 text-sm text-green-800">
              <li>Avoid tobacco and excessive sun exposure</li>
              <li>Healthy diet rich in fruits and vegetables</li>
              <li>Regular exercise and maintain healthy weight</li>
              <li>Early screening (mammograms, Pap smears)</li>
              <li>HPV and Hepatitis B vaccinations</li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-900">
            <strong>Tumours:</strong> Benign tumours are non-cancerous, slow-growing, and don't spread. 
            Malignant tumours are cancerous, invade surrounding tissues, and can metastasize via blood/lymph.
          </p>
        </div>
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'What is the primary result of mitosis?',
    options: ['Four haploid cells', 'Two identical diploid cells', 'DNA replication', 'Gamete formation'],
    answer: 'Two identical diploid cells',
    explanation: 'Mitosis produces two genetically identical daughter cells.',
  },
  {
    prompt: 'What causes normal cells to become cancerous?',
    options: ['Lack of oxygen', 'Mutations in genes controlling cell division', 'Too much water', 'Cold temperatures'],
    answer: 'Mutations in genes controlling cell division',
    explanation: 'Cancer results from mutations that disrupt normal cell cycle controls.',
  },
  {
    prompt: 'During which phase of mitosis do chromosomes line up at the equator?',
    options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
    answer: 'Metaphase',
    explanation: 'Chromosomes align at the cell\'s equator during metaphase.',
  },
  {
    prompt: 'What is the difference between benign and malignant tumours?',
    options: ['Benign tumours are fast-growing', 'Malignant tumours spread to other tissues', 'Benign tumours are always fatal', 'Malignant tumours cannot be treated'],
    answer: 'Malignant tumours spread to other tissues',
    explanation: 'Malignant tumours are cancerous and can metastasize; benign tumours do not spread.',
  },
];

const MitosisAndCancer = () => (
  <CapsSubjectTopic
    title="Mitosis and Cancer"
    subtitle="Cell division and abnormal growth"
    learnSteps={learnSteps}
    task="gr10-mitosis-cancer-t1"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default MitosisAndCancer;
