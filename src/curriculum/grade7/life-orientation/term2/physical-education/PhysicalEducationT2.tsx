import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PlanBar, Zones } from '../../../../../components/diagrams/lo/PswPictures';
import { PassingSpace } from '../../../../../components/diagrams/lo/PePictures';
import { planSegments } from '../../../../../components/diagrams/lo/pswHelpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const intervalParts = [
  { label: 'Run', minutes: 2, kind: 'study' as const },
  { label: 'Walk', minutes: 1, kind: 'break' as const },
  { label: 'Run', minutes: 2, kind: 'study' as const },
  { label: 'Walk', minutes: 1, kind: 'break' as const },
];
const intervalTotal = planSegments(intervalParts).total;

export const learnSteps: LearnStep[] = [
  {
    title: 'Passing and receiving',
    content: slide(
      <>
        <Rule>In a small game, pass to a teammate in open space. To receive well, watch the ball and control it softly.</Rule>
        <PassingSpace aria="A top view of a pitch. You have the ball. A solid arrow goes to a teammate in open space. A dashed arrow to a covered teammate is marked wrong because a defender stands next to them." />
        <Worked
          title="Choose the pass"
          steps={[<>Look up: who is in open space?</>, <>Pass to that teammate, not to the one with a defender beside them.</>, <>The receiver watches the ball and controls it softly.</>]}
        />
        <Mistake>Passing to a covered teammate, or hitting the ball hard at someone who is not ready. Pass into space and receive with a soft touch.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stamina and interval running',
    content: slide(
      <>
        <Rule>Stamina is the ability to keep going. Regular aerobic training, such as interval running, helps your body sustain effort.</Rule>
        <PlanBar parts={intervalParts} aria={`One interval set as a bar: run ${intervalParts[0].minutes} minutes, walk ${intervalParts[1].minutes}, run ${intervalParts[2].minutes}, walk ${intervalParts[3].minutes}, ${intervalTotal} minutes in total.`} />
        <Worked
          title="One interval set"
          steps={[<>Run for {intervalParts[0].minutes} minutes.</>, <>Walk for {intervalParts[1].minutes} minute to recover.</>, <>Repeat the run and the walk once more.</>, <>The set takes {intervalTotal} minutes. Practise regularly.</>]}
        />
        <Mistake>Expecting your stamina to improve after one session. Stamina grows with regular practice over weeks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rules and fair competition',
    content: slide(
      <>
        <Rule>Game rules keep play safe and organised. Fair competition means playing by the rules and respecting opponents. An official applies the rules in the same way to both teams.</Rule>
        <Zones zones={[{ title: 'Player', line: 'Plays by the rules' }, { title: 'Opponent', line: 'Is treated with respect' }, { title: 'Official', line: 'Same rules for both teams' }]} aria="Three roles in a fair game: the player plays by the rules, the opponent is treated with respect, the official applies the same rules to both teams." />
        <Worked
          title="You officiate a small game"
          steps={[<>A player from each team pushes. </>, <>Apply the same rule to both.</>, <>Explain the call calmly.</>]}
        />
        <Mistake>Giving your own team the benefit of the doubt, or ignoring a rule because your team is losing. That is not fair.</Mistake>
      </>,
    ),
  },
  {
    title: 'Leadership and discipline',
    content: slide(
      <>
        <Rule>A leader encourages teammates and organises positions. Discipline means following instructions even when you are tired.</Rule>
        <Worked
          title="Ayanda captains a small game"
          steps={[<>She places each player in a position.</>, <>After a mistake she says, “Good try, next one.”</>, <>Late in the game she is tired but still follows the teacher's instructions.</>]}
        />
        <Mistake>Thinking a leader is the one who shouts the most, or that discipline is only needed when the teacher is watching. Leaders encourage; discipline continues all the time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is the best passing choice in a small game, and how do you receive well?" answer="Pass to a teammate in open space. Watch the ball and control it softly." />
        <Check question="Which activity improves stamina?" answer="Regular interval running practice (aerobic training)." />
        <Check question="What does fair competition mean, and how should an official apply the rules?" answer="Playing by the rules and respecting opponents. An official applies the rules in the same way to both teams." />
        <Check question="Name one way to show leadership and one way to show discipline." answer="Leadership: encourage teammates and organise positions. Discipline: follow instructions even when tired." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the best passing choice in a small game?',
    options: [
      'Pass to a teammate in open space',
      'Kick blindly without looking',
      'Hold the ball until blocked',
      'Ignore all teammate calls',
    ],
    answer: 'Pass to a teammate in open space',
    explanation: 'Passing into space helps maintain possession and attack safely.',
  },
  {
    prompt: 'Which action shows good receiving technique?',
    options: ['Watch the ball and control it softly', 'Turn away before contact', 'Close eyes and hope for control', 'Hit the ball away immediately'],
    answer: 'Watch the ball and control it softly',
    explanation: 'Good receiving uses focus, body position, and controlled touch.',
  },
  {
    prompt: 'Which activity most improves stamina?',
    options: ['Regular interval running practice', 'Sitting out every lesson', 'One sprint then no activity', 'Skipping all warm-ups'],
    answer: 'Regular interval running practice',
    explanation: 'Consistent aerobic training helps the body sustain effort.',
  },
  {
    prompt: 'What does fair competition mean?',
    options: ['Playing by the rules and respecting opponents', 'Breaking the rules in order to win quickly', 'Arguing about every decision that is made', 'Passing only to your close friends'],
    answer: 'Playing by the rules and respecting opponents',
    explanation: 'Fair competition includes honesty, respect, and safety.',
  },
  {
    prompt: 'Which behaviour shows leadership in PE?',
    options: ['Encouraging teammates and organising positions', 'Blaming others for every mistake', 'Ignoring team strategy completely', 'Refusing to communicate'],
    answer: 'Encouraging teammates and organising positions',
    explanation: 'Leadership helps teams stay focused and cooperative.',
  },
  {
    prompt: 'Why are game rules important?',
    options: [
      'They keep play safe and organised',
      'They remove the need for teamwork',
      'They make practice impossible',
      'They allow unfair advantages',
    ],
    answer: 'They keep play safe and organised',
    explanation: 'Rules create fair conditions and reduce injury risk.',
  },
  {
    prompt: 'What should a learner do when officiating a match?',
    options: ['Apply the rules in the same way to both teams', 'Support only one of the two teams', 'Ignore the clear fouls that are made', 'Change the rules while play is going on'],
    answer: 'Apply the rules in the same way to both teams',
    explanation: 'Consistent officiating builds trust and fairness.',
  },
  {
    prompt: 'Which action best shows discipline?',
    options: [
      'Following instructions even when tired',
      'Leaving the field without permission',
      'Arguing after every whistle',
      'Skipping drills to chat',
    ],
    answer: 'Following instructions even when tired',
    explanation: 'Discipline supports learning, safety, and team success.',
  },
];

const PhysicalEducationT2 = () => (
  <CapsSubjectTopic
    title="Physical Education"
    subtitle="Sport skills, stamina, rules, leadership, and fair competition"
    learnSteps={learnSteps}
    task="gr7-physical-education-t2"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PhysicalEducationT2;
