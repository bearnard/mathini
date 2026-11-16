import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, Zones } from '../../../../../components/diagrams/lo/PswPictures';
import { ProgressBars } from '../../../../../components/diagrams/lo/Lo4Pictures';
import { gain } from '../../../../../components/diagrams/lo/gr10Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The catch log is a worked example. The improvement comes from gr10Helpers (tested in gr10Helpers.test.ts).
const catches = [4, 5, 7, 8];
const better = gain(catches[0], catches[catches.length - 1]);

export const learnSteps: LearnStep[] = [
  {
    title: 'Playground, community and indigenous games',
    content: slide(
      <>
        <Rule>Games are a fun way to build movement skills and fitness. Playground games, community games and indigenous games each train different skills, and you can take part in all three.</Rule>
        <Zones
          zones={[
            { title: 'Playground games', line: 'Tag, skipping, hopscotch' },
            { title: 'Community games', line: 'Netball, soccer, volleyball' },
            { title: 'Indigenous games', line: 'Jukskei, diketo, morabaraba' },
          ]}
          aria="Three kinds of games with examples. Playground games: tag, skipping and hopscotch. Community games: netball, soccer and volleyball. Indigenous games: jukskei, diketo and morabaraba."
        />
        <Worked
          title="What does each game train?"
          steps={[
            <>Skipping: coordination and cardiovascular fitness.</>,
            <>Tag: speed, agility and quick reactions.</>,
            <>Hopscotch: balance and coordination.</>,
            <>Jukskei, where a pin is thrown at a target: aim and accuracy.</>,
          ]}
        />
        <Mistake>Thinking that only team sports count as real exercise. Traditional and playground games also build fitness and skills, and they are open to everyone.</Mistake>
      </>,
    ),
  },
  {
    title: 'Movement skills and teamwork',
    content: slide(
      <>
        <Rule>Games develop movement skills such as coordination, balance, agility, and throwing and catching. They also develop teamwork: you communicate, share roles and support your team mates.</Rule>
        <Hub
          centre="Movement skills"
          spokes={['Coordination', 'Balance', 'Agility', 'Throwing and catching', 'Teamwork']}
          aria="A hub with Movement skills in the centre and five spokes: coordination, balance, agility, throwing and catching, and teamwork."
        />
        <Worked
          title="Practising throwing and catching"
          steps={[
            <>Start with a short throw to a partner and count the catches out of 10.</>,
            <>Add steps and a moving partner, then a target.</>,
            <>Week 1: {catches[0]} out of 10. Week 4: {catches[catches.length - 1]} out of 10.</>,
            <>Improvement: {catches[catches.length - 1]} − {catches[0]} = {better} more catches.</>,
          ]}
        />
        <Mistake>Expecting to be perfect at once. Skills grow with regular practice, so keep a record and watch it improve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Performance, fair play and inclusion',
    content: slide(
      <>
        <Rule>Movement performance is how well you carry out a skill. Record it, get feedback and practise. Fair play means following the rules, respecting opponents and accepting decisions. Inclusion means adapting a game so that everyone can take part.</Rule>
        <ProgressBars
          labels={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
          values={catches}
          max={10}
          title="Catches out of 10"
          aria={`Catches out of 10 over four weeks: ${catches.join(', ')}.`}
        />
        <Worked
          title="Fair play in a game"
          steps={[
            <>The umpire gives a decision that your team does not like.</>,
            <>You accept it and carry on playing by the rules.</>,
            <>After the game you shake hands with the other team.</>,
            <>To include a learner with a leg injury, you change her role, so she can still play.</>,
          ]}
        />
        <Mistake>Believing that winning is all that matters. Playing fairly and including others is part of good performance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safety in games',
    content: slide(
      <>
        <Rule>Before and during games, check the playing area, wear suitable clothes and shoes, warm up, use safe equipment, follow the rules, drink water and protect yourself from the sun. Stop at once if someone is hurt.</Rule>
        <Worked
          title="Before a game on the school field"
          steps={[
            <>Walk the field and remove glass, stones and sharp objects.</>,
            <>Check that the equipment is not broken.</>,
            <>Warm up, wear a hat and drink water before, during and after the game.</>,
            <>If a player is hurt, stop the game and tell the teacher.</>,
          ]}
        />
        <Mistake>Waiting until you feel very thirsty to drink on a hot day. You lose water when you sweat, so drink regularly to replace it, and rest in the shade.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give one example each of a playground game, a community game and an indigenous game.</>,
          <>Name two movement skills that games develop.</>,
          <>A learner catches 4 out of 10 in week 1 and 8 out of 10 in week 4. How much has she improved?</>,
          <>Name two safety checks to make before a game on the school field.</>,
        ]}
        answers={[
          <>For example tag, netball and jukskei.</>,
          <>For example coordination, balance, agility, or throwing and catching.</>,
          <>8 − 4 = 4 more catches out of 10.</>,
          <>For example remove glass and stones from the field, and check that the equipment is not broken.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which of these is a playground game?',
    options: ['Basketball', 'Hopscotch', 'Rugby', 'Cricket'],
    answer: 'Hopscotch',
    explanation: 'Tag, skipping and hopscotch are playground games.',
  },
  {
    prompt: 'Which of these is a community game that is played in a park or a hall?',
    options: ['Netball', 'Skipping', 'Hopscotch', 'Hide and seek'],
    answer: 'Netball',
    explanation: 'Netball, soccer and volleyball are community games that are often played in a park or a hall.',
  },
  {
    prompt: 'Which of these is an indigenous South African game?',
    options: ['Basketball', 'Ice hockey', 'Baseball', 'Jukskei'],
    answer: 'Jukskei',
    explanation: 'Jukskei, diketo and morabaraba are traditional South African games.',
  },
  {
    prompt: 'Which skill does skipping train most?',
    options: ['Reading ability', 'Aim and accuracy', 'Coordination', 'Strength in the shoulder'],
    answer: 'Coordination',
    explanation: 'Skipping trains coordination and cardiovascular fitness.',
  },
  {
    prompt: 'Which skills does the game of tag train most?',
    options: ['Flexibility and a strong grip', 'Speed and quick reactions', 'Memory and reading skill', 'Aim and accuracy with a throw'],
    answer: 'Speed and quick reactions',
    explanation: 'Chasing and dodging train speed, agility and quick reactions.',
  },
  {
    prompt: 'In jukskei a player throws a pin at a target. Which skill does this train?',
    options: ['Aim and accuracy', 'Balance on one foot', 'Speed over a long distance', 'Flexibility of the spine'],
    answer: 'Aim and accuracy',
    explanation: 'Throwing at a target trains aim and accuracy.',
  },
  {
    prompt: 'Which of these is a movement skill?',
    options: ['Reading a map', 'Adding up a column of numbers', 'Writing a neat summary', 'Throwing and catching'],
    answer: 'Throwing and catching',
    explanation: 'Coordination, balance, agility, and throwing and catching are movement skills.',
  },
  {
    prompt: 'What does teamwork in a game involve?',
    options: ['Taking the ball and playing on your own', 'Blaming team mates when the team makes a mistake', 'Communicate, share roles and support team mates', 'Choosing the players who are the best friends of the captain'],
    answer: 'Communicate, share roles and support team mates',
    explanation: 'In a team you communicate, share roles and support one another.',
  },
  {
    prompt: 'A learner catches 4 out of 10 in week 1 and 8 out of 10 in week 4. By how many catches did she improve?',
    options: ['2', '4', '6', '12'],
    answer: '4',
    explanation: '8 − 4 = 4 more catches out of 10.',
  },
  {
    prompt: 'What does fair play mean?',
    options: ['Following the rules and respecting opponents', 'Winning the game by any means that you can', 'Arguing with the umpire until he changes his mind', 'Leaving out the players who are not good at the game'],
    answer: 'Following the rules and respecting opponents',
    explanation: 'Fair play means following the rules, respecting opponents and accepting decisions.',
  },
  {
    prompt: 'What does it mean to include a learner who has a leg injury in a game?',
    options: ['Ask her to sit and watch the game from the side', 'Let her play the same role without any change', 'Cancel the game until her leg has healed', 'Adapt the game so that she can take part'],
    answer: 'Adapt the game so that she can take part',
    explanation: 'Inclusion means adapting the game so that everyone can take part.',
  },
  {
    prompt: 'Which safety check should you make first before a game on the school field?',
    options: ['Decide which team will be the winning team', 'Choose the best time to take a break', 'Remove glass and sharp objects from the field', 'Count how many spectators have come to watch the game'],
    answer: 'Remove glass and sharp objects from the field',
    explanation: 'Check the playing area for hazards before you start.',
  },
  {
    prompt: 'Why should you drink water before, during and after a game on a hot day?',
    options: ['To make the ball bounce higher during the game', 'To replace the water that you lose when you sweat', 'To get a better mark for the Physical Education Task', 'To stop the game from lasting too long'],
    answer: 'To replace the water that you lose when you sweat',
    explanation: 'You lose water when you sweat. Drinking regularly helps you to avoid heat illness.',
  },
  {
    prompt: 'A player is hurt during a game. What should you do?',
    options: ['Stop the game and tell the teacher', 'Carry on playing so that the match is not spoiled', 'Move the player to the side and then restart the game', 'Ask the player to walk it off without any help'],
    answer: 'Stop the game and tell the teacher',
    explanation: 'Stop at once and get help. Do not leave an injured player without help.',
  },
];

const PhysicalEducationTerm2 = () => (
  <CapsSubjectTopic
    title="Physical Education: Games and Safety"
    subtitle="Playground, community and indigenous games, movement skills, fair play and safety"
    learnSteps={learnSteps}
    task="gr10-physical-education-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTerm2;
