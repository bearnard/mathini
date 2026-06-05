import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ClassificationTree from '../../../../../components/subjects/ClassificationTree';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Animal Tissue Types',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Four Main Tissue Types</h3>
          <p className="text-slate-700 leading-relaxed">
            Animal tissues are groups of similar cells that perform a specific function. 
            The four main types are epithelial, connective, muscular, and nervous tissue.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">🛡️ Epithelial Tissue</h4>
            <p className="text-sm text-blue-800 mb-2">Covers body surfaces, lines organs and cavities</p>
            <ul className="space-y-1 text-xs text-blue-700">
              <li><strong>Simple epithelium:</strong> One layer (absorption, secretion)</li>
              <li><strong>Stratified epithelium:</strong> Multiple layers (protection)</li>
              <li>Examples: Skin, intestinal lining, blood vessel lining</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🔗 Connective Tissue</h4>
            <p className="text-sm text-green-800 mb-2">Supports, connects, and protects organs</p>
            <ul className="space-y-1 text-xs text-green-700">
              <li><strong>Loose connective:</strong> Adipose (fat), areolar</li>
              <li><strong>Dense connective:</strong> Tendons, ligaments</li>
              <li><strong>Specialized:</strong> Blood, bone, cartilage</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">💪 Muscular Tissue</h4>
            <p className="text-sm text-red-800 mb-2">Enables movement through contraction</p>
            <ul className="space-y-1 text-xs text-red-700">
              <li><strong>Skeletal:</strong> Voluntary, striated, attached to bones</li>
              <li><strong>Cardiac:</strong> Involuntary, striated, heart muscle</li>
              <li><strong>Smooth:</strong> Involuntary, non-striated, organs</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">⚡ Nervous Tissue</h4>
            <p className="text-sm text-purple-800 mb-2">Transmits electrical signals</p>
            <ul className="space-y-1 text-xs text-purple-700">
              <li><strong>Neurons:</strong> Conduct nerve impulses</li>
              <li><strong>Neuroglia:</strong> Support and protect neurons</li>
              <li>Found in brain, spinal cord, nerves</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Skeletal System',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Structure and Function of Bones</h3>
          <p className="text-slate-700 leading-relaxed">
            The human skeleton has 206 bones providing support, protection, movement, mineral storage, and blood cell production. 
            The skeleton is divided into axial (skull, vertebral column, ribcage) and appendicular (limbs and girdles).
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2">Bone Structure:</h4>
            <ul className="space-y-1 text-sm text-amber-800">
              <li><strong>Compact bone:</strong> Dense, outer layer, provides strength</li>
              <li><strong>Spongy bone:</strong> Inner layer with spaces, lightweight</li>
              <li><strong>Bone marrow:</strong> Red (blood cell production) and yellow (fat storage)</li>
              <li><strong>Periosteum:</strong> Outer membrane with blood vessels and nerves</li>
            </ul>
          </div>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h4 className="font-semibold text-teal-900 mb-2">Functions:</h4>
            <ul className="space-y-1 text-sm text-teal-800">
              <li>Support: Framework for body shape and posture</li>
              <li>Protection: Skull (brain), ribcage (heart, lungs)</li>
              <li>Movement: Attachment points for muscles</li>
              <li>Mineral storage: Calcium and phosphorus</li>
              <li>Blood cell production: Red bone marrow</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Joints and Movement',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Types of Joints</h3>
          <p className="text-slate-700 leading-relaxed">
            Joints are where two or more bones meet. They are classified by their range of movement and structure.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">Immovable (Fibrous)</h4>
            <p className="text-sm text-red-800">Bones fused together</p>
            <p className="text-xs text-red-700 mt-1"><em>Example: Skull sutures</em></p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">Slightly Movable (Cartilaginous)</h4>
            <p className="text-sm text-yellow-800">Limited movement via cartilage</p>
            <p className="text-xs text-yellow-700 mt-1"><em>Example: Vertebrae, pubic symphysis</em></p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Freely Movable (Synovial)</h4>
            <p className="text-sm text-green-800">Full range of movement</p>
            <p className="text-xs text-green-700 mt-1"><em>Example: Knee, elbow, hip, shoulder</em></p>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Synovial Joint Components:</h4>
          <ul className="space-y-1 text-sm text-blue-800">
            <li><strong>Ligaments:</strong> Connect bone to bone, stabilize joints</li>
            <li><strong>Tendons:</strong> Connect muscle to bone, enable movement</li>
            <li><strong>Cartilage:</strong> Cushions bones, reduces friction</li>
            <li><strong>Synovial fluid:</strong> Lubricates joint, reduces wear</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Classifying Animal Support Structures',
    content: (
      <div className="space-y-6">
        <p className="text-slate-700 leading-relaxed">
          A classification tree helps you group tissues and support structures by function. This makes it easier to compare protection, movement, and communication in the human body.
        </p>
        <ClassificationTree
          title="Animal tissues and support"
          root={{
            label: 'Animal body organisation',
            children: [
              { label: 'Epithelial tissue', example: 'Skin, lining of the gut, blood vessels' },
              { label: 'Connective tissue', children: [
                  { label: 'Bone', example: 'Support and protection' },
                  { label: 'Cartilage', example: 'Flexible support at joints' },
                  { label: 'Blood', example: 'Transport medium' },
              ]},
              { label: 'Muscular tissue', example: 'Skeletal, smooth, and cardiac muscle' },
              { label: 'Nervous tissue', example: 'Neurons and neuroglia for signalling' },
            ],
          }}
        />
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'Which tissue type provides strength and elasticity to bones?',
    options: ['Epithelial tissue', 'Connective tissue', 'Nervous tissue', 'Muscle tissue'],
    answer: 'Connective tissue',
    explanation: 'Connective tissue includes collagen fibers that give bones strength.',
  },
  {
    prompt: 'What is the function of ligaments?',
    options: ['Connect muscles to bones', 'Connect bones to other bones', 'Carry oxygen', 'Transmit signals'],
    answer: 'Connect bones to other bones',
    explanation: 'Ligaments are fibrous connective tissues that hold bones together at joints.',
  },
  {
    prompt: 'Which type of muscle tissue is involuntary and striated?',
    options: ['Skeletal muscle', 'Cardiac muscle', 'Smooth muscle', 'All muscle types'],
    answer: 'Cardiac muscle',
    explanation: 'Cardiac muscle is found in the heart, is involuntary, and has striations.',
  },
  {
    prompt: 'Where are red blood cells produced?',
    options: ['Liver', 'Red bone marrow', 'Spleen', 'Kidneys'],
    answer: 'Red bone marrow',
    explanation: 'Red bone marrow produces red blood cells, white blood cells, and platelets.',
  },
];

const AnimalTissuesSupportSystems = () => (
  <CapsSubjectTopic
    title="Animal Tissues and Support Systems"
    subtitle="Tissue types and skeletal anatomy"
    learnSteps={learnSteps}
    task="gr10-animal-tissues-support-systems-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default AnimalTissuesSupportSystems;
