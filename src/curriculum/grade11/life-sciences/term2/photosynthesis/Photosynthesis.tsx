import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'The Photosynthesis Equation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Photosynthesis</strong> is the process by which green plants use light energy to manufacture glucose from CO₂ and water:
        </p>
        <div className="bg-green-50 p-6 rounded-xl">
          <p className="font-bold text-green-800 text-xl">6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</p>
          <p className="text-green-700 mt-2">(light energy absorbed by chlorophyll)</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Raw materials (inputs)</strong>
            <p className="text-slate-600">Carbon dioxide (CO₂) enters through stomata; water (H₂O) absorbed by roots and transported via xylem.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Products (outputs)</strong>
            <p className="text-slate-600">Glucose (C₆H₁₂O₆) — stored as starch; oxygen (O₂) — released as a by-product through stomata.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Chloroplasts, Chlorophyll, and Reaction Stages',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Photosynthesis occurs in <strong>chloroplasts</strong> and proceeds in two stages:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Light reactions (thylakoid membranes)</strong>
            <p className="text-slate-600">Chlorophyll absorbs light. Water is split (photolysis), releasing O₂. ATP and NADPH are produced for the next stage.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Dark reactions / Calvin cycle (stroma)</strong>
            <p className="text-slate-600">ATP and NADPH are used to fix CO₂ into glucose. Can occur without direct light as long as ATP and NADPH are available.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Chlorophyll absorbs mainly red and blue light and reflects green — this is why leaves appear green.</p>
      </div>
    ),
  },
  {
    title: 'Factors Affecting the Rate of Photosynthesis',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The rate of photosynthesis increases with favourable conditions until a <strong>limiting factor</strong> restricts it:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Light intensity</strong>
            <p className="text-slate-600">Rate increases proportionally until another factor becomes limiting. Insufficient light = few reactions.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">CO₂ concentration</strong>
            <p className="text-slate-600">More CO₂ allows more glucose to be produced. At low CO₂ the rate plateaus even with bright light.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Temperature</strong>
            <p className="text-slate-600">Enzyme-controlled; rate rises up to ~35°C then falls sharply as enzymes denature. Very low temperatures slow reactions.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The Starch Test',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>iodine test</strong> detects starch in a leaf, indirectly confirming that photosynthesis occurred:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-2">
          <p className="text-slate-700"><strong>1. Destarch:</strong> Keep the plant in darkness for 24–48 hours to use up existing starch reserves.</p>
          <p className="text-slate-700"><strong>2. Apply variable:</strong> Expose leaf to the experimental condition (e.g. light vs. dark, CO₂ vs. no CO₂).</p>
          <p className="text-slate-700"><strong>3. Boil in water:</strong> Kills the leaf and softens cell walls.</p>
          <p className="text-slate-700"><strong>4. Boil in ethanol:</strong> Removes chlorophyll, decolorising the leaf so colour changes are visible.</p>
          <p className="text-slate-700"><strong>5. Add iodine solution:</strong> Blue-black = starch present (photosynthesis occurred). Yellow-brown = no starch.</p>
        </div>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'What are the two raw materials required for photosynthesis?',
    options: ['Oxygen and glucose', 'Carbon dioxide and water', 'Glucose and ATP', 'Nitrogen and CO₂'],
    answer: 'Carbon dioxide and water',
    explanation: 'Plants absorb CO₂ through stomata and water through roots; both are needed as reactants in the photosynthesis equation.',
  },
  {
    prompt: 'Where in the chloroplast do the light reactions of photosynthesis take place?',
    options: ['Stroma', 'Thylakoid membranes (grana)', 'Outer chloroplast membrane', 'Cytoplasm'],
    answer: 'Thylakoid membranes (grana)',
    explanation: 'Chlorophyll is embedded in the thylakoid membranes, where light energy is captured to split water, produce ATP, and release O₂.',
  },
  {
    prompt: 'Which light colours are most effectively absorbed by chlorophyll?',
    options: ['Green and yellow', 'Red and blue', 'Orange and violet', 'White light only'],
    answer: 'Red and blue',
    explanation: 'Chlorophyll absorbs mainly red and blue wavelengths for photosynthesis; it reflects green light, which is why leaves appear green.',
  },
  {
    prompt: 'What product of photosynthesis is detected by the iodine starch test?',
    options: ['Oxygen released through the stomata', 'Carbon dioxide taken in by the leaf', 'Glucose stored as starch', 'Water taken up through the roots'],
    answer: 'Glucose stored as starch',
    explanation: 'Plants rapidly convert glucose into insoluble starch for storage; iodine turns blue-black in the presence of starch, confirming photosynthesis occurred.',
  },
  {
    prompt: 'Why must a leaf be destarched before a photosynthesis experiment?',
    options: ['To remove the water that is in the leaf', 'To remove old starch so only newly made starch shows', 'To raise the rate of photosynthesis in the leaf', 'To make the iodine solution work more strongly'],
    answer: 'To remove old starch so only newly made starch shows',
    explanation: 'Destarching in darkness ensures that any starch detected at the end of the experiment was produced during the experiment, not stored beforehand.',
  },
  {
    prompt: 'At high temperatures, the rate of photosynthesis decreases sharply because:',
    options: ['More CO₂ is produced', 'Chlorophyll is broken down by heat', 'Enzymes that control the reactions are denatured', 'Water is no longer available to the plant'],
    answer: 'Enzymes that control the reactions are denatured',
    explanation: 'Photosynthesis depends on enzymes (e.g. RuBisCO). Above ~40°C these proteins lose their shape (denature) and can no longer catalyse reactions.',
  },
  {
    prompt: 'Which equation correctly represents the overall reaction for photosynthesis?',
    options: [
      'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy',
      '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
      '6O₂ + glucose → CO₂ + H₂O',
      'CO₂ + H₂O → O₂ only',
    ],
    answer: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
    explanation: 'Photosynthesis converts CO₂ and H₂O into glucose and oxygen using light energy captured by chlorophyll in the chloroplasts.',
  },
  {
    prompt: 'What happens to the rate of photosynthesis when CO₂ becomes a limiting factor?',
    options: ['Rate continues to rise with more light', 'Rate falls to zero immediately', 'Rate plateaus despite increases in light intensity', 'Rate doubles'],
    answer: 'Rate plateaus despite increases in light intensity',
    explanation: 'When CO₂ supply is insufficient, providing more light energy cannot speed up the dark (Calvin cycle) reactions because the substrate is limiting.',
  },
  {
    prompt: 'Why is ethanol used during the starch test procedure?',
    options: ['To add starch to the leaf for the test', 'To remove green chlorophyll so the iodine colour shows', 'To kill the bacteria that are on the leaf', 'To speed up photosynthesis during the test'],
    answer: 'To remove green chlorophyll so the iodine colour shows',
    explanation: 'Boiling the leaf in ethanol decolorises it (removes the green chlorophyll), making the blue-black colour of iodine easy to see against the pale background.',
  },
];

const Photosynthesis = () => (
  <CapsSubjectTopic
    title="Photosynthesis"
    subtitle="Process, raw materials, limiting factors, and starch test"
    learnSteps={learnSteps}
    task="gr11-photosynthesis-t2"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default Photosynthesis;
