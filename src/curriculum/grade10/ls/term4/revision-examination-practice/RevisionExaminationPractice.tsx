import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ProcessFlow from '../../../../../components/subjects/ProcessFlow';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Concepts Review',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Grade 10 Life Sciences Overview</h3>
          <p className="text-slate-700 leading-relaxed">
            Grade 10 Life Sciences covers four main themes: cells and cellular processes, tissues and organs, 
            ecology and biodiversity, and evolution and classification. Review each area systematically.
          </p>
        </div>
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">📚 Term 1: Cells & Chemistry</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Cell structure (prokaryotic vs eukaryotic, organelles)</li>
              <li>• Transport mechanisms (diffusion, osmosis, active transport)</li>
              <li>• Chemical basis of life (CHONPS, organic compounds)</li>
              <li>• Enzymes (structure, factors affecting activity)</li>
              <li>• Metabolism (anabolism vs catabolism, ATP)</li>
              <li>• Mitosis (PMAT phases) and cancer</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">📚 Term 2: Tissues & Systems</h4>
            <ul className="space-y-1 text-sm text-green-800">
              <li>• Animal tissues (epithelial, connective, muscular, nervous)</li>
              <li>• Skeletal system (bones, joints, ligaments, tendons)</li>
              <li>• Plant tissues (dermal, vascular, ground)</li>
              <li>• Plant organs (roots, stems, leaves)</li>
              <li>• Circulatory system (heart, blood vessels, blood flow)</li>
              <li>• Respiratory system (lungs, alveoli, gas exchange)</li>
              <li>• Excretory system (kidneys, nephrons, urine formation)</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">📚 Term 3: Ecology & Evolution</h4>
            <ul className="space-y-1 text-sm text-purple-800">
              <li>• Classification (taxonomy, binomial nomenclature, Kingdom → Species)</li>
              <li>• Biodiversity (genetic, species, ecosystem diversity)</li>
              <li>• Conservation (threats, protection strategies)</li>
              <li>• Ecosystems (biotic/abiotic factors)</li>
              <li>• Energy flow (food chains, webs, pyramids, 10% rule)</li>
              <li>• Biomes (grassland, savanna, fynbos, forest)</li>
              <li>• History of life (origin, timeline, fossils)</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-900 mb-2">📚 Term 4: Five Kingdoms</h4>
            <ul className="space-y-1 text-sm text-amber-800">
              <li>• Monera: Prokaryotic, unicellular bacteria</li>
              <li>• Protista: Eukaryotic, mostly unicellular (amoeba, euglena)</li>
              <li>• Fungi: Eukaryotic, absorptive nutrition, decomposers</li>
              <li>• Plantae: Eukaryotic, autotrophic, cell walls (cellulose)</li>
              <li>• Animalia: Eukaryotic, heterotrophic, motile, no cell walls</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Exam Techniques',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">How to Approach Different Question Types</h3>
          <p className="text-slate-700 leading-relaxed">
            Life Sciences exams test recall, understanding, application, and analysis. 
            Different question types require different strategies.
          </p>
        </div>
        <ProcessFlow
          title="Exam Question Hierarchy"
          direction="vertical"
          steps={[
            {
              label: 'Multiple Choice (MCQ)',
              description: 'Test recall & understanding',
              detail: 'Read all options carefully. Eliminate obviously wrong answers. Look for key words in the question (NOT, EXCEPT, PRIMARY). Be aware of "all of the above" and "none of the above" options.',
              icon: '✓',
            },
            {
              label: 'Definitions & Terminology',
              description: 'Recall scientific terms',
              detail: 'Be precise. Use scientific vocabulary. Include key features. Example: "Photosynthesis is the process by which plants convert light energy into chemical energy (glucose) using CO₂ and H₂O."',
              icon: '📖',
            },
            {
              label: 'Short Answer Questions',
              description: 'Explain concepts (2-4 marks)',
              detail: 'State facts clearly. Use bullet points if allowed. Give examples when asked. Match answer length to marks (1 mark = 1 fact/point). Answer what is asked - don\'t add unrelated information.',
              icon: '✍️',
            },
            {
              label: 'Data Interpretation',
              description: 'Analyze graphs/tables',
              detail: 'Read titles and labels carefully. Identify trends (increase, decrease, stable). Quote data to support statements. Calculate percentages or differences if needed. Explain biological significance.',
              icon: '📊',
            },
            {
              label: 'Essay Questions',
              description: 'Detailed explanations (8-12 marks)',
              detail: 'Plan before writing. Use introduction, body paragraphs, conclusion structure. Include: definitions, facts, processes, examples, diagrams if helpful. Be logical and organized. Check marks - aim for 1-2 marks per minute.',
              icon: '📝',
            },
          ]}
        />
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-900 mb-2">⚠️ Common Mistakes to Avoid:</h4>
          <ul className="space-y-1 text-sm text-red-800">
            <li>• Not reading questions carefully (missing "NOT" or "EXCEPT")</li>
            <li>• Confusing similar terms (mitosis vs meiosis, diffusion vs osmosis)</li>
            <li>• Giving incomplete definitions</li>
            <li>• Not using biological terminology correctly</li>
            <li>• Running out of time - manage time per section</li>
            <li>• Leaving blanks - always attempt an answer</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Study Strategies',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Effective Revision Methods</h3>
          <p className="text-slate-700 leading-relaxed">
            Active revision is more effective than passive reading. Use a variety of techniques 
            to reinforce understanding and improve retention.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <h4 className="font-semibold text-teal-900 mb-2">🎯 Active Learning Techniques:</h4>
            <ul className="space-y-1 text-sm text-teal-800">
              <li><strong>Practice past papers:</strong> Time yourself, mark honestly, identify weak areas</li>
              <li><strong>Flashcards:</strong> Terms on one side, definitions on other</li>
              <li><strong>Concept maps:</strong> Draw connections between topics</li>
              <li><strong>Teach someone else:</strong> Explaining forces you to understand deeply</li>
              <li><strong>Mnemonics:</strong> PMAT (mitosis), CHONPS (elements), King Phillip...</li>
              <li><strong>Draw diagrams:</strong> Heart, nephron, cell, etc. from memory</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">📅 Study Schedule Tips:</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li><strong>Start early:</strong> Don't cram - space out revision over weeks</li>
              <li><strong>45-minute blocks:</strong> Study in focused intervals with breaks</li>
              <li><strong>Mix subjects/topics:</strong> Interleaving improves retention</li>
              <li><strong>Review regularly:</strong> Revisit material after 1 day, 1 week, 1 month</li>
              <li><strong>Sleep well:</strong> Memory consolidation happens during sleep</li>
              <li><strong>Stay healthy:</strong> Exercise, eat well, stay hydrated</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 mb-2">🔑 Key Formulas & Processes to Master:</h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-green-800">
            <div>
              <ul className="space-y-1">
                <li>• Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂</li>
                <li>• Cellular respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP</li>
                <li>• Mitosis phases: PMAT (Prophase, Metaphase, Anaphase, Telophase)</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>• Taxonomic hierarchy: King Phillip Came Over For Good Soup</li>
                <li>• Energy transfer: ~10% between trophic levels</li>
                <li>• Five kingdoms: Monera, Protista, Fungi, Plantae, Animalia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Integrated Practice',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Cross-Topic Application</h3>
          <p className="text-slate-700 leading-relaxed">
            Exam questions often combine multiple topics. Practice linking concepts across different sections 
            of the curriculum to answer complex, integrated questions.
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 mb-3">🔗 Example Integration Topics:</h4>
          <div className="space-y-3 text-sm text-purple-800">
            <div>
              <strong>1. Cells → Tissues → Organs → Systems</strong>
              <p className="text-xs mt-1">Connect how specialized cells form tissues, tissues form organs (heart, lung, leaf), and organs work in systems (circulatory, respiratory).</p>
            </div>
            <div>
              <strong>2. Photosynthesis → Food chains → Energy pyramids</strong>
              <p className="text-xs mt-1">Producers capture solar energy via photosynthesis, which flows through consumers in food chains, decreasing at each trophic level (10% rule).</p>
            </div>
            <div>
              <strong>3. Enzymes → Digestion → Transport → Respiration</strong>
              <p className="text-xs mt-1">Digestive enzymes break down food → nutrients absorbed → transported by blood → used in cellular respiration for ATP.</p>
            </div>
            <div>
              <strong>4. Classification → Biodiversity → Conservation</strong>
              <p className="text-xs mt-1">Taxonomy helps identify species → understanding biodiversity importance → developing conservation strategies for threatened species.</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-900">
            <strong>Final tip:</strong> On exam day, read instructions carefully, allocate time per section, 
            start with easier questions to build confidence, and always review answers if time permits. Good luck! 🍀
          </p>
        </div>
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'What is homeostasis?',
    options: ['Growth of organisms', 'Maintenance of stable internal environment', 'Evolution of species', 'Reproduction'],
    answer: 'Maintenance of stable internal environment',
    explanation: 'Homeostasis is the body\'s ability to maintain relatively constant conditions.',
  },
  {
    prompt: 'Which process is essential for maintaining genetic diversity?',
    options: ['Mitosis', 'Meiosis', 'Binary fission', 'Budding'],
    answer: 'Meiosis',
    explanation: 'Meiosis produces genetically varied gametes, maintaining diversity.',
  },
  {
    prompt: 'What percentage of energy is typically transferred from one trophic level to the next?',
    options: ['50%', '25%', '10%', '90%'],
    answer: '10%',
    explanation: 'Only about 10% of energy is transferred between trophic levels; the rest is lost as heat.',
  },
  {
    prompt: 'Which gas did cyanobacteria produce that changed Earth\'s atmosphere?',
    options: ['Nitrogen', 'Carbon dioxide', 'Oxygen', 'Methane'],
    answer: 'Oxygen',
    explanation: 'Cyanobacteria produced oxygen through photosynthesis, changing the atmosphere from reducing to oxidizing.',
  },
  {
    prompt: 'What is the correct sequence of taxonomic ranks from broadest to most specific?',
    options: ['Species, Genus, Family, Order, Class, Phylum, Kingdom', 'Kingdom, Phylum, Class, Order, Family, Genus, Species', 'Kingdom, Class, Phylum, Order, Family, Species, Genus', 'Domain, Kingdom, Order, Class, Family, Genus, Species'],
    answer: 'Kingdom, Phylum, Class, Order, Family, Genus, Species',
    explanation: 'Remember: King Phillip Came Over For Good Soup (Kingdom → Phylum → Class → Order → Family → Genus → Species).',
  },
  {
    prompt: 'Which system is responsible for filtering blood and removing metabolic waste?',
    options: ['Respiratory system', 'Circulatory system', 'Excretory system', 'Digestive system'],
    answer: 'Excretory system',
    explanation: 'The excretory system (primarily the kidneys) filters blood and produces urine to remove waste.',
  },
];

const RevisionExaminationPractice = () => (
  <CapsSubjectTopic
    title="Revision and Examination Practice"
    subtitle="Comprehensive review and assessment preparation"
    learnSteps={learnSteps}
    task="gr10-revision-examination-practice-t4"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default RevisionExaminationPractice;
