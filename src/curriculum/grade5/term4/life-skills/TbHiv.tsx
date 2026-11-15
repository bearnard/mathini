import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Tuberculosis (TB)',
    content: slide(
      <>
        <Rule>
          TB stands for tuberculosis. It is an illness caused by bacteria that mainly affects the lungs. TB spreads through the air when a sick person coughs or sneezes. TB can be cured if the person takes the medicine for the full six months.
        </Rule>
        <Worked
          title="Prevent and treat TB"
          steps={[
            <>A person with TB coughs and the germs go into the air.</>,
            <>Other people can breathe them in. TB does not spread by shaking hands or sharing a plate.</>,
            <>A person with a cough that does not go away should go to the clinic.</>,
            <>The clinic gives medicine. It must be taken every day for six months to cure TB.</>,
          ]}
        />
        <Mistake>Stopping the medicine when you feel better. TB is only cured if the whole course of medicine is finished.</Mistake>
      </>,
    ),
  },
  {
    title: 'HIV',
    content: slide(
      <>
        <Rule>
          HIV stands for human immunodeficiency virus. It attacks the body’s immune system, which fights sickness. HIV is passed on through contact with infected blood and some other body fluids. You cannot get HIV from hugging, shaking hands or sharing a desk. To stay safe, never touch another person’s blood without protection.
        </Rule>
        <Worked
          title="Fact or myth?"
          steps={[
            <>Myth: you can get HIV by hugging a classmate. Fact: everyday contact like hugging does not spread HIV.</>,
            <>Fact: HIV is passed on through infected blood and some other body fluids.</>,
            <>So if someone is bleeding, ask an adult to help or use gloves.</>,
            <>A clinic can test for HIV and give treatment and advice.</>,
          ]}
        />
        <Mistake>Believing myths about HIV. Everyday contact does not spread it, so learn the facts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Care and respect',
    content: slide(
      <>
        <Rule>
          People with TB or HIV need care, respect and support. Stigma means treating someone unfairly because of an illness, and it hurts. A person who is treated kindly is more likely to go to the clinic and take medicine.
        </Rule>
        <Worked
          title="Respond kindly"
          steps={[
            <>A classmate is away with TB and returns after treatment.</>,
            <>Welcome them back and include them in games.</>,
            <>Do not tease or spread rumours: that is stigma.</>,
            <>Kindness helps people get the care they need.</>,
          ]}
        />
        <Mistake>Running away from or laughing at a sick person. People who are ill deserve kindness and support.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which illness is called TB, and which part of the body does it mainly affect?</li>
            <li>How does TB spread?</li>
            <li>What does HIV attack in the body?</li>
            <li>How should we treat people who have TB or HIV?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Tuberculosis; the lungs.</li>
            <li>Through the air when a sick person coughs or sneezes.</li>
            <li>The immune system.</li>
            <li>With care, respect and support.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'TB mainly affects the…',
    options: ['lungs', 'knees', 'ears', 'teeth'],
    answer: 'lungs',
    explanation: 'Tuberculosis is a lung disease.',
  },
  {
    prompt: 'TB spreads when a sick person…',
    options: ['coughs or sneezes in the air', 'shakes hands', 'shares a desk', 'hugs you'],
    answer: 'coughs or sneezes in the air',
    explanation: 'The bacteria travel in the air.',
  },
  {
    prompt: 'To be cured of TB a person must…',
    options: ['finish the whole course of medicine', 'stop when they feel better', 'rest for one day', 'drink only water'],
    answer: 'finish the whole course of medicine',
    explanation: 'The medicine must be taken for six months.',
  },
  {
    prompt: 'Which statement about HIV is true?',
    options: ['You cannot get HIV from sharing a desk', 'You get HIV from hugging', 'You get HIV from sneezing', 'You get HIV from shaking hands'],
    answer: 'You cannot get HIV from sharing a desk',
    explanation: 'Everyday contact does not spread HIV.',
  },
  {
    prompt: 'Treating someone unfairly because of an illness is called…',
    options: ['stigma', 'recycling', 'erosion', 'rehearsal'],
    answer: 'stigma',
    explanation: 'Stigma hurts and must be avoided.',
  },
];

const TbHiv = () => (
  <CapsSubjectTopic
    title="TB and HIV"
    subtitle="Tuberculosis, HIV and treating people with respect"
    learnSteps={learnSteps}
    task="gr5-life-skills-tb-hiv"
    bank={bank}
    apiPath="/api/caps/lsk"
    grade={5}
  />
);

export default TbHiv;
