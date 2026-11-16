import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare } from '../../../../../components/diagrams/lo/Lo9Pictures';
import { Zones } from '../../../../../components/diagrams/lo/PswPictures';
import { CountBars } from '../../../../../components/diagrams/lo/Lo11Pictures';
import { gain } from '../../../../../components/diagrams/lo/gr10Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// NQF levels are a fixed national scale (levels 1 to 10). The gap between levels comes from gr10Helpers (tested in gr10Helpers.test.ts).
const nqf = { matric: 4, degree: 7, doctorate: 10 };
const upToDegree = gain(nqf.matric, nqf.degree);

export const learnSteps: LearnStep[] = [
  {
    title: 'Trends and demands in the job market',
    content: slide(
      <>
        <Rule>The job market changes. Some skills are scarce: employers need them but too few people have them. A niche is a small, specific area where there is a need. Read the market by looking at job adverts, news and what employers say they need.</Rule>
        <Worked
          title="Reading the market"
          steps={[
            <>Naledi reads job adverts and sees that many ask for electricians and solar technicians.</>,
            <>She learns that trades such as these are often scarce skills.</>,
            <>She finds a niche: fixing small solar systems in her area.</>,
            <>She checks with a career guide before she decides.</>,
          ]}
        />
        <Mistake>Choosing a career only because it is popular today. Demands change, so look at trends and combine them with your own interests and abilities.</Mistake>
      </>,
    ),
  },
  {
    title: 'Growth and decline of occupations',
    content: slide(
      <>
        <Rule>New technology and changing needs make some occupations grow and others decline. Careers now change more often, so people need competencies that last: they can learn, adapt, communicate and solve problems.</Rule>
        <Compare
          left={{ title: 'Often growing', items: ['Information technology', 'Health care', 'Skilled trades'] }}
          right={{ title: 'Often declining', items: ['Routine office tasks', 'Repetitive factory work', 'Jobs machines now do'] }}
          aria="Two columns. Occupations that are often growing: information technology, health care and skilled trades. Occupations that are often declining: routine office tasks, repetitive factory work and jobs that machines now do."
        />
        <Worked
          title="Preparing for change"
          steps={[
            <>A clerk&apos;s routine tasks are now done by software.</>,
            <>The clerk takes a short course in data analysis.</>,
            <>New competencies keep the clerk employable.</>,
            <>Result: a changing market becomes an opportunity.</>,
          ]}
        />
        <Mistake>Believing that one qualification will be enough for the whole of your working life. Be ready to retrain.</Mistake>
      </>,
    ),
  },
  {
    title: 'SAQA, the NQF and recognition of prior learning',
    content: slide(
      <>
        <Rule>SAQA is the South African Qualifications Authority. It looks after the National Qualifications Framework (NQF), which ranks qualifications on 10 levels. Recognition of prior learning (RPL) gives credit for what you already know and can do from work or life.</Rule>
        <CountBars
          labels={['Grade 9', 'Matric', 'Degree', 'Doctorate']}
          values={[1, nqf.matric, nqf.degree, nqf.doctorate]}
          unit="NQF level"
          title="NQF levels"
          aria={`Four qualifications on the NQF: Grade 9 at level 1, the National Senior Certificate (matric) at level ${nqf.matric}, a bachelor's degree at level ${nqf.degree} and a doctorate at level ${nqf.doctorate}.`}
        />
        <Worked
          title="Matric to degree"
          steps={[
            <>Matric (the National Senior Certificate) is at NQF level {nqf.matric}.</>,
            <>A bachelor&apos;s degree is at level {nqf.degree}.</>,
            <>The step is {nqf.degree} − {nqf.matric} = {upToDegree} levels.</>,
            <>A worker with years of experience can ask for RPL, to get credit for what they already know.</>,
          ]}
        />
        <Mistake>Thinking that you can only learn in a classroom. RPL recognises what you learnt at work and in life.</Mistake>
      </>,
    ),
  },
  {
    title: 'Lifelong learning',
    content: slide(
      <>
        <Rule>Lifelong learning means to keep learning, retraining and developing for your whole life. Learning can be formal, non-formal or informal, and all three help you to stay flexible and to change when the world of work changes.</Rule>
        <Zones
          zones={[
            { title: 'Formal', line: 'School, college, university' },
            { title: 'Non-formal', line: 'Workshop, short course' },
            { title: 'Informal', line: 'Reading, tutorials, friends' },
          ]}
          aria="Three kinds of learning. Formal: school, college and university. Non-formal: a workshop or short course. Informal: reading, online tutorials and learning from friends."
        />
        <Worked
          title="Which kind of learning?"
          steps={[
            <>A university degree: formal learning.</>,
            <>A weekend first-aid workshop: non-formal learning.</>,
            <>Watching a video tutorial to repair a bicycle: informal learning.</>,
            <>All three build skills that you can use at work.</>,
          ]}
        />
        <Mistake>Believing that learning stops when you leave school. People who keep learning adapt best to a changing job market.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a scarce skill? Give one example.</>,
          <>Name one growing and one declining kind of work, and say how a worker can prepare for change.</>,
          <>What do SAQA and the NQF do, and what is RPL?</>,
          <>Name the three kinds of learning and give one example of each.</>,
        ]}
        answers={[
          <>A skill that employers need but too few people have, for example an electrician.</>,
          <>For example information technology is growing and routine office tasks are declining. A worker can retrain and learn new competencies.</>,
          <>SAQA looks after the NQF, which ranks qualifications on 10 levels. RPL gives credit for what you already know from work or life.</>,
          <>Formal (university), non-formal (a workshop) and informal (a video tutorial).</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a scarce skill?',
    options: ['A skill that is not needed by any employer in the country', 'A skill employers need but too few people have', 'A skill that is used in one small company', 'A skill that people can learn in a few minutes'],
    answer: 'A skill employers need but too few people have',
    explanation: 'Scarce skills are skills that are in demand but in short supply, so people with them find work more easily.',
  },
  {
    prompt: 'What is a niche in the job market?',
    options: ['A small, specific area where there is a need', 'A large company that employs thousands of workers', 'A job that has a very high salary and many benefits', 'A qualification that you can get at a university'],
    answer: 'A small, specific area where there is a need',
    explanation: 'A niche is a specific area of need that you can serve, for example repairing small solar systems.',
  },
  {
    prompt: 'What is a good way to read the job market?',
    options: ['Ask only the friends who are in your class at school', 'Choose the job that was popular ten years ago', 'Wait for a job to be given to you by chance', 'Read job adverts and news about employer needs'],
    answer: 'Read job adverts and news about employer needs',
    explanation: 'Job adverts, news and career guides show which skills are in demand.',
  },
  {
    prompt: 'Why is it a mistake to choose a career only because it is popular today?',
    options: ['Popular careers do not pay a good salary to anyone', 'Popular careers are not open to learners at school', 'Demands change, so combine trends with your interests', 'Popular careers can be studied in another country only'],
    answer: 'Demands change, so combine trends with your interests',
    explanation: 'Combine trends in the job market with your own interests and abilities.',
  },
  {
    prompt: 'Which kind of work is often declining because of new technology?',
    options: ['Information technology jobs', 'Routine office tasks', 'Health care jobs', 'Skilled trades jobs'],
    answer: 'Routine office tasks',
    explanation: 'Jobs that follow fixed routines are often taken over by machines or software.',
  },
  {
    prompt: 'Which kind of work is often growing?',
    options: ['Information technology', 'Routine office tasks', 'Repetitive factory tasks', 'Jobs that machines now do'],
    answer: 'Information technology',
    explanation: 'Information technology, health care and skilled trades are often growing fields.',
  },
  {
    prompt: 'A clerk\'s routine tasks are now done by software. What is the best response?',
    options: ['Stay in the same job and hope that nothing changes', 'Stop working and wait for the old tasks to come back', 'Refuse to use the software in the workplace', 'Take a short course to learn new competencies'],
    answer: 'Take a short course to learn new competencies',
    explanation: 'Retraining and learning new competencies keeps a worker employable.',
  },
  {
    prompt: 'What does SAQA stand for?',
    options: ['South African Quality Assessment Agency', 'Southern Africa Quality Agency', 'South African Qualifications Authority', 'South African Question Authority'],
    answer: 'South African Qualifications Authority',
    explanation: 'SAQA is the South African Qualifications Authority, which looks after the NQF.',
  },
  {
    prompt: 'What does the NQF do?',
    options: ['It gives out jobs to the people who finish school', 'It ranks qualifications on 10 levels', 'It sets the salary for each occupation', 'It runs the schools in each province'],
    answer: 'It ranks qualifications on 10 levels',
    explanation: 'The National Qualifications Framework ranks qualifications from level 1 to level 10.',
  },
  {
    prompt: 'Matric is at NQF level 4 and a bachelor\'s degree is at level 7. How many levels higher is the degree?',
    options: ['3', '2', '4', '11'],
    answer: '3',
    explanation: '7 − 4 = 3 levels.',
  },
  {
    prompt: 'What is recognition of prior learning (RPL)?',
    options: ['A test that all learners write at the end of Grade 12', 'A loan to pay for the fees of a university', 'A list of the jobs that are scarce in the country', 'Credit for what you already know from work or life'],
    answer: 'Credit for what you already know from work or life',
    explanation: 'RPL recognises knowledge and skills that you already have, so you can get credit towards a qualification.',
  },
  {
    prompt: 'What does lifelong learning mean?',
    options: ['To study at school until you are eighteen', 'To learn only what is needed for your first job', 'To keep learning and retraining for life', 'To stop learning when you get a qualification'],
    answer: 'To keep learning and retraining for life',
    explanation: 'Lifelong learning is the ability and the habit to keep learning, retraining and developing.',
  },
  {
    prompt: 'A weekend first-aid workshop is an example of which kind of learning?',
    options: ['Formal learning', 'Non-formal learning', 'Informal learning', 'Accidental learning'],
    answer: 'Non-formal learning',
    explanation: 'Non-formal learning is organised, but it takes place outside the formal school and university system.',
  },
  {
    prompt: 'Watching a video tutorial to repair a bicycle is an example of which kind of learning?',
    options: ['Informal learning', 'Formal learning', 'Non-formal learning', 'Certificate learning'],
    answer: 'Informal learning',
    explanation: 'Informal learning takes place in daily life, for example by reading, watching tutorials or learning from friends.',
  },
];

const JobMarketLifelongLearning = () => (
  <CapsSubjectTopic
    title="Job Market Trends, Qualifications and Lifelong Learning"
    subtitle="Scarce skills, growing and declining work, SAQA and the NQF, and learning for life"
    learnSteps={learnSteps}
    task="gr10-job-market-lifelong-learning-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default JobMarketLifelongLearning;
