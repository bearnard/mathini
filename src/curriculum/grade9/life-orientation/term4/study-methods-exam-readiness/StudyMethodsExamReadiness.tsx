import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { CountBars, PhaseBar, TimeBar } from '../../../../../components/diagrams/lo/Lo11Pictures';
import { examPlan, perEvening } from '../../../../../components/diagrams/lo/lo11Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the slides come from these helpers (lo11Helpers.test.ts).
const paper = { minutes: 90, marks: 60, read: 15, check: 15, sections: [20, 40] };
const exam = examPlan(paper.minutes, paper.marks, paper.read, paper.check, paper.sections);
const topics = { count: 8, evenings: 4 };
const share = perEvening(topics.count, topics.evenings);

export const learnSteps: LearnStep[] = [
  {
    title: 'Exam technique: read, plan, answer, check',
    content: slide(
      <>
        <Rule>Exam technique is how you handle an exam: read the questions carefully, plan, answer fully and check your work. Careful reading makes sure you answer what is actually asked.</Rule>
        <StepFlow steps={['Read each question carefully.', 'Plan your answer.', 'Answer fully.', 'Check your work.']} aria="Four exam steps in order: read each question carefully, plan your answer, answer fully, check your work." />
        <Worked
          title={`“Give TWO causes and explain ONE” (4 marks)`}
          steps={[<>Underline the number: two causes.</>, <>Underline the instruction: explain one.</>, <>Write both causes, then explain one of them.</>, <>Check you gave two causes and one explanation.</>]}
        />
        <Mistake>Guessing what a question means, rushing, or leaving a hard question blank. Checking catches careless errors, and copying from a neighbour is cheating.</Mistake>
      </>,
    ),
  },
  {
    title: 'Managing your time in the exam',
    content: slide(
      <>
        <Rule>Share your time by marks. Keep some minutes aside to read and to check, then give each section time in proportion to its marks.</Rule>
        <TimeBar title={`${paper.minutes} minutes in total`} parts={[{ label: 'Read', minutes: paper.read, kind: 'rest' }, { label: 'Section A', minutes: exam.sections[0], kind: 'work' }, { label: 'Section B', minutes: exam.sections[1], kind: 'work' }, { label: 'Check', minutes: paper.check, kind: 'rest' }]} aria={`A ${paper.minutes} minute paper as a bar: ${paper.read} minutes to read, ${exam.sections[0]} for Section A, ${exam.sections[1]} for Section B and ${paper.check} to check.`} />
        <Worked
          title={`A ${paper.marks}-mark paper in ${paper.minutes} minutes (example)`}
          steps={[<>Keep {paper.read} minutes to read and {paper.check} to check.</>, <>Answering time: {paper.minutes} − {paper.read} − {paper.check} = {exam.answering} minutes.</>, <>{exam.answering} ÷ {paper.marks} marks = {exam.perMark} minute per mark.</>, <>Section A ({paper.sections[0]} marks) gets {exam.sections[0]} minutes. Section B ({paper.sections[1]} marks) gets {exam.sections[1]}.</>]}
        />
        <Mistake>Spending most of the time on one question. Keep to your plan and move on.</Mistake>
      </>,
    ),
  },
  {
    title: 'Revision schedules and sleep',
    content: slide(
      <>
        <Rule>A revision schedule spreads your revision over time so that every topic is covered. Sleep restores your memory and concentration, so it is part of studying.</Rule>
        <CountBars labels={['Mon', 'Tue', 'Wed', 'Thu']} values={Array.from({ length: topics.evenings }, () => share.each)} unit="topics revised" aria={`Four bars, one for each evening from Monday to Thursday, showing ${share.each} topics each, ${topics.count} topics in total.`} />
        <Worked
          title={`${topics.count} topics and ${topics.evenings} evenings`}
          steps={[<>Share the topics equally: {topics.count} ÷ {topics.evenings} = {share.each} topics each evening.</>, <>Write the plan in a timetable.</>, <>Go to bed on time so your brain can store what you learned.</>]}
        />
        <Mistake>Cramming everything into the last night, or staying up late to study more. A plan spread over days and a good night's sleep work better.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stress control and exam anxiety',
    content: slide(
      <>
        <Rule>Stress control means managing stress with exercise, relaxation and healthy habits. Feeling nervous before an exam is normal. Preparation, practice, breathing and positive thinking reduce exam anxiety.</Rule>
        <StepFlow steps={['Breathe in slowly.', 'Breathe out slowly.', 'Repeat a few times.', 'Think: I have prepared.']} aria="Four steps to calm exam nerves in order: breathe in slowly, breathe out slowly, repeat a few times, think I have prepared." />
        <Worked
          title="Your heart is racing as the paper is handed out"
          steps={[<>Notice it: this is normal.</>, <>Breathe slowly a few times.</>, <>Read the paper and start with a question you know.</>, <>Tell yourself: I have prepared for this.</>]}
        />
        <Mistake>Avoiding exams so you never feel anxious, or pushing stress down and never speaking about it. Talk to someone and use a calm routine.</Mistake>
      </>,
    ),
  },
  {
    title: 'Getting ready for Grade 10 (FET)',
    content: slide(
      <>
        <Rule>The FET phase (Further Education and Training) is Grades 10 to 12. Start building good study habits, time management and subject knowledge now, in Grade 9.</Rule>
        <PhaseBar aria="Grades 7 to 12 in a row. Grades 7, 8 and 9 are the Senior Phase. Grades 10, 11 and 12 are the FET phase." />
        <Worked
          title="Sipho prepares in Grade 9"
          steps={[<>Fix a regular study time.</>, <>Use a planner for tests and tasks.</>, <>Revise the subjects he finds hard.</>, <>Ask for support early.</>]}
        />
        <Mistake>Expecting Grade 10 to be the same as Grade 9 and waiting for school to guide you. Habits you build now carry into FET.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is exam technique, and why read each question carefully?" answer="How you handle an exam: reading, answering fully and checking. Careful reading shows exactly what is being asked." />
        <Check question="In the example paper, how many minutes does a 20-mark section get?" answer={`${exam.sections[0]} minutes. The paper gives ${exam.perMark} minute per mark once reading and checking time are kept aside.`} />
        <Check question="What is a revision schedule, and how does sleep help?" answer="A plan that spreads revision over time to cover all topics. Sleep restores memory and concentration." />
        <Check question="Which grades are the FET phase, and how do you prepare for Grade 10?" answer="Grades 10 to 12. Build good study habits, time management and subject knowledge now." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is exam technique?',
    options: ['Studying hard before the exam starts, then stopping', 'How you handle exams: reading, answering fully and checking', 'A skill that is needed for maths papers only', 'A skill that matters less than what you know'],
    answer: 'How you handle exams: reading, answering fully and checking',
    explanation: 'Good technique helps you perform better on exams.',
  },
  {
    prompt: 'Why should you read exam questions carefully?',
    options: ['It wastes time that is needed to write the answers', 'To understand exactly what is being asked', 'It is not needed if you have studied well', 'Guess what the question means and move on'],
    answer: 'To understand exactly what is being asked',
    explanation: 'Careful reading prevents mistakes and ensures you answer the right question.',
  },
  {
    prompt: 'What is a revision schedule?',
    options: ['A plan that is not needed if you attend class', 'A plan that spreads revision over time to cover all topics', 'A plan to cram all the work in the last night', 'A plan that picks the topics to study by chance'],
    answer: 'A plan that spreads revision over time to cover all topics',
    explanation: 'Systematic revision improves retention and coverage.',
  },
  {
    prompt: 'How does sleep affect exam performance?',
    options: ['It does not, as the work that you learned stays fixed', 'Sleep restores memory and concentration', 'It wastes time that is better used for more study', 'It is not relevant, since only study time counts'],
    answer: 'Sleep restores memory and concentration',
    explanation: 'Sleep is essential for learning and cognitive function.',
  },
  {
    prompt: 'What is stress control?',
    options: ['Avoiding every situation that could cause stress', 'Managing stress through exercise, relaxation and healthy habits', 'A skill that only weak people need to learn', 'Pushing stress down and never speaking about it'],
    answer: 'Managing stress through exercise, relaxation and healthy habits',
    explanation: 'Healthy stress management improves performance and wellbeing.',
  },
  {
    prompt: 'Why is checking your work before submitting important?',
    options: ['It is not needed if you answer in the first draft', 'To catch mistakes and make sure your answers are complete', 'It wastes time that is needed for other questions', 'It is not possible once you have handed in the paper'],
    answer: 'To catch mistakes and make sure your answers are complete',
    explanation: 'Checking prevents careless errors that cost marks.',
  },
  {
    prompt: 'What should you do during the exam?',
    options: ['Rush through to finish the paper in half the time', 'Work with a plan: read, plan, answer and check', 'Panic if a question looks hard and leave it blank', 'Copy from the learner next to you who looks sure'],
    answer: 'Work with a plan: read, plan, answer and check',
    explanation: 'A strategic approach maximizes your marks.',
  },
  {
    prompt: 'How can you reduce exam anxiety?',
    options: ['You cannot, as anxiety before an exam is normal', 'Through preparation, practice, breathing and positive thinking', 'Accept it and carry on, as it will not change', 'Avoid the exams so that you never feel anxious'],
    answer: 'Through preparation, practice, breathing and positive thinking',
    explanation: 'Good preparation and healthy thinking reduce anxiety.',
  },
  {
    prompt: 'What is the FET phase?',
    options: ['Grade 1-3', 'Grade 4-6', 'Grade 7-9', 'Grade 10-12'],
    answer: 'Grade 10-12',
    explanation: 'The Further Education and Training phase includes Grades 10, 11, and 12.',
  },
  {
    prompt: 'How should you prepare for Grade 10?',
    options: ['No preparation is needed, as school will guide you', 'Build good study habits, time management and subject knowledge now', 'Study harder than before, but in the same way', 'Expect it to be the same as Grade 9, so wait'],
    answer: 'Build good study habits, time management and subject knowledge now',
    explanation: 'Grade 10 preparation begins with current habits and effort.',
  },
];

const StudyMethodsExamReadiness = () => (
  <CapsSubjectTopic
    title="Study Methods and Exam Readiness"
    subtitle="Preparing for tests and the FET phase"
    learnSteps={learnSteps}
    task="gr9-study-methods-exam-readiness-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default StudyMethodsExamReadiness;
