import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';


const learnSteps: LearnStep[] = [
  {
    title: 'Measuring development: economic indicators',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Development is measured using both economic and social indicators. No single statistic tells the whole story.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">GDP</strong>
            <p className="text-slate-600 text-sm">Gross Domestic Product: total value of goods and services produced in a country per year. Does not measure distribution.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">GDP per capita</strong>
            <p className="text-slate-600 text-sm">GDP ÷ population. Better for comparing living standards between countries of different sizes.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">GNP</strong>
            <p className="text-slate-600 text-sm">Gross National Product: GDP plus income earned abroad by citizens, minus income earned by foreigners locally.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">A country can have high GDP but extreme inequality — GDP alone does not measure wellbeing.</p>
      </div>
    ),
  },
  {
    title: 'The Human Development Index (HDI)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>HDI</strong>, published annually by the UNDP, combines three dimensions to give a more complete picture of human development.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Long and healthy life</strong>
            <p className="text-slate-600 text-sm">Measured by life expectancy at birth.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Knowledge</strong>
            <p className="text-slate-600 text-sm">Measured by mean years of schooling and expected years of schooling.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Decent standard of living</strong>
            <p className="text-slate-600 text-sm">Measured by Gross National Income (GNI) per capita (PPP $).</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">HDI ranges from 0 (very low) to 1.0 (very high). Countries such as Norway, Switzerland and Iceland regularly rank at or near the top; many African nations have low HDI scores.</p>
      </div>
    ),
  },
  {
    title: 'Social indicators and development',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Social indicators give insight into quality of life beyond monetary measures.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Infant mortality rate (IMR)</strong>
            <p className="text-slate-600 text-sm">Deaths per 1 000 live births under one year. High IMR = poor healthcare and poverty.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Literacy rate</strong>
            <p className="text-slate-600 text-sm">% of adults who can read and write. Low literacy reflects poor education access.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Life expectancy</strong>
            <p className="text-slate-600 text-sm">Average number of years a person is expected to live. Reflects healthcare, nutrition, conflict.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Access to clean water</strong>
            <p className="text-slate-600 text-sm">% with safe water supply. Linked to health outcomes and poverty reduction.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The development gap',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>development gap</strong> is the difference in living standards between more developed and less developed countries.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p><strong>Causes of unequal development:</strong> historical colonialism, debt, unfair trade, political instability, landlocked geography, disease burden, brain drain.</p>
          <p><strong>North–South divide:</strong> broadly, wealthier nations are in the northern hemisphere; developing nations are mostly in the south — though many exceptions exist.</p>
          <p className="text-slate-500 text-sm">South Africa is a middle-income country but has one of the world's highest inequality indices (Gini coefficient).</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Development Data — Comparing More Than One Indicator',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Development is clearer when several indicators are compared. These charts use HDI and life expectancy to show differences between countries.</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-700">HDI comparison</p>
            <DataChart
              data={[
                            { country: 'Norway', hdi: 0.966 },
                            { country: 'Germany', hdi: 0.942 },
                            { country: 'Brazil', hdi: 0.76 },
                            { country: 'South Africa', hdi: 0.713 },
                            { country: 'DRC', hdi: 0.481 },
                          ]}
              xKey="country"
              series={[
                            { key: 'hdi', label: 'HDI', type: 'bar', color: '#6366f1' },
                          ]}
              yLabel="HDI score"
              height={220}
            />
          </div>

          <div className="space-y-2 rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-700">Life expectancy</p>
            <DataChart
              data={[
                            { country: 'Norway', life: 83 },
                            { country: 'Germany', life: 81 },
                            { country: 'Brazil', life: 75 },
                            { country: 'South Africa', life: 64 },
                            { country: 'DRC', life: 60 },
                          ]}
              xKey="country"
              series={[
                            { key: 'life', label: 'Life expectancy (years)', type: 'bar', color: '#10b981' },
                          ]}
              yLabel="Years"
              height={220}
            />
          </div>
        </div>

        <p className="text-sm text-slate-500">No single measure tells the whole story, so geographers often compare several indicators together.</p>
      </div>
    ),
  },
  {
    title: "Colonialism and development",
    content: (
      <div className="space-y-4">
        <GapRule>{"Colonialism contributed to underdevelopment because colonial powers took out resources and wealth, stunting local economies."}</GapRule>
        <GapWorked title={"Link cause and effect"} steps={["Raw materials such as minerals and crops were exported.", "The profits went to the colonial power.", "Local industries and infrastructure were not developed.", "After independence the countries started with weak economies."]} />
        <GapMistake>{"Blaming colonialism as the only cause of underdevelopment today."}</GapMistake>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does GDP stand for?',
    options: ['General Development Progress', 'Gross Domestic Product', 'Global Development Plan', 'Growth and Development Policy'],
    answer: 'Gross Domestic Product',
    explanation: 'GDP is the total monetary value of all goods and services produced within a country\'s borders in a given year.',
  },
  {
    prompt: 'The Human Development Index (HDI) is published by which organisation?',
    options: ['The World Bank, from its offices in Washington', 'The WTO, the body that governs world trade', 'UNDP (United Nations Development Programme)', 'The African Union, from its base in Addis Ababa'],
    answer: 'UNDP (United Nations Development Programme)',
    explanation: 'The UNDP has published the Human Development Report and HDI rankings annually since 1990.',
  },
  {
    prompt: 'Which THREE components make up the HDI?',
    options: [
      'GDP, trade balance, and literacy',
      'Life expectancy, education, and income per capita',
      'Population, urbanisation, and income',
      'Infant mortality, GDP, and life expectancy',
    ],
    answer: 'Life expectancy, education, and income per capita',
    explanation: 'The HDI combines: (1) life expectancy at birth, (2) mean and expected years of schooling, and (3) GNI per capita.',
  },
  {
    prompt: 'A high infant mortality rate (IMR) in a country most likely indicates:',
    options: ['A large population in the country', 'Rapid growth in the economy of the country', 'Poor healthcare and a high level of poverty', 'A hot climate in most parts of the country'],
    answer: 'Poor healthcare and a high level of poverty',
    explanation: 'High IMR reflects inadequate healthcare, malnutrition, poor sanitation, and poverty — hallmarks of low human development.',
  },
  {
    prompt: 'GDP per capita is a better measure of living standards than total GDP because:',
    options: ['It measures the happiness of the people directly', 'It accounts for population size, so comparisons are fairer', 'It includes the income that people earn abroad', 'It measures how income is shared between people'],
    answer: 'It accounts for population size, so comparisons are fairer',
    explanation: 'Dividing GDP by population gives an average income figure that allows meaningful comparisons between countries of different sizes.',
  },
  {
    prompt: 'Which of the following is a SOCIAL development indicator?',
    options: ['GDP per capita', 'Export earnings', 'Literacy rate', 'Trade balance'],
    answer: 'Literacy rate',
    explanation: 'Literacy rate is a social indicator measuring the percentage of adults who can read and write — reflecting educational development.',
  },
  {
    prompt: 'What is the development gap?',
    options: ['The gap between farming output and industrial output', 'The difference in living standards between richer and poorer countries', 'The time gap between two development projects', 'The difference in GDP between cities and the countryside'],
    answer: 'The difference in living standards between richer and poorer countries',
    explanation: 'The development gap reflects inequalities in income, health, education, and access to services between the Global North and Global South.',
  },
  {
    prompt: 'HDI values range from:',
    options: ['0 to 100', '0 to 10', '0 to 1', '−1 to +1'],
    answer: '0 to 1',
    explanation: 'HDI is expressed as a decimal from 0 (lowest) to 1.0 (highest). Values above 0.8 are considered very high human development.',
  },
  {
    prompt: 'Which of the following best explains why colonialism contributes to the development gap today?',
    options: ['Colonial powers built excellent infrastructure in all colonies', 'Colonialism took out resources and wealth, stunting colonised economies', 'Colonial schools raised literacy rates across the colonies', 'Colonial powers brought modern technology to every colony'],
    answer: 'Colonialism took out resources and wealth, stunting colonised economies',
    explanation: 'Colonial extraction of resources and labor left many post-colonial nations without capital, industrial capacity, or strong institutions for development.',
  },
  {
    prompt: 'South Africa is classified as a:',
    options: [
      'Least developed country',
      'Highly developed country',
      'Middle-income developing country',
      'Developed country with high HDI',
    ],
    answer: 'Middle-income developing country',
    explanation: 'South Africa has a middle-income GDP per capita but extremely high inequality (Gini coefficient) and social challenges, classifying it as a developing country.',
  },
];

const DevelopmentIndicatorsT3 = () => (
  <CapsSubjectTopic
    title="Development Indicators"
    subtitle="GDP, HDI, social indicators and the development gap"
    learnSteps={learnSteps}
    task="gr11-development-indicators-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default DevelopmentIndicatorsT3;
