import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { ManagementPyramid } from '../../../../../components/diagrams/ems/EmsPictures';
import { PlanVsActual } from '../../../../../components/diagrams/ems/Ems8bPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { FUNCTIONS, GOOD_MANAGEMENT, LEVELS, STYLES, controlVariance, styleFor } from '../../../../../components/diagrams/ems/ems8d-helpers';

// Every statement and amount comes from ems8d-helpers.ts (tested in ems8d-helpers.test.ts and g8EmsT4.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const cv = controlVariance(10000, 8500);

export const learnSteps: LearnStep[] = [
  {
    title: 'Levels of management',
    content: slide(
      <>
        <Rule>Management is the work of leading a business so that it reaches its goals. There are different levels of management. {LEVELS[0].level[0].toUpperCase() + LEVELS[0].level.slice(1)} {LEVELS[0].does}. Middle management {LEVELS[1].does}. The operational (supervisory) level {LEVELS[2].does}.</Rule>
        <ManagementPyramid />
        <Worked
          title="Match the manager to the level"
          steps={[
            `The owner or a board of directors: ${LEVELS[0].level}.`,
            `A branch manager: ${LEVELS[1].level}.`,
            `A team leader who supervises the cashiers: ${LEVELS[2].level}.`,
          ]}
        />
        <Mistake>Thinking that only the owner manages. Every level of management has its own work.</Mistake>
      </>,
    ),
  },
  {
    title: 'The four management tasks',
    content: slide(
      <>
        <Rule>Managers carry out four tasks, or functions: {FUNCTIONS.map((f) => f.task).join(', ')}. Planning is {FUNCTIONS[0].meaning}. Organising is {FUNCTIONS[1].meaning}. Leading is {FUNCTIONS[2].meaning}. Controlling is {FUNCTIONS[3].meaning}.</Rule>
        <PlanVsActual planned={10000} actual={8500} />
        <Worked
          title="Control the plan"
          steps={[
            `Planned sales: ${randNb(10000)}. Actual sales: ${randNb(8500)}.`,
            `Difference = actual − planned = ${randNb(Math.abs(cv.diff))} (${cv.kind}).`,
            'The manager finds out why sales were lower and corrects the problem: that is controlling.',
          ]}
        />
        <Mistake>Thinking that planning ends when the work starts. Controlling compares the results with the plan and leads to new planning.</Mistake>
      </>,
    ),
  },
  {
    title: 'Styles of management',
    content: slide(
      <>
        <Rule>A management style is the way a manager deals with workers. In the autocratic style the manager makes all the decisions. In the laissez-faire (permissive or free-rein) style the manager gives the workers almost complete freedom. In the democratic (participatory) style the manager asks the workers for their ideas and decides with them.</Rule>
        <FactCards
          cards={[
            { title: 'Autocratic', line1: 'the manager decides alone;', line2: 'quick, but workers feel unheard' },
            { title: 'Laissez-faire', line1: 'workers decide for themselves;', line2: 'creative, but little direction' },
            { title: 'Democratic', line1: 'the manager asks for ideas;', line2: 'motivating, but slower' },
          ]}
          aria="Management styles. Autocratic: the manager decides alone, which is quick but workers feel unheard. Laissez-faire: workers decide for themselves, which allows creativity but gives little direction. Democratic: the manager asks for ideas, which motivates the workers but is slower."
        />
        <Worked
          title="Name the style"
          steps={[
            `The manager gives orders and does not ask anyone: ${styleFor('makes all the decisions')}.`,
            `The manager holds a meeting to ask for ideas before deciding: ${styleFor('asks the workers for ideas')}.`,
            `The manager leaves skilled designers to work as they choose: ${styleFor('gives workers almost complete freedom')}.`,
          ]}
        />
        <Mistake>Saying that one style is always best. The best style depends on the situation and the workers; in a crisis a quick, autocratic decision may be needed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Characteristics of good management',
    content: slide(
      <>
        <Rule>A good manager {GOOD_MANAGEMENT.join(', ')}. These characteristics help a business to reach its goals and keep its workers.</Rule>
        <FactCards
          cards={[
            { title: 'Communicates clearly', line1: 'workers know what is', line2: 'expected of them' },
            { title: 'Fair and honest', line1: 'treats all workers', line2: 'equally and openly' },
            { title: 'Sound decisions', line1: 'uses facts and thinks', line2: 'about the results' },
            { title: 'Motivates workers', line1: 'recognises good work and', line2: 'helps workers to grow' },
          ]}
          aria="Characteristics of good management. Communicates clearly: workers know what is expected of them. Fair and honest: treats all workers equally and openly. Sound decisions: uses facts and thinks about the results. Motivates workers: recognises good work and helps workers to grow."
        />
        <Worked
          title="Assess a manager"
          steps={[
            'A manager who explains the targets and listens to questions communicates clearly.',
            'A manager who favours friends is not fair.',
            'A manager who thanks a worker for good work motivates the team.',
          ]}
        />
        <Mistake>Thinking that a good manager never makes a mistake. A good manager takes responsibility and learns from mistakes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>List the four management tasks.</>,
          <>Which management style asks the workers for their ideas?</>,
          <>Name the level that looks after the staff each day.</>,
          <>The plan was R10 000 and the actual result was R8 500. What is the difference?</>,
        ]}
        answers={[
          <>Planning, organising, leading and controlling.</>,
          <>The democratic (participatory) style.</>,
          <>The operational (supervisory) level.</>,
          <>{randNb(Math.abs(cv.diff))} {cv.kind}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which level of management sets the long-term goals of the whole business?",
    options: ["Middle management", "The operational level", "Top management", "The workers"],
    answer: "Top management",
    explanation: "Top management sets the long-term goals and strategy.",
  },
  {
    prompt: "Which level of management turns the goals into plans for each department?",
    options: ["Middle management", "Top management", "The operational level", "The customers"],
    answer: "Middle management",
    explanation: "Middle managers plan for their departments.",
  },
  {
    prompt: "At which level of management are the daily work and the staff supervised?",
    options: ["Top management", "Middle management", "The board of directors", "The operational level"],
    answer: "The operational level",
    explanation: "Supervisors look after the daily work.",
  },
  {
    prompt: "Which of these is a management task?",
    options: ["Selling", "Planning", "Typing", "Delivering"],
    answer: "Planning",
    explanation: "The four tasks are planning, organising, leading and controlling.",
  },
  {
    prompt: "What is planning?",
    options: ["Checking results after the work", "Deciding the goals and how to reach them", "Guiding and motivating workers", "Buying equipment"],
    answer: "Deciding the goals and how to reach them",
    explanation: "Planning sets goals and the way to reach them.",
  },
  {
    prompt: "What does organising mean?",
    options: ["Deciding the goals", "Checking the results", "Firing the workers", "Arranging the resources"],
    answer: "Arranging the resources",
    explanation: "Organising puts the resources in place to carry out the plan.",
  },
  {
    prompt: "Which management task is guiding and motivating the workers?",
    options: ["Leading", "Planning", "Organising", "Controlling"],
    answer: "Leading",
    explanation: "Leading is guiding and motivating people.",
  },
  {
    prompt: "Which management task is checking results against the plan?",
    options: ["Planning", "Organising", "Controlling", "Leading"],
    answer: "Controlling",
    explanation: "Controlling compares actual results with the plan.",
  },
  {
    prompt: "Sales were planned at R10 000 but the actual sales were R8 500. What is the difference?",
    options: ["R1 500 above the plan", "R18 500 above the plan", "R8 500 below the plan", "R1 500 below the plan"],
    answer: "R1 500 below the plan",
    explanation: "10 000 − 8 500 = 1 500 below the plan.",
  },
  {
    prompt: "A manager makes all the decisions without asking the workers. Which style is this?",
    options: ["Democratic", "Autocratic", "Laissez-faire", "Participatory"],
    answer: "Autocratic",
    explanation: "In the autocratic style the manager decides alone.",
  },
  {
    prompt: "A manager asks the workers for ideas before deciding. Which style is this?",
    options: ["Democratic", "Autocratic", "Laissez-faire", "Dictatorial"],
    answer: "Democratic",
    explanation: "The democratic (participatory) style involves the workers.",
  },
  {
    prompt: "A manager gives skilled workers almost complete freedom to decide. Which style is this?",
    options: ["Autocratic", "Democratic", "Laissez-faire", "Controlling"],
    answer: "Laissez-faire",
    explanation: "Laissez-faire means permissive or free-rein management.",
  },
  {
    prompt: "Which is an advantage of the autocratic style?",
    options: ["Workers are fully involved", "Workers can decide freely", "Decisions are made quickly", "It always motivates workers"],
    answer: "Decisions are made quickly",
    explanation: "A manager who decides alone can act fast, for example in a crisis.",
  },
  {
    prompt: "Which is a characteristic of a good manager?",
    options: ["Treats workers fairly and honestly", "Makes decisions without facts", "Never communicates", "Blames others for mistakes"],
    answer: "Treats workers fairly and honestly",
    explanation: "Good managers are fair, honest, communicate clearly and take responsibility.",
  },
];

const LevelsFunctionsManagement = () => (
  <CapsSubjectTopic
    title="Levels and Functions of Management"
    subtitle="Management levels, the four management tasks, styles of management and good management"
    learnSteps={learnSteps}
    task="gr8-levels-functions-management-t4"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default LevelsFunctionsManagement;
