import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare } from '../../../../../components/diagrams/lo/Lo9Pictures';
import { ProgressBars } from '../../../../../components/diagrams/lo/Lo4Pictures';
import { gain } from '../../../../../components/diagrams/lo/gr10Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The archery log is a worked example. The improvement comes from gr10Helpers (tested in gr10Helpers.test.ts).
const arrows = [4, 5, 6, 7];
const better = gain(arrows[0], arrows[arrows.length - 1]);

export const learnSteps: LearnStep[] = [
  {
    title: 'Traditional and non-traditional sport',
    content: slide(
      <>
        <Rule>Traditional sports are well-known sports that are widely played and organised in your community or school. Non-traditional sports are less common there. Both build fitness, skills and teamwork, and you can enjoy both.</Rule>
        <Compare
          left={{ title: 'Traditional', items: ['Soccer', 'Netball', 'Athletics'] }}
          right={{ title: 'Non-traditional', items: ['Archery', 'Ultimate frisbee', 'Orienteering'] }}
          aria="Two columns of sports. Traditional: soccer, netball, athletics. Non-traditional: archery, ultimate frisbee, orienteering."
        />
        <Worked
          title="Trying a new sport"
          steps={[
            <>Your school has a soccer team but no archery club.</>,
            <>Archery is non-traditional at your school.</>,
            <>You try it at a community club and learn aim, focus and patience.</>,
            <>You can then bring these skills back to your other sports.</>,
          ]}
        />
        <Mistake>Thinking that only well-known sports are worth playing. A new or unusual sport can build skills and confidence, and give you a place to shine.</Mistake>
      </>,
    ),
  },
  {
    title: 'Skills, rules and tactics',
    content: slide(
      <>
        <Rule>To learn a sport, start with the basic skills, then learn the rules, then tactics such as positions and plans, and keep building your fitness. Record your performance and ask for feedback.</Rule>
        <ProgressBars
          labels={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
          values={arrows}
          max={10}
          title="Arrows in the target out of 10"
          aria={`Arrows in the target out of 10 over four weeks: ${arrows.join(', ')}.`}
        />
        <Worked
          title="An archery practice log"
          steps={[
            <>Week 1: {arrows[0]} out of 10 arrows in the target.</>,
            <>Week 4: {arrows[arrows.length - 1]} out of 10.</>,
            <>Improvement: {arrows[arrows.length - 1]} − {arrows[0]} = {better} more arrows.</>,
            <>A regular log and feedback from the coach show how you improve.</>,
          ]}
        />
        <Mistake>Playing games without learning the basic skills first. Skills and rules make a game safer and more enjoyable.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fair play, rules and officials',
    content: slide(
      <>
        <Rule>Every sport has rules and officials, such as an umpire or a referee. Fair play means following the rules, accepting decisions, respecting opponents and teammates, and not cheating. Learn the rules and the etiquette of a new sport before you play.</Rule>
        <Worked
          title="A decision you disagree with"
          steps={[
            <>The referee gives a free kick against your team.</>,
            <>You think it was unfair, but you accept the decision.</>,
            <>After the game the captain may ask the coach to discuss it politely.</>,
            <>Result: the game continues fairly, and respect is kept.</>,
          ]}
        />
        <Mistake>Arguing with the referee or breaking the rules to win. It spoils the game, and it can get you or your team disqualified.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safety in sport',
    content: slide(
      <>
        <Rule>Play safely: wear the right protective equipment, such as a helmet, a mouth guard or shin guards, and suitable shoes, warm up to prepare your body, use the correct technique, drink water, rest, and play in a safe area. Stop at once if you are injured. After a knock to the head, stop playing and get medical help if you feel dizzy, confused or have a headache.</Rule>
        <Worked
          title="A knock to the head"
          steps={[
            <>A player falls and hits her head during a game.</>,
            <>She feels dizzy and has a headache.</>,
            <>She stops playing at once, and the coach calls for medical help.</>,
            <>She does not return to play until a doctor says that she is well.</>,
          ]}
        />
        <Mistake>Playing on after a knock to the head, to avoid letting the team down. A head injury can be serious, so stop and get help.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between traditional and non-traditional sport? Give an example of each.</>,
          <>Put in order: tactics, basic skills, rules.</>,
          <>A learner hits 4 out of 10 arrows in week 1 and 7 out of 10 in week 4. How much has she improved?</>,
          <>What should a player do after a knock to the head if she feels dizzy?</>,
        ]}
        answers={[
          <>Traditional sports are widely played in your community or school, for example soccer. Non-traditional sports are less common there, for example archery.</>,
          <>Basic skills, then rules, then tactics.</>,
          <>7 − 4 = {better} more arrows out of 10.</>,
          <>Stop playing at once and get medical help.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a traditional sport?',
    options: ['A sport that nobody in your community has played', 'A well-known sport played in your community', 'A sport that is played by professional players', 'A sport that is played outside in the cold weather'],
    answer: 'A well-known sport played in your community',
    explanation: 'Traditional sports, such as soccer, netball and athletics, are widely played and organised in a community or school.',
  },
  {
    prompt: 'What is a non-traditional sport?',
    options: ['A sport that is less common in your community', 'A sport that is played by each school in the country', 'A sport that is not allowed to have any rules', 'A sport that you can play with a team and not alone'],
    answer: 'A sport that is less common in your community',
    explanation: 'Non-traditional sports, such as archery or orienteering, are less common in a particular community or school.',
  },
  {
    prompt: 'Which of these is a non-traditional sport at most schools?',
    options: ['Soccer', 'Netball', 'Athletics', 'Archery'],
    answer: 'Archery',
    explanation: 'Archery, ultimate frisbee and orienteering are examples of sports that are less common at most schools.',
  },
  {
    prompt: 'Why is it a good idea to try a non-traditional sport?',
    options: ['It means that you do not have to follow any rules', 'It is easier than the other sports for most people', 'It builds new skills and confidence', 'It is better than a traditional sport in many ways'],
    answer: 'It builds new skills and confidence',
    explanation: 'A new sport can build skills, fitness and confidence, and you can use these skills in other sports.',
  },
  {
    prompt: 'In which order should you learn a new sport?',
    options: ['Tactics, then rules, then basic skills', 'Basic skills, then rules, then tactics', 'Rules, then tactics, then basic skills', 'Tactics, then basic skills, then rules'],
    answer: 'Basic skills, then rules, then tactics',
    explanation: 'Start with the basic skills, then learn the rules and then the tactics such as positions and plans.',
  },
  {
    prompt: 'A learner hits 4 out of 10 arrows in week 1 and 7 out of 10 in week 4. By how many arrows did she improve?',
    options: ['3', '4', '7', '11'],
    answer: '3',
    explanation: '7 − 4 = 3 more arrows.',
  },
  {
    prompt: 'Why is a regular practice log useful?',
    options: ['It makes your performance improve by itself', 'It replaces the need for a coach', 'It decides which sport you must play', 'It shows how your performance improves'],
    answer: 'It shows how your performance improves',
    explanation: 'A practice log and feedback from a coach show how you improve and what to work on.',
  },
  {
    prompt: 'What does fair play mean?',
    options: ['Winning the game by any means that you can', 'Arguing with the referee until he changes a decision', 'Following the rules and respecting opponents', 'Leaving out the players who are weaker than the rest'],
    answer: 'Following the rules and respecting opponents',
    explanation: 'Fair play means following the rules, accepting decisions and respecting everyone in the game.',
  },
  {
    prompt: 'The referee gives a free kick against your team and you think it is unfair. What should you do?',
    options: ['Argue with the referee until he changes it', 'Accept it, then discuss it politely after', 'Walk off the field and stop playing for the day', 'Break the rules to make up for the decision'],
    answer: 'Accept it, then discuss it politely after',
    explanation: 'Accepting decisions keeps the game fair. You can discuss a decision politely afterwards.',
  },
  {
    prompt: 'What should you learn before you start to play a sport that is new to you?',
    options: ['The rules and the etiquette of the sport', 'Only the names of the players who are the best', 'How to avoid the umpire during the game', 'How to win without using any skill'],
    answer: 'The rules and the etiquette of the sport',
    explanation: 'Every sport has its own rules and etiquette, and knowing them makes the game safer and more enjoyable.',
  },
  {
    prompt: 'Which of these is protective equipment in sport?',
    options: ['A scoreboard', 'A whistle', 'A water bottle', 'A helmet'],
    answer: 'A helmet',
    explanation: 'Helmets, mouth guards and shin guards protect players from injury.',
  },
  {
    prompt: 'What is the purpose of a warm-up before a game?',
    options: ['To make the body tired before the game starts', 'To save time during the main part of the game', 'To prepare the body for the game', 'To decide which team will start with the ball'],
    answer: 'To prepare the body for the game',
    explanation: 'A warm-up prepares the muscles and joints, and it lowers the risk of injury.',
  },
  {
    prompt: 'A player hits her head and feels dizzy. What should she do?',
    options: ['Play on so that the team does not lose', 'Stop playing at once and get medical help', 'Take a short sip of water and return to the game', 'Ignore the feeling until the game is over'],
    answer: 'Stop playing at once and get medical help',
    explanation: 'A head injury can be serious. Stop at once and get help, and do not return until a doctor says that it is safe.',
  },
  {
    prompt: 'When may a player return to the game after a knock to the head?',
    options: ['Only when a doctor says that she is well', 'As soon as the headache feels a little better', 'When the coach says that the team needs her', 'After the next break in the game'],
    answer: 'Only when a doctor says that she is well',
    explanation: 'A player must not return until a doctor says that it is safe.',
  },
];

const PhysicalEducationTerm4 = () => (
  <CapsSubjectTopic
    title="Physical Education: Traditional and Non-traditional Sport"
    subtitle="Learning a new sport, fair play and playing safely"
    learnSteps={learnSteps}
    task="gr10-physical-education-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTerm4;
