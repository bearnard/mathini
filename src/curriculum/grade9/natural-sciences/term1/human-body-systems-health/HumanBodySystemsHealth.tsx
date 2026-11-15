import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { BREATHING_STEPS, NUTRIENT_STEPS } from '../../../../../components/diagrams/science/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Digestive and circulatory systems',
    content: slide(
      <>
        <Rule>
          The main role of the digestive system is to break food down into small nutrients. The circulatory system (heart, blood and vessels) carries the nutrients to the cells.
        </Rule>
        <NumberedSteps steps={NUTRIENT_STEPS} tone="amber" label="From food to cells" />
        <Worked
          title="A slice of bread"
          steps={[<>The digestive system breaks the bread down into small nutrients such as sugars.</>, <>The nutrients pass into the blood.</>, <>The circulatory system carries them to the cells, which use them for energy and growth.</>]}
        />
        <Mistake>Thinking the digestive system carries food around the body. The digestive system breaks food down; the blood carries the nutrients.</Mistake>
      </>,
    ),
  },
  {
    title: 'Respiratory and circulatory systems',
    content: slide(
      <>
        <Rule>
          The respiratory system takes in oxygen and removes carbon dioxide. The lungs take in oxygen; the blood carries it to cells. The circulatory system also transports oxygen throughout the body.
        </Rule>
        <NumberedSteps steps={BREATHING_STEPS} tone="blue" label="Oxygen in, carbon dioxide out" />
        <Worked
          title="A learner runs"
          steps={[<>The muscles need more energy, so they use more oxygen.</>, <>The learner breathes faster and the heart beats faster, so the blood carries more oxygen to the muscle cells.</>, <>The cells produce more carbon dioxide, which the blood carries back to the lungs to be breathed out.</>]}
        />
        <Mistake>Saying the lungs make carbon dioxide. Cells make it in respiration. The respiratory system removes it from the body.</Mistake>
      </>,
    ),
  },
  {
    title: 'Excretion and homeostasis',
    content: slide(
      <>
        <Rule>
          The excretory system includes the kidneys, which filter waste, and the bladder, which stores urine. Homeostasis is the body keeping its inside conditions stable, such as temperature.
        </Rule>
        <Compare
          left={{ title: 'Too hot', tone: 'amber', rows: ['you sweat, and the evaporating sweat cools the skin', 'blood vessels near the skin widen so more heat escapes'] }}
          right={{ title: 'Too cold', tone: 'sky', rows: ['you shiver, and the movement makes heat', 'blood vessels near the skin narrow so less heat is lost'] }}
        />
        <Worked
          title="Name the organs and the job"
          steps={[<>Kidneys filter waste out of the blood.</>, <>The bladder stores urine until it is passed out.</>, <>Sweating and shivering both help to keep the body at a stable temperature: homeostasis.</>]}
        />
        <Mistake>Thinking homeostasis means nothing changes in the body. Conditions go up and down a little, and the body responds to bring them back to a stable level.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reproduction and healthy choices',
    content: slide(
      <>
        <Rule>
          The reproductive system makes the sex cells needed to form a new life. Healthy choices support the other systems.
        </Rule>
        <Terms
          rows={[
            ['Circulatory', 'regular exercise strengthens the heart and improves circulation'],
            ['Respiratory', 'regular exercise in fresh air strengthens the lungs and reduces breathing strain'],
            ['Digestive', 'a balanced diet gives the nutrients the body needs'],
            ['Excretory', 'drinking enough water helps the kidneys do their job'],
          ]}
        />
        <Worked
          title="Choose the healthy habit"
          steps={[<>Which choice promotes a healthy circulatory system? Regular exercise.</>, <>Which supports the respiratory system? Regular exercise in fresh air.</>]}
        />
        <Mistake>Thinking health habits only affect one system. The systems work together, so exercise helps the heart, the lungs and the whole body.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is the main role of the digestive system? Which system transports oxygen?</li>
            <li>What does the respiratory system remove? Which organs are part of the excretory system?</li>
            <li>What is homeostasis? What does the reproductive system do?</li>
            <li>Name a choice that supports a healthy circulatory system. How do the lungs and blood work together?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Break food down into small nutrients. The circulatory system.</li>
            <li>Carbon dioxide. Kidneys and bladder.</li>
            <li>The body keeping its inside conditions stable. It makes the sex cells needed to form a new life.</li>
            <li>Regular exercise. The lungs take in oxygen; the blood carries it to cells.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main role of the digestive system?',
    options: ['Take in oxygen from the air we breathe in', 'Break food down into small nutrients', 'Carry the blood to every part of the body', 'Remove liquid and solid waste from the blood'],
    answer: 'Break food down into small nutrients',
    explanation: 'The digestive system breaks down food so the body can absorb and use nutrients.',
  },
  {
    prompt: 'Which system is responsible for transporting oxygen throughout the body?',
    options: ['Digestive', 'Respiratory', 'Circulatory', 'Excretory'],
    answer: 'Circulatory',
    explanation: 'The circulatory system (heart, blood, vessels) transports oxygen and nutrients.',
  },
  {
    prompt: 'What does the respiratory system remove from the body?',
    options: ['Urine', 'Carbon dioxide', 'Nutrients', 'Blood cells'],
    answer: 'Carbon dioxide',
    explanation: 'The respiratory system takes in oxygen and removes carbon dioxide.',
  },
  {
    prompt: 'Which organs are part of the excretory system?',
    options: ['Heart and lungs', 'Kidneys and bladder', 'Stomach and intestines', 'Brain and nerves'],
    answer: 'Kidneys and bladder',
    explanation: 'The excretory system includes kidneys that filter waste and the bladder that stores urine.',
  },
  {
    prompt: 'What is homeostasis?',
    options: ['The way that food is changed into energy in cells', 'The way that muscles move the bones of the body', 'The body keeping its inside conditions stable', 'The way that waste is moved out of the large intestine'],
    answer: 'The body keeping its inside conditions stable',
    explanation: 'Homeostasis is the body\'s ability to keep internal conditions stable, like temperature.',
  },
  {
    prompt: 'Which choice promotes a healthy circulatory system?',
    options: ['Smoking cigarettes', 'Regular exercise', 'Skipping meals', 'No sleep'],
    answer: 'Regular exercise',
    explanation: 'Exercise strengthens the heart and improves circulation.',
  },
  {
    prompt: 'What is the relationship between the digestive and circulatory systems?',
    options: ['The two systems are separate and never share a task', 'The digestive system breaks food down; the blood carries the nutrients', 'The blood system makes the food, which the gut then breaks down', 'The gut takes oxygen from food and sends it to the heart'],
    answer: 'The digestive system breaks food down; the blood carries the nutrients',
    explanation: 'The digestive system breaks down food, and the circulatory system carries nutrients to cells.',
  },
  {
    prompt: 'Which lifestyle choice supports respiratory system health?',
    options: ['Smoking', 'Breathing polluted air', 'Avoiding exercise', 'Regular exercise in fresh air'],
    answer: 'Regular exercise in fresh air',
    explanation: 'Exercise strengthens lungs and breathing; fresh air reduces respiratory strain.',
  },
  {
    prompt: 'What does the reproductive system do?',
    options: ['Digest food and take in the nutrients from it', 'Make the sex cells needed to form a new life', 'Filter the blood and remove waste from it', 'Control the heart rate and the pace of breathing'],
    answer: 'Make the sex cells needed to form a new life',
    explanation: 'The reproductive system produces sex cells needed for making new humans.',
  },
  {
    prompt: 'How do the respiratory and circulatory systems work together?',
    options: ['The two systems do not work together in the body', 'The lungs take in oxygen; the blood carries it to cells', 'The blood gives oxygen to the lungs, which pass it to cells', 'The heart takes oxygen from the air and sends it to the lungs'],
    answer: 'The lungs take in oxygen; the blood carries it to cells',
    explanation: 'Lungs absorb oxygen which blood then carries to all body cells through circulation.',
  },
];

const HumanBodySystemsHealth = () => (
  <CapsSubjectTopic
    title="Human Body Systems and Health"
    subtitle="How body systems work together to keep you healthy"
    learnSteps={learnSteps}
    task="gr9-human-body-systems-health-t1"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default HumanBodySystemsHealth;
