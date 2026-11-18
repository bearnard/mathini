import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';
import * as b from '../../../../../components/diagrams/business10/bus10';

// Numbers come from bus10.ts (tested in bus10.test.ts and g10BsGaps.test.ts). All data are imaginary teaching data; Acts are named only as areas of law.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'What is an entrepreneur?',
    content: slide(
      <>
        <Rule>An entrepreneur is a person who sees a business opportunity, organises the resources, takes the risk and runs a business to make a profit. Entrepreneurs create jobs and new products. Some qualities help a person to succeed as an entrepreneur, and these qualities can be developed.</Rule>
        <FactCards
          cards={[
            { title: 'Sees', line1: 'spots a need or', line2: 'an opportunity' },
            { title: 'Organises', line1: 'brings together money,', line2: 'people and materials' },
            { title: 'Risks', line1: 'invests time and money', line2: 'with no guarantee' },
            { title: 'Creates', line1: 'jobs, products and', line2: 'income' },
          ]}
          aria="What an entrepreneur does. Sees: spots a need or an opportunity. Organises: brings together money, people and materials. Risks: invests time and money with no guarantee. Creates: jobs, products and income."
        />
        <Worked
          title="Spot the entrepreneur"
          steps={[
            'Zanele notices that workers near a factory have nowhere to buy lunch, and she starts to sell lunches from a table.',
            'She buys the ingredients, hires a helper and risks her savings.',
            'She is an entrepreneur: she saw an opportunity, organised the resources and took a risk.',
          ]}
        />
        <Mistake>Thinking that an entrepreneur is only the owner of a big company. A person who starts a small business is an entrepreneur too.</Mistake>
      </>,
    ),
  },
  {
    title: 'The entrepreneurial qualities',
    content: slide(
      <>
        <Rule>Qualities of a successful entrepreneur include a desire for responsibility, being a risk taker, perseverance, good management and leadership skills, confidence in one&rsquo;s ability to succeed, high energy, passion, big dreams with a clear vision, exceptional organisational skills, a high degree of commitment, flexibility (the ability to adapt quickly) and the willpower to overcome obstacles.</Rule>
        <FactCards
          cards={[
            { title: 'Drive', line1: 'passion, energy,', line2: 'commitment and willpower' },
            { title: 'Thinking', line1: 'vision, big dreams and', line2: 'confidence' },
            { title: 'Courage', line1: 'risk taking and', line2: 'perseverance' },
            { title: 'Management', line1: 'leadership, organisation', line2: 'and flexibility' },
          ]}
          aria="Entrepreneurial qualities in four groups. Drive: passion, energy, commitment and willpower. Thinking: vision, big dreams and confidence. Courage: risk taking and perseverance. Management: leadership, organisation and flexibility."
        />
        <Worked
          title="Name the quality"
          steps={[
            'A baker whose first shop failed opens a second shop: perseverance and willpower.',
            'A farmer who changes the crop when prices fall: flexibility.',
            'A young owner who says "In five years I will have three branches": big dreams with a clear vision.',
          ]}
        />
        <Mistake>Believing that a risk taker acts without thinking. A good entrepreneur takes a calculated risk after weighing up the possible gains and losses.</Mistake>
      </>,
    ),
  },
  {
    title: 'Assessing your own qualities',
    content: slide(
      <>
        <Rule>You can assess your own entrepreneurial qualities by scoring yourself from 1 (weak) to 5 (strong) on each quality, adding the scores and finding the average. The highest scores show your strengths and the lowest show where you need to grow. Ask people who know you to give an honest view.</Rule>
        <InfoTable
          cols={[{ title: 'Quality', w: 60 }, { title: 'Score (1 to 5)', w: 40 }]}
          rows={b.SELF.map(([q, s]) => [q, String(s)])}
          aria={`A self-assessment. ${b.SELF.map(([q, s]) => `${q} ${s}`).join(', ')}. The total is ${b.selfTotal()} out of 40 and the average is ${b.dec(b.selfAverage())}.`}
        />
        <Worked
          title="Read the self-assessment"
          steps={[
            `Total = ${b.SELF.map(([, s]) => s).join(' + ')} = ${b.selfTotal()} out of ${b.SELF.length * 5}.`,
            `Average = ${b.selfTotal()} ÷ ${b.SELF.length} = ${b.dec(b.selfAverage())}.`,
            `The lowest score is for ${b.weakest()[0].toLowerCase()} (${b.weakest()[1]}): the person should plan how to improve it, for example with a diary and a weekly plan.`,
          ]}
        />
        <Mistake>Ignoring the weakest score. A weak quality does not stop a person from becoming an entrepreneur, but it needs a plan, or a partner who is strong in that area.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is an entrepreneur?</>,
          <>Name three entrepreneurial qualities.</>,
          <>A person scores 4, 3, 5 and 4 on four qualities. What is the average?</>,
          <>Which quality is shown by a person who adapts quickly to change?</>,
        ]}
        answers={[
          <>A person who sees an opportunity, organises resources, takes the risk and runs a business.</>,
          <>For example perseverance, leadership and confidence.</>,
          <>{b.dec((4 + 3 + 5 + 4) / 4)}.</>,
          <>Flexibility.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which description fits an entrepreneur best?",
    options: ["A person who works only for a salary", "A person who avoids every kind of risk", "A person who spots an opportunity and starts", "A person who owns only a very large company"],
    answer: "A person who spots an opportunity and starts",
    explanation: "An entrepreneur organises resources and takes the risk to make a profit.",
  },
  {
    prompt: "Which entrepreneurial quality is shown by an owner who opens a second shop after the first one failed?",
    options: ["Perseverance", "Flexibility", "Leadership", "Delegation"],
    answer: "Perseverance",
    explanation: "Perseverance means keeping going after setbacks.",
  },
  {
    prompt: "A farmer changes his crop when the price of maize falls. Which quality is this?",
    options: ["Perseverance", "Confidence", "Passion", "Flexibility"],
    answer: "Flexibility",
    explanation: "Flexibility is the ability to adapt quickly.",
  },
  {
    prompt: "An owner says: \"In five years I will have three branches.\" Which quality is shown?",
    options: ["Avoidance of every risk", "A clear vision with big dreams", "A very poor organisation", "A very weak commitment"],
    answer: "A clear vision with big dreams",
    explanation: "A clear vision of the future is an entrepreneurial quality.",
  },
  {
    prompt: "What is a calculated risk?",
    options: ["A risk taken without any thought", "A risk taken after weighing losses", "A risk that is always avoided", "A risk that has no possible loss"],
    answer: "A risk taken after weighing losses",
    explanation: "Good entrepreneurs take planned, not reckless, risks.",
  },
  {
    prompt: "Which quality means being able to overcome obstacles through strong determination?",
    options: ["Luck", "Competition", "Taxation", "Willpower"],
    answer: "Willpower",
    explanation: "Willpower helps an entrepreneur to overcome obstacles.",
  },
  {
    prompt: "Which of these is an entrepreneurial quality?",
    options: ["A desire for responsibility", "A wish to avoid decisions", "A dislike of change", "A fear of all risk"],
    answer: "A desire for responsibility",
    explanation: "Entrepreneurs want to take charge.",
  },
  {
    prompt: "Which quality includes planning tasks and keeping accurate records?",
    options: ["Willpower to overcome obstacles", "Passion for the product", "Exceptional organisational skills", "Big dreams for the future"],
    answer: "Exceptional organisational skills",
    explanation: "Organisation keeps a business running smoothly.",
  },
  {
    prompt: "A person scores 4, 3, 5 and 4 on four qualities. What is the average?",
    options: ["3", "5", "16", "4"],
    answer: "4",
    explanation: "The total is 16 and 16 / 4 = 4.",
  },
  {
    prompt: "A self-assessment of eight qualities adds up to 30. What is the average?",
    options: ["3,5", "3,75", "4", "30"],
    answer: "3,75",
    explanation: "The average is the total divided by the number of qualities: 30 / 8 = 3,75.",
  },
  {
    prompt: "In a self-assessment, which score shows where a person needs to improve most?",
    options: ["The lowest score", "The highest score", "The middle score", "The total score"],
    answer: "The lowest score",
    explanation: "The weakest quality needs a plan.",
  },
  {
    prompt: "A person scores low on organisation. What is a sensible step?",
    options: ["Ignore the weakness completely", "Give up any idea of a business", "Make a weekly plan, or find a partner", "Hide the low score from others"],
    answer: "Make a weekly plan, or find a partner",
    explanation: "A weakness needs a plan or a partner who is strong in that area.",
  },
  {
    prompt: "Why do entrepreneurs create jobs?",
    options: ["They avoid having any employees", "They close down all businesses", "Their businesses hire workers", "They stop trading very soon"],
    answer: "Their businesses hire workers",
    explanation: "Businesses need workers.",
  },
  {
    prompt: "Can entrepreneurial qualities be developed?",
    options: ["Yes, with practice and experience", "No, you are born with them", "Only by winning a lottery", "Only in a large company"],
    answer: "Yes, with practice and experience",
    explanation: "Skills and attitudes can grow over time.",
  },
];

const EntrepreneurialQualities = () => (
  <CapsSubjectTopic
    title="Entrepreneurial Qualities"
    subtitle="What an entrepreneur does, the entrepreneurial qualities and assessing your own qualities"
    learnSteps={learnSteps}
    task="gr10-entrepreneurial-qualities-t2"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={10}
  />
);

export default EntrepreneurialQualities;
