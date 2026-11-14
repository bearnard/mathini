import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import Formula from '@/components/subjects/Formula';
import type { PSItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Hydrocarbons — Alkanes, Alkenes, Alkynes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Hydrocarbons</strong> contain only carbon and hydrogen. The three main homologous series differ in the type of C–C bond:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Alkanes</strong>
            <Formula block>{String.raw`C_nH_{2n+2}`}</Formula>
            <p className="text-slate-600">Only single bonds (saturated). Suffix: -ane. E.g., methane (CH₄), ethane (C₂H₆), propane (C₃H₈).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Alkenes</strong>
            <Formula block>{String.raw`C_nH_{2n}`}</Formula>
            <p className="text-slate-600">One C=C double bond (unsaturated). Suffix: -ene. E.g., ethene (C₂H₄), propene (C₃H₆).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Alkynes</strong>
            <Formula block>{String.raw`C_nH_{2n-2}`}</Formula>
            <p className="text-slate-600">One C≡C triple bond (unsaturated). Suffix: -yne. E.g., ethyne (C₂H₂), propyne (C₃H₄).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Functional Groups',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>functional group</strong> is an atom or group of atoms responsible for a compound's characteristic reactions and properties.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Oxygen-containing</strong>
            <p className="text-slate-600">Alcohols (<Formula>{String.raw`-OH`}</Formula>), carboxylic acids (<Formula>{String.raw`-COOH`}</Formula>), esters (<Formula>{String.raw`-COO-`}</Formula>), aldehydes (<Formula>{String.raw`-CHO`}</Formula>), and ketones (<Formula>{String.raw`C=O`}</Formula> in the chain).</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Nitrogen-containing</strong>
            <p className="text-slate-600">Amines (<Formula>{String.raw`-NH_2`}</Formula>) and amides (<Formula>{String.raw`-CONH_2`}</Formula>). Haloalkanes contain halogen substituents such as –F, –Cl, –Br, or –I.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'IUPAC Naming Rules',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          IUPAC names give every organic compound a unique, systematic name. Follow these steps:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <p className="font-bold text-slate-800">Steps:</p>
          <p className="text-slate-600">1. Find the longest carbon chain (parent chain) to get the stem name.</p>
          <p className="text-slate-600">2. Number the chain from the end nearest the principal functional group.</p>
          <p className="text-slate-600">3. Name substituents with locant numbers and prefixes (methyl-, ethyl-, chloro-, etc.).</p>
          <p className="text-slate-600">4. Add the correct suffix: -ane, -ene, -ol, -oic acid, and so on.</p>
          <p className="text-slate-600 mt-2">Stems: meth(1), eth(2), prop(3), but(4), pent(5), hex(6).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Homologous Series and Physical Property Trends',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>homologous series</strong> is a family of compounds with the same functional group and general formula, differing by <Formula>{String.raw`-CH_2-`}</Formula> units.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Trends Down the Series</strong>
            <p className="text-slate-600">As molar mass increases, boiling point and viscosity increase, while flammability and water solubility often decrease for non-polar series.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Reason</strong>
            <p className="text-slate-600">Larger molecules have stronger London forces, so more energy is needed to separate the molecules during boiling.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: PSItem[] = [
  {
    prompt: 'What is the general formula for alkanes?',
    options: ['CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₊₄'],
    answer: 'CₙH₂ₙ₊₂',
    explanation: 'Alkanes are saturated hydrocarbons with only single bonds, following the general formula CₙH₂ₙ₊₂.',
  },
  {
    prompt: 'Which homologous series has one C=C double bond?',
    options: ['Alkanes', 'Alkynes', 'Alkenes', 'Haloalkanes'],
    answer: 'Alkenes',
    explanation: 'Alkenes contain one carbon-carbon double bond (C=C) and follow the general formula CₙH₂ₙ.',
  },
  {
    prompt: 'What is the IUPAC name of CH₃CH₂OH?',
    options: ['Methanol', 'Propan-1-ol', 'Ethanal', 'Ethanol'],
    answer: 'Ethanol',
    explanation: 'The compound has 2 carbons (eth-) and a hydroxyl group (–OH), making it ethanol (or ethan-1-ol). It is the common alcohol in beverages.',
  },
  {
    prompt: 'Which functional group is present in carboxylic acids?',
    options: ['–OH', '–CHO', '–COOH', '–NH₂'],
    answer: '–COOH',
    explanation: 'Carboxylic acids are characterised by the –COOH (carboxyl) functional group, which gives them their acidic properties.',
  },
  {
    prompt: 'How many carbon atoms does "butane" contain?',
    options: ['2', '3', '4', '5'],
    answer: '4',
    explanation: 'The prefix "but-" indicates 4 carbon atoms in the parent chain. (meth=1, eth=2, prop=3, but=4, pent=5, hex=6).',
  },
  {
    prompt: 'As you go down a homologous series (increasing chain length), the boiling point:',
    options: ['Decreases', 'Stays the same', 'Increases', 'First increases then decreases'],
    answer: 'Increases',
    explanation: 'Larger molecules have greater surface area, stronger London dispersion forces, and therefore higher boiling points.',
  },
  {
    prompt: 'What suffix is used in IUPAC naming for a ketone?',
    options: ['-ol', '-al', '-one', '-oic acid'],
    answer: '-one',
    explanation: 'Ketones have a C=O group in the chain. Their IUPAC suffix is -one (e.g., propan-2-one = acetone).',
  },
  {
    prompt: 'What is the IUPAC name of CH₃CHO?',
    options: ['Methanol', 'Ethanone', 'Ethanal', 'Propanone'],
    answer: 'Ethanal',
    explanation: 'CH₃CHO has 2 carbons and a –CHO (aldehyde) group at carbon 1: ethanal. The suffix for aldehydes is -al.',
  },
  {
    prompt: 'Which compound would have the highest boiling point?',
    options: ['Methane (CH₄)', 'Ethane (C₂H₆)', 'Propane (C₃H₈)', 'Butane (C₄H₁₀)'],
    answer: 'Butane (C₄H₁₀)',
    explanation: 'Butane has the greatest molar mass among the options, resulting in stronger London dispersion forces and the highest boiling point.',
  },
];

const OrganicChemistry = () => (
  <CapsSubjectTopic
    title="Organic Chemistry"
    subtitle="Hydrocarbons, functional groups, IUPAC naming and homologous series"
    learnSteps={learnSteps}
    task="gr11-organic-chemistry-t3"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default OrganicChemistry;
