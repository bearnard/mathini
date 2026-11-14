import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Exam Technique and Time Management',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Exam technique</strong> is how you approach tests—reading carefully, answering completely, and checking your work.
          Good <strong>time management</strong> helps you handle both study and exams effectively.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">How you prepare and handle exams significantly affects your performance.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Revision Schedules and Stress Control',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Revision schedules</strong> help you prepare systematically. <strong>Stress control</strong> includes relaxation, exercise, and sleep.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Revision</strong>
            <p className="text-slate-600">Plan, practise, review.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Stress management</strong>
            <p className="text-slate-600">Sleep, exercise, relax.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Preparing for the FET Phase',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 10 begins the <strong>FET phase</strong> (Further Education and Training).
          Success here requires strong habits, time management, and commitment to your goals.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">End-of-year and beyond:</p>
          <p className="text-slate-600">Build on your current efforts, maintain discipline, and keep your goals in focus.</p>
        </div>
      </div>
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
