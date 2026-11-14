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
    options: ['A single job that a person does for money', 'A series of jobs and experiences that build on each other', 'One job that a person keeps for the whole of life', 'Any work that a person does for money alone'],
    answer: 'A series of jobs and experiences that build on each other',
    explanation: 'Careers develop over time through learning and experience.',
  },
  {
    prompt: 'What are aptitudes?',
    options: ['The things that interest you most in life', 'Natural abilities and strengths that you are good at', 'The kind of work that you would like to do', 'The marks that you get in your school subjects'],
    answer: 'Natural abilities and strengths that you are good at',
    explanation: 'Aptitudes are your inherent talents and capabilities.',
  },
  {
    prompt: 'Why do Grade 10 subject choices matter?',
    options: ['They do not matter, as careers are chosen later', 'They decide which career paths are open to you', 'They matter for marks only and not for careers', 'They can be changed at any time with no effect'],
    answer: 'They decide which career paths are open to you',
    explanation: 'Subject choices affect career opportunities significantly.',
  },
  {
    prompt: 'What are STEM careers?',
    options: ['Careers in engineering and nothing else', 'Careers in science, technology, engineering and mathematics', 'Careers that involve computers and nothing else', 'Careers in offices that use desks and paperwork'],
    answer: 'Careers in science, technology, engineering and mathematics',
    explanation: 'STEM is a broad field with many opportunities.',
  },
  {
    prompt: 'What factors should guide your career choice?',
    options: ['What your friends have chosen to do after school', 'Your aptitudes, interests, values and opportunities', 'The money that a job can earn and nothing else', 'Whichever job looks easiest to get and to do'],
    answer: 'Your aptitudes, interests, values and opportunities',
    explanation: 'Good career choices align with who you are and what matters to you.',
  },
  {
    prompt: 'What is the world of work?',
    options: ['One industry, such as mining or farming', 'All the jobs, careers and work opportunities that exist', 'A fixed set of jobs that never changes', 'A place of work that adults use and learners do not'],
    answer: 'All the jobs, careers and work opportunities that exist',
    explanation: 'The world of work is diverse and constantly evolving.',
  },
  {
    prompt: 'Why is lifelong learning important?',
    options: ['It is not needed once you have earned a degree', 'Jobs change, so you need new skills all through your career', 'It matters at school, but not once you are at work', 'It is not needed once you have been hired for a job'],
    answer: 'Jobs change, so you need new skills all through your career',
    explanation: 'Continuous learning keeps you competitive and adaptable.',
  },
  {
    prompt: 'What skills do employers want?',
    options: ['Technical skills alone, as nothing else matters', 'Communication, problem-solving, teamwork and technical skills', 'Good school marks alone, as nothing else counts', 'Only the skills that the job advert lists by name'],
    answer: 'Communication, problem-solving, teamwork and technical skills',
    explanation: 'Employers value diverse skills and qualities.',
  },
  {
    prompt: 'How can you explore different careers?',
    options: ['You cannot, until you have left school and are hired', 'Through research, job shadowing, internships and talking to workers', 'By reading a book about careers and nothing more', 'It is too early to start in Grade 9 or Grade 10'],
    answer: 'Through research, job shadowing, internships and talking to workers',
    explanation: 'Exploration helps you make informed choices.',
  },
  {
    prompt: 'What should you do if you are unsure about your career path?',
    options: ['Wait and see what happens once you leave school', 'Act now by exploring, collecting information and seeing counsellors', 'Pick a career quickly and stay with it for good', 'Put off the choice until a family member decides for you'],
    answer: 'Act now by exploring, collecting information and seeing counsellors',
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
