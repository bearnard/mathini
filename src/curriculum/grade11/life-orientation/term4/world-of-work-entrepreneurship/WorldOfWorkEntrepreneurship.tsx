import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Work Ethics and Workplace Norms',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The world of work expects professionalism, responsibility, and respect. <strong>Work ethics</strong> guide how people behave in a workplace.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left text-sm">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Professional habits</strong>
            <p className="text-slate-600">Punctuality, reliability, honesty, accountability, and respectful communication.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Workplace norms</strong>
            <p className="text-slate-600">Following procedures, dressing appropriately, meeting deadlines, and cooperating with others.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The South African Labour Market',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa's labour market is shaped by unemployment, inequality, changing skills demands, and economic growth challenges.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2 text-sm text-slate-600">
          <p><strong className="text-slate-800">Important realities:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Youth unemployment is a major challenge.</li>
            <li>Skills shortages exist in some sectors while other sectors are overcrowded.</li>
            <li>Work experience, qualifications, and digital skills affect employability.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Employment and Entrepreneurship',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Employment</strong> means working for an employer, while <strong>entrepreneurship</strong> means starting and managing your own venture to provide goods or services.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left text-sm">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Employment</strong>
            <p className="text-slate-600">Can offer a salary, structure, and workplace training, but jobs may be limited.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Entrepreneurship</strong>
            <p className="text-slate-600">Involves initiative, risk-taking, innovation, and identifying opportunities to solve problems.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Characteristics of Successful Entrepreneurs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Entrepreneurs can help address unemployment by creating products, services, and even jobs where needs exist.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2">
          <p className="font-bold text-slate-800">Key entrepreneurial qualities:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>Creativity and innovation</li>
            <li>Persistence and resilience</li>
            <li>Calculated risk-taking</li>
            <li>Problem-solving and opportunity spotting</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which behaviour shows good work ethic?',
    options: ['Arriving late often', 'Meeting deadlines and being reliable', 'Ignoring instructions', 'Blaming others for mistakes'],
    answer: 'Meeting deadlines and being reliable',
    explanation: 'Reliability and responsibility are core work ethic principles.',
  },
  {
    prompt: 'What is a workplace norm?',
    options: ['A personal opinion that a worker may hold', 'An expected pattern of professional behaviour at work', 'A kind of law that a school has made', 'A business loan that a worker takes out'],
    answer: 'An expected pattern of professional behaviour at work',
    explanation: 'Workplace norms include expected behaviours such as punctuality, respect, and cooperation.',
  },
  {
    prompt: 'Which statement best describes the South African labour market?',
    options: ['It has no problems with unemployment today', 'It is shaped by unemployment, inequality and changing skills demand', 'Everyone gets work automatically after school', 'Qualifications make no difference to getting work'],
    answer: 'It is shaped by unemployment, inequality and changing skills demand',
    explanation: 'LO learners need to understand the realities and pressures of the labour market.',
  },
  {
    prompt: 'What is the main difference between employment and entrepreneurship?',
    options: [
      'Employment means running your own business and entrepreneurship means being hired',
      'Employment is working for an employer, while entrepreneurship is creating and managing your own venture',
      'They are exactly the same',
      'Neither involves earning income',
    ],
    answer: 'Employment is working for an employer, while entrepreneurship is creating and managing your own venture',
    explanation: 'Employment and entrepreneurship are different pathways into the world of work.',
  },
  {
    prompt: 'Why can entrepreneurship be important in South Africa?',
    options: ['It removes the need for any kind of education', 'It can create opportunities and jobs by solving real problems', 'It guarantees instant success for the owner', 'It matters in large cities and nowhere else'],
    answer: 'It can create opportunities and jobs by solving real problems',
    explanation: 'Entrepreneurship can respond creatively to social and economic needs.',
  },
  {
    prompt: 'Which quality is most closely linked to successful entrepreneurship?',
    options: ['Avoiding all risk', 'Creativity and resilience', 'Waiting for others to decide', 'Ignoring feedback'],
    answer: 'Creativity and resilience',
    explanation: 'Entrepreneurs need innovation and persistence to turn ideas into viable ventures.',
  },
  {
    prompt: 'A worker admits a mistake, apologises, and corrects it. Which value is being shown?',
    options: ['Accountability', 'Propaganda', 'Bias', 'Apathy'],
    answer: 'Accountability',
    explanation: 'Taking responsibility for errors is a professional and ethical workplace behaviour.',
  },
  {
    prompt: 'Which example best shows opportunity spotting?',
    options: ['Ignoring a need that exists in the community', 'Noticing demand for cheap lunch packs and planning a small business', 'Waiting for perfect conditions to come along', 'Copying a rumour that goes round on social media'],
    answer: 'Noticing demand for cheap lunch packs and planning a small business',
    explanation: 'Entrepreneurs identify unmet needs and turn them into practical opportunities.',
  },
];

const WorldOfWorkEntrepreneurship = () => (
  <CapsSubjectTopic
    title="World of Work and Entrepreneurship"
    subtitle="Work ethics, labour market realities, employment pathways and entrepreneurial qualities"
    learnSteps={learnSteps}
    task="gr11-world-of-work-entrepreneurship-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default WorldOfWorkEntrepreneurship;
