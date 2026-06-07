import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ClassificationTree from '../../../../../components/subjects/ClassificationTree';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/ls/term4/diagnostic-features-major-kingdoms/diagram.webp", alt: "The Five Kingdoms" },
    title: 'Five Kingdom System',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Classification of Life</h3>
          <p className="text-slate-700 leading-relaxed">
            Organisms are classified into five major kingdoms based on cell type, cell number, nutrition mode, 
            and complexity: Monera, Protista, Fungi, Plantae, and Animalia.
          </p>
        </div>
        <ClassificationTree
          title="The Five Kingdoms"
          root={{
            label: 'All Living Organisms',
            children: [
              {
                label: 'Kingdom Monera',
                description: 'Prokaryotic, unicellular',
                example: 'Bacteria',
                color: 'border-blue-400 bg-blue-50 text-blue-800',
              },
              {
                label: 'Kingdom Protista',
                description: 'Eukaryotic, mostly unicellular',
                example: 'Amoeba, Euglena',
                color: 'border-green-400 bg-green-50 text-green-800',
              },
              {
                label: 'Kingdom Fungi',
                description: 'Eukaryotic, absorptive nutrition',
                example: 'Mushrooms, Yeast',
                color: 'border-purple-400 bg-purple-50 text-purple-800',
              },
              {
                label: 'Kingdom Plantae',
                description: 'Eukaryotic, autotrophic',
                example: 'Trees, Flowers',
                color: 'border-emerald-400 bg-emerald-50 text-emerald-800',
              },
              {
                label: 'Kingdom Animalia',
                description: 'Eukaryotic, heterotrophic, mobile',
                example: 'Mammals, Birds',
                color: 'border-red-400 bg-red-50 text-red-800',
              },
            ],
          }}
        />
      </div>
    ),
  },
  {
    title: 'Kingdom Characteristics',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Diagnostic Features of Each Kingdom</h3>
          <p className="text-slate-700 leading-relaxed">
            Each kingdom has unique features that distinguish it from others. Understanding these characteristics 
            helps identify and classify organisms correctly.
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">🦠 Kingdom Monera (Bacteria)</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-blue-800">
              <div>
                <strong>Structure:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Prokaryotic (no nucleus)</li>
                  <li>• Unicellular</li>
                  <li>• Cell wall (peptidoglycan)</li>
                  <li>• Circular DNA</li>
                </ul>
              </div>
              <div>
                <strong>Nutrition & Reproduction:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Autotrophic or heterotrophic</li>
                  <li>• Binary fission (asexual)</li>
                  <li>• Some cause disease, many beneficial</li>
                  <li>• Examples: E. coli, cyanobacteria</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🦠 Kingdom Protista</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-green-800">
              <div>
                <strong>Structure:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Eukaryotic (true nucleus)</li>
                  <li>• Mostly unicellular, some multicellular</li>
                  <li>• Diverse: algae, protozoa, slime molds</li>
                </ul>
              </div>
              <div>
                <strong>Nutrition & Reproduction:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Autotrophic (algae) or heterotrophic (amoeba)</li>
                  <li>• Asexual and sexual reproduction</li>
                  <li>• Aquatic environments</li>
                  <li>• Examples: Paramecium, Euglena, kelp</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">🍄 Kingdom Fungi</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-purple-800">
              <div>
                <strong>Structure:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Eukaryotic</li>
                  <li>• Unicellular (yeast) or multicellular (molds)</li>
                  <li>• Cell wall (chitin)</li>
                  <li>• Body made of hyphae (filaments)</li>
                </ul>
              </div>
              <div>
                <strong>Nutrition & Reproduction:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Heterotrophic: saprophytic (decomposers)</li>
                  <li>• Absorb nutrients from environment</li>
                  <li>• Spore reproduction</li>
                  <li>• Examples: Mushrooms, mold, yeast</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h4 className="font-semibold text-emerald-900 mb-2">🌱 Kingdom Plantae</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-emerald-800">
              <div>
                <strong>Structure:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Eukaryotic</li>
                  <li>• Multicellular</li>
                  <li>• Cell wall (cellulose)</li>
                  <li>• Chloroplasts (photosynthesis)</li>
                </ul>
              </div>
              <div>
                <strong>Nutrition & Reproduction:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Autotrophic (photosynthesis)</li>
                  <li>• Non-motile (cannot move)</li>
                  <li>• Sexual and asexual reproduction</li>
                  <li>• Examples: Ferns, conifers, flowering plants</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">🦁 Kingdom Animalia</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-red-800">
              <div>
                <strong>Structure:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Eukaryotic</li>
                  <li>• Multicellular</li>
                  <li>• No cell wall</li>
                  <li>• Specialized tissues and organs</li>
                </ul>
              </div>
              <div>
                <strong>Nutrition & Reproduction:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Heterotrophic (ingest food)</li>
                  <li>• Motile (most can move)</li>
                  <li>• Sexual reproduction (mostly)</li>
                  <li>• Examples: Sponges, worms, insects, mammals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Identification Practice',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Classifying Unknown Organisms</h3>
          <p className="text-slate-700 leading-relaxed">
            To identify an organism's kingdom, examine its cellular structure, nutrition method, reproduction, 
            and physical characteristics. Use a dichotomous key or decision tree approach.
          </p>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <h4 className="font-semibold text-slate-900 mb-3">Classification Decision Flow:</h4>
          <ol className="space-y-2 text-sm text-slate-800 list-decimal list-inside">
            <li><strong>Does it have a nucleus?</strong>
              <ul className="ml-6 mt-1 text-xs space-y-0.5">
                <li>→ No: <strong>Kingdom Monera</strong></li>
                <li>→ Yes: Continue to #2</li>
              </ul>
            </li>
            <li><strong>Is it unicellular or simple multicellular?</strong>
              <ul className="ml-6 mt-1 text-xs space-y-0.5">
                <li>→ Yes: <strong>Kingdom Protista</strong></li>
                <li>→ No (complex multicellular): Continue to #3</li>
              </ul>
            </li>
            <li><strong>Does it have cell walls?</strong>
              <ul className="ml-6 mt-1 text-xs space-y-0.5">
                <li>→ No: <strong>Kingdom Animalia</strong></li>
                <li>→ Yes: Continue to #4</li>
              </ul>
            </li>
            <li><strong>What is its nutrition mode?</strong>
              <ul className="ml-6 mt-1 text-xs space-y-0.5">
                <li>→ Autotrophic (photosynthesis): <strong>Kingdom Plantae</strong></li>
                <li>→ Heterotrophic (absorbs nutrients): <strong>Kingdom Fungi</strong></li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'What is a diagnostic feature of plants?',
    options: ['Mobility', 'Cell walls and photosynthesis', 'Heterotrophic nutrition', 'Lack of chloroplasts'],
    answer: 'Cell walls and photosynthesis',
    explanation: 'Plants have cell walls made of cellulose and are autotrophic.',
  },
  {
    prompt: 'Which kingdom includes organisms that absorb nutrients from organic matter?',
    options: ['Plantae', 'Animalia', 'Fungi', 'Protista'],
    answer: 'Fungi',
    explanation: 'Fungi are saprophytic, absorbing nutrients from decaying organic material.',
  },
  {
    prompt: 'What type of cell do bacteria have?',
    options: ['Eukaryotic with nucleus', 'Prokaryotic without nucleus', 'Plant cell', 'Animal cell'],
    answer: 'Prokaryotic without nucleus',
    explanation: 'Bacteria (Kingdom Monera) are prokaryotic organisms without a membrane-bound nucleus.',
  },
  {
    prompt: 'Which kingdom contains mostly unicellular eukaryotes?',
    options: ['Monera', 'Protista', 'Fungi', 'Plantae'],
    answer: 'Protista',
    explanation: 'Kingdom Protista includes mostly unicellular eukaryotic organisms like amoeba and paramecium.',
  },
];

const DiagnosticFeaturesMajorKingdoms = () => (
  <CapsSubjectTopic
    title="Diagnostic Features of Major Kingdoms"
    subtitle="Kingdom characteristics and organization"
    learnSteps={learnSteps}
    task="gr10-diagnostic-features-major-kingdoms-t4"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default DiagnosticFeaturesMajorKingdoms;
