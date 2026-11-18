import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Environmental health problems near you',
    content: slide(
      <>
        <Rule>Environmental health is about how your surroundings affect your health. Local problems include litter and dumping, unsafe drinking water, blocked drains and standing water where mosquitoes breed, smoke from burning waste, and overflowing toilets. These problems can cause illness and spoil the place where people live and play.</Rule>
        <FactCards
          cards={[
            { title: 'Litter', line1: 'dumped rubbish attracts', line2: 'rats and flies' },
            { title: 'Water', line1: 'unsafe water can', line2: 'cause diarrhoea' },
            { title: 'Standing water', line1: 'mosquitoes breed in', line2: 'still, dirty water' },
            { title: 'Smoke', line1: 'burning waste harms', line2: 'the air we breathe' },
          ]}
          aria="Local environmental health problems. Litter: dumped rubbish attracts rats and flies. Water: unsafe water can cause diarrhoea. Standing water: mosquitoes breed in still, dirty water. Smoke: burning waste harms the air we breathe."
        />
        <Worked
          title="Link a problem to a health risk"
          steps={[
            'A pile of rubbish near the school fence is not collected.',
            'Rats and flies are attracted to it and can spread germs.',
            'The litter is an environmental health problem that affects learners and families nearby.',
          ]}
        />
        <Mistake>Thinking that litter is only an eyesore. It can also make people ill.</Mistake>
      </>,
    ),
  },
  {
    title: 'Planning a project to solve a problem',
    content: slide(
      <>
        <Rule>A project is a plan to deal with one problem. Choose the problem, say what you want to achieve, list the steps, decide who will do what and what you need, set dates, carry out the plan and check the results. A small project that you can finish is better than a big plan that you cannot.</Rule>
        <StepFlow steps={['Choose the problem.', 'Set a goal and a date.', 'List steps, people and materials.', 'Do it and check the result.']} aria="Four steps of a project: choose the problem, set a goal and a date, list steps, people and materials, then do it and check the result." />
        <Worked
          title="Plan a clean-up"
          steps={[
            'Problem: litter along the path to school.',
            'Goal: a clean path by the end of the month, with a bin at each end.',
            'Steps: ask the caretaker for bags, share the path between four groups and check it every Friday.',
          ]}
        />
        <Mistake>Choosing a problem that is too big. Start with something that your class can finish.</Mistake>
      </>,
    ),
  },
  {
    title: 'An action plan',
    content: slide(
      <>
        <Rule>An action plan is a table that shows each task, who does it, what is needed and by when. It makes sure that everyone knows what to do. After the project, review the plan: what worked, what did not, and what to change next time. Share the results with the school or the community.</Rule>
        <FactCards
          cards={[
            { title: 'Task', line1: 'what has to be done,', line2: 'in small steps' },
            { title: 'Who', line1: 'the person or group', line2: 'responsible' },
            { title: 'What', line1: 'bags, gloves, bins', line2: 'and other materials' },
            { title: 'When', line1: 'a date for each', line2: 'task' },
          ]}
          aria="Parts of an action plan. Task: what has to be done in small steps. Who: the person or group responsible. What: bags, gloves, bins and other materials. When: a date for each task."
        />
        <Worked
          title="Review the plan"
          steps={[
            'After two weeks the path is cleaner, but the bins are full of litter.',
            'The class decides to ask the municipality to collect the bins every week.',
            'They add this task to the plan, with a name and a date.',
          ]}
        />
        <Mistake>Finishing a project and never checking it. A review shows what to improve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give one example of a local environmental health problem.</>,
          <>Why can standing water be a health risk?</>,
          <>What are the parts of an action plan?</>,
          <>Why should you review a project?</>,
        ]}
        answers={[
          <>For example litter, unsafe water or blocked drains.</>,
          <>Mosquitoes breed in it.</>,
          <>Task, who, what is needed and when.</>,
          <>To see what worked and what to change next time.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is environmental health?",
    options: ["How tall plants grow in a garden", "How much rain falls in a year", "How your surroundings affect your health", "How fast cars travel on a road"],
    answer: "How your surroundings affect your health",
    explanation: "Clean water, safe waste and clean air keep people healthy.",
  },
  {
    prompt: "Which is a local environmental health problem?",
    options: ["Litter and dumping", "A new school uniform", "A school sports day", "A class birthday"],
    answer: "Litter and dumping",
    explanation: "Rubbish attracts pests and can spread germs.",
  },
  {
    prompt: "Why can dumped rubbish make people ill?",
    options: ["It makes the air smell of roses", "It makes the ground much softer", "It keeps the whole street warm", "Pests that spread germs come to it"],
    answer: "Pests that spread germs come to it",
    explanation: "Pests spread germs from the rubbish.",
  },
  {
    prompt: "Why is a puddle that never dries a danger to health?",
    options: ["It makes grass grow faster", "Mosquitoes breed in it", "It cleans the street", "It stops rubbish from smelling"],
    answer: "Mosquitoes breed in it",
    explanation: "Still, dirty water is a place for mosquitoes to breed.",
  },
  {
    prompt: "What can unsafe drinking water cause?",
    options: ["A broken leg", "Diarrhoea", "A sunburn", "A sore thumb"],
    answer: "Diarrhoea",
    explanation: "Dirty water can carry germs.",
  },
  {
    prompt: "Why is burning waste a problem?",
    options: ["It makes the air much cleaner", "It waters the plants nearby", "It helps our lungs to grow", "Smoke harms the air we breathe"],
    answer: "Smoke harms the air we breathe",
    explanation: "Smoke can cause breathing problems.",
  },
  {
    prompt: "What is a project?",
    options: ["A plan to deal with one problem", "A list of birthdays", "A kind of homework without a goal", "A timetable of sports matches"],
    answer: "A plan to deal with one problem",
    explanation: "Choose a problem, set a goal and make a plan.",
  },
  {
    prompt: "What is a good first step in a project?",
    options: ["Hand in the report", "Give out prizes", "Choose the problem", "Close the project"],
    answer: "Choose the problem",
    explanation: "Start by choosing what you want to solve.",
  },
  {
    prompt: "Which project is small enough for a class to finish?",
    options: ["Cleaning every river in the country", "Rebuilding the whole town", "Stopping all rain", "Cleaning the path to school"],
    answer: "Cleaning the path to school",
    explanation: "A small project that you can finish works best.",
  },
  {
    prompt: "What does an action plan show?",
    options: ["Only the names of the teachers", "Tasks, who does them and when", "Only the colour of the new bins", "Only a list of last term's marks"],
    answer: "Tasks, who does them and when",
    explanation: "A clear plan makes sure that everyone knows what to do.",
  },
  {
    prompt: "Why should you put a date next to each task?",
    options: ["So that the tasks are done on time", "So that nobody does the tasks", "So that the plan looks long", "So that the tasks can be forgotten"],
    answer: "So that the tasks are done on time",
    explanation: "Dates keep the project moving.",
  },
  {
    prompt: "Why should the class review the project afterwards?",
    options: ["To forget what happened", "To hide the results", "To see what worked and what to change", "To start a different plan without learning"],
    answer: "To see what worked and what to change",
    explanation: "A review helps you to improve next time.",
  },
  {
    prompt: "After a clean-up the bins are full of litter. What is a good next step?",
    options: ["Leave the bins just as they are", "Burn the litter in the yard", "Ask the council to empty them weekly", "Tip the litter back on the path"],
    answer: "Ask the council to empty them weekly",
    explanation: "Add the new task to the plan, with a name and a date.",
  },
  {
    prompt: "Why should you share your results with the community?",
    options: ["Others can learn and join in", "It keeps the project secret", "It stops people from helping", "It makes the plan fail"],
    answer: "Others can learn and join in",
    explanation: "Sharing results can inspire others.",
  },
];

const EnvironmentalHealth = () => (
  <CapsSubjectTopic
    title="Environmental Health: Local Problems, Projects and Action Plans"
    subtitle="Local environmental health problems, planning a project and writing an action plan"
    learnSteps={learnSteps}
    task="gr7-environmental-health-t3"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default EnvironmentalHealth;
