import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Classification of Micro-organisms',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Micro-organisms</strong> are too small to see with the naked eye. The four main groups are:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Viruses</strong>
            <p className="text-slate-600">Non-cellular; require a host cell to replicate. Cause influenza, HIV, COVID-19.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Bacteria</strong>
            <p className="text-slate-600">Prokaryotic, single-celled. Some cause TB and cholera; others fix nitrogen.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Protists</strong>
            <p className="text-slate-600">Eukaryotic, unicellular organisms. Plasmodium causes malaria.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Fungi</strong>
            <p className="text-slate-600">Eukaryotic decomposers. Cause athlete's foot; used in making bread and beer.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Ecological Roles and Biotechnology Uses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Many micro-organisms play <strong>vital roles</strong> in ecosystems and industry:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Decomposition</strong>
            <p className="text-slate-600">Bacteria and fungi break down dead organic matter, recycling nutrients back into the soil.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Nitrogen Fixation</strong>
            <p className="text-slate-600">Rhizobium bacteria in root nodules fix atmospheric N₂ into usable ammonia for plants.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Food Production</strong>
            <p className="text-slate-600">Yeast ferments sugars to make bread and alcohol; bacteria produce yoghurt and cheese.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Medicine</strong>
            <p className="text-slate-600">Penicillin is produced by the fungus Penicillium; bacteria produce insulin via genetic engineering.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Disease-causing Micro-organisms (Pathogens)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Pathogens invade the body and disrupt normal functioning:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-3 border border-slate-200">Pathogen type</th>
                <th className="p-3 border border-slate-200">Example disease</th>
                <th className="p-3 border border-slate-200">Transmission</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-slate-200">Virus</td>
                <td className="p-3 border border-slate-200">HIV / AIDS</td>
                <td className="p-3 border border-slate-200">Bodily fluids</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200">Bacterium</td>
                <td className="p-3 border border-slate-200">Tuberculosis (TB)</td>
                <td className="p-3 border border-slate-200">Airborne droplets</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200">Protist</td>
                <td className="p-3 border border-slate-200">Malaria</td>
                <td className="p-3 border border-slate-200">Anopheles mosquito</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200">Fungus</td>
                <td className="p-3 border border-slate-200">Ringworm</td>
                <td className="p-3 border border-slate-200">Direct contact</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: 'Disease Prevention and Management',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Diseases can be prevented and managed through several strategies:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Vaccination</strong>
            <p className="text-slate-600">Stimulates immune memory to defend against future infections (e.g., flu, COVID-19 vaccines).</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Antibiotics</strong>
            <p className="text-slate-600">Kill or inhibit bacterial growth. Ineffective against viruses — misuse causes resistance.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Hygiene and Sanitation</strong>
            <p className="text-slate-600">Hand-washing, clean water, and waste disposal reduce transmission of many pathogens.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Vector Control</strong>
            <p className="text-slate-600">Eliminating mosquito breeding sites reduces malaria and dengue fever incidence.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Why medicines stop working",
    content: (
      <div className="space-y-4">
        <GapRule>{"Each time antibiotics are used, a few bacteria may carry a gene that lets them survive. If the drugs are over-used or a course is stopped early, those survivors multiply and pass the gene on."}</GapRule>
        <GapWorked title={"Follow the survivors"} steps={["A patient stops taking tablets after three days.", "The few tough bacteria live and divide.", "The next infection no longer responds to that drug."]} />
        <GapMistake>{"Saying the patient's body becomes resistant."}</GapMistake>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'Which group of micro-organisms is non-cellular and can only replicate inside a host cell?',
    options: ['Bacteria', 'Fungi', 'Viruses', 'Protists'],
    answer: 'Viruses',
    explanation: 'Viruses lack cell structure and depend entirely on a host cell\'s machinery to reproduce.',
  },
  {
    prompt: 'Rhizobium bacteria found in root nodules of legumes perform which ecological role?',
    options: ['Decomposition', 'Nitrogen fixation', 'Fermentation', 'Photosynthesis'],
    answer: 'Nitrogen fixation',
    explanation: 'Rhizobium fixes atmospheric N₂ into ammonia that plants can use, enriching the soil. Other soil bacteria can then change the ammonia into nitrates.',
  },
  {
    prompt: 'Which micro-organism causes malaria?',
    options: ['A virus, such as the one that causes flu', 'A bacterium, such as the one that causes TB', 'A protist (Plasmodium)', 'A fungus, such as the one that causes ringworm'],
    answer: 'A protist (Plasmodium)',
    explanation: 'Plasmodium is a protist transmitted by the female Anopheles mosquito, causing malaria.',
  },
  {
    prompt: 'Antibiotics are effective against which group of micro-organisms?',
    options: ['Viruses only', 'Bacteria only', 'All micro-organisms', 'Fungi only'],
    answer: 'Bacteria only',
    explanation: 'Antibiotics target bacterial cell processes; they have no effect on viruses, protists, or fungi.',
  },
  {
    prompt: 'The fungus Penicillium is important in medicine because it:',
    options: ['It causes the disease called tuberculosis', 'It makes the antibiotic penicillin', 'It spreads HIV from person to person', 'It fixes nitrogen from the air in the soil'],
    answer: 'It makes the antibiotic penicillin',
    explanation: 'Alexander Fleming discovered that Penicillium moulds produce penicillin, the first antibiotic used to treat bacterial infections.',
  },
  {
    prompt: 'Tuberculosis (TB) is transmitted mainly by:',
    options: ['Contaminated drinking water from a river', 'Airborne respiratory droplets', 'Bites from infected mosquitoes', 'Direct skin contact with a sick person'],
    answer: 'Airborne respiratory droplets',
    explanation: 'Mycobacterium tuberculosis spreads when an infected person coughs or sneezes, releasing droplets that are inhaled.',
  },
  {
    prompt: 'Which process carried out by bacteria and fungi recycles nutrients from dead organisms?',
    options: ['Nitrogen fixation', 'Decomposition', 'Fermentation', 'Photosynthesis'],
    answer: 'Decomposition',
    explanation: 'Decomposers break down dead organic matter, releasing mineral nutrients back into the soil for plants to use.',
  },
  {
    prompt: 'A vaccination works by:',
    options: ['Killing all of the pathogens in the body at once', 'Stimulating the immune system to make memory cells', 'Giving a direct antibiotic action against the germ', 'Lowering a fever and doing nothing more'],
    answer: 'Stimulating the immune system to make memory cells',
    explanation: 'Vaccines introduce antigens that trigger immune memory, enabling a rapid and powerful response to future infection by the same pathogen.',
  },
  {
    prompt: 'Which disease is caused by a protist and spread through a vector?',
    options: ['Influenza', 'Malaria', 'Ringworm', 'Tuberculosis'],
    answer: 'Malaria',
    explanation: 'Malaria is caused by the protist Plasmodium, transmitted via the bite of a female Anopheles mosquito (the vector).',
  },
  {
    prompt: 'Why is antibiotic resistance a concern in disease management?',
    options: ['Antibiotics become more powerful over time', 'Overuse selects for bacteria that survive antibiotic treatment', 'Antibiotics kill viruses', 'Bacteria stop reproducing when exposed to antibiotics'],
    answer: 'Overuse selects for bacteria that survive antibiotic treatment',
    explanation: 'Excessive antibiotic use kills susceptible bacteria but leaves resistant strains to multiply, making infections increasingly difficult to treat.',
  },
];

const MicroorganismsAndDisease = () => (
  <CapsSubjectTopic
    title="Micro-organisms and Disease"
    subtitle="Classification, ecological roles, and disease management"
    learnSteps={learnSteps}
    task="gr11-microorganisms-disease-t1"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default MicroorganismsAndDisease;
