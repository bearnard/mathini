import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Career Paths',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>career</strong> is a sequence of jobs and experiences that build on each other.
          Your <strong>aptitudes</strong> (natural abilities) and <strong>interests</strong> should guide your choices.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Career planning starts now with good subject choices and self-understanding.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Subject Choices and Career Fields',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Your Grade 10 subject choices open or close doors to different career fields.
          Different fields require different skills and qualifications.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">STEM careers</strong>
            <p className="text-slate-600">Science, tech, engineering, maths.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Creative careers</strong>
            <p className="text-slate-600">Arts, design, media, writing.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'World of Work and Lifelong Learning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>world of work</strong> is changing rapidly. <strong>Lifelong learning</strong> means continuing to develop skills throughout your life.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Career success requires:</p>
          <p className="text-slate-600">Adaptability, continuous learning, and commitment to growth.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a career?',
    options: ['Just a job', 'A sequence of jobs and experiences that build on each other', 'Only one job forever', 'Work you do for money only'],
    answer: 'A sequence of jobs and experiences that build on each other',
    explanation: 'Careers develop over time through learning and experience.',
  },
  {
    prompt: 'What are aptitudes?',
    options: ['Interests only', 'Natural abilities and strengths you are good at', 'What you want to do', 'Just grades'],
    answer: 'Natural abilities and strengths you are good at',
    explanation: 'Aptitudes are your inherent talents and capabilities.',
  },
  {
    prompt: 'Why do Grade 10 subject choices matter?',
    options: ['They do not', 'They determine what career paths are available to you', 'Only for grades', 'Can change anytime without impact'],
    answer: 'They determine what career paths are available to you',
    explanation: 'Subject choices affect career opportunities significantly.',
  },
  {
    prompt: 'What are STEM careers?',
    options: ['Only engineering', 'Science, Technology, Engineering, and Mathematics careers', 'Just computers', 'Office jobs'],
    answer: 'Science, Technology, Engineering, and Mathematics careers',
    explanation: 'STEM is a broad field with many opportunities.',
  },
  {
    prompt: 'What factors should guide your career choice?',
    options: ['What friends do', 'Your aptitudes, interests, values, and opportunities', 'Only money', 'Just what is easy'],
    answer: 'Your aptitudes, interests, values, and opportunities',
    explanation: 'Good career choices align with who you are and what matters to you.',
  },
  {
    prompt: 'What is the world of work?',
    options: ['Just one industry', 'All the jobs, careers, and employment opportunities available', 'Stays the same', 'Only for adults'],
    answer: 'All the jobs, careers, and employment opportunities available',
    explanation: 'The world of work is diverse and constantly evolving.',
  },
  {
    prompt: 'Why is lifelong learning important?',
    options: ['It is not', 'Jobs change and you need new skills throughout your career', 'Only in school', 'Not necessary once hired'],
    answer: 'Jobs change and you need new skills throughout your career',
    explanation: 'Continuous learning keeps you competitive and adaptable.',
  },
  {
    prompt: 'What skills do employers want?',
    options: ['Just technical skills', 'Communication, problem-solving, teamwork, and technical skills', 'Only grades', 'Nothing else matters'],
    answer: 'Communication, problem-solving, teamwork, and technical skills',
    explanation: 'Employers value diverse skills and qualities.',
  },
  {
    prompt: 'How can you explore different careers?',
    options: ['You cannot', 'Through research, job shadowing, internships, and talking to professionals', 'Just reading', 'Too early to explore'],
    answer: 'Through research, job shadowing, internships, and talking to professionals',
    explanation: 'Exploration helps you make informed choices.',
  },
  {
    prompt: 'What should you do if you are unsure about your career path?',
    options: ['Wait passively', 'Take action now by exploring, gathering information, and speaking with counsellors', 'Choose randomly', 'Never decide'],
    answer: 'Take action now by exploring, gathering information, and speaking with counsellors',
    explanation: 'Active exploration and guidance lead to better decisions.',
  },
];

const CareersCareerChoices = () => (
  <CapsSubjectTopic
    title="Careers and Career Choices"
    subtitle="Matching abilities to pathways and planning for the future"
    learnSteps={learnSteps}
    task="gr9-careers-career-choices-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default CareersCareerChoices;
