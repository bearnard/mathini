import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { ProtectionLayers } from '../../../../../components/diagrams/science/SciencePictures6';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Indigenous technology',
    content: slide(
      <>
        <Rule>
          Indigenous technology shows practical local solutions developed over time. Indigenous knowledge is important because it provides locally tested solutions suited to context.
        </Rule>
        <Worked
          title="Local solutions to keep food"
          steps={[
            <>Biltong is meat that is dried and spiced: drying keeps it from spoiling.</>,
            <>Amasi is milk that has been left to ferment: it keeps longer and was made from the materials people had.</>,
            <>Local knowledge often reflects the available materials and the environment, so these solutions fit the place.</>,
          ]}
        />
        <Mistake>Thinking indigenous technology is simply old-fashioned. It was tested by people over many years, and it still works.</Mistake>
      </>,
    ),
  },
  {
    title: 'Protecting metals from rust',
    content: slide(
      <>
        <Rule>
          Galvanising coats steel with zinc to reduce rusting. Painting metal helps mainly by blocking water and oxygen from the surface. Electroplating coats an object with a thin metal layer using electricity.
        </Rule>
        <ProtectionLayers />
        <Terms
          rows={[
            ['Galvanising', 'steel coated with zinc. Zinc protects the steel as a protective layer.'],
            ['Painting', 'paint forms a barrier that slows corrosion by blocking water and oxygen.'],
            ['Electroplating', 'a thin metal layer put on using electricity, for corrosion resistance or for appearance.'],
          ]}
        />
        <Worked
          title="Steel fencing near the sea"
          steps={[<>Coastal moisture and salt increase corrosion, so protection is essential.</>, <>A good rust-prevention choice is galvanising and regular painting.</>]}
        />
        <Mistake>Thinking paint makes steel rust-proof for ever. Scratched or old paint lets water and oxygen in, which is why regular painting is needed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Preserving food',
    content: slide(
      <>
        <Rule>Drying meat or fruit in the sun is a common way to preserve food. Drying removes moisture and slows spoilage.</Rule>
        <Worked
          title="Drying fruit"
          steps={[
            <>Spoilage organisms need moisture to grow.</>,
            <>Spread thin slices in the sun or a warm, airy place. The water leaves the fruit.</>,
            <>With the moisture removed, spoilage slows and the fruit keeps for much longer.</>,
          ]}
        />
        <Mistake>Thinking dried food can never spoil. Drying slows spoilage; it must be kept dry afterwards.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing and choosing methods',
    content: slide(
      <>
        <Rule>
          Different methods suit different materials and needs. Choose processes sustainably by weighing their impact on the environment and the resources they use.
        </Rule>
        <Compare
          left={{ title: 'Indigenous methods', tone: 'amber', rows: ['developed locally over time', 'use available materials', 'example: drying meat to make biltong'] }}
          right={{ title: 'Modern methods', tone: 'sky', rows: ['use factories and machines', 'example: galvanising, electroplating', 'faster and more uniform'] }}
        />
        <Worked
          title="Decide with the criteria"
          steps={[<>Material: steel or food? Each needs a different method.</>, <>Context, cost and purpose: how long must it last, and what is available?</>, <>Sustainability: how much of a resource does it use, and what harm does it do to the environment?</>]}
        />
        <Mistake>Believing one method is always best. Technology decisions depend on context, cost, materials and purpose.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is galvanising? Painting metal helps mainly by doing what?</>,
          <>What is electroplating used for? Name one traditional way of preserving food.</>,
          <>What value does indigenous knowledge add to technology? What should a sustainable process choice take into account?</>,
          <>For steel fencing near the sea, which rust prevention is a good choice? Which statement best compares methods?</>,
        ]}
        answers={[
          <>Coating steel with zinc to reduce rusting. Blocking water and oxygen from the surface.</>,
          <>Coat an object with a thin metal layer using electricity. Drying.</>,
          <>It provides locally tested solutions suited to context. Environmental impact and resource use.</>,
          <>Galvanising and regular painting. Different methods suit different materials and needs.</>,
        ]}
      />,
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
