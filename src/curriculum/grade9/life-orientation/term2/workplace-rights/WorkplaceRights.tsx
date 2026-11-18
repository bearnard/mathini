import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Rights of workers',
    content: slide(
      <>
        <Rule>South African law protects people at work. Workers have the right to fair treatment and fair pay, to a safe and healthy workplace, to rest and leave, to a written statement of their work conditions, to join a trade union and to be free from discrimination and harassment. These rights apply to young workers and to adults.</Rule>
        <FactCards
          cards={[
            { title: 'Fair', line1: 'fair treatment and', line2: 'fair pay' },
            { title: 'Safe', line1: 'a safe and healthy', line2: 'workplace' },
            { title: 'Rest', line1: 'rest breaks and', line2: 'leave' },
            { title: 'Equal', line1: 'no discrimination', line2: 'or harassment' },
          ]}
          aria="Rights of workers. Fair: fair treatment and fair pay. Safe: a safe and healthy workplace. Rest: rest breaks and leave. Equal: no discrimination or harassment."
        />
        <Worked
          title="Identify a right"
          steps={[
            'A worker is given protective gloves for a dangerous job: the right to a safe workplace.',
            'A worker is paid for the hours that were agreed: fair pay.',
            'A worker is treated unfairly because of her gender: this violates the right to equal treatment.',
          ]}
        />
        <Mistake>Thinking that rights only apply to permanent workers. Part-time and young workers are protected too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Responsibilities of workers',
    content: slide(
      <>
        <Rule>Workers also have responsibilities: to arrive on time, to do the work honestly and carefully, to follow safety rules, to respect colleagues and customers, to look after equipment and to keep business information private. A worker who does these things builds trust and opportunities.</Rule>
        <FactCards
          cards={[
            { title: 'On time', line1: 'arrive and keep', line2: 'agreed hours' },
            { title: 'Honest work', line1: 'do the job carefully', line2: 'and truthfully' },
            { title: 'Safety', line1: 'follow safety rules', line2: 'and look after equipment' },
            { title: 'Respect', line1: 'treat colleagues and', line2: 'customers with respect' },
          ]}
          aria="Responsibilities of workers. On time: arrive and keep agreed hours. Honest work: do the job carefully and truthfully. Safety: follow safety rules and look after equipment. Respect: treat colleagues and customers with respect."
        />
        <Worked
          title="Match right and responsibility"
          steps={[
            'The right to a safe workplace goes with the responsibility to follow the safety rules.',
            'The right to fair pay goes with the responsibility to do the work honestly.',
            'The right to respect goes with the responsibility to respect others.',
          ]}
        />
        <Mistake>Expecting to enjoy your rights without carrying out your responsibilities. In a good workplace both go together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Opportunities in the world of work',
    content: slide(
      <>
        <Rule>There are many ways to learn and grow at work. Learnerships and apprenticeships combine training with work experience, internships give young people experience in a workplace, and skills programmes and further study can lead to better jobs. Some people start their own business and employ others.</Rule>
        <FactCards
          cards={[
            { title: 'Learnership', line1: 'training and work', line2: 'experience together' },
            { title: 'Apprenticeship', line1: 'learn a trade from', line2: 'skilled workers' },
            { title: 'Internship', line1: 'experience in a', line2: 'workplace' },
            { title: 'Own business', line1: 'start a business', line2: 'and create jobs' },
          ]}
          aria="Opportunities at work. Learnership: training and work experience together. Apprenticeship: learn a trade from skilled workers. Internship: experience in a workplace. Own business: start a business and create jobs."
        />
        <Worked
          title="Choose an opportunity"
          steps={[
            'Thabo wants to become an electrician and joins an apprenticeship.',
            'He learns from skilled electricians and earns while he trains.',
            'After qualifying he may work for a company or start his own business.',
          ]}
        />
        <Mistake>Believing that you must wait until you finish school to learn about work. Information, volunteering and job shadowing can start now.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two rights that workers have.</>,
          <>Name two responsibilities of workers.</>,
          <>What is an apprenticeship?</>,
          <>Why do rights and responsibilities go together?</>,
        ]}
        answers={[
          <>For example a safe workplace and fair pay.</>,
          <>For example arriving on time and doing honest work.</>,
          <>Training in a trade from skilled workers while working.</>,
          <>A good workplace needs both, so that everyone is treated fairly.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which is a right of a worker?",
    options: ["Being late whenever you wish", "Taking tools home", "A safe and healthy workplace", "Ignoring safety rules"],
    answer: "A safe and healthy workplace",
    explanation: "Workers have the right to a safe workplace.",
  },
  {
    prompt: "Which of these is something a worker can expect from an employer?",
    options: ["Fair pay for the agreed work", "Free time every day", "A free car", "A bigger office"],
    answer: "Fair pay for the agreed work",
    explanation: "Workers have the right to fair pay.",
  },
  {
    prompt: "A worker is treated unfairly because of her gender. Which right is violated?",
    options: ["The right to a holiday abroad", "The right to a free phone", "The right to a company car", "The right to equal treatment"],
    answer: "The right to equal treatment",
    explanation: "Discrimination violates the right to equal treatment.",
  },
  {
    prompt: "Do rights at work apply to young and part-time workers?",
    options: ["No, only to permanent adults", "Yes, they are protected too", "No, only to managers", "No, only to office workers"],
    answer: "Yes, they are protected too",
    explanation: "The law protects all workers.",
  },
  {
    prompt: "Which is a responsibility of a worker?",
    options: ["To take supplies for free", "To arrive on time", "To ignore customers", "To waste time at work"],
    answer: "To arrive on time",
    explanation: "Reliable workers keep the agreed hours.",
  },
  {
    prompt: "Which duty protects everybody at a workplace?",
    options: ["To break the rules", "To hide accidents", "To skip training", "To follow safety rules"],
    answer: "To follow safety rules",
    explanation: "Safety rules protect everybody at work.",
  },
  {
    prompt: "Which responsibility goes with the right to respect?",
    options: ["To respect others", "To insult customers", "To shout at colleagues", "To ignore the manager"],
    answer: "To respect others",
    explanation: "Rights and responsibilities go together.",
  },
  {
    prompt: "What should a worker do with business information that is private?",
    options: ["Post it online", "Share it with rivals", "Keep it private", "Sell it"],
    answer: "Keep it private",
    explanation: "Keeping business information private builds trust.",
  },
  {
    prompt: "What is a learnership?",
    options: ["A holiday programme at the sea", "A kind of loan from a bank", "A type of tax on wages", "Training with work experience"],
    answer: "Training with work experience",
    explanation: "Learnerships combine learning and work.",
  },
  {
    prompt: "What is an apprenticeship?",
    options: ["Reading about trades in a book", "Learning a trade at work", "A short holiday course at a hotel", "A kind of savings account"],
    answer: "Learning a trade at work",
    explanation: "Apprentices learn on the job and earn while they train.",
  },
  {
    prompt: "What is an internship?",
    options: ["Work experience for a young person", "A permanent promotion at work", "A holiday trip with the family", "A fine for being late"],
    answer: "Work experience for a young person",
    explanation: "Interns learn what a job is like.",
  },
  {
    prompt: "Which opportunity lets a person create jobs for others?",
    options: ["Staying at home", "Avoiding work", "Starting a business", "Leaving a job at once"],
    answer: "Starting a business",
    explanation: "An entrepreneur can employ other people.",
  },
  {
    prompt: "Why do rights and responsibilities go together at work?",
    options: ["Rights are enough", "Responsibilities are enough", "A good workplace needs both", "Neither matters"],
    answer: "A good workplace needs both",
    explanation: "Everyone is treated fairly when both are respected.",
  },
  {
    prompt: "Which can you do now to learn about work?",
    options: ["Job shadowing or volunteering", "Wait until you retire", "Ignore work for years", "Leave school at once"],
    answer: "Job shadowing or volunteering",
    explanation: "You can learn about work before you leave school.",
  },
];

const WorkplaceRights = () => (
  <CapsSubjectTopic
    title="Rights, Responsibilities and Opportunities in the Workplace"
    subtitle="Workers' rights and responsibilities, and learnerships, apprenticeships and internships"
    learnSteps={learnSteps}
    task="gr9-workplace-rights-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default WorkplaceRights;
