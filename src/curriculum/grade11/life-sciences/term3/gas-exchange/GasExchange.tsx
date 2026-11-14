import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ls/term3/gas-exchange/diagram.webp", alt: "Gas Exchange" },
    title: 'Structure of the Human Breathing System',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>breathing system</strong> conducts air from the environment to the alveoli, where gas exchange occurs:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl text-left">
          <p className="text-slate-700 font-medium">
            Nasal cavity → Pharynx → Larynx → Trachea → Primary bronchi → Secondary bronchi → Bronchioles → Alveoli
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Trachea</strong>
            <p className="text-slate-600">Reinforced with C-shaped cartilage rings to keep it permanently open. Lined with ciliated mucosa that traps and sweeps particles upward.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Alveoli</strong>
            <p className="text-slate-600">Tiny air sacs at the end of bronchioles. The site of gas exchange. Surrounded by a dense network of capillaries.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Inhalation and Exhalation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Breathing (ventilation) depends on pressure changes created by muscle contractions:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Inhalation (active process)</strong>
            <p className="text-slate-600">Diaphragm contracts and flattens; external intercostal muscles contract, moving ribs up and out → thoracic volume increases → lung pressure falls below atmospheric → air rushes in.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Exhalation (passive at rest)</strong>
            <p className="text-slate-600">Diaphragm relaxes and domes upward; ribs move down and in → thoracic volume decreases → lung pressure rises above atmospheric → air is pushed out.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Forced exhalation (e.g. during exercise) also recruits internal intercostal and abdominal muscles.</p>
      </div>
    ),
  },
  {
    title: 'Gas Exchange at the Alveolus',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Oxygen and carbon dioxide move by <strong>diffusion</strong> across the alveolar wall down their concentration gradients:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">O₂ movement</strong>
            <p className="text-slate-600">High O₂ in alveolus → low O₂ in deoxygenated capillary blood → O₂ binds to haemoglobin in red blood cells → transported to body tissues.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">CO₂ movement</strong>
            <p className="text-slate-600">High CO₂ in capillary blood → low CO₂ in alveolus → CO₂ diffuses into alveolus and is exhaled. Mostly transported as bicarbonate ions (HCO₃⁻) in plasma.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-left mt-2">
          <strong className="text-slate-700">Alveolar adaptations for efficient gas exchange:</strong>
          <p className="text-slate-600">One-cell-thick wall (short diffusion distance), large total surface area (~70 m²), moist inner lining, rich capillary network, continuous ventilation and blood flow maintain steep gradients.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Homeostatic Control of Breathing Rate',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Breathing rate is automatically regulated by the <strong>medulla oblongata</strong> via negative feedback:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-2">
          <p className="text-slate-700">1. During exercise, muscles respire faster → CO₂ levels in blood rise → blood pH falls.</p>
          <p className="text-slate-700">2. Chemoreceptors in the medulla oblongata and carotid bodies detect the pH change.</p>
          <p className="text-slate-700">3. The medulla sends nerve impulses to the diaphragm and intercostal muscles.</p>
          <p className="text-slate-700">4. Breathing rate and depth increase → more CO₂ is expelled and more O₂ is inhaled.</p>
          <p className="text-slate-700">5. Blood CO₂ returns to normal → breathing rate decreases back to resting level (negative feedback).</p>
        </div>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'What is the correct order of structures that air passes through when entering the lungs?',
    options: [
      'Trachea → bronchi → bronchioles → alveoli',
      'Bronchi → trachea → alveoli → bronchioles',
      'Alveoli → bronchioles → bronchi → trachea',
      'Trachea → alveoli → bronchioles → bronchi',
    ],
    answer: 'Trachea → bronchi → bronchioles → alveoli',
    explanation: 'Air travels from the trachea into the two bronchi, branches into bronchioles, and finally reaches the alveoli where gas exchange takes place.',
  },
  {
    prompt: 'What happens to the diaphragm during inhalation?',
    options: ['It relaxes and domes upward', 'It contracts and flattens', 'It moves to the left', 'It does not move during normal breathing'],
    answer: 'It contracts and flattens',
    explanation: 'Contraction of the diaphragm increases the volume of the thoracic cavity, reducing pressure below atmospheric so air flows into the lungs.',
  },
  {
    prompt: 'By which process do O₂ and CO₂ cross the alveolar wall?',
    options: ['Active transport', 'Osmosis', 'Diffusion', 'Endocytosis'],
    answer: 'Diffusion',
    explanation: 'Both gases move passively down their concentration gradients across the thin alveolar membrane — no energy is required.',
  },
  {
    prompt: 'Which feature of the alveolus most effectively increases the rate of gas exchange?',
    options: ['A thick muscular wall around each alveolus', 'A small surface area for each alveolus', 'A wall one cell thick, moist, with many capillaries', 'A dry inner surface that is coated with mucus'],
    answer: 'A wall one cell thick, moist, with many capillaries',
    explanation: 'A thin, moist wall minimises the diffusion distance; abundant capillaries continuously remove O₂ and supply CO₂, maintaining steep concentration gradients.',
  },
  {
    prompt: 'During exercise, breathing rate increases mainly because blood levels of _____ rise:',
    options: ['Oxygen', 'Carbon dioxide', 'Glucose', 'Nitrogen'],
    answer: 'Carbon dioxide',
    explanation: 'Increased CO₂ from muscle metabolism lowers blood pH; chemoreceptors detect this and signal the medulla oblongata to increase breathing rate and depth.',
  },
  {
    prompt: 'During resting exhalation, which muscles relax to reduce thoracic volume?',
    options: ['Internal intercostals contract', 'Diaphragm and external intercostals relax', 'Abdominal muscles contract', 'Diaphragm contracts more strongly'],
    answer: 'Diaphragm and external intercostals relax',
    explanation: 'Resting exhalation is passive: when the diaphragm and external intercostals relax, elastic recoil of the lungs and thoracic wall reduces thoracic volume and forces air out.',
  },
  {
    prompt: 'Carbon dioxide is primarily transported in the blood as:',
    options: ['Bound to haemoglobin only', 'Dissolved CO₂ gas only', 'Bicarbonate ions (HCO₃⁻) in plasma', 'Carbonic acid in red blood cells only'],
    answer: 'Bicarbonate ions (HCO₃⁻) in plasma',
    explanation: 'About 70% of CO₂ is converted to bicarbonate ions in red blood cells and transported in plasma; a smaller portion binds to haemoglobin or dissolves in plasma.',
  },
  {
    prompt: 'The C-shaped cartilage rings of the trachea serve to:',
    options: ['Produce mucus for trapping particles', 'Keep the airway permanently open and prevent it collapsing', 'Carry out gas exchange', 'Filter all bacteria before air enters the lungs'],
    answer: 'Keep the airway permanently open and prevent it collapsing',
    explanation: 'The incomplete cartilage rings provide rigid support that prevents the trachea from collapsing during inhalation, while still allowing the oesophagus behind it to expand when swallowing.',
  },
  {
    prompt: 'Which brain structure sets the automatic rhythm of breathing and adjusts it in response to blood CO₂?',
    options: ['Cerebral cortex', 'Cerebellum', 'Medulla oblongata', 'Hypothalamus'],
    answer: 'Medulla oblongata',
    explanation: 'The respiratory centre in the medulla oblongata generates the basic breathing rhythm and continuously adjusts rate and depth in response to changes in blood CO₂ concentration and pH.',
  },
];

const GasExchange = () => (
  <CapsSubjectTopic
    title="Gas Exchange"
    subtitle="Breathing system, ventilation mechanics, alveolar exchange, and respiratory control"
    learnSteps={learnSteps}
    task="gr11-gas-exchange-t3"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default GasExchange;
