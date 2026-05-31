import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand material processing and corrosion prevention',
    image: {
      src: '/curriculum/grade9/technology/term4/processing-materials/image1.jpg',
      alt: 'learner comparing corrosion prevention methods including galvanising and electroplating on metal samples',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Metals corrode when exposed to oxygen and moisture. Galvanising (zinc coating) and electroplating (metal transfer) 
          protect materials from corrosion. Understanding these processes helps prevent deterioration and extend product life.
        </p>
      </div>
    ),
  },
  {
    title: 'Explore food and plastic processing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Food preservation methods (freezing, canning, drying) extend shelf life and maintain nutritional value. 
          Plastics are processed through melting, moulding, and recycling. Material choice depends on properties needed.
        </p>
      </div>
    ),
  },
  {
    title: 'Evaluate environmental and economic trade-offs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Processing decisions affect cost, performance, and environment. Selecting sustainable materials, 
          minimizing waste, and recycling reduce environmental impact while maintaining product quality and affordability.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is corrosion?',
    options: ['the chemical deterioration of materials, especially metals, when exposed to oxygen and moisture', 'physical wear only', 'loss of weight', 'colour change'],
    answer: 'the chemical deterioration of materials, especially metals, when exposed to oxygen and moisture',
    explanation: 'Rust (iron oxide) is the most common corrosion problem, damaging structures and equipment.',
  },
  {
    prompt: 'How does galvanising protect metal?',
    options: ['a zinc coating is applied to prevent oxygen and moisture from reaching the metal', 'it heats the metal', 'it paints the surface', 'it removes weight'],
    answer: 'a zinc coating is applied to prevent oxygen and moisture from reaching the metal',
    explanation: 'Galvanised coatings are sacrificial, protecting the underlying metal even if the coating is scratched.',
  },
  {
    prompt: 'What is electroplating?',
    options: ['a process using electric current to deposit a protective metal coating onto a surface', 'a painting technique', 'a heating method', 'a type of glue'],
    answer: 'a process using electric current to deposit a protective metal coating onto a surface',
    explanation: 'Electroplating creates precise, uniform coatings for corrosion protection and decoration.',
  },
  {
    prompt: 'Why is food preservation important?',
    options: ['to extend shelf life, maintain nutrition, and prevent spoilage', 'food does not need preservation', 'preservation reduces taste', 'preservation makes food cheaper'],
    answer: 'to extend shelf life, maintain nutrition, and prevent spoilage',
    explanation: 'Preservation methods allow food to be stored safely for longer periods.',
  },
  {
    prompt: 'What are common food preservation methods?',
    options: ['freezing, canning, drying, salting, and smoking', 'only heating', 'only packaging', 'no methods exist'],
    answer: 'freezing, canning, drying, salting, and smoking',
    explanation: 'Each method removes water or lowers temperature to inhibit microbial growth.',
  },
  {
    prompt: 'What is plastic processing?',
    options: ['converting raw plastic materials into useful products through melting, moulding, and shaping', 'growing plastic', 'painting plastic', 'no processing is needed'],
    answer: 'converting raw plastic materials into useful products through melting, moulding, and shaping',
    explanation: 'Injection moulding, extrusion, and thermoforming are common plastic processing techniques.',
  },
  {
    prompt: 'Why is recycling important for plastic materials?',
    options: ['recycling reduces waste, conserves resources, and lowers environmental impact', 'recycling is not useful', 'recycling produces poor quality', 'recycling only saves money'],
    answer: 'recycling reduces waste, conserves resources, and lowers environmental impact',
    explanation: 'Plastic recycling addresses pollution and resource scarcity while creating secondary materials.',
  },
  {
    prompt: 'How do processing choices affect the environment?',
    options: ['energy use, emissions, waste generation, and material choice all impact environmental sustainability', 'processing has no environmental effect', 'all processing is equally harmful', 'environment improves with processing'],
    answer: 'energy use, emissions, waste generation, and material choice all impact environmental sustainability',
    explanation: 'Responsible material and processing selection minimizes environmental footprint.',
  },
];

const ProcessingMaterials = () => (
  <CapsSubjectTopic
    title="Processing of Metals, Food and Plastics"
    subtitle="Corrosion prevention, galvanising, electroplating, food preservation, plastics, recycling, processing choices"
    learnSteps={learnSteps}
    task="gr9-processing-materials-t4"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ProcessingMaterials;
