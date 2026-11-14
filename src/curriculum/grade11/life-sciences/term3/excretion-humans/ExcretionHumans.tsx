import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/ls/term3/excretion-humans/diagram.webp", alt: "Excretion in Humans" },
    title: 'Kidney Structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>kidneys</strong> excrete nitrogenous waste (urea) and regulate water and ion balance (osmoregulation):
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Cortex (outer)</strong>
            <p className="text-slate-600">Contains Bowman's capsules, glomeruli, and proximal and distal convoluted tubules.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Medulla (inner)</strong>
            <p className="text-slate-600">Contains loops of Henle and collecting ducts. Creates the concentration gradient needed for water reabsorption.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Pelvis (central)</strong>
            <p className="text-slate-600">Funnel-shaped cavity where urine collects before draining into the ureter and then the bladder.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Each kidney contains approximately one million nephrons — the microscopic functional units of the kidney.</p>
      </div>
    ),
  },
  {
    title: 'The Nephron and Urine Formation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Urine is produced through three sequential processes in the nephron:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">1. Ultrafiltration</strong>
            <p className="text-slate-600">High blood pressure in the glomerulus forces small molecules (water, urea, glucose, salts) through the capillary walls into the Bowman's capsule as filtrate. Large proteins and blood cells remain in the blood.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">2. Selective Reabsorption</strong>
            <p className="text-slate-600">All glucose, most water and salts are reabsorbed from the tubule back into surrounding capillaries by active transport and osmosis. Urea is not reabsorbed — it remains in the filtrate.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">3. Tubular Secretion</strong>
            <p className="text-slate-600">Additional waste substances (excess H⁺ ions, some drugs, creatinine) are actively secreted from the blood into the tubule fluid to be excreted in urine.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Filtrate vs Urine Composition',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The composition of fluid changes dramatically as it travels through the nephron:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-3 border border-slate-200">Substance</th>
                <th className="p-3 border border-slate-200">Filtrate (Bowman's capsule)</th>
                <th className="p-3 border border-slate-200">Urine (collecting duct)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-slate-200">Water</td>
                <td className="p-3 border border-slate-200">Present</td>
                <td className="p-3 border border-slate-200">Present (concentrated)</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200">Glucose</td>
                <td className="p-3 border border-slate-200">Present</td>
                <td className="p-3 border border-slate-200">Absent (fully reabsorbed)</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200">Urea</td>
                <td className="p-3 border border-slate-200">Present (dilute)</td>
                <td className="p-3 border border-slate-200">Present (concentrated)</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200">Proteins</td>
                <td className="p-3 border border-slate-200">Absent (too large to filter)</td>
                <td className="p-3 border border-slate-200">Absent</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200">Red blood cells</td>
                <td className="p-3 border border-slate-200">Absent</td>
                <td className="p-3 border border-slate-200">Absent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: 'Kidney Failure and Dialysis',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When kidneys fail, medical interventions replace their function:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Haemodialysis</strong>
            <p className="text-slate-600">Blood is pumped through a dialysis machine. Urea and excess salts diffuse across a semipermeable membrane into dialysis fluid. Cleaned blood is returned. Typically 3× per week, ~4 hours each session.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Kidney Transplant</strong>
            <p className="text-slate-600">A donor kidney replaces the failed kidney. Requires tissue (HLA) matching and lifelong immunosuppressant medication to prevent rejection. More effective long-term than dialysis.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Kidney failure symptoms: uraemia (urea in blood), fluid retention, hypertension, and fatigue.</p>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'What is the functional unit of the kidney responsible for producing urine?',
    options: ['Ureter', 'Nephron', 'Collecting duct', 'Renal pelvis'],
    answer: 'Nephron',
    explanation: 'Each kidney contains about 1 million nephrons — microscopic tubular structures that filter blood and progressively modify the filtrate to produce urine.',
  },
  {
    prompt: 'During ultrafiltration, which substances are forced into the Bowman\'s capsule?',
    options: ['Only urea, which is the waste product', 'Small molecules: water, glucose, salts and urea', 'Proteins and red blood cells from the blood', 'Only water and urea, with no glucose or salts'],
    answer: 'Small molecules: water, glucose, salts and urea',
    explanation: 'High glomerular blood pressure forces small molecules through the capillary walls; large molecules such as plasma proteins and blood cells are too large and remain in the blood.',
  },
  {
    prompt: 'Why is glucose normally absent from urine?',
    options: ['It is too large to filter into the Bowman\'s capsule', 'It is fully reabsorbed in the proximal convoluted tubule', 'It is broken down into CO₂ in the kidney', 'It is converted to urea in the loop of Henle'],
    answer: 'It is fully reabsorbed in the proximal convoluted tubule',
    explanation: 'All glucose that enters the filtrate is actively transported back into the surrounding capillaries in the proximal convoluted tubule, so none remains in the final urine.',
  },
  {
    prompt: 'What does the presence of glucose in urine (glycosuria) most likely indicate?',
    options: ['Normal kidney function in a healthy person', 'High blood glucose, possibly diabetes mellitus', 'A successful kidney transplant in a patient', 'A diet that is too rich in protein'],
    answer: 'High blood glucose, possibly diabetes mellitus',
    explanation: 'When blood glucose exceeds the renal threshold (~10 mmol/L), the proximal tubule transport proteins are saturated and glucose cannot be fully reabsorbed, so it appears in urine.',
  },
  {
    prompt: 'Which part of the nephron is primarily responsible for the selective reabsorption of glucose?',
    options: ["The Bowman's capsule around the glomerulus", 'The collecting duct that leads to the ureter', 'The proximal convoluted tubule', 'The loop of Henle that dips into the medulla'],
    answer: 'The proximal convoluted tubule',
    explanation: 'The proximal convoluted tubule reabsorbs all glucose, amino acids, and large amounts of water and salts by active transport and osmosis immediately after filtration.',
  },
  {
    prompt: 'What is the main purpose of haemodialysis?',
    options: ['To put a healthy kidney into the patient', 'To filter blood artificially and remove urea when kidneys fail', 'To raise the amount of urine that is made', 'To control the blood pressure of the patient only'],
    answer: 'To filter blood artificially and remove urea when kidneys fail',
    explanation: 'A dialysis machine mimics kidney function by passing blood over a semipermeable membrane that allows urea and excess ions to diffuse out into dialysis fluid.',
  },
  {
    prompt: 'In which region of the kidney are the Bowman\'s capsules and glomeruli located?',
    options: ['Renal pelvis', 'Medulla', 'Cortex', 'Ureter'],
    answer: 'Cortex',
    explanation: 'The renal cortex is the outer layer of the kidney and contains the filtration components — Bowman\'s capsules and glomeruli — as well as the proximal and distal convoluted tubules.',
  },
  {
    prompt: 'What is the primary function of the loop of Henle?',
    options: ['Ultrafiltration of the blood under pressure', 'Building a concentration gradient in the medulla', 'Secreting urea into the tubule of the nephron', 'Making the hormone ADH for the body'],
    answer: 'Building a concentration gradient in the medulla',
    explanation: 'The descending and ascending limbs of the loop of Henle work as a countercurrent multiplier, building a high salt concentration in the medulla that draws water out of the collecting duct by osmosis.',
  },
  {
    prompt: 'Which hormone increases the permeability of the collecting duct to water, producing concentrated urine?',
    options: ['Insulin, which lowers the level of blood glucose', 'ADH (anti-diuretic hormone)', 'Glucagon, which raises the level of blood glucose', 'Adrenaline, which prepares the body for action'],
    answer: 'ADH (anti-diuretic hormone)',
    explanation: 'ADH (vasopressin), released by the pituitary gland when blood is too concentrated, inserts water channels (aquaporins) into the collecting duct wall, allowing more water to be reabsorbed.',
  },
];

const ExcretionHumans = () => (
  <CapsSubjectTopic
    title="Excretion in Humans"
    subtitle="Kidney structure, nephron, urine formation, and kidney failure"
    learnSteps={learnSteps}
    task="gr11-excretion-humans-t3"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default ExcretionHumans;
