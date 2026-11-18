import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'What is environmental health?',
    content: slide(
      <>
        <Rule>Environmental health is about how the places where we live, learn and work affect our health. Clean water, safe toilets, proper waste removal, clean air and control of pests keep people healthy. When the environment is dirty, diseases such as diarrhoea and cholera spread more easily.</Rule>
        <FactCards
          cards={[
            { title: 'Water', line1: 'safe, clean water', line2: 'to drink and wash' },
            { title: 'Sanitation', line1: 'safe, clean', line2: 'toilets' },
            { title: 'Waste', line1: 'rubbish removed', line2: 'and recycled' },
            { title: 'Air', line1: 'less smoke and', line2: 'pollution' },
          ]}
          aria="Parts of environmental health. Water: safe, clean water to drink and wash. Sanitation: safe, clean toilets. Waste: rubbish removed and recycled. Air: less smoke and pollution."
        />
        <Worked
          title="Link a problem to a health risk"
          steps={[
            'Rubbish is dumped near a river.',
            'Rain washes it into the water, and people downstream use the water.',
            'The unclean water can make people ill, so the dumping is an environmental health problem.',
          ]}
        />
        <Mistake>Thinking that environmental health is only about nature. It is about how the environment affects the health of people.</Mistake>
      </>,
    ),
  },
  {
    title: 'Laws and policies that protect the environment',
    content: slide(
      <>
        <Rule>The South African Constitution says that everyone has the right to an environment that is not harmful to their health or wellbeing. Laws and policies deal with waste, water and air pollution, and local councils make by-laws, for example about dumping and littering. People and businesses that pollute can be fined or ordered to clean up.</Rule>
        <FactCards
          cards={[
            { title: 'Right', line1: 'a healthy environment', line2: 'is a constitutional right' },
            { title: 'Laws', line1: 'rules on waste, water', line2: 'and air pollution' },
            { title: 'By-laws', line1: 'local rules on dumping', line2: 'and littering' },
            { title: 'Penalty', line1: 'fines or orders to', line2: 'clean up' },
          ]}
          aria="Laws that protect the environment. Right: a healthy environment is a constitutional right. Laws: rules on waste, water and air pollution. By-laws: local rules on dumping and littering. Penalty: fines or orders to clean up."
        />
        <Worked
          title="Use a law to solve a problem"
          steps={[
            'A factory pours dirty water into a stream.',
            'The people nearby report it to the municipality or the environmental authorities.',
            'The law allows the authorities to order the factory to stop and to clean up.',
          ]}
        />
        <Mistake>Believing that a law protects the environment by itself. People must follow the rules and report problems.</Mistake>
      </>,
    ),
  },
  {
    title: 'Earth Day and environmental health programmes',
    content: slide(
      <>
        <Rule>Earth Day is celebrated every year on 22 April to remind people to care for the planet. An environmental health programme is a plan to deal with a local problem, for example a school clean-up, recycling or saving water. A good programme names the problem, sets a goal, says who will do what, carries out the action and checks the results.</Rule>
        <StepFlow steps={['Name the problem.', 'Set a goal.', 'Share the tasks.', 'Act and check the results.']} aria="Four steps of an environmental health programme: name the problem, set a goal, share the tasks, then act and check the results." />
        <Worked
          title="Plan a school clean-up"
          steps={[
            'Problem: litter around the school gate attracts rats and flies.',
            'Goal: a clean gate by Earth Day on 22 April, with bins and a weekly check.',
            'Tasks: learners collect litter, the caretaker supplies bags, and the class monitors keep the bins clear.',
          ]}
        />
        <Mistake>Cleaning up once and stopping. A programme needs regular checks so that the problem does not come back.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give one example of an environmental health problem.</>,
          <>What does the Constitution say about the environment?</>,
          <>On which date is Earth Day celebrated?</>,
          <>Name one step of an environmental health programme.</>,
        ]}
        answers={[
          <>For example unsafe water, dumped rubbish or air pollution.</>,
          <>Everyone has the right to an environment that is not harmful to their health or wellbeing.</>,
          <>22 April.</>,
          <>Name the problem, set a goal, share the tasks, or act and check.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does environmental health study?",
    options: ["Only the habits of wild animals", "Only the price of food", "How surroundings affect people's health", "Only the weather forecast"],
    answer: "How surroundings affect people's health",
    explanation: "It links places where we live and work to our health.",
  },
  {
    prompt: "Which of these is part of environmental health?",
    options: ["Safe drinking water", "A new phone", "A sports shirt", "A film at the cinema"],
    answer: "Safe drinking water",
    explanation: "Clean water, sanitation, waste and air affect health.",
  },
  {
    prompt: "Rubbish is dumped near a river and people downstream use the water. What is the risk?",
    options: ["The river gets cleaner", "The river dries up faster", "The fish grow bigger", "The water can make people ill"],
    answer: "The water can make people ill",
    explanation: "Polluted water can spread diseases.",
  },
  {
    prompt: "Which disease can spread through dirty water?",
    options: ["A broken arm", "Cholera", "A sunburn", "A toothache"],
    answer: "Cholera",
    explanation: "Unclean water can spread cholera and diarrhoea.",
  },
  {
    prompt: "Which right does the Constitution give you about your surroundings?",
    options: ["Only people in cities have a right to it", "Everyone has a right to a healthy one", "Only adults have a right to a clean one", "Nobody has any right to a clean one"],
    answer: "Everyone has a right to a healthy one",
    explanation: "A healthy environment is a constitutional right.",
  },
  {
    prompt: "What is a by-law?",
    options: ["A national law made by a school", "A rule made by a sports club", "A rule made by a local shop", "A local rule made by a council"],
    answer: "A local rule made by a council",
    explanation: "By-laws deal with local matters such as littering.",
  },
  {
    prompt: "A factory pours dirty water into a stream. Who can you report it to?",
    options: ["The municipality or authorities", "Nobody, because it cannot be reported", "Only the owner of the factory", "Only a friend who lives nearby"],
    answer: "The municipality or authorities",
    explanation: "Authorities can order a polluter to stop and clean up.",
  },
  {
    prompt: "What can happen to a business that pollutes illegally?",
    options: ["It is given a prize for its work", "It is thanked by the neighbours", "It can be fined or made to clean up", "It is allowed to carry on freely"],
    answer: "It can be fined or made to clean up",
    explanation: "Laws allow penalties for pollution.",
  },
  {
    prompt: "On which date is Earth Day celebrated each year?",
    options: ["1 January", "16 June", "25 December", "22 April"],
    answer: "22 April",
    explanation: "Earth Day is on 22 April.",
  },
  {
    prompt: "What is the purpose of Earth Day?",
    options: ["To celebrate a big sports final", "To remind people to care for the planet", "To sell goods in the shops", "To close all of the schools"],
    answer: "To remind people to care for the planet",
    explanation: "It encourages action to protect the environment.",
  },
  {
    prompt: "Which of these describes an environmental health programme?",
    options: ["A plan for a local problem", "A television show for children", "A list of birthdays in a class", "A timetable for the school day"],
    answer: "A plan for a local problem",
    explanation: "For example a clean-up, recycling or saving water.",
  },
  {
    prompt: "Which is the first step in an environmental health programme?",
    options: ["Give out the prizes", "Close the programme", "Name the problem", "Buy new shoes"],
    answer: "Name the problem",
    explanation: "Start by naming the problem, then set a goal.",
  },
  {
    prompt: "Litter at your school gate attracts rats. Which is a good goal?",
    options: ["Wait for the rats to leave by themselves", "Ignore it, because it is normal", "A clean gate, bins and weekly checks", "Move the school gate to another street"],
    answer: "A clean gate, bins and weekly checks",
    explanation: "A clear goal and a plan make the clean-up last.",
  },
  {
    prompt: "Why must a programme include regular checks?",
    options: ["So the problem does not return", "So that it never comes to an end", "So that it costs a great deal more", "So that nobody wants to take part"],
    answer: "So the problem does not return",
    explanation: "Checks keep the area clean.",
  },
];

const EnvironmentalHealth = () => (
  <CapsSubjectTopic
    title="Environmental Health: Laws, Earth Day and Programmes"
    subtitle="What environmental health is, laws that protect the environment, Earth Day and planning a programme"
    learnSteps={learnSteps}
    task="gr8-environmental-health-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default EnvironmentalHealth;
