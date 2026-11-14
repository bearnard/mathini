import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Compare indigenous and modern processing methods',
    image: {
      src: '/curriculum/grade8/tech/term4/indigenous-technology-and-processing/diagram.webp',
      alt: 'Grade 8 learners comparing metal protection and food preservation methods',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Indigenous technology shows practical local solutions developed over time. You compare methods such as
          galvanising, painting, electroplating, and food preservation, and discuss sustainability and context.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is galvanising?',
    options: [
      'Coating steel with zinc to reduce rusting',
      'Heating steel until it melts completely',
      'Removing all paint from metal',
      'Cutting metal with a wedge',
    ],
    answer: 'Coating steel with zinc to reduce rusting',
    explanation: 'Zinc protects steel from corrosion by acting as a protective layer.',
  },
  {
    prompt: 'Painting metal helps mainly by...',
    options: [
      'Blocking water and oxygen from the surface',
      'Increasing electrical conductivity',
      'Turning iron into plastic',
      'Reducing mass of the object',
    ],
    answer: 'Blocking water and oxygen from the surface',
    explanation: 'Paint forms a barrier that slows corrosion.',
  },
  {
    prompt: 'Electroplating is used to...',
    options: ['Coat an object with a thin metal layer using electricity', 'Cut wood by passing an electric current through it', 'Measure the voltage in a parallel circuit', 'Join parts together with an adhesive only'],
    answer: 'Coat an object with a thin metal layer using electricity',
    explanation: 'Electroplating improves corrosion resistance or appearance.',
  },
  {
    prompt: 'Which is a common food-preservation method?',
    options: ['Drying', 'Rusting', 'Magnetising', 'Insulating'],
    answer: 'Drying',
    explanation: 'Drying removes moisture and slows spoilage.',
  },
  {
    prompt: 'Why is indigenous knowledge important in technology?',
    options: [
      'It provides locally tested solutions suited to context',
      'It is always less sustainable than modern methods',
      'It removes the need for scientific thinking',
      'It only applies to imported products',
    ],
    answer: 'It provides locally tested solutions suited to context',
    explanation: 'Local knowledge often reflects available materials and environment.',
  },
  {
    prompt: 'A sustainable process choice should consider...',
    options: [
      'Environmental impact and resource use',
      'Only the brightest colour',
      'Ignoring local conditions',
      'Using the most complex method always',
    ],
    answer: 'Environmental impact and resource use',
    explanation: 'Sustainability balances performance with long-term environmental care.',
  },
  {
    prompt: 'For steel fencing near the sea, a good rust-prevention choice is...',
    options: ['Galvanising and regular painting', 'Leaving bare metal exposed', 'Removing all coatings', 'Adding sawdust'],
    answer: 'Galvanising and regular painting',
    explanation: 'Coastal moisture and salt increase corrosion, so protection is essential.',
  },
  {
    prompt: 'Which statement best compares methods?',
    options: [
      'Different methods suit different materials and needs',
      'One method is always best for every case',
      'Indigenous methods are never useful today',
      'Modern methods never need maintenance',
    ],
    answer: 'Different methods suit different materials and needs',
    explanation: 'Technology decisions depend on context, cost, materials, and purpose.',
  },
];

const IndigenousTechnologyAndProcessing = () => (
  <CapsSubjectTopic
    title="Indigenous Technology and Processing"
    subtitle="Corrosion prevention, food preservation, local knowledge, and sustainability"
    learnSteps={learnSteps}
    task="gr8-indigenous-technology-and-processing-t4"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default IndigenousTechnologyAndProcessing;
