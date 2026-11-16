import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { Tiers } from '../../../../../components/diagrams/lo/Lo10Pictures';
import { netPay, rand } from '../../../../../components/diagrams/lo/gr10Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The salary example comes from gr10Helpers (tested in gr10Helpers.test.ts).
const pay = { gross: 15000, deductions: 3000, net: netPay(15000, 3000) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Know yourself before you choose',
    content: slide(
      <>
        <Rule>A good subject or career choice starts with knowing yourself: your interests (what you enjoy), abilities (what you can do), talents (what comes naturally) and strengths (what you do well and can improve).</Rule>
        <Hub
          centre="Me"
          spokes={['Interests', 'Abilities', 'Talents', 'Strengths']}
          aria="A hub with Me in the centre and four spokes: interests, abilities, talents and strengths. A subject or career choice should fit all four."
        />
        <Worked
          title="Ayanda thinks about her choices"
          steps={[
            <>Interest: she enjoys helping people.</>,
            <>Ability: she gets good marks in Life Sciences.</>,
            <>Talent: she explains things clearly and calmly.</>,
            <>Possible fields: health care or education.</>,
          ]}
        />
        <Mistake>Choosing subjects only because your friends chose them, or because they look easy. Your choice should fit your own interests, abilities and goals.</Mistake>
      </>,
    ),
  },
  {
    title: 'Career field, occupation, career and job',
    content: slide(
      <>
        <Rule>A career field is a broad area of work. An occupation is a particular kind of work in that field. A job is a specific position with an employer. A career is the path of work and learning that you follow through your life.</Rule>
        <Tiers
          tiers={[
            { title: 'Career field', line: 'Health care' },
            { title: 'Occupation', line: 'Physiotherapist' },
            { title: 'Job', line: 'Physiotherapist at a clinic' },
            { title: 'Career', line: 'Student, clinic job, own practice' },
          ]}
          aria="Four levels with an example. Career field: health care. Occupation: physiotherapist. Job: physiotherapist at a clinic. Career: the path from student to clinic job to running your own practice."
        />
        <Worked
          title="Choosing a subject package"
          steps={[
            <>The National Senior Certificate needs seven subjects.</>,
            <>These are two languages (a Home Language and a First Additional Language), Mathematics or Mathematical Literacy, Life Orientation and three other subjects.</>,
            <>Some careers need particular subjects, for example many engineering degrees need Mathematics.</>,
            <>So you choose your subjects with your career field in mind.</>,
          ]}
        />
        <Mistake>Using the words job, occupation and career as if they mean the same thing. A job is one position. A career is the whole path.</Mistake>
      </>,
    ),
  },
  {
    title: 'Steps in making a choice',
    content: slide(
      <>
        <Rule>Make career and study decisions in steps: gather information about yourself and the options, list the choices, weigh the requirements and costs, decide, make a plan, and review it later.</Rule>
        <StepFlow
          steps={['Gather information.', 'List your options.', 'Weigh requirements and costs.', 'Decide and plan.', 'Review later.']}
          aria="Five steps in making a career decision: gather information, list your options, weigh requirements and costs, decide and plan, and review later."
        />
        <Worked
          title="Thabo wants to become an engineer"
          steps={[
            <>Information: he finds out that many engineering degrees need Mathematics and Physical Sciences.</>,
            <>Options: Mathematics, or Mathematical Literacy.</>,
            <>Weigh: only Mathematics keeps the engineering door open.</>,
            <>Decide and plan: he chooses Mathematics and asks his teacher for extra help.</>,
          ]}
        />
        <Mistake>Deciding in one moment and never looking at the choice again. Your interests and the job market change, so review your plan.</Mistake>
      </>,
    ),
  },
  {
    title: 'Life domains and socio-economic factors',
    content: slide(
      <>
        <Rule>Think about your whole life, not only work: being (physical, psychological and spiritual), becoming (practical, leisure and growth) and community (social, physical and community). Also weigh socio-economic factors: community needs, the money available for study (affordability), stereotypes, access, and the effect of income tax on your final salary.</Rule>
        <Worked
          title="Gross and net salary"
          steps={[
            <>A job pays a gross salary of {rand(pay.gross)} a month.</>,
            <>Deductions such as income tax and UIF come off: {rand(pay.deductions)}.</>,
            <>Take-home pay (net): {rand(pay.gross)} minus {rand(pay.deductions)} is {rand(pay.net)}.</>,
            <>Plan with the net amount, because that is what you can spend.</>,
          ]}
        />
        <Mistake>Planning your life around the gross salary. Tax and other deductions come off first, so the money you receive is smaller.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the four things you should know about yourself before you choose a career.</>,
          <>What is the difference between a career field, an occupation and a job? Use health care as an example.</>,
          <>Why should a learner who wants to study engineering think carefully before choosing Mathematical Literacy?</>,
          <>A job pays a gross salary of {rand(pay.gross)} and {rand(pay.deductions)} is deducted. What is the net pay?</>,
        ]}
        answers={[
          <>Your interests, abilities, talents and strengths.</>,
          <>A career field is a broad area (health care). An occupation is a kind of work in it (physiotherapist). A job is one position (physiotherapist at a clinic).</>,
          <>Many engineering degrees need Mathematics, so Mathematical Literacy can close that door.</>,
          <>{rand(pay.net)}.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which of these should you think about when you choose a career?',
    options: ['The careers that your friends have chosen to follow', 'Your interests, abilities, talents and strengths', 'The job that looks the easiest in the news this week', 'The subjects in which you got the highest mark last year'],
    answer: 'Your interests, abilities, talents and strengths',
    explanation: 'A good choice fits who you are: your interests, abilities, talents and strengths.',
  },
  {
    prompt: 'What is a career field?',
    options: ['A broad area of work, such as health care', 'One position with an employer, for example at a clinic', 'The amount of money that a person earns each month', 'The qualification that you receive when you finish school'],
    answer: 'A broad area of work, such as health care',
    explanation: 'A career field is a broad area of work. An occupation and a job are more specific.',
  },
  {
    prompt: 'What is an occupation?',
    options: ['A broad area of work that includes many kinds of work in it', 'The path of learning and work that you follow in life', 'The salary and benefits that come with a position', 'A particular kind of work, such as being a physiotherapist'],
    answer: 'A particular kind of work, such as being a physiotherapist',
    explanation: 'An occupation is a kind of work within a career field.',
  },
  {
    prompt: 'What is a job?',
    options: ['A broad area of work that includes many occupations', 'The whole path of work that you follow through your life', 'A specific position with an employer', 'The training that you complete before you start work'],
    answer: 'A specific position with an employer',
    explanation: 'A job is one position, for example physiotherapist at a clinic.',
  },
  {
    prompt: 'What does the word career mean?',
    options: ['A single position that a person holds with one employer', 'The path of work and learning that you follow through life', 'A broad group of occupations such as health or farming', 'The amount that a person is paid after tax has been deducted'],
    answer: 'The path of work and learning that you follow through life',
    explanation: 'A career is the whole path of work and learning, which can include many jobs.',
  },
  {
    prompt: 'Which of these is an example of a career field?',
    options: ['Health care', 'Physiotherapist at a clinic', 'Physiotherapist', 'Student, clinic job, own practice'],
    answer: 'Health care',
    explanation: 'Health care is a broad area of work. Physiotherapist is an occupation, physiotherapist at a clinic is a job and the last one is a career path.',
  },
  {
    prompt: 'How many subjects does the National Senior Certificate need?',
    options: ['Eight', 'Five', 'Nine', 'Seven'],
    answer: 'Seven',
    explanation: 'A learner takes seven subjects: two languages, Mathematics or Mathematical Literacy, Life Orientation and three other subjects.',
  },
  {
    prompt: 'Which subjects must a Grade 10 learner take for the National Senior Certificate?',
    options: ['Mathematics, Physical Sciences, Life Sciences and Accounting', 'One language, Life Orientation and five subjects of your own choice', 'Two languages, Mathematics or Maths Literacy, and Life Orientation', 'Mathematics, History, Geography and Information Technology'],
    answer: 'Two languages, Mathematics or Maths Literacy, and Life Orientation',
    explanation: 'Two languages, Mathematics or Mathematical Literacy, and Life Orientation are compulsory. The other three subjects are chosen.',
  },
  {
    prompt: 'Thabo wants to study engineering. Why should he be careful about choosing Mathematical Literacy?',
    options: ['Mathematical Literacy is not allowed in Grade 10 at all', 'Many engineering degrees need Mathematics', 'Mathematical Literacy is a harder subject than Mathematics', 'Engineers do not use numbers in their daily work'],
    answer: 'Many engineering degrees need Mathematics',
    explanation: 'Some careers need particular subjects. Many engineering degrees need Mathematics, so you must check requirements early.',
  },
  {
    prompt: 'Which step comes first when you make a career decision?',
    options: ['Gathering information about yourself and the options', 'Deciding on the career that you like best right away', 'Applying for a job or a place to study', 'Reviewing the choice that you made a year or two ago'],
    answer: 'Gathering information about yourself and the options',
    explanation: 'A good decision starts with information about yourself and the options. Then you weigh requirements and costs, decide, plan and review.',
  },
  {
    prompt: 'Which life domain includes the physical, psychological and spiritual parts of a person?',
    options: ['Becoming', 'Community', 'Working', 'Being'],
    answer: 'Being',
    explanation: 'In the CAPS life domains, being covers the physical, psychological and spiritual parts of a person.',
  },
  {
    prompt: 'Which of these is a socio-economic factor that can affect a study choice?',
    options: ['The colour of the school uniform that you wear', 'The time of day at which the first lesson starts', 'The money available for study', 'The name of the town in which you were born'],
    answer: 'The money available for study',
    explanation: 'Money, community needs, stereotyping and access are socio-economic factors that affect study and career choices.',
  },
  {
    prompt: 'A job pays a gross salary of R15 000 and R3 000 is deducted for tax and UIF. What is the net pay?',
    options: ['R18 000', 'R12 000', 'R15 000', 'R3 000'],
    answer: 'R12 000',
    explanation: 'Net pay is gross pay minus the deductions: R15 000 - R3 000 = R12 000.',
  },
  {
    prompt: 'Why should you plan your spending with your net salary and not your gross salary?',
    options: ['Tax and other deductions come off before you receive the money', 'The gross salary is the money that you receive in your bank account', 'The net salary is always larger than the gross salary', 'Deductions are added to the salary at the end of the month'],
    answer: 'Tax and other deductions come off before you receive the money',
    explanation: 'Net pay is the money you actually receive after income tax and other deductions.',
  },
];

const SubjectsCareerFields = () => (
  <CapsSubjectTopic
    title="Subjects, Career Fields and Study Choices"
    subtitle="Knowing yourself, understanding careers and choosing subjects with your future in mind"
    learnSteps={learnSteps}
    task="gr10-subjects-career-fields-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SubjectsCareerFields;
