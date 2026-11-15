import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow, WeekBars } from '../../../../../components/diagrams/lo/PswPictures';
import { SessionBar } from '../../../../../components/diagrams/lo/Lo9Pictures';
import { BUILD_UP, SESSION, buildUpTotal, sessionPlan } from '../../../../../components/diagrams/lo/lo9Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers in the pictures and slides come from lo9Helpers (tested in lo9Helpers.test.ts).
const session = sessionPlan();
const buildUp = buildUpTotal();

export const learnSteps: LearnStep[] = [
  {
    title: 'Sport skills and technique',
    content: slide(
      <>
        <Rule>Sport skills are the techniques and movements of each sport. Good technique improves your performance and helps prevent injury.</Rule>
        <StepFlow steps={['Hands behind the ball, fingers spread.', 'Hold the ball at your chest.', 'Step forward and push through your arms.', 'Aim at your teammate\'s chest.']} aria="Four steps of a netball chest pass in order: hands behind the ball with fingers spread, hold at the chest, step forward and push through the arms, aim at a teammate's chest." />
        <Worked
          title="Learn a chest pass, then use it in a game"
          steps={[<>Practise the four steps slowly with a partner.</>, <>Focus on technique before speed.</>, <>In a game, watch where the defenders stand.</>, <>Adapt: pass to the open teammate.</>]}
        />
        <Mistake>Playing fast with poor technique. You build bad habits and risk injury. Practise the technique first, then add speed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Endurance and flexibility',
    content: slide(
      <>
        <Rule>Endurance is the ability to keep going in an activity for a long time. Flexibility is your range of movement, and it helps prevent injury.</Rule>
        <WeekBars days={BUILD_UP.days} minutes={BUILD_UP.minutes} aria="Three bars for Monday, Wednesday and Friday showing easy running of 15, 20 and 25 minutes, 60 minutes in the week." />
        <Worked
          title="Build endurance a little at a time"
          steps={[<>Monday: run easily for {BUILD_UP.minutes[0]} minutes.</>, <>Wednesday: {BUILD_UP.minutes[1]} minutes.</>, <>Friday: {BUILD_UP.minutes[2]} minutes.</>, <>Total: {BUILD_UP.minutes.join(' + ')} = {buildUp} minutes. Stretch gently after each run.</>]}
        />
        <Mistake>Thinking flexibility only matters for gymnasts. Every sport uses your range of movement, so everyone should stretch regularly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fair play and staying safe',
    content: slide(
      <>
        <Rule>Fair play means following the rules and respecting all players. To stay safe in competitive sport, use good technique, follow the rules, warm up and cool down.</Rule>
        <SessionBar aria="One practice as a bar: 10 minutes warm-up, 20 minutes skills, 25 minutes game and 5 minutes cool-down, 60 minutes in total." />
        <Worked
          title="Plan a safe practice"
          steps={[<>Warm-up: {SESSION[0].minutes} minutes.</>, <>Skills: {SESSION[1].minutes} minutes.</>, <>Game: {SESSION[2].minutes} minutes, played by the rules.</>, <>Cool-down: {SESSION[3].minutes} minutes. Total: {session.total} minutes.</>]}
        />
        <Mistake>Skipping the warm-up and cool-down, or breaking the rules to win. Fair play respects the other players as well as your own team.</Mistake>
      </>,
    ),
  },
  {
    title: 'Recreation, competition and injuries',
    content: slide(
      <>
        <Rule>Recreational activity is activity you do for fun and health, not to win. Competition builds skills, motivation and personal growth.</Rule>
        <StepFlow steps={['Stop playing.', 'Check the injury.', 'Tell your teacher or coach.', 'Get medical help if needed.']} aria="Four steps if you are injured in sport, in order: stop playing, check the injury, tell your teacher or coach, get medical help if needed." />
        <Worked
          title="Neo twists an ankle in a match"
          steps={[<>She stops playing at once.</>, <>She checks the ankle: it hurts to stand on it.</>, <>She tells the coach.</>, <>She gets medical help before she plays again.</>]}
        />
        <Mistake>Playing on through pain so you do not let the team down. A small injury can become a serious one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Why is proper technique important in sport?" answer="It improves performance and prevents injury." />
        <Check question="What is the difference between endurance and flexibility?" answer="Endurance is the ability to keep going for a long time. Flexibility is your range of movement, and it helps prevent injury." />
        <Check question="Name three things that keep you safe in competitive sport." answer="Any three of: good technique, following the rules, warming up, cooling down." />
        <Check question="You are injured during a match. What do you do?" answer="Stop, check the injury and get medical help if needed." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What are sport skills?',
    options: ['Running fast, which is the skill in every sport', 'The techniques and movements of each sport', 'Skills that only professional players need to learn', 'Skills that matter little to enjoying a sport'],
    answer: 'The techniques and movements of each sport',
    explanation: 'Sports skills are learned techniques that improve performance and safety.',
  },
  {
    prompt: 'Why is proper technique important in sport?',
    options: ['It matters only in competitions, not in practice', 'It improves performance and prevents injury', 'It is not needed if you are strong and fit', 'It slows down your play and makes the game boring'],
    answer: 'It improves performance and prevents injury',
    explanation: 'Good technique is efficient, effective, and safe.',
  },
  {
    prompt: 'What is endurance?',
    options: ['The ability to lift a heavy load for one short time', 'The ability to keep going in an activity for a long time', 'The ability to bend and stretch the body freely', 'The ability to react fast to a signal or sound'],
    answer: 'The ability to keep going in an activity for a long time',
    explanation: 'Endurance is cardiovascular and muscular stamina developed through training.',
  },
  {
    prompt: 'Why is flexibility important?',
    options: ['It lets you lift heavier weights than other people can', 'It improves your range of movement and prevents injury', 'It is needed by dancers and gymnasts but not others', 'It raises your heart rate more than running does'],
    answer: 'It improves your range of movement and prevents injury',
    explanation: 'Flexibility supports all physical activities and reduces injury risk.',
  },
  {
    prompt: 'What is fair play?',
    options: ['Winning the game by any means that you can', 'Following the rules and respecting all players', 'Being kind to your team but not to the other team', 'Breaking a rule if the referee does not see it'],
    answer: 'Following the rules and respecting all players',
    explanation: 'Fair play is central to good sportsmanship and healthy competition.',
  },
  {
    prompt: 'How do you maintain safety in competitive sport?',
    options: ['Rely on luck, since injuries cannot be prevented', 'Use good technique, follow rules, warm up and cool down', 'Play hard and fast at all times to get ahead', 'Carry on playing when a referee gives a warning'],
    answer: 'Use good technique, follow rules, warm up and cool down',
    explanation: 'Safety practices are essential even in competitive contexts.',
  },
  {
    prompt: 'What is recreational activity?',
    options: ['Activity done only at school during sport periods', 'Activity that you do for fun and health, not to win', 'Activity that is too easy to count as real exercise', 'Activity that has no value, as it is not competitive'],
    answer: 'Activity that you do for fun and health, not to win',
    explanation: 'Recreation builds fitness and lifetime enjoyment of physical activity.',
  },
  {
    prompt: 'How does competition benefit participants?',
    options: ['It does not help, as only the winners learn', 'It builds skills, motivation and personal growth', 'It benefits only the winners and no other players', 'It harms players because they feel pressure to win'],
    answer: 'It builds skills, motivation and personal growth',
    explanation: 'Competition, when fair and healthy, drives improvement and development.',
  },
  {
    prompt: 'What should you do if injured during sport?',
    options: ['Keep playing, since the pain will soon go away', 'Stop, check the injury and get medical help if needed', 'Play through the pain to help your team win the match', 'Hide the injury so that you are not taken off'],
    answer: 'Stop, check the injury and get medical help if needed',
    explanation: 'Stopping and getting help prevents minor injuries from becoming serious.',
  },
  {
    prompt: 'How can you apply sport skills in game play?',
    options: ['By waiting for the game, as skills cannot be learned', 'By practising, focusing on technique and adapting to the game', 'By using skills in training only and not in matches', 'By assuming that skills do not carry over to games'],
    answer: 'By practising, focusing on technique and adapting to the game',
    explanation: 'Practised skills become automatic in game situations with experience.',
  },
];

const PhysicalEducationTask2 = () => (
  <CapsSubjectTopic
    title="Physical Education Task — Term 2"
    subtitle="Sport skills, competitive and recreational activity"
    learnSteps={learnSteps}
    task="gr9-physical-education-task-2-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask2;
