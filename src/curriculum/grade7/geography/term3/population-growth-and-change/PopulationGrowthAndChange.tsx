import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { AgeShapes, GrowthLines } from '../../../../../components/diagrams/geography/GeoPictures';
import { naturalChange, project } from '../../../../../components/diagrams/geography/geoHelpers';

// The example numbers come from tested helpers (geoHelpers.test.ts). They are examples, not real data.
const grow = naturalChange(30, 10);
const nb = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const after = nb(Math.round(project(1000, 30, 10, 10)[10] * 1000));
const same = nb(Math.round(project(1000, 15, 15, 10)[10] * 1000));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Birth rate and death rate',
    content: slide(
      <>
        <Rule>
          Birth rate describes the number of live births in a population over time. Death rate describes the number of deaths. When fewer people die each year but just as many babies are born, the population grows quickly.
        </Rule>
        <GrowthLines />
        <Worked
          title="An example population of 1 000 000 people"
          steps={[
            <>Suppose 30 babies are born and 10 people die for every 1 000 people each year: the population gains {grow} for every 1 000.</>,
            <>After 10 years the population is about {after} people: it has grown.</>,
            <>If births equal deaths, it stays at {same}. More people are added than removed only when births are higher than deaths.</>,
          ]}
        />
        <Mistake>Thinking a high birth rate alone means fast growth. Growth depends on births compared with deaths.</Mistake>
      </>,
    ),
  },
  {
    title: 'Infant mortality and life expectancy',
    content: slide(
      <>
        <Rule>
          Infant mortality refers to deaths of babies under one year old. Life expectancy means the average number of years a person may live.
        </Rule>
        <Terms
          rows={[
            ['Infant mortality', 'deaths of babies under one year old'],
            ['Life expectancy', 'the average number of years a person may live'],
            ['A sign of better health care', 'infant mortality falls and life expectancy rises'],
          ]}
        />
        <Worked
          title="Read the two measures"
          steps={[<>Infant mortality tracks deaths in the first year of life.</>, <>Life expectancy is an average measure of expected lifespan. It is an average, not what will happen to every person.</>, <>Better health care usually lowers infant mortality and raises life expectancy.</>]}
        />
        <Mistake>Thinking life expectancy is the age everyone dies. It is an average, so some people live much longer and some shorter.</Mistake>
      </>,
    ),
  },
  {
    title: 'Population structure',
    content: slide(
      <>
        <Rule>
          Many births and short lives together give a country a younger population structure. More births and shorter average lifespan usually mean a younger population.
        </Rule>
        <AgeShapes />
        <Worked
          title="Read the shapes"
          steps={[<>In the younger shape, the bottom bar, the youngest group, is the widest.</>, <>With fewer births and longer lives, the bars are more even, and the population is older.</>, <>The shape tells you the age mix of a country at one time.</>]}
        />
        <Mistake>Reading the widest bar as the oldest group. Each bar is an age group and the youngest is at the bottom.</Mistake>
      </>,
    ),
  },
  {
    title: 'Events and evidence',
    content: slide(
      <>
        <Rule>
          A global disease outbreak can change death rates, migration and long-term growth. To follow change across decades, plot the numbers as a line graph. Combine data, graphs and case studies for the fullest picture.
        </Rule>
        <Worked
          title="Explain a change in population"
          steps={[<>Draw a line graph of the population over many years: a line graph shows trends over time clearly.</>, <>Look for a turning point. A pandemic could raise death rates and change migration.</>, <>Use data, graphs and case studies together, because combining evidence gives a fuller explanation.</>]}
        />
        <Mistake>Explaining a trend from one number. Use a graph and a case study too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does birth rate describe? When fewer people die each year but as many babies are born, what usually happens to the population?</li>
            <li>What is infant mortality? What does life expectancy mean?</li>
            <li>Name one kind of event that can change populations worldwide. Which graph best shows change across decades?</li>
            <li>A country with many births and short lives is likely to have what kind of population? How do you get the fullest picture of population change?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The number of live births in a population over time. It grows quickly.</li>
            <li>Deaths of babies under one year old. The average number of years a person may live.</li>
            <li>A pandemic (for example). A line graph.</li>
            <li>A younger population structure. Data, graphs and case studies together.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does birth rate describe?',
    options: ['The number of live births in a population over time', 'The number of people who move to a new house', 'The average amount of rain that falls in a year', 'The total number of schools in a country'],
    answer: 'The number of live births in a population over time',
    explanation: 'Birth rate measures how many babies are born in a population.',
  },
  {
    prompt: 'If death rates fall while birth rates stay high, population usually:',
    options: ['Grows quickly', 'Shrinks immediately', 'Stays exactly the same', 'Stops changing forever'],
    answer: 'Grows quickly',
    explanation: 'More people are added than removed, so total population rises faster.',
  },
  {
    prompt: 'Infant mortality refers to:',
    options: [
      'Deaths of babies under one year old',
      'Deaths caused only by floods',
      'Average age of retirement',
      'Number of hospital beds',
    ],
    answer: 'Deaths of babies under one year old',
    explanation: 'Infant mortality tracks deaths in the first year of life.',
  },
  {
    prompt: 'Life expectancy means:',
    options: ['The average number of years a person may live', 'How long people work in each week', 'The age at which a child starts school', 'The number of members in a family'],
    answer: 'The average number of years a person may live',
    explanation: 'Life expectancy is an average measure of expected lifespan.',
  },
  {
    prompt: 'Which event can strongly change population patterns worldwide?',
    options: ['A pandemic', 'A single sports match', 'A school timetable change', 'A local road sign'],
    answer: 'A pandemic',
    explanation: 'Pandemics can affect death rates, migration, and long-term growth patterns.',
  },
  {
    prompt: 'What is the best tool to compare population change over many years?',
    options: ['Line graph', 'Compass rose', 'Scale bar', 'Street symbol key'],
    answer: 'Line graph',
    explanation: 'Line graphs show trends over time clearly.',
  },
  {
    prompt: 'A country with high birth rate and low life expectancy is likely to have:',
    options: ['A younger population structure', 'Only elderly residents', 'No population change', 'No rural areas'],
    answer: 'A younger population structure',
    explanation: 'More births and shorter average lifespan usually mean a younger population.',
  },
  {
    prompt: 'Population growth and change are best understood by using:',
    options: [
      'Data, graphs, and case studies together',
      'One weather observation only',
      'A road map only',
      'A single interview only',
    ],
    answer: 'Data, graphs, and case studies together',
    explanation: 'Combining evidence gives a fuller explanation of population patterns.',
  },
];

const PopulationGrowthAndChange = () => (
  <CapsSubjectTopic
    title="Population Growth and Change"
    subtitle="Births, deaths, life expectancy, and global population trends"
    learnSteps={learnSteps}
    task="gr7-population-growth-and-change-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default PopulationGrowthAndChange;
