import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { FlowDiagram } from '../../../../../components/diagrams/science/SciencePictures4';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Teamwork, communication and fair play',
    content: slide(
      <>
        <Rule>
          Good teamwork in a game means passing to a teammate in a better position. Good communication includes calling a teammate’s name before a pass. Fair play means following the rules and respecting others.
        </Rule>
        <Worked
          title="Play as a team"
          steps={[
            <>You have the ball and a teammate is in a better position.</>,
            <>Call a teammate’s name before the pass, so they are ready.</>,
            <>Pass to the teammate in the better position: team games work best when players share and make choices that help the whole team.</>,
            <>Follow the rules and respect others: that is fair play.</>,
          ]}
        />
        <Mistake>Keeping the ball to score yourself. Team games work best when you share and help the whole team.</Mistake>
      </>,
    ),
  },
  {
    title: 'A fitness circuit',
    content: slide(
      <>
        <Rule>A fitness circuit is a set of exercise stations done one after another. Warm up before vigorous exercise to prepare the body for movement safely, and cool down afterwards.</Rule>
        <FlowDiagram
          id="circuit"
          title="A fitness circuit"
          desc="Warm up, then three exercise stations one after another, then cool down."
          nodes={[
            { id: 'w', label: 'warm up', x: 28, y: 26, color: '#fcd34d' },
            { id: 's1', label: 'station 1', x: 80, y: 26, color: '#86efac' },
            { id: 's2', label: 'station 2', x: 132, y: 26, color: '#86efac' },
            { id: 's3', label: 'station 3', x: 132, y: 74, color: '#86efac' },
            { id: 'c', label: 'cool down', x: 80, y: 74, color: '#7dd3fc' },
          ]}
          edges={[
            { from: 'w', to: 's1', label: '' },
            { from: 's1', to: 's2', label: '' },
            { from: 's2', to: 's3', label: '' },
            { from: 's3', to: 'c', label: '' },
          ]}
        />
        <Worked
          title="Do a circuit"
          steps={[
            <>Warm up: prepare your muscles and increase your heartbeat.</>,
            <>Move through the stations one after another, taking turns at each different exercise.</>,
            <>Each station practises a different fitness skill.</>,
            <>Cool down: slow down and stretch safely.</>,
          ]}
        />
        <Mistake>Starting the circuit cold. A warm-up gets muscles and heart ready and helps reduce injury risk.</Mistake>
      </>,
    ),
  },
  {
    title: 'Coordination and health',
    content: slide(
      <>
        <Rule>
          Coordination improves when you control movement, timing and rhythm together, for example jumping rope with steady rhythm. Regular physical activity helps build fitness and gives the body more energy.
        </Rule>
        <Worked
          title="Practise coordination"
          steps={[
            <>Jump rope: turn the rope and jump at the same moment.</>,
            <>Keep a steady rhythm: control, timing and rhythm work together.</>,
            <>Practise regularly: it builds strength and stamina and gives the body more energy.</>,
            <>Activity also helps you feel good, and supports general well-being.</>,
          ]}
        />
        <Mistake>Thinking exercise only helps once. Regular activity builds fitness over time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safety and self-assessment',
    content: slide(
      <>
        <Rule>
          If you feel dizzy or sore during PE, tell the teacher and stop to recover safely. Self-assessment is thinking about how you participated and what to improve.
        </Rule>
        <Worked
          title="Stay safe and reflect"
          steps={[
            <>You feel dizzy. Stop and tell the teacher straight away.</>,
            <>Recover safely: drink water and rest.</>,
            <>After the lesson, think about how you participated: did you join in and try your best?</>,
            <>Decide what improved and what to practise next time.</>,
          ]}
        />
        <Mistake>Carrying on when you feel pain or dizziness. Report it straight away.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which action shows good teamwork and which shows good communication? What does fair play mean?</>,
          <>What is a fitness circuit? Why warm up before vigorous exercise?</>,
          <>Which activity improves coordination? In what way does exercising often keep you healthy?</>,
          <>What do you do if you feel dizzy or sore? What is self-assessment?</>,
        ]}
        answers={[
          <>Passing to a teammate in a better position. Calling a teammate’s name before a pass. Following the rules and respecting others.</>,
          <>A set of exercise stations done one after another. To prepare the body for movement safely.</>,
          <>Jumping rope with steady rhythm. It helps build fitness and gives the body more energy.</>,
          <>Tell the teacher and stop to recover safely. Thinking about how you participated and what to improve.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which action shows good teamwork in a game?',
    options: [
      'Passing to a teammate in a better position',
      'Keeping the ball and ignoring everyone',
      'Changing the rules to help yourself',
      'Pushing another player out of the way',
    ],
    answer: 'Passing to a teammate in a better position',
    explanation: 'Team games work best when players share, communicate, and make choices that help the whole team.',
  },
  {
    prompt: 'What does fair play mean?',
    options: [
      'Following the rules and respecting others',
      'Winning by arguing with the referee',
      'Only helping your best friend',
      'Stopping play whenever you are losing',
    ],
    answer: 'Following the rules and respecting others',
    explanation: 'Fair play means being honest, respectful, and safe during games and activities.',
  },
  {
    prompt: 'What is a fitness circuit?',
    options: [
      'A set of exercise stations done one after another',
      'A map of the school buildings',
      'A list of team names for a tournament',
      'A song played before a match',
    ],
    answer: 'A set of exercise stations done one after another',
    explanation: 'In a circuit, learners move through stations that practise different fitness skills.',
  },
  {
    prompt: 'Which activity is most likely to improve coordination?',
    options: [
      'Jumping rope with steady rhythm',
      'Sleeping through the lesson',
      'Leaving your shoes untied',
      'Sitting out every activity',
    ],
    answer: 'Jumping rope with steady rhythm',
    explanation: 'Coordination improves when learners control movement, timing, and rhythm together.',
  },
  {
    prompt: 'Why should you warm up before vigorous exercise?',
    options: [
      'To prepare the body for movement safely',
      'To make the lesson last longer',
      'To avoid following instructions',
      'To replace all exercise with talking',
    ],
    answer: 'To prepare the body for movement safely',
    explanation: 'A warm-up gets muscles and the heart ready for activity and helps reduce injury risk.',
  },
  {
    prompt: 'What should you do if you feel dizzy or sore during PE?',
    options: [
      'Tell the teacher and stop to recover safely',
      'Hide it and keep pushing through pain',
      'Push another learner instead',
      'Run faster without telling anyone',
    ],
    answer: 'Tell the teacher and stop to recover safely',
    explanation: 'Safety matters in PE, so learners should report pain or dizziness straight away.',
  },
  {
    prompt: 'How does regular physical activity help health?',
    options: [
      'It helps build fitness and gives the body more energy',
      'It removes the need for rest and water',
      'It means rules no longer matter',
      'It makes teamwork impossible',
    ],
    answer: 'It helps build fitness and gives the body more energy',
    explanation: 'Regular activity supports strength, stamina, and general well-being.',
  },
  {
    prompt: 'What is self-assessment after a PE lesson?',
    options: [
      'Thinking about how you participated and what to improve',
      'Choosing a new team name every minute',
      'Counting only how many learners were absent',
      'Forgetting everything that happened',
    ],
    answer: 'Thinking about how you participated and what to improve',
    explanation: 'Self-assessment helps learners notice progress and set useful goals.',
  },
  {
    prompt: 'Which action shows good communication in a team game?',
    options: [
      'Calling a teammate\'s name before a pass',
      'Turning your back on the team',
      'Refusing to listen to instructions',
      'Walking off the field without warning',
    ],
    answer: 'Calling a teammate\'s name before a pass',
    explanation: 'Clear communication helps teammates work together and make good decisions during play.',
  },
];

const PhysicalEducationT4 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Combining movement skills, fitness, and healthy participation"
    learnSteps={learnSteps}
    task="physical-education-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PhysicalEducationT4;
