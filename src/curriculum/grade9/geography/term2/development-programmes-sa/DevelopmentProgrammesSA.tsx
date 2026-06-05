import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../geography/_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Development programmes in South Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Since 1994, South Africa has implemented many programmes to reduce inequality and improve living standards.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Challenge:</p>
          <p className="text-slate-600">Overcoming apartheid legacies and creating equal opportunities for all South Africans.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Education and skills development',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Education is critical to South Africa's development strategy:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">School development:</strong>
            <p className="text-slate-600">Improving infrastructure, teacher quality, and curriculum in poor areas.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Higher education:</strong>
            <p className="text-slate-600">University access, bursaries, and technical and vocational training.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Infrastructure and service delivery',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Infrastructure development is essential for economic opportunity:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Water and sanitation</strong>
            <p className="text-slate-600">Ensuring access to clean water and proper sanitation nationwide.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Electricity</strong>
            <p className="text-slate-600">Expanding grid access; renewable energy development.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Roads and transport</strong>
            <p className="text-slate-600">Connecting rural areas and improving urban mobility.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Economic and social programmes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa uses targeted programmes to address poverty and unemployment:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Social grants:</strong>
            <p className="text-slate-600">Child support, old-age pensions, disability grants helping millions.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Job creation:</strong>
            <p className="text-slate-600">Public works programmes, small business support, industrial development.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Housing:</strong>
            <p className="text-slate-600">Millions of homes built; ongoing backlog in informal settlements.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Healthcare:</strong>
            <p className="text-slate-600">Primary healthcare clinics, HIV/AIDS treatment, maternal health.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Development Data — Access to Basic Services',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Development programmes often aim to improve basic services. This example tracks household access to electricity, piped water, and formal housing over time.</p>
        <DataChart
          data={[
                        { year: 2000, electricity: 73, water: 84, housing: 67 },
                        { year: 2010, electricity: 80, water: 88, housing: 73 },
                        { year: 2015, electricity: 86, water: 91, housing: 77 },
                        { year: 2023, electricity: 90, water: 92, housing: 81 },
                      ]}
          xKey="year"
          series={[
                        { key: 'electricity', label: 'Electricity access (%)', type: 'line', color: '#f59e0b' },
                        { key: 'water', label: 'Piped water access (%)', type: 'line', color: '#0ea5e9' },
                        { key: 'housing', label: 'Formal housing (%)', type: 'line', color: '#10b981' },
                      ]}
          type="line"
          yLabel="Percent"
          height={240}
        />

        <p className="text-sm text-slate-500">Programmes are judged by whether they improve daily life through better services and living conditions.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a key challenge for South African development programmes?',
    options: ['Lack of international support', 'Overcoming apartheid legacies and reducing inequality', 'Too much development', 'Lack of resources only'],
    answer: 'Overcoming apartheid legacies and reducing inequality',
    explanation: 'Centuries of inequality and oppression created deep disparities that development programmes must address.',
  },
  {
    prompt: 'Why is education a priority in South African development?',
    options: ['It\'s not important', 'It builds skills, improves employment prospects, and breaks cycles of poverty', 'Only for rich people', 'Only for urban areas'],
    answer: 'It builds skills, improves employment prospects, and breaks cycles of poverty',
    explanation: 'Education is foundational to individual and national development.',
  },
  {
    prompt: 'What does infrastructure development include?',
    options: ['Only roads', 'Water, sanitation, electricity, transport, and communication networks', 'Only electricity', 'Only in cities'],
    answer: 'Water, sanitation, electricity, transport, and communication networks',
    explanation: 'Infrastructure enables economic activity and improves quality of life.',
  },
  {
    prompt: 'What is a social grant in South Africa?',
    options: ['A scholarship only', 'Regular cash assistance to vulnerable populations like children, elderly, and disabled people', 'A loan', 'Business funding'],
    answer: 'Regular cash assistance to vulnerable populations like children, elderly, and disabled people',
    explanation: 'Social grants reduce poverty and support vulnerable groups.',
  },
  {
    prompt: 'What is the purpose of public works programmes in South Africa?',
    options: ['Only to build roads', 'To create employment and provide income to unemployed people while building infrastructure', 'To help only government workers', 'To replace private industry'],
    answer: 'To create employment and provide income to unemployed people while building infrastructure',
    explanation: 'Public works serve dual purposes: employment and infrastructure development.',
  },
  {
    prompt: 'What percentage of South African development involves healthcare?',
    options: ['Zero', 'Healthcare includes HIV treatment, maternal health, and primary healthcare access', 'Only for cities', 'Not part of development'],
    answer: 'Healthcare includes HIV treatment, maternal health, and primary healthcare access',
    explanation: 'Healthcare is essential for development and quality of life.',
  },
  {
    prompt: 'What issue affects the housing programme in South Africa?',
    options: ['Too many houses built', 'A backlog of demand, especially in informal settlements', 'Lack of interest', 'No funding'],
    answer: 'A backlog of demand, especially in informal settlements',
    explanation: 'Millions still lack adequate housing, particularly in townships and rural areas.',
  },
  {
    prompt: 'How do small business support programmes contribute to South African development?',
    options: ['They don\'t', 'They create jobs, increase incomes, and build local economies', 'Only for government employees', 'Only for export'],
    answer: 'They create jobs, increase incomes, and build local economies',
    explanation: 'Small businesses are engines of job creation and local economic development.',
  },
  {
    prompt: 'What is technical and vocational training in South Africa?',
    options: ['Only for engineers', 'Training in specific skills for employment in trades and technical fields', 'Only for wealthy people', 'Not important'],
    answer: 'Training in specific skills for employment in trades and technical fields',
    explanation: 'TVET provides practical skills needed in the job market.',
  },
  {
    prompt: 'Why might rural development be challenging in South Africa?',
    options: ['Nothing is wrong with rural areas', 'Lack of infrastructure, services, and employment opportunities; high poverty rates', 'Too many people', 'Lack of interest'],
    answer: 'Lack of infrastructure, services, and employment opportunities; high poverty rates',
    explanation: 'Rural areas historically received less investment and face unique development challenges.',
  },
];

const DevelopmentProgrammesSA = () => (
  <CapsSubjectTopic
    title="Development Programmes in South Africa"
    subtitle="National efforts to reduce inequality and improve wellbeing"
    learnSteps={learnSteps}
    task="gr9-development-programmes-sa-t2"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default DevelopmentProgrammesSA;
