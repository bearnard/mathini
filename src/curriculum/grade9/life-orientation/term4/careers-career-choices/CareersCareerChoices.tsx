import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { SubjectBlocks, WideHub } from '../../../../../components/diagrams/lo/Lo11Pictures';
import { fetSubjects } from '../../../../../components/diagrams/lo/lo11Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const subjects = fetSubjects();

export const learnSteps: LearnStep[] = [
  {
    title: 'What is a career? Aptitudes and interests',
    content: slide(
      <>
        <Rule>A career is a series of jobs and experiences that build on each other. Your aptitudes are your natural abilities. Your interests are what you enjoy. Good choices also fit your values and the opportunities you have.</Rule>
        <WideHub centre="My career choice" spokes={['Aptitudes', 'Interests', 'Values', 'Opportunities']} aria="A circle labelled My career choice with four things that should guide it: aptitudes, interests, values and opportunities." />
        <Worked
          title="Thabo thinks about his future"
          steps={[<>Aptitude: he is good with numbers.</>, <>Interest: he enjoys building things.</>, <>Value: he wants to help his community.</>, <>Opportunity: he checks which subjects his school offers.</>]}
        />
        <Mistake>Choosing a career because your friends chose it, only for the money, or because it looks easiest. Start with who you are.</Mistake>
      </>,
    ),
  },
  {
    title: 'Grade 10 subject choices',
    content: slide(
      <>
        <Rule>Your Grade 10 subject choices decide which career paths stay open. In Grades 10 to 12 you take {subjects.total} subjects: {subjects.compulsory.length} compulsory ones and {subjects.chosen} that you choose.</Rule>
        <SubjectBlocks aria="Seven blocks for the subjects in Grades 10 to 12: four compulsory subjects (home language, first additional language, Mathematics or Mathematical Literacy, Life Orientation) and three subjects you choose." />
        <Worked
          title="Zinhle wants to study engineering"
          steps={[<>Compulsory: home language, first additional language, Life Orientation, and Mathematics or Mathematical Literacy.</>, <>Most engineering courses ask for Mathematics and Physical Sciences, so she picks Mathematics, not Mathematical Literacy.</>, <>She uses her {subjects.chosen} chosen subjects to include Physical Sciences.</>]}
        />
        <Mistake>Thinking subject choices do not matter because careers are chosen later. If a subject is missing, a career path can be closed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Career fields and STEM',
    content: slide(
      <>
        <Rule>STEM careers are careers in science, technology, engineering and mathematics. Other fields include creative careers such as art, design and media, and business and health careers.</Rule>
        <WideHub centre="Career fields" spokes={['STEM', 'Creative', 'Business', 'Health']} aria="A circle labelled Career fields with four fields around it: STEM, creative, business and health." />
        <Worked
          title="Match two learners to a field"
          steps={[<>Sipho loves drawing and designing posters: a creative field, such as graphic design.</>, <>Lerato loves experiments and maths: a STEM field, such as engineering.</>, <>Both can still add skills from other fields.</>]}
        />
        <Mistake>Thinking STEM means only engineering, or only computers. It covers science, technology, engineering and mathematics.</Mistake>
      </>,
    ),
  },
  {
    title: 'The world of work and lifelong learning',
    content: slide(
      <>
        <Rule>The world of work is all the jobs, careers and work opportunities that exist, and it keeps changing. Lifelong learning means picking up new skills all through your career. Employers want a mix of skills.</Rule>
        <WideHub centre="Employers want" spokes={['Communication', 'Problem-solving', 'Teamwork', 'Technical skills']} aria="A circle labelled Employers want with four skills around it: communication, problem-solving, teamwork and technical skills." />
        <Worked
          title="A shop starts using a new till system"
          steps={[<>The job changes, so the old skills are not enough.</>, <>The worker learns the new system: lifelong learning.</>, <>Communication and teamwork help the whole shop adjust.</>]}
        />
        <Mistake>Believing you can stop learning once you have a degree or a job. Jobs change, so you need new skills all through your career.</Mistake>
      </>,
    ),
  },
  {
    title: 'Exploring careers when you are unsure',
    content: slide(
      <>
        <Rule>If you are unsure, act now. Explore careers, collect information and talk to your school counsellor. Do not wait for it to sort itself out.</Rule>
        <StepFlow steps={['List your interests and aptitudes.', 'Research careers that fit them.', 'Job shadow or talk to people who do the work.', 'See a counsellor and decide your next step.']} aria="Four ways to explore a career in order: list interests and aptitudes, research careers, job shadow or talk to workers, see a counsellor." />
        <Worked
          title="Aisha is unsure between nursing and teaching"
          steps={[<>She lists what she enjoys and is good at.</>, <>She reads about both careers.</>, <>She talks to a nurse and a teacher about their work.</>, <>She discusses her choice with a counsellor.</>]}
        />
        <Mistake>Picking a career quickly and sticking to it for ever, or leaving the decision to someone else. Explore first, then choose.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is a career, and what are aptitudes?" answer="A career is a series of jobs and experiences that build on each other. Aptitudes are your natural abilities and strengths." />
        <Check question="Why do Grade 10 subject choices matter, and how many subjects do you take in Grades 10 to 12?" answer="They decide which career paths are open to you. You take seven subjects: four compulsory and three you choose." />
        <Check question="What does STEM stand for, and why is lifelong learning important?" answer="Science, technology, engineering and mathematics. Jobs change, so you need new skills all through your career." />
        <Check question="Name two ways to explore careers if you are unsure." answer="For example: research, job shadowing, internships, talking to people who do the work, and seeing a counsellor." />
      </>,
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
