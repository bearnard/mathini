import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ClassificationTree from '../../../../../components/subjects/ClassificationTree';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/ls/term2/plant-tissues-organs/diagram.webp", alt: "Plant tissues and organs" },
    title: 'Plant Tissue Types',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Three Main Plant Tissue Systems</h3>
          <p className="text-slate-700 leading-relaxed">
            Plants have specialized tissues organized into three main systems: dermal (protective covering), 
            vascular (transport), and ground tissue (storage and support).
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🛡️ Dermal Tissue</h4>
            <ul className="space-y-1 text-sm text-green-800">
              <li><strong>Epidermis:</strong> Single outer layer, protection</li>
              <li><strong>Cuticle:</strong> Waxy coating, reduces water loss</li>
              <li><strong>Stomata:</strong> Pores for gas exchange</li>
              <li><strong>Guard cells:</strong> Control stomata opening</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">🚰 Vascular Tissue</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li><strong>Xylem:</strong> Transports water and minerals upward (roots → leaves)</li>
              <li><strong>Phloem:</strong> Transports sugars and nutrients (bidirectional)</li>
              <li><strong>Cambium:</strong> Produces new xylem and phloem</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2">🌾 Ground Tissue</h4>
            <ul className="space-y-1 text-sm text-amber-800">
              <li><strong>Parenchyma:</strong> Storage, photosynthesis, thin walls</li>
              <li><strong>Collenchyma:</strong> Support, flexible, thick walls</li>
              <li><strong>Sclerenchyma:</strong> Rigid support, very thick walls</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Plant Organs',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Roots, Stems, and Leaves</h3>
          <p className="text-slate-700 leading-relaxed">
            Plants have three main organs working together for survival: roots (absorption and anchorage), 
            stems (support and transport), and leaves (photosynthesis).
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-brown-50 border border-amber-300 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2">🌱 Roots</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-amber-800">
              <div>
                <strong>Functions:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Anchor plant in soil</li>
                  <li>• Absorb water and minerals</li>
                  <li>• Store nutrients (e.g., carrots, beets)</li>
                </ul>
              </div>
              <div>
                <strong>Structures:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Root hairs: Increase surface area for absorption</li>
                  <li>• Root cap: Protects growing tip</li>
                  <li>• Types: Taproot (carrot) vs fibrous (grass)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h4 className="font-semibold text-teal-900 mb-2">🌿 Stems</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-teal-800">
              <div>
                <strong>Functions:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Support leaves and flowers</li>
                  <li>• Transport water (xylem) and food (phloem)</li>
                  <li>• Store nutrients (e.g., potato tubers)</li>
                </ul>
              </div>
              <div>
                <strong>Structures:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Nodes: Where leaves attach</li>
                  <li>• Internodes: Sections between nodes</li>
                  <li>• Types: Herbaceous (soft) vs woody (hard)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🍃 Leaves</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-green-800">
              <div>
                <strong>Functions:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Photosynthesis (chloroplasts in mesophyll)</li>
                  <li>• Gas exchange (stomata)</li>
                  <li>• Transpiration (water evaporation)</li>
                </ul>
              </div>
              <div>
                <strong>Structures:</strong>
                <ul className="text-xs mt-1 space-y-0.5">
                  <li>• Blade: Flat surface for light capture</li>
                  <li>• Veins: Vascular bundles (transport)</li>
                  <li>• Petiole: Stalk connecting leaf to stem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Plant Growth',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Primary and Secondary Growth</h3>
          <p className="text-slate-700 leading-relaxed">
            Plant growth occurs at meristems (regions of actively dividing cells). Primary growth increases length; 
            secondary growth increases thickness.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Primary Growth (Length)</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li><strong>Apical meristems:</strong> At root and shoot tips</li>
              <li>Produces primary tissues (epidermis, cortex, vascular tissue)</li>
              <li>Occurs in all plants (herbaceous and woody)</li>
              <li>Enables upward and downward growth</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">Secondary Growth (Thickness)</h4>
            <ul className="space-y-1 text-sm text-purple-800">
              <li><strong>Lateral meristems:</strong> Vascular cambium and cork cambium</li>
              <li>Produces secondary xylem (wood) and phloem</li>
              <li>Occurs mainly in woody plants (trees, shrubs)</li>
              <li>Creates annual rings showing growth patterns</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Organising Plant Structures',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700 leading-relaxed">
          Plant anatomy is easier to remember when you sort tissues and organs into a hierarchy. The tree below shows how tissues combine to build whole organs.
        </p>
        <ClassificationTree
          title="Plant tissues and organs"
          root={{
            label: 'Plant body',
            children: [
              { label: 'Dermal tissue', example: 'Epidermis, cuticle, guard cells' },
              { label: 'Vascular tissue', children: [
                  { label: 'Xylem', example: 'Transports water and minerals' },
                  { label: 'Phloem', example: 'Transports sugars and food' },
              ]},
              { label: 'Ground tissue', example: 'Parenchyma, collenchyma, sclerenchyma' },
              { label: 'Organs', children: [
                  { label: 'Roots', example: 'Absorption and anchorage' },
                  { label: 'Stems', example: 'Support and transport' },
                  { label: 'Leaves', example: 'Photosynthesis and gas exchange' },
              ]},
            ],
          }}
        />
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'What is the primary role of phloem in plants?',
    options: ['Water absorption', 'Transport of sugars and nutrients', 'Gas exchange', 'Photosynthesis'],
    answer: 'Transport of sugars and nutrients',
    explanation: 'Phloem tissues transport sugars produced in leaves to other plant parts.',
  },
  {
    prompt: 'Which tissue type provides structural support in plants?',
    options: ['Phloem', 'Epidermis', 'Xylem', 'Parenchyma'],
    answer: 'Xylem',
    explanation: 'Xylem vessels provide structural support and water transport.',
  },
  {
    prompt: 'What is the function of stomata in leaves?',
    options: ['Photosynthesis', 'Gas exchange', 'Water storage', 'Nutrient absorption'],
    answer: 'Gas exchange',
    explanation: 'Stomata are pores that allow CO₂ in and O₂ out during photosynthesis.',
  },
  {
    prompt: 'Which plant organ is primarily responsible for absorbing water and minerals?',
    options: ['Leaves', 'Stems', 'Roots', 'Flowers'],
    answer: 'Roots',
    explanation: 'Roots absorb water and minerals from soil through root hairs.',
  },
];

const PlantTissuesOrgans = () => (
  <CapsSubjectTopic
    title="Plant Tissues and Organs"
    subtitle="Plant anatomy and physiology"
    learnSteps={learnSteps}
    task="gr10-plant-tissues-organs-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default PlantTissuesOrgans;
