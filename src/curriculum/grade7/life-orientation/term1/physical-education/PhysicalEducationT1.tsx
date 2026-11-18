import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, PlanBar, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { ProgressLine } from '../../../../../components/diagrams/lo/PePictures';
import { comma, targetTime } from '../../../../../components/diagrams/lo/peHelpers';
import { planSegments } from '../../../../../components/diagrams/lo/pswHelpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the slides come from these tested helpers (peHelpers.test.ts, pswHelpers.test.ts).
const baseline = 14.2;
const goalGain = 0.5;
const goalTime = targetTime(baseline, goalGain);
const lessonParts = [
  { label: 'Warm-up', minutes: 10, kind: 'break' as const },
  { label: 'Activity', minutes: 25, kind: 'study' as const },
  { label: 'Cool-down', minutes: 5, kind: 'break' as const },
];
const lessonTotal = planSegments(lessonParts).total;

export const learnSteps: LearnStep[] = [
  {
    title: 'Baseline fitness checks',
    content: slide(
      <>
        <Rule>A baseline fitness check measures your fitness at the start. You use it to set goals and to see your progress later.</Rule>
        <ProgressLine values={[baseline, goalTime]} firstLabel="Baseline" lastLabel="Goal" unit="s" aria={`A line chart: the 60 metre run time falls from the baseline of ${comma(baseline)} seconds to the goal of ${comma(goalTime)} seconds.`} />
        <Worked
          title="Thabo times a 60 m run"
          steps={[<>Test: he runs 60 m and records {comma(baseline)} s. This is his baseline.</>, <>Goal: improve by {comma(goalGain)} s. {comma(baseline)} − {comma(goalGain)} = {comma(goalTime)} s.</>, <>He trains safely, then repeats the test and compares.</>]}
        />
        <Mistake>Treating the baseline as a pass or fail mark. It is only your starting point, so you can set a realistic goal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safe warm-up and cool-down',
    content: slide(
      <>
        <Rule>A safe warm-up uses light jogging and dynamic stretches to raise your heart rate gradually. After vigorous activity, cool down with slow movement and controlled breathing.</Rule>
        <PlanBar parts={lessonParts} aria={`A PE lesson as a bar: ${lessonParts[0].minutes} minutes of warm-up, ${lessonParts[1].minutes} minutes of activity and ${lessonParts[2].minutes} minutes of cool-down, ${lessonTotal} minutes in total.`} />
        <Worked
          title="Plan a lesson"
          steps={[<>Warm-up: {lessonParts[0].minutes} min of jogging and dynamic stretches.</>, <>Activity: {lessonParts[1].minutes} min of the main task.</>, <>Cool-down: {lessonParts[2].minutes} min of slow walking and deep breaths.</>, <>Total: {lessonTotal} minutes.</>]}
        />
        <Mistake>Starting to sprint with cold muscles, or stopping suddenly when you finish. Warm up first and cool down after.</Mistake>
      </>,
    ),
  },
  {
    title: 'Movement and coordination',
    content: slide(
      <>
        <Rule>Locomotor movements travel from one place to another, such as running across the court. Coordination joins timing, control and body awareness, for example when you catch and pass with the right timing.</Rule>
        <Hub centre="Skill" spokes={['Timing', 'Control', 'Body awareness']} aria="A circle labelled Skill with three parts of coordination around it: timing, control and body awareness." />
        <Worked
          title="Catch and pass to a partner"
          steps={[<>Watch the ball all the way in.</>, <>Hands ready, reach out to meet it.</>, <>Step and pass at the moment your partner is ready.</>]}
        />
        <Mistake>Calling a movement locomotor when you stay in one spot, such as twisting on the spot. Locomotor movements travel.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cooperation and safe play',
    content: slide(
      <>
        <Rule>In group tasks, cooperate: take turns fairly and follow the rules. Support a partner with encouragement and clear cues. Safety routines reduce the risk of injury.</Rule>
        <StepFlow steps={['Check the space is clear.', 'Follow the rules of the task.', 'Encourage your partner and give clear cues.', 'Take turns fairly.']} aria="Four steps for a paired challenge in order: check the space is clear, follow the rules, encourage and give clear cues, take turns fairly." />
        <Worked
          title="A paired balance challenge"
          steps={[<>Clear the floor of bags and shoes.</>, <>Agree on the rules and who goes first.</>, <>Say “Good try, slow down” to your partner.</>, <>Swap places and repeat.</>]}
        />
        <Mistake>Laughing at a partner who struggles, or skipping the safety check to save time. That harms confidence and risks injury.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Why do learners complete a baseline fitness check?" answer="To measure starting fitness and set goals." />
        <Check question="Name two things in a safe warm-up, and say what to do after vigorous activity." answer="Light jogging and dynamic stretches. After vigorous activity, do a cool-down with controlled breathing." />
        <Check question="Is running across the court locomotor? Which action shows coordination?" answer="Yes, it travels from one place to another. Catching and passing with correct timing shows coordination." />
        <Check question="Give two ways to show cooperation and support in a paired challenge." answer="Take turns fairly and follow the rules. Encourage your partner and give clear cues." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Why do you do a baseline fitness check?',
    options: [
      'To measure starting fitness and set goals',
      'To replace all physical activity',
      'To compete for final exam marks only',
      'To skip warm-up and cool-down',
    ],
    answer: 'To measure starting fitness and set goals',
    explanation: 'Baseline data helps learners plan realistic and safe improvement.',
  },
  {
    prompt: 'Which activity is part of a safe warm-up?',
    options: ['Light jogging and dynamic stretches', 'Sprinting at full speed immediately', 'Sitting and waiting for class to end', 'Ignoring any movement instructions'],
    answer: 'Light jogging and dynamic stretches',
    explanation: 'Warm-ups gradually increase heart rate and prepare muscles for activity.',
  },
  {
    prompt: 'Which action best shows coordination?',
    options: ['Catching and passing with correct timing', 'Standing still for the whole lesson', 'Shouting without moving', 'Running into other learners'],
    answer: 'Catching and passing with correct timing',
    explanation: 'Coordination combines timing, control, and body awareness.',
  },
  {
    prompt: 'Which movement is locomotor?',
    options: ['Running across the court', 'Balancing on one foot in place', 'Stretching arms while seated', 'Twisting your torso without travelling'],
    answer: 'Running across the court',
    explanation: 'Locomotor movements travel from one place to another.',
  },
  {
    prompt: 'How can you support a partner during a paired challenge?',
    options: [
      'Encourage them and give clear cues',
      'Laugh when they make mistakes',
      'Take over so they do not practise',
      'Ignore all team instructions',
    ],
    answer: 'Encourage them and give clear cues',
    explanation: 'Supportive communication improves confidence and performance.',
  },
  {
    prompt: 'Why are safety routines important in PE?',
    options: [
      'They reduce injury risk during activity',
      'They make learners move less',
      'They remove the need for teamwork',
      'They replace all practice drills',
    ],
    answer: 'They reduce injury risk during activity',
    explanation: 'Safety routines protect learners and keep lessons productive.',
  },
  {
    prompt: 'Which behaviour shows cooperation in group tasks?',
    options: ['Taking turns fairly and following rules', 'Refusing to pass to teammates', 'Changing rules to win unfairly', 'Arguing with every instruction'],
    answer: 'Taking turns fairly and following rules',
    explanation: 'Cooperation requires fairness, shared effort, and respect.',
  },
  {
    prompt: 'What should happen after vigorous PE activity?',
    options: ['A cool-down with controlled breathing', 'Immediate full-speed sprint repeats', 'No water for the rest of the day', 'Pushing through pain without reporting it'],
    answer: 'A cool-down with controlled breathing',
    explanation: 'Cool-down helps the body recover safely after exercise.',
  },
];

const PhysicalEducationT1 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Fitness baselines, movement patterns, coordination, and cooperation"
    learnSteps={learnSteps}
    task="gr7-physical-education-t1"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PhysicalEducationT1;
