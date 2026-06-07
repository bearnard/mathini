import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ls/term2/cellular-respiration/diagram.webp", alt: "Cellular Respiration" },
    title: 'Overview of Cellular Respiration',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Cellular respiration</strong> is the process by which cells break down glucose to release usable energy as ATP:
        </p>
        <div className="bg-blue-50 p-6 rounded-xl">
          <p className="font-bold text-blue-800 text-xl">C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP</p>
          <p className="text-blue-700 mt-2">(Aerobic respiration — occurs in mitochondria)</p>
        </div>
        <p className="text-slate-600">
          ATP (adenosine triphosphate) is the cell's energy currency, used for muscle contraction, active transport, protein synthesis, and all other energy-requiring processes.
        </p>
      </div>
    ),
  },
  {
    title: 'Aerobic Respiration — Three Stages',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Aerobic respiration requires oxygen and proceeds through three main stages:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">1. Glycolysis (cytoplasm)</strong>
            <p className="text-slate-600">Glucose (6C) is split into 2 pyruvate (3C) molecules. Net gain of 2 ATP. Does not require oxygen.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">2. Krebs Cycle (mitochondrial matrix)</strong>
            <p className="text-slate-600">Pyruvate is fully oxidised to CO₂. Produces NADH and FADH₂ (electron carriers). Small ATP yield per cycle.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">3. Oxidative Phosphorylation (inner mitochondrial membrane)</strong>
            <p className="text-slate-600">Electrons from NADH and FADH₂ drive ATP synthesis. O₂ is the final electron acceptor, forming water. Largest ATP yield (~32–34 ATP).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Anaerobic Respiration',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When oxygen is unavailable, cells use <strong>anaerobic respiration</strong> — less efficient but immediate:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">In animals (lactic acid fermentation)</strong>
            <p className="text-slate-600">Glucose → lactic acid + 2 ATP. Lactic acid accumulates in muscles causing fatigue and soreness. Reversed when O₂ returns (oxygen debt is repaid).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">In yeast (alcoholic fermentation)</strong>
            <p className="text-slate-600">Glucose → ethanol + CO₂ + 2 ATP. Used in bread-making (CO₂ causes dough to rise) and brewing (ethanol produced).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Comparing Aerobic and Anaerobic Respiration',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Key differences between the two pathways:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-3 border border-slate-200">Feature</th>
                <th className="p-3 border border-slate-200">Aerobic</th>
                <th className="p-3 border border-slate-200">Anaerobic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-slate-200">Oxygen required?</td>
                <td className="p-3 border border-slate-200">Yes</td>
                <td className="p-3 border border-slate-200">No</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200">ATP yield per glucose</td>
                <td className="p-3 border border-slate-200">~36–38 ATP</td>
                <td className="p-3 border border-slate-200">2 ATP</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200">End products</td>
                <td className="p-3 border border-slate-200">CO₂ and H₂O</td>
                <td className="p-3 border border-slate-200">Lactic acid OR ethanol + CO₂</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200">Location</td>
                <td className="p-3 border border-slate-200">Cytoplasm + mitochondria</td>
                <td className="p-3 border border-slate-200">Cytoplasm only</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200">Glucose fully broken down?</td>
                <td className="p-3 border border-slate-200">Yes</td>
                <td className="p-3 border border-slate-200">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'Which molecule is the cell\'s primary energy currency produced during cellular respiration?',
    options: ['ADP', 'ATP', 'NADH', 'Glucose'],
    answer: 'ATP',
    explanation: 'ATP (adenosine triphosphate) stores chemical energy in high-energy phosphate bonds and transfers it to drive energy-requiring cell processes.',
  },
  {
    prompt: 'Where does glycolysis take place in the cell?',
    options: ['Mitochondrial matrix', 'Inner mitochondrial membrane', 'Cytoplasm', 'Nucleus'],
    answer: 'Cytoplasm',
    explanation: 'Glycolysis occurs in the cytoplasm and splits one glucose molecule into two pyruvate molecules, yielding a net gain of only 2 ATP — no oxygen is required.',
  },
  {
    prompt: 'Which equation correctly represents aerobic respiration?',
    options: [
      '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
      'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
      'Glucose → lactic acid + ATP',
      'Glucose → ethanol + CO₂',
    ],
    answer: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',
    explanation: 'Aerobic respiration fully oxidises glucose using oxygen, releasing CO₂, water, and a large amount of ATP.',
  },
  {
    prompt: 'During anaerobic respiration in animal muscle cells, which waste product accumulates?',
    options: ['Ethanol', 'Carbon dioxide', 'Lactic acid', 'Pyruvate'],
    answer: 'Lactic acid',
    explanation: 'Without oxygen, animal cells reduce pyruvate to lactic acid. Accumulation of lactic acid lowers muscle pH, causing fatigue and soreness.',
  },
  {
    prompt: 'In yeast, anaerobic fermentation produces:',
    options: ['Lactic acid and CO₂', 'Ethanol and CO₂', 'Water and glucose', 'Oxygen and ATP'],
    answer: 'Ethanol and CO₂',
    explanation: 'Yeast ferment glucose anaerobically into ethanol and CO₂ — CO₂ makes bread rise while ethanol is the basis of brewing alcohol.',
  },
  {
    prompt: 'Approximately how many ATP molecules are produced from one glucose molecule by aerobic respiration?',
    options: ['2', '4', '18', '36–38'],
    answer: '36–38',
    explanation: 'Aerobic respiration yields approximately 36–38 ATP per glucose, with the vast majority produced during oxidative phosphorylation on the inner mitochondrial membrane.',
  },
  {
    prompt: 'What is "oxygen debt" after intense exercise?',
    options: ['The amount of O₂ inhaled per breath', 'The extra oxygen needed to oxidise accumulated lactic acid back to pyruvate', 'A deficiency of ATP in the cell', 'CO₂ produced during the Krebs cycle'],
    answer: 'The extra oxygen needed to oxidise accumulated lactic acid back to pyruvate',
    explanation: 'After anaerobic activity, the body continues breathing heavily to supply oxygen that converts lactic acid back to pyruvate, which is then fully oxidised or used to regenerate glucose.',
  },
  {
    prompt: 'Which stage of aerobic respiration produces the greatest quantity of ATP?',
    options: ['Glycolysis', 'Krebs cycle', 'Oxidative phosphorylation', 'Alcoholic fermentation'],
    answer: 'Oxidative phosphorylation',
    explanation: 'The electron transport chain on the inner mitochondrial membrane (oxidative phosphorylation) generates ~32–34 of the ~36–38 total ATP produced per glucose.',
  },
  {
    prompt: 'Why is anaerobic respiration considered less efficient than aerobic respiration?',
    options: ['It requires oxygen', 'Glucose is only partially broken down, producing only 2 ATP instead of ~36–38', 'It occurs only in yeast cells', 'It produces more water per glucose'],
    answer: 'Glucose is only partially broken down, producing only 2 ATP instead of ~36–38',
    explanation: 'Anaerobic pathways do not fully oxidise glucose, leaving much chemical energy locked in lactic acid (animals) or ethanol (yeast), so far less ATP is released.',
  },
];

const CellularRespiration = () => (
  <CapsSubjectTopic
    title="Cellular Respiration"
    subtitle="Aerobic and anaerobic pathways, ATP production, and oxygen debt"
    learnSteps={learnSteps}
    task="gr11-cellular-respiration-t2"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default CellularRespiration;
