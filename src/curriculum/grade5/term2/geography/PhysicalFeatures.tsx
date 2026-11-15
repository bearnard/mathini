import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { LandProfile } from '../../../../components/diagrams/g5/Grade5Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Plateau, escarpment and coastal plain',
    content: slide(
      <>
        <Rule>
          Going inland from the sea you cross the low coastal plain, climb the steep escarpment, and reach the high, flat plateau in the centre of South Africa.
        </Rule>
        <LandProfile />
        <Worked
          title="Read the land from the coast"
          steps={[
            <>Start at the sea: the land beside it is low and fairly flat, the coastal plain.</>,
            <>Moving inland the land rises steeply: this steep slope is the escarpment.</>,
            <>At the top the land flattens out again: this high, flat inland area is the plateau.</>,
            <>So the order inland is coastal plain, escarpment, plateau.</>,
          ]}
        />
        <Mistake>Thinking the escarpment is a deep hole or a flat area. It is a steep slope between low land and high land.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mountains',
    content: slide(
      <>
        <Rule>
          The Drakensberg (uKhahlamba) is the highest mountain range in South Africa. It forms part of the Great Escarpment on the edge of KwaZulu-Natal and Lesotho. Mountains are high, steep areas of land.
        </Rule>
        <Worked
          title="Place the Drakensberg"
          steps={[
            <>Look for the highest mountains in South Africa.</>,
            <>They are the Drakensberg, in the east.</>,
            <>The Drakensberg forms part of the escarpment where the high plateau drops to the coast.</>,
            <>Table Mountain, near Cape Town, is a famous mountain too, but the Drakensberg is the highest range.</>,
          ]}
        />
        <Mistake>Thinking Table Mountain is the highest. It is well known, but the Drakensberg is higher.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rivers',
    content: slide(
      <>
        <Rule>
          A river starts high up and flows downhill to the sea. The Orange River (Gariep) is the longest river in South Africa and flows west into the Atlantic Ocean. The Limpopo flows east into the Indian Ocean.
        </Rule>
        <Worked
          title="Follow a river"
          steps={[
            <>A river begins in high ground.</>,
            <>It flows downhill along its course.</>,
            <>The Orange River flows west across the country and enters the Atlantic Ocean.</>,
            <>Rivers such as the Limpopo flow the other way, east to the Indian Ocean.</>,
          ]}
        />
        <Mistake>Thinking all rivers flow to the same ocean. Some flow west to the Atlantic and some flow east to the Indian Ocean.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which land feature is the steep slope between low land and high land?</>,
          <>What is the highest mountain range in South Africa?</>,
          <>Which is the longest river in South Africa, and which ocean does it flow into?</>,
          <>Give the order of the features going inland from the sea.</>,
        ]}
        answers={[
          <>The escarpment.</>,
          <>The Drakensberg.</>,
          <>The Orange River (Gariep); the Atlantic Ocean.</>,
          <>Coastal plain, escarpment, plateau.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is the flat area of land beside the sea called?',
    options: ['Coastal plain', 'Plateau', 'Escarpment', 'Mountain range'],
    answer: 'Coastal plain',
    explanation: 'The coastal plain is the low land next to the sea.',
  },
  {
    prompt: 'Which land feature is high and flat in the middle of South Africa?',
    options: ['Plateau', 'Coastal plain', 'River valley', 'Beach'],
    answer: 'Plateau',
    explanation: 'The plateau is the high, flat inland area.',
  },
  {
    prompt: 'Which is the highest mountain range in South Africa?',
    options: ['Drakensberg', 'Cederberg', 'Table Mountain', 'Magaliesberg'],
    answer: 'Drakensberg',
    explanation: 'The Drakensberg is the highest range.',
  },
  {
    prompt: 'The Orange River flows into which ocean?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    answer: 'Atlantic Ocean',
    explanation: 'The Orange River flows west to the Atlantic.',
  },
];

const PhysicalFeatures = () => (
  <CapsSubjectTopic
    title="Physical Features"
    subtitle="Plateau, escarpment, mountains and rivers"
    learnSteps={learnSteps}
    task="gr5-geography-physical-features"
    bank={bank}
    apiPath="/api/caps/geo"
    grade={5}
  />
);

export default PhysicalFeatures;
