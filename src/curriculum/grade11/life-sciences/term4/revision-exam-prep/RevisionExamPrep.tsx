import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Biodiversity and Life Processes — Key Concepts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Review the major content areas examined in Grade 11 Life Sciences:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Biodiversity (Term 1)</strong>
            <p className="text-slate-600">Micro-organisms (4 groups), plant divisions (bryophytes → angiosperms), animal phyla (invertebrate body plans, symmetry, germ layers, vertebrate classes).</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Life Processes (Terms 2 and 3)</strong>
            <p className="text-slate-600">Photosynthesis (equation, factors, starch test), animal nutrition (canal, enzymes, blood glucose), cellular respiration (aerobic vs. anaerobic), gas exchange (ventilation, alveoli), excretion (nephron, urine formation).</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Ecology (Terms 3 and 4)</strong>
            <p className="text-slate-600">Population ecology (growth curves, carrying capacity, interactions, succession), human impact (climate change, ozone, water quality, biodiversity loss, waste).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Exam structure</strong>
            <p className="text-slate-600">Paper 1 (Theory) and Paper 2 (includes practical skills, data response, graphs, biological drawings). Both papers carry equal marks.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Biological Drawings — Rules and Tips',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Biological diagrams carry marks for accuracy, presentation, and labelling:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-2">
          <p className="text-slate-700"><strong>1. Use pencil</strong> only — no shading or colour unless instructed.</p>
          <p className="text-slate-700"><strong>2. Clear lines</strong> — no sketching; lines must be single, continuous, and accurate.</p>
          <p className="text-slate-700"><strong>3. Labels</strong> — use horizontal lines to clearly indicate each structure; never use arrows pointing vaguely at shaded areas.</p>
          <p className="text-slate-700"><strong>4. Title</strong> — write a clear, descriptive title above the diagram (e.g. "Longitudinal section of a kidney").</p>
          <p className="text-slate-700"><strong>5. Magnification</strong> — if asked, calculate: Drawing size ÷ Actual size = ×N.</p>
          <p className="text-slate-700"><strong>6. Proportion</strong> — parts should be roughly to scale relative to each other.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Graph and Data Interpretation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Data-response questions test your ability to read, interpret, and evaluate biological information:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Reading graphs</strong>
            <p className="text-slate-600">Always read both axes, note units, identify the independent and dependent variables, and describe the trend accurately (increase, decrease, plateau, peak).</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Calculating rates and percentage changes</strong>
            <p className="text-slate-600">Rate = change in dependent variable ÷ change in time. Percentage change = (new − old) ÷ old × 100. Show all working for part marks.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Tables</strong>
            <p className="text-slate-600">Identify anomalous results. Use comparison words like "greater than", "lower than", or "similar to" with specific values from the data.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Conclusions vs observations</strong>
            <p className="text-slate-600">An <em>observation</em> states what is seen in the data. A <em>conclusion</em> explains why, linking to biological knowledge. Examiners penalise observations presented as conclusions.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Exam Technique — Extended Responses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          High-mark questions require structured, precise answers with correct biological terminology:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-2">
          <p className="text-slate-700"><strong>"Describe"</strong> — state facts in logical order; no explanation needed unless asked.</p>
          <p className="text-slate-700"><strong>"Explain"</strong> — give reasons or mechanisms; link cause to effect using "because", "therefore", "as a result".</p>
          <p className="text-slate-700"><strong>"Compare"</strong> — address both sides using comparative language ("in contrast", "whereas"); include specific differences AND similarities if marks allow.</p>
          <p className="text-slate-700"><strong>"Evaluate"</strong> — weigh up advantages and disadvantages; support your judgement with evidence from the data or your knowledge.</p>
          <p className="text-slate-700"><strong>Mark allocation tip:</strong> Count the marks allocated and give at least that many distinct points.</p>
        </div>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'Which plant group has vascular tissue, produces seeds in cones, but does NOT produce flowers?',
    options: ['Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms'],
    answer: 'Gymnosperms',
    explanation: 'Gymnosperms (e.g. conifers, cycads) have vascular tissue and produce naked seeds in cones but lack flowers and enclosed fruit — features that distinguish them from angiosperms.',
  },
  {
    prompt: 'During aerobic respiration, where does the Krebs cycle take place?',
    options: ['Cytoplasm', 'Thylakoid membrane', 'Mitochondrial matrix', 'Inner mitochondrial membrane'],
    answer: 'Mitochondrial matrix',
    explanation: 'The Krebs (citric acid) cycle occurs in the fluid-filled matrix of the mitochondria, where pyruvate is fully oxidised to CO₂ and electron carriers (NADH, FADH₂) are produced.',
  },
  {
    prompt: 'A student tests a leaf for starch and finds a blue-black colour after adding iodine. What does this confirm?',
    options: ['Cellular respiration took place in the leaf', 'Photosynthesis occurred and glucose was stored as starch', 'The leaf had not been destarched beforehand', 'CO₂ was given off by the leaf in the light'],
    answer: 'Photosynthesis occurred and glucose was stored as starch',
    explanation: 'Iodine turns blue-black in the presence of starch. Since starch is the storage product of photosynthesis, its presence confirms that the leaf was photosynthesising.',
  },
  {
    prompt: 'Which process in the nephron forces small molecules from the blood into the Bowman\'s capsule?',
    options: ['Selective reabsorption', 'Tubular secretion', 'Ultrafiltration', 'Osmosis only'],
    answer: 'Ultrafiltration',
    explanation: 'High blood pressure in the glomerulus forces water, urea, glucose, and salts through the capillary walls into the Bowman\'s capsule — a process called ultrafiltration.',
  },
  {
    prompt: 'In an S-shaped population growth curve, the population levels off because:',
    options: ['Immigration into the area stops completely', 'Resources run short and carrying capacity limits growth', 'All of the predators have been removed', 'The temperature of the area drops sharply'],
    answer: 'Resources run short and carrying capacity limits growth',
    explanation: 'As population density rises, competition for food, space, and other resources intensifies. Birth rates fall and death rates increase until the population stabilises at the carrying capacity (K).',
  },
  {
    prompt: 'Gas exchange in the alveoli relies on diffusion. Which condition maintains the steepest concentration gradients?',
    options: ['Slow blood flow and infrequent breathing in the lung', 'Steady breathing and constant capillary blood flow', 'A thick alveolar wall in the lung tissue', 'A dry surface inside each of the alveoli'],
    answer: 'Steady breathing and constant capillary blood flow',
    explanation: 'Ventilation replenishes O₂ and removes CO₂ from alveolar air; blood flow carries O₂ away and delivers CO₂ to the alveolus — together they maintain the gradients that drive diffusion.',
  },
  {
    prompt: 'Which ecological interaction benefits one organism while neither harming nor helping the other?',
    options: ['Mutualism', 'Parasitism', 'Commensalism', 'Predation'],
    answer: 'Commensalism',
    explanation: 'In commensalism one species benefits while the other is unaffected. For example, barnacles attached to a whale gain transport to feeding areas, while the whale is neither helped nor harmed.',
  },
  {
    prompt: 'Which human activity directly increases atmospheric CO₂ AND decreases the Earth\'s ability to absorb CO₂?',
    options: ['Renewable energy use', 'Deforestation', 'Water recycling', 'Composting'],
    answer: 'Deforestation',
    explanation: 'Burning or decomposing cleared trees releases stored carbon as CO₂, and the loss of trees means less photosynthesis to absorb atmospheric CO₂ — a double contribution to climate change.',
  },
  {
    prompt: 'When drawing a biological diagram in an exam, labels should be indicated by:',
    options: ['Arrows that are drawn at an angle across the diagram', 'Horizontal lines touching the structure and ending at a label', 'Marks made with a coloured pencil on the structure', 'A circle that is drawn round the structure itself'],
    answer: 'Horizontal lines touching the structure and ending at a label',
    explanation: 'CAPS biological drawings require neat, horizontal label lines (not diagonal arrows) that clearly point to the relevant structure to earn presentation marks.',
  },
  {
    prompt: 'A question asks you to "evaluate" a proposed solution to water pollution. What must your answer include?',
    options: ['Only the advantages of the solution that is proposed', 'Only a list of facts about water pollution', 'A balanced look at pros and cons, with evidence', 'A biological drawing that shows water pollution'],
    answer: 'A balanced look at pros and cons, with evidence',
    explanation: 'An "evaluate" response requires a judgement supported by evidence — considering both the merits and limitations of the proposal to arrive at a reasoned conclusion.',
  },
];

const RevisionExamPrep = () => (
  <CapsSubjectTopic
    title="Revision and Examination Practice"
    subtitle="Integrating Grade 11 content, drawings, graphs, and exam technique"
    learnSteps={learnSteps}
    task="gr11-ls-revision-exam-prep-t4"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default RevisionExamPrep;
