import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { PopulationSplit } from '../../../../../components/diagrams/econ11/Econ11';
import { TOWN, WORKING_AGE, absorptionRate, dependencyRatio, labourForce, notActive, participationRate, populationGrowthRate, total, unemploymentRate } from '../../../../../components/diagrams/econ11/econ11Helpers';

// Every number comes from econ11Helpers.ts (tested in econ11Helpers.test.ts and g11EconGaps.test.ts). The town is imaginary: these are not Stats SA figures.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const n = (x: number) => String(Math.round(x * 10) / 10).replace('.', ',');
const lf = labourForce(TOWN);

export const learnSteps: LearnStep[] = [
  {
    title: 'Population: characteristics and importance',
    content: slide(
      <>
        <Rule>The population of a country is the people who live in it. Its characteristics include its size, its growth rate, its age structure (children, working-age people and the elderly), the balance between men and women, and where people live (urban or rural). The population is important because people are both the labour (a factor of production) and the consumers who create the demand for goods and services, and they pay the taxes that fund government.</Rule>
        <FactCards
          cards={[
            { title: 'Size and growth', line1: 'births, deaths and migration', line2: 'change the number of people' },
            { title: 'Age structure', line1: 'children, working-age people', line2: 'and the elderly' },
            { title: 'Importance', line1: 'labour supply, market size,', line2: 'tax base and dependency' },
          ]}
          aria="Characteristics and importance of the population. Size and growth: births, deaths and migration change the number of people. Age structure: children, working-age people and the elderly. Importance: labour supply, size of the market, the tax base and dependency."
        />
        <Worked
          title="Population growth in a town of 1 000 000 people"
          steps={[
            `In a year there are 30 000 births and 10 000 deaths and no net migration: growth = (30 000 − 10 000) ÷ 1 000 000 × 100 = ${n(populationGrowthRate(30, 10, 0, 1000))}%.`,
            `With 20 000 births, 10 000 deaths and a net loss of 5 000 people through migration the growth is ${n(populationGrowthRate(20, 10, -5, 1000))}%.`,
            'A growing population increases the labour supply and the market, but it also increases the demand for housing, schools and jobs.',
          ]}
        />
        <Mistake>Thinking that a bigger population always means a richer country. What matters is whether the people have skills, jobs and capital to work with.</Mistake>
      </>,
    ),
  },
  {
    title: 'The labour force',
    content: slide(
      <>
        <Rule>The working-age population is the people aged {WORKING_AGE}. The labour force (the economically active population) is the working-age people who are employed or unemployed. A person is unemployed if they have no work, are available to work and are looking for work. People who are not economically active include students, home-makers, people who cannot work and discouraged work-seekers who have stopped looking.</Rule>
        <PopulationSplit p={TOWN} notActive={notActive(TOWN)} />
        <Worked
          title="Count the labour force of the imaginary town (in thousands)"
          steps={[
            `Total population: ${total(TOWN)}. Working-age (15 to 64): ${TOWN.workingAge}. Children: ${TOWN.children}. Elderly: ${TOWN.elderly}.`,
            `Labour force = employed + unemployed = ${TOWN.employed} + ${TOWN.unemployed} = ${lf}.`,
            `Not economically active = ${TOWN.workingAge} − ${lf} = ${notActive(TOWN)}.`,
          ]}
        />
        <Mistake>Counting everyone without a job as unemployed. A person who is not looking for work is not in the labour force.</Mistake>
      </>,
    ),
  },
  {
    title: 'Participation, absorption and unemployment rates',
    content: slide(
      <>
        <Rule>The labour force participation rate is the labour force as a percentage of the working-age population. The unemployment rate is the unemployed as a percentage of the labour force. The absorption rate is the employed as a percentage of the working-age population. The dependency ratio is the number of dependants (children and the elderly) for every 100 working-age people.</Rule>
        <FactCards
          cards={[
            { title: 'Participation rate', line1: 'labour force ÷ working-age', line2: `population × 100 = ${n(participationRate(TOWN))}%` },
            { title: 'Unemployment rate', line1: 'unemployed ÷ labour force', line2: `× 100 = ${n(unemploymentRate(TOWN))}%` },
            { title: 'Absorption rate', line1: 'employed ÷ working-age', line2: `population × 100 = ${n(absorptionRate(TOWN))}%` },
            { title: 'Dependency ratio', line1: '(children + elderly) ÷', line2: `working-age × 100 = ${n(dependencyRatio(TOWN))}` },
          ]}
          aria="Rates for the imaginary town. Participation rate: labour force divided by working-age population times 100 is 66,7 percent. Unemployment rate: unemployed divided by labour force times 100 is 25 percent. Absorption rate: employed divided by working-age population times 100 is 50 percent. Dependency ratio: children plus elderly divided by working-age times 100 is 66,7."
        />
        <Worked
          title="Calculate the rates"
          steps={[
            `Participation rate = ${lf} ÷ ${TOWN.workingAge} × 100 = ${n(participationRate(TOWN))}%.`,
            `Unemployment rate = ${TOWN.unemployed} ÷ ${lf} × 100 = ${n(unemploymentRate(TOWN))}%. Absorption rate = ${TOWN.employed} ÷ ${TOWN.workingAge} × 100 = ${n(absorptionRate(TOWN))}%.`,
            `Dependency ratio = (${TOWN.children} + ${TOWN.elderly}) ÷ ${TOWN.workingAge} × 100 = ${n(dependencyRatio(TOWN))}: about 67 dependants for every 100 working-age people.`,
          ]}
        />
        <Mistake>Dividing the unemployed by the whole population. The unemployment rate uses the labour force, not the whole population.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why the labour force matters',
    content: slide(
      <>
        <Rule>A large, skilled labour force helps an economy to produce more and to grow. A high unemployment rate wastes labour and lowers income, so poverty and inequality rise and government collects less tax and pays more grants. A high dependency ratio means that each worker supports more people. The labour force is paid wages and salaries, which is the remuneration of labour.</Rule>
        <FactCards
          cards={[
            { title: 'Skilled labour force', line1: 'raises output and', line2: 'supports growth' },
            { title: 'High unemployment', line1: 'wasted labour, less income', line2: 'and less tax collected' },
            { title: 'High dependency ratio', line1: 'each worker supports', line2: 'more people' },
          ]}
          aria="Why the labour force matters. A skilled labour force raises output and supports growth. High unemployment wastes labour and gives less income and less tax. A high dependency ratio means each worker supports more people."
        />
        <Worked
          title="Interpret the figures"
          steps={[
            `With an unemployment rate of ${n(unemploymentRate(TOWN))}%, one in four people who want work cannot find it.`,
            `A participation rate of ${n(participationRate(TOWN))}% shows that a third of the working-age people are not in the labour force.`,
            'Training and job creation raise employment and incomes, so the economy can grow.',
          ]}
        />
        <Mistake>Saying that a low unemployment rate means that everyone works. Discouraged work-seekers are not counted as unemployed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Who is in the labour force?</>,
          <>In a town 300 are employed and 100 are unemployed. What is the unemployment rate?</>,
          <>The working-age population is 600 and the labour force is 400. What is the participation rate?</>,
          <>What does a student in the working-age group count as?</>,
        ]}
        answers={[
          <>The employed and the unemployed of working age.</>,
          <>{n(unemploymentRate(TOWN))}%.</>,
          <>{n(participationRate(TOWN))}%.</>,
          <>Not economically active.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which age group is the working-age population in South Africa's labour force statistics?",
    options: ["0 to 14 years", "65 years and older", "15 to 64 years", "18 to 35 years only"],
    answer: "15 to 64 years",
    explanation: "The working-age population is the people aged 15 to 64.",
  },
  {
    prompt: "Who is in the labour force?",
    options: ["Working-age people who are employed or unemployed", "All the people who live in the country", "Only people who have jobs", "Only students and pensioners"],
    answer: "Working-age people who are employed or unemployed",
    explanation: "The labour force is the employed plus the unemployed.",
  },
  {
    prompt: "Which person is unemployed?",
    options: ["A student studying full time", "A home-maker not seeking work", "A pensioner who has retired", "A job-seeker who is available"],
    answer: "A job-seeker who is available",
    explanation: "Unemployed people are without work, available and looking.",
  },
  {
    prompt: "Which person is NOT economically active?",
    options: ["A person with a job", "A full-time student", "A person looking for work", "A part-time worker"],
    answer: "A full-time student",
    explanation: "Students are outside the labour force.",
  },
  {
    prompt: "In a town 300 are employed and 100 are unemployed. What is the size of the labour force?",
    options: ["100", "400", "300", "700"],
    answer: "400",
    explanation: "300 + 100 = 400.",
  },
  {
    prompt: "In a town 300 are employed and 100 are unemployed. What is the unemployment rate?",
    options: ["33,3%", "75%", "100%", "25%"],
    answer: "25%",
    explanation: "100 ÷ 400 × 100 = 25%.",
  },
  {
    prompt: "The working-age population is 600 and the labour force is 400. What is the participation rate to one decimal place?",
    options: ["66,7%", "33,3%", "40,0%", "150,0%"],
    answer: "66,7%",
    explanation: "400 ÷ 600 × 100 = 66,7%.",
  },
  {
    prompt: "The working-age population is 600 and 300 are employed. What is the absorption rate?",
    options: ["25%", "75%", "50%", "100%"],
    answer: "50%",
    explanation: "300 ÷ 600 × 100 = 50%.",
  },
  {
    prompt: "A town has 300 children, 600 working-age people and 100 elderly. What is the dependency ratio to one decimal place?",
    options: ["33,3", "166,7", "40,0", "66,7"],
    answer: "66,7",
    explanation: "(300 + 100) ÷ 600 × 100 = 66,7 dependants for every 100 working-age people.",
  },
  {
    prompt: "What does a high dependency ratio mean?",
    options: ["Everyone has a job", "Each worker supports more people", "The unemployment rate is zero", "The population is falling"],
    answer: "Each worker supports more people",
    explanation: "More dependants per working-age person.",
  },
  {
    prompt: "In a year a town of 1 000 000 people has 30 000 births, 10 000 deaths and no net migration. What is the population growth rate?",
    options: ["2%", "3%", "1%", "4%"],
    answer: "2%",
    explanation: "(30 000 − 10 000) ÷ 1 000 000 × 100 = 2%.",
  },
  {
    prompt: "Which is the best reason why the population is important to an economy?",
    options: ["It decides the weather", "It sets the price of gold", "People are labour and buyers", "It stops all inflation"],
    answer: "People are labour and buyers",
    explanation: "People supply labour and create demand.",
  },
  {
    prompt: "What is a discouraged work-seeker?",
    options: ["A person who has a job", "A person who does not want to work", "A person who wants work but has stopped looking", "A person who has retired"],
    answer: "A person who wants work but has stopped looking",
    explanation: "Discouraged work-seekers are not counted as unemployed in the strict definition.",
  },
  {
    prompt: "The unemployment rate is calculated as the unemployed divided by which group?",
    options: ["The labour force", "The whole population", "The working-age population", "The employed"],
    answer: "The labour force",
    explanation: "Unemployed ÷ labour force × 100.",
  },
];

const PopulationLabourForce = () => (
  <CapsSubjectTopic
    title="Population and Labour Force"
    subtitle="Population, the labour force, participation, absorption and unemployment rates and the dependency ratio"
    learnSteps={learnSteps}
    task="gr11-population-labour-force-t1"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default PopulationLabourForce;
