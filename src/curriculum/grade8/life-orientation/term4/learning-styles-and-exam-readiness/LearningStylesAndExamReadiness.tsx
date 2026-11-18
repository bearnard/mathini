import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { RevisionGrid } from '../../../../../components/diagrams/lo/lo7Pictures';
import { assignBlocks, comma, minutesPerMark, minutesText } from '../../../../../components/diagrams/lo/lo7Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the pictures and examples come from these helpers (lo7Helpers.test.ts).
const plan = assignBlocks(['Maths', 'English', 'Natural Sciences'], 5, 2);
const BLOCK = 30;
const mathsMinutes = plan.counts[0].blocks * BLOCK;
const test = { minutes: 45, marks: 30, perMark: comma(minutesPerMark(45, 30)) };
const catchUp = assignBlocks(['Topic A', 'Topic B', 'Topic C', 'Topic D'], 3, 2);

export const learnSteps: LearnStep[] = [
  {
    title: 'A revision plan spreads the work',
    content: slide(
      <>
        <Rule>A revision plan spreads your learning over time and reduces panic. Divide your subjects into daily revision blocks, and include the difficult topics.</Rule>
        <RevisionGrid grid={plan.grid} subjects={plan.counts} aria={`A plan for five days with two blocks a day. Maths has ${plan.counts[0].blocks} blocks, English ${plan.counts[1].blocks} and Natural Sciences ${plan.counts[2].blocks}.`} />
        <Worked
          title="Five days, two blocks a day, three subjects"
          steps={[<>Blocks: 5 × 2 = {plan.total}.</>, <>Share them in turn: Maths {plan.counts[0].blocks}, English {plan.counts[1].blocks}, Natural Sciences {plan.counts[2].blocks}.</>, <>Each block is {BLOCK} minutes, so Maths gets {plan.counts[0].blocks} × {BLOCK} = {mathsMinutes} minutes, or {minutesText(mathsMinutes)}.</>]}
        />
        <Mistake>Leaving all your revision for one day, or studying only your favourite topics and skipping the difficult ones.</Mistake>
      </>,
    ),
  },
  {
    title: 'Notes and learning preferences',
    content: slide(
      <>
        <Rule>Summarise key points in your own words. Use the ways you learn best, such as pictures, listening or doing, and combine them with active practice.</Rule>
        <Hub centre="My revision" spokes={['Diagrams', 'Explain aloud', 'Practice questions', 'Summaries']} aria="A circle labelled My revision with four methods around it: diagrams, explaining aloud, practice questions and summaries." />
        <Worked
          title="Summarise a paragraph"
          steps={[<>Read: “Plants use sunlight, water and carbon dioxide to make glucose and release oxygen.”</>, <>Pick the key words: sunlight, water, carbon dioxide, glucose, oxygen.</>, <>Write your own short version: “Plants + light + water + CO₂ → glucose + oxygen.”</>]}
        />
        <Mistake>Copying pages without thinking, or using one method only and rejecting all others. A mix of methods works better.</Mistake>
      </>,
    ),
  },
  {
    title: 'Active recall and practice questions',
    content: slide(
      <>
        <Rule>Active recall means testing yourself without looking at your notes first. Practise past-style questions to improve your timing and find weak areas.</Rule>
        <StepFlow steps={['Close your notes.', 'Write what you remember.', 'Check against your notes.', 'Mark the gaps and revise them.']} aria="Four steps of active recall in order: close your notes, write what you remember, check against your notes, mark the gaps and revise them." />
        <Worked
          title={`A ${test.marks}-mark test in ${test.minutes} minutes`}
          steps={[<>Timing: {test.minutes} ÷ {test.marks} = {test.perMark} minutes for each mark.</>, <>A 4-mark question should take about 4 × {test.perMark} = {comma(4 * minutesPerMark(test.minutes, test.marks))} minutes.</>, <>If you run over, practise that type of question again.</>]}
        />
        <Mistake>Reading your notes once and thinking you know them. Reading feels easy. Testing yourself shows what you really remember.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stress and catching up',
    content: slide(
      <>
        <Rule>Manage exam stress by sleeping well, breathing calmly and following your plan. If you feel unprepared, make a simple catch-up plan and ask for help.</Rule>
        <StepFlow steps={['List the topics you still need.', 'Put the weakest first.', 'Plan short daily blocks.', 'Ask a teacher or classmate for help.']} aria="Four steps for catching up in order: list the topics you still need, put the weakest first, plan short daily blocks, ask a teacher or classmate for help." />
        <Worked
          title="Three days left and four topics"
          steps={[<>Blocks: 3 × 2 = {catchUp.total}.</>, <>Two topics get {catchUp.counts[0].blocks} blocks and two get {catchUp.counts[3].blocks}. Give the weakest topics the extra blocks.</>, <>Total study time: {catchUp.total} × {BLOCK} = {catchUp.total * BLOCK} minutes, or {minutesText(catchUp.total * BLOCK)}.</>]}
        />
        <Mistake>Cramming all night without breaks, or hiding your worries and doing nothing. Sleep, a plan and asking for help work better.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is the benefit of a revision plan?" answer="It spreads learning over time and reduces panic." />
        <Check question="What does active recall mean?" answer="Testing yourself without looking at your notes first." />
        <Check question="You have a 30-mark test in 45 minutes. How long can you spend on each mark?" answer={`${test.perMark} minutes for each mark (45 ÷ 30).`} />
        <Check question="You feel unprepared for a test. What should you do?" answer="Make a simple catch-up plan and ask for help." />
      </>,
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
    prompt: 'Why should you practise past-style questions?',
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
