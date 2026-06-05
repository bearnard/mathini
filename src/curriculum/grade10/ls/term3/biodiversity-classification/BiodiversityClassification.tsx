import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import ClassificationTree from '../../../../../components/subjects/ClassificationTree';
import type { LifeSciencesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Classification Systems',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Taxonomy and Binomial Nomenclature</h3>
          <p className="text-slate-700 leading-relaxed">
            Taxonomy is the science of classifying organisms into hierarchical groups based on shared characteristics. 
            The binomial nomenclature system uses two Latin names: Genus (capitalized) and species (lowercase), 
            e.g., <em>Homo sapiens</em>.
          </p>
        </div>
        <ClassificationTree
          title="Taxonomic Hierarchy"
          root={{
            label: 'Kingdom',
            description: 'Broadest category',
            children: [
              {
                label: 'Phylum',
                description: 'Major body plan',
                children: [
                  {
                    label: 'Class',
                    children: [
                      {
                        label: 'Order',
                        children: [
                          {
                            label: 'Family',
                            children: [
                              {
                                label: 'Genus',
                                children: [
                                  {
                                    label: 'Species',
                                    description: 'Most specific, can interbreed',
                                    example: 'Homo sapiens',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          }}
        />
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Mnemonic: King Phillip Came Over For Good Soup</h4>
          <p className="text-sm text-blue-800">
            Kingdom → Phylum → Class → Order → Family → Genus → Species
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Biodiversity',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Levels of Biological Diversity</h3>
          <p className="text-slate-700 leading-relaxed">
            Biodiversity refers to the variety of life on Earth at all levels: genetic diversity (variations within species), 
            species diversity (number of different species), and ecosystem diversity (variety of habitats and communities).
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🧬 Genetic Diversity</h4>
            <p className="text-sm text-green-800 mb-2">Variation in genes within a species</p>
            <ul className="text-xs text-green-700 space-y-1">
              <li>Different blood types in humans</li>
              <li>Various coat colors in dogs</li>
              <li>Enables adaptation to changing environments</li>
              <li>Protects against disease</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">🦋 Species Diversity</h4>
            <p className="text-sm text-blue-800 mb-2">Number and variety of species in an area</p>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>Tropical rainforests: very high</li>
              <li>Deserts: relatively low</li>
              <li>Each species has unique role (niche)</li>
              <li>Loss of one affects others</li>
            </ul>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-2">🌍 Ecosystem Diversity</h4>
            <p className="text-sm text-purple-800 mb-2">Variety of habitats and communities</p>
            <ul className="text-xs text-purple-700 space-y-1">
              <li>Forests, grasslands, wetlands, oceans</li>
              <li>Each has unique abiotic and biotic factors</li>
              <li>Provides different ecological services</li>
              <li>South Africa: rich ecosystem diversity</li>
            </ul>
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-semibold text-amber-900 mb-2">Importance of Biodiversity:</h4>
          <ul className="text-sm text-amber-800 space-y-1">
            <li>✓ Ecosystem stability and resilience</li>
            <li>✓ Food security (crops, livestock, fisheries)</li>
            <li>✓ Medicine (many drugs derived from plants)</li>
            <li>✓ Economic value (tourism, resources)</li>
            <li>✓ Climate regulation and oxygen production</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Conservation and Threats',
    content: (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Protecting Biodiversity</h3>
          <p className="text-slate-700 leading-relaxed">
            South Africa is one of the world's 17 megadiverse countries. However, biodiversity faces serious threats 
            from human activities. Conservation efforts aim to preserve species and ecosystems for future generations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">⚠️ Threats to Biodiversity</h4>
            <ul className="space-y-1 text-sm text-red-800">
              <li><strong>Habitat destruction:</strong> Deforestation, urbanization, agriculture</li>
              <li><strong>Climate change:</strong> Altered temperatures, rainfall patterns</li>
              <li><strong>Pollution:</strong> Air, water, soil contamination</li>
              <li><strong>Overexploitation:</strong> Overfishing, poaching, overharvesting</li>
              <li><strong>Invasive species:</strong> Non-native species outcompete natives</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">🛡️ Conservation Strategies</h4>
            <ul className="space-y-1 text-sm text-green-800">
              <li><strong>Protected areas:</strong> National parks, nature reserves (Kruger, Table Mountain)</li>
              <li><strong>Legislation:</strong> CITES, endangered species acts</li>
              <li><strong>Sustainable use:</strong> Responsible harvesting, ecotourism</li>
              <li><strong>Habitat restoration:</strong> Reforestation, wetland rehabilitation</li>
              <li><strong>Breeding programs:</strong> Captive breeding, reintroduction (rhinos)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: LifeSciencesItem[] = [
  {
    prompt: 'What is the correct order of taxonomic classification?',
    options: ['Species, Genus, Family, Order, Class, Phylum, Kingdom', 'Kingdom, Phylum, Class, Order, Family, Genus, Species', 'Kingdom, Family, Order, Class, Phylum, Genus, Species', 'Species, Family, Genus, Order, Class, Phylum, Kingdom'],
    answer: 'Kingdom, Phylum, Class, Order, Family, Genus, Species',
    explanation: 'The correct mnemonic is "King Phillip Came Over For Good Soup".',
  },
  {
    prompt: 'What is biodiversity?',
    options: ['The study of organisms', 'Genetic variety within and between species', 'The extinction of species', 'Migration patterns'],
    answer: 'Genetic variety within and between species',
    explanation: 'Biodiversity refers to the range of genetic and species diversity.',
  },
  {
    prompt: 'What is binomial nomenclature?',
    options: ['A two-name system using Genus and species', 'Classification of animals only', 'The study of DNA', 'A method of breeding'],
    answer: 'A two-name system using Genus and species',
    explanation: 'Binomial nomenclature uses two Latin names: Genus (capitalized) and species (lowercase).',
  },
  {
    prompt: 'Which of the following is a major threat to biodiversity?',
    options: ['Ecotourism', 'National parks', 'Habitat destruction', 'Conservation breeding'],
    answer: 'Habitat destruction',
    explanation: 'Habitat destruction through deforestation, urbanization, and agriculture is a primary threat to biodiversity.',
  },
];

const BiodiversityClassification = () => (
  <CapsSubjectTopic
    title="Biodiversity and Classification"
    subtitle="Taxonomy and evolutionary diversity"
    learnSteps={learnSteps}
    task="gr10-biodiversity-classification-t3"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={10}
  />
);

export default BiodiversityClassification;
