import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ProcessFlow from '../../../../../components/subjects/ProcessFlow';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/ls/term2/transport-systems-mammals/diagram.webp", alt: "Blood Circulation Through the Heart" },
    title: 'Circulatory System',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">The Heart and Blood Vessels</h3>
          <p className="text-slate-700 leading-relaxed">
            Mammals have a closed, double circulatory system with a four-chambered heart. 
            The pulmonary circuit carries deoxygenated blood to the lungs; the systemic circuit 
            delivers oxygenated blood to the body.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">❤️ Heart Structure</h4>
            <ul className="space-y-1 text-sm text-red-800">
              <li><strong>Right atrium:</strong> Receives deoxygenated blood from body (vena cava)</li>
              <li><strong>Right ventricle:</strong> Pumps blood to lungs (pulmonary artery)</li>
              <li><strong>Left atrium:</strong> Receives oxygenated blood from lungs (pulmonary vein)</li>
              <li><strong>Left ventricle:</strong> Pumps blood to body (aorta) - thickest wall</li>
              <li><strong>Valves:</strong> Prevent backflow (tricuspid, bicuspid, semilunar)</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">🩸 Blood Vessels</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li><strong>Arteries:</strong> Carry blood away from heart, thick elastic walls, high pressure</li>
              <li><strong>Veins:</strong> Carry blood to heart, thin walls, valves prevent backflow, low pressure</li>
              <li><strong>Capillaries:</strong> Microscopic vessels, one cell thick, site of exchange (O₂, CO₂, nutrients)</li>
            </ul>
          </div>
        </div>
        <ProcessFlow
          title="Blood Circulation Through the Heart"
          direction="horizontal"
          steps={[
            {
              label: 'Vena Cava',
              description: 'Deoxygenated blood enters',
              detail: 'Blood from body (low O₂, high CO₂) enters right atrium via superior and inferior vena cava.',
              icon: '🔵',
            },
            {
              label: 'Right Side',
              description: 'Atrium → Ventricle',
              detail: 'Right atrium contracts, blood flows through tricuspid valve to right ventricle.',
              icon: '→',
            },
            {
              label: 'Lungs',
              description: 'Gas exchange',
              detail: 'Right ventricle pumps blood via pulmonary artery to lungs where CO₂ is released and O₂ absorbed.',
              icon: '🫁',
            },
            {
              label: 'Left Side',
              description: 'Oxygenated return',
              detail: 'Oxygenated blood returns to left atrium via pulmonary vein, then to left ventricle through bicuspid valve.',
              icon: '🔴',
            },
            {
              label: 'Body',
              description: 'Systemic circulation',
              detail: 'Left ventricle pumps oxygenated blood through aorta to entire body, delivering O₂ and nutrients.',
              icon: '🚀',
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Respiratory System',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Gas Exchange in Lungs</h3>
          <p className="text-slate-700 leading-relaxed">
            The respiratory system brings oxygen into the body and removes carbon dioxide. 
            Gas exchange occurs in the alveoli via diffusion across moist surfaces.
          </p>
        </div>
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
          <h4 className="font-semibold text-teal-900 mb-2">Respiratory Pathway:</h4>
          <p className="text-sm text-teal-800 mb-2">
            <strong>Nose/Mouth → Trachea → Bronchi → Bronchioles → Alveoli</strong>
          </p>
          <ul className="space-y-1 text-sm text-teal-700">
            <li><strong>Nose:</strong> Warms, moistens, and filters air; cilia trap particles</li>
            <li><strong>Trachea:</strong> Windpipe supported by C-shaped cartilage rings</li>
            <li><strong>Bronchi:</strong> Two branches leading to each lung</li>
            <li><strong>Bronchioles:</strong> Smaller airways branching throughout lungs</li>
            <li><strong>Alveoli:</strong> Tiny air sacs (300 million!) where gas exchange occurs</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Breathing Mechanism:</h4>
            <p className="text-sm text-blue-800 mb-2"><strong>Inhalation (inspiration):</strong></p>
            <ul className="text-xs text-blue-700 space-y-0.5 mb-2">
              <li>• Diaphragm contracts (moves down)</li>
              <li>• Rib muscles contract (ribs up and out)</li>
              <li>• Chest cavity volume increases</li>
              <li>• Air pressure decreases, air rushes in</li>
            </ul>
            <p className="text-sm text-blue-800 mb-2"><strong>Exhalation (expiration):</strong></p>
            <ul className="text-xs text-blue-700 space-y-0.5">
              <li>• Diaphragm relaxes (moves up)</li>
              <li>• Rib muscles relax (ribs down and in)</li>
              <li>• Chest cavity volume decreases</li>
              <li>• Air pressure increases, air pushed out</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Alveolar Gas Exchange:</h4>
            <p className="text-sm text-green-800 mb-2">Oxygen and CO₂ diffuse across alveolar walls:</p>
            <ul className="text-xs text-green-700 space-y-1">
              <li>✓ Large surface area (~70 m²)</li>
              <li>✓ Thin walls (one cell thick)</li>
              <li>✓ Moist surface (dissolves gases)</li>
              <li>✓ Rich blood supply (capillary network)</li>
              <li>✓ O₂: alveoli → blood (high to low)</li>
              <li>✓ CO₂: blood → alveoli (high to low)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Excretory System',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Kidneys and Waste Removal</h3>
          <p className="text-slate-700 leading-relaxed">
            The excretory system removes metabolic wastes (urea, excess water, salts) from blood, 
            maintaining homeostasis. The kidneys filter blood and produce urine.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">Kidney Structure:</h4>
            <ul className="space-y-1 text-sm text-purple-800">
              <li><strong>Cortex:</strong> Outer region, contains Bowman's capsules</li>
              <li><strong>Medulla:</strong> Inner region, contains loops of Henle and collecting ducts</li>
              <li><strong>Nephron:</strong> Functional unit (~1 million per kidney) - filters blood</li>
              <li><strong>Ureter:</strong> Tube carrying urine from kidney to bladder</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2">Urine Formation:</h4>
            <ol className="space-y-1 text-sm text-amber-800 list-decimal list-inside">
              <li><strong>Filtration:</strong> Blood filtered in glomerulus (high pressure); water, glucose, salts, urea pass into Bowman's capsule</li>
              <li><strong>Reabsorption:</strong> Useful substances (glucose, amino acids, most water) reabsorbed into blood</li>
              <li><strong>Secretion:</strong> Additional wastes (K⁺, H⁺, drugs) secreted into tubule</li>
            </ol>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Homeostatic functions:</strong> Kidneys regulate water balance (osmoregulation), 
            pH balance (acid-base balance), blood pressure (via renin), and electrolyte levels. 
            ADH hormone controls water reabsorption.
          </p>
        </div>
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'What is the function of the right ventricle?',
    options: ['Pump oxygenated blood to the body', 'Pump deoxygenated blood to lungs', 'Receive blood from veins', 'Filter waste'],
    answer: 'Pump deoxygenated blood to lungs',
    explanation: 'The right ventricle pumps deoxygenated blood to the lungs for oxygenation.',
  },
  {
    prompt: 'Where does gas exchange occur in the lungs?',
    options: ['Trachea', 'Bronchi', 'Alveoli', 'Diaphragm'],
    answer: 'Alveoli',
    explanation: 'Alveoli are tiny air sacs where oxygen and carbon dioxide exchange occurs.',
  },
  {
    prompt: 'What is the primary function of the kidneys?',
    options: ['Make hormones for the body', 'Filter the blood and remove waste', 'Store the urine until it is passed', 'Digest the food that we eat'],
    answer: 'Filter the blood and remove waste',
    explanation: 'Kidneys filter metabolic wastes from blood and produce urine.',
  },
  {
    prompt: 'Which blood vessel carries oxygenated blood away from the heart to the body?',
    options: ['Vena cava', 'Pulmonary artery', 'Aorta', 'Pulmonary vein'],
    answer: 'Aorta',
    explanation: 'The aorta is the main artery that carries oxygenated blood from the left ventricle to the body.',
  },
];

const TransportSystemsMammals = () => (
  <CapsSubjectTopic
    title="Transport Systems in Mammals"
    subtitle="Circulation, respiration, and excretion"
    learnSteps={learnSteps}
    task="gr10-transport-systems-mammals-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default TransportSystemsMammals;
