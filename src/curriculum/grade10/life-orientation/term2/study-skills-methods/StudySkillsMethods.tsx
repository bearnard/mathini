import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow, WeekBars } from '../../../../../components/diagrams/lo/PswPictures';
import { ProgressBars } from '../../../../../components/diagrams/lo/Lo4Pictures';
import { hoursOf, termMark, weeklyMinutes, yearMark, yearPercent } from '../../../../../components/diagrams/lo/gr10Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Every number below comes from gr10Helpers (tested in gr10Helpers.test.ts).
const terms = [termMark(60, 15), termMark(56, 14), termMark(64, 16), termMark(60, 15)];
const year = { total: yearMark(terms), pct: yearPercent(terms) };
const plan = { days: 5, minutes: 120, week: weeklyMinutes(5, 120) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Study skills',
    content: slide(
      <>
        <Rule>Study skills are habits that help you learn: listening, reading and comprehension (understanding what you read), concentration, memory, organisation and time management.</Rule>
        <Hub
          centre="Study skills"
          spokes={['Listening', 'Reading and comprehension', 'Concentration', 'Memory', 'Organisation', 'Time management']}
          aria="A hub with Study skills in the centre and six spokes: listening, reading and comprehension, concentration, memory, organisation and time management."
        />
        <Worked
          title="Preparing for a test"
          steps={[
            <>Concentration: put your phone out of reach.</>,
            <>Time management: study for 25 minutes, then take a 5-minute break.</>,
            <>Memory: close the book and write down what you remember.</>,
            <>Revise again after a day and after a week.</>,
          ]}
        />
        <Mistake>Reading your notes again and again. It feels like learning, but it does not test your memory. Test yourself instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'Study methods',
    content: slide(
      <>
        <Rule>Study methods turn information into something you can remember: note-taking (key words and headings, not whole sentences), mind-mapping (a diagram with the main idea in the centre and branches for related ideas), selecting the important concepts, constructing an assignment or essay, and making comparisons.</Rule>
        <StepFlow
          steps={['Plan the answer.', 'Introduction.', 'Body paragraphs.', 'Conclusion.', 'Check and list sources.']}
          aria="Five steps for constructing an assignment or essay: plan the answer, write an introduction, write body paragraphs, write a conclusion, then check it and list your sources."
        />
        <Worked
          title="Making a comparison"
          steps={[
            <>Draw two columns: prejudice and discrimination.</>,
            <>Similarity: both are unfair to people.</>,
            <>Difference: prejudice is an attitude, discrimination is an action.</>,
            <>A table like this shows you what is the same and what is different.</>,
          ]}
        />
        <Mistake>Copying whole sentences from a book into your notes or assignment. You do not learn from it, and you must acknowledge your sources.</Mistake>
      </>,
    ),
  },
  {
    title: 'Critical, creative and problem-solving skills',
    content: slide(
      <>
        <Rule>Critical thinking is judging information and ideas with evidence. Creative thinking is coming up with new ideas and options. Problem-solving uses both, in steps: define the problem, think of options, judge them, choose and act, and review.</Rule>
        <StepFlow
          steps={['Define the problem.', 'Think of options.', 'Judge each option.', 'Choose and act.', 'Review the result.']}
          aria="Five steps of problem-solving: define the problem, think of options, judge each option, choose and act, and review the result."
        />
        <Worked
          title="Load shedding cuts your study time"
          steps={[
            <>Problem: the power goes off every evening when you study.</>,
            <>Options (creative): study in daylight, use a rechargeable lamp, or study at the library.</>,
            <>Judge (critical): daylight costs nothing, and the library closes early.</>,
            <>Choose: study after school in daylight, and review in a week.</>,
          ]}
        />
        <Mistake>Believing that the first idea is always the best one. Compare options before you choose.</Mistake>
      </>,
    ),
  },
  {
    title: 'The process of assessment',
    content: slide(
      <>
        <Rule>Internal assessment is set, marked and recorded by the school&apos;s teachers, and it is moderated to keep standards fair. External assessment is set and marked outside the school. Life Orientation is assessed internally only.</Rule>
        <ProgressBars
          labels={['Term 1', 'Term 2', 'Term 3', 'Term 4']}
          values={terms}
          max={100}
          title="Term marks out of 100"
          aria={`Four term marks out of 100 for a Grade 10 learner: ${terms.join(', ')}.`}
        />
        <Worked
          title="A Grade 10 Life Orientation year mark"
          steps={[
            <>Each term mark is the task out of 80 plus the PET out of 20, so out of 100.</>,
            <>The four term marks are {terms.join(', ')}.</>,
            <>The year mark is {terms.join(' + ')} = {year.total} out of 400.</>,
            <>As a percentage: {year.total} ÷ 400 = {year.pct}%.</>,
          ]}
        />
        <Mistake>Thinking that an external examination is the only kind that counts. Internal tasks, tests and projects are formal assessment too, and they count towards your year mark.</Mistake>
      </>,
    ),
  },
  {
    title: 'Your annual study plan',
    content: slide(
      <>
        <Rule>An annual study plan shows the year at a glance. List your subjects and their assessment dates, plan a weekly timetable with fixed study slots, add time for revision, and review the plan each term.</Rule>
        <WeekBars
          days={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']}
          minutes={[plan.minutes, plan.minutes, plan.minutes, plan.minutes, plan.minutes]}
          aria="A study week with 120 minutes planned on each of five weekdays, Monday to Friday."
        />
        <Worked
          title="A weekly timetable"
          steps={[
            <>Study {plan.minutes} minutes on each of {plan.days} weekdays.</>,
            <>{plan.days} × {plan.minutes} = {plan.week} minutes a week.</>,
            <>{plan.week} minutes = {hoursOf(plan.week)} hours.</>,
            <>Put harder subjects and test dates first, and add a short break to every block.</>,
          ]}
        />
        <Mistake>Making a plan that ignores your test and exam dates, or one with no breaks and no time for revision. A plan only works if you can keep to it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name four study skills and say what comprehension means.</>,
          <>Give two study methods and explain how a comparison table helps.</>,
          <>What is the difference between internal and external assessment? Which one is Life Orientation?</>,
          <>A learner studies 120 minutes a day on 5 days. How many hours is that in a week?</>,
        ]}
        answers={[
          <>For example listening, concentration, memory and time management. Comprehension means understanding what you read.</>,
          <>For example note-taking and mind-mapping. A comparison table shows what is the same and what is different.</>,
          <>Internal assessment is set and marked by the school&apos;s teachers. External assessment is set and marked outside the school. Life Orientation is internal only.</>,
          <>{plan.week} minutes, which is {hoursOf(plan.week)} hours.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does comprehension mean when you study?',
    options: ['Reading a text as fast as you possibly can', 'Understanding what you read', 'Copying a text word for word into your notes', 'Reading a text aloud for a friend to hear'],
    answer: 'Understanding what you read',
    explanation: 'Comprehension is understanding what you read or hear, not only reading the words.',
  },
  {
    prompt: 'Which of these is a study skill?',
    options: ['Time management', 'Staying up late the night before a test', 'Waiting to see which topics are in the test', 'Asking a friend to do your work for you'],
    answer: 'Time management',
    explanation: 'Listening, reading, concentration, memory, organisation and time management are study skills.',
  },
  {
    prompt: 'Which habit best improves your concentration while you study?',
    options: ['Studying with the television on in the room', 'Checking your messages after each sentence', 'Studying in the busiest room in the house', 'Put your phone out of reach'],
    answer: 'Put your phone out of reach',
    explanation: 'Removing distractions, such as a phone, helps you to concentrate.',
  },
  {
    prompt: 'Which way of studying best tests your memory?',
    options: ['Reading your notes again and again without a break', 'Highlighting every sentence on the page in a bright colour', 'Close the book and write down what you remember', 'Copying the notes out neatly from the book'],
    answer: 'Close the book and write down what you remember',
    explanation: 'Testing yourself shows what you really remember, so it builds memory better than re-reading.',
  },
  {
    prompt: 'Good note-taking means that you:',
    options: ['Copy the whole page from the book into your notes', 'Write key words and headings, not whole sentences', 'Write down nothing and trust that you will remember', 'Only write the information that you already know'],
    answer: 'Write key words and headings, not whole sentences',
    explanation: 'Short notes with key words and headings are easier to review and remember.',
  },
  {
    prompt: 'What is a mind map?',
    options: ['A diagram of a main idea with branches', 'A map of the school that shows where each class is', 'A list of the marks that you got in each test', 'A timetable of the days on which you study'],
    answer: 'A diagram of a main idea with branches',
    explanation: 'A mind map shows a main idea in the centre and connects related ideas as branches.',
  },
  {
    prompt: 'A table with two columns of similarities and differences is used for:',
    options: ['Writing the conclusion of an essay', 'Planning a weekly study timetable', 'Listing the sources that you used', 'Making a comparison'],
    answer: 'Making a comparison',
    explanation: 'A comparison table shows what two things have in common and how they differ.',
  },
  {
    prompt: 'Which of these is the correct order for constructing an essay?',
    options: ['Conclusion, plan, body paragraphs, introduction, check sources', 'Introduction, conclusion, plan, check sources, body paragraphs', 'Plan, introduction, body paragraphs, conclusion, check sources', 'Body paragraphs, plan, introduction, check sources, conclusion'],
    answer: 'Plan, introduction, body paragraphs, conclusion, check sources',
    explanation: 'Plan first, then write the introduction, the body paragraphs and the conclusion, and finally check your work and list your sources.',
  },
  {
    prompt: 'What is critical thinking?',
    options: ['Finding fault with every idea that other people have', 'Judging information and ideas with evidence', 'Coming up with new and unusual ideas for a task', 'Accepting what you are told without any questions'],
    answer: 'Judging information and ideas with evidence',
    explanation: 'Critical thinking means judging information and ideas carefully, using evidence.',
  },
  {
    prompt: 'Which of these is the first step in problem-solving?',
    options: ['Define the problem', 'Choose the best option and act', 'Review the result', 'Judge each option'],
    answer: 'Define the problem',
    explanation: 'First you must be clear about what the problem is. Then you think of options, judge them, choose, act and review.',
  },
  {
    prompt: 'What is internal assessment?',
    options: ['Assessment that is set and marked outside the school', 'Assessment that the learner does at home without a teacher', 'Assessment that does not count towards the year mark', 'Assessment that the school\'s teachers set, mark and record'],
    answer: 'Assessment that the school\'s teachers set, mark and record',
    explanation: 'Internal assessment is done by the school\'s teachers. It is moderated to keep standards fair.',
  },
  {
    prompt: 'Which statement about Life Orientation assessment is correct?',
    options: ['It is set and marked outside the school', 'It is not assessed at all in Grade 10', 'It is assessed internally only', 'It is only assessed in the final year of school'],
    answer: 'It is assessed internally only',
    explanation: 'Life Orientation is the only subject that is not externally examined. Its formal tasks are internal.',
  },
  {
    prompt: 'In Grade 10 Life Orientation, each term mark is the task out of 80 plus the PET out of 20. What is a term mark out of?',
    options: ['80', '100', '20', '400'],
    answer: '100',
    explanation: '80 + 20 = 100. The four term marks add up to a year mark out of 400.',
  },
  {
    prompt: 'A learner studies for 120 minutes a day on 5 weekdays. How many hours is that in a week?',
    options: ['10 hours', '2 hours', '5 hours', '12 hours'],
    answer: '10 hours',
    explanation: '5 × 120 = 600 minutes, and 600 ÷ 60 = 10 hours.',
  },
];

const StudySkillsMethods = () => (
  <CapsSubjectTopic
    title="Study Skills and Study Methods"
    subtitle="Study habits, note-taking, thinking skills, the process of assessment and your study plan"
    learnSteps={learnSteps}
    task="gr10-study-skills-methods-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default StudySkillsMethods;
