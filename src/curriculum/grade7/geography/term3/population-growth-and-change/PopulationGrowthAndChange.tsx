import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Population growth and change',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Population change is shaped by birth rates, death rates, infant mortality, life expectancy, and major
          health events. Graphs and case studies help us explain why populations grow at different rates.
        </p>
      </div>
    ),
  },
  {
    title: 'Population Data — World Growth Milestones',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">World population has grown rapidly over the last century. These milestones show how quickly the global total has increased.</p>
        <DataChart
          data={[
                        { year: 1950, population: 2.5 },
                        { year: 1974, population: 4.0 },
                        { year: 1999, population: 6.0 },
                        { year: 2011, population: 7.0 },
                        { year: 2022, population: 8.0 },
                      ]}
          xKey="year"
          series={[
                        { key: 'population', label: 'World population (billions)', type: 'line', color: '#8b5cf6' },
                      ]}
          type="line"
          yLabel="Billions"
          height={220}
        />

        <p className="text-sm text-slate-500">Population growth affects food supply, housing demand, water use, and pressure on the environment.</p>
      </div>
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
