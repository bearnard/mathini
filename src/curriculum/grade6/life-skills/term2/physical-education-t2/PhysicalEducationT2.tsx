import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { InvasionGame } from '../../../../../components/diagrams/lifeskills/LifeSkillsPictures';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Invasion games: attack into space',
    content: slide(
      <>
        <Rule>
          In an invasion game the main aim is to move into space and try to score. Moving into an open space makes it easier for a teammate to receive a pass.
        </Rule>
        <InvasionGame />
        <Worked
          title="Read the picture"
          steps={[
            <>The player with the ball has a defender in the way.</>,
            <>A teammate moves into open space, away from the defender.</>,
            <>The ball carrier passes to the open teammate: pass to an open teammate.</>,
            <>Now the team attacks the space towards the goal and tries to score.</>,
          ]}
        />
        <Mistake>Standing still next to a defender and waiting for the ball. Move into open space so a teammate can find you.</Mistake>
      </>,
    ),
  },
  {
    title: 'Attack and defend',
    content: slide(
      <>
        <Rule>
          Good defending is staying between the attacker and the goal, which protects the scoring area. If a defender is blocking you, the best team tactic is usually to pass to an open teammate.
        </Rule>
        <Worked
          title="Choose a tactic"
          steps={[
            <>You are attacking and a defender blocks you.</>,
            <>Do not force a risky move. Look for an open teammate.</>,
            <>Pass to the open teammate: good tactics use teamwork and space.</>,
            <>When you defend, stay between the attacker and the goal.</>,
          ]}
        />
        <Mistake>Forcing a run through two defenders. Good tactics use teamwork and space, not a risky move.</Mistake>
      </>,
    ),
  },
  {
    title: 'Agility, drills and small-sided games',
    content: slide(
      <>
        <Rule>
          Agility is changing direction quickly with control. We practise catching and passing drills many times to improve skill and fitness. A small-sided game has fewer players on each team.
        </Rule>
        <Worked
          title="Practise and play"
          steps={[
            <>Agility drill: run, stop and change direction quickly, staying balanced.</>,
            <>Repeat the catching and passing drill many times: it builds control, confidence and fitness.</>,
            <>Play a small-sided game: fewer players on each team, so each learner gets more chances to move, pass and make decisions.</>,
          ]}
        />
        <Mistake>Thinking agility only means being fast. Agility is changing direction quickly with control, while staying balanced.</Mistake>
      </>,
    ),
  },
  {
    title: 'Teamwork and fair play',
    content: slide(
      <>
        <Rule>
          Teamwork in a small-sided game means communicating and supporting others. Fair play means being honest and respecting the rules, such as admitting the ball went out off your hand.
        </Rule>
        <Worked
          title="Show fair play"
          steps={[
            <>You touch the ball last and it goes out. Nobody saw.</>,
            <>Admit it: “It went out off my hand.” That is being honest.</>,
            <>Call clearly to your teammates and support them. Communicating improves passing and positioning.</>,
            <>Follow the rules and respect everyone.</>,
          ]}
        />
        <Mistake>Hiding a mistake to win a point. Fair play means being honest and respecting the rules of the game.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What are you trying to do in an invasion game, and what can you do to make a pass to you easier?</li>
            <li>What is good defending, and what should you do if a defender blocks you?</li>
            <li>Explain agility, say why drills are repeated, and describe a game with fewer players on each team.</li>
            <li>How do players show teamwork in a game with fewer players on each side, and what is an example of fair play?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Move into space and try to score. Moving into an open space.</li>
            <li>Staying between the attacker and the goal. Pass to an open teammate.</li>
            <li>Changing direction quickly with control. To improve skill and fitness. A game with fewer players on each team.</li>
            <li>Communicating and supporting others. Admitting the ball went out off your hand.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is the main aim in an invasion game?',
    options: ['Move into space and try to score', 'Stand still and wait', 'Keep the ball only for yourself', 'Ignore the other team completely'],
    answer: 'Move into space and try to score',
    explanation: 'Invasion games involve attacking space while trying to score against opponents.',
  },
  {
    prompt: 'Which action helps a teammate receive a pass more easily?',
    options: ['Moving into an open space', 'Turning your back on the ball', 'Standing behind an opponent', 'Closing your eyes while waiting'],
    answer: 'Moving into an open space',
    explanation: 'Getting free in open space makes it easier for teammates to pass to you.',
  },
  {
    prompt: 'What does agility mean in Physical Education?',
    options: ['Changing direction quickly with control', 'Throwing the ball as far as possible', 'Memorising sport scores', 'Sitting still for a long time'],
    answer: 'Changing direction quickly with control',
    explanation: 'Agility is the ability to move and change direction quickly while staying balanced.',
  },
  {
    prompt: 'Which behaviour is an example of fair play?',
    options: ['Admitting the ball went out off your hand', 'Arguing about every rule', 'Tripping an opponent on purpose', 'Refusing to share the ball'],
    answer: 'Admitting the ball went out off your hand',
    explanation: 'Fair play means being honest and respecting the rules of the game.',
  },
  {
    prompt: 'Why do learners practise catching and passing drills many times?',
    options: ['To improve skill and fitness', 'To avoid moving in games', 'To make the game slower', 'To stop working with teammates'],
    answer: 'To improve skill and fitness',
    explanation: 'Repeated drills build control, confidence, and physical fitness.',
  },
  {
    prompt: 'If a defender is blocking you, what is usually the best team tactic?',
    options: ['Pass to an open teammate', 'Throw the ball away', 'Stop playing completely', 'Run into the defender'],
    answer: 'Pass to an open teammate',
    explanation: 'Good tactics use teamwork and space instead of forcing a risky move.',
  },
  {
    prompt: 'What does teamwork look like in a small-sided game?',
    options: ['Communicating and supporting others', 'Ignoring your team', 'Keeping every decision secret', 'Blaming others for every mistake'],
    answer: 'Communicating and supporting others',
    explanation: 'Teamwork improves passing, positioning, and confidence during games.',
  },
  {
    prompt: 'Which choice shows good defending?',
    options: ['Staying between the attacker and the goal', 'Running away from play', 'Watching only the crowd', 'Standing outside the game area'],
    answer: 'Staying between the attacker and the goal',
    explanation: 'A defender protects the scoring area by positioning well.',
  },
  {
    prompt: 'What is a small-sided game?',
    options: ['A game with fewer players on each team', 'A game played without any rules', 'A game where no one passes the ball', 'A game that lasts only one minute'],
    answer: 'A game with fewer players on each team',
    explanation: 'Small-sided games give each learner more chances to move, pass, and make decisions.',
  },
];

const PhysicalEducationT2 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Invasion games, agility drills, teamwork, and fair play"
    learnSteps={learnSteps}
    task="physical-education-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PhysicalEducationT2;
