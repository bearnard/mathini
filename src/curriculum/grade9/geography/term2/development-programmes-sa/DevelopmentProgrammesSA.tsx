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
      <div className="space-y-2">
  <p className="text-slate-600">{"Help for small businesses, such as training or loans, lets people start shops and workshops. These businesses hire local people, who spend their wages in the same community."}</p>
  <p className="text-slate-600">{"TVET colleges teach practical skills, for example plumbing, electrical work or welding, so that young people can qualify for work in a trade."}</p>
  <p className="text-slate-600">{"In a public works programme the government pays people to do jobs such as clearing alien plants or building roads. Workers earn an income, and the community is left with something useful that lasts."}</p>
</div>
</div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a key challenge for South African development programmes?',
    options: ['A lack of support from other countries', 'Overcoming the legacy of apartheid and cutting inequality', 'Too much development in too many places', 'A lack of resources, with no other causes'],
    answer: 'Overcoming the legacy of apartheid and cutting inequality',
    explanation: 'Centuries of inequality and oppression created deep disparities that development programmes must address.',
  },
  {
    prompt: 'Why is education a priority in South African development?',
    options: ['It is not important, as jobs do not need skills', 'It builds skills, lifts job chances and breaks the poverty cycle', 'It is only for rich families who can pay fees', 'It is only needed in towns and not in rural areas'],
    answer: 'It builds skills, lifts job chances and breaks the poverty cycle',
    explanation: 'Education is foundational to individual and national development.',
  },
  {
    prompt: 'What does infrastructure development include?',
    options: ['Roads only, which join towns to each other', 'Water, sanitation, electricity, transport and communication networks', 'Electricity only, which powers homes and factories', 'Services in cities only, where most people live'],
    answer: 'Water, sanitation, electricity, transport and communication networks',
    explanation: 'Infrastructure enables economic activity and improves quality of life.',
  },
  {
    prompt: 'What is a social grant in South Africa?',
    options: ['A scholarship paid to a learner who has top marks', 'Regular cash help for people in need, such as children and the old', 'A loan that must be paid back with interest', 'Funding that is given to start a small business'],
    answer: 'Regular cash help for people in need, such as children and the old',
    explanation: 'Social grants reduce poverty and support vulnerable groups.',
  },
  {
    prompt: 'What is the purpose of public works programmes in South Africa?',
    options: ['To build roads and nothing else of value', 'To give jobs and income to the unemployed while building assets', 'To help government workers who earn very little', 'To replace private industry in all sectors'],
    answer: 'To give jobs and income to the unemployed while building assets',
    explanation: 'Public works serve dual purposes: employment and infrastructure development.',
  },
  {
    prompt: 'What percentage of South African development involves healthcare?',
    options: ['Healthcare covers nothing, as it is a private matter', "Healthcare covers HIV treatment, mothers' health and basic clinics", 'Healthcare is a part of development in cities only', 'Healthcare is not a part of development in any way'],
    answer: "Healthcare covers HIV treatment, mothers' health and basic clinics",
    explanation: 'Healthcare is essential for development and quality of life.',
  },
  {
    prompt: 'What issue affects the housing programme in South Africa?',
    options: ['Too many houses have been built for the people', 'A backlog in the demand for houses, mostly in informal settlements', 'A lack of interest from those who need houses', 'A lack of any funding for housing from the government'],
    answer: 'A backlog in the demand for houses, mostly in informal settlements',
    explanation: 'Millions still lack adequate housing, particularly in townships and rural areas.',
  },
  {
    prompt: 'How do small business support programmes contribute to South African development?',
    options: ['They do not, as small firms have little effect', 'They create jobs, raise incomes and build local economies', 'They help government employees and no one else', 'They help only the firms that sell goods abroad'],
    answer: 'They create jobs, raise incomes and build local economies',
    explanation: 'Small businesses are engines of job creation and local economic development.',
  },
  {
    prompt: 'What is technical and vocational training in South Africa?',
    options: ['Training that is only for engineers with degrees', 'Training in the skills needed for trades and technical jobs', 'Training that is only for wealthy families', 'Training that is not important for finding jobs'],
    answer: 'Training in the skills needed for trades and technical jobs',
    explanation: 'TVET provides practical skills needed in the job market.',
  },
  {
    prompt: 'Why might rural development be challenging in South Africa?',
    options: ['Nothing is wrong, as rural areas have all they need', 'Little infrastructure, services and work, and high poverty', 'There are too many people in rural areas', 'Rural people have no interest in development'],
    answer: 'Little infrastructure, services and work, and high poverty',
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
