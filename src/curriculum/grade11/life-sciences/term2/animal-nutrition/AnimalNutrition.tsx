import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { LSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'The Alimentary Canal',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>alimentary canal</strong> runs from mouth to anus. Food is processed as it moves through each region:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl text-left">
          <p className="text-slate-700 font-medium">
            Mouth → Oesophagus → Stomach → Small intestine (duodenum → jejunum → ileum) → Large intestine → Rectum → Anus
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Mechanical digestion</strong>
            <p className="text-slate-600">Chewing (mouth) and churning (stomach) physically break food into smaller pieces, increasing surface area for chemical digestion.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Chemical digestion</strong>
            <p className="text-slate-600">Enzymes break large molecules: amylase (starch → maltose), protease (protein → amino acids), lipase (fat → fatty acids + glycerol).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Associated Digestive Glands',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Several glands produce secretions that assist digestion at specific points along the canal:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Salivary glands</strong>
            <p className="text-slate-600">Produce saliva containing salivary amylase (begins starch digestion) and mucus (lubricates the food bolus).</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Liver</strong>
            <p className="text-slate-600">Produces bile (stored in the gall bladder). Bile emulsifies large fat droplets into smaller ones, increasing surface area for lipase.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Pancreas</strong>
            <p className="text-slate-600">Secretes pancreatic juice containing amylase, trypsin (protease), and lipase into the duodenum. Also neutralises stomach acid.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Absorption and Assimilation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Digested nutrients are absorbed primarily in the <strong>small intestine</strong>:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Villus adaptations</strong>
            <p className="text-slate-600">Finger-like villi and microvilli (brush border) enormously increase surface area. Each villus contains capillaries and a lacteal (lymph vessel).</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Absorption routes</strong>
            <p className="text-slate-600">Glucose and amino acids → capillaries → hepatic portal vein → liver. Fatty acids and glycerol → lacteals → lymphatic system → bloodstream.</p>
          </div>
        </div>
        <p className="text-slate-600">
          <strong>Assimilation</strong> = the use of absorbed nutrients by body cells for energy, growth, and repair.
        </p>
      </div>
    ),
  },
  {
    title: 'Blood Glucose Control',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Blood glucose is maintained within narrow limits by <strong>hormonal feedback</strong> involving the pancreas:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">After a meal (high glucose)</strong>
            <p className="text-slate-600">β-cells in the pancreas secrete <strong>insulin</strong>. Liver converts excess glucose → glycogen (glycogenesis). Blood glucose falls back to normal.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">After exercise (low glucose)</strong>
            <p className="text-slate-600">α-cells in the pancreas secrete <strong>glucagon</strong>. Liver converts glycogen → glucose (glycogenolysis). Blood glucose rises back to normal.</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Diabetes mellitus: Type 1 — no insulin produced. Type 2 — cells are resistant to insulin.</p>
      </div>
    ),
  },
];

const bank: LSItem[] = [
  {
    prompt: 'Which enzyme begins the chemical digestion of starch in the mouth?',
    options: ['Pepsin', 'Lipase', 'Salivary amylase', 'Trypsin'],
    answer: 'Salivary amylase',
    explanation: 'Salivary glands produce amylase, which begins breaking down starch into maltose in the mouth — the first step of chemical digestion.',
  },
  {
    prompt: 'What is the role of bile in the digestion of fats?',
    options: ['It digests proteins into amino acids', 'It emulsifies large fat globules into smaller droplets', 'It converts glucose to glycogen', 'It absorbs water in the colon'],
    answer: 'It emulsifies large fat globules into smaller droplets',
    explanation: 'Bile (produced by the liver, stored in the gall bladder) has no enzymes but breaks fat into smaller droplets, vastly increasing the surface area available to lipase.',
  },
  {
    prompt: 'In which organ are most digested nutrients absorbed into the bloodstream?',
    options: ['Stomach', 'Large intestine', 'Small intestine', 'Oesophagus'],
    answer: 'Small intestine',
    explanation: 'Villi and microvilli in the small intestine create enormous surface area, enabling efficient absorption of glucose, amino acids, and fatty acids.',
  },
  {
    prompt: 'Which hormone stimulates the liver to convert glycogen back into glucose?',
    options: ['Insulin', 'Adrenaline', 'Glucagon', 'Oestrogen'],
    answer: 'Glucagon',
    explanation: 'When blood glucose is low, α-cells in the pancreas secrete glucagon, which signals the liver to break down glycogen into glucose (glycogenolysis).',
  },
  {
    prompt: 'Fatty acids and glycerol are absorbed into which structure inside the villus?',
    options: ['Blood capillaries', 'Lacteals', 'Arterioles', 'Veins'],
    answer: 'Lacteals',
    explanation: 'Fatty acids and glycerol reassemble into triglycerides and enter lacteals (lymphatic capillaries) rather than blood capillaries, eventually joining the bloodstream via the thoracic duct.',
  },
  {
    prompt: 'The pancreatic enzyme that breaks down proteins in the small intestine is:',
    options: ['Amylase', 'Lipase', 'Trypsin', 'Salivary amylase'],
    answer: 'Trypsin',
    explanation: 'Trypsin is a protease secreted by the pancreas into the duodenum, where it cleaves proteins and polypeptides into smaller peptides and amino acids.',
  },
  {
    prompt: 'What is assimilation in the context of nutrition?',
    options: ['Breaking down food into smaller molecules', 'Absorbing nutrients through the gut wall', 'Using absorbed nutrients within body cells for growth, energy, and repair', 'Excreting undigested material as faeces'],
    answer: 'Using absorbed nutrients within body cells for growth, energy, and repair',
    explanation: 'Assimilation is the final stage of nutrition, where absorbed nutrients are incorporated into cellular structures or metabolised for energy.',
  },
  {
    prompt: 'Which organ produces bile?',
    options: ['Pancreas', 'Stomach', 'Gall bladder', 'Liver'],
    answer: 'Liver',
    explanation: 'The liver produces bile continuously; the gall bladder only stores it and releases it into the duodenum when fatty food arrives.',
  },
  {
    prompt: 'In Type 1 diabetes, blood glucose remains elevated because:',
    options: ['Too much glucagon is secreted', 'The pancreas does not produce enough insulin', 'The liver stores too little glycogen', 'Bile is overproduced'],
    answer: 'The pancreas does not produce enough insulin',
    explanation: 'Type 1 diabetes is an autoimmune condition in which the insulin-secreting β-cells in the pancreas are destroyed, so glucose cannot enter cells or be stored as glycogen.',
  },
];

const AnimalNutrition = () => (
  <CapsSubjectTopic
    title="Animal Nutrition"
    subtitle="Digestion, absorption, assimilation, and blood glucose control"
    learnSteps={learnSteps}
    task="gr11-animal-nutrition-t2"
    bank={bank}
    apiPath="/api/caps/ls"
  />
);

export default AnimalNutrition;
