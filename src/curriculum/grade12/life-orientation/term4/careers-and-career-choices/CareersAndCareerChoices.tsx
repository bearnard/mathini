import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Exploring Post-School Pathways',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">After Grade 12, learners may choose university, TVET college, learnerships, workplace training, entrepreneurship or other structured development options. Good choices depend on interests, strengths, affordability and long-term goals.</p>
      </div>
    ),
  },
  {
    title: 'Admissions and Entry Requirements',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Different careers and institutions require different subjects, marks and supporting documents. Learners should check official requirements early so that applications match realistic opportunities and deadlines.</p>
      </div>
    ),
  },
  {
    title: 'Bursaries, Funding and Access',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Funding options such as bursaries, scholarships and financial aid can widen access to study and training. Learners need to research criteria carefully and prepare documents honestly and on time.</p>
      </div>
    ),
  },
  {
    title: 'Entrepreneurship and Lifelong Learning',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Career planning is not only about formal employment. Entrepreneurship, short courses and ongoing skills development matter because work changes over time and learners may need to adapt more than once in adult life.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'Which is a recognised post-school pathway?',
    options: [
      'Waiting without any plan',
      'TVET college or university study',
      'Ignoring application deadlines',
      'Avoiding all training opportunities',
    ],
    answer: 1,
    explanation: 'University and TVET study are both formal post-school pathways.',
  },
  {
    prompt: 'Why should you check entry requirements early?',
    options: ['They change too often for planning to be useful', 'They help you plan realistic applications', 'They are needed after acceptance is given', 'They matter once the course has begun'],
    answer: 1,
    explanation: 'Early checking prevents you from applying blindly or missing key requirements.',
  },
  {
    prompt: 'What is the purpose of a bursary?',
    options: [
      'To guarantee a job immediately',
      'To help fund study or training',
      'To replace academic effort',
      'To avoid application forms',
    ],
    answer: 1,
    explanation: 'Bursaries provide financial support for eligible learners.',
  },
  {
    prompt: 'Which factor should influence career choice most responsibly?',
    options: ['What your friends have decided to study', 'Your strengths, interests and opportunities', 'Which career sounds the most impressive', 'The highest salary, whatever the work involves'],
    answer: 1,
    explanation: 'Responsible decisions match personal qualities with real opportunities and requirements.',
  },
  {
    prompt: 'Why does lifelong learning matter?',
    options: [
      'Learning ends after Grade 12',
      'Skills and work demands can change over time',
      'Only weak learners continue learning',
      'It matters only in technology careers',
    ],
    answer: 1,
    explanation: 'People often need new skills and knowledge throughout their working lives.',
  },
  {
    prompt: 'Which option best describes entrepreneurship?',
    options: [
      'Depending on others to create every opportunity',
      'Creating and managing a business or service opportunity',
      'Avoiding all risk and planning',
      'Working only in government jobs',
    ],
    answer: 1,
    explanation: 'Entrepreneurship involves creating and developing business opportunities.',
  },
  {
    prompt: 'What should a learner use when researching institutions?',
    options: ['Official websites and verified information', 'Comments left under social media posts', 'Stories a friend heard from an older cousin', 'Unverified rankings shared in group chats'],
    answer: 0,
    explanation: 'Official sources are more reliable for requirements, funding and deadlines.',
  },
  {
    prompt: 'Why is it risky to choose a career without research?',
    options: ['Research limits the careers you can choose', 'You may overlook requirements, costs and fit', 'Research is meant for top achievers', 'You will qualify for a bursary automatically'],
    answer: 1,
    explanation: 'Lack of research can lead to unrealistic or poorly matched choices.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const CareersAndCareerChoices = () => (
  <CapsSubjectTopic
    title='Careers and Career Choices'
    subtitle='Post-school pathways, admissions, funding, entrepreneurship and lifelong learning plans.'
    learnSteps={learnSteps}
    task='gr12-careers-and-career-choices-t4'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default CareersAndCareerChoices;
