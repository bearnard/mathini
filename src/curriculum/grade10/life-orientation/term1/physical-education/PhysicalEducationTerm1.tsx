import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub } from '../../../../../components/diagrams/lo/PswPictures';
import { SessionBar } from '../../../../../components/diagrams/lo/Lo4Pictures';
import { sessionMinutes, weeklyMinutes } from '../../../../../components/diagrams/lo/gr10Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// Numbers come from gr10Helpers (tested in gr10Helpers.test.ts).
const session = [{ label: 'Warm-up', minutes: 10, kind: 'warm' as const }, { label: 'Main activity', minutes: 30, kind: 'work' as const }, { label: 'Cool-down', minutes: 10, kind: 'cool' as const }];
const total = sessionMinutes(session);
const anele = weeklyMinutes(3, 30);
const target = weeklyMinutes(7, 60);

export const learnSteps: LearnStep[] = [
  {
    title: 'The parts of health-related fitness',
    content: slide(
      <>
        <Rule>Fitness has parts. Cardiovascular fitness is how well your heart and lungs supply oxygen during exercise. Muscular strength is the most force a muscle can produce. Muscular endurance is how long a muscle can keep working, or repeat an action. Flexibility is the range of movement at your joints.</Rule>
        <Hub
          centre="Fitness"
          spokes={['Cardiovascular fitness', 'Muscular strength', 'Muscular endurance', 'Flexibility']}
          aria="A hub with Fitness in the centre and four spokes: cardiovascular fitness, muscular strength, muscular endurance and flexibility."
        />
        <Worked
          title="Which part does each activity train?"
          steps={[
            <>Running steadily for 20 minutes: cardiovascular fitness.</>,
            <>Lifting the heaviest weight you can once: muscular strength.</>,
            <>Doing push-ups until your arms are tired: muscular endurance.</>,
            <>Reaching forward to touch your toes: flexibility.</>,
          ]}
        />
        <Mistake>Thinking that strength and endurance are the same. Strength is the force of one big effort. Endurance is how long, or how many times, you can keep going.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why exercise programmes are worth it',
    content: slide(
      <>
        <Rule>A regular exercise programme strengthens your heart, muscles and bones, and it helps your mind too. Physical and mental health are linked: exercise can lower stress, lift your mood, help you sleep and help you concentrate.</Rule>
        <Worked
          title="How much activity is enough?"
          steps={[
            <>The World Health Organization advises children and teenagers to be active for an average of at least 60 minutes a day.</>,
            <>Over a week this is 7 × 60 = {target} minutes.</>,
            <>Anele walks briskly for 30 minutes on 3 days: 3 × 30 = {anele} minutes.</>,
            <>She is below the target, so she adds more active time on the other days.</>,
          ]}
        />
        <Mistake>Thinking that exercise only changes your body. It also helps your mood, your sleep and your ability to concentrate on your schoolwork.</Mistake>
      </>,
    ),
  },
  {
    title: 'Warm up, work, cool down',
    content: slide(
      <>
        <Rule>A safe session has three parts. The warm-up raises your heart rate and loosens your joints. The main activity trains your fitness. The cool-down helps your body recover: your heart rate comes down slowly and your muscles are stretched.</Rule>
        <SessionBar
          parts={session}
          aria={`A ${total}-minute session in three parts: a 10-minute warm-up, a 30-minute main activity and a 10-minute cool-down.`}
        />
        <Worked
          title="Planning a session"
          steps={[
            <>Warm-up: 10 minutes of jogging on the spot and arm circles.</>,
            <>Main activity: 30 minutes of a fitness circuit.</>,
            <>Cool-down: 10 minutes of walking and stretching.</>,
            <>The whole session: 10 + 30 + 10 = {total} minutes.</>,
          ]}
        />
        <Mistake>Skipping the warm-up to save time. Cold muscles and stiff joints are more likely to be injured.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safety in fitness exercises',
    content: slide(
      <>
        <Rule>Exercise safely: use the correct technique, wear suitable clothes and shoes, drink water, use a safe space, build up slowly, rest between hard sessions, and stop at once if you feel sharp pain, dizziness or chest pain.</Rule>
        <Worked
          title="A learner feels dizzy during a run"
          steps={[
            <>She stops running straight away.</>,
            <>She sits down in the shade and sips water.</>,
            <>She tells the teacher what happened.</>,
            <>She does not start again until she feels well, and she sees a doctor if it happens again.</>,
          ]}
        />
        <Mistake>Believing &quot;no pain, no gain&quot;. Tired muscles are normal, but sharp pain is a warning that something is wrong. Stop and get help.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the four parts of health-related fitness that you must know.</>,
          <>Give two ways in which exercise helps your mental health.</>,
          <>A session has a 10-minute warm-up, a 30-minute main activity and a 10-minute cool-down. How long is the session?</>,
          <>What should you do if you feel sharp pain or dizziness during exercise?</>,
        ]}
        answers={[
          <>Cardiovascular fitness, muscular strength, muscular endurance and flexibility.</>,
          <>For example it lowers stress and it lifts your mood. It can also help you sleep and concentrate.</>,
          <>{total} minutes (10 + 30 + 10).</>,
          <>Stop at once, rest, drink water and tell a teacher or adult.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is cardiovascular fitness?',
    options: ['How much weight a person can lift in one big effort', 'How well the heart and lungs supply oxygen', 'How far the joints of a person can move in a stretch', 'How long a person can hold a muscle in one position'],
    answer: 'How well the heart and lungs supply oxygen',
    explanation: 'Cardiovascular fitness is the ability of the heart and lungs to supply oxygen to the muscles during exercise.',
  },
  {
    prompt: 'What is muscular strength?',
    options: ['The most force a muscle can produce in one effort', 'The ability to keep a muscle working for a long time', 'The ability of the heart and lungs to supply oxygen', 'The range of movement that a joint has in a stretch'],
    answer: 'The most force a muscle can produce in one effort',
    explanation: 'Muscular strength is the greatest force that a muscle can produce in a single effort.',
  },
  {
    prompt: 'What is muscular endurance?',
    options: ['The greatest force that a muscle can produce at once', 'The ability of the joints to move through a wide range', 'The speed with which a person can start to run', 'How long a muscle can keep working or repeat an action'],
    answer: 'How long a muscle can keep working or repeat an action',
    explanation: 'Muscular endurance is the ability of a muscle to keep working, or to repeat an action, without getting tired.',
  },
  {
    prompt: 'What is flexibility?',
    options: ['The speed at which a person is able to run a short distance', 'The amount of oxygen that the lungs can take in at a time', 'The range of movement that a joint has', 'The force that the muscles can produce in one lift'],
    answer: 'The range of movement that a joint has',
    explanation: 'Flexibility is how far your joints and muscles can move, and stretching improves it.',
  },
  {
    prompt: 'Running steadily for 20 minutes mainly trains:',
    options: ['Flexibility of the hips', 'Cardiovascular fitness', 'Muscular strength in the arms', 'The reaction time of the hands'],
    answer: 'Cardiovascular fitness',
    explanation: 'Steady running makes the heart and lungs work, so it trains cardiovascular fitness.',
  },
  {
    prompt: 'Doing as many push-ups as you can until your arms are tired mainly trains:',
    options: ['Muscular endurance', 'Cardiovascular fitness', 'Flexibility', 'Balance'],
    answer: 'Muscular endurance',
    explanation: 'Repeating an action until the muscles tire trains muscular endurance.',
  },
  {
    prompt: 'Reaching forward to touch your toes is a test of:',
    options: ['Muscular strength', 'Cardiovascular fitness', 'Muscular endurance', 'Flexibility'],
    answer: 'Flexibility',
    explanation: 'Touching your toes shows how far your joints and muscles can stretch, which is flexibility.',
  },
  {
    prompt: 'Which statement about exercise and mental health is correct?',
    options: ['Exercise has no effect on how you feel or think', 'Exercise makes it harder to sleep and to concentrate', 'Exercise can lower stress and lift your mood', 'Exercise only changes the body and not the mind'],
    answer: 'Exercise can lower stress and lift your mood',
    explanation: 'Physical and mental health are linked. Exercise can lower stress, lift your mood, help sleep and improve concentration.',
  },
  {
    prompt: 'The World Health Organization advises children and teenagers to be active for an average of at least:',
    options: ['10 minutes a day', '60 minutes a day', '30 minutes a week', '3 hours a day'],
    answer: '60 minutes a day',
    explanation: 'The WHO advises an average of at least 60 minutes of moderate to vigorous physical activity a day for ages 5 to 17.',
  },
  {
    prompt: 'Anele walks briskly for 30 minutes on 3 days of the week. How many minutes is this in a week?',
    options: ['90 minutes', '33 minutes', '60 minutes', '210 minutes'],
    answer: '90 minutes',
    explanation: '3 days × 30 minutes = 90 minutes.',
  },
  {
    prompt: 'What is the purpose of a warm-up?',
    options: ['To make sure that the body is tired before the main activity', 'To lower the heart rate slowly after the main activity', 'To replace the water that was lost during exercise', 'To raise the heart rate and loosen the joints'],
    answer: 'To raise the heart rate and loosen the joints',
    explanation: 'A warm-up prepares the body for exercise and lowers the risk of injury.',
  },
  {
    prompt: 'What is the purpose of a cool-down?',
    options: ['To raise the heart rate quickly before a hard activity', 'To test how much weight a person is able to lift', 'To help the body recover slowly after exercise', 'To make sure that the main activity is as hard as possible'],
    answer: 'To help the body recover slowly after exercise',
    explanation: 'A cool-down helps the body to recover after exercise.',
  },
  {
    prompt: 'A session has a 10-minute warm-up, a 30-minute main activity and a 10-minute cool-down. How long is the whole session?',
    options: ['30 minutes', '50 minutes', '40 minutes', '60 minutes'],
    answer: '50 minutes',
    explanation: '10 + 30 + 10 = 50 minutes.',
  },
  {
    prompt: 'A learner feels sharp pain in her knee while she is running. What should she do?',
    options: ['Stop at once and tell a teacher', 'Run faster to push through the pain', 'Keep going because pain means that she is getting fitter', 'Ignore the pain and add some more hard exercise'],
    answer: 'Stop at once and tell a teacher',
    explanation: 'Sharp pain is a warning sign. Stop, rest and get help to avoid a more serious injury.',
  },
];

const PhysicalEducationTerm1 = () => (
  <CapsSubjectTopic
    title="Physical Education: Fitness and Safety"
    subtitle="The parts of fitness, the value of exercise programmes and safe participation"
    learnSteps={learnSteps}
    task="gr10-physical-education-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTerm1;
