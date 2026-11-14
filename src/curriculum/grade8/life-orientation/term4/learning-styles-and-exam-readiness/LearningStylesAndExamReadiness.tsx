import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Prepare with a revision system',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learning styles and exam readiness includes revision planning, note-making, memory techniques, and managing
          stress during assessment periods.
        </p>
      </div>
    ),
  },
  {
    title: 'Use time and stress management',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners perform better when they revise consistently, practise active recall, and use healthy routines
          before tests.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the benefit of a revision plan?',
    options: [
      'It spreads learning over time and reduces panic',
      'It removes the need for effort',
      'It guarantees full marks without practice',
      'It allows skipping difficult topics',
    ],
    answer: 'It spreads learning over time and reduces panic',
    explanation: 'Planned revision supports deeper understanding and confidence.',
  },
  {
    prompt: 'Which note-making method is most useful for revision?',
    options: [
      'Summarising key points in your own words',
      'Copying pages without thinking',
      'Using unrelated doodles only',
      'Avoiding notes entirely',
    ],
    answer: 'Summarising key points in your own words',
    explanation: 'Rewriting ideas helps memory and comprehension.',
  },
  {
    prompt: 'What does active recall mean?',
    options: ['Testing yourself without looking at notes first', 'Reading your notes once without testing yourself', 'Studying only on the night before', 'Skipping the practice questions'],
    answer: 'Testing yourself without looking at notes first',
    explanation: 'Active recall strengthens long-term memory retrieval.',
  },
  {
    prompt: 'Which strategy helps manage exam stress?',
    options: ['Sleep well, breathe calmly and follow your plan', 'Cram all night without any breaks', 'Avoid asking any questions of others', 'Assume that you will fail before you try'],
    answer: 'Sleep well, breathe calmly and follow your plan',
    explanation: 'Healthy routines and calm strategies improve focus.',
  },
  {
    prompt: 'Why should learners practise past-style questions?',
    options: [
      'To improve timing and identify weak areas',
      'To avoid understanding concepts',
      'To replace all classwork',
      'To memorise random answers',
    ],
    answer: 'To improve timing and identify weak areas',
    explanation: 'Practice under exam conditions builds readiness.',
  },
  {
    prompt: 'Which action shows good time management before exams?',
    options: [
      'Dividing subjects into daily revision blocks',
      'Leaving all revision for one day',
      'Studying only favourite topics',
      'Ignoring deadlines',
    ],
    answer: 'Dividing subjects into daily revision blocks',
    explanation: 'Small regular sessions are more effective than last-minute cramming.',
  },
  {
    prompt: 'How can a learner use learning preferences responsibly?',
    options: [
      'Combine preferred methods with active practice',
      'Use one method only and reject all others',
      'Skip challenging tasks',
      'Avoid feedback from teachers',
    ],
    answer: 'Combine preferred methods with active practice',
    explanation: 'Flexible strategy use leads to better results.',
  },
  {
    prompt: 'What should a learner do if they feel unprepared?',
    options: ['Make a simple catch-up plan and ask for help', 'Give up and stay away from school', 'Hide your worries and do nothing about them', 'Copy the work of your classmates'],
    answer: 'Make a simple catch-up plan and ask for help',
    explanation: 'Support plus structured action restores progress.',
  },
];

const LearningStylesAndExamReadiness = () => (
  <CapsSubjectTopic
    title="Learning Styles and Exam Readiness"
    subtitle="Revision planning, memory strategies, note-making, and stress management"
    learnSteps={learnSteps}
    task="gr8-learning-styles-and-exam-readiness-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default LearningStylesAndExamReadiness;
