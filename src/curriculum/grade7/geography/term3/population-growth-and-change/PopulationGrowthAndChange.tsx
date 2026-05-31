import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Population growth and change',
    image: {
      src: '/curriculum/grade7/geo/term3/population-growth-and-change/diagram.webp',
      alt: 'Grade 7 learners interpreting population graphs for birth rate, death rate, life expectancy, and global change',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Population change is shaped by birth rates, death rates, infant mortality, life expectancy, and major
          health events. Graphs and case studies help us explain why populations grow at different rates.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does birth rate describe?',
    options: [
      'The number of live births in a population over time',
      'The number of people moving house',
      'The average annual rainfall',
      'The total number of schools',
    ],
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
    options: [
      'The average number of years a person is expected to live',
      'How long people work each week',
      'The age of school entry',
      'The number of family members',
    ],
    answer: 'The average number of years a person is expected to live',
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
