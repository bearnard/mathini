import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { Compare } from '../../../../../components/diagrams/lo/Lo9Pictures';
import { Tiers } from '../../../../../components/diagrams/lo/Lo10Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The three economic sectors',
    content: slide(
      <>
        <Rule>Jobs belong to economic sectors. The primary sector collects raw materials from nature. The secondary sector turns raw materials into finished products. The tertiary sector provides infrastructure and services.</Rule>
        <Tiers
          tiers={[
            { title: 'Primary', line: 'Farming, mining' },
            { title: 'Secondary', line: 'Factories, building' },
            { title: 'Tertiary', line: 'Teaching, nursing' },
          ]}
          aria="Three economic sectors with examples. Primary: raw materials, for example farming and mining. Secondary: finished products, for example factories and building. Tertiary: services and infrastructure, for example teaching and nursing."
        />
        <Worked
          title="Bread through the three sectors"
          steps={[
            <>A farmer grows wheat: primary (a raw material).</>,
            <>A mill and a bakery make flour and bread: secondary (a finished product).</>,
            <>A shop sells the bread and a driver delivers it: tertiary (services).</>,
          ]}
        />
        <Mistake>Thinking that tertiary jobs do not produce anything of value. Services such as teaching, health care and transport are essential to everyone.</Mistake>
      </>,
    ),
  },
  {
    title: 'Work settings, activities and skills',
    content: slide(
      <>
        <Rule>Jobs differ in their work setting, the activities involved and the skills needed. A setting can be indoors or outdoors, and its conditions include hours, noise, risk and travel. Activities include designing, assembling and growing. Skills include gathering and analysing information, and instructing others.</Rule>
        <Compare
          left={{ title: 'Indoors', items: ['Office', 'Laboratory', 'Classroom'] }}
          right={{ title: 'Outdoors', items: ['Farm', 'Mine', 'Building site'] }}
          aria="Two columns of work settings. Indoors: office, laboratory, classroom. Outdoors: farm, mine, building site."
        />
        <Worked
          title="Matching jobs to their activities"
          steps={[
            <>An architect designs buildings, mostly in an office.</>,
            <>A factory worker assembles parts on a factory floor.</>,
            <>A farm worker grows crops outdoors, in the weather.</>,
            <>A teacher instructs learners and gathers information about their progress.</>,
          ]}
        />
        <Mistake>Choosing a job from its title alone. Find out the activities, the setting and the conditions of the job before you decide.</Mistake>
      </>,
    ),
  },
  {
    title: 'Careers in recreation, fitness and sport',
    content: slide(
      <>
        <Rule>Recreation, fitness and sport are industries with many careers, for example coach, fitness instructor, physiotherapist, sports administrator and referee. For any career, research the skills needed, the salary package, promotion and further study.</Rule>
        <StepFlow
          steps={['Find the skills needed.', 'Check the salary package.', 'Look at promotion.', 'Look at further study.']}
          aria="Four research steps for a career: find the skills needed, check the salary package, look at promotion prospects and look at further study."
        />
        <Worked
          title="Jabu researches a career as a fitness instructor"
          steps={[
            <>Skills: fitness knowledge, communication and safety knowledge.</>,
            <>Salary package: the salary plus benefits such as leave or medical aid.</>,
            <>Promotion: from instructor to head trainer to gym manager.</>,
            <>Further study: he can study sports science later.</>,
          ]}
        />
        <Mistake>Choosing a career only for the salary. Interests, abilities and working conditions also decide whether you will enjoy it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Talents, time and transferable skills',
    content: slide(
      <>
        <Rule>Use your time well now to build skills and use your talents, for example by volunteering, taking a part-time job or joining a team. Many skills transfer to related industries and are valued in different jobs.</Rule>
        <Hub
          centre="Transferable skills"
          spokes={['Communication', 'Teamwork', 'Leadership', 'Problem-solving', 'Time management']}
          aria="A hub with Transferable skills in the centre and five spokes: communication, teamwork, leadership, problem-solving and time management."
        />
        <Worked
          title="A school sports captain"
          steps={[
            <>She leads her team and communicates with players and the coach.</>,
            <>She plans practices and solves problems when players are absent.</>,
            <>These skills are useful for a team leader in a company.</>,
            <>Her time and talents are used well, and she enjoys it.</>,
          ]}
        />
        <Mistake>Thinking that the skills you learn in one job are useless in another. Leadership, communication and teamwork transfer to many fields.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the three economic sectors and give one example of each.</>,
          <>Give one indoor and one outdoor work setting.</>,
          <>What four things should you research about a career?</>,
          <>Name two transferable skills.</>,
        ]}
        answers={[
          <>Primary (farming), secondary (factories) and tertiary (teaching).</>,
          <>For example indoors: an office or a laboratory. Outdoors: a farm, a mine or a building site.</>,
          <>The skills needed, the salary package, promotion prospects and further study.</>,
          <>For example communication, teamwork, leadership, problem-solving or time management.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the primary sector?',
    options: ['The sector that turns raw materials into finished goods', 'The sector that collects raw materials from nature', 'The sector that provides services, such as teaching', 'The sector that is owned and managed by the government'],
    answer: 'The sector that collects raw materials from nature',
    explanation: 'The primary sector collects raw materials, for example farming, mining, fishing and forestry.',
  },
  {
    prompt: 'What is the secondary sector?',
    options: ['The sector that makes finished products', 'The sector that collects raw materials from nature', 'The sector that provides services and infrastructure', 'The sector that sells goods to customers in shops'],
    answer: 'The sector that makes finished products',
    explanation: 'The secondary sector turns raw materials into finished products, for example in factories and in building.',
  },
  {
    prompt: 'What does the tertiary sector provide?',
    options: ['Raw materials from mines and farms', 'Finished goods made in factories', 'Tools for farmers to use in the fields', 'Infrastructure and services'],
    answer: 'Infrastructure and services',
    explanation: 'The tertiary sector provides infrastructure and services, for example teaching, health care, transport and banking.',
  },
  {
    prompt: 'A person who grows wheat on a farm works in which sector?',
    options: ['The secondary sector', 'The tertiary sector', 'The primary sector', 'The sector for services'],
    answer: 'The primary sector',
    explanation: 'Growing wheat produces a raw material, so it belongs to the primary sector.',
  },
  {
    prompt: 'A baker who turns flour into bread works in which sector?',
    options: ['The primary sector', 'The secondary sector', 'The tertiary sector', 'The sector for raw materials'],
    answer: 'The secondary sector',
    explanation: 'Making bread from flour is making a finished product, so it belongs to the secondary sector.',
  },
  {
    prompt: 'A nurse in a clinic works in which sector?',
    options: ['The tertiary sector', 'The primary sector', 'The secondary sector', 'The sector for finished goods'],
    answer: 'The tertiary sector',
    explanation: 'Nursing is a service, so it belongs to the tertiary sector.',
  },
  {
    prompt: 'Which of these is an outdoor work setting?',
    options: ['A laboratory', 'An office', 'A classroom', 'A mine'],
    answer: 'A mine',
    explanation: 'A mine, a farm and a building site are outdoor work settings.',
  },
  {
    prompt: 'Which of these is an indoor work setting?',
    options: ['A farm field', 'A mine shaft', 'A laboratory', 'A building site'],
    answer: 'A laboratory',
    explanation: 'A laboratory, an office and a classroom are indoor work settings.',
  },
  {
    prompt: 'An architect mostly designs buildings. Which activity is this?',
    options: ['Assembling', 'Designing', 'Growing', 'Harvesting'],
    answer: 'Designing',
    explanation: 'Designing, assembling and growing are examples of activities in jobs.',
  },
  {
    prompt: 'A factory worker puts parts together on a factory floor. Which activity is this?',
    options: ['Assembling', 'Designing', 'Growing', 'Instructing'],
    answer: 'Assembling',
    explanation: 'Putting parts together is assembling.',
  },
  {
    prompt: 'Why should you not choose a job from its title alone?',
    options: ['Job titles are the same in each company that you know', 'Job titles tell you the salary of the job in full', 'The activities of a job do not matter to the worker', 'You need to know what the job involves'],
    answer: 'You need to know what the job involves',
    explanation: 'Find out what the job involves every day, where it takes place and what the conditions are.',
  },
  {
    prompt: 'Which of these is a career in the recreation, fitness and sport industries?',
    options: ['Bank teller at a branch', 'Plumber on a building site', 'Fitness instructor', 'Farm manager on a fruit farm'],
    answer: 'Fitness instructor',
    explanation: 'Coach, fitness instructor, physiotherapist, sports administrator and referee are careers in sport and recreation.',
  },
  {
    prompt: 'What is a salary package?',
    options: ['The money that a person pays in tax each month', 'The salary plus benefits, such as leave', 'The money that a person saves in a bank each year', 'The cost of the study that leads to a career'],
    answer: 'The salary plus benefits, such as leave',
    explanation: 'A salary package is the salary plus other benefits such as leave, medical aid or a pension.',
  },
  {
    prompt: 'What is a transferable skill?',
    options: ['A skill that is useful in different jobs', 'A skill that you can use in one job and not in another', 'A skill that you can learn from a book and nowhere else', 'A skill that you lose when you change to a new job'],
    answer: 'A skill that is useful in different jobs',
    explanation: 'Communication, teamwork, leadership, problem-solving and time management are valuable in many jobs.',
  },
];

const DiversityOfJobs = () => (
  <CapsSubjectTopic
    title="Diversity of Jobs and Career Fields"
    subtitle="Economic sectors, work settings, careers in sport and the skills that transfer"
    learnSteps={learnSteps}
    task="gr10-diversity-of-jobs-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DiversityOfJobs;
