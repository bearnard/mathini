import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare } from '../../../../../components/diagrams/science/ScienceBlocks';
import { CycleLink, LeafExchange } from '../../../../../components/diagrams/science/SciencePictures3';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Photosynthesis: making food from light',
    content: slide(
      <>
        <Rule>
          <strong>Photosynthesis</strong> stores energy. Plants make glucose from carbon dioxide and water, using light energy from the Sun, and release oxygen. Chlorophyll absorbs light energy.
        </Rule>
        <LeafExchange />
        <Worked
          title="Inputs and outputs of photosynthesis"
          steps={[
            <>The main inputs are carbon dioxide, water and sunlight.</>,
            <>Chlorophyll in the chloroplasts absorbs the light energy.</>,
            <>The outputs are glucose (stored food) and oxygen, which is released into the air.</>,
          ]}
        />
        <Mistake>Thinking a plant gets its food from the soil. A plant makes its own glucose by photosynthesis. The soil supplies water.</Mistake>
      </>,
    ),
  },
  {
    title: 'Respiration: releasing energy',
    content: slide(
      <>
        <Rule>
          <strong>Respiration</strong> releases usable energy from food. Glucose reacts with oxygen and the products are carbon dioxide and water. It happens in all living cells.
        </Rule>
        <Worked
          title="A muscle cell during a run"
          steps={[
            <>The cell takes in glucose and oxygen from the blood.</>,
            <>Respiration breaks the glucose down and releases energy for the muscle to move.</>,
            <>The products, carbon dioxide and water, leave the cell. You breathe the carbon dioxide out.</>,
          ]}
        />
        <Mistake>Mixing up respiration and breathing. Breathing moves air in and out of the lungs. Respiration is the energy release inside the cells.</Mistake>
      </>,
    ),
  },
  {
    title: 'How the two processes are linked',
    content: slide(
      <>
        <Rule>Photosynthesis stores energy; respiration releases energy. The products of one are the inputs of the other.</Rule>
        <CycleLink />
        <Compare
          left={{ title: 'Photosynthesis', tone: 'emerald', rows: ['stores energy', 'uses carbon dioxide, water and light', 'makes glucose and oxygen', 'in cells with chlorophyll'] }}
          right={{ title: 'Respiration', tone: 'amber', rows: ['releases energy', 'uses glucose and oxygen', 'makes carbon dioxide and water', 'in all living cells'] }}
        />
        <Worked
          title="Follow the oxygen and carbon dioxide"
          steps={[
            <>A leaf releases oxygen in photosynthesis.</>,
            <>An animal breathes it in, and its cells use it in respiration.</>,
            <>The cells make carbon dioxide, the animal breathes it out, and the plant uses it in photosynthesis again.</>,
          ]}
        />
        <Mistake>Believing only animals respire. Plants respire all the time too, day and night, as every living cell does.</Mistake>
      </>,
    ),
  },
  {
    title: 'Light and darkness',
    content: slide(
      <>
        <Rule>Photosynthesis needs light. Without light a plant cannot carry out normal photosynthesis, but it still respires.</Rule>
        <Worked
          title="A plant is kept in complete darkness for many days"
          steps={[
            <>No light is available, so photosynthesis decreases and, in complete darkness, stops.</>,
            <>The plant makes no new glucose.</>,
            <>It still respires, using up its stored glucose, so it slowly becomes weak and yellow.</>,
          ]}
        />
        <Mistake>Expecting photosynthesis to carry on in the dark. Light energy is one of the inputs, so less light means less photosynthesis.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Name the main inputs of photosynthesis. Which gas is released?</li>
            <li>What is the main purpose of respiration? Where does it happen?</li>
            <li>Compare photosynthesis and respiration in one sentence. Name the products of respiration.</li>
            <li>Why is chlorophyll important? What happens to photosynthesis in complete darkness for many days?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Carbon dioxide, water and sunlight. Oxygen.</li>
            <li>To release usable energy from food. In all living cells.</li>
            <li>Photosynthesis stores energy; respiration releases energy. The products of respiration are carbon dioxide and water.</li>
            <li>It absorbs light energy. It decreases, and in complete darkness it stops, because no light is available.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which set gives the main inputs for photosynthesis?',
    options: ['Carbon dioxide, water, and sunlight', 'Glucose, oxygen, and sunlight', 'Water, oxygen, and heat', 'Glucose, carbon dioxide, and heat'],
    answer: 'Carbon dioxide, water, and sunlight',
    explanation: 'Plants use carbon dioxide and water, with light energy, to make glucose.',
  },
  {
    prompt: 'Which gas is released during photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
    answer: 'Oxygen',
    explanation: 'Oxygen is a product of photosynthesis and is released into the air.',
  },
  {
    prompt: 'What is the main purpose of respiration in cells?',
    options: ['To release usable energy from food', 'To trap sunlight in chlorophyll', 'To make mineral salts in roots', 'To produce chlorophyll in soil'],
    answer: 'To release usable energy from food',
    explanation: 'Respiration breaks down glucose to release energy for life processes.',
  },
  {
    prompt: 'Which statement correctly compares photosynthesis and respiration?',
    options: ['Photosynthesis stores energy; respiration releases energy', 'Photosynthesis and respiration both only release energy', 'Respiration only happens in plants and photosynthesis in animals', 'Both processes happen only at night'],
    answer: 'Photosynthesis stores energy; respiration releases energy',
    explanation: 'Photosynthesis captures and stores energy, while respiration makes that energy available.',
  },
  {
    prompt: 'Chlorophyll is important because it...',
    options: ['absorbs light energy', 'stores oxygen in roots', 'makes carbon dioxide', 'breaks down minerals'],
    answer: 'absorbs light energy',
    explanation: 'Chlorophyll in chloroplasts captures sunlight for photosynthesis.',
  },
  {
    prompt: 'Where does respiration happen?',
    options: ['In all living cells', 'Only in green leaves', 'Only in animal lungs', 'Only in roots at night'],
    answer: 'In all living cells',
    explanation: 'Both plants and animals respire continuously in their cells.',
  },
  {
    prompt: 'If a plant is kept in complete darkness for many days, photosynthesis will mostly...',
    options: ['decrease because no light is available', 'increase because darkness helps chlorophyll', 'stay exactly the same', 'stop respiration immediately'],
    answer: 'decrease because no light is available',
    explanation: 'Without light, the plant cannot carry out normal photosynthesis.',
  },
  {
    prompt: 'Which pair shows products of respiration?',
    options: ['Carbon dioxide and water', 'Glucose and oxygen', 'Nitrogen and glucose', 'Water and chlorophyll'],
    answer: 'Carbon dioxide and water',
    explanation: 'Respiration uses glucose and oxygen and produces carbon dioxide, water, and energy.',
  },
];

const PhotosynthesisAndRespiration = () => (
  <CapsSubjectTopic
    title="Photosynthesis and Respiration"
    subtitle="Inputs, outputs, stored food, and energy release in living systems"
    learnSteps={learnSteps}
    task="gr8-photosynthesis-and-respiration-t1"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default PhotosynthesisAndRespiration;
