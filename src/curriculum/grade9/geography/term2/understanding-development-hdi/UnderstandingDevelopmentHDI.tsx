import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'What is development?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Development</strong> refers to improvements in people's quality of life, including health, education, income, and living conditions.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key aspects:</p>
          <p className="text-slate-600">Healthcare, education, infrastructure, employment, and access to basic services.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'The Human Development Index (HDI)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Human Development Index (HDI)</strong> is a measure used to compare development levels across countries.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Life expectancy</strong>
            <p className="text-slate-600">Average age people live to (health indicator).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Education</strong>
            <p className="text-slate-600">Literacy and years of schooling.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Income (GDP per capita)</strong>
            <p className="text-slate-600">Average earnings per person per year.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'HDI rankings and development levels',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Countries are classified based on their HDI scores:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Very High Development</strong>
            <p className="text-slate-600">0.8–1.0: Nordic countries, Australia, Canada.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">High Development</strong>
            <p className="text-slate-600">0.7–0.8: Parts of Europe, East Asia.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Medium/Low Development</strong>
            <p className="text-slate-600">Below 0.7: Many African and Asian countries.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Development inequality and causes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Development varies greatly between and within countries due to many factors:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Why some areas develop more:</strong>
            <p className="text-slate-600">Natural resources, education, infrastructure, stable government, trade.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Barriers to development:</strong>
            <p className="text-slate-600">Poverty, disease, conflict, poor infrastructure, limited education.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Development Data — HDI Comparison',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">This chart compares Human Development Index scores for countries at different levels of development.</p>
        <DataChart
          data={[
                        { country: 'Norway', hdi: 0.966 },
                        { country: 'Germany', hdi: 0.942 },
                        { country: 'Brazil', hdi: 0.76 },
                        { country: 'South Africa', hdi: 0.713 },
                        { country: 'Nigeria', hdi: 0.548 },
                        { country: 'DRC', hdi: 0.481 },
                        { country: 'Niger', hdi: 0.394 },
                      ]}
          xKey="country"
          series={[
                        { key: 'hdi', label: 'HDI (2023)', type: 'bar', color: '#6366f1' },
                      ]}
          yLabel="HDI score"
          height={240}
        />

        <p className="text-sm text-slate-500">A higher HDI usually reflects better health, education, and income outcomes.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does development typically include?',
    options: ['Only economic growth', 'Improvements in health, education, income, and living conditions', 'Population size only', 'Land area'],
    answer: 'Improvements in health, education, income, and living conditions',
    explanation: 'Development is multidimensional, covering social, economic, and environmental wellbeing.',
  },
  {
    prompt: 'What is the Human Development Index (HDI)?',
    options: ['A measure of GDP only', 'A measure comparing life expectancy, education, and income across countries', 'The population of a country', 'The number of cities'],
    answer: 'A measure comparing life expectancy, education, and income across countries',
    explanation: 'The HDI combines three key indicators to provide a holistic view of human development.',
  },
  {
    prompt: 'Which of the following is NOT a component of the HDI?',
    options: ['Life expectancy', 'Education level', 'Income per capita (GDP)', 'Military strength'],
    answer: 'Military strength',
    explanation: 'The HDI measures health, education, and income, not military power.',
  },
  {
    prompt: 'What does an HDI score of 0.92 suggest about a country?',
    options: ['Very low development', 'Low development', 'Very high development', 'No information'],
    answer: 'Very high development',
    explanation: 'HDI scores above 0.8 indicate very high human development.',
  },
  {
    prompt: 'Which region typically has the highest HDI scores?',
    options: ['Sub-Saharan Africa', 'Northern Europe and developed countries', 'South Asia', 'Middle East'],
    answer: 'Northern Europe and developed countries',
    explanation: 'Scandinavian countries, Australia, Canada, and other developed nations have the highest HDI rankings.',
  },
  {
    prompt: 'What does high life expectancy in the HDI indicate?',
    options: ['Economic wealth only', 'Good healthcare and living conditions', 'Population size', 'Land area'],
    answer: 'Good healthcare and living conditions',
    explanation: 'Life expectancy reflects the health status and quality of healthcare available to people.',
  },
  {
    prompt: 'Why might a country have unequal development between regions?',
    options: ['All countries develop uniformly', 'Differences in resources, infrastructure, education access, and economic opportunities', 'It\'s impossible to vary', 'Only historical reasons'],
    answer: 'Differences in resources, infrastructure, education access, and economic opportunities',
    explanation: 'Rural areas, remote regions, and areas with fewer resources often lag behind urban centres.',
  },
  {
    prompt: 'Which factor is NOT typically a barrier to development?',
    options: ['Limited education access', 'Good healthcare infrastructure', 'Conflict and instability', 'Poor roads and infrastructure'],
    answer: 'Good healthcare infrastructure',
    explanation: 'Good healthcare supports development; poor healthcare hinders it.',
  },
  {
    prompt: 'What does a low life expectancy in the HDI suggest?',
    options: ['Good healthcare', 'High income', 'Health challenges, disease, and poor living conditions', 'Better education'],
    answer: 'Health challenges, disease, and poor living conditions',
    explanation: 'Low life expectancy indicates health crises, disease burden, and inadequate healthcare.',
  },
  {
    prompt: 'How can education improvement contribute to development?',
    options: ['It doesn\'t help', 'Skills, employment opportunities, and higher incomes improve', 'Only in cities', 'Only for girls'],
    answer: 'Skills, employment opportunities, and higher incomes improve',
    explanation: 'Education increases employability, earning potential, and informed decision-making.',
  },
];

const UnderstandingDevelopmentHDI = () => (
  <CapsSubjectTopic
    title="Understanding Development and HDI"
    subtitle="Measuring and comparing development across countries"
    learnSteps={learnSteps}
    task="gr9-understanding-development-hdi-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default UnderstandingDevelopmentHDI;
