import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { CountBars } from '../../../../../components/diagrams/lo/Lo11Pictures';
import { barHeights, change } from '../../../../../components/diagrams/lo/lo11Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the slides come from these helpers (lo11Helpers.test.ts).
const situps = change(18, 26);
const sessions = [8, 9, 7, 10];
const target = { passes: 12 };
const sessionTotal = barHeights(sessions).total;

export const learnSteps: LearnStep[] = [
  {
    title: 'Fitness review',
    content: slide(
      <>
        <Rule>A fitness review means checking your fitness and your progress over time. Test the same thing in the same way each time, then compare.</Rule>
        <CountBars labels={['Term 1', 'Term 4']} values={[situps.from, situps.to]} unit="sit-ups" title="Sit-ups in one minute" aria={`Two bars comparing the same sit-up test: ${situps.from} in Term 1 and ${situps.to} in Term 4.`} />
        <Worked
          title="Compare two sit-up tests"
          steps={[<>Term 1: {situps.from} sit-ups in one minute.</>, <>Term 4: {situps.to} sit-ups in one minute.</>, <>Change: {situps.to} − {situps.from} = {situps.diff} more. Your fitness has improved.</>]}
        />
        <Mistake>Thinking a review is only for athletes, or not needed because you feel fit. A review shows your progress, not just how you feel.</Mistake>
      </>,
    ),
  },
  {
    title: 'An active lifestyle and sustained participation',
    content: slide(
      <>
        <Rule>An active lifestyle makes physical activity a regular part of your life. It supports lifelong health and wellbeing. Sustained participation means taking part steadily over time, even through setbacks.</Rule>
        <Worked
          title="Nomsa's team loses a big match"
          steps={[<>The setback hurts, and she feels like stopping.</>, <>She remembers why she plays: fitness and friends.</>, <>She goes to the next practice.</>, <>Steady involvement builds her fitness and her character.</>]}
        />
        <Mistake>Taking part only when it is easy, or stopping after a setback and starting again next year. An active lifestyle is for everyone, not only for young people or athletes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Game application and personal targets',
    content: slide(
      <>
        <Rule>Game application means using your skills in real game situations, not only in practice. A personal target is a fitness or skill goal that you set for yourself. A good target is specific, achievable and relevant to your needs.</Rule>
        <StepFlow steps={['Practise the skill.', 'Use it in a real game.', 'Check how it went.', 'Set your next target.']} aria="Four steps in order: practise the skill, use it in a real game, check how it went, set your next target." />
        <Worked
          title="Setting a target for passing"
          steps={[<>Skill: passing the ball to a team mate.</>, <>Use it: count your successful passes in a match.</>, <>Target: {target.passes} successful passes in a match by the end of the term.</>, <>Set a new target each term.</>]}
        />
        <Mistake>A wish with no date or measure, such as “be better”, or letting the coach set every target. Set your own, and make it specific.</Mistake>
      </>,
    ),
  },
  {
    title: 'Participation records and year-end reflection',
    content: slide(
      <>
        <Rule>Participation records track your involvement and show progress and patterns. Self-evaluation means judging your own effort, progress and growth honestly. At year end, review your records, celebrate wins, name challenges and plan ahead.</Rule>
        <CountBars labels={['T1', 'T2', 'T3', 'T4']} values={sessions} unit="sessions in the year" aria={`Four bars of sessions attended in each term: ${sessions.join(', ')}, ${sessionTotal} in total.`} />
        <Worked
          title="Read the record"
          steps={[<>Sessions per term: {sessions.join(', ')}.</>, <>Total: {sessionTotal} sessions.</>, <>Pattern: Term 3 was the lowest, with {sessions[2]}.</>, <>Plan: find out why and fix it next year.</>]}
        />
        <Mistake>Reflecting only if you won a prize, or forgetting the year and starting afresh. Look honestly at your effort, whatever the result.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is a fitness review, and why does it matter?" answer="Checking your fitness and your progress over time. It shows how much you have improved." />
        <Check question="What does sustained participation mean?" answer="Taking part steadily over time, even through setbacks." />
        <Check question="Explain game application and give the qualities of a good personal target." answer="Game application is using your skills in real game situations. A good target is specific, achievable and relevant, and you set it regularly, for example every term." />
        <Check question="Why keep participation records, and what do you do at year end?" answer="To track your involvement and see progress and patterns. Review the records, celebrate wins, name challenges and plan ahead." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a fitness review?',
    options: ['A task that is not needed if you feel fit', 'Checking your fitness and your progress over time', 'A test that only athletes need to write', 'A waste of time, since fitness shows by itself'],
    answer: 'Checking your fitness and your progress over time',
    explanation: 'Reviews help you understand your fitness level and growth.',
  },
  {
    prompt: 'Why is an active lifestyle important?',
    options: ['It matters for young people and not for adults', 'Regular activity supports lifelong health and wellbeing', 'It matters at school during sport periods only', 'It matters for athletes and not for others'],
    answer: 'Regular activity supports lifelong health and wellbeing',
    explanation: 'Active lifestyles prevent disease and promote happiness.',
  },
  {
    prompt: 'What does game application mean?',
    options: ['Practising your skills on your own in training', 'Using your skills in real game situations', 'Using skills in training sessions only', 'A step that does not matter once skills are learned'],
    answer: 'Using your skills in real game situations',
    explanation: 'Game application tests and develops your skills.',
  },
  {
    prompt: 'What are personal targets?',
    options: ['Goals that are not needed in sport', 'Fitness or skill goals that you set for yourself', 'Goals that only the winning players set', 'Goals that are given to you by your coach'],
    answer: 'Fitness or skill goals that you set for yourself',
    explanation: 'Personal targets motivate and guide your training.',
  },
  {
    prompt: 'Why keep participation records?',
    options: ['They are not helpful, as you remember what you did', 'To track your involvement and see progress and patterns', 'They are too much work to keep up each week', 'They are not relevant to how well you play'],
    answer: 'To track your involvement and see progress and patterns',
    explanation: 'Records provide evidence of effort and growth.',
  },
  {
    prompt: 'What is self-evaluation?',
    options: ['Comparing your results with those of other learners', 'Honestly judging your own effort, progress and growth', 'A step that is too hard to do honestly', 'A step that is not needed if a teacher marks you'],
    answer: 'Honestly judging your own effort, progress and growth',
    explanation: 'Self-evaluation builds self-awareness and accountability.',
  },
  {
    prompt: 'How often should you set personal targets?',
    options: ['Once a year, at the end of the school year', 'Regularly, such as every quarter or term', 'Never, as the coach sets all your targets', 'Only when your results begin to fall'],
    answer: 'Regularly, such as every quarter or term',
    explanation: 'Regular targets keep motivation and focus high.',
  },
  {
    prompt: 'What makes a good personal target?',
    options: ['Any goal that sounds good when you say it', 'Specific, achievable and relevant to your needs', 'A goal that is very hard, so that you must stretch', 'A wish that is not tied to a date or a measure'],
    answer: 'Specific, achievable and relevant to your needs',
    explanation: 'Good targets are clear and realistic.',
  },
  {
    prompt: 'How should you reflect on your year of physical activity?',
    options: ['No reflection is needed once the year is over', 'Review records, celebrate wins, name challenges and plan ahead', 'Forget the year and begin a new one afresh', 'Reflect only if you won a prize or a medal'],
    answer: 'Review records, celebrate wins, name challenges and plan ahead',
    explanation: 'Reflection guides continuous improvement.',
  },
  {
    prompt: 'What does sustained participation mean?',
    options: ['Taking part only now and then, when you feel like it', 'Steady involvement over time, even through setbacks', 'Taking part when it is easy and stopping when it is hard', 'Stopping after a setback and starting again next year'],
    answer: 'Steady involvement over time, even through setbacks',
    explanation: 'Sustained participation builds fitness and character.',
  },
];

const PhysicalEducationTask4 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 4"
    subtitle="Fitness review, personal goals, and lifelong activity"
    learnSteps={learnSteps}
    task="gr9-physical-education-task-4-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask4;
